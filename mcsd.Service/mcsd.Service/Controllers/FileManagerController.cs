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
