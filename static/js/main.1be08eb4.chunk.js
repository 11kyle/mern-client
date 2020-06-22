(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),o=t.n(l),i=t(58),c=t(59),m=t(72),s=t(70),u=t(6),p=t(124),E=t(60),d=t.n(E),b=t(71),g=t(133),h=t(123),v=t(24);function f(){var e=Object(u.f)(),a=r.a.useState(e.pathname),t=Object(b.a)(a,2),n=t[0],l=t[1];return r.a.createElement(g.a,{value:n,onChange:function(e,a){l(a)},"aria-label":"navigation tabs",centered:!0,indicatorColor:"primary"},r.a.createElement(h.a,{value:"/",label:"About",component:v.b,to:"/"}),r.a.createElement(h.a,{value:"/portfolio",label:"Portfolio",component:v.b,to:"/portfolio"}),r.a.createElement(h.a,{value:"/blog",label:"Blog",component:v.b,to:"/blog"}))}var y=t(31);function x(){return r.a.createElement(n.Fragment,null,r.a.createElement(p.a,{container:!0,align:"center"},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement("img",{src:d.a,alt:"profile",width:"200px",style:{marginTop:"16px"}}),r.a.createElement(y.a,{variant:"h2"},"Kyle Johnson"),r.a.createElement(y.a,{variant:"subtitle2",color:"primary"},"Full-Stack Developer"))),r.a.createElement(f,null))}var k=t(125),w=t(132),j=t(126),B=t(64),S=t.n(B),O=t(65),N=t.n(O),D=t(66),M=t.n(D),C=Object(k.a)({overrides:{margin:"16px",fill:"inherit"}});function F(){var e=C();return r.a.createElement(w.a,{mt:4,bgcolor:"primary.main"},r.a.createElement(p.a,{container:!0,justify:"center",alignItems:"center",style:{height:"250px",backgroundColor:"primary"}},r.a.createElement(j.a,{href:"https://github.com/11kyle"},r.a.createElement(S.a,{className:e.overrides,fontSize:"large"})),r.a.createElement(j.a,{href:"https://www.linkedin.com/in/kylejohnson11/"},r.a.createElement(N.a,{className:e.overrides,fontSize:"large"})),r.a.createElement(j.a,{href:"#"},r.a.createElement(M.a,{className:e.overrides,fontSize:"large"}))))}var A=t(45),K=t.n(A),W=t(46),J=t.n(W),T=Object(k.a)({root:{marginTop:"16px"},media:{maxWidth:"100%",height:"auto"}});function Y(){var e=T();return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{item:!0,sm:5},r.a.createElement(w.a,{mt:4,px:2,border:"1px solid #000"},r.a.createElement("img",{src:K.a,alt:"A website Kyle built.",className:e.media}))),r.a.createElement(p.a,{item:!0,sm:5},r.a.createElement(w.a,{mt:4,px:2,border:"1px solid #000"},r.a.createElement("img",{src:J.a,alt:"A website Kyle built.",className:e.media}))),r.a.createElement(p.a,{item:!0,sm:5},r.a.createElement(w.a,{mt:4,px:2,border:"1px solid #000"},r.a.createElement("img",{src:K.a,alt:"A website Kyle built.",className:e.media}))),r.a.createElement(p.a,{item:!0,sm:5},r.a.createElement(w.a,{mt:4,px:2,border:"1px solid #000"},r.a.createElement("img",{src:J.a,alt:"A website Kyle built.",className:e.media}))))}var z=t(127),H=t(67),I=t.n(H);function U(e){var a=e.blogposts;a.sort((function(e,a){var t=new Date(e.posted);return new Date(a.posted)-t}));var t=a.map((function(e){return r.a.createElement(p.a,{item:!0,xs:12,key:e._id},r.a.createElement(w.a,{my:4},r.a.createElement(z.a,{elevation:2},r.a.createElement(w.a,{p:2,mt:2},r.a.createElement(y.a,{variant:"h4"},e.title),r.a.createElement(y.a,{variant:"subtitle2",color:"primary"},I()(e.posted).format("dddd MMM D, YYYY")),r.a.createElement(y.a,{gutterBottom:!0},"Author: ",e.author),r.a.createElement(y.a,null,e.body)))))}));return r.a.createElement(r.a.Fragment,null,t)}var G=t(68),L=t(135),R=t(128),P=t(136),Q=t(129),$=Object(k.a)((function(e){return{root:Object(G.a)({},e.breakpoints.up("sm"),{borderRadius:"10% / 50%"})}}));function _(){var e=$();return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{item:!0,sm:12},r.a.createElement(w.a,{p:2,my:4,align:"center",color:"white",bgcolor:"primary.main",className:e.root},r.a.createElement(y.a,{variant:"h5",gutterBottom:!0},"Hi, I'm Kyle. Nice to meet you."),r.a.createElement(y.a,null,"Full-stack developer with 5+ years experience in internet technologies and 30+ years experience of being an all-around nice guy. Be sure to check out my portfolio for recent work and my blog for tutorials."))),r.a.createElement(p.a,{item:!0,sm:12},r.a.createElement(w.a,{p:2,my:4},r.a.createElement(y.a,{variant:"h4",align:"center"},"Skills"),r.a.createElement(p.a,{container:!0,align:"center"},r.a.createElement(p.a,{item:!0,sm:6},r.a.createElement(y.a,{variant:"h6",color:"primary"},"Front-End"),r.a.createElement(L.a,{label:"HTML5",variant:"outlined"}),r.a.createElement(L.a,{label:"CSS3",variant:"outlined"}),r.a.createElement(L.a,{label:"Javascript",variant:"outlined"}),r.a.createElement(L.a,{label:"React",variant:"outlined"}),r.a.createElement(L.a,{label:"Material-Ui",variant:"outlined"}),r.a.createElement(L.a,{label:"Chrome Dev Tools",variant:"outlined"}),r.a.createElement(L.a,{label:"Bootstrap",variant:"outlined"})),r.a.createElement(p.a,{item:!0,sm:6},r.a.createElement(y.a,{variant:"h6",color:"primary"},"Back-End"),r.a.createElement(L.a,{label:"Node.js",variant:"outlined"}),r.a.createElement(L.a,{label:"Express.js",variant:"outlined"}),r.a.createElement(L.a,{label:"MongoDB",variant:"outlined"}),r.a.createElement(L.a,{label:"Git & GitHub",variant:"outlined"}),r.a.createElement(L.a,{label:"Cypress.io",variant:"outlined"}))))),r.a.createElement(p.a,{item:!0,sm:6},r.a.createElement(w.a,{p:2,my:4},r.a.createElement(y.a,{variant:"h4",align:"center"},"Education"),r.a.createElement(R.a,null,r.a.createElement(P.a,null,r.a.createElement(Q.a,{primary:"University of Denver",secondary:"Bootcamp Computer Software Engineering"})),r.a.createElement(P.a,null,r.a.createElement(Q.a,{primary:"University of Wisconsin - Stout",secondary:"BS Mechanical Engineering"}))))))}var q=t(69),V=t(130),X=t(131),Z=t(90),ee=Object(q.a)({typography:{fontFamily:"Quicksand, sans-serif"},palette:{primary:{main:"#EB6D4A"}}}),ae=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this)).getBlogposts=function(){Z.get("https://cors-anywhere.herokuapp.com/https://kj-portfolio.herokuapp.com/api/blogpost").then((function(e){n.setState({blogposts:e.data,loading:!1})})).catch((function(e){console.log("Error fetching and parsing data",e)}))},n.state={blogposts:[],loading:!0},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getBlogposts()}},{key:"render",value:function(){return r.a.createElement(V.a,{theme:ee},r.a.createElement(X.a,null,r.a.createElement(x,null),r.a.createElement(p.a,{container:!0,justify:"center",style:{maxWidth:"800px",margin:"0 auto"}},r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/portfolio"},r.a.createElement(Y,null)),r.a.createElement(u.a,{path:"/blog"},this.state.loading?r.a.createElement("p",null,"Loading..."):r.a.createElement(U,{blogposts:this.state.blogposts})),r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(_,null)))),r.a.createElement(F,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v.a,{basename:"/mern-client"},r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},45:function(e,a,t){e.exports=t.p+"static/media/portfolio-desktop-01.b1f5c7bf.png"},46:function(e,a,t){e.exports=t.p+"static/media/portfolio-desktop-02.b8da2f06.png"},60:function(e,a,t){e.exports=t.p+"static/media/man.9152be17.png"},78:function(e,a,t){e.exports=t(108)}},[[78,1,2]]]);
//# sourceMappingURL=main.1be08eb4.chunk.js.map