using mcsd.Core.Library.DataAccess.Models;
using mcsd.Library.Managers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;
using System.Web;
using System;
using mcsd.Library;
using mcsd.Library.Managers;
using mcsd.Core.Library.DataAccess.Entity;
using mcsd.Core.Library.DataAccess.Models;
using mcsd.Web.Controllers;

namespace mcsd.Service.Controllers
{

    [ApiController]
    [Route("api/[controller]/")]

    public class AlgorithmController : BaseApiController
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
        public AlgorithmController(IConfiguration configuration
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
                string filePath = string.Format(@"{0}\{1}", _env.WebRootPath, @"\xml\cdCatalog.xml"); /*Server.MapPath(@"~/xml/cdCatalog.xml");*/
                string xmlContent = System.IO.File.ReadAllText(filePath);
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
                string? session_xmlContent = string.Empty;
                string? session_xmlContentRaw = string.Empty;
                //
                base._memoryCache.TryGetValue("xmlContent", out session_xmlContent);
                base._memoryCache.TryGetValue("xmlContentRaw", out session_xmlContentRaw);
                //
                LogModel.Log(
                    string.Format("REGEX_XML (From CACHE). xmlContent='{0}', xmlContentRaw='{1}'"
                                             , session_xmlContent.Substring(0, 15) ?? "[n/a]"
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
                string? session_xmlContent = string.Empty;
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
                string xmlContent = session_xmlContent;
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
                string p_textContent = xmlEncoded;
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
            string status = "OK";
            string unsortedlist = "";
            //
            try
            {
                //--------------------------------------------------
                // DECLARACION DE VARIABLES 
                //--------------------------------------------------
                //
                LogModel.Log(String.Format("SORT_BENCHAMRK_DEMO. Unsorted List from Session : ", string.IsNullOrEmpty(this.HttpContext.Session.GetString("unsortedList")) ? "[n/a]" : HttpContext.Session.GetString("unsortedList")), this.GetIpValue(), LogModel.LogType.Info);
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
                string unsortedListEncoded = (unsortedListRaw).Replace("|", "<br/>");
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
            string status = string.Empty;

            //
            status = AlgorithmManager.GenerateRandomPoints(p_vertexSize, p_sampleSize, p_sourcePoint);

            //
            return status;
        }
        #endregion

        #region "SUDOKU"
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
        #endregion

    }
}
