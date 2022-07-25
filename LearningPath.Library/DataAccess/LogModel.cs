using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using LearningPath.Library.DataAccess.Entity;

namespace LearningPath.Library.DataAccess
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
        private string _constring = @"";/* System.Configuration.ConfigurationManager.ConnectionStrings["defaultConnection"].ConnectionString;*/
        #endregion

        #region "Constructor"
        public LogModel(string _ConnectionString)
        {
            this._constring = _ConnectionString;
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
        public List<AccessLogEntity> GetAccessLog()
        {
            //
            List<AccessLogEntity> listLog = new List<AccessLogEntity>();
            //
            using (var connection = new SqlConnection(this._constring))
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
            catch (Exception ex)
            {
                throw ex;
            }
            //
            return maestroListado;
        }

        #endregion

        #region "INSERT"
        private string InsertAccessLog
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
        public void Log
                (
                      string msg
                    , string ipValue = ""
                    , LogType logType = LogType.Info
                )
        {
            //
            using (var connection = new SqlConnection(this._constring))
            {
                //
                connection.Open();
                //
                LogModel.Submit_Tsql_NonQuery(connection,
                   this.InsertAccessLog(
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
