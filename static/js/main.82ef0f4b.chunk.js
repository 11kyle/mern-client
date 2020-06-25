(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{105:function(e,a,t){e.exports=t(331)},331:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),o=t.n(l),i=t(81),c=t(82),m=t(99),s=t(97),p=t(6),u=t(349),h=t(83),d=t.n(h),g=t(98),E=t(359),b=t(348),y=t(26);function f(){var e=Object(p.f)(),a=r.a.useState(e.pathname),t=Object(g.a)(a,2),n=t[0],l=t[1];return r.a.createElement(E.a,{value:n,onChange:function(e,a){l(a)},"aria-label":"navigation tabs",centered:!0,indicatorColor:"primary"},r.a.createElement(b.a,{value:"/",label:"About",component:y.b,to:"/"}),r.a.createElement(b.a,{value:"/portfolio",label:"Portfolio",component:y.b,to:"/portfolio"}),r.a.createElement(b.a,{value:"/blog",label:"Blog",component:y.b,to:"/blog"}))}var v=t(36);function w(){return r.a.createElement(n.Fragment,null,r.a.createElement(u.a,{container:!0,align:"center"},r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement("img",{src:d.a,alt:"profile",width:"200px",style:{marginTop:"16px"}}),r.a.createElement(v.a,{variant:"h2"},"Kyle Johnson"),r.a.createElement(v.a,{variant:"subtitle2",color:"primary"},"Full-Stack Developer"))),r.a.createElement(f,null))}var k=t(350),x=t(358),j=t(351),O=t(87),B=t.n(O),A=t(88),N=t.n(A),T=t(89),S=t.n(T),F=Object(k.a)({overrides:{margin:"16px",fill:"inherit"}});function C(){var e=F();return r.a.createElement(x.a,{mt:4,bgcolor:"primary.main"},r.a.createElement(u.a,{container:!0,justify:"center",alignItems:"center",style:{height:"250px",backgroundColor:"primary"}},r.a.createElement(j.a,{href:"https://github.com/11kyle"},r.a.createElement(B.a,{className:e.overrides,fontSize:"large"})),r.a.createElement(j.a,{href:"https://www.linkedin.com/in/kylejohnson11/"},r.a.createElement(N.a,{className:e.overrides,fontSize:"large"})),r.a.createElement(j.a,{href:"#"},r.a.createElement(S.a,{className:e.overrides,fontSize:"large"}))))}var R=t(20),D=t(362),J=t(90),M=t.n(J),K=t(91),_=t.n(K),G=t(92),H=t.n(G),q=Object(k.a)((function(e){return{root:{marginTop:"16px"},media:{maxWidth:"100%",height:"auto"},itemOrder1:Object(R.a)({},e.breakpoints.down("xs"),{order:"1"}),itemOrder2:Object(R.a)({},e.breakpoints.down("xs"),{order:"2"}),itemOrder3:Object(R.a)({},e.breakpoints.down("xs"),{order:"3"}),itemOrder4:Object(R.a)({},e.breakpoints.down("xs"),{order:"4"}),itemOrder5:Object(R.a)({},e.breakpoints.down("xs"),{order:"5"}),itemOrder6:Object(R.a)({},e.breakpoints.down("xs"),{order:"6"})}}));function I(){var e=q();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{item:!0,sm:6,className:e.itemOrder1},r.a.createElement(x.a,{mt:4,px:2},r.a.createElement("a",{href:"https://11kyle.github.io/ghibli-react-app/"},r.a.createElement("img",{src:M.a,alt:"A website Kyle built.",className:e.media})))),r.a.createElement(u.a,{item:!0,sm:6,className:e.itemOrder2},r.a.createElement(x.a,{mt:4,px:2},r.a.createElement(v.a,null,"This project was bootstrapped with Create React App. This project was originally written in vanilla javascript. I replaced the vanilla javascript with React and axios. The css is custom."),r.a.createElement(D.a,{label:"React",variant:"outlined"}),r.a.createElement(D.a,{label:"jsx",variant:"outlined"}),r.a.createElement(D.a,{label:"axios",variant:"outlined"}))),r.a.createElement(u.a,{item:!0,sm:6,className:e.itemOrder4},r.a.createElement(x.a,{mt:4,px:2},r.a.createElement(v.a,null,"This project uses axios to make a get request to the Giphy API. The request contains a query with the default value of 'cats'."),r.a.createElement(D.a,{label:"React",variant:"outlined"}),r.a.createElement(D.a,{label:"jsx",variant:"outlined"}),r.a.createElement(D.a,{label:"axios",variant:"outlined"}))),r.a.createElement(u.a,{item:!0,sm:6,className:e.itemOrder3},r.a.createElement(x.a,{mt:4,px:2},r.a.createElement("a",{href:"https://11kyle.github.io/gif-search/"},r.a.createElement("img",{src:_.a,alt:"A website Kyle built.",className:e.media})))),r.a.createElement(u.a,{item:!0,sm:6,className:e.itemOrder5},r.a.createElement(x.a,{mt:4,px:2},r.a.createElement("a",{href:"https://11kyle.github.io/react-todo-table/"},r.a.createElement("img",{src:H.a,alt:"A website Kyle built.",className:e.media})))),r.a.createElement(u.a,{item:!0,sm:6,className:e.itemOrder6},r.a.createElement(x.a,{mt:4,px:2},r.a.createElement(v.a,null,"A simple CRUD application written with React."),r.a.createElement(D.a,{label:"React",variant:"outlined"}),r.a.createElement(D.a,{label:"jsx",variant:"outlined"}))))}var W=t(353),Y=t(354),z=t(363),U=t(355),Q=t(93),L=t.n(Q),P=t(360),V=t(352);function $(e){return r.a.createElement(P.a,{language:e.language,style:V.a,children:e.children,customStyle:{borderRadius:"4px"}})}var X={a:'"homepage": "https://<username>.github.io/<repository_name>"\n"scripts": {\n    "predeploy": "npm run build"\n    "deploy": "gh-pages -d build"\n    ...\n}',b:"npm install gh-pages --save-dev",c:"npm run deploy",d:'// clone a repo \ngit clone https://github<username>.github.io/<respoitory_name>\n\n// push all changes to the repo\ngit add .\ngit commit -m "<message>"\ngit push origin <branch>\n\n// initialize an existing directory\ngit init\n\n// show the status of the git repository\ngit status\n\n// fetch current branch to local project directory\ngit pull'};function Z(e){var a=e.blogposts;a.sort((function(e,a){var t=new Date(e.posted);return new Date(a.posted)-t}));a.map((function(e){return r.a.createElement(u.a,{item:!0,xs:12,key:e._id},r.a.createElement(x.a,{mt:4},r.a.createElement(W.a,{elevation:2},r.a.createElement(x.a,{p:2},r.a.createElement(v.a,{variant:"h4"},e.title),r.a.createElement(v.a,{variant:"subtitle2",color:"primary"},L()(e.posted).format("dddd MMM D, YYYY")),r.a.createElement(v.a,{gutterBottom:!0},"Author: ",e.author),r.a.createElement(v.a,null,e.body)))))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(x.a,{mt:4},r.a.createElement(W.a,{elevation:2},r.a.createElement(x.a,{p:2},r.a.createElement(v.a,{variant:"h4"},"How to deploy a create-react-app to gh-pages"),r.a.createElement(v.a,{variant:"subtitle2",color:"primary"},"Wednesday Jun 24, 2020"),r.a.createElement(v.a,{paragraph:!0},"Author: Kyle Johnson"),r.a.createElement(v.a,{gutterBottom:!0},"The first step is to install gh-pages as a development dependency. Open the command line or terminal and enter the following:"),r.a.createElement(v.a,{variant:"caption"},"terminal/cmd"),r.a.createElement($,{language:"bash",children:X.b}),r.a.createElement(v.a,{gutterBottom:!0},"Once gh-pages is successfully installed in the project, we need to update the package.json file. Add a name-value pair of homepage with the url of your github repository. Also, add predeploy and deploy scripts to the scripts property:"),r.a.createElement(v.a,{variant:"caption"},"package.json"),r.a.createElement($,{language:"json",children:X.a}),r.a.createElement(v.a,{gutterBottom:!0},"Finally, return to the command line or terminal and run the deploy script:"),r.a.createElement(v.a,{variant:"caption"},"terminal/cmd"),r.a.createElement($,{language:"bash",children:X.c}))))),r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(x.a,{mt:4},r.a.createElement(W.a,{elevation:2},r.a.createElement(x.a,{p:2},r.a.createElement(v.a,{variant:"h4"},"GitHub Cheatsheet"),r.a.createElement(v.a,{variant:"subtitle2",color:"primary"},"Thurs Jun 25, 2020"),r.a.createElement(v.a,{paragraph:!0},"Author: Kyle Johnson"),r.a.createElement(v.a,null),r.a.createElement($,{language:"bash",children:X.d}))))),r.a.createElement(u.a,{item:!0,xs:12},r.a.createElement(x.a,{mt:4},r.a.createElement(W.a,{elevation:2},r.a.createElement(x.a,{p:2},r.a.createElement(v.a,{variant:"h4"},"My favorite Google Fonts"),r.a.createElement(v.a,{variant:"subtitle2",color:"primary"},"Thurs Jun 25, 2020"),r.a.createElement(v.a,{paragraph:!0},"Author: Kyle Johnson"),r.a.createElement(v.a,{paragraph:!0},"It is important to have the right typography for many reasons. Here are some reasons along with some of my favoite Google Fonts."),r.a.createElement(v.a,null,"1. Readability"),r.a.createElement(v.a,{paragraph:!0},"They may seem obvious but so many developers choose a font on design over readability. Google Fonts has many fonts the look beautiful in their Handwriting category but these are often hard to read. Chose a font that is clean."),r.a.createElement(v.a,null,"2. Target Audience"),r.a.createElement(v.a,{paragraph:!0},"Knowing and understanding the target audience of the website will help determine the font choice. A business website like The New York Times has an older, professional target audience which makes for a more profession looking font. Virgin Airlines is targeting the younger audlt and use a font that is softer and has more spacing between characters and words."),r.a.createElement(v.a,null,"Here are two of my favorite fonts from Google Fonts."),r.a.createElement(Y.a,null,r.a.createElement(z.a,{component:"a",href:"https://fonts.google.com/specimen/Quicksand?query=quicksand"},r.a.createElement(U.a,{primary:"Quicksand"})),r.a.createElement(z.a,{component:"a",href:"https://fonts.google.com/specimen/Baloo+2?query=baloo"},r.a.createElement(U.a,{primary:"Baloo 2"}))))))))}var ee=Object(k.a)((function(e){return{root:Object(R.a)({},e.breakpoints.up("sm"),{borderRadius:"10% / 50%"})}}));function ae(){var e=ee();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{item:!0,sm:12},r.a.createElement(x.a,{p:2,my:4,align:"center",color:"white",bgcolor:"primary.main",className:e.root},r.a.createElement(v.a,{variant:"h5",gutterBottom:!0},"Hi, I'm Kyle. Nice to meet you."),r.a.createElement(v.a,null,"Full-stack developer with 5+ years experience in internet technologies and 30+ years experience of being an all-around nice guy. Be sure to check out my portfolio for recent work and my blog for tutorials."))),r.a.createElement(u.a,{item:!0,sm:12},r.a.createElement(x.a,{p:2,my:4},r.a.createElement(v.a,{variant:"h4",align:"center"},"Skills"),r.a.createElement(u.a,{container:!0,align:"center"},r.a.createElement(u.a,{item:!0,sm:6},r.a.createElement(v.a,{variant:"h6",color:"primary"},"Front-End"),r.a.createElement(D.a,{label:"HTML5",variant:"outlined"}),r.a.createElement(D.a,{label:"CSS3",variant:"outlined"}),r.a.createElement(D.a,{label:"Javascript",variant:"outlined"}),r.a.createElement(D.a,{label:"React",variant:"outlined"}),r.a.createElement(D.a,{label:"Material-Ui",variant:"outlined"}),r.a.createElement(D.a,{label:"Chrome Dev Tools",variant:"outlined"}),r.a.createElement(D.a,{label:"Bootstrap",variant:"outlined"})),r.a.createElement(u.a,{item:!0,sm:6},r.a.createElement(v.a,{variant:"h6",color:"primary"},"Back-End"),r.a.createElement(D.a,{label:"Node.js",variant:"outlined"}),r.a.createElement(D.a,{label:"Express.js",variant:"outlined"}),r.a.createElement(D.a,{label:"MongoDB",variant:"outlined"}),r.a.createElement(D.a,{label:"Git & GitHub",variant:"outlined"}),r.a.createElement(D.a,{label:"Cypress.io",variant:"outlined"}))))),r.a.createElement(u.a,{item:!0,sm:6},r.a.createElement(x.a,{p:2,my:4},r.a.createElement(v.a,{variant:"h4",align:"center"},"Education"),r.a.createElement(Y.a,null,r.a.createElement(z.a,null,r.a.createElement(U.a,{primary:"University of Denver",secondary:"Bootcamp Computer Software Engineering"})),r.a.createElement(z.a,null,r.a.createElement(U.a,{primary:"University of Wisconsin - Stout",secondary:"BS Mechanical Engineering"}))))))}var te=t(96),ne=t(356),re=t(357),le=t(313),oe=Object(te.a)({typography:{fontFamily:"Quicksand, sans-serif"},palette:{primary:{main:"#EB6D4A"}}}),ie=function(e){Object(m.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this)).getBlogposts=function(){le.get("https://cors-anywhere.herokuapp.com/https://kj-portfolio.herokuapp.com/api/blogpost").then((function(e){n.setState({blogposts:e.data,loading:!1})})).catch((function(e){console.log("Error fetching and parsing data",e)}))},n.state={blogposts:[],loading:!0},n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getBlogposts()}},{key:"render",value:function(){return r.a.createElement(ne.a,{theme:oe},r.a.createElement(re.a,null,r.a.createElement(w,null),r.a.createElement(u.a,{container:!0,justify:"center",style:{maxWidth:"800px",margin:"0 auto"}},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/portfolio"},r.a.createElement(I,null)),r.a.createElement(p.a,{path:"/blog"},this.state.loading?r.a.createElement("p",null,"Loading..."):r.a.createElement(Z,{blogposts:this.state.blogposts})),r.a.createElement(p.a,{exact:!0,path:"/"},r.a.createElement(ae,null)))),r.a.createElement(C,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y.a,{basename:"/mern-client"},r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},83:function(e,a,t){e.exports=t.p+"static/media/man.9152be17.png"},90:function(e,a,t){e.exports=t.p+"static/media/11kyle.github.io_ghibli-react-app_.2bc154d0.png"},91:function(e,a,t){e.exports=t.p+"static/media/11kyle.github.io_gif-search_.765ebfbf.png"},92:function(e,a,t){e.exports=t.p+"static/media/11kyle.github.io_react-todo-table_.2e8b7e79.png"}},[[105,1,2]]]);
//# sourceMappingURL=main.82ef0f4b.chunk.js.map