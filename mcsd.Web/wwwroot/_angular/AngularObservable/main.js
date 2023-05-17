"use strict";
(self["webpackChunkAngularSpae"] = self["webpackChunkAngularSpae"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


//
//
class AppComponent {
  constructor() {
    this.title = '[ANGULAR ASYNC PROGRAMMING]';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 12,
  vars: 1,
  consts: [["id", "content"], ["routerLink", "/observable"], ["routerLink", "/asyncprog"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav")(4, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Observable");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " | ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "RxJS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr")(10, "router-outlet")(11, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _loginfoview_loginfoview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginfoview/loginfoview.component */ 7391);
/* harmony import */ var _lista_lista_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista/lista.component */ 6800);
/* harmony import */ var _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datatable/datatable.component */ 9645);
/* harmony import */ var _observable_observable_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./observable/observable.component */ 8224);
/* harmony import */ var _asyncprog_asyncprog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./asyncprog/asyncprog.component */ 5722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule.forRoot([{
    path: 'lista',
    component: _lista_lista_component__WEBPACK_IMPORTED_MODULE_2__.ListaComponent
  }, {
    path: 'datatable',
    component: _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_3__.DatatableComponent
  }, {
    path: 'dynamictable',
    component: _loginfoview_loginfoview_component__WEBPACK_IMPORTED_MODULE_1__.LogInfoViewComponent
  }, {
    path: 'observable',
    component: _observable_observable_component__WEBPACK_IMPORTED_MODULE_4__.ObservableComponent
  }, {
    path: 'asyncprog',
    component: _asyncprog_asyncprog_component__WEBPACK_IMPORTED_MODULE_5__.AsyncprogComponent
  }])]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _loginfoview_loginfoview_component__WEBPACK_IMPORTED_MODULE_1__.LogInfoViewComponent, _lista_lista_component__WEBPACK_IMPORTED_MODULE_2__.ListaComponent, _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_3__.DatatableComponent, _observable_observable_component__WEBPACK_IMPORTED_MODULE_4__.ObservableComponent, _asyncprog_asyncprog_component__WEBPACK_IMPORTED_MODULE_5__.AsyncprogComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_12__.MatListModule, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterModule]
  });
})();

/***/ }),

/***/ 5722:
/*!**************************************************!*\
  !*** ./src/app/asyncprog/asyncprog.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncprogComponent": () => (/* binding */ AsyncprogComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


//
//
class AsyncprogComponent {
  //
  constructor() {
    //
    this.title = "[Angular RxJS]";
    //
    this.RxJSTest01();
    //
    this.RxJSTest02();
  }
  //
  RxJSTest01() {
    //
    let url = "https://learningpath.somee.com/demos/generarinformejson";
    // Create an Observable out of a promise
    let data = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.from)(fetch(url));
    // Subscribe to begin listening for async result
    data.subscribe({
      next(response) {
        console.log(response);
      },
      error(err) {
        console.error('Error: ' + err);
      },
      complete() {
        console.log('Completed');
      }
    });
  }
  //
  RxJSTest02() {
    /*
    // Create an Observable that will publish a value on an interval
    const secondsCounter = interval(1000);
    // Subscribe to begin publishing values
    const subscription   = secondsCounter.subscribe(n =>
      console.log(`It's been ${n + 1} seconds since subscribing!`));*/
  }
}
AsyncprogComponent.ɵfac = function AsyncprogComponent_Factory(t) {
  return new (t || AsyncprogComponent)();
};
AsyncprogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AsyncprogComponent,
  selectors: [["app-asyncprog"]],
  decls: 6,
  vars: 1,
  consts: [["href", "javascript:void window.open('https://angular.io/guide/observables')"]],
  template: function AsyncprogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Go to Reference");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9645:
/*!**************************************************!*\
  !*** ./src/app/datatable/datatable.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatatableComponent": () => (/* binding */ DatatableComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _loginfo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loginfo.service */ 9234);






function DatatableComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "id_Column");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DatatableComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r10.id_Column);
  }
}
function DatatableComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "pageName");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DatatableComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r11.pageName);
  }
}
function DatatableComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "accessDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DatatableComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r12.accessDate);
  }
}
function DatatableComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "ipValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DatatableComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r13.ipValue);
  }
}
function DatatableComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 14);
  }
}
function DatatableComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 15);
  }
}
const _c0 = function () {
  return [5, 10, 25, 100];
};
//
class DatatableComponent {
  //
  constructor(logInfoService) {
    this.logInfoService = logInfoService;
    //
    this.title = '[Material Table with local static source and pagination]';
    //
    this.displayedColumns = ['id_Column', 'pageName', 'accessDate', 'ipValue'];
    //
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource();
    //
  }
  //
  ngOnInit() {
    //
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(ELEMENT_DATA_LOCAL);
  }
  //
  ngAfterViewInit() {
    //
    this.dataSource.paginator = this.paginator;
  }
}
DatatableComponent.ɵfac = function DatatableComponent_Factory(t) {
  return new (t || DatatableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_loginfo_service__WEBPACK_IMPORTED_MODULE_0__.LogInfoService));
};
DatatableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: DatatableComponent,
  selectors: [["app-datatable"]],
  viewQuery: function DatatableComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    }
  },
  decls: 23,
  vars: 8,
  consts: [[1, "mat-elevation-z8"], [1, "scrollbar"], ["mat-table", "", "aria-label", "informeloglocal", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id_Column"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "pageName"], ["matColumnDef", "accessDate"], ["matColumnDef", "ipValue"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "informeloglocal", 3, "length", "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
  template: function DatatableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "table", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DatatableComponent_th_6_Template, 2, 0, "th", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DatatableComponent_td_7_Template, 2, 1, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DatatableComponent_th_9_Template, 2, 0, "th", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DatatableComponent_td_10_Template, 2, 1, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DatatableComponent_th_12_Template, 2, 0, "th", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, DatatableComponent_td_13_Template, 2, 1, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, DatatableComponent_th_15_Template, 2, 0, "th", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DatatableComponent_td_16_Template, 2, 1, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, DatatableComponent_tr_17_Template, 1, 0, "tr", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, DatatableComponent_tr_18_Template, 1, 0, "tr", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br")(20, "hr")(21, "br")(22, "mat-paginator", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", 100)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
    }
  },
  dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__.MatPaginator],
  styles: ["table[_ngcontent-%COMP%] {\n  width: min-content;\n  margin: 2rem;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 120%;\n}\n\n.mat-column-id_Column[_ngcontent-%COMP%] {\n  flex: none;\n  width: 100px;\n  padding: 1rem;\n}\n\n.mat-column-pageName[_ngcontent-%COMP%] {\n  flex: none;\n  width: 100px;\n  padding: 1rem;\n}\n\n.mat-column-accessDate[_ngcontent-%COMP%] {\n  flex: none;\n  width: 100px;\n  padding: 1rem;\n}\n\n.mat-column-ipValue[_ngcontent-%COMP%] {\n  flex: none;\n  width: 100px;\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGF0YXRhYmxlL2RhdGF0YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQ0k7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFDTjs7QUFHQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFESjs7QUFJRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG5cclxuICAgIHRoIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTIwJTtcclxuICAgIH1cclxufVxyXG4gIFxyXG4ubWF0LWNvbHVtbi1pZF9Db2x1bW4ge1xyXG4gICAgZmxleDogbm9uZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG5cclxuXHJcbi5tYXQtY29sdW1uLXBhZ2VOYW1lIHtcclxuICAgIGZsZXg6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuXHJcbi5tYXQtY29sdW1uLWFjY2Vzc0RhdGUge1xyXG4gICAgZmxleDogbm9uZTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgfVxyXG5cclxuICAubWF0LWNvbHVtbi1pcFZhbHVlIHtcclxuICAgIGZsZXg6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuICAgIFxyXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
const ELEMENT_DATA_LOCAL = [{
  id_Column: "99825",
  pageName: "ANGULAR_DEMO",
  accessDate: "2023-01-13T18:53:15.35",
  ipValue: "69.63.184.3"
}, {
  id_Column: "99824",
  pageName: "ANGULAR_DEMO",
  accessDate: "2023-01-13T18:53:14.897",
  ipValue: "69.63.184.1"
}, {
  id_Column: "99823",
  pageName: "PAGE_DEMO_INDEX",
  accessDate: "2023-01-13T15:26:44.203",
  ipValue: "181.48.33.178"
}, {
  id_Column: "99822",
  pageName: "PAGE_DEMO_INDEX",
  accessDate: "2023-01-13T14:10:32.08",
  ipValue: "181.48.33.178"
}, {
  id_Column: "99821",
  pageName: "ANGULAR_DEMO",
  accessDate: "2023-01-13T13:17:03.44",
  ipValue: "181.48.33.178"
}, {
  id_Column: "99820",
  pageName: "ANGULAR_DEMO",
  accessDate: "2023-01-13T13:16:58.11",
  ipValue: "181.48.33.178"
}, {
  id_Column: "99819",
  pageName: "ANGULAR_DEMO",
  accessDate: "2023-01-13T13:16:37.577",
  ipValue: "181.48.33.178"
}, {
  id_Column: "99818",
  pageName: "PAGE_DEMO_INDEX",
  accessDate: "2023-01-13T13:16:30.83",
  ipValue: "181.48.33.178"
}, {
  id_Column: "99817",
  pageName: "PAGE_DIJKSTRA_DEMO.",
  accessDate: "2023-01-13T12:12:29.763",
  ipValue: "40.77.167.23"
}, {
  id_Column: "99816",
  pageName: "ANGULAR_DEMO",
  accessDate: "2023-01-12T23:51:05.343",
  ipValue: "31.13.127.13"
}, {
  id_Column: "99815",
  pageName: "ANGULAR_DEMO",
  accessDate: "2023-01-12T23:50:32.743",
  ipValue: "31.13.127.118"
}, {
  id_Column: "99814",
  pageName: "PAGE_DIJKSTRA_DEMO.",
  accessDate: "2023-01-12T21:55:31.353",
  ipValue: "38.43.130.68"
}, {
  id_Column: "99813",
  pageName: "ANGULAR_DEMO",
  accessDate: "2023-01-12T21:55:23.93",
  ipValue: "38.43.130.68"
}, {
  id_Column: "99812",
  pageName: "PAGE_DEMO_INDEX",
  accessDate: "2023-01-12T21:55:11.95",
  ipValue: "38.43.130.68"
}, {
  id_Column: "99811",
  pageName: "ANGULAR_DEMO",
  accessDate: "2023-01-12T21:50:25.653",
  ipValue: "38.43.130.68"
}, {
  id_Column: "99810",
  pageName: "ANGULAR_DEMO",
  accessDate: "2023-01-12T20:34:24.193",
  ipValue: "191.99.1.33"
}, {
  id_Column: "99809",
  pageName: "ANGULAR_DEMO",
  accessDate: "2023-01-12T19:59:40.7",
  ipValue: "40.77.167.54"
}, {
  id_Column: "99808",
  pageName: "ANGULAR_DEMO",
  accessDate: "2023-01-12T19:41:11.03",
  ipValue: "20.25.14.9"
}, {
  id_Column: "99807",
  pageName: "PAGE_CSV_ASYNC_DEMO",
  accessDate: "2023-01-12T19:32:04.617",
  ipValue: "207.46.13.167"
}, {
  id_Column: "99806",
  pageName: "PAGE_DEMO_INDEX",
  accessDate: "2023-01-12T19:25:09.76",
  ipValue: "132.184.130.224"
}, {
  id_Column: "99805",
  pageName: "PAGE_DEMO_INDEX",
  accessDate: "2023-01-12T19:25:01.837",
  ipValue: "132.184.130.224"
}];

/***/ }),

