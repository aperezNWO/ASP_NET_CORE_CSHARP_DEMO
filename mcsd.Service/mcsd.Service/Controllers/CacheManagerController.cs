using mcsd.Core.Library.DataAccess.Entity;
using mcsd.Core.Library.DataAccess.Models;
using mcsd.Web.Controllers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System;

namespace mcsd.Service.Controllers
{
    [ApiController]
    [Route("api/[controller]/")]
    public class CacheManagerController : BaseApiController
    {
        #region "CONSTRUCTOR"
        public CacheManagerController(IConfiguration configuration
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
      
        //
        [Microsoft.AspNetCore.Mvc.HttpGet("GenerarInformeCSVJsonSTAT")]
        public Microsoft.AspNetCore.Mvc.JsonResult GenerarInformeCSVJsonSTAT()
        {
            //
            string status = "OK";
            //
            JsonResult json;
            //
            //List<PersonaEntity> listadoPersonas = null;
            //
            try
            {
                //
                // listadoPersonas = new PersonasModel(this._connString).ListadoPersonasSTAT();
                //
                json = (JsonResult)base._memoryCache.Get("listadoPersonasJson");
                //
                LogModel.Log(String.Format("CSV_DEMO | Get json from Cache : {0}", json));
            }
            catch (Exception ex)
            {
                //
                status = String.Format("PAGE_CSV_DEMO | ERROR | {0}-{1}", ex.Message, ex.StackTrace);
                //
                LogModel.Log(status, GetIpValue(), LogModel.LogType.Error);
                //
                throw;
            }

            //
            //var json = Json(listadoPersonas);
            //json.MaxJsonLength = int.MaxValue;
            //
            return json;
        }

        //
        [Microsoft.AspNetCore.Mvc.HttpGet("SetSTATPieCache")]
        public string SetSTATPieCache()
        {
            //
            string status = "OK";
            //
            List<PersonaEntity> listadoPersonas = null;
            //
            try
            {
                //
                listadoPersonas = new PersonasModel(this._connString).ListadoPersonasSTAT();
                //
                var json = Json(listadoPersonas);
                //
                base._memoryCache.Set("listadoPersonasJson", json);
                //
                LogModel.Log(String.Format("PAGE_CSV_DEMO |  : Set json to Cache : {0}"
                        , base._memoryCache.Get("listadoPersonasJson").ToString().Substring(0, 15)));
            }
            catch (Exception ex)
            {
                //
                status = String.Format("PAGE_CSV_DEMO | ERROR | {0}-{1}", ex.Message, ex.StackTrace);
                //
                LogModel.Log(status, GetIpValue(), LogModel.LogType.Error);
                //
                throw;
            }
            return status;

        }

        //
        [Microsoft.AspNetCore.Mvc.HttpGet("GetConsultaLogStatGet")]
        public Microsoft.AspNetCore.Mvc.JsonResult GetConsultaLogStatGet()
        {
            //
            JsonResult json = (JsonResult)base._memoryCache.Get("InformeXLSJson");
            //
            LogModel.Log(String.Format("LOG_DEMO | Get json from Cache : {0}", json));
            //
            return json;
        }

        //
        [Microsoft.AspNetCore.Mvc.HttpGet("SetSTATBarCache")]
        public string SetSTATBarCache()
        {
            //
            List<AccessLogEntity> list = _logModel.GetAccessLogSTAT();
            //
            var json = Json(list);
            //
            base._memoryCache.Set("InformeXLSJson", json);
            //
            LogModel.Log(String.Format("LOG_DEMO | Set json to Cache : {0}"
                    , base._memoryCache.Get("InformeXLSJson").ToString().Substring(0, 15)));
            //
            return "ok";
        }

        #endregion
    }
}
