function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2eXD":function(e,t,n){"use strict";n.r(t);var r,o=n("3Pt+"),l=n("aceb"),a=n("vTDv"),c=n("tyNb"),i=n("fXoL"),s=((r=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=i["\u0275\u0275defineComponent"]({type:r,selectors:[["ngx-components"]],decls:1,vars:0,template:function(e,t){1&e&&i["\u0275\u0275element"](0,"router-outlet")},directives:[c.h],encapsulation:2}),r),d=n("ofXK");function m(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"nb-list-item"),i["\u0275\u0275element"](1,"nb-user",3),i["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("name",n.name)("title",n.title)}}var p,b=((p=function e(){_classCallCheck(this,e),this.users=[{name:"Carla Espinosa",title:"Nurse"},{name:"Bob Kelso",title:"Doctor of Medicine"},{name:"Janitor",title:"Janitor"},{name:"Perry Cox",title:"Doctor of Medicine"},{name:"Ben Sullivan",title:"Carpenter and photographer"}]}).\u0275fac=function(e){return new(e||p)},p.\u0275cmp=i["\u0275\u0275defineComponent"]({type:p,selectors:[["ngx-list"]],decls:6,vars:1,consts:[[1,"col-md-12","col-lg-6","col-xxxl-6"],[1,"list-card"],[4,"ngFor","ngForOf"],[3,"name","title"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"nb-card",1),i["\u0275\u0275elementStart"](2,"nb-card-header"),i["\u0275\u0275text"](3,"Users"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"nb-list"),i["\u0275\u0275template"](5,m,2,2,"nb-list-item",2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](5),i["\u0275\u0275property"]("ngForOf",t.users))},directives:[l.p,l.s,l.P,d.l,l.Q,l.ub],styles:[".nb-theme-default   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border-bottom:none}.nb-theme-default   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-dark   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border-bottom:none}.nb-theme-dark   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-cosmic   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border-bottom:none}.nb-theme-cosmic   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-corporate   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border-bottom:none}.nb-theme-corporate   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}"]}),p);function u(e,t){1&e&&i["\u0275\u0275text"](0,"First step")}function f(e,t){1&e&&i["\u0275\u0275text"](0,"Second step")}function h(e,t){1&e&&i["\u0275\u0275text"](0,"Fourth step")}var g,C,S=[{path:"",component:s,children:[{path:"add",component:(g=function(){function e(t){_classCallCheck(this,e),this.fb=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.firstForm=this.fb.group({firstCtrl:["",o.y.required]}),this.secondForm=this.fb.group({secondCtrl:["",o.y.required]}),this.thirdForm=this.fb.group({thirdCtrl:["",o.y.required]})}},{key:"onFirstSubmit",value:function(){this.firstForm.markAsDirty()}},{key:"onSecondSubmit",value:function(){this.secondForm.markAsDirty()}},{key:"onThirdSubmit",value:function(){this.thirdForm.markAsDirty()}}]),e}(),g.\u0275fac=function(e){return new(e||g)(i["\u0275\u0275directiveInject"](o.c))},g.\u0275cmp=i["\u0275\u0275defineComponent"]({type:g,selectors:[["ngx-stepper"]],decls:37,vars:3,consts:[[1,"col-md-12","col-lg-12","col-xxxl-12"],["orientation","horizontal"],[3,"label"],["labelOne",""],["nbButton","","disabled","","nbStepperNext",""],["nbButton","","nbStepperNext",""],["labelTwo",""],["nbButton","","nbStepperPrevious",""],["label","Third step"],["labelFour",""]],template:function(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"nb-card",0),i["\u0275\u0275elementStart"](1,"nb-card-body"),i["\u0275\u0275elementStart"](2,"nb-stepper",1),i["\u0275\u0275elementStart"](3,"nb-step",2),i["\u0275\u0275template"](4,u,1,0,"ng-template",null,3,i["\u0275\u0275templateRefExtractor"]),i["\u0275\u0275elementStart"](6,"h3"),i["\u0275\u0275text"](7,"Step content #1"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](8,"button",4),i["\u0275\u0275text"](9,"prev"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](10,"button",5),i["\u0275\u0275text"](11,"next"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](12,"nb-step",2),i["\u0275\u0275template"](13,f,1,0,"ng-template",null,6,i["\u0275\u0275templateRefExtractor"]),i["\u0275\u0275elementStart"](15,"h3"),i["\u0275\u0275text"](16,"Step content #2"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](17,"button",7),i["\u0275\u0275text"](18,"prev"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](19,"button",5),i["\u0275\u0275text"](20,"next"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](21,"nb-step",8),i["\u0275\u0275elementStart"](22,"h3"),i["\u0275\u0275text"](23,"Step content #3"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](24,"button",7),i["\u0275\u0275text"](25,"prev"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](26,"button",5),i["\u0275\u0275text"](27,"next"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](28,"nb-step",2),i["\u0275\u0275template"](29,h,1,0,"ng-template",null,9,i["\u0275\u0275templateRefExtractor"]),i["\u0275\u0275elementStart"](31,"h3"),i["\u0275\u0275text"](32,"Step content #4"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](33,"button",7),i["\u0275\u0275text"](34,"prev"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](35,"button",4),i["\u0275\u0275text"](36,"next"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275reference"](5),r=i["\u0275\u0275reference"](14),o=i["\u0275\u0275reference"](30);i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("label",n),i["\u0275\u0275advance"](9),i["\u0275\u0275property"]("label",r),i["\u0275\u0275advance"](16),i["\u0275\u0275property"]("label",o)}},directives:[l.p,l.o,l.kb,l.jb,l.l,l.mb,l.nb],styles:["[_nghost-%COMP%]     nb-stepper .step-content{text-align:center}[_nghost-%COMP%]     nb-stepper .step-content button{cursor:pointer;margin:.5rem}"]}),g)},{path:"list",component:b}]}],_=((C=function e(){_classCallCheck(this,e)}).\u0275mod=i["\u0275\u0275defineNgModule"]({type:C}),C.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(e){return new(e||C)},imports:[[c.g.forChild(S)],c.g]}),C);n.d(t,"LayoutModule",(function(){return x}));var v,x=((v=function e(){_classCallCheck(this,e)}).\u0275mod=i["\u0275\u0275defineNgModule"]({type:v}),v.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(e){return new(e||v)},imports:[[o.i,o.v,a.a,l.pb,l.ab,l.lb,l.t,l.m,l.R,l.f,l.vb,_]]}),v)}}]);