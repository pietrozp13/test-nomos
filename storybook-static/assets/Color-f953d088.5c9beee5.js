var Vr=Object.defineProperty;var c=(a,r)=>Vr(a,"name",{value:r,configurable:!0});import"./iframe.880edb6d.js";import"./es.map.constructor.a57d45ad.js";import{W as P,ar as Ir,as as Gr,at as Wr,au as Kr,av as Dr,Y as Ur,aw as fr,ax as Yr,ay as Jr}from"./Props.f64a40eb.js";import{R as d,r as g}from"./index.9a58b954.js";import"./string.1713bbeb.js";import"./es.number.to-fixed.eceda015.js";var X,q;function _(a,r,e){return r in a?Object.defineProperty(a,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[r]=e,a}c(_,"_defineProperty");function ir(a){return ir=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},ir(a)}c(ir,"_typeof");function N(a,r){return ee(a)||re(a,r)||Zr(a,r)||Qr()}c(N,"_slicedToArray");function Qr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}c(Qr,"_nonIterableRest");function Zr(a,r){if(!!a){if(typeof a=="string")return gr(a,r);var e=Object.prototype.toString.call(a).slice(8,-1);if(e==="Object"&&a.constructor&&(e=a.constructor.name),e==="Map"||e==="Set")return Array.from(a);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return gr(a,r)}}c(Zr,"_unsupportedIterableToArray");function gr(a,r){(r==null||r>a.length)&&(r=a.length);for(var e=0,t=new Array(r);e<r;e++)t[e]=a[e];return t}c(gr,"_arrayLikeToArray");function re(a,r){var e=a==null?null:typeof Symbol<"u"&&a[Symbol.iterator]||a["@@iterator"];if(e!=null){var t=[],n=!0,o=!1,i,l;try{for(e=e.call(a);!(n=(i=e.next()).done)&&(t.push(i.value),!(r&&t.length===r));n=!0);}catch(u){o=!0,l=u}finally{try{!n&&e.return!=null&&e.return()}finally{if(o)throw l}}return t}}c(re,"_iterableToArrayLimit");function ee(a){if(Array.isArray(a))return a}c(ee,"_arrayWithHoles");function L(){return(L=Object.assign||function(a){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a}).apply(this,arguments)}c(L,"u");function hr(a,r){if(a==null)return{};var e,t,n={},o=Object.keys(a);for(t=0;t<o.length;t++)r.indexOf(e=o[t])>=0||(n[e]=a[e]);return n}c(hr,"c");function lr(a){var r=g.exports.useRef(a),e=g.exports.useRef(function(t){r.current&&r.current(t)});return r.current=a,e.current}c(lr,"i");var B=c(function(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=1),r>t?t:r<e?e:r},"s"),A=c(function(r){return"touches"in r},"f"),ur=c(function(r){return r&&r.ownerDocument.defaultView||self},"v"),mr=c(function(r,e,t){var n=r.getBoundingClientRect(),o=A(e)?function(i,l){for(var u=0;u<i.length;u++)if(i[u].identifier===l)return i[u];return i[0]}(e.touches,t):e;return{left:B((o.pageX-(n.left+ur(r).pageXOffset))/n.width),top:B((o.pageY-(n.top+ur(r).pageYOffset))/n.height)}},"d"),br=c(function(r){!A(r)&&r.preventDefault()},"h"),dr=d.memo(function(a){var r=a.onMove,e=a.onKey,t=hr(a,["onMove","onKey"]),n=g.exports.useRef(null),o=lr(r),i=lr(e),l=g.exports.useRef(null),u=g.exports.useRef(!1),s=g.exports.useMemo(function(){var E=c(function(p){br(p),(A(p)?p.touches.length>0:p.buttons>0)&&n.current?o(mr(n.current,p,l.current)):I(!1)},"e"),C=c(function(){return I(!1)},"r");function I(x){var p=u.current,m=ur(n.current),b=x?m.addEventListener:m.removeEventListener;b(p?"touchmove":"mousemove",E),b(p?"touchend":"mouseup",C)}return c(I,"t"),[function(x){var p=x.nativeEvent,m=n.current;if(m&&(br(p),!function(M,S){return S&&!A(M)}(p,u.current)&&m)){if(A(p)){u.current=!0;var b=p.changedTouches||[];b.length&&(l.current=b[0].identifier)}m.focus(),o(mr(m,p,l.current)),I(!0)}},function(x){var p=x.which||x.keyCode;p<37||p>40||(x.preventDefault(),i({left:p===39?.05:p===37?-.05:0,top:p===40?.05:p===38?-.05:0}))},I]},[i,o]),f=s[0],h=s[1],w=s[2];return g.exports.useEffect(function(){return w},[w]),d.createElement("div",L({},t,{onTouchStart:f,onMouseDown:f,className:"react-colorful__interactive",ref:n,onKeyDown:h,tabIndex:0,role:"slider"}))}),W=c(function(r){return r.filter(Boolean).join(" ")},"g"),pr=c(function(r){var e=r.color,t=r.left,n=r.top,o=n===void 0?.5:n,i=W(["react-colorful__pointer",r.className]);return d.createElement("div",{className:i,style:{top:100*o+"%",left:100*t+"%"}},d.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:e}}))},"p"),O=c(function(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=Math.pow(10,e)),Math.round(t*r)/t},"b"),ae={grad:.9,turn:360,rad:360/(2*Math.PI)},er=c(function(r){return r[0]==="#"&&(r=r.substr(1)),r.length<6?{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:1}:{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:1}},"x"),te=c(function(r,e){return e===void 0&&(e="deg"),Number(r)*(ae[e]||1)},"C"),ne=c(function(r){var e=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(r);return e?oe({h:te(e[1],e[2]),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)}):{h:0,s:0,v:0,a:1}},"E"),oe=c(function(r){var e=r.s,t=r.l;return{h:r.h,s:(e*=(t<50?t:100-t)/100)>0?2*e/(t+e)*100:0,v:t+e,a:r.a}},"M"),Rr=c(function(r){var e=r.s,t=r.v,n=r.a,o=(200-e)*t/100;return{h:O(r.h),s:O(o>0&&o<200?e*t/100/(o<=100?o:200-o)*100:0),l:O(o/2),a:O(n,2)}},"N"),cr=c(function(r){var e=Rr(r);return"hsl("+e.h+", "+e.s+"%, "+e.l+"%)"},"w"),J=c(function(r){var e=Rr(r);return"hsla("+e.h+", "+e.s+"%, "+e.l+"%, "+e.a+")"},"y"),Hr=c(function(r){var e=r.h,t=r.s,n=r.v,o=r.a;e=e/360*6,t/=100,n/=100;var i=Math.floor(e),l=n*(1-t),u=n*(1-(e-i)*t),s=n*(1-(1-e+i)*t),f=i%6;return{r:O(255*[n,u,l,l,s,n][f]),g:O(255*[s,n,n,u,l,l][f]),b:O(255*[l,l,s,n,n,u][f]),a:O(o,2)}},"q"),ie=c(function(r){var e=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(r);return e?Nr({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?100:1)}):{h:0,s:0,v:0,a:1}},"I"),ar=c(function(r){var e=r.toString(16);return e.length<2?"0"+e:e},"z"),Nr=c(function(r){var e=r.r,t=r.g,n=r.b,o=r.a,i=Math.max(e,t,n),l=i-Math.min(e,t,n),u=l?i===e?(t-n)/l:i===t?2+(n-e)/l:4+(e-t)/l:0;return{h:O(60*(u<0?u+6:u)),s:O(i?l/i*100:0),v:O(i/255*100),a:o}},"B"),Tr=d.memo(function(a){var r=a.hue,e=a.onChange,t=W(["react-colorful__hue",a.className]);return d.createElement("div",{className:t},d.createElement(dr,{onMove:c(function(o){e({h:360*o.left})},"onMove"),onKey:c(function(o){e({h:B(r+360*o.left,0,360)})},"onKey"),"aria-label":"Hue","aria-valuetext":O(r)},d.createElement(pr,{className:"react-colorful__hue-pointer",left:r/360,color:cr({h:r,s:100,v:100,a:1})})))}),Fr=d.memo(function(a){var r=a.hsva,e=a.onChange,t={backgroundColor:cr({h:r.h,s:100,v:100,a:1})};return d.createElement("div",{className:"react-colorful__saturation",style:t},d.createElement(dr,{onMove:c(function(o){e({s:100*o.left,v:100-100*o.top})},"onMove"),onKey:c(function(o){e({s:B(r.s+100*o.left,0,100),v:B(r.v-100*o.top,0,100)})},"onKey"),"aria-label":"Color","aria-valuetext":"Saturation "+O(r.s)+"%, Brightness "+O(r.v)+"%"},d.createElement(pr,{className:"react-colorful__saturation-pointer",top:1-r.v/100,left:r.s/100,color:cr(r)})))}),Pr=c(function(r,e){if(r===e)return!0;for(var t in r)if(r[t]!==e[t])return!1;return!0},"A"),zr=c(function(r,e){return r.replace(/\s/g,"")===e.replace(/\s/g,"")},"S");function Lr(a,r,e){var t=lr(e),n=g.exports.useState(function(){return a.toHsva(r)}),o=n[0],i=n[1],l=g.exports.useRef({color:r,hsva:o});g.exports.useEffect(function(){if(!a.equal(r,l.current.color)){var s=a.toHsva(r);l.current={hsva:s,color:r},i(s)}},[r,a]),g.exports.useEffect(function(){var s;Pr(o,l.current.hsva)||a.equal(s=a.fromHsva(o),l.current.color)||(l.current={hsva:o,color:s},t(s))},[o,a,t]);var u=g.exports.useCallback(function(s){i(function(f){return Object.assign({},f,s)})},[]);return[o,u]}c(Lr,"T");var le=typeof window<"u"?g.exports.useLayoutEffect:g.exports.useEffect,ue=c(function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},"X"),yr=new Map,jr=c(function(r){le(function(){var e=r.current?r.current.ownerDocument:document;if(e!==void 0&&!yr.has(e)){var t=e.createElement("style");t.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,yr.set(e,t);var n=ue();n&&t.setAttribute("nonce",n),e.head.appendChild(t)}},[])},"V"),ce=c(function(r){var e=r.className,t=r.colorModel,n=r.color,o=n===void 0?t.defaultColor:n,i=r.onChange,l=hr(r,["className","colorModel","color","onChange"]),u=g.exports.useRef(null);jr(u);var s=Lr(t,o,i),f=s[0],h=s[1],w=W(["react-colorful",e]);return d.createElement("div",L({},l,{ref:u,className:w}),d.createElement(Fr,{hsva:f,onChange:h}),d.createElement(Tr,{hue:f.h,onChange:h,className:"react-colorful__last-control"}))},"$"),se={defaultColor:"000",toHsva:c(function(r){return Nr(er(r))},"toHsva"),fromHsva:c(function(r){return t=(e=Hr(r)).g,n=e.b,"#"+ar(e.r)+ar(t)+ar(n);var e,t,n},"fromHsva"),equal:c(function(r,e){return r.toLowerCase()===e.toLowerCase()||Pr(er(r),er(e))},"equal")},ve=c(function(r){return d.createElement(ce,L({},r,{colorModel:se}))},"J"),fe=c(function(r){var e=r.className,t=r.hsva,n=r.onChange,o={backgroundImage:"linear-gradient(90deg, "+J(Object.assign({},t,{a:0}))+", "+J(Object.assign({},t,{a:1}))+")"},i=W(["react-colorful__alpha",e]);return d.createElement("div",{className:i},d.createElement("div",{className:"react-colorful__alpha-gradient",style:o}),d.createElement(dr,{onMove:c(function(u){n({a:u.left})},"onMove"),onKey:c(function(u){n({a:B(t.a+u.left)})},"onKey"),"aria-label":"Alpha","aria-valuetext":O(100*t.a)+"%"},d.createElement(pr,{className:"react-colorful__alpha-pointer",left:t.a,color:J(t)})))},"Q"),Br=c(function(r){var e=r.className,t=r.colorModel,n=r.color,o=n===void 0?t.defaultColor:n,i=r.onChange,l=hr(r,["className","colorModel","color","onChange"]),u=g.exports.useRef(null);jr(u);var s=Lr(t,o,i),f=s[0],h=s[1],w=W(["react-colorful",e]);return d.createElement("div",L({},l,{ref:u,className:w}),d.createElement(Fr,{hsva:f,onChange:h}),d.createElement(Tr,{hue:f.h,onChange:h}),d.createElement(fe,{hsva:f,onChange:h,className:"react-colorful__last-control"}))},"U"),he={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:ne,fromHsva:J,equal:zr},de=c(function(r){return d.createElement(Br,L({},r,{colorModel:he}))},"re"),pe={defaultColor:"rgba(0, 0, 0, 1)",toHsva:ie,fromHsva:c(function(r){var e=Hr(r);return"rgba("+e.r+", "+e.g+", "+e.b+", "+e.a+")"},"fromHsva"),equal:zr},ge=c(function(r){return d.createElement(Br,L({},r,{colorModel:pe}))},"pe"),me={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},G=me,$r={};for(var tr=0,xr=Object.keys(G);tr<xr.length;tr++){var wr=xr[tr];$r[G[wr]]=wr}var v={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}},Xr=v;for(var nr=0,kr=Object.keys(v);nr<kr.length;nr++){var R=kr[nr];if(!("channels"in v[R]))throw new Error("missing channels property: "+R);if(!("labels"in v[R]))throw new Error("missing channel labels property: "+R);if(v[R].labels.length!==v[R].channels)throw new Error("channel and label counts mismatch: "+R);var Er=v[R],be=Er.channels,ye=Er.labels;delete v[R].channels,delete v[R].labels,Object.defineProperty(v[R],"channels",{value:be}),Object.defineProperty(v[R],"labels",{value:ye})}v.rgb.hsl=function(a){var r=a[0]/255,e=a[1]/255,t=a[2]/255,n=Math.min(r,e,t),o=Math.max(r,e,t),i=o-n,l,u;o===n?l=0:r===o?l=(e-t)/i:e===o?l=2+(t-r)/i:t===o&&(l=4+(r-e)/i),l=Math.min(l*60,360),l<0&&(l+=360);var s=(n+o)/2;return o===n?u=0:s<=.5?u=i/(o+n):u=i/(2-o-n),[l,u*100,s*100]};v.rgb.hsv=function(a){var r,e,t,n,o,i=a[0]/255,l=a[1]/255,u=a[2]/255,s=Math.max(i,l,u),f=s-Math.min(i,l,u),h=c(function(E){return(s-E)/6/f+1/2},"diffc");return f===0?(n=0,o=0):(o=f/s,r=h(i),e=h(l),t=h(u),i===s?n=t-e:l===s?n=1/3+r-t:u===s&&(n=2/3+e-r),n<0?n+=1:n>1&&(n-=1)),[n*360,o*100,s*100]};v.rgb.hwb=function(a){var r=a[0],e=a[1],t=a[2],n=v.rgb.hsl(a)[0],o=1/255*Math.min(r,Math.min(e,t));return t=1-1/255*Math.max(r,Math.max(e,t)),[n,o*100,t*100]};v.rgb.cmyk=function(a){var r=a[0]/255,e=a[1]/255,t=a[2]/255,n=Math.min(1-r,1-e,1-t),o=(1-r-n)/(1-n)||0,i=(1-e-n)/(1-n)||0,l=(1-t-n)/(1-n)||0;return[o*100,i*100,l*100,n*100]};function xe(a,r){return Math.pow(a[0]-r[0],2)+Math.pow(a[1]-r[1],2)+Math.pow(a[2]-r[2],2)}c(xe,"comparativeDistance");v.rgb.keyword=function(a){var r=$r[a];if(r)return r;for(var e=1/0,t,n=0,o=Object.keys(G);n<o.length;n++){var i=o[n],l=G[i],u=xe(a,l);u<e&&(e=u,t=i)}return t};v.keyword.rgb=function(a){return G[a]};v.rgb.xyz=function(a){var r=a[0]/255,e=a[1]/255,t=a[2]/255;r=r>.04045?Math.pow((r+.055)/1.055,2.4):r/12.92,e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92,t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92;var n=r*.4124+e*.3576+t*.1805,o=r*.2126+e*.7152+t*.0722,i=r*.0193+e*.1192+t*.9505;return[n*100,o*100,i*100]};v.rgb.lab=function(a){var r=v.rgb.xyz(a),e=r[0],t=r[1],n=r[2];e/=95.047,t/=100,n/=108.883,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116,n=n>.008856?Math.pow(n,1/3):7.787*n+16/116;var o=116*t-16,i=500*(e-t),l=200*(t-n);return[o,i,l]};v.hsl.rgb=function(a){var r=a[0]/360,e=a[1]/100,t=a[2]/100,n,o,i;if(e===0)return i=t*255,[i,i,i];t<.5?n=t*(1+e):n=t+e-t*e;for(var l=2*t-n,u=[0,0,0],s=0;s<3;s++)o=r+1/3*-(s-1),o<0&&o++,o>1&&o--,6*o<1?i=l+(n-l)*6*o:2*o<1?i=n:3*o<2?i=l+(n-l)*(2/3-o)*6:i=l,u[s]=i*255;return u};v.hsl.hsv=function(a){var r=a[0],e=a[1]/100,t=a[2]/100,n=e,o=Math.max(t,.01);t*=2,e*=t<=1?t:2-t,n*=o<=1?o:2-o;var i=(t+e)/2,l=t===0?2*n/(o+n):2*e/(t+e);return[r,l*100,i*100]};v.hsv.rgb=function(a){var r=a[0]/60,e=a[1]/100,t=a[2]/100,n=Math.floor(r)%6,o=r-Math.floor(r),i=255*t*(1-e),l=255*t*(1-e*o),u=255*t*(1-e*(1-o));switch(t*=255,n){case 0:return[t,u,i];case 1:return[l,t,i];case 2:return[i,t,u];case 3:return[i,l,t];case 4:return[u,i,t];case 5:return[t,i,l]}};v.hsv.hsl=function(a){var r=a[0],e=a[1]/100,t=a[2]/100,n=Math.max(t,.01),o,i;i=(2-e)*t;var l=(2-e)*n;return o=e*n,o/=l<=1?l:2-l,o=o||0,i/=2,[r,o*100,i*100]};v.hwb.rgb=function(a){var r=a[0]/360,e=a[1]/100,t=a[2]/100,n=e+t,o;n>1&&(e/=n,t/=n);var i=Math.floor(6*r),l=1-t;o=6*r-i,(i&1)!==0&&(o=1-o);var u=e+o*(l-e),s,f,h;switch(i){default:case 6:case 0:s=l,f=u,h=e;break;case 1:s=u,f=l,h=e;break;case 2:s=e,f=l,h=u;break;case 3:s=e,f=u,h=l;break;case 4:s=u,f=e,h=l;break;case 5:s=l,f=e,h=u;break}return[s*255,f*255,h*255]};v.cmyk.rgb=function(a){var r=a[0]/100,e=a[1]/100,t=a[2]/100,n=a[3]/100,o=1-Math.min(1,r*(1-n)+n),i=1-Math.min(1,e*(1-n)+n),l=1-Math.min(1,t*(1-n)+n);return[o*255,i*255,l*255]};v.xyz.rgb=function(a){var r=a[0]/100,e=a[1]/100,t=a[2]/100,n,o,i;return n=r*3.2406+e*-1.5372+t*-.4986,o=r*-.9689+e*1.8758+t*.0415,i=r*.0557+e*-.204+t*1.057,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*12.92,o=o>.0031308?1.055*Math.pow(o,1/2.4)-.055:o*12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*12.92,n=Math.min(Math.max(0,n),1),o=Math.min(Math.max(0,o),1),i=Math.min(Math.max(0,i),1),[n*255,o*255,i*255]};v.xyz.lab=function(a){var r=a[0],e=a[1],t=a[2];r/=95.047,e/=100,t/=108.883,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,e=e>.008856?Math.pow(e,1/3):7.787*e+16/116,t=t>.008856?Math.pow(t,1/3):7.787*t+16/116;var n=116*e-16,o=500*(r-e),i=200*(e-t);return[n,o,i]};v.lab.xyz=function(a){var r=a[0],e=a[1],t=a[2],n,o,i;o=(r+16)/116,n=e/500+o,i=o-t/200;var l=Math.pow(o,3),u=Math.pow(n,3),s=Math.pow(i,3);return o=l>.008856?l:(o-16/116)/7.787,n=u>.008856?u:(n-16/116)/7.787,i=s>.008856?s:(i-16/116)/7.787,n*=95.047,o*=100,i*=108.883,[n,o,i]};v.lab.lch=function(a){var r=a[0],e=a[1],t=a[2],n,o=Math.atan2(t,e);n=o*360/2/Math.PI,n<0&&(n+=360);var i=Math.sqrt(e*e+t*t);return[r,i,n]};v.lch.lab=function(a){var r=a[0],e=a[1],t=a[2],n=t/360*2*Math.PI,o=e*Math.cos(n),i=e*Math.sin(n);return[r,o,i]};v.rgb.ansi16=function(a){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,e=N(a,3),t=e[0],n=e[1],o=e[2],i=r===null?v.rgb.hsv(a)[2]:r;if(i=Math.round(i/50),i===0)return 30;var l=30+(Math.round(o/255)<<2|Math.round(n/255)<<1|Math.round(t/255));return i===2&&(l+=60),l};v.hsv.ansi16=function(a){return v.rgb.ansi16(v.hsv.rgb(a),a[2])};v.rgb.ansi256=function(a){var r=a[0],e=a[1],t=a[2];if(r===e&&e===t)return r<8?16:r>248?231:Math.round((r-8)/247*24)+232;var n=16+36*Math.round(r/255*5)+6*Math.round(e/255*5)+Math.round(t/255*5);return n};v.ansi16.rgb=function(a){var r=a%10;if(r===0||r===7)return a>50&&(r+=3.5),r=r/10.5*255,[r,r,r];var e=(~~(a>50)+1)*.5,t=(r&1)*e*255,n=(r>>1&1)*e*255,o=(r>>2&1)*e*255;return[t,n,o]};v.ansi256.rgb=function(a){if(a>=232){var r=(a-232)*10+8;return[r,r,r]}a-=16;var e,t=Math.floor(a/36)/5*255,n=Math.floor((e=a%36)/6)/5*255,o=e%6/5*255;return[t,n,o]};v.rgb.hex=function(a){var r=((Math.round(a[0])&255)<<16)+((Math.round(a[1])&255)<<8)+(Math.round(a[2])&255),e=r.toString(16).toUpperCase();return"000000".substring(e.length)+e};v.hex.rgb=function(a){var r=a.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!r)return[0,0,0];var e=r[0];r[0].length===3&&(e=e.split("").map(function(l){return l+l}).join(""));var t=parseInt(e,16),n=t>>16&255,o=t>>8&255,i=t&255;return[n,o,i]};v.rgb.hcg=function(a){var r=a[0]/255,e=a[1]/255,t=a[2]/255,n=Math.max(Math.max(r,e),t),o=Math.min(Math.min(r,e),t),i=n-o,l,u;return i<1?l=o/(1-i):l=0,i<=0?u=0:n===r?u=(e-t)/i%6:n===e?u=2+(t-r)/i:u=4+(r-e)/i,u/=6,u%=1,[u*360,i*100,l*100]};v.hsl.hcg=function(a){var r=a[1]/100,e=a[2]/100,t=e<.5?2*r*e:2*r*(1-e),n=0;return t<1&&(n=(e-.5*t)/(1-t)),[a[0],t*100,n*100]};v.hsv.hcg=function(a){var r=a[1]/100,e=a[2]/100,t=r*e,n=0;return t<1&&(n=(e-t)/(1-t)),[a[0],t*100,n*100]};v.hcg.rgb=function(a){var r=a[0]/360,e=a[1]/100,t=a[2]/100;if(e===0)return[t*255,t*255,t*255];var n=[0,0,0],o=r%1*6,i=o%1,l=1-i,u=0;switch(Math.floor(o)){case 0:n[0]=1,n[1]=i,n[2]=0;break;case 1:n[0]=l,n[1]=1,n[2]=0;break;case 2:n[0]=0,n[1]=1,n[2]=i;break;case 3:n[0]=0,n[1]=l,n[2]=1;break;case 4:n[0]=i,n[1]=0,n[2]=1;break;default:n[0]=1,n[1]=0,n[2]=l}return u=(1-e)*t,[(e*n[0]+u)*255,(e*n[1]+u)*255,(e*n[2]+u)*255]};v.hcg.hsv=function(a){var r=a[1]/100,e=a[2]/100,t=r+e*(1-r),n=0;return t>0&&(n=r/t),[a[0],n*100,t*100]};v.hcg.hsl=function(a){var r=a[1]/100,e=a[2]/100,t=e*(1-r)+.5*r,n=0;return t>0&&t<.5?n=r/(2*t):t>=.5&&t<1&&(n=r/(2*(1-t))),[a[0],n*100,t*100]};v.hcg.hwb=function(a){var r=a[1]/100,e=a[2]/100,t=r+e*(1-r);return[a[0],(t-r)*100,(1-t)*100]};v.hwb.hcg=function(a){var r=a[1]/100,e=a[2]/100,t=1-e,n=t-r,o=0;return n<1&&(o=(t-n)/(1-n)),[a[0],n*100,o*100]};v.apple.rgb=function(a){return[a[0]/65535*255,a[1]/65535*255,a[2]/65535*255]};v.rgb.apple=function(a){return[a[0]/255*65535,a[1]/255*65535,a[2]/255*65535]};v.gray.rgb=function(a){return[a[0]/100*255,a[0]/100*255,a[0]/100*255]};v.gray.hsl=function(a){return[0,0,a[0]]};v.gray.hsv=v.gray.hsl;v.gray.hwb=function(a){return[0,100,a[0]]};v.gray.cmyk=function(a){return[0,0,0,a[0]]};v.gray.lab=function(a){return[a[0],0,0]};v.gray.hex=function(a){var r=Math.round(a[0]/100*255)&255,e=(r<<16)+(r<<8)+r,t=e.toString(16).toUpperCase();return"000000".substring(t.length)+t};v.rgb.gray=function(a){var r=(a[0]+a[1]+a[2])/3;return[r/255*100]};var Q=Xr;function we(){for(var a={},r=Object.keys(Q),e=r.length,t=0;t<e;t++)a[r[t]]={distance:-1,parent:null};return a}c(we,"buildGraph");function ke(a){var r=we(),e=[a];for(r[a].distance=0;e.length;)for(var t=e.pop(),n=Object.keys(Q[t]),o=n.length,i=0;i<o;i++){var l=n[i],u=r[l];u.distance===-1&&(u.distance=r[t].distance+1,u.parent=t,e.unshift(l))}return r}c(ke,"deriveBFS");function Ee(a,r){return function(e){return r(a(e))}}c(Ee,"link");function Me(a,r){for(var e=[r[a].parent,a],t=Q[r[a].parent][a],n=r[a].parent;r[n].parent;)e.unshift(r[n].parent),t=Ee(Q[r[n].parent][n],t),n=r[n].parent;return t.conversion=e,t}c(Me,"wrapConversion");var Ce=c(function(r){for(var e=ke(r),t={},n=Object.keys(e),o=n.length,i=0;i<o;i++){var l=n[i],u=e[l];u.parent!==null&&(t[l]=Me(l,e))}return t},"route$1"),sr=Xr,Se=Ce,j={},_e=Object.keys(sr);function Oe(a){var r=c(function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var i=n[0];return i==null?i:(i.length>1&&(n=i),a(n))},"wrappedFn");return"conversion"in a&&(r.conversion=a.conversion),r}c(Oe,"wrapRaw");function Ie(a){var r=c(function(){for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];var i=n[0];if(i==null)return i;i.length>1&&(n=i);var l=a(n);if(ir(l)==="object")for(var u=l.length,s=0;s<u;s++)l[s]=Math.round(l[s]);return l},"wrappedFn");return"conversion"in a&&(r.conversion=a.conversion),r}c(Ie,"wrapRounded");_e.forEach(function(a){j[a]={},Object.defineProperty(j[a],"channels",{value:sr[a].channels}),Object.defineProperty(j[a],"labels",{value:sr[a].labels});var r=Se(a),e=Object.keys(r);e.forEach(function(t){var n=r[t];j[a][t]=Ie(n),j[a][t].raw=Oe(n)})});var H=j,Re=Jr,He=c(function(){return Re.Date.now()},"now$1"),Ne=He,Te=/\s/;function Fe(a){for(var r=a.length;r--&&Te.test(a.charAt(r)););return r}c(Fe,"trimmedEndIndex$1");var Pe=Fe,ze=Pe,Le=/^\s+/;function je(a){return a&&a.slice(0,ze(a)+1).replace(Le,"")}c(je,"baseTrim$1");var Be=je,$e=Be,Mr=fr,Xe=Yr,Cr=0/0,qe=/^[-+]0x[0-9a-f]+$/i,Ae=/^0b[01]+$/i,Ve=/^0o[0-7]+$/i,Ge=parseInt;function We(a){if(typeof a=="number")return a;if(Xe(a))return Cr;if(Mr(a)){var r=typeof a.valueOf=="function"?a.valueOf():a;a=Mr(r)?r+"":r}if(typeof a!="string")return a===0?a:+a;a=$e(a);var e=Ae.test(a);return e||Ve.test(a)?Ge(a.slice(2),e?2:8):qe.test(a)?Cr:+a}c(We,"toNumber$1");var Ke=We,De=fr,or=Ne,Sr=Ke,Ue="Expected a function",Ye=Math.max,Je=Math.min;function Qe(a,r,e){var t,n,o,i,l,u,s=0,f=!1,h=!1,w=!0;if(typeof a!="function")throw new TypeError(Ue);r=Sr(r)||0,De(e)&&(f=!!e.leading,h="maxWait"in e,o=h?Ye(Sr(e.maxWait)||0,r):o,w="trailing"in e?!!e.trailing:w);function E(k){var T=t,F=n;return t=n=void 0,s=k,i=a.apply(F,T),i}c(E,"invokeFunc");function C(k){return s=k,l=setTimeout(p,r),f?E(k):i}c(C,"leadingEdge");function I(k){var T=k-u,F=k-s,K=r-T;return h?Je(K,o-F):K}c(I,"remainingWait");function x(k){var T=k-u,F=k-s;return u===void 0||T>=r||T<0||h&&F>=o}c(x,"shouldInvoke");function p(){var k=or();if(x(k))return m(k);l=setTimeout(p,I(k))}c(p,"timerExpired");function m(k){return l=void 0,w&&t?E(k):(t=n=void 0,i)}c(m,"trailingEdge");function b(){l!==void 0&&clearTimeout(l),s=0,t=u=n=l=void 0}c(b,"cancel");function M(){return l===void 0?i:m(or())}c(M,"flush");function S(){var k=or(),T=x(k);if(t=arguments,n=this,u=k,T){if(l===void 0)return C(u);if(h)return clearTimeout(l),l=setTimeout(p,r),E(u)}return l===void 0&&(l=setTimeout(p,r)),i}return c(S,"debounced"),S.cancel=b,S.flush=M,S}c(Qe,"debounce$1");var Ze=Qe,ra=Ze,ea=fr,aa="Expected a function";function ta(a,r,e){var t=!0,n=!0;if(typeof a!="function")throw new TypeError(aa);return ea(e)&&(t="leading"in e?!!e.leading:t,n="trailing"in e?!!e.trailing:n),ra(a,r,{leading:t,maxWait:r,trailing:n})}c(ta,"throttle");var na=ta,oa=P.div({position:"relative",maxWidth:250}),ia=P(Ir)({position:"absolute",zIndex:1,top:4,left:4}),la=P.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),ua=P(Gr)(function(a){var r=a.theme;return{fontFamily:r.typography.fonts.base}}),ca=P.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),sa=P.div(function(a){var r=a.theme,e=a.active;return{width:16,height:16,boxShadow:e?"".concat(r.appBorderColor," 0 0 0 1px inset, ").concat(r.color.mediumdark,"50 0 0 0 4px"):"".concat(r.appBorderColor," 0 0 0 1px inset"),borderRadius:r.appBorderRadius}}),va=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,_r=c(function(r){var e=r.value,t=r.active,n=r.onClick,o=r.style,i=Ur(r,["value","active","onClick","style"]),l="linear-gradient(".concat(e,", ").concat(e,"), ").concat(va,", linear-gradient(#fff, #fff)");return d.createElement(sa,Object.assign({},i,{active:t,onClick:n},{style:Object.assign(Object.assign({},o),{backgroundImage:l})}))},"Swatch"),fa=P(Wr.Input)(function(a){var r=a.theme;return{width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:r.typography.fonts.base}}),ha=P(Kr)(function(a){var r=a.theme;return{position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:r.input.color}}),y;(function(a){a.RGB="rgb",a.HSL="hsl",a.HEX="hex"})(y||(y={}));var U=Object.values(y),da=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,pa=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,ga=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,vr=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,ma=/^\s*#?([0-9a-f]{3})\s*$/i,ba=(X={},_(X,y.HEX,ve),_(X,y.RGB,ge),_(X,y.HSL,de),X),Y=(q={},_(q,y.HEX,"transparent"),_(q,y.RGB,"rgba(0, 0, 0, 0)"),_(q,y.HSL,"hsla(0, 0%, 0%, 0)"),q),Or=c(function(r){var e=r==null?void 0:r.match(da);if(!e)return[0,0,0,1];var t=N(e,5),n=t[1],o=t[2],i=t[3],l=t[4],u=l===void 0?1:l;return[n,o,i,u].map(Number)},"stringToArgs"),V=c(function(r){var e;if(!!r){var t=!0;if(pa.test(r)){var n,o=Or(r),i=N(o,4),l=i[0],u=i[1],s=i[2],f=i[3],h=H.rgb.hsl([l,u,s])||[0,0,0],w=N(h,3),E=w[0],C=w[1],I=w[2];return n={valid:t,value:r,keyword:H.rgb.keyword([l,u,s]),colorSpace:y.RGB},_(n,y.RGB,r),_(n,y.HSL,"hsla(".concat(E,", ").concat(C,"%, ").concat(I,"%, ").concat(f,")")),_(n,y.HEX,"#".concat(H.rgb.hex([l,u,s]).toLowerCase())),n}if(ga.test(r)){var x,p=Or(r),m=N(p,4),b=m[0],M=m[1],S=m[2],k=m[3],T=H.hsl.rgb([b,M,S])||[0,0,0],F=N(T,3),K=F[0],qr=F[1],Ar=F[2];return x={valid:t,value:r,keyword:H.hsl.keyword([b,M,S]),colorSpace:y.HSL},_(x,y.RGB,"rgba(".concat(K,", ").concat(qr,", ").concat(Ar,", ").concat(k,")")),_(x,y.HSL,r),_(x,y.HEX,"#".concat(H.hsl.hex([b,M,S]).toLowerCase())),x}var D=r.replace("#",""),$=H.keyword.rgb(D)||H.hex.rgb(D),rr=H.rgb.hsl($),z=r;if(/[^#a-f0-9]/i.test(r)?z=D:vr.test(r)&&(z="#".concat(D)),z.startsWith("#"))t=vr.test(z);else try{H.keyword.hex(z)}catch{t=!1}return e={valid:t,value:z,keyword:H.rgb.keyword($),colorSpace:y.HEX},_(e,y.RGB,"rgba(".concat($[0],", ").concat($[1],", ").concat($[2],", 1)")),_(e,y.HSL,"hsla(".concat(rr[0],", ").concat(rr[1],"%, ").concat(rr[2],"%, 1)")),_(e,y.HEX,z),e}},"parseValue"),ya=c(function(r,e,t){if(!r||!(e!=null&&e.valid))return Y[t];if(t!==y.HEX)return(e==null?void 0:e[t])||Y[t];if(!e.hex.startsWith("#"))try{return"#".concat(H.keyword.hex(e.hex))}catch{return Y.hex}var n=e.hex.match(ma);if(!n)return vr.test(e.hex)?e.hex:Y.hex;var o=n[1].split(""),i=N(o,3),l=i[0],u=i[1],s=i[2];return"#".concat(l).concat(l).concat(u).concat(u).concat(s).concat(s)},"getRealValue"),xa=c(function(r,e){var t=g.exports.useState(r||""),n=N(t,2),o=n[0],i=n[1],l=g.exports.useState(function(){return V(o)}),u=N(l,2),s=u[0],f=u[1],h=g.exports.useState((s==null?void 0:s.colorSpace)||y.HEX),w=N(h,2),E=w[0],C=w[1];g.exports.useEffect(function(){r===void 0&&(i(""),f(void 0),C(y.HEX))},[r]);var I=g.exports.useMemo(function(){return ya(o,s,E).toLowerCase()},[o,s,E]),x=g.exports.useCallback(function(m){var b=V(m);i((b==null?void 0:b.value)||m||""),b&&(f(b),C(b.colorSpace),e(b.value))},[e]),p=g.exports.useCallback(function(){var m=U.indexOf(E)+1;m>=U.length&&(m=0),C(U[m]);var b=(s==null?void 0:s[U[m]])||"";i(b),e(b)},[s,E,e]);return{value:o,realValue:I,updateValue:x,color:s,colorSpace:E,cycleColorSpace:p}},"useColorInput"),Z=c(function(r){return r.replace(/\s*/,"").toLowerCase()},"id"),wa=c(function(r,e,t){var n=g.exports.useState(e!=null&&e.valid?[e]:[]),o=N(n,2),i=o[0],l=o[1];g.exports.useEffect(function(){e===void 0&&l([])},[e]);var u=g.exports.useMemo(function(){var f=(r||[]).map(function(h){return typeof h=="string"?V(h):h.title?Object.assign(Object.assign({},V(h.color)),{keyword:h.title}):V(h.color)});return f.concat(i).filter(Boolean).slice(-27)},[r,i]),s=g.exports.useCallback(function(f){!(f!=null&&f.valid)||u.some(function(h){return Z(h[t])===Z(f[t])})||l(function(h){return h.concat(f)})},[t,u]);return{presets:u,addPreset:s}},"usePresets"),Ra=c(function(r){var e=r.name,t=r.value,n=r.onChange,o=r.onFocus,i=r.onBlur,l=r.presetColors,u=r.startOpen,s=xa(t,na(n,200)),f=s.value,h=s.realValue,w=s.updateValue,E=s.color,C=s.colorSpace,I=s.cycleColorSpace,x=wa(l,E,C),p=x.presets,m=x.addPreset,b=ba[C];return d.createElement(oa,null,d.createElement(ia,{trigger:"click",startOpen:u,closeOnClick:!0,onVisibilityChange:c(function(){return m(E)},"onVisibilityChange"),tooltip:d.createElement(la,null,d.createElement(b,Object.assign({color:h==="transparent"?"#000000":h},{onChange:w,onFocus:o,onBlur:i})),p.length>0&&d.createElement(ca,null,p.map(function(M,S){return d.createElement(Ir,{key:"".concat(M.value,"-").concat(S),hasChrome:!1,tooltip:d.createElement(ua,{note:M.keyword||M.value})},d.createElement(_r,{value:M[C],active:E&&Z(M[C])===Z(E[C]),onClick:c(function(){return w(M.value)},"onClick")}))})))},d.createElement(_r,{value:h,style:{margin:4}})),d.createElement(fa,{id:Dr(e),value:f,onChange:c(function(S){return w(S.target.value)},"onChange"),onFocus:c(function(S){return S.target.select()},"onFocus"),placeholder:"Choose color..."}),f?d.createElement(ha,{icon:"markup",onClick:I}):null)},"ColorControl");export{Ra as ColorControl,Ra as default};
//# sourceMappingURL=Color-f953d088.5c9beee5.js.map
