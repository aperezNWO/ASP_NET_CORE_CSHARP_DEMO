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

    public class FileManagerController  : BaseApiController
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
                string fileName = Path.GetFileName(postedFile.FileName);
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
                string fileName = TempData["UploadedFileName"].ToString();
                string uploadedFilePath = this._env.WebRootPath + @"\Output\UploadedFiles\" + Path.GetFileName(fileName);
                string extensionDocumento = "zip";
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
                string uploadedFilePath = this._env.WebRootPath + @"\Output\UploadedFiles\" + p_fileName;
                string extensionDocumento = "zip";
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
        [Microsoft.AspNetCore.Mvc.HttpGet("GetConsultaLogStatGet")]
        public Microsoft.AspNetCore.Mvc.JsonResult GetConsultaLogStatGet()
        {
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
        //
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
