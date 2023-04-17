(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{243:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"f",(function(){return a})),n.d(t,"g",(function(){return c})),n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return f}));n(91);const s=/#.*$/,r=/\.(md|html)$/,i=/\/$/,o=/^[a-z]+:/i;function l(e){return decodeURI(e).replace(s,"").replace(r,"")}function u(e){return o.test(e)}function a(e){return/^mailto:/.test(e)}function c(e){return/^tel:/.test(e)}function h(e){if(u(e))return e;const t=e.match(s),n=t?t[0]:"",r=l(e);return i.test(r)?e:r+".html"+n}function d(e,t){const n=decodeURIComponent(e.hash),r=function(e){const t=e.match(s);if(t)return t[0]}(t);if(r&&n!==r)return!1;return l(e.path)===l(t)}function f(e){let t;return(e=e.map(e=>Object.assign({},e))).forEach(e=>{2===e.level?t=e:t&&(t.children||(t.children=[])).push(e)}),e.filter(e=>2===e.level)}},245:function(e,t,n){"use strict";var s=n(243),r={name:"NavLink",props:{item:{required:!0}},computed:{link(){return Object(s.a)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(e=>e===this.link):"/"===this.link},isNonHttpURI(){return Object(s.f)(this.link)||Object(s.g)(this.link)},isBlankTarget(){return"_blank"===this.target},isInternal(){return!Object(s.e)(this.link)&&!this.isBlankTarget},target(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(s.e)(this.link)?"_blank":""},rel(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction(){this.$emit("focusout")}}},i=n(14),o=Object(i.a)(r,(function(){var e=this,t=e._self._c;return e.isInternal?t("RouterLink",{staticClass:"nav-link",attrs:{to:e.link,exact:e.exact},nativeOn:{focusout:function(t){return e.focusoutAction.apply(null,arguments)}}},[e._v("\n  "+e._s(e.item.text)+"\n")]):t("a",{staticClass:"nav-link external",attrs:{href:e.link,target:e.target,rel:e.rel},on:{focusout:e.focusoutAction}},[e._v("\n  "+e._s(e.item.text)+"\n  "),e.isBlankTarget?t("OutboundLink"):e._e()],1)}),[],!1,null,null,null);t.a=o.exports},249:function(e,t,n){},250:function(e,t,n){},256:function(e,t,n){},257:function(e,t,n){},258:function(e,t,n){},266:function(e,t,n){"use strict";n.r(t);var s=n(243),r={name:"SidebarGroup",components:{DropdownTransition:n(246).a},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=n(266).default},methods:{isActive:s.d}},i=(n(276),n(14)),o=Object(i.a)(r,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"sidebar-group",class:[{collapsable:e.collapsable,"is-sub-group":0!==e.depth},"depth-"+e.depth]},[e.item.path?t("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:e.open,active:e.isActive(e.$route,e.item.path)},attrs:{to:e.item.path},nativeOn:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]):t("p",{staticClass:"sidebar-heading",class:{open:e.open},on:{click:function(t){return e.$emit("toggle")}}},[t("span",[e._v(e._s(e.item.title))]),e._v(" "),e.collapsable?t("span",{staticClass:"arrow",class:e.open?"down":"right"}):e._e()]),e._v(" "),t("DropdownTransition",[e.open||!e.collapsable?t("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:e.item.children,"sidebar-depth":e.item.sidebarDepth,"initial-open-group-index":e.item.initialOpenGroupIndex,depth:e.depth+1}}):e._e()],1)],1)}),[],!1,null,null,null).exports;function l(e,t,n,s,r){const i={props:{to:t,activeClass:"",exactActiveClass:""},class:{active:s,"sidebar-link":!0}};return r>2&&(i.style={"padding-left":r+"rem"}),e("RouterLink",i,n)}function u(e,t,n,r,i,o=1){return!t||o>i?null:e("ul",{class:"sidebar-sub-headers"},t.map(t=>{const a=Object(s.d)(r,n+"#"+t.slug);return e("li",{class:"sidebar-sub-header"},[l(e,n+"#"+t.slug,t.title,a,t.level-1),u(e,t.children,n,r,i,o+1)])}))}var a={functional:!0,props:["item","sidebarDepth"],render(e,{parent:{$page:t,$site:n,$route:r,$themeConfig:i,$themeLocaleConfig:o},props:{item:a,sidebarDepth:c}}){const h=Object(s.d)(r,a.path),d="auto"===a.type?h||a.children.some(e=>Object(s.d)(r,a.basePath+"#"+e.slug)):h,f="external"===a.type?function(e,t,n){return e("a",{attrs:{href:t,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,e("OutboundLink")])}(e,a.path,a.title||a.path):l(e,a.path,a.title||a.path,d),p=[t.frontmatter.sidebarDepth,c,o.sidebarDepth,i.sidebarDepth,1].find(e=>void 0!==e),g=o.displayAllHeaders||i.displayAllHeaders;if("auto"===a.type)return[f,u(e,a.children,a.basePath,r,p)];if((d||g)&&a.headers&&!s.c.test(a.path)){return[f,u(e,Object(s.b)(a.headers),a.path,r,p)]}return f}};n(277);function c(e,t){if("group"===t.type){const n=t.path&&Object(s.d)(e,t.path),r=t.children.some(t=>"group"===t.type?c(e,t):"page"===t.type&&Object(s.d)(e,t.path));return n||r}return!1}var h={name:"SidebarLinks",components:{SidebarGroup:o,SidebarLink:Object(i.a)(a,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const e=function(e,t){for(let n=0;n<t.length;n++){const s=t[n];if(c(e,s))return n}return-1}(this.$route,this.items);e>-1&&(this.openGroupIndex=e)},toggleGroup(e){this.openGroupIndex=e===this.openGroupIndex?-1:e},isActive(e){return Object(s.d)(this.$route,e.regularPath)}}},d=Object(i.a)(h,(function(){var e=this,t=e._self._c;return e.items.length?t("ul",{staticClass:"sidebar-links"},e._l(e.items,(function(n,s){return t("li",{key:s},["group"===n.type?t("SidebarGroup",{attrs:{item:n,open:s===e.openGroupIndex,collapsable:n.collapsable||n.collapsible,depth:e.depth},on:{toggle:function(t){return e.toggleGroup(s)}}}):t("SidebarLink",{attrs:{"sidebar-depth":e.sidebarDepth,item:n}})],1)})),0):e._e()}),[],!1,null,null,null);t.default=d.exports},269:function(e,t,n){"use strict";n(249)},270:function(e,t,n){"use strict";n(250)},276:function(e,t,n){"use strict";n(256)},277:function(e,t,n){"use strict";n(257)},278:function(e,t,n){"use strict";n(258)},280:function(e,t,n){
/*!
* screenfull
* v5.2.0 - 2021-11-03
* (c) Sindre Sorhus; MIT License
*/
!function(){"use strict";var t="undefined"!=typeof window&&void 0!==window.document?window.document:{},n=e.exports,s=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],s=0,r=n.length,i={};s<r;s++)if((e=n[s])&&e[1]in t){for(s=0;s<e.length;s++)i[n[0][s]]=e[s];return i}return!1}(),r={change:s.fullscreenchange,error:s.fullscreenerror},i={request:function(e,n){return new Promise(function(r,i){var o=function(){this.off("change",o),r()}.bind(this);this.on("change",o);var l=(e=e||t.documentElement)[s.requestFullscreen](n);l instanceof Promise&&l.then(o).catch(i)}.bind(this))},exit:function(){return new Promise(function(e,n){if(this.isFullscreen){var r=function(){this.off("change",r),e()}.bind(this);this.on("change",r);var i=t[s.exitFullscreen]();i instanceof Promise&&i.then(r).catch(n)}else e()}.bind(this))},toggle:function(e,t){return this.isFullscreen?this.exit():this.request(e,t)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var s=r[e];s&&t.addEventListener(s,n,!1)},off:function(e,n){var s=r[e];s&&t.removeEventListener(s,n,!1)},raw:s};s?(Object.defineProperties(i,{isFullscreen:{get:function(){return Boolean(t[s.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[s.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(t[s.fullscreenEnabled])}}}),n?e.exports=i:window.screenfull=i):n?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}}()},287:function(e,t,n){"use strict";n(91);var s=n(92),r=n.n(s),i=(e,t,n=null)=>{let s=r()(t,"title","");return r()(t,"frontmatter.tags")&&(s+=" "+t.frontmatter.tags.join(" ")),n&&(s+=" "+n),o(e,s)};const o=(e,t)=>{const n=e=>e.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),s=new RegExp("[^\0-]"),r=e.split(/\s+/g).map(e=>e.trim()).filter(e=>!!e);if(s.test(e))return r.some(e=>t.toLowerCase().indexOf(e)>-1);{const s=e.endsWith(" ");return new RegExp(r.map((e,t)=>r.length!==t+1||s?`(?=.*\\b${n(e)}\\b)`:`(?=.*\\b${n(e)})`).join("")+".+","gi").test(t)}};var l={name:"SearchBox",data:()=>({query:"",focused:!1,focusIndex:0,placeholder:void 0}),computed:{showSuggestions(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions(){const e=this.query.trim().toLowerCase();if(!e)return;const{pages:t}=this.$site,n=this.$site.themeConfig.searchMaxSuggestions||5,s=this.$localePath,r=[];for(let o=0;o<t.length&&!(r.length>=n);o++){const l=t[o];if(this.getPageLocalePath(l)===s&&this.isSearchable(l))if(i(e,l))r.push(l);else if(l.headers)for(let t=0;t<l.headers.length&&!(r.length>=n);t++){const n=l.headers[t];n.title&&i(e,l,n.title)&&r.push(Object.assign({},l,{path:l.path+"#"+n.slug,header:n}))}}return r},alignRight(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath(e){for(const t in this.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},isSearchable(e){let t=null;return null===t||(t=Array.isArray(t)?t:new Array(t),t.filter(t=>e.path.match(t)).length>0)},onHotkey(e){e.srcElement===document.body&&["s","/"].includes(e.key)&&(this.$refs.input.focus(),e.preventDefault())},onUp(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go(e){this.showSuggestions&&(this.$router.push(this.suggestions[e].path),this.query="",this.focusIndex=0)},focus(e){this.focusIndex=e},unfocus(){this.focusIndex=-1}}},u=(n(269),n(14)),a=Object(u.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"search-box"},[t("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown.apply(null,arguments)}]}}),e._v(" "),e.showSuggestions?t("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(n,s){return t("li",{key:s,staticClass:"suggestion",class:{focused:s===e.focusIndex},on:{mousedown:function(t){return e.go(s)},mouseenter:function(t){return e.focus(s)}}},[t("a",{attrs:{href:n.path},on:{click:function(e){e.preventDefault()}}},[t("span",{staticClass:"page-title"},[e._v(e._s(n.title||n.path))]),e._v(" "),n.header?t("span",{staticClass:"header"},[e._v("> "+e._s(n.header.title))]):e._e()])])})),0):e._e()])}),[],!1,null,null,null);t.a=a.exports},288:function(e,t,n){"use strict";var s=n(266),r=n(244),i={name:"Sidebar",components:{SidebarLinks:s.default,NavLinks:r.a},props:["items"]},o=(n(278),n(14)),l=Object(o.a)(i,(function(){var e=this._self._c;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);t.a=l.exports},289:function(e,t,n){"use strict";n(270);var s=n(14),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"sidebar-button",on:{click:function(t){return e.$emit("toggle-sidebar")}}},[t("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[t("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);t.a=r.exports}}]);