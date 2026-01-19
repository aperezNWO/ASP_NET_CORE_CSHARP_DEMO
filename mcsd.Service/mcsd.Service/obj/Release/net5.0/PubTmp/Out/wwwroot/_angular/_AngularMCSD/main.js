"use strict";
(self["webpackChunkAngularDijkstra"] = self["webpackChunkAngularDijkstra"] || []).push([["main"],{

/***/ 4590:
/*!*******************************************!*\
  !*** ./src/app/_models/log-info.model.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogType: () => (/* binding */ LogType),
/* harmony export */   SearchCriteria: () => (/* binding */ SearchCriteria),
/* harmony export */   SortInfo: () => (/* binding */ SortInfo),
/* harmony export */   _languageName: () => (/* binding */ _languageName),
/* harmony export */   _vertexSize: () => (/* binding */ _vertexSize)
/* harmony export */ });
var LogType;
(function (LogType) {
  LogType[LogType["Info"] = 1] = "Info";
  LogType[LogType["Debug"] = 2] = "Debug";
  LogType[LogType["Error"] = 3] = "Error";
})(LogType || (LogType = {}));
;
//
class _vertexSize {
  //
  constructor(_index, _value) {
    this._index = _index;
    this._value = _value;
    //
  }
}
//
class SearchCriteria {
  //
  constructor(P_DATA_SOURCE_ID, P_ID_TIPO_LOG, P_ROW_NUM, P_FECHA_INICIO, P_FECHA_FIN, P_FECHA_INICIO_STR, P_FECHA_FIN_STR) {
    this.P_DATA_SOURCE_ID = P_DATA_SOURCE_ID;
    this.P_ID_TIPO_LOG = P_ID_TIPO_LOG;
    this.P_ROW_NUM = P_ROW_NUM;
    this.P_FECHA_INICIO = P_FECHA_INICIO;
    this.P_FECHA_FIN = P_FECHA_FIN;
    this.P_FECHA_INICIO_STR = P_FECHA_INICIO_STR;
    this.P_FECHA_FIN_STR = P_FECHA_FIN_STR;
    //
  }
}
//
class SortInfo {
  constructor(value, swap) {
    this.value = value;
    this.swap = swap;
    //
  }
}

class _languageName {
  //
  constructor(_index, _value) {
    this._index = _index;
    this._value = _value;
    //
  }
}

/***/ }),

/***/ 9048:
/*!*********************************************************************!*\
  !*** ./src/app/_modules/about/a-about-web/a-about-web.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AAboutWebComponent: () => (/* binding */ AAboutWebComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_mcsd_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_services/mcsd.service */ 1274);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.module */ 8629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




//
class AAboutWebComponent {
  //
  static get PageTitle() {
    //
    return '[ACERCA DE]';
  }
  //
  constructor(mcsdServiCe, customErrorHandler) {
    this.mcsdServiCe = mcsdServiCe;
    this.customErrorHandler = customErrorHandler;
    //
    this.pageTitle = AAboutWebComponent.PageTitle;
    //
    console.log(this.pageTitle + "- [INGRESO]");
    //
    mcsdServiCe.SetLog(this.pageTitle, "PAGE_ABOUT");
  }
}
AAboutWebComponent.ɵfac = function AAboutWebComponent_Factory(t) {
  return new (t || AAboutWebComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_mcsd_service__WEBPACK_IMPORTED_MODULE_0__.MCSDService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_module__WEBPACK_IMPORTED_MODULE_1__.CustomErrorHandler));
};
AAboutWebComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AAboutWebComponent,
  selectors: [["app-a-about-web"]],
  decls: 22,
  vars: 1,
  consts: [[1, "main-container"], ["routerLink", "/Contact"], ["routerLink", "/TechnicalSpecs"], ["href", "", "target", "_blank"], ["routerLink", "/Home"]],
  template: function AAboutWebComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "H4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "Ul")(4, "li")(5, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "[CONTACTO]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li")(8, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "[ESPECIFICACIONES TECNICAS]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li")(11, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "[COMENTARIOS] (LOGIN REQUIRED)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li")(14, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "[JOB SEARCH] (LOGIN REQUIRED)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li")(17, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "[LOGIN]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Volver al Men\u00FA");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pageTitle);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8355:
/*!*************************************************************!*\
  !*** ./src/app/_modules/about/contact/contact.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_mcsd_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_services/mcsd.service */ 1274);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.module */ 8629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




class ContactComponent {
  //
  static get PageTitle() {
    //
    return '[CONTACT]';
  }
  //
  constructor(mcsdServiCe, customErrorHandler) {
    this.mcsdServiCe = mcsdServiCe;
    this.customErrorHandler = customErrorHandler;
    //
    this.pageTitle = ContactComponent.PageTitle;
    //
    console.log(this.pageTitle + "- [INGRESO]");
    //
    mcsdServiCe.SetLog(this.pageTitle, "PAGE_CONTACT");
  }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) {
  return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_mcsd_service__WEBPACK_IMPORTED_MODULE_0__.MCSDService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_module__WEBPACK_IMPORTED_MODULE_1__.CustomErrorHandler));
};
ContactComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ContactComponent,
  selectors: [["app-contact"]],
  decls: 17,
  vars: 1,
  consts: [["href", "javascript: void window.open('mailto:alejandro.perez.acosta@gmail.com')"], ["href", "javascript: void window.open('http://www.linkedin.com/in/pablo-alejandro-p\u00E9rez-acosta-54765770')"], ["routerLink", "/AAboutWeb"]],
  template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "H4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "PABLO ALEJANDRO PEREZ ACOSTA");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "NET PROGRAMMER");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul")(8, "li")(9, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "EMAIL (alejandro.perez.acosta@hotmail.com)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li")(12, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "LINKEDIN");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "[Volver al Men\u00FA]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pageTitle);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3541:
/*!********************************************************************************************!*\
  !*** ./src/app/_modules/about/technicalspecs/technical-specs/technical-specs.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TechnicalSpecsComponent: () => (/* binding */ TechnicalSpecsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3252);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app.component */ 6401);
/* harmony import */ var _services_mcsd_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_services/mcsd.service */ 1274);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app.module */ 8629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);







//
//
class TechnicalSpecsComponent {
  //
  static get PageTitle() {
    //
    return '[ESPECIFICACIONES TÉCNICAS]';
  }
  //
  constructor(mcsdService, customErrorHandler) {
    this.mcsdService = mcsdService;
    this.customErrorHandler = customErrorHandler;
    //
    this.appName = _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent.appName;
    this.appVersion = _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent.appVersion;
    this.runtimeVersion = _angular_core__WEBPACK_IMPORTED_MODULE_3__.VERSION.full;
    this.webApiAppVersion = "";
    //
    this.pageTitle = TechnicalSpecsComponent.PageTitle;
    //
    console.log(this.pageTitle + "- [INGRESO]");
    //
    mcsdService.SetLog(this.pageTitle, "PAGE_TECH_SPECS");
    //
    this._GetWebApiAppVersion();
  }
  //
  _GetWebApiAppVersion() {
    //
    let appVersion = this.mcsdService._GetWebApiAppVersion();
    //
    const appVersionObserver = {
      next: jsondata => {
        //
        console.log('_GetAppVersion - (return): ' + jsondata);
        //
        this.webApiAppVersion = jsondata;
        //
        console.log(this.pageTitle + "- [webApiVersion] - " + this.webApiAppVersion);
      },
      error: err => {
        //
        console.error('_GetAppVersion- (ERROR) : ' + JSON.stringify(err.message));
      },
      complete: () => {
        //
        console.log('_GetAppVersion -  (COMPLETE)');
      }
    };
    //
    appVersion.subscribe(appVersionObserver);
  }
  //
  TestError() {
    //
    let obs;
    obs = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)("[ERROR THROWN TEST]");
    //
    obs.subscribe(el => {
      console.log("Value Received :" + el);
    }, err => {
      console.log("[ERROR CAUGTH TEST ] : " + err);
    }, () => console.log("Processing Complete"));
    // CAUSAR ERROR
    // @ts-ignore 
    test = test + 1;
  }
}
TechnicalSpecsComponent.ɵfac = function TechnicalSpecsComponent_Factory(t) {
  return new (t || TechnicalSpecsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_mcsd_service__WEBPACK_IMPORTED_MODULE_1__.MCSDService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_app_module__WEBPACK_IMPORTED_MODULE_2__.CustomErrorHandler));
};
TechnicalSpecsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: TechnicalSpecsComponent,
  selectors: [["app-technical-specs"]],
  decls: 37,
  vars: 6,
  consts: [["href", "https://github.com/aperezNWO/AngularMCSD_Public", "target", "_blank"], ["href", "https://github.com/aperezNWO/mcsd_public", "target", "_blank"], ["routerLink", "/AAboutWeb"], ["id", "TestError", "type", "button", "title", "[TEST ERROR]", "value", "[TEST ERROR]", 3, "hidden", "click"]],
  template: function TechnicalSpecsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span")(1, "H4");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "UL")(5, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Source code ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Front End");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "here");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Source code ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Back End");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "here");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Angular Runtime : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "WebApi Version : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "[Volver al Men\u00FA]");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TechnicalSpecsComponent_Template_input_click_35_listener() {
        return ctx.TestError();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.pageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Aplication Name : ", ctx.appName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Aplication Version : ", ctx.appVersion, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.runtimeVersion);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.webApiAppVersion);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", false);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1571:
/*!***************************************************************************************!*\
  !*** ./src/app/_modules/algorithm/algorithm-dijkstra/algorithm-dijkstra.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlgorithmDijkstraComponent: () => (/* binding */ AlgorithmDijkstraComponent)
/* harmony export */ });
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html2canvas */ 6308);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ 797);
/* harmony import */ var _models_log_info_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_models/log-info.model */ 4590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_mcsd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/mcsd.service */ 1274);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.module */ 8629);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);









