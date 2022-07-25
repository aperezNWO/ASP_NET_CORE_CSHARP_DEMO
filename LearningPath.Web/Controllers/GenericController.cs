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
using LearningPath.Web.Controllers;
using LearningPath.Library.DataAccess;
using LearningPath.Models;
using Microsoft.AspNetCore.Http.Features;

namespace LearningPath.Web.Controllers
{
    public class GenericController : Controller
    {
        #region "Campos"
        //
        protected  IConfiguration        _configuration;
        protected  IWebHostEnvironment   _env;
        protected  LogModel              _logModel;
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
            this._configuration  = configuration;
            string connString    = _configuration.GetConnectionString("defaultConnection");
            this._logModel        = new LogModel(connString);
            this._env            = env;
        }
    #endregion
}
}