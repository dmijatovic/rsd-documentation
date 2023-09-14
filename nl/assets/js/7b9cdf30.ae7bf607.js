"use strict";(self.webpackChunkrsd_documentation=self.webpackChunkrsd_documentation||[]).push([[3963],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>v});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var g=a.createContext({}),A=function(e){var t=a.useContext(g),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},l=function(e){var t=A(e.components);return a.createElement(g.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,g=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=A(r),p=i,v=c["".concat(g,".").concat(p)]||c[p]||h[p]||o;return r?a.createElement(v,n(n({ref:t},l),{},{components:r})):a.createElement(v,n({ref:t},l))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=p;var s={};for(var g in t)hasOwnProperty.call(t,g)&&(s[g]=t[g]);s.originalType=e,s[c]="string"==typeof e?e:i,n[1]=s;for(var A=2;A<o;A++)n[A]=r[A];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>n,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>A});var a=r(7462),i=(r(7294),r(3905));const o={},n="Navigating the RSD",s={unversionedId:"users/navigation",id:"version-v1/users/navigation",title:"Navigating the RSD",description:"image",source:"@site/i18n/nl/docusaurus-plugin-content-docs/version-v1/users/02-navigation.md",sourceDirName:"users",slug:"/users/navigation",permalink:"/rsd-documentation/nl/v1/users/navigation",draft:!1,editUrl:"https://github.com/dmijatovic/rsd-docusaurus-test/edit/main/versioned_docs/version-v1/users/02-navigation.md",tags:[],version:"v1",lastUpdatedAt:1694698402,formattedLastUpdatedAt:"14 sep. 2023",sidebarPosition:2,frontMatter:{},sidebar:"docsSidebar",previous:{title:"Getting started",permalink:"/rsd-documentation/nl/v1/users/getting-started"},next:{title:"Online demo",permalink:"/rsd-documentation/nl/v1/users/online-demo"}},g={},A=[{value:"Global search",id:"global-search",level:2},{value:"Software Overview",id:"software-overview",level:2},{value:"Project Overview",id:"project-overview",level:2},{value:"Organization Overview",id:"organization-overview",level:2}],l={toc:A},c="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"navigating-the-rsd"},"Navigating the RSD"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:r(667).Z,width:"1383",height:"828"})),(0,i.kt)("p",null,"There are many ways to discover interesting research software on the RSD. The main starting points are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The search bar (in the header)"),(0,i.kt)("li",{parentName:"ul"},'The software overview (reachable by clicking "Discover Software" or the "Software" link in the header)'),(0,i.kt)("li",{parentName:"ul"},'The projects overview (reachable by clicking "Projects" in the header)'),(0,i.kt)("li",{parentName:"ul"},'The organizations overview (reachable by clicking "Organizations" in the header)')),(0,i.kt)("p",null,"For more advanced users, we also offer a ",(0,i.kt)("a",{parentName:"p",href:"API"},"REST API"),", allowing you to use the RSD as a data source for other applications."),(0,i.kt)("h2",{id:"global-search"},"Global search"),(0,i.kt)("p",null,"Using the search bar in the header, you can perform a global search of all data in the RSD by simply providing a search term.\nCurrently, the search will match the following fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the name of software, projects and organizations"),(0,i.kt)("li",{parentName:"ul"},"the short description of software and projects"),(0,i.kt)("li",{parentName:"ul"},"the keywords of software and projects"),(0,i.kt)("li",{parentName:"ul"},"the research domains of projects")),(0,i.kt)("p",null,"At the moment, we do not yet match on the long descriptions of software, projects and organizations, but we expect to do so in the future."),(0,i.kt)("h2",{id:"software-overview"},"Software Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:r(4338).Z,width:"1384",height:"980"})),(0,i.kt)("p",null,"The software overview page provides a list of all software in the RSD. For each software, a ",(0,i.kt)("strong",{parentName:"p"},"card")," is shown with basic information: name, short description, last update,\nnumber of mentions, and number of contributors. To browse and search for software of interest, the ",(0,i.kt)("em",{parentName:"p"},"filter and search")," bar on the top of the page can be used:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:r(990).Z,width:"714",height:"44"})),(0,i.kt)("p",null,"Simply typing into the search bar will trigger the RSD to search for software containing (part of) the terms you entered. The name, short description and\nkeywords are included in the search. Entering multiple words into the search bar will be interpreted as an ",(0,i.kt)("strong",{parentName:"p"},"AND"),". Only software containing all search terms will be shown as a result."),(0,i.kt)("p",null,"By default, 12 software cards are shown per page. This number can be increased if desired using the ",(0,i.kt)("strong",{parentName:"p"},"Per page")," dropdown menu. The ",(0,i.kt)("strong",{parentName:"p"},"<")," and ",(0,i.kt)("strong",{parentName:"p"},">")," icons can be used to move between pages."),(0,i.kt)("p",null,"It is also possible to filter the software by keywords. By clicking the filter icon ",(0,i.kt)("img",{alt:"image",src:r(1833).Z,width:"24",height:"22"})," a filter popup will appear allowing you to select (or type) one or more\nkeywords used by software in the RSD:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:r(1853).Z,width:"390",height:"581"})),(0,i.kt)("p",null,"Selecting multiple keywords is interpreted as an ",(0,i.kt)("strong",{parentName:"p"},"AND"),". Only software using all of the selected keywords will be shown as a result. You can also combine the keyword filters with search\nterms to further reduce the selection."),(0,i.kt)("h2",{id:"project-overview"},"Project Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:r(6725).Z,width:"1384",height:"980"})),(0,i.kt)("p",null,"The project overview page provides a list of all projects in the RSD. For each project, a ",(0,i.kt)("strong",{parentName:"p"},"card")," is shown with basic information: name, short description, last update,\nand if the project is running or completed. To browse and search for projects of interest, the ",(0,i.kt)("em",{parentName:"p"},"filter and search")," bar on the top of the page can be used:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:r(3839).Z,width:"714",height:"44"})),(0,i.kt)("p",null,"Simply typing into the search bar will trigger the RSD to search for projects containing (part of) the terms you entered. The name, short description, keywords, and research domains\nare included in the search. Entering multiple words into the search bar will be interpreted as an ",(0,i.kt)("strong",{parentName:"p"},"AND"),". Only projects containing all search terms will be shown as a result."),(0,i.kt)("p",null,"By default, 12 project cards are shown per page. This number can be increased if desired using the ",(0,i.kt)("strong",{parentName:"p"},"Per page")," dropdown menu. The ",(0,i.kt)("strong",{parentName:"p"},"<")," and ",(0,i.kt)("strong",{parentName:"p"},">")," icons can be used to move between pages."),(0,i.kt)("p",null,"It is also possible to filter the projects by keywords and/or research domains. By clicking the filter icon ",(0,i.kt)("img",{alt:"image",src:r(1833).Z,width:"24",height:"22"})," a filter popup will appear allowing you to select\n(or type) one or more keywords and research domains used by projects in the RSD:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:r(8658).Z,width:"368",height:"483"})),(0,i.kt)("p",null,"Selecting multiple keywords and research domains is interpreted as an ",(0,i.kt)("strong",{parentName:"p"},"AND"),". Only software using all of the selected keywords and research domains will be shown as a result.\nYou can also combine the keyword filters with search terms to further reduce the selection."),(0,i.kt)("h2",{id:"organization-overview"},"Organization Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:r(7684).Z,width:"1384",height:"980"})),(0,i.kt)("p",null,"The organization overview page provides a list of all organizations listed in the RSD. For each organization, a ",(0,i.kt)("strong",{parentName:"p"},"card")," is shown basic information: name, logo, and the number of\nsoftware and project pages which this organization participates in."),(0,i.kt)("p",null,"For organizations which are a registered member of the RSD, the ",(0,i.kt)("img",{alt:"image",src:r(191).Z,width:"31",height:"30"})," checkmark is shown on the card. If you wish to register your organization, you\ncan find more information in ",(0,i.kt)("a",{parentName:"p",href:"register-organization.md"},"How to register an organization"),"."),(0,i.kt)("p",null,"To browse and search for organizations of interest, the ",(0,i.kt)("em",{parentName:"p"},"search")," bar on the top of the page can be used:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image",src:r(9684).Z,width:"679",height:"45"})),(0,i.kt)("p",null,"Simply typing into the search bar will trigger the RSD to search for organization whose name contains (part of) the terms you entered. Entering multiple words into the search bar will\nbe interpreted as an ",(0,i.kt)("strong",{parentName:"p"},"AND"),". Only organizations whose name contains all search terms will be shown as a result."),(0,i.kt)("p",null,"By default, 12 organization cards are shown per page. This number can be increased if desired using the ",(0,i.kt)("strong",{parentName:"p"},"Per page")," dropdown menu. The ",(0,i.kt)("strong",{parentName:"p"},"<")," and ",(0,i.kt)("strong",{parentName:"p"},">")," icons can be used to move\nbetween pages."))}h.isMDXComponent=!0},1833:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/gif;base64,R0lGODlhGAAWAOMPAHV1dX5+foaGho+Pj5eXl5iYmKCgoLq6usvLy9TU1Nzc3OXl5e7u7vb29v////8eHiH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAA8ALAAAAAAYABYAAARG0MlJq704660J+GAYFpgnnh+BMQEqBkyWuKGyHTRwcI55GjxHQ3ASNIKOxWuBlCBCiOYkJJ2CqhIqVlvlSr3NwWeALZvPEQA7"},8658:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/filter-keywords-domains-e738df4c33f9119199aeb3772c85dc08.gif"},1853:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/filter-keywords-98448eb89d860e9a149f69facc59855d.gif"},667:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/landing-page-76c6432ba54d6ebfefdfdb56ef3ac0d2.gif"},7684:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/organization-overview-1792a661c01b9921f5dcb7b11b704917.gif"},6725:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/project-overview-e0751186c423f9b5ef91c76d54688dca.gif"},191:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/gif;base64,R0lGODlhHwAeAMZyAI3byY7byY7cyY/cyZHcypPdy5Tdy5XdzJbdzJXezJbezJbezZfezJfezZjezZnezprezprfzpvfzpvfz5zfz53fz5rgz53g0J7g0J/g0J/g0aDg0KDg0aHg0aHh0aLh0aTi06bi06fi06nj1Krj1a/k1rDk17Ll2LPm2brp3b3p3sDq38Dq4MDr4MHr4cLr4cPr4cTr4cXs4sfs48bt48ft5Mjt5Mrt5Mvt5Mvu5czu5c3u5s3v5s/v59Dv59Lw6NLw6dXw6dPx6djx6tny7Nvz7d707uH07+H18OT18eP28eX28eX28ub38+f38+j38+r49ev49ev59ez59ez59u359u759u/59/D6+PH6+PH7+PP7+fT7+fX7+fb7+vT8+vb8+/f8+/j9+/j9/Pr9/Pr9/fv9/fr+/fv+/fz+/fz+/v3+/v7+/v3//v3///7//v7///////8eHv8eHv8eHv8eHv8eHv8eHv8eHv8eHv8eHv8eHv8eHv8eHv8eHv8eHiH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAH8ALAAAAAAfAB4AAAf+gHGCg4RwSYSES2uIjI1xTwgNR2iCaksWB0aOm3FpAw6gAzs/AqAOAGWcjTmmra4wqohZBa61DgVRsV89Jhm2thUlPFqNMxQFCL/KDggFEy6INcvTpi2IRNTUQIhS2a0iDa5KiGveoCBxOgytXYho5hpvgj7hoFuEaQ/eH/KCvqYKwghq88GbCEIeamFQEwfFLwKuRgxy0+HXiSHrXC1wMsWAKRKD1FxQ1iDOCFcHmAiaosBBiEFm6v0CqQZCKwY4BkHhAEeQmQTLGJwRREamAwYxGKVZsOwAF0JgXDVgQahNhGlXELGp1WCFIDgbqHlBRMVWg6QFqS1BVOQXA6NIy4QgsmFOGTRCLCQcgJutAYIIKRphkfFBgjcIHV5UiWWF1rQCTWIRokFNhWRCaD6BAhDjRgBTA8RcJoTEQYYgYwShGZKQyKZAADs="},990:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/gif;base64,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"},3839:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/gif;base64,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"},9684:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/gif;base64,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"},4338:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/software-overview-606937b2d4124c00f5a6a09baf879714.gif"}}]);