const _c0 = ["c_canvas"];
const _c1 = ["divCanvas_Pdf"];
const _c2 = ["_vertexSizeList"];
const _c3 = ["_sourcePointList"];
const _c4 = ["_distanceList"];
const _c5 = ["_languajeList"];
function AlgorithmDijkstraComponent_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _languageName_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", _languageName_r10._index);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_languageName_r10._value);
  }
}
function AlgorithmDijkstraComponent_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _vertexSize_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", _vertexSize_r11._index);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_vertexSize_r11._value);
  }
}
function AlgorithmDijkstraComponent_option_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _vertexSize_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", _vertexSize_r12._index);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_vertexSize_r12._value);
  }
}
function AlgorithmDijkstraComponent_option_58_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _vertexSize_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", _vertexSize_r13._index);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_vertexSize_r13._value);
  }
}
//
//
class AlgorithmDijkstraComponent {
  ////////////////////////////////////////////////////////////////
  // PROPERTIES //////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  //
  static get PageTitle() {
    return '[ALGORITMOS - DISTANCIA MAS CORTA]';
  }
  ////////////////////////////////////////////////////////////////
  // EVENT HANDLERS //////////////////////////////////////////////  
  ////////////////////////////////////////////////////////////////
  constructor(mcsdService, customErrorHandler) {
    this.mcsdService = mcsdService;
    this.customErrorHandler = customErrorHandler;
    ////////////////////////////////////////////////////////////////
    // VARIABLES ///////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    this.pageTitle = AlgorithmDijkstraComponent.PageTitle;
    this.vertexMax = 9;
    this.rectSize = 10;
    this.screenSize = 250;
    this.strokeStyleCafe = "#654321";
    this.strokeStyleVerde = "#006400";
    this.strokeStyleRed = "#ff0000";
    this.tituloListadoDistancias = "";
    this.tituloListadoLenguajes = "Seleccione Lenguaje";
    //
    this.PointListHidden = "";
    this.MatrixListHidden = "";
    // 
    this.selectedIndex = 0;
    this.selectedIndexLanguage = 0;
    this._cppSourceDivHidden = true;
    //
    mcsdService.SetLog(this.pageTitle, "PAGE_DIJKSTRA_DEMO");
  }
  //
  ngOnInit() {
    //
    console.log(AlgorithmDijkstraComponent.PageTitle + " - [INGRESO]");
    //
    this.DrawListItems();
    //
    this.DrawDistanceList(true, "");
  }
  //
  ngAfterViewInit() {
    //
    console.log(AlgorithmDijkstraComponent.PageTitle + " - [INICIO VISUAL]");
    //
    this._context = this.c_canvas.nativeElement.getContext('2d');
    //    
    this._ResetControls();
  }
  //
  _cppSourceDivHiddenChaged() {
    //
    console.log(AlgorithmDijkstraComponent.PageTitle + " - [DIV CPP SOURCE CHANGED]");
    //
    let _selectedIndex = this._languajeList.nativeElement.options.selectedIndex;
    this._cppSourceDivHidden = _selectedIndex != 2; // item 2 = "c++"
  }
  //
  _vertexSizeListChange() {
    //
    console.log(AlgorithmDijkstraComponent.PageTitle + " - [VERTEX SIZE LIST CHANGE]");
  }
  //
  _distanceListChange() {
    //
    console.log(AlgorithmDijkstraComponent.PageTitle + " - [DISTANCE LIST CHANGE]");
    //
    this.selectedIndex = this._distanceList.nativeElement.options.selectedIndex;
    let distanceListVal = this._distanceList.nativeElement.options[this.selectedIndex].text;
    //
    console.log(AlgorithmDijkstraComponent.PageTitle + " - [DISTANCE LIST CHANGE] - [Selected Index]: [" + this.selectedIndex + "]");
    //
    console.log(AlgorithmDijkstraComponent.PageTitle + " - [DISTANCE LIST CHANGE] - [Selected Text]: [" + distanceListVal + "]");
    //
    if (distanceListVal != "0") {
      //
      var pointList = this.PointListHidden.split("|");
      var matrixList = this.MatrixListHidden.split("|");
      //
      this.DrawGrid();
      //
      this.DrawPoints(pointList, this.strokeStyleCafe);
      //
      this.DrawLines(pointList, matrixList, this.strokeStyleVerde, false);
      //
      let distenceListItems = distanceListVal.split("-");
      let path = distenceListItems[2];
      //
      if (path != "") {
        //
        while (path.indexOf(";") != -1) {
          path = path.replace(";", ",");
        }
        //
        let selectedPoints = path.split("≡");
        let emptyPoints = new Array(pointList.length);
        //
        for (let index = 0; index < pointList.length; index++) {
          emptyPoints[index] = "[0,0]";
        }
        //
        for (let index_y = 0; index_y < selectedPoints.length; index_y++) {
          if (selectedPoints.length > 0) {
            //
            let selectedPointsVal = selectedPoints[index_y].replace("[", "").replace("]", "").split(",");
            if (selectedPointsVal.length > 0) {
              //
              let coordSource = Number.parseInt(selectedPointsVal[0]);
              var coordDest = Number.parseInt(selectedPointsVal[1]);
              //
              emptyPoints[coordSource] = pointList[coordSource];
              emptyPoints[coordDest] = pointList[coordDest];
            }
          }
        }
        // DRAW SHORTEST PATH
        this.DrawLines(emptyPoints, matrixList, this.strokeStyleRed, true);
      }
    }
  }
  ////////////////////////////////////////////////////////////////
  // METODOS BOTONES /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  //
  _ResetControls() {
    //
    console.log(AlgorithmDijkstraComponent.PageTitle + " - [Resetting controls]");
    //
    this.tituloListadoDistancias = "";
    //[x]
    this.DrawListItems();
    //[x]
    this.DrawDistanceList(true, "");
    //[x]
    this.PointListHidden = "";
    //[x]
    this.MatrixListHidden = "";
    //
    this._cppSourceDivHidden = true;
    //[X]
    this.DrawGrid();
  }
  // 
  _GetGraph() {
    //
    console.log(AlgorithmDijkstraComponent.PageTitle + " - [getting graph]");
    //
    let _vertexSize = Number.parseInt(this._vertexSizeList.nativeElement.value);
    let _sourcePoint = Number.parseInt(this._sourcePointList.nativeElement.value);
    //
    console.log(AlgorithmDijkstraComponent.PageTitle + " - [vertex size : " + _vertexSize + "]");
    //
    console.log(AlgorithmDijkstraComponent.PageTitle + " - [source point: " + _sourcePoint + "]");
    //
    let randomVertexInfo;
    //
    let _progLangId = Number.parseInt(this._languajeList.nativeElement.value);
    //
    switch (_progLangId) {
      case 0:
        // (SELECT LANGUAGE...)
        return;
        break;
      case 1:
        // c#
        randomVertexInfo = this.mcsdService.getRandomVertex(_vertexSize, _sourcePoint);
        break;
      case 2:
        // c++
        randomVertexInfo = this.mcsdService.getRandomVertexCpp(_vertexSize, _sourcePoint);
        break;
    }
    //
    let data;
    //
    const randomVertexObserver = {
      //
      next: randomVertexInfo => {
        //
        console.warn(AlgorithmDijkstraComponent.PageTitle + ' - [GETTING VERTEX VALUES]  - RETURN VALUE : ' + randomVertexInfo);
        //
        data = randomVertexInfo;
        //------------------------------------------------------------
        // OBTENER PUNTOS
        //------------------------------------------------------------
        let dataArray = data.split("■");
        //
        var pointsString = dataArray[0];
        //
        this.PointListHidden = pointsString;
        //
        //console.log('POINTS : ' + pointsString);
        //
        let pointArray = pointsString.split('|');
        //
        this.DrawPoints(pointArray, this.strokeStyleCafe);
        //
        //-------------------------------------------------------------
        // OBTENER MATRIZ - DIBUJAR LINEAS
        //-------------------------------------------------------------
        //
        let matrixString = dataArray[1];
        //
        //console.log('MATRIX : ' + matrixString);
        //
        let matrixArray = matrixString.split('|');
        //
        this.MatrixListHidden = matrixString;
        //
        this.DrawLines(pointArray, matrixArray, this.strokeStyleVerde, new Boolean(false));
        //            
        //-------------------------------------------------------------
        // OBTENER VERTICES DE DISTANCIAS
        //-------------------------------------------------------------
        var vertexString = dataArray[2];
        //
        // console.log('VERTEX : ' + vertexString);
        //-------------------------------------------------------------
        // CONFIGURA CONTROLES
        //-------------------------------------------------------------
        //
        let _sourcePoint = Number.parseInt(this._sourcePointList.nativeElement.value);
        this.tituloListadoDistancias = "Listado de Distancies desde [" + _sourcePoint.toString() + "]";
        //
        this.DrawDistanceList(false, vertexString);
      },
      error: err => {
        //
        console.error(AlgorithmDijkstraComponent.PageTitle + ' - [GETTING VERTEX VALUES] - [error] : ' + err.message);
      },
      complete: () => {
        //
        console.warn(AlgorithmDijkstraComponent.PageTitle + ' - [GETTING VERTEX VALUES] - [Observer got a complete notification]');
        //
      }
    };
    //
    randomVertexInfo.subscribe(randomVertexObserver);
  }
  ////////////////////////////////////////////////////////////////
  // METODOS GRAFICOS/////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  DrawGrid() {
    //
    console.log(AlgorithmDijkstraComponent.PageTitle + ' - [DRAWING GRID]');
    //
    this._context.clearRect(0, 0, this.c_canvas.nativeElement.width, this.c_canvas.nativeElement.height);
    this._context.beginPath();
    //
    for (var x = 0.5; x < 501; x += this.rectSize) {
      this._context.moveTo(x, 0);
      this._context.lineTo(x, 381);
    }
    //
    for (var y = 0.5; y < 381; y += this.rectSize) {
      this._context.moveTo(0, y);
      this._context.lineTo(500, y);
    }
    //
    this._context.strokeStyle = "#cccccc";
    this._context.stroke();
    //
  }
  //
  DrawPoint(pointName, x, y, strokeStyle) {
    //--------------------------
    // Escalar coordenadas
    //--------------------------
    x = x * this.rectSize;
    y = y * this.rectSize;
    //-------------------
    // Linea vertical
    //-------------------
    this._context.setLineDash([]); //*linea continua*
    this._context.beginPath();
    this._context.moveTo(x, this.screenSize - y - this.rectSize / 2);
    this._context.lineTo(x, this.screenSize - y + this.rectSize / 2);
    this._context.strokeStyle = strokeStyle;
    this._context.stroke();
    //-------------------
    // Linea horizontal
    //-------------------
    this._context.setLineDash([]); //*linea continua*
    this._context.beginPath();
    this._context.moveTo(x - this.rectSize / 2, this.screenSize - y);
    this._context.lineTo(x + this.rectSize / 2, this.screenSize - y);
    this._context.strokeStyle = strokeStyle;
    this._context.stroke();
    //-------------------
    // Nombre del Punto
    //-------------------
    var fullPointName = pointName + "(" + x / this.rectSize + "," + y / this.rectSize + ")";
    this._context.font = "x-small Arial";
    this._context.fillText(fullPointName, x + this.rectSize / 2, this.screenSize - y);
    //
  }
  //
  DrawPoints(points, strokeStyle) {
    //
    let index;
    //
    for (index = 0; index < points.length; index++) {
      //
      let coordinates = "";
      coordinates = points[index];
      coordinates = coordinates.replace('[', '');
      coordinates = coordinates.replace(']', '');
      //
      let coordinateArray = coordinates.split(',');
      let coordinate_x = Number.parseInt(coordinateArray[0]);
      let coordinate_y = Number.parseInt(coordinateArray[1]);
      //
      //console.log("coordinate [" + index + "] : " + points[index] + " ");
      //
      this.DrawPoint(index.toString(), coordinate_x, coordinate_y, strokeStyle);
    }
  }
  //
  DrawLine(x1, y1, x2, y2) {
    //--------------------------
    // Escalar coordenadas
    //--------------------------
    x1 = x1 * this.rectSize;
    x2 = x2 * this.rectSize;
    y1 = y1 * this.rectSize;
    y2 = y2 * this.rectSize;
    //--------------------------
    // Ajustar coordenada y
    //--------------------------
    var _y1 = this.screenSize - y1;
    var _y2 = this.screenSize - y2;
    //--------------------------
    // Dibujar Linea
    //--------------------------
    this._context.moveTo(x1, _y1);
    this._context.lineTo(x2, _y2);
  }
  //
  DrawLines(pointArray, matrixArray, strokeStyle, drawingSubSet) {
    //
    //console.log("DRAWING_LINES");
    //--------------------------------------------------------------------------
    // CREAR MATRIZ
    //--------------------------------------------------------------------------
    //
    // MATRIX : {0,16,0,0,0,0,0,0,0}|{16,0,21,0,0,12,0,18,0}|{0,21,0,0,18,0,10,0,19}|{0,0,0,0,20,2,5,0,0}|{0,0,18,20,0,19,0,4,0}|{0,12,0,2,19,0,5,17,0}|{0,0,10,5,0,5,0,0,0}|{0,18,0,0,4,17,0,0,2}|{0,0,19,0,0,0,0,2,0}
    //
    let pointArrayMaster = this.PointListHidden.split("|");
    let matrix = new Array(matrixArray.length);
    let index;
    //
    for (index = 0; index < matrixArray.length; index++) {
      //
      matrix[index] = new Array(matrixArray.length);
    }
    //
    let _index_x;
    let _index_y;
    //
    for (_index_x = 0; _index_x < matrixArray.length; _index_x++) {
      //
      var matrixLine = matrixArray[_index_x].replace("{", "").replace("}", "").split(",");
      //
      //console.log("MATRIX ROW " + matrixLine);
      //
      for (_index_y = 0; _index_y < matrixLine.length; _index_y++) {
        //
        var pointValue = matrixLine[_index_y];
        //
        matrix[_index_x][_index_y] = pointValue;
        //
      }
    }
    //--------------------------------------------------------------------------
    // RECORRER MATRIZ
    //--------------------------------------------------------------------------
    //
    this._context.setLineDash([]); // *linea continua*
    this._context.beginPath();
    //
    let index_x;
    let index_y;
    //
    for (index_x = 0; index_x < matrixArray.length; index_x++) {
      //
      for (index_y = index_x + 1; index_y < matrixArray.length; index_y++) {
        //
        let pointValue = matrix[index_x][index_y];
        //
        //console.log("_MATRIX (" + index_x + "," + index_y + ") = " + pointValue);
        //
        // POINTS  : [11,7]|[3,21]|[22,11]|[13,19]|[8,0]|[15,18]|[12,14]|[6,3]|[4,4]
        //
        if (pointValue != "0") {
          //
          var pointSource = pointArray[index_x].replace("[", "").replace("]", "").split(",");
          var pointDest = pointArray[index_y].replace("[", "").replace("]", "").split(",");
          ;
          //
          //console.log("_DRAWING LINE FOR (" + pointValue + " )");
          //
          var x1 = parseInt(pointSource[0]);
          var y1 = parseInt(pointSource[1]);
          var x2 = parseInt(pointDest[0]);
          var y2 = parseInt(pointDest[1]);
          //-----------------------------------------------------------------
          // SI ES UN SUBCONJUNTO DE LINEAS, COMPARAR ARREGLO CON MAESTRO
          //-----------------------------------------------------------------
          //
          var drawLine = true;
          //
          if (drawingSubSet == true) {
            if (pointArray[index_x] != pointArrayMaster[index_x]) drawLine = false;
            if (pointArray[index_y] != pointArrayMaster[index_y]) drawLine = false;
          }
          //
          if (drawLine == true) this.DrawLine(x1, y1, x2, y2);
        }
      }
    }
    //
    this._context.strokeStyle = strokeStyle;
    this._context.stroke();
  }
  //
  DrawDistanceList(clearItems, Items) {
    //
    //$('#DistanceList').children().remove().end();
    this.__distanceList = new Array();
    //
    if (clearItems == false) {
      //
      let _vertexSizeInitial = new _models_log_info_model__WEBPACK_IMPORTED_MODULE_2__._vertexSize(0, "(SELECCIONE DISTANCIA)");
      this.__distanceList.push(_vertexSizeInitial);
      //
      //$('#DistanceList').append($('<option>', { value: 0, text:"(SELECCIONE_DISTANCIA)"}));
      //
      let stringItems = Items.split("<br/>");
      //
      for (var index = 0; index < stringItems.length; index++) {
        // EJEMPLO
        // 01&lt;[14;2]&gt;-26-(0; 7)(7; 6)(6; 1)
        // 01<[14;2]>;-26-(0; 7)(7; 6)(6; 1)
        //
        let stringItem = "";
        //
        stringItem = stringItems[index].replace("&lt;", "<").replace("&gt;", ">");
        stringItem = this.mcsdService.DebugHostingContent(stringItem);
        //
        //$('#DistanceList').append($('<option>', { value: (index + 1), text: (stringItem) }));
        //
        let _vertexBody = new _models_log_info_model__WEBPACK_IMPORTED_MODULE_2__._vertexSize(index + 1, stringItem);
        this.__distanceList.push(_vertexBody);
      }
    }
  }
  //
  DrawListItems() {
    //-----------------------------------------------------------------------------
    // TAMAÑO DE VERTICE
    //-----------------------------------------------------------------------------
    var vertexMaxString = new String(this.vertexMax);
    //
    //$('#vertexSizeList').val(vertexMaxString);
    //
    this.__vertexSizeList = new Array();
    //
    for (var index = this.vertexMax; index >= 1; index--) {
      //
      //$('#vertexSizeList').append($('<option>', { value: (index), text: (new String(index)) }));
      //
      let vertexSize = new _models_log_info_model__WEBPACK_IMPORTED_MODULE_2__._vertexSize(index, index.toString());
      //
      this.__vertexSizeList.push(vertexSize);
    }
    //-----------------------------------------------------------------------------
    // PUNTO DE ORIGEN
    //-----------------------------------------------------------------------------
    this.__sourcePointList = new Array();
    //
    for (var index = 0; index < this.vertexMax; index++) {
      //
      let vertexSize = new _models_log_info_model__WEBPACK_IMPORTED_MODULE_2__._vertexSize(index, index.toString());
      //
      this.__sourcePointList.push(vertexSize);
    }
    //        
    //$('#sourcePointList').val("0");
    //-----------------------------------------------------------------------------
    // LENGUAJES DE PROGRAMACION
    //-----------------------------------------------------------------------------
    this.__languajeList = new Array();
    //
    this.__languajeList.push(new _models_log_info_model__WEBPACK_IMPORTED_MODULE_2__._languageName(0, "(SELECCIONE OPCION..)"));
    this.__languajeList.push(new _models_log_info_model__WEBPACK_IMPORTED_MODULE_2__._languageName(1, "C#"));
    this.__languajeList.push(new _models_log_info_model__WEBPACK_IMPORTED_MODULE_2__._languageName(2, "C++"));
  }
  // 
  ////////////////////////////////////////////////////////////////
  // METODOS COMUNES /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  //
  _GetPDF() {
    //
    console.log(AlgorithmDijkstraComponent.PageTitle + " - [getting pdf]");
    //
    html2canvas__WEBPACK_IMPORTED_MODULE_0___default()(this.c_canvas.nativeElement).then(_canvas => {
      //
      let w = this.divCanvas_Pdf.nativeElement.offsetWidth;
      let h = this.divCanvas_Pdf.nativeElement.offsetHeight;
      //
      let imgData = _canvas.toDataURL('image/jpeg');
      //
      let pdfDoc = new jspdf__WEBPACK_IMPORTED_MODULE_1__["default"]("landscape", "px", [w, h]);
      //
      pdfDoc.addImage(imgData, 0, 0, w, h);
      //
      pdfDoc.save('sample-file.pdf');
    });
  }
}
AlgorithmDijkstraComponent.ɵfac = function AlgorithmDijkstraComponent_Factory(t) {
  return new (t || AlgorithmDijkstraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_mcsd_service__WEBPACK_IMPORTED_MODULE_3__.MCSDService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_module__WEBPACK_IMPORTED_MODULE_4__.CustomErrorHandler));
};
AlgorithmDijkstraComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AlgorithmDijkstraComponent,
  selectors: [["app-algorithm-dijkstra"]],
  viewQuery: function AlgorithmDijkstraComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c5, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.c_canvas = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.divCanvas_Pdf = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._vertexSizeList = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._sourcePointList = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._distanceList = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx._languajeList = _t.first);
    }
  },
  decls: 69,
  vars: 12,
  consts: [[1, "main-container"], [1, "content"], [1, "content-body"], ["align", "center", 2, "padding-top", "10px"], ["href", "javascript: void window.open('https://en.wikipedia.org/wiki/Dijkstra\\'s_algorithm')"], ["href", "javascript: void window.open('https://www.npmjs.com/package/jspdf')"], ["id", "LangListDiv"], ["id", "tituloListadoLenguajes"], ["for", "LangList"], ["id", "LanguageList", "name", "LanguajeList", 3, "change"], ["_languajeList", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "cppSoureDiv", 3, "hidden"], ["href", "javascript: void window.open('https://github.com/aperezNWO/CppBuilder01/blob/master/Project2/Dijkstra.cpp')"], ["id", "listTitle", 3, "hidden"], ["id", "tituloListadoDistancias"], ["for", "DistanceList"], ["id", "DistanceList", "name", "DistanceList", 3, "change"], ["_distanceList", ""], ["id", "divCanvas_Pdf", "height", "255", "width", "255", 2, "display", "block", "box-sizing", "border-box", "height", "255px", "width", "255px", "padding", "5px"], ["divCanvas_Pdf", ""], ["id", "c_canvas", "width", "250px", "height", "250px"], ["c_canvas", ""], ["for", "_vertexSizeList"], ["id", "_vertexSizeList", "name", "_vertexSizeList", 3, "change"], ["_vertexSizeList", ""], ["for", "_sourcePointList"], ["id", "_sourcePointList", "name", "_sourcePointList"], ["_sourcePointList", ""], ["id", "GetGraph", "type", "button", "title", "[GENERAR]", "value", "[GENERAR]", 3, "disabled", "click"], ["id", "NewGraph", "type", "button", "title", "[REINICIAR]", "value", "[REINICIAR]", 3, "disabled", "click"], ["id", "GetPDF", "type", "button", "title", "[GENERAR PDF]", "value", "[GENERAR PDF]", 3, "disabled", "click"], ["routerLink", "/AlgorithmWeb"], [3, "value"]],
  template: function AlgorithmDijkstraComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Ver referencia\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "[Algoritmo Dijkstra]");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Ver referencia\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "[jsPDF]");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 6)(16, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "br")(19, "label", 8)(20, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " \u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "select", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AlgorithmDijkstraComponent_Template_select_change_22_listener() {
        return ctx._cppSourceDivHiddenChaged();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, AlgorithmDijkstraComponent_option_24_Template, 2, 2, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " \u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "span", 12)(27, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "[View Source]");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 14)(31, "span", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "br")(34, "label", 16)(35, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " \u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "select", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AlgorithmDijkstraComponent_Template_select_change_37_listener() {
        return ctx._distanceListChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, AlgorithmDijkstraComponent_option_39_Template, 2, 2, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div")(41, "div", 19, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "canvas", 21, 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "P")(47, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Cantidad de Puntos:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "select", 24, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AlgorithmDijkstraComponent_Template_select_change_49_listener() {
        return ctx._vertexSizeListChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, AlgorithmDijkstraComponent_option_51_Template, 2, 2, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "p")(54, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Punto de Origen:");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "select", 27, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, AlgorithmDijkstraComponent_option_58_Template, 2, 2, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div")(61, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AlgorithmDijkstraComponent_Template_input_click_61_listener() {
        return ctx._GetGraph();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, " | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AlgorithmDijkstraComponent_Template_input_click_63_listener() {
        return ctx._ResetControls();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AlgorithmDijkstraComponent_Template_input_click_65_listener() {
        return ctx._GetPDF();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Volver al Men\u00FA");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.pageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.tituloListadoLenguajes);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.__languajeList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx._cppSourceDivHidden);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.PointListHidden.length == 0 && ctx.MatrixListHidden.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.tituloListadoDistancias);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.__distanceList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.__vertexSizeList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.__sourcePointList);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !(ctx.PointListHidden.length == 0 && ctx.MatrixListHidden.length == 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.PointListHidden.length == 0 && ctx.MatrixListHidden.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.PointListHidden.length == 0 && ctx.MatrixListHidden.length == 0 || ctx.selectedIndex == 0);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink],
  styles: ["\n\n    \n\n    \n\n\n    fieldset[_ngcontent-%COMP%] {\n        padding: 1em;\n        \n\n    }\n\n    label[_ngcontent-%COMP%] {\n        \n\n        width: 25%;\n        margin-right: 0.5em;\n        padding-top: 0.2em;\n        text-align: right;\n        \n\n    }\n    .fieldSetRegex[_ngcontent-%COMP%] {\n        width:50%;\n    }\n    \n\n    \n\n    \n\n    .modalStatus[_ngcontent-%COMP%] {\n        display: none; \n\n        position: fixed; \n\n        z-index: 99; \n\n        left: 0;\n        top: 0;\n        width: 100%; \n\n        height: 100%; \n\n        overflow: auto; \n\n        background-color: rgb(0,0,0); \n\n        background-color: rgba(0,0,0,0.4); \n\n    }\n\n    .modalStatus-content[_ngcontent-%COMP%] {\n        text-align: center;\n        background-color: #fefefe;\n        margin: 15% auto; \n\n        padding: 1em;\n        border: 1px solid #888;\n        width: 100%; \n\n        color: black;\n    }\n    \n\n    \n\n    \n\n\n    #c_canvas[_ngcontent-%COMP%] {\n        width: 250px;\n        height: 250px;\n        background-color: #fff;\n    }\n\n    \n\n    \n\n    \n\n    #DistanceList[_ngcontent-%COMP%] {\n        width: 250px;\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX21vZHVsZXMvYWxnb3JpdGhtL2FsZ29yaXRobS1kaWprc3RyYS9hbGdvcml0aG0tZGlqa3N0cmEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiR0FBRyxtREFBbUQ7SUFDbEQsbURBQW1EO0lBQ25ELG1EQUFtRDs7SUFFbkQ7UUFDSSxZQUFZO1FBQ1osMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFVBQVU7UUFDVixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBLG1EQUFtRDtJQUNuRCxtREFBbUQ7SUFDbkQsbURBQW1EO0lBQ25EO1FBQ0ksYUFBYSxFQUFFLHNCQUFzQjtRQUNyQyxlQUFlLEVBQUUsa0JBQWtCO1FBQ25DLFdBQVcsRUFBRSxlQUFlO1FBQzVCLE9BQU87UUFDUCxNQUFNO1FBQ04sV0FBVyxFQUFFLGVBQWU7UUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtRQUM5QixjQUFjLEVBQUUsNEJBQTRCO1FBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtRQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7SUFDNUQ7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGdCQUFnQixFQUFFLGtDQUFrQztRQUNwRCxZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLFdBQVcsRUFBRSxvREFBb0Q7UUFDakUsWUFBWTtJQUNoQjtJQUNBLG1EQUFtRDtJQUNuRCxtREFBbUQ7SUFDbkQsbURBQW1EOztJQUVuRDtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCOztJQUVBLG1EQUFtRDtJQUNuRCxtREFBbUQ7SUFDbkQsbURBQW1EO0lBQ25EO1FBQ0ksWUFBWTtJQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIiAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIC8qIEVTVElMT1MgRk9STVVMQVJJTyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgICBmaWVsZHNldCB7XHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgIC8qZm9udDogODAlLzEgc2Fucy1zZXJpZjsqL1xyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgICAvKmZsb2F0OiBsZWZ0OyovXHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwLjJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAvKmZvbnQtd2VpZ2h0OiBib2xkOyovXHJcbiAgICB9XHJcbiAgICAuZmllbGRTZXRSZWdleCB7XHJcbiAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgfVxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLyogRVNUSUxPUyBTVEFUVVMgREUgT1BFUkFDSU9OICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLm1vZGFsU3RhdHVzIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgICAgIHotaW5kZXg6IDk5OyAvKiBTaXQgb24gdG9wICovXHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICAgICAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICAgIH1cclxuXHJcbiAgICAubW9kYWxTdGF0dXMtY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgICAgICAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgICAgICB3aWR0aDogMTAwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAvKiBFU1RJTE8gUEFSQSBDQU5WQVMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgI2NfY2FudmFzIHtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIC8qIEVTVElMTyBQQVJBIExJU1RBRE8gICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgICNEaXN0YW5jZUxpc3Qge1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});
;

/***/ }),

/***/ 2575:
/*!***********************************************************************************!*\
  !*** ./src/app/_modules/algorithm/algorithm-reg-ex/algorithm-reg-ex.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlgorithmRegExComponent: () => (/* binding */ AlgorithmRegExComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_log_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_models/log-info.model */ 4590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_mcsd_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/mcsd.service */ 1274);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.module */ 8629);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);







const _c0 = ["mensajes"];
const _c1 = ["tagSearch"];
const _c2 = ["textSearch"];
const _c3 = ["regExSearch"];
const _c4 = ["_languajeList"];
function AlgorithmRegExComponent_option_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _languageName_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", _languageName_r6._index);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_languageName_r6._value);
  }
}
//
//
class AlgorithmRegExComponent {
  ////////////////////////////////////////////////////////////////
  // PROPERTIES //////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  //
  static get PageTitle() {
    return '[ALGORITMOS - EXPRESIONES REGULARES]';
  }
  //
  constructor(mcsdService, customErrorHandler) {
    this.mcsdService = mcsdService;
    this.customErrorHandler = customErrorHandler;
    //
    this.pageTitle = AlgorithmRegExComponent.PageTitle;
    this.xmlData = "";
    this.lblStatus = "";
    this.pattern = "";
    this._cppSourceDivHidden = true;
    this.tituloListadoLenguajes = "Seleccione Lenguaje";
    //
    mcsdService.SetLog(this.pageTitle, "PAGE_REGEX_DEMO");
  }
  //
  ngOnInit() {
    //
    console.log(AlgorithmRegExComponent.PageTitle + " - [INGRESANDO]");
    //
    //-----------------------------------------------------------------------------
    // LENGUAJES DE PROGRAMACION
    //-----------------------------------------------------------------------------
    this.__languajeList = new Array();
    //
    this.__languajeList.push(new src_app_models_log_info_model__WEBPACK_IMPORTED_MODULE_0__._languageName(0, "(SELECCIONE OPCION..)"));
    this.__languajeList.push(new src_app_models_log_info_model__WEBPACK_IMPORTED_MODULE_0__._languageName(1, "C#"));
    this.__languajeList.push(new src_app_models_log_info_model__WEBPACK_IMPORTED_MODULE_0__._languageName(2, "C++"));
  }
  //
  ngAfterViewInit() {
    //
    console.log(AlgorithmRegExComponent.PageTitle + " - [INICIO VISUAL]");
    //
    this._GetXMLData();
  }
  ////////////////////////////////////////////////////////////////
  // METODOS    //////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////
  _GetXMLData() {
    //
    console.log(AlgorithmRegExComponent.PageTitle + " - [GET XML DATA]");
    //
    let xmlInfo;
    //
    xmlInfo = this.mcsdService._GetXmlData();
    //
    this.lblStatus = "[..CARGANDO POR FAVOR ESPERERE...]";
    //
    const xmlInfoObserver = {
      //
      next: _xmlData => {
        //------------------------------------------------------------
        // OBTENER DATA
        //------------------------------------------------------------
        //
        console.warn(AlgorithmRegExComponent.PageTitle + ' - [GET XML DATA] - [RETURN VALUE] : ' + _xmlData.length);
        //
        this.xmlData = _xmlData;
        //-------------------------------------------------------------
        // CONFIGURAR CONTROLES
        //-------------------------------------------------------------
        //
        this.mensajes.nativeElement.innerHTML = this.xmlData;
        //
        this.lblStatus = "[REINICIO EXITOSO]";
        //
        this.pattern = "";
      },
      error: err => {
        //
        this.lblStatus = "[HA OCURRIDO UN ERROR]";
        //
        this.pattern = "";
        //
        console.error(AlgorithmRegExComponent.PageTitle + ' - [GET XML DATA]- [error] : ' + err.message);
      },
      complete: () => {
        //
        console.info(AlgorithmRegExComponent.PageTitle + ' - [GET XML DATA]- [Observer got a complete notification]');
        //
      }
    };
    //
    xmlInfo.subscribe(xmlInfoObserver);
  }
  //
  GetRegex() {
    //
    console.log(AlgorithmRegExComponent.PageTitle + " - [EVAL REGEX]");
    //
    let selectedIndex = this.tagSearch.nativeElement.options.selectedIndex;
    let tagSearchIndex = this.tagSearch.nativeElement.options[selectedIndex].value;
    let tagSearchValue = "";
    let textSearchValue = this.textSearch.nativeElement.value;
    //
    if (tagSearchIndex == 0) {
      //
      this.lblStatus = "FAVOR SELECCIONE UN [ELEMENTO A BUSCAR]";
      //
      return;
    }
    //
    if (textSearchValue == "") {
      //
      this.lblStatus = "FAVOR INGRESE UN VALOR EN EL CAMPO [CONTENIDO]";
      //
      return;
    }
    //
    let regExInfo;
    //
    let _progLangId = Number.parseInt(this._languajeList.nativeElement.value);
    //
    switch (_progLangId) {
      case 0:
        // (seleccione lenguaje...)
        return;
        break;
      case 1:
        // C#
        //
        regExInfo = this.mcsdService._RegExEval(tagSearchIndex, textSearchValue);
        break;
      case 2:
        // C++
        //
        regExInfo = this.mcsdService._RegExEval_CPP(tagSearchIndex, textSearchValue);
        break;
    }
    //
    let data;
    //
    const regExInfoObserver = {
      //
      next: data => {
        //------------------------------------------------------------
        // OBTENER DATA
        //------------------------------------------------------------
        //
        console.warn(AlgorithmRegExComponent.PageTitle + ' - [EVAL REGEX] - [RETURN VALUE] : ' + data.length);
        //    
        let resultArray = data.split("|");
        //
        //
        if (resultArray.length > 0) {
          //
          let matchAmt = resultArray[0];
          //
          let xmlHighlighted = resultArray[1];
          //
          this.pattern = this.mcsdService.DebugHostingContent(resultArray[2]);
          //
          console.log("REGEX. AMT OF MATCHES   : " + matchAmt);
          //
          console.log("REGEX. PATTERN          : " + this.pattern);
          //----------------------------------------------------------------------
          // CONFIGURA CONTROLES
          //----------------------------------------------------------------------
          //
          this.mensajes.nativeElement.innerHTML = xmlHighlighted;
          //
          //$("#GetRegex").prop('disabled', true);
          //
          //$("#newSearch").prop('disabled', false);
          //
          //this.regExSearch.nativeElement.text   = pattern;
          //
          this.lblStatus = 'SE ENCONTRARON (' + matchAmt + ') COINCIDENCIAS';
        }
      },
      error: err => {
        //
        console.error(AlgorithmRegExComponent.PageTitle + ' - [EVAL REGEX] - [error] : ' + err.message);
      },
      complete: () => {
        //
        console.info(AlgorithmRegExComponent.PageTitle + ' - [EVAL REGEX] - [Observer got a complete notification]');
        //
      }
    };
    //
    regExInfo.subscribe(regExInfoObserver);
  }
  //
  _cppSourceDivHiddenChaged() {
    //
    console.log(AlgorithmRegExComponent.PageTitle + " - [DIV CPP SOURCE CHANGED]");
    //
    let _selectedIndex = this._languajeList.nativeElement.options.selectedIndex;
    this._cppSourceDivHidden = _selectedIndex != 2; // item 2 = "c++"
  }
}