/***/ 6800:
/*!******************************************!*\
  !*** ./src/app/lista/lista.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListaComponent": () => (/* binding */ ListaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _loginfo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loginfo.service */ 9234);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 6517);




function ListaComponent_mat_list_item_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item", 2)(1, "mat-list-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const logEntry_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", logEntry_r1.id_Column, " | ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, logEntry_r1.accessDate), "");
  }
}
//
//
class ListaComponent {
  //
  constructor(logInfoService) {
    this.logInfoService = logInfoService;
    //
    this.title = '[Material list with json/http local source]';
    //
    this.informeLogLocal = this.logInfoService.getLogLocal();
    //
    console.log("LOADING DATA : " + JSON.stringify(this.informeLogLocal));
  }
  //
  ngOnInit() {
    //
  }
}
ListaComponent.ɵfac = function ListaComponent_Factory(t) {
  return new (t || ListaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_loginfo_service__WEBPACK_IMPORTED_MODULE_0__.LogInfoService));
};
ListaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ListaComponent,
  selectors: [["app-lista"]],
  decls: 6,
  vars: 4,
  consts: [[1, "scrollbar"], ["class", "loginfo", 4, "ngFor", "ngForOf"], [1, "loginfo"], [1, "loginfo_item"]],
  template: function ListaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "mat-nav-list");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ListaComponent_mat_list_item_4_Template, 4, 4, "mat-list-item", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, ctx.informeLogLocal));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
  styles: [".loginfo[_ngcontent-%COMP%] {\n  background-color: darkgreen;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGlzdGEvbGlzdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRywyQkFBQTtFQUNBLFlBQUE7QUFBSCIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbmZvXHJcbntcclxuICAgYmFja2dyb3VuZC1jb2xvcjpkYXJrZ3JlZW47XHJcbiAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9234:
/*!************************************!*\
  !*** ./src/app/loginfo.service.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogInfoService": () => (/* binding */ LogInfoService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);


