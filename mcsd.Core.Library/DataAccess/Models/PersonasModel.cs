using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using mcsd.Core.Library.DataAccess.Entity;

namespace mcsd.Core.Library.DataAccess.Models
{
    public class PersonasModel
    {
        #region "Campos"
        private string constring = "";// System.Configuration.ConfigurationManager.ConnectionStrings["defaultConnection"].ConnectionString;
        #endregion

        #region "constructor"
        public PersonasModel(string _connstring)
        {
            constring = _connstring;
        }
        #endregion

        #region "Metodos"   
        //
        public static string SelectPersona()
        {
            return @"   SELECT 
                             [Id_Column]
                            ,[NombreCompleto]
                            ,[ProfesionOficio]
                            ,[Ciudad]
                        FROM
                            [dbo].[Persona]
                        ORDER BY 
                            Id_Column ";
        }
        //
        public static string SelectPersonaSTAT()
        {
            return @" SELECT 
                         P.CIUDAD  CIUDAD
                        ,COUNT(*)  COUNT
                      FROM 
                        PERSONA P
                      GROUP BY
                        P.CIUDAD
                      ORDER BY 2 ";
        }
        //
        public static List<PersonaEntity> SelectPersona(SqlConnection connection)
        {
            //
            string tsql = SelectPersona();
            //
            List<PersonaEntity> ObjCustomer = new List<PersonaEntity>();

            using (var command = new SqlCommand(tsql, connection))
            {
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        //
                        string Id_Column = Convert.ToString(reader["ID_Column"]);
                        string nombreCompleto = (string)reader["NombreCompleto"];
                        string profesionOficio = (string)reader["ProfesionOficio"];
                        string ciudadPersona = (string)reader["Ciudad"];
                        //
                        PersonaEntity Obj = new PersonaEntity();
                        //
                        Obj.Id_Column = Id_Column;
                        Obj.NombreCompleto = nombreCompleto;
                        Obj.ProfesionOficio = profesionOficio;
                        Obj.Ciudad = ciudadPersona;
                        //
                        ObjCustomer.Add(Obj);

                    }
                }
            }
            return ObjCustomer;
        }
        //
        public static List<PersonaEntity> SelectPersonaSTAT(SqlConnection connection)
        {
            //
            string tsql = SelectPersonaSTAT();
            //
            List<PersonaEntity> ObjCustomer = new List<PersonaEntity>();
            //
            using (var command = new SqlCommand(tsql, connection))
            {
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        //
                        string Id_Column = Convert.ToString(reader["COUNT"]);
                        string nombreCompleto = "";
                        string profesionOficio = "";
                        string ciudadPersona = (string)reader["Ciudad"];
                        //
                        PersonaEntity Obj = new PersonaEntity();
                        //
                        Obj.Id_Column = Id_Column;
                        Obj.NombreCompleto = nombreCompleto;
                        Obj.ProfesionOficio = profesionOficio;
                        Obj.Ciudad = ciudadPersona;
                        //
                        ObjCustomer.Add(Obj);

                    }
                }
            }
            return ObjCustomer;
        }
        //
        public DataTable ListadoPersonasDataTable()
        {
            //
            string tsql = SelectPersona();
            //
            DataTable maestroListado = new DataTable();
            //
            try
            {
                //
                using (var connection = new SqlConnection(constring))
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
        public List<PersonaEntity> ListadoPersonas()
        {
            //
            List<PersonaEntity> listPersona = new List<PersonaEntity>();
            //
            try
            {
                //
                using (var connection = new SqlConnection(constring))
                {
                    //
                    connection.Open();
                    //
                    listPersona = SelectPersona(connection);
                }
                //
                return listPersona;
            }
            catch (SqlException e)
            {
                throw e;
            }
        }
        //
        public List<PersonaEntity> ListadoPersonasSTAT()
        {
            //
            List<PersonaEntity> listPersona = new List<PersonaEntity>();
            //
            try
            {
                //
                using (var connection = new SqlConnection(constring))
                {
                    //
                    connection.Open();
                    //
                    listPersona = SelectPersonaSTAT(connection);
                }
                //
                return listPersona;
            }
            catch (SqlException e)
            {
                throw e;
            }
        }
        #endregion
    }
}