AlgorithmRegExComponent.ɵfac = function AlgorithmRegExComponent_Factory(t) {
  return new (t || AlgorithmRegExComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_mcsd_service__WEBPACK_IMPORTED_MODULE_1__.MCSDService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_module__WEBPACK_IMPORTED_MODULE_2__.CustomErrorHandler));
};
AlgorithmRegExComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AlgorithmRegExComponent,
  selectors: [["app-algorithm-reg-ex"]],
  viewQuery: function AlgorithmRegExComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c4, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mensajes = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tagSearch = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.textSearch = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.regExSearch = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._languajeList = _t.first);
    }
  },
  decls: 74,
  vars: 6,
  consts: [[1, "content"], [1, "content-body"], ["href", "javascript: void window.open('https://docs.microsoft.com/en-us/dotnet/api/system.text.regularexpressions.regex?view=net-5.0')"], ["id", "XmlContent"], ["id", "global"], ["id", "mensajes"], ["mensajes", ""], ["for", "tagSearch"], ["id", "tagSearch", 1, "fieldSetRegex"], ["tagSearch", ""], ["value", "0"], ["value", "title"], ["value", "artist"], ["value", "country"], ["value", "company", "selected", "selected"], ["value", "price"], ["value", "year"], ["for", "textSearch"], ["type", "text", "id", "textSearch", "value", "", 1, "fieldSetRegex"], ["textSearch", ""], ["for", "regExSearch"], ["type", "text", "id", "regExSearch", "readonly", "readonly", 1, "fieldSetRegex", 2, "background-color", "#cccccc", 3, "value"], ["regExSearch", ""], ["id", "lblstatus"], ["id", "LangListDiv"], ["id", "tituloListadoLenguajes"], ["for", "LangList"], ["id", "LanguageList", "name", "LanguajeList", 3, "change"], ["_languajeList", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "cppSoureDiv", 3, "hidden"], ["href", "javascript: void window.open('https://github.com/aperezNWO/CppBuilder01/blob/master/Project2/RegExManager.cpp')"], ["id", "GetRegex", "type", "button", "title", "[BUSCAR]", "value", "[BUSCAR]", 3, "click"], ["id", "newSearch", "type", "button", "title", "[REINICIAR]", "value", "[REINICIAR]", 3, "click"], ["routerLink", "/AlgorithmWeb"], [3, "value"]],
  template: function AlgorithmRegExComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Ver referencia\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "[Clase \"RegEx\"]");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Contenido a Buscar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3)(12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div")(16, "fieldset");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "legend");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "ELEMENTO A BUSCAR : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "select", 8, 9)(22, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "[SELECCIONE_OPCION]");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "artist");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "country");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "company");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "option", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "price");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "year");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "CONTENIDO : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 18, 19)(41, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "EXPRESION REGULAR : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 21, 22)(46, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div")(49, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 24)(53, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "br")(56, "label", 26)(57, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, " \u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "select", 27, 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AlgorithmRegExComponent_Template_select_change_59_listener() {
        return ctx._cppSourceDivHiddenChaged();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, AlgorithmRegExComponent_option_61_Template, 2, 2, "option", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, " \u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "span", 30)(64, "a", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "[View Source]");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](66, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div")(68, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AlgorithmRegExComponent_Template_input_click_68_listener() {
        return ctx.GetRegex();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, " | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AlgorithmRegExComponent_Template_input_click_70_listener() {
        return ctx._GetXMLData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "a", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Volver al Men\u00FA");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.pageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx.pattern);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.lblStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.tituloListadoLenguajes);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.__languajeList);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx._cppSourceDivHidden);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
  styles: ["\n\n    \n\n    \n\n\n    fieldset[_ngcontent-%COMP%] {\n        padding: 1em;\n        \n\n    }\n\n    label[_ngcontent-%COMP%] {\n        width: 40%;\n        margin-right: 0.5em;\n        padding-top: 0.2em;\n        text-align: right;\n        font-size: xx-small;\n    }\n    .fieldSetRegex[_ngcontent-%COMP%] {\n        width:50%;\n    }\n    \n\n    \n\n    \n\n    .modalStatus[_ngcontent-%COMP%] {\n        display: none; \n\n        position: fixed; \n\n        z-index: 99; \n\n        left: 0;\n        top: 0;\n        width: 100%; \n\n        height: 100%; \n\n        overflow: auto; \n\n        background-color: rgb(0,0,0); \n\n        background-color: rgba(0,0,0,0.4); \n\n    }\n\n    .modalStatus-content[_ngcontent-%COMP%] {\n        text-align: center;\n        background-color: #fefefe;\n        margin: 15% auto; \n\n        padding: 1em;\n        border: 1px solid #888;\n        width: 100%; \n\n        color: black;\n    }\n\n    \n\n    \n\n    \n\n    #global[_ngcontent-%COMP%] \n    {\n        height        : 100px;\n        width         : 100%;\n        border        : 1px solid #ddd;\n        background    : #cccccc;\n        color         : #0000ff;\n        overflow-y    : scroll;\n    }\n    #mensajes[_ngcontent-%COMP%] \n    {\n        height: auto;\n    }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX21vZHVsZXMvYWxnb3JpdGhtL2FsZ29yaXRobS1yZWctZXgvYWxnb3JpdGhtLXJlZy1leC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJJQUFJLG1EQUFtRDtJQUNuRCxtREFBbUQ7SUFDbkQsbURBQW1EOztJQUVuRDtRQUNJLFlBQVk7UUFDWiwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQSxtREFBbUQ7SUFDbkQsbURBQW1EO0lBQ25ELG1EQUFtRDtJQUNuRDtRQUNJLGFBQWEsRUFBRSxzQkFBc0I7UUFDckMsZUFBZSxFQUFFLGtCQUFrQjtRQUNuQyxXQUFXLEVBQUUsZUFBZTtRQUM1QixPQUFPO1FBQ1AsTUFBTTtRQUNOLFdBQVcsRUFBRSxlQUFlO1FBQzVCLFlBQVksRUFBRSxnQkFBZ0I7UUFDOUIsY0FBYyxFQUFFLDRCQUE0QjtRQUM1Qyw0QkFBNEIsRUFBRSxtQkFBbUI7UUFDakQsaUNBQWlDLEVBQUUscUJBQXFCO0lBQzVEOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixnQkFBZ0IsRUFBRSxrQ0FBa0M7UUFDcEQsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixXQUFXLEVBQUUsb0RBQW9EO1FBQ2pFLFlBQVk7SUFDaEI7O0lBRUEsbURBQW1EO0lBQ25ELG1EQUFtRDtJQUNuRCxtREFBbUQ7SUFDbkQ7O1FBRUkscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQiw4QkFBOEI7UUFDOUIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2QixzQkFBc0I7SUFDMUI7SUFDQTs7UUFFSSxZQUFZO0lBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAgIC8qIEVTVElMT1MgRk9STVVMQVJJTyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbiAgICBmaWVsZHNldCB7XHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgIC8qZm9udDogODAlLzEgc2Fucy1zZXJpZjsqL1xyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDAuMmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XHJcbiAgICB9XHJcbiAgICAuZmllbGRTZXRSZWdleCB7XHJcbiAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgfVxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLyogRVNUSUxPUyBTVEFUVVMgREUgT1BFUkFDSU9OICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLm1vZGFsU3RhdHVzIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgICAgIHotaW5kZXg6IDk5OyAvKiBTaXQgb24gdG9wICovXHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICAgICAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICAgIH1cclxuXHJcbiAgICAubW9kYWxTdGF0dXMtY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgICAgICAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgICAgICB3aWR0aDogMTAwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLyogRVNUSUxPIFBBUkEgQVJFQSBERSBYTUwgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgI2dsb2JhbCBcclxuICAgIHtcclxuICAgICAgICBoZWlnaHQgICAgICAgIDogMTAwcHg7XHJcbiAgICAgICAgd2lkdGggICAgICAgICA6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyICAgICAgICA6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIGJhY2tncm91bmQgICAgOiAjY2NjY2NjO1xyXG4gICAgICAgIGNvbG9yICAgICAgICAgOiAjMDAwMGZmO1xyXG4gICAgICAgIG92ZXJmbG93LXkgICAgOiBzY3JvbGw7XHJcbiAgICB9XHJcbiAgICAjbWVuc2FqZXMgXHJcbiAgICB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3562:
/*!*******************************************************************************!*\
  !*** ./src/app/_modules/algorithm/algorithm-sort/algorithm-sort.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlgorithmSortComponent: () => (/* binding */ AlgorithmSortComponent)
/* harmony export */ });
/* harmony import */ var _models_log_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_models/log-info.model */ 4590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_mcsd_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/mcsd.service */ 1274);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.module */ 8629);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);







const _c0 = ["c_canvas"];
const _c1 = ["mensajes"];
const _c2 = ["mensajes_1"];
const _c3 = ["mensajes_2"];
const _c4 = ["SortAlgorithmList"];
const _c5 = ["_languajeList"];
function AlgorithmSortComponent_option_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _languageName_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", _languageName_r7._index);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_languageName_r7._value);
  }
}
//
//
class AlgorithmSortComponent {
  ////////////////////////////////////////////////////////////////////////
  // PROPIEDADES
  ////////////////////////////////////////////////////////////////////////
  static get PageTitle() {
    return '[ALGORITMOS - ORDENAMIENTO]';
  }
  //
  constructor(mcsdService, customErrorHandler) {
    this.mcsdService = mcsdService;
    this.customErrorHandler = customErrorHandler;
    ////////////////////////////////////////////////////////////////////////
    // VARIABLES
    ////////////////////////////////////////////////////////////////////////
    this.rectSize = 10;
    this.pageTitle = AlgorithmSortComponent.PageTitle;
    this.lblStatus = "[STATUS]";
    this.tituloListadoLenguajes = "Seleccione Lenguaje";
    //
    this.screenSize = 250;
    this.delayInMilliseconds = 500;
    this.stringMatrix = [];
    this.indexDraw = 0;
    this.sortedArrayDecoded = "";
    this.arraySeparator = "|";
    this.GetSortLabel = "[ORDENAR]";
    this.stringArray_ = [];
    this._cppSourceDivHidden = true;
    //
    mcsdService.SetLog(this.pageTitle, "PAGE_SORT_BENCHAMRK_DEMO");
  }
  //
  ngOnInit() {
    //
    console.info(AlgorithmSortComponent.PageTitle + " - [INGRESO]");
    //-----------------------------------------------------------------------------
    // LENGUAJES DE PROGRAMACION
    //-----------------------------------------------------------------------------
    this.__languajeList = new Array();
    //
    this.__languajeList.push(new _models_log_info_model__WEBPACK_IMPORTED_MODULE_0__._languageName(0, "(SELECCIONE OPCION..)"));
    this.__languajeList.push(new _models_log_info_model__WEBPACK_IMPORTED_MODULE_0__._languageName(1, "C#"));
    this.__languajeList.push(new _models_log_info_model__WEBPACK_IMPORTED_MODULE_0__._languageName(2, "C++"));
  }
  //
  ngAfterViewInit() {
    //
    this.context = this.c_canvas.nativeElement.getContext("2d");
    //
    this.DrawGrid();
    //
    this.GetNewSort();
  }
  //
  DrawGrid() {
    //
    this.context.clearRect(0, 0, this.c_canvas.nativeElement.width, this.c_canvas.nativeElement.height);
    //
    for (let x = 0.5; x < 501; x += this.rectSize) {
      this.context.moveTo(x, 0);
      this.context.lineTo(x, 381);
    }
    //
    for (let y = 0.5; y < 381; y += this.rectSize) {
      this.context.moveTo(0, y);
      this.context.lineTo(500, y);
    }
    //
    this.context.strokeStyle = "#cccccc";
    this.context.stroke();
    //
  }
  //
  GetSort() {
    //
    console.log(AlgorithmSortComponent.PageTitle + " - [GET SORT]");
    //
    let selectedIndex = this.SortAlgorithmList.nativeElement.options.selectedIndex;
    let p_sortAlgorith = this.SortAlgorithmList.nativeElement.options[selectedIndex].value;
    //
    if (p_sortAlgorith == 0) {
      //
      this.lblStatus = 'FAVOR SELECCIONE UN ALGORITMO';
      //
      return;
    }
    //
    let _p_unsortedList = this.mensajes.nativeElement.innerHTML;
    //
    while (_p_unsortedList.indexOf("<br>") != -1) {
      _p_unsortedList = _p_unsortedList.replace("<br>", "|");
    }
    let p_unsortedList = _p_unsortedList;
    //
    let GetSortInfo;
    //
    let _progLangId = Number.parseInt(this._languajeList.nativeElement.value);
    //
    switch (_progLangId) {
      case 0:
        // (seleccione lenguaje...)
        return;
        break;
      case 1:
        // C#
        //
        GetSortInfo = this.mcsdService.getSort(p_sortAlgorith, p_unsortedList);
        break;
      case 2:
        // C++
        //
        GetSortInfo = this.mcsdService.getSort_CPP(p_sortAlgorith, p_unsortedList);
        break;
    }
    //
    const GetSortInfoObserver = {
      //
      next: data => {
        //
        console.info(AlgorithmSortComponent.PageTitle + ' - [GETTING SORT]  - RETURN VALUE : ' + data);
        //
        //-----------------------------------------------------------------------
        // CORREGIR DATOS DE MATRIZ PARA VISUALIZAR EN CANVAS
        //-----------------------------------------------------------------------
        //
        this.stringMatrix = data.split("■");
        //
        for (let index = 0; index < this.stringMatrix.length; index++) {
          //
          this.stringMatrix[index] = this.stringMatrix[index].replace("<br/>", "");
          this.stringMatrix[index] = this.stringMatrix[index].replace("■", "");
          //
        }
        //
        this.sortedArrayDecoded = this.stringMatrix[this.stringMatrix.length - 1];
        //
        for (let index = 0; index < this.stringMatrix.length; index++) {
          //
          while (this.stringMatrix[index].indexOf("<br/>") != -1) {
            //
            this.stringMatrix[index] = this.stringMatrix[index].replace("<br/>", ",");
          }
          //
          console.log('SORT_BENCHMARK . SORTED ARRAY : ' + index + ' : ' + this.stringMatrix[index]);
        }
        //-----------------------------------------------------------------------
        // DIBUJAR CUADRICULA
        //-----------------------------------------------------------------------
        //
        this.DrawStepMain();
        //
        return true;
      },
      error: err => {
        //
        console.error(AlgorithmSortComponent.PageTitle + ' - [GETTING SORT] - [error] : ' + err.message);
        //
        this.lblStatus = "[ha ocurrido un error]";
        //
        return false;
      },
      complete: () => {
        //
        console.warn(AlgorithmSortComponent.PageTitle + ' - [GETTING SORT] - [Observer got a complete notification]');
      }
    };
    //
    GetSortInfo.subscribe(GetSortInfoObserver);
  }
  //
  GetNewSort() {
    //
    console.log(AlgorithmSortComponent.PageTitle + " - [NEW SORT]");
    //
    this.SortAlgorithmList.nativeElement.options.selectedIndex = 0;
    //
    this.stringMatrix = [];
    //
    this.mensajes_1.nativeElement.innerHTML = "...obteniendo arreglo...";
    //
    this.mensajes_2.nativeElement.innerHTML = "...obteniendo arreglo...";
    //
    this.lblStatus = "...obteniendo arreglo...";
    //
    let randomVertexInfo;
    //
    randomVertexInfo = this.mcsdService.getNewSort();
    //
    const randomVertexObserver = {
      //
      next: sortInfo => {
        //
        console.info(AlgorithmSortComponent.PageTitle + ' - [GETTING NEW SORT]  - RETURN VALUE : ' + sortInfo);
        //
        //-------------------------------------------------------------
        // CONFIGURA CONTROLES
        //-------------------------------------------------------------
        //
        this.mensajes.nativeElement.innerHTML = sortInfo;
        //
        let sortInfo_1 = sortInfo;
        //
        while (sortInfo_1.indexOf("<br/>") != -1) {
          //
          sortInfo_1 = sortInfo_1.replace("<br/>", this.arraySeparator);
        }
        //
        sortInfo_1 = sortInfo_1.trim();
        //
        this.mensajes_1.nativeElement.innerHTML = sortInfo_1;
        //
        this.mensajes_2.nativeElement.innerHTML = sortInfo_1;
        //
        this._ResetControls();
      },
      error: err => {
        //
        console.error(AlgorithmSortComponent.PageTitle + ' - [GETTING NEW SORT] - [error] : ' + err.message);
        //
        this.lblStatus = "[ha ocurrido un error]";
      },
      complete: () => {
        //
        console.warn(AlgorithmSortComponent.PageTitle + ' - [GETTING NEW SORT] - [Observer got a complete notification]');
        //
      }
    };
    //
    randomVertexInfo.subscribe(randomVertexObserver);
  }
  //
  _ResetControls() {
    //
    console.log(this.pageTitle + ' [RESET CONTROLS] ');
    //
    this.stringArray_ = this.mensajes.nativeElement.innerHTML.split("<br>");
    //
    console.log('NUMBER ARRAY [CURRENT] : ' + this.stringArray_);
    //
    let numberArray = [];
    //
    this.stringArray_.forEach((element, index) => {
      //
      let sortInfo = new _models_log_info_model__WEBPACK_IMPORTED_MODULE_0__.SortInfo(element, false);
      //
      numberArray.push(sortInfo);
    });
    //
    this.DrawGrid();
    //
    this.DrawRectangles(numberArray);
    //
    this.lblStatus = "[REINICIO EXITOSO]";
    //
    this.GetSortLabel = "[ORDENAR]";
  }
  //
  DrawRectangles(stringArray) {
    //
    let defaultFillStyle = "#ccc";
    //
    let swapFillStyle = "#FFA500";
    //
    for (let index = 0; index < 25; index++) {
      //
      let x = 0 + this.rectSize * index;
      let y = this.screenSize - Number.parseInt(stringArray[index].value) * this.rectSize;
      let length = this.rectSize;
      let height = Number.parseInt(stringArray[index].value) * this.rectSize;
      //
      this.context.fillStyle = stringArray[index].swap == true ? swapFillStyle : defaultFillStyle;
      //
      this.context.fillRect(x, y, length, height);
    }
  }
  //
  DrawStep() {
    //
    console.log('SORT_BENCHMARK . DRAWING ARRAY : ' + this.indexDraw);
    //
    if (this.indexDraw >= this.stringMatrix.length) {
      //
      let _sortedArrayDecoded = this.sortedArrayDecoded;
      //
      while (_sortedArrayDecoded.indexOf("<br/>") != -1) {
        //
        _sortedArrayDecoded = _sortedArrayDecoded.replace("<br/>", this.arraySeparator);
      }
      //
      _sortedArrayDecoded = _sortedArrayDecoded.trim();
      //
      this.mensajes_2.nativeElement.innerHTML = _sortedArrayDecoded;
      //
      this.lblStatus = "[SE ORDENO CORRECTAMENTE EL LISTADO]";
      //
      this.GetSortLabel = "[...ordenado...]";
      //
      console.log('SORT_BENCHMARK . SORTED ARRAY : ' + _sortedArrayDecoded);
      //
      return;
    }
    //
    if (this.stringMatrix[this.indexDraw] == null || this.stringMatrix[this.indexDraw] != '') {
      //
      this.lblStatus = `Paso ${this.indexDraw} de ${this.stringMatrix.length - 1}`;
      //
      let stringArray_past = this.indexDraw == 1 ? this.stringArray_ : this.stringMatrix[this.indexDraw - 1].split(",");
      //
      console.log('NUMBER ARRAY [PAST]    : ' + stringArray_past);
      //
      let stringArray_current = this.stringMatrix[this.indexDraw].split(",");
      //
      console.log('NUMBER ARRAY [CURRENT] : ' + stringArray_current);
      //
      let numberArray = [];
      //
      stringArray_current.forEach((element, index) => {
        //
        let swapStyle = stringArray_current[index] != stringArray_past[index];
        //
        let sortInfo = new _models_log_info_model__WEBPACK_IMPORTED_MODULE_0__.SortInfo(element, swapStyle);
        //
        numberArray.push(sortInfo);
      });
      //
      this.DrawGrid();
      //
      this.DrawRectangles(numberArray);
      //
      this.DrawArray();
    }
    //
    this.indexDraw++;
    //
    setTimeout(() => {
      this.DrawStep();
    }, this.delayInMilliseconds);
  }
  //
  DrawStepMain() {
    //
    this.indexDraw = 0;
    //
    this.GetSortLabel = "[...ordenando...]";
    //
    console.log('SORT_BENCHMARK . DRAWING ARRAY INITIAL. index: ' + this.indexDraw + ',matrix length : : ' + this.stringMatrix.length);
    //
    this.DrawStep();
  }
  //
  DrawArray() {
    let _sortedArrayDecoded = this.stringMatrix[this.indexDraw];
    //
    while (_sortedArrayDecoded.indexOf(",") != -1) {
      //
      _sortedArrayDecoded = _sortedArrayDecoded.replace(",", this.arraySeparator);
    }
    //
    this.mensajes_2.nativeElement.innerHTML = _sortedArrayDecoded.trim();
  }
  //
  _cppSourceDivHiddenChaged() {
    //
    console.log(AlgorithmSortComponent.PageTitle + " - [DIV CPP SOURCE CHANGED]");
    //
    let _selectedIndex = this._languajeList.nativeElement.options.selectedIndex;
    this._cppSourceDivHidden = _selectedIndex != 2; // item 2 = "c++"
  }
}