class LogInfoService {
  //
  //ELEMENT_DATA_LOCAL:  LogEntry[] = [];
  //
  //ELEMENT_DATA_LOCAL_: LogEntry[] = [];
  //
  //private _loginfo = new BehaviorSubject([]);
  //
  constructor(http) {
    this.http = http;
    //
  }
  //
  /*
  get loginfo() {
    return this._loginfo.asObservable()
  }*/
  // 
  /*
  updateLogInfo() {
    //
    let url = 'https://learningpath.somee.com/demos/generarinformejson';
    //
    this.http.get<LogEntry[]>(url).forEach(
      p_logInfo =>{
        //this._loginfo.next(p_logInfo);
      }
    )
    //
    console.log("ELEMENT_DATA_LOCAL from http/json : " + this.ELEMENT_DATA_LOCAL);
  }*/
  //
  getLogLocal() {
    //
    let url = '../assets/loginfo.json';
    //    
    return this.http.get(url);
  }
  //
  getLogRemoto() {
    //
    let url = 'https://learningpath.somee.com/demos/generarinformejson';
    // 
    return this.http.get(url);
  }
}
LogInfoService.ɵfac = function LogInfoService_Factory(t) {
  return new (t || LogInfoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
};
LogInfoService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: LogInfoService,
  factory: LogInfoService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7391:
/*!******************************************************!*\
  !*** ./src/app/loginfoview/loginfoview.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogInfoViewComponent": () => (/* binding */ LogInfoViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _loginfo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loginfo.service */ 9234);







