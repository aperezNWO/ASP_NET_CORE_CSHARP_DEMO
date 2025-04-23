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
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Caching.Memory;
using mcsd.Library;
using mcsd.Library.Managers;
using mcsd.Core.Library.DataAccess.Entity;
using mcsd.Core.Library.DataAccess.Models;
using System.Diagnostics;
using System.Diagnostics.Eventing.Reader;

namespace mcsd.Web.Controllers
{
    public static class SessionExtensions
    {
        public static void Set<T>(this ISession session, string key, T value)
        {
            session.SetString(key, JsonSerializer.Serialize(value));
        }

        public static T? Get<T>(this ISession session, string key)
        {
            var value = session.GetString(key);
            return value == null ? default : JsonSerializer.Deserialize<T>(value);
        }
    }

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
        #region "Raiz"
        [Microsoft.AspNetCore.Mvc.HttpGet("_SetLog")]
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
        [Microsoft.AspNetCore.Mvc.HttpGet("_DemosIndex")]
        public Microsoft.AspNetCore.Mvc.ActionResult _DemosIndex(int id = 0)
        {
            //
            try
            {
                //---------------------------------------------------
                // LOG
                //---------------------------------------------------
                LogModel.Log("PAGE_DEMO_INDEX", this.GetIpValue());

            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
            //
            return View();
        }
        //
        [Microsoft.AspNetCore.Mvc.HttpGet("_GetAppVersion")]
        public string _GetAppVersion()
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
            string cssPath         = this._env.WebRootPath + @"\Content\pdf.css";
            string resultFilePath  = this._env.WebRootPath + resultRelativeFilePath;
            string imagePath       = this._env.WebRootPath + @"\Content\mcsd-cert.jpg";
            string mcsdImagePath   = this._env.WebRootPath + @"\Content\mcsd.png";
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
            string cssPath        = this._env.WebRootPath + @"\Content\pdf.css";
            string resultFilePath = this._env.WebRootPath + resultRelativeFilePath;
            string imagePath      = this._env.WebRootPath + @"\Content\mcsd-cert.jpg";
            string mcsdImagePath  = this._env.WebRootPath + @"\Content\mcsd.png";
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

        #region "CSV ASYNC DEMO"
        //
        [Microsoft.AspNetCore.Mvc.HttpGet("_CsvAsyncDemo")]
        public Microsoft.AspNetCore.Mvc.ActionResult _CsvAsyncDemo()
        {
            //
            try
            {
                //---------------------------------------------------
                // LOG
                //---------------------------------------------------
                LogModel.Log("PAGE_CSV_ASYNC_DEMO", this.GetIpValue(), LogModel.LogType.Info);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
            return View();
        }
        // 
        [Microsoft.AspNetCore.Mvc.HttpGet("SetCSV")]
        public string SetCSV()
        {
            //
            string status = "ok";
            //
            try
            {
                //------------------------------------------------------------------------------------------------------
                // OBTENER DATOS
                //------------------------------------------------------------------------------------------------------
                DataTable maestroListado = new PersonasModel(this._connString).ListadoPersonasDataTable();

                //------------------------------------------------------------------------------------------------------
                // DECLARACION DE VARIABLES
                //------------------------------------------------------------------------------------------------------
                Globals.AsyncTaskType asyncType = Globals.AsyncTaskType.CSVExnacato;
                string rootPath = this._env.WebRootPath;
                //------------------------------------------------------------------------------------------------------
                // INSTANCIACION DE CLASE 
                //------------------------------------------------------------------------------------------------------
                //
                CSVManager csvManager = new CSVManager
                    (
                          asyncType
                        , maestroListado
                        , rootPath
                    );
                status = csvManager.GetCSV();
                //------------------------------------------------------------------------------------------------------
                // LOG
                //------------------------------------------------------------------------------------------------------
#if DEBUG
                LogModel.Log("CSV_ASYNC");

                LogModel.Log(string.Format("ROOT_PATH : {0}", rootPath));

                LogModel.Log(string.Format("ROOT_FILE : {0}", status));

                LogModel.Log(string.Format("RECORD_AMT : {0}", maestroListado.Rows.Count));
#endif

            }
            catch (Exception e)
            {
                //
                string errorMsg = string.Format("CSV_ERROR : {0}", e.InnerException.Message + " " + e.StackTrace);
                //
                LogModel.Log(errorMsg, string.Empty, LogModel.LogType.Error);
                //
                status = errorMsg;
            }

            return status;
        }
        //
        [Microsoft.AspNetCore.Mvc.HttpPost("_GetCSVLink")]
        public async Task<String> _GetCSVLink()
        {
            return await Task<String>.Factory.StartNew(() =>
            {
                //
                string status = "ok";
                //
                try
                {
                    //------------------------------------------------------------------------------------------------------
                    // OBTENER DATOS
                    //------------------------------------------------------------------------------------------------------
                    DataTable maestroListado = new PersonasModel(this._connString).ListadoPersonasDataTable();

                    //------------------------------------------------------------------------------------------------------
                    // DECLARACION DE VARIABLES
                    //------------------------------------------------------------------------------------------------------
                    Globals.AsyncTaskType asyncType = Globals.AsyncTaskType.CSVExnacato;
                    string rootPath = this._env.WebRootPath;
                    //------------------------------------------------------------------------------------------------------
                    // INSTANCIACION DE CLASE 
                    //------------------------------------------------------------------------------------------------------
                    //
                    CSVManager csvManager = new CSVManager
                        (
                              asyncType
                            , maestroListado
                            , rootPath
                        );
                    status = csvManager.GetCSV();
                    //------------------------------------------------------------------------------------------------------
                    // LOG
                    //------------------------------------------------------------------------------------------------------
#if DEBUG
                    LogModel.Log("CSV_ASYNC");

                    LogModel.Log(string.Format("ROOT_PATH : {0}", rootPath));

                    LogModel.Log(string.Format("ROOT_FILE : {0}", status));

                    LogModel.Log(string.Format("RECORD_AMT : {0}", maestroListado.Rows.Count));
#endif

                }
                catch (Exception e)
                {
                    //
                    string errorMsg = string.Format("CSV_ERROR : {0}", e.InnerException.Message + " " + e.StackTrace);
                    //
                    LogModel.Log(errorMsg, string.Empty, LogModel.LogType.Error);
                    //
                    status = errorMsg;
                }

                return status;

            });
        }
        //
        [Microsoft.AspNetCore.Mvc.HttpPost("_GetCSVLinkJson")]
        public async Task<JsonResult> _GetCSVLinkJson()
        {
            return await Task<JsonResult>.Factory.StartNew(() =>
            {
                //
                string status = "ok";
                //
                try
                {
                    //------------------------------------------------------------------------------------------------------
                    // OBTENER DATOS
                    //------------------------------------------------------------------------------------------------------
                    DataTable maestroListado = new PersonasModel(this._connString).ListadoPersonasDataTable();

                    //------------------------------------------------------------------------------------------------------
                    // DECLARACION DE VARIABLES
                    //------------------------------------------------------------------------------------------------------
                    Globals.AsyncTaskType asyncType = Globals.AsyncTaskType.CSVExnacato;
                    string rootPath = this._env.WebRootPath;
                    //------------------------------------------------------------------------------------------------------
                    // INSTANCIACION DE CLASE 
                    //------------------------------------------------------------------------------------------------------
                    //
                    CSVManager csvManager = new CSVManager
                        (
                              asyncType
                            , maestroListado
                            , rootPath
                        );
                    status = csvManager.GetCSV();
                    //------------------------------------------------------------------------------------------------------
                    // LOG
                    //------------------------------------------------------------------------------------------------------
#if DEBUG
                    LogModel.Log("CSV_ASYNC");

                    LogModel.Log(string.Format("ROOT_PATH : {0}", rootPath));

                    LogModel.Log(string.Format("ROOT_FILE : {0}", status));

                    LogModel.Log(string.Format("RECORD_AMT : {0}", maestroListado.Rows.Count));
#endif

                }
                catch (Exception e)
                {
                    //
                    string errorMsg = string.Format("CSV_ERROR : {0}", e.InnerException.Message + " " + e.StackTrace);
                    //
                    LogModel.Log(errorMsg, string.Empty, LogModel.LogType.Error);
                    //
                    status = errorMsg;
                }

                return Json(status);

            });
        }
        //
        [Microsoft.AspNetCore.Mvc.HttpGet("_GetCSVLinkJsonGET")]
        public async Task<JsonResult> _GetCSVLinkJsonGET()
        {
            return await Task<JsonResult>.Factory.StartNew(() =>
            {
                //
                string status = "ok";
                //
                try
                {
                    //------------------------------------------------------------------------------------------------------
                    // OBTENER DATOS
                    //------------------------------------------------------------------------------------------------------
                    DataTable maestroListado = new PersonasModel(this._connString).ListadoPersonasDataTable();

                    //------------------------------------------------------------------------------------------------------
                    // DECLARACION DE VARIABLES
                    //------------------------------------------------------------------------------------------------------
                    Globals.AsyncTaskType asyncType = Globals.AsyncTaskType.CSVExnacato;
                    string rootPath = this._env.WebRootPath;
                    //------------------------------------------------------------------------------------------------------
                    // INSTANCIACION DE CLASE 
                    //------------------------------------------------------------------------------------------------------
                    //
                    CSVManager csvManager = new CSVManager
                        (
                              asyncType
                            , maestroListado
                            , rootPath
                        );
                    status = csvManager.GetCSV();
                    //------------------------------------------------------------------------------------------------------
                    // LOG
                    //------------------------------------------------------------------------------------------------------
#if DEBUG
                    LogModel.Log("CSV_ASYNC");

                    LogModel.Log(string.Format("ROOT_PATH : {0}", rootPath));

                    LogModel.Log(string.Format("ROOT_FILE : {0}", status));

                    LogModel.Log(string.Format("RECORD_AMT : {0}", maestroListado.Rows.Count));
#endif

                }
                catch (Exception e)
                {
                    //
                    string errorMsg = string.Format("CSV_ERROR : {0}", e.InnerException.Message + " " + e.StackTrace);
                    //
                    LogModel.Log(errorMsg, string.Empty, LogModel.LogType.Error);
                    //
                    status = errorMsg;
                }

                return Json(status);

            });
        }
        //
        [Microsoft.AspNetCore.Mvc.HttpGet("GenerarInformeCSVJson")]
        public Microsoft.AspNetCore.Mvc.JsonResult GenerarInformeCSVJson()
        {
            //
            string status = "OK";
            List<PersonaEntity> listadoPersonas = null;
            //
            try
            {
                //
                listadoPersonas = new PersonasModel(this._connString).ListadoPersonas();
            }
            catch (Exception ex)
            {
                //
                status = String.Format("PAGE_CSV_DEMO | ERROR | {0}-{1}", ex.Message, ex.StackTrace);
                //
                LogModel.Log(status, GetIpValue(), LogModel.LogType.Error);
                //
                throw;
            }

            //
            var json = Json(listadoPersonas);
            //json.MaxJsonLength = int.MaxValue;
            //
            return json;
        }
        //
        [Microsoft.AspNetCore.Mvc.HttpGet("GenerarInformeCSVJsonStr")]
        public string GenerarInformeCSVJsonStr()
        {
            //
            string status = "OK";
            List<PersonaEntity> listadoPersonas = null;
            //
            try
            {
                //
                listadoPersonas = new PersonasModel(this._connString).ListadoPersonas();
            }
            catch (Exception ex)
            {
                //
                status = String.Format("PAGE_CSV_DEMO | ERROR | {0}-{1}", ex.Message, ex.StackTrace);
                //
                LogModel.Log(status, GetIpValue(), LogModel.LogType.Error);
                //
                throw;
            }

            return listadoPersonas.ToArray().ToString();
        }
        //
        [Microsoft.AspNetCore.Mvc.HttpGet("GenerarInformeCSVJsonSTAT")]
        public Microsoft.AspNetCore.Mvc.JsonResult GenerarInformeCSVJsonSTAT()
        {
            //
            string status = "OK";
            //
            JsonResult json;
            //
            //List<PersonaEntity> listadoPersonas = null;
            //
            try
            {
                //
                // listadoPersonas = new PersonasModel(this._connString).ListadoPersonasSTAT();
                //
                json = (JsonResult)base._memoryCache.Get("listadoPersonasJson");
                //
                LogModel.Log(String.Format("CSV_DEMO | Get json from Cache : {0}", json));
            }
            catch (Exception ex)
            {
                //
                status = String.Format("PAGE_CSV_DEMO | ERROR | {0}-{1}", ex.Message, ex.StackTrace);
                //
                LogModel.Log(status, GetIpValue(), LogModel.LogType.Error);
                //
                throw;
            }

            //
            //var json = Json(listadoPersonas);
            //json.MaxJsonLength = int.MaxValue;
            //
            return json;
        }
        //
        [Microsoft.AspNetCore.Mvc.HttpGet("_SetSTATPieCache")]
        public string _SetSTATPieCache()
        {
            //
            string status = "OK";
            //
            List<PersonaEntity> listadoPersonas = null;
            //
            try
            {
                //
                listadoPersonas = new PersonasModel(this._connString).ListadoPersonasSTAT();
                //
                var json = Json(listadoPersonas);
                //
                base._memoryCache.Set("listadoPersonasJson", json);
                //
                LogModel.Log(String.Format("PAGE_CSV_DEMO |  : Set json to Cache : {0}"
                        , base._memoryCache.Get("listadoPersonasJson").ToString().Substring(0, 15)));
            }
            catch (Exception ex)
            {
                //
                status = String.Format("PAGE_CSV_DEMO | ERROR | {0}-{1}", ex.Message, ex.StackTrace);
                //
                LogModel.Log(status, GetIpValue(), LogModel.LogType.Error);
                //
                throw;
            }
            return status;

        }
        #endregion

        #region "ZIP ASYNC DEMO"
        //
        [Microsoft.AspNetCore.Mvc.HttpGet("_ZipDemo")]
        public Microsoft.AspNetCore.Mvc.ActionResult _ZipDemo()
        {
            //
            try
            {
                //---------------------------------------------------
                // LOG
                //---------------------------------------------------
                LogModel.Log("PAGE_ZIP_DEMO", this.GetIpValue(), LogModel.LogType.Info);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
            return View();

        }
        //
        [Microsoft.AspNetCore.Mvc.HttpPost("_ZipDemo")]
        public IActionResult _ZipDemo(List<IFormFile> postedFiles)
        {
            //
            string wwwPath = this._env.WebRootPath;
            string contentPath = this._env.ContentRootPath;
            //
            string path = wwwPath + @"\Output\UploadedFiles\";
            //
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            //
            List<string> uploadedFiles = new List<string>();
            foreach (IFormFile postedFile in postedFiles)
            {
                string fileName          = Path.GetFileName(postedFile.FileName);
                using (FileStream stream = new FileStream(path + fileName, FileMode.Create))
                {
                    postedFile.CopyTo(stream);
                    uploadedFiles.Add(fileName);
                    TempData["UploadedFileName"] = fileName;
                    ViewBag.Message += string.Format("<b>{0}</b>", fileName);
                }
            }
            return View();
        }
        //
        [Microsoft.AspNetCore.Mvc.HttpPost("_ZipDemoGetFileName")]
        public JsonResult _ZipDemoGetFileName()
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
            return Json(uploadedFileName);
        }
        //
        [Microsoft.AspNetCore.Mvc.HttpPost("SetZip")]
        public string SetZip()
        {
            //
            string status = "ok";
            //
            try
            {
                //------------------------------------------------------------------------------------------------------
                // OBTENER ARCHIVO
                //------------------------------------------------------------------------------------------------------

                //------------------------------------------------------------------------------------------------------
                // DECLARACION DE VARIABLES
                //------------------------------------------------------------------------------------------------------
                string fileName              = TempData["UploadedFileName"].ToString();
                string uploadedFilePath      = this._env.WebRootPath + @"\Output\UploadedFiles\" + Path.GetFileName(fileName);
                string extensionDocumento    = "zip";
                string destionationDirectory = this._env.WebRootPath + String.Format(@"/Output/{0}", extensionDocumento);

                //------------------------------------------------------------------------------------------------------
                // INSTANCIACION DE CLASE 
                //------------------------------------------------------------------------------------------------------
                //
                FileManager fileManager = new FileManager
                    (
                          uploadedFilePath
                        , destionationDirectory
                        , extensionDocumento
                    );

                status = fileManager.SetZipFile();

                //------------------------------------------------------------------------------------------------------
                // LOG
                //------------------------------------------------------------------------------------------------------
#if DEBUG
                LogModel.Log("ZIP_ASYNC");

                LogModel.Log(string.Format("FILE_TO_ZIP : {0}", uploadedFilePath));

                LogModel.Log(string.Format("ZIPPED_FILE : {0}", status));
#endif
            }
            catch (Exception e)
            {
                //
                string errorMsg = string.Format("ZIP_ERROR : {0}", e.Message + " " + e.StackTrace);
                //
                LogModel.Log(errorMsg, string.Empty, LogModel.LogType.Error);
                //
                status = errorMsg;
            }
            //
            return status;
        }
        //
        [Microsoft.AspNetCore.Mvc.HttpGet("_SetZip")]
        public JsonResult _SetZip(string p_fileName)
        {
            //
            string status = "ok";
            //
            try
            {
                //------------------------------------------------------------------------------------------------------
                // OBTENER ARCHIVO
                //------------------------------------------------------------------------------------------------------

                //------------------------------------------------------------------------------------------------------
                // DECLARACION DE VARIABLES
                //------------------------------------------------------------------------------------------------------
                string uploadedFilePath      = this._env.WebRootPath + @"\Output\UploadedFiles\" + p_fileName;
                string extensionDocumento    = "zip";
                string destionationDirectory = this._env.WebRootPath + String.Format(@"/Output/{0}", extensionDocumento);

                //------------------------------------------------------------------------------------------------------
                // INSTANCIACION DE CLASE 
                //------------------------------------------------------------------------------------------------------
                //
                FileManager fileManager = new FileManager
                    (
                          uploadedFilePath
                        , destionationDirectory
                        , extensionDocumento
                    );

                status = fileManager.SetZipFile();

                //------------------------------------------------------------------------------------------------------
                // LOG
                //------------------------------------------------------------------------------------------------------
#if DEBUG
                LogModel.Log("ZIP_ASYNC");

                LogModel.Log(string.Format("FILE_TO_ZIP : {0}", uploadedFilePath));

                LogModel.Log(string.Format("ZIPPED_FILE : {0}", status));
#endif
            }
            catch (Exception e)
            {
                //
                string errorMsg = string.Format("ZIP_ERROR : {0}", e.Message + " " + e.StackTrace);
                //
                LogModel.Log(errorMsg, string.Empty, LogModel.LogType.Error);
                //
                status = errorMsg;
            }
            //
            return Json(status);
        }
        #endregion

        #region "Regex DEMO"
        [Microsoft.AspNetCore.Mvc.HttpGet("_RegExDemo")]
        public Microsoft.AspNetCore.Mvc.ActionResult _RegExDemo()
        {
            //-------------------------------------------------
            // LLAMADO A LA PÁGINA "_RegexDemo"
            //-------------------------------------------------

            try
            {
                //
                LogModel.Log("PAGE_REGEX_DEMO", this.GetIpValue(), LogModel.LogType.Info);
            }
            catch (Exception ex)
            {
                //
                LogModel.Log(string.Format("REGEX_ÈRROR. ='{0}'-'{1}'"
                                                         , ex.Message
                                                         , ex.StackTrace)
                            , string.Empty
                            , LogModel.LogType.Error);
            }
            return View();
        }
        //
        [Microsoft.AspNetCore.Mvc.HttpGet("_SetXmlDataToCache")]
        public string _SetXmlDataToCache()
        {
            //-------------------------------------------------
            // RETORNAR XML DE ARCHIVO "cdCatalog.xml"
            //-------------------------------------------------
            string returnData = "ok";
            //
            try
            {
                //
                string filePath      = string.Format(@"{0}\{1}", _env.WebRootPath, @"\xml\cdCatalog.xml"); /*Server.MapPath(@"~/xml/cdCatalog.xml");*/
                string xmlContent    = System.IO.File.ReadAllText(filePath);
                string xmlContentRaw = xmlContent;
                //    
                //---------------------------------------------------------------------------------------
                // CORREGIR LINE FEEDS    
                //---------------------------------------------------------------------------------------
                string _lineBreakPattern = @"(\r\n)";
                //
                Regex rx = new Regex(_lineBreakPattern, RegexOptions.Compiled | RegexOptions.IgnoreCase);
                //
                MatchCollection matchCollectionLineBreak = rx.Matches(xmlContent);
                //
                foreach (Match matchEntryLineBreak in matchCollectionLineBreak)
                {
                    xmlContent = xmlContent.Replace(matchEntryLineBreak.Value, string.Format(@"|", matchEntryLineBreak.Value));
                }
                //---------------------------------------------------------------------------------------
                // CORREGIR TABS
                //---------------------------------------------------------------------------------------
                string _tabBreakPattern = @"[ \t]";
                //
                rx = new Regex(_tabBreakPattern, RegexOptions.Compiled | RegexOptions.IgnoreCase);
                //
                MatchCollection matchCollectiontabs = rx.Matches(xmlContent);
                //
                foreach (Match matchEntryTab in matchCollectiontabs)
                {
                    xmlContent = xmlContent.Replace(matchEntryTab.Value, string.Format(@"■", matchEntryTab.Value));
                }
                //-------------------------------------------------------------------------------------------
                // CONVERTGIR A CARACTERES LEGIBLES DE HTML
                //-------------------------------------------------------------------------------------------
                string xmlEncoded = HttpUtility.HtmlEncode(xmlContent);
                //    
                xmlEncoded = xmlEncoded.Replace(@"|", @"<br/>");
                xmlEncoded = xmlEncoded.Replace(@"■", @"&nbsp;");
                //
                //-------------------------------------------------------------------------------------------
                // PERSISTIR DATOS
                //-------------------------------------------------------------------------------------------
                //
                base._memoryCache.Set("xmlContent", xmlEncoded);
                base._memoryCache.Set("xmlContentRaw", xmlContentRaw);
                //
                LogModel.Log(String.Format("REGEX  : Set XML to Cache : {0},{1}"
                        , base._memoryCache.Get("xmlContent").ToString().Substring(0, 15)
                        , base._memoryCache.Get("xmlContentRaw").ToString().Substring(0, 15)));
            }
            catch (Exception ex)
            {
                //
                returnData = "[Error]";
                //
                LogModel.Log("REGEX_ÈRROR : " + (ex.Message + " - " + ex.StackTrace), this.GetIpValue(), LogModel.LogType.Error);
            }
            //
            return returnData;
        }

        //
        [Microsoft.AspNetCore.Mvc.HttpGet("_GetXmlData")]
        public string _GetXmlData()
        {
            //-------------------------------------------------
            // RETORNAR XML DE ARCHIVO "cdCatalog.xml"
            //-------------------------------------------------
            string returnData = string.Empty;
            //
            try
            {
                //
                string? session_xmlContent    = string.Empty;
                string? session_xmlContentRaw = string.Empty;
                //
                base._memoryCache.TryGetValue("xmlContent",    out session_xmlContent);
                base._memoryCache.TryGetValue("xmlContentRaw", out session_xmlContentRaw);
                //
                LogModel.Log(
                    string.Format("REGEX_XML (From CACHE). xmlContent='{0}', xmlContentRaw='{1}'"
                                             , session_xmlContent.Substring(0, 15)    ?? "[n/a]"
                                             , session_xmlContentRaw.Substring(0, 15) ?? "[n/a]") 
                );
                //
                returnData = session_xmlContent;
            }
            catch (Exception ex)
            {
                LogModel.Log("REGEX_ÈRROR : " + (ex.Message + " - " + ex.StackTrace), this.GetIpValue(), LogModel.LogType.Error);
            }
            //
            return returnData;
        }
        [Microsoft.AspNetCore.Mvc.HttpGet("_RegExEval")]
        public string _RegExEval
            (
                  string p_tagSearch
                , string p_textSearch
            )
        {
            //
            string status = "ok";
            //
            try
            {
                //
                string? session_xmlContent    = string.Empty;
                string? session_xmlContentRaw = string.Empty;

                //
                base._memoryCache.TryGetValue("xmlContent", out session_xmlContent);
                base._memoryCache.TryGetValue("xmlContentRaw", out session_xmlContentRaw);

                //
                LogModel.Log(
                    string.Format("REGEX_XML_EVAL (From CACHE). xmlContent='{0}', xmlContentRaw='{1}'"
                                             , session_xmlContent.Substring(0, 15) ?? "[n/a]"
                                             , session_xmlContentRaw.Substring(0, 15) ?? "[n/a]")
                );

                //
                string xmlContent    = session_xmlContent;
                string xmlContentRaw = session_xmlContentRaw;
                //    
                //---------------------------------------------------------------------------------------
                // CORREGIR LINE FEEDS    
                //---------------------------------------------------------------------------------------
                string _lineBreakPattern = @"(\r\n)";
                //
                Regex rx = new Regex(_lineBreakPattern, RegexOptions.Compiled | RegexOptions.IgnoreCase);
                //
                MatchCollection matchCollectionLineBreak = rx.Matches(xmlContent);
                //
                foreach (Match matchEntryLineBreak in matchCollectionLineBreak)
                {
                    xmlContent = xmlContent.Replace(matchEntryLineBreak.Value, string.Format(@"|", matchEntryLineBreak.Value));
                }
                //---------------------------------------------------------------------------------------
                // CORREGIR TABS
                //---------------------------------------------------------------------------------------
                string _tabBreakPattern = @"[ \t]";
                //
                rx = new Regex(_tabBreakPattern, RegexOptions.Compiled | RegexOptions.IgnoreCase);
                //
                MatchCollection matchCollectiontabs = rx.Matches(xmlContent);
                //
                foreach (Match matchEntryTab in matchCollectiontabs)
                {
                    xmlContent = xmlContent.Replace(matchEntryTab.Value, string.Format(@"■", matchEntryTab.Value));
                }
                //-------------------------------------------------------------------------------------------
                // CONVERTGIR A CARACTERES LEGIBLES DE HTML
                //-------------------------------------------------------------------------------------------
                string xmlEncoded = HttpUtility.HtmlEncode(xmlContent);
                //    
                xmlEncoded = xmlEncoded.Replace(@"|", @"<br/>");
                xmlEncoded = xmlEncoded.Replace(@"■", @"&nbsp;");
                //
                //-------------------------------------------------------------------------------------------
                // PERSISTOR DATOS ENTRE SESIONES
                //-------------------------------------------------------------------------------------------
                //                             
                string p_textContent    = xmlEncoded;
                //                
                string p_textContentRaw = xmlContentRaw;
                //
                //--------------------------------------------------
                // LOG
                //--------------------------------------------------
                //
                LogModel.Log(
                                    string.Format("REGEX_XML. p_tagSearch='{0}', p_textSearch='{1}'"
                                                             , p_tagSearch
                                                             , p_textSearch)
                             );
                //
                LogModel.Log(
                                    string.Format("REGEX_XML. xmlContent='{0}', xmlContentRaw='{1}'"
                                                             , p_textContent.Length
                                                             , p_textSearch.Length)
                             );


                //--------------------------------------------------
                // SEARCH REGEX TEXT
                //--------------------------------------------------
                RegExManager regexManager = new RegExManager
                    (
                          p_tagSearch
                        , p_textSearch
                        , p_textContentRaw
                    );
                //
                status = regexManager.GetMaches();
                //
                LogModel.Log(
                            string.Format("REGEX_XML. Status ='{0}'"
                                         , status)
                            );
            }
            catch (Exception ex)
            {
                //
                LogModel.Log(string.Format("REGEX_ÈRROR. ='{0}'-'{1}'"
                                                         , ex.Message
                                                         , ex.StackTrace)
                            , string.Empty
                            , LogModel.LogType.Error);
            }
            //
            return status;
        }
    
        #endregion

        #region "Sort Benchmark Demo"
        //
        [Microsoft.AspNetCore.Mvc.HttpGet("_SortBenchMarkDemo")]
        public Microsoft.AspNetCore.Mvc.ActionResult _SortBenchMarkDemo()
        {
            //-------------------------------------------------
            // LLAMADO A LA PÁGINA "_SortBenchMarkDemo"
            //-------------------------------------------------

            try
            {
                //
                string unsortedListRaw = AlgorithmManager.GetUnsortedList
                    (
                          ARRAY_SIZE
                    );
                //
                string unsortedListEncoded = HttpUtility.HtmlEncode(unsortedListRaw).Replace("|", "<br/>");
                //
                this.ViewBag.Message = unsortedListEncoded;
                //
                base._httpContext.Session.SetString("unsortedList", unsortedListRaw);
                //
                LogModel.Log("PAGE_SORT_BENCHAMRK_DEMO", this.GetIpValue(), LogModel.LogType.Info);
            }
            catch
            {
                throw;
            }
            return View();
        }
        //
        [Microsoft.AspNetCore.Mvc.HttpGet("_GetSort")]
        public string _GetSort(ushort p_sortAlgoritm, string p_unsortedList = "")
        {
            //
            string  status = "OK";
            string  unsortedlist = "";
            //
            try
            {
                //--------------------------------------------------
                // DECLARACION DE VARIABLES 
                //--------------------------------------------------
                //
                LogModel.Log(String.Format("SORT_BENCHAMRK_DEMO. Unsorted List from Session : ", string.IsNullOrEmpty(this.HttpContext.Session.GetString("unsortedList"))? "[n/a]" : HttpContext.Session.GetString("unsortedList")) , this.GetIpValue(), LogModel.LogType.Info);
                //
                if (string.IsNullOrEmpty(p_unsortedList))
                    unsortedlist = base._httpContext.Session.GetString("unsortedList");
                else
                    unsortedlist = p_unsortedList;
                //                
                AlgorithmManager am = new AlgorithmManager
                    (
                          unsortedlist
                        , ARRAY_SIZE
                    );
                //
                switch (p_sortAlgoritm)
                {
                    case 1: // BUBBLE SORT
                        am.BubbleSort();
                        break;
                    case 2: // QUICK SORT
                        am.QuickSort();
                        break;
                    case 3: // TREE SORT
                        am.TreeSort();
                        break;
                }
                //
                string sortedList = string.Empty;
                //
                foreach (string sortStep in am.SortSteps)
                {
                    sortedList += string.Format("■|{0}|", sortStep);
                }
                //
                //ring sortedListEncoded = HttpUtility.HtmlEncode(sortedList).Replace("|", "<br/>");
                //
                string sortedListEncoded = sortedList.Replace("|", "<br/>");
                //
                status = sortedListEncoded;
                //
            }
            catch (Exception ex)
            {
                LogModel.Log(string.Format("SORT_BENCHMARK_ERROR. ='{0}'-'{1}'"
                                                             , ex.Message
                                                             , ex.StackTrace)
                            , string.Empty
                            , LogModel.LogType.Error);
            }
            //--------------------------------------------------
            // LOG
            //--------------------------------------------------
#if DEBUG
            LogModel.Log(string.Format("SORT_BENCHMARK . GET SORT : {0}", status));
#endif
            //
            return status;
        }
        //
        [Microsoft.AspNetCore.Mvc.HttpGet("_NewSort")]
        public string _NewSort()
        {
            //
            string status = "OK";
            try
            {
                //
                string unsortedListRaw = AlgorithmManager.GetUnsortedList
                        (
                             ARRAY_SIZE
                        );
                //
                //string unsortedListEncoded = HttpUtility.HtmlEncode(unsortedListRaw).Replace("|", "<br/>");
                string unsortedListEncoded   = (unsortedListRaw).Replace("|", "<br/>");
                //
                //Session["unsortedList"]       = unsortedListRaw;
                //this.TempData["unsortedList"] = unsortedListRaw;
                //base._httpContext.Session.SetString("unsortedList", unsortedListRaw);
                //
                status = unsortedListEncoded;
                //
            }
            catch (Exception ex)
            {
                LogModel.Log(string.Format("REGEX_ÈRROR. ='{0}'-'{1}'"
                                                      , ex.Message
                                                      , ex.StackTrace)
                            , string.Empty
                            , LogModel.LogType.Error
                            );
            }
            //--------------------------------------------------
            // LOG
            //--------------------------------------------------
#if DEBUG
            LogModel.Log(string.Format("SORT_BENCHMARK . NEW SORT : {0}", status));
#endif
            //
            return status;
        }
        //
        #endregion

        #region "Disjkstra DEMO"
        [Microsoft.AspNetCore.Mvc.HttpGet("_DijkstraDemo")]
        public Microsoft.AspNetCore.Mvc.ActionResult _DijkstraDemo()
        {
            //-------------------------------------------------
            // LLAMADO A LA PÁGINA "_DijkstraDemo"
            //-------------------------------------------------
            try
            {
                //
                ViewBag.Message = "";

                //
                LogModel.Log("PAGE_DIJKSTRA_DEMO", this.GetIpValue(), LogModel.LogType.Info);

            }
            catch
            {
                throw;
            }
            return View();
        }
        //
        [Microsoft.AspNetCore.Mvc.HttpGet("_GetGraph")]
        public string _GetGraph()
        {
            //--------------------------------------------------
            // DECLARACION DE VARIABLES
            //--------------------------------------------------
            string status = "ok";

            try
            {
                //--------------------------------------------------
                // LOG
                //--------------------------------------------------
#if DEBUG
                LogModel.Log("DIJKSTRA DEMO. GET_GRAPH");
#endif
                //--------------------------------------------------
                // CREAR GRAFO
                //--------------------------------------------------
                string vertexList = AlgorithmManager.Dijkstra();

                //--------------------------------------------------
                // CONVERTIR LISTADO A CADENA VISIBLE EN HTML
                //--------------------------------------------------
                string sortedListEncoded = string.Empty;
                sortedListEncoded        = HttpUtility.HtmlEncode(vertexList);
                sortedListEncoded        = sortedListEncoded.Replace(@",", @"<br/>");
                sortedListEncoded        = sortedListEncoded.Replace(@"\t", @"&nbsp;");
                //
                status = sortedListEncoded;
                //
            }
            catch (Exception ex)
            {
                LogModel.Log(string.Format("REGEX_ÈRROR. ='{0}'-'{1}'"
                                                      , ex.Message
                                                      , ex.StackTrace)
                             , string.Empty
                             , LogModel.LogType.Error
                             );
            }
            //
            return status;
        }
        //
        [Microsoft.AspNetCore.Mvc.HttpGet("_NewGraph")]
        public string _NewGraph()
        {
            //--------------------------------------------------
            // DECLARACION DE VARIABLES
            //--------------------------------------------------
            string status = "ok";

            try
            {
                //--------------------------------------------------
                // LOG
                //--------------------------------------------------
#if DEBUG
                LogModel.Log("DIJKSTRA DEMO. NEW_GRAPH");
#endif
            }
            catch (Exception ex)
            {
                LogModel.Log(
                             string.Format("REGEX_ÈRROR. ='{0}'-'{1}'"
                                                      , ex.Message
                                                      , ex.StackTrace
                             ));
            }
            //
            return status;
        }
        [Microsoft.AspNetCore.Mvc.HttpGet("GenerateRandomVertex")]
        public string GenerateRandomVertex(ushort p_vertexSize, ushort p_sourcePoint)
        {
            //
            ushort p_sampleSize = 23;
            string status       = string.Empty;

            //
            status = AlgorithmManager.GenerateRandomPoints(p_vertexSize, p_sampleSize, p_sourcePoint);

            //
            return status;
        }
        #endregion

        #region "Log / XLS DEMO"
        [Microsoft.AspNetCore.Mvc.HttpGet("_LogDemo")]
        public Microsoft.AspNetCore.Mvc.ActionResult _LogDemo()
        {
            //
            List<AccessLogEntity> ListadoAccessLog = new List<AccessLogEntity>();
            //
            try
            {
                //
                LogModel.Log("PAGE_ACCESS_LOG_DEMO", this.GetIpValue());
                //
                ListadoAccessLog = _logModel.GetAccessLog().GetRange(0, LOG_LIMIT);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
            //
            return View(ListadoAccessLog);
        }
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
                int count             = _logModel.GetAccessLog().Count;
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
                XlsManager xlsManager  = new XlsManager(resultFilePath, ListadoAccessLog);
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
        [Microsoft.AspNetCore.Mvc.HttpPost("GetConsultaLogStatPost")]
        public Microsoft.AspNetCore.Mvc.JsonResult GetConsultaLogStatPost()
        {
            //
            List<AccessLogEntity> list = _logModel.GetAccessLogSTAT();
            //
            var json = Json(list);
            //
            return json;
        }
        //
        [Microsoft.AspNetCore.Mvc.HttpGet("GetConsultaLogStatGet")]
        public Microsoft.AspNetCore.Mvc.JsonResult GetConsultaLogStatGet()
        {
            //
            //List<AccessLogEntity> list = _logModel.GetAccessLogSTAT();
            //
            JsonResult json = (JsonResult)base._memoryCache.Get("InformeXLSJson");
            //
            LogModel.Log(String.Format("LOG_DEMO | Get json from Cache : {0}", json));
            //
            return json;
        }
        //
        [Microsoft.AspNetCore.Mvc.HttpGet("_SetSTATBarCache")]
        public string _SetSTATBarCache()
        {
            //
            List<AccessLogEntity> list = _logModel.GetAccessLogSTAT();
            //
            var json = Json(list);
            //
            base._memoryCache.Set("InformeXLSJson", json);
            //
            LogModel.Log(String.Format("LOG_DEMO | Set json to Cache : {0}"
                    , base._memoryCache.Get("InformeXLSJson").ToString().Substring(0, 15)));
            //
            return "ok";
        }
        #endregion

        #region "SUDOKU"
        //
        [Microsoft.AspNetCore.Mvc.HttpPost("Sudoku_Upload_File")]
        public JsonResult Sudoku_Upload_File()
        {
            //
            string wwwPath          = this._env.WebRootPath;
            string contentPath      = this._env.ContentRootPath;
            string uploadedFileName = string.Format(@"[]");
            //
            string path             = wwwPath + @"\Output\UploadedFiles\";
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
            string fileContent      = System.IO.File.ReadAllText(uploadedFilePath);
            //
            return Json(fileContent);
        }
        #endregion

        #endregion
    }
}