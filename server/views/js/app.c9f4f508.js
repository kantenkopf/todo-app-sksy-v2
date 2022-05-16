(function(){"use strict";var t={6691:function(t,e,o){var n=o(9242),a=o(3396);const r={class:"d-flex flex-column min-vh-100"};function d(t,e,o,d,i,l){const s=(0,a.up)("NavbarComponent"),c=(0,a.up)("router-view"),u=(0,a.up)("FooterComponent");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(s),(0,a.Wm)(c,null,{default:(0,a.w5)((({Component:t})=>[(0,a.Wm)(n.uT,null,{default:(0,a.w5)((()=>[((0,a.wg)(),(0,a.j4)((0,a.LL)(t)))])),_:2},1024)])),_:1}),(0,a.Wm)(u)])}const i={class:"navbar navbar-dark bg-dark mb-5"},l={class:"container"},s=(0,a.Uk)("TODO List"),c={class:"navbar-nav"},u={class:"nav-item"},p=(0,a.Uk)("Add a TODO");function m(t,e){const o=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("nav",i,[(0,a._)("div",l,[(0,a.Wm)(o,{class:"navbar-brand",to:"/"},{default:(0,a.w5)((()=>[s])),_:1}),(0,a._)("ul",c,[(0,a._)("li",u,["home"===t.$route.name?((0,a.wg)(),(0,a.j4)(o,{key:0,class:"btn btn-primary",to:"/new"},{default:(0,a.w5)((()=>[p])),_:1})):(0,a.kq)("",!0)])])])])}var h=o(89);const f={},b=(0,h.Z)(f,[["render",m]]);var v=b;const w={class:"mt-auto text-center pb-4"},g=(0,a.Uk)(" About ");function _(t,e,o,n,r,d){const i=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("footer",w,[(0,a.Wm)(i,{class:"link-dark",to:"/about"},{default:(0,a.w5)((()=>[g])),_:1})])}var T={};const k=(0,h.Z)(T,[["render",_]]);var y=k,D={components:{NavbarComponent:v,FooterComponent:y},created(){0!==this.$store.getters.getTodos.length&&this.$store.commit("flushTodos"),this.$store.dispatch("getTodos")}};const x=(0,h.Z)(D,[["render",d]]);var C=x,O=o(678);const W={class:"home container col-lg-8 col-xl-7 col-xxl-6 justify-content-center"};function F(t,e,o,n,r,d){const i=(0,a.up)("TodoTable");return(0,a.wg)(),(0,a.iD)("div",W,[(0,a.Wm)(i,{todos:d.todos},null,8,["todos"])])}const I=t=>((0,a.dD)("data-v-41ca60e4"),t=t(),(0,a.Cn)(),t),U={class:"table-responsive"},$={class:"table table-hover table-striped text-center table-borderless"},S=I((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{scope:"col",class:"text-start"},"TODO"),(0,a._)("th",{scope:"col"},"Due Date"),(0,a._)("th",{scope:"col"},"Completed"),(0,a._)("th",{scope:"col"},"Edit"),(0,a._)("th",{scope:"col"},"Delete")])],-1))),j={class:"container text-center"},V=I((()=>(0,a._)("div",{class:"row mt-5"},[(0,a._)("p",null,[(0,a._)("i",{class:"bi bi-exclamation-circle"}),(0,a.Uk)(" No TODOs here, create one first. ")])],-1))),Z=[V];function B(t,e,o,r,d,i){const l=(0,a.up)("TodoTableRow");return(0,a.wg)(),(0,a.iD)("div",U,[(0,a._)("table",$,[S,(0,a.Wm)(n.W3,{tag:"tbody",name:"table-row",class:"align-middle"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.todos,(t=>((0,a.wg)(),(0,a.j4)(l,{key:JSON.stringify(t),todo:t},null,8,["todo"])))),128))])),_:1})]),(0,a.wy)((0,a._)("div",j,Z,512),[[n.F8,0===o.todos.length]])])}var N=o(7139);const E=(0,a._)("i",{class:"bi bi-pencil-square"},null,-1),M=(0,a._)("i",{class:"bi bi-trash3-fill"},null,-1),A=[M];function P(t,e,o,n,r,d){const i=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("tr",null,[(0,a._)("td",{class:(0,N.C_)(["text-start",{"text-decoration-line-through":o.todo.completed}])},(0,N.zw)(o.todo.description),3),(0,a._)("td",{class:(0,N.C_)({"text-decoration-line-through":o.todo.completed})},(0,N.zw)(d.dueDate),3),(0,a._)("td",null,(0,N.zw)(o.todo.completion)+"% ",1),(0,a._)("td",null,[(0,a.Wm)(i,{class:"btn btn-secondary",to:{name:"edit",params:{_id:o.todo._id}}},{default:(0,a.w5)((()=>[E])),_:1},8,["to"])]),(0,a._)("td",null,[(0,a._)("button",{class:"btn btn-secondary",onClick:e[0]||(e[0]=(...t)=>d.deleteTodo&&d.deleteTodo(...t))},A)])])}var z={name:"TodoTableRow",props:["todo"],methods:{deleteTodo(){this.$store.dispatch("deleteTodo",this.todo._id)}},computed:{dueDate(){let t=this.todo.dueDate.split("T")[0].split("-"),e="";for(let o=t.length-1;o>=0;o--)e+=0!=o?t[o]+".":t[o];return e}}};const L=(0,h.Z)(z,[["render",P]]);var R=L,q={name:"TodoTable",components:{TodoTableRow:R},props:["todos"]};const H=(0,h.Z)(q,[["render",B],["__scopeId","data-v-41ca60e4"]]);var J=H,K={name:"HomeView",components:{TodoTable:J},data(){return{}},computed:{todos(){return this.$store.getters.getTodos}}};const Y=(0,h.Z)(K,[["render",F]]);var G=Y;const Q=(0,a.Uk)("Task Description"),X=(0,a.Uk)("What do you need to get done?"),tt=(0,a.Uk)("New Due Date"),et=(0,a.Uk)("Change Completion (%)"),ot={class:"mb-5 text-center"},nt=(0,a._)("label",{class:"form-check-label mx-1",for:"todoCompletedCheck"}," Mark as completed ",-1);function at(t,e,o,r,d,i){const l=(0,a.up)("BaseFormInput"),s=(0,a.up)("BaseForm");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(s,{onSubmit:e[4]||(e[4]=(0,n.iM)((()=>{}),["prevent"])),isValid:!0,onSave:i.updateTodo},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{labelFor:"task-description"},{label:(0,a.w5)((()=>[Q])),help:(0,a.w5)((()=>[X])),default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{class:"form-control",type:"text",name:"task-description",id:"task-description",maxlength:"160","onUpdate:modelValue":e[0]||(e[0]=t=>d.todo.description=t)},null,512),[[n.nr,d.todo.description]])])),_:1}),(0,a.Wm)(l,{labelFor:"due-date"},{label:(0,a.w5)((()=>[tt])),help:(0,a.w5)((()=>[(0,a.Uk)("Current Due Date is: "+(0,N.zw)(i.formattedDate),1)])),default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{class:"form-control",type:"date",name:"due-date",id:"due-date","onUpdate:modelValue":e[1]||(e[1]=t=>d.date=t)},null,512),[[n.nr,d.date]])])),_:1}),(0,a.Wm)(l,{labelFor:"completion"},{label:(0,a.w5)((()=>[et])),help:(0,a.w5)((()=>[(0,a.Uk)("Current Completion is: "+(0,N.zw)(d.todo.completion),1)])),default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{type:"range",class:"form-range",min:"0",max:"100",id:"customRange2","onUpdate:modelValue":e[2]||(e[2]=t=>d.todo.completion=t)},null,512),[[n.nr,d.todo.completion]])])),_:1}),(0,a._)("div",ot,[(0,a.wy)((0,a._)("input",{class:"form-check-input mx-1",type:"checkbox",value:"",id:"todoCompletedCheck","onUpdate:modelValue":e[3]||(e[3]=t=>d.todo.completed=t)},null,512),[[n.e8,d.todo.completed]]),nt])])),_:1},8,["onSave"])])}const rt={class:"container col-11 col-sm-9 col-md-8 col-lg-6 col-xl-5 col-xxl-4"},dt={class:"row"},it={novalidate:""},lt={class:"text-center"},st=(0,a.Uk)("Cancel");function ct(t,e,o,n,r,d){const i=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",rt,[(0,a._)("div",dt,[(0,a._)("form",it,[(0,a.WI)(t.$slots,"default"),(0,a._)("div",lt,[(0,a._)("button",{type:"button",class:(0,N.C_)(["btn btn-primary mx-1",{disabled:!o.isValid}]),onClick:e[0]||(e[0]=e=>t.$emit("save"))},"Save Changes",2),(0,a.Wm)(i,{class:"btn btn-outline-danger mx-1",to:"/"},{default:(0,a.w5)((()=>[st])),_:1})])])])])}var ut={name:"BaseForm",props:["isValid"]};const pt=(0,h.Z)(ut,[["render",ct]]);var mt=pt;const ht={class:"mb-4"},ft=["for"],bt=["id"];function vt(t,e,o,n,r,d){return(0,a.wg)(),(0,a.iD)("div",ht,[(0,a._)("label",{class:"form-label",for:o.labelFor},[(0,a.WI)(t.$slots,"label")],8,ft),(0,a.WI)(t.$slots,"default"),(0,a._)("div",{id:o.helpId,class:"form-text"},[(0,a.WI)(t.$slots,"help")],8,bt)])}var wt={name:"BaseFormInput",props:["labelFor","helpId"]};const gt=(0,h.Z)(wt,[["render",vt]]);var _t=gt,Tt={name:"EditView",components:{BaseForm:mt,BaseFormInput:_t},props:["_id"],beforeMount(){this.todo=this.$store.getters.getTodoByID(this._id),this.date=this.todo.dueDate.split("T")[0]},data(){return{todo:null,date:"",previousCompletion:0}},methods:{updateTodo(){this.$store.dispatch("updateTodo",this.todo),this.$router.push("/")}},watch:{date(){this.todo.dueDate=this.date+"T00:00:00.000Z"},"todo.completed"(){this.todo.completed?(this.previousCompletion=this.todo.completion,this.todo.completion=100):this.todo.completion=this.previousCompletion}},computed:{formattedDate(){let t=this.todo.dueDate.split("T")[0].split("-"),e="";for(let o=t.length-1;o>=0;o--)e+=0!=o?t[o]+".":t[o];return e}}};const kt=(0,h.Z)(Tt,[["render",at]]);var yt=kt;const Dt=(0,a.Uk)("Task Description"),xt=(0,a.Uk)("What do you need to get done?"),Ct=(0,a.Uk)("Task Description"),Ot=(0,a._)("div",{class:"invalid-feedback"}," Date can't be in the past. ",-1),Wt=(0,a.Uk)("What do you need to get done?");function Ft(t,e,o,r,d,i){const l=(0,a.up)("BaseFormInput"),s=(0,a.up)("BaseForm");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(s,{onSubmit:e[2]||(e[2]=(0,n.iM)((()=>{}),["prevent"])),isValid:i.isValid,onSave:i.addTodo},{default:(0,a.w5)((()=>[(0,a.Wm)(l,{labelFor:"task-description",helpId:"description-help"},{label:(0,a.w5)((()=>[Dt])),help:(0,a.w5)((()=>[xt])),default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{class:"form-control",type:"text",name:"task-description",id:"task-description",placeholder:"My next task...",maxlength:"160","onUpdate:modelValue":e[0]||(e[0]=t=>d.description=t)},null,512),[[n.nr,d.description]])])),_:1}),(0,a.Wm)(l,{labelFor:"due-date",helpId:"date-help"},{label:(0,a.w5)((()=>[Ct])),help:(0,a.w5)((()=>[Wt])),default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("input",{class:(0,N.C_)(["form-control",{"is-invalid":d.dueDate<`${(new Date).toISOString().split("T")[0]}T00:00:00.000Z`}]),type:"date",name:"due-date",id:"due-date","onUpdate:modelValue":e[1]||(e[1]=t=>d.date=t)},null,2),[[n.nr,d.date]]),Ot])),_:1})])),_:1},8,["isValid","onSave"])])}var It={name:"NewView",components:{BaseForm:mt,BaseFormInput:_t},data(){return{description:"",dueDate:`${(new Date).toISOString().split("T")[0]}T00:00:00.000Z`,date:(new Date).toISOString().split("T")[0]}},methods:{addTodo(){this.$store.dispatch("addTodo",{description:this.description,dueDate:this.dueDate}),this.$router.push("/")}},computed:{isValid(){return this.dueDate>=`${(new Date).toISOString().split("T")[0]}T00:00:00.000Z`}},watch:{date(){this.dueDate=`${this.date}T00:00:00.000Z`}}};const Ut=(0,h.Z)(It,[["render",Ft]]);var $t=Ut;const St={class:"container text-center"},jt=(0,a._)("div",{class:"row"},[(0,a._)("h1",null," 404 ")],-1),Vt=(0,a._)("div",{class:"row mb-4"},[(0,a._)("p",null," The page you are looking for doesn't exist. ")],-1),Zt=(0,a.Uk)("Back to Homepage");function Bt(t,e){const o=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",St,[jt,Vt,(0,a.Wm)(o,{class:"btn btn-outline-primary",to:{name:"home"}},{default:(0,a.w5)((()=>[Zt])),_:1})])}const Nt={},Et=(0,h.Z)(Nt,[["render",Bt]]);var Mt=Et;const At=[{path:"/",name:"home",component:G},{path:"/edit",name:"edit",component:yt},{path:"/new",name:"new",component:$t},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,239))},{path:"/edit/:_id",name:"edit",component:yt,props:!0},{path:"/:catchAll(.*)",name:"NotFound",component:Mt}],Pt=(0,O.p7)({history:(0,O.PO)("/"),routes:At});var zt=Pt,Lt=o(65),Rt=o(6265),qt=o.n(Rt),Ht=(0,Lt.MT)({state:{todos:[]},getters:{getTodos:t=>t.todos,getTodoByID:t=>e=>t.todos.find((t=>t._id===e))},mutations:{populateTodos(t,e){e.forEach((e=>{t.todos.push(e)}))},addTodo(t,e){t.todos.push(e)},updateTodo(t,e){t.todos[t.todos.findIndex((t=>t._id===e._id))]=e},deleteTodo(t,e){t.todos.splice(t.todos.findIndex((t=>t._id===e)),1)},flushTodos(t){t.todos=[]}},actions:{getTodos(t){qt().get("/api").then((e=>t.commit("populateTodos",e.data))).catch((t=>console.log(t)))},addTodo(t,e){qt().post("/api",e).then((e=>t.commit("addTodo",e.data))).catch((t=>console.log(t)))},updateTodo(t,e){qt().put(`/api?_id=${e._id}`,e).then((()=>t.commit("updateTodo",e))).catch((t=>console.log(t)))},deleteTodo(t,e){qt()["delete"](`/api?_id=${e}`).then((()=>{t.commit("deleteTodo",e)})).catch((t=>console.log(t)))}},modules:{}});(0,n.ri)(C).use(Ht).use(zt).mount("#app")}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,n,a,r){if(!n){var d=1/0;for(c=0;c<t.length;c++){n=t[c][0],a=t[c][1],r=t[c][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||d>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[l])}))?n.splice(l--,1):(i=!1,r<d&&(d=r));if(i){t.splice(c--,1);var s=a();void 0!==s&&(e=s)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[n,a,r]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,n){return o.f[n](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/about.b4b6d368.js"}}(),function(){o.miniCssF=function(t){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="client:";o.l=function(n,a,r,d){if(t[n])t[n].push(a);else{var i,l;if(void 0!==r)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var u=s[c];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==e+r){i=u;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",e+r),i.src=n),t[n]=[a];var p=function(e,o){i.onerror=i.onload=null,clearTimeout(m);var a=t[n];if(delete t[n],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(t){return t(o)})),e)return e(o)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var t={143:0};o.f.j=function(e,n){var a=o.o(t,e)?t[e]:void 0;if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(o,n){a=t[e]=[o,n]}));n.push(a[2]=r);var d=o.p+o.u(e),i=new Error,l=function(n){if(o.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),d=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+d+")",i.name="ChunkLoadError",i.type=r,i.request=d,a[1](i)}};o.l(d,l,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,r,d=n[0],i=n[1],l=n[2],s=0;if(d.some((function(e){return 0!==t[e]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(l)var c=l(o)}for(e&&e(n);s<d.length;s++)r=d[s],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(c)},n=self["webpackChunkclient"]=self["webpackChunkclient"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(6691)}));n=o.O(n)})();
//# sourceMappingURL=app.c9f4f508.js.map