AlgorithmSortComponent.ɵfac = function AlgorithmSortComponent_Factory(t) {
  return new (t || AlgorithmSortComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_mcsd_service__WEBPACK_IMPORTED_MODULE_1__.MCSDService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_app_module__WEBPACK_IMPORTED_MODULE_2__.CustomErrorHandler));
};
AlgorithmSortComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AlgorithmSortComponent,
  selectors: [["app-algorithm-sort"]],
  viewQuery: function AlgorithmSortComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c5, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.c_canvas = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mensajes = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mensajes_1 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.mensajes_2 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.SortAlgorithmList = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx._languajeList = _t.first);
    }
  },
  decls: 70,
  vars: 9,
  consts: [[1, "content"], [1, "content-body"], ["href", "javascript: void window.open('https://en.wikipedia.org/wiki/Bubble_sort')"], ["href", "javascript: void window.open('https://en.wikipedia.org/wiki/Quicksort')"], ["href", "javascript: void window.open('https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle')"], ["id", "mensajes_1", 1, "mensajes"], ["mensajes_1", ""], ["id", "mensajes_2", 1, "mensajes"], ["mensajes_2", ""], ["id", "mensajes", 2, "visibility", "hidden", "height", "0px"], ["mensajes", ""], ["id", "c_canvas", "width", "250px", "height", "250px"], ["c_canvas", ""], ["id", "lblstatus"], ["id", "SortAlgorithmList", 3, "disabled"], ["SortAlgorithmList", ""], ["value", "0"], ["value", "1"], ["value", "2"], ["id", "LangListDiv"], ["id", "tituloListadoLenguajes"], ["for", "LangList"], ["id", "LanguageList", "name", "LanguajeList", 3, "change"], ["_languajeList", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "cppSoureDiv", 3, "hidden"], ["href", "javascript: void window.open('https://github.com/aperezNWO/CppBuilder01/blob/master/Project2/SortBenchMark.cpp')"], ["id", "NewSort", "type", "button", "title", "[REINICIAR]", "value", "[REINICIAR]", 3, "disabled", "click"], ["id", "GetSort", "type", "button", "title", "[ORDENAR]", 3, "value", "disabled", "click"], ["routerLink", "/AlgorithmWeb"], [3, "value"]],
  template: function AlgorithmSortComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Ver referencia\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "[BUBBLE SORT]");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Ver referencia\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "[QUICK SORT]");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Ver referencia\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "[FISHER/YATES SHUFFLE]");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Listado a Ordenar");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "div", 5, 6)(21, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Listado Oredenado");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "div", 7, 8)(26, "div", 9, 10)(28, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "canvas", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div")(34, "span", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " ALGORITMO : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "select", 14, 15)(41, "option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "[SELECCIONE_OPCION]");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "BUBBLE SORT");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "option", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "QUICK SORT");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 19)(49, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "br")(52, "label", 21)(53, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, " \u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "select", 22, 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AlgorithmSortComponent_Template_select_change_55_listener() {
        return ctx._cppSourceDivHiddenChaged();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, AlgorithmSortComponent_option_57_Template, 2, 2, "option", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, " \u00A0\u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "span", 25)(60, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "[View Source]");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div")(64, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AlgorithmSortComponent_Template_input_click_64_listener() {
        return ctx.GetNewSort();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, " | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AlgorithmSortComponent_Template_input_click_66_listener() {
        return ctx.GetSort();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](67, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Volver al Men\u00FA");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.pageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.lblStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !(ctx.GetSortLabel != "[...ordenando...]" && ctx.GetSortLabel != "[...ordenado...]"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.tituloListadoLenguajes);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.__languajeList);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx._cppSourceDivHidden);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !(ctx.lblStatus == "[SE ORDENO CORRECTAMENTE EL LISTADO]"));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", ctx.GetSortLabel);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !(ctx.GetSortLabel != "[...ordenando...]" && ctx.GetSortLabel != "[...ordenado...]"));
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
  styles: ["\n\n    \n\n    \n\n    .modalStatus[_ngcontent-%COMP%] \n    {\n        display: none; \n\n        position: fixed; \n\n        z-index: 99; \n\n        left: 0;\n        top: 0;\n        width: 100%; \n\n        height: 100%; \n\n        overflow: auto; \n\n        background-color: rgb(0,0,0); \n\n        background-color: rgba(0,0,0,0.4); \n\n    }\n\n    .modalStatus-content[_ngcontent-%COMP%] \n    {\n        text-align: center;\n        background-color: #fefefe;\n        margin: 15% auto; \n\n        padding: 1em;\n        border: 1px solid #888;\n        width: 100%; \n\n        color: black;\n    }\n    \n\n    \n\n    \n\n    .mensajes[_ngcontent-%COMP%] {\n        border: 5px solid #ddd;\n        padding : 10px;\n        background: #cccccc;\n        color: #0000ff;\n        font-size:xx-small;\n        overflow-y: auto;\n    }\n    \n\n    \n\n    \n\n\n    #c_canvas[_ngcontent-%COMP%] {\n        width: 250px;\n        height: 250px;\n        background-color: #fff;\n    }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX21vZHVsZXMvYWxnb3JpdGhtL2FsZ29yaXRobS1zb3J0L2FsZ29yaXRobS1zb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IklBQUksbURBQW1EO0lBQ25ELG1EQUFtRDtJQUNuRCxtREFBbUQ7SUFDbkQ7O1FBRUksYUFBYSxFQUFFLHNCQUFzQjtRQUNyQyxlQUFlLEVBQUUsa0JBQWtCO1FBQ25DLFdBQVcsRUFBRSxlQUFlO1FBQzVCLE9BQU87UUFDUCxNQUFNO1FBQ04sV0FBVyxFQUFFLGVBQWU7UUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtRQUM5QixjQUFjLEVBQUUsNEJBQTRCO1FBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtRQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7SUFDNUQ7O0lBRUE7O1FBRUksa0JBQWtCO1FBQ2xCLHlCQUF5QjtRQUN6QixnQkFBZ0IsRUFBRSxrQ0FBa0M7UUFDcEQsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixXQUFXLEVBQUUsb0RBQW9EO1FBQ2pFLFlBQVk7SUFDaEI7SUFDQSxtREFBbUQ7SUFDbkQsbURBQW1EO0lBQ25ELG1EQUFtRDtJQUNuRDtRQUNJLHNCQUFzQjtRQUN0QixjQUFjO1FBQ2QsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0lBQ0EsbURBQW1EO0lBQ25ELG1EQUFtRDtJQUNuRCxtREFBbUQ7O0lBRW5EO1FBQ0ksWUFBWTtRQUNaLGFBQWE7UUFDYixzQkFBc0I7SUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLyogRVNUSUxPUyBTVEFUVVMgREUgT1BFUkFDSU9OICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLm1vZGFsU3RhdHVzIFxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICAgICAgei1pbmRleDogOTk7IC8qIFNpdCBvbiB0b3AgKi9cclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gICAgICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgICAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbFN0YXR1cy1jb250ZW50IFxyXG4gICAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gICAgICAgIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLyogRVNUSUxPIFBBUkEgTElTVEFETyAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLm1lbnNhamVzIHtcclxuICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjZGRkO1xyXG4gICAgICAgIHBhZGRpbmcgOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwZmY7XHJcbiAgICAgICAgZm9udC1zaXplOnh4LXNtYWxsO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAvKiBFU1RJTE8gUEFSQSBDQU5WQVMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4gICAgI2NfY2FudmFzIHtcclxuICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5876:
/*!*****************************************************************************!*\
  !*** ./src/app/_modules/algorithm/algorithm-web/algorithm-web.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlgorithmWebComponent: () => (/* binding */ AlgorithmWebComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.module */ 8629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);



//
//
class AlgorithmWebComponent {
  //
  static get PageTitle() {
    return '[ALGORITMOS]';
  }
  //
  constructor(customErrorHandler) {
    this.customErrorHandler = customErrorHandler;
    //
    this.pageTitle = AlgorithmWebComponent.PageTitle;
    //
    console.log(AlgorithmWebComponent.PageTitle + " - [INGRESO]");
  }
}
AlgorithmWebComponent.ɵfac = function AlgorithmWebComponent_Factory(t) {
  return new (t || AlgorithmWebComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_app_module__WEBPACK_IMPORTED_MODULE_0__.CustomErrorHandler));
};
AlgorithmWebComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AlgorithmWebComponent,
  selectors: [["app-algorithm-web"]],
  decls: 15,
  vars: 1,
  consts: [["routerLink", "/AlgorithmRegEx"], ["routerLink", "/AlgorithmSort"], ["routerLink", "/AlgorithmDijkstra"], ["routerLink", "/Home"]],
  template: function AlgorithmWebComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "H4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul")(3, "li")(4, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "[ALGORITMOS - EXPRESIONES REGULARES]");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li")(7, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "[ALGORITMOS - ORDENAMIENTO]");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li")(10, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "[ALGORITMOS - DISTANCIA MAS CORTA]");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Volver al Men\u00FA");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.pageTitle);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5048:
/*!**************************************************************************************************!*\
  !*** ./src/app/_modules/files-generation/files-generation-csv/files-generation-csv.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilesGenerationCSVComponent: () => (/* binding */ FilesGenerationCSVComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chart.js */ 7005);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 797);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ 6308);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_mcsd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/mcsd.service */ 1274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.module */ 8629);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7947);














const _c0 = ["csv_paginator"];
const _c1 = ["canvas_csv"];
const _c2 = ["divPieChart_CSV"];
function FilesGenerationCSVComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "id_Column");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FilesGenerationCSVComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r12.id_Column);
  }
}
function FilesGenerationCSVComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "ciudad");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FilesGenerationCSVComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r13.ciudad);
  }
}
function FilesGenerationCSVComponent_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "nombreCompleto");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function FilesGenerationCSVComponent_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](element_r14.nombreCompleto);
  }
}
function FilesGenerationCSVComponent_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 24);
  }
}
function FilesGenerationCSVComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 25);
  }
}
function FilesGenerationCSVComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r9.downloadLink, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r9.downloadCaption);
  }
}
const _c3 = function () {
  return [5, 10, 25, 100];
};
//
//
class FilesGenerationCSVComponent {
  //--------------------------------------------------------------------------
  // PROPIEDADES COMUNES
  //--------------------------------------------------------------------------
  //
  static get PageTitle() {
    return '[GENERAR ARCHIVOS CSV]';
  }
  //--------------------------------------------------------------------------
  // EVENT HANDLERS FORMIULARIO 
  //--------------------------------------------------------------------------
  //
  constructor(mcsdService, formBuilder, customErrorHandler) {
    this.mcsdService = mcsdService;
    this.formBuilder = formBuilder;
    this.customErrorHandler = customErrorHandler;
    this.pageTitle = FilesGenerationCSVComponent.PageTitle;
    //--------------------------------------------------------------------------
    // PROPIEDADES - LISTADO
    //--------------------------------------------------------------------------
    this.csv_dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource();
    // 
    this.csv_displayedColumns = ['id_Column', 'ciudad', 'nombreCompleto'];
    //
    this.downloadLink = "";
    //
    this.downloadCaption = "[DESCARGAR CSV]";
    //
    chart_js__WEBPACK_IMPORTED_MODULE_6__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_6__.registerables);
    //
    mcsdService.SetLog(this.pageTitle, "PAGE_CSV_ASYNC_DEMO");
  }
  //
  ngOnInit() {
    //
    this.SetCSVData();
    //
    this.SetCSVLink();
    //
    this.SetChart();
    //
    console.log(FilesGenerationCSVComponent.PageTitle + " - [INGRESO]");
  }
  //
  ngAfterViewInit() {
    //
  }
  //
  SetCSVData() {
    //
    console.log(FilesGenerationCSVComponent.PageTitle + " - [SET CSV DATA]");
    //
    let csv_informeLogRemoto;
    csv_informeLogRemoto = this.mcsdService.getInformeRemotoCSV();
    //
    const csv_observer = {
      next: csv_data => {
        //
        console.log(FilesGenerationCSVComponent.PageTitle + " - [SET CSV DATA] - Return Values : [" + csv_data + "]");
        //
        let jsondata = JSON.parse(csv_data);
        //
        let recordNumber = jsondata.length;
        //
        console.log('ESTADISTICA - (return): ' + recordNumber);
        //
        this.csv_dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource(jsondata);
        this.csv_dataSource.paginator = this.csv_paginator;
      },
      error: err => {
        //
        console.log(FilesGenerationCSVComponent.PageTitle + " - [SET CSV DATA] - Error : [" + err.message + "]");
      },
      complete: () => {
        //
        console.log(FilesGenerationCSVComponent.PageTitle + " - [SET CSV DATA] - [Search end]");
      }
    };
    //
    csv_informeLogRemoto.subscribe(csv_observer);
  }
  //
  SetCSVLink() {
    //
    console.log(FilesGenerationCSVComponent.PageTitle + " - [SET CSV Link]");
    //
    let csv_link;
    csv_link = this.mcsdService.getCSVLinkGET();
    //
    const csv_link_observer = {
      next: p_csv_link => {
        //
        let fileUrl = this.mcsdService._prefix + p_csv_link;
        //
        let downloadLink_1 = fileUrl;
        //
        while (downloadLink_1.indexOf("\"") > -1) downloadLink_1 = downloadLink_1.replace("\"", "");
        //
        this.downloadLink = downloadLink_1;
        //
        console.log(FilesGenerationCSVComponent.PageTitle + " - [SET CSV LINK] - DOWNLOAD LINK : [" + this.downloadLink + "]");
      },
      error: err => {
        //
        console.log(FilesGenerationCSVComponent.PageTitle + " - [SET CSV LINK] - Error : [" + err.message + "]");
      },
      complete: () => {
        //
        console.log(FilesGenerationCSVComponent.PageTitle + " - [SET CSV LINK] - [Search end]");
      }
    };
    //
    csv_link.subscribe(csv_link_observer);
  }
  //
  SetChart() {
    //
    console.log(FilesGenerationCSVComponent.PageTitle + " - [SET CHART]");
    //
    const statLabels = [];
    const statData = [];
    const statBackgroundColor = [];
    //
    let csv_informeLogRemoto;
    csv_informeLogRemoto = this.mcsdService.getInformeRemotoCSV_STAT();
    //
    const csv_observer = {
      next: csv_data => {
        //
        console.log(FilesGenerationCSVComponent.PageTitle + " - [SET CSV DATA] - Return Values : [" + csv_data + "]");
        //
        let jsondata = JSON.parse(csv_data);
        //
        let recordNumber = jsondata.length;
        //
        console.log('ESTADISTICA - (return): ' + recordNumber);
        //
        jsondata.forEach((element, index) => {
          //
          console.log(index + " " + JSON.stringify(element));
          //
          console.log("[CSV DEMO] - SET CHART - RESULT : index [" + index + "] value={" + jsondata[index]["id_Column"] + "-" + jsondata[index]["ciudad"] + "}");
          //
          statLabels.push(jsondata[index]["ciudad"]);
          statData.push(Number(jsondata[index]["id_Column"]));
          //
          let randomNumber_1 = Math.floor(Math.random() * 100);
          let randomNumber_2 = Math.floor(Math.random() * 100);
          let randomNumber_3 = Math.floor(Math.random() * 100);
          //
          console.log('RANDOM NUMBERS : [' + randomNumber_1 + ',' + randomNumber_2 + ',' + randomNumber_3 + ']');
          //
          let rgbStr = 'rgb(' + (Number(jsondata[index]["id_Column"]) + randomNumber_1) + ',' + (Number(jsondata[index]["id_Column"]) + randomNumber_2) + ',' + (Number(jsondata[index]["id_Column"]) + randomNumber_3) + ')';
          //
          console.log('RGB : ' + rgbStr);
          //
          statBackgroundColor.push(rgbStr);
        });
      },
      error: err => {
        //
        console.log(FilesGenerationCSVComponent.PageTitle + " - [SET CSV DATA] - Error : [" + err.message + "]");
      },
      complete: () => {
        //
        console.log(FilesGenerationCSVComponent.PageTitle + " - [SET CSV DATA] - [Search end]");
        //
        const data = {
          labels: statLabels,
          datasets: [{
            label: 'CIUDADES',
            data: statData,
            backgroundColor: statBackgroundColor,
            hoverOffset: 4
          }]
        };
        //
        let context = this.canvas_csv.nativeElement.getContext('2d');
        //
        this.pieChartVar = new chart_js__WEBPACK_IMPORTED_MODULE_6__.Chart(context, {
          type: 'pie',
          data: data,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'bottom'
              },
              title: {
                display: true,
                text: 'CIUDADES'
              }
            }
          }
        });
      }
    };
    //
    csv_informeLogRemoto.subscribe(csv_observer);
  }
  //--------------------------------------------------------------------------
  // METODOS - PDF
  //--------------------------------------------------------------------------
  //
  GetPDF() {
    //
    console.log("getting pdf");
    //
    html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(this.canvas_csv.nativeElement).then(_canvas => {
      //
      let w = this.divPieChart_CSV.nativeElement.offsetWidth;
      let h = this.divPieChart_CSV.nativeElement.offsetHeight;
      //
      let imgData = _canvas.toDataURL('image/jpeg');
      //
      let pdfDoc = new jspdf__WEBPACK_IMPORTED_MODULE_0__["default"]("landscape", "px", [w, h]);
      //
      pdfDoc.addImage(imgData, 0, 0, w, h);
      //
      pdfDoc.save('sample-file.pdf');
    });
  }
}
FilesGenerationCSVComponent.ɵfac = function FilesGenerationCSVComponent_Factory(t) {
  return new (t || FilesGenerationCSVComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_mcsd_service__WEBPACK_IMPORTED_MODULE_2__.MCSDService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_module__WEBPACK_IMPORTED_MODULE_3__.CustomErrorHandler));
};
FilesGenerationCSVComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: FilesGenerationCSVComponent,
  selectors: [["app-files-generation-csv"]],
  viewQuery: function FilesGenerationCSVComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c2, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.csv_paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.canvas_csv = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.divPieChart_CSV = _t.first);
    }
  },
  decls: 41,
  vars: 9,
  consts: [["align", "center", 2, "padding-top", "10px"], ["label", "[CONSULTA_1 (LISTADO)]"], [1, "mat-elevation-z8"], ["mat-table", "", "aria-label", "rf_paginator", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id_Column"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "ciudad"], ["matColumnDef", "nombreCompleto"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "csv_paginator", 1, "demo-paginator", 3, "length", "pageSize", "pageSizeOptions"], ["csv_paginator", "matPaginator"], [4, "ngIf"], ["label", "[CONSULTA_2 (ESTADISTICAS)]"], ["id", "divPieChart_CSV", "height", "400", "width", "400", 1, "chart-container", 2, "display", "block", "box-sizing", "border-box", "height", "400px", "width", "400px", "padding", "5px"], ["divPieChart_CSV", ""], ["id", "canvas_csv", 2, "background-color", "bisque", "padding", "10px 10px 10px 10px"], ["canvas_csv", ""], ["id", "divdescargapdf", "align", "right", 2, "display", "block"], ["id", "GetPDF", "type", "button", "title", "[GENERAR PDF]", "value", "[GENERAR PDF]", 3, "click"], ["routerLink", "/FilesGenerationWeb"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["id", "DownloadFile", "target", "_blank", 3, "href"]],
  template: function FilesGenerationCSVComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-tab-group")(4, "mat-tab", 1)(5, "div", 0)(6, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "[CONSULTA_1 (LISTADO)]");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 2)(9, "table", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, FilesGenerationCSVComponent_th_11_Template, 2, 0, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, FilesGenerationCSVComponent_td_12_Template, 2, 1, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, FilesGenerationCSVComponent_th_14_Template, 2, 0, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, FilesGenerationCSVComponent_td_15_Template, 2, 1, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, FilesGenerationCSVComponent_th_17_Template, 2, 0, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, FilesGenerationCSVComponent_td_18_Template, 2, 1, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, FilesGenerationCSVComponent_tr_19_Template, 1, 0, "tr", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, FilesGenerationCSVComponent_tr_20_Template, 1, 0, "tr", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "hr")(22, "mat-paginator", 11, 12)(24, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, FilesGenerationCSVComponent_div_25_Template, 3, 2, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-tab", 14)(27, "div", 0)(28, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "[CONSULTA_2 (ESTADISTICAS)]");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 15, 16)(32, "canvas", 17, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 19)(37, "input", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FilesGenerationCSVComponent_Template_input_click_37_listener() {
        return ctx.GetPDF();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Volver al Men\u00FA");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.pageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.csv_dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.csv_displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.csv_displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("pageSize", 5)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.downloadLink);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.pieChartVar);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_10__.MatTabGroup, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink],
  styles: [".mat-column-id_Column[_ngcontent-%COMP%] {\n    flex: none;\n    width: 100px;\n    padding: 1rem;\n  }\n\n.mat-column-ciudad[_ngcontent-%COMP%] {\n  flex: none;\n  width: 100px;\n  padding: 1rem;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 40%;\n  margin: 0 auto;\n  background-color: cadetblue;\n  padding:1em;\n}\n\nlabel[_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  \n\n  display: inline-block;\n}\n\nlabel[_ngcontent-%COMP%] {\n  width: 30%;\n  \n\n  text-align: right;\n}\n\nlabel[_ngcontent-%COMP%] + input[_ngcontent-%COMP%] {\n  width: 30%;\n  \n\n\n  margin: 0 30% 0 4%;\n}\n\nlabel[_ngcontent-%COMP%] + select[_ngcontent-%COMP%] {\n  width: 32%;\n  \n\n\n  margin: 0 32% 0 4%;\n}\n\n\n\n\ninput[_ngcontent-%COMP%] + input[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.mdc-list-item__content[_ngcontent-%COMP%]\n{\n   color:bisque;   \n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX21vZHVsZXMvZmlsZXMtZ2VuZXJhdGlvbi9maWxlcy1nZW5lcmF0aW9uLWNzdi9maWxlcy1nZW5lcmF0aW9uLWNzdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0FBRUY7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDViw4Q0FBOEM7RUFDOUMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWOzJFQUN5RTtFQUN6RSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Y7MkVBQ3lFO0VBQ3pFLGtCQUFrQjtBQUNwQjs7QUFFQTtvRUFDb0U7QUFDcEU7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0dBRUcsWUFBWTtBQUNmIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jb2x1bW4taWRfQ29sdW1uIHtcclxuICAgIGZsZXg6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuXHJcbi5tYXQtY29sdW1uLWNpdWRhZCB7XHJcbiAgZmxleDogbm9uZTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjYWRldGJsdWU7XHJcbiAgcGFkZGluZzoxZW07XHJcbn1cclxuXHJcbmxhYmVsLFxyXG5zZWxlY3QsXHJcbmlucHV0IHtcclxuICAvKiBJbiBvcmRlciB0byBkZWZpbmUgd2lkdGhzICovXHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICAvKiBQb3NpdGlvbnMgdGhlIGxhYmVsIHRleHQgYmVzaWRlIHRoZSBpbnB1dCAqL1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5sYWJlbCtpbnB1dCB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICAvKiBMYXJnZSBtYXJnaW4tcmlnaHQgdG8gZm9yY2UgdGhlIG5leHQgZWxlbWVudCB0byB0aGUgbmV3LWxpbmVcclxuICAgICAgICAgICBhbmQgbWFyZ2luLWxlZnQgdG8gY3JlYXRlIGEgZ3V0dGVyIGJldHdlZW4gdGhlIGxhYmVsIGFuZCBpbnB1dCAqL1xyXG4gIG1hcmdpbjogMCAzMCUgMCA0JTtcclxufVxyXG5cclxubGFiZWwrc2VsZWN0IHtcclxuICB3aWR0aDogMzIlO1xyXG4gIC8qIExhcmdlIG1hcmdpbi1yaWdodCB0byBmb3JjZSB0aGUgbmV4dCBlbGVtZW50IHRvIHRoZSBuZXctbGluZVxyXG4gICAgICAgICAgIGFuZCBtYXJnaW4tbGVmdCB0byBjcmVhdGUgYSBndXR0ZXIgYmV0d2VlbiB0aGUgbGFiZWwgYW5kIGlucHV0ICovXHJcbiAgbWFyZ2luOiAwIDMyJSAwIDQlO1xyXG59XHJcblxyXG4vKiBPbmx5IHRoZSBzdWJtaXQgYnV0dG9uIGlzIG1hdGNoZWQgYnkgdGhpcyBzZWxlY3RvcixcclxuICAgICAgIGJ1dCB0byBiZSBzdXJlIHlvdSBjb3VsZCB1c2UgYW4gaWQgb3IgY2xhc3MgZm9yIHRoYXQgYnV0dG9uICovXHJcbmlucHV0K2lucHV0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5tZGMtbGlzdC1pdGVtX19jb250ZW50XHJcbntcclxuICAgY29sb3I6YmlzcXVlOyAgIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8437:
/*!**************************************************************************************************!*\
  !*** ./src/app/_modules/files-generation/files-generation-pdf/files-generation-pdf.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilesGenerationPDFComponent: () => (/* binding */ FilesGenerationPDFComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_mcsd_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_services/mcsd.service */ 1274);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.module */ 8629);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);






