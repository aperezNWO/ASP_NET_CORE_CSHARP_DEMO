using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using mcsd.Library.DataAccess.Entity;

namespace mcsd.Library.DataAccess
{
    public class LogModel
    {
        #region "Enums"
        public enum LogType
        {
            Info = 1
            , Debug = 2
            , Error = 3
        }

        #endregion

        #region "Campos"
        private static string _constring = @"";/* System.Configuration.ConfigurationManager.ConnectionStrings["defaultConnection"].ConnectionString;*/
        #endregion

        #region "Constructor"
        public LogModel(string _ConnectionString)
        {
            _constring = _ConnectionString;
        }
        #endregion

        #region "Metodos"

        #region "SELECT"
        //
        public static string SelectLog(LogType logType)
        {
            return string.Format(@" SELECT 
                       [ID_column]
                      ,[PageName]
                      ,[AccessDate]
                      ,[IpValue]
                 FROM 
                       [dbo].[accessLogs] 
                 WHERE
                       [LogType] = {0}
                 order by 
                       [ID_column] desc", (uint)logType);
        }
        //
        public static string SelectLogSTAT()
        {
            return string.Format(@" 
                        SELECT 
                              AL.PAGENAME PAGE_NAME
                            , COUNT(*)    IP_VALUE
                        FROM 
                            ACCESSLOGS  AL
                        WHERE 
                            AL.LOGTYPE = 1
                        AND
                            (AL.PAGENAME LIKE '%DEMO%'
                        and
                            AL.PAGENAME LIKE '%PAGE%')
                        AND
                            AL.PAGENAME NOT LIKE '%ERROR%'
                        AND 
                           AL.PAGENAME  NOT LIKE '%PAGE_DEMO_INDEX%'
                        GROUP BY 
                            AL.PAGENAME 
                        ORDER BY  
                            2");
        }
        //
        public List<AccessLogEntity> GetAccessLog()
        {
            //
            List<AccessLogEntity> listLog = new List<AccessLogEntity>();
            //
            using (var connection = new SqlConnection(_constring))
            {
                //
                connection.Open();
                //
                string tsql = SelectLog(LogType.Info);
                //
                using (var command = new SqlCommand(tsql, connection))
                {
                    //
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        //
                        while (reader.Read())
                        {
                            //
                            int id_Column              = Convert.ToInt32(reader["ID_Column"]);
                            string pageName            = (string)reader["PageName"];
                            System.DateTime accessDate = (DateTime)reader["AccessDate"];
                            string ipValue             = (string)reader["IPValue"];
                            //
                            AccessLogEntity Obj        = new AccessLogEntity();
                            //
                            Obj.Id_Column              = id_Column;
                            Obj.PageName               = pageName;
                            Obj.AccessDate             = accessDate;
                            Obj.IPValue                = ipValue;
                            //
                            listLog.Add(Obj);
                        }
                    }
                }
            }
            //
            return listLog;
        }
        //
        public DataTable ListadoLogDataTable()
        {
            //
            string tsql = SelectLog(LogType.Info);
            //
            DataTable maestroListado = new DataTable();
            //
            try
            {
                //
                using (var connection = new SqlConnection(_constring))
                {
                    using (var command = new SqlCommand(tsql, connection))
                    {
                        SqlDataAdapter adapter = new SqlDataAdapter(command);
                        adapter.Fill(maestroListado);
                    }
                }
            }
            catch 
            {
                throw;
            }
            //
            return maestroListado;
        }
        //
        public List<AccessLogEntity> GetAccessLogSTAT()
        {
            //
            List<AccessLogEntity> listLog = new List<AccessLogEntity>();
            //
            using (var connection = new SqlConnection(_constring))
            {
                //
                connection.Open();
                //
                string tsql = SelectLogSTAT();
                //
                using (var command = new SqlCommand(tsql, connection))
                {
                    //
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        //
                        while (reader.Read())
                        {
                            //
                            int id_Column              = 0;
                            string pageName            = Convert.ToString(reader["PAGE_NAME"]);
                            System.DateTime accessDate = new DateTime();
                            string ipValue             = Convert.ToString(reader["IP_VALUE"]); ;
                            //
                            AccessLogEntity Obj = new AccessLogEntity();
                            //
                            Obj.Id_Column  = id_Column;
                            Obj.PageName   = pageName;
                            Obj.AccessDate = accessDate;
                            Obj.IPValue    = ipValue;
                            //
                            listLog.Add(Obj);
                        }
                    }
                }
            }
            //
            return listLog;
        }
        #endregion

        #region "INSERT"
        private static string InsertAccessLog
            (
                 string pageName
                , string ipValue
                , LogType logType
            )
        {
            //
            pageName = pageName.Replace("'", "''");
            //
            if (pageName.Length >= 128)
                pageName = pageName.Substring(0, 128);
            //
            return string.Format(@"
                       INSERT INTO accessLogs
                       (PageName,IpValue,LogType)
                          VALUES
                       ('{0}','{1}',{2});", pageName, ipValue, (uint)logType);
        }
        //
        private static void Submit_Tsql_NonQuery
            (
                SqlConnection connection,
                string tsqlSourceCode,
                string parameterName = null,
                string parameterValue = null
            )
        {
            //    
            using (var command = new SqlCommand(tsqlSourceCode, connection))
            {
                if (parameterName != null)
                {
                    command.Parameters.AddWithValue(  // Or, use SqlParameter class.
                        parameterName,
                        parameterValue);
                }
                int rowsAffected = command.ExecuteNonQuery();
                Console.WriteLine(rowsAffected + " = rows affected.");
            }
        }
        //
        public static void Log
                (
                      string msg
                    , string ipValue = ""
                    , LogType logType = LogType.Info
                )
        {
            //
            using (var connection = new SqlConnection(_constring))
            {
                //
                connection.Open();
                //
                LogModel.Submit_Tsql_NonQuery(connection,
                   InsertAccessLog(
                        msg
                       , ipValue
                       , logType
                       ));
            }
            //
        }

        #endregion

        #endregion
    }
}
