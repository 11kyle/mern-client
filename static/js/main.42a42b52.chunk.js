(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),l=a.n(r),c=a(52),i=a(53),m=a(66),s=a(64),u=a(6),p=a(120),h=a(54),g=a.n(h),E=a(65),f=a(130),d=a(119),b=a(20);function v(){var e=Object(u.f)(),t=o.a.useState(e.pathname),a=Object(E.a)(t,2),n=a[0],r=a[1];return o.a.createElement(f.a,{value:n,onChange:function(e,t){r(t)},"aria-label":"navigation tabs",centered:!0},o.a.createElement(d.a,{value:"/",label:"About",component:b.b,to:"/"}),o.a.createElement(d.a,{value:"/portfolio",label:"Portfolio",component:b.b,to:"/portfolio"}),o.a.createElement(d.a,{value:"/blog",label:"Blog",component:b.b,to:"/blog"}))}var w=a(103);function y(){return o.a.createElement(n.Fragment,null,o.a.createElement(p.a,{container:!0,align:"center",justify:"center"},o.a.createElement(p.a,{item:!0,xs:12},o.a.createElement("img",{src:g.a,alt:"profile",width:"200px",style:{marginTop:"16px"}}),o.a.createElement(w.a,{variant:"h2",align:"center"},"Kyle Johnson"),o.a.createElement(w.a,{variant:"subtitle2",align:"center"},"Full-Stack Developer"))),o.a.createElement(v,null))}var k=a(121),x=a(122),j=a(58),O=a.n(j),S=a(59),C=a.n(S),B=a(60),_=a.n(B),A=Object(k.a)({root:{backgroundColor:"inherit",width:"100px",margin:"0 auto"},overrides:{margin:"16px",fill:"inherit"}});function I(){var e=A(),t=function(e){return e.preventDefault()};return o.a.createElement(p.a,{container:!0,justify:"center"},o.a.createElement(x.a,{href:"https://github.com/11kyle",onClick:t},o.a.createElement(O.a,{className:e.overrides,fontSize:"large"})),o.a.createElement(x.a,{href:"https://www.linkedin.com/in/kylejohnson11",onClick:t},o.a.createElement(C.a,{className:e.overrides,fontSize:"large"})),o.a.createElement(x.a,{href:"#",onClick:t},o.a.createElement(_.a,{className:e.overrides,fontSize:"large"})))}var N=a(123),W=a(124),z=a(125),D=a(126),F=a(61),J=a.n(F),M=a(62),P=a.n(M),T=Object(k.a)({root:{maxWidth:600,marginTop:16},media:{height:140}});function G(){var e=T();return o.a.createElement(p.a,{container:!0,direction:"column",alignContent:"center"},o.a.createElement(N.a,{className:e.root},o.a.createElement(W.a,null,o.a.createElement(z.a,{component:"img",alt:"One of the websites I created.",image:J.a,title:"One of the websites I created."}),o.a.createElement(D.a,null,o.a.createElement(w.a,{variant:"h5",component:"h2"},"Ghibli"),o.a.createElement(w.a,{variant:"body2",component:"p"},"Built with React, Axios and custom CSS.")))),o.a.createElement(N.a,{className:e.root},o.a.createElement(W.a,null,o.a.createElement(z.a,{component:"img",alt:"One of the websites I created.",image:P.a,title:"One of the websites I created."}),o.a.createElement(D.a,null,o.a.createElement(w.a,{variant:"h5",component:"h2"},"Ghibli"),o.a.createElement(w.a,{variant:"body2",component:"p"},"Built with React, Axios and Bootstrap.")))))}var R=a(104),K=a(129);function L(e){var t=e.blogposts,a=t.sort((function(e,t){return t.posted-e.posted}));console.log(a);var n=t.map((function(e){return o.a.createElement(p.a,{item:!0,xs:12,key:e._id},o.a.createElement(R.a,{elevation:2,style:{maxWidth:"600px"}},o.a.createElement(K.a,{p:2,mt:2},o.a.createElement(w.a,{variant:"h6"},e.title),o.a.createElement(w.a,{variant:"subtitle2"},"Thursday, Sep 21, 2017 8:37 PM"),o.a.createElement(w.a,null,"Author: ",e.author),o.a.createElement(w.a,null,e.body))))}));return o.a.createElement(p.a,{container:!0,direction:"column",alignContent:"center",spacing:0},n)}function Q(){return o.a.createElement(w.a,{variant:"h4"},"About Page")}var $=a(63),q=a(127),H=a(128),U=a(82),V=Object($.a)({typography:{h2:{fontFamily:"Quicksand, sans-serif"}}}),X=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this)).getBlogposts=function(){U.get("https://kj-portfolio.herokuapp.com/api/blogpost").then((function(e){n.setState({blogposts:e.data,loading:!1})})).catch((function(e){console.log("Error fetching and parsing data",e)}))},n.state={blogposts:[],loading:!0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getBlogposts()}},{key:"render",value:function(){return o.a.createElement(q.a,{theme:V},o.a.createElement(H.a,null,o.a.createElement(y,null),o.a.createElement(u.c,null,o.a.createElement(u.a,{path:"/portfolio"},o.a.createElement(G,null)),o.a.createElement(u.a,{path:"/blog"},this.state.loading?o.a.createElement("p",null,"Loading..."):o.a.createElement(L,{blogposts:this.state.blogposts})),o.a.createElement(u.a,{exact:!0,path:"/"},o.a.createElement(Q,null))),o.a.createElement(I,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(b.a,{basename:"/mern-client"},o.a.createElement(o.a.StrictMode,null,o.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,a){e.exports=a.p+"static/media/man.9152be17.png"},61:function(e,t,a){e.exports=a.p+"static/media/website_for_portfolio_01.9d571721.png"},62:function(e,t,a){e.exports=a.p+"static/media/website_for_portfolio_02.6d828907.png"},71:function(e,t,a){e.exports=a(100)}},[[71,1,2]]]);
//# sourceMappingURL=main.42a42b52.chunk.js.map