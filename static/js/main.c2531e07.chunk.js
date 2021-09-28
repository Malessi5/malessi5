(this.webpackJsonpmalessi5=this.webpackJsonpmalessi5||[]).push([[0],{20:function(A,e,c){},21:function(A,e,c){},22:function(A,e,c){},32:function(A,e,c){},33:function(A,e,c){},34:function(A,e,c){},35:function(A,e,c){"use strict";c.r(e);var s=c(1),t=c.n(s),n=c(12),g=c.n(n),i=(c(20),c(21),c(22),c(6)),a=c(0);function r(){return Object(a.jsxs)("div",{className:"header-container",children:[Object(a.jsx)("div",{className:"header-welcome",children:Object(a.jsx)("h3",{children:"Mike Alessi - Full Stack Developer"})}),Object(a.jsxs)("div",{className:"links",children:[Object(a.jsx)(i.b,{to:"/projects",className:"no-underline",children:Object(a.jsx)("div",{className:"header-link",children:Object(a.jsx)("h4",{children:"Projects"})})}),Object(a.jsx)(i.b,{to:"/about",className:"no-underline",children:Object(a.jsx)("div",{className:"header-link",children:Object(a.jsx)("h4",{children:"About"})})}),Object(a.jsx)(i.b,{to:"/contact",className:"no-underline",children:Object(a.jsx)("div",{className:"header-link",children:Object(a.jsx)("h4",{children:"Contact"})})})]})]})}var o=[{id:1,name:"PokeWar",description:"Two player online turn-based Pokemon game. Features include: User account creation and profile management, Google and Github authentication, real-time in-game chat, global leaderboard.",liveUrl:"https://poke-war-4483c.web.app/",gitUrl:"https://github.com/bell-peppers/PokeWar",techStack:"React, Redux, Firebase, Material UI, and a 3rd-party api (PokeAPI).",imageUrls:["pics/pkwar/pk1.png","pics/pkwar/pk2.png","pics/pkwar/pk3.png","pics/pkwar/pk4.png","pics/pkwar/pk5.png","pics/pkwar/pk6.png"]},{id:2,name:"Ray's Kitchen",description:"Fully functioning mock e-commerce website. Features include: user authentication, working shopping cart, item pagination.",liveUrl:"https://graceshopper-fullstack.herokuapp.com/",gitUrl:"https://github.com/Brownie-Batter/graceshopper-project",techStack:"PostgreSQL, Express.js, React/Redux, Node.js., Material UI",imageUrls:["https://camo.githubusercontent.com/49bc0b0957097b32721516777c1b72472f5e89f5739c7151efa2b4b8a2a5cc4d/68747470733a2f2f63646e2e6c6f6f6d2e636f6d2f73657373696f6e732f7468756d626e61696c732f30393661343066343136323734346364386461353538373138613463353738342d776974682d706c61792e676966"]},{id:3,name:"Drink Randomizer",description:"Drink Randomizer will present the user with a random drink recipe. From here they can save it or keep looking for the right one. Users can create their own accounts to save or delete their favorites. Visitors can visit, but cannot save.",liveUrl:"https://stackathon-eb2e6.web.app/ ",gitUrl:"https://github.com/Malessi5/Stackathon",techStack:"Firebase, Express.js, React/Redux, Node.js, Material UI, 3rd party API",imageUrls:["pics/drinkrandom/drink1.png","pics/drinkrandom/drink2.png","pics/drinkrandom/drink3.png","pics/drinkrandom/drink4.png","pics/drinkrandom/drink5.png"]}];var l=c(5);function j(A){var e=A.name,c=A.description,t=A.tech,n=A.imgs,g=A.liveUrl,i=A.gitUrl,r=n.length-1,o=Object(s.useState)(0),j=Object(l.a)(o,2),C=j[0],B=j[1];return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("div",{className:"proj-pic-container",children:Object(a.jsx)("img",{className:"project-pic",onClick:function(){console.log(C,r),B(C===r?0:C+1)},src:n[C],alt:e})}),Object(a.jsxs)("div",{className:"proj-info",children:[Object(a.jsxs)("div",{className:"proj-info-box",children:[Object(a.jsx)("h2",{children:e}),Object(a.jsx)("p",{children:c}),Object(a.jsxs)("p",{children:[Object(a.jsx)("b",{children:"Built with: "}),t]})]}),Object(a.jsxs)("div",{className:"link-buttons",children:[Object(a.jsx)("a",{href:g,style:{textDecoration:"none"},className:"live-link",target:"blank",children:"Live Site"}),Object(a.jsx)("a",{href:i,className:"git-link",target:"blank",children:Object(a.jsx)("img",{src:"pics/githublogo.png",alt:"github link"})})]})]})]})}c(32);function C(){var A=o;return Object(a.jsxs)("div",{className:"project-container",children:[Object(a.jsx)("h1",{children:"My Projects"}),Object(a.jsx)("div",{className:"projects",children:A.map((function(A){return Object(a.jsx)(j,{name:A.name,description:A.description,tech:A.techStack,imgs:A.imageUrls,liveUrl:A.liveUrl,gitUrl:A.gitUrl},A.id)}))})]})}c(33);var B=c.p+"static/media/photo.87f97ce0.jpeg",d=c.p+"static/media/jslogo.266bd9fb.png";function b(){return Object(a.jsxs)("div",{className:"about-container",children:[Object(a.jsx)("h1",{children:"About me"}),Object(a.jsxs)("div",{className:"infopic-container",children:[Object(a.jsx)("div",{className:"photo",children:Object(a.jsx)("img",{src:B,alt:"It's me"})}),Object(a.jsx)("div",{className:"info",children:Object(a.jsx)("p",{children:"Hi! My name is Mike Alessi and I'm a former tech Salesperson turned Full-stack Developer and a recent graduate of Fullstack Academy. I love building things, solving problems, and learning about new technologies. I've always had an interest in web development which have stemmed from building simple personal websites on Geocities back in the day."})})]}),Object(a.jsxs)("div",{className:"technologies-container",children:[Object(a.jsx)("h3",{children:"Here's some of the technology I've been working with lately: "}),Object(a.jsxs)("div",{className:"technologies",children:[Object(a.jsxs)("div",{className:"technology",children:[Object(a.jsx)("img",{src:d,alt:"Javascript"}),Object(a.jsx)("p",{children:"JavaScript"})]}),Object(a.jsxs)("div",{className:"technology",children:[Object(a.jsx)("img",{src:"data:image/png;base64,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",alt:"HTML"}),Object(a.jsx)("p",{children:"HTML"})]}),Object(a.jsxs)("div",{className:"technology",children:[Object(a.jsx)("img",{src:"pics/logos/csslogo.png",alt:"CSS"}),Object(a.jsx)("p",{children:"CSS"})]})," ",Object(a.jsxs)("div",{className:"technology",children:[Object(a.jsx)("img",{src:"pics/logos/reactlogo.png",alt:"React"}),Object(a.jsx)("p",{children:"React.js"})]}),Object(a.jsxs)("div",{className:"technology",children:[Object(a.jsx)("img",{src:"pics/logos/reduxlogo.png",alt:"Redux"}),Object(a.jsx)("p",{children:"Redux.js"})]}),Object(a.jsxs)("div",{className:"technology",children:[Object(a.jsx)("img",{src:"pics/logos/nodelogo.png",alt:"Node"}),Object(a.jsx)("p",{children:"Node.js"})]}),Object(a.jsxs)("div",{className:"technology",children:[Object(a.jsx)("img",{src:"pics/logos/firebaselogo.png",alt:"Firebase"}),Object(a.jsx)("p",{children:"Firebase"})]}),Object(a.jsxs)("div",{className:"technology",children:[Object(a.jsx)("img",{src:"pics/logos/postgreslogo.png",alt:"PostgreSQL"}),Object(a.jsx)("p",{children:"PostgresSQL"})]}),Object(a.jsxs)("div",{className:"technology",children:[Object(a.jsx)("img",{src:"pics/logos/gitlogo.png",alt:"Git"}),Object(a.jsx)("p",{children:"Git"})]}),Object(a.jsxs)("div",{className:"technology",children:[Object(a.jsx)("img",{src:"pics/logos/muilogo.png",alt:"Material UI"}),Object(a.jsx)("p",{children:"Material UI"})]})]})]}),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"learning-more",children:[Object(a.jsx)("h3",{children:"Interested in learning a bit more about me?"}),Object(a.jsxs)("div",{className:"learn-more-links-container",children:[Object(a.jsx)("a",{href:"./resume/Michael-Alessi-resume-2021.pdf",target:"blank",className:"learn-more-link",children:Object(a.jsx)("b",{children:"View Resume"})}),Object(a.jsx)("a",{href:"https://github.com/Malessi5",target:"blank",className:"learn-more-link",children:Object(a.jsx)("img",{src:"pics/logos/githublogolong.png",alt:"github"})}),Object(a.jsx)("a",{href:"https://www.linkedin.com/in/mpalessi/",target:"blank",className:"learn-more-link",children:Object(a.jsx)("img",{src:"pics/logos/linkedinlogo.png",alt:"linkedin"})})]})]})})]})}function w(){return Object(a.jsx)("div",{})}var h=c(15);c(34);function Q(){var A=Object(s.useState)(""),e=Object(l.a)(A,2),c=e[0],t=e[1],n=Object(s.useState)(""),g=Object(l.a)(n,2),i=g[0],r=g[1],o=Object(s.useState)(""),j=Object(l.a)(o,2),C=j[0],B=j[1],d=Object(s.useState)(""),b=Object(l.a)(d,2),w=b[0],Q=b[1];function m(A){switch(A.target.id){case"name":t(A.target.value);break;case"email":r(A.target.value);break;case"subject":B(A.target.value);break;case"message":Q(A.target.value)}}function O(){t(""),r(""),B(""),Q("")}return Object(a.jsxs)("div",{className:"contact-container",children:[Object(a.jsx)("h1",{children:"Contact Me"}),Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{className:"form-fields",children:[Object(a.jsxs)("div",{className:"form-field",children:[Object(a.jsx)("label",{children:"Name"}),Object(a.jsx)("input",{name:"name",id:"name",value:c,onChange:function(A){m(A)}})]}),Object(a.jsxs)("div",{className:"form-field",children:[Object(a.jsx)("label",{children:"Email Address"}),Object(a.jsx)("input",{name:"email",id:"email",value:i,onChange:function(A){m(A)}})]}),Object(a.jsxs)("div",{className:"form-field",children:[Object(a.jsx)("label",{children:"Subject"}),Object(a.jsx)("input",{name:"subject",id:"subject",value:C,onChange:function(A){m(A)}})]}),Object(a.jsxs)("div",{className:"form-field",children:[Object(a.jsx)("label",{children:"Message"}),Object(a.jsx)("textarea",{name:"message",id:"message",value:w,onChange:function(A){m(A)}})]})]}),Object(a.jsxs)("div",{className:"form-buttons",children:[Object(a.jsx)("button",{type:"button",onClick:function(A){!function(A){if(i.length>2&&c.length>2&&w.length>2){var e={name:c,email:i,subject:C,message:w};h.a("service_biadotd","template_40hnks7",e,"user_gYO7NaeF6CkbUMl6oRFeZ"),O()}else alert("Please make sure the form is filled about before submitting.")}()},children:"Submit"}),Object(a.jsx)("button",{type:"button",onClick:O,children:"Clear"})]})]})]})}var m=c(2);var O=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(i.a,{children:[Object(a.jsx)(r,{}),Object(a.jsx)(m.a,{exact:!0,path:"/",component:C}),Object(a.jsx)(m.a,{path:"malessi5/about",component:b}),Object(a.jsx)(m.a,{path:"/projects",component:C}),Object(a.jsx)(m.a,{path:"/contact",component:Q}),Object(a.jsx)(w,{})]})})},p=function(A){A&&A instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(e){var c=e.getCLS,s=e.getFID,t=e.getFCP,n=e.getLCP,g=e.getTTFB;c(A),s(A),t(A),n(A),g(A)}))};g.a.render(Object(a.jsx)(t.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),p()}},[[35,1,2]]]);
//# sourceMappingURL=main.c2531e07.chunk.js.map