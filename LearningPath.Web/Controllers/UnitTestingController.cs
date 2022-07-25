using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Runtime.InteropServices;
using System.Text;

namespace LearningPath.Controllers
{
    public class UnitTestingController : Controller
    {
        //DLL_EXPORT int    sum(int numberOne, int numberTwo);
        //DLL_EXPORT char   sum_c(int numberOne, int numberTwo);
        //DLL_EXPORT void   sum_str(int numberOne, int numberTwo, char* return_value_c);
        //DLL_EXPORT char*  sum_file(int numberOne, int numberTwo, char* file_status_c);
        //DLL_EXPORT char*  dijkstra(char* args)

        #region "import DLL"
        [DllImport(@"Algothtm.Library.dll", EntryPoint = @"sum")]
        public static extern int sum(int numberOne, int numberTwo);

        [DllImport(@"Algothtm.Library.dll", EntryPoint = @"sum_c")]
        public static extern char sum_c(int numberOne, int numberTwo);

        [DllImport(@"Algothtm.Library.dll", EntryPoint = @"sum_file")]
        public static extern string sum_file(int numberOne, int numberTwo, out char file_status_c);
        [DllImport(@"Algothtm.Library.dll", EntryPoint = @"sum_str", CharSet = CharSet.Ansi)]
        public static extern IntPtr sum_str(int numberOne, int numberTwo, out char return_value_c);

        [DllImport(@"Algorithm.dll", EntryPoint = @"Run", CharSet = CharSet.Ansi)]
        public static extern IntPtr Run(int numberOne, int numberTwo, out char return_value_c);

        #endregion

        #region "Metodos de DLL"
        public int cpp_sum(int numberOne, int numberTwo)
        {
            int returnValue = 0;
            try
            {
                returnValue = sum(numberOne, numberTwo);
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex.Message + " " + ex.StackTrace);
            }
            return returnValue;
        }
        public char cpp_sum_c(int numberOne, int numberTwo)
        {
            char returnValue = '\0';
            try
            {
                returnValue = sum_c(numberOne, numberTwo);
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex.Message + " " + ex.StackTrace);
            }
            return returnValue;
        }
        public string cpp_sum_file(int numberOne, int numberTwo)
        {
            char file_status_c = '\0';
            string return_value = string.Empty;
            try
            {
                return_value = sum_file(numberOne, numberTwo, out file_status_c);
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex.Message + " " + ex.StackTrace);
            }
            return file_status_c.ToString() + "-" + return_value;
        }
        public string cpp_sum_str(int numberOne, int numberTwo)
        {
            char return_value_c = '_';
            string return_value_str = string.Empty;
            try
            {
                IntPtr intptr = sum_str(numberOne, numberTwo, out return_value_c);
                string unicodeString = Marshal.PtrToStringUTF8(intptr);
                return_value_str = unicodeString;
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex.Message + " " + ex.StackTrace);
            }
            return return_value_str;
        }

        [HttpPost]
        public string Sum()
        {
            int numberOne = Convert.ToInt32(Request.Form["primerNumero"].ToString());
            int numberTwo = Convert.ToInt32(Request.Form["segundoNumero"].ToString());
            char return_value_c = '_';
            string return_value_str = string.Empty;
            try
            {
                IntPtr intptr = Run(numberOne, numberTwo, out return_value_c);
                string unicodeString = Marshal.PtrToStringUTF8(intptr);
                return_value_str = unicodeString;
            }
            catch (Exception ex)
            {
                System.Diagnostics.Debug.WriteLine(ex.Message + " " + ex.StackTrace);
            }
            return return_value_str;
        }

        #endregion

        #region "MAIN METHOD"
        //
        public ActionResult UnitTesting01()
        {
            return View();
        }

        public RedirectResult UnitTesting02()
        {
            return Redirect("../UnitTesting02.html");
        }
        #endregion 
    }
}