function LogInfoViewComponent_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "id_Column");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LogInfoViewComponent_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r10.id_Column);
  }
}
function LogInfoViewComponent_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "pageName");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LogInfoViewComponent_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r11.pageName);
  }
}
function LogInfoViewComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "accessDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LogInfoViewComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r12.accessDate);
  }
}
function LogInfoViewComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "ipValue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LogInfoViewComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r13.ipValue);
  }
}
function LogInfoViewComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 14);
  }
}
function LogInfoViewComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 15);
  }
}
const _c0 = function () {
  return [5, 10, 25, 100];
};
//
//
class LogInfoViewComponent {
  //
  constructor(logInfoService) {
    this.logInfoService = logInfoService;
    //
    this.title = '[Material Table with json/http remote source and pagination]';
    //
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource();
    // 
    this.displayedColumns = ['id_Column', 'pageName', 'accessDate', 'ipValue'];
    //
    this._loginfo = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([]);
    //
    this.informeLogRemoto = this.logInfoService.getLogRemoto();
    //
    const myObserver = {
      next: p_logEntry => {
        //
        console.log('Observer got a next value: ' + JSON.stringify(p_logEntry));
        //
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource(p_logEntry);
        this.dataSource.paginator = this.paginator;
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    };
    //
    this.informeLogRemoto.subscribe(myObserver);
  }
  //
  ngOnInit() {
    //
  }
  //
  ngAfterViewInit() {
    //
  }
  //
  update() {
    //
  }
}
LogInfoViewComponent.ɵfac = function LogInfoViewComponent_Factory(t) {
  return new (t || LogInfoViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_loginfo_service__WEBPACK_IMPORTED_MODULE_0__.LogInfoService));
};
LogInfoViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: LogInfoViewComponent,
  selectors: [["loginfoview-app"]],
  viewQuery: function LogInfoViewComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    }
  },
  decls: 23,
  vars: 8,
  consts: [[1, "mat-elevation-z8"], [1, "scrollbar"], ["mat-table", "", "aria-label", "informeloglocal", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "id_Column"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "pageName"], ["matColumnDef", "accessDate"], ["matColumnDef", "ipValue"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "informeloglocal", 3, "length", "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
  template: function LogInfoViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0)(3, "div", 1)(4, "table", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, LogInfoViewComponent_th_6_Template, 2, 0, "th", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, LogInfoViewComponent_td_7_Template, 2, 1, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LogInfoViewComponent_th_9_Template, 2, 0, "th", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LogInfoViewComponent_td_10_Template, 2, 1, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](11, 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LogInfoViewComponent_th_12_Template, 2, 0, "th", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, LogInfoViewComponent_td_13_Template, 2, 1, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, LogInfoViewComponent_th_15_Template, 2, 0, "th", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LogInfoViewComponent_td_16_Template, 2, 1, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, LogInfoViewComponent_tr_17_Template, 1, 0, "tr", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, LogInfoViewComponent_tr_18_Template, 1, 0, "tr", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br")(20, "hr")(21, "br")(22, "mat-paginator", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", 100)("pageSize", 10)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
    }
  },
  dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator],
  styles: ["table[_ngcontent-%COMP%] {\n  width: min-content;\n  margin: 2rem;\n}\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 120%;\n}\n\n.mat-column-id_Column[_ngcontent-%COMP%] {\n  flex: none;\n  width: 100px;\n  padding: 1rem;\n}\n\n.mat-column-pageName[_ngcontent-%COMP%] {\n  flex: none;\n  width: 100px;\n  padding: 1rem;\n}\n\n.mat-column-accessDate[_ngcontent-%COMP%] {\n  flex: none;\n  width: 100px;\n  padding: 1rem;\n}\n\n.mat-column-ipValue[_ngcontent-%COMP%] {\n  flex: none;\n  width: 100px;\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW5mb3ZpZXcvbG9naW5mb3ZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBQ047O0FBR0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBSjs7QUFJQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBREo7O0FBSUU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFESiIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiBtaW4tY29udGVudDtcclxuICAgIG1hcmdpbjogMnJlbTtcclxuXHJcbiAgICB0aCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDEyMCU7XHJcbiAgICB9XHJcbn1cclxuICBcclxuLm1hdC1jb2x1bW4taWRfQ29sdW1uIHtcclxuICAgIGZsZXg6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuXHJcblxyXG4ubWF0LWNvbHVtbi1wYWdlTmFtZSB7XHJcbiAgICBmbGV4OiBub25lO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcblxyXG4ubWF0LWNvbHVtbi1hY2Nlc3NEYXRlIHtcclxuICAgIGZsZXg6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1jb2x1bW4taXBWYWx1ZSB7XHJcbiAgICBmbGV4OiBub25lO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICB9XHJcbiAgICBcclxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8224:
/*!****************************************************!*\
  !*** ./src/app/observable/observable.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObservableComponent": () => (/* binding */ ObservableComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


//
//
class ObservableComponent {
  //
  constructor() {
    //
    this.title = "[Angular Observable]";
    //
    this.ObservableTest01();
    //
    this.ObservableTest02();
    //
    this.ObservableTest03();
    //
    this.ObservableTest04();
    //
    this.ObservableTest05();
    //
    this.ObservableTest06();
  }
  //
  ObservableTest01() {
    // Create simple observable that emits three values
    const myObservable = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(1, 2, 3);
    // Create observer object
    const myObserver = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification')
    };
    // Execute with the observer object
    myObservable.subscribe(myObserver);
    // Logs:
    // Observer got a next value: 1
    // Observer got a next value: 2
    // Observer got a next value: 3
    // Observer got a complete notification
    myObservable.subscribe(x => console.log('Observer got a next value: ' + x), err => console.error('Observer got an error: ' + err), () => console.log('Observer got a complete notification'));
    // Logs:
    // Observer got a next value: 1
    // Observer got a next value: 2
    // Observer got a next value: 3
    // Observer got a complete notification
  }
  //
  ObservableTest02() {
    // execute the Observable and print the result of each notification
    sequence_1.subscribe({
      next(num) {
        console.log(num);
      },
      complete() {
        console.log('Finished sequence');
      }
    });
    // Logs:
    // 1
    // 2
    // 3
    // Finished sequence
  }
  //
  ObservableTest03() {
    //
    sequence_2.subscribe({
      next(num) {
        console.log(num);
      },
      complete() {
        console.log('Finished sequence');
      }
    });
  }
  //
  ObservableTest04() {
    /*
    // Subscribe starts the clock, and will emit after 1 second
    sequence_3.subscribe({
      next(num) { console.log('1st subscribe: ' + num); },
      complete() { console.log('1st sequence finished.'); }
    });
        // After 1/2 second, subscribe again.
    setTimeout(() => {
      sequence_3.subscribe({
        next(num) { console.log('2nd subscribe: ' + num); },
        complete() { console.log('2nd sequence finished.'); }
      });
    }, 500);*/
    // Logs:
    // (at 1 second): 1st subscribe: 1
    // (at 1.5 seconds): 2nd subscribe: 1
    // (at 2 seconds): 1st subscribe: 2
    // (at 2.5 seconds): 2nd subscribe: 2
    // (at 3 seconds): 1st subscribe: 3
    // (at 3 seconds): 1st sequence finished
    // (at 3.5 seconds): 2nd subscribe: 3
    // (at 3.5 seconds): 2nd sequence finished
  }
  //
  ObservableTest05() {
    /*
    // Subscribe starts the clock, and begins to emit after 1 second
    multicastSequence.subscribe({
      next(num) { console.log('1st subscribe: ' + num); },
      complete() { console.log('1st sequence finished.'); }
    });
        // After 1 1/2 seconds, subscribe again (should "miss" the first value).
    setTimeout(() => {
      multicastSequence.subscribe({
        next(num) { console.log('2nd subscribe: ' + num); },
        complete() { console.log('2nd sequence finished.'); }
      });
    }, 1500);
    */
    // Logs:
    // (at 1 second): Emitting 1
    // (at 1 second): 1st subscribe: 1
    // (at 2 seconds): Emitting 2
    // (at 2 seconds): 1st subscribe: 2
    // (at 2 seconds): 2nd subscribe: 2
    // (at 3 seconds): Emitting 3
    // (at 3 seconds): 1st subscribe: 3
    // (at 3 seconds): 2nd subscribe: 3
    // (at 3 seconds): 1st sequence finished
    // (at 3 seconds): 2nd sequence finished
  }
  //
  ObservableTest06() {
    /*
    const ESC_CODE     = 'Escape';
    const nameInput    = document.getElementById('name') as HTMLInputElement;
    const subscription = fromEvent(nameInput, 'keydown').subscribe(
      (e: any) => {
          //
          //if (e.code === ESC_CODE) {
          //    nameInput.value = '';
          //}
      });*/
  }
}
// This function runs when subscribe() is called
ObservableComponent.ɵfac = function ObservableComponent_Factory(t) {
  return new (t || ObservableComponent)();
};
ObservableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ObservableComponent,
  selectors: [["app-observable"]],
  decls: 6,
  vars: 1,
  consts: [["href", "javascript:void window.open('https://angular.io/guide/observables')"]],
  template: function ObservableComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Go to Reference");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr");
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.title);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
function sequenceSubscriber_01(observer) {
  // synchronously deliver 1, 2, and 3, then complete
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
  // unsubscribe function doesn't need to do anything in this
  // because values are delivered synchronously
  return {
    unsubscribe() {}
  };
}
//
function sequenceSubscriber_02(observer) {
  //
  const seq = [1, 2, 3];
  let timeoutId;
  // Will run through an array of numbers, emitting one value
  // per second until it gets to the end of the array.
  function doInSequence(arr, idx) {
    timeoutId = setTimeout(() => {
      observer.next(arr[idx]);
      if (idx === arr.length - 1) {
        observer.complete();
      } else {
        doInSequence(arr, ++idx);
      }
    }, 1000);
  }
  //
  doInSequence(seq, 0);
  // Unsubscribe should clear the timeout to stop execution
  return {
    unsubscribe() {
      clearTimeout(timeoutId);
    }
  };
}
//
function multicastSequenceSubscriber() {
  const seq = [1, 2, 3];
  // Keep track of each observer (one for every active subscription)
  const observers = [];
  // Still a single timeoutId because there will only ever be one
  // set of values being generated, multicasted to each subscriber
  let timeoutId;
  // Return the subscriber function (runs when subscribe()
  // function is invoked)
  return observer => {
    observers.push(observer);
    // When this is the first subscription, start the sequence
    if (observers.length === 1) {
      const multicastObserver = {
        next(val) {
          // Iterate through observers and notify all subscriptions
          observers.forEach(obs => obs.next(val));
        },
        error() {},
        complete() {
          // Notify all complete callbacks
          observers.slice(0).forEach(obs => obs.complete());
        }
      };
      doSequence(multicastObserver, seq, 0);
    }
    //
    return {
      unsubscribe() {
        // Remove from the observers array so it's no longer notified
        observers.splice(observers.indexOf(observer), 1);
        // If there's no more listeners, do cleanup
        if (observers.length === 0) {
          clearTimeout(timeoutId);
        }
      }
    };
    // Run through an array of numbers, emitting one value
    // per second until it gets to the end of the array.
    function doSequence(sequenceObserver, arr, idx) {
      timeoutId = setTimeout(() => {
        console.log('Emitting ' + arr[idx]);
        sequenceObserver.next(arr[idx]);
        if (idx === arr.length - 1) {
          sequenceObserver.complete();
        } else {
          doSequence(sequenceObserver, arr, ++idx);
        }
      }, 1000);
    }
  };
}
// Create a new Observable that will deliver the above sequence
const sequence_1 = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(sequenceSubscriber_01);
// Create a new Observable that will deliver the above sequence
const sequence_2 = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(sequenceSubscriber_02);
// Create a new Observable that will deliver the above sequence
const sequence_3 = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(sequenceSubscriber_02);
// Create a new Observable that will deliver the above sequence
const multicastSequence = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(multicastSequenceSubscriber());

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map