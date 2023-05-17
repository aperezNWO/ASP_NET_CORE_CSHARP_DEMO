using System;
using System.Collections.Generic;
using System.Data;
using System.Globalization;
using System.IO;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web;
using System.Runtime.InteropServices;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using mcsd.Library;
using mcsd.Library.DataAccess;
using mcsd.Library.DataAccess.Entity;
using mcsd.Library.Managers;

namespace mcsd.Web.Controllers
{
    public class DemosController : GenericController
    {
        #region "Constantes"
        private const int LOG_LIMIT = 100;
        #endregion

        #region "DLL Import"
        [DllImport(@"Algorithm.dll", EntryPoint = @"Run", CharSet = CharSet.Ansi)]
        public static extern IntPtr Run(int numberOne, int numberTwo, out char return_value_c);
        #endregion

        #region "Campos"
        int ARRAY_SIZE = 25;
        #endregion

        #region "Constructor"
        public DemosController(IConfiguration configuration, IWebHostEnvironment env)
            : base(configuration, env)
        {
            //
        }
        #endregion

        #region "Metodos"

        #region "Raiz"
        //
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
            return View();
        }
        //
        #endregion

        #region "PDF DEMO"
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
        //
        public string _GetPdf(string subjectName)
        {
            //
            string _extensionDocumento  = @"pdf";
            string _directorioDocumento = string.Format(@"\Output\UploadedFiles\{0}\", _extensionDocumento);
            string status               = @"[ok]";

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
                wrapperhtml = wrapperhtml.Replace("[CONTENT]"       , subjectName);
                wrapperhtml = wrapperhtml.Replace("[CURRENT_DATE]"  , currentDate);
                wrapperhtml = wrapperhtml.Replace("[IMAGE]"         , htmlContent);
                wrapperhtml = wrapperhtml.Replace("[IMAGE_PATH]"    , mcsdImagePath);
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
        #endregion

        #region "CSV ASYNC DEMO"
        //
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
                    string rootPath                 = this._env.WebRootPath/*Server.MapPath("~/")*/;
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
        [Microsoft.AspNetCore.Mvc.HttpPost]
        public async Task<String> _SetCSV()
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
                    string rootPath                 = this._env.WebRootPath/*Server.MapPath("~/")*/;
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
        [Microsoft.AspNetCore.Mvc.HttpGet]
        public Microsoft.AspNetCore.Mvc.JsonResult GenerarInformeCSVJson()
        {
            //
            string status                       = "OK";
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
            var json           = Json(listadoPersonas);
            //json.MaxJsonLength = int.MaxValue;
            //
            return json;
        }
        //
        [Microsoft.AspNetCore.Mvc.HttpGet]
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
        [Microsoft.AspNetCore.Mvc.HttpGet]
        public Microsoft.AspNetCore.Mvc.JsonResult GenerarInformeCSVJsonSTAT()
        {
            //
            string status = "OK";
            List<PersonaEntity> listadoPersonas = null;
            //
            try
            {
                //
                listadoPersonas = new PersonasModel(this._connString).ListadoPersonasSTAT();
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
        #endregion

        #region "ZIP ASYNC DEMO"
        //
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
        [Microsoft.AspNetCore.Mvc.HttpPost]
        public IActionResult _ZipDemo(List<IFormFile> postedFiles)
        {
            //
            string wwwPath     = this._env.WebRootPath;
            string contentPath = this._env.ContentRootPath;
            //
            string path        = wwwPath + @"\Output\UploadedFiles\";
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
        [Microsoft.AspNetCore.Mvc.HttpPost]
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
        #endregion

        #region "Regex DEMO"
        public Microsoft.AspNetCore.Mvc.ActionResult _RegExDemo()
        {
            //-------------------------------------------------
            // LLAMADO A LA PÁGINA "_RegexDemo"
            //-------------------------------------------------

            try
            {
                //
                string filePath       = string.Format(@"{0}\{1}", _env.WebRootPath,@"\xml\cdCatalog.xml"); /*Server.MapPath(@"~/xml/cdCatalog.xml");*/
                string xmlContent     = System.IO.File.ReadAllText(filePath);
                string xmlContentRaw  = xmlContent;
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
                //
                //-------------------------------------------------------------------------------------------
                ViewBag.Message = xmlEncoded;
                //
                HttpContext.Session.SetString("xmlContent", xmlEncoded);
                //
                HttpContext.Session.SetString("xmlContentRaw", xmlContentRaw);
                //
                ViewBag.RegEx = string.Empty;
                //
                LogModel.Log("PAGE_REGEX_DEMO", this.GetIpValue(), LogModel.LogType.Info);
            }
            catch 
            {
                throw ;
            }
            return View();
        }
        //
        public string _RegExEval
            (
                  string p_tagSearch
                , string p_textSearch
            )
        {
            //
            string p_textContent    = HttpContext.Session.GetString("xmlContent");
            //                
            string p_textContentRaw = HttpContext.Session.GetString("xmlContentRaw");
            //
            string status = "0";
            //
            try
            {
                //--------------------------------------------------
                // LOG
                //--------------------------------------------------
#if DEBUG
                //
                LogModel.Log(
                                    string.Format("REGEX_XML. p_tagSearch='{0}', p_textSearch='{1}'"
                                                             , p_tagSearch
                                                             , p_textSearch)
                             );
#endif
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
#if DEBUG
                LogModel.Log(
                            string.Format("REGEX_XML. Status ='{0}'"
                                         , status)
                            );
#endif
                //
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
        //
        public string _NewSearch()
        {
            //-------------------------------------------------
            // LLAMADO A LA PÁGINA 
            //-------------------------------------------------
            string xmlContent = string.Empty;
            //
            try
            {
                //
                xmlContent = HttpContext.Session.GetString("xmlContent");
                //
            }
            catch 
            {
                throw;
            }
            //
            return xmlContent;
        }
        #endregion

        #region "Sort Benchmark Demo"
        //
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
                //Session["unsortedList"]         =  unsortedListRaw;
                //this.TempData["unsortedList"]   = unsortedListRaw;
                HttpContext.Session.SetString("unsortedList", unsortedListRaw);
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
        public string _GetSort(ushort p_sortAlgoritm)
        {
            //
            string status = "OK";
            //
            try
            {
                //--------------------------------------------------
                // DECLARACION DE VARIABLES 
                //--------------------------------------------------
                //
                //string unsortedList = (string)this.TempData["unsortedList"]; /*Session["unsortedList"].ToString()*/;
                string unsortedList = HttpContext.Session.GetString("unsortedList");
                //                
                AlgorithmManager am = new AlgorithmManager
                    (
                          unsortedList
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
                string sortedListEncoded = HttpUtility.HtmlEncode(sortedList).Replace("|", "<br/>");
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
                string unsortedListEncoded = HttpUtility.HtmlEncode(unsortedListRaw).Replace("|", "<br/>");
                //
                //Session["unsortedList"]       = unsortedListRaw;
                //this.TempData["unsortedList"] = unsortedListRaw;
                HttpContext.Session.SetString("unsortedList", unsortedListRaw);
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
                sortedListEncoded = HttpUtility.HtmlEncode(vertexList);
                sortedListEncoded = sortedListEncoded.Replace(@",", @"<br/>");
                sortedListEncoded = sortedListEncoded.Replace(@"\t", @"&nbsp;");
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

        public string GenerateRandomVertex(ushort p_vertexSize, ushort p_sourcePoint)
        {
            //
            ushort p_sampleSize = 23;
            string status = string.Empty;

            //
            status = AlgorithmManager.GenerateRandomPoints(p_vertexSize, p_sampleSize, p_sourcePoint);

            //
            return status;
        }

        #endregion

        #region "Log / XLS DEMO"
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
                //
            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
            //
            return View(ListadoAccessLog);
        }

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
                string resultFilePath         = string.Format(@"{0}\{1}", _env.WebRootPath, resultRelativeFilePath);  
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
                string resultFilePath         = String.Format(@"{0}\{1}", _env.WebRootPath, resultRelativeFilePath);  /*Server.MapPath(resultRelativeFilePath)*/;
                //
                ListadoAccessLog              = _logModel.GetAccessLog().GetRange(0, LOG_LIMIT);
                //
                XlsManager xlsManager         = new XlsManager(resultFilePath, ListadoAccessLog);
                bool xlsManagerSuccess        = xlsManager.GetXLS();
                status                        = ((xlsManagerSuccess) == true) ? _nombreDocumento : @"[ERROR XLS Manager]";
                //
                LogModel.Log(status, GetIpValue(), ((xlsManagerSuccess) == true)? LogModel.LogType.Info : LogModel.LogType.Error);
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

        [HttpPost]
        public Microsoft.AspNetCore.Mvc.JsonResult GetConsultaLogStatPost()
        {
            //
            List<AccessLogEntity> list = _logModel.GetAccessLogSTAT();
            //
            var json            = Json(list);
            //
            return json;
        }
        #endregion

        #region "NEURAL NETWORK DEMO"
        public Microsoft.AspNetCore.Mvc.ActionResult _NeuralNetworkDemo()
        {
            //-------------------------------------------------
            // LLAMADO A LA PÁGINA "_DijkstraDemo"
            //-------------------------------------------------
            try
            {
                //
                ViewBag.Message = "";

                //
                LogModel.Log("PAGE_NEURAL_NETWORK_DEMO", this.GetIpValue(), LogModel.LogType.Info);

            }
            catch 
            {
                throw;
            }
            return View();
        }

        #endregion

        #region "CPP DEMO"
        public Microsoft.AspNetCore.Mvc.ActionResult _CppDemo()
        {
            //
            try
            {
                //
                LogModel.Log("PAGE_CPP_DEMO", this.GetIpValue());

            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
            //
            return View();
        }

        [Microsoft.AspNetCore.Mvc.HttpPost]
        public string SumCpp()
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

        #region "ANGULAR DEMO"
        public Microsoft.AspNetCore.Mvc.ActionResult _AngularDemo()
        {
            //
            try
            {
                //
                LogModel.Log("PAGE_ANGULAR_DEMO", this.GetIpValue());

            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
            //
            return View();
        }
        #endregion

        #region "MCSD EXAM DEMO"
        public Microsoft.AspNetCore.Mvc.ActionResult _MCSD_Demo()
        {
            //
            try
            {
                //
                LogModel.Log("PAGE_MCSD_EXAM_DEMO", this.GetIpValue());

            }
            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }
            //
            return View();
        }
        #endregion

        #endregion
    }
}