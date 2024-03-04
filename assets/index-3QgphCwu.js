(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Be,_,or,oe,on,ir,Dt,ar,Te={},sr=[],eo=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ct=Array.isArray;function q(e,t){for(var n in t)e[n]=t[n];return e}function cr(e){var t=e.parentNode;t&&t.removeChild(e)}function G(e,t,n){var r,o,i,s={};for(i in t)i=="key"?r=t[i]:i=="ref"?o=t[i]:s[i]=t[i];if(arguments.length>2&&(s.children=arguments.length>3?Be.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)s[i]===void 0&&(s[i]=e.defaultProps[i]);return Re(e,s,r,o,null)}function Re(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++or,__i:-1,__u:0};return o==null&&_.vnode!=null&&_.vnode(i),i}function to(){return{current:null}}function O(e){return e.children}function U(e,t){this.props=e,this.context=t}function he(e,t){if(t==null)return e.__?he(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?he(e):null}function lr(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return lr(e)}}function At(e){(!e.__d&&(e.__d=!0)&&oe.push(e)&&!ot.__r++||on!==_.debounceRendering)&&((on=_.debounceRendering)||ir)(ot)}function ot(){var e,t,n,r,o,i,s,l,u;for(oe.sort(Dt);e=oe.shift();)e.__d&&(t=oe.length,r=void 0,i=(o=(n=e).__v).__e,l=[],u=[],(s=n.__P)&&((r=q({},o)).__v=o.__v+1,_.vnode&&_.vnode(r),Gt(s,r,o,n.__n,s.ownerSVGElement!==void 0,32&o.__u?[i]:null,l,i??he(o),!!(32&o.__u),u),r.__.__k[r.__i]=r,fr(l,r,u),r.__e!=i&&lr(r)),oe.length>t&&oe.sort(Dt));ot.__r=0}function ur(e,t,n,r,o,i,s,l,u,d,p){var c,g,f,y,x,S=r&&r.__k||sr,m=t.length;for(n.__d=u,no(n,t,S),u=n.__d,c=0;c<m;c++)(f=n.__k[c])!=null&&typeof f!="boolean"&&typeof f!="function"&&(g=f.__i===-1?Te:S[f.__i]||Te,f.__i=c,Gt(e,f,g,o,i,s,l,u,d,p),y=f.__e,f.ref&&g.ref!=f.ref&&(g.ref&&Jt(g.ref,null,f),p.push(f.ref,f.__c||y,f)),x==null&&y!=null&&(x=y),65536&f.__u||g.__k===f.__k?u=dr(f,u,e):typeof f.type=="function"&&f.__d!==void 0?u=f.__d:y&&(u=y.nextSibling),f.__d=void 0,f.__u&=-196609);n.__d=u,n.__e=x}function no(e,t,n){var r,o,i,s,l,u=t.length,d=n.length,p=d,c=0;for(e.__k=[],r=0;r<u;r++)(o=e.__k[r]=(o=t[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?Re(null,o,null,null,o):ct(o)?Re(O,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?Re(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,l=ro(o,n,s=r+c,p),o.__i=l,i=null,l!==-1&&(p--,(i=n[l])&&(i.__u|=131072)),i==null||i.__v===null?(l==-1&&c--,typeof o.type!="function"&&(o.__u|=65536)):l!==s&&(l===s+1?c++:l>s?p>u-s?c+=l-s:c--:c=l<s&&l==s-1?l-s:0,l!==r+c&&(o.__u|=65536))):(i=n[r])&&i.key==null&&i.__e&&(i.__e==e.__d&&(e.__d=he(i)),Et(i,i,!1),n[r]=null,p--);if(p)for(r=0;r<d;r++)(i=n[r])!=null&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=he(i)),Et(i,i))}function dr(e,t,n){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=dr(r[o],t,n));return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function Q(e,t){return t=t||[],e==null||typeof e=="boolean"||(ct(e)?e.some(function(n){Q(n,t)}):t.push(e)),t}function ro(e,t,n,r){var o=e.key,i=e.type,s=n-1,l=n+1,u=t[n];if(u===null||u&&o==u.key&&i===u.type)return n;if(r>(u!=null&&!(131072&u.__u)?1:0))for(;s>=0||l<t.length;){if(s>=0){if((u=t[s])&&!(131072&u.__u)&&o==u.key&&i===u.type)return s;s--}if(l<t.length){if((u=t[l])&&!(131072&u.__u)&&o==u.key&&i===u.type)return l;l++}}return-1}function an(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||eo.test(t)?n:n+"px"}function Ve(e,t,n,r,o){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||an(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||an(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,i?cn:sn,i)):e.removeEventListener(t,i?cn:sn,i);else{if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function sn(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(_.event?_.event(e):e)}function cn(e){return this.l[e.type+!0](_.event?_.event(e):e)}function Gt(e,t,n,r,o,i,s,l,u,d){var p,c,g,f,y,x,S,m,b,C,P,D,k,v,J,M=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),i=[l=t.__e=n.__e]),(p=_.__b)&&p(t);e:if(typeof M=="function")try{if(m=t.props,b=(p=M.contextType)&&r[p.__c],C=p?b?b.props.value:p.__:r,n.__c?S=(c=t.__c=n.__c).__=c.__E:("prototype"in M&&M.prototype.render?t.__c=c=new M(m,C):(t.__c=c=new U(m,C),c.constructor=M,c.render=io),b&&b.sub(c),c.props=m,c.state||(c.state={}),c.context=C,c.__n=r,g=c.__d=!0,c.__h=[],c._sb=[]),c.__s==null&&(c.__s=c.state),M.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=q({},c.__s)),q(c.__s,M.getDerivedStateFromProps(m,c.__s))),f=c.props,y=c.state,c.__v=t,g)M.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(M.getDerivedStateFromProps==null&&m!==f&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(m,C),!c.__e&&(c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(m,c.__s,C)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(c.props=m,c.state=c.__s,c.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(ue){ue&&(ue.__=t)}),P=0;P<c._sb.length;P++)c.__h.push(c._sb[P]);c._sb=[],c.__h.length&&s.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(m,c.__s,C),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(f,y,x)})}if(c.context=C,c.props=m,c.__P=e,c.__e=!1,D=_.__r,k=0,"prototype"in M&&M.prototype.render){for(c.state=c.__s,c.__d=!1,D&&D(t),p=c.render(c.props,c.state,c.context),v=0;v<c._sb.length;v++)c.__h.push(c._sb[v]);c._sb=[]}else do c.__d=!1,D&&D(t),p=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++k<25);c.state=c.__s,c.getChildContext!=null&&(r=q(q({},r),c.getChildContext())),g||c.getSnapshotBeforeUpdate==null||(x=c.getSnapshotBeforeUpdate(f,y)),ur(e,ct(J=p!=null&&p.type===O&&p.key==null?p.props.children:p)?J:[J],t,n,r,o,i,s,l,u,d),c.base=t.__e,t.__u&=-161,c.__h.length&&s.push(c),S&&(c.__E=c.__=null)}catch(ue){t.__v=null,u||i!=null?(t.__e=l,t.__u|=u?160:32,i[i.indexOf(l)]=null):(t.__e=n.__e,t.__k=n.__k),_.__e(ue,t,n)}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=oo(n.__e,t,n,r,o,i,s,u,d);(p=_.diffed)&&p(t)}function fr(e,t,n){t.__d=void 0;for(var r=0;r<n.length;r++)Jt(n[r],n[++r],n[++r]);_.__c&&_.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){_.__e(i,o.__v)}})}function oo(e,t,n,r,o,i,s,l,u){var d,p,c,g,f,y,x,S=n.props,m=t.props,b=t.type;if(b==="svg"&&(o=!0),i!=null){for(d=0;d<i.length;d++)if((f=i[d])&&"setAttribute"in f==!!b&&(b?f.localName===b:f.nodeType===3)){e=f,i[d]=null;break}}if(e==null){if(b===null)return document.createTextNode(m);e=o?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,m.is&&m),i=null,l=!1}if(b===null)S===m||l&&e.data===m||(e.data=m);else{if(i=i&&Be.call(e.childNodes),S=n.props||Te,!l&&i!=null)for(S={},d=0;d<e.attributes.length;d++)S[(f=e.attributes[d]).name]=f.value;for(d in S)f=S[d],d=="children"||(d=="dangerouslySetInnerHTML"?c=f:d==="key"||d in m||Ve(e,d,null,f,o));for(d in m)f=m[d],d=="children"?g=f:d=="dangerouslySetInnerHTML"?p=f:d=="value"?y=f:d=="checked"?x=f:d==="key"||l&&typeof f!="function"||S[d]===f||Ve(e,d,f,S[d],o);if(p)l||c&&(p.__html===c.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(c&&(e.innerHTML=""),ur(e,ct(g)?g:[g],t,n,r,o&&b!=="foreignObject",i,s,i?i[0]:n.__k&&he(n,0),l,u),i!=null)for(d=i.length;d--;)i[d]!=null&&cr(i[d]);l||(d="value",y!==void 0&&(y!==e[d]||b==="progress"&&!y||b==="option"&&y!==S[d])&&Ve(e,d,y,S[d],!1),d="checked",x!==void 0&&x!==e[d]&&Ve(e,d,x,S[d],!1))}return e}function Jt(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){_.__e(r,n)}}function Et(e,t,n){var r,o;if(_.unmount&&_.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Jt(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){_.__e(i,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&Et(r[o],t,n||typeof e.type!="function");n||e.__e==null||cr(e.__e),e.__=e.__e=e.__d=void 0}function io(e,t,n){return this.constructor(e,n)}function pe(e,t,n){var r,o,i,s;_.__&&_.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,i=[],s=[],Gt(t,e=(!r&&n||t).__k=G(O,null,[e]),o||Te,Te,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?Be.call(t.childNodes):null,i,!r&&n?n:o?o.__e:t.firstChild,r,s),fr(i,e,s)}function hr(e,t){pe(e,t,hr)}function ao(e,t,n){var r,o,i,s,l=q({},e.props);for(i in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)i=="key"?r=t[i]:i=="ref"?o=t[i]:l[i]=t[i]===void 0&&s!==void 0?s[i]:t[i];return arguments.length>2&&(l.children=arguments.length>3?Be.call(arguments,2):n),Re(e.type,l,r||e.key,o||e.ref,null)}function pr(e,t){var n={__c:t="__cC"+ar++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,i;return this.getChildContext||(o=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&o.some(function(l){l.__e=!0,At(l)})},this.sub=function(s){o.push(s);var l=s.componentWillUnmount;s.componentWillUnmount=function(){o.splice(o.indexOf(s),1),l&&l.call(s)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Be=sr.slice,_={__e:function(e,t,n,r){for(var o,i,s;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),s=o.__d),s)return o.__E=o}catch(l){e=l}throw e}},or=0,U.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=q({},this.state),typeof e=="function"&&(e=e(q({},n),this.props)),e&&q(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),At(this))},U.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),At(this))},U.prototype.render=O,oe=[],ir=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Dt=function(e,t){return e.__v.__b-t.__v.__b},ot.__r=0,ar=0;var R=function(){return R=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},R.apply(this,arguments)};function Le(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ne,E,bt,ln,_e=0,_r=[],Qe=[],un=_.__b,dn=_.__r,fn=_.diffed,hn=_.__c,pn=_.unmount;function be(e,t){_.__h&&_.__h(E,e,_e||t),_e=0;var n=E.__H||(E.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Qe}),n.__[e]}function se(e){return _e=1,gr(yr,e)}function gr(e,t,n){var r=be(ne++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):yr(void 0,t),function(l){var u=r.__N?r.__N[0]:r.__[0],d=r.t(u,l);u!==d&&(r.__N=[d,r.__[1]],r.__c.setState({}))}],r.__c=E,!E.u)){var o=function(l,u,d){if(!r.__c.__H)return!0;var p=r.__c.__H.__.filter(function(g){return g.__c});if(p.every(function(g){return!g.__N}))return!i||i.call(this,l,u,d);var c=!1;return p.forEach(function(g){if(g.__N){var f=g.__[0];g.__=g.__N,g.__N=void 0,f!==g.__[0]&&(c=!0)}}),!(!c&&r.__c.props===l)&&(!i||i.call(this,l,u,d))};E.u=!0;var i=E.shouldComponentUpdate,s=E.componentWillUpdate;E.componentWillUpdate=function(l,u,d){if(this.__e){var p=i;i=void 0,o(l,u,d),i=p}s&&s.call(this,l,u,d)},E.shouldComponentUpdate=o}return r.__N||r.__}function Oe(e,t){var n=be(ne++,3);!_.__s&&qt(n.__H,t)&&(n.__=e,n.i=t,E.__H.__h.push(n))}function lt(e,t){var n=be(ne++,4);!_.__s&&qt(n.__H,t)&&(n.__=e,n.i=t,E.__h.push(n))}function mr(e){return _e=5,ut(function(){return{current:e}},[])}function so(e,t,n){_e=6,lt(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function ut(e,t){var n=be(ne++,7);return qt(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function co(e,t){return _e=8,ut(function(){return e},t)}function Yt(e){var t=E.context[e.__c],n=be(ne++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(E)),t.props.value):e.__}function lo(e,t){_.useDebugValue&&_.useDebugValue(t?t(e):e)}function uo(){var e=be(ne++,11);if(!e.__){for(var t=E.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function fo(){for(var e;e=_r.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Ke),e.__H.__h.forEach(It),e.__H.__h=[]}catch(t){e.__H.__h=[],_.__e(t,e.__v)}}_.__b=function(e){E=null,un&&un(e)},_.__r=function(e){dn&&dn(e),ne=0;var t=(E=e.__c).__H;t&&(bt===E?(t.__h=[],E.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Qe,n.__N=n.i=void 0})):(t.__h.forEach(Ke),t.__h.forEach(It),t.__h=[],ne=0)),bt=E},_.diffed=function(e){fn&&fn(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(_r.push(t)!==1&&ln===_.requestAnimationFrame||((ln=_.requestAnimationFrame)||ho)(fo)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Qe&&(n.__=n.__V),n.i=void 0,n.__V=Qe})),bt=E=null},_.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Ke),n.__h=n.__h.filter(function(r){return!r.__||It(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],_.__e(r,n.__v)}}),hn&&hn(e,t)},_.unmount=function(e){pn&&pn(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Ke(r)}catch(o){t=o}}),n.__H=void 0,t&&_.__e(t,n.__v))};var _n=typeof requestAnimationFrame=="function";function ho(e){var t,n=function(){clearTimeout(r),_n&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);_n&&(t=requestAnimationFrame(n))}function Ke(e){var t=E,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),E=t}function It(e){var t=E;e.__c=e.__(),E=t}function qt(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function yr(e,t){return typeof t=="function"?t(e):t}function vr(e,t){for(var n in t)e[n]=t[n];return e}function Nt(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function Rt(e){this.props=e}function po(e,t){function n(o){var i=this.props.ref,s=i==o.ref;return!s&&i&&(i.call?i(null):i.current=null),t?!t(this.props,o)||!s:Nt(this.props,o)}function r(o){return this.shouldComponentUpdate=n,G(e,o)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(Rt.prototype=new U).isPureReactComponent=!0,Rt.prototype.shouldComponentUpdate=function(e,t){return Nt(this.props,e)||Nt(this.state,t)};var gn=_.__b;_.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),gn&&gn(e)};var _o=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function go(e){function t(n){var r=vr({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=_o,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var mn=function(e,t){return e==null?null:Q(Q(e).map(t))},mo={map:mn,forEach:mn,count:function(e){return e?Q(e).length:0},only:function(e){var t=Q(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:Q},yo=_.__e;_.__e=function(e,t,n,r){if(e.then){for(var o,i=t;i=i.__;)if((o=i.__c)&&o.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t)}yo(e,t,n,r)};var yn=_.unmount;function br(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=vr({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return br(r,t,n)})),e}function wr(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return wr(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function Ze(){this.__u=0,this.t=null,this.__b=null}function xr(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function vo(e){var t,n,r;function o(i){if(t||(t=e()).then(function(s){n=s.default||s},function(s){r=s}),r)throw r;if(!n)throw t;return G(n,i)}return o.displayName="Lazy",o.__f=!0,o}function Ie(){this.u=null,this.o=null}_.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),yn&&yn(e)},(Ze.prototype=new U).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=xr(r.__v),i=!1,s=function(){i||(i=!0,n.__R=null,o?o(l):l())};n.__R=s;var l=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=wr(u,u.__c.__P,u.__c.__O)}var d;for(r.setState({__a:r.__b=null});d=r.t.pop();)d.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(s,s)},Ze.prototype.componentWillUnmount=function(){this.t=[]},Ze.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=br(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__a&&G(O,null,e.fallback);return o&&(o.__u&=-33),[G(O,null,t.__a?null:e.children),o]};var vn=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function bo(e){return this.getChildContext=function(){return e.context},e.children}function wo(e){var t=this,n=e.i;t.componentWillUnmount=function(){pe(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),pe(G(bo,{context:t.context},e.__v),t.l)}function xo(e,t){var n=G(wo,{__v:e,i:t});return n.containerInfo=t,n}(Ie.prototype=new U).__a=function(e){var t=this,n=xr(t.__v),r=t.o.get(e);return r[0]++,function(o){var i=function(){t.props.revealOrder?(r.push(o),vn(t,e,r)):o()};n?n(i):i()}},Ie.prototype.render=function(e){this.u=null,this.o=new Map;var t=Q(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Ie.prototype.componentDidUpdate=Ie.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){vn(e,n,t)})};var Cr=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Co=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,So=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,ko=/[A-Z0-9]/g,$o=typeof document<"u",Po=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function Do(e,t,n){return t.__k==null&&(t.textContent=""),pe(e,t),typeof n=="function"&&n(),e?e.__c:null}function Ao(e,t,n){return hr(e,t),typeof n=="function"&&n(),e?e.__c:null}U.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(U.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var bn=_.event;function Eo(){}function Io(){return this.cancelBubble}function No(){return this.defaultPrevented}_.event=function(e){return bn&&(e=bn(e)),e.persist=Eo,e.isPropagationStopped=Io,e.isDefaultPrevented=No,e.nativeEvent=e};var Qt,Ro={enumerable:!1,configurable:!0,get:function(){return this.class}},wn=_.vnode;_.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,o={};for(var i in n){var s=n[i];if(!(i==="value"&&"defaultValue"in n&&s==null||$o&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var l=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&s===!0?s="":l==="ondoubleclick"?i="ondblclick":l!=="onchange"||r!=="input"&&r!=="textarea"||Po(n.type)?l==="onfocus"?i="onfocusin":l==="onblur"?i="onfocusout":So.test(i)?i=l:r.indexOf("-")===-1&&Co.test(i)?i=i.replace(ko,"-$&").toLowerCase():s===null&&(s=void 0):l=i="oninput",l==="oninput"&&o[i=l]&&(i="oninputCapture"),o[i]=s}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=Q(n.children).forEach(function(u){u.props.selected=o.value.indexOf(u.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=Q(n.children).forEach(function(u){u.props.selected=o.multiple?o.defaultValue.indexOf(u.props.value)!=-1:o.defaultValue==u.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",Ro)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),t.props=o}(e),e.$$typeof=Cr,wn&&wn(e)};var xn=_.__r;_.__r=function(e){xn&&xn(e),Qt=e.__c};var Cn=_.diffed;_.diffed=function(e){Cn&&Cn(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),Qt=null};var Mo={ReactCurrentDispatcher:{current:{readContext:function(e){return Qt.__n[e.__c].props.value}}}};function To(e){return G.bind(null,e)}function dt(e){return!!e&&e.$$typeof===Cr}function Lo(e){return dt(e)&&e.type===O}function Oo(e){return dt(e)?ao.apply(null,arguments):e}function jo(e){return!!e.__k&&(pe(null,e),!0)}function Ho(e){return e&&(e.base||e.nodeType===1&&e)||null}var Bo=function(e,t){return e(t)},Fo=function(e,t){return e(t)},zo=O;function Sr(e){e()}function Wo(e){return e}function Uo(){return[!1,Sr]}var Vo=lt,Go=dt;function Jo(e,t){var n=t(),r=se({h:{__:n,v:t}}),o=r[0].h,i=r[1];return lt(function(){o.__=n,o.v=t,wt(o)&&i({h:o})},[e,n,t]),Oe(function(){return wt(o)&&i({h:o}),e(function(){wt(o)&&i({h:o})})},[e]),n}function wt(e){var t,n,r=e.v,o=e.__;try{var i=r();return!((t=o)===(n=i)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}var B={useState:se,useId:uo,useReducer:gr,useEffect:Oe,useLayoutEffect:lt,useInsertionEffect:Vo,useTransition:Uo,useDeferredValue:Wo,useSyncExternalStore:Jo,startTransition:Sr,useRef:mr,useImperativeHandle:so,useMemo:ut,useCallback:co,useContext:Yt,useDebugValue:lo,version:"17.0.2",Children:mo,render:Do,hydrate:Ao,unmountComponentAtNode:jo,createPortal:xo,createElement:G,createContext:pr,createFactory:To,cloneElement:Oo,createRef:to,Fragment:O,isValidElement:dt,isElement:Go,isFragment:Lo,findDOMNode:Ho,Component:U,PureComponent:Rt,memo:po,forwardRef:go,flushSync:Fo,unstable_batchedUpdates:Bo,StrictMode:zo,Suspense:Ze,SuspenseList:Ie,lazy:vo,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Mo},A="-ms-",Me="-moz-",$="-webkit-",kr="comm",ft="rule",Kt="decl",Yo="@import",$r="@keyframes",qo="@layer",Qo=Math.abs,Zt=String.fromCharCode,Mt=Object.assign;function Ko(e,t){return N(e,0)^45?(((t<<2^N(e,0))<<2^N(e,1))<<2^N(e,2))<<2^N(e,3):0}function Pr(e){return e.trim()}function Y(e,t){return(e=t.exec(e))?e[0]:e}function w(e,t,n){return e.replace(t,n)}function Xe(e,t){return e.indexOf(t)}function N(e,t){return e.charCodeAt(t)|0}function ge(e,t,n){return e.slice(t,n)}function W(e){return e.length}function Dr(e){return e.length}function Ne(e,t){return t.push(e),e}function Zo(e,t){return e.map(t).join("")}function Sn(e,t){return e.filter(function(n){return!Y(n,t)})}var ht=1,me=1,Ar=0,H=0,I=0,we="";function pt(e,t,n,r,o,i,s,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ht,column:me,length:s,return:"",siblings:l}}function ee(e,t){return Mt(pt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function de(e){for(;e.root;)e=ee(e.root,{children:[e]});Ne(e,e.siblings)}function Xo(){return I}function ei(){return I=H>0?N(we,--H):0,me--,I===10&&(me=1,ht--),I}function F(){return I=H<Ar?N(we,H++):0,me++,I===10&&(me=1,ht++),I}function ae(){return N(we,H)}function et(){return H}function _t(e,t){return ge(we,e,t)}function Tt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ti(e){return ht=me=1,Ar=W(we=e),H=0,[]}function ni(e){return we="",e}function xt(e){return Pr(_t(H-1,Lt(e===91?e+2:e===40?e+1:e)))}function ri(e){for(;(I=ae())&&I<33;)F();return Tt(e)>2||Tt(I)>3?"":" "}function oi(e,t){for(;--t&&F()&&!(I<48||I>102||I>57&&I<65||I>70&&I<97););return _t(e,et()+(t<6&&ae()==32&&F()==32))}function Lt(e){for(;F();)switch(I){case e:return H;case 34:case 39:e!==34&&e!==39&&Lt(I);break;case 40:e===41&&Lt(e);break;case 92:F();break}return H}function ii(e,t){for(;F()&&e+I!==57;)if(e+I===84&&ae()===47)break;return"/*"+_t(t,H-1)+"*"+Zt(e===47?e:F())}function ai(e){for(;!Tt(ae());)F();return _t(e,H)}function si(e){return ni(tt("",null,null,null,[""],e=ti(e),0,[0],e))}function tt(e,t,n,r,o,i,s,l,u){for(var d=0,p=0,c=s,g=0,f=0,y=0,x=1,S=1,m=1,b=0,C="",P=o,D=i,k=r,v=C;S;)switch(y=b,b=F()){case 40:if(y!=108&&N(v,c-1)==58){Xe(v+=w(xt(b),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:v+=xt(b);break;case 9:case 10:case 13:case 32:v+=ri(y);break;case 92:v+=oi(et()-1,7);continue;case 47:switch(ae()){case 42:case 47:Ne(ci(ii(F(),et()),t,n,u),u);break;default:v+="/"}break;case 123*x:l[d++]=W(v)*m;case 125*x:case 59:case 0:switch(b){case 0:case 125:S=0;case 59+p:m==-1&&(v=w(v,/\f/g,"")),f>0&&W(v)-c&&Ne(f>32?$n(v+";",r,n,c-1,u):$n(w(v," ","")+";",r,n,c-2,u),u);break;case 59:v+=";";default:if(Ne(k=kn(v,t,n,d,p,o,l,C,P=[],D=[],c,i),i),b===123)if(p===0)tt(v,t,k,k,P,i,c,l,D);else switch(g===99&&N(v,3)===110?100:g){case 100:case 108:case 109:case 115:tt(e,k,k,r&&Ne(kn(e,k,k,0,0,o,l,C,o,P=[],c,D),D),o,D,c,l,r?P:D);break;default:tt(v,k,k,k,[""],D,0,l,D)}}d=p=f=0,x=m=1,C=v="",c=s;break;case 58:c=1+W(v),f=y;default:if(x<1){if(b==123)--x;else if(b==125&&x++==0&&ei()==125)continue}switch(v+=Zt(b),b*x){case 38:m=p>0?1:(v+="\f",-1);break;case 44:l[d++]=(W(v)-1)*m,m=1;break;case 64:ae()===45&&(v+=xt(F())),g=ae(),p=c=W(C=v+=ai(et())),b++;break;case 45:y===45&&W(v)==2&&(x=0)}}return i}function kn(e,t,n,r,o,i,s,l,u,d,p,c){for(var g=o-1,f=o===0?i:[""],y=Dr(f),x=0,S=0,m=0;x<r;++x)for(var b=0,C=ge(e,g+1,g=Qo(S=s[x])),P=e;b<y;++b)(P=Pr(S>0?f[b]+" "+C:w(C,/&\f/g,f[b])))&&(u[m++]=P);return pt(e,t,n,o===0?ft:l,u,d,p,c)}function ci(e,t,n,r){return pt(e,t,n,kr,Zt(Xo()),ge(e,2,-2),0,r)}function $n(e,t,n,r,o){return pt(e,t,n,Kt,ge(e,0,r),ge(e,r+1,-1),r,o)}function Er(e,t,n){switch(Ko(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 4789:return Me+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Me+e+A+e+e;case 5936:switch(N(e,t+11)){case 114:return $+e+A+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+A+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+A+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return $+e+A+e+e;case 6165:return $+e+A+"flex-"+e+e;case 5187:return $+e+w(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+A+"flex-$1$2")+e;case 5443:return $+e+A+"flex-item-"+w(e,/flex-|-self/g,"")+(Y(e,/flex-|baseline/)?"":A+"grid-row-"+w(e,/flex-|-self/g,""))+e;case 4675:return $+e+A+"flex-line-pack"+w(e,/align-content|flex-|-self/g,"")+e;case 5548:return $+e+A+w(e,"shrink","negative")+e;case 5292:return $+e+A+w(e,"basis","preferred-size")+e;case 6060:return $+"box-"+w(e,"-grow","")+$+e+A+w(e,"grow","positive")+e;case 4554:return $+w(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4200:if(!Y(e,/flex-|baseline/))return A+"grid-column-align"+ge(e,t)+e;break;case 2592:case 3360:return A+w(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Y(r.props,/grid-\w+-end/)})?~Xe(e+(n=n[t].value),"span")?e:A+w(e,"-start","")+e+A+"grid-row-span:"+(~Xe(n,"span")?Y(n,/\d+/):+Y(n,/\d+/)-+Y(e,/\d+/))+";":A+w(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Y(r.props,/grid-\w+-start/)})?e:A+w(w(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(W(e)-1-t>6)switch(N(e,t+1)){case 109:if(N(e,t+4)!==45)break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Me+(N(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Xe(e,"stretch")?Er(w(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return w(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,l,u,d){return A+o+":"+i+d+(s?A+o+"-span:"+(l?u:+u-+i)+d:"")+e});case 4949:if(N(e,t+6)===121)return w(e,":",":"+$)+e;break;case 6444:switch(N(e,N(e,14)===45?18:11)){case 120:return w(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$+(N(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+A+"$2box$3")+e;case 100:return w(e,":",":"+A)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(e,"scroll-","scroll-snap-")+e}return e}function it(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function li(e,t,n,r){switch(e.type){case qo:if(e.children.length)break;case Yo:case Kt:return e.return=e.return||e.value;case kr:return"";case $r:return e.return=e.value+"{"+it(e.children,r)+"}";case ft:if(!W(e.value=e.props.join(",")))return""}return W(n=it(e.children,r))?e.return=e.value+"{"+n+"}":""}function ui(e){var t=Dr(e);return function(n,r,o,i){for(var s="",l=0;l<t;l++)s+=e[l](n,r,o,i)||"";return s}}function di(e){return function(t){t.root||(t=t.return)&&e(t)}}function fi(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Kt:e.return=Er(e.value,e.length,n);return;case $r:return it([ee(e,{value:w(e.value,"@","@"+$)})],r);case ft:if(e.length)return Zo(n=e.props,function(o){switch(Y(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":de(ee(e,{props:[w(o,/:(read-\w+)/,":"+Me+"$1")]})),de(ee(e,{props:[o]})),Mt(e,{props:Sn(n,r)});break;case"::placeholder":de(ee(e,{props:[w(o,/:(plac\w+)/,":"+$+"input-$1")]})),de(ee(e,{props:[w(o,/:(plac\w+)/,":"+Me+"$1")]})),de(ee(e,{props:[w(o,/:(plac\w+)/,A+"input-$1")]})),de(ee(e,{props:[o]})),Mt(e,{props:Sn(n,r)});break}return""})}}var hi={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},j={},ye=typeof process<"u"&&j!==void 0&&(j.REACT_APP_SC_ATTR||j.SC_ATTR)||"data-styled",Xt=typeof window<"u"&&"HTMLElement"in window,pi=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&j!==void 0&&j.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&j.REACT_APP_SC_DISABLE_SPEEDY!==""?j.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&j.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&j!==void 0&&j.SC_DISABLE_SPEEDY!==void 0&&j.SC_DISABLE_SPEEDY!==""&&j.SC_DISABLE_SPEEDY!=="false"&&j.SC_DISABLE_SPEEDY),_i={},gt=Object.freeze([]),ve=Object.freeze({});function Ir(e,t,n){return n===void 0&&(n=ve),e.theme!==n.theme&&e.theme||t||n.theme}var Nr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),gi=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,mi=/(^-|-$)/g;function Pn(e){return e.replace(gi,"-").replace(mi,"")}var yi=/(a)(d)/gi,Dn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ot(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Dn(t%52)+n;return(Dn(t%52)+n).replace(yi,"$1-$2")}var Ct,fe=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Rr=function(e){return fe(5381,e)};function Mr(e){return Ot(Rr(e)>>>0)}function vi(e){return e.displayName||e.name||"Component"}function St(e){return typeof e=="string"&&!0}var Tr=typeof Symbol=="function"&&Symbol.for,Lr=Tr?Symbol.for("react.memo"):60115,bi=Tr?Symbol.for("react.forward_ref"):60112,wi={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},xi={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Or={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ci=((Ct={})[bi]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ct[Lr]=Or,Ct);function An(e){return("type"in(t=e)&&t.type.$$typeof)===Lr?Or:"$$typeof"in e?Ci[e.$$typeof]:wi;var t}var Si=Object.defineProperty,ki=Object.getOwnPropertyNames,En=Object.getOwnPropertySymbols,$i=Object.getOwnPropertyDescriptor,Pi=Object.getPrototypeOf,In=Object.prototype;function jr(e,t,n){if(typeof t!="string"){if(In){var r=Pi(t);r&&r!==In&&jr(e,r,n)}var o=ki(t);En&&(o=o.concat(En(t)));for(var i=An(e),s=An(t),l=0;l<o.length;++l){var u=o[l];if(!(u in xi||n&&n[u]||s&&u in s||i&&u in i)){var d=$i(t,u);try{Si(e,u,d)}catch{}}}}return e}function ce(e){return typeof e=="function"}function en(e){return typeof e=="object"&&"styledComponentId"in e}function ie(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function jt(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function je(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ht(e,t,n){if(n===void 0&&(n=!1),!n&&!je(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ht(e[r],t[r]);else if(je(t))for(var r in t)e[r]=Ht(e[r],t[r]);return e}function tn(e,t){Object.defineProperty(e,"toString",{value:t})}function le(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Di=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw le(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),u=(s=0,n.length);s<u;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},e}(),nt=new Map,at=new Map,rt=1,Ge=function(e){if(nt.has(e))return nt.get(e);for(;at.has(rt);)rt++;var t=rt++;return nt.set(e,t),at.set(t,e),t},Ai=function(e,t){rt=t+1,nt.set(e,t),at.set(t,e)},Ei="style[".concat(ye,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),Ii=new RegExp("^".concat(ye,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Ni=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},Ri=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,s=r.length;i<s;i++){var l=r[i].trim();if(l){var u=l.match(Ii);if(u){var d=0|parseInt(u[1],10),p=u[2];d!==0&&(Ai(p,d),Ni(e,p,u[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(l)}}};function Mi(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Hr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var u=Array.from(l.querySelectorAll("style[".concat(ye,"]")));return u[u.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(ye,"active"),r.setAttribute("data-styled-version","6.1.1");var s=Mi();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},Ti=function(){function e(t){this.element=Hr(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw le(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Li=function(){function e(t){this.element=Hr(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Oi=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Nn=Xt,ji={isServer:!Xt,useCSSOMInjection:!pi},st=function(){function e(t,n,r){t===void 0&&(t=ve),n===void 0&&(n={});var o=this;this.options=R(R({},ji),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Xt&&Nn&&(Nn=!1,function(i){for(var s=document.querySelectorAll(Ei),l=0,u=s.length;l<u;l++){var d=s[l];d&&d.getAttribute(ye)!=="active"&&(Ri(i,d),d.parentNode&&d.parentNode.removeChild(d))}}(this)),tn(this,function(){return function(i){for(var s=i.getTag(),l=s.length,u="",d=function(c){var g=function(m){return at.get(m)}(c);if(g===void 0)return"continue";var f=i.names.get(g),y=s.getGroup(c);if(f===void 0||y.length===0)return"continue";var x="".concat(ye,".g").concat(c,'[id="').concat(g,'"]'),S="";f!==void 0&&f.forEach(function(m){m.length>0&&(S+="".concat(m,","))}),u+="".concat(y).concat(x,'{content:"').concat(S,'"}').concat(`/*!sc*/
`)},p=0;p<l;p++)d(p);return u}(o)})}return e.registerId=function(t){return Ge(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(R(R({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Oi(o):r?new Ti(o):new Li(o)}(this.options),new Di(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ge(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ge(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ge(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Hi=/&/g,Bi=/^\s*\/\/.*$/gm;function Br(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Br(n.children,t)),n})}function Fi(e){var t,n,r,o=e===void 0?ve:e,i=o.options,s=i===void 0?ve:i,l=o.plugins,u=l===void 0?gt:l,d=function(g,f,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):g},p=u.slice();p.push(function(g){g.type===ft&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Hi,n).replace(r,d))}),s.prefix&&p.push(fi),p.push(li);var c=function(g,f,y,x){f===void 0&&(f=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=f,r=new RegExp("\\".concat(n,"\\b"),"g");var S=g.replace(Bi,""),m=si(y||f?"".concat(y," ").concat(f," { ").concat(S," }"):S);s.namespace&&(m=Br(m,s.namespace));var b=[];return it(m,ui(p.concat(di(function(C){return b.push(C)})))),b};return c.hash=u.length?u.reduce(function(g,f){return f.name||le(15),fe(g,f.name)},5381).toString():"",c}var zi=new st,Bt=Fi(),Fr=B.createContext({shouldForwardProp:void 0,styleSheet:zi,stylis:Bt});Fr.Consumer;B.createContext(void 0);function Ft(){return Yt(Fr)}var Wi=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Bt);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,tn(this,function(){throw le(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Bt),this.name+t.hash},e}(),Ui=function(e){return e>="A"&&e<="Z"};function Rn(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Ui(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var zr=function(e){return e==null||e===!1||e===""},Wr=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!zr(i)&&(Array.isArray(i)&&i.isCss||ce(i)?r.push("".concat(Rn(o),":"),i,";"):je(i)?r.push.apply(r,Le(Le(["".concat(o," {")],Wr(i),!1),["}"],!1)):r.push("".concat(Rn(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in hi||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function te(e,t,n,r){if(zr(e))return[];if(en(e))return[".".concat(e.styledComponentId)];if(ce(e)){if(!ce(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return te(o,t,n,r)}var i;return e instanceof Wi?n?(e.inject(n,r),[e.getName(r)]):[e]:je(e)?Wr(e):Array.isArray(e)?Array.prototype.concat.apply(gt,e.map(function(s){return te(s,t,n,r)})):[e.toString()]}function Ur(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ce(n)&&!en(n))return!1}return!0}var Vi=Rr("6.1.1"),Gi=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ur(t),this.componentId=n,this.baseHash=fe(Vi,n),this.baseStyle=r,st.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=ie(o,this.staticRulesId);else{var i=jt(te(this.rules,t,n,r)),s=Ot(fe(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}o=ie(o,s),this.staticRulesId=s}else{for(var u=fe(this.baseHash,r.hash),d="",p=0;p<this.rules.length;p++){var c=this.rules[p];if(typeof c=="string")d+=c;else if(c){var g=jt(te(c,t,n,r));u=fe(u,g+p),d+=g}}if(d){var f=Ot(u>>>0);n.hasNameForId(this.componentId,f)||n.insertRules(this.componentId,f,r(d,".".concat(f),void 0,this.componentId)),o=ie(o,f)}}return o},e}(),He=B.createContext(void 0);He.Consumer;function Ji(e){var t=B.useContext(He),n=ut(function(){return function(r,o){if(!r)throw le(14);if(ce(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw le(8);return o?R(R({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?B.createElement(He.Provider,{value:n},e.children):null}var kt={};function Yi(e,t,n){var r=en(e),o=e,i=!St(e),s=t.attrs,l=s===void 0?gt:s,u=t.componentId,d=u===void 0?function(P,D){var k=typeof P!="string"?"sc":Pn(P);kt[k]=(kt[k]||0)+1;var v="".concat(k,"-").concat(Mr("6.1.1"+k+kt[k]));return D?"".concat(D,"-").concat(v):v}(t.displayName,t.parentComponentId):u,p=t.displayName,c=p===void 0?function(P){return St(P)?"styled.".concat(P):"Styled(".concat(vi(P),")")}(e):p,g=t.displayName&&t.componentId?"".concat(Pn(t.displayName),"-").concat(t.componentId):t.componentId||d,f=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var x=o.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;y=function(P,D){return x(P,D)&&S(P,D)}}else y=x}var m=new Gi(n,g,r?o.componentStyle:void 0);function b(P,D){return function(k,v,J){var M=k.attrs,ue=k.componentStyle,Yr=k.defaultProps,qr=k.foldedComponentIds,Qr=k.styledComponentId,Kr=k.target,Zr=B.useContext(He),Xr=Ft(),mt=k.shouldForwardProp||Xr.shouldForwardProp,K=function(ze,Ce,We){for(var Se,re=R(R({},Ce),{className:void 0,theme:We}),vt=0;vt<ze.length;vt+=1){var Ue=ce(Se=ze[vt])?Se(re):Se;for(var X in Ue)re[X]=X==="className"?ie(re[X],Ue[X]):X==="style"?R(R({},re[X]),Ue[X]):Ue[X]}return Ce.className&&(re.className=ie(re.className,Ce.className)),re}(M,v,Ir(v,Zr,Yr)||ve),Fe=K.as||Kr,xe={};for(var Z in K)K[Z]===void 0||Z[0]==="$"||Z==="as"||Z==="theme"||(Z==="forwardedAs"?xe.as=K.forwardedAs:mt&&!mt(Z,Fe)||(xe[Z]=K[Z]));var rn=function(ze,Ce){var We=Ft(),Se=ze.generateAndInjectStyles(Ce,We.styleSheet,We.stylis);return Se}(ue,K),yt=ie(qr,Qr);return rn&&(yt+=" "+rn),K.className&&(yt+=" "+K.className),xe[St(Fe)&&!Nr.has(Fe)?"class":"className"]=yt,xe.ref=J,G(Fe,xe)}(C,P,D)}b.displayName=c;var C=B.forwardRef(b);return C.attrs=f,C.componentStyle=m,C.displayName=c,C.shouldForwardProp=y,C.foldedComponentIds=r?ie(o.foldedComponentIds,o.styledComponentId):"",C.styledComponentId=g,C.target=r?o.target:e,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=r?function(D){for(var k=[],v=1;v<arguments.length;v++)k[v-1]=arguments[v];for(var J=0,M=k;J<M.length;J++)Ht(D,M[J],!0);return D}({},o.defaultProps,P):P}}),tn(C,function(){return".".concat(C.styledComponentId)}),i&&jr(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function Mn(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Tn=function(e){return Object.assign(e,{isCss:!0})};function Vr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ce(e)||je(e)){var r=e;return Tn(te(Mn(gt,Le([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?te(o):Tn(te(Mn(o,t)))}function zt(e,t,n){if(n===void 0&&(n=ve),!t)throw le(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,Vr.apply(void 0,Le([o],i,!1)))};return r.attrs=function(o){return zt(e,t,R(R({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return zt(e,t,R(R({},n),o))},r}var Gr=function(e){return zt(Yi,e)},h=Gr;Nr.forEach(function(e){h[e]=Gr(e)});var qi=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ur(t),st.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(jt(te(this.rules,n,r,o)),""),s=this.componentId+t;r.insertRules(s,s,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&st.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function Qi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Vr.apply(void 0,Le([e],t,!1)),o="sc-global-".concat(Mr(JSON.stringify(r))),i=new qi(r,o),s=function(u){var d=Ft(),p=B.useContext(He),c=B.useRef(d.styleSheet.allocateGSInstance(o)).current;return d.styleSheet.server&&l(c,u,d.styleSheet,p,d.stylis),B.useLayoutEffect(function(){if(!d.styleSheet.server)return l(c,u,d.styleSheet,p,d.stylis),function(){return i.removeStyles(c,d.styleSheet)}},[c,u,d.styleSheet,p,d.stylis]),null};function l(u,d,p,c,g){if(i.isStatic)i.renderStyles(u,_i,p,g);else{var f=R(R({},d),{theme:Ir(d,c,s.defaultProps)});i.renderStyles(u,f,p,g)}}return B.memo(s)}const Ki={white:"#ffffff","white-50":"rgba(255,255,255,0.5)","secundary-blue":"#1864AB","secundary-blue-10":"rgba(24,100,171,0.1)","secundary-blue-50":"rgba(24,100,171,0.5)","background-blue":"#090E16","background-blue-10":"rgba(9,14,22,0.1)","secundary-purple":"#7B4AE2","secundary-purple-10":"rgba(123,74,226,0.1)","green-online":"#4AE290","green-online-10":"rgba(74,226,144,0.1)"},Zi=Qi`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${e=>e.theme["secundary-blue"]};
    }

    body {
        background-color: ${e=>e.theme["background-blue"]};
        color: ${e=>e.theme["secundary-blue"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 400 1rem Raleway, sans-serif;
    }
`,Xi=h.header`
    background: ${e=>e.theme["secundary-purple-10"]};
    padding: .3rem .3rem .3rem;
    margin: 48px 96px;
    border-radius: 16px;
`,T=h.a`
    color: inherit;
    text-decoration: none;
`,ea=h.div`
    border-radius: 15;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`,ta=h.div`
    font-family: 100 .5rem Raleway, sans-serif;
    display: flex;
    color: ${e=>e.theme["white-50"]};
`,L=h.div`
    margin-left: 17px;
    &:hover {
        color: ${e=>e.theme["secundary-blue"]};
    }
`,na=h.div`
    gap: 10px;
    display: flex;
`,Ln=h.button`
    width: 40px;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: ${e=>e.theme["background-blue"]};
    color: ${e=>e.theme["white-50"]};
    border-radius: 15px;
    border-color: ${e=>e.theme["white-50"]};
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        transition: background-color 0.4s;
        background-color: ${e=>e.theme["white-50"]};
    }
`,ra="/portifolio/assets/logofloat-7cUt6MpB.svg";var oa=0;function a(e,t,n,r,o,i){var s,l,u={};for(l in t)l=="ref"?s=t[l]:u[l]=t[l];var d={type:e,props:u,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--oa,__i:-1,__u:0,__source:o,__self:i};if(typeof e=="function"&&(s=e.defaultProps))for(l in s)u[l]===void 0&&(u[l]=s[l]);return _.vnode&&_.vnode(d),d}const Jr=pr(void 0);function ia({children:e}){const[t,n]=se("EN");return a(Jr.Provider,{value:[t,n],children:e})}function nn(){const e=Yt(Jr);if(!e)throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");return e}function aa(){const[e,t]=nn(),n=r=>{t(r)};return a("div",{children:a(Xi,{children:a(ea,{children:[a("img",{src:ra,alt:"",height:36,width:36}),a(na,{children:[a(Ln,{onClick:()=>n(()=>"EN"),children:"EN"}),a(Ln,{onClick:()=>n(()=>"BR"),children:"BR"})]}),a(ta,{children:e==="EN"?a(O,{children:[a(L,{children:a(T,{href:"#home",children:"Home"})}),a(L,{children:a(T,{href:"#about",children:"About me"})}),a(L,{children:a(T,{href:"#portfolio",children:"Portfolio"})}),a(L,{children:a(T,{href:"#skills",children:"Skills"})}),a(L,{children:a(T,{href:"#career",children:"Career"})}),a(L,{children:a(T,{href:"#recommendations",children:"Recommendations"})}),a(L,{children:a(T,{href:"#contact",children:"Contact"})})]}):a(O,{children:[a(L,{children:a(T,{href:"#home",children:"Início"})}),a(L,{children:a(T,{href:"#about",children:"Sobre"})}),a(L,{children:a(T,{href:"#portfolio",children:"Portfólio"})}),a(L,{children:a(T,{href:"#skills",children:"Habilidades"})}),a(L,{children:a(T,{href:"#career",children:"Carreira"})}),a(L,{children:a(T,{href:"#recommendations",children:"Recomendações"})}),a(L,{children:a(T,{href:"#contact",children:"Contato"})})]})})]})})})}const On="/portifolio/assets/mymeme-back-0w-5y6_p.svg",jn="/portifolio/assets/mark-sL43190F.svg",Wt="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_30_57)'%3e%3cpath%20d='M15.9999%200C24.837%200%2032%207.164%2032%2016.0001C32%2024.8361%2024.837%2032%2015.9999%2032C7.1629%2032%200%2024.836%200%2016.0001C0%207.16411%207.16301%200%2015.9999%200Z'%20fill='white'%20fill-opacity='0.5'/%3e%3cpath%20d='M9.01599%2021.984H12.012V11.998H9.01599V21.984ZM20.688%2011.6521C19.234%2011.6521%2017.933%2012.183%2017.0101%2013.3551V11.9651H14.0031V21.9841H17.0101V16.5661C17.0101%2015.4211%2018.0591%2014.304%2019.3731%2014.304C20.687%2014.304%2021.0111%2015.4211%2021.0111%2016.5381V21.9831H24.0071V16.3151C24.007%2012.378%2022.143%2011.6521%2020.688%2011.6521ZM10.5%2011C11.328%2011%2012%2010.328%2012%209.49997C12%208.67195%2011.328%208.00003%2010.5%208.00003C9.67199%208.00003%208.99995%208.67206%208.99995%209.50008C8.99995%2010.3281%209.67199%2011%2010.5%2011Z'%20fill='%23090E16'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_30_57'%3e%3crect%20width='32'%20height='32'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Ut="data:image/svg+xml,%3csvg%20width='34'%20height='33'%20viewBox='0%200%2034%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16.7381%200.333344C7.67448%200.333344%200.333374%207.67445%200.333374%2016.738C0.333374%2023.9971%205.02922%2030.1284%2011.5501%2032.302C12.3703%2032.4455%2012.6779%2031.9534%2012.6779%2031.5228C12.6779%2031.1332%2012.6574%2029.8413%2012.6574%2028.4674C8.53572%2029.2261%207.46942%2027.4626%207.14133%2026.5399C6.95677%2026.0682%206.15704%2024.6123%205.45984%2024.2227C4.88568%2023.9151%204.06544%2023.1564%205.43934%2023.1359C6.73121%2023.1154%207.65397%2024.3252%207.96156%2024.8174C9.43798%2027.2986%2011.7962%2026.6014%2012.7394%2026.1707C12.883%2025.1044%2013.3136%2024.3867%2013.7852%2023.9766C10.1352%2023.5665%206.32109%2022.1516%206.32109%2015.8768C6.32109%2014.0928%206.95677%2012.6164%208.00257%2011.468C7.83853%2011.0579%207.26436%209.37644%208.16662%207.12079C8.16662%207.12079%209.54051%206.69017%2012.6779%208.80227C13.9903%208.43316%2015.3847%208.24861%2016.7791%208.24861C18.1735%208.24861%2019.5679%208.43316%2020.8803%208.80227C24.0177%206.66966%2025.3916%207.12079%2025.3916%207.12079C26.2938%209.37644%2025.7197%2011.0579%2025.5556%2011.468C26.6014%2012.6164%2027.2371%2014.0723%2027.2371%2015.8768C27.2371%2022.1721%2023.4025%2023.5665%2019.7524%2023.9766C20.3471%2024.4893%2020.8598%2025.4735%2020.8598%2027.0115C20.8598%2029.2056%2020.8393%2030.9691%2020.8393%2031.5228C20.8393%2031.9534%2021.1468%2032.4661%2021.9671%2032.302C28.4469%2030.1284%2033.1428%2023.9766%2033.1428%2016.738C33.1428%207.67445%2025.8017%200.333344%2016.7381%200.333344Z'%20fill='white'%20fill-opacity='0.5'/%3e%3c/svg%3e",sa=h.div`
    width: 100%;
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-left: 15%;
    padding-right: 15%;
`,Hn=h.div`
    font-family: 700 1rem Raleway, sans-serif;
    font-size: large;
`,Bn=h.div`
    color: ${e=>e.theme["secundary-blue-50"]};
    justify-content: center;
    vertical-align: middle;
`;h.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;const Fn=h.button`
    margin-top: 17px;
    width: 200px;
    align-items: center;
    display: flex;
    padding: 10px;
    background-color: ${e=>e.theme["background-blue"]};
    color: ${e=>e.theme["secundary-blue"]};
    border-radius: 15px;
    border-color: ${e=>e.theme["secundary-blue"]};
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        transition: background-color 0.4s;
        background-color: ${e=>e.theme["secundary-blue-50"]};
    }
`,zn=h.div`
    margin-left: 5px;
    font-size: 15px;
    font-family: 700 1rem Raleway, sans-serif;
`,Wn=h.div`
    width: 120px;
    border-radius: 10px;
    font-size: 15px;
    padding: 5px;
    padding-right: -20px;
    margin-bottom: 35px;
    background-color: ${e=>e.theme["secundary-blue"]};
    color: ${e=>e.theme["background-blue"]};
    font-weight: bold;
`,Un=h.div`
    display: flex;
`,Vn=h.div`
    margin-top: -15px;
    margin-right: 20px;
    font-size: 48px;
    font-family: 700 1rem Raleway, sans-serif;
    font-weight: bold;
`,Gn=h.div`
    color: ${e=>e.theme["white-50"]};
    margin-top: 30px;
`,Jn=h.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 30px;
`,Je=h.div`
    margin-right: 15px;
`;function ca(){const[e]=nn();return a(sa,{id:"home",children:e==="EN"?a(O,{children:[a(Hn,{children:[a(Wn,{children:"👋 Welcome!"}),a(Un,{children:[a(Vn,{children:[a("p",{children:"Wilton"}),a("p",{children:"Costa"})]}),a("img",{src:jn,alt:"",height:52,width:52})]}),a(Gn,{children:"Software Engineer · Back-end"}),a(Jn,{children:[a("a",{href:"https://www.linkedin.com/in/wilton-software-engineer/",target:"_blank",rel:"noreferrer",children:a(Je,{children:a("img",{src:Wt,alt:""})})}),a("a",{href:"https://www.github.com/wiltoon",target:"_blank",rel:"noreferrer",children:a(Je,{children:a("img",{src:Ut,alt:""})})})]})]}),a("img",{src:On,alt:"",style:{maxWidth:"100%",height:"auto",width:"50%"}}),a(Bn,{children:a("a",{href:"#contact",target:"_blank",rel:"noreferrer",children:a(Fn,{children:a(zn,{children:"Let's work together?"})})})})]}):a(O,{children:[a(Hn,{children:[a(Wn,{children:"👋 Saudações!"}),a(Un,{children:[a(Vn,{children:[a("p",{children:"Wilton"}),a("p",{children:"Costa"})]}),a("img",{src:jn,alt:"",height:52,width:52})]}),a(Gn,{children:"Engenheiro de Software · Back-end"}),a(Jn,{children:[a("a",{href:"https://www.linkedin.com/in/wilton-software-engineer/",target:"_blank",rel:"noreferrer",children:a(Je,{children:a("img",{src:Wt,alt:""})})}),a("a",{href:"https://www.github.com/wiltoon",target:"_blank",rel:"noreferrer",children:a(Je,{children:a("img",{src:Ut,alt:""})})})]})]}),a("img",{src:On,alt:"",style:{maxWidth:"100%",height:"auto",width:"50%"}}),a(Bn,{children:a("a",{href:"#contact",target:"_blank",rel:"noreferrer",children:a(Fn,{children:a(zn,{children:"Vamos trabalhar juntos?"})})})})]})})}const la=h.section`
    width: 100%;
    
`,ua=h.div`
    display: flex;
    margin: 30px;
    margin-left: 25%;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    background-color: ${e=>e.theme["secundary-blue-10"]};
`,da=h.div`
    display: flex;
    justify-content: space-evenly;
`,fa=h.div`
    font-weight: 700;
    width: 300px;
    font-size: xx-large;
    color: ${e=>e.theme.white};
    `,ha=h.div`
    display: flex;
    gap: 20px;
`,pa=h.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    grid-template-columns: repeat(4, 3fr);
    justify-content: center;
    align-items: center; // Add this line to center the cards vertically
    padding: 90px;
`,$t=h.button`
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: ${e=>e.theme["background-blue"]};
    color: ${e=>e.theme["secundary-blue-50"]};
    border-radius: 8px;
    border-width: 1px;
    border-color: ${e=>e.theme["secundary-blue-50"]};
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        transition: background-color 0.4s;
        background-color: ${e=>e.theme["secundary-blue-50"]};
    }
`,ke=h.div`
    width: 220px;
    height: 300px;
    border-width: 1px;
    border-color: ${e=>e.theme["secundary-blue-50"]};
    border-style: solid;
    padding: 20px;
    border-radius: 9px;
`,$e=h.div`
    font-size: small;
    font-weight: bold;
    
    color: ${e=>e.theme.white};
`,Pe=h.div`
    font-size: small;
    
    color: ${e=>e.theme["white-50"]};
`,De=h.div`
    display: flex;
    justify-content: space-around;
    padding-top: 35px;
`,Ae=h.div`
    margin-top: 10px;
    width: 180px;
    height: 40%;
    background-color: ${e=>e.theme["secundary-blue-10"]};
`,z=h.div`
    padding: 10px;
    border-radius: 12px;
    font-weight: bold;
    font-size: small;
    background-color: ${e=>e.theme["secundary-blue-10"]};
`;function _a(){return a(la,{id:"portfolio",children:[a(ua,{children:"🔗 Portfolio"}),a(da,{children:[a(fa,{children:"Works and Projects"}),a(ha,{children:[a($t,{children:"Backend"}),a($t,{children:"Frontend"}),a($t,{children:"IAs"})]})]}),a(pa,{children:[a(ke,{children:[a($e,{children:"Move it"}),a(Pe,{children:"Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios."}),a(De,{children:[a(z,{children:"Online"}),a(z,{children:"Typescript"})]}),a(Ae,{})]}),a(ke,{children:[a($e,{children:"My Second"}),a(Pe,{children:"Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios."}),a(De,{children:[a(z,{children:"Online"}),a(z,{children:"Typescript"})]}),a(Ae,{})]}),a(ke,{children:[a($e,{children:"My Third"}),a(Pe,{children:"Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios."}),a(De,{children:[a(z,{children:"Online"}),a(z,{children:"Typescript"})]}),a(Ae,{})]}),a(ke,{children:[a($e,{children:"My Third"}),a(Pe,{children:"Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios."}),a(De,{children:[a(z,{children:"Online"}),a(z,{children:"Typescript"})]}),a(Ae,{})]}),a(ke,{children:[a($e,{children:"My Third"}),a(Pe,{children:"Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios."}),a(De,{children:[a(z,{children:"Online"}),a(z,{children:"Typescript"})]}),a(Ae,{})]})]})]})}const ga=h.section`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 600px;
    padding: 50px;
`,ma=h.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
`,ya=h.div`
    height: 300px;
    width: 300px;
    border-radius: 400px;
    background-color: ${e=>e.theme.white};
`,Yn=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    background-color: ${e=>e.theme["secundary-blue-10"]};
`,qn=h.div`
    font-weight: 700;
    width: 300px;
    font-size: xx-large;
    color: ${e=>e.theme.white};
`,Qn=h.div`
    font-weight: 400;
    color: ${e=>e.theme["white-50"]};
`;function va(){const[e]=nn(),[t,n]=se("");return Oe(()=>{fetch("https://api.github.com/users/wiltoon").then(r=>r.json()).then(r=>n(r.avatar_url)).catch(r=>console.log(r))},[]),a(ga,{id:"about",children:[a(ya,{children:a(ma,{src:t,alt:"Profile"})}),e==="EN"?a("div",{children:[a(Yn,{children:"🧐 About me"}),a(qn,{children:"Wilton Costa"}),a(Qn,{children:["👋 My name is Wilton, and I work in the Software Engineering field, but I also have an interest in Artificial Intelligence. With that being said, I believe I can branch out and become a backend developer in the field of AI. Pleasure to have you here!",a("br",{}),"👨‍💻 For over 7 years, I have been seeking new solutions using languages such as C, C++, Java, Python, and TypeScript.",a("br",{}),"🎓 I have a Bachelor's degree in Computer Engineering from the Federal University of Mato Grosso do Sul - UFMS.",a("br",{}),"🎓 I also have a Master's degree in Computer Science from the Federal University of Mato Grosso do Sul - UFMS.",a("br",{}),"💡 My interests lie in Backend Development, Data Science, and Frontend Development.",a("br",{}),"🚀 AWS Certified Cloud Practitioner",a("br",{}),"🚀 AWS Certified Solutions Architect",a("br",{}),"🚀 By being 1% better every working day, we can achieve an improvement of 1.01^252 (working days) = 12.27x better within a year! So, I always strive for continuous improvement! Embracing new technologies is part of the learning process!"]})]}):a("div",{children:[a(Yn,{children:"🧐 Sobre mim"}),a(qn,{children:"Wilton Costa"}),a(Qn,{children:["👋 Me chamo Wilton, e atuo na área de Engenharia de Software, mas também tenho interesse na área de Inteligência Artificial, dito isso acredito ser capaz de abrir um novo ramo sendo um back-end agregando na área de IA. Prazer em recebê-lo!",a("br",{}),"👨‍💻 Há mais de 7 anos buscando novas soluções com as linguagem C. C++, Java, Python, Typescript;",a("br",{}),"🎓 Graduado em Engenharia da Computação na Universidade Federal de Mato Grosso do Sul - UFMS;",a("br",{}),"🎓 Mestrado em Ciências da Computação na Universidade Federal de Mato Grosso do Sul - UFMS;",a("br",{}),a("br",{}),"💡 Meus interesses estão em Back-end, Data Science e Front-end;",a("br",{}),a("br",{}),"🚀 AWS Certified Cloud Practitioner",a("br",{}),"🚀 AWS Certified Solutions Architect",a("br",{}),a("br",{}),"🚀 Bom sendo 1% melhor a cada dia trabalhado temos uma melhora de 1,01^252 (dias úteis) = 12,27x melhor dentro de um ano útil! Então busco sempre estar em evolução! Novas tecnologias fazem parte do aprendizado!"]})]})]})}const ba="/portifolio/assets/dailysCodes-ekMFuP32.svg",wa="/portifolio/assets/otherStacks-Cna_pgeA.svg",xa=h.section`
    display: flex;
    flex-direction: column;
    justify-content: flex;
    width: 100%;
    height: 600px;
`,Ca=h.div`
    margin-left: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 210px;
    height: 35px;
    background-color: ${e=>e.theme["secundary-blue-10"]};
`,Sa=h.div`
    font-weight: 700;
    width: 600px;
    font-size: 36px; // Change font size to 24px
    color: ${e=>e.theme.white};
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 30px;
`,Kn=h.div`
    font-weight: 400;
    font-size: 24px; // Change font size to 24px
    color: ${e=>e.theme["white-50"]};
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 600px;
`,Zn=h.div`
    display: flex;
    width: 100%;
    height: 100%;
    text-align: center;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;function ka(){return a(xa,{id:"skills",children:[a(Ca,{children:"🧑‍💻 Skills · Experiences"}),a(Sa,{children:"Tecnologies and Stacks"}),a(Kn,{children:"Stacks that I use on a daily basis"}),a(Zn,{children:a("img",{src:ba,alt:""})}),a(Kn,{children:"Other Stacks I've worked with"}),a(Zn,{children:a("img",{src:wa,alt:""})})]})}const $a=[{title:"Software Engineer Cloud at IBM",description:"Development of applications in Java and Python, using TDD, DDD and BDD practices. Use of CI/CD. Use of Clean Code practices: SOLID, KISS, DRY and YAGNI. Agile methodologies: SCRUM, KANBAN. Software maintenance, creation of new functionalities. Bank migration. AWS cost reduction. Creation of unit and integrated tests to test some functions with jUnit and Mockito, use of mutant tests to improve code quality.",startDate:"Nov · 2022",endDate:"At the moment",languages:["Java","Python","Terraform","CloudFormation","Node","Typescript"],databases:["MySQL","DynamoDB","RDS","PostgreSQL"],projects:["Foreign Exchange","Opening Accounts","Process Automation"],learnings:["AWS Cloud Practitioner","Agility Learning","AWS Solutions Architect","TDD","DDD","BDD","Time management","Communication","Grownth Mindset"]},{title:"Full-Stack Java at EVOP",description:"At EVOP, I joined as an Intern, where I was able to work on monolithic software in Java and Angular. In the beginning, the entire system was generated on a local server, however, due to hacker attacks we were forced to migrate to the cloud. And the AWS Cloud was chosen. As a challenge to be implemented, I was responsible for creating a microservice to act on the monolithic. The purpose of this microservice was to communicate with ASAAS, which was responsible for generating payment invoices for our users' customers. For the software to capture the status of the bills, I created a messaging system with Kafka and SQS, to update when there was a change in the bill's status (cancelled, paid, expired, among others...). Once hired, I was responsible for creating new features in the WEB part of the software, creating dashboards and report generators (PDF and EXCEL). My codes have always been well oriented to follow the clean code standard: SOLID, KISS, YAGNI, DRY.",startDate:"Jun · 2019",endDate:"Jul · 2021",languages:["Java","Angular","Typescript","Node","Python"],databases:["PostgreSQL","MongoDB"],projects:["ASAAS","Report Generator (PDF, EXCEL)","Dashboards","Microservices","Monolithic"],learnings:["Applications with messaging","Versioning with GitHub and GitLab","Software maintenance","Integration of microservices with monoliths"]},{title:"Full-Stack Java/Kotlin at EngeFour Jr.",description:"Aimed at developing mobile applications in Android Studio, with Java and Kotlin languages, using agile methodologies such as SCRUM, XP and KANBAN. I carried out studies on frameworks such as Angular and Spring boot, relational databases: MySQL, non-relational databases: MongoDB, DynamoDB.",startDate:"Set · 2016",endDate:"Ago · 2017",languages:["Java","Kotlin","PHP","Python"],databases:["MySQL","MongoDB","DynamoDB","PostgreSQL"],projects:["Managing sales","Room reservations","Menu RU-UFMS"],learnings:["Collection of requirements","Agile methodologies","IDEs","Android Studio","Object orientation"]}],Pa=[{title:"Teacher Computer Science at ESTÁCIO",description:"Ensinando alunos a desenvolverem aplicações em React Native e Computação em Nuvem",startDate:"Feb · 2024",endDate:"At the moment",languages:["Typescript","Python"],databases:["MySQL","DynamoDB","RDS","PostgreSQL"],projects:[],learnings:[]},{title:"Master's Degree in Computer Science at UFMS",description:"Desenvolvimento de algoritmo capaz de encontrar uma solução para o Problema de Roteamento Dinâmico de Veículos, tendo uma performance de mais de 15% entre os algoritmos comparados. Métrica definida a partir de uma linha de custo de gasolina por km/l e número de veículos utilizados.",startDate:"Mar · 2020",endDate:"Sep · 2022",languages:["Docker","Python","C++","Java","CPLEX","Gurobi"],databases:["PostgreSQL","MongoDB"],projects:["Dynamic Vehicle Routing Problem"],learnings:["Solving Problems"]},{title:"Graduation in Computer Engineering at UFMS",description:".",startDate:"Jan · 2015",endDate:"Dec · 2019",languages:["C","C++","Java","Python","Rust","Typescript","Javascript","HTML","CSS","PHP","Shell Script"],databases:["MySQL","MongoDB","DynamoDB","PostgreSQL"],projects:["Relig","Design of Controllers for Static Power Converters"],learnings:[]}],Da=h.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 2500px;
`,Aa=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    background-color: ${e=>e.theme["secundary-blue-10"]};
`,Ea=h.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    width: 300px;
    font-size: xx-large;
    color: ${e=>e.theme.white};
`,Vt=h.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 300px;
    border-radius: 10px;
`,Ia=h.div`
    margin-top: 50px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > ${Vt} {
        margin: 0 10px; // Add margin to create spacing between Journal components
    }
`,Xn=h.div`
    display: flex;
    align-items: center;
    justify-content: center; // Adicionado para centralizar o componente
    font-weight: 700;
    width: 300px;
    font-size: x-large;
    color: ${e=>e.theme.white};
`,er=h.div`
    
    color: ${e=>e.theme["white-50"]};
`,tr=h.div`
    gap: 20px;
    height: auto;
`;function V(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function Pt(e,t){const n=V(e),r=V(t),o=n.getTime()-r.getTime();return o<0?-1:o>0?1:o}function Na(e,t){const n=V(e),r=V(t),o=n.getFullYear()-r.getFullYear(),i=n.getMonth()-r.getMonth();return o*12+i}function Ra(e){const t=V(e);return t.setHours(23,59,59,999),t}function Ma(e){const t=V(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function Ta(e){const t=V(e);return+Ra(t)==+Ma(t)}function La(e,t){const n=V(e),r=V(t),o=Pt(n,r),i=Math.abs(Na(n,r));let s;if(i<1)s=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-o*i);let l=Pt(n,r)===-o;Ta(V(e))&&i===1&&Pt(e,r)===1&&(l=!1),s=o*(i-Number(l))}return s===0?0:s}const Oa=h.section`
    height: auto;
    margin-top: 30px;
    padding: 30px;
    border-radius: 10px;
    width: 450px;
    border: 3px solid ${e=>e.theme["secundary-blue-10"]};
`,Ee=h.div`
    display: flex;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 300px;
    font-size: large;
    color: ${e=>e.theme.white};
`,ja=h.div`
    display: flex;
    font-weight: 400;
    font-size: medium;
    color: ${e=>e.theme["white-50"]};
`,Ha=h.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`,Ba=h.div`
    display: flex;
    font-weight: 700;
    font-size: medium;
    color: ${e=>e.theme["secundary-blue"]};
`,Fa=h.div`
    display: flex;
    font-weight: 400;
    font-size: medium;
    color: ${e=>e.theme["secundary-blue-50"]};
`,Ye=h.div`
    display: flex;  
    flex-wrap: wrap;
    gap: 5px; /* Reduce the gap value */
`,qe=h.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: fit-content;
    padding: 10px;
    height: 30px;
    background-color: ${e=>e.theme["secundary-blue-10"]};
    text-align: center;
`;function nr(e){const[t,n]=se(!1),r=new Date(e.startDate),o=e.endDate==="At the moment"?new Date:new Date(e.endDate),i=La(o,r);return a(Oa,{onClick:()=>{n(!t)},className:t?"expanded":"collapsed",children:[a(Ee,{children:e.title}),t?a(O,{children:[a(ja,{children:e.description}),a(Ee,{children:"Languages"}),a(Ye,{children:e.languages.map((l,u)=>a(qe,{children:l},u))}),a(Ee,{children:"Databases"}),a(Ye,{children:e.databases.map((l,u)=>a(qe,{children:l},u))}),a(Ee,{children:"Projects"}),a(Ye,{children:e.projects.map((l,u)=>a(qe,{children:l},u))}),a(Ee,{children:"Learnings"}),a(Ye,{children:e.learnings.map((l,u)=>a(qe,{children:l},u))})]}):"Explore more...",a(Ha,{children:[a(Ba,{children:i>=12?Math.floor(i/12)+" Year"+(Math.floor(i/12)>1?"s ":" ")+(i%12===0?"":"and "+i%12+" Month"+(i%12!=1?"s":"")):i+" Months"}),a(Fa,{children:[e.startDate," - ",e.endDate]})]})]})}function za(){const[e,t]=se([]),[n,r]=se([]);if(Oe(()=>t($a),[]),Oe(()=>r(Pa),[]),e.length===0)return a("div",{children:"Loading..."});if(n.length===0)return a("div",{children:"Loading..."});const o=e.map(s=>a(nr,{title:s.title,description:s.description,startDate:s.startDate,endDate:s.endDate,languages:s.languages,databases:s.databases,projects:s.projects,learnings:s.learnings})),i=n.map(s=>a(nr,{title:s.title,description:s.description,startDate:s.startDate,endDate:s.endDate,languages:s.languages,databases:s.databases,projects:s.projects,learnings:s.learnings}));return a(Da,{id:"career",children:[a(Aa,{children:"💼 Career"}),a(Ea,{children:"My journey so far"}),a(Ia,{children:[a(Vt,{children:[a(Xn,{children:"Professional field"}),a(er,{children:"2016 · At the moment"}),a(tr,{children:o})]}),a(Vt,{children:[a(Xn,{children:"Academic"}),a(er,{children:"2012 · At the moment"}),a(tr,{children:i})]})]})]})}const Wa="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M32.8594%205.60823L3.73437%2013.8114C3.48644%2013.8791%203.26544%2014.0217%203.10146%2014.2196C2.93748%2014.4175%202.8385%2014.6612%202.81801%2014.9174C2.79751%2015.1736%202.85649%2015.4299%202.98692%2015.6514C3.11734%2015.8729%203.31287%2016.0488%203.54687%2016.1551L16.9219%2022.4832C17.1839%2022.6046%2017.3943%2022.815%2017.5156%2023.077L23.8437%2036.452C23.9501%2036.686%2024.126%2036.8815%2024.3474%2037.0119C24.5689%2037.1424%2024.8252%2037.2013%2025.0814%2037.1808C25.3376%2037.1603%2025.5813%2037.0614%2025.7792%2036.8974C25.9771%2036.7334%2026.1197%2036.5124%2026.1875%2036.2645L34.3906%207.13948C34.4528%206.92694%2034.4566%206.7016%2034.4017%206.48707C34.3469%206.27253%2034.2353%206.07671%2034.0787%205.92013C33.9221%205.76355%2033.7263%205.65198%2033.5118%205.5971C33.2973%205.54222%2033.0719%205.54607%2032.8594%205.60823V5.60823Z'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.3281%2022.6709L24.3906%2015.6084'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Ua="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27%2022.999V4.99902H9'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M23%208.99902H5V26.999H23V8.99902Z'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Va="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%2026.999V4.99902'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7%2013.999L16%204.99902L25%2013.999'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Ga=h.section`
    display: flex;
    margin-top: 30px;
    gap: 50px;
    padding: 30px;
    align-items: center;
    flex-direction: column;
    border: 3px solid ${e=>e.theme["secundary-blue-10"]};
`,Ja=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    background-color: ${e=>e.theme["secundary-blue-10"]};
`,Ya=h.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    width: 100%;
    font-size: 64px;
    color: ${e=>e.theme.white};
`;h.button`
    margin-top: 17px;
    width: 200px;
    align-items: center;
    display: flex;
    padding: 10px;
    background-color: ${e=>e.theme["background-blue"]};
    color: ${e=>e.theme["secundary-blue-50"]};
    border-radius: 15px;
    border-color: ${e=>e.theme["secundary-blue-50"]};
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        transition: background-color 0.4s;
        background-color: ${e=>e.theme["secundary-blue-50"]};
    }
`;h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    font-size: 16px;
    font-weight: 700;
    margin-left: 10px;
    color: ${e=>e.theme["secundary-blue-50"]};
    text-align: center;
`;const qa=h.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    gap: 150px;
`,Qa=h.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    gap: 15px;
`,Ka=h.input`
    margin-left: 5px;
    font-size: 20px;
    color: ${e=>e.theme["white-50"]};
    font-weight: 400;
    background-color: ${e=>e.theme["background-blue"]};
    border: none; // Remove the border
    user-select: none; // Prevent selection with mouse
`,Za=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    gap: 15px;
`,Xa=h.div`
    color: ${e=>e.theme["secundary-blue-50"]};
    font-size: 20px;
    font-weight: 400;
    margin-left: 5px;
`;function es(){const e=mr(null),t=()=>{e.current&&(e.current.select(),document.execCommand("copy"))};return a(Ga,{id:"contact",children:[a(Ja,{children:"📬 Contact"}),a(Ya,{children:"Let's work together?"}),a(qa,{children:a(Qa,{children:[a("img",{src:Wa,alt:""}),a(Ka,{ref:e,type:"text",value:"wilton.code@gmail.com",readOnly:!0}),a("img",{src:Ua,onClick:t,style:{cursor:"pointer"}})]})}),a("a",{href:"#home",children:a(Za,{children:[a(Xa,{children:"Back to top"}),a("img",{src:Va})]})})]})}const ts=h.section`
    height: 80px;
    display: flex;
    flex-direction: row;
    color: ${e=>e.theme["white-50"]};
    background-color: ${e=>e.theme["secundary-blue-10"]};
`,ns=h.div`
    height: 100%;
    padding-left: 80px;
    display: flex;
    align-items: center;
    justify-content: start;
    font-family: Haleway, sans-serif;
`,rs=h.div`
    margin: 23%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;
    height: 20px;
`,rr=h.div`
    margin-right: 15px;
`;function os(){return a(ts,{children:[a(ns,{children:"Copyright © Wilton Costa · 2024"}),a(rs,{children:[a("a",{href:"https://www.linkedin.com/in/wilton-software-engineer/",target:"_blank",rel:"noreferrer",children:a(rr,{children:a("img",{src:Wt,alt:""})})}),a("a",{href:"https://www.github.com/wiltoon",target:"_blank",rel:"noreferrer",children:a(rr,{children:a("img",{src:Ut,alt:""})})})]})]})}function is(){return a("div",{children:[a(aa,{}),a(ca,{}),a(va,{}),a(_a,{}),a(ka,{}),a(za,{}),a(es,{}),a(os,{})]})}function as(){return a(Ji,{theme:Ki,children:a(ia,{children:[a(Zi,{}),a(is,{})]})})}pe(a(as,{}),document.getElementById("app"));
