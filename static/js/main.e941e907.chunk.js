(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(57)},38:function(e,t,a){},42:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),s=a.n(c),i=a(15),o=(a(38),a(3)),l=a.n(o),u=a(13),m=a(7),p=a(8),d=a(9),h=a(11),f=a(10),b=a(12),v=a(14),g=(a(40),a(23)),E=a.n(g);E.a.initializeApp({apiKey:"AIzaSyCYBIdKfmAD-JNdWeZ1LO5cmnYXyE_gXek",authDomain:"store-3f284.firebaseapp.com",databaseURL:"https://store-3f284.firebaseio.com",projectId:"store-3f284",storageBucket:"",messagingSenderId:"873883748774",appId:"1:873883748774:web:f2ce8a05e5c2781c"});var y=E.a,w=y.auth(),O=new y.auth.GoogleAuthProvider;O.setCustomParameters({prompt:"select_account"});var j=function(){return w.signInWithPopup(O)},N=function(){return w.signOut()},I=(a(42),function(e){var t=e.currentUser;return r.a.createElement("header",{className:"header-container"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(i.b,{className:"menu-item",to:"/"},"Gallery"),r.a.createElement("div",{className:"user-data-container"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"display-name"},t.displayName),r.a.createElement("div",{className:"menu-item",onClick:N},"Log Out")):r.a.createElement(i.b,{className:"menu-item",to:"/signin"},"Log In"))))}),C=a(17),k=(a(47),y.firestore()),x=function(){var e=Object(m.a)(l.a.mark(function e(t,a){var n,r,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=k.doc("Users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=16;break}return r=t.displayName,c=t.email,e.prev=8,e.next=11,n.set(Object(u.a)({displayName:r,email:c,createdAt:new Date},a));case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(8),console.log("Error creating user",e.t0.message);case 16:return e.abrupt("return",n);case 17:case"end":return e.stop()}},e,null,[[8,13]])}));return function(t,a){return e.apply(this,arguments)}}(),S=(a(50),Object(v.f)(function(e){var t=e.itemId,a=e.title,n=e.price,c=e.imageUrl,s=e.history,i=e.match;return r.a.createElement("div",{className:"item-container",onClick:function(){return s.push("".concat(i.url).concat(t))}},r.a.createElement("div",{className:"item-preview",style:{backgroundImage:"url(".concat(c,")")}}),r.a.createElement("div",{className:"item-details"},r.a.createElement("div",{className:"title"},a),r.a.createElement("div",{className:"price"},"\u20b4",n)))})),A=(a(51),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={items:[]},a.unsubscribeFromFirestore=null,a.componentDidMount=function(){a.unsubscribeFromFirestore=k.collection("Items").onSnapshot(function(e){var t=e.docs.map(function(e){return Object(u.a)({id:e.id},e.data())});a.setState({items:t})})},a.componentWillUnmount=function(){a.unsubscribeFromFirestore()},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"grid-container"},this.state.items.map(function(e){var t=e.id,a=Object(C.a)(e,["id"]);return r.a.createElement(S,Object.assign({key:t,itemId:t},a))}))}}]),t}(r.a.Component)),U=function(){return r.a.createElement(A,null)},P=(a(52),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={},a.componentDidMount=function(){var e=a.props.match.params.itemId,t=k.doc("Items/".concat(e));a.getItemDetails(t)},a.getItemDetails=function(){var e=Object(m.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get();case 2:(n=e.sent).exists&&a.setState(Object(u.a)({},n.data()));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.price,n=e.imageUrl,c=e.description;return r.a.createElement("div",{className:"item-details-container"},r.a.createElement("div",{className:"image-container",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"item-description"},r.a.createElement("h2",{className:"title"},t),r.a.createElement("label",{className:"price"},"\u20b4",a),r.a.createElement("p",{className:"description"},c)))}}]),t}(r.a.Component)),D=a(16),F=(a(53),function(e){var t=e.name,a=e.type,n=e.placeholder,c=e.value,s=e.onInputChange,i=Object(C.a)(e,["name","type","placeholder","value","onInputChange"]);return r.a.createElement("input",Object.assign({className:"input-field",name:t,type:a,placeholder:n,value:c,onChange:s},i))}),L=(a(54),function(e){var t=e.children,a=(e.outlineColor,e.googleLogIn),n=Object(C.a)(e,["children","outlineColor","googleLogIn"]);return r.a.createElement("button",Object.assign({className:"custom-button ".concat(a?"google-login":"")},n),t)}),W=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleSubmit=function(){var e=Object(m.a)(l.a.mark(function e(t){var n,r,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,r=n.email,c=n.password,e.prev=2,e.next=5,w.signInWithEmailAndPassword(r,c);case 5:a.setState({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[2,8]])}));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(D.a)({},n,r))},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",{className:"sign-in-container"},r.a.createElement("h2",null,"Log in"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(F,{name:"email",type:"email",placeholder:"Email",value:t,onInputChange:this.handleChange,required:!0}),r.a.createElement(F,{name:"password",type:"password",placeholder:"Password",value:a,onInputChange:this.handleChange,required:!0}),r.a.createElement("div",{className:"button-group"},r.a.createElement(L,{type:"submit"},"Log In"),r.a.createElement(L,{onClick:j,googleLogIn:!0},"Log In With Google"))))}}]),t}(r.a.Component),q=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={displayName:"",email:"",password:"",confirmPassword:""},a.handleSubmit=function(){var e=Object(m.a)(l.a.mark(function e(t){var n,r,c,s,i,o,u;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.state,r=n.displayName,c=n.email,s=n.password,i=n.confirmPassword,s===i){e.next=5;break}return alert("Password don't match"),e.abrupt("return");case 5:return e.prev=5,e.next=8,w.createUserWithEmailAndPassword(c,s);case 8:return o=e.sent,u=o.user,e.next=12,x(u,{displayName:r});case 12:a.setState({displayName:"",email:"",password:"",confirmPassword:""}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.error(e.t0);case 18:case"end":return e.stop()}},e,null,[[5,15]])}));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(D.a)({},n,r))},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.displayName,a=e.email,n=e.password,c=e.confirmPassword;return r.a.createElement("div",{className:"sign-up-container"},r.a.createElement("h2",null,"Sign Up"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(F,{name:"displayName",type:"text",placeholder:"Display Name",value:t,onInputChange:this.handleChange,required:!0}),r.a.createElement(F,{name:"email",type:"email",placeholder:"Email",value:a,onInputChange:this.handleChange,required:!0}),r.a.createElement(F,{name:"password",type:"password",placeholder:"Password",value:n,onInputChange:this.handleChange,required:!0}),r.a.createElement(F,{name:"confirmPassword",type:"password",placeholder:"Confirm Password",value:c,onInputChange:this.handleChange,required:!0}),r.a.createElement("div",{className:"button-group"},r.a.createElement(L,{type:"submit"},"Sign  Up"))))}}]),t}(r.a.Component),B=(a(55),function(){return r.a.createElement("div",{className:"signin-and-signup-container"},r.a.createElement(W,null),r.a.createElement(q,null))}),G=(a(56),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={currentUser:null},a.unsubscribeFromAuth=null,a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.unsubscribeFromAuth=w.onAuthStateChanged(function(){var t=Object(m.a)(l.a.mark(function t(a){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return t.next=3,x(a);case 3:t.sent.onSnapshot(function(t){e.setState({currentUser:Object(u.a)({id:t.id},t.data())})}),t.next=8;break;case 7:e.setState({currentUser:a});case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.unsubscribeFromAuth()}},{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(I,{currentUser:this.state.currentUser}),r.a.createElement("main",{className:"main-container"},r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",component:U}),r.a.createElement(v.a,{path:"/signin",component:B}),r.a.createElement(v.a,{path:"/:itemId",component:P}))))}}]),t}(r.a.Component));s.a.render(r.a.createElement(i.a,{basename:"/art-gallery"},r.a.createElement(G,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.e941e907.chunk.js.map