const _c0 = ["subjectName"];
const _c1 = function (a0) {
  return {
    width: a0
  };
};
function FilesGenerationPDFComponent_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c1, ctx_r3.progress + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-valuenow", ctx_r3.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.progress, "% ");
  }
}
function FilesGenerationPDFComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, FilesGenerationPDFComponent_div_14_div_1_Template, 3, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.GetPDFUrl);
  }
}
function FilesGenerationPDFComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.message);
  }
}
class FilesGenerationPDFComponent {
  //
  static get PageTitle() {
    return '[GENERAR ARCHIVOS PDF]';
  }
  ////////////////////////////////////////////////////////////////
  // EVENT HANDLERS
  ////////////////////////////////////////////////////////////////
  constructor(mcsdService, customErrorHandler) {
    this.mcsdService = mcsdService;
    ////////////////////////////////////////////////////////////////
    // PROPERTIES
    ////////////////////////////////////////////////////////////////
    this.progress = 0;
    this.message = '';
    this.downloadCaption = '';
    this.values = '';
    this.DownloadLink = '';
    this.pageTitle = FilesGenerationPDFComponent.PageTitle;
    //
    console.log(FilesGenerationPDFComponent.PageTitle + "- [INGRESO]");
    //
    mcsdService.SetLog(this.pageTitle, "PAGE_PDF_DEMO");
  }
  //
  onNewPdf() {
    //
    this.progress = 0;
    this.message = '';
    this.DownloadLink = '';
    this.subjectName.nativeElement.value = '';
  }
  //
  onSubmit() {
    //
    if (this.subjectName.nativeElement.value == '') {
      this.message = 'Favor ingrese [NOMBRE COMPLETO]';
      return;
    }
    //
    this.progress = 0;
    this.message = '...cargando...';
    this.downloadCaption = '...cargando...';
    //
    let _subjectName = this.subjectName.nativeElement.value;
    //
    this.GetPDFUrl = this.mcsdService.GetPDF(_subjectName);
    //
    const pdf_observer = {
      next: event => {
        //
        if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse) {
          //
          this.progress = 100;
          //
          var resultArray = event.body.split("|");
          //
          if (resultArray.length > 0) {
            //
            var fileUrl = this.mcsdService._prefix + '/wwwroot/output/uploadedfiles/pdf/' + resultArray[1];
            var fileLocalPath = resultArray[2];
            var imagePath = resultArray[3];
            //
            let downloadLink_1 = fileUrl;
            //
            while (downloadLink_1.indexOf("\"") > -1) downloadLink_1 = downloadLink_1.replace("\"", "");
            //
            this.DownloadLink = this.mcsdService.DebugHostingContent(downloadLink_1);
            //
            console.info("PDF FILENAME  : " + fileUrl);
            //
            console.info("PDF PATH      : " + fileLocalPath);
            //
            console.info("IMAGE PATH    : " + imagePath);
            //
            console.info('[GENERATE PDF FILE] - [Download link] : ' + this.DownloadLink);
            //
            this.message = '[Se cargó correctamente el archivo]';
            //
            this.downloadCaption = '[DESCARGAR PDF]';
          }
        } else {
          //
          if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpEventType.Sent) this.progress = 25;
          //
          //if (event.type === HttpEventType.ResponseHeader) 
          //  this.progress = 50;
          //
          if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpEventType.DownloadProgress) this.progress = 50;
        } // end if event instance 
      },

      error: err => {
        //
        this.message = '[Ha ocurrido un error]';
        //
        console.error('[GENERATE PDF FILE] - Error :' + err);
      },
      complete: () => {
        //
        console.warn('[GENERATE PDF FILE] - COMPLETED ');
        //
      }
    };
    //
    this.GetPDFUrl.subscribe(pdf_observer);
  }
}
FilesGenerationPDFComponent.ɵfac = function FilesGenerationPDFComponent_Factory(t) {
  return new (t || FilesGenerationPDFComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_mcsd_service__WEBPACK_IMPORTED_MODULE_0__.MCSDService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_module__WEBPACK_IMPORTED_MODULE_1__.CustomErrorHandler));
};
FilesGenerationPDFComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FilesGenerationPDFComponent,
  selectors: [["app-files-generation-pdf"]],
  viewQuery: function FilesGenerationPDFComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.subjectName = _t.first);
    }
  },
  decls: 27,
  vars: 8,
  consts: [["id", "content-body"], ["align", "center", 2, "padding-top", "10px"], ["href", "javascript: void window.open('https://www.nuget.org/packages/iTextSharp/')"], ["type", "text", "id", "subjectName", 1, "inputPDF"], ["subjectName", ""], [4, "ngIf"], ["id", "GetPdf", "type", "button", "title", "[OBTENER PDF]", "value", "[OBTENER PDF]", 3, "hidden", "click"], ["id", "DownloadFile", "target", "_blank", 3, "href", "hidden"], ["id", "NewPdf", "type", "button", "title", "[NUEVO PDF]", "value", "[NUEVO PDF]", 3, "hidden", "click"], ["class", "alert alert-secondary", "role", "alert", 4, "ngIf"], ["routerLink", "/FilesGenerationWeb"], ["class", "progress my-3", 4, "ngIf"], [1, "progress", "my-3"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", "progress-bar-striped", 3, "ngStyle"], ["role", "alert", 1, "alert", "alert-secondary"]],
  template: function FilesGenerationPDFComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Ver referencia\u00A0");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "[ITextSharp v5.5.13.2]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " NOMBRE COMPLETO : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, FilesGenerationPDFComponent_div_14_Template, 2, 1, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilesGenerationPDFComponent_Template_input_click_16_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilesGenerationPDFComponent_Template_input_click_21_listener() {
        return ctx.onNewPdf();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, FilesGenerationPDFComponent_div_23_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Volver al Men\u00FA");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.DownloadLink);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.DownloadLink != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.DownloadLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("hidden", ctx.DownloadLink == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.downloadCaption);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.DownloadLink == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.message);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
  styles: ["\n\n    \n\n    \n\n    .modalStatus[_ngcontent-%COMP%] {\n        display: none; \n\n        position: fixed; \n\n        z-index: 99; \n\n        left: 0;\n        top: 0;\n        width: 100%; \n\n        height: 100%; \n\n        overflow: auto; \n\n        background-color: rgb(0,0,0); \n\n        background-color: rgba(0,0,0,0.4); \n\n    }\n\n    .modalStatus-content[_ngcontent-%COMP%] {\n        text-align: center;\n        background-color: #fefefe;\n        margin: 15% auto; \n\n        padding: 1em;\n        border: 1px solid #888;\n        width: 100%; \n\n        color: black;\n    }\n    \n\n    \n\n    \n\n    .inputPDF[_ngcontent-%COMP%] \n    {\n        width:100%;\n    }\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX21vZHVsZXMvZmlsZXMtZ2VuZXJhdGlvbi9maWxlcy1nZW5lcmF0aW9uLXBkZi9maWxlcy1nZW5lcmF0aW9uLXBkZi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJJQUFJLG1EQUFtRDtJQUNuRCxtREFBbUQ7SUFDbkQsbURBQW1EO0lBQ25EO1FBQ0ksYUFBYSxFQUFFLHNCQUFzQjtRQUNyQyxlQUFlLEVBQUUsa0JBQWtCO1FBQ25DLFdBQVcsRUFBRSxlQUFlO1FBQzVCLE9BQU87UUFDUCxNQUFNO1FBQ04sV0FBVyxFQUFFLGVBQWU7UUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtRQUM5QixjQUFjLEVBQUUsNEJBQTRCO1FBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtRQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7SUFDNUQ7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGdCQUFnQixFQUFFLGtDQUFrQztRQUNwRCxZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLFdBQVcsRUFBRSxvREFBb0Q7UUFDakUsWUFBWTtJQUNoQjtJQUNBLGtEQUFrRDtJQUNsRCxzQkFBc0I7SUFDdEIsa0RBQWtEO0lBQ2xEOztRQUVJLFVBQVU7SUFDZCIsInNvdXJjZXNDb250ZW50IjpbIiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAvKiBFU1RJTE9TIFNUQVRVUyBERSBPUEVSQUNJT04gICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgICAubW9kYWxTdGF0dXMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgICAgICAgei1pbmRleDogOTk7IC8qIFNpdCBvbiB0b3AgKi9cclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gICAgICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgICAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbFN0YXR1cy1jb250ZW50IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICAgICAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xyXG4gICAgICAgIHBhZGRpbmc6IDFlbTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLyogRVNUSUxPIFBBUkEgSU5QVVQgKi9cclxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLmlucHV0UERGIFxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICB9XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1997:
/*!**************************************************************************************************!*\
  !*** ./src/app/_modules/files-generation/files-generation-web/files-generation-web.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilesGenerationWebComponent: () => (/* binding */ FilesGenerationWebComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_mcsd_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_services/mcsd.service */ 1274);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.module */ 8629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




//
//
class FilesGenerationWebComponent {
  //
  static get PageTitle() {
    return '[GENERAR ARCHIVOS]';
  }
  //
  constructor(mcsdService, customErrorHandler) {
    //
    this.pageTitle = FilesGenerationWebComponent.PageTitle;
    //
    console.log(this.pageTitle + " - [INGRESO]");
    //
    mcsdService.SetLog(this.pageTitle, "PAGE_FILE_GENERATION_INDEX");
  }
}
FilesGenerationWebComponent.ɵfac = function FilesGenerationWebComponent_Factory(t) {
  return new (t || FilesGenerationWebComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_mcsd_service__WEBPACK_IMPORTED_MODULE_0__.MCSDService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_module__WEBPACK_IMPORTED_MODULE_1__.CustomErrorHandler));
};
FilesGenerationWebComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FilesGenerationWebComponent,
  selectors: [["app-files-generation-web"]],
  decls: 18,
  vars: 0,
  consts: [["routerLink", "/FilesGenerationCSV"], ["routerLink", "/FilesGenerationXLS"], ["routerLink", "/FilesGenerationPDF"], ["routerLink", "/FilesGenerationZIP"], ["routerLink", "/Home"]],
  template: function FilesGenerationWebComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "H4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "[GENERAR ARCHIVO]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul")(3, "li")(4, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "[GENERAR ARCHIVO CSV]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li")(7, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "[GENERAR ARCHIVO XLS]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li")(10, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "[GENERAR ARCHIVO PDF]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li")(13, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "[GENERAR ARCHIVO ZIP]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Volver al Men\u00FA");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2429:
/*!**************************************************************************************************!*\
  !*** ./src/app/_modules/files-generation/files-generation-xls/files-generation-xls.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilesGenerationXLSComponent: () => (/* binding */ FilesGenerationXLSComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _models_log_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_models/log-info.model */ 4590);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! chart.js */ 7005);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ 797);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2canvas */ 6308);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_mcsd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/mcsd.service */ 1274);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../app.module */ 8629);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 7947);
















