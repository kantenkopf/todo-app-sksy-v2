(function(){"use strict";var t={532:function(t,e,o){var n=o(9242),a=o(3396);const r={class:"d-flex flex-column min-vh-100"};function l(t,e,o,l,d,s){const i=(0,a.up)("NavbarComponent"),c=(0,a.up)("router-view"),u=(0,a.up)("FooterComponent");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(i),(0,a.Wm)(c,null,{default:(0,a.w5)((({Component:t})=>[(0,a.Wm)(n.uT,null,{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(t)))])),_:2},1024)])),_:1}),(0,a.Wm)(u)])}const d={class:"navbar navbar-dark bg-dark mb-5"},s={class:"container"},i=(0,a.Uk)("TODO List"),c={class:"navbar-nav"},u={class:"nav-item"},p=(0,a.Uk)("Add a TODO");function m(t,e,o,n,r,l){const m=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",d,[(0,a._)("div",s,[(0,a.Wm)(m,{class:"navbar-brand",to:"/"},{default:(0,a.w5)((()=>[i])),_:1}),(0,a._)("ul",c,[(0,a._)("li",u,["home"===t.$route.name?((0,a.wg)(),(0,a.j4)(m,{key:0,class:"btn btn-primary",to:"/new"},{default:(0,a.w5)((()=>[p])),_:1})):(0,a.kq)("",!0)])])])])}var f={},h=o(89);const b=(0,h.Z)(f,[["render",m]]);var v=b;const _={class:"mt-auto text-center pb-4"},w=(0,a.Uk)(" About ");function g(t,e,o,n,r,l){const d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("footer",_,[(0,a.Wm)(d,{class:"link-dark",to:"/about"},{default:(0,a.w5)((()=>[w])),_:1})])}var T={};const k=(0,h.Z)(T,[["render",g]]);var y=k,D={components:{NavbarComponent:v,FooterComponent:y},created(){0!==this.$store.getters.getTodos.length&&this.$store.commit("flushTodos"),this.$store.dispatch("getTodos")}};const x=(0,h.Z)(D,[["render",l]]);var O=x,W=o(678);const C={class:"home container col-lg-8 col-xl-7 col-xxl-6 justify-content-center"};function F(t,e,o,n,r,l){const d=(0,a.up)("TodoTable");return(0,a.wg)(),(0,a.iD)("div",C,[(0,a.Wm)(d,{todos:l.todos},null,8,["todos"])])}const U=t=>((0,a.dD)("data-v-41ca60e4"),t=t(),(0,a.Cn)(),t),I={class:"table-responsive"},$={class:"table table-hover table-striped text-center table-borderless"},j=U((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{scope:"col",class:"text-start"},"TODO"),(0,a._)("th",{scope:"col"},"Due Date"),(0,a._)("th",{scope:"col"},"Completed"),(0,a._)("th",{scope:"col"},"Edit"),(0,a._)("th",{scope:"col"},"Delete")])],-1))),B={class:"container text-center"},S=U((()=>(0,a._)("div",{class:"row mt-5"},[(0,a._)("p",null,[(0,a._)("i",{class:"bi bi-exclamation-circle"}),(0,a.Uk)(" No TODOs here, create one first. ")])],-1))),Z=[S];function M(t,e,o,r,l,d){const s=(0,a.up)("TodoTableRow");return(0,a.wg)(),(0,a.iD)("div",I,[(0,a._)("table",$,[j,(0,a.Wm)(n.W3,{tag:"tbody",name:"table-row",class:"align-middle"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.todos,(t=>((0,a.wg)(),(0,a.j4)(s,{key:JSON.stringify(t),todo:t},null,8,["todo"])))),128))])),_:1})]),(0,a.wy)((0,a._)("div",B,Z,512),[[n.F8,0===o.todos.length]])])}var N=o(7139);const E={class:"text-start"},V=(0,a._)("i",{class:"bi bi-pencil-square"},null,-1),A=(0,a._)("i",{class:"bi bi-trash3-fill"},null,-1),P=[A];function L(t,e,o,n,r,l){const d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("tr",null,[(0,a._)("td",E,(0,N.zw)(o.todo.description),1),(0,a._)("td",null,(0,N.zw)(l.dueDate),1),(0,a._)("td",null,(0,N.zw)(o.todo.completion)+"% ",1),(0,a._)("td",null,[(0,a.Wm)(d,{class:"btn btn-secondary",to:{name:"edit",params:{_id:o.todo._id}}},{default:(0,a.w5)((()=>[V])),_:1},8,["to"])]),(0,a._)("td",null,[(0,a._)("button",{class:"btn btn-secondary",onClick:e[0]||(e[0]=(...t)=>l.deleteTodo&&l.deleteTodo(...t))},P)])])}var q={name:"TodoTableRow",props:["todo"],methods:{deleteTodo(){this.$store.dispatch("deleteTodo",this.todo._id)}},computed:{dueDate(){let t=this.todo.dueDate.split("T")[0].split("-"),e="";for(let o=t.length-1;o>=0;o--)e+=0!=o?t[o]+".":t[o];return e}}};const z=(0,h.Z)(q,[["render",L]]);var H=z,R={name:"TodoTable",components:{TodoTableRow:H},props:["todos"]};const J=(0,h.Z)(R,[["render",M],["__scopeId","data-v-41ca60e4"]]);var K=J,Y={name:"HomeView",components:{TodoTable:K},data(){return{}},computed:{todos(){return this.$store.getters.getTodos}}};const G=(0,h.Z)(Y,[["render",F]]);var Q=G;const X=(0,a.Uk)("Task Description"),tt=(0,a.Uk)("What do you need to get done?"),et=(0,a.Uk)("New Due Date"),ot=(0,a.Uk)("Current Due Date is: "),nt=(0,a.Uk)("Change Completion (%)"),at=(0,a._)("option",{value:"0"},"0",-1),rt=(0,a._)("option",{value:"10"},"10",-1),lt=(0,a._)("option",{value:"20"},"20",-1),dt=(0,a._)("option",{value:"30"},"30",-1),st=(0,a._)("option",{value:"40"},"40",-1),it=(0,a._)("option",{value:"50"},"50",-1),ct=(0,a._)("option",{value:"60"},"60",-1),ut=(0,a._)("option",{value:"70"},"70",-1),pt=(0,a._)("option",{value:"80"},"80",-1),mt=(0,a._)("option",{value:"90"},"90",-1),ft=(0,a._)("option",{value:"100"},"100",-1),ht=[at,rt,lt,dt,st,it,ct,ut,pt,mt,ft],bt={class:"mb-5 text-center"},vt=(0,a._)("label",{class:"form-check-label mx-1",for:"todoCompletedCheck"}," Mark as completed ",-1);function _t(t,e,o,r,l,d){const s=(0,a.up)("BaseFormInput"),i=(0,a.up)("BaseForm");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(i,{onSubmit:e[4]||(e[4]=(0,n.iM)((()=>{}),["prevent"])),onSave:d.updateTodo},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{labelFor:"task-description"},{label:(0,a.w5)((()=>[X])),help:(0,a.w5)((()=>[tt])),default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{class:"form-control",type:"text",name:"task-description",id:"task-description",maxlength:"160","onUpdate:modelValue":e[0]||(e[0]=t=>l.todo.description=t)},null,512),[[n.nr,l.todo.description]])])),_:1}),(0,a.Wm)(s,{labelFor:"due-date"},{label:(0,a.w5)((()=>[et])),help:(0,a.w5)((()=>[ot])),default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{class:"form-control",type:"date",name:"due-date",id:"due-date","onUpdate:modelValue":e[1]||(e[1]=t=>l.date=t)},null,512),[[n.nr,l.date]])])),_:1}),(0,a.Wm)(s,{labelFor:"completion"},{label:(0,a.w5)((()=>[nt])),default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("select",{class:"form-select",name:"completion","aria-label":"Change completion (%) of TODO","onUpdate:modelValue":e[2]||(e[2]=t=>l.todo.completion=t)},ht,512),[[n.bM,l.todo.completion]])])),_:1}),(0,a._)("div",bt,[(0,a.wy)((0,a._)("input",{class:"form-check-input mx-1",type:"checkbox",value:"",id:"todoCompletedCheck","onUpdate:modelValue":e[3]||(e[3]=t=>l.todo.completed=t)},null,512),[[n.e8,l.todo.completed]]),vt])])),_:1},8,["onSave"])])}const wt={class:"container col-11 col-sm-9 col-md-8 col-lg-6 col-xl-5 col-xxl-4"},gt={class:"row"},Tt={class:"text-center"},kt=(0,a.Uk)("Cancel");function yt(t,e,o,n,r,l){const d=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",wt,[(0,a._)("div",gt,[(0,a._)("form",null,[(0,a.WI)(t.$slots,"default"),(0,a._)("div",Tt,[(0,a._)("button",{type:"button",class:"btn btn-primary mx-1",onClick:e[0]||(e[0]=e=>t.$emit("save"))},"Save Changes"),(0,a.Wm)(d,{class:"btn btn-outline-danger mx-1",to:"/"},{default:(0,a.w5)((()=>[kt])),_:1})])])])])}var Dt={name:"BaseForm"};const xt=(0,h.Z)(Dt,[["render",yt]]);var Ot=xt;const Wt={class:"mb-4"},Ct=["for"],Ft=["id"];function Ut(t,e,o,n,r,l){return(0,a.wg)(),(0,a.iD)("div",Wt,[(0,a._)("label",{class:"form-label",for:o.labelFor},[(0,a.WI)(t.$slots,"label")],8,Ct),(0,a.WI)(t.$slots,"default"),(0,a._)("div",{id:o.helpId,class:"form-text"},[(0,a.WI)(t.$slots,"help")],8,Ft)])}var It={name:"BaseFormInput",props:["labelFor","helpId"]};const $t=(0,h.Z)(It,[["render",Ut]]);var jt=$t,Bt={name:"EditView",components:{BaseForm:Ot,BaseFormInput:jt},props:["_id"],beforeMount(){this.todo=this.$store.getters.getTodoByID(this._id),this.date=this.todo.dueDate.split("T")[0]},data(){return{todo:null,date:"",isoDate:""}},methods:{updateTodo(){this.$store.dispatch("updateTodo",this.todo),this.$router.push("/")}},watch:{date(){this.todo.dueDate=this.date+"T00:00:00Z"}}};const St=(0,h.Z)(Bt,[["render",_t]]);var Zt=St;const Mt=(0,a.Uk)("Task Description"),Nt=(0,a.Uk)("What do you need to get done?"),Et=(0,a.Uk)("Task Description"),Vt=(0,a.Uk)("What do you need to get done?");function At(t,e,o,r,l,d){const s=(0,a.up)("BaseFormInput"),i=(0,a.up)("BaseForm");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(i,{onSubmit:e[2]||(e[2]=(0,n.iM)((()=>{}),["prevent"])),onSave:d.addTodo},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{labelFor:"task-description",helpId:"description-help"},{label:(0,a.w5)((()=>[Mt])),help:(0,a.w5)((()=>[Nt])),default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{class:"form-control",type:"text",name:"task-description",id:"task-description",placeholder:"My next task...",maxlength:"160","onUpdate:modelValue":e[0]||(e[0]=t=>l.description=t)},null,512),[[n.nr,l.description]])])),_:1}),(0,a.Wm)(s,{labelFor:"task-description",helpId:"description-help"},{label:(0,a.w5)((()=>[Et])),help:(0,a.w5)((()=>[Vt])),default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{class:"form-control",type:"date",name:"due-date",id:"due-date","onUpdate:modelValue":e[1]||(e[1]=t=>l.dueDate=t)},null,512),[[n.nr,l.dueDate]])])),_:1})])),_:1},8,["onSave"])])}var Pt={name:"NewView",components:{BaseForm:Ot,BaseFormInput:jt},data(){return{description:"",dueDate:null}},methods:{addTodo(){this.$store.dispatch("addTodo",{description:this.description,dueDate:this.dueDate}),this.$router.push("/")}}};const Lt=(0,h.Z)(Pt,[["render",At]]);var qt=Lt;const zt={class:"container text-center"},Ht=(0,a._)("div",{class:"row"},[(0,a._)("h1",null," 404 ")],-1),Rt=(0,a._)("div",{class:"row mb-4"},[(0,a._)("p",null," The page you are looking for doesn't exist. ")],-1),Jt=(0,a.Uk)("Back to Homepage");function Kt(t,e){const o=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",zt,[Ht,Rt,(0,a.Wm)(o,{class:"btn btn-outline-primary",to:{name:"home"}},{default:(0,a.w5)((()=>[Jt])),_:1})])}const Yt={},Gt=(0,h.Z)(Yt,[["render",Kt]]);var Qt=Gt;const Xt=[{path:"/",name:"home",component:Q},{path:"/edit",name:"edit",component:Zt},{path:"/new",name:"new",component:qt},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,239))},{path:"/edit/:_id",name:"edit",component:Zt,props:!0},{path:"/:catchAll(.*)",name:"NotFound",component:Qt}],te=(0,W.p7)({history:(0,W.PO)("/"),routes:Xt});var ee=te,oe=o(65),ne=o(6265),ae=o.n(ne),re=(0,oe.MT)({state:{todos:[]},getters:{getTodos:t=>t.todos,getTodoByID:t=>e=>t.todos.find((t=>t._id===e))},mutations:{populateTodos(t,e){e.forEach((e=>{t.todos.push(e)}))},addTodo(t,e){t.todos.push(e)},updateTodo(t,e){t.todos[t.todos.findIndex((t=>t._id===e._id))]=e},deleteTodo(t,e){t.todos.splice(t.todos.findIndex((t=>t._id===e)),1)},flushTodos(t){t.todos=[]}},actions:{getTodos(t){ae().get("/api").then((e=>t.commit("populateTodos",e.data))).catch((t=>console.log(t)))},addTodo(t,e){ae().post("/api",e).then((e=>t.commit("addTodo",e.data))).catch((t=>console.log(t)))},updateTodo(t,e){ae().put(`/api?_id=${e._id}`,e).then((()=>t.commit("updateTodo",e))).catch((t=>console.log(t)))},deleteTodo(t,e){ae()["delete"](`/api?_id=${e}`).then((()=>{t.commit("deleteTodo",e)})).catch((t=>console.log(t)))}},modules:{}});(0,n.ri)(O).use(re).use(ee).mount("#app")}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,n,a,r){if(!n){var l=1/0;for(c=0;c<t.length;c++){n=t[c][0],a=t[c][1],r=t[c][2];for(var d=!0,s=0;s<n.length;s++)(!1&r||l>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[s])}))?n.splice(s--,1):(d=!1,r<l&&(l=r));if(d){t.splice(c--,1);var i=a();void 0!==i&&(e=i)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,a,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,n){return o.f[n](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/about.b4b6d368.js"}}(),function(){o.miniCssF=function(t){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="client:";o.l=function(n,a,r,l){if(t[n])t[n].push(a);else{var d,s;if(void 0!==r)for(var i=document.getElementsByTagName("script"),c=0;c<i.length;c++){var u=i[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==e+r){d=u;break}}d||(s=!0,d=document.createElement("script"),d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",e+r),d.src=n),t[n]=[a];var p=function(e,o){d.onerror=d.onload=null,clearTimeout(m);var a=t[n];if(delete t[n],d.parentNode&&d.parentNode.removeChild(d),a&&a.forEach((function(t){return t(o)})),e)return e(o)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=p.bind(null,d.onerror),d.onload=p.bind(null,d.onload),s&&document.head.appendChild(d)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var t={143:0};o.f.j=function(e,n){var a=o.o(t,e)?t[e]:void 0;if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(o,n){a=t[e]=[o,n]}));n.push(a[2]=r);var l=o.p+o.u(e),d=new Error,s=function(n){if(o.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+l+")",d.name="ChunkLoadError",d.type=r,d.request=l,a[1](d)}};o.l(l,s,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,r,l=n[0],d=n[1],s=n[2],i=0;if(l.some((function(e){return 0!==t[e]}))){for(a in d)o.o(d,a)&&(o.m[a]=d[a]);if(s)var c=s(o)}for(e&&e(n);i<l.length;i++)r=l[i],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(c)},n=self["webpackChunkclient"]=self["webpackChunkclient"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(532)}));n=o.O(n)})();
//# sourceMappingURL=app.994b5fe6.js.map