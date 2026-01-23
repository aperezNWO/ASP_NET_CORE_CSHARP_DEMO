using mcsd.Core.Library.DataAccess.Models;
using mcsd.Library.Managers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using System.Text.RegularExpressions;
using System.Web;
using System;

namespace mcsd.Web.Controllers
{

    [ApiController]
    [Route("api/[controller]/")]
    public class RegExManagerController : BaseApiController
    {
        #region "CONSTRUCTOR"
        public RegExManagerController( IConfiguration       configuration
                                    , IWebHostEnvironment  env
                                    , IHttpContextAccessor p_httpContextAccessor
                                    , IMemoryCache         memoryCache)
            : base(   configuration
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
        [Microsoft.AspNetCore.Mvc.HttpGet("SetXmlDataToCache")]
        public string SetXmlDataToCache()
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
        [Microsoft.AspNetCore.Mvc.HttpGet("GetXmlData")]
        public string GetXmlData()
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

        //
        [Microsoft.AspNetCore.Mvc.HttpGet("RegExEval")]
        public string RegExEval
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
    }
}
