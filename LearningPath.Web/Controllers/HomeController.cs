using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Globalization;
using System.IO;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;
using System.Runtime.InteropServices;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Session;
using Microsoft.Extensions.Configuration;
using LearningPath.Library;
using LearningPath.Library.DataAccess;
using LearningPath.Library.DataAccess.Entity;
using LearningPath.Library.Managers;
using LearningPath.Controllers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Logging;
using System.Diagnostics;
using LearningPath.Models;

namespace LearningPath.Web.Controllers
{
    public class HomeController : GenericController
    {
        #region "Campos"
        protected ILogger<HomeController> _logger = null;
        #endregion

        #region "Consctructor"
        public HomeController(ILogger<HomeController> logger, IConfiguration configuration, IWebHostEnvironment env)
            : base(configuration, env)
        {
            _logger = logger;
        }
        #endregion

        #region "Propiedades"
        public static string ApplicationVersion
        {
            get
            {
                return System.Reflection.Assembly.GetExecutingAssembly().GetName().Version.ToString();
            }
        }
        #endregion

        #region "Métodos"
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        //
        public ActionResult Contact()
        {
            //
            try
            {
                //
                _logModel.Log("PAGE_CONTACT", this.GetIpValue());
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }


            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        #endregion

    }
}
