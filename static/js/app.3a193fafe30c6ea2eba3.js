webpackJsonp([1],{NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"navbar"}},[t("div",{staticClass:"nav-wrapper green"},[t("div",{staticClass:"container"},[t("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[this._v("Employee Manager")])],1)])])},staticRenderFns:[]},o={name:"App",components:{Navbar:a("VU/8")(null,i,!1,null,null,null).exports}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("navbar"),this._v(" "),t("div",{staticClass:"container"},[t("router-view")],1)],1)},staticRenderFns:[]},s=a("VU/8")(o,l,!1,null,null,null).exports,r=a("/ocq"),d=a("kxiW"),c=a.n(d),p=(a("881v"),c.a.initializeApp({apiKey:"AIzaSyC-CwHICuAuKE1nAPylM8fP7w95Awrk0NU",authDomain:"testcloudfirestore-c7e98.firebaseapp.com",databaseURL:"https://testcloudfirestore-c7e98.firebaseio.com",projectId:"testcloudfirestore-c7e98",storageBucket:"testcloudfirestore-c7e98.appspot.com",messagingSenderId:"777684895085"}).firestore()),m={name:"dashboard",data:function(){return{employees:[]}},created:function(){var e=this;p.collection("employees").orderBy("employee_id").get().then(function(t){t.forEach(function(t){var a={id:t.id,employee_id:t.data().employee_id,name:t.data().name,dept:t.data().dept};e.employees.push(a)})})}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"dashboard"}},[a("ul",{staticClass:"collection with-header"},[e._m(0),e._v(" "),e._l(e.employees,function(t){return a("li",{key:t.id,staticClass:"collection-item"},[a("div",{staticClass:"chip"},[e._v("\n        "+e._s(t.dept)+"\n      ")]),e._v("\n      "+e._s(t.employee_id)+":"+e._s(t.name)+"\n      "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-employee",params:{employee_id:t.employee_id}}}},[a("i",{staticClass:"material-icons"},[e._v("remove_red_eye")])])],1)})],2),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large waves-effect waves-light red",attrs:{to:"/new"}},[a("i",{staticClass:"large material-icons"},[e._v("add")])])],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",{staticClass:"collection-header"},[t("h4",[this._v("Employees")])])}]},v=a("VU/8")(m,u,!1,null,null,null).exports,_={name:"new-employee",data:function(){return{employee_id:null,name:null,dept:null}},methods:{saveEmployee:function(){var e=this;p.collection("employees").add({employee_id:this.employee_id,name:this.name,dept:this.dept}).then(function(t){return e.$router.push("/")}).catch(function(e){return console.log(e)})}}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"new-employee"}},[a("h3",[e._v("NewEmployee")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),e._v(" "),a("label",[e._v("Employee ID#")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("label",[e._v("Name")])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}}),e._v(" "),a("label",[e._v("Department")])])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},f=a("VU/8")(_,y,!1,null,null,null).exports,h={name:"view-employee",data:function(){return{employee_id:null,name:null,dept:null}},beforeRouteEnter:function(e,t,a){p.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;p.collection("employee").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t().data().dept})})},deleteEmployee:function(){var e=this;confirm("Are you sure?")&&p.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.delete(),e.$router.push("/")})})}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"view-employee"}},[a("ul",{staticClass:"collection with-header"},[a("li",{staticClass:"collection-header"},[a("h4",[e._v(" "+e._s(e.name)+" ")])]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Employee ID#: "+e._s(e.employee_id)+" ")]),e._v(" "),a("li",{staticClass:"collection-item"},[e._v("Department: "+e._s(e.dept)+" ")])]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back")]),e._v(" "),a("button",{staticClass:"btn red",on:{click:e.deleteEmployee}},[e._v("Delete")]),e._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large waves-effect waves-light red",attrs:{to:{name:"edit-employee",params:{employee_id:e.employee_id}}}},[a("i",{staticClass:"large material-icons"},[e._v("mode_edit")])])],1)],1)},staticRenderFns:[]},C=a("VU/8")(h,w,!1,null,null,null).exports,g={name:"edit-employee",data:function(){return{employee_id:null,name:null,dept:null}},beforeRouteEnter:function(e,t,a){p.collection("employees").where("employee_id","==",e.params.employee_id).get().then(function(e){e.forEach(function(e){a(function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.dept=e.data().dept})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;p.collection("employee").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){e.employee_id=t.data().employee_id,e.name=t.data().name,e.dept=t().data().dept})})},updateEmployee:function(){var e=this;p.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then(function(t){t.forEach(function(t){t.ref.update({employee_id:e.employee_id,name:e.name,dept:e.dept}).then(function(){e.$router.push({name:"view-employee",params:{employee_id:e.employee_id}})})})})}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"edit-employee"}},[a("h3",[e._v("Edit Employee")]),e._v(" "),a("div",{staticClass:"row"},[a("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",required:""},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})])]),e._v(" "),a("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),e._v(" "),a("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},staticRenderFns:[]},E=a("VU/8")(g,b,!1,null,null,null).exports;n.a.use(r.a);var x=new r.a({routes:[{path:"/",name:"Dashboard",component:v},{path:"/new",name:"new-employee",component:f},{path:"/edit/:employee_id",name:"edit-employee",component:E},{path:"/:employee_id",name:"view-employee",component:C}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:x,components:{App:s},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.3a193fafe30c6ea2eba3.js.map