const _c0 = ["rf_paginator"];
const _c1 = ["td_paginator"];
const _c2 = ["canvas_xls"];
const _c3 = ["divPieChart_XLS"];
function FilesGenerationXLSComponent_ul_34_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Favor seleccione el campo 'N\u00FAmero de Filas' ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilesGenerationXLSComponent_ul_34_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Favor seleccione el campo 'Fecha de Inicio' ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilesGenerationXLSComponent_ul_34_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Favor seleccione el campo 'Fecha Final' ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilesGenerationXLSComponent_ul_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Favor revise los datos del formulario");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, FilesGenerationXLSComponent_ul_34_li_3_Template, 2, 0, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, FilesGenerationXLSComponent_ul_34_li_4_Template, 2, 0, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, FilesGenerationXLSComponent_ul_34_li_5_Template, 2, 0, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.td_model.P_ROW_NUM == "0" || ctx_r4.td_model.P_ROW_NUM == "" || ctx_r4.td_model.P_ROW_NUM == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.td_model.P_FECHA_INICIO == "" || ctx_r4.td_model.P_FECHA_INICIO == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.td_model.P_FECHA_FIN == "" || ctx_r4.td_model.P_FECHA_FIN == null);
  }
}
function FilesGenerationXLSComponent_th_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "id_Column");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilesGenerationXLSComponent_td_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r33.id_Column);
  }
}
function FilesGenerationXLSComponent_th_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "pageName");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilesGenerationXLSComponent_td_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r34.pageName);
  }
}
function FilesGenerationXLSComponent_th_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "accessDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilesGenerationXLSComponent_td_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r35.accessDate);
  }
}
function FilesGenerationXLSComponent_th_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "ipValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilesGenerationXLSComponent_td_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r36.ipValue);
  }
}
function FilesGenerationXLSComponent_tr_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 62);
  }
}
function FilesGenerationXLSComponent_tr_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 63);
  }
}
function FilesGenerationXLSComponent_ul_92_li_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El campo '# de Registros' es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilesGenerationXLSComponent_ul_92_li_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El campo 'Fecha Inicial' es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilesGenerationXLSComponent_ul_92_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " El campo 'Fecha Final ' es requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilesGenerationXLSComponent_ul_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 59)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Favor revise los datos del formulario");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, FilesGenerationXLSComponent_ul_92_li_3_Template, 2, 0, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, FilesGenerationXLSComponent_ul_92_li_4_Template, 2, 0, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, FilesGenerationXLSComponent_ul_92_li_5_Template, 2, 0, "li", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r16.rf_searchForm.value["_P_ROW_NUM"] == null || ctx_r16.rf_searchForm.value["_P_ROW_NUM"] == "" || ctx_r16.rf_searchForm.value["_P_ROW_NUM"] == "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r16.rf_searchForm.value["_P_FECHA_INICIO"] == null || ctx_r16.rf_searchForm.value["_P_FECHA_INICIO"] == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r16.rf_searchForm.value["_P_FECHA_FIN"] == null || ctx_r16.rf_searchForm.value["_P_FECHA_FIN"] == "");
  }
}
function FilesGenerationXLSComponent_th_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "id_Column");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilesGenerationXLSComponent_td_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r41.id_Column);
  }
}
function FilesGenerationXLSComponent_th_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "pageName");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilesGenerationXLSComponent_td_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r42.pageName);
  }
}
function FilesGenerationXLSComponent_th_114_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "accessDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilesGenerationXLSComponent_td_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r43.accessDate);
  }
}
function FilesGenerationXLSComponent_th_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "ipValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FilesGenerationXLSComponent_td_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r44.ipValue);
  }
}
function FilesGenerationXLSComponent_tr_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 62);
  }
}
function FilesGenerationXLSComponent_tr_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 63);
  }
}
const _c4 = function () {
  return [5, 10, 25, 100];
};
//
//
class FilesGenerationXLSComponent {
  //--------------------------------------------------------------------------
  // PROPIEDADES COMUNES
  //--------------------------------------------------------------------------
  static get PageTitle() {
    return '[GENERAR ARCHIVOS XLS]';
  }
  //--------------------------------------------------------------------------
  // EVENT HANDLERS FORMIULARIO 
  //--------------------------------------------------------------------------
  constructor(mcsdService, formBuilder, customErrorHandler) {
    this.mcsdService = mcsdService;
    this.formBuilder = formBuilder;
    this.customErrorHandler = customErrorHandler;
    this.pageTitle = FilesGenerationXLSComponent.PageTitle;
    //--------------------------------------------------------------------------
    // PROPIEADES - REACTIVE FORMS
    //--------------------------------------------------------------------------
    //
    this.rf_textStatus = "";
    //
    this.rf_buttonCaption = "[Buscar]";
    //
    this.rf_formSubmit = false;
    //
    this.rf_ExcelDownloadLink = "";
    //
    this.rf_buttonCaption_xls = "";
    //
    this.rf_textStatus_xls = "";
    //
    this.rf_dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource();
    // 
    this.rf_displayedColumns = ['id_Column', 'pageName', 'accessDate', 'ipValue'];
    //
    this.rf_model = new _models_log_info_model__WEBPACK_IMPORTED_MODULE_0__.SearchCriteria("1", "1", "999", "2023-01-01", "2023-12-31", "", "");
    //
    this.rf_searchForm = this.formBuilder.group({
      _P_ROW_NUM: ["999", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      _P_FECHA_INICIO: ["2023-01-01", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      _P_FECHA_FIN: ["2022-12-31", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
    //--------------------------------------------------------------------------
    // PROPIEADES - TEMPLATE FORMS
    //--------------------------------------------------------------------------
    //
    this.td_textStatus = "";
    //
    this.td_formSubmit = false;
    //
    this.td_buttonCaption = "[Buscar]";
    //
    this.td_buttonCaption_xls = "[Generar Excel]";
    //
    this.td_textStatus_xls = "";
    //
    this.td_ExcelDownloadLink = "#";
    //
    this.td_dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource();
    //
    this.td_model = new _models_log_info_model__WEBPACK_IMPORTED_MODULE_0__.SearchCriteria("1", "1", "999", "2022-09-01", "2022-09-30", "", "");
    //
    chart_js__WEBPACK_IMPORTED_MODULE_8__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_8__.registerables);
    //
    mcsdService.SetLog(this.pageTitle, "PAGE_ACCESS_LOG_DEMO");
  }
  //
  ngOnInit() {
    //
    console.log(this.pageTitle + "- [INGRESO]");
    //
    this.rf_newSearch();
    this.td_newSearch();
    //
    this.SetChart();
  }
  //
  ngAfterViewInit() {
    //
  }
  //--------------------------------------------------------------------------
  // METODOS COMUNES 
  //--------------------------------------------------------------------------
  //
  GetFormattedDate(p_date, order) {
    //
    var today = '';
    switch (order) {
      case 0:
        // FECHA COMPLATIBLE CON ORACLE
        var p_dates = p_date.toString().split('-'); // P_DATE   = 2022-04-09
        var day = p_dates[2];
        var month = p_dates[1];
        var year = p_dates[0];
        today = day + "/" + month + "/" + year;
        //
        break;
      case 1:
        // FECHA COMPATIBLE  CON UIX
        //
        /*
        var _day      :number  = p_date.getDate();
        var _month    :number  = p_date.getMonth() + 1;
        var _yearStr  :string  = p_date.getFullYear().toString();
        var _monthStr :string  = "";
        var _dayStr   :string  = "";
        //
        if (_month < 10) _monthStr = "0"   + _month.toString();
        if (_day < 10)   _dayStr   = "0"   + _day.toString();
        //
        today                 = _yearStr  + "-" + _monthStr + "-" + _dayStr;*/
        //
        break;
    }
    //
    return today;
  }
  //--------------------------------------------------------------------------
  // METODOS REACTIVE FORMS 
  //--------------------------------------------------------------------------
  //
  rf_newSearch() {
    //
    console.warn("(NEW SEARCH RF)");
    //
    this.rf_dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource();
    this.rf_dataSource.paginator = this.rf_paginator;
    //
    this.rf_searchForm = this.formBuilder.group({
      //_P_DATA_SOURCE_ID   : ["1"           , Validators.required],
      //_P_ID_TIPO_LOG      : ["1"           , Validators.required],
      _P_ROW_NUM: ["999", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      _P_FECHA_INICIO: ["2023-01-01", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      _P_FECHA_FIN: ["2023-12-31", _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
    //
    console.log("(DEFAULT VALUES - INIT)");
    console.log("P_ROW_NUM         : " + (this.rf_searchForm.value["_P_ROW_NUM"] || ""));
    console.log("P_FECHA_INICIO    : " + (this.rf_searchForm.value["_P_FECHA_INICIO"] || ""));
    console.log("P_FECHA_FIN       : " + (this.rf_searchForm.value["_P_FECHA_FIN"] || ""));
    console.log("(DEFAULT VALUES - END)");
    //
    this.rf_buttonCaption = "[Buscar]";
    //
    this.rf_formSubmit = false;
    //
    this.rf_textStatus = "";
    //
    this.rf_buttonCaption_xls = "[Generar Excel]";
    //
    this.rf_textStatus_xls = "";
    //
    this.rf_ExcelDownloadLink = "#";
  }
  //
  rf_onSubmit() {
    //
    console.warn("(SUBMIT 1)");
    //
    let _P_DATA_SOURCE_ID = "" /*this.searchForm.value["_P_DATA_SOURCE_ID"] || ""*/;
    let _P_ID_TIPO_LOG = "" /*this.searchForm.value["_P_ID_TIPO_LOG"]    || ""*/;
    let _P_ROW_NUM = this.rf_searchForm.value["_P_ROW_NUM"] || "";
    let _P_FECHA_INICIO = this.rf_searchForm.value["_P_FECHA_INICIO"] || "";
    let _P_FECHA_FIN = this.rf_searchForm.value["_P_FECHA_FIN"] || "";
    //
    let _model = new _models_log_info_model__WEBPACK_IMPORTED_MODULE_0__.SearchCriteria(_P_DATA_SOURCE_ID, _P_ID_TIPO_LOG, _P_ROW_NUM, _P_FECHA_INICIO, _P_FECHA_FIN, "", "");
    //
    this.rf_formSubmit = true;
    //
    this.rf_textStatus = "";
    //
    if (this.rf_searchForm.valid == true) this.rf_update(_model);
  }
  //
  rf_update(_searchCriteria) {
    //
    this.rf_buttonCaption = "[Buscando por favor espere]";
    //
    this.rf_formSubmit = true;
    //
    let rf_informeLogRemoto;
    //
    rf_informeLogRemoto = this.mcsdService.getLogRemoto(_searchCriteria);
    //
    const logSearchObserver = {
      //
      next: p_logEntry => {
        //
        console.log('Observer got a next value: ' + JSON.stringify(p_logEntry));
        //
        let recordCount = p_logEntry.length;
        //
        this.rf_textStatus = "Se encontraton [" + recordCount + "] registros";
        //
        this.rf_dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(p_logEntry);
        this.rf_dataSource.paginator = this.rf_paginator;
        //
        // los botones se configuran en el evento "complete()".
      },

      error: err => {
        //
        console.error('Observer got an error: ' + err);
        //
        this.rf_textStatus = "Ha ocurrido un error";
        //
        this.rf_buttonCaption = "[Buscar]";
        //
        this.rf_formSubmit = false;
      },
      complete: () => {
        //
        console.log('Observer got a complete notification');
        //
        this.rf_buttonCaption = "[Buscar]";
        //
        this.rf_formSubmit = false;
      }
    };
    //
    rf_informeLogRemoto.subscribe(logSearchObserver);
  }
  //
  rf_GenerarInformeXLSValidate() {
    //
    this.rf_GenerarInformeXLSPost();
  }
  //
  rf_GenerarInformeXLSPost() {
    //
    console.log("GENERAR EXCEL (RF) - POST");
    //
    let rf_excelFileName;
    //
    rf_excelFileName = this.mcsdService.getInformeExcel(this.rf_model);
    //
    this.rf_ExcelDownloadLink = "#";
    //
    this.rf_buttonCaption_xls = "[Generando por favor espere...]";
    //
    this.rf_textStatus_xls = "[Generando por favor espere...]";
    //
    const xlsObserver = {
      //
      next: _excelFileName => {
        //
        console.log('Observer got a next value: ' + _excelFileName);
        //
        let urlFile = this.mcsdService.DebugHostingContent(_excelFileName);
        //
        this.rf_ExcelDownloadLink = `${this.mcsdService._prefix}/wwwroot/xlsx/${urlFile}`;
        //
        this.rf_textStatus_xls = "[Descargar Excel]";
      },
      error: err => {
        //
        console.error('Observer got an error: ' + err.cause);
        //
        console.error('Observer got an error: ' + err.message);
        //
        this.rf_buttonCaption_xls = "[Ha ocurrido un error]";
        //
        this.rf_textStatus_xls = "[Ha ocurrido un error]";
      },
      complete: () => {
        //
        console.log('Observer got a complete notification');
        //
        this.rf_buttonCaption_xls = "[Generar Excel]";
      }
    };
    //
    rf_excelFileName.subscribe(xlsObserver);
  }
  //--------------------------------------------------------------------------
  // METODOS REACTIVE FORMS 
  //--------------------------------------------------------------------------
  //
  td_newSearch() {
    //
    console.warn("(NEW SEARCH TD)");
    //
    this.td_dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource();
    this.td_dataSource.paginator = this.rf_paginator;
    //
    this.td_model = new _models_log_info_model__WEBPACK_IMPORTED_MODULE_0__.SearchCriteria("1", "1", "999", "2022-09-01", "2022-09-30", "", "");
    //
    console.log("(DEFAULT VALUES - INIT)");
    console.log("P_ROW_NUM         : " + this.td_model.P_ROW_NUM);
    console.log("P_FECHA_INICIO    : " + this.td_model.P_FECHA_INICIO);
    console.log("P_FECHA_FIN       : " + this.td_model.P_FECHA_FIN);
    console.log("(DEFAULT VALUES - END)");
    //
    this.td_buttonCaption = "[Buscar]";
    //
    this.td_formSubmit = false;
    //
    this.td_textStatus = "";
    //
    this.td_buttonCaption_xls = "[Generar Excel]";
    //
    this.td_textStatus_xls = "";
    //
    this.td_ExcelDownloadLink = "#";
  }
  //
  td_valid_form() {
    return this.td_model.P_ROW_NUM != "" && this.td_model.P_ROW_NUM != null && this.td_model.P_ROW_NUM != "0" && this.td_model.P_FECHA_INICIO != "" && this.td_model.P_FECHA_INICIO != null && this.td_model.P_FECHA_FIN != "" && this.td_model.P_FECHA_FIN != null;
  }
  //
  td_onSubmit() {
    //
    console.warn("TEMPLATE DRIVEN - (SUBMIT)");
    //
    console.warn("TEMPLATE DRIVEN - FORM VALID : " + this.td_valid_form());
    //
    this.td_formSubmit = true;
    //
    if (this.td_valid_form()) this.td_update(this.td_model);
  }
  //
  td_update(td_searchCriteria) {
    //
    this.td_buttonCaption = "[Favor espere...]";
    //
    this.td_textStatus = "";
    //
    td_searchCriteria.P_FECHA_INICIO_STR = this.GetFormattedDate(td_searchCriteria.P_FECHA_INICIO, 0);
    td_searchCriteria.P_FECHA_FIN_STR = this.GetFormattedDate(td_searchCriteria.P_FECHA_FIN, 0);
    //
    console.log("(FROM PARAM) : P_DATA_SOURCE_ID                     : " + td_searchCriteria.P_DATA_SOURCE_ID);
    console.log("(FROM PARAM) : P_ROW_NUM                            : " + td_searchCriteria.P_ROW_NUM);
    console.log("(FROM PARAM) : P_FECHA_INICIO (origen)              : " + td_searchCriteria.P_FECHA_INICIO);
    console.log("(FROM PARAM) : P_FECHA_FIN    (origen)              : " + td_searchCriteria.P_FECHA_FIN);
    console.log("(FROM PARAM) : P_FECHA_INICIO (valid : 01/09/2022)  : " + td_searchCriteria.P_FECHA_INICIO_STR);
    console.log("(FROM PARAM) : P_FECHA_FIN    (valid : 30/09/2022)  : " + td_searchCriteria.P_FECHA_FIN_STR);
    console.log("(SEARCH INIT)");
    // 
    let td_informeLogRemoto;
    td_informeLogRemoto = this.mcsdService.getLogRemoto(td_searchCriteria);
    //
    const td_observer = {
      next: td_logEntry => {
        //
        console.log('TEMPLATE DRIVEN - RETURN VALUES (Record Count): ' + td_logEntry.length);
        //
        this.td_dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource(td_logEntry);
        this.td_dataSource.paginator = this.td_paginator;
        //
        this.td_textStatus = "Se encontraron [" + td_logEntry.length + "] registros ";
        this.td_formSubmit = false;
      },
      error: err => {
        //
        console.error('TEMPLATE DRIVEN - (ERROR) : ' + JSON.stringify(err.message));
        //
        this.td_textStatus = "Ha ocurrido un error. Favor intente de nuevo";
        this.td_formSubmit = false;
        this.td_buttonCaption = "[Buscar]";
        //
      },

      complete: () => {
        //
        console.log('TEMPLATE DRIVEN -  (SEARCH END)');
        //
        this.td_formSubmit = false;
        this.td_buttonCaption = "[Buscar]";
      }
    };
    //
    td_informeLogRemoto.subscribe(td_observer);
  }
  //
  td_GenerarInformeXLSValidate() {
    this.td_GenerarInformeXLS(this.td_model);
  }
  td_GenerarInformeXLS(_searchCriteria) {
    //
    console.log("GENERAR EXCEL (td) - POST");
    //
    let td_excelFileName;
    //
    td_excelFileName = this.mcsdService.getInformeExcel(this.rf_model);
    //
    this.td_ExcelDownloadLink = "#";
    //
    this.td_buttonCaption_xls = "[Generando por favor espere...]";
    //
    this.td_textStatus_xls = "[Generando por favor espere...]";
    //
    const xlsObserver = {
      //
      next: _excelFileName => {
        //
        console.log('Observer got a next value: ' + _excelFileName);
        //
        let urlFile = this.mcsdService.DebugHostingContent(_excelFileName);
        //
        this.td_ExcelDownloadLink = `${this.mcsdService._prefix}/wwwroot/xlsx/${urlFile}`;
        //
        this.td_textStatus_xls = "[Descargar Excel]";
      },
      error: err => {
        //
        console.error('Observer got an error: ' + err.cause);
        //
        console.error('Observer got an error: ' + err.message);
        //
        this.td_buttonCaption_xls = "[Ha ocurrido un error]";
        //
        this.td_textStatus_xls = "[Ha ocurrido un error]";
      },
      complete: () => {
        //
        console.log('Observer got a complete notification');
        //
        this.td_buttonCaption_xls = "[Generar Excel]";
      }
    };
    //
    td_excelFileName.subscribe(xlsObserver);
  }
  //--------------------------------------------------------------------------
  // METODOS - ESTADISTICAS
  //--------------------------------------------------------------------------
  //
  SetChart() {
    //
    console.log(FilesGenerationXLSComponent.PageTitle + " - [SET CHART]");
    //
    const statLabels = [];
    const statData = [];
    const statBackgroundColor = [];
    // 
    let td_informeLogStat;
    td_informeLogStat = this.mcsdService.getLogStatGET();
    //
    const td_observer = {
      next: jsondata => {
        //
        let recordNumber = jsondata.length;
        //
        console.log('ESTADISTICA - (return): ' + recordNumber);
        //
        jsondata.forEach((element, index) => {
          //
          console.log(index + " " + JSON.stringify(element));
          //
          console.log("[SI-SPAE-WEB] - GET STAT - RESULT : index [" + index + "] value={" + jsondata[index]["pageName"] + "," + jsondata[index]["ipValue"] + "}");
          //
          statLabels.push(jsondata[index]["pageName"] + " - " + jsondata[index]["ipValue"]);
          statData.push(Number(jsondata[index]["ipValue"]));
          statBackgroundColor.push('rgb(' + Number(jsondata[index]["ipValue"]) / 4 + ',' + Number(jsondata[index]["ipValue"]) / 3 + ',' + Number(jsondata[index]["ipValue"]) / 2 + ')');
        });
      },
      error: err => {
        //
        console.error('ESTADISTICA- (ERROR) : ' + JSON.stringify(err.message));
        //
      },

      complete: () => {
        //
        console.log('ESTADISTICA -  (SEARCH END)');
        //
        const data = {
          labels: statLabels,
          datasets: [{
            label: 'CONTEO DE SESIONES',
            data: statData,
            backgroundColor: statBackgroundColor,
            hoverOffset: 4
          }]
        };
        //
        let context = this.canvas_xls.nativeElement.getContext('2d');
        //
        this.pieChartVar = new chart_js__WEBPACK_IMPORTED_MODULE_8__.Chart(context, {
          type: 'bar',
          data: data,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top'
              },
              title: {
                display: true,
                text: 'CONTEO DE SESIONES'
              }
            }
          }
        });
      }
    };
    //
    td_informeLogStat.subscribe(td_observer);
  }
  //--------------------------------------------------------------------------
  // METODOS - PDF
  //--------------------------------------------------------------------------
  //
  GetPDF() {
    //
    console.log("getting pdf");
    //
    html2canvas__WEBPACK_IMPORTED_MODULE_2___default()(this.canvas_xls.nativeElement).then(_canvas => {
      //
      let w = this.divPieChart_xls.nativeElement.offsetWidth;
      let h = this.divPieChart_xls.nativeElement.offsetHeight;
      //
      let imgData = _canvas.toDataURL('image/jpeg');
      //
      let pdfDoc = new jspdf__WEBPACK_IMPORTED_MODULE_1__["default"]("landscape", "px", [w, h]);
      //
      pdfDoc.addImage(imgData, 0, 0, w, h);
      //
      pdfDoc.save('sample-file.pdf');
    });
  }
}
FilesGenerationXLSComponent.ɵfac = function FilesGenerationXLSComponent_Factory(t) {
  return new (t || FilesGenerationXLSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_mcsd_service__WEBPACK_IMPORTED_MODULE_3__.MCSDService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_module__WEBPACK_IMPORTED_MODULE_4__.CustomErrorHandler));
};
FilesGenerationXLSComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: FilesGenerationXLSComponent,
  selectors: [["app-files-generation-xls"]],
  viewQuery: function FilesGenerationXLSComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c3, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.rf_paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.td_paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.canvas_xls = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.divPieChart_xls = _t.first);
    }
  },
  decls: 139,
  vars: 34,
  consts: [["align", "center", 2, "padding-top", "10px"], ["label", "[CONSULTA_1 (TEMPLATE DRIVEN)]"], [1, "mat-elevation-z8"], [1, "searchPanel"], [3, "ngSubmit"], ["td_searchForm", "ngForm"], [1, "form-group"], ["for", "P_ROW_NUM", 2, "width", "100px"], ["id", "P_ROW_NUM", "type", "number", "required", "", "name", "P_ROW_NUM", 1, "form-control", 3, "ngModel", "ngModelChange"], ["P_ROW_NUM", "ngModel"], ["for", "P_FECHA_INICIO", 2, "width", "100px"], ["id", "P_FECHA_INICIO", "type", "date", "required", "", "name", "P_FECHA_INICIO", 1, "form-control", 3, "ngModel", "ngModelChange"], ["P_FECHA_INICIO", "ngModel"], ["for", "P_FECHA_FIN", 2, "width", "100px"], ["id", "P_FECHA_FIN", "type", "date", "required", "", "name", "P_FECHA_FIN", 1, "form-control", 3, "ngModel", "ngModelChange"], ["P_FECHA_FIN", "ngModel"], ["align", "right"], ["type", "submit", 1, "button", 3, "disabled"], ["type", "button", 1, "button", 3, "click"], ["align", "left"], [4, "ngIf"], ["align", "center"], ["id", "td_status", "name", "td_searchStatus", "id", "td_searchStatus", 1, "searchStatus", 2, "width", "100%"], ["id", "td_divdescargaexcel", "align", "right", 2, "display", "block"], ["type", "button", 1, "button", 3, "disabled", "click"], ["id", "DownloadFile", 3, "href"], ["mat-table", "", "aria-label", "td_paginator", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id_Column"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "pageName"], ["matColumnDef", "accessDate"], ["matColumnDef", "ipValue"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "td_paginator", 1, "demo-paginator", 3, "length", "pageSize", "pageSizeOptions"], ["td_paginator", "matPaginator"], ["label", "[CONSULTA_2 (REACTIVE)]"], [3, "formGroup", "ngSubmit"], ["for", "_P_ROW_NUM"], ["id", "_P_ROW_NUM", "type", "text", "formControlName", "_P_ROW_NUM"], ["for", "_P_FECHA_INICIO"], ["id", "_P_FECHA_INICIO", "type", "date", "formControlName", "_P_FECHA_INICIO"], ["for", "_P_FECHA_FIN"], ["id", "_P_FECHA_FIN", "type", "date", "formControlName", "_P_FECHA_FIN"], ["class", "alert alert-danger", 4, "ngIf"], ["id", "status", "name", "searchStatus", "id", "searchStatus", 1, "searchStatus"], ["id", "divdescargaexcel", "align", "right", 2, "display", "block"], ["mat-table", "", "aria-label", "rf_paginator", 1, "mat-elevation-z8", 3, "dataSource"], ["aria-label", "rf_paginator", 1, "demo-paginator", 3, "length", "pageSize", "pageSizeOptions"], ["rf_paginator", "matPaginator"], ["label", "[CONSULTA_3 (ESTADISTICAS)]"], ["id", "divPieChart_pdf", "height", "400", "width", "800", 1, "chart-container", 2, "display", "block", "box-sizing", "border-box", "height", "400px", "width", "800px", "padding", "5px"], ["divPieChart_XLS", ""], ["id", "canvas_xls", 2, "background-color", "bisque", "padding", "10px 10px 10px 10px"], ["canvas_xls", ""], ["id", "divdescargapdf", "align", "right", 2, "display", "block"], ["id", "GetPDF", "type", "button", "title", "[GENERAR PDF]", "value", "[GENERAR PDF]", 3, "click"], ["routerLink", "/FilesGenerationWeb"], [1, "alert", "alert-danger"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
  template: function FilesGenerationXLSComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-tab-group")(4, "mat-tab", 1)(5, "div", 0)(6, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "[CONSULTA_1 (TEMPLATE DRIVEN)]");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 2)(9, "div", 3)(10, "form", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function FilesGenerationXLSComponent_Template_form_ngSubmit_10_listener() {
        return ctx.td_onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 6)(13, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "# registros : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "input", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FilesGenerationXLSComponent_Template_input_ngModelChange_15_listener($event) {
        return ctx.td_model.P_ROW_NUM = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 6)(18, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Fecha Inicio : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "input", 11, 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FilesGenerationXLSComponent_Template_input_ngModelChange_20_listener($event) {
        return ctx.td_model.P_FECHA_INICIO = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 6)(23, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Fecha Fin : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "input", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FilesGenerationXLSComponent_Template_input_ngModelChange_25_listener($event) {
        return ctx.td_model.P_FECHA_FIN = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 16)(29, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilesGenerationXLSComponent_Template_button_click_31_listener() {
        return ctx.td_newSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "[Nueva]");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, FilesGenerationXLSComponent_ul_34_Template, 6, 3, "ul", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 21)(36, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilesGenerationXLSComponent_Template_button_click_41_listener() {
        return ctx.td_GenerarInformeXLSValidate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "br")(44, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "table", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](49, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, FilesGenerationXLSComponent_th_50_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, FilesGenerationXLSComponent_td_51_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](52, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, FilesGenerationXLSComponent_th_53_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, FilesGenerationXLSComponent_td_54_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](55, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, FilesGenerationXLSComponent_th_56_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, FilesGenerationXLSComponent_td_57_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](58, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, FilesGenerationXLSComponent_th_59_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, FilesGenerationXLSComponent_td_60_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](61, FilesGenerationXLSComponent_tr_61_Template, 1, 0, "tr", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, FilesGenerationXLSComponent_tr_62_Template, 1, 0, "tr", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "hr")(64, "mat-paginator", 35, 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "mat-tab", 37)(67, "div", 0)(68, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "[CONSULTA_2 (REACTIVE)]");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 2)(71, "div", 3)(72, "form", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function FilesGenerationXLSComponent_Template_form_ngSubmit_72_listener() {
        return ctx.rf_onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "div")(74, "label", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, " # de Registros : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "input", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div")(78, "label", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](79, " Fecha Inicial : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](80, "input", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div")(82, "label", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, " Fecha Final : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](84, "input", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](85, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 16)(87, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilesGenerationXLSComponent_Template_button_click_89_listener() {
        return ctx.rf_newSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "[Nueva]");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](92, FilesGenerationXLSComponent_ul_92_Template, 6, 3, "ul", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 21)(94, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](96, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](98, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilesGenerationXLSComponent_Template_button_click_99_listener() {
        return ctx.rf_GenerarInformeXLSValidate();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](101, "br")(102, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](105, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "table", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](107, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](108, FilesGenerationXLSComponent_th_108_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](109, FilesGenerationXLSComponent_td_109_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](110, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](111, FilesGenerationXLSComponent_th_111_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](112, FilesGenerationXLSComponent_td_112_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](113, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](114, FilesGenerationXLSComponent_th_114_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](115, FilesGenerationXLSComponent_td_115_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](116, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](117, FilesGenerationXLSComponent_th_117_Template, 2, 0, "th", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](118, FilesGenerationXLSComponent_td_118_Template, 2, 1, "td", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](119, FilesGenerationXLSComponent_tr_119_Template, 1, 0, "tr", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](120, FilesGenerationXLSComponent_tr_120_Template, 1, 0, "tr", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](121, "hr")(122, "mat-paginator", 49, 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "mat-tab", 51)(125, "div", 0)(126, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](127, "[CONSULTA_3 (ESTADISTICAS)]");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "div", 52, 53)(130, "canvas", 54, 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](133, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "div", 56)(135, "input", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FilesGenerationXLSComponent_Template_input_click_135_listener() {
        return ctx.GetPDF();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](136, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "a", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, "Volver al Men\u00FA");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.pageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.td_model.P_ROW_NUM);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.td_model.P_FECHA_INICIO);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.td_model.P_FECHA_FIN);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.td_buttonCaption != "[Buscar]");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.td_buttonCaption);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.td_valid_form() && ctx.td_formSubmit);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.td_textStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.td_buttonCaption_xls != "[Generar Excel]");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.td_buttonCaption_xls);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", ctx.td_ExcelDownloadLink, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.td_textStatus_xls);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.td_dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.rf_displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.rf_displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](32, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.rf_searchForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.rf_buttonCaption != "[Buscar]");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.rf_buttonCaption);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.rf_searchForm.invalid);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.rf_textStatus);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.rf_buttonCaption_xls != "[Generar Excel]");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.rf_buttonCaption_xls);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", ctx.rf_ExcelDownloadLink, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.rf_textStatus_xls);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.rf_dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.rf_displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.rf_displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](33, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.pieChartVar);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginator, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabGroup, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink],
  styles: [".mat-column-ID_LOG[_ngcontent-%COMP%] {\n    flex: none;\n    width: 100px;\n    padding: 1rem;\n  }\n\n.mat-column-DATE_TIME[_ngcontent-%COMP%] {\n  flex: none;\n  width: 100px;\n  padding: 1rem;\n}\n\n.mat-column-TEXT_1_WEB[_ngcontent-%COMP%] {\n  flex: none;\n  width: 100px;\n  padding: 1rem;\n}\n\n.mat-column-TEXT_2_WEB[_ngcontent-%COMP%] {\n  flex: none;\n  width: 100px;\n  padding: 1rem;\n}\n    \nform[_ngcontent-%COMP%] {\n  width: 40%;\n  margin: 0 auto;\n  background-color: cadetblue;\n  padding:1em;\n}\n\nlabel[_ngcontent-%COMP%], select[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\n  \n\n  display: inline-block;\n}\n\nlabel[_ngcontent-%COMP%] {\n  width: 30%;\n  \n\n  text-align: right;\n}\n\nlabel[_ngcontent-%COMP%] + input[_ngcontent-%COMP%] {\n  width: 30%;\n  \n\n\n  margin: 0 30% 0 4%;\n}\n\nlabel[_ngcontent-%COMP%] + select[_ngcontent-%COMP%] {\n  width: 32%;\n  \n\n\n  margin: 0 32% 0 4%;\n}\n\n\n\n\ninput[_ngcontent-%COMP%] + input[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.mdc-list-item__content[_ngcontent-%COMP%]\n{\n   color:bisque;   \n}\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX21vZHVsZXMvZmlsZXMtZ2VuZXJhdGlvbi9maWxlcy1nZW5lcmF0aW9uLXhscy9maWxlcy1nZW5lcmF0aW9uLXhscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0FBRUY7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixXQUFXO0FBQ2I7O0FBRUE7OztFQUdFLDhCQUE4QjtFQUM5QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsOENBQThDO0VBQzlDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVjsyRUFDeUU7RUFDekUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWOzJFQUN5RTtFQUN6RSxrQkFBa0I7QUFDcEI7O0FBRUE7b0VBQ29FO0FBQ3BFO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztHQUVHLFlBQVk7QUFDZiIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY29sdW1uLUlEX0xPRyB7XHJcbiAgICBmbGV4OiBub25lO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcblxyXG4ubWF0LWNvbHVtbi1EQVRFX1RJTUUge1xyXG4gIGZsZXg6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLVRFWFRfMV9XRUIge1xyXG4gIGZsZXg6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLVRFWFRfMl9XRUIge1xyXG4gIGZsZXg6IG5vbmU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuICAgIFxyXG5mb3JtIHtcclxuICB3aWR0aDogNDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxuICBwYWRkaW5nOjFlbTtcclxufVxyXG5cclxubGFiZWwsXHJcbnNlbGVjdCxcclxuaW5wdXQge1xyXG4gIC8qIEluIG9yZGVyIHRvIGRlZmluZSB3aWR0aHMgKi9cclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICB3aWR0aDogMzAlO1xyXG4gIC8qIFBvc2l0aW9ucyB0aGUgbGFiZWwgdGV4dCBiZXNpZGUgdGhlIGlucHV0ICovXHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbmxhYmVsK2lucHV0IHtcclxuICB3aWR0aDogMzAlO1xyXG4gIC8qIExhcmdlIG1hcmdpbi1yaWdodCB0byBmb3JjZSB0aGUgbmV4dCBlbGVtZW50IHRvIHRoZSBuZXctbGluZVxyXG4gICAgICAgICAgIGFuZCBtYXJnaW4tbGVmdCB0byBjcmVhdGUgYSBndXR0ZXIgYmV0d2VlbiB0aGUgbGFiZWwgYW5kIGlucHV0ICovXHJcbiAgbWFyZ2luOiAwIDMwJSAwIDQlO1xyXG59XHJcblxyXG5sYWJlbCtzZWxlY3Qge1xyXG4gIHdpZHRoOiAzMiU7XHJcbiAgLyogTGFyZ2UgbWFyZ2luLXJpZ2h0IHRvIGZvcmNlIHRoZSBuZXh0IGVsZW1lbnQgdG8gdGhlIG5ldy1saW5lXHJcbiAgICAgICAgICAgYW5kIG1hcmdpbi1sZWZ0IHRvIGNyZWF0ZSBhIGd1dHRlciBiZXR3ZWVuIHRoZSBsYWJlbCBhbmQgaW5wdXQgKi9cclxuICBtYXJnaW46IDAgMzIlIDAgNCU7XHJcbn1cclxuXHJcbi8qIE9ubHkgdGhlIHN1Ym1pdCBidXR0b24gaXMgbWF0Y2hlZCBieSB0aGlzIHNlbGVjdG9yLFxyXG4gICAgICAgYnV0IHRvIGJlIHN1cmUgeW91IGNvdWxkIHVzZSBhbiBpZCBvciBjbGFzcyBmb3IgdGhhdCBidXR0b24gKi9cclxuaW5wdXQraW5wdXQge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm1kYy1saXN0LWl0ZW1fX2NvbnRlbnRcclxue1xyXG4gICBjb2xvcjpiaXNxdWU7ICAgXHJcbn1cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3715:
/*!**************************************************************************************************!*\
  !*** ./src/app/_modules/files-generation/files-generation-zip/files-generation-zip.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilesGenerationZIPComponent: () => (/* binding */ FilesGenerationZIPComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_mcsd_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_services/mcsd.service */ 1274);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.module */ 8629);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);






