using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using mcsd.Core.Library.DataAccess.Entity;

namespace mcsd.Core.Library.DataAccess.Models
{
    public class ContactFormModel
    {
        #region "Campos"
        private string constring = "";// System.Configuration.ConfigurationManager.ConnectionStrings["defaultConnection"].ConnectionString;
        #endregion

        #region "constructor"
        public ContactFormModel(string _connstring)
        {
            constring = _connstring;
        }
        #endregion

        #region "Metodos"   
        //
        public static string SelectGetAllContactForm()
        {
            return @"   SELECT id as id  ,Name  as Name, Email as field_1 , Message as field_2,  CreatedAt as field_3  FROM ContactForm ORDER BY id desc ";
            //return @"   SELECT id id  ,Name name ,Email field_1 , Message field_2  , CreatedAt field_3 FROM ContactForm ORDER BY id desc ";
        }

        //
        public static List<ContactFormEntity> GetAllContactForm(SqlConnection connection)
        {
            //
            string tsql = SelectGetAllContactForm();
            //
            List<ContactFormEntity> listContactForm = new List<ContactFormEntity>();

            using (var command = new SqlCommand(tsql, connection))
            {
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        //
                        ContactFormEntity ObjContactForm = new ContactFormEntity();
                        //
                        ObjContactForm.id        = (int)reader["id"];
                        ObjContactForm.Name      = (string)reader["Name"];
                        ObjContactForm.field_1   = (string)reader["field_1"];
                        ObjContactForm.field_2   = (string)reader["field_2"];
                        ObjContactForm.field_3   = (DateTime)reader["field_3"];
                        //
                        listContactForm.Add(ObjContactForm);

                    }
                }
            }
            return listContactForm;
        }
        //
        public List<ContactFormEntity> GetAllContactForm()
        {
            //
            List<ContactFormEntity> listContactForm = new List<ContactFormEntity>();
            //
            try
            {
                //
                using (var connection = new SqlConnection(constring))
                {
                    //
                    connection.Open();
                    //
                    listContactForm = GetAllContactForm(connection);
                }
                //
                return listContactForm;
            }
            catch (SqlException e)
            {
                throw e;
            }
        }
        #endregion
    }
}
