webpackJsonp([1],{0:function(t,e){},"5D6m":function(t,e){},"7i/n":function(t,e,n){t.exports=n.p+"public/img/img7.8ead45b.png"},F9cq:function(t,e,n){t.exports=n.p+"public/img/text4.59c14fb.png"},GpHu:function(t,e,n){t.exports=n.p+"public/img/img8.6a48631.png"},HAIV:function(t,e){},L5un:function(t,e){},N4Io:function(t,e,n){t.exports=n.p+"public/img/text2.2d14fb7.png"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},r,!1,function(t){n("TYXI")},null,null).exports,o=n("/ocq"),a={name:"Index",data:function(){return{socket:{},user:this.$store.getters.getUser,boxType:this.$store.getters.getPage,count:0,checkCount:!0}},created:function(){var t=this;this.$socket.off("pageChange"),this.$socket.on("pageChange",function(e){"admin2"===t.$store.getters.getUser&&t.$store.commit("setPage",e.page)}),this.$store.watch(function(){return t.$store.getters.getPage},function(e){t.boxType=e}),this.$store.watch(function(){return t.$store.getters.getUser},function(e){t.user=e}),this.$store.watch(function(){return t.$store.getters.getCurrent},function(e){"admin1"!==t.user&&"admin2"!==t.user&&t.timeSet(e.startTime)})},methods:{timeSet:function(t){var e=this,n=Date.now(),i=Math.floor((t-n)/1e3);if(i>1&&this.checkCount){this.checkCount=!1,this.count=i;var r=setInterval(function(){e.count=e.count-1,0===e.count&&(e.endEvent(),clearInterval(r))},1e3)}else i<=0&&this.checkCount&&(this.count="End")},endEvent:function(){var t=this;setTimeout(function(){t.count="End",t.checkCount=!0},5e3)},getParams:function(){for(var t,e,n={},i=decodeURIComponent(location.href),r=(i=decodeURIComponent(i)).substring(i.indexOf("?")+1,i.length),s=(r=r.split("&")).length,o=0;o<s;o++)t=r[o].split("=")[0],e=r[o].split("=")[1],n[t]=e;return n},connect:function(t){console.log(t)},event:function(t){console.log(t)},disconnect:function(t){console.log(t)}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"index-page"}},[n("div",{attrs:{id:"header"}},[0===t.boxType?n("header-0"):t._e(),t._v(" "),1===t.boxType?n("header-1"):t._e(),t._v(" "),2===t.boxType?n("header-2"):t._e(),t._v(" "),3===t.boxType?n("header-3"):t._e(),t._v(" "),4===t.boxType?n("header-4"):t._e(),t._v(" "),5===t.boxType?n("header-5"):t._e(),t._v(" "),6===t.boxType?n("header-6"):t._e()],1),t._v(" "),n("div",{attrs:{id:"box"}},[0===t.boxType?n("box-0"):t._e(),t._v(" "),1===t.boxType?n("box-1"):t._e(),t._v(" "),2===t.boxType?n("box-2"):t._e(),t._v(" "),3===t.boxType?n("box-3"):t._e(),t._v(" "),4===t.boxType?n("box-4"):t._e(),t._v(" "),5===t.boxType?n("box-5"):t._e(),t._v(" "),6===t.boxType?n("box-6"):t._e()],1),t._v(" "),0!==t.count?n("div",{attrs:{id:"loding"}},[n("div"),t._v(" "),n("table",[n("tr",[n("td",{attrs:{id:"loding-td"}},[n("div",{attrs:{id:"loding-item"}},[t._v(t._s(t.count))])])])])]):t._e()])},staticRenderFns:[]};var u=n("VU/8")(a,c,!1,function(t){n("kSLT")},"data-v-66483dde",null).exports;i.a.use(o.a);var d=new o.a({routes:[{path:"/",name:"Index",component:u}]}),l=n("mtWM"),m=n.n(l),h=n("DmT9"),v=n.n(h),f=n("vgQg"),p=n.n(f),_=n("NYxO");i.a.use(_.a);var g=new _.a.Store({state:{user:"",page:0,event:{},currentItem:{}},getters:{getPage:function(t){return t.page},getUser:function(t){return t.user},getEvent:function(t){return t.event},getCurrent:function(t){return t.currentItem}},mutations:{setPage:function(t,e){t.page=Number(e)},setUser:function(t,e){t.user=e},setEvent:function(t,e){t.event[e]=!0},setCurrent:function(t,e){t.currentItem=e}}}),x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"hader-0"}},[e("div",{attrs:{id:"header-0-img1"}}),this._v(" "),e("div",{attrs:{id:"header-0-text"}},[this._v("로그인/회원가입")])])}]};var b=n("VU/8")({name:"Header0"},x,!1,function(t){n("oXDx")},"data-v-695d0ad3",null).exports,$={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"hader-1"}},[e("div",{attrs:{id:"header-1-img1"}},[e("img",{staticStyle:{height:"100%"},attrs:{src:n("NRrm")}})]),this._v(" "),e("div",{attrs:{id:"header-1-text"}},[e("img",{staticStyle:{height:"100%"},attrs:{src:n("cMb0")}})])])}]};var w=n("VU/8")({name:"Header1"},$,!1,function(t){n("qqlB")},"data-v-05449710",null).exports,k={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"header-2"}},[e("img",{staticStyle:{height:"100%"},attrs:{src:n("N4Io")}})])}]};var I=n("VU/8")({name:"Header2"},k,!1,function(t){n("L5un")},"data-v-ce868190",null).exports,C={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"hader-3"}},[e("div",{attrs:{id:"header-3-img1"}},[e("img",{staticStyle:{height:"100%"},attrs:{src:n("GpHu")}})]),this._v(" "),e("div",{attrs:{id:"header-3-text"}},[e("img",{staticStyle:{height:"100%"},attrs:{src:n("w2XI")}})])])}]};var P=n("VU/8")({name:"Header3"},C,!1,function(t){n("Z1Hz")},"data-v-22f6ea51",null).exports,N={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"hader-4"}},[e("div",{attrs:{id:"header-4-img1"}},[e("img",{staticStyle:{height:"100%"},attrs:{src:n("7i/n")}})]),this._v(" "),e("div",{attrs:{id:"header-4-text"}},[e("img",{staticStyle:{height:"100%"},attrs:{src:n("F9cq")}})])])}]};var y=n("VU/8")({name:"Header3"},N,!1,function(t){n("HAIV")},"data-v-3bd9022a",null).exports,U={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"header-2"}},[e("div",[this._v("퀴즈 이벤트")]),this._v(" "),e("div",[this._v("정답 힌트")])])}]};var E=n("VU/8")({name:"Header2"},U,!1,function(t){n("OL5W")},"data-v-9656e0dc",null).exports,S={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"header-6"}},[e("h1",[this._v("문제 입력 및 선택")])])}]};var T=n("VU/8")({name:"Header6"},S,!1,function(t){n("t+qX")},"data-v-1ec3bcdf",null).exports,R={name:"box0",data:function(){return{title:"로그인",loginPage:!0,userName:"",userPwd:""}},methods:{login:function(){var t=this;""!==this.userName.trim()&&""!==this.userPwd.trim()?this.$http({url:"/login",method:"get",params:{userName:this.userName,userPwd:this.userPwd}}).then(function(e){0===e.data.code?(alert(t.userName+"님 "+e.data.msg),localStorage.setItem("user_id",t.userName),localStorage.setItem("user_pwd",t.userPwd),t.$store.commit("setUser",t.userName),"admin1"===t.userName?t.$store.commit("setPage",6):"admin2"===t.userName?t.$store.commit("setPage",1):t.$store.commit("setPage",5)):alert(e.data.msg)},function(t){console.error(t),alert("server 접속 오류")}):alert("이름 or 비밀번호 입력 하세요")},addUser:function(){""!==this.userName.trim()&&""!==this.userPwd.trim()?this.$http({url:"/addUser",method:"get",params:{userName:this.userName,userPwd:this.userPwd}}).then(function(t){t.data.code,alert(t.data.msg)},function(t){console.log(t)}):alert("이름 or 비밀번호 입력 하세요")},login_page:function(){this.title="로그인",this.loginPage=!0},addUser_page:function(){this.title="회원가입",this.loginPage=!1}},mounted:function(){this.userName=localStorage.getItem("user_id"),this.userPwd=localStorage.getItem("user_pwd")}},F={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"box0"}},[n("div",[n("div",{attrs:{id:"q-number"}},[t._v(t._s(t.title))])]),t._v(" "),t.loginPage?n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],attrs:{placeholder:"이름 입력"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userPwd,expression:"userPwd"}],attrs:{placeholder:"PASSWORD"},domProps:{value:t.userPwd},on:{input:function(e){e.target.composing||(t.userPwd=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.login}},[t._v("로그인")]),t._v(" "),n("div",{staticClass:"pageChange",on:{click:t.addUser_page}},[t._v("회원가입")])]):t._e(),t._v(" "),t.loginPage?t._e():n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],attrs:{placeholder:"회원가입 이름 입력"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.userPwd,expression:"userPwd"}],attrs:{placeholder:"회원가입 PASSWORD"},domProps:{value:t.userPwd},on:{input:function(e){e.target.composing||(t.userPwd=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.addUser}},[t._v("회원가입")]),t._v(" "),n("div",{staticClass:"pageChange",on:{click:t.login_page}},[t._v("로그인")])])])},staticRenderFns:[]};var V=n("VU/8")(R,F,!1,function(t){n("5D6m")},"data-v-0ef34fea",null).exports,q={name:"Box1",data:function(){return{index:1,title:"",current:this.$store.getters.getCurrent}},mounted:function(){var t=this;this.$store.watch(function(){return t.$store.getters.getCurrent},function(e){t.current=e}),this.$socket.off("viewSelectItem"),this.$socket.on("viewSelectItem",function(e){console.log("selectitem",e),t.index=e.index,t.title=e.title,t.$store.commit("setCurrent",e)})}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"box1"}},[e("div",[e("div",{attrs:{id:"q-number"}},[this._v("문제"+this._s(this.current.index))])]),this._v(" "),e("div",[this._v("\n    "+this._s(this.current.title)+"\n  ")])])},staticRenderFns:[]};var H=n("VU/8")(q,D,!1,function(t){n("PtlJ")},"data-v-787f7e52",null).exports,A={name:"Box2",data:function(){return{config:{},items:[]}},created:function(){var t=this;this.$socket.emit("currentAnswer",{}),this.$socket.off("currentAnswer"),this.$socket.on("currentAnswer",function(e){console.log(e),0!==e.length&&(t.config={index:e[0].index,count:e.length},t.items=e,t.$http({url:"/lank",method:"get",params:{item:t.items}}).then(function(t){0===t.data.code?console.log(t.data):alert(t.data.msg)},function(t){console.error(t),alert("server 접속 오류")}))})}},B={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"box2"}},[n("div",[t._v("문제"+t._s(this.config.index)+" 정답자 "+t._s(this.config.count)+"명")]),t._v(" "),n("div",t._l(t.items,function(e,i){return n("div",{key:i},[n("span",[t._v(t._s(i+1)+"등 : ")]),t._v(t._s(e.user)+" : "+t._s(e.time)+"\n    ")])}),0)])},staticRenderFns:[]};var X=n("VU/8")(A,B,!1,function(t){n("o3DG")},"data-v-5b17fd46",null).exports,O={name:"Box3",data:function(){return{items:[]}},created:function(){var t=this;this.$http({url:"/totalRank",method:"get"}).then(function(e){0===e.data.code&&(t.items=e.data.items)},function(t){console.log(t)})}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{attrs:{id:"box3"}},[n("tr",[n("td",{attrs:{id:"table-item-td"}},[n("div",t._l(t.items,function(e,i){return n("div",{key:i},[t._v("\n          "+t._s(i+1)+"위 : "+t._s(e.id)+"("+t._s(e.total_point)+"점)\n          "+t._s(e.after_rank?(e.befor_rank?e.befor_rank:e.after_rank)-e.after_rank:"-")+"\n        ")])}),0)])])])},staticRenderFns:[]};var W=n("VU/8")(O,L,!1,function(t){n("eS0U")},"data-v-567ff6e6",null).exports,j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("table",{attrs:{id:"box4"}},[e("tr",[e("td",{attrs:{id:"box4-item-td"}},[e("div",[e("div",[this._v("문제"+this._s(this.current.index)+"번 정답")]),this._v(" "),e("div",[this._v(this._s(this.current.list[this.current.answer-1]))])])])])])},staticRenderFns:[]};var M=n("VU/8")({name:"Box4",data:function(){return{current:{}}},mounted:function(){var t=this;this.current=this.$store.getters.getCurrent,this.$store.watch(function(){return t.$store.getters.getCurrent},function(e){t.current=e})}},j,!1,function(t){n("dR6a")},"data-v-33731a42",null).exports,G={name:"Box5",data:function(){return{list:[],current:{},checkClick:!0}},created:function(){var t=this;this.$socket.off("viewSelectItem"),this.$socket.on("viewSelectItem",function(e){t.current=e,t.list=e.list,t.$store.commit("setCurrent",e),t.checkClick=!0})},methods:{checkItem:function(t){if(this.checkClick){var e=!1,n=this.current.answer;Number(n)===Number(t)&&(e=!0);var i={index:this.current.index,user:this.$store.getters.getUser,answer:e,time:(new Date).getTime()};this.$socket.emit("userAnswer",{obj:i}),this.checkClick=!1;var r=document.getElementById(t+"-button");r.setAttribute("class","active"),setTimeout(function(){r.setAttribute("class","")},5e3)}else alert("중복 선택 불가.")}}},J={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"box5"}},[n("div",[t._v("정답 선택")]),t._v(" "),n("div",t._l(t.list,function(e,i){return n("div",{key:i,attrs:{id:i+1+"-button"},on:{click:function(e){return t.checkItem(i+1)}}},[n("span",[t._v(t._s(i+1)+"번 : ")]),t._v(t._s(e)+"\n    ")])}),0)])},staticRenderFns:[]};var Y=n("VU/8")(G,J,!1,function(t){n("nxw9")},"data-v-64d19ded",null).exports,z={name:"box6",data:function(){return{q:[],insertItem:{title:"",answer:"",list:""},deleteItem:"",optionButton:!0}},created:function(){var t=this;this.$http({url:"/itemList",method:"get"}).then(function(e){0===e.data.code?t.q=e.data.obj:alert(e.data.msg)},function(t){console.error(t)})},methods:{selectItem:function(t){this.$socket.emit("viewSelectItem",{obj:this.q[t]})},pageChange:function(t){this.$socket.emit("pageChange",{obj:{page:t}})},insertClick:function(){var t=this,e=this.insertItem.title,n=this.insertItem.list,i=this.insertItem.answer;if(e&&n&&i){var r={title:e,list:n,answer:Number(i)};this.$http({url:"/itemInsert",method:"get",params:{item:r}}).then(function(e){0===e.data.code?(r.list=t.listFunction(r.list),t.q.push(r),alert(e.data.msg)):alert(e.data.msg)},function(t){console.error(t)})}else alert("정상적으로 입력해주세요.")},deleteClick:function(){if(this.deleteItem){var t=Number(this.deleteItem);this.$http({url:"/itemDelete",method:"get",params:{item:t}}).then(function(t){t.data.code,alert(t.data.msg)},function(t){console.error(t)})}else alert("삭제할 문제 번호를 입력해주세요")},pointDelete:function(){this.$http({url:"/pointDelete",method:"get"}).then(function(t){0===t.data.code&&alert("초기화 완료")})},listFunction:function(t){return console.log(t,t.split(",")),t.split(",")},optionFunction:function(){this.optionButton=!this.optionButton}}},Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"box6"}},[n("div",t._l(t.q,function(e,i){return n("div",{key:i},[n("span",{staticClass:"send_button_class",on:{click:function(e){return t.selectItem(i)}}},[t._v("--- "+t._s(e.index)+" 번 문제: "+t._s(e.title)+" ---")]),n("br"),t._v(" "),n("span",[t._v("-> "+t._s(i+1)+" 번 문제 정답 : "+t._s(e.answer))]),n("br"),t._v(" "),t._l(e.list,function(e,i){return n("span",{key:i},[t._v("\n        "+t._s(i+1)+"번 :"+t._s(e)),n("br")])})],2)}),0),t._v(" "),t.optionButton?n("div",{attrs:{id:"option_area"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.insertItem.title,expression:"insertItem.title"}],attrs:{placeholder:"문제 입력"},domProps:{value:t.insertItem.title},on:{input:function(e){e.target.composing||t.$set(t.insertItem,"title",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.insertItem.list,expression:"insertItem.list"}],attrs:{placeholder:"힌트 ex) 1,2,3,4"},domProps:{value:t.insertItem.list},on:{input:function(e){e.target.composing||t.$set(t.insertItem,"list",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.insertItem.answer,expression:"insertItem.answer"}],attrs:{placeholder:"정답 ex) 2"},domProps:{value:t.insertItem.answer},on:{input:function(e){e.target.composing||t.$set(t.insertItem,"answer",e.target.value)}}}),t._v(" "),n("button",{staticClass:"button_1",on:{click:t.insertClick}},[t._v("입력")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.deleteItem,expression:"deleteItem"}],attrs:{placeholder:"문제 삭제 ex) 2"},domProps:{value:t.deleteItem},on:{input:function(e){e.target.composing||(t.deleteItem=e.target.value)}}}),t._v(" "),n("button",{staticClass:"button_1",on:{click:t.deleteClick}},[t._v("삭제")]),t._v(" "),n("button",{staticClass:"button_2",on:{click:function(e){return t.pageChange(1)}}},[t._v("문제화면")]),t._v(" "),n("button",{staticClass:"button_2",on:{click:function(e){return t.pageChange(4)}}},[t._v("정답")]),t._v(" "),n("button",{staticClass:"button_2",on:{click:function(e){return t.pageChange(2)}}},[t._v("문제정답자")]),t._v(" "),n("button",{staticClass:"button_2",on:{click:function(e){return t.pageChange(3)}}},[t._v("순위")]),t._v(" "),n("button",{staticClass:"button_2",on:{click:t.pointDelete}},[t._v("point 초기화")])]):t._e(),t._v(" "),n("div",{attrs:{id:"option_button"},on:{click:t.optionFunction}},[t._v("X")])])},staticRenderFns:[]};var Z=n("VU/8")(z,Q,!1,function(t){n("OSXF")},"data-v-2b46939c",null).exports;i.a.prototype.$http=m.a,i.a.prototype.$io=v.a,i.a.prototype.$socket=v()("http://13.124.239.151:80"),i.a.prototype.$config=p.a,i.a.config.productionTip=!1,i.a.component("header-0",b),i.a.component("header-1",w),i.a.component("header-2",I),i.a.component("header-3",P),i.a.component("header-4",y),i.a.component("header-5",E),i.a.component("header-6",T),i.a.component("box-0",V),i.a.component("box-1",H),i.a.component("box-2",X),i.a.component("box-3",W),i.a.component("box-4",M),i.a.component("box-5",Y),i.a.component("box-6",Z),new i.a({el:"#app",store:g,router:d,components:{App:s},template:"<App/>"})},NRrm:function(t,e,n){t.exports=n.p+"public/img/img3.b4b804f.png"},OL5W:function(t,e){},OSXF:function(t,e){},PtlJ:function(t,e){},TYXI:function(t,e){},Z1Hz:function(t,e){},cMb0:function(t,e,n){t.exports=n.p+"public/img/text1.6769567.png"},dR6a:function(t,e){},eS0U:function(t,e){},kSLT:function(t,e){},nxw9:function(t,e){},o3DG:function(t,e){},oXDx:function(t,e){},qqlB:function(t,e){},"t+qX":function(t,e){},vgQg:function(t,e){var n=this;t.exports=function(){n.config={};return{setConfig:function(t,e){n.config[t]=e},getConfig:function(t){return n.config[t]}}}()},w2XI:function(t,e,n){t.exports=n.p+"public/img/text3.1dd8fd1.png"}},["NHnr"]);
//# sourceMappingURL=app.acdcaa4e0d83f3018cde.js.map