"use strict";(self.webpackChunkrsd_documentation=self.webpackChunkrsd_documentation||[]).push([[9466],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9751:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},l="Making a release",i={unversionedId:"developers/release",id:"version-v2/developers/release",title:"Making a release",description:"To make a new release we use github action release_manual.yml to manually release all modules at once.",source:"@site/i18n/nl/docusaurus-plugin-content-docs/version-v2/developers/05-release.md",sourceDirName:"developers",slug:"/developers/release",permalink:"/rsd-documentation/nl/developers/release",draft:!1,editUrl:"https://github.com/dmijatovic/rsd-docusaurus-test/edit/main/versioned_docs/version-v2/developers/05-release.md",tags:[],version:"v2",lastUpdatedAt:1694698402,formattedLastUpdatedAt:"14 sep. 2023",sidebarPosition:5,frontMatter:{},sidebar:"docsSidebar",previous:{title:"API",permalink:"/rsd-documentation/nl/developers/api"},next:{title:"Embed an IFrame",permalink:"/rsd-documentation/nl/developers/embed"}},s={},c=[{value:"Performed operations",id:"performed-operations",level:2},{value:"Removing draft release",id:"removing-draft-release",level:2},{value:"Removing tags",id:"removing-tags",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"making-a-release"},"Making a release"),(0,n.kt)("p",null,"To make a new release we use github action release_manual.yml to manually release all modules at once."),(0,n.kt)("p",null,"Follow these steps to call release action."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"navigate to ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/research-software-directory/RSD-as-a-service/actions"},"github actions")),(0,n.kt)("li",{parentName:"ul"},"select ",(0,n.kt)("inlineCode",{parentName:"li"},"create release draft (manual)")," action"),(0,n.kt)("li",{parentName:"ul"},'on the right you select "Run workflow". Ensure "main" brand is selected and click on "Run workflow"')),(0,n.kt)("h2",{id:"performed-operations"},"Performed operations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"checkout main branch with the complete history"),(0,n.kt)("li",{parentName:"ul"},"calculate new version based on conventional commits keywords 'feat/fix'. For breaking changes use BREAKING CHANGE: at the footer of the commit message"),(0,n.kt)("li",{parentName:"ul"},"build the services:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"auth: build, tag and push docker image to ghcr.io"),(0,n.kt)("li",{parentName:"ul"},"database: build, tag and push docker image to ghcr.io"),(0,n.kt)("li",{parentName:"ul"},"backend: build, tag and push docker image to ghcr.io"),(0,n.kt)("li",{parentName:"ul"},"frontend: build, tag and push docker image to ghcr.io"),(0,n.kt)("li",{parentName:"ul"},"nginx: build, tag and push docker image to ghcr.io"),(0,n.kt)("li",{parentName:"ul"},"scrapers: build, tag and push docker image to ghcr.io"))),(0,n.kt)("li",{parentName:"ul"},"create docker-compose.yml for relase that uses images created in the previous step"),(0,n.kt)("li",{parentName:"ul"},"update citation file with new version number and release date"),(0,n.kt)("li",{parentName:"ul"},"make deployment.zip file where all files needed for deployment are included"),(0,n.kt)("li",{parentName:"ul"},"commit new CITATION.cff file with message 'release: update citation file'"),(0,n.kt)("li",{parentName:"ul"},"create github release (draft) and include information from changelog and deployment.zip")),(0,n.kt)("h2",{id:"removing-draft-release"},"Removing draft release"),(0,n.kt)("p",null,"If you need to remove draft release you can do that via ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/research-software-directory/RSD-as-a-service/releases"},"github interface")),(0,n.kt)("h2",{id:"removing-tags"},"Removing tags"),(0,n.kt)("p",null,"If you need to remove tag from the repository use following commands."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# delete locally\ngit tag -d {tag}\n# remove from origin\ngit push origin --delete {tag}\n# or more specificaly\ngit push origin :refs/tags/{tag}\n")))}p.isMDXComponent=!0}}]);