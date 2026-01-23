using System;
using System.Collections.Generic;
using System.Data;
using System.Globalization;
using System.IO;
using System.Text.RegularExpressions;
using System.Text.Json;
using System.Threading.Tasks;
using System.Web;
using System.Runtime.InteropServices;
using System.Diagnostics;
using System.Diagnostics.Eventing.Reader;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using mcsd.Library;
using mcsd.Library.Managers;
using mcsd.Core.Library.DataAccess.Entity;
using mcsd.Core.Library.DataAccess.Models;


namespace mcsd.Web.Controllers
{

    [ApiController]
    [Route("api/[controller]/")]

    public class DemosController : BaseApiController
    {
        #region "Constantes"
        private const int LOG_LIMIT         = 100;
        private const int COOKIE_MAX_LENGTH = 4096;
        //CookieOptions options;
        #endregion

        #region "Campos"
        int ARRAY_SIZE = 25;
        #endregion

        #region "Constructor"
        public DemosController(IConfiguration configuration
                                , IWebHostEnvironment env
                                , IHttpContextAccessor p_httpContextAccessor
                                , IMemoryCache memoryCache)
            : base(   configuration
                    , env
                    , p_httpContextAccessor
                    , memoryCache
            )
        {
            //
            //this._SetSTATPieCache();
            //
            //this._SetSTATBarCache();
            //
            //this._SetXmlDataToCache();
        }
        #endregion

        #region "Metodos"

        /// <summary>
        /// INGRESAR UN REGISTRO AL LOG
        /// </summary>
        /// <param name="p_logMsg"></param>
        /// <param name="logType"></param>        
        /// <returns></returns>
        [Microsoft.AspNetCore.Mvc.HttpGet("SetLog")]
        public string _SetLog(string p_logMsg, LogModel.LogType logType = LogModel.LogType.Info)
        {
            //
            string status = string.Empty;
            //
            try
            {
                //---------------------------------------------------
                // LOG
                //---------------------------------------------------
                LogModel.Log(p_logMsg, this.GetIpValue(), logType);
                //
                status = @"OK";

            }
            catch (Exception ex)
            {
                //
                status = string.Format(@"Metodo _SetLog() - Error  : {0} ",ex.Message + " " + ex.StackTrace); ;
                //
                throw;
            }
            //
            return status;
        }
       
        [Microsoft.AspNetCore.Mvc.HttpGet("GetAppVersion")]
        public string GetAppVersion()
        {
            //--------------------------------------------------
            // DECLARACION DE VARIABLES
            //--------------------------------------------------
            string appVersion = "";

            try
            {
                appVersion = base.ApplicationVersion();
                //--------------------------------------------------
                // LOG
                //--------------------------------------------------
                LogModel.Log(string.Format("app_version : {0}", appVersion));
            }
            catch (Exception ex)
            {
                LogModel.Log(string.Format("app_version. ERROR ='{0}'-'{1}'"
                                                      , ex.Message
                                                      , ex.StackTrace)
                             , string.Empty
                             , LogModel.LogType.Error
                             );
            }
            //
            return appVersion;
        }

        #endregion
    }
}