(function(t){function e(e){for(var s,n,l=e[0],o=e[1],c=e[2],d=0,u=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);m&&m(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==r[l]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r={app:0},i=[];function l(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-c467c0de":"4fc2e43e"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={"chunk-c467c0de":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var s="css/"+({}[t]||t)+"."+{"chunk-c467c0de":"fc8ce089"}[t]+".css",r=o.p+s,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var c=i[l],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===s||d===r))return e()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){c=u[l],d=c.getAttribute("data-href");if(d===s||d===r)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var s=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=s,delete n[t],m.parentNode.removeChild(m),a(i)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){n[t]=0})));var s=r[t];if(0!==s)if(s)e.push(s[2]);else{var i=new Promise((function(e,a){s=r[t]=[e,a]}));e.push(s[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=l(t);var u=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(m);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",u.name="ChunkLoadError",u.type=s,u.request=n,a[1](u)}r[t]=void 0}};var m=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-dashboard/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var m=d;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2224:function(t,e){t.exports="data:image/png;base64,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"},"3d39":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabbar"},[a("div",{staticClass:"datebar"},[t._v("July 16, 2020 4:30 PM")]),a("div",{staticClass:"tabs"},t._l(t.labels,(function(e,s){return a("div",{class:{label:!0,"is-active":e==t.realActiveTab},on:{click:function(a){return t.tabClicked(e)}}},[t._v(t._s(e))])})),0)])},n=[],r={name:"Tabbar",props:{labels:{required:!0,type:Array},active:{required:!0,type:String}},data:function(){return{clickedTab:""}},computed:{realActiveTab:function(){return this.clickedTab?this.clickedTab:this.active}},methods:{tabClicked:function(t){return this.clickedTab=t,this.$emit("click",this.realActiveTab)}}},i=r,l=(a("4428"),a("2877")),o=Object(l["a"])(i,s,n,!1,null,"6467c2f5",null);e["a"]=o.exports},4032:function(t,e,a){},4428:function(t,e,a){"use strict";var s=a("d459"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=a("43f9"),r=a.n(n),i=(a("51de"),a("e094"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Navbar"),a("div",{staticClass:"main-container"},[a("router-view")],1)],1)}),l=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"navbar"},[s("div",[t._m(0),s("div",{staticClass:"routes"},[s("router-link",{staticClass:"item",attrs:{to:"/",exact:""}},[s("md-icon",[t._v("house")]),t._v(" Dashboard ")],1),s("router-link",{staticClass:"item",attrs:{to:"messages"}},[s("md-icon",[t._v("message")]),t._v(" Messages ")],1),s("router-link",{staticClass:"item",attrs:{to:"assessments"}},[s("md-icon",[t._v("attachment")]),t._v(" Assessments ")],1),s("router-link",{staticClass:"item",attrs:{to:"patients"}},[s("md-icon",[t._v("group")]),t._v(" Patients ")],1),s("router-link",{staticClass:"item",attrs:{to:"data"}},[s("md-icon",[t._v("pie_chart")]),t._v(" Data ")],1)],1),s("div",{staticClass:"more"},[s("div",{staticClass:"new-patient"},[s("md-icon",[t._v("add")]),t._v(" Patient ")],1),s("div",{staticClass:"labo"},[s("md-avatar",{staticClass:"avatar"},[s("img",{attrs:{src:a("2224"),alt:"Avatar"}})]),s("span",[t._v("Kaiser permanente Redwood City")])],1)])]),s("div",{staticClass:"account"},[s("div",{staticClass:"account-info"},[s("md-avatar",{staticClass:"avatar"},[s("img",{attrs:{src:a("c3e7"),alt:"Avatar"}})]),t._m(1)],1),s("div",[s("md-icon",[t._v("expand_more")])],1)])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo"},[s("img",{attrs:{src:a("9b19"),alt:"logo"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"name"},[t._v("Adnan "),a("br"),t._v(" Lahrech")])}],d={name:"Navbar",data:function(){return{}}},u=d,m=(a("869a"),a("2877")),p=Object(m["a"])(u,o,c,!1,null,"17a755ab",null),v=p.exports,f={components:{Navbar:v},name:"App"},h=f,b=(a("5c0b"),Object(m["a"])(h,i,l,!1,null,null,null)),y=b.exports,g=(a("d3b7"),a("8c4f")),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("Tabbar",{attrs:{labels:t.labels,active:t.labels[0]},on:{click:t.tabClicked}}),a("md-content",{staticClass:"tabcontent md-scrollbar"},[a("div",{staticClass:"stat-widgets"},["All"==t.filterBy?a("StatWidget",{attrs:{stats:t.allStats},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("PATIENTS")]},proxy:!0}],null,!1,483662109)}):t._e(),"All"==t.filterBy||"Covid-19"==t.filterBy?a("StatWidget",{attrs:{stats:t.covidStats,sorted:""},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("COVID-19")]},proxy:!0}],null,!1,3845989839)}):t._e(),"All"==t.filterBy||"Asthma"==t.filterBy?a("StatWidget",{attrs:{stats:t.asthmaStats,sorted:""},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Asthma")]},proxy:!0}],null,!1,1232711007)}):t._e(),"All"==t.filterBy||"Family History"==t.filterBy?a("StatWidget",{attrs:{stats:t.familyStats,sorted:""},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("Family History")]},proxy:!0}],null,!1,3961499689)}):t._e()],1),a("div",{staticClass:"assessments-data"},[a("AssessTable",{attrs:{data:t.assessments}})],1)])],1)},C=[],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"stat"},[a("div",{staticClass:"header"},[t._t("title"),a("div",{staticClass:"total"},[a("md-icon",[t._v("group")]),t._t("total",[t._v(t._s(t.total))])],2)],2),a("div",{staticClass:"content"},[t._l(t.realStats,(function(e,s){return["population"==e.type?a("div",{staticClass:"item item-default"},[a("md-icon",[t._v("group")]),a("md-badge",{staticClass:"bar",style:t.getStyle(s,e.value),attrs:{"md-content":e.value}})],1):t._e(),"pending"==e.type?a("div",{staticClass:"item item-default"},[a("md-icon",[t._v("hourglass_empty")]),a("md-badge",{staticClass:"bar",style:t.getStyle(s,e.value),attrs:{"md-content":e.value}})],1):t._e(),"discharged"==e.type?a("div",{staticClass:"item item-default"},[a("md-icon",[t._v("arrow_circle_up")]),a("md-badge",{staticClass:"bar",style:t.getStyle(s,e.value),attrs:{"md-content":e.value}})],1):t._e(),"active"==e.type?a("div",{staticClass:"item item-active"},[a("md-icon",[t._v("thumb_up_alt")]),a("md-badge",{staticClass:"bar",style:t.getStyle(s,e.value),attrs:{"md-content":e.value}})],1):t._e(),"warning"==e.type?a("div",{staticClass:"item item-warning"},[a("md-icon",[t._v("report_problem")]),a("md-badge",{staticClass:"bar",style:t.getStyle(s,e.value),attrs:{"md-content":e.value}})],1):t._e(),"hospitalized"==e.type?a("div",{staticClass:"item item-hospitalized"},[a("md-icon",[t._v("error")]),a("md-badge",{staticClass:"bar",style:t.getStyle(s,e.value),attrs:{"md-content":e.value}})],1):t._e()]}))],2)])},w=[],S={name:"stat",props:{stats:{required:!0,type:Array},sorted:{required:!1,defaultValue:!1,type:Boolean}},methods:{getStyle:function(t,e){var a=0;return a=0==t&&this.sorted?100:e/this.total*100<15?15:e/this.total*100,"width: ".concat(a,"%")}},computed:{total:function(){var t=0;for(var e in this.stats)t+=this.stats[e].value;return t},realStats:function(){return this.sorted?this.stats.sort((function(t,e){return t.value>e.value?-1:t.value<e.value?1:0})):this.stats}}},k=S,x=(a("cf00"),Object(m["a"])(k,_,w,!1,null,"61fead5a",null)),B=x.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-wrapper"},[a("div",{staticClass:"table-header"},[a("md-field",[a("label",{attrs:{for:"first-name"}}),a("md-input",{attrs:{placeholder:"Search by the date..."},on:{input:t.searchOnTable},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("md-menu",{attrs:{"md-direction":"bottom-end"}},[a("md-button",{attrs:{"md-menu-trigger":""}},[t._v("Actions")]),a("md-menu-content",[a("md-menu-item",[t._v("Action 1")]),a("md-menu-item",[t._v("Action 2")]),a("md-menu-item",[t._v("Action 3")])],1)],1)],1),a("md-table",[a("md-table-row",[a("md-table-head",{attrs:{"md-numeric":""}},[t._v("Score")]),a("md-table-head",[t._v("Name")]),a("md-table-head",[t._v("Age/Gender")]),a("md-table-head",[t._v("Assessment")]),a("md-table-head",[t._v("Key Metrics")]),a("md-table-head",[t._v("Messages")]),a("md-table-head",[t._v("Following")])],1),t._l(t.searched,(function(e,s){return a("md-table-row",{key:s},[a("md-table-cell",{attrs:{"md-numeric":""}},[a("span",{class:{score:!0,"bg-pos":e.score<5,"bg-warn":e.score>5&&e.score<9,"bg-dang":e.score>10}},[a("span",{staticClass:"score-num"},[t._v(t._s(e.score))])])]),a("md-table-cell",[a("md-icon",{class:{"patient-status":!0,pos:"active"==e.status,dang:"hospitalized"==e.status,gray:"discharged"==e.status}},[t._v("person")]),t._v(" "+t._s(e.name)+" ")],1),a("md-table-cell",[t._v(" "+t._s(e.age)+"/"+t._s(e.gender)+" "),a("br"),t._v(" "+t._s(e.dateOfBirth)+" ")]),a("md-table-cell",[t._v(t._s(e.assessment))]),a("md-table-cell",[t._l(e.keyMetrics.data,(function(s,n){return"Covid-19"==e.keyMetrics.type?a("div",{key:n,staticClass:"key-metric"},[a("md-icon",{class:"positive"==s.type?"pos":"dang"},[t._v(" "+t._s((s.type,"show_chart"))+" ")]),a("span",[t._v(t._s(s.content))])],1):t._e()})),t._l(e.keyMetrics.data,(function(s,n){return"Asthma"==e.keyMetrics.type?a("div",{key:n,staticClass:"key-metric"},[a("md-icon",{class:"positive"==s.type?"pos":"dang"},[t._v(" "+t._s("positive"==s.type?"thumb_up_alt":"thumb_down_alt")+" ")]),a("span",[t._v(t._s(s.content))])],1):t._e()})),"Family History"==e.keyMetrics.type?a("div",{staticClass:"key-metric"},[a("span",[t._v(t._s(e.keyMetrics.data.join(", ")))])]):t._e()],2),a("md-table-cell",[a("md-icon",{class:{pos:e.messages.pictures}},[t._v("camera_alt")]),a("md-icon",{class:{pos:e.messages.messages}},[t._v("chat_bubble")])],1),a("md-table-cell",[e.following?a("span",{staticClass:"f-button f-button-following"},[t._v("Following")]):a("span",{staticClass:"f-button f-button-follow"},[t._v("Follow")])])],1)}))],2)],1)},j=[],E=(a("4de4"),a("ac1f"),a("25f0"),a("841c"),function(t){return t.toString().toLowerCase()}),M=function(t,e){return e?t.filter((function(t){return E(t.dateOfBirth)==e})):t},F={name:"AssessTable",props:{data:{required:!0,type:Array}},data:function(){return{search:null,searched:[]}},methods:{searchOnTable:function(){this.searched=M(this.data,this.search)}},created:function(){this.searched=this.data}},Q=F,L=(a("af3e"),Object(m["a"])(Q,O,j,!1,null,"7d36743b",null)),V=L.exports,q=a("3d39"),z={name:"Dashboard",components:{Tabbar:q["a"],AssessTable:V,StatWidget:B},methods:{tabClicked:function(t){this.filterBy=t}},data:function(){return{filterBy:"All",labels:["All","Following","Covid-19","Asthma","Family History"],allStats:[{type:"population",value:20},{type:"pending",value:40},{type:"discharged",value:50}],covidStats:[{type:"active",value:20},{type:"warning",value:40},{type:"hospitalized",value:50}],asthmaStats:[{type:"active",value:220},{type:"warning",value:40},{type:"hospitalized",value:50}],familyStats:[{type:"hospitalized",value:150},{type:"active",value:60},{type:"warning",value:10}],assessments:[{id:1,score:1,name:"Diana Reede",status:"active",gender:"Female",age:78,dateOfBirth:"2/12/1942",assessment:"Covid-19",keyMetrics:{type:"Covid-19",data:[{type:"negative",content:"Body temp: 104F"},{type:"positive",content:"Resp rate: 25"}]},messages:{pictures:!0,messages:!1},following:!0},{id:1,score:6,name:"Jennifer Corner",status:"discharged",gender:"Female",age:78,dateOfBirth:"2/12/1942",assessment:"Asthma",keyMetrics:{type:"Asthma",data:[{type:"positive",content:"Flovent HFA PO"},{type:"negative",content:"Daily breathing exercises"}]},messages:{pictures:!0,messages:!1},following:!0},{id:2,score:11,name:"Sam Johnson",status:"hospitalized",gender:"Male",age:45,dateOfBirth:"2/12/1976",assessment:"Family History",keyMetrics:{type:"Family History",data:["Heart disease","Asthma","Diabetes","Hypertension"]},messages:{pictures:!0,messages:!0},following:!1}]}}},N=z,P=(a("b26c"),Object(m["a"])(N,A,C,!1,null,"6539cd55",null)),W=P.exports;s["default"].use(g["a"]);var I=[{path:"/",name:"Dashboard",component:W},{path:"/messages",name:"Messages",component:function(){return a.e("chunk-c467c0de").then(a.bind(null,"eaad"))}}],Y=new g["a"]({mode:"history",base:"/vue-dashboard/",routes:I}),H=Y,T=a("2f62");s["default"].use(T["a"]);var G=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}});s["default"].use(r.a),s["default"].config.productionTip=!1,new s["default"]({router:H,store:G,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"869a":function(t,e,a){"use strict";var s=a("8d59"),n=a.n(s);n.a},"8d59":function(t,e,a){},"93ad":function(t,e,a){},"958e":function(t,e,a){},"9b19":function(t,e,a){t.exports=a.p+"img/logo.552c94e8.svg"},"9c0c":function(t,e,a){},af3e:function(t,e,a){"use strict";var s=a("958e"),n=a.n(s);n.a},b26c:function(t,e,a){"use strict";var s=a("93ad"),n=a.n(s);n.a},c3e7:function(t,e,a){t.exports=a.p+"img/profile.4036b0d3.png"},cf00:function(t,e,a){"use strict";var s=a("4032"),n=a.n(s);n.a},d459:function(t,e,a){}});
//# sourceMappingURL=app.d0a3f5a0.js.map