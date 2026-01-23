using mcsd.Core.Library.DataAccess.Entity;
using mcsd.Core.Library.DataAccess.Models;
using mcsd.Library.Managers;
using mcsd.Library;
using mcsd.Web.Controllers;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using System;

namespace mcsd.Service.Controllers
{
    [ApiController]
    [Route("api/[controller]/")]
    public class CSVManagerController : BaseApiController
    {
        #region "CONSTRUCTOR"
        public CSVManagerController(IConfiguration configuration
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

        #region "CSV ASYNC DEMO"

        // 
        [Microsoft.AspNetCore.Mvc.HttpGet("SetCSV")]
        public string SetCSV()
        {
            //
            string status = "ok";
            //
            try
            {
                //------------------------------------------------------------------------------------------------------
                // OBTENER DATOS
                //------------------------------------------------------------------------------------------------------
                DataTable maestroListado = new PersonasModel(this._connString).ListadoPersonasDataTable();

                //------------------------------------------------------------------------------------------------------
                // DECLARACION DE VARIABLES
                //------------------------------------------------------------------------------------------------------
                Globals.AsyncTaskType asyncType = Globals.AsyncTaskType.CSVExnacato;
                string rootPath = this._env.WebRootPath;
                //------------------------------------------------------------------------------------------------------
                // INSTANCIACION DE CLASE 
                //------------------------------------------------------------------------------------------------------
                //
                CSVManager csvManager = new CSVManager
                    (
                          asyncType
                        , maestroListado
                        , rootPath
                    );
                status = csvManager.GetCSV();
                //------------------------------------------------------------------------------------------------------
                // LOG
                //------------------------------------------------------------------------------------------------------
#if DEBUG
                LogModel.Log("CSV_ASYNC");

                LogModel.Log(string.Format("ROOT_PATH : {0}", rootPath));

                LogModel.Log(string.Format("ROOT_FILE : {0}", status));

                LogModel.Log(string.Format("RECORD_AMT : {0}", maestroListado.Rows.Count));
#endif

            }
            catch (Exception e)
            {
                //
                string errorMsg = string.Format("CSV_ERROR : {0}", e.InnerException.Message + " " + e.StackTrace);
                //
                LogModel.Log(errorMsg, string.Empty, LogModel.LogType.Error);
                //
                status = errorMsg;
            }

            return status;
        }

        //
        [Microsoft.AspNetCore.Mvc.HttpPost("GetCSVLink")]
        public async Task<String> GetCSVLink()
        {
            return await Task<String>.Factory.StartNew(() =>
            {
                //
                string status = "ok";
                //
                try
                {
                    //------------------------------------------------------------------------------------------------------
                    // OBTENER DATOS
                    //------------------------------------------------------------------------------------------------------
                    DataTable maestroListado = new PersonasModel(this._connString).ListadoPersonasDataTable();

                    //------------------------------------------------------------------------------------------------------
                    // DECLARACION DE VARIABLES
                    //------------------------------------------------------------------------------------------------------
                    Globals.AsyncTaskType asyncType = Globals.AsyncTaskType.CSVExnacato;
                    string rootPath = this._env.WebRootPath;
                    //------------------------------------------------------------------------------------------------------
                    // INSTANCIACION DE CLASE 
                    //------------------------------------------------------------------------------------------------------
                    //
                    CSVManager csvManager = new CSVManager
                        (
                              asyncType
                            , maestroListado
                            , rootPath
                        );
                    status = csvManager.GetCSV();
                    //------------------------------------------------------------------------------------------------------
                    // LOG
                    //------------------------------------------------------------------------------------------------------
#if DEBUG
                    LogModel.Log("CSV_ASYNC");

                    LogModel.Log(string.Format("ROOT_PATH : {0}", rootPath));

                    LogModel.Log(string.Format("ROOT_FILE : {0}", status));

                    LogModel.Log(string.Format("RECORD_AMT : {0}", maestroListado.Rows.Count));
#endif

                }
                catch (Exception e)
                {
                    //
                    string errorMsg = string.Format("CSV_ERROR : {0}", e.InnerException.Message + " " + e.StackTrace);
                    //
                    LogModel.Log(errorMsg, string.Empty, LogModel.LogType.Error);
                    //
                    status = errorMsg;
                }

                return status;

            });
        }

        //
        [Microsoft.AspNetCore.Mvc.HttpPost("GetCSVLinkJson")]
        public async Task<JsonResult> GetCSVLinkJson()
        {
            return await Task<JsonResult>.Factory.StartNew(() =>
            {
                //
                string status = "ok";
                //
                try
                {
                    //------------------------------------------------------------------------------------------------------
                    // OBTENER DATOS
                    //------------------------------------------------------------------------------------------------------
                    DataTable maestroListado = new PersonasModel(this._connString).ListadoPersonasDataTable();

                    //------------------------------------------------------------------------------------------------------
                    // DECLARACION DE VARIABLES
                    //------------------------------------------------------------------------------------------------------
                    Globals.AsyncTaskType asyncType = Globals.AsyncTaskType.CSVExnacato;
                    string rootPath = this._env.WebRootPath;
                    //------------------------------------------------------------------------------------------------------
                    // INSTANCIACION DE CLASE 
                    //------------------------------------------------------------------------------------------------------
                    //
                    CSVManager csvManager = new CSVManager
                        (
                              asyncType
                            , maestroListado
                            , rootPath
                        );
                    status = csvManager.GetCSV();
                    //------------------------------------------------------------------------------------------------------
                    // LOG
                    //------------------------------------------------------------------------------------------------------
#if DEBUG
                    LogModel.Log("CSV_ASYNC");

                    LogModel.Log(string.Format("ROOT_PATH : {0}", rootPath));

                    LogModel.Log(string.Format("ROOT_FILE : {0}", status));

                    LogModel.Log(string.Format("RECORD_AMT : {0}", maestroListado.Rows.Count));
#endif

                }
                catch (Exception e)
                {
                    //
                    string errorMsg = string.Format("CSV_ERROR : {0}", e.InnerException.Message + " " + e.StackTrace);
                    //
                    LogModel.Log(errorMsg, string.Empty, LogModel.LogType.Error);
                    //
                    status = errorMsg;
                }

                return Json(status);

            });
        }

        //
        [Microsoft.AspNetCore.Mvc.HttpGet("GetCSVLinkJsonGET")]
        public async Task<JsonResult> GetCSVLinkJsonGET()
        {
            return await Task<JsonResult>.Factory.StartNew(() =>
            {
                //
                string status = "ok";
                //
                try
                {
                    //------------------------------------------------------------------------------------------------------
                    // OBTENER DATOS
                    //------------------------------------------------------------------------------------------------------
                    DataTable maestroListado = new PersonasModel(this._connString).ListadoPersonasDataTable();

                    //------------------------------------------------------------------------------------------------------
                    // DECLARACION DE VARIABLES
                    //------------------------------------------------------------------------------------------------------
                    Globals.AsyncTaskType asyncType = Globals.AsyncTaskType.CSVExnacato;
                    string rootPath = this._env.WebRootPath;
                    //------------------------------------------------------------------------------------------------------
                    // INSTANCIACION DE CLASE 
                    //------------------------------------------------------------------------------------------------------
                    //
                    CSVManager csvManager = new CSVManager
                        (
                              asyncType
                            , maestroListado
                            , rootPath
                        );
                    status = csvManager.GetCSV();
                    //------------------------------------------------------------------------------------------------------
                    // LOG
                    //------------------------------------------------------------------------------------------------------
#if DEBUG
                    LogModel.Log("CSV_ASYNC");

                    LogModel.Log(string.Format("ROOT_PATH : {0}", rootPath));

                    LogModel.Log(string.Format("ROOT_FILE : {0}", status));

                    LogModel.Log(string.Format("RECORD_AMT : {0}", maestroListado.Rows.Count));
#endif

                }
                catch (Exception e)
                {
                    //
                    string errorMsg = string.Format("CSV_ERROR : {0}", e.InnerException.Message + " " + e.StackTrace);
                    //
                    LogModel.Log(errorMsg, string.Empty, LogModel.LogType.Error);
                    //
                    status = errorMsg;
                }

                return Json(status);

            });
        }

        //
        [Microsoft.AspNetCore.Mvc.HttpGet("GenerarInformeCSVJson")]
        public Microsoft.AspNetCore.Mvc.JsonResult GenerarInformeCSVJson()
        {
            //
            string status = "OK";
            List<PersonaEntity> listadoPersonas = null;
            //
            try
            {
                //
                listadoPersonas = new PersonasModel(this._connString).ListadoPersonas();
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
            var json = Json(listadoPersonas);
            //json.MaxJsonLength = int.MaxValue;
            //
            return json;
        }

        //
        [Microsoft.AspNetCore.Mvc.HttpGet("GenerarInformeCSVJsonStr")]
        public string GenerarInformeCSVJsonStr()
        {
            //
            string status = "OK";
            List<PersonaEntity> listadoPersonas = null;
            //
            try
            {
                //
                listadoPersonas = new PersonasModel(this._connString).ListadoPersonas();
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

            return listadoPersonas.ToArray().ToString();
        }

        #endregion
    }
}
