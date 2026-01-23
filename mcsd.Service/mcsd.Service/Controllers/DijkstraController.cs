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
    public class DijkstraController : BaseApiController
    {
        #region "CONSTRUCTOR"
        public DijkstraController( IConfiguration       configuration
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
        [Microsoft.AspNetCore.Mvc.HttpGet("GetGraph")]
        public string GetGraph()
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
        [Microsoft.AspNetCore.Mvc.HttpGet("NewGraph")]
        public string NewGraph()
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

        //
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
    }
}
