(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(54)},37:function(e,t,a){},38:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),i=a.n(c),o=a(6),l=(a(37),a(5)),s=(a(38),function(){return r.a.createElement("nav",{className:"navigation-container"},r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/signin"},"Sign In"))}),m=a(15),u=a(7),p=a(8),d=a(10),f=a(9),h=a(11),b=a(17),v=a.n(b);a(43);v.a.initializeApp({apiKey:"AIzaSyCYBIdKfmAD-JNdWeZ1LO5cmnYXyE_gXek",authDomain:"store-3f284.firebaseapp.com",databaseURL:"https://store-3f284.firebaseio.com",projectId:"store-3f284",storageBucket:"",messagingSenderId:"873883748774",appId:"1:873883748774:web:f2ce8a05e5c2781c"});var E=v.a.firestore(),g=(v.a,a(46),Object(l.f)(function(e){var t=e.itemId,a=e.title,n=e.price,c=e.imageUrl,i=e.history,o=e.match;return r.a.createElement("div",{className:"item-container",onClick:function(){return i.push("".concat(o.url).concat(t))}},r.a.createElement("div",{className:"item-preview",style:{backgroundImage:"url(".concat(c,")")}}),r.a.createElement("div",{className:"item-details"},r.a.createElement("div",{className:"title"},a),r.a.createElement("div",{className:"price"},"\u20b4",n)))})),j=(a(47),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={items:[]},a.unsubscribeFromFirestore=null,a.componentDidMount=function(){a.unsubscribeFromFirestore=E.collection("Items").onSnapshot(function(e){var t=e.docs.map(function(e){return Object(m.a)({id:e.id},e.data())});a.setState({items:t})})},a.componentWillUnmount=function(){a.unsubscribeFromFirestore()},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"grid-container"},this.state.items.map(function(e){var t=e.id,a=e.title,n=e.price,c=e.imageUrl;return r.a.createElement(g,{key:t,itemId:t,title:a,price:n,imageUrl:c})}))}}]),t}(r.a.Component)),y=(a(48),function(){return r.a.createElement(j,null)}),O=a(22),w=a.n(O),I=a(31),N=(a(50),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={},a.componentDidMount=function(){var e=a.props.match.params.itemId,t=E.doc("Items/".concat(e));a.getItemDetails(t)},a.getItemDetails=function(){var e=Object(I.a)(w.a.mark(function e(t){var n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.get();case 2:(n=e.sent).exists&&a.setState(Object(m.a)({},n.data()));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.price,n=e.imageUrl;return r.a.createElement("div",{className:"item-details-component"},r.a.createElement("div",{className:"image-container",style:{backgroundImage:"url(".concat(n,")")}}),r.a.createElement("div",{className:"item-data"},r.a.createElement("h2",null,t),r.a.createElement("label",null,"Price: \u20b4",a)))}}]),t}(r.a.Component)),S=a(16),k=(a(51),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleSubmit=function(e){e.preventDefault(),a.setState({email:"",password:""})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(S.a)({},n,r))},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",{className:"sign-in-container"},r.a.createElement("h2",null,"Sign in"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{name:"email",type:"email",placeholder:"Email",value:t,onChange:this.handleChange,required:!0}),r.a.createElement("input",{name:"password",type:"password",value:a,placeholder:"Password",onChange:this.handleChange,required:!0}),r.a.createElement("input",{type:"submit",value:"Sign In"})))}}]),t}(r.a.Component)),C=(a(52),function(){return r.a.createElement("div",{className:"auth-container"},r.a.createElement(k,null))}),D=(a(53),function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(s,null),r.a.createElement("main",{className:"main-section"},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:y}),r.a.createElement(l.a,{path:"/signin",component:C}),r.a.createElement(l.a,{path:"/:itemId",component:N}))))});i.a.render(r.a.createElement(o.a,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.7c0975d8.chunk.js.map