(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"5Epl":function(e,t,a){"use strict";var r=a("zLVn"),i=a("q1tI"),n=a.n(i),s=a("Wbzz"),d=a("9eSz"),o=a.n(d);t.a=function(e){var t=e.src,a=Object(r.a)(e,["src"]),d=Object(s.useStaticQuery)("1396720334"),l=Object(i.useMemo)((function(){return d.images.edges.find((function(e){var a=e.node;return t===a.relativePath}))}),[d,t]);if(!l)return null;var u=l.node,c=(u=void 0===u?{}:u).childImageSharp,f=u.publicURL;return"svg"!==u.extension&&c?n.a.createElement(o.a,Object.assign({fluid:c.fluid},a)):n.a.createElement("img",Object.assign({src:f,alt:""},a))}},"7UuI":function(e,t,a){e.exports={container:"Layout-module--container--1_efc",layout:"Layout-module--layout--2zXLw"}},"7sMn":function(e,t,a){},"8znC":function(e,t,a){e.exports={navbar:"Navbar-module--navbar--1rVP0",navbar__content:"Navbar-module--navbar__content--34p4g",navbar__brand:"Navbar-module--navbar__brand--2w8ng",navbar__links:"Navbar-module--navbar__links--sVCtF",navbar__link:"Navbar-module--navbar__link--2rbfj",navbar__dark_mode:"Navbar-module--navbar__dark_mode--11x1r",active:"Navbar-module--active--3rkhS",hidden:"Navbar-module--hidden--142Tr"}},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),d=r(a("8OQS")),o=r(a("pVnL")),l=r(a("q1tI")),u=r(a("17x9")),c=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed,r=m(t||a||[]);return r&&r.src},m=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},p=Object.create({}),h=function(e){var t=c(e),a=g(t);return p[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function _(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+l+s+d+a+r+t+n+i+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=l.default.createElement(z,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?l.default.createElement("picture",null,i(r),d):d})),z=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,g=e.ariaHidden,m=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},m,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=g(t))&&(p[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,d=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,g=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,w=e.loading,I=e.draggable,R=p||h;if(!R)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:k?1:0,transition:N?"opacity "+v+"ms":"none"},d),j="boolean"==typeof b?"lightgray":b,C={transitionDelay:v+"ms"},H=(0,o.default)({opacity:this.state.imgLoaded?0:1},N&&C,d,f),P={title:t,alt:this.state.isVisible?"":a,style:H,className:g,itemProp:S},T=this.state.isHydrated?m(R):R[0];if(p)return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:T.maxWidth?T.maxWidth+"px":null,maxHeight:T.maxHeight?T.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),j&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&C)}),T.base64&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:P,imageVariants:R,generateSources:_}),T.tracedSVG&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:P,imageVariants:R,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,E(R),l.default.createElement(z,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:w},T,{imageVariants:R}))}}));if(h){var W=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},n);return"inherit"===n.display&&delete W.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},j&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:j,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},N&&C)}),T.base64&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:T.base64,spreadProps:P,imageVariants:R,generateSources:_}),T.tracedSVG&&l.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:T.tracedSVG,spreadProps:P,imageVariants:R,generateSources:L}),this.state.isVisible&&l.default.createElement("picture",null,E(R),l.default.createElement(z,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:w},T,{imageVariants:R}))}}))}return null},t}(l.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),V=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function j(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}k.propTypes={resolutions:N,sizes:V,fixed:j(u.default.oneOfType([N,u.default.arrayOf(N)])),fluid:j(u.default.oneOfType([V,u.default.arrayOf(V)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var C=k;t.default=C},vPBx:function(e,t,a){"use strict";var r=a("zLVn"),i=a("q1tI"),n=a.n(i);t.a=function(e){var t=e.x,a=void 0===t?0:t,i=e.y,s=void 0===i?0:i,d=e.children,o=Object(r.a)(e,["x","y","children"]);return n.a.createElement("div",Object.assign({},o,{style:{transform:"translate("+a+"px, "+s+"px)"}}),d)}},yBb5:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("5Epl"),d=a("qzWQ"),o=a("8znC"),l=a.n(o),u=function(){var e=Object(r.useState)(0),t=e[0],a=e[1],o=Object(r.useState)(!0),u=o[0],c=o[1];return Object(r.useEffect)((function(){var e=function(){var e=document.body.getBoundingClientRect().top,r=document.body.getBoundingClientRect().top>t;a(e),c(r)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[t,u]),i.a.createElement("nav",{className:[l.a.navbar,u?l.a.active:l.a.hidden].join(" ")},i.a.createElement("div",{className:l.a.navbar__content},i.a.createElement(n.Link,{className:l.a.navbar__brand,to:"/"},i.a.createElement(s.a,{src:"logo_light.png",alt:"JC"})),i.a.createElement("div",{className:l.a.navbar__links},i.a.createElement(n.Link,{className:l.a.navbar__link,to:"/"},"Projects"),i.a.createElement(n.Link,{className:l.a.navbar__link,to:"/about"},"About")),i.a.createElement("div",{className:l.a.navbar__dark_mode},i.a.createElement(d.a,null))))},c=(a("7sMn"),a("7UuI")),f=a.n(c);t.a=function(e){var t=e.children;return i.a.createElement("div",{className:f.a.container},i.a.createElement(u,null),i.a.createElement("div",{className:f.a.layout},i.a.createElement("main",null,t)))}}}]);
//# sourceMappingURL=2a95ea29b017621b9e9177052ff03f5b2d02f255-f5d40f217bd935a5489d.js.map