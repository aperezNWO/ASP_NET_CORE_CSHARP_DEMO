using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;

namespace mcsd.Web.Controllers
{
    public class UnitTestingController : BaseApiController
    {
        #region "Constructor"
        public UnitTestingController( IConfiguration       configuration
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

        #region "Metodos"
        #endregion 

    }
}
