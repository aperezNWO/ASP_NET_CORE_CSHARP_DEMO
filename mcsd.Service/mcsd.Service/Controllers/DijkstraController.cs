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
