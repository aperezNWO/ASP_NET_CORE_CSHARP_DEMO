using mcsd.Core.Library.DataAccess.Entity;
using mcsd.Core.Library.DataAccess.Models;
using mcsd.Library.Managers;
using mcsd.Library;
using mcsd.Web.Controllers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.IO;
using System;

namespace mcsd.Service.Controllers
{
    [ApiController]
    [Route("api/[controller]/")]
    public class XLSManagerController : BaseApiController
    {

        #region "CONSTANTS"
        private const int LOG_LIMIT = 100;
        private const int COOKIE_MAX_LENGTH = 4096;
        //CookieOptions options;
        #endregion

        #region "CONSTRUCTOR"
        public XLSManagerController(IConfiguration configuration
                                , IWebHostEnvironment env
                                , IHttpContextAccessor p_httpContextAccessor
                                , IMemoryCache memoryCache)
            : base(configuration
                    , env
                    , p_httpContextAccessor
                    , memoryCache
            )
        {
            //
        }
        #endregion
        
        #region "METHODS"

        //
        [Microsoft.AspNetCore.Mvc.HttpGet("GenerarInformeXLS")]
        public string GenerarInformeXLS()
        {
            //
            string status = "OK";

            try
            {
                //
                string _extensionDocumento             = @"xlsx";
                //
                string _nombreDocumento                = string.Format(@"{0}{1}.{2}"
                 , System.Guid.NewGuid().ToString()
                 , DateTime.Now.ToString(Globals.DateFormatShortTimestamp)
                 , _extensionDocumento);
                //
                string resultRelativeFilePath          = string.Format(@"\{0}\{1}", _extensionDocumento, _nombreDocumento);
                string resultFilePath                  = string.Format(@"{0}\{1}", _env.WebRootPath, resultRelativeFilePath);
                //
                List<AccessLogEntity> ListadoAccessLog = new List<AccessLogEntity>();
                //
                ListadoAccessLog                       = _logModel.GetAccessLog().GetRange(0, LOG_LIMIT);
                //
                XlsManager xlsManager                  = new XlsManager(resultFilePath, ListadoAccessLog);
                status                                 = (xlsManager.GetXLS()) == true ? _nombreDocumento : @"[ERROR]";
            }
            catch (Exception ex)
            {
                //
                status = String.Format("PAGE_LOG_DEMO | ERROR | {0}-{1}", ex.Message, ex.StackTrace);
                //
                LogModel.Log(status, GetIpValue(), LogModel.LogType.Error);
                //
                throw;
            }
            return status;
        }

        //
        [Microsoft.AspNetCore.Mvc.HttpGet("GenerarInformeJson")]
        public Microsoft.AspNetCore.Mvc.JsonResult GenerarInformeJson()
        {
            //
            string status = "OK";
            //
            List<AccessLogEntity> ListadoAccessLog = new List<AccessLogEntity>();
            //
            try
            {
                //
                string _extensionDocumento = @"xlsx";
                //string _directorioDocumento  = string.Format(@"{0}\{1}", _documentsLocalDirectory, _extensionDocumento);
                string _nombreDocumento = string.Format(@"{0}{1}.{2}"
                 , System.Guid.NewGuid().ToString()
                 , DateTime.Now.ToString(Globals.DateFormatShortTimestamp)
                 , _extensionDocumento);
                //
                string resultRelativeFilePath = string.Format(@"\{0}\{1}", _extensionDocumento, _nombreDocumento);
                string resultFilePath = String.Format(@"{0}\{1}", _env.WebRootPath, resultRelativeFilePath); ;
                int count = _logModel.GetAccessLog().Count;
                if (count >= LOG_LIMIT)
                {
                    //
                    ListadoAccessLog = _logModel.GetAccessLog().GetRange(0, LOG_LIMIT);
                }
                else
                {
                    //
                    ListadoAccessLog = _logModel.GetAccessLog();
                }

                //
                XlsManager xlsManager = new XlsManager(resultFilePath, ListadoAccessLog);
                bool xlsManagerSuccess = xlsManager.GetXLS();
                status = ((xlsManagerSuccess) == true) ? _nombreDocumento : @"[ERROR XLS Manager]";
                //
                LogModel.Log(status, GetIpValue(), ((xlsManagerSuccess) == true) ? LogModel.LogType.Info : LogModel.LogType.Error);
            }
            catch (Exception ex)
            {
                //
                status = String.Format("PAGE_LOG_DEMO | ERROR | {0}-{1}", ex.Message, ex.StackTrace);
                //
                LogModel.Log(status, GetIpValue(), LogModel.LogType.Error);
                //
                throw;
            }
            return Json(ListadoAccessLog);
        }

        //
        [Microsoft.AspNetCore.Mvc.HttpGet("GenerarInformeXLSZIP")]
        public string GenerarInformeXLSZIP()
        {
            //
            string status = "OK";

            try
            {

                /////////////////////////////////////////////////////////////////////////
                // GENERAR ARCHIVO XLS
                /////////////////////////////////////////////////////////////////////////

                string _extensionDocumento = @"xlsx";
                //
                string _nombreDocumento = string.Format(@"{0}{1}.{2}"
                 , System.Guid.NewGuid().ToString()
                 , DateTime.Now.ToString(Globals.DateFormatShortTimestamp)
                 , _extensionDocumento);
                //
                string resultRelativeFilePath = string.Format(@"\{0}\{1}", _extensionDocumento, _nombreDocumento);
                string resultFilePath = string.Format(@"{0}\{1}", _env.WebRootPath, resultRelativeFilePath);
                //
                List<AccessLogEntity> ListadoAccessLog = new List<AccessLogEntity>();
                //
                ListadoAccessLog = _logModel.GetAccessLog().GetRange(0, LOG_LIMIT);
                //
                XlsManager xlsManager = new XlsManager(resultFilePath, ListadoAccessLog);
                status = (xlsManager.GetXLS()) == true ? _nombreDocumento : @"[ERROR]";

                /////////////////////////////////////////////////////////////////////////
                // GENERAR ARCHIVO ZIP
                /////////////////////////////////////////////////////////////////////////

                //------------------------------------------------------------------------------------------------------
                // DECLARACION DE VARIABLES
                //------------------------------------------------------------------------------------------------------
                string xlsFileName = TempData["UploadedFileName"].ToString();
                string xlsFilePath = this._env.WebRootPath + @"\Output\UploadedFiles\" + Path.GetFileName(xlsFileName);
                string extensionDocumentoZip = "zip";
                string xlsDestionationDirectory = this._env.WebRootPath + String.Format(@"/Output/{0}", extensionDocumentoZip);

                //------------------------------------------------------------------------------------------------------
                // INSTANCIACION DE CLASE 
                //------------------------------------------------------------------------------------------------------
                //
                FileManager fileManager = new FileManager
                    (
                          xlsFilePath
                        , xlsDestionationDirectory
                        , extensionDocumentoZip
                    );

                /////////////////////////////////////////////////////////////////////////
                // OBTENER NOMBRE DE ARCHIVO ZIP
                /////////////////////////////////////////////////////////////////////////

                status = fileManager.SetZipFile();

            }
            catch (Exception ex)
            {
                //
                status = String.Format("PAGE_LOG_DEMO | ERROR | {0}-{1}", ex.Message, ex.StackTrace);
                //
                LogModel.Log(status, GetIpValue(), LogModel.LogType.Error);
                //
                throw;
            }
            return status;
        }

        #endregion
    }
}
