using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;
using System.Web;
using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using mcsd.Library;
using mcsd.Library.Managers;
using mcsd.Core.Library.DataAccess.Models;
using mcsd.Core.Library.DataAccess.Models;
using mcsd.Web.Controllers;

namespace mcsd.Service.Controllers
{

    [ApiController]
    [Route("api/[controller]/")]

    public class AlgorithmController : BaseApiController
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

        #region "Sort Benchmark Demo"
   
        //
        [Microsoft.AspNetCore.Mvc.HttpGet("GetSort")]
        public string GetSort(ushort p_sortAlgoritm, string p_unsortedList = "")
        {
            //
            string status       = "OK";
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
                string sortedListEncoded = sortedList.Replace("|", "<br/>");
                //
                status = sortedListEncoded;
                //
            }
            catch (Exception ex)
            {
                //
                string errorMsg = string.Format("SORT_BENCHMARK_ERROR. ='{0}'-'{1}'"
                                                             , ex.Message
                                                             , ex.StackTrace);
                //
                LogModel.Log(errorMsg
                            , string.Empty
                            , LogModel.LogType.Error);

                //
                status = errorMsg;
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
        [Microsoft.AspNetCore.Mvc.HttpGet("NewSort")]
        public string NewSort()
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
                    string fileName          = Path.GetFileName(postedFile.FileName);
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
