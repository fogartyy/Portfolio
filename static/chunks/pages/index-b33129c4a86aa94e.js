(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9444)}])},1516:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(2648).Z,a=n(7273).Z,l=r(n(7294)),o=n(4532),s=n(3353),c=n(1410),u=n(9064),i=n(370),f=n(9955),d=n(4224),p=n(508),h=n(1516),v=n(4266);let b=new Set;function m(e,t,n,r,a){if(a||s.isLocalURL(t)){if(!r.bypassPrefetchedCheck){let a=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+a;if(b.has(l))return;b.add(l)}Promise.resolve(e.prefetch(t,n,r)).catch(e=>{})}}function j(e){return"string"==typeof e?e:c.formatUrl(e)}let y=l.default.forwardRef(function(e,t){let n,r;let{href:c,as:b,children:y,prefetch:x,passHref:g,replace:_,shallow:N,scroll:w,locale:C,onClick:M,onMouseEnter:E,onTouchStart:k,legacyBehavior:O=!1}=e,P=a(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=y,O&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let L=!1!==x,R=l.default.useContext(f.RouterContext),S=l.default.useContext(d.AppRouterContext),I=null!=R?R:S,T=!R,{href:A,as:D}=l.default.useMemo(()=>{if(!R){let e=j(c);return{href:e,as:b?j(b):e}}let[e,t]=o.resolveHref(R,c,!0);return{href:e,as:b?o.resolveHref(R,b):t||e}},[R,c,b]),H=l.default.useRef(A),K=l.default.useRef(D);O&&(r=l.default.Children.only(n));let U=O?r&&"object"==typeof r&&r.ref:t,[B,F,X]=p.useIntersection({rootMargin:"200px"}),Z=l.default.useCallback(e=>{(K.current!==D||H.current!==A)&&(X(),K.current=D,H.current=A),B(e),U&&("function"==typeof U?U(e):"object"==typeof U&&(U.current=e))},[D,U,A,X,B]);l.default.useEffect(()=>{I&&F&&L&&m(I,A,D,{locale:C},T)},[D,A,F,C,L,null==R?void 0:R.locale,I,T]);let q={ref:Z,onClick(e){O||"function"!=typeof M||M(e),O&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,n,r,a,o,c,u,i,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i&&!s.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[a?"replace":"push"](n,r,{shallow:o,locale:u,scroll:c}):t[a?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};i?l.default.startTransition(h):h()}(e,I,A,D,_,N,w,C,T,L)},onMouseEnter(e){O||"function"!=typeof E||E(e),O&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),I&&(L||!T)&&m(I,A,D,{locale:C,priority:!0,bypassPrefetchedCheck:!0},T)},onTouchStart(e){O||"function"!=typeof k||k(e),O&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),I&&(L||!T)&&m(I,A,D,{locale:C,priority:!0,bypassPrefetchedCheck:!0},T)}};if(u.isAbsoluteUrl(D))q.href=D;else if(!O||g||"a"===r.type&&!("href"in r.props)){let e=void 0!==C?C:null==R?void 0:R.locale,t=(null==R?void 0:R.isLocaleDomain)&&h.getDomainLocale(D,e,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);q.href=t||v.addBasePath(i.addLocale(D,e,null==R?void 0:R.defaultLocale))}return O?l.default.cloneElement(r,q):l.default.createElement("a",Object.assign({},P,q),n)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:c}=e,u=c||!l,[i,f]=r.useState(!1),d=r.useRef(null),p=r.useCallback(e=>{d.current=e},[]);r.useEffect(()=>{if(l){if(u||i)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:a,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=s.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=o.get(r)))return t;let a=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:a},s.push(n),o.set(n,t),t}(n);return l.set(e,t),a.observe(e),function(){if(l.delete(e),a.unobserve(e),0===l.size){a.disconnect(),o.delete(r);let e=s.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&s.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!i){let e=a.requestIdleCallback(()=>f(!0));return()=>a.cancelIdleCallback(e)}},[u,n,t,i,d.current]);let h=r.useCallback(()=>{f(!1)},[]);return[p,i,h]};var r=n(7294),a=n(29);let l="function"==typeof IntersectionObserver,o=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9444:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),a=n(1664),l=n.n(a),o=n(1163),s=n(7294);let c=()=>{let[e,t]=(0,s.useState)(!1),n=(0,o.useRouter)(),a=()=>{t(!e)};return(0,r.jsx)("nav",{className:"navbar is-transparent",style:{width:"100%"},children:(0,r.jsxs)("div",{className:"navbar-container",children:[(0,r.jsx)("div",{className:"navbar-brand",children:(0,r.jsx)(l(),{href:"/"})}),(0,r.jsx)("div",{className:"navbar-menu ".concat(e?"is-active":""),children:(0,r.jsxs)("div",{className:"navbar-end",children:[(0,r.jsx)(l(),{className:"navbar-item ".concat("/"===n.pathname?"is-active":""),href:"/",children:"Home"}),(0,r.jsx)(l(),{className:"navbar-item ".concat("/about"===n.pathname?"is-active":""),href:"/about",children:"About"}),(0,r.jsx)(l(),{className:"navbar-item ".concat("/contact"===n.pathname?"is-active":""),href:"/contact",children:"Contact"}),(0,r.jsx)("button",{className:"button is-primary is-rounded navbar-item",children:"="})]})}),(0,r.jsxs)("div",{className:"navbar-burger",onClick:a,children:[(0,r.jsx)("span",{}),(0,r.jsx)("span",{}),(0,r.jsx)("span",{})]})]})})},u=()=>(0,r.jsx)("div",{className:"hero",style:{width:"100%"},children:(0,r.jsxs)("div",{className:"grid grid-cols-12 grid-rows-6 h-full",children:[(0,r.jsxs)("div",{className:"col-start-1 col-span-7 row-start-3 row-span-5",children:[(0,r.jsx)("h2",{className:"subtitle",children:"HELLO MY NAME IS"}),(0,r.jsx)("h1",{className:"title",children:"Kyle Fogarty-Anderson"}),(0,r.jsx)("h2",{className:"subtitle",children:"I am a Full Stack Developer"}),(0,r.jsx)("br",{}),(0,r.jsx)("button",{className:"button",children:"Download Resume"})]}),(0,r.jsx)("div",{className:"paralax rounded col-start-8 col-span-12 row-start-1 row-span-6 shadow"})]})});function i(){return(0,r.jsxs)("main",{children:[(0,r.jsx)(c,{}),(0,r.jsx)("div",{className:"hero",children:(0,r.jsx)("div",{className:"hero-body",children:(0,r.jsx)(u,{})})})]})}},1664:function(e,t,n){e.exports=n(5569)},1163:function(e,t,n){e.exports=n(6885)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);