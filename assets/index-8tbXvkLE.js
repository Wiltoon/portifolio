(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();var Be,_,Hn,oe,Xt,Bn,At,Fn,Te={},zn=[],jr=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,st=Array.isArray;function J(e,t){for(var n in t)e[n]=t[n];return e}function Wn(e){var t=e.parentNode;t&&t.removeChild(e)}function W(e,t,n){var r,o,i,a={};for(i in t)i=="key"?r=t[i]:i=="ref"?o=t[i]:a[i]=t[i];if(arguments.length>2&&(a.children=arguments.length>3?Be.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)a[i]===void 0&&(a[i]=e.defaultProps[i]);return Ne(e,a,r,o,null)}function Ne(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o??++Hn,__i:-1,__u:0};return o==null&&_.vnode!=null&&_.vnode(i),i}function Or(){return{current:null}}function U(e){return e.children}function F(e,t){this.props=e,this.context=t}function fe(e,t){if(t==null)return e.__?fe(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?fe(e):null}function Un(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Un(e)}}function Pt(e){(!e.__d&&(e.__d=!0)&&oe.push(e)&&!rt.__r++||Xt!==_.debounceRendering)&&((Xt=_.debounceRendering)||Bn)(rt)}function rt(){var e,t,n,r,o,i,a,l,u;for(oe.sort(At);e=oe.shift();)e.__d&&(t=oe.length,r=void 0,i=(o=(n=e).__v).__e,l=[],u=[],(a=n.__P)&&((r=J({},o)).__v=o.__v+1,_.vnode&&_.vnode(r),Wt(a,r,o,n.__n,a.ownerSVGElement!==void 0,32&o.__u?[i]:null,l,i??fe(o),!!(32&o.__u),u),r.__.__k[r.__i]=r,Jn(l,r,u),r.__e!=i&&Un(r)),oe.length>t&&oe.sort(At));rt.__r=0}function Vn(e,t,n,r,o,i,a,l,u,d,p){var c,m,f,y,x,k=r&&r.__k||zn,g=t.length;for(n.__d=u,Hr(n,t,k),u=n.__d,c=0;c<g;c++)(f=n.__k[c])!=null&&typeof f!="boolean"&&typeof f!="function"&&(m=f.__i===-1?Te:k[f.__i]||Te,f.__i=c,Wt(e,f,m,o,i,a,l,u,d,p),y=f.__e,f.ref&&m.ref!=f.ref&&(m.ref&&Ut(m.ref,null,f),p.push(f.ref,f.__c||y,f)),x==null&&y!=null&&(x=y),65536&f.__u||m.__k===f.__k?u=Gn(f,u,e):typeof f.type=="function"&&f.__d!==void 0?u=f.__d:y&&(u=y.nextSibling),f.__d=void 0,f.__u&=-196609);n.__d=u,n.__e=x}function Hr(e,t,n){var r,o,i,a,l,u=t.length,d=n.length,p=d,c=0;for(e.__k=[],r=0;r<u;r++)(o=e.__k[r]=(o=t[r])==null||typeof o=="boolean"||typeof o=="function"?null:typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?Ne(null,o,null,null,o):st(o)?Ne(U,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?Ne(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)!=null?(o.__=e,o.__b=e.__b+1,l=Br(o,n,a=r+c,p),o.__i=l,i=null,l!==-1&&(p--,(i=n[l])&&(i.__u|=131072)),i==null||i.__v===null?(l==-1&&c--,typeof o.type!="function"&&(o.__u|=65536)):l!==a&&(l===a+1?c++:l>a?p>u-a?c+=l-a:c--:c=l<a&&l==a-1?l-a:0,l!==r+c&&(o.__u|=65536))):(i=n[r])&&i.key==null&&i.__e&&(i.__e==e.__d&&(e.__d=fe(i)),Dt(i,i,!1),n[r]=null,p--);if(p)for(r=0;r<d;r++)(i=n[r])!=null&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=fe(i)),Dt(i,i))}function Gn(e,t,n){var r,o;if(typeof e.type=="function"){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=Gn(r[o],t,n));return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function Y(e,t){return t=t||[],e==null||typeof e=="boolean"||(st(e)?e.some(function(n){Y(n,t)}):t.push(e)),t}function Br(e,t,n,r){var o=e.key,i=e.type,a=n-1,l=n+1,u=t[n];if(u===null||u&&o==u.key&&i===u.type)return n;if(r>(u!=null&&!(131072&u.__u)?1:0))for(;a>=0||l<t.length;){if(a>=0){if((u=t[a])&&!(131072&u.__u)&&o==u.key&&i===u.type)return a;a--}if(l<t.length){if((u=t[l])&&!(131072&u.__u)&&o==u.key&&i===u.type)return l;l++}}return-1}function en(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||jr.test(t)?n:n+"px"}function Ve(e,t,n,r,o){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||en(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||en(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,i?nn:tn,i)):e.removeEventListener(t,i?nn:tn,i);else{if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function tn(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(_.event?_.event(e):e)}function nn(e){return this.l[e.type+!0](_.event?_.event(e):e)}function Wt(e,t,n,r,o,i,a,l,u,d){var p,c,m,f,y,x,k,g,b,C,A,P,S,v,V,R=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(u=!!(32&n.__u),i=[l=t.__e=n.__e]),(p=_.__b)&&p(t);e:if(typeof R=="function")try{if(g=t.props,b=(p=R.contextType)&&r[p.__c],C=p?b?b.props.value:p.__:r,n.__c?k=(c=t.__c=n.__c).__=c.__E:("prototype"in R&&R.prototype.render?t.__c=c=new R(g,C):(t.__c=c=new F(g,C),c.constructor=R,c.render=zr),b&&b.sub(c),c.props=g,c.state||(c.state={}),c.context=C,c.__n=r,m=c.__d=!0,c.__h=[],c._sb=[]),c.__s==null&&(c.__s=c.state),R.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=J({},c.__s)),J(c.__s,R.getDerivedStateFromProps(g,c.__s))),f=c.props,y=c.state,c.__v=t,m)R.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(R.getDerivedStateFromProps==null&&g!==f&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(g,C),!c.__e&&(c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(g,c.__s,C)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(c.props=g,c.state=c.__s,c.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(le){le&&(le.__=t)}),A=0;A<c._sb.length;A++)c.__h.push(c._sb[A]);c._sb=[],c.__h.length&&a.push(c);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(g,c.__s,C),c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(f,y,x)})}if(c.context=C,c.props=g,c.__P=e,c.__e=!1,P=_.__r,S=0,"prototype"in R&&R.prototype.render){for(c.state=c.__s,c.__d=!1,P&&P(t),p=c.render(c.props,c.state,c.context),v=0;v<c._sb.length;v++)c.__h.push(c._sb[v]);c._sb=[]}else do c.__d=!1,P&&P(t),p=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++S<25);c.state=c.__s,c.getChildContext!=null&&(r=J(J({},r),c.getChildContext())),m||c.getSnapshotBeforeUpdate==null||(x=c.getSnapshotBeforeUpdate(f,y)),Vn(e,st(V=p!=null&&p.type===U&&p.key==null?p.props.children:p)?V:[V],t,n,r,o,i,a,l,u,d),c.base=t.__e,t.__u&=-161,c.__h.length&&a.push(c),k&&(c.__E=c.__=null)}catch(le){t.__v=null,u||i!=null?(t.__e=l,t.__u|=u?160:32,i[i.indexOf(l)]=null):(t.__e=n.__e,t.__k=n.__k),_.__e(le,t,n)}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Fr(n.__e,t,n,r,o,i,a,u,d);(p=_.diffed)&&p(t)}function Jn(e,t,n){t.__d=void 0;for(var r=0;r<n.length;r++)Ut(n[r],n[++r],n[++r]);_.__c&&_.__c(t,e),e.some(function(o){try{e=o.__h,o.__h=[],e.some(function(i){i.call(o)})}catch(i){_.__e(i,o.__v)}})}function Fr(e,t,n,r,o,i,a,l,u){var d,p,c,m,f,y,x,k=n.props,g=t.props,b=t.type;if(b==="svg"&&(o=!0),i!=null){for(d=0;d<i.length;d++)if((f=i[d])&&"setAttribute"in f==!!b&&(b?f.localName===b:f.nodeType===3)){e=f,i[d]=null;break}}if(e==null){if(b===null)return document.createTextNode(g);e=o?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,g.is&&g),i=null,l=!1}if(b===null)k===g||l&&e.data===g||(e.data=g);else{if(i=i&&Be.call(e.childNodes),k=n.props||Te,!l&&i!=null)for(k={},d=0;d<e.attributes.length;d++)k[(f=e.attributes[d]).name]=f.value;for(d in k)f=k[d],d=="children"||(d=="dangerouslySetInnerHTML"?c=f:d==="key"||d in g||Ve(e,d,null,f,o));for(d in g)f=g[d],d=="children"?m=f:d=="dangerouslySetInnerHTML"?p=f:d=="value"?y=f:d=="checked"?x=f:d==="key"||l&&typeof f!="function"||k[d]===f||Ve(e,d,f,k[d],o);if(p)l||c&&(p.__html===c.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(c&&(e.innerHTML=""),Vn(e,st(m)?m:[m],t,n,r,o&&b!=="foreignObject",i,a,i?i[0]:n.__k&&fe(n,0),l,u),i!=null)for(d=i.length;d--;)i[d]!=null&&Wn(i[d]);l||(d="value",y!==void 0&&(y!==e[d]||b==="progress"&&!y||b==="option"&&y!==k[d])&&Ve(e,d,y,k[d],!1),d="checked",x!==void 0&&x!==e[d]&&Ve(e,d,x,k[d],!1))}return e}function Ut(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){_.__e(r,n)}}function Dt(e,t,n){var r,o;if(_.unmount&&_.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Ut(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){_.__e(i,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&Dt(r[o],t,n||typeof e.type!="function");n||e.__e==null||Wn(e.__e),e.__=e.__e=e.__d=void 0}function zr(e,t,n){return this.constructor(e,n)}function pe(e,t,n){var r,o,i,a;_.__&&_.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,i=[],a=[],Wt(t,e=(!r&&n||t).__k=W(U,null,[e]),o||Te,Te,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?Be.call(t.childNodes):null,i,!r&&n?n:o?o.__e:t.firstChild,r,a),Jn(i,e,a)}function Yn(e,t){pe(e,t,Yn)}function Wr(e,t,n){var r,o,i,a,l=J({},e.props);for(i in e.type&&e.type.defaultProps&&(a=e.type.defaultProps),t)i=="key"?r=t[i]:i=="ref"?o=t[i]:l[i]=t[i]===void 0&&a!==void 0?a[i]:t[i];return arguments.length>2&&(l.children=arguments.length>3?Be.call(arguments,2):n),Ne(e.type,l,r||e.key,o||e.ref,null)}function Ur(e,t){var n={__c:t="__cC"+Fn++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,i;return this.getChildContext||(o=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(a){this.props.value!==a.value&&o.some(function(l){l.__e=!0,Pt(l)})},this.sub=function(a){o.push(a);var l=a.componentWillUnmount;a.componentWillUnmount=function(){o.splice(o.indexOf(a),1),l&&l.call(a)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Be=zn.slice,_={__e:function(e,t,n,r){for(var o,i,a;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),a=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),a=o.__d),a)return o.__E=o}catch(l){e=l}throw e}},Hn=0,F.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=J({},this.state),typeof e=="function"&&(e=e(J({},n),this.props)),e&&J(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Pt(this))},F.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Pt(this))},F.prototype.render=U,oe=[],Bn=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,At=function(e,t){return e.__v.__b-t.__v.__b},rt.__r=0,Fn=0;var N=function(){return N=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},N.apply(this,arguments)};function Le(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ee,E,vt,rn,he=0,Zn=[],Ze=[],on=_.__b,an=_.__r,sn=_.diffed,cn=_.__c,ln=_.unmount;function be(e,t){_.__h&&_.__h(E,e,he||t),he=0;var n=E.__H||(E.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Ze}),n.__[e]}function _e(e){return he=1,qn(Xn,e)}function qn(e,t,n){var r=be(ee++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Xn(void 0,t),function(l){var u=r.__N?r.__N[0]:r.__[0],d=r.t(u,l);u!==d&&(r.__N=[d,r.__[1]],r.__c.setState({}))}],r.__c=E,!E.u)){var o=function(l,u,d){if(!r.__c.__H)return!0;var p=r.__c.__H.__.filter(function(m){return m.__c});if(p.every(function(m){return!m.__N}))return!i||i.call(this,l,u,d);var c=!1;return p.forEach(function(m){if(m.__N){var f=m.__[0];m.__=m.__N,m.__N=void 0,f!==m.__[0]&&(c=!0)}}),!(!c&&r.__c.props===l)&&(!i||i.call(this,l,u,d))};E.u=!0;var i=E.shouldComponentUpdate,a=E.componentWillUpdate;E.componentWillUpdate=function(l,u,d){if(this.__e){var p=i;i=void 0,o(l,u,d),i=p}a&&a.call(this,l,u,d)},E.shouldComponentUpdate=o}return r.__N||r.__}function je(e,t){var n=be(ee++,3);!_.__s&&Vt(n.__H,t)&&(n.__=e,n.i=t,E.__H.__h.push(n))}function ct(e,t){var n=be(ee++,4);!_.__s&&Vt(n.__H,t)&&(n.__=e,n.i=t,E.__h.push(n))}function Qn(e){return he=5,lt(function(){return{current:e}},[])}function Vr(e,t,n){he=6,ct(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function lt(e,t){var n=be(ee++,7);return Vt(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Gr(e,t){return he=8,lt(function(){return e},t)}function Kn(e){var t=E.context[e.__c],n=be(ee++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(E)),t.props.value):e.__}function Jr(e,t){_.useDebugValue&&_.useDebugValue(t?t(e):e)}function Yr(){var e=be(ee++,11);if(!e.__){for(var t=E.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function Zr(){for(var e;e=Zn.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(qe),e.__H.__h.forEach(Et),e.__H.__h=[]}catch(t){e.__H.__h=[],_.__e(t,e.__v)}}_.__b=function(e){E=null,on&&on(e)},_.__r=function(e){an&&an(e),ee=0;var t=(E=e.__c).__H;t&&(vt===E?(t.__h=[],E.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Ze,n.__N=n.i=void 0})):(t.__h.forEach(qe),t.__h.forEach(Et),t.__h=[],ee=0)),vt=E},_.diffed=function(e){sn&&sn(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Zn.push(t)!==1&&rn===_.requestAnimationFrame||((rn=_.requestAnimationFrame)||qr)(Zr)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Ze&&(n.__=n.__V),n.i=void 0,n.__V=Ze})),vt=E=null},_.__c=function(e,t){t.some(function(n){try{n.__h.forEach(qe),n.__h=n.__h.filter(function(r){return!r.__||Et(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],_.__e(r,n.__v)}}),cn&&cn(e,t)},_.unmount=function(e){ln&&ln(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{qe(r)}catch(o){t=o}}),n.__H=void 0,t&&_.__e(t,n.__v))};var un=typeof requestAnimationFrame=="function";function qr(e){var t,n=function(){clearTimeout(r),un&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);un&&(t=requestAnimationFrame(n))}function qe(e){var t=E,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),E=t}function Et(e){var t=E;e.__c=e.__(),E=t}function Vt(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Xn(e,t){return typeof t=="function"?t(e):t}function er(e,t){for(var n in t)e[n]=t[n];return e}function It(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function Mt(e){this.props=e}function Qr(e,t){function n(o){var i=this.props.ref,a=i==o.ref;return!a&&i&&(i.call?i(null):i.current=null),t?!t(this.props,o)||!a:It(this.props,o)}function r(o){return this.shouldComponentUpdate=n,W(e,o)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(Mt.prototype=new F).isPureReactComponent=!0,Mt.prototype.shouldComponentUpdate=function(e,t){return It(this.props,e)||It(this.state,t)};var dn=_.__b;_.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),dn&&dn(e)};var Kr=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Xr(e){function t(n){var r=er({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=Kr,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var fn=function(e,t){return e==null?null:Y(Y(e).map(t))},eo={map:fn,forEach:fn,count:function(e){return e?Y(e).length:0},only:function(e){var t=Y(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:Y},to=_.__e;_.__e=function(e,t,n,r){if(e.then){for(var o,i=t;i=i.__;)if((o=i.__c)&&o.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t)}to(e,t,n,r)};var pn=_.unmount;function tr(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=er({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return tr(r,t,n)})),e}function nr(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return nr(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function Qe(){this.__u=0,this.t=null,this.__b=null}function rr(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function no(e){var t,n,r;function o(i){if(t||(t=e()).then(function(a){n=a.default||a},function(a){r=a}),r)throw r;if(!n)throw t;return W(n,i)}return o.displayName="Lazy",o.__f=!0,o}function Ie(){this.u=null,this.o=null}_.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),pn&&pn(e)},(Qe.prototype=new F).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=rr(r.__v),i=!1,a=function(){i||(i=!0,n.__R=null,o?o(l):l())};n.__R=a;var l=function(){if(!--r.__u){if(r.state.__a){var u=r.state.__a;r.__v.__k[0]=nr(u,u.__c.__P,u.__c.__O)}var d;for(r.setState({__a:r.__b=null});d=r.t.pop();)d.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a)},Qe.prototype.componentWillUnmount=function(){this.t=[]},Qe.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=tr(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__a&&W(U,null,e.fallback);return o&&(o.__u&=-33),[W(U,null,t.__a?null:e.children),o]};var hn=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function ro(e){return this.getChildContext=function(){return e.context},e.children}function oo(e){var t=this,n=e.i;t.componentWillUnmount=function(){pe(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),pe(W(ro,{context:t.context},e.__v),t.l)}function io(e,t){var n=W(oo,{__v:e,i:t});return n.containerInfo=t,n}(Ie.prototype=new F).__a=function(e){var t=this,n=rr(t.__v),r=t.o.get(e);return r[0]++,function(o){var i=function(){t.props.revealOrder?(r.push(o),hn(t,e,r)):o()};n?n(i):i()}},Ie.prototype.render=function(e){this.u=null,this.o=new Map;var t=Y(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Ie.prototype.componentDidUpdate=Ie.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){hn(e,n,t)})};var or=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,ao=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,so=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,co=/[A-Z0-9]/g,lo=typeof document<"u",uo=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function fo(e,t,n){return t.__k==null&&(t.textContent=""),pe(e,t),typeof n=="function"&&n(),e?e.__c:null}function po(e,t,n){return Yn(e,t),typeof n=="function"&&n(),e?e.__c:null}F.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(F.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var _n=_.event;function ho(){}function _o(){return this.cancelBubble}function mo(){return this.defaultPrevented}_.event=function(e){return _n&&(e=_n(e)),e.persist=ho,e.isPropagationStopped=_o,e.isDefaultPrevented=mo,e.nativeEvent=e};var Gt,go={enumerable:!1,configurable:!0,get:function(){return this.class}},mn=_.vnode;_.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,o={};for(var i in n){var a=n[i];if(!(i==="value"&&"defaultValue"in n&&a==null||lo&&i==="children"&&r==="noscript"||i==="class"||i==="className")){var l=i.toLowerCase();i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&a===!0?a="":l==="ondoubleclick"?i="ondblclick":l!=="onchange"||r!=="input"&&r!=="textarea"||uo(n.type)?l==="onfocus"?i="onfocusin":l==="onblur"?i="onfocusout":so.test(i)?i=l:r.indexOf("-")===-1&&ao.test(i)?i=i.replace(co,"-$&").toLowerCase():a===null&&(a=void 0):l=i="oninput",l==="oninput"&&o[i=l]&&(i="oninputCapture"),o[i]=a}}r=="select"&&o.multiple&&Array.isArray(o.value)&&(o.value=Y(n.children).forEach(function(u){u.props.selected=o.value.indexOf(u.props.value)!=-1})),r=="select"&&o.defaultValue!=null&&(o.value=Y(n.children).forEach(function(u){u.props.selected=o.multiple?o.defaultValue.indexOf(u.props.value)!=-1:o.defaultValue==u.props.value})),n.class&&!n.className?(o.class=n.class,Object.defineProperty(o,"className",go)):(n.className&&!n.class||n.class&&n.className)&&(o.class=o.className=n.className),t.props=o}(e),e.$$typeof=or,mn&&mn(e)};var gn=_.__r;_.__r=function(e){gn&&gn(e),Gt=e.__c};var yn=_.diffed;_.diffed=function(e){yn&&yn(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),Gt=null};var yo={ReactCurrentDispatcher:{current:{readContext:function(e){return Gt.__n[e.__c].props.value}}}};function vo(e){return W.bind(null,e)}function ut(e){return!!e&&e.$$typeof===or}function bo(e){return ut(e)&&e.type===U}function wo(e){return ut(e)?Wr.apply(null,arguments):e}function xo(e){return!!e.__k&&(pe(null,e),!0)}function Co(e){return e&&(e.base||e.nodeType===1&&e)||null}var ko=function(e,t){return e(t)},So=function(e,t){return e(t)},$o=U;function ir(e){e()}function Ao(e){return e}function Po(){return[!1,ir]}var Do=ct,Eo=ut;function Io(e,t){var n=t(),r=_e({h:{__:n,v:t}}),o=r[0].h,i=r[1];return ct(function(){o.__=n,o.v=t,bt(o)&&i({h:o})},[e,n,t]),je(function(){return bt(o)&&i({h:o}),e(function(){bt(o)&&i({h:o})})},[e]),n}function bt(e){var t,n,r=e.v,o=e.__;try{var i=r();return!((t=o)===(n=i)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}var j={useState:_e,useId:Yr,useReducer:qn,useEffect:je,useLayoutEffect:ct,useInsertionEffect:Do,useTransition:Po,useDeferredValue:Ao,useSyncExternalStore:Io,startTransition:ir,useRef:Qn,useImperativeHandle:Vr,useMemo:lt,useCallback:Gr,useContext:Kn,useDebugValue:Jr,version:"17.0.2",Children:eo,render:fo,hydrate:po,unmountComponentAtNode:xo,createPortal:io,createElement:W,createContext:Ur,createFactory:vo,cloneElement:wo,createRef:Or,Fragment:U,isValidElement:ut,isElement:Eo,isFragment:bo,findDOMNode:Co,Component:F,PureComponent:Mt,memo:Qr,forwardRef:Xr,flushSync:So,unstable_batchedUpdates:ko,StrictMode:$o,Suspense:Qe,SuspenseList:Ie,lazy:no,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:yo},D="-ms-",Re="-moz-",$="-webkit-",ar="comm",dt="rule",Jt="decl",Mo="@import",sr="@keyframes",No="@layer",Ro=Math.abs,Yt=String.fromCharCode,Nt=Object.assign;function To(e,t){return M(e,0)^45?(((t<<2^M(e,0))<<2^M(e,1))<<2^M(e,2))<<2^M(e,3):0}function cr(e){return e.trim()}function G(e,t){return(e=t.exec(e))?e[0]:e}function w(e,t,n){return e.replace(t,n)}function Ke(e,t){return e.indexOf(t)}function M(e,t){return e.charCodeAt(t)|0}function me(e,t,n){return e.slice(t,n)}function B(e){return e.length}function lr(e){return e.length}function Me(e,t){return t.push(e),e}function Lo(e,t){return e.map(t).join("")}function vn(e,t){return e.filter(function(n){return!G(n,t)})}var ft=1,ge=1,ur=0,L=0,I=0,we="";function pt(e,t,n,r,o,i,a,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:ft,column:ge,length:a,return:"",siblings:l}}function K(e,t){return Nt(pt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ue(e){for(;e.root;)e=K(e.root,{children:[e]});Me(e,e.siblings)}function jo(){return I}function Oo(){return I=L>0?M(we,--L):0,ge--,I===10&&(ge=1,ft--),I}function O(){return I=L<ur?M(we,L++):0,ge++,I===10&&(ge=1,ft++),I}function ae(){return M(we,L)}function Xe(){return L}function ht(e,t){return me(we,e,t)}function Rt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ho(e){return ft=ge=1,ur=B(we=e),L=0,[]}function Bo(e){return we="",e}function wt(e){return cr(ht(L-1,Tt(e===91?e+2:e===40?e+1:e)))}function Fo(e){for(;(I=ae())&&I<33;)O();return Rt(e)>2||Rt(I)>3?"":" "}function zo(e,t){for(;--t&&O()&&!(I<48||I>102||I>57&&I<65||I>70&&I<97););return ht(e,Xe()+(t<6&&ae()==32&&O()==32))}function Tt(e){for(;O();)switch(I){case e:return L;case 34:case 39:e!==34&&e!==39&&Tt(I);break;case 40:e===41&&Tt(e);break;case 92:O();break}return L}function Wo(e,t){for(;O()&&e+I!==57;)if(e+I===84&&ae()===47)break;return"/*"+ht(t,L-1)+"*"+Yt(e===47?e:O())}function Uo(e){for(;!Rt(ae());)O();return ht(e,L)}function Vo(e){return Bo(et("",null,null,null,[""],e=Ho(e),0,[0],e))}function et(e,t,n,r,o,i,a,l,u){for(var d=0,p=0,c=a,m=0,f=0,y=0,x=1,k=1,g=1,b=0,C="",A=o,P=i,S=r,v=C;k;)switch(y=b,b=O()){case 40:if(y!=108&&M(v,c-1)==58){Ke(v+=w(wt(b),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:v+=wt(b);break;case 9:case 10:case 13:case 32:v+=Fo(y);break;case 92:v+=zo(Xe()-1,7);continue;case 47:switch(ae()){case 42:case 47:Me(Go(Wo(O(),Xe()),t,n,u),u);break;default:v+="/"}break;case 123*x:l[d++]=B(v)*g;case 125*x:case 59:case 0:switch(b){case 0:case 125:k=0;case 59+p:g==-1&&(v=w(v,/\f/g,"")),f>0&&B(v)-c&&Me(f>32?wn(v+";",r,n,c-1,u):wn(w(v," ","")+";",r,n,c-2,u),u);break;case 59:v+=";";default:if(Me(S=bn(v,t,n,d,p,o,l,C,A=[],P=[],c,i),i),b===123)if(p===0)et(v,t,S,S,A,i,c,l,P);else switch(m===99&&M(v,3)===110?100:m){case 100:case 108:case 109:case 115:et(e,S,S,r&&Me(bn(e,S,S,0,0,o,l,C,o,A=[],c,P),P),o,P,c,l,r?A:P);break;default:et(v,S,S,S,[""],P,0,l,P)}}d=p=f=0,x=g=1,C=v="",c=a;break;case 58:c=1+B(v),f=y;default:if(x<1){if(b==123)--x;else if(b==125&&x++==0&&Oo()==125)continue}switch(v+=Yt(b),b*x){case 38:g=p>0?1:(v+="\f",-1);break;case 44:l[d++]=(B(v)-1)*g,g=1;break;case 64:ae()===45&&(v+=wt(O())),m=ae(),p=c=B(C=v+=Uo(Xe())),b++;break;case 45:y===45&&B(v)==2&&(x=0)}}return i}function bn(e,t,n,r,o,i,a,l,u,d,p,c){for(var m=o-1,f=o===0?i:[""],y=lr(f),x=0,k=0,g=0;x<r;++x)for(var b=0,C=me(e,m+1,m=Ro(k=a[x])),A=e;b<y;++b)(A=cr(k>0?f[b]+" "+C:w(C,/&\f/g,f[b])))&&(u[g++]=A);return pt(e,t,n,o===0?dt:l,u,d,p,c)}function Go(e,t,n,r){return pt(e,t,n,ar,Yt(jo()),me(e,2,-2),0,r)}function wn(e,t,n,r,o){return pt(e,t,n,Jt,me(e,0,r),me(e,r+1,-1),r,o)}function dr(e,t,n){switch(To(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 4789:return Re+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Re+e+D+e+e;case 5936:switch(M(e,t+11)){case 114:return $+e+D+w(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+D+w(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+D+w(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return $+e+D+e+e;case 6165:return $+e+D+"flex-"+e+e;case 5187:return $+e+w(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+D+"flex-$1$2")+e;case 5443:return $+e+D+"flex-item-"+w(e,/flex-|-self/g,"")+(G(e,/flex-|baseline/)?"":D+"grid-row-"+w(e,/flex-|-self/g,""))+e;case 4675:return $+e+D+"flex-line-pack"+w(e,/align-content|flex-|-self/g,"")+e;case 5548:return $+e+D+w(e,"shrink","negative")+e;case 5292:return $+e+D+w(e,"basis","preferred-size")+e;case 6060:return $+"box-"+w(e,"-grow","")+$+e+D+w(e,"grow","positive")+e;case 4554:return $+w(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return w(w(w(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return w(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return w(w(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+D+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4200:if(!G(e,/flex-|baseline/))return D+"grid-column-align"+me(e,t)+e;break;case 2592:case 3360:return D+w(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,G(r.props,/grid-\w+-end/)})?~Ke(e+(n=n[t].value),"span")?e:D+w(e,"-start","")+e+D+"grid-row-span:"+(~Ke(n,"span")?G(n,/\d+/):+G(n,/\d+/)-+G(e,/\d+/))+";":D+w(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return G(r.props,/grid-\w+-start/)})?e:D+w(w(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return w(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(B(e)-1-t>6)switch(M(e,t+1)){case 109:if(M(e,t+4)!==45)break;case 102:return w(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Re+(M(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Ke(e,"stretch")?dr(w(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return w(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,a,l,u,d){return D+o+":"+i+d+(a?D+o+"-span:"+(l?u:+u-+i)+d:"")+e});case 4949:if(M(e,t+6)===121)return w(e,":",":"+$)+e;break;case 6444:switch(M(e,M(e,14)===45?18:11)){case 120:return w(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+$+(M(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+D+"$2box$3")+e;case 100:return w(e,":",":"+D)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return w(e,"scroll-","scroll-snap-")+e}return e}function ot(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Jo(e,t,n,r){switch(e.type){case No:if(e.children.length)break;case Mo:case Jt:return e.return=e.return||e.value;case ar:return"";case sr:return e.return=e.value+"{"+ot(e.children,r)+"}";case dt:if(!B(e.value=e.props.join(",")))return""}return B(n=ot(e.children,r))?e.return=e.value+"{"+n+"}":""}function Yo(e){var t=lr(e);return function(n,r,o,i){for(var a="",l=0;l<t;l++)a+=e[l](n,r,o,i)||"";return a}}function Zo(e){return function(t){t.root||(t=t.return)&&e(t)}}function qo(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Jt:e.return=dr(e.value,e.length,n);return;case sr:return ot([K(e,{value:w(e.value,"@","@"+$)})],r);case dt:if(e.length)return Lo(n=e.props,function(o){switch(G(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ue(K(e,{props:[w(o,/:(read-\w+)/,":"+Re+"$1")]})),ue(K(e,{props:[o]})),Nt(e,{props:vn(n,r)});break;case"::placeholder":ue(K(e,{props:[w(o,/:(plac\w+)/,":"+$+"input-$1")]})),ue(K(e,{props:[w(o,/:(plac\w+)/,":"+Re+"$1")]})),ue(K(e,{props:[w(o,/:(plac\w+)/,D+"input-$1")]})),ue(K(e,{props:[o]})),Nt(e,{props:vn(n,r)});break}return""})}}var Qo={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},T={},ye=typeof process<"u"&&T!==void 0&&(T.REACT_APP_SC_ATTR||T.SC_ATTR)||"data-styled",Zt=typeof window<"u"&&"HTMLElement"in window,Ko=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&T!==void 0&&T.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&T.REACT_APP_SC_DISABLE_SPEEDY!==""?T.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&T.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&T!==void 0&&T.SC_DISABLE_SPEEDY!==void 0&&T.SC_DISABLE_SPEEDY!==""&&T.SC_DISABLE_SPEEDY!=="false"&&T.SC_DISABLE_SPEEDY),Xo={},_t=Object.freeze([]),ve=Object.freeze({});function fr(e,t,n){return n===void 0&&(n=ve),e.theme!==n.theme&&e.theme||t||n.theme}var pr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),ei=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ti=/(^-|-$)/g;function xn(e){return e.replace(ei,"-").replace(ti,"")}var ni=/(a)(d)/gi,Cn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Lt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Cn(t%52)+n;return(Cn(t%52)+n).replace(ni,"$1-$2")}var xt,de=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},hr=function(e){return de(5381,e)};function _r(e){return Lt(hr(e)>>>0)}function ri(e){return e.displayName||e.name||"Component"}function Ct(e){return typeof e=="string"&&!0}var mr=typeof Symbol=="function"&&Symbol.for,gr=mr?Symbol.for("react.memo"):60115,oi=mr?Symbol.for("react.forward_ref"):60112,ii={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ai={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},si=((xt={})[oi]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xt[gr]=yr,xt);function kn(e){return("type"in(t=e)&&t.type.$$typeof)===gr?yr:"$$typeof"in e?si[e.$$typeof]:ii;var t}var ci=Object.defineProperty,li=Object.getOwnPropertyNames,Sn=Object.getOwnPropertySymbols,ui=Object.getOwnPropertyDescriptor,di=Object.getPrototypeOf,$n=Object.prototype;function vr(e,t,n){if(typeof t!="string"){if($n){var r=di(t);r&&r!==$n&&vr(e,r,n)}var o=li(t);Sn&&(o=o.concat(Sn(t)));for(var i=kn(e),a=kn(t),l=0;l<o.length;++l){var u=o[l];if(!(u in ai||n&&n[u]||a&&u in a||i&&u in i)){var d=ui(t,u);try{ci(e,u,d)}catch{}}}}return e}function se(e){return typeof e=="function"}function qt(e){return typeof e=="object"&&"styledComponentId"in e}function ie(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function jt(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Oe(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ot(e,t,n){if(n===void 0&&(n=!1),!n&&!Oe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ot(e[r],t[r]);else if(Oe(t))for(var r in t)e[r]=Ot(e[r],t[r]);return e}function Qt(e,t){Object.defineProperty(e,"toString",{value:t})}function ce(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var fi=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw ce(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var a=o;a<i;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),u=(a=0,n.length);a<u;a++)this.tag.insertRule(l,n[a])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,a=o;a<i;a++)n+="".concat(this.tag.getRule(a)).concat(`/*!sc*/
`);return n},e}(),tt=new Map,it=new Map,nt=1,Ge=function(e){if(tt.has(e))return tt.get(e);for(;it.has(nt);)nt++;var t=nt++;return tt.set(e,t),it.set(t,e),t},pi=function(e,t){nt=t+1,tt.set(e,t),it.set(t,e)},hi="style[".concat(ye,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),_i=new RegExp("^".concat(ye,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),mi=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},gi=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,a=r.length;i<a;i++){var l=r[i].trim();if(l){var u=l.match(_i);if(u){var d=0|parseInt(u[1],10),p=u[2];d!==0&&(pi(p,d),mi(e,p,u[3]),e.getTag().insertRules(d,o)),o.length=0}else o.push(l)}}};function yi(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var br=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var u=Array.from(l.querySelectorAll("style[".concat(ye,"]")));return u[u.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(ye,"active"),r.setAttribute("data-styled-version","6.1.1");var a=yi();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},vi=function(){function e(t){this.element=br(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var a=r[o];if(a.ownerNode===n)return a}throw ce(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),bi=function(){function e(t){this.element=br(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),wi=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),An=Zt,xi={isServer:!Zt,useCSSOMInjection:!Ko},at=function(){function e(t,n,r){t===void 0&&(t=ve),n===void 0&&(n={});var o=this;this.options=N(N({},xi),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Zt&&An&&(An=!1,function(i){for(var a=document.querySelectorAll(hi),l=0,u=a.length;l<u;l++){var d=a[l];d&&d.getAttribute(ye)!=="active"&&(gi(i,d),d.parentNode&&d.parentNode.removeChild(d))}}(this)),Qt(this,function(){return function(i){for(var a=i.getTag(),l=a.length,u="",d=function(c){var m=function(g){return it.get(g)}(c);if(m===void 0)return"continue";var f=i.names.get(m),y=a.getGroup(c);if(f===void 0||y.length===0)return"continue";var x="".concat(ye,".g").concat(c,'[id="').concat(m,'"]'),k="";f!==void 0&&f.forEach(function(g){g.length>0&&(k+="".concat(g,","))}),u+="".concat(y).concat(x,'{content:"').concat(k,'"}').concat(`/*!sc*/
`)},p=0;p<l;p++)d(p);return u}(o)})}return e.registerId=function(t){return Ge(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(N(N({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new wi(o):r?new vi(o):new bi(o)}(this.options),new fi(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Ge(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Ge(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Ge(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ci=/&/g,ki=/^\s*\/\/.*$/gm;function wr(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=wr(n.children,t)),n})}function Si(e){var t,n,r,o=e===void 0?ve:e,i=o.options,a=i===void 0?ve:i,l=o.plugins,u=l===void 0?_t:l,d=function(m,f,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},p=u.slice();p.push(function(m){m.type===dt&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Ci,n).replace(r,d))}),a.prefix&&p.push(qo),p.push(Jo);var c=function(m,f,y,x){f===void 0&&(f=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=f,r=new RegExp("\\".concat(n,"\\b"),"g");var k=m.replace(ki,""),g=Vo(y||f?"".concat(y," ").concat(f," { ").concat(k," }"):k);a.namespace&&(g=wr(g,a.namespace));var b=[];return ot(g,Yo(p.concat(Zo(function(C){return b.push(C)})))),b};return c.hash=u.length?u.reduce(function(m,f){return f.name||ce(15),de(m,f.name)},5381).toString():"",c}var $i=new at,Ht=Si(),xr=j.createContext({shouldForwardProp:void 0,styleSheet:$i,stylis:Ht});xr.Consumer;j.createContext(void 0);function Bt(){return Kn(xr)}var Ai=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Ht);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Qt(this,function(){throw ce(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Ht),this.name+t.hash},e}(),Pi=function(e){return e>="A"&&e<="Z"};function Pn(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Pi(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Cr=function(e){return e==null||e===!1||e===""},kr=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Cr(i)&&(Array.isArray(i)&&i.isCss||se(i)?r.push("".concat(Pn(o),":"),i,";"):Oe(i)?r.push.apply(r,Le(Le(["".concat(o," {")],kr(i),!1),["}"],!1)):r.push("".concat(Pn(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Qo||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function X(e,t,n,r){if(Cr(e))return[];if(qt(e))return[".".concat(e.styledComponentId)];if(se(e)){if(!se(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return X(o,t,n,r)}var i;return e instanceof Ai?n?(e.inject(n,r),[e.getName(r)]):[e]:Oe(e)?kr(e):Array.isArray(e)?Array.prototype.concat.apply(_t,e.map(function(a){return X(a,t,n,r)})):[e.toString()]}function Sr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(se(n)&&!qt(n))return!1}return!0}var Di=hr("6.1.1"),Ei=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Sr(t),this.componentId=n,this.baseHash=de(Di,n),this.baseStyle=r,at.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=ie(o,this.staticRulesId);else{var i=jt(X(this.rules,t,n,r)),a=Lt(de(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,a)){var l=r(i,".".concat(a),void 0,this.componentId);n.insertRules(this.componentId,a,l)}o=ie(o,a),this.staticRulesId=a}else{for(var u=de(this.baseHash,r.hash),d="",p=0;p<this.rules.length;p++){var c=this.rules[p];if(typeof c=="string")d+=c;else if(c){var m=jt(X(c,t,n,r));u=de(u,m+p),d+=m}}if(d){var f=Lt(u>>>0);n.hasNameForId(this.componentId,f)||n.insertRules(this.componentId,f,r(d,".".concat(f),void 0,this.componentId)),o=ie(o,f)}}return o},e}(),He=j.createContext(void 0);He.Consumer;function Ii(e){var t=j.useContext(He),n=lt(function(){return function(r,o){if(!r)throw ce(14);if(se(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw ce(8);return o?N(N({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?j.createElement(He.Provider,{value:n},e.children):null}var kt={};function Mi(e,t,n){var r=qt(e),o=e,i=!Ct(e),a=t.attrs,l=a===void 0?_t:a,u=t.componentId,d=u===void 0?function(A,P){var S=typeof A!="string"?"sc":xn(A);kt[S]=(kt[S]||0)+1;var v="".concat(S,"-").concat(_r("6.1.1"+S+kt[S]));return P?"".concat(P,"-").concat(v):v}(t.displayName,t.parentComponentId):u,p=t.displayName,c=p===void 0?function(A){return Ct(A)?"styled.".concat(A):"Styled(".concat(ri(A),")")}(e):p,m=t.displayName&&t.componentId?"".concat(xn(t.displayName),"-").concat(t.componentId):t.componentId||d,f=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var x=o.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;y=function(A,P){return x(A,P)&&k(A,P)}}else y=x}var g=new Ei(n,m,r?o.componentStyle:void 0);function b(A,P){return function(S,v,V){var R=S.attrs,le=S.componentStyle,Ir=S.defaultProps,Mr=S.foldedComponentIds,Nr=S.styledComponentId,Rr=S.target,Tr=j.useContext(He),Lr=Bt(),mt=S.shouldForwardProp||Lr.shouldForwardProp,Z=function(ze,Ce,We){for(var ke,te=N(N({},Ce),{className:void 0,theme:We}),yt=0;yt<ze.length;yt+=1){var Ue=se(ke=ze[yt])?ke(te):ke;for(var Q in Ue)te[Q]=Q==="className"?ie(te[Q],Ue[Q]):Q==="style"?N(N({},te[Q]),Ue[Q]):Ue[Q]}return Ce.className&&(te.className=ie(te.className,Ce.className)),te}(R,v,fr(v,Tr,Ir)||ve),Fe=Z.as||Rr,xe={};for(var q in Z)Z[q]===void 0||q[0]==="$"||q==="as"||q==="theme"||(q==="forwardedAs"?xe.as=Z.forwardedAs:mt&&!mt(q,Fe)||(xe[q]=Z[q]));var Kt=function(ze,Ce){var We=Bt(),ke=ze.generateAndInjectStyles(Ce,We.styleSheet,We.stylis);return ke}(le,Z),gt=ie(Mr,Nr);return Kt&&(gt+=" "+Kt),Z.className&&(gt+=" "+Z.className),xe[Ct(Fe)&&!pr.has(Fe)?"class":"className"]=gt,xe.ref=V,W(Fe,xe)}(C,A,P)}b.displayName=c;var C=j.forwardRef(b);return C.attrs=f,C.componentStyle=g,C.displayName=c,C.shouldForwardProp=y,C.foldedComponentIds=r?ie(o.foldedComponentIds,o.styledComponentId):"",C.styledComponentId=m,C.target=r?o.target:e,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(A){this._foldedDefaultProps=r?function(P){for(var S=[],v=1;v<arguments.length;v++)S[v-1]=arguments[v];for(var V=0,R=S;V<R.length;V++)Ot(P,R[V],!0);return P}({},o.defaultProps,A):A}}),Qt(C,function(){return".".concat(C.styledComponentId)}),i&&vr(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function Dn(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var En=function(e){return Object.assign(e,{isCss:!0})};function $r(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(se(e)||Oe(e)){var r=e;return En(X(Dn(_t,Le([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?X(o):En(X(Dn(o,t)))}function Ft(e,t,n){if(n===void 0&&(n=ve),!t)throw ce(1,t);var r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,$r.apply(void 0,Le([o],i,!1)))};return r.attrs=function(o){return Ft(e,t,N(N({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Ft(e,t,N(N({},n),o))},r}var Ar=function(e){return Ft(Mi,e)},h=Ar;pr.forEach(function(e){h[e]=Ar(e)});var Ni=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Sr(t),at.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(jt(X(this.rules,n,r,o)),""),a=this.componentId+t;r.insertRules(a,a,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&at.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function Ri(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=$r.apply(void 0,Le([e],t,!1)),o="sc-global-".concat(_r(JSON.stringify(r))),i=new Ni(r,o),a=function(u){var d=Bt(),p=j.useContext(He),c=j.useRef(d.styleSheet.allocateGSInstance(o)).current;return d.styleSheet.server&&l(c,u,d.styleSheet,p,d.stylis),j.useLayoutEffect(function(){if(!d.styleSheet.server)return l(c,u,d.styleSheet,p,d.stylis),function(){return i.removeStyles(c,d.styleSheet)}},[c,u,d.styleSheet,p,d.stylis]),null};function l(u,d,p,c,m){if(i.isStatic)i.renderStyles(u,Xo,p,m);else{var f=N(N({},d),{theme:fr(d,c,a.defaultProps)});i.renderStyles(u,f,p,m)}}return j.memo(a)}const Ti={white:"#ffffff","white-50":"rgba(255,255,255,0.5)","secundary-blue":"#1864AB","secundary-blue-10":"rgba(24,100,171,0.1)","secundary-blue-50":"rgba(24,100,171,0.5)","background-blue":"#090E16","background-blue-10":"rgba(9,14,22,0.1)","secundary-purple":"#7B4AE2","secundary-purple-10":"rgba(123,74,226,0.1)","green-online":"#4AE290","green-online-10":"rgba(74,226,144,0.1)"},Li=Ri`
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
`,ji=h.header`
    background: ${e=>e.theme["secundary-purple-10"]};
    padding: .3rem .3rem .3rem;
    margin: 48px 96px;
    border-radius: 16px;
`,ne=h.a`
    color: inherit;
    text-decoration: none;
`,Oi=h.div`
    border-radius: 15;
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`,Hi=h.div`
    font-family: 100 .5rem Raleway, sans-serif;
    display: flex;
    color: ${e=>e.theme["white-50"]};
`,re=h.div`
    margin-left: 17px;
    &:hover {
        color: ${e=>e.theme["secundary-blue"]};
    }
`,Bi="/portifolio/assets/logofloat-7cUt6MpB.svg";var Fi=0;function s(e,t,n,r,o,i){var a,l,u={};for(l in t)l=="ref"?a=t[l]:u[l]=t[l];var d={type:e,props:u,key:n,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--Fi,__i:-1,__u:0,__source:o,__self:i};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)u[l]===void 0&&(u[l]=a[l]);return _.vnode&&_.vnode(d),d}function zi(){return s("div",{children:s(ji,{children:s(Oi,{children:[s("img",{src:Bi,alt:"",height:36,width:36}),s(Hi,{children:[s(re,{children:s(ne,{href:"#home",children:"Home"})}),s(re,{children:s(ne,{href:"#about",children:"About me"})}),s(re,{children:s(ne,{href:"#portfolio",children:"Portfolio"})}),s(re,{children:s(ne,{href:"#skills",children:"Skills"})}),s(re,{children:s(ne,{href:"#career",children:"Career"})}),s(re,{children:s(ne,{href:"#recommendations",children:"Recommendations"})}),s(re,{children:s(ne,{href:"#contact",children:"Contact"})})]})]})})})}const Wi="/portifolio/assets/mymeme-back-0w-5y6_p.svg",Ui="data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.3272%200H0.0330811V16H16.3272V0Z'%20fill='%231864AB'%20fill-opacity='0.5'/%3e%3cpath%20d='M8.18018%202V11.5'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M3.59741%207L8.18013%2011.5L12.7629%207'%20fill='%231864AB'%20fill-opacity='0.5'/%3e%3cpath%20d='M3.59741%207L8.18013%2011.5L12.7629%207'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.5791%2013.5H13.7813'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Pr="data:image/svg+xml,%3csvg%20width='19'%20height='20'%20viewBox='0%200%2019%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2.15487%2014.5748C1.12852%2012.6908%200.76952%2010.464%201.14526%208.31242C1.521%206.16085%202.60564%204.23248%204.19556%202.88934C5.78548%201.54619%207.77134%200.880632%209.78032%201.01761C11.7893%201.1546%2013.6832%202.0847%2015.1066%203.6333C16.5299%205.18191%2017.3848%207.24252%2017.5107%209.4283C17.6366%2011.6141%2017.0249%2013.7747%2015.7904%2015.5045C14.5559%2017.2343%2012.7835%2018.4144%2010.8059%2018.8232C8.8284%2019.232%206.7817%2018.8414%205.0501%2017.7248L2.18934%2018.606C2.07213%2018.6433%201.94786%2018.6456%201.82956%2018.6127C1.71125%2018.5798%201.60326%2018.5128%201.51691%2018.4189C1.43056%2018.3249%201.36903%2018.2074%201.33877%2018.0787C1.3085%2017.95%201.31062%2017.8148%201.3449%2017.6873L2.15487%2014.5748Z'%20fill='%231864AB'%20fill-opacity='0.5'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M11.3489%2015.231C10.4419%2015.2335%209.54337%2015.041%208.70495%2014.6644C7.86654%2014.2879%207.10476%2013.7349%206.4634%2013.0371C5.82204%2012.3393%205.31373%2011.5105%204.96767%2010.5983C4.62162%209.6861%204.44465%208.70849%204.44692%207.72166C4.4492%207.02709%204.7044%206.36182%205.15662%205.87156C5.60884%205.3813%206.22121%205.10603%206.8596%205.10603C6.96493%205.10512%207.06854%205.13511%207.15952%205.19285C7.2505%205.25059%207.3255%205.33395%207.37661%205.43416L8.38477%207.34666C8.44472%207.46292%208.47549%207.5943%208.47397%207.7276C8.47246%207.8609%208.43872%207.99142%208.37615%208.10603L7.56618%209.57791C7.98105%2010.5821%208.71988%2011.3859%209.64281%2011.8373L10.9956%2010.956C11.101%2010.8879%2011.2209%2010.8512%2011.3435%2010.8496C11.466%2010.848%2011.5867%2010.8814%2011.6936%2010.9467L13.4514%2012.0435C13.5435%2012.0991%2013.6201%2012.1807%2013.6732%2012.2797C13.7263%2012.3787%2013.7538%2012.4914%2013.753%2012.606C13.7507%2013.2998%2013.497%2013.9647%2013.0469%2014.4562C12.5968%2014.9477%2011.9866%2015.2261%2011.3489%2015.231Z'%20fill='%231864AB'%20fill-opacity='0.5'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Vi="/portifolio/assets/mark-sL43190F.svg",Dr="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_30_57)'%3e%3cpath%20d='M15.9999%200C24.837%200%2032%207.164%2032%2016.0001C32%2024.8361%2024.837%2032%2015.9999%2032C7.1629%2032%200%2024.836%200%2016.0001C0%207.16411%207.16301%200%2015.9999%200Z'%20fill='white'%20fill-opacity='0.5'/%3e%3cpath%20d='M9.01599%2021.984H12.012V11.998H9.01599V21.984ZM20.688%2011.6521C19.234%2011.6521%2017.933%2012.183%2017.0101%2013.3551V11.9651H14.0031V21.9841H17.0101V16.5661C17.0101%2015.4211%2018.0591%2014.304%2019.3731%2014.304C20.687%2014.304%2021.0111%2015.4211%2021.0111%2016.5381V21.9831H24.0071V16.3151C24.007%2012.378%2022.143%2011.6521%2020.688%2011.6521ZM10.5%2011C11.328%2011%2012%2010.328%2012%209.49997C12%208.67195%2011.328%208.00003%2010.5%208.00003C9.67199%208.00003%208.99995%208.67206%208.99995%209.50008C8.99995%2010.3281%209.67199%2011%2010.5%2011Z'%20fill='%23090E16'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_30_57'%3e%3crect%20width='32'%20height='32'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Er="data:image/svg+xml,%3csvg%20width='34'%20height='33'%20viewBox='0%200%2034%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16.7381%200.333344C7.67448%200.333344%200.333374%207.67445%200.333374%2016.738C0.333374%2023.9971%205.02922%2030.1284%2011.5501%2032.302C12.3703%2032.4455%2012.6779%2031.9534%2012.6779%2031.5228C12.6779%2031.1332%2012.6574%2029.8413%2012.6574%2028.4674C8.53572%2029.2261%207.46942%2027.4626%207.14133%2026.5399C6.95677%2026.0682%206.15704%2024.6123%205.45984%2024.2227C4.88568%2023.9151%204.06544%2023.1564%205.43934%2023.1359C6.73121%2023.1154%207.65397%2024.3252%207.96156%2024.8174C9.43798%2027.2986%2011.7962%2026.6014%2012.7394%2026.1707C12.883%2025.1044%2013.3136%2024.3867%2013.7852%2023.9766C10.1352%2023.5665%206.32109%2022.1516%206.32109%2015.8768C6.32109%2014.0928%206.95677%2012.6164%208.00257%2011.468C7.83853%2011.0579%207.26436%209.37644%208.16662%207.12079C8.16662%207.12079%209.54051%206.69017%2012.6779%208.80227C13.9903%208.43316%2015.3847%208.24861%2016.7791%208.24861C18.1735%208.24861%2019.5679%208.43316%2020.8803%208.80227C24.0177%206.66966%2025.3916%207.12079%2025.3916%207.12079C26.2938%209.37644%2025.7197%2011.0579%2025.5556%2011.468C26.6014%2012.6164%2027.2371%2014.0723%2027.2371%2015.8768C27.2371%2022.1721%2023.4025%2023.5665%2019.7524%2023.9766C20.3471%2024.4893%2020.8598%2025.4735%2020.8598%2027.0115C20.8598%2029.2056%2020.8393%2030.9691%2020.8393%2031.5228C20.8393%2031.9534%2021.1468%2032.4661%2021.9671%2032.302C28.4469%2030.1284%2033.1428%2023.9766%2033.1428%2016.738C33.1428%207.67445%2025.8017%200.333344%2016.7381%200.333344Z'%20fill='white'%20fill-opacity='0.5'/%3e%3c/svg%3e",Gi=h.div`
    width: 100%;
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-left: 15%;
    padding-right: 15%;
`,Ji=h.div`
    font-family: 700 1rem Raleway, sans-serif;
    font-size: large;
`,Yi=h.div`
    color: ${e=>e.theme["secundary-blue-50"]};
    justify-content: center;
    vertical-align: middle;
`,Zi=h.div`
    display: flex;
    justify-content: center;
    align-items: center;
`,qi=h.button`
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
`,Qi=h.div`
    margin-left: 5px;
`,Ki=h.div`
    width: 120px;
    border-radius: 10px;
    font-size: 15px;
    padding: 5px;
    padding-right: -20px;
    margin-bottom: 35px;
    background-color: ${e=>e.theme["secundary-blue"]};
    color: ${e=>e.theme["background-blue"]};
    font-weight: bold;
`,Xi=h.div`
    display: flex;
`,ea=h.div`
    margin-top: -15px;
    margin-right: 20px;
    font-size: 48px;
    font-family: 700 1rem Raleway, sans-serif;
    font-weight: bold;
`,ta=h.div`
    color: ${e=>e.theme["white-50"]};
    margin-top: 30px;
`,na=h.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 30px;
`,In=h.div`
    margin-right: 15px;
`;function ra(){return s(Gi,{id:"home",children:[s(Ji,{children:[s(Ki,{children:"👋 Saudações!"}),s(Xi,{children:[s(ea,{children:[s("p",{children:"Wilton"}),s("p",{children:"Costa"})]}),s("img",{src:Vi,alt:"",height:52,width:52})]}),s(ta,{children:"Software Engineer · Full-Stack"}),s(na,{children:[s("a",{href:"https://www.linkedin.com/in/wilton-software-engineer/",target:"_blank",rel:"noreferrer",children:s(In,{children:s("img",{src:Dr,alt:""})})}),s("a",{href:"https://www.github.com/wiltoon",target:"_blank",rel:"noreferrer",children:s(In,{children:s("img",{src:Er,alt:""})})})]})]}),s("img",{src:Wi,alt:"",style:{maxWidth:"100%",height:"auto",width:"50%"}}),s(Yi,{children:[s(Zi,{children:["Baixar CV",s("img",{src:Ui,alt:""})]}),s(qi,{children:[s("img",{src:Pr,alt:""}),s(Qi,{children:"Vamos trabalhar juntos?"})]})]})]})}const oa=h.section`
    width: 100%;
    
`,ia=h.div`
    display: flex;
    margin: 30px;
    margin-left: 25%;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    background-color: ${e=>e.theme["secundary-blue-10"]};
`,aa=h.div`
    display: flex;
    justify-content: space-evenly;
`,sa=h.div`
    font-weight: 700;
    width: 300px;
    font-size: xx-large;
    color: ${e=>e.theme.white};
    `,ca=h.div`
    display: flex;
    gap: 20px;
`,la=h.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    grid-template-columns: repeat(4, 3fr);
    justify-content: center;
    align-items: center; // Add this line to center the cards vertically
    padding: 90px;
`,St=h.button`
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
`,Se=h.div`
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
`,Ae=h.div`
    font-size: small;
    
    color: ${e=>e.theme["white-50"]};
`,Pe=h.div`
    display: flex;
    justify-content: space-around;
    padding-top: 35px;
`,De=h.div`
    margin-top: 10px;
    width: 180px;
    height: 40%;
    background-color: ${e=>e.theme["secundary-blue-10"]};
`,H=h.div`
    padding: 10px;
    border-radius: 12px;
    font-weight: bold;
    font-size: small;
    background-color: ${e=>e.theme["secundary-blue-10"]};
`;function ua(){return s(oa,{id:"portfolio",children:[s(ia,{children:"🔗 Portfolio"}),s(aa,{children:[s(sa,{children:"Works and Projects"}),s(ca,{children:[s(St,{children:"Backend"}),s(St,{children:"Frontend"}),s(St,{children:"IAs"})]})]}),s(la,{children:[s(Se,{children:[s($e,{children:"Move it"}),s(Ae,{children:"Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios."}),s(Pe,{children:[s(H,{children:"Online"}),s(H,{children:"Typescript"})]}),s(De,{})]}),s(Se,{children:[s($e,{children:"My Second"}),s(Ae,{children:"Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios."}),s(Pe,{children:[s(H,{children:"Online"}),s(H,{children:"Typescript"})]}),s(De,{})]}),s(Se,{children:[s($e,{children:"My Third"}),s(Ae,{children:"Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios."}),s(Pe,{children:[s(H,{children:"Online"}),s(H,{children:"Typescript"})]}),s(De,{})]}),s(Se,{children:[s($e,{children:"My Third"}),s(Ae,{children:"Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios."}),s(Pe,{children:[s(H,{children:"Online"}),s(H,{children:"Typescript"})]}),s(De,{})]}),s(Se,{children:[s($e,{children:"My Third"}),s(Ae,{children:"Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios."}),s(Pe,{children:[s(H,{children:"Online"}),s(H,{children:"Typescript"})]}),s(De,{})]})]})]})}const da=h.section`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 600px;
`,fa=h.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
`,pa=h.div`
    height: 300px;
    width: 300px;
    border-radius: 400px;
    background-color: ${e=>e.theme.white};
`,ha=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    background-color: ${e=>e.theme["secundary-blue-10"]};
`,_a=h.div`
    font-weight: 700;
    width: 300px;
    font-size: xx-large;
    color: ${e=>e.theme.white};
`,ma=h.div`
    font-weight: 400;
    color: ${e=>e.theme["white-50"]};
`;function ga(){const[e,t]=_e("");return je(()=>{fetch("https://api.github.com/users/wiltoon").then(n=>n.json()).then(n=>t(n.avatar_url)).catch(n=>console.log(n))},[]),s(da,{id:"about",children:[s(pa,{children:s(fa,{src:e,alt:"Profile"})}),s("div",{children:[s(ha,{children:"🧐 About me"}),s(_a,{children:"Wilton Gustavo Gomes da Costa"}),s(ma,{children:["👋 Me chamo Wilton, e atuo na área de Engenharia de Software, mas também tenho interesse na área de Inteligência Artificial, dito isso acredito ser capaz de abrir um novo ramo sendo um back-end agregando na área de IA. Prazer em recebê-lo!",s("br",{}),"👨‍💻 Há mais de 7 anos buscando novas soluções com as linguagem C. C++, Java, Python, Typescript;",s("br",{}),"🎓 Graduado em Engenharia da Computação na Universidade Federal de Mato Grosso do Sul - UFMS;",s("br",{}),"🎓 Mestrado em Ciências da Computação na Universidade Federal de Mato Grosso do Sul - UFMS;",s("br",{}),s("br",{}),"💡 Meus interesses estão em Back-end, Data Science e Front-end;",s("br",{}),s("br",{}),"🚀 AWS Certified Cloud Practitioner",s("br",{}),"🚀 AWS Certified Solutions Architect",s("br",{}),s("br",{}),"🚀 Bom sendo 1% melhor a cada dia trabalhado temos uma melhora de 1,01^252 (dias úteis) = 12,27x melhor dentro de um ano útil! Então busco sempre estar em evolução! Novas tecnologias fazem parte do aprendizado!"]})]})]})}const ya="/portifolio/assets/dailysCodes-ekMFuP32.svg",va="/portifolio/assets/otherStacks-Cna_pgeA.svg",ba=h.section`
    display: flex;
    flex-direction: column;
    justify-content: flex;
    width: 100%;
    height: 600px;
`,wa=h.div`
    margin-left: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 210px;
    height: 35px;
    background-color: ${e=>e.theme["secundary-blue-10"]};
`,xa=h.div`
    font-weight: 700;
    width: 600px;
    font-size: 36px; // Change font size to 24px
    color: ${e=>e.theme.white};
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 30px;
`,Mn=h.div`
    font-weight: 400;
    font-size: 24px; // Change font size to 24px
    color: ${e=>e.theme["white-50"]};
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 600px;
`,Nn=h.div`
    display: flex;
    width: 100%;
    height: 100%;
    text-align: center;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;function Ca(){return s(ba,{id:"skills",children:[s(wa,{children:"🧑‍💻 Skills · Experiences"}),s(xa,{children:"Tecnologies and Stacks"}),s(Mn,{children:"Stacks that I use on a daily basis"}),s(Nn,{children:s("img",{src:ya,alt:""})}),s(Mn,{children:"Other Stacks I've worked with"}),s(Nn,{children:s("img",{src:va,alt:""})})]})}const ka=[{title:"Software Engineer Cloud at IBM",description:"Development of applications in Java and Python, using TDD, DDD and BDD practices. Use of CI/CD. Use of Clean Code practices: SOLID, KISS, DRY and YAGNI. Agile methodologies: SCRUM, KANBAN. Software maintenance, creation of new functionalities. Bank migration. AWS cost reduction. Creation of unit and integrated tests to test some functions with jUnit and Mockito, use of mutant tests to improve code quality.",startDate:"Nov · 2022",endDate:"At the moment",languages:["Java","Python","Terraform","CloudFormation","Node","Typescript"],databases:["MySQL","DynamoDB","RDS","PostgreSQL"],projects:["Foreign Exchange","Opening Accounts","Process Automation"],learnings:["AWS Cloud Practitioner","Agility Learning","AWS Solutions Architect","TDD","DDD","BDD","Time management","Communication","Grownth Mindset"]},{title:"Full-Stack Java at EVOP",description:"At EVOP, I joined as an Intern, where I was able to work on monolithic software in Java and Angular. In the beginning, the entire system was generated on a local server, however, due to hacker attacks we were forced to migrate to the cloud. And the AWS Cloud was chosen. As a challenge to be implemented, I was responsible for creating a microservice to act on the monolithic. The purpose of this microservice was to communicate with ASAAS, which was responsible for generating payment invoices for our users' customers. For the software to capture the status of the bills, I created a messaging system with Kafka and SQS, to update when there was a change in the bill's status (cancelled, paid, expired, among others...). Once hired, I was responsible for creating new features in the WEB part of the software, creating dashboards and report generators (PDF and EXCEL). My codes have always been well oriented to follow the clean code standard: SOLID, KISS, YAGNI, DRY.",startDate:"Jun · 2019",endDate:"Jul · 2021",languages:["Java","Angular","Typescript","Node","Python"],databases:["PostgreSQL","MongoDB"],projects:["ASAAS","Report Generator (PDF, EXCEL)","Dashboards","Microservices","Monolithic"],learnings:["Applications with messaging","Versioning with GitHub and GitLab","Software maintenance","Integration of microservices with monoliths"]},{title:"Full-Stack Java/Kotlin at EngeFour Jr.",description:"Aimed at developing mobile applications in Android Studio, with Java and Kotlin languages, using agile methodologies such as SCRUM, XP and KANBAN. I carried out studies on frameworks such as Angular and Spring boot, relational databases: MySQL, non-relational databases: MongoDB, DynamoDB.",startDate:"Set · 2016",endDate:"Ago · 2017",languages:["Java","Kotlin","PHP","Python"],databases:["MySQL","MongoDB","DynamoDB","PostgreSQL"],projects:["Managing sales","Room reservations","Menu RU-UFMS"],learnings:["Collection of requirements","Agile methodologies","IDEs","Android Studio","Object orientation"]}],Sa=[{title:"Teacher Computer Science at ESTÁCIO",description:"Ensinando alunos a desenvolverem aplicações em React Native e Computação em Nuvem",startDate:"Feb · 2024",endDate:"At the moment",languages:["Typescript","Python"],databases:["MySQL","DynamoDB","RDS","PostgreSQL"],projects:[],learnings:[]},{title:"Master's Degree in Computer Science at UFMS",description:"Desenvolvimento de algoritmo capaz de encontrar uma solução para o Problema de Roteamento Dinâmico de Veículos, tendo uma performance de mais de 15% entre os algoritmos comparados. Métrica definida a partir de uma linha de custo de gasolina por km/l e número de veículos utilizados.",startDate:"Mar · 2020",endDate:"Sep · 2022",languages:["Docker","Python","C++","Java","CPLEX","Gurobi"],databases:["PostgreSQL","MongoDB"],projects:["Dynamic Vehicle Routing Problem"],learnings:["Solving Problems"]},{title:"Graduation in Computer Engineering at UFMS",description:".",startDate:"Jan · 2015",endDate:"Dec · 2019",languages:["C","C++","Java","Python","Rust","Typescript","Javascript","HTML","CSS","PHP","Shell Script"],databases:["MySQL","MongoDB","DynamoDB","PostgreSQL"],projects:["Relig","Design of Controllers for Static Power Converters"],learnings:[]}],$a=h.section`
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
`,Pa=h.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    width: 300px;
    font-size: xx-large;
    color: ${e=>e.theme.white};
`,zt=h.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 300px;
    border-radius: 10px;
`,Da=h.div`
    margin-top: 50px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > ${zt} {
        margin: 0 10px; // Add margin to create spacing between Journal components
    }
`,Rn=h.div`
    display: flex;
    align-items: center;
    justify-content: center; // Adicionado para centralizar o componente
    font-weight: 700;
    width: 300px;
    font-size: x-large;
    color: ${e=>e.theme.white};
`,Tn=h.div`
    
    color: ${e=>e.theme["white-50"]};
`,Ln=h.div`
    gap: 20px;
    height: auto;
`;function z(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function $t(e,t){const n=z(e),r=z(t),o=n.getTime()-r.getTime();return o<0?-1:o>0?1:o}function Ea(e,t){const n=z(e),r=z(t),o=n.getFullYear()-r.getFullYear(),i=n.getMonth()-r.getMonth();return o*12+i}function Ia(e){const t=z(e);return t.setHours(23,59,59,999),t}function Ma(e){const t=z(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function Na(e){const t=z(e);return+Ia(t)==+Ma(t)}function Ra(e,t){const n=z(e),r=z(t),o=$t(n,r),i=Math.abs(Ea(n,r));let a;if(i<1)a=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-o*i);let l=$t(n,r)===-o;Na(z(e))&&i===1&&$t(e,r)===1&&(l=!1),a=o*(i-Number(l))}return a===0?0:a}const Ta=h.section`
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
`,La=h.div`
    display: flex;
    font-weight: 400;
    font-size: medium;
    color: ${e=>e.theme["white-50"]};
`,ja=h.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`,Oa=h.div`
    display: flex;
    font-weight: 700;
    font-size: medium;
    color: ${e=>e.theme["secundary-blue"]};
`,Ha=h.div`
    display: flex;
    font-weight: 400;
    font-size: medium;
    color: ${e=>e.theme["secundary-blue-50"]};
`,Je=h.div`
    display: flex;  
    flex-wrap: wrap;
    gap: 5px; /* Reduce the gap value */
`,Ye=h.div`
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
`;function jn(e){const[t,n]=_e(!1),r=new Date(e.startDate),o=e.endDate==="At the moment"?new Date:new Date(e.endDate),i=Ra(o,r);return s(Ta,{onClick:()=>{n(!t)},className:t?"expanded":"collapsed",children:[s(Ee,{children:e.title}),t?s(U,{children:[s(La,{children:e.description}),s(Ee,{children:"Languages"}),s(Je,{children:e.languages.map((l,u)=>s(Ye,{children:l},u))}),s(Ee,{children:"Databases"}),s(Je,{children:e.databases.map((l,u)=>s(Ye,{children:l},u))}),s(Ee,{children:"Projects"}),s(Je,{children:e.projects.map((l,u)=>s(Ye,{children:l},u))}),s(Ee,{children:"Learnings"}),s(Je,{children:e.learnings.map((l,u)=>s(Ye,{children:l},u))})]}):"Explore more...",s(ja,{children:[s(Oa,{children:i>=12?Math.floor(i/12)+" Year"+(Math.floor(i/12)>1?"s ":" ")+(i%12===0?"":"and "+i%12+" Month"+(i%12!=1?"s":"")):i+" Months"}),s(Ha,{children:[e.startDate," - ",e.endDate]})]})]})}function Ba(){const[e,t]=_e([]),[n,r]=_e([]);if(je(()=>t(ka),[]),je(()=>r(Sa),[]),e.length===0)return s("div",{children:"Loading..."});if(n.length===0)return s("div",{children:"Loading..."});const o=e.map(a=>s(jn,{title:a.title,description:a.description,startDate:a.startDate,endDate:a.endDate,languages:a.languages,databases:a.databases,projects:a.projects,learnings:a.learnings})),i=n.map(a=>s(jn,{title:a.title,description:a.description,startDate:a.startDate,endDate:a.endDate,languages:a.languages,databases:a.databases,projects:a.projects,learnings:a.learnings}));return s($a,{id:"career",children:[s(Aa,{children:"💼 Career"}),s(Pa,{children:"My journey so far"}),s(Da,{children:[s(zt,{children:[s(Rn,{children:"Professional field"}),s(Tn,{children:"2016 · At the moment"}),s(Ln,{children:o})]}),s(zt,{children:[s(Rn,{children:"Academic"}),s(Tn,{children:"2012 · At the moment"}),s(Ln,{children:i})]})]})]})}const Fa="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M32.8594%205.60823L3.73437%2013.8114C3.48644%2013.8791%203.26544%2014.0217%203.10146%2014.2196C2.93748%2014.4175%202.8385%2014.6612%202.81801%2014.9174C2.79751%2015.1736%202.85649%2015.4299%202.98692%2015.6514C3.11734%2015.8729%203.31287%2016.0488%203.54687%2016.1551L16.9219%2022.4832C17.1839%2022.6046%2017.3943%2022.815%2017.5156%2023.077L23.8437%2036.452C23.9501%2036.686%2024.126%2036.8815%2024.3474%2037.0119C24.5689%2037.1424%2024.8252%2037.2013%2025.0814%2037.1808C25.3376%2037.1603%2025.5813%2037.0614%2025.7792%2036.8974C25.9771%2036.7334%2026.1197%2036.5124%2026.1875%2036.2645L34.3906%207.13948C34.4528%206.92694%2034.4566%206.7016%2034.4017%206.48707C34.3469%206.27253%2034.2353%206.07671%2034.0787%205.92013C33.9221%205.76355%2033.7263%205.65198%2033.5118%205.5971C33.2973%205.54222%2033.0719%205.54607%2032.8594%205.60823V5.60823Z'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.3281%2022.6709L24.3906%2015.6084'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",za="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27%2022.999V4.99902H9'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M23%208.99902H5V26.999H23V8.99902Z'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Wa="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%2026.999V4.99902'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7%2013.999L16%204.99902L25%2013.999'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Ua=h.section`
    display: flex;
    margin-top: 30px;
    gap: 50px;
    padding: 30px;
    align-items: center;
    flex-direction: column;
    border: 3px solid ${e=>e.theme["secundary-blue-10"]};
`,Va=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    background-color: ${e=>e.theme["secundary-blue-10"]};
`,Ga=h.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    width: 100%;
    font-size: 64px;
    color: ${e=>e.theme.white};
`,Ja=h.button`
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
`,Ya=h.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    font-size: 16px;
    font-weight: 700;
    margin-left: 10px;
    color: ${e=>e.theme["secundary-blue-50"]};
    text-align: center;
`,Za=h.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    gap: 150px;
`,qa=h.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    gap: 15px;
`,Qa=h.input`
    margin-left: 5px;
    font-size: 20px;
    color: ${e=>e.theme["white-50"]};
    font-weight: 400;
    background-color: ${e=>e.theme["background-blue"]};
    border: none; // Remove the border
    user-select: none; // Prevent selection with mouse
`,Ka=h.div`
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
`;function es(){const e=Qn(null),t=()=>{e.current&&(e.current.select(),document.execCommand("copy"))};return s(Ua,{children:[s(Va,{children:"📬 Contact"}),s(Ga,{children:"Let's work together?"}),s(Za,{children:[s("a",{href:"https://api.whatsapp.com/send?phone=55067992027463",target:"_blank",rel:"noopener noreferrer",children:s(Ja,{children:[s("img",{src:Pr,alt:""}),s(Ya,{children:"Whatsapp"})]})}),s(qa,{children:[s("img",{src:Fa,alt:""}),s(Qa,{ref:e,type:"text",value:"wilton.code@gmail.com",readOnly:!0}),s("img",{src:za,onClick:t,style:{cursor:"pointer"}})]})]}),s("a",{href:"#home",children:s(Ka,{children:[s(Xa,{children:"Back to top"}),s("img",{src:Wa})]})})]})}const ts=h.section`
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
`,On=h.div`
    margin-right: 15px;
`;function os(){return s(ts,{children:[s(ns,{children:"Copyright © Wilton Costa · 2024"}),s(rs,{children:[s("a",{href:"https://www.linkedin.com/in/wilton-software-engineer/",target:"_blank",rel:"noreferrer",children:s(On,{children:s("img",{src:Dr,alt:""})})}),s("a",{href:"https://www.github.com/wiltoon",target:"_blank",rel:"noreferrer",children:s(On,{children:s("img",{src:Er,alt:""})})})]})]})}function is(){return s("div",{children:[s(zi,{}),s(ra,{}),s(ga,{}),s(ua,{}),s(Ca,{}),s(Ba,{}),s(es,{}),s(os,{})]})}function as(){return s(Ii,{theme:Ti,children:[s(Li,{}),s(is,{})]})}pe(s(as,{}),document.getElementById("app"));
