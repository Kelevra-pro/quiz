(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{19:function(e,t,n){e.exports={Drawer:"Drawer_Drawer__3_iLS",close:"Drawer_close__1XXn3",active:"Drawer_active__1Tebi"}},21:function(e,t,n){e.exports={MenuToggle:"MenuToggle_MenuToggle__1CLC8",open:"MenuToggle_open__3zE6G"}},24:function(e,t,n){e.exports={Quiz:"Quiz_Quiz__1yyGu",QuizWrapper:"Quiz_QuizWrapper__1631-"}},25:function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__cMHbV",Question:"ActiveQuiz_Question__1CS_f"}},26:function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__q6Vmd",success:"AnswerItem_success__3SYnL",error:"AnswerItem_error__1lmVV"}},27:function(e,t,n){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__12ppt",success:"FinishedQuiz_success__2u_Nv",error:"FinishedQuiz_error__1bTkk"}},28:function(e,t,n){e.exports={Button:"Button_Button__3wdF-",success:"Button_success__3ecR4",error:"Button_error__3XYfa",primary:"Button_primary__15iUk"}},29:function(e,t,n){e.exports={Loader:"Loader_Loader__2-ISs","lds-ellipsis1":"Loader_lds-ellipsis1__2WJVo","lds-ellipsis2":"Loader_lds-ellipsis2__39ji0","lds-ellipsis3":"Loader_lds-ellipsis3__1uqtr",center:"Loader_center__277z_"}},30:function(e,t,n){e.exports={Auth:"Auth_Auth__32a7B",AuthForm:"Auth_AuthForm__25-Uw"}},31:function(e,t,n){e.exports={Input:"Input_Input__2E9E_",invalid:"Input_invalid__3t0hQ"}},43:function(e,t,n){e.exports={Layout:"Layout_Layout__14J9O"}},44:function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2N8jL"}},47:function(e,t,n){e.exports={AnswersList:"AnswersList_AnswersList__2h5yS"}},48:function(e,t,n){e.exports={QuizList:"QuizList_QuizList__1IGXz"}},50:function(e,t,n){e.exports={QuizCreator:"QuizCreator_QuizCreator__1n-tr"}},51:function(e,t,n){e.exports={Select:"Select_Select__cjPN2"}},52:function(e,t,n){e.exports=n(83)},57:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(42),s=n.n(i),o=(n(57),n(2)),l=n(3),c=n(5),u=n(4),d=n(6),p=n(43),m=n.n(p),h=n(21),v=n.n(h),f=function(e){var t=[v.a.MenuToggle,"fa"];return e.isOpen?(t.push("fa-times"),t.push(v.a.open)):t.push("fa-bars"),r.a.createElement("i",{className:t.join(" "),onClick:e.onToggle})},b=n(19),g=n.n(b),y=n(12),O=n(44),w=n.n(O),_=function(e){return r.a.createElement("div",{className:w.a.Backdrop,onClick:e.onClick})},E=[{to:"/",label:"\u0421\u043f\u0438\u0441\u043e\u043a",exact:!0},{to:"/auth",label:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f",exact:!1},{to:"/quiz-creator",label:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442",exact:!1}],j=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).clickHandler=function(){n.props.onClose()},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderLinks",value:function(){var e=this;return E.map((function(t,n){return r.a.createElement("li",{key:n},r.a.createElement(y.c,{to:t.to,exact:t.exact,activeClassName:g.a.active,onClick:e.clickHandler},t.label))}))}},{key:"render",value:function(){var e=[g.a.Drawer];return this.props.isOpen||e.push(g.a.close),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:e.join(" ")},r.a.createElement("ul",null,this.renderLinks())),this.props.isOpen?r.a.createElement(_,{onClick:this.props.onClose}):null)}}]),t}(a.Component),k=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={menu:!1},n.toggleMenuHandler=function(){n.setState({menu:!n.state.menu})},n.menuCloseHandler=function(){n.setState({menu:!1})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:m.a.Layout},r.a.createElement(j,{isOpen:this.state.menu,onClose:this.menuCloseHandler}),r.a.createElement(f,{onToggle:this.toggleMenuHandler,isOpen:this.state.menu}),r.a.createElement("main",null,this.props.children))}}]),t}(a.Component),C=n(15),z=n(7),Q=n.n(z),A=n(13),x=n(14),q=n(24),S=n.n(q),L=n(25),F=n.n(L),H=n(47),N=n.n(H),I=n(26),P=n.n(I),D=function(e){var t=[P.a.AnswerItem];return e.state&&t.push(P.a[e.state]),r.a.createElement("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)}},e.answer.text)},M=function(e){return r.a.createElement("ul",{className:N.a.AnswersList},e.answers.map((function(t,n){return r.a.createElement(D,{key:n,answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null})})))},V=function(e){return r.a.createElement("div",{className:F.a.ActiveQuiz},r.a.createElement("p",{className:F.a.Question},r.a.createElement("span",null,r.a.createElement("strong",null,e.answerNumber,"."),"\xa0",e.question),r.a.createElement("small",null,e.answerNumber," \u0438\u0437 ",e.quizLength)),r.a.createElement(M,{state:e.state,answers:e.answers,onAnswerClick:e.onAnswerClick}))},B=n(27),T=n.n(B),W=n(28),R=n.n(W),J=function(e){var t=[R.a.Button,R.a[e.type]];return r.a.createElement("button",{onClick:e.onClick,className:t.join(" "),disabled:e.disabled},e.children)},U=function(e){var t=Object.keys(e.results).reduce((function(t,n){return"success"===e.results[n]&&t++,t}),0);return r.a.createElement("div",{className:T.a.FinishedQuiz},r.a.createElement("ul",null,e.quiz.map((function(t,n){var a=["fa","error"===e.results[t.id]?"fa-times":"fa-check",T.a[e.results[t.id]]];return r.a.createElement("li",{key:n},r.a.createElement("strong",null,n+1),".\xa0",t.question,r.a.createElement("i",{className:a.join(" ")}))}))),r.a.createElement("p",null,"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e ",t," \u0438\u0437 ",e.quiz.length),r.a.createElement("div",null,r.a.createElement(J,{onClick:e.onRetry,type:"primary"},"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c"),r.a.createElement(y.b,{to:"/"},r.a.createElement(J,{onClick:e.onRetry,type:"success"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"))))},X=n(18),G=n.n(X),K=G.a.create({baseURL:"https://react-quiz-8d2a4.firebaseio.com/"}),Y=n(29),$=n.n(Y),Z=function(e){return r.a.createElement("div",{className:$.a.center},r.a.createElement("div",{className:$.a.Loader},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},ee=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={results:{},isFinished:!1,activeQuestion:0,answerState:null,quiz:[],loading:!0},n.onAnswerClickHandler=function(e){if(n.state.answerState){var t=Object.keys(n.state.answerState)[0];if("success"===n.state.answerState[t])return}var a=n.state.quiz[n.state.activeQuestion],r=n.state.results;if(a.rightAnswerId===e){r[a.id]||(r[a.id]="success"),n.setState({answerState:Object(x.a)({},e,"success"),results:r});var i=window.setTimeout((function(){n.isQuizFinished()?n.setState({isFinished:!0}):n.setState({activeQuestion:n.state.activeQuestion+1,answerState:null}),window.clearTimeout(i)}),1e3)}else r[a.id]="error",n.setState({answerState:Object(x.a)({},e,"error"),results:r})},n.retryHandler=function(){n.setState({activeQuestion:0,answerState:null,isFinished:!1,results:{}})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"isQuizFinished",value:function(){return this.state.activeQuestion+1===this.state.quiz.length}},{key:"componentDidMount",value:function(){var e=Object(A.a)(Q.a.mark((function e(){var t,n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.get("/quizes/".concat(this.props.match.params.id,".json"));case 3:t=e.sent,n=t.data,this.setState({quiz:n,loading:!1}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:S.a.Quiz},r.a.createElement("div",{className:S.a.QuizWrapper},r.a.createElement("h1",null,"\u041e\u0442\u0432\u0435\u0442\u044c\u0442\u0435 \u043d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b"),this.state.loading?r.a.createElement(Z,null):this.state.isFinished?r.a.createElement(U,{results:this.state.results,quiz:this.state.quiz,onRetry:this.retryHandler}):r.a.createElement(V,{answers:this.state.quiz[this.state.activeQuestion].answers,question:this.state.quiz[this.state.activeQuestion].question,onAnswerClick:this.onAnswerClickHandler,quizLength:this.state.quiz.length,answerNumber:this.state.activeQuestion+1,state:this.state.answerState})))}}]),t}(a.Component),te=n(48),ne=n.n(te),ae=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={quizes:[],loading:!0},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderQuizzes",value:function(){return this.state.quizes.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(y.c,{to:"/quiz/"+e.id},e.name))}))}},{key:"componentDidMount",value:function(){var e=Object(A.a)(Q.a.mark((function e(){var t,n;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K.get("/quizes.json");case 3:t=e.sent,n=[],Object.keys(t.data).forEach((function(e,t){n.push({id:e,name:"\u0422\u0435\u0441\u0442 \u2116".concat(t+1)})})),this.setState({quizes:n,loading:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:ne.a.QuizList},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u0435\u0441\u0442\u043e\u0432"),this.state.loading?r.a.createElement(Z,null):r.a.createElement("ul",null,this.renderQuizzes())))}}]),t}(a.Component),re=n(49),ie=n.n(re),se=n(30),oe=n.n(se),le=n(31),ce=n.n(le);function ue(e){var t=e.valid,n=e.touched,a=e.shouldValidate;return!t&&n&&a}var de=function(e){var t=e.type||"text",n=[ce.a.Input],a="".concat(t,"-").concat(Math.random());return ue(e)&&n.push(ce.a.invalid),r.a.createElement("div",{className:n.join(" ")},r.a.createElement("label",{htmlFor:a},e.label),r.a.createElement("input",{type:t,id:a,value:e.value,onChange:e.onChange}),ue(e)?r.a.createElement("span",null,e.errorMessage||"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"):null)};function pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pe(Object(n),!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var he=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isFormValid:!1,formControls:{email:{value:"",type:"email",label:"Email",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email",valid:!1,touched:!1,validation:{required:!0,email:!0}},password:{value:"",type:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",errorMessage:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",valid:!1,touched:!1,validation:{required:!0,minLength:6}}}},n.loginHandler=Object(A.a)(Q.a.mark((function e(){var t,a;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={email:n.state.formControls.email.value,password:n.state.formControls.password.value,returnSecureToken:!0},e.prev=1,e.next=4,G.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCvxuFWQ93099gBd9LQyvOOKWbAyztA4E8",t);case 4:a=e.sent,console.log(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),n.registerHandler=Object(A.a)(Q.a.mark((function e(){var t,a;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={email:n.state.formControls.email.value,password:n.state.formControls.password.value,returnSecureToken:!0},e.prev=1,e.next=4,G.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvxuFWQ93099gBd9LQyvOOKWbAyztA4E8",t);case 4:a=e.sent,console.log(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),n.submitHandler=function(e){e.preventDefault()},n.onChangeHandler=function(e,t){var a=me({},n.state.formControls),r=me({},a[t]);r.value=e.target.value,r.touched=!0,r.valid=n.validateControl(r.value,r.validation),a[t]=r;var i=!0;Object.keys(a).forEach((function(e){i=a[e].valid&&i})),n.setState({formControls:a,isFormValid:i})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"validateControl",value:function(e,t){if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),t.email&&(n=ie.a.email(e)&&n),t.minLength&&(n=e.length>=t.minLength&&n),n}},{key:"renderInputs",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return r.a.createElement(de,{key:t+n,type:a.type,value:a.value,valid:a.valid,touched:a.touched,label:a.label,shouldValidate:!!a.validation,errorMessage:a.errorMessage,onChange:function(n){return e.onChangeHandler(n,t)}})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:oe.a.Auth},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"),r.a.createElement("form",{onSubmit:this.submitHandler,className:oe.a.AuthForm},this.renderInputs(),r.a.createElement(J,{type:"success",onClick:this.loginHandler,disabled:!this.state.isFormValid},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(J,{type:"primary",onClick:this.registerHandler,disabled:!this.state.isFormValid},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))))}}]),t}(a.Component),ve=n(50),fe=n.n(ve),be=n(51),ge=n.n(be),ye=function(e){var t="".concat(e.label,"-").concat(Math.random());return r.a.createElement("div",{className:ge.a.Select},r.a.createElement("label",{htmlFor:t},e.label),r.a.createElement("select",{id:t,value:e.value,onChange:e.onChange},e.options.map((function(e,t){return r.a.createElement("option",{value:e.value,key:e.value+t},e.text)}))))};function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function we(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(n),!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{validation:t,valid:!t,touched:!1,value:""})}function _e(e){var t=!0;for(var n in e)e.hasOwnProperty(n)&&(t=e[n].valid&&t);return t}var Ee=function(e){return e.children};function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ke(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(Object(n),!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ce(e){return we({label:"\u0412\u0430\u0440\u0438\u0430\u043d\u0442 ".concat(e),errorMessage:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",id:e},{required:!0})}function ze(){return{question:we({label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u043f\u0440\u043e\u0441",errorMessage:"\u0412\u043e\u043f\u0440\u043e\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"},{required:!0}),option1:Ce(1),option2:Ce(2),option3:Ce(3),option4:Ce(4)}}var Qe=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={quiz:[],isFormValid:!1,rightAnswerId:1,formControls:ze()},n.submitHandler=function(e){e.preventDefault()},n.addQuestionHandler=function(e){e.preventDefault();var t=n.state.quiz.concat(),a=t.length+1,r=n.state.formControls,i=r.question,s=r.option1,o=r.option2,l=r.option3,c=r.option4,u={question:i.value,id:a,rightAnswerId:n.state.rightAnswerId,answers:[{text:s.value,id:s.id},{text:o.value,id:o.id},{text:l.value,id:l.id},{text:c.value,id:c.id}]};t.push(u),n.setState({quiz:t,isFormValid:!1,rightAnswerId:1,formControls:ze()})},n.createQuizHandler=function(){var e=Object(A.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,K.post("/quizes.json",n.state.quiz);case 4:n.setState({quiz:[],isFormValid:!1,rightAnswerId:1,formControls:ze()}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),n.changeHandler=function(e,t){var a=ke({},n.state.formControls),r=ke({},a[t]);r.touched=!0,r.value=e,r.valid=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!t)return!0;var n=!0;return t.required&&(n=""!==e.trim()&&n),n}(r.value,r.validation),a[t]=r,n.setState({formControls:a,isFormValid:_e(a)})},n.selectChangeHandler=function(e){n.setState({rightAnswerId:+e.target.value})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"renderControls",value:function(){var e=this;return Object.keys(this.state.formControls).map((function(t,n){var a=e.state.formControls[t];return r.a.createElement(Ee,{key:t+n},r.a.createElement(de,{label:a.label,value:a.value,valid:a.valid,shouldValidate:!!a.validation,touched:a.touched,errorMessage:a.errorMessage,onChange:function(n){return e.changeHandler(n.target.value,t)}}),0===n?r.a.createElement("hr",null):null)}))}},{key:"render",value:function(){var e=r.a.createElement(ye,{label:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442",value:this.state.rightAnswerId,onChange:this.selectChangeHandler,options:[{text:1,value:1},{text:2,value:2},{text:3,value:3},{text:4,value:4}]});return r.a.createElement("div",{className:fe.a.QuizCreator},r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"),r.a.createElement("form",{onSubmit:this.submitHandler},this.renderControls(),e,r.a.createElement(J,{type:"primary",onClick:this.addQuestionHandler,disabled:!this.state.isFormValid},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441"),r.a.createElement(J,{type:"success",onClick:this.createQuizHandler,disabled:0===this.state.quiz.length},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u0435\u0441\u0442"))))}}]),t}(a.Component),Ae=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(k,null,r.a.createElement(C.c,null,r.a.createElement(C.a,{path:"/auth",component:he}),r.a.createElement(C.a,{path:"/quiz-creator",component:Qe}),r.a.createElement(C.a,{path:"/quiz/:id",component:ee}),r.a.createElement(C.a,{path:"/",component:ae})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var xe=r.a.createElement(y.a,null,r.a.createElement(Ae,null));s.a.render(xe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[52,1,2]]]);
//# sourceMappingURL=main.25804550.chunk.js.map