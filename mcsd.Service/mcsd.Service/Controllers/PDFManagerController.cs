using mcsd.Core.Library.DataAccess.Models;
using mcsd.Library;
using mcsd.Web.Controllers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using System.Globalization;
using System;
using mcsd.Library.Managers;

namespace mcsd.Service.Controllers
{
    namespace mcsd.Service.Controllers
    {

        [ApiController]
        [Route("api/[controller]/")]
        public class PDFManagerController : BaseApiController
        {
            #region "Constructor"
            public PDFManagerController(IConfiguration configuration
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
    
            [Microsoft.AspNetCore.Mvc.HttpGet("GetPdf")]
            public string GetPdf(string subjectName)
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
                    PDFManager.GetPDFFile(
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

        }
    }
}
