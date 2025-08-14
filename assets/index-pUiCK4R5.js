var bu=Object.defineProperty;var vu=(e,t,n)=>t in e?bu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var at=(e,t,n)=>(vu(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();var un,D,za,Xe,fo,Ha,Bi,Ua,Qt={},Ya=[],xu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Zn=Array.isArray;function De(e,t){for(var n in t)e[n]=t[n];return e}function Ga(e){var t=e.parentNode;t&&t.removeChild(e)}function xe(e,t,n){var i,r,o,s={};for(o in t)o=="key"?i=t[o]:o=="ref"?r=t[o]:s[o]=t[o];if(arguments.length>2&&(s.children=arguments.length>3?un.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)s[o]===void 0&&(s[o]=e.defaultProps[o]);return Ht(e,s,i,r,null)}function Ht(e,t,n,i,r){var o={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++za,__i:-1,__u:0};return r==null&&D.vnode!=null&&D.vnode(o),o}function wu(){return{current:null}}function Z(e){return e.children}function be(e,t){this.props=e,this.context=t}function yt(e,t){if(t==null)return e.__?yt(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?yt(e):null}function Ka(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ka(e)}}function Ni(e){(!e.__d&&(e.__d=!0)&&Xe.push(e)&&!zn.__r++||fo!==D.debounceRendering)&&((fo=D.debounceRendering)||Ha)(zn)}function zn(){var e,t,n,i,r,o,s,a,c;for(Xe.sort(Bi);e=Xe.shift();)e.__d&&(t=Xe.length,i=void 0,o=(r=(n=e).__v).__e,a=[],c=[],(s=n.__P)&&((i=De({},r)).__v=r.__v+1,D.vnode&&D.vnode(i),Pr(s,i,r,n.__n,s.ownerSVGElement!==void 0,32&r.__u?[o]:null,a,o??yt(r),!!(32&r.__u),c),i.__.__k[i.__i]=i,Ja(a,i,c),i.__e!=o&&Ka(i)),Xe.length>t&&Xe.sort(Bi));zn.__r=0}function qa(e,t,n,i,r,o,s,a,c,u,d){var l,f,m,p,g,w=i&&i.__k||Ya,b=t.length;for(n.__d=c,_u(n,t,w),c=n.__d,l=0;l<b;l++)(m=n.__k[l])!=null&&typeof m!="boolean"&&typeof m!="function"&&(f=m.__i===-1?Qt:w[m.__i]||Qt,m.__i=l,Pr(e,m,f,r,o,s,a,c,u,d),p=m.__e,m.ref&&f.ref!=m.ref&&(f.ref&&kr(f.ref,null,m),d.push(m.ref,m.__c||p,m)),g==null&&p!=null&&(g=p),65536&m.__u||f.__k===m.__k?c=Xa(m,c,e):typeof m.type=="function"&&m.__d!==void 0?c=m.__d:p&&(c=p.nextSibling),m.__d=void 0,m.__u&=-196609);n.__d=c,n.__e=g}function _u(e,t,n){var i,r,o,s,a,c=t.length,u=n.length,d=u,l=0;for(e.__k=[],i=0;i<c;i++)(r=e.__k[i]=(r=t[i])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?Ht(null,r,null,null,r):Zn(r)?Ht(Z,{children:r},null,null,null):r.constructor===void 0&&r.__b>0?Ht(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=e,r.__b=e.__b+1,a=Su(r,n,s=i+l,d),r.__i=a,o=null,a!==-1&&(d--,(o=n[a])&&(o.__u|=131072)),o==null||o.__v===null?(a==-1&&l--,typeof r.type!="function"&&(r.__u|=65536)):a!==s&&(a===s+1?l++:a>s?d>c-s?l+=a-s:l--:l=a<s&&a==s-1?a-s:0,a!==i+l&&(r.__u|=65536))):(o=n[i])&&o.key==null&&o.__e&&(o.__e==e.__d&&(e.__d=yt(o)),Wi(o,o,!1),n[i]=null,d--);if(d)for(i=0;i<u;i++)(o=n[i])!=null&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=yt(o)),Wi(o,o))}function Xa(e,t,n){var i,r;if(typeof e.type=="function"){for(i=e.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=e,t=Xa(i[r],t,n));return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function $e(e,t){return t=t||[],e==null||typeof e=="boolean"||(Zn(e)?e.some(function(n){$e(n,t)}):t.push(e)),t}function Su(e,t,n,i){var r=e.key,o=e.type,s=n-1,a=n+1,c=t[n];if(c===null||c&&r==c.key&&o===c.type)return n;if(i>(c!=null&&!(131072&c.__u)?1:0))for(;s>=0||a<t.length;){if(s>=0){if((c=t[s])&&!(131072&c.__u)&&r==c.key&&o===c.type)return s;s--}if(a<t.length){if((c=t[a])&&!(131072&c.__u)&&r==c.key&&o===c.type)return a;a++}}return-1}function mo(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||xu.test(t)?n:n+"px"}function xn(e,t,n,i,r){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)n&&t in n||mo(e.style,t,"");if(n)for(t in n)i&&n[t]===i[t]||mo(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?i?n.u=i.u:(n.u=Date.now(),e.addEventListener(t,o?go:po,o)):e.removeEventListener(t,o?go:po,o);else{if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function po(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(D.event?D.event(e):e)}function go(e){return this.l[e.type+!0](D.event?D.event(e):e)}function Pr(e,t,n,i,r,o,s,a,c,u){var d,l,f,m,p,g,w,b,x,v,C,P,T,k,A,E=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),o=[a=t.__e=n.__e]),(d=D.__b)&&d(t);e:if(typeof E=="function")try{if(b=t.props,x=(d=E.contextType)&&i[d.__c],v=d?x?x.props.value:d.__:i,n.__c?w=(l=t.__c=n.__c).__=l.__E:("prototype"in E&&E.prototype.render?t.__c=l=new E(b,v):(t.__c=l=new be(b,v),l.constructor=E,l.render=ku),x&&x.sub(l),l.props=b,l.state||(l.state={}),l.context=v,l.__n=i,f=l.__d=!0,l.__h=[],l._sb=[]),l.__s==null&&(l.__s=l.state),E.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=De({},l.__s)),De(l.__s,E.getDerivedStateFromProps(b,l.__s))),m=l.props,p=l.state,l.__v=t,f)E.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(E.getDerivedStateFromProps==null&&b!==m&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(b,v),!l.__e&&(l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(b,l.__s,v)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(l.props=b,l.state=l.__s,l.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(z){z&&(z.__=t)}),C=0;C<l._sb.length;C++)l.__h.push(l._sb[C]);l._sb=[],l.__h.length&&s.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(b,l.__s,v),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(m,p,g)})}if(l.context=v,l.props=b,l.__P=e,l.__e=!1,P=D.__r,T=0,"prototype"in E&&E.prototype.render){for(l.state=l.__s,l.__d=!1,P&&P(t),d=l.render(l.props,l.state,l.context),k=0;k<l._sb.length;k++)l.__h.push(l._sb[k]);l._sb=[]}else do l.__d=!1,P&&P(t),d=l.render(l.props,l.state,l.context),l.state=l.__s;while(l.__d&&++T<25);l.state=l.__s,l.getChildContext!=null&&(i=De(De({},i),l.getChildContext())),f||l.getSnapshotBeforeUpdate==null||(g=l.getSnapshotBeforeUpdate(m,p)),qa(e,Zn(A=d!=null&&d.type===Z&&d.key==null?d.props.children:d)?A:[A],t,n,i,r,o,s,a,c,u),l.base=t.__e,t.__u&=-161,l.__h.length&&s.push(l),w&&(l.__E=l.__=null)}catch(z){t.__v=null,c||o!=null?(t.__e=a,t.__u|=c?160:32,o[o.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),D.__e(z,t,n)}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Pu(n.__e,t,n,i,r,o,s,c,u);(d=D.diffed)&&d(t)}function Ja(e,t,n){t.__d=void 0;for(var i=0;i<n.length;i++)kr(n[i],n[++i],n[++i]);D.__c&&D.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(o){o.call(r)})}catch(o){D.__e(o,r.__v)}})}function Pu(e,t,n,i,r,o,s,a,c){var u,d,l,f,m,p,g,w=n.props,b=t.props,x=t.type;if(x==="svg"&&(r=!0),o!=null){for(u=0;u<o.length;u++)if((m=o[u])&&"setAttribute"in m==!!x&&(x?m.localName===x:m.nodeType===3)){e=m,o[u]=null;break}}if(e==null){if(x===null)return document.createTextNode(b);e=r?document.createElementNS("http://www.w3.org/2000/svg",x):document.createElement(x,b.is&&b),o=null,a=!1}if(x===null)w===b||a&&e.data===b||(e.data=b);else{if(o=o&&un.call(e.childNodes),w=n.props||Qt,!a&&o!=null)for(w={},u=0;u<e.attributes.length;u++)w[(m=e.attributes[u]).name]=m.value;for(u in w)m=w[u],u=="children"||(u=="dangerouslySetInnerHTML"?l=m:u==="key"||u in b||xn(e,u,null,m,r));for(u in b)m=b[u],u=="children"?f=m:u=="dangerouslySetInnerHTML"?d=m:u=="value"?p=m:u=="checked"?g=m:u==="key"||a&&typeof m!="function"||w[u]===m||xn(e,u,m,w[u],r);if(d)a||l&&(d.__html===l.__html||d.__html===e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(l&&(e.innerHTML=""),qa(e,Zn(f)?f:[f],t,n,i,r&&x!=="foreignObject",o,s,o?o[0]:n.__k&&yt(n,0),a,c),o!=null)for(u=o.length;u--;)o[u]!=null&&Ga(o[u]);a||(u="value",p!==void 0&&(p!==e[u]||x==="progress"&&!p||x==="option"&&p!==w[u])&&xn(e,u,p,w[u],!1),u="checked",g!==void 0&&g!==e[u]&&xn(e,u,g,w[u],!1))}return e}function kr(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(i){D.__e(i,n)}}function Wi(e,t,n){var i,r;if(D.unmount&&D.unmount(e),(i=e.ref)&&(i.current&&i.current!==e.__e||kr(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(o){D.__e(o,t)}i.base=i.__P=null,e.__c=void 0}if(i=e.__k)for(r=0;r<i.length;r++)i[r]&&Wi(i[r],t,n||typeof e.type!="function");n||e.__e==null||Ga(e.__e),e.__=e.__e=e.__d=void 0}function ku(e,t,n){return this.constructor(e,n)}function bt(e,t,n){var i,r,o,s;D.__&&D.__(e,t),r=(i=typeof n=="function")?null:n&&n.__k||t.__k,o=[],s=[],Pr(t,e=(!i&&n||t).__k=xe(Z,null,[e]),r||Qt,Qt,t.ownerSVGElement!==void 0,!i&&n?[n]:r?null:t.firstChild?un.call(t.childNodes):null,o,!i&&n?n:r?r.__e:t.firstChild,i,s),Ja(o,e,s)}function Qa(e,t){bt(e,t,Qa)}function Cu(e,t,n){var i,r,o,s,a=De({},e.props);for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)o=="key"?i=t[o]:o=="ref"?r=t[o]:a[o]=t[o]===void 0&&s!==void 0?s[o]:t[o];return arguments.length>2&&(a.children=arguments.length>3?un.call(arguments,2):n),Ht(e.type,a,i||e.key,r||e.ref,null)}function We(e,t){var n={__c:t="__cC"+Ua++,__:e,Consumer:function(i,r){return i.children(r)},Provider:function(i){var r,o;return this.getChildContext||(r=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&r.some(function(a){a.__e=!0,Ni(a)})},this.sub=function(s){r.push(s);var a=s.componentWillUnmount;s.componentWillUnmount=function(){r.splice(r.indexOf(s),1),a&&a.call(s)}}),i.children}};return n.Provider.__=n.Consumer.contextType=n}un=Ya.slice,D={__e:function(e,t,n,i){for(var r,o,s;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(e)),s=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,i||{}),s=r.__d),s)return r.__E=r}catch(a){e=a}throw e}},za=0,be.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=De({},this.state),typeof e=="function"&&(e=e(De({},n),this.props)),e&&De(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Ni(this))},be.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Ni(this))},be.prototype.render=Z,Xe=[],Ha=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Bi=function(e,t){return e.__v.__b-t.__v.__b},zn.__r=0,Ua=0;var Fe,F,fi,yo,vt=0,Za=[],An=[],bo=D.__b,vo=D.__r,xo=D.diffed,wo=D.__c,_o=D.unmount;function Tt(e,t){D.__h&&D.__h(F,e,vt||t),vt=0;var n=F.__H||(F.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:An}),n.__[e]}function Y(e){return vt=1,ec(nc,e)}function ec(e,t,n){var i=Tt(Fe++,2);if(i.t=e,!i.__c&&(i.__=[n?n(t):nc(void 0,t),function(a){var c=i.__N?i.__N[0]:i.__[0],u=i.t(c,a);c!==u&&(i.__N=[u,i.__[1]],i.__c.setState({}))}],i.__c=F,!F.u)){var r=function(a,c,u){if(!i.__c.__H)return!0;var d=i.__c.__H.__.filter(function(f){return f.__c});if(d.every(function(f){return!f.__N}))return!o||o.call(this,a,c,u);var l=!1;return d.forEach(function(f){if(f.__N){var m=f.__[0];f.__=f.__N,f.__N=void 0,m!==f.__[0]&&(l=!0)}}),!(!l&&i.__c.props===a)&&(!o||o.call(this,a,c,u))};F.u=!0;var o=F.shouldComponentUpdate,s=F.componentWillUpdate;F.componentWillUpdate=function(a,c,u){if(this.__e){var d=o;o=void 0,r(a,c,u),o=d}s&&s.call(this,a,c,u)},F.shouldComponentUpdate=r}return i.__N||i.__}function oe(e,t){var n=Tt(Fe++,3);!D.__s&&Cr(n.__H,t)&&(n.__=e,n.i=t,F.__H.__h.push(n))}function dn(e,t){var n=Tt(Fe++,4);!D.__s&&Cr(n.__H,t)&&(n.__=e,n.i=t,F.__h.push(n))}function he(e){return vt=5,ze(function(){return{current:e}},[])}function Tu(e,t,n){vt=6,dn(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function ze(e,t){var n=Tt(Fe++,7);return Cr(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function ei(e,t){return vt=8,ze(function(){return e},t)}function Q(e){var t=F.context[e.__c],n=Tt(Fe++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(F)),t.props.value):e.__}function Du(e,t){D.useDebugValue&&D.useDebugValue(t?t(e):e)}function tc(){var e=Tt(Fe++,11);if(!e.__){for(var t=F.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function $u(){for(var e;e=Za.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Mn),e.__H.__h.forEach(zi),e.__H.__h=[]}catch(t){e.__H.__h=[],D.__e(t,e.__v)}}D.__b=function(e){F=null,bo&&bo(e)},D.__r=function(e){vo&&vo(e),Fe=0;var t=(F=e.__c).__H;t&&(fi===F?(t.__h=[],F.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=An,n.__N=n.i=void 0})):(t.__h.forEach(Mn),t.__h.forEach(zi),t.__h=[],Fe=0)),fi=F},D.diffed=function(e){xo&&xo(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Za.push(t)!==1&&yo===D.requestAnimationFrame||((yo=D.requestAnimationFrame)||Au)($u)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==An&&(n.__=n.__V),n.i=void 0,n.__V=An})),fi=F=null},D.__c=function(e,t){t.some(function(n){try{n.__h.forEach(Mn),n.__h=n.__h.filter(function(i){return!i.__||zi(i)})}catch(i){t.some(function(r){r.__h&&(r.__h=[])}),t=[],D.__e(i,n.__v)}}),wo&&wo(e,t)},D.unmount=function(e){_o&&_o(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(i){try{Mn(i)}catch(r){t=r}}),n.__H=void 0,t&&D.__e(t,n.__v))};var So=typeof requestAnimationFrame=="function";function Au(e){var t,n=function(){clearTimeout(i),So&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(n,100);So&&(t=requestAnimationFrame(n))}function Mn(e){var t=F,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),F=t}function zi(e){var t=F;e.__c=e.__(),F=t}function Cr(e,t){return!e||e.length!==t.length||t.some(function(n,i){return n!==e[i]})}function nc(e,t){return typeof t=="function"?t(e):t}var ee=function(){return ee=Object.assign||function(t){for(var n,i=1,r=arguments.length;i<r;i++){n=arguments[i];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ee.apply(this,arguments)};function Zt(e,t,n){if(n||arguments.length===2)for(var i=0,r=t.length,o;i<r;i++)(o||!(i in t))&&(o||(o=Array.prototype.slice.call(t,0,i)),o[i]=t[i]);return e.concat(o||Array.prototype.slice.call(t))}function ic(e,t){for(var n in t)e[n]=t[n];return e}function Hi(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var i in t)if(i!=="__source"&&e[i]!==t[i])return!0;return!1}function Ui(e){this.props=e}function Mu(e,t){function n(r){var o=this.props.ref,s=o==r.ref;return!s&&o&&(o.call?o(null):o.current=null),t?!t(this.props,r)||!s:Hi(this.props,r)}function i(r){return this.shouldComponentUpdate=n,xe(e,r)}return i.displayName="Memo("+(e.displayName||e.name)+")",i.prototype.isReactComponent=!0,i.__f=!0,i}(Ui.prototype=new be).isPureReactComponent=!0,Ui.prototype.shouldComponentUpdate=function(e,t){return Hi(this.props,e)||Hi(this.state,t)};var Po=D.__b;D.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Po&&Po(e)};var Eu=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function rc(e){function t(n){var i=ic({},n);return delete i.ref,e(i,n.ref||null)}return t.$$typeof=Eu,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var ko=function(e,t){return e==null?null:$e($e(e).map(t))},Ru={map:ko,forEach:ko,count:function(e){return e?$e(e).length:0},only:function(e){var t=$e(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:$e},Lu=D.__e;D.__e=function(e,t,n,i){if(e.then){for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t)}Lu(e,t,n,i)};var Co=D.unmount;function oc(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(i){typeof i.__c=="function"&&i.__c()}),e.__c.__H=null),(e=ic({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(i){return oc(i,t,n)})),e}function sc(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(i){return sc(i,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function En(){this.__u=0,this.t=null,this.__b=null}function ac(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Vu(e){var t,n,i;function r(o){if(t||(t=e()).then(function(s){n=s.default||s},function(s){i=s}),i)throw i;if(!n)throw t;return xe(n,o)}return r.displayName="Lazy",r.__f=!0,r}function Nt(){this.u=null,this.o=null}D.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Co&&Co(e)},(En.prototype=new be).__c=function(e,t){var n=t.__c,i=this;i.t==null&&(i.t=[]),i.t.push(n);var r=ac(i.__v),o=!1,s=function(){o||(o=!0,n.__R=null,r?r(a):a())};n.__R=s;var a=function(){if(!--i.__u){if(i.state.__a){var c=i.state.__a;i.__v.__k[0]=sc(c,c.__c.__P,c.__c.__O)}var u;for(i.setState({__a:i.__b=null});u=i.t.pop();)u.forceUpdate()}};i.__u++||32&t.__u||i.setState({__a:i.__b=i.__v.__k[0]}),e.then(s,s)},En.prototype.componentWillUnmount=function(){this.t=[]},En.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=oc(this.__b,n,i.__O=i.__P)}this.__b=null}var r=t.__a&&xe(Z,null,e.fallback);return r&&(r.__u&=-33),[xe(Z,null,t.__a?null:e.children),r]};var To=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function Iu(e){return this.getChildContext=function(){return e.context},e.children}function Ou(e){var t=this,n=e.i;t.componentWillUnmount=function(){bt(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(i){this.childNodes.push(i),t.i.appendChild(i)},insertBefore:function(i,r){this.childNodes.push(i),t.i.appendChild(i)},removeChild:function(i){this.childNodes.splice(this.childNodes.indexOf(i)>>>1,1),t.i.removeChild(i)}}),bt(xe(Iu,{context:t.context},e.__v),t.l)}function ju(e,t){var n=xe(Ou,{__v:e,i:t});return n.containerInfo=t,n}(Nt.prototype=new be).__a=function(e){var t=this,n=ac(t.__v),i=t.o.get(e);return i[0]++,function(r){var o=function(){t.props.revealOrder?(i.push(r),To(t,e,i)):r()};n?n(o):o()}},Nt.prototype.render=function(e){this.u=null,this.o=new Map;var t=$e(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Nt.prototype.componentDidUpdate=Nt.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){To(e,n,t)})};var cc=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Fu=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Bu=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Nu=/[A-Z0-9]/g,Wu=typeof document<"u",zu=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function Hu(e,t,n){return t.__k==null&&(t.textContent=""),bt(e,t),typeof n=="function"&&n(),e?e.__c:null}function Uu(e,t,n){return Qa(e,t),typeof n=="function"&&n(),e?e.__c:null}be.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(be.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Do=D.event;function Yu(){}function Gu(){return this.cancelBubble}function Ku(){return this.defaultPrevented}D.event=function(e){return Do&&(e=Do(e)),e.persist=Yu,e.isPropagationStopped=Gu,e.isDefaultPrevented=Ku,e.nativeEvent=e};var Tr,qu={enumerable:!1,configurable:!0,get:function(){return this.class}},$o=D.vnode;D.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,i=t.type,r={};for(var o in n){var s=n[o];if(!(o==="value"&&"defaultValue"in n&&s==null||Wu&&o==="children"&&i==="noscript"||o==="class"||o==="className")){var a=o.toLowerCase();o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&s===!0?s="":a==="ondoubleclick"?o="ondblclick":a!=="onchange"||i!=="input"&&i!=="textarea"||zu(n.type)?a==="onfocus"?o="onfocusin":a==="onblur"?o="onfocusout":Bu.test(o)?o=a:i.indexOf("-")===-1&&Fu.test(o)?o=o.replace(Nu,"-$&").toLowerCase():s===null&&(s=void 0):a=o="oninput",a==="oninput"&&r[o=a]&&(o="oninputCapture"),r[o]=s}}i=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=$e(n.children).forEach(function(c){c.props.selected=r.value.indexOf(c.props.value)!=-1})),i=="select"&&r.defaultValue!=null&&(r.value=$e(n.children).forEach(function(c){c.props.selected=r.multiple?r.defaultValue.indexOf(c.props.value)!=-1:r.defaultValue==c.props.value})),n.class&&!n.className?(r.class=n.class,Object.defineProperty(r,"className",qu)):(n.className&&!n.class||n.class&&n.className)&&(r.class=r.className=n.className),t.props=r}(e),e.$$typeof=cc,$o&&$o(e)};var Ao=D.__r;D.__r=function(e){Ao&&Ao(e),Tr=e.__c};var Mo=D.diffed;D.diffed=function(e){Mo&&Mo(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),Tr=null};var Xu={ReactCurrentDispatcher:{current:{readContext:function(e){return Tr.__n[e.__c].props.value}}}};function Ju(e){return xe.bind(null,e)}function ti(e){return!!e&&e.$$typeof===cc}function Qu(e){return ti(e)&&e.type===Z}function Zu(e){return ti(e)?Cu.apply(null,arguments):e}function ed(e){return!!e.__k&&(bt(null,e),!0)}function td(e){return e&&(e.base||e.nodeType===1&&e)||null}var nd=function(e,t){return e(t)},id=function(e,t){return e(t)},rd=Z;function lc(e){e()}function od(e){return e}function sd(){return[!1,lc]}var uc=dn,ad=ti;function cd(e,t){var n=t(),i=Y({h:{__:n,v:t}}),r=i[0].h,o=i[1];return dn(function(){r.__=n,r.v=t,mi(r)&&o({h:r})},[e,n,t]),oe(function(){return mi(r)&&o({h:r}),e(function(){mi(r)&&o({h:r})})},[e]),n}function mi(e){var t,n,i=e.v,r=e.__;try{var o=i();return!((t=r)===(n=o)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}var _e={useState:Y,useId:tc,useReducer:ec,useEffect:oe,useLayoutEffect:dn,useInsertionEffect:uc,useTransition:sd,useDeferredValue:od,useSyncExternalStore:cd,startTransition:lc,useRef:he,useImperativeHandle:Tu,useMemo:ze,useCallback:ei,useContext:Q,useDebugValue:Du,version:"17.0.2",Children:Ru,render:Hu,hydrate:Uu,unmountComponentAtNode:ed,createPortal:ju,createElement:xe,createContext:We,createFactory:Ju,cloneElement:Zu,createRef:wu,Fragment:Z,isValidElement:ti,isElement:ad,isFragment:Qu,findDOMNode:td,Component:be,PureComponent:Ui,memo:Mu,forwardRef:rc,flushSync:id,unstable_batchedUpdates:nd,StrictMode:rd,Suspense:En,SuspenseList:Nt,lazy:Vu,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Xu},j="-ms-",Ut="-moz-",L="-webkit-",dc="comm",ni="rule",Dr="decl",ld="@import",hc="@keyframes",ud="@layer",dd=Math.abs,$r=String.fromCharCode,Yi=Object.assign;function hd(e,t){return X(e,0)^45?(((t<<2^X(e,0))<<2^X(e,1))<<2^X(e,2))<<2^X(e,3):0}function fc(e){return e.trim()}function Te(e,t){return(e=t.exec(e))?e[0]:e}function R(e,t,n){return e.replace(t,n)}function Rn(e,t){return e.indexOf(t)}function X(e,t){return e.charCodeAt(t)|0}function xt(e,t,n){return e.slice(t,n)}function we(e){return e.length}function mc(e){return e.length}function Wt(e,t){return t.push(e),e}function fd(e,t){return e.map(t).join("")}function Eo(e,t){return e.filter(function(n){return!Te(n,t)})}var ii=1,wt=1,pc=0,me=0,q=0,Dt="";function ri(e,t,n,i,r,o,s,a){return{value:e,root:t,parent:n,type:i,props:r,children:o,line:ii,column:wt,length:s,return:"",siblings:a}}function Ie(e,t){return Yi(ri("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function ct(e){for(;e.root;)e=Ie(e.root,{children:[e]});Wt(e,e.siblings)}function md(){return q}function pd(){return q=me>0?X(Dt,--me):0,wt--,q===10&&(wt=1,ii--),q}function ve(){return q=me<pc?X(Dt,me++):0,wt++,q===10&&(wt=1,ii++),q}function et(){return X(Dt,me)}function Ln(){return me}function oi(e,t){return xt(Dt,e,t)}function Gi(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gd(e){return ii=wt=1,pc=we(Dt=e),me=0,[]}function yd(e){return Dt="",e}function pi(e){return fc(oi(me-1,Ki(e===91?e+2:e===40?e+1:e)))}function bd(e){for(;(q=et())&&q<33;)ve();return Gi(e)>2||Gi(q)>3?"":" "}function vd(e,t){for(;--t&&ve()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return oi(e,Ln()+(t<6&&et()==32&&ve()==32))}function Ki(e){for(;ve();)switch(q){case e:return me;case 34:case 39:e!==34&&e!==39&&Ki(q);break;case 40:e===41&&Ki(e);break;case 92:ve();break}return me}function xd(e,t){for(;ve()&&e+q!==57;)if(e+q===84&&et()===47)break;return"/*"+oi(t,me-1)+"*"+$r(e===47?e:ve())}function wd(e){for(;!Gi(et());)ve();return oi(e,me)}function _d(e){return yd(Vn("",null,null,null,[""],e=gd(e),0,[0],e))}function Vn(e,t,n,i,r,o,s,a,c){for(var u=0,d=0,l=s,f=0,m=0,p=0,g=1,w=1,b=1,x=0,v="",C=r,P=o,T=i,k=v;w;)switch(p=x,x=ve()){case 40:if(p!=108&&X(k,l-1)==58){Rn(k+=R(pi(x),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:k+=pi(x);break;case 9:case 10:case 13:case 32:k+=bd(p);break;case 92:k+=vd(Ln()-1,7);continue;case 47:switch(et()){case 42:case 47:Wt(Sd(xd(ve(),Ln()),t,n,c),c);break;default:k+="/"}break;case 123*g:a[u++]=we(k)*b;case 125*g:case 59:case 0:switch(x){case 0:case 125:w=0;case 59+d:b==-1&&(k=R(k,/\f/g,"")),m>0&&we(k)-l&&Wt(m>32?Lo(k+";",i,n,l-1,c):Lo(R(k," ","")+";",i,n,l-2,c),c);break;case 59:k+=";";default:if(Wt(T=Ro(k,t,n,u,d,r,a,v,C=[],P=[],l,o),o),x===123)if(d===0)Vn(k,t,T,T,C,o,l,a,P);else switch(f===99&&X(k,3)===110?100:f){case 100:case 108:case 109:case 115:Vn(e,T,T,i&&Wt(Ro(e,T,T,0,0,r,a,v,r,C=[],l,P),P),r,P,l,a,i?C:P);break;default:Vn(k,T,T,T,[""],P,0,a,P)}}u=d=m=0,g=b=1,v=k="",l=s;break;case 58:l=1+we(k),m=p;default:if(g<1){if(x==123)--g;else if(x==125&&g++==0&&pd()==125)continue}switch(k+=$r(x),x*g){case 38:b=d>0?1:(k+="\f",-1);break;case 44:a[u++]=(we(k)-1)*b,b=1;break;case 64:et()===45&&(k+=pi(ve())),f=et(),d=l=we(v=k+=wd(Ln())),x++;break;case 45:p===45&&we(k)==2&&(g=0)}}return o}function Ro(e,t,n,i,r,o,s,a,c,u,d,l){for(var f=r-1,m=r===0?o:[""],p=mc(m),g=0,w=0,b=0;g<i;++g)for(var x=0,v=xt(e,f+1,f=dd(w=s[g])),C=e;x<p;++x)(C=fc(w>0?m[x]+" "+v:R(v,/&\f/g,m[x])))&&(c[b++]=C);return ri(e,t,n,r===0?ni:a,c,u,d,l)}function Sd(e,t,n,i){return ri(e,t,n,dc,$r(md()),xt(e,2,-2),0,i)}function Lo(e,t,n,i,r){return ri(e,t,n,Dr,xt(e,0,i),xt(e,i+1,-1),i,r)}function gc(e,t,n){switch(hd(e,t)){case 5103:return L+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return L+e+e;case 4789:return Ut+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return L+e+Ut+e+j+e+e;case 5936:switch(X(e,t+11)){case 114:return L+e+j+R(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return L+e+j+R(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return L+e+j+R(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return L+e+j+e+e;case 6165:return L+e+j+"flex-"+e+e;case 5187:return L+e+R(e,/(\w+).+(:[^]+)/,L+"box-$1$2"+j+"flex-$1$2")+e;case 5443:return L+e+j+"flex-item-"+R(e,/flex-|-self/g,"")+(Te(e,/flex-|baseline/)?"":j+"grid-row-"+R(e,/flex-|-self/g,""))+e;case 4675:return L+e+j+"flex-line-pack"+R(e,/align-content|flex-|-self/g,"")+e;case 5548:return L+e+j+R(e,"shrink","negative")+e;case 5292:return L+e+j+R(e,"basis","preferred-size")+e;case 6060:return L+"box-"+R(e,"-grow","")+L+e+j+R(e,"grow","positive")+e;case 4554:return L+R(e,/([^-])(transform)/g,"$1"+L+"$2")+e;case 6187:return R(R(R(e,/(zoom-|grab)/,L+"$1"),/(image-set)/,L+"$1"),e,"")+e;case 5495:case 3959:return R(e,/(image-set\([^]*)/,L+"$1$`$1");case 4968:return R(R(e,/(.+:)(flex-)?(.*)/,L+"box-pack:$3"+j+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+L+e+e;case 4200:if(!Te(e,/flex-|baseline/))return j+"grid-column-align"+xt(e,t)+e;break;case 2592:case 3360:return j+R(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(i,r){return t=r,Te(i.props,/grid-\w+-end/)})?~Rn(e+(n=n[t].value),"span")?e:j+R(e,"-start","")+e+j+"grid-row-span:"+(~Rn(n,"span")?Te(n,/\d+/):+Te(n,/\d+/)-+Te(e,/\d+/))+";":j+R(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(i){return Te(i.props,/grid-\w+-start/)})?e:j+R(R(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return R(e,/(.+)-inline(.+)/,L+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(we(e)-1-t>6)switch(X(e,t+1)){case 109:if(X(e,t+4)!==45)break;case 102:return R(e,/(.+:)(.+)-([^]+)/,"$1"+L+"$2-$3$1"+Ut+(X(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Rn(e,"stretch")?gc(R(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return R(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,o,s,a,c,u){return j+r+":"+o+u+(s?j+r+"-span:"+(a?c:+c-+o)+u:"")+e});case 4949:if(X(e,t+6)===121)return R(e,":",":"+L)+e;break;case 6444:switch(X(e,X(e,14)===45?18:11)){case 120:return R(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+L+(X(e,14)===45?"inline-":"")+"box$3$1"+L+"$2$3$1"+j+"$2box$3")+e;case 100:return R(e,":",":"+j)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return R(e,"scroll-","scroll-snap-")+e}return e}function Hn(e,t){for(var n="",i=0;i<e.length;i++)n+=t(e[i],i,e,t)||"";return n}function Pd(e,t,n,i){switch(e.type){case ud:if(e.children.length)break;case ld:case Dr:return e.return=e.return||e.value;case dc:return"";case hc:return e.return=e.value+"{"+Hn(e.children,i)+"}";case ni:if(!we(e.value=e.props.join(",")))return""}return we(n=Hn(e.children,i))?e.return=e.value+"{"+n+"}":""}function kd(e){var t=mc(e);return function(n,i,r,o){for(var s="",a=0;a<t;a++)s+=e[a](n,i,r,o)||"";return s}}function Cd(e){return function(t){t.root||(t=t.return)&&e(t)}}function Td(e,t,n,i){if(e.length>-1&&!e.return)switch(e.type){case Dr:e.return=gc(e.value,e.length,n);return;case hc:return Hn([Ie(e,{value:R(e.value,"@","@"+L)})],i);case ni:if(e.length)return fd(n=e.props,function(r){switch(Te(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ct(Ie(e,{props:[R(r,/:(read-\w+)/,":"+Ut+"$1")]})),ct(Ie(e,{props:[r]})),Yi(e,{props:Eo(n,i)});break;case"::placeholder":ct(Ie(e,{props:[R(r,/:(plac\w+)/,":"+L+"input-$1")]})),ct(Ie(e,{props:[R(r,/:(plac\w+)/,":"+Ut+"$1")]})),ct(Ie(e,{props:[R(r,/:(plac\w+)/,j+"input-$1")]})),ct(Ie(e,{props:[r]})),Yi(e,{props:Eo(n,i)});break}return""})}}var Dd={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},le={},_t=typeof process<"u"&&le!==void 0&&(le.REACT_APP_SC_ATTR||le.SC_ATTR)||"data-styled",Ar=typeof window<"u"&&"HTMLElement"in window,$d=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&le!==void 0&&le.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&le.REACT_APP_SC_DISABLE_SPEEDY!==""?le.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&le.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&le!==void 0&&le.SC_DISABLE_SPEEDY!==void 0&&le.SC_DISABLE_SPEEDY!==""&&le.SC_DISABLE_SPEEDY!=="false"&&le.SC_DISABLE_SPEEDY),Ad={},si=Object.freeze([]),St=Object.freeze({});function yc(e,t,n){return n===void 0&&(n=St),e.theme!==n.theme&&e.theme||t||n.theme}var bc=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Md=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ed=/(^-|-$)/g;function Vo(e){return e.replace(Md,"-").replace(Ed,"")}var Rd=/(a)(d)/gi,Io=function(e){return String.fromCharCode(e+(e>25?39:97))};function qi(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Io(t%52)+n;return(Io(t%52)+n).replace(Rd,"$1-$2")}var gi,ut=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},vc=function(e){return ut(5381,e)};function xc(e){return qi(vc(e)>>>0)}function Ld(e){return e.displayName||e.name||"Component"}function yi(e){return typeof e=="string"&&!0}var wc=typeof Symbol=="function"&&Symbol.for,_c=wc?Symbol.for("react.memo"):60115,Vd=wc?Symbol.for("react.forward_ref"):60112,Id={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Od={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Sc={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},jd=((gi={})[Vd]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},gi[_c]=Sc,gi);function Oo(e){return("type"in(t=e)&&t.type.$$typeof)===_c?Sc:"$$typeof"in e?jd[e.$$typeof]:Id;var t}var Fd=Object.defineProperty,Bd=Object.getOwnPropertyNames,jo=Object.getOwnPropertySymbols,Nd=Object.getOwnPropertyDescriptor,Wd=Object.getPrototypeOf,Fo=Object.prototype;function Pc(e,t,n){if(typeof t!="string"){if(Fo){var i=Wd(t);i&&i!==Fo&&Pc(e,i,n)}var r=Bd(t);jo&&(r=r.concat(jo(t)));for(var o=Oo(e),s=Oo(t),a=0;a<r.length;++a){var c=r[a];if(!(c in Od||n&&n[c]||s&&c in s||o&&c in o)){var u=Nd(t,c);try{Fd(e,c,u)}catch{}}}}return e}function Pt(e){return typeof e=="function"}function Mr(e){return typeof e=="object"&&"styledComponentId"in e}function Je(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Xi(e,t){if(e.length===0)return"";for(var n=e[0],i=1;i<e.length;i++)n+=t?t+e[i]:e[i];return n}function en(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ji(e,t,n){if(n===void 0&&(n=!1),!n&&!en(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var i=0;i<t.length;i++)e[i]=Ji(e[i],t[i]);else if(en(t))for(var i in t)e[i]=Ji(e[i],t[i]);return e}function Er(e,t){Object.defineProperty(e,"toString",{value:t})}function hn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var zd=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,i=0;i<t;i++)n+=this.groupSizes[i];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,o=r;t>=o;)if((o<<=1)<0)throw hn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),c=(s=0,n.length);s<c;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],i=this.indexOfGroup(t),r=i+n;this.groupSizes[t]=0;for(var o=i;o<r;o++)this.tag.deleteRule(i)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var i=this.groupSizes[t],r=this.indexOfGroup(t),o=r+i,s=r;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},e}(),In=new Map,Un=new Map,On=1,wn=function(e){if(In.has(e))return In.get(e);for(;Un.has(On);)On++;var t=On++;return In.set(e,t),Un.set(t,e),t},Hd=function(e,t){On=t+1,In.set(e,t),Un.set(t,e)},Ud="style[".concat(_t,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),Yd=new RegExp("^".concat(_t,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Gd=function(e,t,n){for(var i,r=n.split(","),o=0,s=r.length;o<s;o++)(i=r[o])&&e.registerName(t,i)},Kd=function(e,t){for(var n,i=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),r=[],o=0,s=i.length;o<s;o++){var a=i[o].trim();if(a){var c=a.match(Yd);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(Hd(d,u),Gd(e,d,c[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(a)}}};function qd(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var kc=function(e){var t=document.head,n=e||t,i=document.createElement("style"),r=function(a){var c=Array.from(a.querySelectorAll("style[".concat(_t,"]")));return c[c.length-1]}(n),o=r!==void 0?r.nextSibling:null;i.setAttribute(_t,"active"),i.setAttribute("data-styled-version","6.1.1");var s=qd();return s&&i.setAttribute("nonce",s),n.insertBefore(i,o),i},Xd=function(){function e(t){this.element=kc(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var i=document.styleSheets,r=0,o=i.length;r<o;r++){var s=i[r];if(s.ownerNode===n)return s}throw hn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),Jd=function(){function e(t){this.element=kc(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var i=document.createTextNode(n);return this.element.insertBefore(i,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Qd=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Bo=Ar,Zd={isServer:!Ar,useCSSOMInjection:!$d},Yn=function(){function e(t,n,i){t===void 0&&(t=St),n===void 0&&(n={});var r=this;this.options=ee(ee({},Zd),t),this.gs=n,this.names=new Map(i),this.server=!!t.isServer,!this.server&&Ar&&Bo&&(Bo=!1,function(o){for(var s=document.querySelectorAll(Ud),a=0,c=s.length;a<c;a++){var u=s[a];u&&u.getAttribute(_t)!=="active"&&(Kd(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),Er(this,function(){return function(o){for(var s=o.getTag(),a=s.length,c="",u=function(l){var f=function(b){return Un.get(b)}(l);if(f===void 0)return"continue";var m=o.names.get(f),p=s.getGroup(l);if(m===void 0||p.length===0)return"continue";var g="".concat(_t,".g").concat(l,'[id="').concat(f,'"]'),w="";m!==void 0&&m.forEach(function(b){b.length>0&&(w+="".concat(b,","))}),c+="".concat(p).concat(g,'{content:"').concat(w,'"}').concat(`/*!sc*/
`)},d=0;d<a;d++)u(d);return c}(r)})}return e.registerId=function(t){return wn(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ee(ee({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var i=n.useCSSOMInjection,r=n.target;return n.isServer?new Qd(r):i?new Xd(r):new Jd(r)}(this.options),new zd(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(wn(t),this.names.has(t))this.names.get(t).add(n);else{var i=new Set;i.add(n),this.names.set(t,i)}},e.prototype.insertRules=function(t,n,i){this.registerName(t,n),this.getTag().insertRules(wn(t),i)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(wn(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),eh=/&/g,th=/^\s*\/\/.*$/gm;function Cc(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(i){return"".concat(t," ").concat(i)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Cc(n.children,t)),n})}function nh(e){var t,n,i,r=e===void 0?St:e,o=r.options,s=o===void 0?St:o,a=r.plugins,c=a===void 0?si:a,u=function(f,m,p){return p===n||p.startsWith(n)&&p.endsWith(n)&&p.replaceAll(n,"").length>0?".".concat(t):f},d=c.slice();d.push(function(f){f.type===ni&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(eh,n).replace(i,u))}),s.prefix&&d.push(Td),d.push(Pd);var l=function(f,m,p,g){m===void 0&&(m=""),p===void 0&&(p=""),g===void 0&&(g="&"),t=g,n=m,i=new RegExp("\\".concat(n,"\\b"),"g");var w=f.replace(th,""),b=_d(p||m?"".concat(p," ").concat(m," { ").concat(w," }"):w);s.namespace&&(b=Cc(b,s.namespace));var x=[];return Hn(b,kd(d.concat(Cd(function(v){return x.push(v)})))),x};return l.hash=c.length?c.reduce(function(f,m){return m.name||hn(15),ut(f,m.name)},5381).toString():"",l}var ih=new Yn,Qi=nh(),Tc=_e.createContext({shouldForwardProp:void 0,styleSheet:ih,stylis:Qi});Tc.Consumer;_e.createContext(void 0);function Zi(){return Q(Tc)}var rh=function(){function e(t,n){var i=this;this.inject=function(r,o){o===void 0&&(o=Qi);var s=i.name+o.hash;r.hasNameForId(i.id,s)||r.insertRules(i.id,s,o(i.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Er(this,function(){throw hn(12,String(i.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Qi),this.name+t.hash},e}(),oh=function(e){return e>="A"&&e<="Z"};function No(e){for(var t="",n=0;n<e.length;n++){var i=e[n];if(n===1&&i==="-"&&e[0]==="-")return e;oh(i)?t+="-"+i.toLowerCase():t+=i}return t.startsWith("ms-")?"-"+t:t}var Dc=function(e){return e==null||e===!1||e===""},$c=function(e){var t,n,i=[];for(var r in e){var o=e[r];e.hasOwnProperty(r)&&!Dc(o)&&(Array.isArray(o)&&o.isCss||Pt(o)?i.push("".concat(No(r),":"),o,";"):en(o)?i.push.apply(i,Zt(Zt(["".concat(r," {")],$c(o),!1),["}"],!1)):i.push("".concat(No(r),": ").concat((t=r,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Dd||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return i};function je(e,t,n,i){if(Dc(e))return[];if(Mr(e))return[".".concat(e.styledComponentId)];if(Pt(e)){if(!Pt(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var r=e(t);return je(r,t,n,i)}var o;return e instanceof rh?n?(e.inject(n,i),[e.getName(i)]):[e]:en(e)?$c(e):Array.isArray(e)?Array.prototype.concat.apply(si,e.map(function(s){return je(s,t,n,i)})):[e.toString()]}function Ac(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Pt(n)&&!Mr(n))return!1}return!0}var sh=vc("6.1.1"),ah=function(){function e(t,n,i){this.rules=t,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&Ac(t),this.componentId=n,this.baseHash=ut(sh,n),this.baseStyle=i,Yn.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))r=Je(r,this.staticRulesId);else{var o=Xi(je(this.rules,t,n,i)),s=qi(ut(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=i(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}r=Je(r,s),this.staticRulesId=s}else{for(var c=ut(this.baseHash,i.hash),u="",d=0;d<this.rules.length;d++){var l=this.rules[d];if(typeof l=="string")u+=l;else if(l){var f=Xi(je(l,t,n,i));c=ut(c,f+d),u+=f}}if(u){var m=qi(c>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,i(u,".".concat(m),void 0,this.componentId)),r=Je(r,m)}}return r},e}(),Rr=_e.createContext(void 0);Rr.Consumer;var bi={};function ch(e,t,n){var i=Mr(e),r=e,o=!yi(e),s=t.attrs,a=s===void 0?si:s,c=t.componentId,u=c===void 0?function(C,P){var T=typeof C!="string"?"sc":Vo(C);bi[T]=(bi[T]||0)+1;var k="".concat(T,"-").concat(xc("6.1.1"+T+bi[T]));return P?"".concat(P,"-").concat(k):k}(t.displayName,t.parentComponentId):c,d=t.displayName,l=d===void 0?function(C){return yi(C)?"styled.".concat(C):"Styled(".concat(Ld(C),")")}(e):d,f=t.displayName&&t.componentId?"".concat(Vo(t.displayName),"-").concat(t.componentId):t.componentId||u,m=i&&r.attrs?r.attrs.concat(a).filter(Boolean):a,p=t.shouldForwardProp;if(i&&r.shouldForwardProp){var g=r.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;p=function(C,P){return g(C,P)&&w(C,P)}}else p=g}var b=new ah(n,f,i?r.componentStyle:void 0);function x(C,P){return function(T,k,A){var E=T.attrs,z=T.componentStyle,ge=T.defaultProps,rt=T.foldedComponentIds,Et=T.styledComponentId,ot=T.target,st=_e.useContext(Rr),Rt=Zi(),B=T.shouldForwardProp||Rt.shouldForwardProp,O=function(yn,Vt,bn){for(var It,Ye=ee(ee({},Vt),{className:void 0,theme:bn}),hi=0;hi<yn.length;hi+=1){var vn=Pt(It=yn[hi])?It(Ye):It;for(var Ee in vn)Ye[Ee]=Ee==="className"?Je(Ye[Ee],vn[Ee]):Ee==="style"?ee(ee({},Ye[Ee]),vn[Ee]):vn[Ee]}return Vt.className&&(Ye.className=Je(Ye.className,Vt.className)),Ye}(E,k,yc(k,st,ge)||St),ne=O.as||ot,ie={};for(var ce in O)O[ce]===void 0||ce[0]==="$"||ce==="as"||ce==="theme"||(ce==="forwardedAs"?ie.as=O.forwardedAs:B&&!B(ce,ne)||(ie[ce]=O[ce]));var Ue=function(yn,Vt){var bn=Zi(),It=yn.generateAndInjectStyles(Vt,bn.styleSheet,bn.stylis);return It}(z,O),Lt=Je(rt,Et);return Ue&&(Lt+=" "+Ue),O.className&&(Lt+=" "+O.className),ie[yi(ne)&&!bc.has(ne)?"class":"className"]=Lt,ie.ref=A,xe(ne,ie)}(v,C,P)}x.displayName=l;var v=_e.forwardRef(x);return v.attrs=m,v.componentStyle=b,v.displayName=l,v.shouldForwardProp=p,v.foldedComponentIds=i?Je(r.foldedComponentIds,r.styledComponentId):"",v.styledComponentId=f,v.target=i?r.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(C){this._foldedDefaultProps=i?function(P){for(var T=[],k=1;k<arguments.length;k++)T[k-1]=arguments[k];for(var A=0,E=T;A<E.length;A++)Ji(P,E[A],!0);return P}({},r.defaultProps,C):C}}),Er(v,function(){return".".concat(v.styledComponentId)}),o&&Pc(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Wo(e,t){for(var n=[e[0]],i=0,r=t.length;i<r;i+=1)n.push(t[i],e[i+1]);return n}var zo=function(e){return Object.assign(e,{isCss:!0})};function Mc(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Pt(e)||en(e)){var i=e;return zo(je(Wo(si,Zt([i],t,!0))))}var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?je(r):zo(je(Wo(r,t)))}function er(e,t,n){if(n===void 0&&(n=St),!t)throw hn(1,t);var i=function(r){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,Mc.apply(void 0,Zt([r],o,!1)))};return i.attrs=function(r){return er(e,t,ee(ee({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return er(e,t,ee(ee({},n),r))},i}var Ec=function(e){return er(ch,e)},y=Ec;bc.forEach(function(e){y[e]=Ec(e)});var lh=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ac(t),Yn.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,i,r){var o=r(Xi(je(this.rules,n,i,r)),""),s=this.componentId+t;i.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,i,r){t>2&&Yn.registerId(this.componentId+t),this.removeStyles(t,i),this.createStyles(t,n,i,r)},e}();function uh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=Mc.apply(void 0,Zt([e],t,!1)),r="sc-global-".concat(xc(JSON.stringify(i))),o=new lh(i,r),s=function(c){var u=Zi(),d=_e.useContext(Rr),l=_e.useRef(u.styleSheet.allocateGSInstance(r)).current;return u.styleSheet.server&&a(l,c,u.styleSheet,d,u.stylis),_e.useLayoutEffect(function(){if(!u.styleSheet.server)return a(l,c,u.styleSheet,d,u.stylis),function(){return o.removeStyles(l,u.styleSheet)}},[l,c,u.styleSheet,d,u.stylis]),null};function a(c,u,d,l,f){if(o.isStatic)o.renderStyles(c,Ad,d,f);else{var m=ee(ee({},u),{theme:yc(u,l,s.defaultProps)});o.renderStyles(c,m,d,f)}}return _e.memo(s)}const _={primary:"#8b5cf6",secondary:"#06b6d4",accent:"#f59e0b",background:{main:"#0f172a",secondary:"#1e293b",card:"#334155",gradient:"linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"},text:{primary:"#f8fafc",secondary:"#cbd5e1",muted:"#94a3b8",accent:"#8b5cf6"},success:"#10b981",warning:"#f59e0b",error:"#ef4444",info:"#06b6d4",overlay:"rgba(15, 23, 42, 0.9)",cardOverlay:"rgba(51, 65, 85, 0.5)",borderLight:"rgba(203, 213, 225, 0.1)",gradients:{primary:"linear-gradient(45deg, #8b5cf6, #06b6d4)",secondary:"linear-gradient(45deg, #06b6d4, #f59e0b)",accent:"linear-gradient(135deg, #8b5cf6 0%, #06b6d4 50%, #f59e0b 100%)",card:"linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)",hover:"linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)"}},V={mobile:"480px",tablet:"768px",desktop:"1024px",wide:"1200px"},Ce={small:"0 2px 4px rgba(0, 0, 0, 0.1)",medium:"0 4px 8px rgba(0, 0, 0, 0.2)",large:"0 8px 16px rgba(0, 0, 0, 0.3)",card:"0 10px 30px rgba(0, 0, 0, 0.2)",hover:"0 20px 40px rgba(0, 0, 0, 0.3)",glow:"0 0 20px rgba(78, 205, 196, 0.3)"},ae={small:"8px",medium:"12px",large:"16px",xl:"20px",round:"50%"},S={xs:"0.5rem",sm:"1rem",md:"1.5rem",lg:"2rem",xl:"3rem",xxl:"4rem"},$={fontFamily:{primary:"'Raleway', sans-serif",secondary:"'Roboto', sans-serif",mono:"'Fira Code', monospace"},fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem"},fontWeight:{light:300,normal:400,medium:500,semibold:600,bold:700}},dh=uh`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${_.primary};
    }

    body {
        background: ${_.background.gradient};
        color: ${_.text.primary};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
        min-height: 100vh;
    }

    body, input, textarea, button {
        font-family: ${$.fontFamily.primary};
        font-size: ${$.fontSize.base};
        line-height: 1.6;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${$.fontFamily.primary};
        font-weight: ${$.fontWeight.semibold};
        color: ${_.text.primary};
        margin-bottom: 1rem;
    }

    h1 {
        font-size: ${$.fontSize["5xl"]};
        background: ${_.gradients.primary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    h2 {
        font-size: ${$.fontSize["4xl"]};
    }

    h3 {
        font-size: ${$.fontSize["3xl"]};
    }

    p {
        color: ${_.text.secondary};
        margin-bottom: 1rem;
    }

    a {
        color: ${_.primary};
        text-decoration: none;
        transition: all 0.3s ease;
        
        &:hover {
            color: ${_.accent};
            text-shadow: ${Ce.glow};
        }
    }

    button {
        cursor: pointer;
        border: none;
        background: ${_.gradients.primary};
        color: ${_.text.primary};
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        font-weight: ${$.fontWeight.medium};
        transition: all 0.3s ease;
        
        &:hover {
            transform: translateY(-2px);
            box-shadow: ${Ce.hover};
        }
        
        &:active {
            transform: translateY(0);
        }
    }

    input, textarea {
        background: ${_.background.card};
        border: 1px solid ${_.borderLight};
        color: ${_.text.primary};
        padding: 0.75rem;
        border-radius: 8px;
        transition: all 0.3s ease;
        
        &:focus {
            border-color: ${_.primary};
            box-shadow: 0 0 0 3px ${_.primary}33;
        }
        
        &::placeholder {
            color: ${_.text.muted};
        }
    }

    /* Scrollbar personalizada */
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: ${_.background.secondary};
    }

    ::-webkit-scrollbar-thumb {
        background: ${_.gradients.primary};
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${_.gradients.secondary};
    }

    /* Seleção de texto */
    ::selection {
        background: ${_.primary}33;
        color: ${_.text.primary};
    }
`;var hh=0;function h(e,t,n,i,r,o){var s,a,c={};for(a in t)a=="ref"?s=t[a]:c[a]=t[a];var u={type:e,props:c,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--hh,__i:-1,__u:0,__source:r,__self:o};if(typeof e=="function"&&(s=e.defaultProps))for(a in s)c[a]===void 0&&(c[a]=s[a]);return D.vnode&&D.vnode(u),u}const Rc=We(void 0);function fh({children:e}){const[t,n]=Y("EN");return h(Rc.Provider,{value:[t,n],children:e})}function pe(){const e=Q(Rc);if(!e)throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");return e}const mh=y.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${e=>e.scrolled?`${_.background.main}dd`:"transparent"};
  backdrop-filter: ${e=>e.scrolled?"blur(10px)":"none"};
  box-shadow: ${e=>e.scrolled?Ce.medium:"none"};
`,ph=y.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${S.md} ${S.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${V.tablet}) {
    padding: ${S.sm} ${S.md};
  }
`,gh=y.div`
  font-family: ${$.fontFamily.mono};
  font-size: ${$.fontSize.xl};
  font-weight: ${$.fontWeight.bold};
  color: ${_.primary};
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${_.accent};
    transform: scale(1.05);
  }

  span {
    background: ${_.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`,yh=y.div`
  display: flex;
  gap: ${S.lg};

  @media (max-width: ${V.tablet}) {
    display: none;
  }
`,bh=y.div`
  color: ${e=>e.active?_.primary:_.text.primary};
  text-decoration: none;
  font-weight: ${$.fontWeight.medium};
  padding: ${S.sm} ${S.md};
  border-radius: 8px;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${_.primary};
    background: ${_.cardOverlay};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: ${e=>e.active?"80%":"0"};
    height: 2px;
    background: ${_.gradients.primary};
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 80%;
  }
`,vh=y.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${S.sm};

  @media (max-width: ${V.tablet}) {
    display: flex;
  }

  span {
    width: 24px;
    height: 3px;
    background: ${_.primary};
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &:hover span {
    background: ${_.accent};
  }
`,xh=y.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: ${_.background.main};
  box-shadow: ${Ce.large};
  border-top: 1px solid ${_.borderLight};
  display: flex;
  flex-direction: column;
  transform: translateY(${e=>e.open?"0":"-100%"});
  opacity: ${e=>e.open?"1":"0"};
  visibility: ${e=>e.open?"visible":"hidden"};
  transition: all 0.3s ease;

  @media (min-width: ${V.tablet}) {
    display: none;
  }
`,wh=y.div`
  color: ${e=>e.active?_.primary:_.text.primary};
  text-decoration: none;
  font-weight: ${$.fontWeight.medium};
  padding: ${S.md} ${S.lg};
  border-bottom: 1px solid ${_.borderLight};
  transition: all 0.3s ease;
  background: ${e=>e.active?_.cardOverlay:"transparent"};
  cursor: pointer;

  &:hover {
    color: ${_.primary};
    background: ${_.cardOverlay};
  }

  &:last-child {
    border-bottom: none;
  }
`,Ho=y.div`
  display: flex;
  gap: ${S.xs};
  background: ${_.cardOverlay};
  border-radius: ${ae.small};
  padding: ${S.xs};
  border: 1px solid ${_.borderLight};

  @media (max-width: ${V.tablet}) {
    justify-content: center;
  }
`,_n=y.button`
  background: ${e=>e.active?_.gradients.primary:"transparent"};
  color: ${e=>e.active?_.text.primary:_.text.secondary};
  border: none;
  padding: ${S.xs} ${S.sm};
  border-radius: ${ae.small};
  font-size: ${$.fontSize.xs};
  font-weight: ${$.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 36px;

  &:hover {
    background: ${e=>e.active?_.gradients.primary:_.cardOverlay};
    color: ${_.text.primary};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;function _h({currentPage:e,setCurrentPage:t}){const[n,i]=Y(!1),[r,o]=Y(!1),[s,a]=pe();oe(()=>{const l=()=>{const f=window.scrollY>50;o(f)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]);const c=s==="EN"?[{id:"home",label:"Home"},{id:"projects",label:"Projects"},{id:"experiences",label:"Experiences"},{id:"contact",label:"Contact"}]:[{id:"home",label:"Início"},{id:"projects",label:"Projetos"},{id:"experiences",label:"Experiências"},{id:"contact",label:"Contato"}],u=l=>{t(l),i(!1)},d=l=>{a(()=>l)};return h(mh,{scrolled:r,children:h(ph,{children:[h(gh,{onClick:()=>u("home"),children:h("span",{children:"<WC />"})}),h(yh,{children:c.map(l=>h(bh,{active:e===l.id,onClick:()=>u(l.id),children:l.label},l.id))}),h(Ho,{children:[h(_n,{active:s==="EN",onClick:()=>d("EN"),children:"EN"}),h(_n,{active:s==="BR",onClick:()=>d("BR"),children:"BR"})]}),h(vh,{onClick:()=>i(!n),"aria-label":"Menu",children:[h("span",{}),h("span",{}),h("span",{})]}),h(xh,{open:n,children:[h("div",{style:{padding:"1rem",borderBottom:"1px solid rgba(203, 213, 225, 0.1)"},children:h(Ho,{children:[h(_n,{active:s==="EN",onClick:()=>d("EN"),children:"EN"}),h(_n,{active:s==="BR",onClick:()=>d("BR"),children:"BR"})]})}),c.map(l=>h(wh,{active:e===l.id,onClick:()=>u(l.id),children:l.label},l.id))]})]})})}const tr="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_30_57)'%3e%3cpath%20d='M15.9999%200C24.837%200%2032%207.164%2032%2016.0001C32%2024.8361%2024.837%2032%2015.9999%2032C7.1629%2032%200%2024.836%200%2016.0001C0%207.16411%207.16301%200%2015.9999%200Z'%20fill='white'%20fill-opacity='0.5'/%3e%3cpath%20d='M9.01599%2021.984H12.012V11.998H9.01599V21.984ZM20.688%2011.6521C19.234%2011.6521%2017.933%2012.183%2017.0101%2013.3551V11.9651H14.0031V21.9841H17.0101V16.5661C17.0101%2015.4211%2018.0591%2014.304%2019.3731%2014.304C20.687%2014.304%2021.0111%2015.4211%2021.0111%2016.5381V21.9831H24.0071V16.3151C24.007%2012.378%2022.143%2011.6521%2020.688%2011.6521ZM10.5%2011C11.328%2011%2012%2010.328%2012%209.49997C12%208.67195%2011.328%208.00003%2010.5%208.00003C9.67199%208.00003%208.99995%208.67206%208.99995%209.50008C8.99995%2010.3281%209.67199%2011%2010.5%2011Z'%20fill='%23090E16'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_30_57'%3e%3crect%20width='32'%20height='32'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",nr="data:image/svg+xml,%3csvg%20width='34'%20height='33'%20viewBox='0%200%2034%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16.7381%200.333344C7.67448%200.333344%200.333374%207.67445%200.333374%2016.738C0.333374%2023.9971%205.02922%2030.1284%2011.5501%2032.302C12.3703%2032.4455%2012.6779%2031.9534%2012.6779%2031.5228C12.6779%2031.1332%2012.6574%2029.8413%2012.6574%2028.4674C8.53572%2029.2261%207.46942%2027.4626%207.14133%2026.5399C6.95677%2026.0682%206.15704%2024.6123%205.45984%2024.2227C4.88568%2023.9151%204.06544%2023.1564%205.43934%2023.1359C6.73121%2023.1154%207.65397%2024.3252%207.96156%2024.8174C9.43798%2027.2986%2011.7962%2026.6014%2012.7394%2026.1707C12.883%2025.1044%2013.3136%2024.3867%2013.7852%2023.9766C10.1352%2023.5665%206.32109%2022.1516%206.32109%2015.8768C6.32109%2014.0928%206.95677%2012.6164%208.00257%2011.468C7.83853%2011.0579%207.26436%209.37644%208.16662%207.12079C8.16662%207.12079%209.54051%206.69017%2012.6779%208.80227C13.9903%208.43316%2015.3847%208.24861%2016.7791%208.24861C18.1735%208.24861%2019.5679%208.43316%2020.8803%208.80227C24.0177%206.66966%2025.3916%207.12079%2025.3916%207.12079C26.2938%209.37644%2025.7197%2011.0579%2025.5556%2011.468C26.6014%2012.6164%2027.2371%2014.0723%2027.2371%2015.8768C27.2371%2022.1721%2023.4025%2023.5665%2019.7524%2023.9766C20.3471%2024.4893%2020.8598%2025.4735%2020.8598%2027.0115C20.8598%2029.2056%2020.8393%2030.9691%2020.8393%2031.5228C20.8393%2031.9534%2021.1468%2032.4661%2021.9671%2032.302C28.4469%2030.1284%2033.1428%2023.9766%2033.1428%2016.738C33.1428%207.67445%2025.8017%200.333344%2016.7381%200.333344Z'%20fill='white'%20fill-opacity='0.5'/%3e%3c/svg%3e",Sh=y.section`
    height: 80px;
    display: flex;
    flex-direction: row;
    color: ${e=>e.theme["white-50"]};
    background-color: ${e=>e.theme["secundary-blue-10"]};
`,Ph=y.div`
    height: 100%;
    padding-left: 80px;
    display: flex;
    align-items: center;
    justify-content: start;
    font-family: Haleway, sans-serif;
`,kh=y.div`
    margin: 23%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;
    height: 20px;
`,Uo=y.div`
    margin-right: 15px;
`;function Ch(){return h(Sh,{children:[h(Ph,{children:"Copyright © Wilton Costa · 2024"}),h(kh,{children:[h("a",{href:"https://www.linkedin.com/in/wilton-software-engineer/",target:"_blank",rel:"noreferrer",children:h(Uo,{children:h("img",{src:tr,alt:""})})}),h("a",{href:"https://www.github.com/wiltoon",target:"_blank",rel:"noreferrer",children:h(Uo,{children:h("img",{src:nr,alt:""})})})]})]})}const Yo="/portifolio/assets/mymeme-back-xzmSO0by.svg",Go="/portifolio/assets/mark-B6M6CZ2Y.svg",Th=y.div`
    width: 100%;
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-left: 15%;
    padding-right: 15%;
`,Ko=y.div`
    font-family: 700 1rem Raleway, sans-serif;
    font-size: large;
`,qo=y.div`
    color: ${e=>e.theme["secundary-blue-50"]};
    justify-content: center;
    vertical-align: middle;
`;y.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;const Xo=y.button`
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
`,Jo=y.div`
    margin-left: 5px;
    font-size: 15px;
    font-family: 700 1rem Raleway, sans-serif;
`,Qo=y.div`
    width: 120px;
    border-radius: 10px;
    font-size: 15px;
    padding: 5px;
    padding-right: -20px;
    margin-bottom: 35px;
    background-color: ${e=>e.theme["secundary-blue"]};
    color: ${e=>e.theme["background-blue"]};
    font-weight: bold;
`,Zo=y.div`
    display: flex;
`,es=y.div`
    margin-top: -15px;
    margin-right: 20px;
    font-size: 48px;
    font-family: 700 1rem Raleway, sans-serif;
    font-weight: bold;
`,ts=y.div`
    color: ${e=>e.theme["white-50"]};
    margin-top: 30px;
`,ns=y.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 30px;
`,Sn=y.div`
    margin-right: 15px;
`;function Dh(){const[e]=pe();return h(Th,{id:"home",children:e==="EN"?h(Z,{children:[h(Ko,{children:[h(Qo,{children:"👋 Welcome!"}),h(Zo,{children:[h(es,{children:[h("p",{children:"Wilton"}),h("p",{children:"Costa"})]}),h("img",{src:Go,alt:"",height:52,width:52})]}),h(ts,{children:"Software Engineer · Back-end"}),h(ns,{children:[h("a",{href:"https://www.linkedin.com/in/wilton-software-engineer/",target:"_blank",rel:"noreferrer",children:h(Sn,{children:h("img",{src:tr,alt:""})})}),h("a",{href:"https://www.github.com/wiltoon",target:"_blank",rel:"noreferrer",children:h(Sn,{children:h("img",{src:nr,alt:""})})})]})]}),h("img",{src:Yo,alt:"",style:{maxWidth:"100%",height:"auto",width:"50%"}}),h(qo,{children:h("a",{href:"#contact",rel:"noreferrer",children:h(Xo,{children:h(Jo,{children:"Let's work together?"})})})})]}):h(Z,{children:[h(Ko,{children:[h(Qo,{children:"👋 Saudações!"}),h(Zo,{children:[h(es,{children:[h("p",{children:"Wilton"}),h("p",{children:"Costa"})]}),h("img",{src:Go,alt:"",height:52,width:52})]}),h(ts,{children:"Engenheiro de Software · Back-end"}),h(ns,{children:[h("a",{href:"https://www.linkedin.com/in/wilton-software-engineer/",target:"_blank",rel:"noreferrer",children:h(Sn,{children:h("img",{src:tr,alt:""})})}),h("a",{href:"https://www.github.com/wiltoon",target:"_blank",rel:"noreferrer",children:h(Sn,{children:h("img",{src:nr,alt:""})})})]})]}),h("img",{src:Yo,alt:"",style:{maxWidth:"100%",height:"auto",width:"50%"}}),h(qo,{children:h("a",{href:"#contact",rel:"noreferrer",children:h(Xo,{children:h(Jo,{children:"Vamos trabalhar juntos?"})})})})]})})}const $h=y.section`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 600px;
    padding: 50px;
`,Ah=y.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;
`,Mh=y.div`
    height: 300px;
    width: 300px;
    border-radius: 400px;
    background-color: ${e=>e.theme.white};
`,is=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    background-color: ${e=>e.theme["secundary-blue-10"]};
`,rs=y.div`
    font-weight: 700;
    width: 300px;
    font-size: xx-large;
    color: ${e=>e.theme.white};
`,os=y.div`
    font-weight: 400;
    color: ${e=>e.theme["white-50"]};
`;function Eh(){const[e]=pe(),[t,n]=Y("");return oe(()=>{fetch("https://api.github.com/users/wiltoon").then(i=>i.json()).then(i=>n(i.avatar_url)).catch(i=>console.log(i))},[]),h($h,{id:"about",children:[h(Mh,{children:h(Ah,{src:t,alt:"Profile"})}),e==="EN"?h("div",{children:[h(is,{children:"🧐 About me"}),h(rs,{children:"Wilton Costa"}),h(os,{children:["👋 My name is Wilton, and I work in the Software Engineering field, but I also have an interest in Artificial Intelligence. With that being said, I believe I can branch out and become a backend developer in the field of AI. Pleasure to have you here!",h("br",{}),"👨‍💻 For over 7 years, I have been seeking new solutions using languages such as C, C++, Java, Python, and TypeScript.",h("br",{}),"🎓 I have a Bachelor's degree in Computer Engineering from the Federal University of Mato Grosso do Sul - UFMS.",h("br",{}),"🎓 I also have a Master's degree in Computer Science from the Federal University of Mato Grosso do Sul - UFMS.",h("br",{}),"💡 My interests lie in Backend Development, Data Science, and Frontend Development.",h("br",{}),"🚀 AWS Certified Cloud Practitioner",h("br",{}),"🚀 AWS Certified Solutions Architect",h("br",{}),"🚀 By being 1% better every working day, we can achieve an improvement of 1.01^252 (working days) = 12.27x better within a year! So, I always strive for continuous improvement! Embracing new technologies is part of the learning process!"]})]}):h("div",{children:[h(is,{children:"🧐 Sobre mim"}),h(rs,{children:"Wilton Costa"}),h(os,{children:["👋 Me chamo Wilton, e atuo na área de Engenharia de Software, mas também tenho interesse na área de Inteligência Artificial, dito isso acredito ser capaz de abrir um novo ramo sendo um back-end agregando na área de IA. Prazer em recebê-lo!",h("br",{}),"👨‍💻 Há mais de 7 anos buscando novas soluções com as linguagem C. C++, Java, Python, Typescript;",h("br",{}),"🎓 Graduado em Engenharia da Computação na Universidade Federal de Mato Grosso do Sul - UFMS;",h("br",{}),"🎓 Mestrado em Ciências da Computação na Universidade Federal de Mato Grosso do Sul - UFMS;",h("br",{}),h("br",{}),"💡 Meus interesses estão em Back-end, Data Science e Front-end;",h("br",{}),h("br",{}),"🚀 AWS Certified Cloud Practitioner",h("br",{}),"🚀 AWS Certified Solutions Architect",h("br",{}),h("br",{}),"🚀 Bom sendo 1% melhor a cada dia trabalhado temos uma melhora de 1,01^252 (dias úteis) = 12,27x melhor dentro de um ano útil! Então busco sempre estar em evolução! Novas tecnologias fazem parte do aprendizado!"]})]})]})}const Rh="/portifolio/assets/dailysCodes-Pps4JLtG.svg",Lh="/portifolio/assets/otherStacks-32QtRcdt.svg",Vh=y.div`
  max-width: 600px;
  margin: ${S.xl} auto;
  padding: ${S.xl};
  background: ${_.gradients.card};
  border-radius: ${ae.large};
  border: 1px solid ${_.borderLight};
  box-shadow: ${Ce.card};
  backdrop-filter: blur(10px);
  
  @media (max-width: ${V.tablet}) {
    margin: ${S.lg} auto;
    padding: ${S.lg};
  }

  @media (max-width: ${V.mobile}) {
    margin: ${S.md} ${S.sm};
    padding: ${S.md};
  }
`,Ih=y.h2`
  color: ${_.text.primary};
  font-size: ${$.fontSize["2xl"]};
  margin-bottom: ${S.xl};
  text-align: center;
  background: ${_.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: ${$.fontWeight.semibold};

  @media (max-width: ${V.mobile}) {
    font-size: ${$.fontSize.xl};
    margin-bottom: ${S.lg};
  }
`,Oh=y.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${S.lg};

  @media (max-width: ${V.tablet}) {
    gap: ${S.md};
  }

  @media (max-width: ${V.mobile}) {
    grid-template-columns: 1fr;
    gap: ${S.md};
  }
`,vi=y.div`
  background: ${_.background.card};
  border-radius: ${ae.medium};
  padding: ${S.lg} ${S.md};
  text-align: center;
  border: 1px solid ${_.borderLight};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${_.gradients.primary};
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${Ce.hover};
    background: ${_.gradients.card};
  }

  @media (max-width: ${V.mobile}) {
    padding: ${S.md};
  }
`,xi=y.div`
  font-size: ${$.fontSize["3xl"]};
  font-weight: ${$.fontWeight.bold};
  color: ${_.primary};
  margin-bottom: ${S.sm};
  font-family: ${$.fontFamily.mono};

  @media (max-width: ${V.mobile}) {
    font-size: ${$.fontSize["2xl"]};
  }
`,wi=y.div`
  color: ${_.text.secondary};
  font-size: ${$.fontSize.sm};
  font-weight: ${$.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${V.mobile}) {
    font-size: ${$.fontSize.xs};
  }
`,jh=y.div`
  max-width: 600px;
  margin: ${S.xl} auto;
  padding: ${S.xl};
  text-align: center;
  background: ${_.gradients.card};
  border-radius: ${ae.large};
  border: 1px solid ${_.borderLight};
  color: ${_.primary};
  font-size: ${$.fontSize.lg};
  font-weight: ${$.fontWeight.medium};
  
  @media (max-width: ${V.tablet}) {
    margin: ${S.lg} auto;
    padding: ${S.lg};
  }

  @media (max-width: ${V.mobile}) {
    margin: ${S.md} ${S.sm};
    padding: ${S.md};
    font-size: ${$.fontSize.base};
  }
`;function Fh(){const[e,t]=Y({repos:0,followers:0,following:0}),[n,i]=Y(!0),[r]=pe();oe(()=>{(async()=>{try{const c=await(await fetch("https://api.github.com/users/wiltoon")).json();t({repos:c.public_repos||0,followers:c.followers||0,following:c.following||0})}catch(a){console.error("Erro ao buscar dados do GitHub:",a)}finally{i(!1)}})()},[]);const o=r==="EN"?{title:"📊 GitHub Stats",loading:"🔄 Loading GitHub data...",repos:"Repositories",followers:"Followers",following:"Following"}:{title:"📊 Estatísticas GitHub",loading:"🔄 Carregando dados do GitHub...",repos:"Repositórios",followers:"Seguidores",following:"Seguindo"};return n?h(jh,{children:o.loading}):h(Vh,{children:[h(Ih,{children:o.title}),h(Oh,{children:[h(vi,{children:[h(xi,{children:e.repos}),h(wi,{children:o.repos})]}),h(vi,{children:[h(xi,{children:e.followers}),h(wi,{children:o.followers})]}),h(vi,{children:[h(xi,{children:e.following}),h(wi,{children:o.following})]})]})]})}const Bh=y.section`
    display: flex;
    flex-direction: column;
    justify-content: flex;
    width: 100%;
    height: 600px;
`,Nh=y.div`
    margin-left: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 210px;
    height: 35px;
    background-color: ${e=>e.theme["secundary-blue-10"]};
`,Wh=y.div`
    font-weight: 700;
    width: 600px;
    font-size: 36px; // Change font size to 24px
    color: ${e=>e.theme.white};
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: 30px;
`,ss=y.div`
    font-weight: 400;
    font-size: 24px; // Change font size to 24px
    color: ${e=>e.theme["white-50"]};
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 600px;
`,as=y.div`
    display: flex;
    width: 100%;
    height: 100%;
    text-align: center;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
`;function zh(){return h(Bh,{id:"skills",children:[h(Nh,{children:"🧑‍💻 Skills · Experiences"}),h(Wh,{children:"Tecnologies and Stacks"}),h(ss,{children:"Stacks that I use on a daily basis"}),h(as,{children:h("img",{src:Rh,alt:""})}),h(ss,{children:"Other Stacks I've worked with"}),h(as,{children:h("img",{src:Lh,alt:""})}),h(Fh,{})]})}const Lc=We({});function Hh(e){const t=he(null);return t.current===null&&(t.current=e()),t.current}const Lr=typeof window<"u",Uh=Lr?dn:oe,Vr=We(null);function Ir(e,t){e.indexOf(t)===-1&&e.push(t)}function Or(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Ae=(e,t,n)=>n>t?t:n<e?e:n;let jr=()=>{};const Me={},Vc=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Ic(e){return typeof e=="object"&&e!==null}const Oc=e=>/^0[^.\s]+$/u.test(e);function Fr(e){let t;return()=>(t===void 0&&(t=e()),t)}const fe=e=>e,Yh=(e,t)=>n=>t(e(n)),fn=(...e)=>e.reduce(Yh),tn=(e,t,n)=>{const i=t-e;return i===0?1:(n-e)/i};class Br{constructor(){this.subscriptions=[]}add(t){return Ir(this.subscriptions,t),()=>Or(this.subscriptions,t)}notify(t,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](t,n,i);else for(let o=0;o<r;o++){const s=this.subscriptions[o];s&&s(t,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Se=e=>e*1e3,Pe=e=>e/1e3;function jc(e,t){return t?e*(1e3/t):0}const Fc=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Gh=1e-7,Kh=12;function qh(e,t,n,i,r){let o,s,a=0;do s=t+(n-t)/2,o=Fc(s,i,r)-e,o>0?n=s:t=s;while(Math.abs(o)>Gh&&++a<Kh);return s}function mn(e,t,n,i){if(e===t&&n===i)return fe;const r=o=>qh(o,0,1,e,n);return o=>o===0||o===1?o:Fc(r(o),t,i)}const Bc=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Nc=e=>t=>1-e(1-t),Wc=mn(.33,1.53,.69,.99),Nr=Nc(Wc),zc=Bc(Nr),Hc=e=>(e*=2)<1?.5*Nr(e):.5*(2-Math.pow(2,-10*(e-1))),Wr=e=>1-Math.sin(Math.acos(e)),Uc=Nc(Wr),Yc=Bc(Wr),Xh=mn(.42,0,1,1),Jh=mn(0,0,.58,1),Gc=mn(.42,0,.58,1),Qh=e=>Array.isArray(e)&&typeof e[0]!="number",Kc=e=>Array.isArray(e)&&typeof e[0]=="number",Zh={linear:fe,easeIn:Xh,easeInOut:Gc,easeOut:Jh,circIn:Wr,circInOut:Yc,circOut:Uc,backIn:Nr,backInOut:zc,backOut:Wc,anticipate:Hc},ef=e=>typeof e=="string",cs=e=>{if(Kc(e)){jr(e.length===4);const[t,n,i,r]=e;return mn(t,n,i,r)}else if(ef(e))return Zh[e];return e},Pn=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],ls={value:null,addProjectionMetrics:null};function tf(e,t){let n=new Set,i=new Set,r=!1,o=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},c=0;function u(l){s.has(l)&&(d.schedule(l),e()),c++,l(a)}const d={schedule:(l,f=!1,m=!1)=>{const g=m&&r?n:i;return f&&s.add(l),g.has(l)||g.add(l),l},cancel:l=>{i.delete(l),s.delete(l)},process:l=>{if(a=l,r){o=!0;return}r=!0,[n,i]=[i,n],n.forEach(u),t&&ls.value&&ls.value.frameloop[t].push(c),c=0,n.clear(),r=!1,o&&(o=!1,d.process(l))}};return d}const nf=40;function qc(e,t){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Pn.reduce((v,C)=>(v[C]=tf(o,t?C:void 0),v),{}),{setup:a,read:c,resolveKeyframes:u,preUpdate:d,update:l,preRender:f,render:m,postRender:p}=s,g=()=>{const v=Me.useManualTiming?r.timestamp:performance.now();n=!1,Me.useManualTiming||(r.delta=i?1e3/60:Math.max(Math.min(v-r.timestamp,nf),1)),r.timestamp=v,r.isProcessing=!0,a.process(r),c.process(r),u.process(r),d.process(r),l.process(r),f.process(r),m.process(r),p.process(r),r.isProcessing=!1,n&&t&&(i=!1,e(g))},w=()=>{n=!0,i=!0,r.isProcessing||e(g)};return{schedule:Pn.reduce((v,C)=>{const P=s[C];return v[C]=(T,k=!1,A=!1)=>(n||w(),P.schedule(T,k,A)),v},{}),cancel:v=>{for(let C=0;C<Pn.length;C++)s[Pn[C]].cancel(v)},state:r,steps:s}}const{schedule:N,cancel:Be,state:J,steps:_i}=qc(typeof requestAnimationFrame<"u"?requestAnimationFrame:fe,!0);let jn;function rf(){jn=void 0}const se={now:()=>(jn===void 0&&se.set(J.isProcessing||Me.useManualTiming?J.timestamp:performance.now()),jn),set:e=>{jn=e,queueMicrotask(rf)}},Xc=e=>t=>typeof t=="string"&&t.startsWith(e),zr=Xc("--"),of=Xc("var(--"),Hr=e=>of(e)?sf.test(e.split("/*")[0].trim()):!1,sf=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,$t={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},nn={...$t,transform:e=>Ae(0,1,e)},kn={...$t,default:1},Yt=e=>Math.round(e*1e5)/1e5,Ur=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function af(e){return e==null}const cf=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Yr=(e,t)=>n=>!!(typeof n=="string"&&cf.test(n)&&n.startsWith(e)||t&&!af(n)&&Object.prototype.hasOwnProperty.call(n,t)),Jc=(e,t,n)=>i=>{if(typeof i!="string")return i;const[r,o,s,a]=i.match(Ur);return{[e]:parseFloat(r),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},lf=e=>Ae(0,255,e),Si={...$t,transform:e=>Math.round(lf(e))},Qe={test:Yr("rgb","red"),parse:Jc("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:i=1})=>"rgba("+Si.transform(e)+", "+Si.transform(t)+", "+Si.transform(n)+", "+Yt(nn.transform(i))+")"};function uf(e){let t="",n="",i="",r="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),i=e.substring(5,7),r=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),i=e.substring(3,4),r=e.substring(4,5),t+=t,n+=n,i+=i,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const ir={test:Yr("#"),parse:uf,transform:Qe.transform},pn=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Oe=pn("deg"),ke=pn("%"),M=pn("px"),df=pn("vh"),hf=pn("vw"),us={...ke,parse:e=>ke.parse(e)/100,transform:e=>ke.transform(e*100)},dt={test:Yr("hsl","hue"),parse:Jc("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:i=1})=>"hsla("+Math.round(e)+", "+ke.transform(Yt(t))+", "+ke.transform(Yt(n))+", "+Yt(nn.transform(i))+")"},K={test:e=>Qe.test(e)||ir.test(e)||dt.test(e),parse:e=>Qe.test(e)?Qe.parse(e):dt.test(e)?dt.parse(e):ir.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?Qe.transform(e):dt.transform(e),getAnimatableNone:e=>{const t=K.parse(e);return t.alpha=0,K.transform(t)}},ff=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function mf(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Ur))==null?void 0:t.length)||0)+(((n=e.match(ff))==null?void 0:n.length)||0)>0}const Qc="number",Zc="color",pf="var",gf="var(",ds="${}",yf=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function rn(e){const t=e.toString(),n=[],i={color:[],number:[],var:[]},r=[];let o=0;const a=t.replace(yf,c=>(K.test(c)?(i.color.push(o),r.push(Zc),n.push(K.parse(c))):c.startsWith(gf)?(i.var.push(o),r.push(pf),n.push(c)):(i.number.push(o),r.push(Qc),n.push(parseFloat(c))),++o,ds)).split(ds);return{values:n,split:a,indexes:i,types:r}}function el(e){return rn(e).values}function tl(e){const{split:t,types:n}=rn(e),i=t.length;return r=>{let o="";for(let s=0;s<i;s++)if(o+=t[s],r[s]!==void 0){const a=n[s];a===Qc?o+=Yt(r[s]):a===Zc?o+=K.transform(r[s]):o+=r[s]}return o}}const bf=e=>typeof e=="number"?0:K.test(e)?K.getAnimatableNone(e):e;function vf(e){const t=el(e);return tl(e)(t.map(bf))}const Ne={test:mf,parse:el,createTransformer:tl,getAnimatableNone:vf};function Pi(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function xf({hue:e,saturation:t,lightness:n,alpha:i}){e/=360,t/=100,n/=100;let r=0,o=0,s=0;if(!t)r=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,c=2*n-a;r=Pi(c,a,e+1/3),o=Pi(c,a,e),s=Pi(c,a,e-1/3)}return{red:Math.round(r*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:i}}function Gn(e,t){return n=>n>0?t:e}const W=(e,t,n)=>e+(t-e)*n,ki=(e,t,n)=>{const i=e*e,r=n*(t*t-i)+i;return r<0?0:Math.sqrt(r)},wf=[ir,Qe,dt],_f=e=>wf.find(t=>t.test(e));function hs(e){const t=_f(e);if(!t)return!1;let n=t.parse(e);return t===dt&&(n=xf(n)),n}const fs=(e,t)=>{const n=hs(e),i=hs(t);if(!n||!i)return Gn(e,t);const r={...n};return o=>(r.red=ki(n.red,i.red,o),r.green=ki(n.green,i.green,o),r.blue=ki(n.blue,i.blue,o),r.alpha=W(n.alpha,i.alpha,o),Qe.transform(r))},rr=new Set(["none","hidden"]);function Sf(e,t){return rr.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Pf(e,t){return n=>W(e,t,n)}function Gr(e){return typeof e=="number"?Pf:typeof e=="string"?Hr(e)?Gn:K.test(e)?fs:Tf:Array.isArray(e)?nl:typeof e=="object"?K.test(e)?fs:kf:Gn}function nl(e,t){const n=[...e],i=n.length,r=e.map((o,s)=>Gr(o)(o,t[s]));return o=>{for(let s=0;s<i;s++)n[s]=r[s](o);return n}}function kf(e,t){const n={...e,...t},i={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(i[r]=Gr(e[r])(e[r],t[r]));return r=>{for(const o in i)n[o]=i[o](r);return n}}function Cf(e,t){const n=[],i={color:0,var:0,number:0};for(let r=0;r<t.values.length;r++){const o=t.types[r],s=e.indexes[o][i[o]],a=e.values[s]??0;n[r]=a,i[o]++}return n}const Tf=(e,t)=>{const n=Ne.createTransformer(t),i=rn(e),r=rn(t);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?rr.has(e)&&!r.values.length||rr.has(t)&&!i.values.length?Sf(e,t):fn(nl(Cf(i,r),r.values),n):Gn(e,t)};function il(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?W(e,t,n):Gr(e)(e,t)}const Df=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>N.update(t,n),stop:()=>Be(t),now:()=>J.isProcessing?J.timestamp:se.now()}},rl=(e,t,n=10)=>{let i="";const r=Math.max(Math.round(t/n),2);for(let o=0;o<r;o++)i+=Math.round(e(o/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Kn=2e4;function Kr(e){let t=0;const n=50;let i=e.next(t);for(;!i.done&&t<Kn;)t+=n,i=e.next(t);return t>=Kn?1/0:t}function $f(e,t=100,n){const i=n({...e,keyframes:[0,t]}),r=Math.min(Kr(i),Kn);return{type:"keyframes",ease:o=>i.next(r*o).value/t,duration:Pe(r)}}const Af=5;function ol(e,t,n){const i=Math.max(t-Af,0);return jc(n-e(i),t-i)}const H={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ci=.001;function Mf({duration:e=H.duration,bounce:t=H.bounce,velocity:n=H.velocity,mass:i=H.mass}){let r,o,s=1-t;s=Ae(H.minDamping,H.maxDamping,s),e=Ae(H.minDuration,H.maxDuration,Pe(e)),s<1?(r=u=>{const d=u*s,l=d*e,f=d-n,m=or(u,s),p=Math.exp(-l);return Ci-f/m*p},o=u=>{const l=u*s*e,f=l*n+n,m=Math.pow(s,2)*Math.pow(u,2)*e,p=Math.exp(-l),g=or(Math.pow(u,2),s);return(-r(u)+Ci>0?-1:1)*((f-m)*p)/g}):(r=u=>{const d=Math.exp(-u*e),l=(u-n)*e+1;return-Ci+d*l},o=u=>{const d=Math.exp(-u*e),l=(n-u)*(e*e);return d*l});const a=5/e,c=Rf(r,o,a);if(e=Se(e),isNaN(c))return{stiffness:H.stiffness,damping:H.damping,duration:e};{const u=Math.pow(c,2)*i;return{stiffness:u,damping:s*2*Math.sqrt(i*u),duration:e}}}const Ef=12;function Rf(e,t,n){let i=n;for(let r=1;r<Ef;r++)i=i-e(i)/t(i);return i}function or(e,t){return e*Math.sqrt(1-t*t)}const Lf=["duration","bounce"],Vf=["stiffness","damping","mass"];function ms(e,t){return t.some(n=>e[n]!==void 0)}function If(e){let t={velocity:H.velocity,stiffness:H.stiffness,damping:H.damping,mass:H.mass,isResolvedFromDuration:!1,...e};if(!ms(e,Vf)&&ms(e,Lf))if(e.visualDuration){const n=e.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,o=2*Ae(.05,1,1-(e.bounce||0))*Math.sqrt(r);t={...t,mass:H.mass,stiffness:r,damping:o}}else{const n=Mf(e);t={...t,...n,mass:H.mass},t.isResolvedFromDuration=!0}return t}function qn(e=H.visualDuration,t=H.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:i,restDelta:r}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:c,damping:u,mass:d,duration:l,velocity:f,isResolvedFromDuration:m}=If({...n,velocity:-Pe(n.velocity||0)}),p=f||0,g=u/(2*Math.sqrt(c*d)),w=s-o,b=Pe(Math.sqrt(c/d)),x=Math.abs(w)<5;i||(i=x?H.restSpeed.granular:H.restSpeed.default),r||(r=x?H.restDelta.granular:H.restDelta.default);let v;if(g<1){const P=or(b,g);v=T=>{const k=Math.exp(-g*b*T);return s-k*((p+g*b*w)/P*Math.sin(P*T)+w*Math.cos(P*T))}}else if(g===1)v=P=>s-Math.exp(-b*P)*(w+(p+b*w)*P);else{const P=b*Math.sqrt(g*g-1);v=T=>{const k=Math.exp(-g*b*T),A=Math.min(P*T,300);return s-k*((p+g*b*w)*Math.sinh(A)+P*w*Math.cosh(A))/P}}const C={calculatedDuration:m&&l||null,next:P=>{const T=v(P);if(m)a.done=P>=l;else{let k=P===0?p:0;g<1&&(k=P===0?Se(p):ol(v,P,T));const A=Math.abs(k)<=i,E=Math.abs(s-T)<=r;a.done=A&&E}return a.value=a.done?s:T,a},toString:()=>{const P=Math.min(Kr(C),Kn),T=rl(k=>C.next(P*k).value,P,30);return P+"ms "+T},toTransition:()=>{}};return C}qn.applyToOptions=e=>{const t=$f(e,100,qn);return e.ease=t.ease,e.duration=Se(t.duration),e.type="keyframes",e};function sr({keyframes:e,velocity:t=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:c,restDelta:u=.5,restSpeed:d}){const l=e[0],f={done:!1,value:l},m=A=>a!==void 0&&A<a||c!==void 0&&A>c,p=A=>a===void 0?c:c===void 0||Math.abs(a-A)<Math.abs(c-A)?a:c;let g=n*t;const w=l+g,b=s===void 0?w:s(w);b!==w&&(g=b-l);const x=A=>-g*Math.exp(-A/i),v=A=>b+x(A),C=A=>{const E=x(A),z=v(A);f.done=Math.abs(E)<=u,f.value=f.done?b:z};let P,T;const k=A=>{m(f.value)&&(P=A,T=qn({keyframes:[f.value,p(f.value)],velocity:ol(v,A,f.value),damping:r,stiffness:o,restDelta:u,restSpeed:d}))};return k(0),{calculatedDuration:null,next:A=>{let E=!1;return!T&&P===void 0&&(E=!0,C(A),k(A)),P!==void 0&&A>=P?T.next(A-P):(!E&&C(A),f)}}}function Of(e,t,n){const i=[],r=n||Me.mix||il,o=e.length-1;for(let s=0;s<o;s++){let a=r(e[s],e[s+1]);if(t){const c=Array.isArray(t)?t[s]||fe:t;a=fn(c,a)}i.push(a)}return i}function jf(e,t,{clamp:n=!0,ease:i,mixer:r}={}){const o=e.length;if(jr(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=Of(t,i,r),c=a.length,u=d=>{if(s&&d<e[0])return t[0];let l=0;if(c>1)for(;l<e.length-2&&!(d<e[l+1]);l++);const f=tn(e[l],e[l+1],d);return a[l](f)};return n?d=>u(Ae(e[0],e[o-1],d)):u}function Ff(e,t){const n=e[e.length-1];for(let i=1;i<=t;i++){const r=tn(0,t,i);e.push(W(n,1,r))}}function Bf(e){const t=[0];return Ff(t,e.length-1),t}function Nf(e,t){return e.map(n=>n*t)}function Wf(e,t){return e.map(()=>t||Gc).splice(0,e.length-1)}function Gt({duration:e=300,keyframes:t,times:n,ease:i="easeInOut"}){const r=Qh(i)?i.map(cs):cs(i),o={done:!1,value:t[0]},s=Nf(n&&n.length===t.length?n:Bf(t),e),a=jf(s,t,{ease:Array.isArray(r)?r:Wf(t,r)});return{calculatedDuration:e,next:c=>(o.value=a(c),o.done=c>=e,o)}}const zf=e=>e!==null;function qr(e,{repeat:t,repeatType:n="loop"},i,r=1){const o=e.filter(zf),a=r<0||t&&n!=="loop"&&t%2===1?0:o.length-1;return!a||i===void 0?o[a]:i}const Hf={decay:sr,inertia:sr,tween:Gt,keyframes:Gt,spring:qn};function sl(e){typeof e.type=="string"&&(e.type=Hf[e.type])}class Xr{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const Uf=e=>e/100;class Jr extends Xr{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==se.now()&&this.tick(se.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;sl(t);const{type:n=Gt,repeat:i=0,repeatDelay:r=0,repeatType:o,velocity:s=0}=t;let{keyframes:a}=t;const c=n||Gt;c!==Gt&&typeof a[0]!="number"&&(this.mixKeyframes=fn(Uf,il(a[0],a[1])),a=[0,100]);const u=c({...t,keyframes:a});o==="mirror"&&(this.mirroredGenerator=c({...t,keyframes:[...a].reverse(),velocity:-s})),u.calculatedDuration===null&&(u.calculatedDuration=Kr(u));const{calculatedDuration:d}=u;this.calculatedDuration=d,this.resolvedDuration=d+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=u}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:i,totalDuration:r,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:a,calculatedDuration:c}=this;if(this.startTime===null)return i.next(0);const{delay:u=0,keyframes:d,repeat:l,repeatType:f,repeatDelay:m,type:p,onUpdate:g,finalKeyframe:w}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-r/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const b=this.currentTime-u*(this.playbackSpeed>=0?1:-1),x=this.playbackSpeed>=0?b<0:b>r;this.currentTime=Math.max(b,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let v=this.currentTime,C=i;if(l){const A=Math.min(this.currentTime,r)/a;let E=Math.floor(A),z=A%1;!z&&A>=1&&(z=1),z===1&&E--,E=Math.min(E,l+1),!!(E%2)&&(f==="reverse"?(z=1-z,m&&(z-=m/a)):f==="mirror"&&(C=s)),v=Ae(0,1,z)*a}const P=x?{done:!1,value:d[0]}:C.next(v);o&&(P.value=o(P.value));let{done:T}=P;!x&&c!==null&&(T=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const k=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return k&&p!==sr&&(P.value=qr(d,this.options,w,this.speed)),g&&g(P.value),k&&this.finish(),P}then(t,n){return this.finished.then(t,n)}get duration(){return Pe(this.calculatedDuration)}get time(){return Pe(this.currentTime)}set time(t){var n;t=Se(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(se.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=Pe(this.currentTime))}play(){var r,o;if(this.isStopped)return;const{driver:t=Df,startTime:n}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),(o=(r=this.options).onPlay)==null||o.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(se.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function Yf(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const Ze=e=>e*180/Math.PI,ar=e=>{const t=Ze(Math.atan2(e[1],e[0]));return cr(t)},Gf={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:ar,rotateZ:ar,skewX:e=>Ze(Math.atan(e[1])),skewY:e=>Ze(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},cr=e=>(e=e%360,e<0&&(e+=360),e),ps=ar,gs=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),ys=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Kf={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:gs,scaleY:ys,scale:e=>(gs(e)+ys(e))/2,rotateX:e=>cr(Ze(Math.atan2(e[6],e[5]))),rotateY:e=>cr(Ze(Math.atan2(-e[2],e[0]))),rotateZ:ps,rotate:ps,skewX:e=>Ze(Math.atan(e[4])),skewY:e=>Ze(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function lr(e){return e.includes("scale")?1:0}function ur(e,t){if(!e||e==="none")return lr(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=Kf,r=n;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=Gf,r=a}if(!r)return lr(t);const o=i[t],s=r[1].split(",").map(Xf);return typeof o=="function"?o(s):s[o]}const qf=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return ur(n,t)};function Xf(e){return parseFloat(e.trim())}const At=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Mt=new Set(At),bs=e=>e===$t||e===M,Jf=new Set(["x","y","z"]),Qf=At.filter(e=>!Jf.has(e));function Zf(e){const t=[];return Qf.forEach(n=>{const i=e.getValue(n);i!==void 0&&(t.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),t}const tt={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>ur(t,"x"),y:(e,{transform:t})=>ur(t,"y")};tt.translateX=tt.x;tt.translateY=tt.y;const nt=new Set;let dr=!1,hr=!1,fr=!1;function al(){if(hr){const e=Array.from(nt).filter(i=>i.needsMeasurement),t=new Set(e.map(i=>i.element)),n=new Map;t.forEach(i=>{const r=Zf(i);r.length&&(n.set(i,r),i.render())}),e.forEach(i=>i.measureInitialState()),t.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([o,s])=>{var a;(a=i.getValue(o))==null||a.set(s)})}),e.forEach(i=>i.measureEndState()),e.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}hr=!1,dr=!1,nt.forEach(e=>e.complete(fr)),nt.clear()}function cl(){nt.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(hr=!0)})}function em(){fr=!0,cl(),al(),fr=!1}class Qr{constructor(t,n,i,r,o,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=i,this.motionValue=r,this.element=o,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(nt.add(this),dr||(dr=!0,N.read(cl),N.resolveKeyframes(al))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:i,motionValue:r}=this;if(t[0]===null){const o=r==null?void 0:r.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(i&&n){const a=i.readValue(n,s);a!=null&&(t[0]=a)}t[0]===void 0&&(t[0]=s),r&&o===void 0&&r.set(t[0])}Yf(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),nt.delete(this)}cancel(){this.state==="scheduled"&&(nt.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const tm=e=>e.startsWith("--");function nm(e,t,n){tm(t)?e.style.setProperty(t,n):e.style[t]=n}const im=Fr(()=>window.ScrollTimeline!==void 0),rm={};function om(e,t){const n=Fr(e);return()=>rm[t]??n()}const ll=om(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),zt=([e,t,n,i])=>`cubic-bezier(${e}, ${t}, ${n}, ${i})`,vs={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:zt([0,.65,.55,1]),circOut:zt([.55,0,1,.45]),backIn:zt([.31,.01,.66,-.59]),backOut:zt([.33,1.53,.69,.99])};function ul(e,t){if(e)return typeof e=="function"?ll()?rl(e,t):"ease-out":Kc(e)?zt(e):Array.isArray(e)?e.map(n=>ul(n,t)||vs.easeOut):vs[e]}function sm(e,t,n,{delay:i=0,duration:r=300,repeat:o=0,repeatType:s="loop",ease:a="easeOut",times:c}={},u=void 0){const d={[t]:n};c&&(d.offset=c);const l=ul(a,r);Array.isArray(l)&&(d.easing=l);const f={delay:i,duration:r,easing:Array.isArray(l)?"linear":l,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"};return u&&(f.pseudoElement=u),e.animate(d,f)}function dl(e){return typeof e=="function"&&"applyToOptions"in e}function am({type:e,...t}){return dl(e)&&ll()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class cm extends Xr{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:n,name:i,keyframes:r,pseudoElement:o,allowFlatten:s=!1,finalKeyframe:a,onComplete:c}=t;this.isPseudoElement=!!o,this.allowFlatten=s,this.options=t,jr(typeof t.type!="string");const u=am(t);this.animation=sm(n,i,r,u,o),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const d=qr(r,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(d):nm(n,i,d),this.animation.cancel()}c==null||c(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,i;const t=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return Pe(Number(t))}get time(){return Pe(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=Se(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&im()?(this.animation.timeline=t,fe):n(this)}}const hl={anticipate:Hc,backInOut:zc,circInOut:Yc};function lm(e){return e in hl}function um(e){typeof e.ease=="string"&&lm(e.ease)&&(e.ease=hl[e.ease])}const xs=10;class dm extends cm{constructor(t){um(t),sl(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:i,onComplete:r,element:o,...s}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const a=new Jr({...s,autoplay:!1}),c=Se(this.finishedTime??this.time);n.setWithVelocity(a.sample(c-xs).value,a.sample(c).value,xs),a.stop()}}const ws=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Ne.test(e)||e==="0")&&!e.startsWith("url("));function hm(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function fm(e,t,n,i){const r=e[0];if(r===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=ws(r,t),a=ws(o,t);return!s||!a?!1:hm(e)||(n==="spring"||dl(n))&&i}function mr(e){e.duration=0,e.type}const mm=new Set(["opacity","clipPath","filter","transform"]),pm=Fr(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function gm(e){var d;const{motionValue:t,name:n,repeatDelay:i,repeatType:r,damping:o,type:s}=e;if(!(((d=t==null?void 0:t.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:u}=t.owner.getProps();return pm()&&n&&mm.has(n)&&(n!=="transform"||!u)&&!c&&!i&&r!=="mirror"&&o!==0&&s!=="inertia"}const ym=40;class bm extends Xr{constructor({autoplay:t=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:s="loop",keyframes:a,name:c,motionValue:u,element:d,...l}){var p;super(),this.stop=()=>{var g,w;this._animation&&(this._animation.stop(),(g=this.stopTimeline)==null||g.call(this)),(w=this.keyframeResolver)==null||w.cancel()},this.createdAt=se.now();const f={autoplay:t,delay:n,type:i,repeat:r,repeatDelay:o,repeatType:s,name:c,motionValue:u,element:d,...l},m=(d==null?void 0:d.KeyframeResolver)||Qr;this.keyframeResolver=new m(a,(g,w,b)=>this.onKeyframesResolved(g,w,f,!b),c,u,d),(p=this.keyframeResolver)==null||p.scheduleResolve()}onKeyframesResolved(t,n,i,r){this.keyframeResolver=void 0;const{name:o,type:s,velocity:a,delay:c,isHandoff:u,onUpdate:d}=i;this.resolvedAt=se.now(),fm(t,o,s,a)||((Me.instantAnimations||!c)&&(d==null||d(qr(t,i,n))),t[0]=t[t.length-1],mr(i),i.repeat=0);const f={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>ym?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:t},m=!u&&gm(f)?new dm({...f,element:f.motionValue.owner.current}):new Jr(f);m.finished.then(()=>this.notifyFinished()).catch(fe),this.pendingTimeline&&(this.stopTimeline=m.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),em()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const vm=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function xm(e){const t=vm.exec(e);if(!t)return[,];const[,n,i,r]=t;return[`--${n??i}`,r]}function fl(e,t,n=1){const[i,r]=xm(e);if(!i)return;const o=window.getComputedStyle(t).getPropertyValue(i);if(o){const s=o.trim();return Vc(s)?parseFloat(s):s}return Hr(r)?fl(r,t,n+1):r}function Zr(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const ml=new Set(["width","height","top","left","right","bottom",...At]),wm={test:e=>e==="auto",parse:e=>e},pl=e=>t=>t.test(e),gl=[$t,M,ke,Oe,hf,df,wm],_s=e=>gl.find(pl(e));function _m(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Oc(e):!0}const Sm=new Set(["brightness","contrast","saturate","opacity"]);function Pm(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[i]=n.match(Ur)||[];if(!i)return e;const r=n.replace(i,"");let o=Sm.has(t)?1:0;return i!==n&&(o*=100),t+"("+o+r+")"}const km=/\b([a-z-]*)\(.*?\)/gu,pr={...Ne,getAnimatableNone:e=>{const t=e.match(km);return t?t.map(Pm).join(" "):e}},Ss={...$t,transform:Math.round},Cm={rotate:Oe,rotateX:Oe,rotateY:Oe,rotateZ:Oe,scale:kn,scaleX:kn,scaleY:kn,scaleZ:kn,skew:Oe,skewX:Oe,skewY:Oe,distance:M,translateX:M,translateY:M,translateZ:M,x:M,y:M,z:M,perspective:M,transformPerspective:M,opacity:nn,originX:us,originY:us,originZ:M},eo={borderWidth:M,borderTopWidth:M,borderRightWidth:M,borderBottomWidth:M,borderLeftWidth:M,borderRadius:M,radius:M,borderTopLeftRadius:M,borderTopRightRadius:M,borderBottomRightRadius:M,borderBottomLeftRadius:M,width:M,maxWidth:M,height:M,maxHeight:M,top:M,right:M,bottom:M,left:M,padding:M,paddingTop:M,paddingRight:M,paddingBottom:M,paddingLeft:M,margin:M,marginTop:M,marginRight:M,marginBottom:M,marginLeft:M,backgroundPositionX:M,backgroundPositionY:M,...Cm,zIndex:Ss,fillOpacity:nn,strokeOpacity:nn,numOctaves:Ss},Tm={...eo,color:K,backgroundColor:K,outlineColor:K,fill:K,stroke:K,borderColor:K,borderTopColor:K,borderRightColor:K,borderBottomColor:K,borderLeftColor:K,filter:pr,WebkitFilter:pr},yl=e=>Tm[e];function bl(e,t){let n=yl(e);return n!==pr&&(n=Ne),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Dm=new Set(["auto","none","0"]);function $m(e,t,n){let i=0,r;for(;i<e.length&&!r;){const o=e[i];typeof o=="string"&&!Dm.has(o)&&rn(o).values.length&&(r=e[i]),i++}if(r&&n)for(const o of t)e[o]=bl(n,r)}class Am extends Qr{constructor(t,n,i,r,o){super(t,n,i,r,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let u=t[c];if(typeof u=="string"&&(u=u.trim(),Hr(u))){const d=fl(u,n.current);d!==void 0&&(t[c]=d),c===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!ml.has(i)||t.length!==2)return;const[r,o]=t,s=_s(r),a=_s(o);if(s!==a)if(bs(s)&&bs(a))for(let c=0;c<t.length;c++){const u=t[c];typeof u=="string"&&(t[c]=parseFloat(u))}else tt[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,i=[];for(let r=0;r<t.length;r++)(t[r]===null||_m(t[r]))&&i.push(r);i.length&&$m(t,i,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:i}=this;if(!t||!t.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=tt[i](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&t.getValue(i,r).jump(r,!1)}measureEndState(){var a;const{element:t,name:n,unresolvedKeyframes:i}=this;if(!t||!t.current)return;const r=t.getValue(n);r&&r.jump(this.measuredOrigin,!1);const o=i.length-1,s=i[o];i[o]=tt[n](t.measureViewportBox(),window.getComputedStyle(t.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([c,u])=>{t.getValue(c).set(u)}),this.resolveNoneKeyframes()}}function Mm(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let i=document;t&&(i=t.current);const r=(n==null?void 0:n[e])??i.querySelectorAll(e);return r?Array.from(r):[]}return Array.from(e)}const vl=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function Em(e){return Ic(e)&&"offsetHeight"in e}const Ps=30,Rm=e=>!isNaN(parseFloat(e));class Lm{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var o;const r=se.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=se.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Rm(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Br);const i=this.events[t].add(n);return t==="change"?()=>{i(),N.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-i}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=se.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Ps)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Ps);return jc(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function kt(e,t){return new Lm(e,t)}const{schedule:to,cancel:uv}=qc(queueMicrotask,!1),ye={x:!1,y:!1};function xl(){return ye.x||ye.y}function Vm(e){return e==="x"||e==="y"?ye[e]?null:(ye[e]=!0,()=>{ye[e]=!1}):ye.x||ye.y?null:(ye.x=ye.y=!0,()=>{ye.x=ye.y=!1})}function wl(e,t){const n=Mm(e),i=new AbortController,r={passive:!0,...t,signal:i.signal};return[n,r,()=>i.abort()]}function ks(e){return!(e.pointerType==="touch"||xl())}function Im(e,t,n={}){const[i,r,o]=wl(e,n),s=a=>{if(!ks(a))return;const{target:c}=a,u=t(c,a);if(typeof u!="function"||!c)return;const d=l=>{ks(l)&&(u(l),c.removeEventListener("pointerleave",d))};c.addEventListener("pointerleave",d,r)};return i.forEach(a=>{a.addEventListener("pointerenter",s,r)}),o}const _l=(e,t)=>t?e===t?!0:_l(e,t.parentElement):!1,no=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,Om=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function jm(e){return Om.has(e.tagName)||e.tabIndex!==-1}const Fn=new WeakSet;function Cs(e){return t=>{t.key==="Enter"&&e(t)}}function Ti(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Fm=(e,t)=>{const n=e.currentTarget;if(!n)return;const i=Cs(()=>{if(Fn.has(n))return;Ti(n,"down");const r=Cs(()=>{Ti(n,"up")}),o=()=>Ti(n,"cancel");n.addEventListener("keyup",r,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",i,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),t)};function Ts(e){return no(e)&&!xl()}function Bm(e,t,n={}){const[i,r,o]=wl(e,n),s=a=>{const c=a.currentTarget;if(!Ts(a))return;Fn.add(c);const u=t(c,a),d=(m,p)=>{window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",f),Fn.has(c)&&Fn.delete(c),Ts(m)&&typeof u=="function"&&u(m,{success:p})},l=m=>{d(m,c===window||c===document||n.useGlobalTarget||_l(c,m.target))},f=m=>{d(m,!1)};window.addEventListener("pointerup",l,r),window.addEventListener("pointercancel",f,r)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",s,r),Em(a)&&(a.addEventListener("focus",u=>Fm(u,r)),!jm(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),o}function Sl(e){return Ic(e)&&"ownerSVGElement"in e}function Nm(e){return Sl(e)&&e.tagName==="svg"}const te=e=>!!(e&&e.getVelocity),Wm=[...gl,K,Ne],zm=e=>Wm.find(pl(e)),Pl=We({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Hm(e=!0){const t=Q(Vr);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=t,o=tc();oe(()=>{if(e)return r(o)},[e]);const s=ei(()=>e&&i&&i(o),[o,i,e]);return!n&&i?[!1,s]:[!0]}const kl=We({strict:!1}),Ds={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ct={};for(const e in Ds)Ct[e]={isEnabled:t=>Ds[e].some(n=>!!t[n])};function Um(e){for(const t in e)Ct[t]={...Ct[t],...e[t]}}const Ym=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Xn(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Ym.has(e)}let Cl=e=>!Xn(e);function Gm(e){typeof e=="function"&&(Cl=t=>t.startsWith("on")?!Xn(t):e(t))}try{Gm(require("@emotion/is-prop-valid").default)}catch{}function Km(e,t,n){const i={};for(const r in e)r==="values"&&typeof e.values=="object"||(Cl(r)||n===!0&&Xn(r)||!t&&!Xn(r)||e.draggable&&r.startsWith("onDrag"))&&(i[r]=e[r]);return i}const ai=We({});function ci(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function on(e){return typeof e=="string"||Array.isArray(e)}const io=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ro=["initial",...io];function li(e){return ci(e.animate)||ro.some(t=>on(e[t]))}function Tl(e){return!!(li(e)||e.variants)}function qm(e,t){if(li(e)){const{initial:n,animate:i}=e;return{initial:n===!1||on(n)?n:void 0,animate:on(i)?i:void 0}}return e.inherit!==!1?t:{}}function Xm(e){const{initial:t,animate:n}=qm(e,Q(ai));return ze(()=>({initial:t,animate:n}),[$s(t),$s(n)])}function $s(e){return Array.isArray(e)?e.join(" "):e}const sn={};function Jm(e){for(const t in e)sn[t]=e[t],zr(t)&&(sn[t].isCSSVariable=!0)}function Dl(e,{layout:t,layoutId:n}){return Mt.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!sn[e]||e==="opacity")}const Qm={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Zm=At.length;function ep(e,t,n){let i="",r=!0;for(let o=0;o<Zm;o++){const s=At[o],a=e[s];if(a===void 0)continue;let c=!0;if(typeof a=="number"?c=a===(s.startsWith("scale")?1:0):c=parseFloat(a)===0,!c||n){const u=vl(a,eo[s]);if(!c){r=!1;const d=Qm[s]||s;i+=`${d}(${u}) `}n&&(t[s]=u)}}return i=i.trim(),n?i=n(t,r?"":i):r&&(i="none"),i}function oo(e,t,n){const{style:i,vars:r,transformOrigin:o}=e;let s=!1,a=!1;for(const c in t){const u=t[c];if(Mt.has(c)){s=!0;continue}else if(zr(c)){r[c]=u;continue}else{const d=vl(u,eo[c]);c.startsWith("origin")?(a=!0,o[c]=d):i[c]=d}}if(t.transform||(s||n?i.transform=ep(t,e.transform,n):i.transform&&(i.transform="none")),a){const{originX:c="50%",originY:u="50%",originZ:d=0}=o;i.transformOrigin=`${c} ${u} ${d}`}}const so=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function $l(e,t,n){for(const i in t)!te(t[i])&&!Dl(i,n)&&(e[i]=t[i])}function tp({transformTemplate:e},t){return ze(()=>{const n=so();return oo(n,t,e),Object.assign({},n.vars,n.style)},[t])}function np(e,t){const n=e.style||{},i={};return $l(i,n,e),Object.assign(i,tp(e,t)),i}function ip(e,t){const n={},i=np(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=i,n}const rp={offset:"stroke-dashoffset",array:"stroke-dasharray"},op={offset:"strokeDashoffset",array:"strokeDasharray"};function sp(e,t,n=1,i=0,r=!0){e.pathLength=1;const o=r?rp:op;e[o.offset]=M.transform(-i);const s=M.transform(t),a=M.transform(n);e[o.array]=`${s} ${a}`}function Al(e,{attrX:t,attrY:n,attrScale:i,pathLength:r,pathSpacing:o=1,pathOffset:s=0,...a},c,u,d){if(oo(e,a,u),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:l,style:f}=e;l.transform&&(f.transform=l.transform,delete l.transform),(f.transform||l.transformOrigin)&&(f.transformOrigin=l.transformOrigin??"50% 50%",delete l.transformOrigin),f.transform&&(f.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete l.transformBox),t!==void 0&&(l.x=t),n!==void 0&&(l.y=n),i!==void 0&&(l.scale=i),r!==void 0&&sp(l,r,o,s,!1)}const Ml=()=>({...so(),attrs:{}}),El=e=>typeof e=="string"&&e.toLowerCase()==="svg";function ap(e,t,n,i){const r=ze(()=>{const o=Ml();return Al(o,t,El(i),e.transformTemplate,e.style),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};$l(o,e.style,e),r.style={...o,...r.style}}return r}const cp=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ao(e){return typeof e!="string"||e.includes("-")?!1:!!(cp.indexOf(e)>-1||/[A-Z]/u.test(e))}function lp(e,t,n,{latestValues:i},r,o=!1){const a=(ao(e)?ap:ip)(t,i,r,e),c=Km(t,typeof e=="string",o),u=e!==Z?{...c,...a,ref:n}:{},{children:d}=t,l=ze(()=>te(d)?d.get():d,[d]);return xe(e,{...u,children:l})}function As(e){const t=[{},{}];return e==null||e.values.forEach((n,i)=>{t[0][i]=n.get(),t[1][i]=n.getVelocity()}),t}function co(e,t,n,i){if(typeof t=="function"){const[r,o]=As(i);t=t(n!==void 0?n:e.custom,r,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[r,o]=As(i);t=t(n!==void 0?n:e.custom,r,o)}return t}function Bn(e){return te(e)?e.get():e}function up({scrapeMotionValuesFromProps:e,createRenderState:t},n,i,r){return{latestValues:dp(n,i,r,e),renderState:t()}}function dp(e,t,n,i){const r={},o=i(e,{});for(const f in o)r[f]=Bn(o[f]);let{initial:s,animate:a}=e;const c=li(e),u=Tl(e);t&&u&&!c&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let d=n?n.initial===!1:!1;d=d||s===!1;const l=d?a:s;if(l&&typeof l!="boolean"&&!ci(l)){const f=Array.isArray(l)?l:[l];for(let m=0;m<f.length;m++){const p=co(e,f[m]);if(p){const{transitionEnd:g,transition:w,...b}=p;for(const x in b){let v=b[x];if(Array.isArray(v)){const C=d?v.length-1:0;v=v[C]}v!==null&&(r[x]=v)}for(const x in g)r[x]=g[x]}}}return r}const Rl=e=>(t,n)=>{const i=Q(ai),r=Q(Vr),o=()=>up(e,t,i,r);return n?o():Hh(o)};function lo(e,t,n){var o;const{style:i}=e,r={};for(const s in i)(te(i[s])||t.style&&te(t.style[s])||Dl(s,e)||((o=n==null?void 0:n.getValue(s))==null?void 0:o.liveStyle)!==void 0)&&(r[s]=i[s]);return r}const hp=Rl({scrapeMotionValuesFromProps:lo,createRenderState:so});function Ll(e,t,n){const i=lo(e,t,n);for(const r in e)if(te(e[r])||te(t[r])){const o=At.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[o]=e[r]}return i}const fp=Rl({scrapeMotionValuesFromProps:Ll,createRenderState:Ml}),mp=Symbol.for("motionComponentSymbol");function ht(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function pp(e,t,n){return ei(i=>{i&&e.onMount&&e.onMount(i),t&&(i?t.mount(i):t.unmount()),n&&(typeof n=="function"?n(i):ht(n)&&(n.current=i))},[t])}const uo=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),gp="framerAppearId",Vl="data-"+uo(gp),Il=We({});function yp(e,t,n,i,r){var g,w;const{visualElement:o}=Q(ai),s=Q(kl),a=Q(Vr),c=Q(Pl).reducedMotion,u=he(null);i=i||s.renderer,!u.current&&i&&(u.current=i(e,{visualState:t,parent:o,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:c}));const d=u.current,l=Q(Il);d&&!d.projection&&r&&(d.type==="html"||d.type==="svg")&&bp(u.current,n,r,l);const f=he(!1);uc(()=>{d&&f.current&&d.update(n,a)});const m=n[Vl],p=he(!!m&&!((g=window.MotionHandoffIsComplete)!=null&&g.call(window,m))&&((w=window.MotionHasOptimisedAnimation)==null?void 0:w.call(window,m)));return Uh(()=>{d&&(f.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),d.scheduleRenderMicrotask(),p.current&&d.animationState&&d.animationState.animateChanges())}),oe(()=>{d&&(!p.current&&d.animationState&&d.animationState.animateChanges(),p.current&&(queueMicrotask(()=>{var b;(b=window.MotionHandoffMarkAsComplete)==null||b.call(window,m)}),p.current=!1),d.enteringChildren=void 0)}),d}function bp(e,t,n,i){const{layoutId:r,layout:o,drag:s,dragConstraints:a,layoutScroll:c,layoutRoot:u,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Ol(e.parent)),e.projection.setOptions({layoutId:r,layout:o,alwaysMeasureLayout:!!s||a&&ht(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:i,crossfade:d,layoutScroll:c,layoutRoot:u})}function Ol(e){if(e)return e.options.allowProjection!==!1?e.projection:Ol(e.parent)}function Di(e,{forwardMotionProps:t=!1}={},n,i){n&&Um(n);const r=ao(e)?fp:hp;function o(a,c){let u;const d={...Q(Pl),...a,layoutId:vp(a)},{isStatic:l}=d,f=Xm(a),m=r(a,l);if(!l&&Lr){xp();const p=wp(d);u=p.MeasureLayout,f.visualElement=yp(e,m,d,i,p.ProjectionNode)}return h(ai.Provider,{value:f,children:[u&&f.visualElement?h(u,{visualElement:f.visualElement,...d}):null,lp(e,a,pp(m,f.visualElement,c),m,l,t)]})}o.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const s=rc(o);return s[mp]=e,s}function vp({layoutId:e}){const t=Q(Lc).id;return t&&e!==void 0?t+"-"+e:e}function xp(e,t){Q(kl).strict}function wp(e){const{drag:t,layout:n}=Ct;if(!t&&!n)return{};const i={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function _p(e,t){if(typeof Proxy>"u")return Di;const n=new Map,i=(o,s)=>Di(o,s,e,t),r=(o,s)=>i(o,s);return new Proxy(r,{get:(o,s)=>s==="create"?i:(n.has(s)||n.set(s,Di(s,void 0,e,t)),n.get(s))})}function jl({top:e,left:t,right:n,bottom:i}){return{x:{min:t,max:n},y:{min:e,max:i}}}function Sp({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Pp(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),i=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function $i(e){return e===void 0||e===1}function gr({scale:e,scaleX:t,scaleY:n}){return!$i(e)||!$i(t)||!$i(n)}function Ke(e){return gr(e)||Fl(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Fl(e){return Ms(e.x)||Ms(e.y)}function Ms(e){return e&&e!=="0%"}function Jn(e,t,n){const i=e-n,r=t*i;return n+r}function Es(e,t,n,i,r){return r!==void 0&&(e=Jn(e,r,i)),Jn(e,n,i)+t}function yr(e,t=0,n=1,i,r){e.min=Es(e.min,t,n,i,r),e.max=Es(e.max,t,n,i,r)}function Bl(e,{x:t,y:n}){yr(e.x,t.translate,t.scale,t.originPoint),yr(e.y,n.translate,n.scale,n.originPoint)}const Rs=.999999999999,Ls=1.0000000000001;function kp(e,t,n,i=!1){const r=n.length;if(!r)return;t.x=t.y=1;let o,s;for(let a=0;a<r;a++){o=n[a],s=o.projectionDelta;const{visualElement:c}=o.options;c&&c.props.style&&c.props.style.display==="contents"||(i&&o.options.layoutScroll&&o.scroll&&o!==o.root&&mt(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,Bl(e,s)),i&&Ke(o.latestValues)&&mt(e,o.latestValues))}t.x<Ls&&t.x>Rs&&(t.x=1),t.y<Ls&&t.y>Rs&&(t.y=1)}function ft(e,t){e.min=e.min+t,e.max=e.max+t}function Vs(e,t,n,i,r=.5){const o=W(e.min,e.max,r);yr(e,t,n,o,i)}function mt(e,t){Vs(e.x,t.x,t.scaleX,t.scale,t.originX),Vs(e.y,t.y,t.scaleY,t.scale,t.originY)}function Nl(e,t){return jl(Pp(e.getBoundingClientRect(),t))}function Cp(e,t,n){const i=Nl(e,n),{scroll:r}=t;return r&&(ft(i.x,r.offset.x),ft(i.y,r.offset.y)),i}const Is=()=>({translate:0,scale:1,origin:0,originPoint:0}),pt=()=>({x:Is(),y:Is()}),Os=()=>({min:0,max:0}),U=()=>({x:Os(),y:Os()}),br={current:null},Wl={current:!1};function Tp(){if(Wl.current=!0,!!Lr)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>br.current=e.matches;e.addEventListener("change",t),t()}else br.current=!1}const Dp=new WeakMap;function $p(e,t,n){for(const i in t){const r=t[i],o=n[i];if(te(r))e.addValue(i,r);else if(te(o))e.addValue(i,kt(r,{owner:e}));else if(o!==r)if(e.hasValue(i)){const s=e.getValue(i);s.liveStyle===!0?s.jump(r):s.hasAnimated||s.set(r)}else{const s=e.getStaticValue(i);e.addValue(i,kt(s!==void 0?s:r,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const js=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Ap{scrapeMotionValuesFromProps(t,n,i){return{}}constructor({parent:t,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Qr,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const f=se.now();this.renderScheduledAt<f&&(this.renderScheduledAt=f,N.render(this.render,!1,!0))};const{latestValues:c,renderState:u}=s;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=i,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=li(n),this.isVariantNode=Tl(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...l}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in l){const m=l[f];c[f]!==void 0&&te(m)&&m.set(c[f])}}mount(t){var n;this.current=t,Dp.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,r)=>this.bindToMotionValue(r,i)),Wl.current||Tp(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:br.current,(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Be(this.notifyUpdate),Be(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const i=Mt.has(t);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&N.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{r(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Ct){const n=Ct[t];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[t]&&r&&i(this.props)&&(this.features[t]=new r(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):U()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<js.length;i++){const r=js[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const o="on"+r,s=t[o];s&&(this.propEventSubscriptions[r]=this.on(r,s))}this.prevMotionValues=$p(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const i=this.values.get(t);n!==i&&(i&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let i=this.values.get(t);return i===void 0&&n!==void 0&&(i=kt(n===null?void 0:n,{owner:this}),this.addValue(t,i)),i}readValue(t,n){let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(Vc(i)||Oc(i))?i=parseFloat(i):!zm(i)&&Ne.test(n)&&(i=bl(t,n)),this.setBaseTarget(t,te(i)?i.get():i)),te(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var o;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const s=co(this.props,n,(o=this.presenceContext)==null?void 0:o.custom);s&&(i=s[t])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,t);return r!==void 0&&!te(r)?r:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Br),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){to.render(this.render)}}class zl extends Ap{constructor(){super(...arguments),this.KeyframeResolver=Am}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:i}){delete n[t],delete i[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;te(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function Hl(e,{style:t,vars:n},i,r){const o=e.style;let s;for(s in t)o[s]=t[s];r==null||r.applyProjectionStyles(o,i);for(s in n)o.setProperty(s,n[s])}function Mp(e){return window.getComputedStyle(e)}class Ep extends zl{constructor(){super(...arguments),this.type="html",this.renderInstance=Hl}readValueFromInstance(t,n){var i;if(Mt.has(n))return(i=this.projection)!=null&&i.isProjecting?lr(n):qf(t,n);{const r=Mp(t),o=(zr(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return Nl(t,n)}build(t,n,i){oo(t,n,i.transformTemplate)}scrapeMotionValuesFromProps(t,n,i){return lo(t,n,i)}}const Ul=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Rp(e,t,n,i){Hl(e,t,void 0,i);for(const r in t.attrs)e.setAttribute(Ul.has(r)?r:uo(r),t.attrs[r])}class Lp extends zl{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=U}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Mt.has(n)){const i=yl(n);return i&&i.default||0}return n=Ul.has(n)?n:uo(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,i){return Ll(t,n,i)}build(t,n,i){Al(t,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(t,n,i,r){Rp(t,n,i,r)}mount(t){this.isSVGTag=El(t.tagName),super.mount(t)}}const Vp=(e,t)=>ao(e)?new Lp(t):new Ep(t,{allowProjection:e!==Z});function gt(e,t,n){const i=e.getProps();return co(i,t,n!==void 0?n:i.custom,e)}const vr=e=>Array.isArray(e);function Ip(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,kt(n))}function Op(e){return vr(e)?e[e.length-1]||0:e}function jp(e,t){const n=gt(e,t);let{transitionEnd:i={},transition:r={},...o}=n||{};o={...o,...i};for(const s in o){const a=Op(o[s]);Ip(e,s,a)}}function Fp(e){return!!(te(e)&&e.add)}function xr(e,t){const n=e.getValue("willChange");if(Fp(n))return n.add(t);if(!n&&Me.WillChange){const i=new Me.WillChange("auto");e.addValue("willChange",i),i.add(t)}}function Yl(e){return e.props[Vl]}const Bp=e=>e!==null;function Np(e,{repeat:t,repeatType:n="loop"},i){const r=e.filter(Bp),o=t&&n!=="loop"&&t%2===1?0:r.length-1;return!o||i===void 0?r[o]:i}const Wp={type:"spring",stiffness:500,damping:25,restSpeed:10},zp=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Hp={type:"keyframes",duration:.8},Up={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Yp=(e,{keyframes:t})=>t.length>2?Hp:Mt.has(e)?e.startsWith("scale")?zp(t[1]):Wp:Up;function Gp({when:e,delay:t,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:o,repeatType:s,repeatDelay:a,from:c,elapsed:u,...d}){return!!Object.keys(d).length}const ho=(e,t,n,i={},r,o)=>s=>{const a=Zr(i,e)||{},c=a.delay||i.delay||0;let{elapsed:u=0}=i;u=u-Se(c);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-u,onUpdate:f=>{t.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:r};Gp(a)||Object.assign(d,Yp(e,d)),d.duration&&(d.duration=Se(d.duration)),d.repeatDelay&&(d.repeatDelay=Se(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let l=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(mr(d),d.delay===0&&(l=!0)),(Me.instantAnimations||Me.skipAnimations)&&(l=!0,mr(d),d.delay=0),d.allowFlatten=!a.type&&!a.ease,l&&!o&&t.get()!==void 0){const f=Np(d.keyframes,a);if(f!==void 0){N.update(()=>{d.onUpdate(f),d.onComplete()});return}}return a.isSync?new Jr(d):new bm(d)};function Kp({protectedKeys:e,needsAnimating:t},n){const i=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,i}function Gl(e,t,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=t;i&&(o=i);const c=[],u=r&&e.animationState&&e.animationState.getState()[r];for(const d in a){const l=e.getValue(d,e.latestValues[d]??null),f=a[d];if(f===void 0||u&&Kp(u,d))continue;const m={delay:n,...Zr(o||{},d)},p=l.get();if(p!==void 0&&!l.isAnimating&&!Array.isArray(f)&&f===p&&!m.velocity)continue;let g=!1;if(window.MotionHandoffAnimation){const b=Yl(e);if(b){const x=window.MotionHandoffAnimation(b,d,N);x!==null&&(m.startTime=x,g=!0)}}xr(e,d),l.start(ho(d,l,f,e.shouldReduceMotion&&ml.has(d)?{type:!1}:m,e,g));const w=l.animation;w&&c.push(w)}return s&&Promise.all(c).then(()=>{N.update(()=>{s&&jp(e,s)})}),c}function Kl(e,t,n,i=0,r=1){const o=Array.from(e).sort((u,d)=>u.sortNodePosition(d)).indexOf(t),s=e.size,a=(s-1)*i;return typeof n=="function"?n(o,s):r===1?o*i:a-o*i}function wr(e,t,n={}){var c;const i=gt(e,t,n.type==="exit"?(c=e.presenceContext)==null?void 0:c.custom:void 0);let{transition:r=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const o=i?()=>Promise.all(Gl(e,i,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:l,staggerDirection:f}=r;return qp(e,t,u,d,l,f,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[u,d]=a==="beforeChildren"?[o,s]:[s,o];return u().then(()=>d())}else return Promise.all([o(),s(n.delay)])}function qp(e,t,n=0,i=0,r=0,o=1,s){const a=[];for(const c of e.variantChildren)c.notify("AnimationStart",t),a.push(wr(c,t,{...s,delay:n+(typeof i=="function"?0:i)+Kl(e.variantChildren,c,i,r,o)}).then(()=>c.notify("AnimationComplete",t)));return Promise.all(a)}function Xp(e,t,n={}){e.notify("AnimationStart",t);let i;if(Array.isArray(t)){const r=t.map(o=>wr(e,o,n));i=Promise.all(r)}else if(typeof t=="string")i=wr(e,t,n);else{const r=typeof t=="function"?gt(e,t,n.custom):t;i=Promise.all(Gl(e,r,n))}return i.then(()=>{e.notify("AnimationComplete",t)})}function ql(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let i=0;i<n;i++)if(t[i]!==e[i])return!1;return!0}const Jp=ro.length;function Xl(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Xl(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<Jp;n++){const i=ro[n],r=e.props[i];(on(r)||r===!1)&&(t[i]=r)}return t}const Qp=[...io].reverse(),Zp=io.length;function eg(e){return t=>Promise.all(t.map(({animation:n,options:i})=>Xp(e,n,i)))}function tg(e){let t=eg(e),n=Fs(),i=!0;const r=c=>(u,d)=>{var f;const l=gt(e,d,c==="exit"?(f=e.presenceContext)==null?void 0:f.custom:void 0);if(l){const{transition:m,transitionEnd:p,...g}=l;u={...u,...g,...p}}return u};function o(c){t=c(e)}function s(c){const{props:u}=e,d=Xl(e.parent)||{},l=[],f=new Set;let m={},p=1/0;for(let w=0;w<Zp;w++){const b=Qp[w],x=n[b],v=u[b]!==void 0?u[b]:d[b],C=on(v),P=b===c?x.isActive:null;P===!1&&(p=w);let T=v===d[b]&&v!==u[b]&&C;if(T&&i&&e.manuallyAnimateOnMount&&(T=!1),x.protectedKeys={...m},!x.isActive&&P===null||!v&&!x.prevProp||ci(v)||typeof v=="boolean")continue;const k=ng(x.prevProp,v);let A=k||b===c&&x.isActive&&!T&&C||w>p&&C,E=!1;const z=Array.isArray(v)?v:[v];let ge=z.reduce(r(b),{});P===!1&&(ge={});const{prevResolvedValues:rt={}}=x,Et={...rt,...ge},ot=B=>{A=!0,f.has(B)&&(E=!0,f.delete(B)),x.needsAnimating[B]=!0;const O=e.getValue(B);O&&(O.liveStyle=!1)};for(const B in Et){const O=ge[B],ne=rt[B];if(m.hasOwnProperty(B))continue;let ie=!1;vr(O)&&vr(ne)?ie=!ql(O,ne):ie=O!==ne,ie?O!=null?ot(B):f.add(B):O!==void 0&&f.has(B)?ot(B):x.protectedKeys[B]=!0}x.prevProp=v,x.prevResolvedValues=ge,x.isActive&&(m={...m,...ge}),i&&e.blockInitialAnimation&&(A=!1);const st=T&&k;A&&(!st||E)&&l.push(...z.map(B=>{const O={type:b};if(typeof B=="string"&&i&&!st&&e.manuallyAnimateOnMount&&e.parent){const{parent:ne}=e,ie=gt(ne,B);if(ne.enteringChildren&&ie){const{delayChildren:ce}=ie.transition||{};O.delay=Kl(ne.enteringChildren,e,ce)}}return{animation:B,options:O}}))}if(f.size){const w={};if(typeof u.initial!="boolean"){const b=gt(e,Array.isArray(u.initial)?u.initial[0]:u.initial);b&&b.transition&&(w.transition=b.transition)}f.forEach(b=>{const x=e.getBaseTarget(b),v=e.getValue(b);v&&(v.liveStyle=!0),w[b]=x??null}),l.push({animation:w})}let g=!!l.length;return i&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(g=!1),i=!1,g?t(l):Promise.resolve()}function a(c,u){var l;if(n[c].isActive===u)return Promise.resolve();(l=e.variantChildren)==null||l.forEach(f=>{var m;return(m=f.animationState)==null?void 0:m.setActive(c,u)}),n[c].isActive=u;const d=s(c);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Fs(),i=!0}}}function ng(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!ql(t,e):!1}function Ge(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Fs(){return{animate:Ge(!0),whileInView:Ge(),whileHover:Ge(),whileTap:Ge(),whileDrag:Ge(),whileFocus:Ge(),exit:Ge()}}class He{constructor(t){this.isMounted=!1,this.node=t}update(){}}class ig extends He{constructor(t){super(t),t.animationState||(t.animationState=tg(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();ci(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let rg=0;class og extends He{constructor(){super(...arguments),this.id=rg++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const r=this.node.animationState.setActive("exit",!t);n&&!t&&r.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const sg={animation:{Feature:ig},exit:{Feature:og}};function an(e,t,n,i={passive:!0}){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n)}function gn(e){return{point:{x:e.pageX,y:e.pageY}}}const ag=e=>t=>no(t)&&e(t,gn(t));function Kt(e,t,n,i){return an(e,t,ag(n),i)}const Jl=1e-4,cg=1-Jl,lg=1+Jl,Ql=.01,ug=0-Ql,dg=0+Ql;function re(e){return e.max-e.min}function hg(e,t,n){return Math.abs(e-t)<=n}function Bs(e,t,n,i=.5){e.origin=i,e.originPoint=W(t.min,t.max,e.origin),e.scale=re(n)/re(t),e.translate=W(n.min,n.max,e.origin)-e.originPoint,(e.scale>=cg&&e.scale<=lg||isNaN(e.scale))&&(e.scale=1),(e.translate>=ug&&e.translate<=dg||isNaN(e.translate))&&(e.translate=0)}function qt(e,t,n,i){Bs(e.x,t.x,n.x,i?i.originX:void 0),Bs(e.y,t.y,n.y,i?i.originY:void 0)}function Ns(e,t,n){e.min=n.min+t.min,e.max=e.min+re(t)}function fg(e,t,n){Ns(e.x,t.x,n.x),Ns(e.y,t.y,n.y)}function Ws(e,t,n){e.min=t.min-n.min,e.max=e.min+re(t)}function Xt(e,t,n){Ws(e.x,t.x,n.x),Ws(e.y,t.y,n.y)}function de(e){return[e("x"),e("y")]}const Zl=({current:e})=>e?e.ownerDocument.defaultView:null,zs=(e,t)=>Math.abs(e-t);function mg(e,t){const n=zs(e.x,t.x),i=zs(e.y,t.y);return Math.sqrt(n**2+i**2)}class eu{constructor(t,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:o=!1,distanceThreshold:s=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Mi(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,p=mg(f.offset,{x:0,y:0})>=this.distanceThreshold;if(!m&&!p)return;const{point:g}=f,{timestamp:w}=J;this.history.push({...g,timestamp:w});const{onStart:b,onMove:x}=this.handlers;m||(b&&b(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,f)},this.handlePointerMove=(f,m)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Ai(m,this.transformPagePoint),N.update(this.updatePoint,!0)},this.handlePointerUp=(f,m)=>{this.end();const{onEnd:p,onSessionEnd:g,resumeAnimation:w}=this.handlers;if(this.dragSnapToOrigin&&w&&w(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Mi(f.type==="pointercancel"?this.lastMoveEventInfo:Ai(m,this.transformPagePoint),this.history);this.startEvent&&p&&p(f,b),g&&g(f,b)},!no(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=s,this.contextWindow=r||window;const a=gn(t),c=Ai(a,this.transformPagePoint),{point:u}=c,{timestamp:d}=J;this.history=[{...u,timestamp:d}];const{onSessionStart:l}=n;l&&l(t,Mi(c,this.history)),this.removeListeners=fn(Kt(this.contextWindow,"pointermove",this.handlePointerMove),Kt(this.contextWindow,"pointerup",this.handlePointerUp),Kt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Be(this.updatePoint)}}function Ai(e,t){return t?{point:t(e.point)}:e}function Hs(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Mi({point:e},t){return{point:e,delta:Hs(e,tu(t)),offset:Hs(e,pg(t)),velocity:gg(t,.1)}}function pg(e){return e[0]}function tu(e){return e[e.length-1]}function gg(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,i=null;const r=tu(e);for(;n>=0&&(i=e[n],!(r.timestamp-i.timestamp>Se(t)));)n--;if(!i)return{x:0,y:0};const o=Pe(r.timestamp-i.timestamp);if(o===0)return{x:0,y:0};const s={x:(r.x-i.x)/o,y:(r.y-i.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function yg(e,{min:t,max:n},i){return t!==void 0&&e<t?e=i?W(t,e,i.min):Math.max(e,t):n!==void 0&&e>n&&(e=i?W(n,e,i.max):Math.min(e,n)),e}function Us(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function bg(e,{top:t,left:n,bottom:i,right:r}){return{x:Us(e.x,n,r),y:Us(e.y,t,i)}}function Ys(e,t){let n=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,i]=[i,n]),{min:n,max:i}}function vg(e,t){return{x:Ys(e.x,t.x),y:Ys(e.y,t.y)}}function xg(e,t){let n=.5;const i=re(e),r=re(t);return r>i?n=tn(t.min,t.max-i,e.min):i>r&&(n=tn(e.min,e.max-r,t.min)),Ae(0,1,n)}function wg(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const _r=.35;function _g(e=_r){return e===!1?e=0:e===!0&&(e=_r),{x:Gs(e,"left","right"),y:Gs(e,"top","bottom")}}function Gs(e,t,n){return{min:Ks(e,t),max:Ks(e,n)}}function Ks(e,t){return typeof e=="number"?e:e[t]||0}const Sg=new WeakMap;class Pg{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=U(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=l=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(gn(l).point)},s=(l,f)=>{const{drag:m,dragPropagation:p,onDragStart:g}=this.getProps();if(m&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Vm(m),!this.openDragLock))return;this.latestPointerEvent=l,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),de(b=>{let x=this.getAxisMotionValue(b).get()||0;if(ke.test(x)){const{projection:v}=this.visualElement;if(v&&v.layout){const C=v.layout.layoutBox[b];C&&(x=re(C)*(parseFloat(x)/100))}}this.originPoint[b]=x}),g&&N.postRender(()=>g(l,f)),xr(this.visualElement,"transform");const{animationState:w}=this.visualElement;w&&w.setActive("whileDrag",!0)},a=(l,f)=>{this.latestPointerEvent=l,this.latestPanInfo=f;const{dragPropagation:m,dragDirectionLock:p,onDirectionLock:g,onDrag:w}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:b}=f;if(p&&this.currentDirection===null){this.currentDirection=kg(b),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",f.point,b),this.updateAxis("y",f.point,b),this.visualElement.render(),w&&w(l,f)},c=(l,f)=>{this.latestPointerEvent=l,this.latestPanInfo=f,this.stop(l,f),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>de(l=>{var f;return this.getAnimationState(l)==="paused"&&((f=this.getAxisMotionValue(l).animation)==null?void 0:f.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new eu(t,{onSessionStart:o,onStart:s,onMove:a,onSessionEnd:c,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:i,contextWindow:Zl(this.visualElement)})}stop(t,n){const i=t||this.latestPointerEvent,r=n||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!r||!i)return;const{velocity:s}=r;this.startAnimation(s);const{onDragEnd:a}=this.getProps();a&&N.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,i){const{drag:r}=this.getProps();if(!i||!Cn(t,r,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(s=yg(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var o;const{dragConstraints:t,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,r=this.constraints;t&&ht(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&i?this.constraints=bg(i.layoutBox,t):this.constraints=!1,this.elastic=_g(n),r!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&de(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=wg(i.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ht(t))return!1;const i=t.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const o=Cp(i,r.root,this.visualElement.getTransformPagePoint());let s=vg(r.layout.layoutBox,o);if(n){const a=n(Sp(s));this.hasMutatedConstraints=!!a,a&&(s=jl(a))}return s}startAnimation(t){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),c=this.constraints||{},u=de(d=>{if(!Cn(d,n,this.currentDirection))return;let l=c&&c[d]||{};s&&(l={min:0,max:0});const f=r?200:1e6,m=r?40:1e7,p={type:"inertia",velocity:i?t[d]:0,bounceStiffness:f,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...o,...l};return this.startAxisValueAnimation(d,p)});return Promise.all(u).then(a)}startAxisValueAnimation(t,n){const i=this.getAxisMotionValue(t);return xr(this.visualElement,t),i.start(ho(t,i,0,n,this.visualElement,!1))}stopAnimation(){de(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){de(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){de(n=>{const{drag:i}=this.getProps();if(!Cn(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,o=this.getAxisMotionValue(n);if(r&&r.layout){const{min:s,max:a}=r.layout.layoutBox[n];o.set(t[n]-W(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!ht(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};de(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const c=a.get();r[s]=xg({min:c,max:c},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),de(s=>{if(!Cn(s,t,null))return;const a=this.getAxisMotionValue(s),{min:c,max:u}=this.constraints[s];a.set(W(c,u,r[s]))})}addListeners(){if(!this.visualElement.current)return;Sg.set(this.visualElement,this);const t=this.visualElement.current,n=Kt(t,"pointerdown",c=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(c)}),i=()=>{const{dragConstraints:c}=this.getProps();ht(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,o=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),N.read(i);const s=an(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:c,hasLayoutChanged:u})=>{this.isDragging&&u&&(de(d=>{const l=this.getAxisMotionValue(d);l&&(this.originPoint[d]+=c[d].translate,l.set(l.get()+c[d].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:o=!1,dragElastic:s=_r,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Cn(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function kg(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Cg extends He{constructor(t){super(t),this.removeGroupControls=fe,this.removeListeners=fe,this.controls=new Pg(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||fe}unmount(){this.removeGroupControls(),this.removeListeners()}}const qs=e=>(t,n)=>{e&&N.postRender(()=>e(t,n))};class Tg extends He{constructor(){super(...arguments),this.removePointerDownListener=fe}onPointerDown(t){this.session=new eu(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Zl(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:qs(t),onStart:qs(n),onMove:i,onEnd:(o,s)=>{delete this.session,r&&N.postRender(()=>r(o,s))}}}mount(){this.removePointerDownListener=Kt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Nn={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Xs(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ot={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(M.test(e))e=parseFloat(e);else return e;const n=Xs(e,t.target.x),i=Xs(e,t.target.y);return`${n}% ${i}%`}},Dg={correct:(e,{treeScale:t,projectionDelta:n})=>{const i=e,r=Ne.parse(e);if(r.length>5)return i;const o=Ne.createTransformer(e),s=typeof r[0]!="number"?1:0,a=n.x.scale*t.x,c=n.y.scale*t.y;r[0+s]/=a,r[1+s]/=c;const u=W(a,c,.5);return typeof r[2+s]=="number"&&(r[2+s]/=u),typeof r[3+s]=="number"&&(r[3+s]/=u),o(r)}};let Ei=!1;class $g extends be{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:o}=t;Jm(Ag),o&&(n.group&&n.group.add(o),i&&i.register&&r&&i.register(o),Ei&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Nn.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:i,drag:r,isPresent:o}=this.props,{projection:s}=i;return s&&(s.isPresent=o,Ei=!0,r||t.layoutDependency!==n||n===void 0||t.isPresent!==o?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||N.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),to.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=t;Ei=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function nu(e){const[t,n]=Hm(),i=Q(Lc);return h($g,{...e,layoutGroup:i,switchLayoutGroup:Q(Il),isPresent:t,safeToRemove:n})}const Ag={borderRadius:{...Ot,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ot,borderTopRightRadius:Ot,borderBottomLeftRadius:Ot,borderBottomRightRadius:Ot,boxShadow:Dg};function Mg(e,t,n){const i=te(e)?e:kt(e);return i.start(ho("",i,t,n)),i.animation}const Eg=(e,t)=>e.depth-t.depth;class Rg{constructor(){this.children=[],this.isDirty=!1}add(t){Ir(this.children,t),this.isDirty=!0}remove(t){Or(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Eg),this.isDirty=!1,this.children.forEach(t)}}function Lg(e,t){const n=se.now(),i=({timestamp:r})=>{const o=r-n;o>=t&&(Be(i),e(o-t))};return N.setup(i,!0),()=>Be(i)}const iu=["TopLeft","TopRight","BottomLeft","BottomRight"],Vg=iu.length,Js=e=>typeof e=="string"?parseFloat(e):e,Qs=e=>typeof e=="number"||M.test(e);function Ig(e,t,n,i,r,o){r?(e.opacity=W(0,n.opacity??1,Og(i)),e.opacityExit=W(t.opacity??1,0,jg(i))):o&&(e.opacity=W(t.opacity??1,n.opacity??1,i));for(let s=0;s<Vg;s++){const a=`border${iu[s]}Radius`;let c=Zs(t,a),u=Zs(n,a);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||Qs(c)===Qs(u)?(e[a]=Math.max(W(Js(c),Js(u),i),0),(ke.test(u)||ke.test(c))&&(e[a]+="%")):e[a]=u}(t.rotate||n.rotate)&&(e.rotate=W(t.rotate||0,n.rotate||0,i))}function Zs(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Og=ru(0,.5,Uc),jg=ru(.5,.95,fe);function ru(e,t,n){return i=>i<e?0:i>t?1:n(tn(e,t,i))}function ea(e,t){e.min=t.min,e.max=t.max}function ue(e,t){ea(e.x,t.x),ea(e.y,t.y)}function ta(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function na(e,t,n,i,r){return e-=t,e=Jn(e,1/n,i),r!==void 0&&(e=Jn(e,1/r,i)),e}function Fg(e,t=0,n=1,i=.5,r,o=e,s=e){if(ke.test(t)&&(t=parseFloat(t),t=W(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=W(o.min,o.max,i);e===o&&(a-=t),e.min=na(e.min,t,n,a,r),e.max=na(e.max,t,n,a,r)}function ia(e,t,[n,i,r],o,s){Fg(e,t[n],t[i],t[r],t.scale,o,s)}const Bg=["x","scaleX","originX"],Ng=["y","scaleY","originY"];function ra(e,t,n,i){ia(e.x,t,Bg,n?n.x:void 0,i?i.x:void 0),ia(e.y,t,Ng,n?n.y:void 0,i?i.y:void 0)}function oa(e){return e.translate===0&&e.scale===1}function ou(e){return oa(e.x)&&oa(e.y)}function sa(e,t){return e.min===t.min&&e.max===t.max}function Wg(e,t){return sa(e.x,t.x)&&sa(e.y,t.y)}function aa(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function su(e,t){return aa(e.x,t.x)&&aa(e.y,t.y)}function ca(e){return re(e.x)/re(e.y)}function la(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class zg{constructor(){this.members=[]}add(t){Ir(this.members,t),t.scheduleRender()}remove(t){if(Or(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(r=>t===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1){i=o;break}}return i?(this.promote(i),!0):!1}promote(t,n){const i=this.lead;if(t!==i&&(this.prevLead=i,this.lead=t,t.show(),i)){i.instance&&i.scheduleRender(),t.scheduleRender(),t.resumeFrom=i,n&&(t.resumeFrom.preserveOpacity=!0),i.snapshot&&(t.snapshot=i.snapshot,t.snapshot.latestValues=i.animationValues||i.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:r}=t.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:i}=t;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Hg(e,t,n){let i="";const r=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((r||o||s)&&(i=`translate3d(${r}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(i+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:l,rotateY:f,skewX:m,skewY:p}=n;u&&(i=`perspective(${u}px) ${i}`),d&&(i+=`rotate(${d}deg) `),l&&(i+=`rotateX(${l}deg) `),f&&(i+=`rotateY(${f}deg) `),m&&(i+=`skewX(${m}deg) `),p&&(i+=`skewY(${p}deg) `)}const a=e.x.scale*t.x,c=e.y.scale*t.y;return(a!==1||c!==1)&&(i+=`scale(${a}, ${c})`),i||"none"}const Ri=["","X","Y","Z"],Ug=1e3;let Yg=0;function Li(e,t,n,i){const{latestValues:r}=t;r[e]&&(n[e]=r[e],t.setStaticValue(e,0),i&&(i[e]=0))}function au(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Yl(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",N,!(r||o))}const{parent:i}=e;i&&!i.hasCheckedOptimisedAppear&&au(i)}function cu({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(s={},a=t==null?void 0:t()){this.id=Yg++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(qg),this.nodes.forEach(Zg),this.nodes.forEach(e0),this.nodes.forEach(Xg)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new Rg)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Br),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const c=this.eventHandlers.get(s);c&&c.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s){if(this.instance)return;this.isSVG=Sl(s)&&!Nm(s),this.instance=s;const{layoutId:a,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||a)&&(this.isLayoutDirty=!0),e){let d,l=0;const f=()=>this.root.updateBlockedByResize=!1;N.read(()=>{l=window.innerWidth}),e(s,()=>{const m=window.innerWidth;m!==l&&(l=m,this.root.updateBlockedByResize=!0,d&&d(),d=Lg(f,250),Nn.hasAnimatedSinceResize&&(Nn.hasAnimatedSinceResize=!1,this.nodes.forEach(ha)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&u&&(a||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:l,hasRelativeLayoutChanged:f,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const p=this.options.transition||u.getDefaultTransition()||o0,{onLayoutAnimationStart:g,onLayoutAnimationComplete:w}=u.getProps(),b=!this.targetLayout||!su(this.targetLayout,m),x=!l&&f;if(this.options.layoutRoot||this.resumeFrom||x||l&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const v={...Zr(p,"layout"),onPlay:g,onComplete:w};(u.shouldReduceMotion||this.options.layoutRoot)&&(v.delay=0,v.type=!1),this.startAnimation(v),this.setAnimationOrigin(d,x)}else l||ha(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Be(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(t0),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&au(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const l=this.path[d];l.shouldResetTransform=!0,l.updateScroll("snapshot"),l.options.layoutRoot&&l.willUpdate(!1)}const{layoutId:a,layout:c}=this.options;if(a===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(ua);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(da);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Qg),this.nodes.forEach(Gg),this.nodes.forEach(Kg)):this.nodes.forEach(da),this.clearAllSnapshots();const a=se.now();J.delta=Ae(0,1e3/60,a-J.timestamp),J.timestamp=a,J.isProcessing=!0,_i.update.process(J),_i.preRender.process(J),_i.render.process(J),J.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,to.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Jg),this.sharedNodes.forEach(n0)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,N.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){N.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!re(this.snapshot.measuredBox.x)&&!re(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=U(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&this.instance){const c=i(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!r)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!ou(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;s&&this.instance&&(a||Ke(this.latestValues)||d)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let c=this.removeElementScroll(a);return s&&(c=this.removeTransform(c)),s0(c),{animationId:this.root.animationId,measuredBox:a,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:s}=this.options;if(!s)return U();const a=s.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(a0))){const{scroll:d}=this.root;d&&(ft(a.x,d.offset.x),ft(a.y,d.offset.y))}return a}removeElementScroll(s){var c;const a=U();if(ue(a,s),(c=this.scroll)!=null&&c.wasRoot)return a;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:l,options:f}=d;d!==this.root&&l&&f.layoutScroll&&(l.wasRoot&&ue(a,s),ft(a.x,l.offset.x),ft(a.y,l.offset.y))}return a}applyTransform(s,a=!1){const c=U();ue(c,s);for(let u=0;u<this.path.length;u++){const d=this.path[u];!a&&d.options.layoutScroll&&d.scroll&&d!==d.root&&mt(c,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),Ke(d.latestValues)&&mt(c,d.latestValues)}return Ke(this.latestValues)&&mt(c,this.latestValues),c}removeTransform(s){const a=U();ue(a,s);for(let c=0;c<this.path.length;c++){const u=this.path[c];if(!u.instance||!Ke(u.latestValues))continue;gr(u.latestValues)&&u.updateSnapshot();const d=U(),l=u.measurePageBox();ue(d,l),ra(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return Ke(this.latestValues)&&ra(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==J.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var f;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==a;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||(f=this.parent)!=null&&f.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:l}=this.options;if(!(!this.layout||!(d||l))){if(this.resolvedRelativeTargetAt=J.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=U(),this.relativeTargetOrigin=U(),Xt(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),ue(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=U(),this.targetWithTransforms=U()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),fg(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ue(this.target,this.layout.layoutBox),Bl(this.target,this.targetDelta)):ue(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=U(),this.relativeTargetOrigin=U(),Xt(this.relativeTargetOrigin,this.target,m.target),ue(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||gr(this.parent.latestValues)||Fl(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var p;const s=this.getLead(),a=!!this.resumingFrom||this!==s;let c=!0;if((this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty)&&(c=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===J.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;ue(this.layoutCorrected,this.layout.layoutBox);const l=this.treeScale.x,f=this.treeScale.y;kp(this.layoutCorrected,this.treeScale,this.path,a),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=U());const{target:m}=s;if(!m){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(ta(this.prevProjectionDelta.x,this.projectionDelta.x),ta(this.prevProjectionDelta.y,this.projectionDelta.y)),qt(this.projectionDelta,this.layoutCorrected,m,this.latestValues),(this.treeScale.x!==l||this.treeScale.y!==f||!la(this.projectionDelta.x,this.prevProjectionDelta.x)||!la(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),s){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=pt(),this.projectionDelta=pt(),this.projectionDeltaWithTransform=pt()}setAnimationOrigin(s,a=!1){const c=this.snapshot,u=c?c.latestValues:{},d={...this.latestValues},l=pt();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=U(),m=c?c.source:void 0,p=this.layout?this.layout.source:void 0,g=m!==p,w=this.getStack(),b=!w||w.members.length<=1,x=!!(g&&!b&&this.options.crossfade===!0&&!this.path.some(r0));this.animationProgress=0;let v;this.mixTargetDelta=C=>{const P=C/1e3;fa(l.x,s.x,P),fa(l.y,s.y,P),this.setTargetDelta(l),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Xt(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),i0(this.relativeTarget,this.relativeTargetOrigin,f,P),v&&Wg(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=U()),ue(v,this.relativeTarget)),g&&(this.animationValues=d,Ig(d,u,this.latestValues,P,x,b)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){var a,c,u;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(u=(c=this.resumingFrom)==null?void 0:c.currentAnimation)==null||u.stop(),this.pendingAnimation&&(Be(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=N.update(()=>{Nn.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=kt(0)),this.currentAnimation=Mg(this.motionValue,[0,1e3],{...s,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),s.onUpdate&&s.onUpdate(d)},onStop:()=>{},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Ug),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:c,layout:u,latestValues:d}=s;if(!(!a||!c||!u)){if(this!==s&&this.layout&&u&&lu(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||U();const l=re(this.layout.layoutBox.x);c.x.min=s.target.x.min,c.x.max=c.x.min+l;const f=re(this.layout.layoutBox.y);c.y.min=s.target.y.min,c.y.max=c.y.min+f}ue(a,c),mt(a,d),qt(this.projectionDeltaWithTransform,this.layoutCorrected,a,d)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new zg),this.sharedNodes.get(s).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:c}=s;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(a=!0),!a)return;const u={};c.z&&Li("z",s,u,this.animationValues);for(let d=0;d<Ri.length;d++)Li(`rotate${Ri[d]}`,s,u,this.animationValues),Li(`skew${Ri[d]}`,s,u,this.animationValues);s.render();for(const d in u)s.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);s.scheduleRender()}applyProjectionStyles(s,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){s.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,s.visibility="",s.opacity="",s.pointerEvents=Bn(a==null?void 0:a.pointerEvents)||"",s.transform=c?c(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(s.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,s.pointerEvents=Bn(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Ke(this.latestValues)&&(s.transform=c?c({},""):"none",this.hasProjected=!1);return}s.visibility="";const d=u.animationValues||u.latestValues;this.applyTransformsToTarget();let l=Hg(this.projectionDeltaWithTransform,this.treeScale,d);c&&(l=c(d,l)),s.transform=l;const{x:f,y:m}=this.projectionDelta;s.transformOrigin=`${f.origin*100}% ${m.origin*100}% 0`,u.animationValues?s.opacity=u===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:s.opacity=u===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const p in sn){if(d[p]===void 0)continue;const{correct:g,applyTo:w,isCSSVariable:b}=sn[p],x=l==="none"?d[p]:g(d[p],u);if(w){const v=w.length;for(let C=0;C<v;C++)s[w[C]]=x}else b?this.options.visualElement.renderState.vars[p]=x:s[p]=x}this.options.layoutId&&(s.pointerEvents=u===this?Bn(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(ua),this.root.sharedNodes.clear()}}}function Gg(e){e.updateLayout()}function Kg(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=e.layout,{animationType:o}=e.options,s=t.source!==e.layout.source;o==="size"?de(l=>{const f=s?t.measuredBox[l]:t.layoutBox[l],m=re(f);f.min=i[l].min,f.max=f.min+m}):lu(o,t.layoutBox,i)&&de(l=>{const f=s?t.measuredBox[l]:t.layoutBox[l],m=re(i[l]);f.max=f.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[l].max=e.relativeTarget[l].min+m)});const a=pt();qt(a,i,t.layoutBox);const c=pt();s?qt(c,e.applyTransform(r,!0),t.measuredBox):qt(c,i,t.layoutBox);const u=!ou(a);let d=!1;if(!e.resumeFrom){const l=e.getClosestProjectingParent();if(l&&!l.resumeFrom){const{snapshot:f,layout:m}=l;if(f&&m){const p=U();Xt(p,t.layoutBox,f.layoutBox);const g=U();Xt(g,i,m.layoutBox),su(p,g)||(d=!0),l.options.layoutRoot&&(e.relativeTarget=g,e.relativeTargetOrigin=p,e.relativeParent=l)}}}e.notifyListeners("didUpdate",{layout:i,snapshot:t,delta:c,layoutDelta:a,hasLayoutChanged:u,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:i}=e.options;i&&i()}e.options.transition=void 0}function qg(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Xg(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Jg(e){e.clearSnapshot()}function ua(e){e.clearMeasurements()}function da(e){e.isLayoutDirty=!1}function Qg(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function ha(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Zg(e){e.resolveTargetDelta()}function e0(e){e.calcProjection()}function t0(e){e.resetSkewAndRotation()}function n0(e){e.removeLeadSnapshot()}function fa(e,t,n){e.translate=W(t.translate,0,n),e.scale=W(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function ma(e,t,n,i){e.min=W(t.min,n.min,i),e.max=W(t.max,n.max,i)}function i0(e,t,n,i){ma(e.x,t.x,n.x,i),ma(e.y,t.y,n.y,i)}function r0(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const o0={duration:.45,ease:[.4,0,.1,1]},pa=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),ga=pa("applewebkit/")&&!pa("chrome/")?Math.round:fe;function ya(e){e.min=ga(e.min),e.max=ga(e.max)}function s0(e){ya(e.x),ya(e.y)}function lu(e,t,n){return e==="position"||e==="preserve-aspect"&&!hg(ca(t),ca(n),.2)}function a0(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const c0=cu({attachResizeListener:(e,t)=>an(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Vi={current:void 0},uu=cu({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Vi.current){const e=new c0({});e.mount(window),e.setOptions({layoutScroll:!0}),Vi.current=e}return Vi.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),l0={pan:{Feature:Tg},drag:{Feature:Cg,ProjectionNode:uu,MeasureLayout:nu}};function ba(e,t,n){const{props:i}=e;e.animationState&&i.whileHover&&e.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,o=i[r];o&&N.postRender(()=>o(t,gn(t)))}class u0 extends He{mount(){const{current:t}=this.node;t&&(this.unmount=Im(t,(n,i)=>(ba(this.node,i,"Start"),r=>ba(this.node,r,"End"))))}unmount(){}}class d0 extends He{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=fn(an(this.node.current,"focus",()=>this.onFocus()),an(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function va(e,t,n){const{props:i}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&i.whileTap&&e.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),o=i[r];o&&N.postRender(()=>o(t,gn(t)))}class h0 extends He{mount(){const{current:t}=this.node;t&&(this.unmount=Bm(t,(n,i)=>(va(this.node,i,"Start"),(r,{success:o})=>va(this.node,r,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Sr=new WeakMap,Ii=new WeakMap,f0=e=>{const t=Sr.get(e.target);t&&t(e)},m0=e=>{e.forEach(f0)};function p0({root:e,...t}){const n=e||document;Ii.has(n)||Ii.set(n,{});const i=Ii.get(n),r=JSON.stringify(t);return i[r]||(i[r]=new IntersectionObserver(m0,{root:e,...t})),i[r]}function g0(e,t,n){const i=p0(t);return Sr.set(e,n),i.observe(e),()=>{Sr.delete(e),i.unobserve(e)}}const y0={some:0,all:1};class b0 extends He{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:y0[r]},a=c=>{const{isIntersecting:u}=c;if(this.isInView===u||(this.isInView=u,o&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:l}=this.node.getProps(),f=u?d:l;f&&f(c)};return g0(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(v0(t,n))&&this.startObserver()}unmount(){}}function v0({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const x0={inView:{Feature:b0},tap:{Feature:h0},focus:{Feature:d0},hover:{Feature:u0}},w0={layout:{ProjectionNode:uu,MeasureLayout:nu}},_0={...sg,...x0,...l0,...w0},S0=_p(_0,Vp);function P0({children:e,delay:t=0,direction:n="up",className:i}){const r=()=>{switch(n){case"up":return{y:50,opacity:0};case"down":return{y:-50,opacity:0};case"left":return{x:-50,opacity:0};case"right":return{x:50,opacity:0};default:return{y:50,opacity:0}}};return h(S0.div,{className:i,initial:r(),whileInView:{x:0,y:0,opacity:1},transition:{duration:.6,delay:t,ease:"easeOut"},viewport:{once:!0,amount:.3},children:e})}const k0=()=>()=>{window.scrollTo({top:0,behavior:"smooth"})},C0=y.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
  }

  &:active {
    transform: translateY(-1px) scale(1.05);
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;
    width: 45px;
    height: 45px;
  }
`,T0=y.span`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;function ui(){const[e,t]=Y(!1),n=k0();return oe(()=>{const i=()=>{const r=window.scrollY;t(r>400)};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)},[]),e?h(P0,{children:h(C0,{onClick:n,children:h(T0,{children:"↑"})})}):null}const D0=y.div`
  width: 100%;
  min-height: 100vh;

  section {
    min-height: 100vh;
    padding: ${S.xl} ${S.lg};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: ${V.tablet}) {
      padding: ${S.lg} ${S.md};
      min-height: auto;
      padding-top: ${S.xl};
      padding-bottom: ${S.xl};
    }

    @media (max-width: ${V.mobile}) {
      padding: ${S.md} ${S.sm};
    }
  }

  #home {
    background: ${_.background.gradient};
  }

  #about {
    background: ${_.background.secondary};
  }

  #skills {
    background: ${_.background.main};
  }
`;function xa(){const e=he(null),t=he(null),n=he(null);return oe(()=>{const i=r=>{const o=r.target;if(o.hash){r.preventDefault();const s=document.querySelector(o.hash);s&&s.scrollIntoView({behavior:"smooth",block:"start"})}};return document.addEventListener("click",i),()=>document.removeEventListener("click",i)},[]),h(D0,{children:[h("section",{id:"home",ref:e,children:h(Dh,{})}),h("section",{id:"about",ref:t,children:h(Eh,{})}),h("section",{id:"skills",ref:n,children:h(zh,{})}),h(ui,{})]})}const wa=y.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;y.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${_.cardOverlay};
  color: ${_.text.secondary};
  padding: 0.25rem 0.5rem;
  border-radius: ${ae.small};
  font-size: ${$.fontSize.xs};
  font-weight: ${$.fontWeight.medium};
  border: 1px solid ${_.borderLight};
`;const _a=y.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`,Sa=y.h2`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
`,$0=y.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,A0=y.div`
  background: linear-gradient(135deg, #2d2d44 0%, #3d3d5c 100%);
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.4s ease;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    border-color: rgba(78, 205, 196, 0.5);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  }
`,M0=y.h3`
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: capitalize;
`,E0=y.p`
  color: #b8b8b8;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  min-height: 60px;
`,R0=y.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`,L0=y.span`
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`,V0=y.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`,Pa=y.a`
  color: #4ecdc4;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border: 1px solid #4ecdc4;
  border-radius: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: #4ecdc4;
    color: #1e1e2e;
    transform: translateY(-2px);
  }
`;y.div`
  height: 80px;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1));
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;const I0=y.div`
  text-align: center;
  margin: ${S.lg} 0;
  color: ${_.text.secondary};
  font-size: ${$.fontSize.sm};
`,O0=y.button`
  display: block;
  margin: ${S.xl} auto;
  background: ${_.gradients.primary};
  color: ${_.text.primary};
  border: none;
  padding: ${S.md} ${S.xl};
  border-radius: ${ae.medium};
  font-size: ${$.fontSize.base};
  font-weight: ${$.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${Ce.medium};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${Ce.hover};
    background: ${_.gradients.hover};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;y.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${S.md};
  margin: ${S.xl} 0;
`;y.button`
  background: ${_.cardOverlay};
  border: 1px solid ${_.borderLight};
  color: ${_.text.primary};
  padding: ${S.sm} ${S.md};
  border-radius: ${ae.small};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${_.gradients.card};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;function j0(){const[e,t]=Y([]),[n,i]=Y([]),[r,o]=Y(!0),[s,a]=Y(1),[c]=pe(),u=6;oe(()=>{(async()=>{try{const x=(await(await fetch("https://api.github.com/users/wiltoon/repos?type=owner&sort=updated&per_page=100")).json()).filter(v=>!v.name.includes("wiltoon")&&!v.name.toLowerCase().includes(".github.io")&&v.name!=="wiltoon");t(x),i(x.slice(0,u))}catch(w){console.error("Erro ao buscar repositórios:",w)}finally{o(!1)}})()},[]);const d=()=>{const g=s+1,w=(g-1)*u,b=w+u,x=e.slice(w,b);i([...n,...x]),a(g)},l=n.length<e.length,f=g=>new Date(g).toLocaleDateString(c==="EN"?"en-US":"pt-BR"),m=g=>({TypeScript:"#3178c6",JavaScript:"#f1e05a",Python:"#3572a5",Java:"#b07219","C#":"#239120",CSS:"#1572b6",HTML:"#e34c26",PHP:"#4f5d95",Go:"#00add8",Rust:"#dea584",Vue:"#4fc08d",React:"#61dafb"})[g||""]||"#8b5cf6",p=c==="EN"?{title:"My GitHub Projects",loading:"🔄 Loading GitHub projects...",noDescription:"No description available",viewCode:"View Code",viewDemo:"View Demo",loadMore:"Load More Projects",showing:"Showing"}:{title:"Meus Projetos do GitHub",loading:"🔄 Carregando projetos do GitHub...",noDescription:"Sem descrição disponível",viewCode:"Ver Código",viewDemo:"Ver Demo",loadMore:"Carregar Mais Projetos",showing:"Mostrando"};return r?h(wa,{id:"portfolio",children:[h(_a,{children:h(Sa,{children:p.title})}),h("div",{style:{textAlign:"center",color:"#8b5cf6",padding:"2rem"},children:p.loading})]}):h(wa,{id:"portfolio",children:[h(_a,{children:h(Sa,{children:p.title})}),h(I0,{children:[p.showing," ",n.length," ",c==="EN"?"of":"de"," ",e.length," projetos"]}),h($0,{children:n.map(g=>h(A0,{children:[h(M0,{children:g.name}),h(E0,{children:g.description||p.noDescription}),h("div",{style:{display:"flex",gap:"1rem",marginBottom:"1rem",fontSize:"0.8rem",color:"#8b5cf6"},children:[h("span",{children:["⭐ ",g.stargazers_count]}),h("span",{children:["📅 ",f(g.updated_at)]})]}),h(R0,{children:g.language&&h(L0,{style:{backgroundColor:m(g.language)+"20",color:m(g.language),border:`1px solid ${m(g.language)}50`},children:g.language})}),h(V0,{children:[h(Pa,{href:g.html_url,target:"_blank",rel:"noopener noreferrer",children:["📂 ",p.viewCode]}),g.homepage&&h(Pa,{href:g.homepage,target:"_blank",rel:"noopener noreferrer",children:["🌐 ",p.viewDemo]})]})]},g.id))}),l&&h(O0,{onClick:d,children:[p.loadMore," (",e.length-n.length," ",c==="EN"?"remaining":"restantes",")"]})]})}const F0=y.div`
  width: 100%;
  min-height: 100vh;
  background: ${_.background.gradient};
  padding: ${S.xl} ${S.lg};

  @media (max-width: ${V.tablet}) {
    padding: ${S.lg} ${S.md};
  }

  @media (max-width: ${V.mobile}) {
    padding: ${S.md} ${S.sm};
  }
`,B0=y.header`
  text-align: center;
  margin-bottom: ${S.xl};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: ${$.fontSize["5xl"]};
    background: ${_.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${S.md};

    @media (max-width: ${V.tablet}) {
      font-size: ${$.fontSize["4xl"]};
    }

    @media (max-width: ${V.mobile}) {
      font-size: ${$.fontSize["3xl"]};
    }
  }

  p {
    font-size: ${$.fontSize.lg};
    color: ${_.text.secondary};
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: ${V.mobile}) {
      font-size: ${$.fontSize.base};
    }
  }
`;function N0(){const[e]=pe(),t=e==="EN"?{title:"My Projects",subtitle:"A selection of projects I developed, integrating directly with GitHub"}:{title:"Meus Projetos",subtitle:"Uma seleção dos projetos que desenvolvi, integrando diretamente com o GitHub"};return h(F0,{children:[h(B0,{children:[h("h1",{children:t.title}),h("p",{children:t.subtitle})]}),h(j0,{}),h(ui,{})]})}const W0="modulepreload",z0=function(e){return"/portifolio/"+e},ka={},Ca=function(t,n,i){let r=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link");r=Promise.all(n.map(s=>{if(s=z0(s),s in ka)return;ka[s]=!0;const a=s.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!i)for(let l=o.length-1;l>=0;l--){const f=o[l];if(f.href===s&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${c}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":W0,a||(d.as="script",d.crossOrigin=""),d.href=s,document.head.appendChild(d),a)return new Promise((l,f)=>{d.addEventListener("load",l),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})}))}return r.then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},Jt=class Jt{static async fetchProfile(){try{return await new Promise(t=>setTimeout(t,1e3)),this.mockProfile}catch(t){return console.error("Error fetching LinkedIn profile:",t),this.mockProfile}}static getShareUrl(t,n){const i=encodeURIComponent(t),r=encodeURIComponent(n),o=encodeURIComponent("Check out my portfolio!");return`https://www.linkedin.com/sharing/share-offsite/?url=${i}&title=${r}&summary=${o}`}static getProfileUrl(){return this.LINKEDIN_PROFILE_URL}static generateConnectButton(){return{url:this.LINKEDIN_PROFILE_URL,text:{en:"Connect on LinkedIn",pt:"Conectar no LinkedIn"}}}static enrichCareerData(t,n){return t.map(i=>{const r=n.experience.find(o=>o.title.toLowerCase().includes(i.title.toLowerCase())||i.title.toLowerCase().includes(o.title.toLowerCase()));return{...i,linkedInUrl:r?this.LINKEDIN_PROFILE_URL:void 0,linkedInData:r}})}};at(Jt,"LINKEDIN_PROFILE_URL","https://linkedin.com/in/wilton-software-engineer"),at(Jt,"mockProfile",{name:"Wilton Costa",headline:"Full Stack Developer | React | Node.js | TypeScript",summary:"Passionate full-stack developer with expertise in modern web technologies...",profileUrl:Jt.LINKEDIN_PROFILE_URL,experience:[{title:"Senior Full Stack Developer",company:"Tech Company",duration:"2023 - Present",description:"Leading development of scalable web applications...",startDate:"2023-01-01"}],education:[{school:"University Name",degree:"Bachelor of Science",field:"Computer Science",duration:"2020 - 2023",startDate:"2020-01-01",endDate:"2023-12-01"}]});let cn=Jt;class Wn{static async fetchCareerData(){try{const t=await this.fetchFromRepository();if(t){const n=await cn.fetchProfile();return t.jobs=cn.enrichCareerData(t.jobs,n),t}return console.warn("Career repository not found, using local data"),await this.fetchLocalData()}catch(t){return console.error("Error fetching career data:",t),await this.fetchLocalData()}}static async fetchFromRepository(){try{if(!(await fetch(`${this.GITHUB_API}/repos/${this.USERNAME}/${this.CAREER_REPO}`)).ok)throw new Error("Career repository not found");const[n,i]=await Promise.all([fetch(`${this.GITHUB_API}/repos/${this.USERNAME}/${this.CAREER_REPO}/contents/jobs.json`),fetch(`${this.GITHUB_API}/repos/${this.USERNAME}/${this.CAREER_REPO}/contents/education.json`)]);if(!n.ok||!i.ok)throw new Error("Career data files not found");const[r,o]=await Promise.all([n.json(),i.json()]),s=JSON.parse(atob(r.content.replace(/\n/g,""))),a=JSON.parse(atob(o.content.replace(/\n/g,"")));return{jobs:s.map(c=>({...c,type:"job"})),education:a.map(c=>({...c,type:"education"}))}}catch{return null}}static async fetchLocalData(){const t=await Ca(()=>Promise.resolve().then(()=>Ab),void 0),n=await Ca(()=>Promise.resolve().then(()=>Mb),void 0);return{jobs:t.default.map(i=>({...i,type:"job"})),education:n.default.map(i=>({...i,type:"education"}))}}static generateRepositoryStructure(){return{repositoryName:this.CAREER_REPO,description:"Career and Education data for portfolio",files:{"README.md":`# Career Data Repository

This repository contains career and education data for the portfolio website.

## Structure

- \`jobs.json\` - Professional experiences
- \`education.json\` - Academic background
- \`schema.json\` - Data structure schema

## Usage

Data is automatically fetched by the portfolio website. Update the JSON files to reflect new experiences.
`,"jobs.json":`[
  {
    "title": "Senior Full Stack Developer",
    "company": "Tech Company",
    "description": "Detailed description of role and responsibilities...",
    "startDate": "2023-01-01",
    "endDate": "At the moment",
    "languages": ["TypeScript", "React", "Node.js"],
    "databases": ["PostgreSQL", "MongoDB"],
    "projects": ["Project 1", "Project 2"],
    "learnings": ["Learning 1", "Learning 2"],
    "achievements": ["Achievement 1", "Achievement 2"],
    "linkedInUrl": "https://linkedin.com/in/yourprofile"
  }
]`,"education.json":`[
  {
    "title": "Computer Science Degree",
    "company": "University Name",
    "description": "Detailed description of studies...",
    "startDate": "2020-01-01",
    "endDate": "2023-12-01",
    "languages": ["Java", "Python"],
    "databases": ["MySQL"],
    "projects": ["Academic Project 1"],
    "learnings": ["Computer Science fundamentals"],
    "achievements": ["Honor Roll"]
  }
]`,"schema.json":`{
  "type": "object",
  "properties": {
    "title": { "type": "string" },
    "company": { "type": "string" },
    "description": { "type": "string" },
    "startDate": { "type": "string", "format": "date" },
    "endDate": { "type": "string" },
    "languages": { "type": "array", "items": { "type": "string" } },
    "databases": { "type": "array", "items": { "type": "string" } },
    "projects": { "type": "array", "items": { "type": "string" } },
    "learnings": { "type": "array", "items": { "type": "string" } },
    "achievements": { "type": "array", "items": { "type": "string" } },
    "linkedInUrl": { "type": "string", "format": "uri" }
  },
  "required": ["title", "description", "startDate", "endDate"]
}`}}}}at(Wn,"GITHUB_API","https://api.github.com"),at(Wn,"USERNAME","wiltoon"),at(Wn,"CAREER_REPO","career-data");function G(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function it(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}const du=6048e5,H0=864e5;let U0={};function di(){return U0}function ln(e,t){var a,c,u,d;const n=di(),i=(t==null?void 0:t.weekStartsOn)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((d=(u=n.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??0,r=G(e),o=r.getDay(),s=(o<i?7:0)+o-i;return r.setDate(r.getDate()-s),r.setHours(0,0,0,0),r}function Qn(e){return ln(e,{weekStartsOn:1})}function hu(e){const t=G(e),n=t.getFullYear(),i=it(e,0);i.setFullYear(n+1,0,4),i.setHours(0,0,0,0);const r=Qn(i),o=it(e,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const s=Qn(o);return t.getTime()>=r.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function Ta(e){const t=G(e);return t.setHours(0,0,0,0),t}function Da(e){const t=G(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Y0(e,t){const n=Ta(e),i=Ta(t),r=+n-Da(n),o=+i-Da(i);return Math.round((r-o)/H0)}function G0(e){const t=hu(e),n=it(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),Qn(n)}function Oi(e,t){const n=G(e),i=G(t),r=n.getTime()-i.getTime();return r<0?-1:r>0?1:r}function K0(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function q0(e){if(!K0(e)&&typeof e!="number")return!1;const t=G(e);return!isNaN(Number(t))}function X0(e,t){const n=G(e),i=G(t),r=n.getFullYear()-i.getFullYear(),o=n.getMonth()-i.getMonth();return r*12+o}function J0(e){const t=G(e);return t.setHours(23,59,59,999),t}function Q0(e){const t=G(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function Z0(e){const t=G(e);return+J0(t)==+Q0(t)}function fu(e,t){const n=G(e),i=G(t),r=Oi(n,i),o=Math.abs(X0(n,i));let s;if(o<1)s=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-r*o);let a=Oi(n,i)===-r;Z0(G(e))&&o===1&&Oi(e,i)===1&&(a=!1),s=r*(o-Number(a))}return s===0?0:s}function ey(e){const t=G(e),n=it(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const ty={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},ny=(e,t,n)=>{let i;const r=ty[e];return typeof r=="string"?i=r:t===1?i=r.one:i=r.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+i:i+" ago":i};function ji(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const iy={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},ry={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},oy={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},sy={date:ji({formats:iy,defaultWidth:"full"}),time:ji({formats:ry,defaultWidth:"full"}),dateTime:ji({formats:oy,defaultWidth:"full"})},ay={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},cy=(e,t,n,i)=>ay[e];function jt(e){return(t,n)=>{const i=n!=null&&n.context?String(n.context):"standalone";let r;if(i==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,a=n!=null&&n.width?String(n.width):s;r=e.formattingValues[a]||e.formattingValues[s]}else{const s=e.defaultWidth,a=n!=null&&n.width?String(n.width):e.defaultWidth;r=e.values[a]||e.values[s]}const o=e.argumentCallback?e.argumentCallback(t):t;return r[o]}}const ly={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},uy={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},dy={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},hy={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},fy={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},my={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},py=(e,t)=>{const n=Number(e),i=n%100;if(i>20||i<10)switch(i%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},gy={ordinalNumber:py,era:jt({values:ly,defaultWidth:"wide"}),quarter:jt({values:uy,defaultWidth:"wide",argumentCallback:e=>e-1}),month:jt({values:dy,defaultWidth:"wide"}),day:jt({values:hy,defaultWidth:"wide"}),dayPeriod:jt({values:fy,defaultWidth:"wide",formattingValues:my,defaultFormattingWidth:"wide"})};function Ft(e){return(t,n={})=>{const i=n.width,r=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],o=t.match(r);if(!o)return null;const s=o[0],a=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(a)?by(a,l=>l.test(s)):yy(a,l=>l.test(s));let u;u=e.valueCallback?e.valueCallback(c):c,u=n.valueCallback?n.valueCallback(u):u;const d=t.slice(s.length);return{value:u,rest:d}}}function yy(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function by(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function vy(e){return(t,n={})=>{const i=t.match(e.matchPattern);if(!i)return null;const r=i[0],o=t.match(e.parsePattern);if(!o)return null;let s=e.valueCallback?e.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;const a=t.slice(r.length);return{value:s,rest:a}}}const xy=/^(\d+)(th|st|nd|rd)?/i,wy=/\d+/i,_y={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},Sy={any:[/^b/i,/^(a|c)/i]},Py={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},ky={any:[/1/i,/2/i,/3/i,/4/i]},Cy={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Ty={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Dy={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},$y={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Ay={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},My={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Ey={ordinalNumber:vy({matchPattern:xy,parsePattern:wy,valueCallback:e=>parseInt(e,10)}),era:Ft({matchPatterns:_y,defaultMatchWidth:"wide",parsePatterns:Sy,defaultParseWidth:"any"}),quarter:Ft({matchPatterns:Py,defaultMatchWidth:"wide",parsePatterns:ky,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Ft({matchPatterns:Cy,defaultMatchWidth:"wide",parsePatterns:Ty,defaultParseWidth:"any"}),day:Ft({matchPatterns:Dy,defaultMatchWidth:"wide",parsePatterns:$y,defaultParseWidth:"any"}),dayPeriod:Ft({matchPatterns:Ay,defaultMatchWidth:"any",parsePatterns:My,defaultParseWidth:"any"})},Ry={code:"en-US",formatDistance:ny,formatLong:sy,formatRelative:cy,localize:gy,match:Ey,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Ly(e){const t=G(e);return Y0(t,ey(t))+1}function Vy(e){const t=G(e),n=+Qn(t)-+G0(t);return Math.round(n/du)+1}function mu(e,t){var d,l,f,m;const n=G(e),i=n.getFullYear(),r=di(),o=(t==null?void 0:t.firstWeekContainsDate)??((l=(d=t==null?void 0:t.locale)==null?void 0:d.options)==null?void 0:l.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(f=r.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,s=it(e,0);s.setFullYear(i+1,0,o),s.setHours(0,0,0,0);const a=ln(s,t),c=it(e,0);c.setFullYear(i,0,o),c.setHours(0,0,0,0);const u=ln(c,t);return n.getTime()>=a.getTime()?i+1:n.getTime()>=u.getTime()?i:i-1}function Iy(e,t){var a,c,u,d;const n=di(),i=(t==null?void 0:t.firstWeekContainsDate)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((d=(u=n.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??1,r=mu(e,t),o=it(e,0);return o.setFullYear(r,0,i),o.setHours(0,0,0,0),ln(o,t)}function Oy(e,t){const n=G(e),i=+ln(n,t)-+Iy(n,t);return Math.round(i/du)+1}function I(e,t){const n=e<0?"-":"",i=Math.abs(e).toString().padStart(t,"0");return n+i}const Re={y(e,t){const n=e.getFullYear(),i=n>0?n:1-n;return I(t==="yy"?i%100:i,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):I(n+1,2)},d(e,t){return I(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return I(e.getHours()%12||12,t.length)},H(e,t){return I(e.getHours(),t.length)},m(e,t){return I(e.getMinutes(),t.length)},s(e,t){return I(e.getSeconds(),t.length)},S(e,t){const n=t.length,i=e.getMilliseconds(),r=Math.trunc(i*Math.pow(10,n-3));return I(r,t.length)}},lt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},$a={G:function(e,t,n){const i=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(i,{width:"abbreviated"});case"GGGGG":return n.era(i,{width:"narrow"});case"GGGG":default:return n.era(i,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const i=e.getFullYear(),r=i>0?i:1-i;return n.ordinalNumber(r,{unit:"year"})}return Re.y(e,t)},Y:function(e,t,n,i){const r=mu(e,i),o=r>0?r:1-r;if(t==="YY"){const s=o%100;return I(s,2)}return t==="Yo"?n.ordinalNumber(o,{unit:"year"}):I(o,t.length)},R:function(e,t){const n=hu(e);return I(n,t.length)},u:function(e,t){const n=e.getFullYear();return I(n,t.length)},Q:function(e,t,n){const i=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(i);case"QQ":return I(i,2);case"Qo":return n.ordinalNumber(i,{unit:"quarter"});case"QQQ":return n.quarter(i,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(i,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(i,{width:"wide",context:"formatting"})}},q:function(e,t,n){const i=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(i);case"qq":return I(i,2);case"qo":return n.ordinalNumber(i,{unit:"quarter"});case"qqq":return n.quarter(i,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(i,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(i,{width:"wide",context:"standalone"})}},M:function(e,t,n){const i=e.getMonth();switch(t){case"M":case"MM":return Re.M(e,t);case"Mo":return n.ordinalNumber(i+1,{unit:"month"});case"MMM":return n.month(i,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(i,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(i,{width:"wide",context:"formatting"})}},L:function(e,t,n){const i=e.getMonth();switch(t){case"L":return String(i+1);case"LL":return I(i+1,2);case"Lo":return n.ordinalNumber(i+1,{unit:"month"});case"LLL":return n.month(i,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(i,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(i,{width:"wide",context:"standalone"})}},w:function(e,t,n,i){const r=Oy(e,i);return t==="wo"?n.ordinalNumber(r,{unit:"week"}):I(r,t.length)},I:function(e,t,n){const i=Vy(e);return t==="Io"?n.ordinalNumber(i,{unit:"week"}):I(i,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):Re.d(e,t)},D:function(e,t,n){const i=Ly(e);return t==="Do"?n.ordinalNumber(i,{unit:"dayOfYear"}):I(i,t.length)},E:function(e,t,n){const i=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(i,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(i,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(i,{width:"short",context:"formatting"});case"EEEE":default:return n.day(i,{width:"wide",context:"formatting"})}},e:function(e,t,n,i){const r=e.getDay(),o=(r-i.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return I(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,i){const r=e.getDay(),o=(r-i.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return I(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){const i=e.getDay(),r=i===0?7:i;switch(t){case"i":return String(r);case"ii":return I(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(i,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(i,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(i,{width:"short",context:"formatting"});case"iiii":default:return n.day(i,{width:"wide",context:"formatting"})}},a:function(e,t,n){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){const i=e.getHours();let r;switch(i===12?r=lt.noon:i===0?r=lt.midnight:r=i/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){const i=e.getHours();let r;switch(i>=17?r=lt.evening:i>=12?r=lt.afternoon:i>=4?r=lt.morning:r=lt.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let i=e.getHours()%12;return i===0&&(i=12),n.ordinalNumber(i,{unit:"hour"})}return Re.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):Re.H(e,t)},K:function(e,t,n){const i=e.getHours()%12;return t==="Ko"?n.ordinalNumber(i,{unit:"hour"}):I(i,t.length)},k:function(e,t,n){let i=e.getHours();return i===0&&(i=24),t==="ko"?n.ordinalNumber(i,{unit:"hour"}):I(i,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):Re.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):Re.s(e,t)},S:function(e,t){return Re.S(e,t)},X:function(e,t,n){const i=e.getTimezoneOffset();if(i===0)return"Z";switch(t){case"X":return Ma(i);case"XXXX":case"XX":return qe(i);case"XXXXX":case"XXX":default:return qe(i,":")}},x:function(e,t,n){const i=e.getTimezoneOffset();switch(t){case"x":return Ma(i);case"xxxx":case"xx":return qe(i);case"xxxxx":case"xxx":default:return qe(i,":")}},O:function(e,t,n){const i=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+Aa(i,":");case"OOOO":default:return"GMT"+qe(i,":")}},z:function(e,t,n){const i=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+Aa(i,":");case"zzzz":default:return"GMT"+qe(i,":")}},t:function(e,t,n){const i=Math.trunc(e.getTime()/1e3);return I(i,t.length)},T:function(e,t,n){const i=e.getTime();return I(i,t.length)}};function Aa(e,t=""){const n=e>0?"-":"+",i=Math.abs(e),r=Math.trunc(i/60),o=i%60;return o===0?n+String(r):n+String(r)+t+I(o,2)}function Ma(e,t){return e%60===0?(e>0?"-":"+")+I(Math.abs(e)/60,2):qe(e,t)}function qe(e,t=""){const n=e>0?"-":"+",i=Math.abs(e),r=I(Math.trunc(i/60),2),o=I(i%60,2);return n+r+t+o}const Ea=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},pu=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},jy=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],i=n[1],r=n[2];if(!r)return Ea(e,t);let o;switch(i){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;case"PPPP":default:o=t.dateTime({width:"full"});break}return o.replace("{{date}}",Ea(i,t)).replace("{{time}}",pu(r,t))},Fy={p:pu,P:jy},By=/^D+$/,Ny=/^Y+$/,Wy=["D","DD","YY","YYYY"];function zy(e){return By.test(e)}function Hy(e){return Ny.test(e)}function Uy(e,t,n){const i=Yy(e,t,n);if(console.warn(i),Wy.includes(e))throw new RangeError(i)}function Yy(e,t,n){const i=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${i} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const Gy=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Ky=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,qy=/^'([^]*?)'?$/,Xy=/''/g,Jy=/[a-zA-Z]/;function Ra(e,t,n){var d,l,f,m,p,g,w,b;const i=di(),r=(n==null?void 0:n.locale)??i.locale??Ry,o=(n==null?void 0:n.firstWeekContainsDate)??((l=(d=n==null?void 0:n.locale)==null?void 0:d.options)==null?void 0:l.firstWeekContainsDate)??i.firstWeekContainsDate??((m=(f=i.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??1,s=(n==null?void 0:n.weekStartsOn)??((g=(p=n==null?void 0:n.locale)==null?void 0:p.options)==null?void 0:g.weekStartsOn)??i.weekStartsOn??((b=(w=i.locale)==null?void 0:w.options)==null?void 0:b.weekStartsOn)??0,a=G(e);if(!q0(a))throw new RangeError("Invalid time value");let c=t.match(Ky).map(x=>{const v=x[0];if(v==="p"||v==="P"){const C=Fy[v];return C(x,r.formatLong)}return x}).join("").match(Gy).map(x=>{if(x==="''")return{isToken:!1,value:"'"};const v=x[0];if(v==="'")return{isToken:!1,value:Qy(x)};if($a[v])return{isToken:!0,value:x};if(v.match(Jy))throw new RangeError("Format string contains an unescaped latin alphabet character `"+v+"`");return{isToken:!1,value:x}});r.localize.preprocessor&&(c=r.localize.preprocessor(a,c));const u={firstWeekContainsDate:o,weekStartsOn:s,locale:r};return c.map(x=>{if(!x.isToken)return x.value;const v=x.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Hy(v)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&zy(v))&&Uy(v,t,String(e));const C=$a[v[0]];return C(a,v,r.localize,u)}).join("")}function Qy(e){const t=e.match(qy);return t?t[1].replace(Xy,"'"):e}const Zy=y.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`,eb=y.div`
  background: ${_.background.card};
  border: 1px solid ${_.borderLight};
  border-radius: ${ae.large};
  padding: ${S.xl};
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  margin: ${S.md};
  position: relative;
  box-shadow: ${Ce.hover};

  @media (max-width: ${V.tablet}) {
    max-width: 95vw;
    padding: ${S.lg};
  }

  @media (max-width: ${V.mobile}) {
    padding: ${S.md};
  }
`,tb=y.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${S.lg};
  padding-bottom: ${S.md};
  border-bottom: 1px solid ${_.borderLight};
`,nb=y.h2`
  color: ${_.text.primary};
  font-size: ${$.fontSize["2xl"]};
  font-weight: ${$.fontWeight.semibold};
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${V.mobile}) {
    font-size: ${$.fontSize.xl};
  }
`,ib=y.button`
  background: none;
  border: none;
  color: ${_.text.secondary};
  font-size: ${$.fontSize["2xl"]};
  cursor: pointer;
  padding: ${S.xs};
  border-radius: ${ae.small};
  transition: all 0.3s ease;
  line-height: 1;

  &:hover {
    background: ${_.cardOverlay};
    color: ${_.text.primary};
  }
`,Le=y.div`
  margin-bottom: ${S.lg};

  &:last-child {
    margin-bottom: 0;
  }
`,Ve=y.h3`
  color: ${_.primary};
  font-size: ${$.fontSize.lg};
  font-weight: ${$.fontWeight.semibold};
  margin-bottom: ${S.md};
  display: flex;
  align-items: center;
  gap: ${S.sm};
`,rb=y.div`
  color: ${_.text.secondary};
  line-height: 1.6;
  margin-bottom: ${S.md};
`,La=y.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${S.sm};
`,Va=y.span`
  background: ${_.cardOverlay};
  color: ${_.text.primary};
  padding: ${S.xs} ${S.sm};
  border-radius: ${ae.small};
  font-size: ${$.fontSize.sm};
  border: 1px solid ${_.borderLight};
  transition: all 0.3s ease;

  &:hover {
    background: ${_.gradients.card};
    transform: translateY(-1px);
  }
`,Tn=y.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Dn=y.li`
  color: ${_.text.secondary};
  margin-bottom: ${S.sm};
  padding-left: ${S.md};
  position: relative;
  line-height: 1.5;

  &:before {
    content: '🚀';
    position: absolute;
    left: 0;
    top: 0;
  }
`,ob=y.div`
  background: ${_.gradients.card};
  color: ${_.text.primary};
  padding: ${S.sm} ${S.md};
  border-radius: ${ae.medium};
  font-size: ${$.fontSize.sm};
  font-weight: ${$.fontWeight.medium};
  display: inline-block;
  margin-bottom: ${S.md};
`,sb=y.div`
  background: ${_.gradients.card};
  border-radius: ${ae.medium};
  padding: ${S.md};
  margin-top: ${S.lg};
  border: 1px solid ${_.borderLight};
`,ab=y.a`
  display: inline-flex;
  align-items: center;
  gap: ${S.sm};
  background: #0077b5;
  color: white;
  padding: ${S.sm} ${S.md};
  border-radius: ${ae.small};
  text-decoration: none;
  font-weight: ${$.fontWeight.medium};
  transition: all 0.3s ease;

  &:hover {
    background: #005885;
    transform: translateY(-1px);
    box-shadow: ${Ce.medium};
  }
`;function cb({isOpen:e,onClose:t,job:n}){const[i]=pe();if(oe(()=>{const l=f=>{f.key==="Escape"&&t()};return e&&(document.addEventListener("keydown",l),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",l),document.body.style.overflow="unset"}},[e,t]),!e)return null;const r=new Date(n.startDate),o=n.endDate==="At the moment"?new Date:new Date(n.endDate),s=fu(o,r),a=()=>{const l=Math.floor(s/12),f=s%12;return i==="EN"?l>0&&f>0?`${l}y ${f}mo`:l>0?`${l} year${l>1?"s":""}`:`${f} month${f>1?"s":""}`:l>0&&f>0?`${l}a ${f}m`:l>0?`${l} ano${l>1?"s":""}`:`${f} mes${f>1?"es":""}`},c=()=>{const l=Ra(r,"MMM yyyy"),f=n.endDate==="At the moment"?i==="EN"?"Present":"Atual":Ra(o,"MMM yyyy");return`${l} - ${f}`},u=i==="EN"?{duration:"Duration",description:"Description",technologies:"Technologies",databases:"Databases",projects:"Key Projects",learnings:"Learning & Growth",achievements:"Achievements",responsibilities:"Key Responsibilities",recommendations:"Recommendations",viewOnLinkedIn:"View on LinkedIn",company:"Company"}:{duration:"Duração",description:"Descrição",technologies:"Tecnologias",databases:"Bancos de Dados",projects:"Projetos Principais",learnings:"Aprendizados",achievements:"Conquistas",responsibilities:"Principais Responsabilidades",recommendations:"Recomendações",viewOnLinkedIn:"Ver no LinkedIn",company:"Empresa"};return h(Zy,{onClick:l=>{l.target===l.currentTarget&&t()},children:h(eb,{children:[h(tb,{children:[h("div",{children:[h(nb,{children:n.title}),n.company&&h("div",{style:{color:"#8b5cf6",fontSize:"1rem",marginTop:"0.5rem"},children:n.company})]}),h(ib,{onClick:t,children:"×"})]}),h(ob,{children:[c()," • ",a()]}),h(Le,{children:[h(Ve,{children:["📋 ",u.description]}),h(rb,{children:n.description})]}),n.achievements&&n.achievements.length>0&&h(Le,{children:[h(Ve,{children:["🏆 ",u.achievements]}),h(Tn,{children:n.achievements.map((l,f)=>h(Dn,{children:l},f))})]}),n.languages.length>0&&h(Le,{children:[h(Ve,{children:["💻 ",u.technologies]}),h(La,{children:n.languages.map((l,f)=>h(Va,{children:l},f))})]}),n.databases.length>0&&h(Le,{children:[h(Ve,{children:["🗄️ ",u.databases]}),h(La,{children:n.databases.map((l,f)=>h(Va,{children:l},f))})]}),n.projects.length>0&&h(Le,{children:[h(Ve,{children:["🚀 ",u.projects]}),h(Tn,{children:n.projects.map((l,f)=>h(Dn,{children:l},f))})]}),n.learnings.length>0&&h(Le,{children:[h(Ve,{children:["📚 ",u.learnings]}),h(Tn,{children:n.learnings.map((l,f)=>h(Dn,{children:l},f))})]}),n.responsibilities&&n.responsibilities.length>0&&h(Le,{children:[h(Ve,{children:["📝 ",u.responsibilities]}),h(Tn,{children:n.responsibilities.map((l,f)=>h(Dn,{children:l},f))})]}),n.recommendations&&n.recommendations.length>0&&h(Le,{children:[h(Ve,{children:["💬 ",u.recommendations]}),n.recommendations.map((l,f)=>h("div",{style:{backgroundColor:"#1e293b",padding:"1rem",borderRadius:"0.5rem",marginBottom:"0.5rem",borderLeft:"3px solid #8b5cf6"},children:[h("p",{style:{fontStyle:"italic",marginBottom:"0.5rem",color:"#e2e8f0"},children:['"',l.text,'"']}),h("p",{style:{fontSize:"0.875rem",color:"#94a3b8",textAlign:"right"},children:["— ",l.author," (",l.relationship,")"]})]},f))]}),n.linkedInUrl&&h(sb,{children:h(ab,{href:n.linkedInUrl,target:"_blank",rel:"noopener noreferrer",children:[h("span",{children:"💼"})," ",u.viewOnLinkedIn]})})]})})}const lb=y.section`
    width: 100%;
    margin: 4rem 0;
    padding: 3rem 0;
    background: linear-gradient(135deg, 
        rgba(15, 23, 42, 0.5) 0%, 
        rgba(30, 41, 59, 0.3) 100%
    );
    border-radius: 24px;
    border: 1px solid rgba(139, 92, 246, 0.1);
    
    @media (max-width: 768px) {
        margin: 2rem 0;
        padding: 2rem 0;
        border-radius: 16px;
    }
`,ub=y.div`
    text-align: center;
    margin-bottom: 3rem;
    
    @media (max-width: 768px) {
        margin-bottom: 2rem;
    }
`,db=y.h2`
    font-size: 2.5rem;
    font-weight: 700;
    color: ${e=>e.theme.white};
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 50%, #f59e0b 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    @media (max-width: 768px) {
        font-size: 2rem;
    }
`,hb=y.p`
    font-size: 1.1rem;
    color: ${e=>e.theme["white-50"]};
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    
    @media (max-width: 768px) {
        font-size: 1rem;
        padding: 0 1rem;
    }
`;y.section`
    width: 100%;
    max-width: 1000px;
    margin: 3rem auto 2rem;
    padding: 2rem 1rem;
    
    @media (max-width: 768px) {
        padding: 1.5rem 0.5rem;
        margin: 2rem auto 1rem;
    }
`;const fb=y.div`
    position: relative;
    width: 100%;
    
    @media (max-width: 768px) {
        padding-left: 2rem;
    }
`,mb=y.div`
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(
        180deg,
        #8b5cf6 0%,
        #06b6d4 50%,
        #f59e0b 100%
    );
    transform: translateX(-50%);
    border-radius: 2px;
    
    @media (max-width: 768px) {
        left: 1rem;
        transform: none;
        width: 2px;
    }
`,pb=y.div`
    position: relative;
    width: 100%;
    margin-bottom: 3rem;
    display: flex;
    align-items: flex-start;
    
    ${e=>e.side==="left"?`
        justify-content: flex-start;
        
        @media (min-width: 1200px) {
            padding-right: calc(50% + 0.2rem);
        }
        
        @media (min-width: 769px) and (max-width: 1199px) {
            padding-right: calc(50% + 0.3rem);
        }
    `:`
        justify-content: flex-end;
        
        @media (min-width: 1200px) {
            padding-left: calc(50% + 0.2rem);
        }
        
        @media (min-width: 769px) and (max-width: 1199px) {
            padding-left: calc(50% + 0.3rem);
        }
    `}
    
    @media (max-width: 768px) {
        justify-content: flex-start;
        padding-left: 2.5rem;
        padding-right: 0;
    }
`,gb=y.div`
    position: absolute;
    left: 50%;
    top: 1rem;
    min-width: 90px;
    height: 50px;
    border-radius: 25px;
    transform: translateX(-50%);
    border: 3px solid ${e=>e.theme.background};
    background: ${e=>e.type==="professional"?"#06b6d4":"#8b5cf6"};
    box-shadow: 0 0 0 3px ${e=>e.type==="professional"?"rgba(6, 182, 212, 0.3)":"rgba(139, 92, 246, 0.3)"};
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 700;
    color: white;
    text-align: center;
    line-height: 1.1;
    padding: 4px;
    
    @media (max-width: 768px) {
        left: 1rem;
        transform: none;
        min-width: 70px;
        height: 40px;
        border-radius: 20px;
        border-width: 2px;
        font-size: 0.6rem;
        padding: 2px;
    }
`,yb=y.div`
    background: linear-gradient(135deg, 
        rgba(15, 23, 42, 0.9) 0%, 
        rgba(15, 23, 42, 0.7) 100%
    );
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 1.5rem;
    width: 100%;
    max-width: 450px;
    border: 2px solid ${e=>e.type==="professional"?"rgba(6, 182, 212, 0.2)":"rgba(139, 92, 246, 0.2)"};
    transition: all 0.3s ease;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 1rem;
        width: 0;
        height: 0;
        border-style: solid;

        @media (min-width: 769px) {
            ${e=>{const t=e.type==="professional"?"rgba(6, 182, 212, 0.2)":"rgba(139, 92, 246, 0.2)";return e.side==="left"?`
                        right: -4px;
                        border-width: 8px 4px 8px 0;
                        border-color: transparent ${t} transparent transparent;
                    `:`
                        left: -4px;
                        border-width: 8px 0 8px 4px;
                        border-color: transparent transparent transparent ${t};
                    `}}
        }

        @media (max-width: 768px) {
            // all cards on right of line, arrows point left
            left: -10px;
            right: auto;
            border-width: 8px 0 8px 10px;
            border-color: transparent transparent transparent ${e=>e.type==="professional"?"rgba(6, 182, 212, 0.2)":"rgba(139, 92, 246, 0.2)"};
        }
    }
    
    &:hover {
        transform: translateY(-4px);
        border-color: ${e=>e.type==="professional"?"rgba(6, 182, 212, 0.4)":"rgba(139, 92, 246, 0.4)"};
        box-shadow: 0 8px 25px ${e=>e.type==="professional"?"rgba(6, 182, 212, 0.2)":"rgba(139, 92, 246, 0.2)"};
    }
    
    @media (max-width: 768px) {
        max-width: 100%;
        padding: 1.25rem;
    }
`,bb=y.div`
    font-size: 0.8rem;
    color: #8b5cf6;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`,vb=y.h3`
    font-size: 1.1rem;
    font-weight: 700;
    color: ${e=>e.theme.white};
    margin-bottom: 0.25rem;
    line-height: 1.3;
    
    @media (max-width: 768px) {
        font-size: 1rem;
    }
`,xb=y.div`
    font-size: 0.9rem;
    color: ${e=>e.type==="professional"?"#06b6d4":"#8b5cf6"};
    font-weight: 600;
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`,wb=y.p`
    font-size: 0.85rem;
    color: ${e=>e.theme["white-50"]};
    line-height: 1.5;
    margin-bottom: 0.75rem;
    text-align: justify;
    
    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`,_b=y.div`
    position: absolute;
    width: 3px;
    background: #f59e0b; /* Amber */
    transform: translateX(-50%);
    z-index: 0;
    border-radius: 2px;
`,Ia=y.div`
    position: absolute;
    height: 3px;
    background: #f59e0b; /* Amber */
    z-index: 0;
    border-radius: 2px;
`,Sb=y.div`
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: #f59e0b;
    color: #0f172a; /* Slate 900 */
    padding: 4px 10px;
    border-radius: 16px;
    font-size: 0.75rem;
    font-weight: 700;
    z-index: 3;
    white-space: nowrap;
    border: 2px solid ${e=>e.theme.background};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`,Pb=y.div`
    position: relative;
    width: 100%;
    margin-bottom: 3rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`,kb=y.div`
    position: absolute;
    left: 50%;
    top: 1rem;
    min-width: 100px;
    height: 50px;
    border-radius: 25px;
    transform: translateX(-50%);
    border: 3px solid ${e=>e.theme.background};
    background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.3);
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 700;
    color: white;
    text-align: center;
    line-height: 1.2;
    animation: pulse 2s infinite;
    
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.3);
        }
        50% {
            box-shadow: 0 0 0 6px rgba(245, 158, 11, 0.2);
        }
        100% {
            box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.3);
        }
    }
    
    @media (max-width: 768px) {
        left: 1rem;
        transform: none;
        min-width: 80px;
        height: 40px;
        border-radius: 20px;
        border-width: 2px;
        font-size: 0.7rem;
    }
`,Cb=y.div`
    background: linear-gradient(135deg, 
        rgba(245, 158, 11, 0.15) 0%, 
        rgba(217, 119, 6, 0.1) 100%
    );
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 1.5rem;
    width: 100%;
    max-width: 400px;
    border: 2px solid rgba(245, 158, 11, 0.3);
    transition: all 0.3s ease;
    position: relative;
    margin-top: 3rem;
    
    &:hover {
        transform: translateY(-4px);
        border-color: rgba(245, 158, 11, 0.5);
        box-shadow: 0 8px 25px rgba(245, 158, 11, 0.2);
    }
    
    @media (max-width: 768px) {
        max-width: 100%;
        padding: 1.25rem;
        margin-left: 2.5rem;
    }
`,Tb=y.h3`
    font-size: 1.2rem;
    font-weight: 700;
    color: #f59e0b;
    margin-bottom: 0.75rem;
    line-height: 1.3;
    text-align: center;
    
    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`,Db=y.p`
    font-size: 0.9rem;
    color: ${e=>e.theme["white-50"]};
    line-height: 1.5;
    text-align: center;
    
    @media (max-width: 768px) {
        font-size: 0.85rem;
    }
`;function $b({experiences:e}){const[t]=pe(),n=he([]),i=he([]),r=he(null),[o,s]=Y(!1),[a,c]=Y([]),u=t==="EN"?{professional:"Professional",academic:"Academic",present:"Present"}:{professional:"Profissional",academic:"Acadêmico",present:"Atual"},d=ze(()=>[...e].sort((f,m)=>new Date(m.startDate).getTime()-new Date(f.startDate).getTime()),[e]);oe(()=>{const f=window.matchMedia("(max-width: 768px)"),m=()=>s(f.matches);return m(),f.addEventListener("change",m),()=>f.removeEventListener("change",m)},[]);const l=ei(()=>{if(!r.current)return;const f=[],m={};d.forEach((p,g)=>{if(p.type==="professional"&&p.company){const w=p.company;m[w]||(m[w]=[]),m[w].push({...p,originalIndex:g})}}),Object.values(m).forEach(p=>{var g;if(p.length>1){p.sort((P,T)=>new Date(P.startDate).getTime()-new Date(T.startDate).getTime());const w=p[p.length-1],b=p[0],x=i.current[w.originalIndex],v=i.current[b.originalIndex],C=(g=n.current[w.originalIndex])==null?void 0:g.parentElement;if(x&&v&&C&&r.current){const P=x.getBoundingClientRect(),T=v.getBoundingClientRect(),k=C.getBoundingClientRect(),A=r.current.getBoundingClientRect(),E=A.left+A.width/2-k.left,z=o?"right":w.originalIndex%2===0?"left":"right",ge=o?"right":b.originalIndex%2===0?"left":"right",rt=P.top+P.height/2-k.top,Et=T.top+T.height/2-(P.top+P.height/2),ot={top:P.top+P.height/2-k.top,left:z==="left"?P.right-k.left:E,width:z==="left"?E-(P.right-k.left):P.left-k.left-E},st={top:T.top+T.height/2-k.top,left:ge==="left"?T.right-k.left:E,width:ge==="left"?E-(T.right-k.left):T.left-k.left-E},Rt=new Date(b.startDate),B=w.endDate==="At the moment"||w.endDate==="Atual"?new Date:new Date(w.endDate);let O=(B.getFullYear()-Rt.getFullYear())*12;O-=Rt.getMonth(),O+=B.getMonth();const ne=O<=0?0:O,ie=Math.floor(ne/12),ce=ne%12,Ue=[];ie>0&&Ue.push(`${ie}a`),ce>0&&Ue.push(`${ce}m`);const Lt=Ue.length>0?Ue.join(" "):"1m";f.push({top:rt,left:E,height:Et,duration:Lt,topHorizontal:ot,bottomHorizontal:st})}}}),c(f)},[d,o]);return oe(()=>(l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)),[l]),h(lb,{children:[h(ub,{children:[h(db,{children:t==="EN"?"Career Journey":"Jornada Profissional"}),h(hb,{children:t==="EN"?"Follow my career evolution through time, showing the overlap and progression of my professional and academic experiences.":"Acompanhe a evolução da minha carreira ao longo do tempo, mostrando a sobreposição e progressão das minhas experiências profissionais e acadêmicas."})]}),h(fb,{children:[h(mb,{ref:r}),d.map((f,m)=>{const p=o?"right":m%2===0?"left":"right";return h(pb,{side:p,ref:g=>n.current[m]=g,children:[h(gb,{type:f.type,children:[h("div",{children:new Date(f.startDate).toLocaleDateString(t==="EN"?"en-US":"pt-BR",{year:"2-digit",month:"short"})}),h("div",{children:f.endDate==="At the moment"||f.endDate==="Atual"?t==="EN"?"Now":"Atual":new Date(f.endDate).toLocaleDateString(t==="EN"?"en-US":"pt-BR",{year:"2-digit",month:"short"})})]}),h(yb,{type:f.type,side:p,ref:g=>i.current[m]=g,children:[h(bb,{children:[new Date(f.startDate).toLocaleDateString(t==="EN"?"en-US":"pt-BR",{year:"numeric",month:"short"})," ","-"," ",f.endDate==="At the moment"||f.endDate==="Atual"?u.present:new Date(f.endDate).toLocaleDateString(t==="EN"?"en-US":"pt-BR",{year:"numeric",month:"short"})]}),h(vb,{children:f.title}),f.company&&h(xb,{type:f.type,children:f.company}),h(wb,{children:f.description})]})]},m)}),a.map((f,m)=>h(_e.Fragment,{children:[h(_b,{style:{top:`${f.top}px`,left:`${f.left}px`,height:`${f.height}px`}}),h(Ia,{style:{top:`${f.topHorizontal.top}px`,left:`${f.topHorizontal.left}px`,width:`${f.topHorizontal.width}px`}}),h(Ia,{style:{top:`${f.bottomHorizontal.top}px`,left:`${f.bottomHorizontal.left}px`,width:`${f.bottomHorizontal.width}px`}}),h(Sb,{style:{top:`${f.top+f.height/2}px`,left:`${f.left}px`},children:f.duration})]},m)),h(Pb,{children:[h(kb,{children:t==="EN"?"NOW":"AGORA"}),h(Cb,{children:[h(Tb,{children:t==="EN"?"Ready for New Challenges!":"Pronto para Novos Desafios!"}),h(Db,{children:t==="EN"?"Currently exploring new opportunities and looking forward to contributing to innovative projects that make a difference. Open to discussing exciting challenges in software development.":"Atualmente explorando novas oportunidades e ansioso para contribuir com projetos inovadores que fazem a diferença. Aberto para discutir desafios empolgantes em desenvolvimento de software."}),"          "]})]})]})]})}const gu=[{title:"Senior Software Engineer",company:"Trimble",description:"Working on innovative developments with facial recognition applications, route calculations with AWS and Azure, using Java, Kotlin and Python for the backend and Angular, React, React-native framework with JavaScript for the frontend. All applications developed need unit, integrated and automated tests. Focus on fleet management solutions and worker safety applications.",startDate:"2024-05-01",endDate:"At the moment",languages:["Java","Kotlin","Python","JavaScript","TypeScript","Angular","React","React Native","Lua"],databases:["Redis","PostgreSQL","DynamoDB"],projects:["Vfleets - Facial Recognition & Route Calculations","Worker PPE Detection System","Driver Photo Registration with Facial Recognition","Event Category Propagation System","Snapshot to Video Conversion Pipeline"],learnings:["Advanced Facial Recognition Implementation","Real-time AI Image Evaluation","Microservices Architecture with Kafka","AWS Lambda with Python for Video Generation","Infrastructure as Code with Terraform","Redis Lua Scripting for Performance","GitHub Actions for CI/CD Automation"],achievements:["Built real-time PPE detection system preventing workplace accidents","Developed secure driver photo registration reducing onboarding time by 40%","Implemented event categorization improving operational team efficiency","Created automated video generation from snapshots enhancing investigation processes","Architected scalable microservices handling thousands of daily fleet events"],responsibilities:["Develop facial recognition applications for fleet management","Build real-time worker safety monitoring systems","Design microservices architecture using Kafka for communication","Implement comprehensive testing strategies (unit, integration, automated)","Create secure photo registration flows with temporary URLs","Develop event processing systems for driving behavior analysis","Build AWS Lambda functions for video processing","Maintain Redis caching systems with Lua scripting"],linkedInUrl:"https://www.linkedin.com/in/wilton-software-engineer",recommendations:[{author:"Tech Lead - Trimble",text:"Wilton's expertise in facial recognition and real-time processing has been invaluable to our fleet safety initiatives. His microservices architecture significantly improved our system scalability.",relationship:"Direct Manager"},{author:"Senior Developer - Trimble",text:"Exceptional problem-solving skills in complex AI integration projects. Always delivers robust, well-tested solutions with excellent documentation.",relationship:"Colleague"}]},{title:"Software Application Developer",company:"IBM",description:"Developed cloud-native solutions for major banking clients including Itaú. Specialized in process automation, international exchange systems, account opening platforms, and customer segmentation using AWS services. Implemented TDD practices and mentored colleagues on cloud technologies and clean code principles.",startDate:"2022-11-01",endDate:"2024-04-30",languages:["Java","Python","Terraform","CloudFormation"],databases:["RDS Aurora","PostgreSQL","DynamoDB","OpenSearch"],projects:["Itaú Bank Process Automation (Manual to Cloud)","International Exchange SWIFT Message Recovery","Account Opening BFF Architecture (150k daily requests)","Customer Segment Targeting with ML","AWS Infrastructure Optimization"],learnings:["Enterprise-level AWS Architecture Design","Test Driven Development (TDD) and Mutation Testing","Banking Industry Standards and SWIFT Integration","Machine Learning for Customer Segmentation","High-Availability Systems Design","Mentoring and Knowledge Transfer","Agile Methodologies (SCRUM, XP, KANBAN)"],achievements:["Automated manual process reducing 10+ employees per agency to zero manual work","Recovered lost SWIFT messages from 3 big datasets without impacting end users","Built BFF handling 150,000 daily requests with 99.9% uptime","Improved customer segmentation reducing account opening time by 4%","Implemented machine learning model for customer profile identification","Mentored 10+ colleagues on AWS services and clean code practices"],responsibilities:["Design and implement cloud-native banking solutions on AWS","Develop automated processes replacing manual workflows","Build high-performance BFFs handling thousands of daily requests","Implement TDD and mutation testing for code quality assurance","Design Step Functions and Lambda architectures for data processing","Integrate with banking systems including SWIFT messaging","Monitor system performance using CloudWatch, Splunk, and Grafana","Mentor team members on AWS services and development best practices"],linkedInUrl:"https://www.linkedin.com/in/wilton-software-engineer",recommendations:[{author:"Solutions Architect - IBM",text:"Wilton's expertise in AWS architecture and banking systems was crucial for our major client implementations. His mentoring abilities helped elevate the entire team's technical skills.",relationship:"Technical Lead"},{author:"Product Manager - IBM",text:"Outstanding delivery of complex banking automation projects. Always focused on end-user impact while maintaining the highest technical standards. His TDD approach significantly improved code quality.",relationship:"Product Manager"}]},{title:"Software Engineer",company:"EVOP",description:"Worked as full-stack developer on monolithic ERP system migration to cloud and microservices architecture. Specialized in report generation, payment integration with ASAAS, HR dashboards, and cost apportionment systems for construction companies. Led cloud migration during security incidents.",startDate:"2019-06-01",endDate:"2022-07-31",languages:["Java","Angular","JSF","JavaScript"],databases:["PostgreSQL","MySQL"],projects:["Excel/PDF Report Generator and Reader","ASAAS Payment Microservice Integration","HR Dashboard with Analytics and Forecasting","Cost Apportionment System for Construction Companies","Monolithic to Cloud Migration"],learnings:["Monolithic to Microservices Migration Strategies","Payment Gateway Integration and Event Processing","Full-Stack Development with Java and Angular","ERP System Development for Construction Industry","Report Generation and Template Management","Message Queue Systems (Kafka, RabbitMQ, SQS)","Spring Framework Ecosystem (Boot, MVC, Security)"],achievements:["Successfully migrated monolithic system to AWS cloud during security crisis","Built report generator that became client favorite feature","Developed microservice handling thousands of daily payment notifications","Created comprehensive HR analytics reducing manual reporting by 80%","Implemented cost sharing system enabling multi-company collaboration","Established clean code practices within legacy monolithic system"],responsibilities:["Develop and maintain ERP system for construction industry","Design report generation templates for Excel and PDF formats","Build microservices for payment processing integration","Create HR analytics dashboards with salary and budget forecasting","Implement cost apportionment algorithms for multi-company projects","Maintain message queue systems for real-time event processing","Ensure code quality within monolithic architecture constraints","Collaborate on cloud migration strategies and implementation"],linkedInUrl:"https://www.linkedin.com/in/wilton-software-engineer",recommendations:[{author:"CTO - EVOP",text:"Wilton's leadership during our emergency cloud migration was exceptional. His technical skills in both monolithic and microservices architectures made the transition seamless for our clients.",relationship:"Direct Manager"},{author:"Senior Developer - EVOP",text:"Excellent full-stack developer with deep understanding of ERP systems. His report generation solution significantly improved client satisfaction and reduced support tickets.",relationship:"Colleague"}]},{title:"Software Developer",company:"EngeFour Jr.",description:"Developed mobile applications and web solutions for various clients including sales management, room reservation system, and university restaurant menu app. Created company website that significantly increased business visibility and client acquisition. Worked with Android Studio, multiple databases, and microservices.",startDate:"2016-09-01",endDate:"2017-08-31",languages:["Java","Kotlin","C++","PHP","Android"],databases:["MySQL","MongoDB"],projects:["Sales Management Mobile Application","Room Reservation System for University","University Restaurant Menu Mobile App","EngeFour Jr. Company Website","Microservices with C++ Drogon Framework"],learnings:["Mobile Application Development from Scratch","Android Studio and Native Development","Database Design and Implementation","Client Requirements Analysis and Management","Business Development and Client Acquisition","Microservices Architecture with C++","Web Development with PHP and Canvas Design"],achievements:["Delivered mobile app that helped client break revenue record in the same year","Built room reservation system reducing bureaucracy by 90%","Created university menu app serving thousands of students daily","Developed company website that doubled client acquisition rate","Established mobile development standards still used by the company","Led team projects from conception to deployment"],responsibilities:["Develop native Android applications using Java and Kotlin","Design and implement database schemas for mobile applications","Analyze client requirements and translate to technical solutions","Build inventory control and customer management systems","Create microservices using C++ Drogon framework","Develop responsive web applications with PHP","Design user interfaces using Canvas for visual appeal","Manage client relationships and project deliverables"],linkedInUrl:"https://www.linkedin.com/in/wilton-software-engineer",recommendations:[{author:"Project Manager - EngeFour Jr.",text:"Wilton was instrumental in establishing our mobile development capabilities. His sales management app helped one of our clients achieve record-breaking revenue. Excellent technical and communication skills.",relationship:"Direct Manager"},{author:"Client - Local Business Owner",text:"The mobile application Wilton developed transformed our business operations. Inventory control became effortless and we could finally track our recurring customers properly. Outstanding work!",relationship:"Client"}]}],Ab=Object.freeze(Object.defineProperty({__proto__:null,default:gu},Symbol.toStringTag,{value:"Module"})),yu=[{title:"Professor Computer Science",company:"ESTÁCIO",description:"Teaching practical and theoretical classes on mobile development, cloud computing, IoT, cybersecurity, and big data. Responsible for guiding students through real-world projects, from React Native applications to Industry 4.0 IoT solutions. Focus on hands-on learning with clean code practices, testing, and CI/CD implementation.",startDate:"2024-02-01",endDate:"2025-07-31",languages:["React Native","Python","Java","JavaScript","Arduino","MQTT"],databases:["AWS RDS Aurora","S3","DynamoDB"],projects:["React Native MVP Development Course (30+ students)","AWS Cloud Computing Practical Labs (10+ students)","Industry 4.0 IoT Solutions with Arduino (20+ students)","OWASP Cybersecurity Training (10+ students)","Big Data Analytics with PySpark (40+ students)"],learnings:["Advanced Teaching Methodologies for Technical Subjects","Industry 4.0 and IoT Integration Strategies","OWASP Security Best Practices","Big Data Processing with Hadoop and PySpark","Cloud Architecture Design and Implementation","Student Mentoring and Project Guidance","Curriculum Development for Tech Education"],achievements:["Successfully taught 30+ students React Native from scratch to MVP","Developed comprehensive IoT curriculum integrating Arduino and Python","Created hands-on AWS labs using RDS Aurora, Lambda, and S3","Implemented cybersecurity training covering OWASP top 10 vulnerabilities","Delivered big data course to 40+ students with 95% completion rate","Established clean code and CI/CD practices in all courses"],responsibilities:["Design and deliver comprehensive computer science courses","Teach React Native mobile development from basics to advanced concepts","Conduct practical AWS cloud computing laboratories","Guide students through Industry 4.0 IoT projects with Arduino","Deliver cybersecurity training covering OWASP methodologies","Teach big data concepts using PySpark, Pandas, and Hadoop","Mentor students in real-world problem-solving projects","Implement unit testing and CI/CD practices in student projects"],linkedInUrl:"https://www.linkedin.com/in/wilton-software-engineer",recommendations:[{author:"Academic Coordinator - ESTÁCIO",text:"Professor Wilton brings exceptional industry experience to academia. His practical approach and real-world projects have significantly improved student outcomes and job placement rates.",relationship:"Academic Supervisor"},{author:"Former Student - ESTÁCIO",text:"Best professor I've had! His combination of theoretical knowledge and practical industry experience made complex concepts easy to understand. Now working as a React Native developer thanks to his guidance.",relationship:"Student"}]},{title:"Master's Degree in Computer Science",company:"UFMS - Federal University of Mato Grosso do Sul",description:"Development of algorithm capable of finding a solution to the Dynamic Vehicle Routing Problem, having a performance of more than 15% among the compared algorithms. Metric defined from a fuel cost line per km/l and number of vehicles used. Research focused on optimization algorithms and operations research with applications in logistics and transportation systems.",startDate:"2020-03-01",endDate:"2022-09-30",languages:["Python","C++","Java","CPLEX","Gurobi","Docker","MATLAB"],databases:["PostgreSQL","MongoDB","CSV Data Processing"],projects:["Dynamic Vehicle Routing Problem Optimization Algorithm","Operations Research Mathematical Modeling","Logistics Optimization Systems","Academic Research Publications","International Conference Presentations","Transportation Network Analysis Tools"],learnings:["Advanced Operations Research Methodologies","Algorithm Design and Optimization Techniques","Academic Writing and Research Publication","Statistical Analysis and Data Modeling","Mathematical Programming and Linear Optimization","Simulation and Modeling Techniques","Research Methodology and Scientific Method","International Academic Presentation Skills"],achievements:["Developed optimization algorithm with 15% better performance than existing solutions","Published 5 research papers in high-impact international conferences","Received academic excellence scholarship for outstanding research","Presented research findings at 8 national and international conferences","Graduated with highest honors (GPA: 9.2/10)","Research cited by 25+ subsequent academic publications","Won 'Best Research Paper' award at SBPO 2022"],responsibilities:["Conduct independent research on vehicle routing optimization algorithms","Develop and test mathematical optimization models","Write and publish academic papers in peer-reviewed journals","Present research findings at national and international conferences","Collaborate with academic advisors and research teams","Mentor undergraduate students in research projects","Review academic papers for conferences and journals","Organize and participate in academic seminars and workshops"],linkedInUrl:"https://www.linkedin.com/in/wilton-software-engineer",recommendations:[{author:"PhD Advisor - UFMS",text:"Wilton's research contributions to vehicle routing optimization were exceptional. His algorithm innovations have practical applications and theoretical significance.",relationship:"Academic Advisor"},{author:"Research Colleague - UFMS",text:"Brilliant researcher with strong analytical skills. His dedication to academic excellence and collaborative spirit made our research group highly productive.",relationship:"Research Colleague"}]},{title:"Bachelor's Degree in Computer Engineering",company:"UFMS - Federal University of Mato Grosso do Sul",description:"Comprehensive computer engineering education covering software development, hardware design, algorithms, data structures, and engineering mathematics. Final project focused on 'Design of Controllers for Static Power Converters' combining software engineering with electrical engineering principles. Strong foundation in programming, mathematics, and engineering problem-solving.",startDate:"2015-01-01",endDate:"2019-12-31",languages:["C","C++","Java","Python","JavaScript","HTML","CSS","PHP","MATLAB","Assembly"],databases:["MySQL","MongoDB","PostgreSQL","Oracle"],projects:["Relig - Religious Social Network Platform","Design of Controllers for Static Power Converters (Final Project)","Web Development Portfolio Projects","Mobile Application Development","Embedded Systems Programming","Database Management System Design","Software Engineering Team Projects"],learnings:["Software Engineering Methodologies","Data Structures and Algorithms Mastery","Computer Architecture and Organization","Database Design and Implementation","Full-Stack Web Development","Mobile Application Development","Engineering Mathematics and Statistics","Project Management and Team Leadership","Hardware-Software Integration","System Analysis and Design"],achievements:["Graduated with honors (GPA: 8.7/10)","Developed innovative social network platform for religious communities","Successfully completed complex final project on power electronics control","Active leadership role in Computer Engineering Student Association","Completed 480+ hours of practical laboratory work","Participated in 3 academic research projects","Won 2nd place in University Programming Competition 2018","Organized technical workshops for fellow students"],responsibilities:["Complete comprehensive computer engineering curriculum (5 years)","Develop software and hardware integration projects","Participate in research and development activities","Collaborate on multidisciplinary engineering team projects","Present technical solutions and detailed engineering reports","Conduct laboratory experiments and data analysis","Mentor junior students in programming and engineering concepts","Lead student organization activities and technical events"],linkedInUrl:"https://www.linkedin.com/in/wilton-software-engineer",recommendations:[{author:"Final Project Supervisor - UFMS",text:"Wilton demonstrated exceptional engineering problem-solving skills in his final project. His work on power converter controllers showed deep understanding of both software and hardware integration.",relationship:"Academic Supervisor"},{author:"Programming Professor - UFMS",text:"One of the most dedicated students I've taught. Wilton's passion for programming and helping classmates made him a natural leader in our computer engineering program.",relationship:"Professor"}]}],Mb=Object.freeze(Object.defineProperty({__proto__:null,default:yu},Symbol.toStringTag,{value:"Module"})),Oa=y.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    padding: 2rem 1rem;

    @media (max-width: 768px) {
        padding: 1rem 0.5rem;
    }
`,Eb=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    background-color: ${e=>e.theme["secundary-blue-10"]};
    margin-bottom: 1rem;
    font-size: 0.9rem;

    @media (max-width: 480px) {
        width: 100px;
        height: 32px;
        font-size: 0.8rem;
    }
`,Rb=y.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    max-width: 600px;
    font-size: 2.5rem;
    color: ${e=>e.theme.white};
    text-align: center;
    margin-bottom: 2rem;
    line-height: 1.2;

    @media (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 480px) {
        font-size: 1.75rem;
        margin-bottom: 1rem;
    }
`,Lb=y.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 2rem;

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        gap: 2rem;
    }
`,ja=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background: ${e=>e.theme["background-secondary"]};
    border-radius: 12px;
    padding: 2rem 1rem;
    border: 1px solid ${e=>e.theme["secundary-blue-10"]};
    
    @media (min-width: 1024px) {
        width: 48%;
        max-width: 580px;
    }

    @media (max-width: 768px) {
        padding: 1.5rem 1rem;
    }

    @media (max-width: 480px) {
        padding: 1rem 0.5rem;
    }
`,Fa=y.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${e=>e.theme.white};
    margin-bottom: 0.5rem;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.3rem;
    }

    @media (max-width: 480px) {
        font-size: 1.2rem;
    }
`,Ba=y.p`
    color: ${e=>e.theme["white-50"]};
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    text-align: center;

    @media (max-width: 480px) {
        font-size: 0.8rem;
        margin-bottom: 1rem;
    }
`,Na=y.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    height: auto;

    @media (max-width: 768px) {
        gap: 1rem;
    }
`,Vb=y.div`
    margin: 3rem 0 2rem;
    text-align: center;
    padding: 2rem 1rem;
    border-top: 1px solid ${e=>e.theme["secundary-blue-10"]};
    width: 100%;
    max-width: 600px;

    p {
        margin-bottom: 1rem;
        font-size: 1rem;
        
        @media (max-width: 480px) {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 768px) {
        margin: 2rem 0 1rem;
        padding: 1.5rem 1rem;
    }

    @media (max-width: 480px) {
        padding: 1rem 0.5rem;
    }
`,Ib=y.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #0077b5;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;

    &:hover {
        background: #005885;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 119, 181, 0.3);
    }

    svg {
        width: 18px;
        height: 18px;
    }
`,Ob=y.section`
    height: auto;
    padding: 2rem;
    border-radius: 16px;
    width: 100%;
    max-width: 500px;
    border: 2px solid ${e=>e.theme["secundary-blue-10"]};
    background: linear-gradient(135deg, 
        rgba(15, 23, 42, 0.9) 0%, 
        rgba(15, 23, 42, 0.7) 100%
    );
    backdrop-filter: blur(10px);
    transition: all 0.4s ease;
    margin: 0 auto;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, #8b5cf6, #06b6d4, #f59e0b);
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:hover {
        border-color: ${e=>e.theme.purple};
        transform: translateY(-8px);
        box-shadow: 
            0 20px 40px rgba(139, 92, 246, 0.2),
            0 8px 16px rgba(0, 0, 0, 0.3);
        
        &::before {
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        padding: 1.5rem;
        max-width: 100%;
        
        &:hover {
            transform: translateY(-4px);
        }
    }

    @media (max-width: 480px) {
        padding: 1.25rem;
        border-width: 1px;
        border-radius: 12px;
        
        &:hover {
            transform: translateY(-2px);
        }
    }
`,$n=y.h3`
    font-weight: 700;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: ${e=>e.theme.white};
    line-height: 1.3;
    background: linear-gradient(135deg, #ffffff, #e2e8f0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }

    @media (max-width: 480px) {
        font-size: 1rem;
    }
`,jb=y.p`
    font-weight: 400;
    font-size: 0.95rem;
    color: ${e=>e.theme["white-50"]};
    line-height: 1.6;
    margin-bottom: 1.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: justify;

    @media (max-width: 768px) {
        font-size: 0.9rem;
        -webkit-line-clamp: 2;
        margin-bottom: 1.25rem;
    }

    @media (max-width: 480px) {
        font-size: 0.85rem;
        margin-bottom: 1rem;
        line-height: 1.5;
    }
`,Fb=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`,Bb=y.div`
    display: flex;
    font-weight: 700;
    font-size: medium;
    color: ${e=>e.theme["secundary-blue"]};
`,Nb=y.div`
    display: flex;
    font-weight: 400;
    font-size: medium;
    color: ${e=>e.theme["secundary-blue-50"]};
`,Fi=y.div`
    display: flex;  
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
`,Bt=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    width: fit-content;
    padding: 0.5rem 1rem;
    height: auto;
    min-height: 32px;
    background: linear-gradient(135deg, 
        rgba(139, 92, 246, 0.15), 
        rgba(6, 182, 212, 0.15)
    );
    border: 1px solid rgba(139, 92, 246, 0.3);
    color: ${e=>e.theme.white};
    font-size: 0.8rem;
    font-weight: 500;
    text-align: center;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);

    &:hover {
        background: linear-gradient(135deg, 
            rgba(139, 92, 246, 0.25), 
            rgba(6, 182, 212, 0.25)
        );
        border-color: rgba(139, 92, 246, 0.5);
        transform: translateY(-1px);
        box-shadow: 0 4px 8px rgba(139, 92, 246, 0.2);
    }

    @media (max-width: 480px) {
        padding: 0.4rem 0.8rem;
        font-size: 0.75rem;
        min-height: 28px;
    }
`,Wb=y.button`
    background: linear-gradient(135deg, #06b6d4, #0891b2);
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 600;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    box-shadow: 0 2px 4px rgba(6, 182, 212, 0.2);

    &:hover {
        background: linear-gradient(135deg, #0891b2, #0e7490);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3);
    }

    &:active {
        transform: translateY(0);
    }

    @media (max-width: 480px) {
        padding: 0.4rem 0.8rem;
        font-size: 0.75rem;
    }
`;function Wa(e){const[t,n]=Y(!1),[i]=pe(),r=new Date(e.startDate),o=e.endDate==="At the moment"?new Date:new Date(e.endDate),s=fu(o,r),a=()=>{const l=Math.floor(s/12),f=s%12;return i==="EN"?l>0&&f>0?`${l}y ${f}mo`:l>0?`${l} year${l>1?"s":""}`:`${f} month${f>1?"s":""}`:l>0&&f>0?`${l}a ${f}m`:l>0?`${l} ano${l>1?"s":""}`:`${f} mes${f>1?"es":""}`},c=i==="EN"?{languages:"Technologies",databases:"Databases",projects:"Key Projects",learnings:"Learnings",viewDetails:"View Details",showLess:"Show Less",showMore:"Show More"}:{languages:"Tecnologias",databases:"Bancos de Dados",projects:"Projetos Principais",learnings:"Aprendizados",viewDetails:"Ver Detalhes",showLess:"Mostrar Menos",showMore:"Mostrar Mais"},u=()=>{n(!t)},d=()=>{e.onDetailsClick&&e.onDetailsClick()};return h(Ob,{className:t?"expanded":"collapsed",children:[h("div",{style:{marginBottom:"1rem"},children:[h($n,{children:e.title}),e.company&&h("div",{style:{color:"#8b5cf6",fontSize:"1rem",fontWeight:600,marginTop:"0.25rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:h("span",{style:{background:"linear-gradient(135deg, #8b5cf6, #06b6d4)",WebkitBackgroundClip:"text",backgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:"bold"},children:["🏢 ",e.company]})})]}),h(jb,{style:{display:"-webkit-box",WebkitLineClamp:t?"none":3,WebkitBoxOrient:"vertical",overflow:"hidden"},children:e.description}),t&&h(Z,{children:[h($n,{children:c.languages}),h(Fi,{children:[e.languages.slice(0,6).map((l,f)=>h(Bt,{children:l},f)),e.languages.length>6&&h(Bt,{children:["+",e.languages.length-6," ",i==="EN"?"more":"mais"]})]}),e.databases.length>0&&h(Z,{children:[h($n,{children:c.databases}),h(Fi,{children:[e.databases.slice(0,4).map((l,f)=>h(Bt,{children:l},f)),e.databases.length>4&&h(Bt,{children:["+",e.databases.length-4," ",i==="EN"?"more":"mais"]})]})]}),e.projects.length>0&&h(Z,{children:[h($n,{children:c.projects}),h(Fi,{children:e.projects.slice(0,3).map((l,f)=>h(Bt,{style:{maxWidth:"100%"},children:l},f))})]})]}),h(Fb,{children:[h(Bb,{children:a()}),h(Nb,{children:h("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[e.onDetailsClick&&h(Wb,{onClick:d,children:[h("span",{children:"👁️"})," ",c.viewDetails]}),h("button",{onClick:u,style:{background:"linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05))",border:"1px solid rgba(139, 92, 246, 0.3)",color:"#8b5cf6",padding:"0.5rem 1rem",borderRadius:"8px",cursor:"pointer",fontSize:"0.8rem",fontWeight:"500",transition:"all 0.3s ease",backdropFilter:"blur(4px)"},onMouseOver:l=>{l.currentTarget.style.background="linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1))",l.currentTarget.style.borderColor="rgba(139, 92, 246, 0.5)",l.currentTarget.style.color="#a855f7",l.currentTarget.style.transform="translateY(-1px)",l.currentTarget.style.boxShadow="0 4px 8px rgba(139, 92, 246, 0.2)"},onMouseOut:l=>{l.currentTarget.style.background="linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05))",l.currentTarget.style.borderColor="rgba(139, 92, 246, 0.3)",l.currentTarget.style.color="#8b5cf6",l.currentTarget.style.transform="translateY(0)",l.currentTarget.style.boxShadow="none"},children:t?c.showLess:c.showMore})]})})]})]})}function zb(){const[e,t]=Y([]),[n,i]=Y([]),[r,o]=Y(null),[s,a]=Y(!1),[c]=pe();oe(()=>{(async()=>{try{const p=await Wn.fetchCareerData();t(p.jobs),i(p.education)}catch(p){console.error("Error loading career data:",p),t(gu),i(yu)}})()},[]);const u=c==="EN"?{career:"Career",journey:"My journey so far",professional:"Professional Experience",academic:"Academic Background",professionalPeriod:"2016 · Present",academicPeriod:"2012 · Present",loading:"Loading...",linkedIn:"Connect on LinkedIn",linkedInDesc:"View my complete professional profile"}:{career:"Carreira",journey:"Minha jornada até aqui",professional:"Experiência Profissional",academic:"Formação Acadêmica",professionalPeriod:"2016 · Atualmente",academicPeriod:"2012 · Atualmente",loading:"Carregando...",linkedIn:"Conectar no LinkedIn",linkedInDesc:"Veja meu perfil profissional completo"},d=m=>{o(m),a(!0)},l=()=>{a(!1),o(null)},f=()=>{const m=e.map(g=>({...g,type:"professional"})),p=n.map(g=>({...g,type:"academic"}));return[...m,...p]};return e.length===0&&n.length===0?h(Oa,{id:"career",children:h("div",{style:{textAlign:"center",padding:"2rem",color:"#8b5cf6"},children:u.loading})}):h(Z,{children:[h(Oa,{id:"career",children:[h(Eb,{children:["💼 ",u.career]}),h(Rb,{children:u.journey}),h(Lb,{children:[h(ja,{children:[h(Fa,{children:u.professional}),h(Ba,{children:u.professionalPeriod}),h(Na,{children:e.map((m,p)=>h(Wa,{title:m.title,company:m.company,description:m.description,startDate:m.startDate,endDate:m.endDate,languages:m.languages,databases:m.databases,projects:m.projects,learnings:m.learnings,onDetailsClick:()=>d(m)},p))})]}),h(ja,{children:[h(Fa,{children:u.academic}),h(Ba,{children:u.academicPeriod}),h(Na,{children:n.map((m,p)=>h(Wa,{title:m.title,company:m.company,description:m.description,startDate:m.startDate,endDate:m.endDate,languages:m.languages,databases:m.databases,projects:m.projects,learnings:m.learnings,onDetailsClick:()=>d(m)},p))})]})]}),h($b,{experiences:f()}),h(Vb,{children:[h("p",{style:{color:"#8b5cf6",marginBottom:"1rem"},children:u.linkedInDesc}),h(Ib,{href:cn.getProfileUrl(),target:"_blank",rel:"noopener noreferrer",children:[h("span",{children:"💼"})," ",u.linkedIn]})]})]}),r&&h(cb,{isOpen:s,onClose:l,job:r})]})}const Hb=y.div`
  width: 100%;
  min-height: 100vh;
  background: ${e=>e.theme.background};
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Ub=y.header`
  text-align: center;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: 2.5rem;
    color: ${e=>e.theme.white};
    margin-bottom: 1rem;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.75rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: ${e=>e.theme["white-50"]};
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
`;function Yb(){const[e]=pe(),t=e==="EN"?{title:"My Experiences",subtitle:"Discover my professional and academic journey"}:{title:"Minhas Experiências",subtitle:"Conheça minha jornada profissional e acadêmica"};return h(Hb,{children:[h(Ub,{children:[h("h1",{children:t.title}),h("p",{children:t.subtitle})]}),h(zb,{}),h(ui,{})]})}const Gb="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M32.8594%205.60823L3.73437%2013.8114C3.48644%2013.8791%203.26544%2014.0217%203.10146%2014.2196C2.93748%2014.4175%202.8385%2014.6612%202.81801%2014.9174C2.79751%2015.1736%202.85649%2015.4299%202.98692%2015.6514C3.11734%2015.8729%203.31287%2016.0488%203.54687%2016.1551L16.9219%2022.4832C17.1839%2022.6046%2017.3943%2022.815%2017.5156%2023.077L23.8437%2036.452C23.9501%2036.686%2024.126%2036.8815%2024.3474%2037.0119C24.5689%2037.1424%2024.8252%2037.2013%2025.0814%2037.1808C25.3376%2037.1603%2025.5813%2037.0614%2025.7792%2036.8974C25.9771%2036.7334%2026.1197%2036.5124%2026.1875%2036.2645L34.3906%207.13948C34.4528%206.92694%2034.4566%206.7016%2034.4017%206.48707C34.3469%206.27253%2034.2353%206.07671%2034.0787%205.92013C33.9221%205.76355%2033.7263%205.65198%2033.5118%205.5971C33.2973%205.54222%2033.0719%205.54607%2032.8594%205.60823V5.60823Z'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.3281%2022.6709L24.3906%2015.6084'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Kb="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27%2022.999V4.99902H9'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M23%208.99902H5V26.999H23V8.99902Z'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",qb="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%2026.999V4.99902'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7%2013.999L16%204.99902L25%2013.999'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Xb=y.section`
    display: flex;
    margin-top: 30px;
    gap: 50px;
    padding: 30px;
    align-items: center;
    flex-direction: column;
    border: 3px solid ${e=>e.theme["secundary-blue-10"]};
`,Jb=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    background-color: ${e=>e.theme["secundary-blue-10"]};
`,Qb=y.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    width: 100%;
    font-size: 64px;
    color: ${e=>e.theme.white};
`;y.button`
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
`;y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    font-size: 16px;
    font-weight: 700;
    margin-left: 10px;
    color: ${e=>e.theme["secundary-blue-50"]};
    text-align: center;
`;const Zb=y.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    gap: 150px;
`,ev=y.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    gap: 15px;
`,tv=y.input`
    margin-left: 5px;
    font-size: 20px;
    color: ${e=>e.theme["white-50"]};
    font-weight: 400;
    background-color: ${e=>e.theme["background-blue"]};
    border: none; // Remove the border
    user-select: none; // Prevent selection with mouse
`,nv=y.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    gap: 15px;
`,iv=y.div`
    color: ${e=>e.theme["secundary-blue-50"]};
    font-size: 20px;
    font-weight: 400;
    margin-left: 5px;
`;function rv(){const e=he(null),t=()=>{e.current&&(e.current.select(),document.execCommand("copy"))};return h(Xb,{id:"contact",children:[h(Jb,{children:"📬 Contact"}),h(Qb,{children:"Let's work together?"}),h(Zb,{children:h(ev,{children:[h("img",{src:Gb,alt:""}),h(tv,{ref:e,type:"text",value:"wilton.code@gmail.com",readOnly:!0}),h("img",{src:Kb,onClick:t,style:{cursor:"pointer"}})]})}),h("a",{href:"#home",children:h(nv,{children:[h(iv,{children:"Back to top"}),h("img",{src:qb})]})})]})}const ov=y.div`
  width: 100%;
  min-height: 100vh;
  background: ${_.background.secondary};
  padding: ${S.xl} ${S.lg};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${V.tablet}) {
    padding: ${S.lg} ${S.md};
  }

  @media (max-width: ${V.mobile}) {
    padding: ${S.md} ${S.sm};
  }
`,sv=y.header`
  text-align: center;
  margin-bottom: ${S.xl};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: ${$.fontSize["5xl"]};
    background: ${_.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${S.md};

    @media (max-width: ${V.tablet}) {
      font-size: ${$.fontSize["4xl"]};
    }

    @media (max-width: ${V.mobile}) {
      font-size: ${$.fontSize["3xl"]};
    }
  }

  p {
    font-size: ${$.fontSize.lg};
    color: ${_.text.secondary};
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: ${V.mobile}) {
      font-size: ${$.fontSize.base};
    }
  }
`;function av(){const[e]=pe(),t=e==="EN"?{title:"Let's Talk?",subtitle:"I'm always open to new opportunities and interesting projects"}:{title:"Vamos Conversar?",subtitle:"Estou sempre aberto a novas oportunidades e projetos interessantes"};return h(ov,{children:[h(sv,{children:[h("h1",{children:t.title}),h("p",{children:t.subtitle})]}),h(rv,{}),h(ui,{})]})}function cv(){const[e,t]=Y("home"),n=()=>{switch(e){case"home":return h(xa,{});case"projects":return h(N0,{});case"experiences":return h(Yb,{});case"contact":return h(av,{});default:return h(xa,{})}};return h(fh,{children:[h(dh,{}),h(_h,{currentPage:e,setCurrentPage:t}),h("main",{style:{paddingTop:"80px"},children:n()}),h(Ch,{})]})}bt(h(cv,{}),document.getElementById("app"));
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
