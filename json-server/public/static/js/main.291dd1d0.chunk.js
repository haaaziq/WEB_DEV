(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{157:function(e,t,s){},158:function(e,t,s){"use strict";s.r(t);var n=s(2),c=s.n(n),r=s(14),a=s.n(r),o=(s(96),s(97),s(98),s(99),s(22)),i=s(23),l=s(25),j=s(24),d=s(3),m=s(6),h=s(1),b=function(){return Object(h.jsxs)("div",{className:"col-12 text-center",children:[Object(h.jsx)("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw fa-lg text-primary"}),Object(h.jsx)("p",{children:"Loading . . ."})]})},u="http://localhost:5000/";function O(e){var t=e.dish;return Object(h.jsx)(d.d,{children:Object(h.jsxs)(m.b,{to:"/menu/".concat(t.id),children:[Object(h.jsx)(d.g,{width:"100%",src:u+t.image,alt:t.name}),Object(h.jsx)(d.h,{children:Object(h.jsx)(d.k,{children:t.name})})]})})}var x=function(e){var t=e.dishes.dishes.map((function(e){return Object(h.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(h.jsx)(O,{dish:e})},e.id)}));return e.dishes.isLoading?Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)(b,{})})}):e.dishes.errMsg?Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("h4",{children:e.dishes.errMsg})})}):Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(d.a,{children:[Object(h.jsx)(d.b,{children:Object(h.jsx)(m.b,{to:"/home",children:"Home"})}),Object(h.jsx)(d.b,{active:!0,children:"Menu"})]}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("h3",{children:"MENU"})}),Object(h.jsx)("hr",{})]}),Object(h.jsx)("div",{className:"row",children:t})]})},f=s(15),p=s(9),g=function(e){return e&&e.length},N=function(e){return function(t){return!t||t.length<=e}},v=function(e){return function(t){return t&&t.length>=e}},y=function(e){return!isNaN(Number(e))},w=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},M=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).handleSubmit=n.handleSubmit.bind(Object(f.a)(n)),n}return Object(i.a)(s,[{key:"handleSubmit",value:function(e){this.props.postFeedback(e.firstname,e.lastname,e.telnum,e.email,e.agree,e.contactType,e.message),this.props.resetFeedbackForm()}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(d.a,{children:[Object(h.jsx)(d.b,{children:Object(h.jsx)(m.b,{to:"/home",children:"Home"})}),Object(h.jsx)(d.b,{active:!0,children:"Contact Us"})]}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("h3",{children:"Contact Us"})}),Object(h.jsx)("hr",{})]}),Object(h.jsxs)("div",{className:"row row-content",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("h3",{children:"Location Information"})}),Object(h.jsxs)("div",{className:"col-12 col-sm-4 offset-sm-1",children:[Object(h.jsx)("h5",{children:"Our Address"}),Object(h.jsxs)("address",{children:["121, Clear Water Bay Road",Object(h.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(h.jsx)("br",{}),"HONG KONG",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-phone"}),": +852 1234 5678",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-fax"}),": +852 8765 4321",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-envelope"}),": ",Object(h.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(h.jsx)("div",{className:"col-12 col-sm-6 offset-sm-1",children:Object(h.jsx)("h5",{children:"Map of our Location"})}),Object(h.jsx)("div",{className:"col-12 col-sm-11 offset-sm-1",children:Object(h.jsxs)("div",{className:"btn-group",role:"group",children:[Object(h.jsxs)("a",{role:"button",className:"btn btn-primary",href:"tel:+85212345678",children:[Object(h.jsx)("i",{className:"fa fa-phone"})," Call"]}),Object(h.jsxs)("a",{role:"button",className:"btn btn-info",href:"https://www.skype.com/en/",children:[Object(h.jsx)("i",{className:"fa fa-skype"})," Skype"]}),Object(h.jsxs)("a",{role:"button",className:"btn btn-success",href:"mailto:confusion@food.net",children:[Object(h.jsx)("i",{className:"fa fa-envelope-o"})," Email"]})]})})]}),Object(h.jsxs)("div",{className:"row row-content",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("h3",{children:"Send us Your Feedback"})}),Object(h.jsx)("div",{className:"col-12 col-md-9",children:Object(h.jsxs)(p.Form,{model:"feedback",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(h.jsxs)(d.B,{className:"form-group",children:[Object(h.jsx)(d.r,{htmlFor:"firstname",md:2,children:"First Name"}),Object(h.jsxs)(d.l,{md:10,children:[Object(h.jsx)(p.Control.text,{model:".firstname",name:"firstname",id:"firstname",placeholder:"First Name",className:"form-control",validators:{required:g,minLength:v(3),maxLength:N(15)}}),Object(h.jsx)(p.Errors,{className:"text-danger",model:".firstname",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(h.jsxs)(d.B,{className:"form-group",children:[Object(h.jsx)(d.r,{htmlFor:"lastname",md:2,children:"Last Name"}),Object(h.jsxs)(d.l,{md:10,children:[Object(h.jsx)(p.Control.text,{model:".lastname",name:"lastname",id:"lastname",placeholder:"Last Name",className:"form-control",validators:{required:g,minLength:v(3),maxLength:N(15)}}),Object(h.jsx)(p.Errors,{className:"text-danger",model:".lastname",show:"touched",messages:{required:"Required ",minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]})]}),Object(h.jsxs)(d.B,{className:"form-group",children:[Object(h.jsx)(d.r,{htmlFor:"telnum",md:2,children:"Tel./Mob."}),Object(h.jsxs)(d.l,{md:10,children:[Object(h.jsx)(p.Control.text,{model:".telnum",name:"telnum",id:"telnum",placeholder:"Tel. Number",className:"form-control",validators:{required:g,minLength:v(6),maxLength:N(15),isNumber:y}}),Object(h.jsx)(p.Errors,{className:"text-danger",model:".telnum",show:"touched",messages:{required:"Required ",isNumber:" Must be a Number",minLength:"Must be greater than 5 numbers",maxLength:"Must be 15 numbers or less"}})]})]}),Object(h.jsxs)(d.B,{className:"form-group",children:[Object(h.jsx)(d.r,{htmlFor:"email",md:2,children:"Email"}),Object(h.jsxs)(d.l,{md:10,children:[Object(h.jsx)(p.Control.text,{model:".email",name:"email",id:"email",placeholder:"Email",className:"form-control",validators:{required:g,validEmail:w}}),Object(h.jsx)(p.Errors,{className:"text-danger",model:".email",show:"touched",messages:{required:"Required ",validEmail:"Invalid Email id"}})]})]}),Object(h.jsxs)(d.B,{className:"form-group",children:[Object(h.jsx)(d.l,{md:{size:6,offset:2},children:Object(h.jsx)("div",{className:"form-check",children:Object(h.jsxs)(d.r,{check:!0,children:[Object(h.jsx)(p.Control.checkbox,{model:".agree",name:"agree",className:"form-check-input"})," "," ",Object(h.jsx)("b",{children:"May we contact you?"})]})})}),Object(h.jsx)(d.l,{md:{size:3,offset:1},children:Object(h.jsxs)(p.Control.select,{model:".contactType",name:"contactType",className:"form-control",children:[Object(h.jsx)("option",{children:"Tel."}),Object(h.jsx)("option",{children:"Email"})]})})]}),Object(h.jsxs)(d.B,{className:"form-group",children:[Object(h.jsx)(d.r,{htmlFor:"message",md:2,children:"Your Feedback"}),Object(h.jsx)(d.l,{md:10,children:Object(h.jsx)(p.Control.textarea,{model:".message",name:"message",id:"message",rows:"12",placeholder:"Your Feedback...",className:"form-control"})})]}),Object(h.jsx)(d.B,{className:"form-group",children:Object(h.jsx)(d.l,{md:{size:10,offset:2},children:Object(h.jsx)(d.c,{type:"submit",color:"primary",children:"Send Feedback"})})})]})})]})]})}}]),s}(n.Component),k=s(19),L=function(e){return function(t){return!t||t.length<=e}},C=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={isCommentModalOpen:!1},n.toggleCommentModal=n.toggleCommentModal.bind(Object(f.a)(n)),n.handleCommentSubmit=n.handleCommentSubmit.bind(Object(f.a)(n)),n}return Object(i.a)(s,[{key:"toggleCommentModal",value:function(){this.setState({isCommentModalOpen:!this.state.isCommentModalOpen})}},{key:"handleCommentSubmit",value:function(e){this.toggleCommentModal(),this.props.postComment(this.props.dishId,e.rating,e.author,e.comment),alert("new comment posted by: "+e.author)}},{key:"render",value:function(){var e,t=this;return Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsxs)(d.c,{outline:!0,onClick:this.toggleCommentModal,children:[Object(h.jsx)("span",{className:"fa fa-pencil fa-lg"})," Submit Comment"]}),Object(h.jsxs)(d.t,{isOpen:this.state.isCommentModalOpen,toggle:this.toggleCommentModal,children:[Object(h.jsx)(d.v,{toggle:this.toggleCommentModal,children:Object(h.jsx)("b",{children:"Submit Comment"})}),Object(h.jsx)(d.u,{className:"mx-3",children:Object(h.jsxs)(p.LocalForm,{onSubmit:function(e){return t.handleCommentSubmit(e)},children:[Object(h.jsxs)(d.B,{className:"form-group",children:[Object(h.jsx)(d.r,{htmlFor:"rating",children:"Rating"}),Object(h.jsxs)(p.Control.select,{model:".rating",name:"rating",id:"rating",className:"form-control",children:[Object(h.jsx)("option",{children:"1"}),Object(h.jsx)("option",{children:"2"}),Object(h.jsx)("option",{children:"3"}),Object(h.jsx)("option",{children:"4"}),Object(h.jsx)("option",{children:"5"})]})]}),Object(h.jsxs)(d.B,{className:"form-group",children:[Object(h.jsx)(d.r,{htmlFor:"author",children:"Your Name"}),Object(h.jsx)(p.Control.text,{model:".author",name:"author",id:"author",placeholder:"Your Name",className:"form-control",validators:{minLength:(e=3,function(t){return t&&t.length>=e}),maxLength:L(15)}}),Object(h.jsx)(p.Errors,{className:"text-danger",model:".author",show:"touched",messages:{minLength:"Must be greater than 2 characters",maxLength:"Must be 15 characters or less"}})]}),Object(h.jsxs)(d.B,{className:"form-group",children:[Object(h.jsx)(d.r,{htmlFor:"comment",children:"Comment"}),Object(h.jsx)(p.Control.textarea,{model:".comment",name:"comment",id:"comment",rows:"6",className:"form-control"})]}),Object(h.jsx)(d.B,{className:"form-group",children:Object(h.jsx)(d.c,{type:"submit",color:"primary",children:"Submit"})})]})})]})]})}}]),s}(n.Component);function E(e){var t=e.date;return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}function F(e){var t=e.commentsErrMsg,s=e.comments,n=e.postComment,r=e.dishId;if(t)return Object(h.jsx)("h4",{children:t});if(null!=s){var a=s.map((function(e){return Object(h.jsx)(k.Fade,{in:!0,children:Object(h.jsxs)(c.a.Fragment,{children:[Object(h.jsx)("p",{children:e.comment}),Object(h.jsxs)("p",{children:["-- ",e.author,", ",Object(h.jsx)(E,{date:e.date})," "]})]},e.id)})}));return Object(h.jsxs)("div",{className:"col-12 col-md-5 m-1",children:[Object(h.jsx)("h4",{children:Object(h.jsx)("strong",{children:"Comments"})}),Object(h.jsx)("ul",{className:"list-unstyled",children:Object(h.jsx)(k.Stagger,{in:!0,children:a})}),Object(h.jsx)(C,{postComment:n,dishId:r})]})}return Object(h.jsx)("div",{})}function S(e){var t=e.dish;return null!=t?Object(h.jsx)("div",{className:"col-12 col-md-5 m-1",children:Object(h.jsx)(k.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(h.jsxs)(d.d,{children:[Object(h.jsx)(d.g,{top:!0,src:u+t.image,alt:t.name}),Object(h.jsxs)(d.e,{children:[Object(h.jsx)(d.k,{children:Object(h.jsx)("strong",{children:t.name})}),Object(h.jsx)(d.j,{children:t.description})]})]})})}):Object(h.jsx)("div",{})}var T=function(e){return e.isLoading?Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)(b,{})})}):e.errMsg?Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("h4",{children:e.errMsg})})}):Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(d.a,{children:[Object(h.jsx)(d.b,{children:Object(h.jsx)(m.b,{to:"/menu",children:"Menu"})}),Object(h.jsx)(d.b,{active:!0,children:e.dish.name})]}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("h3",{children:e.dish.name})}),Object(h.jsx)("hr",{})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)(S,{dish:e.dish}),Object(h.jsx)(F,{commentsErrMsg:e.commentsErrMsg,comments:e.comments,postComment:e.postComment,dishId:e.dish.id})]})]})},D=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(o.a)(this,s),(n=t.call(this,e)).state={isNavOpen:!1,isModalOpen:!1},n.toggleNav=n.toggleNav.bind(Object(f.a)(n)),n.toggleModal=n.toggleModal.bind(Object(f.a)(n)),n.handleLogin=n.handleLogin.bind(Object(f.a)(n)),n}return Object(i.a)(s,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"toggleModal",value:function(){this.setState({isModalOpen:!this.state.isModalOpen})}},{key:"handleLogin",value:function(e){this.toggleModal(),alert("username: "+this.username.value+", password: "+this.password.value+", remember: "+this.remember.checked),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.y,{dark:!0,expand:"md",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(d.A,{onClick:this.toggleNav}),Object(h.jsx)(d.z,{className:"mr-auto",href:"/",children:Object(h.jsx)("img",{src:"assets/images/logo.png",height:"30",width:"41",alt:"Ristorante Con Fusion"})}),Object(h.jsxs)(d.m,{isOpen:this.state.isNavOpen,navbar:!0,children:[Object(h.jsxs)(d.w,{navbar:!0,children:[Object(h.jsx)(d.x,{children:Object(h.jsxs)(m.c,{className:"nav-link",to:"/home",children:[Object(h.jsx)("span",{className:"fa fa-home fa-lg"})," Home"]})}),Object(h.jsx)(d.x,{children:Object(h.jsxs)(m.c,{className:"nav-link",to:"/aboutus",children:[Object(h.jsx)("span",{className:"fa fa-info fa-lg"})," About Us"]})}),Object(h.jsx)(d.x,{children:Object(h.jsxs)(m.c,{className:"nav-link",to:"/menu",children:[Object(h.jsx)("span",{className:"fa fa-list fa-lg"})," Menu"]})}),Object(h.jsx)(d.x,{children:Object(h.jsxs)(m.c,{className:"nav-link",to:"/contactus",children:[Object(h.jsx)("span",{className:"fa fa-address-card fa-lg"})," Contact Us"]})})]}),Object(h.jsx)(d.w,{className:"ml-auto",navbar:!0,children:Object(h.jsx)(d.x,{children:Object(h.jsxs)(d.c,{outline:!0,onClick:this.toggleModal,children:[Object(h.jsx)("span",{className:"fa fa-sign-in fa-lg"})," Login"]})})})]})]})}),Object(h.jsx)(d.q,{children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("div",{className:"row row-header",children:Object(h.jsxs)("div",{className:"col-12 col-sm-6",children:[Object(h.jsx)("h1",{children:"Ristorante con Fusion"}),Object(h.jsx)("p",{children:"We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!"})]})})})}),Object(h.jsxs)(d.t,{isOpen:this.state.isModalOpen,toggle:this.toggleModal,children:[Object(h.jsx)(d.v,{toggle:this.toggleModal,children:"Login"}),Object(h.jsx)(d.u,{children:Object(h.jsxs)(d.n,{onSubmit:this.handleLogin,children:[Object(h.jsxs)(d.o,{children:[Object(h.jsx)(d.r,{htmlFor:"username",children:"Username"}),Object(h.jsx)(d.p,{type:"text",id:"username",name:"username",innerRef:function(t){return e.username=t}})]}),Object(h.jsxs)(d.o,{children:[Object(h.jsx)(d.r,{htmlFor:"password",children:"Password"}),Object(h.jsx)(d.p,{type:"password",id:"password",name:"password",innerRef:function(t){return e.password=t}})]}),Object(h.jsx)(d.o,{check:!0,children:Object(h.jsxs)(d.r,{check:!0,children:[Object(h.jsx)(d.p,{type:"checkbox",name:"remember",innerRef:function(t){return e.remember=t}}),"Remember me"]})}),Object(h.jsx)(d.o,{children:Object(h.jsx)(d.c,{color:"primary",value:"submit",type:"submit",children:"Login"})})]})})]})]})}}]),s}(n.Component);var I=function(e){return Object(h.jsx)("div",{className:"footer",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row justify-content-center",children:[Object(h.jsxs)("div",{className:"col-4 offset-1 col-sm-2",children:[Object(h.jsx)("h5",{children:"Links"}),Object(h.jsxs)("ul",{className:"list-unstyled",children:[Object(h.jsx)("li",{children:Object(h.jsx)(m.b,{to:"/home",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(m.b,{to:"/aboutus",children:"About Us"})}),Object(h.jsx)("li",{children:Object(h.jsx)(m.b,{to:"/menu",children:"Menu"})}),Object(h.jsx)("li",{children:Object(h.jsx)(m.b,{to:"/contactus",children:"Contact Us"})})]})]}),Object(h.jsxs)("div",{className:"col-7 col-sm-5",children:[Object(h.jsx)("h5",{children:"Our Address"}),Object(h.jsxs)("address",{children:["121, Clear Water Bay Road",Object(h.jsx)("br",{}),"Clear Water Bay, Kowloon",Object(h.jsx)("br",{}),"HONG KONG",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-phone fa-lg"}),": +852 1234 5678",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-fax fa-lg"}),": +852 8765 4321",Object(h.jsx)("br",{}),Object(h.jsx)("i",{className:"fa fa-envelope fa-lg"}),": ",Object(h.jsx)("a",{href:"mailto:confusion@food.net",children:"confusion@food.net"})]})]}),Object(h.jsx)("div",{className:"col-12 col-sm-4 align-self-center",children:Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+",children:Object(h.jsx)("i",{className:"fa fa-google-plus"})}),Object(h.jsx)("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id=",children:Object(h.jsx)("i",{className:"fa fa-facebook"})}),Object(h.jsx)("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/",children:Object(h.jsx)("i",{className:"fa fa-linkedin"})}),Object(h.jsx)("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/",children:Object(h.jsx)("i",{className:"fa fa-twitter"})}),Object(h.jsx)("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/",children:Object(h.jsx)("i",{className:"fa fa-youtube"})}),Object(h.jsx)("a",{className:"btn btn-social-icon",href:"mailto:",children:Object(h.jsx)("i",{className:"fa fa-envelope-o"})})]})})]}),Object(h.jsx)("div",{className:"row justify-content-center",children:Object(h.jsx)("div",{className:"col-auto",children:Object(h.jsx)("p",{children:"\xa9 Copyright 2018 Ristorante Con Fusion"})})})]})})};function A(e){var t=e.item,s=e.isLoading,n=e.errMsg;return s?Object(h.jsx)(b,{}):n?Object(h.jsx)("h4",{children:n}):Object(h.jsx)(k.FadeTransform,{in:!0,transformProps:{exitTransform:"scale(0.5) translateY(-50%)"},children:Object(h.jsxs)(d.d,{children:[Object(h.jsx)(d.g,{src:u+t.image,alt:t.name}),Object(h.jsxs)(d.e,{children:[Object(h.jsx)(d.k,{children:t.name}),t.designation?Object(h.jsx)(d.i,{children:t.designation}):null,Object(h.jsx)(d.j,{children:t.description})]})]})})}var R=function(e){return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row align-items-start",children:[Object(h.jsx)("div",{className:"col-12 col-md m-1",children:Object(h.jsx)(A,{item:e.dish,isLoading:e.dishesLoading,errMsg:e.dishesErrMsg})}),Object(h.jsx)("div",{className:"col-12 col-md m-1",children:Object(h.jsx)(A,{item:e.promotion,isLoading:e.promotionsLoading,errMsg:e.promotionsErrMsg})}),Object(h.jsx)("div",{className:"col-12 col-md m-1",children:Object(h.jsx)(A,{item:e.leader,isLoading:e.leadersLoading,errMsg:e.leadersErrMsg})})]})})};function B(e){var t=e.leader;return Object(h.jsxs)(d.s,{className:"container mt-5",children:[Object(h.jsx)(d.s,{left:!0,children:Object(h.jsx)(d.s,{className:"mr-5",object:!0,src:u+t.image,alt:t.name})}),Object(h.jsxs)(d.s,{body:!0,children:[Object(h.jsx)(d.s,{heading:!0,children:t.name}),Object(h.jsx)("p",{children:t.designation}),Object(h.jsx)("p",{children:t.description})]})]})}var P=function(e){var t=e.leaders,s=e.leaders.leaders.map((function(e){return Object(h.jsx)(k.Fade,{in:!0,children:Object(h.jsx)(B,{leader:e})})}));return t.isLoading?Object(h.jsx)(d.s,{className:"container mt-5",children:Object(h.jsx)(b,{})}):t.errMsg?Object(h.jsx)(d.s,{className:"container mt-5",children:Object(h.jsx)("h4",{children:t.errMsg})}):Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)(d.a,{children:[Object(h.jsx)(d.b,{children:Object(h.jsx)(m.b,{to:"/home",children:"Home"})}),Object(h.jsx)(d.b,{active:!0,children:"About Us"})]}),Object(h.jsxs)("div",{className:"col-12",children:[Object(h.jsx)("h3",{children:"About Us"}),Object(h.jsx)("hr",{})]})]}),Object(h.jsxs)("div",{className:"row row-content",children:[Object(h.jsxs)("div",{className:"col-12 col-md-6",children:[Object(h.jsx)("h2",{children:"Our History"}),Object(h.jsx)("p",{children:"Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us."}),Object(h.jsxs)("p",{children:["The restaurant traces its humble beginnings to ",Object(h.jsx)("em",{children:"The Frying Pan"}),", a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan."]})]}),Object(h.jsx)("div",{className:"col-12 col-md-5",children:Object(h.jsxs)(d.d,{children:[Object(h.jsx)(d.f,{className:"bg-primary text-white",children:"Facts At a Glance"}),Object(h.jsx)(d.e,{children:Object(h.jsxs)("dl",{className:"row p-1",children:[Object(h.jsx)("dt",{className:"col-6",children:"Started"}),Object(h.jsx)("dd",{className:"col-6",children:"3 Feb. 2013"}),Object(h.jsx)("dt",{className:"col-6",children:"Major Stake Holder"}),Object(h.jsx)("dd",{className:"col-6",children:"HK Fine Foods Inc."}),Object(h.jsx)("dt",{className:"col-6",children:"Last Year's Turnover"}),Object(h.jsx)("dd",{className:"col-6",children:"$1,250,375"}),Object(h.jsx)("dt",{className:"col-6",children:"Employees"}),Object(h.jsx)("dd",{className:"col-6",children:"40"})]})})]})}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)(d.d,{children:Object(h.jsx)(d.e,{className:"bg-faded",children:Object(h.jsxs)("blockquote",{className:"blockquote",children:[Object(h.jsx)("p",{className:"mb-0",children:"You better cut the pizza in four pieces because I'm not hungry enough to eat six."}),Object(h.jsxs)("footer",{className:"blockquote-footer",children:["Yogi Berra,",Object(h.jsx)("cite",{title:"Source Title",children:"The Wit and Wisdom of Yogi Berra, P. Pepe, Diversion Books, 2014"})]})]})})})})]}),Object(h.jsxs)("div",{className:"row row-content",children:[Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)("h2",{children:"Corporate Leadership"})}),Object(h.jsx)("div",{className:"col-12",children:Object(h.jsx)(d.s,{list:!0,children:Object(h.jsx)(k.Stagger,{in:!0,children:s})})})]})]})},q=s(17),H="ADD_COMMENT",_="ADD_DISHES",U="DISHES_LOADING",Y="DISHES_FAILED",G="ADD_COMMENTS",W="COMMENTS_FAILED",K="ADD_PROMOS",z="PROMOS_LOADING",J="PROMOS_FAILED",Z="ADD_LEADERS",$="LEADERS_FAILED",Q=function(e){return{type:_,payload:e}},V=function(){return{type:U}},X=function(e){return{type:Y,payload:e}},ee=function(e,t,s,n){return function(c){var r={dishId:e,rating:t,author:s,comment:n};r.date=(new Date).toISOString(),fetch(u+"comments",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error! "+e.status+" -"+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return c(function(e){return{type:H,payload:e}}(e))})).catch((function(e){console.log("Post Comments, "+e.message),alert("Comment not posted!\nError! "+e.message)}))}},te=function(e){return{type:G,payload:e}},se=function(e){return{type:W,payload:e}},ne=function(e){return{type:K,payload:e}},ce=function(){return{type:z}},re=function(e){return{type:J,payload:e}},ae=function(e){return{type:Z,payload:e}},oe=function(){return{type:"LEADERS_LOADING"}},ie=function(e){return{type:$,payload:e}},le=s(50),je=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).componentDidMount=function(){e.props.fetchDishes(),e.props.fetchComments(),e.props.fetchPromotions(),e.props.fetchLeaders()},e}return Object(i.a)(s,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)(D,{}),Object(h.jsx)(le.TransitionGroup,{children:Object(h.jsx)(le.CSSTransition,{classNames:"page",timeout:350,children:Object(h.jsxs)(m.f,{location:this.props.location,children:[Object(h.jsx)(m.e,{path:"/home",component:function(){return Object(h.jsx)(R,{dish:e.props.dishes.dishes.filter((function(e){return e.featured}))[0],dishesLoading:e.props.dishes.isLoading,dishesErrMsg:e.props.dishes.errMsg,promotion:e.props.promotions.promotions.filter((function(e){return e.featured}))[0],promotionsLoading:e.props.promotions.isLoading,promotionsErrMsg:e.props.promotions.errMsg,leader:e.props.leaders.leaders.filter((function(e){return e.featured}))[0],leadersLoading:e.props.leaders.isLoading,leadersErrMsg:e.props.leaders.errMsg})}}),Object(h.jsx)(m.e,{path:"/aboutus",component:function(){return Object(h.jsx)(P,{leaders:e.props.leaders})}}),Object(h.jsx)(m.e,{exact:!0,path:"/menu",component:function(){return Object(h.jsx)(x,{dishes:e.props.dishes})}}),Object(h.jsx)(m.e,{path:"/menu/:dishId",component:function(t){var s=t.match;return Object(h.jsx)(T,{dish:e.props.dishes.dishes.filter((function(e){return e.id===parseInt(s.params.dishId,10)}))[0],isLoading:e.props.dishes.isLoading,errMsg:e.props.dishes.errMsg,comments:e.props.comments.comments.filter((function(e){return e.dishId===parseInt(s.params.dishId,10)})),commentsErrMsg:e.props.comments.errMsg,postComment:e.props.postComment})}}),Object(h.jsx)(m.e,{exact:!0,path:"/contactus",component:function(){return Object(h.jsx)(M,{resetFeedbackForm:e.props.resetFeedbackForm,postFeedback:e.props.postFeedback})}}),Object(h.jsx)(m.d,{to:"/home"})]})},this.props.location.key)}),Object(h.jsx)(I,{})]})}}]),s}(n.Component),de=Object(m.g)(Object(q.connect)((function(e){return{dishes:e.dishes,promotions:e.promotions,leaders:e.leaders,comments:e.comments}}),(function(e){return{postComment:function(t,s,n,c){return e(ee(t,s,n,c))},postFeedback:function(t,s,n,c,r,a,o){return e(function(e,t,s,n,c,r,a){return function(o){var i={firstname:e,lastname:t,telnum:s,email:n,agree:c,contactType:r,message:a,date:(new Date).toISOString()};fetch(u+"feedback",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;var t=new Error("Error! "+e.status+" -"+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return alert("Thank you for your feedback!\n"+JSON.stringify(e))})).catch((function(e){console.log("Post Feedback, "+e.message),alert("Feedback not posted!\nError! "+e.message)}))}}(t,s,n,c,r,a,o))},fetchDishes:function(){e((function(e){return e(V(!0)),fetch(u+"dishes").then((function(e){if(e.ok)return e;var t=new Error("Error! "+e.status+" "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(Q(t))})).catch((function(t){return e(X(t.message))}))}))},resetFeedbackForm:function(){e(p.actions.reset("feedback"))},fetchComments:function(){e((function(e){return fetch(u+"comments").then((function(e){if(e.ok)return e;var t=new Error("Error! "+e.status+" "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(te(t))})).catch((function(t){return e(se(t.message))}))}))},fetchPromotions:function(){e((function(e){return e(ce(!0)),fetch(u+"promotions").then((function(e){if(e.ok)return e;var t=new Error("Error! "+e.status+" "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ne(t))})).catch((function(t){return e(re(t.message))}))}))},fetchLeaders:function(){e((function(e){return e(oe(!0)),fetch(u+"leaders").then((function(e){if(e.ok)return e;var t=new Error("Error! "+e.status+" "+e.statusText);throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){return e(ae(t))})).catch((function(t){return e(ie(t.message))}))}))}}}))(je)),me=(s(157),s(7)),he=s(18),be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMsg:null,dishes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!1,errMsg:null,dishes:t.payload});case U:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!0,errMsg:null,dishes:[]});case Y:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!1,errMsg:t.payload,dishes:[]});default:return e}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{errMsg:null,comments:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(me.a)(Object(me.a)({},e),{},{errMsg:null,comments:t.payload});case W:return Object(me.a)(Object(me.a)({},e),{},{errMsg:t.payload,comments:[]});case H:var s=t.payload;return Object(me.a)(Object(me.a)({},e),{},{comments:e.comments.concat(s)});default:return e}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMsg:null,promotions:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case K:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!1,errMsg:null,promotions:t.payload});case z:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!0,errMsg:null,promotions:[]});case J:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!1,errMsg:t.payload,promotions:[]});default:return e}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isLoading:!0,errMsg:null,leaders:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!1,errMsg:null,leaders:t.payload});case U:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!0,errMsg:null,leaders:[]});case $:return Object(me.a)(Object(me.a)({},e),{},{isLoading:!1,errMsg:t.payload,leaders:[]});default:return e}},fe=s(90),pe=s.n(fe),ge=s(91),Ne=s.n(ge),ve={firstname:"",lastname:"",telnum:"",email:"",agree:!1,contactType:"Tel.",message:""},ye=Object(he.createStore)(Object(he.combineReducers)(Object(me.a)({dishes:be,comments:ue,promotions:Oe,leaders:xe},Object(p.createForms)({feedback:ve}))),Object(he.applyMiddleware)(pe.a,Ne.a));var we=function(){return Object(h.jsx)(q.Provider,{store:ye,children:Object(h.jsx)(m.a,{children:Object(h.jsx)("div",{children:Object(h.jsx)(de,{})})})})},Me=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,159)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;s(e),n(e),c(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(we,{})}),document.getElementById("root")),Me()},99:function(e,t,s){}},[[158,1,2]]]);
//# sourceMappingURL=main.291dd1d0.chunk.js.map