const _c0 = function (a0) {
  return {
    width: a0
  };
};
function FilesGenerationZIPComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx_r0.progress + "%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-valuenow", ctx_r0.progress);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.progress, "% ");
  }
}
function FilesGenerationZIPComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.message);
  }
}
//
//
class FilesGenerationZIPComponent {
  //--------------------------------------------------------------------------
  // PROPIEDADES COMUNES
  //--------------------------------------------------------------------------
  //
  static get PageTitle() {
    return '[GENERAR ARCHIVOS ZIP]';
  }
  //--------------------------------------------------------------------------
  // EVENT HANDLERS / CONSTRUCTORS  
  //--------------------------------------------------------------------------
  constructor(mcsdService, customErrorHandler) {
    this.mcsdService = mcsdService;
    //
    this.pageTitle = FilesGenerationZIPComponent.PageTitle;
    this.progress = 0;
    this.message = '';
    this.downloadLink = '';
    //
    console.log(this.pageTitle + " - [INGRESO]");
    //
    mcsdService.SetLog(this.pageTitle, "PAGE_ZIP_DEMO");
  }
  //--------------------------------------------------------------------------
  // METODOS COMUNES
  //--------------------------------------------------------------------------
  //
  //--------------------------------------------------------------------------
  // METODOS - FILE UPLOAD COMPONENT
  //--------------------------------------------------------------------------
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  //
  upload() {
    //  
    this.progress = 0;
    //
    this.message = "...cargando...";
    //
    if (this.selectedFiles) {
      const file = this.selectedFiles.item(0);
      //
      if (file) {
        //
        this.currentFile = file;
        //
        this.mcsdService.upload(this.currentFile).subscribe({
          next: event => {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpEventType.UploadProgress) {
              //
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpResponse) {
              //
              console.log("RESPONSE : " + event.body);
              //
              this.message = "[SE CARGO CORRECTAMENTE EL ARCHIVO]";
            }
          },
          error: err => {
            //
            console.log(err);
            //
            this.progress = 0;
            //  
            if (err.error && err.error.message) {
              //
              this.message = err.error.message;
            } else {
              //
              this.message = 'Could not upload the file!';
            }
            //
            this.currentFile = undefined;
          }
        });
      }
      //
      this.selectedFiles = undefined;
    }
  }
  //--------------------------------------------------------------------------
  // METODOS - FILE UPLOAD COMPONENT
  //--------------------------------------------------------------------------
  SetZip() {
    //
    let uploadedFileName = this.currentFile?.name;
    //
    let fileName;
    //
    fileName = this.mcsdService.SetZip(uploadedFileName);
    //
    const setZipObserver = {
      //
      next: p_zipFile => {
        //
        let downloadLink_1 = this.mcsdService._prefix + p_zipFile;
        //
        while (downloadLink_1.indexOf("\"") > -1) downloadLink_1 = downloadLink_1.replace("\"", "");
        //
        this.downloadLink = this.mcsdService.DebugHostingContent(downloadLink_1);
        //
        console.log('[Download link] : ' + this.downloadLink);
        //
        this.message = "[SE GENERO CORRECTAMENTE ARCHIVO ZIP]";
      },
      error: err => {
        //
        console.error('Observer got an error: ' + err);
        //
        this.downloadLink = "";
        //
      },

      complete: () => {
        //
        console.log('Observer got a complete notification');
        //
      }
    };
    //
    fileName.subscribe(setZipObserver);
  }
  //--------------------------------------------------------------------------
  NewZip() {
    //
    console.log(this.pageTitle + ' - [NEW PDF] ');
    //
    this.selectedFiles = undefined;
    //
    this.currentFile = undefined;
    //
    this.progress = 0;
    //
    this.message = "";
    //
    this.downloadLink = "";
  }
}
FilesGenerationZIPComponent.ɵfac = function FilesGenerationZIPComponent_Factory(t) {
  return new (t || FilesGenerationZIPComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_mcsd_service__WEBPACK_IMPORTED_MODULE_0__.MCSDService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_module__WEBPACK_IMPORTED_MODULE_1__.CustomErrorHandler));
};
FilesGenerationZIPComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FilesGenerationZIPComponent,
  selectors: [["app-files-generation-zip"]],
  decls: 30,
  vars: 9,
  consts: [["align", "center", 2, "padding-top", "10px"], ["id", "content-body"], ["align", "left", 1, "row"], [1, "col-12"], [1, "btn", "btn-default", "p-0"], ["type", "file", 3, "change"], [1, "btn", "btn-success", "btn-sm", 3, "disabled", "click"], ["class", "progress my-3", 4, "ngIf"], ["align", "left", 1, "row", 3, "hidden"], ["id", "GetZIP", "type", "button", "title", "[GENERAR ZIP]", "value", "[GENERAR ZIP]", 1, "btn", "btn-success", "btn-sm", 3, "hidden", "click"], ["id", "DownloadFile", 1, "btn", "btn-success", "btn-sm", 3, "href", "hidden"], ["id", "NewZIP", "type", "button", "title", "[NUEVO ZIP]", "value", "[NUEVO ZIP]", 1, "btn", "btn-success", "btn-sm", 3, "hidden", "click"], ["class", "alert alert-secondary", "role", "alert", 4, "ngIf"], ["routerLink", "/FilesGenerationWeb"], [1, "progress", "my-3"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-info", "progress-bar-striped", 3, "ngStyle"], ["role", "alert", 1, "alert", "alert-secondary"]],
  template: function FilesGenerationZIPComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2)(6, "div", 3)(7, "label", 4)(8, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function FilesGenerationZIPComponent_Template_input_change_8_listener($event) {
        return ctx.selectFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2)(11, "div", 3)(12, "button", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilesGenerationZIPComponent_Template_button_click_12_listener() {
        return ctx.upload();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " [Cargar Archivo] ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, FilesGenerationZIPComponent_div_15_Template, 3, 5, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 8)(17, "div", 3)(18, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilesGenerationZIPComponent_Template_button_click_18_listener() {
        return ctx.SetZip();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " [GENERAR ZIP] ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " [DESCARGAR ZIP] ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " \u00A0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilesGenerationZIPComponent_Template_button_click_24_listener() {
        return ctx.NewZip();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " [NUEVO ZIP] ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, FilesGenerationZIPComponent_div_27_Template, 2, 1, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Volver al Men\u00FA");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.selectedFiles);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.currentFile);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !(ctx.progress == 100));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.downloadLink != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", ctx.downloadLink, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("hidden", ctx.downloadLink == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.downloadLink == "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.message);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9502:
/*!**************************************************************!*\
  !*** ./src/app/_modules/home/home-web/home-web.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeWebComponent: () => (/* binding */ HomeWebComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_mcsd_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_services/mcsd.service */ 1274);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.module */ 8629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




//
class HomeWebComponent {
  //
  static get PageTitle() {
    return '[INDICE]';
  }
  //
  constructor(mcsdService, customErrorHandler) {
    //
    this.pageTitle = HomeWebComponent.PageTitle;
    //
    console.log(HomeWebComponent.PageTitle + " - [INGRESO]");
    //
    if (mcsdService._prefix != "") {
      //
      mcsdService.SetLog(this.pageTitle, "PAGE_ANGULAR_DEMO_INDEX");
    }
  }
}
HomeWebComponent.ɵfac = function HomeWebComponent_Factory(t) {
  return new (t || HomeWebComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_mcsd_service__WEBPACK_IMPORTED_MODULE_0__.MCSDService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_module__WEBPACK_IMPORTED_MODULE_1__.CustomErrorHandler));
};
HomeWebComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HomeWebComponent,
  selectors: [["app-home-web"]],
  decls: 83,
  vars: 0,
  consts: [["routerLink", "/FilesGenerationWeb"], ["routerLink", "/FilesGenerationCSV"], ["routerLink", "/FilesGenerationXLS"], ["routerLink", "/FilesGenerationPDF"], ["routerLink", "/FilesGenerationZIP"], ["routerLink", "/AlgorithmWeb"], ["routerLink", "/AlgorithmRegEx"], ["routerLink", "/AlgorithmSort"], ["routerLink", "/AlgorithmDijkstra"], ["routerLink", "/AngularTutorialsnWeb"], ["href", "https://angular.io/", "target", "_blank"], ["href", "https://getbootstrap.com/", "target", "_blank"], ["href", "https://material.angular.io/", "target", "_blank"], ["href", "https://www.typescriptlang.org/", "target", "_blank"], ["routerLink", "/AAboutWeb"], ["routerLink", "/Contact"], ["routerLink", "/TechnicalSpecs"], ["href", "", "target", "_blank"]],
  template: function HomeWebComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "H4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "[INDICE]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "H5")(3, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "[GENERAR ARCHIVOS]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ul")(6, "li")(7, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "[GENERAR ARCHIVO CSV]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li")(10, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "[GENERAR ARCHIVO XLS]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li")(13, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "[GENERAR ARCHIVO PDF]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "li")(16, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "[GENERAR ARCHIVO ZIP]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "H5")(19, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "[ALGORITMOS]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ul")(22, "li")(23, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "[ALGORITMOS - EXPRESIONES REGULARES]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li")(26, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "[ALGORITMOS - ORDENAMIENTO]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "li")(29, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "[ALGORITMOS - DISTANCIA MAS CORTA]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "H5")(32, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "[TEMAS]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "Ul")(35, "li")(36, "H5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "[ANGULAR]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ul")(39, "li")(40, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "[REFERENCIA]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li")(43, "H5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "[BOOTSTRAP]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "ul")(46, "li")(47, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "[REFERENCIA]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "li")(50, "H5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "[MATERIAL]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "ul")(53, "li")(54, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "[REFERENCIA]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "li")(57, "H5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "[TYPESCRIPT]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "ul")(60, "li")(61, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "[REFERENCIA]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "H5")(64, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "[ACERCA DE]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "Ul")(67, "li")(68, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "[CONTACTO]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "li")(71, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, "[ESPECIFICACIONES TECNICAS]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "li")(74, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "[COMENTARIOS] (LOGIN REQUIRED)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "li")(77, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "[JOB SEARCH] (LOGIN REQUIRED)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "li")(80, "a", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "[LOGIN]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "hr");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3855:
/*!********************************************************************************************!*\
  !*** ./src/app/_modules/topics/angular-tutorialsn-web/angular-tutorialsn-web.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AngularTutorialsnWebComponent: () => (/* binding */ AngularTutorialsnWebComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_mcsd_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_services/mcsd.service */ 1274);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.module */ 8629);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




//
//
class AngularTutorialsnWebComponent {
  //
  static get PageTitle() {
    //
    return '[TEMAS]';
  }
  //
  constructor(mcsdService, customErrorHandler) {
    this.mcsdService = mcsdService;
    this.customErrorHandler = customErrorHandler;
    //
    this.pageTitle = AngularTutorialsnWebComponent.PageTitle;
    //
    console.log(AngularTutorialsnWebComponent.PageTitle + " - [INGRESO]");
    //
    mcsdService.SetLog(this.pageTitle, "PAGE_TOPIC_INDEX");
  }
}
AngularTutorialsnWebComponent.ɵfac = function AngularTutorialsnWebComponent_Factory(t) {
  return new (t || AngularTutorialsnWebComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_mcsd_service__WEBPACK_IMPORTED_MODULE_0__.MCSDService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_app_module__WEBPACK_IMPORTED_MODULE_1__.CustomErrorHandler));
};
AngularTutorialsnWebComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AngularTutorialsnWebComponent,
  selectors: [["app-angular-tutorialsn-web"]],
  decls: 34,
  vars: 1,
  consts: [["href", "https://angular.io/", "target", "_blank"], ["href", "https://getbootstrap.com/", "target", "_blank"], ["href", "https://material.angular.io/", "target", "_blank"], ["href", "https://www.typescriptlang.org/", "target", "_blank"], ["routerLink", "/Home"]],
  template: function AngularTutorialsnWebComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "H4");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "Ul")(3, "li")(4, "H5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "[ANGULAR]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul")(7, "li")(8, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "[REFERENCIA]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li")(11, "H5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "[BOOTSTRAP]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ul")(14, "li")(15, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "[REFERENCIA]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "li")(18, "H5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "[MATERIAL]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ul")(21, "li")(22, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "[REFERENCIA]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li")(25, "H5");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "[TYPESCRIPT]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "ul")(28, "li")(29, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "[REFERENCIA]");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Volver al Men\u00FA");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.pageTitle);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  styles: ["\n\n\n\n\n\n    .modalStatus[_ngcontent-%COMP%] {\n        display: none; \n\n        position: fixed; \n\n        z-index: 99; \n\n        left: 0;\n        top: 0;\n        width: 100%; \n\n        height: 100%; \n\n        overflow: auto; \n\n        background-color: rgb(0,0,0); \n\n        background-color: rgba(0,0,0,0.4); \n\n    }\n\n    .modalStatus-content[_ngcontent-%COMP%] {\n        text-align: center;\n        background-color: #fefefe;\n        margin: 15% auto; \n\n        padding: 1em;\n        border: 1px solid #888;\n        width: 100%; \n\n        color: black;\n    }\n\n    table[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n        border: 1px solid black;\n        border-collapse: collapse;\n    }\n\n    a[_ngcontent-%COMP%]:link, a[_ngcontent-%COMP%]:active {\n        color: #000;      \n    }\n\n    a[_ngcontent-%COMP%]:visited {\n        color: #888;        \n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvX21vZHVsZXMvdG9waWNzL2FuZ3VsYXItdHV0b3JpYWxzbi13ZWIvYW5ndWxhci10dXRvcmlhbHNuLXdlYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1EQUFtRDtBQUNuRCxtREFBbUQ7QUFDbkQsbURBQW1EO0lBQy9DO1FBQ0ksYUFBYSxFQUFFLHNCQUFzQjtRQUNyQyxlQUFlLEVBQUUsa0JBQWtCO1FBQ25DLFdBQVcsRUFBRSxlQUFlO1FBQzVCLE9BQU87UUFDUCxNQUFNO1FBQ04sV0FBVyxFQUFFLGVBQWU7UUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtRQUM5QixjQUFjLEVBQUUsNEJBQTRCO1FBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtRQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7SUFDNUQ7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLGdCQUFnQixFQUFFLGtDQUFrQztRQUNwRCxZQUFZO1FBQ1osc0JBQXNCO1FBQ3RCLFdBQVcsRUFBRSxvREFBb0Q7UUFDakUsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLHVCQUF1QjtRQUN2Qix5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxXQUFXO0lBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qIEVTVElMT1MgU1RBVFVTIERFIE9QRVJBQ0lPTiAgICAgICAgICAgICAgICAgICAgKi9cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gICAgLm1vZGFsU3RhdHVzIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gICAgICAgIHotaW5kZXg6IDk5OyAvKiBTaXQgb24gdG9wICovXHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICAgICAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87IC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxuICAgIH1cclxuXHJcbiAgICAubW9kYWxTdGF0dXMtY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XHJcbiAgICAgICAgbWFyZ2luOiAxNSUgYXV0bzsgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgICAgICB3aWR0aDogMTAwJTsgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgdGFibGUsIHRoLCB0ZCB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIH1cclxuXHJcbiAgICBhOmxpbmssIGE6YWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogIzAwMDsgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBhOnZpc2l0ZWQge1xyXG4gICAgICAgIGNvbG9yOiAjODg4OyAgICAgICAgXHJcbiAgICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1986:
/*!*********************************************!*\
  !*** ./src/app/_services/config.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigService: () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

//
// estructura archivo "./assets/config.json"
class ConfigService {
  //
  constructor() {
    //
    this.baseUrl = '';
    this.appName = '';
    this.appVersion = '';
  }
}
ConfigService.ɵfac = function ConfigService_Factory(t) {
  return new (t || ConfigService)();
};
ConfigService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ConfigService,
  factory: ConfigService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 1274:
/*!*******************************************!*\
  !*** ./src/app/_services/mcsd.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MCSDService: () => (/* binding */ MCSDService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _models_log_info_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_models/log-info.model */ 4590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.service */ 1986);






//
//
class MCSDService {
  //
  get _prefix() {
    //
    console.warn("[CONFIG_SERVICE] : BaseUrl : " + this.configService.baseUrl);
    //            
    return this.configService.baseUrl;
  }
  //
  ////////////////////////////////////////////////////////////////  
  // METODOS - [EVENT HANDLERS]
  ////////////////////////////////////////////////////////////////  
  //
  ngOnInit() {
    //
  }
  //
  constructor(http, configService) {
    this.http = http;
    this.configService = configService;
    ////////////////////////////////////////////////////////////////  
    // CAMPOS
    ////////////////////////////////////////////////////////////////  
    this.HTTPOptions_Text = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'Accept': 'application/text'
      }),
      'responseType': 'text'
    };
    //    
    this.HTTPOptions_JSON = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'responseType': 'text'
    };
    //
  }
  ////////////////////////////////////////////////////////////////  
  // METODOS - [COMUNES]
  ////////////////////////////////////////////////////////////////  
  //
  DebugHostingContent(msg) {
    //
    //console.log("cadena a evaular : " + msg);
    //
    let regEx = /(.*)(<!--SCRIPT GENERATED BY SERVER! PLEASE REMOVE-->)(.*\w+.*)(<!--SCRIPT GENERATED BY SERVER! PLEASE REMOVE-->)(.*)/;
    //
    let strMsg = msg.replace(/(\r\n|\n|\r)/gm, "");
    //
    let matches = strMsg.match(regEx);
    //
    if (matches != null) {
      //
      for (var index = 1; index < matches.length; index++) {
        //
        var matchValue = matches[index];
        //        
        // console.log("coincidencia : " + matchValue);
        //
        if (matchValue.indexOf("<!--SCRIPT GENERATED BY SERVER! PLEASE REMOVE-->") != -1 && matchValue.trim() != "") {
          //
          strMsg = strMsg.replace(matchValue, "");
          //
          //console.log("REEMPLAZANDO. NUEVA CADENA : " + strMsg);
        }
        //
        if (matchValue.indexOf("<center>") != -1 && matchValue.trim() != "") {
          //
          strMsg = strMsg.replace(matchValue, "");
          //
          //console.log("REEMPLAZANDO. NUEVA CADENA : " + strMsg);
        }
      }
    } else {
      //
      console.log("NO_HAY_COINCIDENCIAS");
    }
    //
    // console.log("CADENA DEPURADA : " + strMsg);
    //
    // strMsg = strMsg.replace("unsafe:", "");
    //
    return strMsg;
  }
  //
  _GetWebApiAppVersion() {
    //
    let p_url = `${this._prefix}demos/_GetAppVersion`;
    //
    let appVersion = this.http.get(p_url, this.HTTPOptions_Text);
    //
    return appVersion;
  }
  ////////////////////////////////////////////////////////////////  
  // METODOS - [GENERAR ARCHIVO CSV]
  ////////////////////////////////////////////////////////////////  
  getCSVLinkGET() {
    //
    let p_url = this._prefix + 'demos/_GetCSVLinkJsonGET';
    //
    let csvLink = this.http.get(p_url);
    //
    return csvLink;
  }
  //
  getCSVLink() {
    //
    let p_url = this._prefix + 'demos/_GetCSVLinkJson';
    //
    let csvLink = this.http.post(p_url, this.HTTPOptions_Text);
    //
    return csvLink;
  }
  //    
  getInformeRemotoCSV() {
    //
    let p_url = this._prefix + 'demos/GenerarInformeCSVJson';
    //
    let jsonCSVData = this.http.get(p_url, this.HTTPOptions_Text);
    //
    return jsonCSVData;
  }
  //
  getInformeRemotoCSV_STAT() {
    //
    let p_url = this._prefix + 'demos/GenerarInformeCSVJsonSTAT';
    //
    let jsonCSVData = this.http.get(p_url, this.HTTPOptions_Text);
    //
    return jsonCSVData;
  }
  //
  _SetSTATPieCache(_prefix) {
    //
    let p_url = `${_prefix}demos/_SetSTATPieCache`;
    //
    let jsonCSVData = this.http.get(p_url, this.HTTPOptions_Text);
    //
    const jsonCSVDataObserver = {
      next: jsondata => {
        //
        console.log('_SetSTATPieCache - (return): ' + jsondata);
      },
      error: err => {
        //
        console.error('_SetSTATPieCache- (ERROR) : ' + JSON.stringify(err.message));
      },
      complete: () => {
        //
        console.log('_SetSTATPieCache -  (COMPLETE)');
      }
    };
    //
    jsonCSVData.subscribe(jsonCSVDataObserver);
  }
  ////////////////////////////////////////////////////////////////  
  // METODOS - [GENERAR ARCHIVO XLS]
  ////////////////////////////////////////////////////////////////  
  //
  getLogRemoto(_searchCriteria) {
    //
    let url = this._prefix + 'demos/generarinformejson';
    //    
    return this.http.get(url);
  }
  //
  getInformeExcel(_searchCriteria) {
    //
    let p_url = this._prefix + 'demos/generarinformexls';
    //
    let excelFileName = this.http.get(p_url, this.HTTPOptions_Text);
    //
    return excelFileName;
  }
  //
  getLogStatPOST() {
    //
    let url = `${this._prefix}demos/GetConsultaLogStatPost`;
    //
    return this.http.post(url, this.HTTPOptions_JSON);
  }
  //
  getLogStatGET() {
    //
    let url = `${this._prefix}demos/GetConsultaLogStatGet`;
    //
    return this.http.get(url);
  }
  //
  _SetSTATBarCache(_prefix) {
    //
    let url = `${_prefix}demos/_SetSTATBarCache`;
    //
    let jsonDataObservable = this.http.get(url, this.HTTPOptions_Text);
    //
    const jsonDataOberver = {
      next: jsondata => {
        //
        console.log('_SetSTATBarCache - (return): ' + jsondata);
      },
      error: err => {
        //
        console.error('_SetSTATBarCache- (ERROR) : ' + JSON.stringify(err.message));
        //
      },

      complete: () => {
        //
        console.log('_SetSTATBarCache -  (COMPLETE)');
      }
    };
    //
    jsonDataObservable.subscribe(jsonDataOberver);
  }
  //////////////////////////////////////////////////////////////
  // GET ZIP / FILE UPLODAD METHODS
  //////////////////////////////////////////////////////////////
  upload(file) {
    //
    const formData = new FormData();
    //
    formData.append('file', file);
    //
    let url = `${this._prefix}demos/_ZipDemoGetFileName`;
    //
    console.log("[GENERATE ZIP FILE] - (UPLOADING FILE) url: " + url);
    // USAR REQUEST PARA OBTENER PORCENTAJE DE STATUS
    const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('POST', url, formData, {
      reportProgress: true,
      responseType: 'text'
    });
    //
    return this.http.request(req);
  }
  //
  SetZip(p_fileName) {
    //
    let p_url = `${this._prefix}demos/_SetZip?p_fileName=${p_fileName}`;
    //
    console.log("[GENERATE ZIP FILE] - [GETTING ZIP] - fileName: " + p_fileName);
    //
    console.log("[GENERATE ZIP FILE] - [GETTING ZIP] - url     : " + p_url);
    //
    let returnUrl = this.http.get(p_url, this.HTTPOptions_JSON);
    //
    return returnUrl;
  }
  ////////////////////////////////////////////////////////////////  
  // METODOS - [GENERAR ARCHIVOS  - PDF]
  ////////////////////////////////////////////////////////////////
  GetPDF(subjectName) {
    //
    let p_url = `${this._prefix}demos/_GetPdf?subjectName=${subjectName}`;
    //
    console.log("[GENERATE PDF FILE] - [GETTING ZIP] - subjectName  : " + subjectName);
    //
    console.log("[GENERATE PDF FILE] - [GETTING ZIP] - url          : " + p_url);
    // USAR REQUEST PARA OBTENER PORCENTAJE DE STATUS
    const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpRequest('GET', p_url, {
      reportProgress: true,
      responseType: 'text'
    });
    //
    return this.http.request(req);
  }
  ////////////////////////////////////////////////////////////////  
  // METODOS - [ALGORITMOS - DISTANCIA MAS CORTA]
  ////////////////////////////////////////////////////////////////  
  //    
  getRandomVertex(vertexSize, sourcePoint) {
    //
    let p_url = `${this._prefix}demos/GenerateRandomVertex?p_vertexSize=${vertexSize}&p_sourcePoint=${sourcePoint}`;
    //
    let dijkstraData = this.http.get(p_url, this.HTTPOptions_Text);
    //
    return dijkstraData;
  }
  //
  getRandomVertexCpp(vertexSize, sourcePoint) {
    //
    let p_url = `${this._prefix}demos/GenerateRandomVertex_CPP?p_vertexSize=${vertexSize}&p_sourcePoint=${sourcePoint}`;
    //
    let dijkstraData = this.http.get(p_url, this.HTTPOptions_Text);
    //
    return dijkstraData;
  }
  ////////////////////////////////////////////////////////////////  
  // METODOS - [ALGORITMOS - ORDENAMIENTO]
  ////////////////////////////////////////////////////////////////     
  getNewSort() {
    //
    let p_url = `${this._prefix}demos/_NewSort`;
    //
    let newSortData = this.http.get(p_url, this.HTTPOptions_Text);
    //
    return newSortData;
  }
  //    
  getSort(p_sortAlgoritm, p_unsortedList) {
    //
    let p_url = `${this._prefix}demos/_GetSort?p_sortAlgoritm=${p_sortAlgoritm}&p_unsortedList=${p_unsortedList}`;
    //
    let newSortData = this.http.get(p_url, this.HTTPOptions_Text);
    //
    return newSortData;
  }
  //    
  getSort_CPP(p_sortAlgoritm, p_unsortedList) {
    //
    let p_url = `${this._prefix}demos/_GetSort_CPP?p_sortAlgoritm=${p_sortAlgoritm}&p_unsortedList=${p_unsortedList}`;
    //
    let newSortData = this.http.get(p_url, this.HTTPOptions_Text);
    //
    return newSortData;
  }
  ////////////////////////////////////////////////////////////////  
  // METODOS - [ALGORITMOS - EXPRESIONES REGULARES]
  ////////////////////////////////////////////////////////////////  
  //    
  _GetXmlData() {
    //
    let p_url = `${this._prefix}demos/_GetXmlData`;
    //
    let xmlData = this.http.get(p_url, this.HTTPOptions_Text);
    //
    return xmlData;
  }
  //
  _SetXmlDataToCache(_prefix) {
    //
    let p_url = `${_prefix}demos/_SetXmlDataToCache`;
    //
    let xmlData = this.http.get(p_url, this.HTTPOptions_Text);
    //
    const td_observer = {
      next: jsondata => {
        //
        console.log('_SetXmlDataToCache - (return): ' + jsondata);
      },
      error: err => {
        //
        console.error('_SetXmlDataToCache- (ERROR) : ' + JSON.stringify(err.message));
        //
      },

      complete: () => {
        //
        console.log('_SetXmlDataToCache -  (COMPLETE)');
      }
    };
    //
    xmlData.subscribe(td_observer);
  }
  //
  _RegExEval(tagSearchIndex, textSearchValue) {
    //
    let p_url = `${this._prefix}demos/_RegExEval?p_tagSearch=${tagSearchIndex}&p_textSearch=${textSearchValue}`;
    //
    let regExData = this.http.get(p_url, this.HTTPOptions_Text);
    //
    return regExData;
  }
  //
  _RegExEval_CPP(tagSearchIndex, textSearchValue) {
    //
    let p_url = `${this._prefix}demos/_RegExEval_CPP?p_tagSearch=${tagSearchIndex}&p_textSearch=${textSearchValue}`;
    //
    let regExData = this.http.get(p_url, this.HTTPOptions_Text);
    //
    return regExData;
  }
  ////////////////////////////////////////////////////////////////  
  // METODOS - [LOG]
  ////////////////////////////////////////////////////////////////  
  //
  SetLog(p_PageTitle, p_logMsg, logType = _models_log_info_model__WEBPACK_IMPORTED_MODULE_0__.LogType.Info) {
    //
    let logInfo;
    //
    let p_url = `${this._prefix}demos/_SetLog?p_logMsg=${p_logMsg}&logType=${logType.toString()}`;
    //
    logInfo = this.http.get(p_url, this.HTTPOptions_Text);
    //
    const logInfoObserver = {
      //
      next: logResult => {
        //
        console.warn(p_PageTitle + ' - [LOG] - [RESULT] : ' + logResult);
      },
      error: err => {
        //
        console.error(p_PageTitle + ' - [LOG] - [ERROR]  : ' + err);
      },
      complete: () => {
        //
        console.info(p_PageTitle + ' - [LOG] - [COMPLETE]');
      }
    };
    //
    logInfo.subscribe(logInfoObserver);
  }
}
MCSDService.ɵfac = function MCSDService_Factory(t) {
  return new (t || MCSDService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService));
};
MCSDService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: MCSDService,
  factory: MCSDService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _modules_home_home_web_home_web_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_modules/home/home-web/home-web.component */ 9502);
