(function(t){function e(e){for(var n,c,r=e[0],d=e[1],i=e[2],b=0,O=[];b<r.length;b++)c=r[b],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&O.push(a[c][0]),a[c]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);l&&l(e);while(O.length)O.shift()();return s.push.apply(s,i||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,r=1;r<o.length;r++){var d=o[r];0!==a[d]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},a={app:0},s=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue-deploy-todo/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],d=r.push.bind(r);r.push=e,r=r.slice();for(var i=0;i<r.length;i++)e(r[i]);var l=d;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("cd49")},3999:function(t,e,o){},b3f8:function(t,e,o){},cd49:function(t,e,o){"use strict";o.r(e);var n=o("7a23");const a={id:"root-container"};function s(t,e,o,s,c,r){const d=Object(n["n"])("Header"),i=Object(n["n"])("TodoInput"),l=Object(n["n"])("TodoTitle"),b=Object(n["n"])("List"),O=Object(n["n"])("Footer");return Object(n["i"])(),Object(n["d"])("div",a,[Object(n["f"])(d,{search:t.search},null,8,["search"]),Object(n["f"])(i),Object(n["f"])(l,{allTodos:t.allTodos,todoDone:t.todoDone,todoImportant:t.todoImportant},null,8,["allTodos","todoDone","todoImportant"]),Object(n["f"])(b,{filtredTodos:t.filtredTodos},null,8,["filtredTodos"]),Object(n["f"])(O)])}var c=o("5502");const r={class:"todo-container"},d={key:0,class:"task-default"},i=Object(n["f"])("i",{class:"fas fa-tasks"},null,-1),l={key:1,class:"collection"};function b(t,e,o,a,s,c){const b=Object(n["n"])("ListItem");return Object(n["i"])(),Object(n["d"])("div",r,[t.filtredTodos.length<1?(Object(n["i"])(),Object(n["d"])("div",d,[i])):(Object(n["i"])(),Object(n["d"])("ul",l,[(Object(n["i"])(!0),Object(n["d"])(n["a"],null,Object(n["m"])(t.filtredTodos,e=>(Object(n["i"])(),Object(n["d"])(b,{key:e.id,task:e.task,done:e.done,important:e.important,id:e.id,toggleDone:t.toggleDone,deleteTodo:t.deleteTodo,toggleImportant:t.toggleImportant},null,8,["task","done","important","id","toggleDone","deleteTodo","toggleImportant"]))),128))]))])}const O={class:"collection-item todo-item"},u={class:"todo-item-form-input"},f={class:"todo-item-title"},p=Object(n["f"])("span",null,null,-1),j={class:"todo-actions"};function m(t,e,o,a,s,c){return Object(n["i"])(),Object(n["d"])("li",O,[Object(n["f"])("form",u,[Object(n["f"])("p",f,[Object(n["f"])("label",null,[Object(n["f"])("input",{checked:t.done,type:"checkbox",onClick:e[1]||(e[1]=e=>t.toggleDone(this.id))},null,8,["checked"]),p]),Object(n["f"])("span",{class:["item",{done:t.done,important:t.important}],title:t.task},Object(n["o"])(t.task),11,["title"])]),Object(n["f"])("div",j,[Object(n["f"])("i",{class:["fas fa-exclamation",{important:t.important}],title:["Mark important"],onClick:e[2]||(e[2]=e=>t.toggleImportant(this.id))},null,2),Object(n["f"])("i",{title:["Delete task"],class:"fas fa-trash",onClick:e[3]||(e[3]=e=>t.deleteTodo(this.id))})])])])}var g=Object(n["g"])({props:{task:{type:String},important:Boolean,done:Boolean,id:Number,toggleImportant:Function,toggleDone:Function,deleteTodo:Function}});g.render=m;var h=g,v=Object(n["g"])({props:{filtredTodos:{type:Function}},components:{ListItem:h},methods:{...Object(c["b"])(["toggleImportant","toggleDone","deleteTodo"])}});v.render=b;var T=v;const k=Object(n["t"])("data-v-0e337bd4");Object(n["k"])("data-v-0e337bd4");const y={class:"header-container"};Object(n["j"])();const I=k((t,e,o,a,s,c)=>(Object(n["i"])(),Object(n["d"])("header",y,[Object(n["f"])("input",{class:"todo-search ",placeholder:"search",type:"text",onInput:e[1]||(e[1]=e=>t.searchInput(e.target.value)),search:t.search},null,40,["search"])])));var D=Object(n["g"])({props:{search:{type:String}},methods:{...Object(c["b"])(["searchInput"])},data(){return{}}});o("f51b");D.render=I,D.__scopeId="data-v-0e337bd4";var _=D;const S=Object(n["t"])("data-v-a6bdfede");Object(n["k"])("data-v-a6bdfede");const w=Object(n["f"])("button",{class:"waves-effect waves-light btn green"}," add todo ",-1);Object(n["j"])();const E=S((t,e,o,a,s,c)=>(Object(n["i"])(),Object(n["d"])("form",{class:"todo-input",onSubmit:e[2]||(e[2]=Object(n["s"])(e=>[t.addTodo(t.task),t.reset()],["prevent"]))},[Object(n["r"])(Object(n["f"])("input",{placeholder:"input you task here",type:"text","onUpdate:modelValue":e[1]||(e[1]=e=>t.task=e)},null,512),[[n["p"],t.task]]),w],32)));var L=Object(n["g"])({data(){return{task:null}},methods:{...Object(c["b"])(["addTodo"]),reset(){this.task=null}}});L.render=E,L.__scopeId="data-v-a6bdfede";var N=L;const x=Object(n["t"])("data-v-3f72aaec");Object(n["k"])("data-v-3f72aaec");const G={class:"todos-title"},P={class:"todos-stats"},A={key:0},M={key:1},C={key:2};Object(n["j"])();const J=x((t,e,o,a,s,c)=>(Object(n["i"])(),Object(n["d"])("div",G,[Object(n["f"])("h3",null,Object(n["o"])(t.title),1),Object(n["f"])("div",P,[t.allTodos?(Object(n["i"])(),Object(n["d"])("p",A,"All todos:"+Object(n["o"])(t.allTodos),1)):Object(n["e"])("",!0),t.todoDone?(Object(n["i"])(),Object(n["d"])("p",M,"Todos done:"+Object(n["o"])(t.todoDone),1)):Object(n["e"])("",!0),t.todoImportant?(Object(n["i"])(),Object(n["d"])("p",C,"Todos important:"+Object(n["o"])(t.todoImportant),1)):Object(n["e"])("",!0)])])));var F=Object(n["g"])({props:{allTodos:Number,todoDone:Number,todoImportant:Number},data(){return{title:"My todos"}}});F.render=J,F.__scopeId="data-v-3f72aaec";var H=F;const R=Object(n["t"])("data-v-5302b50a");Object(n["k"])("data-v-5302b50a");const B={class:"footer"},U={class:"presintation_container"},V=Object(n["f"])("div",{class:"logo_container"},[Object(n["f"])("img",{src:"/assets/images/icon.svg",alt:"Logo"}),Object(n["f"])("span",null,"oldsav dev.")],-1),q={class:"link-container"};Object(n["j"])();const z=R((t,e,o,a,s,c)=>(Object(n["i"])(),Object(n["d"])("footer",B,[Object(n["f"])("div",U,[V,Object(n["f"])("div",q,[Object(n["f"])("a",{class:"fab fa-github link-route",target:"_blank",href:"https://github.com/oldsav",title:t.github},null,8,["title"]),Object(n["f"])("a",{class:"fab fa-linkedin-in link-route",target:"_blank",href:"https://www.linkedin.com/in/alexander-old-82a4aa202",title:t.linkedin},null,8,["title"]),Object(n["f"])("a",{class:"fab fa-telegram-plane link-route",target:"_blank",href:"https://t.me/oldsav",title:t.telegram},null,8,["title"])])])])));var K=Object(n["g"])({data(){return{github:"Github",linkedin:"Linkedin",telegram:"Telegram"}}});K.render=z,K.__scopeId="data-v-5302b50a";var Q=K;const W=sessionStorage.getItem("todos"),X=null!==W?JSON.parse(W):[];var Y=X;const Z="";var $=Z,tt={toggleImportant({commit:t},e){t("TOGGLE_IMPORTANT",e)},toggleDone({commit:t},e){t("TOGGLE_DONE",e)},deleteTodo({commit:t},e){t("DELETE_TODO",e)},addTodo({commit:t},e){t("ADD_TODO",e)},searchInput({commit:t},e){t("SEARCH_TODO",e)}};const et="TOGGLE_IMPORTANT",ot="TOGGLE_DONE",nt="DELETE_TODO",at="ADD_TODO",st="SEARCH_TODO";var ct={[st](t,e){t.search=e},[et](t,e){const o=t.todos.find(t=>t.id===e);o.important=!o.important,sessionStorage.setItem("todos",JSON.stringify(t.todos))},[ot](t,e){const o=t.todos.find(t=>t.id===e);o.done=!o.done,sessionStorage.setItem("todos",JSON.stringify(t.todos))},[nt](t,e){t.todos=t.todos.filter(t=>t.id!==e),sessionStorage.setItem("todos",JSON.stringify(t.todos))},[at](t,e){if(""!==e.trim()){const o={id:Date.now(),task:e,done:!1,important:!1,createdAt:Date.now()};t.todos.push(o),sessionStorage.setItem("todos",JSON.stringify(t.todos))}}};const rt=Symbol();var dt=Object(c["a"])({state:{todos:Y,search:$},mutations:ct,actions:tt,modules:{}}),it=Object(n["g"])({setup(){const t=Object(c["c"])(rt);return{todos:Object(n["b"])(()=>t.state.todos),search:Object(n["b"])(()=>t.state.search)}},computed:{allTodos(){return this.todos.length>0?this.todos.length:0},todoDone(){const t=this.todos.filter(t=>!0===t.done);return t.length},todoImportant(){const t=this.todos.filter(t=>!0===t.important);return t.length},filtredTodos(){const t=this.todos.filter(t=>t.task.toLowerCase().match(this.search.toLowerCase()));return t}},components:{List:T,Header:_,TodoInput:N,TodoTitle:H,Footer:Q}});o("ee6e");it.render=s;var lt=it;Object(n["c"])(lt).use(dt,rt).mount("#app")},ee6e:function(t,e,o){"use strict";o("3999")},f51b:function(t,e,o){"use strict";o("b3f8")}});
//# sourceMappingURL=app.b39c1f2d.js.map