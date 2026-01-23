using System;
using System.Data;
using System.Globalization;
using System.IO;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using mcsd.Web.Controllers;
using mcsd.Library.Managers;
using mcsd.Core.Library.DataAccess.Entity;
using mcsd.Core.Library.DataAccess.Models;
using mcsd.Library;

namespace mcsd.Service.Controllers
{
    [ApiController]
    [Route("api/[controller]/")]

    public class FileManagerController : BaseApiController
    {
        #region "Constantes"
        private const int LOG_LIMIT = 100;
        private const int COOKIE_MAX_LENGTH = 4096;
        //CookieOptions options;
        #endregion

        #region "Campos"
        int ARRAY_SIZE = 25;
        #endregion

        #region "Constructor"
        public FileManagerController(IConfiguration configuration
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
            //this._SetSTATPieCache();
            //
            //this._SetSTATBarCache();
            //
            //this._SetXmlDataToCache();
        }
        #endregion

        #region "PDF DEMO"
        [Microsoft.AspNetCore.Mvc.HttpGet("_PDFDemo")]
        public Microsoft.AspNetCore.Mvc.ActionResult _PDFDemo()
        {
            //
            try
            {
                //---------------------------------------------------
                // LOG
                //---------------------------------------------------
                LogModel.Log("PAGE_PDF_DEMO", this.GetIpValue());

            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
            return View();
        }
        [Microsoft.AspNetCore.Mvc.HttpGet("_GetPdf")]
        public string _GetPdf(string subjectName)
        {
            //
            string _extensionDocumento = @"pdf";
            string _directorioDocumento = string.Format(@"\Output\UploadedFiles\{0}\", _extensionDocumento);
            string status = @"[ok]";

            //
            string fileName = string.Format("{0}{1}.{2}"
             , System.Guid.NewGuid().ToString()
             , DateTime.Now.ToString(Globals.DateFormatShortTimestamp)
             , _extensionDocumento);

            string resultRelativeFilePath = string.Format(@"{0}\{1}", _directorioDocumento, fileName);
            //
            string cssPath = this._env.WebRootPath + @"\Content\pdf.css";
            string resultFilePath = this._env.WebRootPath + resultRelativeFilePath;
            string imagePath = this._env.WebRootPath + @"\Content\mcsd-cert.jpg";
            string mcsdImagePath = this._env.WebRootPath + @"\Content\mcsd.png";
            //
            try
            {
                //---------------------------------------------------
                // IMAGEN DE ENCABEZADO
                //---------------------------------------------------
                string htmlContent = string.Empty;
                htmlContent += @"<table width=""100%"" cellpadding=""0px"" cellspacing=""0px"" style=""border: solid 0px #000;"">";
                htmlContent += string.Format(@"<tr><td align=""center"" style=""width:100%;border:0px;""><img src=""{0}""></img></td></tr>", imagePath);
                htmlContent += @"</table>";
                // NO ES POSIBLE CARGAR LA IMAGEN DESDE CSS
                //htmlContent      += string.Format(@"<div style=""background-image: url(""{0}""); background-repeat: no-repeat; height: 250px;"">&nbsp;</div>",mcsdImagePath);   
                //
                //---------------------------------------------------
                // AÑADIR FORMATO EXTERNO
                //---------------------------------------------------
                string wrapperhtml = string.Empty;
                //
                using (var streamReader = new System.IO.StreamReader(this._env.WebRootPath + @"\Content\Resultados.html", System.Text.Encoding.UTF8))
                {
                    wrapperhtml = streamReader.ReadToEnd();
                    streamReader.Close();
                }
                //
                string currentDate = DateTime.Now.ToString("dddd, dd MMMM yyyy", new CultureInfo("es-CO"));
                //
                wrapperhtml = wrapperhtml.Replace("[CONTENT]", subjectName);
                wrapperhtml = wrapperhtml.Replace("[CURRENT_DATE]", currentDate);
                wrapperhtml = wrapperhtml.Replace("[IMAGE]", htmlContent);
                wrapperhtml = wrapperhtml.Replace("[IMAGE_PATH]", mcsdImagePath);
                //    
                status += string.Format("|{0}|{1}|{2}", fileName, resultFilePath, imagePath);
                //
                mcsd.Library.Managers.PDFManager.GetPDFFile(
                        wrapperhtml
                      , cssPath
                      , resultFilePath
                );
            }
            catch (Exception e)
            {
                //
                string errorMsg = string.Format("PDF_ERROR : {0}", e.InnerException.Message + " " + e.StackTrace);
                //
                LogModel.Log(errorMsg, string.Empty, LogModel.LogType.Error);
                //
                status = errorMsg;
            }
            //
            return status;
        }
        [Microsoft.AspNetCore.Mvc.HttpGet("GetPdf")]
        public JsonResult GetPdf(string subjectName)
        {
            //
            string _extensionDocumento = @"pdf";
            string _directorioDocumento = string.Format(@"\Output\UploadedFiles\{0}\", _extensionDocumento);
            string status = @"[ok]";

            //
            string fileName = string.Format("{0}{1}.{2}"
             , System.Guid.NewGuid().ToString()
             , DateTime.Now.ToString(Globals.DateFormatShortTimestamp)
             , _extensionDocumento);

            string resultRelativeFilePath = string.Format(@"{0}\{1}", _directorioDocumento, fileName);
            //
            string cssPath = this._env.WebRootPath + @"\Content\pdf.css";
            string resultFilePath = this._env.WebRootPath + resultRelativeFilePath;
            string imagePath = this._env.WebRootPath + @"\Content\mcsd-cert.jpg";
            string mcsdImagePath = this._env.WebRootPath + @"\Content\mcsd.png";
            //
            try
            {
                //---------------------------------------------------
                // IMAGEN DE ENCABEZADO
                //---------------------------------------------------
                string htmlContent = string.Empty;
                htmlContent += @"<table width=""100%"" cellpadding=""0px"" cellspacing=""0px"" style=""border: solid 0px #000;"">";
                htmlContent += string.Format(@"<tr><td align=""center"" style=""width:100%;border:0px;""><img src=""{0}""></img></td></tr>", imagePath);
                htmlContent += @"</table>";
                // NO ES POSIBLE CARGAR LA IMAGEN DESDE CSS
                //htmlContent      += string.Format(@"<div style=""background-image: url(""{0}""); background-repeat: no-repeat; height: 250px;"">&nbsp;</div>",mcsdImagePath);   
                //
                //---------------------------------------------------
                // AÑADIR FORMATO EXTERNO
                //---------------------------------------------------
                string wrapperhtml = string.Empty;
                //
                using (var streamReader = new System.IO.StreamReader(this._env.WebRootPath + @"\Content\Resultados.html", System.Text.Encoding.UTF8))
                {
                    wrapperhtml = streamReader.ReadToEnd();
                    streamReader.Close();
                }
                //
                string currentDate = DateTime.Now.ToString("dddd, dd MMMM yyyy", new CultureInfo("es-CO"));
                //
                wrapperhtml = wrapperhtml.Replace("[CONTENT]", subjectName);
                wrapperhtml = wrapperhtml.Replace("[CURRENT_DATE]", currentDate);
                wrapperhtml = wrapperhtml.Replace("[IMAGE]", htmlContent);
                wrapperhtml = wrapperhtml.Replace("[IMAGE_PATH]", mcsdImagePath);
                //    
                status += string.Format("|{0}|{1}|{2}", fileName, resultFilePath, imagePath);
                //
                mcsd.Library.Managers.PDFManager.GetPDFFile(
                        wrapperhtml
                      , cssPath
                      , resultFilePath
                );
            }
            catch (Exception e)
            {
                //
                string errorMsg = string.Format("PDF_ERROR : {0}", e.InnerException.Message + " " + e.StackTrace);
                //
                LogModel.Log(errorMsg, string.Empty, LogModel.LogType.Error);
                //
                status = errorMsg;
            }
            //
            return Json(status);
        }
        #endregion

        #region "XLS DEMO"

        //
        [Microsoft.AspNetCore.Mvc.HttpGet("GenerarInformeXLS")]
        public string GenerarInformeXLS()
        {
            //
            string status = "OK";

            try
            {
                //
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

        #region "FILE MANAGER"

        //
        [Microsoft.AspNetCore.Mvc.HttpPost("Sudoku_Upload_File")]
        public JsonResult Sudoku_Upload_File()
        {
            //
            string wwwPath = this._env.WebRootPath;
            string contentPath = this._env.ContentRootPath;
            string uploadedFileName = string.Format(@"[]");
            //
            string path = wwwPath + @"\Output\UploadedFiles\";
            //
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            //
            int uploadedFileNameCount = HttpContext.Request.Form.Files.Count;
            //
            if (uploadedFileNameCount > 0)
            {
                //
                List<string> uploadedFiles = new List<string>();
                //
                foreach (IFormFile postedFile in HttpContext.Request.Form.Files)
                {
                    //
                    string fileName = Path.GetFileName(postedFile.FileName);
                    //
                    using (FileStream stream = new FileStream(path + fileName, FileMode.Create))
                    {
                        postedFile.CopyTo(stream);
                        uploadedFiles.Add(fileName);
                        TempData["UploadedFileName"] = fileName;
                    }
                }
                //
                uploadedFileName = TempData["UploadedFileName"].ToString();
            }
            //
            string uploadedFilePath = this._env.WebRootPath + @"\Output\UploadedFiles\" + Path.GetFileName(uploadedFileName);
            //
            string fileContent = System.IO.File.ReadAllText(uploadedFilePath);
            //
            return Json(fileContent);
        }

        //
        [Microsoft.AspNetCore.Mvc.HttpGet("GetAllContactForms")]
        public Microsoft.AspNetCore.Mvc.JsonResult GetAllContactForms()
        {
            //
            string status = "OK";
            List<ContactFormEntity> listadoContactForm = null;
            //
            try
            {
                //
                listadoContactForm = new ContactFormModel(this._connString).GetAllContactForm();
            }
            catch (Exception ex)
            {
                //
                status = String.Format("PAGE_XLS_DEMO | ERROR | {0}-{1}", ex.Message, ex.StackTrace);
                //
                LogModel.Log(status, GetIpValue(), LogModel.LogType.Error);
                //
                throw;
            }

            //
            var json = Json(listadoContactForm);
            //
            return json;
        }
        #endregion
    }
}
