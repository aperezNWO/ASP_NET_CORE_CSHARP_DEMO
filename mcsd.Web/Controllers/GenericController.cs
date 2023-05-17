using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using mcsd.Web.Controllers;
using mcsd.Library.DataAccess;
using Microsoft.AspNetCore.Http.Features;

namespace mcsd.Web.Controllers
{
    public class GenericController : Controller
    {
        #region "Campos"
        //
        protected  IConfiguration        _configuration;
        protected  IWebHostEnvironment   _env;
        protected  LogModel              _logModel;
        protected  string                _connString;
        #endregion

        #region "Metodos"
        public string GetIpValue()
        {
            var remoteIpAddress = HttpContext.Features.Get<IHttpConnectionFeature>()?.RemoteIpAddress;
            //
            return remoteIpAddress.ToString();
        }
        #endregion

        #region "Constructor"
        public GenericController (IConfiguration configuration, IWebHostEnvironment env)
        {
            this._configuration   = configuration;
            this._connString      = _configuration.GetConnectionString("defaultConnection");
            this._logModel        = new LogModel(this._connString);
            this._env             = env;
        }
    #endregion
}
}