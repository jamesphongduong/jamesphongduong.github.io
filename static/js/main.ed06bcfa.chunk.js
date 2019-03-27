(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){e.exports=a(219)},112:function(e,t,a){},219:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(74),c=a.n(r),s=a(75),m=a(76),o=a(93),i=a(77),u=a(94),d=a(220),g=(a(112),function(){return l.a.createElement(d.a,null,l.a.createElement("ul",{className:"navbar-ul"},l.a.createElement("li",{className:"hvr-underline-from-center"},l.a.createElement("a",{href:"#projects"}," projects ")),l.a.createElement("li",{className:"hvr-underline-from-center"},l.a.createElement("a",{href:"#aboutme"},"about me "))))}),E=a(221),h=a(80),p=a.n(h),v=a(1),b=a.n(v);window.onload=function(){document.getElementById("email").addEventListener("click",function(){var e=document.createElement("textarea");e.value="james.duong93@gmail.com",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),p()({icon:"success",text:"Email copied to clipboard! \n\njames.duong93@gmail.com",button:!1,timer:2e3})}),b()(window).width()<992&&b()(".large").removeClass("large")};var f=function(){return l.a.createElement("div",{className:"banner"},l.a.createElement(d.a,null,l.a.createElement("div",{className:"banner-container"},l.a.createElement("h1",null," JAMES DUONG. "),l.a.createElement("h3",null," web developer "),l.a.createElement("ul",{className:"plugs"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/jamesphongduong",target:"_blank"},l.a.createElement(E.a,{size:"large",bordered:!0,name:"github alternate"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/james-phong-duong-9168a89a/",target:"_blank"},l.a.createElement(E.a,{size:"large",bordered:!0,name:"linkedin"}))),l.a.createElement("li",null,l.a.createElement(E.a,{size:"large",bordered:!0,name:"mail",id:"email"})))),l.a.createElement("div",{className:"banner-container banner-image"},l.a.createElement("img",{id:"banner-image",src:"https://s3-ap-southeast-2.amazonaws.com/portfolio-react-images/computer.svg"}))))};b()(function(){b()(".hidden").hide(),b()(".project-label").click(function(){var e=b()(this).parent().parent().next();if(b()(this).hasClass("active"))return b()(this).removeClass("active"),b()(e).slideUp("fast");b()(this).addClass("active"),b()(e).slideDown("fast")})});var w=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"project-container"},l.a.createElement("div",{className:"project-label-container"},l.a.createElement("h4",{className:"project-label"},e.name)," ",l.a.createElement("img",{src:e.src}))),l.a.createElement("div",{className:"content-container hidden"},l.a.createElement("h4",null,"The Idea"),l.a.createElement("div",null,e.content),l.a.createElement("h4",null,"Tech Stack"),l.a.createElement("div",null,e.content2),l.a.createElement("h4",null," Website Demo"),l.a.createElement("div",null,l.a.createElement("a",{href:e.url,target:"_blank"},e.url," "))))},I=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"heading-container"},l.a.createElement("div",{className:"".concat(e.headingIcon," heading-icon")}," "),l.a.createElement("h2",null,e.title),l.a.createElement("hr",{className:"subhr"})))},x=function(e){return l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("div",{className:"button"},e.text," "))},k=function(){return l.a.createElement("div",{id:"projects"},l.a.createElement(I,{title:"My Projects",headingIcon:"heading-icon1"}),l.a.createElement("div",{className:"projects"},l.a.createElement(w,{name:"oneUp",src:"/Images/oneUp.png",content:[l.a.createElement("p",null,'Social Media web app based on challenges, think "ALS Ice Bucket Challenge." MVP built where administrators can create challenges and users can view and complete challenges by uploading a video of completing the relevant challenge.')],content2:"MERN Stack (MongoDB, Express, React & NodeJs), AWS S3 (Storage) & Heroku (Deployment)",url:"http://1up-app.s3-website-ap-southeast-2.amazonaws.com"}),l.a.createElement(w,{name:"CasualMeals",src:"/Images/chef-flat.svg",content:[l.a.createElement("p",null,"Two sided marketplace where chefs can list and sell meals, and customers able to view and purchase meals.")],content2:"Ruby on Rails, Postgresql, AWS S3 (Storage), Stripe (Payment) & Heroku (Deployment)",url:"https://casualmeals.herokuapp.com/"})),l.a.createElement(x,{text:"View my Github Repo",url:"https://github.com/jamesphongduong"}))},j=function(e){return l.a.createElement("li",null,l.a.createElement("img",{src:e.src}),e.text)},y=function(){return l.a.createElement("div",{id:"aboutme"},l.a.createElement(I,{title:"About Me",headingIcon:"heading-icon2"}),l.a.createElement("p",null,"I enjoy the process of designing and building websites from the visual aesthetics of a website to the geeky code that's written."),l.a.createElement("p",null,"I am a full-stack web developer with strengths with the MERN Stack: MongoDB, Express, React and NodeJs."),l.a.createElement(I,{title:"Tech I speak",headingIcon:"heading-icon3"}),l.a.createElement("h2",null,"Front-end Development"),l.a.createElement("ul",null,l.a.createElement(j,{src:"/Images/react-native.svg",text:"ReactJs"}),l.a.createElement(j,{src:"/Images/html5.svg",text:"HTML5"}),l.a.createElement(j,{src:"/Images/css.svg",text:"CSS"}),l.a.createElement(j,{src:"/Images/javascript.svg",text:"JavaScript"}),l.a.createElement(j,{src:"/Images/jquery.svg",text:"jQuery"})),l.a.createElement("h2",null,"Back-end Development"),l.a.createElement("ul",null,l.a.createElement(j,{src:"/Images/ruby.svg",text:"Ruby / Ruby on Rails"}),l.a.createElement(j,{src:"/Images/nodejs.svg",text:"NodeJs"}),l.a.createElement(j,{src:"/Images/express.svg",text:"ExpressJs"}),l.a.createElement(j,{src:"/Images/mongodb.svg",text:"MongoDB"}),l.a.createElement(j,{src:"/Images/postgresql.svg",text:"Postgresql"}),l.a.createElement(j,{src:"/Images/php.svg",text:"PHP"})),l.a.createElement("h2",null,"Other"),l.a.createElement("ul",null,l.a.createElement(j,{src:"/Images/heroku.svg",text:"Heroku"}),l.a.createElement(j,{src:"/Images/git.svg",text:"Git"}),l.a.createElement(j,{src:"/Images/s3.svg",text:"Amazon Storage Service"}),l.a.createElement(j,{src:"/Images/wordpress.svg",text:"WordPress"})))},N=function(){return l.a.createElement("div",{className:"footer"}," ",l.a.createElement(E.a,{name:"copyright outline"})," Copyright 2019 | James Duong")},S=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(g,null),l.a.createElement(f,null),l.a.createElement(d.a,null,l.a.createElement(k,null),l.a.createElement("hr",null),l.a.createElement(y,null),l.a.createElement("hr",null),l.a.createElement(N,null)))}}]),t}(n.Component),M=a(92);a.n(M).a.load({google:{families:["Muli","Monda:700","Roboto Mono:300","sans-serif"]}}),c.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.ed06bcfa.chunk.js.map