/* harmony import */ var _modules_algorithm_algorithm_web_algorithm_web_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_modules/algorithm/algorithm-web/algorithm-web.component */ 5876);
/* harmony import */ var _modules_topics_angular_tutorialsn_web_angular_tutorialsn_web_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_modules/topics/angular-tutorialsn-web/angular-tutorialsn-web.component */ 3855);
/* harmony import */ var _modules_files_generation_files_generation_web_files_generation_web_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_modules/files-generation/files-generation-web/files-generation-web.component */ 1997);
/* harmony import */ var _modules_about_a_about_web_a_about_web_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_modules/about/a-about-web/a-about-web.component */ 9048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.module */ 8629);
/* harmony import */ var _services_mcsd_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_services/mcsd.service */ 1274);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_services/config.service */ 1986);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);












//
//
class AppComponent {
  //
  get NavbarCollapsed() {
    //
    return this.navbarCollapsed;
  }
  //
  set NavbarCollapsed(p_navbarCollapsed) {
    //
    this.navbarCollapsed = p_navbarCollapsed;
  }
  //-----------------------------------------------------------------------------------------------------
  constructor(router, _customErrorHandler, mcsdService, configService) {
    this.router = router;
    this._customErrorHandler = _customErrorHandler;
    // propiedades publicas
    this._title = AppComponent.title;
    this._appName = AppComponent.appName;
    this._appVersion = AppComponent.appVersion;
    this.HomeWebComponent_pageTitle = _modules_home_home_web_home_web_component__WEBPACK_IMPORTED_MODULE_1__.HomeWebComponent.PageTitle;
    this.AlgorithmWebComponent_pageTitle = _modules_algorithm_algorithm_web_algorithm_web_component__WEBPACK_IMPORTED_MODULE_2__.AlgorithmWebComponent.PageTitle;
    this.FilesGenerationWebComponent_pageTitle = _modules_files_generation_files_generation_web_files_generation_web_component__WEBPACK_IMPORTED_MODULE_4__.FilesGenerationWebComponent.PageTitle;
    this.AngularTutorialsnWebComponent_pageTitle = _modules_topics_angular_tutorialsn_web_angular_tutorialsn_web_component__WEBPACK_IMPORTED_MODULE_3__.AngularTutorialsnWebComponent.PageTitle;
    this.AAboutWebComponent_pageTitle = _modules_about_a_about_web_a_about_web_component__WEBPACK_IMPORTED_MODULE_5__.AAboutWebComponent.PageTitle;
    //
    this.navbarCollapsed = true;
    //
    console.log("[AppComponent] - [appName]  : " + AppComponent.appName);
    //
    console.log('[AppComponent] - [title] : ' + AppComponent.title);
    //
    console.log('[AppComponent] - ' + AppComponent.title + " - [INGRESO]");
    //
    console.log('[AppComponent] - ' + AppComponent.title + " - [ENV_NAME] : " + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.serviceName);
    //
    router.navigateByUrl("/Home");
    //-----------------------------------------------------------------------------------------------------
  }
}
// miembros
AppComponent.title = "[WEB API DEMO]";
// propiedades internas
AppComponent.appName = "[WEB API DEMO]";
AppComponent.appVersion = "[1.0.1.2]";
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_app_module__WEBPACK_IMPORTED_MODULE_6__.CustomErrorHandler), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_mcsd_service__WEBPACK_IMPORTED_MODULE_7__.MCSDService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_8__.ConfigService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 41,
  vars: 9,
  consts: [[1, "subtitle"], [1, "navigation", "subtitle"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "subtitle"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarItems", "aria-controls", "navbarItems", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarItems", 1, "collapse", "navbar-collapse", "subtitle", 3, "ngbCollapse"], ["navbarItems", ""], [1, "navbar-nav"], [1, "nav-item", "active"], ["routerLink", "/Home", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["routerLink", "/FilesGenerationWeb", 1, "nav-link"], ["routerLink", "/AlgorithmWeb", 1, "nav-link"], ["routerLink", "/AngularTutorialsnWeb", 1, "nav-link"], ["routerLink", "/AAboutWeb", 1, "nav-link"], [1, "footer"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "header", 0)(1, "div", 1)(2, "nav", 2)(3, "a", 3)(4, "div", 0)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() {
        return ctx.NavbarCollapsed = !ctx.NavbarCollapsed;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "span", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 6, 7)(11, "ul", 8)(12, "li", 9)(13, "a", 10)(14, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "li", 12)(17, "a", 13)(18, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "li", 12)(21, "a", 14)(22, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "li", 12)(25, "a", 15)(26, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "li", 12)(29, "a", 16)(30, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](32, "hr")(33, "router-outlet")(34, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 17)(36, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](40, "hr");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx._title);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngbCollapse", ctx.NavbarCollapsed);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.HomeWebComponent_pageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.FilesGenerationWebComponent_pageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.AlgorithmWebComponent_pageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.AngularTutorialsnWebComponent_pageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx.AAboutWebComponent_pageTitle);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Aplication Name : ", ctx._appName, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Aplication Version : ", ctx._appVersion, "");
    }
  },
  dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbCollapse, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   CustomErrorHandler: () => (/* binding */ CustomErrorHandler),
/* harmony export */   LoggingInterceptor: () => (/* binding */ LoggingInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ 3228);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/table */ 6798);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ 9687);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tabs */ 989);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 6101);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _modules_home_home_web_home_web_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_modules/home/home-web/home-web.component */ 9502);
/* harmony import */ var _modules_about_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_modules/about/contact/contact.component */ 8355);
/* harmony import */ var _modules_about_a_about_web_a_about_web_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_modules/about/a-about-web/a-about-web.component */ 9048);
/* harmony import */ var _modules_about_technicalspecs_technical_specs_technical_specs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_modules/about/technicalspecs/technical-specs/technical-specs.component */ 3541);
/* harmony import */ var _modules_topics_angular_tutorialsn_web_angular_tutorialsn_web_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_modules/topics/angular-tutorialsn-web/angular-tutorialsn-web.component */ 3855);
/* harmony import */ var _modules_files_generation_files_generation_web_files_generation_web_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_modules/files-generation/files-generation-web/files-generation-web.component */ 1997);
/* harmony import */ var _modules_files_generation_files_generation_xls_files_generation_xls_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_modules/files-generation/files-generation-xls/files-generation-xls.component */ 2429);
/* harmony import */ var _modules_files_generation_files_generation_csv_files_generation_csv_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_modules/files-generation/files-generation-csv/files-generation-csv.component */ 5048);
/* harmony import */ var _modules_files_generation_files_generation_pdf_files_generation_pdf_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_modules/files-generation/files-generation-pdf/files-generation-pdf.component */ 8437);
/* harmony import */ var _modules_files_generation_files_generation_zip_files_generation_zip_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_modules/files-generation/files-generation-zip/files-generation-zip.component */ 3715);
/* harmony import */ var _modules_algorithm_algorithm_dijkstra_algorithm_dijkstra_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_modules/algorithm/algorithm-dijkstra/algorithm-dijkstra.component */ 1571);
/* harmony import */ var _modules_algorithm_algorithm_web_algorithm_web_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_modules/algorithm/algorithm-web/algorithm-web.component */ 5876);
/* harmony import */ var _modules_algorithm_algorithm_reg_ex_algorithm_reg_ex_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_modules/algorithm/algorithm-reg-ex/algorithm-reg-ex.component */ 2575);
/* harmony import */ var _modules_algorithm_algorithm_sort_algorithm_sort_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_modules/algorithm/algorithm-sort/algorithm-sort.component */ 3562);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services/config.service */ 1986);
/* harmony import */ var _services_mcsd_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_services/mcsd.service */ 1274);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 3738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 7474);
/* harmony import */ var _models_log_info_model__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_models/log-info.model */ 4590);






































//
const routes = [{
  path: 'Home',
  component: _modules_home_home_web_home_web_component__WEBPACK_IMPORTED_MODULE_1__.HomeWebComponent
}, {
  path: 'AAboutWeb',
  component: _modules_about_a_about_web_a_about_web_component__WEBPACK_IMPORTED_MODULE_3__.AAboutWebComponent
}, {
  path: 'Contact',
  component: _modules_about_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent
}, {
  path: 'TechnicalSpecs',
  component: _modules_about_technicalspecs_technical_specs_technical_specs_component__WEBPACK_IMPORTED_MODULE_4__.TechnicalSpecsComponent
}, {
  path: 'AngularTutorialsnWeb',
  component: _modules_topics_angular_tutorialsn_web_angular_tutorialsn_web_component__WEBPACK_IMPORTED_MODULE_5__.AngularTutorialsnWebComponent
}, {
  path: 'AlgorithmWeb',
  component: _modules_algorithm_algorithm_web_algorithm_web_component__WEBPACK_IMPORTED_MODULE_12__.AlgorithmWebComponent
}, {
  path: 'AlgorithmRegEx',
  component: _modules_algorithm_algorithm_reg_ex_algorithm_reg_ex_component__WEBPACK_IMPORTED_MODULE_13__.AlgorithmRegExComponent
}, {
  path: 'AlgorithmSort',
  component: _modules_algorithm_algorithm_sort_algorithm_sort_component__WEBPACK_IMPORTED_MODULE_14__.AlgorithmSortComponent
}, {
  path: 'AlgorithmDijkstra',
  component: _modules_algorithm_algorithm_dijkstra_algorithm_dijkstra_component__WEBPACK_IMPORTED_MODULE_11__.AlgorithmDijkstraComponent
}, {
  path: 'FilesGenerationWeb',
  component: _modules_files_generation_files_generation_web_files_generation_web_component__WEBPACK_IMPORTED_MODULE_6__.FilesGenerationWebComponent
}, {
  path: 'FilesGenerationXLS',
  component: _modules_files_generation_files_generation_xls_files_generation_xls_component__WEBPACK_IMPORTED_MODULE_7__.FilesGenerationXLSComponent
}, {
  path: 'FilesGenerationCSV',
  component: _modules_files_generation_files_generation_csv_files_generation_csv_component__WEBPACK_IMPORTED_MODULE_8__.FilesGenerationCSVComponent
}, {
  path: 'FilesGenerationPDF',
  component: _modules_files_generation_files_generation_pdf_files_generation_pdf_component__WEBPACK_IMPORTED_MODULE_9__.FilesGenerationPDFComponent
}, {
  path: 'FilesGenerationZIP',
  component: _modules_files_generation_files_generation_zip_files_generation_zip_component__WEBPACK_IMPORTED_MODULE_10__.FilesGenerationZIPComponent
}];
//
class LoggingInterceptor {
  constructor() {}
  intercept(req, next) {
    const started = Date.now();
    let ok;
    // extend server response observable with logging
    return next.handle(req).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.tap)({
      // Succeeds when there is a response; ignore other events
      next: event => ok = event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpResponse ? 'succeeded' : '',
      // Operation failed; error is an HttpErrorResponse
      error: error => ok = 'failed'
    }),
    // Log when response observable either completes or errors
    (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.finalize)(() => {
      const elapsed = Date.now() - started;
      const msg = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms.`;
      console.warn(' [REQUESTIN URL (INTERCEPT)] : ' + msg);
    }));
  }
}
//  
//
LoggingInterceptor.ɵfac = function LoggingInterceptor_Factory(t) {
  return new (t || LoggingInterceptor)();
};
LoggingInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjectable"]({
  token: LoggingInterceptor,
  factory: LoggingInterceptor.ɵfac,
  providedIn: 'root'
});
class CustomErrorHandler {
  //
  constructor(mcsdService) {
    this.mcsdService = mcsdService;
  }
  //
  handleError(_error) {
    // 
    console.warn("[CUSTOM ERROR HANDLING]:\n" + _error);
    //
    let logType = _models_log_info_model__WEBPACK_IMPORTED_MODULE_17__.LogType.Error;
    //
    this.mcsdService.SetLog("[CUSTOM ERROR HANDLING]", _error.message, logType);
  }
}
//
CustomErrorHandler.ɵfac = function CustomErrorHandler_Factory(t) {
  return new (t || CustomErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵinject"](_services_mcsd_service__WEBPACK_IMPORTED_MODULE_16__.MCSDService));
};
CustomErrorHandler.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjectable"]({
  token: CustomErrorHandler,
  factory: CustomErrorHandler.ɵfac,
  providedIn: 'root'
});
function ReadConfigFile(http, globalConfigService, mcsdService) {
  let configInfo;
  //
  let p_url = "./assets/config.json";
  //
  configInfo = http.get(p_url);
  //
  const configInfoObserver = {
    //
    next: localConfigService => {
      //
      console.warn('[AppModule] -  [CONFIG_SERVICE] - [RESULT] : ' + localConfigService);
      //
      globalConfigService.baseUrl = localConfigService.baseUrl;
      globalConfigService.appName = localConfigService.appName;
      globalConfigService.appVersion = localConfigService.appVersion;
      //
      console.warn('[AppModule] -  [CONFIG_SERVICE] - [RESULT] : ' + globalConfigService);
      //
      _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent.appName = globalConfigService.appName;
      _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent.appVersion = globalConfigService.appVersion;
      _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent.title = globalConfigService.appName;
      //////////////////////////////////////////////////////
      // CACHE PARA XML
      ///////////////////////////////////////////////////////
      mcsdService._SetXmlDataToCache(globalConfigService.baseUrl);
      ///////////////////////////////////////////////////////
      // CACHE PARA PIE CHART
      ///////////////////////////////////////////////////////
      mcsdService._SetSTATPieCache(globalConfigService.baseUrl);
      ///////////////////////////////////////////////////////
      // CACHE PARA BARCHART
      ///////////////////////////////////////////////////////
      mcsdService._SetSTATBarCache(globalConfigService.baseUrl);
    },
    error: err => {
      //
      console.error('[AppModule] - [CONFIG_SERVICE] - [ERROR]  : ' + err);
    },
    complete: () => {
      //
      console.info('[AppModule] -  [CONFIG INFO] - [COMPLETE]');
    }
  };
  //
  configInfo.subscribe(configInfoObserver);
}
//
function initialize(http, globalConfigService, mcsdService) {
  return () => {
    return new Promise(resolve => {
      ///////////////////////////////////////////////////////
      // LEER ARCHIVO CONFIG
      ///////////////////////////////////////////////////////
      ReadConfigFile(http, globalConfigService, mcsdService);
      //
      resolve(true);
    });
  };
}
//
//
class AppModule {
  //-----------------------------------------------------------------------------------------------------
  constructor(customErrorHandler, loggingInterceptor) {
    this.customErrorHandler = customErrorHandler;
    this.loggingInterceptor = loggingInterceptor;
    //
    console.log("[AppModule] - [appName]" + _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent.appName);
  }
}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵinject"](CustomErrorHandler), _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵinject"](LoggingInterceptor));
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HTTP_INTERCEPTORS,
    useClass: LoggingInterceptor,
    multi: true
  }, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_22__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_22__.HashLocationStrategy
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_21__.ErrorHandler,
    useClass: CustomErrorHandler
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_21__.APP_INITIALIZER,
    useFactory: initialize,
    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClient, _services_config_service__WEBPACK_IMPORTED_MODULE_15__.ConfigService, _services_mcsd_service__WEBPACK_IMPORTED_MODULE_16__.MCSDService],
    multi: true
  }],
  imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_27__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_30__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule.forRoot(routes, {
    useHash: true
  }), _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _modules_home_home_web_home_web_component__WEBPACK_IMPORTED_MODULE_1__.HomeWebComponent, _modules_about_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent, _modules_about_a_about_web_a_about_web_component__WEBPACK_IMPORTED_MODULE_3__.AAboutWebComponent, _modules_topics_angular_tutorialsn_web_angular_tutorialsn_web_component__WEBPACK_IMPORTED_MODULE_5__.AngularTutorialsnWebComponent, _modules_algorithm_algorithm_web_algorithm_web_component__WEBPACK_IMPORTED_MODULE_12__.AlgorithmWebComponent, _modules_algorithm_algorithm_reg_ex_algorithm_reg_ex_component__WEBPACK_IMPORTED_MODULE_13__.AlgorithmRegExComponent, _modules_algorithm_algorithm_sort_algorithm_sort_component__WEBPACK_IMPORTED_MODULE_14__.AlgorithmSortComponent, _modules_algorithm_algorithm_dijkstra_algorithm_dijkstra_component__WEBPACK_IMPORTED_MODULE_11__.AlgorithmDijkstraComponent, _modules_files_generation_files_generation_web_files_generation_web_component__WEBPACK_IMPORTED_MODULE_6__.FilesGenerationWebComponent, _modules_files_generation_files_generation_xls_files_generation_xls_component__WEBPACK_IMPORTED_MODULE_7__.FilesGenerationXLSComponent, _modules_files_generation_files_generation_csv_files_generation_csv_component__WEBPACK_IMPORTED_MODULE_8__.FilesGenerationCSVComponent, _modules_files_generation_files_generation_pdf_files_generation_pdf_component__WEBPACK_IMPORTED_MODULE_9__.FilesGenerationPDFComponent, _modules_files_generation_files_generation_zip_files_generation_zip_component__WEBPACK_IMPORTED_MODULE_10__.FilesGenerationZIPComponent, _modules_about_technicalspecs_technical_specs_technical_specs_component__WEBPACK_IMPORTED_MODULE_4__.TechnicalSpecsComponent],
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_25__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_26__.MatListModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_27__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginatorModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_30__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule]
  });
})();

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
class environment {}
environment.baseUrl = 'https://mcsd.somee.com/';
environment.serviceName = '[mcsd]';
;

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/// <reference types="@angular/localize" />


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4686), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map