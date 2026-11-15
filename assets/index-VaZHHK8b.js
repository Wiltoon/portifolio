(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var gn,A,Ua,st,Do,qa,Zr,Ka,sn={},Xa=[],Eu=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,cr=Array.isArray;function Be(e,t){for(var n in t)e[n]=t[n];return e}function Qa(e){var t=e.parentNode;t&&t.removeChild(e)}function Te(e,t,n){var r,i,o,s={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:s[o]=t[o];if(arguments.length>2&&(s.children=arguments.length>3?gn.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)s[o]===void 0&&(s[o]=e.defaultProps[o]);return Qt(e,s,r,i,null)}function Qt(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i??++Ua,__i:-1,__u:0};return i==null&&A.vnode!=null&&A.vnode(o),o}function Du(){return{current:null}}function ge(e){return e.children}function $e(e,t){this.props=e,this.context=t}function $t(e,t){if(t==null)return e.__?$t(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?$t(e):null}function Ja(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ja(e)}}function ei(e){(!e.__d&&(e.__d=!0)&&st.push(e)&&!Xn.__r++||Do!==A.debounceRendering)&&((Do=A.debounceRendering)||qa)(Xn)}function Xn(){var e,t,n,r,i,o,s,a,c;for(st.sort(Zr);e=st.shift();)e.__d&&(t=st.length,r=void 0,o=(i=(n=e).__v).__e,a=[],c=[],(s=n.__P)&&((r=Be({},i)).__v=i.__v+1,A.vnode&&A.vnode(r),Oi(s,r,i,n.__n,s.ownerSVGElement!==void 0,32&i.__u?[o]:null,a,o??$t(i),!!(32&i.__u),c),r.__.__k[r.__i]=r,tc(a,r,c),r.__e!=o&&Ja(r)),st.length>t&&st.sort(Zr));Xn.__r=0}function Za(e,t,n,r,i,o,s,a,c,l,u){var d,h,m,b,v,x=r&&r.__k||Xa,y=t.length;for(n.__d=c,Mu(n,t,x),c=n.__d,d=0;d<y;d++)(m=n.__k[d])!=null&&typeof m!="boolean"&&typeof m!="function"&&(h=m.__i===-1?sn:x[m.__i]||sn,m.__i=d,Oi(e,m,h,i,o,s,a,c,l,u),b=m.__e,m.ref&&h.ref!=m.ref&&(h.ref&&Fi(h.ref,null,m),u.push(m.ref,m.__c||b,m)),v==null&&b!=null&&(v=b),65536&m.__u||h.__k===m.__k?c=ec(m,c,e):typeof m.type=="function"&&m.__d!==void 0?c=m.__d:b&&(c=b.nextSibling),m.__d=void 0,m.__u&=-196609);n.__d=c,n.__e=v}function Mu(e,t,n){var r,i,o,s,a,c=t.length,l=n.length,u=l,d=0;for(e.__k=[],r=0;r<c;r++)(i=e.__k[r]=(i=t[r])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?Qt(null,i,null,null,i):cr(i)?Qt(ge,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?Qt(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null?(i.__=e,i.__b=e.__b+1,a=Ru(i,n,s=r+d,u),i.__i=a,o=null,a!==-1&&(u--,(o=n[a])&&(o.__u|=131072)),o==null||o.__v===null?(a==-1&&d--,typeof i.type!="function"&&(i.__u|=65536)):a!==s&&(a===s+1?d++:a>s?u>c-s?d+=a-s:d--:d=a<s&&a==s-1?a-s:0,a!==r+d&&(i.__u|=65536))):(o=n[r])&&o.key==null&&o.__e&&(o.__e==e.__d&&(e.__d=$t(o)),ti(o,o,!1),n[r]=null,u--);if(u)for(r=0;r<l;r++)(o=n[r])!=null&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=$t(o)),ti(o,o))}function ec(e,t,n){var r,i;if(typeof e.type=="function"){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=ec(r[i],t,n));return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function Fe(e,t){return t=t||[],e==null||typeof e=="boolean"||(cr(e)?e.some(function(n){Fe(n,t)}):t.push(e)),t}function Ru(e,t,n,r){var i=e.key,o=e.type,s=n-1,a=n+1,c=t[n];if(c===null||c&&i==c.key&&o===c.type)return n;if(r>(c!=null&&!(131072&c.__u)?1:0))for(;s>=0||a<t.length;){if(s>=0){if((c=t[s])&&!(131072&c.__u)&&i==c.key&&o===c.type)return s;s--}if(a<t.length){if((c=t[a])&&!(131072&c.__u)&&i==c.key&&o===c.type)return a;a++}}return-1}function Mo(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Eu.test(t)?n:n+"px"}function Pn(e,t,n,r,i){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||Mo(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||Mo(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,o?Lo:Ro,o)):e.removeEventListener(t,o?Lo:Ro,o);else{if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t!=="role"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function Ro(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(A.event?A.event(e):e)}function Lo(e){return this.l[e.type+!0](A.event?A.event(e):e)}function Oi(e,t,n,r,i,o,s,a,c,l){var u,d,h,m,b,v,x,y,w,_,P,k,C,T,M,V=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),o=[a=t.__e=n.__e]),(u=A.__b)&&u(t);e:if(typeof V=="function")try{if(y=t.props,w=(u=V.contextType)&&r[u.__c],_=u?w?w.props.value:u.__:r,n.__c?x=(d=t.__c=n.__c).__=d.__E:("prototype"in V&&V.prototype.render?t.__c=d=new V(y,_):(t.__c=d=new $e(y,_),d.constructor=V,d.render=Vu),w&&w.sub(d),d.props=y,d.state||(d.state={}),d.context=_,d.__n=r,h=d.__d=!0,d.__h=[],d._sb=[]),d.__s==null&&(d.__s=d.state),V.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=Be({},d.__s)),Be(d.__s,V.getDerivedStateFromProps(y,d.__s))),m=d.props,b=d.state,d.__v=t,h)V.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(V.getDerivedStateFromProps==null&&y!==m&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(y,_),!d.__e&&(d.shouldComponentUpdate!=null&&d.shouldComponentUpdate(y,d.__s,_)===!1||t.__v===n.__v)){for(t.__v!==n.__v&&(d.props=y,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(j){j&&(j.__=t)}),P=0;P<d._sb.length;P++)d.__h.push(d._sb[P]);d._sb=[],d.__h.length&&s.push(d);break e}d.componentWillUpdate!=null&&d.componentWillUpdate(y,d.__s,_),d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(m,b,v)})}if(d.context=_,d.props=y,d.__P=e,d.__e=!1,k=A.__r,C=0,"prototype"in V&&V.prototype.render){for(d.state=d.__s,d.__d=!1,k&&k(t),u=d.render(d.props,d.state,d.context),T=0;T<d._sb.length;T++)d.__h.push(d._sb[T]);d._sb=[]}else do d.__d=!1,k&&k(t),u=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++C<25);d.state=d.__s,d.getChildContext!=null&&(r=Be(Be({},r),d.getChildContext())),h||d.getSnapshotBeforeUpdate==null||(v=d.getSnapshotBeforeUpdate(m,b)),Za(e,cr(M=u!=null&&u.type===ge&&u.key==null?u.props.children:u)?M:[M],t,n,r,i,o,s,a,c,l),d.base=t.__e,t.__u&=-161,d.__h.length&&s.push(d),x&&(d.__E=d.__=null)}catch(j){t.__v=null,c||o!=null?(t.__e=a,t.__u|=c?160:32,o[o.indexOf(a)]=null):(t.__e=n.__e,t.__k=n.__k),A.__e(j,t,n)}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Lu(n.__e,t,n,r,i,o,s,c,l);(u=A.diffed)&&u(t)}function tc(e,t,n){t.__d=void 0;for(var r=0;r<n.length;r++)Fi(n[r],n[++r],n[++r]);A.__c&&A.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(o){o.call(i)})}catch(o){A.__e(o,i.__v)}})}function Lu(e,t,n,r,i,o,s,a,c){var l,u,d,h,m,b,v,x=n.props,y=t.props,w=t.type;if(w==="svg"&&(i=!0),o!=null){for(l=0;l<o.length;l++)if((m=o[l])&&"setAttribute"in m==!!w&&(w?m.localName===w:m.nodeType===3)){e=m,o[l]=null;break}}if(e==null){if(w===null)return document.createTextNode(y);e=i?document.createElementNS("http://www.w3.org/2000/svg",w):document.createElement(w,y.is&&y),o=null,a=!1}if(w===null)x===y||a&&e.data===y||(e.data=y);else{if(o=o&&gn.call(e.childNodes),x=n.props||sn,!a&&o!=null)for(x={},l=0;l<e.attributes.length;l++)x[(m=e.attributes[l]).name]=m.value;for(l in x)m=x[l],l=="children"||(l=="dangerouslySetInnerHTML"?d=m:l==="key"||l in y||Pn(e,l,null,m,i));for(l in y)m=y[l],l=="children"?h=m:l=="dangerouslySetInnerHTML"?u=m:l=="value"?b=m:l=="checked"?v=m:l==="key"||a&&typeof m!="function"||x[l]===m||Pn(e,l,m,x[l],i);if(u)a||d&&(u.__html===d.__html||u.__html===e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(d&&(e.innerHTML=""),Za(e,cr(h)?h:[h],t,n,r,i&&w!=="foreignObject",o,s,o?o[0]:n.__k&&$t(n,0),a,c),o!=null)for(l=o.length;l--;)o[l]!=null&&Qa(o[l]);a||(l="value",b!==void 0&&(b!==e[l]||w==="progress"&&!b||w==="option"&&b!==x[l])&&Pn(e,l,b,x[l],!1),l="checked",v!==void 0&&v!==e[l]&&Pn(e,l,v,x[l],!1))}return e}function Fi(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){A.__e(r,n)}}function ti(e,t,n){var r,i;if(A.unmount&&A.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||Fi(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){A.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&ti(r[i],t,n||typeof e.type!="function");n||e.__e==null||Qa(e.__e),e.__=e.__e=e.__d=void 0}function Vu(e,t,n){return this.constructor(e,n)}function kt(e,t,n){var r,i,o,s;A.__&&A.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],s=[],Oi(t,e=(!r&&n||t).__k=Te(ge,null,[e]),i||sn,sn,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?gn.call(t.childNodes):null,o,!r&&n?n:i?i.__e:t.firstChild,r,s),tc(o,e,s)}function nc(e,t){kt(e,t,nc)}function Iu(e,t,n){var r,i,o,s,a=Be({},e.props);for(o in e.type&&e.type.defaultProps&&(s=e.type.defaultProps),t)o=="key"?r=t[o]:o=="ref"?i=t[o]:a[o]=t[o]===void 0&&s!==void 0?s[o]:t[o];return arguments.length>2&&(a.children=arguments.length>3?gn.call(arguments,2):n),Qt(e.type,a,r||e.key,i||e.ref,null)}function Ze(e,t){var n={__c:t="__cC"+Ka++,__:e,Consumer:function(r,i){return r.children(i)},Provider:function(r){var i,o;return this.getChildContext||(i=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&i.some(function(a){a.__e=!0,ei(a)})},this.sub=function(s){i.push(s);var a=s.componentWillUnmount;s.componentWillUnmount=function(){i.splice(i.indexOf(s),1),a&&a.call(s)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}gn=Xa.slice,A={__e:function(e,t,n,r){for(var i,o,s;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),s=i.__d),s)return i.__E=i}catch(a){e=a}throw e}},Ua=0,$e.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Be({},this.state),typeof e=="function"&&(e=e(Be({},n),this.props)),e&&Be(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ei(this))},$e.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ei(this))},$e.prototype.render=ge,st=[],qa=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Zr=function(e,t){return e.__v.__b-t.__v.__b},Xn.__r=0,Ka=0;var Xe,Y,kr,Vo,Pt=0,rc=[],Vn=[],Io=A.__b,Bo=A.__r,Oo=A.diffed,Fo=A.__c,No=A.unmount;function Vt(e,t){A.__h&&A.__h(Y,e,Pt||t),Pt=0;var n=Y.__H||(Y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:Vn}),n.__[e]}function F(e){return Pt=1,ic(sc,e)}function ic(e,t,n){var r=Vt(Xe++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):sc(void 0,t),function(a){var c=r.__N?r.__N[0]:r.__[0],l=r.t(c,a);c!==l&&(r.__N=[l,r.__[1]],r.__c.setState({}))}],r.__c=Y,!Y.u)){var i=function(a,c,l){if(!r.__c.__H)return!0;var u=r.__c.__H.__.filter(function(h){return h.__c});if(u.every(function(h){return!h.__N}))return!o||o.call(this,a,c,l);var d=!1;return u.forEach(function(h){if(h.__N){var m=h.__[0];h.__=h.__N,h.__N=void 0,m!==h.__[0]&&(d=!0)}}),!(!d&&r.__c.props===a)&&(!o||o.call(this,a,c,l))};Y.u=!0;var o=Y.shouldComponentUpdate,s=Y.componentWillUpdate;Y.componentWillUpdate=function(a,c,l){if(this.__e){var u=o;o=void 0,i(a,c,l),o=u}s&&s.call(this,a,c,l)},Y.shouldComponentUpdate=i}return r.__N||r.__}function X(e,t){var n=Vt(Xe++,3);!A.__s&&ji(n.__H,t)&&(n.__=e,n.i=t,Y.__H.__h.push(n))}function It(e,t){var n=Vt(Xe++,4);!A.__s&&ji(n.__H,t)&&(n.__=e,n.i=t,Y.__h.push(n))}function he(e){return Pt=5,Re(function(){return{current:e}},[])}function Bu(e,t,n){Pt=6,It(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function Re(e,t){var n=Vt(Xe++,7);return ji(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function Ni(e,t){return Pt=8,Re(function(){return e},t)}function se(e){var t=Y.context[e.__c],n=Vt(Xe++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(Y)),t.props.value):e.__}function Ou(e,t){A.useDebugValue&&A.useDebugValue(t?t(e):e)}function oc(){var e=Vt(Xe++,11);if(!e.__){for(var t=Y.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function Fu(){for(var e;e=rc.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(In),e.__H.__h.forEach(ni),e.__H.__h=[]}catch(t){e.__H.__h=[],A.__e(t,e.__v)}}A.__b=function(e){Y=null,Io&&Io(e)},A.__r=function(e){Bo&&Bo(e),Xe=0;var t=(Y=e.__c).__H;t&&(kr===Y?(t.__h=[],Y.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=Vn,n.__N=n.i=void 0})):(t.__h.forEach(In),t.__h.forEach(ni),t.__h=[],Xe=0)),kr=Y},A.diffed=function(e){Oo&&Oo(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(rc.push(t)!==1&&Vo===A.requestAnimationFrame||((Vo=A.requestAnimationFrame)||Nu)(Fu)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==Vn&&(n.__=n.__V),n.i=void 0,n.__V=Vn})),kr=Y=null},A.__c=function(e,t){t.some(function(n){try{n.__h.forEach(In),n.__h=n.__h.filter(function(r){return!r.__||ni(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],A.__e(r,n.__v)}}),Fo&&Fo(e,t)},A.unmount=function(e){No&&No(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{In(r)}catch(i){t=i}}),n.__H=void 0,t&&A.__e(t,n.__v))};var jo=typeof requestAnimationFrame=="function";function Nu(e){var t,n=function(){clearTimeout(r),jo&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);jo&&(t=requestAnimationFrame(n))}function In(e){var t=Y,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),Y=t}function ni(e){var t=Y;e.__c=e.__(),Y=t}function ji(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function sc(e,t){return typeof t=="function"?t(e):t}var ce=function(){return ce=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},ce.apply(this,arguments)};function Tt(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}function ac(e,t){for(var n in t)e[n]=t[n];return e}function ri(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function ii(e){this.props=e}function ju(e,t){function n(i){var o=this.props.ref,s=o==i.ref;return!s&&o&&(o.call?o(null):o.current=null),t?!t(this.props,i)||!s:ri(this.props,i)}function r(i){return this.shouldComponentUpdate=n,Te(e,i)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(ii.prototype=new $e).isPureReactComponent=!0,ii.prototype.shouldComponentUpdate=function(e,t){return ri(this.props,e)||ri(this.state,t)};var Wo=A.__b;A.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Wo&&Wo(e)};var Wu=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function cc(e){function t(n){var r=ac({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=Wu,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var zo=function(e,t){return e==null?null:Fe(Fe(e).map(t))},zu={map:zo,forEach:zo,count:function(e){return e?Fe(e).length:0},only:function(e){var t=Fe(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:Fe},Hu=A.__e;A.__e=function(e,t,n,r){if(e.then){for(var i,o=t;o=o.__;)if((i=o.__c)&&i.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}Hu(e,t,n,r)};var Ho=A.unmount;function lc(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=ac({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return lc(r,t,n)})),e}function uc(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return uc(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function Bn(){this.__u=0,this.t=null,this.__b=null}function dc(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Gu(e){var t,n,r;function i(o){if(t||(t=e()).then(function(s){n=s.default||s},function(s){r=s}),r)throw r;if(!n)throw t;return Te(n,o)}return i.displayName="Lazy",i.__f=!0,i}function qt(){this.u=null,this.o=null}A.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Ho&&Ho(e)},(Bn.prototype=new $e).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var i=dc(r.__v),o=!1,s=function(){o||(o=!0,n.__R=null,i?i(a):a())};n.__R=s;var a=function(){if(!--r.__u){if(r.state.__a){var c=r.state.__a;r.__v.__k[0]=uc(c,c.__c.__P,c.__c.__O)}var l;for(r.setState({__a:r.__b=null});l=r.t.pop();)l.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(s,s)},Bn.prototype.componentWillUnmount=function(){this.t=[]},Bn.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=lc(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__a&&Te(ge,null,e.fallback);return i&&(i.__u&=-33),[Te(ge,null,t.__a?null:e.children),i]};var Go=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function Yu(e){return this.getChildContext=function(){return e.context},e.children}function Uu(e){var t=this,n=e.i;t.componentWillUnmount=function(){kt(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,i){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),kt(Te(Yu,{context:t.context},e.__v),t.l)}function qu(e,t){var n=Te(Uu,{__v:e,i:t});return n.containerInfo=t,n}(qt.prototype=new $e).__a=function(e){var t=this,n=dc(t.__v),r=t.o.get(e);return r[0]++,function(i){var o=function(){t.props.revealOrder?(r.push(i),Go(t,e,r)):i()};n?n(o):o()}},qt.prototype.render=function(e){this.u=null,this.o=new Map;var t=Fe(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},qt.prototype.componentDidUpdate=qt.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){Go(e,n,t)})};var hc=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Ku=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Xu=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Qu=/[A-Z0-9]/g,Ju=typeof document<"u",Zu=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};function ed(e,t,n){return t.__k==null&&(t.textContent=""),kt(e,t),typeof n=="function"&&n(),e?e.__c:null}function td(e,t,n){return nc(e,t),typeof n=="function"&&n(),e?e.__c:null}$e.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty($e.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var Yo=A.event;function nd(){}function rd(){return this.cancelBubble}function id(){return this.defaultPrevented}A.event=function(e){return Yo&&(e=Yo(e)),e.persist=nd,e.isPropagationStopped=rd,e.isDefaultPrevented=id,e.nativeEvent=e};var Wi,od={enumerable:!1,configurable:!0,get:function(){return this.class}},Uo=A.vnode;A.vnode=function(e){typeof e.type=="string"&&function(t){var n=t.props,r=t.type,i={};for(var o in n){var s=n[o];if(!(o==="value"&&"defaultValue"in n&&s==null||Ju&&o==="children"&&r==="noscript"||o==="class"||o==="className")){var a=o.toLowerCase();o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&s===!0?s="":a==="ondoubleclick"?o="ondblclick":a!=="onchange"||r!=="input"&&r!=="textarea"||Zu(n.type)?a==="onfocus"?o="onfocusin":a==="onblur"?o="onfocusout":Xu.test(o)?o=a:r.indexOf("-")===-1&&Ku.test(o)?o=o.replace(Qu,"-$&").toLowerCase():s===null&&(s=void 0):a=o="oninput",a==="oninput"&&i[o=a]&&(o="oninputCapture"),i[o]=s}}r=="select"&&i.multiple&&Array.isArray(i.value)&&(i.value=Fe(n.children).forEach(function(c){c.props.selected=i.value.indexOf(c.props.value)!=-1})),r=="select"&&i.defaultValue!=null&&(i.value=Fe(n.children).forEach(function(c){c.props.selected=i.multiple?i.defaultValue.indexOf(c.props.value)!=-1:i.defaultValue==c.props.value})),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",od)):(n.className&&!n.class||n.class&&n.className)&&(i.class=i.className=n.className),t.props=i}(e),e.$$typeof=hc,Uo&&Uo(e)};var qo=A.__r;A.__r=function(e){qo&&qo(e),Wi=e.__c};var Ko=A.diffed;A.diffed=function(e){Ko&&Ko(e);var t=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in t&&t.value!==n.value&&(n.value=t.value==null?"":t.value),Wi=null};var sd={ReactCurrentDispatcher:{current:{readContext:function(e){return Wi.__n[e.__c].props.value}}}};function ad(e){return Te.bind(null,e)}function lr(e){return!!e&&e.$$typeof===hc}function cd(e){return lr(e)&&e.type===ge}function ld(e){return lr(e)?Iu.apply(null,arguments):e}function ud(e){return!!e.__k&&(kt(null,e),!0)}function dd(e){return e&&(e.base||e.nodeType===1&&e)||null}var hd=function(e,t){return e(t)},fd=function(e,t){return e(t)},md=ge;function fc(e){e()}function pd(e){return e}function gd(){return[!1,fc]}var mc=It,yd=lr;function bd(e,t){var n=t(),r=F({h:{__:n,v:t}}),i=r[0].h,o=r[1];return It(function(){i.__=n,i.v=t,Pr(i)&&o({h:i})},[e,n,t]),X(function(){return Pr(i)&&o({h:i}),e(function(){Pr(i)&&o({h:i})})},[e]),n}function Pr(e){var t,n,r=e.v,i=e.__;try{var o=r();return!((t=i)===(n=o)&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}}var Oe={useState:F,useId:oc,useReducer:ic,useEffect:X,useLayoutEffect:It,useInsertionEffect:mc,useTransition:gd,useDeferredValue:pd,useSyncExternalStore:bd,startTransition:fc,useRef:he,useImperativeHandle:Bu,useMemo:Re,useCallback:Ni,useContext:se,useDebugValue:Ou,version:"17.0.2",Children:zu,render:ed,hydrate:td,unmountComponentAtNode:ud,createPortal:qu,createElement:Te,createContext:Ze,createFactory:ad,cloneElement:ld,createRef:Du,Fragment:ge,isValidElement:lr,isElement:yd,isFragment:cd,findDOMNode:dd,Component:$e,PureComponent:ii,memo:ju,forwardRef:cc,flushSync:fd,unstable_batchedUpdates:hd,StrictMode:md,Suspense:Bn,SuspenseList:qt,lazy:Gu,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:sd},G="-ms-",Jt="-moz-",O="-webkit-",pc="comm",ur="rule",zi="decl",vd="@import",gc="@keyframes",xd="@layer",wd=Math.abs,Hi=String.fromCharCode,oi=Object.assign;function _d(e,t){return re(e,0)^45?(((t<<2^re(e,0))<<2^re(e,1))<<2^re(e,2))<<2^re(e,3):0}function yc(e){return e.trim()}function Ie(e,t){return(e=t.exec(e))?e[0]:e}function L(e,t,n){return e.replace(t,n)}function On(e,t){return e.indexOf(t)}function re(e,t){return e.charCodeAt(t)|0}function Ct(e,t,n){return e.slice(t,n)}function Ce(e){return e.length}function bc(e){return e.length}function Kt(e,t){return t.push(e),e}function Sd(e,t){return e.map(t).join("")}function Xo(e,t){return e.filter(function(n){return!Ie(n,t)})}var dr=1,At=1,vc=0,we=0,te=0,Bt="";function hr(e,t,n,r,i,o,s,a){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:dr,column:At,length:s,return:"",siblings:a}}function Ue(e,t){return oi(hr("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function pt(e){for(;e.root;)e=Ue(e.root,{children:[e]});Kt(e,e.siblings)}function $d(){return te}function kd(){return te=we>0?re(Bt,--we):0,At--,te===10&&(At=1,dr--),te}function ke(){return te=we<vc?re(Bt,we++):0,At++,te===10&&(At=1,dr++),te}function ut(){return re(Bt,we)}function Fn(){return we}function fr(e,t){return Ct(Bt,e,t)}function si(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Pd(e){return dr=At=1,vc=Ce(Bt=e),we=0,[]}function Td(e){return Bt="",e}function Tr(e){return yc(fr(we-1,ai(e===91?e+2:e===40?e+1:e)))}function Cd(e){for(;(te=ut())&&te<33;)ke();return si(e)>2||si(te)>3?"":" "}function Ad(e,t){for(;--t&&ke()&&!(te<48||te>102||te>57&&te<65||te>70&&te<97););return fr(e,Fn()+(t<6&&ut()==32&&ke()==32))}function ai(e){for(;ke();)switch(te){case e:return we;case 34:case 39:e!==34&&e!==39&&ai(te);break;case 40:e===41&&ai(e);break;case 92:ke();break}return we}function Ed(e,t){for(;ke()&&e+te!==57;)if(e+te===84&&ut()===47)break;return"/*"+fr(t,we-1)+"*"+Hi(e===47?e:ke())}function Dd(e){for(;!si(ut());)ke();return fr(e,we)}function Md(e){return Td(Nn("",null,null,null,[""],e=Pd(e),0,[0],e))}function Nn(e,t,n,r,i,o,s,a,c){for(var l=0,u=0,d=s,h=0,m=0,b=0,v=1,x=1,y=1,w=0,_="",P=i,k=o,C=r,T=_;x;)switch(b=w,w=ke()){case 40:if(b!=108&&re(T,d-1)==58){On(T+=L(Tr(w),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:T+=Tr(w);break;case 9:case 10:case 13:case 32:T+=Cd(b);break;case 92:T+=Ad(Fn()-1,7);continue;case 47:switch(ut()){case 42:case 47:Kt(Rd(Ed(ke(),Fn()),t,n,c),c);break;default:T+="/"}break;case 123*v:a[l++]=Ce(T)*y;case 125*v:case 59:case 0:switch(w){case 0:case 125:x=0;case 59+u:y==-1&&(T=L(T,/\f/g,"")),m>0&&Ce(T)-d&&Kt(m>32?Jo(T+";",r,n,d-1,c):Jo(L(T," ","")+";",r,n,d-2,c),c);break;case 59:T+=";";default:if(Kt(C=Qo(T,t,n,l,u,i,a,_,P=[],k=[],d,o),o),w===123)if(u===0)Nn(T,t,C,C,P,o,d,a,k);else switch(h===99&&re(T,3)===110?100:h){case 100:case 108:case 109:case 115:Nn(e,C,C,r&&Kt(Qo(e,C,C,0,0,i,a,_,i,P=[],d,k),k),i,k,d,a,r?P:k);break;default:Nn(T,C,C,C,[""],k,0,a,k)}}l=u=m=0,v=y=1,_=T="",d=s;break;case 58:d=1+Ce(T),m=b;default:if(v<1){if(w==123)--v;else if(w==125&&v++==0&&kd()==125)continue}switch(T+=Hi(w),w*v){case 38:y=u>0?1:(T+="\f",-1);break;case 44:a[l++]=(Ce(T)-1)*y,y=1;break;case 64:ut()===45&&(T+=Tr(ke())),h=ut(),u=d=Ce(_=T+=Dd(Fn())),w++;break;case 45:b===45&&Ce(T)==2&&(v=0)}}return o}function Qo(e,t,n,r,i,o,s,a,c,l,u,d){for(var h=i-1,m=i===0?o:[""],b=bc(m),v=0,x=0,y=0;v<r;++v)for(var w=0,_=Ct(e,h+1,h=wd(x=s[v])),P=e;w<b;++w)(P=yc(x>0?m[w]+" "+_:L(_,/&\f/g,m[w])))&&(c[y++]=P);return hr(e,t,n,i===0?ur:a,c,l,u,d)}function Rd(e,t,n,r){return hr(e,t,n,pc,Hi($d()),Ct(e,2,-2),0,r)}function Jo(e,t,n,r,i){return hr(e,t,n,zi,Ct(e,0,r),Ct(e,r+1,-1),r,i)}function xc(e,t,n){switch(_d(e,t)){case 5103:return O+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return O+e+e;case 4789:return Jt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return O+e+Jt+e+G+e+e;case 5936:switch(re(e,t+11)){case 114:return O+e+G+L(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return O+e+G+L(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return O+e+G+L(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return O+e+G+e+e;case 6165:return O+e+G+"flex-"+e+e;case 5187:return O+e+L(e,/(\w+).+(:[^]+)/,O+"box-$1$2"+G+"flex-$1$2")+e;case 5443:return O+e+G+"flex-item-"+L(e,/flex-|-self/g,"")+(Ie(e,/flex-|baseline/)?"":G+"grid-row-"+L(e,/flex-|-self/g,""))+e;case 4675:return O+e+G+"flex-line-pack"+L(e,/align-content|flex-|-self/g,"")+e;case 5548:return O+e+G+L(e,"shrink","negative")+e;case 5292:return O+e+G+L(e,"basis","preferred-size")+e;case 6060:return O+"box-"+L(e,"-grow","")+O+e+G+L(e,"grow","positive")+e;case 4554:return O+L(e,/([^-])(transform)/g,"$1"+O+"$2")+e;case 6187:return L(L(L(e,/(zoom-|grab)/,O+"$1"),/(image-set)/,O+"$1"),e,"")+e;case 5495:case 3959:return L(e,/(image-set\([^]*)/,O+"$1$`$1");case 4968:return L(L(e,/(.+:)(flex-)?(.*)/,O+"box-pack:$3"+G+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+O+e+e;case 4200:if(!Ie(e,/flex-|baseline/))return G+"grid-column-align"+Ct(e,t)+e;break;case 2592:case 3360:return G+L(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,Ie(r.props,/grid-\w+-end/)})?~On(e+(n=n[t].value),"span")?e:G+L(e,"-start","")+e+G+"grid-row-span:"+(~On(n,"span")?Ie(n,/\d+/):+Ie(n,/\d+/)-+Ie(e,/\d+/))+";":G+L(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Ie(r.props,/grid-\w+-start/)})?e:G+L(L(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return L(e,/(.+)-inline(.+)/,O+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ce(e)-1-t>6)switch(re(e,t+1)){case 109:if(re(e,t+4)!==45)break;case 102:return L(e,/(.+:)(.+)-([^]+)/,"$1"+O+"$2-$3$1"+Jt+(re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~On(e,"stretch")?xc(L(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return L(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,a,c,l){return G+i+":"+o+l+(s?G+i+"-span:"+(a?c:+c-+o)+l:"")+e});case 4949:if(re(e,t+6)===121)return L(e,":",":"+O)+e;break;case 6444:switch(re(e,re(e,14)===45?18:11)){case 120:return L(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+O+(re(e,14)===45?"inline-":"")+"box$3$1"+O+"$2$3$1"+G+"$2box$3")+e;case 100:return L(e,":",":"+G)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return L(e,"scroll-","scroll-snap-")+e}return e}function Qn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ld(e,t,n,r){switch(e.type){case xd:if(e.children.length)break;case vd:case zi:return e.return=e.return||e.value;case pc:return"";case gc:return e.return=e.value+"{"+Qn(e.children,r)+"}";case ur:if(!Ce(e.value=e.props.join(",")))return""}return Ce(n=Qn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Vd(e){var t=bc(e);return function(n,r,i,o){for(var s="",a=0;a<t;a++)s+=e[a](n,r,i,o)||"";return s}}function Id(e){return function(t){t.root||(t=t.return)&&e(t)}}function Bd(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case zi:e.return=xc(e.value,e.length,n);return;case gc:return Qn([Ue(e,{value:L(e.value,"@","@"+O)})],r);case ur:if(e.length)return Sd(n=e.props,function(i){switch(Ie(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":pt(Ue(e,{props:[L(i,/:(read-\w+)/,":"+Jt+"$1")]})),pt(Ue(e,{props:[i]})),oi(e,{props:Xo(n,r)});break;case"::placeholder":pt(Ue(e,{props:[L(i,/:(plac\w+)/,":"+O+"input-$1")]})),pt(Ue(e,{props:[L(i,/:(plac\w+)/,":"+Jt+"$1")]})),pt(Ue(e,{props:[L(i,/:(plac\w+)/,G+"input-$1")]})),pt(Ue(e,{props:[i]})),oi(e,{props:Xo(n,r)});break}return""})}}var Od={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},pe={},Et=typeof process<"u"&&pe!==void 0&&(pe.REACT_APP_SC_ATTR||pe.SC_ATTR)||"data-styled",Gi=typeof window<"u"&&"HTMLElement"in window,Fd=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&pe!==void 0&&pe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&pe.REACT_APP_SC_DISABLE_SPEEDY!==""?pe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&pe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&pe!==void 0&&pe.SC_DISABLE_SPEEDY!==void 0&&pe.SC_DISABLE_SPEEDY!==""&&pe.SC_DISABLE_SPEEDY!=="false"&&pe.SC_DISABLE_SPEEDY),Nd={},mr=Object.freeze([]),Dt=Object.freeze({});function wc(e,t,n){return n===void 0&&(n=Dt),e.theme!==n.theme&&e.theme||t||n.theme}var _c=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),jd=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Wd=/(^-|-$)/g;function Zo(e){return e.replace(jd,"-").replace(Wd,"")}var zd=/(a)(d)/gi,es=function(e){return String.fromCharCode(e+(e>25?39:97))};function ci(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=es(t%52)+n;return(es(t%52)+n).replace(zd,"$1-$2")}var Cr,yt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Sc=function(e){return yt(5381,e)};function Yi(e){return ci(Sc(e)>>>0)}function Hd(e){return e.displayName||e.name||"Component"}function Ar(e){return typeof e=="string"&&!0}var $c=typeof Symbol=="function"&&Symbol.for,kc=$c?Symbol.for("react.memo"):60115,Gd=$c?Symbol.for("react.forward_ref"):60112,Yd={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Ud={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Pc={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qd=((Cr={})[Gd]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Cr[kc]=Pc,Cr);function ts(e){return("type"in(t=e)&&t.type.$$typeof)===kc?Pc:"$$typeof"in e?qd[e.$$typeof]:Yd;var t}var Kd=Object.defineProperty,Xd=Object.getOwnPropertyNames,ns=Object.getOwnPropertySymbols,Qd=Object.getOwnPropertyDescriptor,Jd=Object.getPrototypeOf,rs=Object.prototype;function Tc(e,t,n){if(typeof t!="string"){if(rs){var r=Jd(t);r&&r!==rs&&Tc(e,r,n)}var i=Xd(t);ns&&(i=i.concat(ns(t)));for(var o=ts(e),s=ts(t),a=0;a<i.length;++a){var c=i[a];if(!(c in Ud||n&&n[c]||s&&c in s||o&&c in o)){var l=Qd(t,c);try{Kd(e,c,l)}catch{}}}}return e}function Mt(e){return typeof e=="function"}function Ui(e){return typeof e=="object"&&"styledComponentId"in e}function at(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Jn(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function an(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function li(e,t,n){if(n===void 0&&(n=!1),!n&&!an(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=li(e[r],t[r]);else if(an(t))for(var r in t)e[r]=li(e[r],t[r]);return e}function qi(e,t){Object.defineProperty(e,"toString",{value:t})}function yn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Zd=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw yn(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(t+1),c=(s=0,n.length);s<c;s++)this.tag.insertRule(a,n[s])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(`/*!sc*/
`);return n},e}(),jn=new Map,Zn=new Map,Wn=1,Tn=function(e){if(jn.has(e))return jn.get(e);for(;Zn.has(Wn);)Wn++;var t=Wn++;return jn.set(e,t),Zn.set(t,e),t},eh=function(e,t){Wn=t+1,jn.set(e,t),Zn.set(t,e)},th="style[".concat(Et,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),nh=new RegExp("^".concat(Et,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),rh=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},ih=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],o=0,s=r.length;o<s;o++){var a=r[o].trim();if(a){var c=a.match(nh);if(c){var l=0|parseInt(c[1],10),u=c[2];l!==0&&(eh(u,l),rh(e,u,c[3]),e.getTag().insertRules(l,i)),i.length=0}else i.push(a)}}};function oh(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Cc=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){var c=Array.from(a.querySelectorAll("style[".concat(Et,"]")));return c[c.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Et,"active"),r.setAttribute("data-styled-version","6.1.1");var s=oh();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},sh=function(){function e(t){this.element=Cc(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw yn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),ah=function(){function e(t){this.element=Cc(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),ch=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),is=Gi,lh={isServer:!Gi,useCSSOMInjection:!Fd},er=function(){function e(t,n,r){t===void 0&&(t=Dt),n===void 0&&(n={});var i=this;this.options=ce(ce({},lh),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Gi&&is&&(is=!1,function(o){for(var s=document.querySelectorAll(th),a=0,c=s.length;a<c;a++){var l=s[a];l&&l.getAttribute(Et)!=="active"&&(ih(o,l),l.parentNode&&l.parentNode.removeChild(l))}}(this)),qi(this,function(){return function(o){for(var s=o.getTag(),a=s.length,c="",l=function(d){var h=function(y){return Zn.get(y)}(d);if(h===void 0)return"continue";var m=o.names.get(h),b=s.getGroup(d);if(m===void 0||b.length===0)return"continue";var v="".concat(Et,".g").concat(d,'[id="').concat(h,'"]'),x="";m!==void 0&&m.forEach(function(y){y.length>0&&(x+="".concat(y,","))}),c+="".concat(b).concat(v,'{content:"').concat(x,'"}').concat(`/*!sc*/
`)},u=0;u<a;u++)l(u);return c}(i)})}return e.registerId=function(t){return Tn(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ce(ce({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new ch(i):r?new sh(i):new ah(i)}(this.options),new Zd(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Tn(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Tn(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Tn(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),uh=/&/g,dh=/^\s*\/\/.*$/gm;function Ac(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ac(n.children,t)),n})}function hh(e){var t,n,r,i=e===void 0?Dt:e,o=i.options,s=o===void 0?Dt:o,a=i.plugins,c=a===void 0?mr:a,l=function(h,m,b){return b===n||b.startsWith(n)&&b.endsWith(n)&&b.replaceAll(n,"").length>0?".".concat(t):h},u=c.slice();u.push(function(h){h.type===ur&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(uh,n).replace(r,l))}),s.prefix&&u.push(Bd),u.push(Ld);var d=function(h,m,b,v){m===void 0&&(m=""),b===void 0&&(b=""),v===void 0&&(v="&"),t=v,n=m,r=new RegExp("\\".concat(n,"\\b"),"g");var x=h.replace(dh,""),y=Md(b||m?"".concat(b," ").concat(m," { ").concat(x," }"):x);s.namespace&&(y=Ac(y,s.namespace));var w=[];return Qn(y,Vd(u.concat(Id(function(_){return w.push(_)})))),w};return d.hash=c.length?c.reduce(function(h,m){return m.name||yn(15),yt(h,m.name)},5381).toString():"",d}var fh=new er,ui=hh(),Ec=Oe.createContext({shouldForwardProp:void 0,styleSheet:fh,stylis:ui});Ec.Consumer;Oe.createContext(void 0);function di(){return se(Ec)}var Dc=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=ui);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,qi(this,function(){throw yn(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ui),this.name+t.hash},e}(),mh=function(e){return e>="A"&&e<="Z"};function os(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;mh(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Mc=function(e){return e==null||e===!1||e===""},Rc=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Mc(o)&&(Array.isArray(o)&&o.isCss||Mt(o)?r.push("".concat(os(i),":"),o,";"):an(o)?r.push.apply(r,Tt(Tt(["".concat(i," {")],Rc(o),!1),["}"],!1)):r.push("".concat(os(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Od||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ke(e,t,n,r){if(Mc(e))return[];if(Ui(e))return[".".concat(e.styledComponentId)];if(Mt(e)){if(!Mt(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return Ke(i,t,n,r)}var o;return e instanceof Dc?n?(e.inject(n,r),[e.getName(r)]):[e]:an(e)?Rc(e):Array.isArray(e)?Array.prototype.concat.apply(mr,e.map(function(s){return Ke(s,t,n,r)})):[e.toString()]}function Lc(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Mt(n)&&!Ui(n))return!1}return!0}var ph=Sc("6.1.1"),gh=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Lc(t),this.componentId=n,this.baseHash=yt(ph,n),this.baseStyle=r,er.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=at(i,this.staticRulesId);else{var o=Jn(Ke(this.rules,t,n,r)),s=ci(yt(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,a)}i=at(i,s),this.staticRulesId=s}else{for(var c=yt(this.baseHash,r.hash),l="",u=0;u<this.rules.length;u++){var d=this.rules[u];if(typeof d=="string")l+=d;else if(d){var h=Jn(Ke(d,t,n,r));c=yt(c,h+u),l+=h}}if(l){var m=ci(c>>>0);n.hasNameForId(this.componentId,m)||n.insertRules(this.componentId,m,r(l,".".concat(m),void 0,this.componentId)),i=at(i,m)}}return i},e}(),Ki=Oe.createContext(void 0);Ki.Consumer;var Er={};function yh(e,t,n){var r=Ui(e),i=e,o=!Ar(e),s=t.attrs,a=s===void 0?mr:s,c=t.componentId,l=c===void 0?function(P,k){var C=typeof P!="string"?"sc":Zo(P);Er[C]=(Er[C]||0)+1;var T="".concat(C,"-").concat(Yi("6.1.1"+C+Er[C]));return k?"".concat(k,"-").concat(T):T}(t.displayName,t.parentComponentId):c,u=t.displayName,d=u===void 0?function(P){return Ar(P)?"styled.".concat(P):"Styled(".concat(Hd(P),")")}(e):u,h=t.displayName&&t.componentId?"".concat(Zo(t.displayName),"-").concat(t.componentId):t.componentId||l,m=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,b=t.shouldForwardProp;if(r&&i.shouldForwardProp){var v=i.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;b=function(P,k){return v(P,k)&&x(P,k)}}else b=v}var y=new gh(n,h,r?i.componentStyle:void 0);function w(P,k){return function(C,T,M){var V=C.attrs,j=C.componentStyle,E=C.defaultProps,W=C.foldedComponentIds,z=C.styledComponentId,Z=C.target,H=Oe.useContext(Ki),_e=di(),$=C.shouldForwardProp||_e.shouldForwardProp,B=function(Sn,zt,$n){for(var Ht,nt=ce(ce({},zt),{className:void 0,theme:$n}),$r=0;$r<Sn.length;$r+=1){var kn=Mt(Ht=Sn[$r])?Ht(nt):Ht;for(var ze in kn)nt[ze]=ze==="className"?at(nt[ze],kn[ze]):ze==="style"?ce(ce({},nt[ze]),kn[ze]):kn[ze]}return zt.className&&(nt.className=at(nt.className,zt.className)),nt}(V,T,wc(T,H,E)||Dt),ne=B.as||Z,ae={};for(var ue in B)B[ue]===void 0||ue[0]==="$"||ue==="as"||ue==="theme"||(ue==="forwardedAs"?ae.as=B.forwardedAs:$&&!$(ue,ne)||(ae[ue]=B[ue]));var Wt=function(Sn,zt){var $n=di(),Ht=Sn.generateAndInjectStyles(zt,$n.styleSheet,$n.stylis);return Ht}(j,B),Sr=at(W,z);return Wt&&(Sr+=" "+Wt),B.className&&(Sr+=" "+B.className),ae[Ar(ne)&&!_c.has(ne)?"class":"className"]=Sr,ae.ref=M,Te(ne,ae)}(_,P,k)}w.displayName=d;var _=Oe.forwardRef(w);return _.attrs=m,_.componentStyle=y,_.displayName=d,_.shouldForwardProp=b,_.foldedComponentIds=r?at(i.foldedComponentIds,i.styledComponentId):"",_.styledComponentId=h,_.target=r?i.target:e,Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=r?function(k){for(var C=[],T=1;T<arguments.length;T++)C[T-1]=arguments[T];for(var M=0,V=C;M<V.length;M++)li(k,V[M],!0);return k}({},i.defaultProps,P):P}}),qi(_,function(){return".".concat(_.styledComponentId)}),o&&Tc(_,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),_}function ss(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var as=function(e){return Object.assign(e,{isCss:!0})};function We(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Mt(e)||an(e)){var r=e;return as(Ke(ss(mr,Tt([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Ke(i):as(Ke(ss(i,t)))}function hi(e,t,n){if(n===void 0&&(n=Dt),!t)throw yn(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,We.apply(void 0,Tt([i],o,!1)))};return r.attrs=function(i){return hi(e,t,ce(ce({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return hi(e,t,ce(ce({},n),i))},r}var Vc=function(e){return hi(yh,e)},g=Vc;_c.forEach(function(e){g[e]=Vc(e)});var bh=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Lc(t),er.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var o=i(Jn(Ke(this.rules,n,r,i)),""),s=this.componentId+t;r.insertRules(s,s,o)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&er.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function vh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=We.apply(void 0,Tt([e],t,!1)),i="sc-global-".concat(Yi(JSON.stringify(r))),o=new bh(r,i),s=function(c){var l=di(),u=Oe.useContext(Ki),d=Oe.useRef(l.styleSheet.allocateGSInstance(i)).current;return l.styleSheet.server&&a(d,c,l.styleSheet,u,l.stylis),Oe.useLayoutEffect(function(){if(!l.styleSheet.server)return a(d,c,l.styleSheet,u,l.stylis),function(){return o.removeStyles(d,l.styleSheet)}},[d,c,l.styleSheet,u,l.stylis]),null};function a(c,l,u,d,h){if(o.isStatic)o.renderStyles(c,Nd,u,h);else{var m=ce(ce({},l),{theme:wc(l,d,s.defaultProps)});o.renderStyles(c,m,u,h)}}return Oe.memo(s)}function Ve(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Jn(We.apply(void 0,Tt([e],t,!1))),i=Yi(r);return new Dc(i,r)}const p={primary:"#8b5cf6",secondary:"#06b6d4",accent:"#f59e0b",background:{main:"#0f172a",secondary:"#1e293b",card:"#334155",gradient:"linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"},text:{primary:"#f8fafc",secondary:"#cbd5e1",muted:"#94a3b8",accent:"#8b5cf6"},success:"#10b981",warning:"#f59e0b",error:"#ef4444",info:"#06b6d4",overlay:"rgba(15, 23, 42, 0.9)",cardOverlay:"rgba(51, 65, 85, 0.5)",borderLight:"rgba(203, 213, 225, 0.1)",gradients:{primary:"linear-gradient(45deg, #8b5cf6, #06b6d4)",secondary:"linear-gradient(45deg, #06b6d4, #f59e0b)",accent:"linear-gradient(135deg, #8b5cf6 0%, #06b6d4 50%, #f59e0b 100%)",card:"linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)",hover:"linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(6, 182, 212, 0.2) 100%)"}},I={mobile:"480px",tablet:"768px",desktop:"1024px",wide:"1200px"},Le={small:"0 2px 4px rgba(0, 0, 0, 0.1)",medium:"0 4px 8px rgba(0, 0, 0, 0.2)",large:"0 8px 16px rgba(0, 0, 0, 0.3)",card:"0 10px 30px rgba(0, 0, 0, 0.2)",hover:"0 20px 40px rgba(0, 0, 0, 0.3)",glow:"0 0 20px rgba(78, 205, 196, 0.3)"},me={small:"8px",medium:"12px",large:"16px",xl:"20px",round:"50%"},S={xs:"0.5rem",sm:"1rem",md:"1.5rem",lg:"2rem",xl:"3rem",xxl:"4rem"},D={fontFamily:{primary:"'Raleway', sans-serif",secondary:"'Roboto', sans-serif",mono:"'Fira Code', monospace"},fontSize:{xs:"0.75rem",sm:"0.875rem",base:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem"},fontWeight:{light:300,normal:400,medium:500,semibold:600,bold:700}},xh=vh`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth;
    }

    /* Decorative blurred blobs must never cause horizontal scroll. Only on <html> (it applies to the
       viewport): overflow on <body> would make it a scroll container and break position: sticky. */
    html {
        overflow-x: hidden;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${p.primary};
    }

    body {
        background: ${p.background.gradient};
        color: ${p.text.primary};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-height: 100vh;
    }

    body, input, textarea, button {
        font-family: ${D.fontFamily.primary};
        font-size: ${D.fontSize.base};
        line-height: 1.6;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: ${D.fontFamily.primary};
        font-weight: ${D.fontWeight.semibold};
        color: ${p.text.primary};
        margin-bottom: 1rem;
    }

    h1 {
        font-size: ${D.fontSize["5xl"]};
        background: ${p.gradients.primary};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }

    h2 {
        font-size: ${D.fontSize["4xl"]};
    }

    h3 {
        font-size: ${D.fontSize["3xl"]};
    }

    p {
        color: ${p.text.secondary};
        margin-bottom: 1rem;
    }

    a {
        color: ${p.primary};
        text-decoration: none;
        transition: all 0.3s ease;
        
        &:hover {
            color: ${p.accent};
            text-shadow: ${Le.glow};
        }
    }

    button {
        cursor: pointer;
        border: none;
        background: ${p.gradients.primary};
        color: ${p.text.primary};
        padding: 0.75rem 1.5rem;
        border-radius: 8px;
        font-weight: ${D.fontWeight.medium};
        transition: all 0.3s ease;
        
        &:hover {
            transform: translateY(-2px);
            box-shadow: ${Le.hover};
        }
        
        &:active {
            transform: translateY(0);
        }
    }

    input, textarea {
        background: ${p.background.card};
        border: 1px solid ${p.borderLight};
        color: ${p.text.primary};
        padding: 0.75rem;
        border-radius: 8px;
        transition: all 0.3s ease;
        
        &:focus {
            border-color: ${p.primary};
            box-shadow: 0 0 0 3px ${p.primary}33;
        }
        
        &::placeholder {
            color: ${p.text.muted};
        }
    }

    /* Scrollbar personalizada */
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: ${p.background.secondary};
    }

    ::-webkit-scrollbar-thumb {
        background: ${p.gradients.primary};
        border-radius: 4px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${p.gradients.secondary};
    }

    /* Seleção de texto */
    ::selection {
        background: ${p.primary}33;
        color: ${p.text.primary};
    }
`;var wh=0;function f(e,t,n,r,i,o){var s,a,c={};for(a in t)a=="ref"?s=t[a]:c[a]=t[a];var l={type:e,props:c,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--wh,__i:-1,__u:0,__source:i,__self:o};if(typeof e=="function"&&(s=e.defaultProps))for(a in s)c[a]===void 0&&(c[a]=s[a]);return A.vnode&&A.vnode(l),l}const fi=["EN","BR","ES"],Ic="portfolio-language",Bc={EN:"en-US",BR:"pt-BR",ES:"es-ES"};function _h(){try{const t=localStorage.getItem(Ic);if(t&&fi.includes(t))return t}catch{}const e=(typeof navigator<"u"?navigator.language:"en").toLowerCase();return e.startsWith("pt")?"BR":e.startsWith("es")?"ES":"EN"}const Oc=Ze(void 0);function Sh({children:e}){const[t,n]=F(_h);return X(()=>{document.documentElement.lang=Bc[t];try{localStorage.setItem(Ic,t)}catch{}},[t]),f(Oc.Provider,{value:[t,n],children:e})}function et(){const e=se(Oc);if(!e)throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");return e}function ye(){const[e]=et();return t=>t[e]}function pr(e){return Bc[e]}const $h=g.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  background: ${e=>e.scrolled?`${p.background.main}dd`:"transparent"};
  backdrop-filter: ${e=>e.scrolled?"blur(10px)":"none"};
  box-shadow: ${e=>e.scrolled?Le.medium:"none"};
`,kh=g.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${S.md} ${S.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${I.tablet}) {
    padding: ${S.sm} ${S.md};
  }
`,Ph=g.div`
  font-family: ${D.fontFamily.mono};
  font-size: ${D.fontSize.xl};
  font-weight: ${D.fontWeight.bold};
  color: ${p.primary};
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${p.accent};
    transform: scale(1.05);
  }

  span {
    background: ${p.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`,Th=g.div`
  display: flex;
  gap: ${S.lg};

  @media (max-width: ${I.tablet}) {
    display: none;
  }
`,Ch=g.div`
  color: ${e=>e.active?p.primary:p.text.primary};
  text-decoration: none;
  font-weight: ${D.fontWeight.medium};
  padding: ${S.sm} ${S.md};
  border-radius: 8px;
  position: relative;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${p.primary};
    background: ${p.cardOverlay};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    width: ${e=>e.active?"80%":"0"};
    height: 2px;
    background: ${p.gradients.primary};
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 80%;
  }
`,Ah=g.button`
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${S.sm};

  @media (max-width: ${I.tablet}) {
    display: flex;
  }

  span {
    width: 24px;
    height: 3px;
    background: ${p.primary};
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  &:hover span {
    background: ${p.accent};
  }
`,Eh=g.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: ${p.background.main};
  box-shadow: ${Le.large};
  border-top: 1px solid ${p.borderLight};
  display: flex;
  flex-direction: column;
  transform: translateY(${e=>e.open?"0":"-100%"});
  opacity: ${e=>e.open?"1":"0"};
  visibility: ${e=>e.open?"visible":"hidden"};
  transition: all 0.3s ease;

  @media (min-width: ${I.tablet}) {
    display: none;
  }
`,Dh=g.div`
  color: ${e=>e.active?p.primary:p.text.primary};
  text-decoration: none;
  font-weight: ${D.fontWeight.medium};
  padding: ${S.md} ${S.lg};
  border-bottom: 1px solid ${p.borderLight};
  transition: all 0.3s ease;
  background: ${e=>e.active?p.cardOverlay:"transparent"};
  cursor: pointer;

  &:hover {
    color: ${p.primary};
    background: ${p.cardOverlay};
  }

  &:last-child {
    border-bottom: none;
  }
`,cs=g.div`
  display: flex;
  gap: ${S.xs};
  background: ${p.cardOverlay};
  border-radius: ${me.small};
  padding: ${S.xs};
  border: 1px solid ${p.borderLight};

  @media (max-width: ${I.tablet}) {
    justify-content: center;
  }
`,ls=g.button`
  background: ${e=>e.active?p.gradients.primary:"transparent"};
  color: ${e=>e.active?p.text.primary:p.text.secondary};
  border: none;
  padding: ${S.xs} ${S.sm};
  border-radius: ${me.small};
  font-size: ${D.fontSize.xs};
  font-weight: ${D.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 36px;

  &:hover {
    background: ${e=>e.active?p.gradients.primary:p.cardOverlay};
    color: ${p.text.primary};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`;function Mh({currentPage:e,setCurrentPage:t}){const[n,r]=F(!1),[i,o]=F(!1),[s,a]=et(),c=ye();X(()=>{const h=()=>{const m=window.scrollY>50;o(m)};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const l=[{id:"home",label:c({EN:"Home",BR:"Início",ES:"Inicio"})},{id:"projects",label:c({EN:"Projects",BR:"Projetos",ES:"Proyectos"})},{id:"experiences",label:c({EN:"Experiences",BR:"Experiências",ES:"Experiencias"})},{id:"contact",label:c({EN:"Contact",BR:"Contato",ES:"Contacto"})}],u=h=>{t(h),r(!1)},d=h=>{a(()=>h)};return f($h,{scrolled:i,children:f(kh,{children:[f(Ph,{onClick:()=>u("home"),children:f("span",{children:"<WC />"})}),f(Th,{children:l.map(h=>f(Ch,{active:e===h.id,onClick:()=>u(h.id),children:h.label},h.id))}),f(cs,{children:fi.map(h=>f(ls,{active:s===h,onClick:()=>d(h),children:h},h))}),f(Ah,{onClick:()=>r(!n),"aria-label":"Menu",children:[f("span",{}),f("span",{}),f("span",{})]}),f(Eh,{open:n,children:[f("div",{style:{padding:"1rem",borderBottom:"1px solid rgba(203, 213, 225, 0.1)"},children:f(cs,{children:fi.map(h=>f(ls,{active:s===h,onClick:()=>d(h),children:h},h))})}),l.map(h=>f(Dh,{active:e===h.id,onClick:()=>u(h.id),children:h.label},h.id))]})]})})}const Fc="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_30_57)'%3e%3cpath%20d='M15.9999%200C24.837%200%2032%207.164%2032%2016.0001C32%2024.8361%2024.837%2032%2015.9999%2032C7.1629%2032%200%2024.836%200%2016.0001C0%207.16411%207.16301%200%2015.9999%200Z'%20fill='white'%20fill-opacity='0.5'/%3e%3cpath%20d='M9.01599%2021.984H12.012V11.998H9.01599V21.984ZM20.688%2011.6521C19.234%2011.6521%2017.933%2012.183%2017.0101%2013.3551V11.9651H14.0031V21.9841H17.0101V16.5661C17.0101%2015.4211%2018.0591%2014.304%2019.3731%2014.304C20.687%2014.304%2021.0111%2015.4211%2021.0111%2016.5381V21.9831H24.0071V16.3151C24.007%2012.378%2022.143%2011.6521%2020.688%2011.6521ZM10.5%2011C11.328%2011%2012%2010.328%2012%209.49997C12%208.67195%2011.328%208.00003%2010.5%208.00003C9.67199%208.00003%208.99995%208.67206%208.99995%209.50008C8.99995%2010.3281%209.67199%2011%2010.5%2011Z'%20fill='%23090E16'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_30_57'%3e%3crect%20width='32'%20height='32'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",Nc="data:image/svg+xml,%3csvg%20width='34'%20height='33'%20viewBox='0%200%2034%2033'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M16.7381%200.333344C7.67448%200.333344%200.333374%207.67445%200.333374%2016.738C0.333374%2023.9971%205.02922%2030.1284%2011.5501%2032.302C12.3703%2032.4455%2012.6779%2031.9534%2012.6779%2031.5228C12.6779%2031.1332%2012.6574%2029.8413%2012.6574%2028.4674C8.53572%2029.2261%207.46942%2027.4626%207.14133%2026.5399C6.95677%2026.0682%206.15704%2024.6123%205.45984%2024.2227C4.88568%2023.9151%204.06544%2023.1564%205.43934%2023.1359C6.73121%2023.1154%207.65397%2024.3252%207.96156%2024.8174C9.43798%2027.2986%2011.7962%2026.6014%2012.7394%2026.1707C12.883%2025.1044%2013.3136%2024.3867%2013.7852%2023.9766C10.1352%2023.5665%206.32109%2022.1516%206.32109%2015.8768C6.32109%2014.0928%206.95677%2012.6164%208.00257%2011.468C7.83853%2011.0579%207.26436%209.37644%208.16662%207.12079C8.16662%207.12079%209.54051%206.69017%2012.6779%208.80227C13.9903%208.43316%2015.3847%208.24861%2016.7791%208.24861C18.1735%208.24861%2019.5679%208.43316%2020.8803%208.80227C24.0177%206.66966%2025.3916%207.12079%2025.3916%207.12079C26.2938%209.37644%2025.7197%2011.0579%2025.5556%2011.468C26.6014%2012.6164%2027.2371%2014.0723%2027.2371%2015.8768C27.2371%2022.1721%2023.4025%2023.5665%2019.7524%2023.9766C20.3471%2024.4893%2020.8598%2025.4735%2020.8598%2027.0115C20.8598%2029.2056%2020.8393%2030.9691%2020.8393%2031.5228C20.8393%2031.9534%2021.1468%2032.4661%2021.9671%2032.302C28.4469%2030.1284%2033.1428%2023.9766%2033.1428%2016.738C33.1428%207.67445%2025.8017%200.333344%2016.7381%200.333344Z'%20fill='white'%20fill-opacity='0.5'/%3e%3c/svg%3e",Rh=g.section`
    height: 80px;
    display: flex;
    flex-direction: row;
    color: ${e=>e.theme["white-50"]};
    background-color: ${e=>e.theme["secundary-blue-10"]};
`,Lh=g.div`
    height: 100%;
    padding-left: 80px;
    display: flex;
    align-items: center;
    justify-content: start;
    font-family: Haleway, sans-serif;
`,Vh=g.div`
    margin: 23%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;
    height: 20px;
`,us=g.div`
    margin-right: 15px;
`;function Ih(){return f(Rh,{children:[f(Lh,{children:["Copyright © Wilton Costa · ",new Date().getFullYear()]}),f(Vh,{children:[f("a",{href:"https://www.linkedin.com/in/wilton-software-engineer/",target:"_blank",rel:"noreferrer",children:f(us,{children:f("img",{src:Fc,alt:""})})}),f("a",{href:"https://www.github.com/wiltoon",target:"_blank",rel:"noreferrer",children:f(us,{children:f("img",{src:Nc,alt:""})})})]})]})}const Bh="/portifolio/assets/mark-B6M6CZ2Y.svg",Oh=2016,Dr=new Date().getFullYear()-Oh,jc={EN:[{icon:"👋",text:"My name is Wilton. I work in Software Engineering with a strong interest in Artificial Intelligence — my goal is to be a back-end engineer who brings AI into real products."},{icon:"👨‍💻",text:`For over ${Dr} years I've been building solutions with C, C++, Java, Python and TypeScript.`},{icon:"🎓",text:"Bachelor's in Computer Engineering and Master's in Computer Science, both at the Federal University of Mato Grosso do Sul (UFMS)."},{icon:"💡",text:"My interests: Back-end, AI Engineering, Forward Deployed Engineering (FDE), Data Engineering and Front-end."},{icon:"☁️",text:"AWS Certified Cloud Practitioner and AWS Certified Solutions Architect."},{icon:"🚀",text:"Being 1% better every working day gives 1.01^252 ≈ 12.27x in a year. That is why I keep learning — new technologies are part of the journey!"}],BR:[{icon:"👋",text:"Me chamo Wilton. Atuo em Engenharia de Software com forte interesse em Inteligência Artificial — meu objetivo é ser um back-end que leva IA para produtos reais."},{icon:"👨‍💻",text:`Há mais de ${Dr} anos construindo soluções com C, C++, Java, Python e TypeScript.`},{icon:"🎓",text:"Graduado em Engenharia da Computação e Mestre em Ciência da Computação pela Universidade Federal de Mato Grosso do Sul (UFMS)."},{icon:"💡",text:"Meus interesses: Back-end, Engenharia de IA (AI Engineer), Forward Deployed Engineering (FDE), Engenharia de Dados e Front-end."},{icon:"☁️",text:"AWS Certified Cloud Practitioner e AWS Certified Solutions Architect."},{icon:"🚀",text:"Sendo 1% melhor a cada dia útil temos 1,01^252 ≈ 12,27x em um ano. Por isso estou sempre evoluindo — novas tecnologias fazem parte do caminho!"}],ES:[{icon:"👋",text:"Me llamo Wilton. Trabajo en Ingeniería de Software con un gran interés en Inteligencia Artificial — mi objetivo es ser un ingeniero back-end que lleve la IA a productos reales."},{icon:"👨‍💻",text:`Desde hace más de ${Dr} años construyo soluciones con C, C++, Java, Python y TypeScript.`},{icon:"🎓",text:"Ingeniero en Computación y Máster en Ciencias de la Computación por la Universidad Federal de Mato Grosso do Sul (UFMS)."},{icon:"💡",text:"Mis intereses: Back-end, Ingeniería de IA (AI Engineer), Forward Deployed Engineering (FDE), Ingeniería de Datos y Front-end."},{icon:"☁️",text:"AWS Certified Cloud Practitioner y AWS Certified Solutions Architect."},{icon:"🚀",text:"Ser 1% mejor cada día hábil da 1,01^252 ≈ 12,27x en un año. Por eso sigo aprendiendo — ¡las nuevas tecnologías son parte del camino!"}]},cn={linkedin:"https://www.linkedin.com/in/wilton-software-engineer/",github:"https://www.github.com/wiltoon"},Fh="/portifolio/assets/mymeme-back-xzmSO0by.svg";function Nh(){var e;return typeof window<"u"&&((e=window.matchMedia)==null?void 0:e.call(window,"(prefers-reduced-motion: reduce)").matches)}function jh(e,t=22){const[n,r]=F(0);X(()=>{if(Nh()){r(e.length);return}r(0);const o=window.setInterval(()=>{r(s=>s>=e.length?(window.clearInterval(o),s):s+1)},t);return()=>window.clearInterval(o)},[e,t]);const i=n>=e.length;return{visible:e.slice(0,n),done:i,skip:()=>r(e.length)}}let Cn=null;function Wh(){return Cn||(Cn=fetch("https://api.github.com/users/wiltoon/repos?type=owner&sort=pushed&per_page=100").then(e=>{if(!e.ok)throw new Error(`GitHub ${e.status}`);return e.json()}).then(e=>e.filter(t=>!t.fork&&t.name.toLowerCase()!=="wiltoon"&&!t.name.toLowerCase().includes(".github.io")).sort((t,n)=>+!!n.description-+!!t.description||n.stargazers_count-t.stargazers_count||new Date(n.pushed_at).getTime()-new Date(t.pushed_at).getTime())).catch(e=>{throw Cn=null,e})),Cn}function zh(e){const[t,n]=F(null),[r,i]=F(!1);return X(()=>{if(!e||t)return;let o=!0;return i(!1),Wh().then(s=>o&&n(s)).catch(()=>o&&i(!0)),()=>{o=!1}},[e]),{repos:t,error:r,loading:e&&!t&&!r}}function J(e){const t=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&t==="[object Date]"?new e.constructor(+e):typeof e=="number"||t==="[object Number]"||typeof e=="string"||t==="[object String]"?new Date(e):new Date(NaN)}function ft(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}const Wc=6048e5,Hh=864e5;let Gh={};function gr(){return Gh}function ln(e,t){var a,c,l,u;const n=gr(),r=(t==null?void 0:t.weekStartsOn)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.weekStartsOn)??n.weekStartsOn??((u=(l=n.locale)==null?void 0:l.options)==null?void 0:u.weekStartsOn)??0,i=J(e),o=i.getDay(),s=(o<r?7:0)+o-r;return i.setDate(i.getDate()-s),i.setHours(0,0,0,0),i}function tr(e){return ln(e,{weekStartsOn:1})}function zc(e){const t=J(e),n=t.getFullYear(),r=ft(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=tr(r),o=ft(e,0);o.setFullYear(n,0,4),o.setHours(0,0,0,0);const s=tr(o);return t.getTime()>=i.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function ds(e){const t=J(e);return t.setHours(0,0,0,0),t}function hs(e){const t=J(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function Yh(e,t){const n=ds(e),r=ds(t),i=+n-hs(n),o=+r-hs(r);return Math.round((i-o)/Hh)}function Uh(e){const t=zc(e),n=ft(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),tr(n)}function Mr(e,t){const n=J(e),r=J(t),i=n.getTime()-r.getTime();return i<0?-1:i>0?1:i}function qh(e){return e instanceof Date||typeof e=="object"&&Object.prototype.toString.call(e)==="[object Date]"}function Kh(e){if(!qh(e)&&typeof e!="number")return!1;const t=J(e);return!isNaN(Number(t))}function Xh(e,t){const n=J(e),r=J(t),i=n.getFullYear()-r.getFullYear(),o=n.getMonth()-r.getMonth();return i*12+o}function Qh(e){const t=J(e);return t.setHours(23,59,59,999),t}function Jh(e){const t=J(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function Zh(e){const t=J(e);return+Qh(t)==+Jh(t)}function Hc(e,t){const n=J(e),r=J(t),i=Mr(n,r),o=Math.abs(Xh(n,r));let s;if(o<1)s=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-i*o);let a=Mr(n,r)===-i;Zh(J(e))&&o===1&&Mr(e,r)===1&&(a=!1),s=i*(o-Number(a))}return s===0?0:s}function ef(e){const t=J(e),n=ft(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}const tf={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},nf=(e,t,n)=>{let r;const i=tf[e];return typeof i=="string"?r=i:t===1?r=i.one:r=i.other.replace("{{count}}",t.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Rr(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const rf={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},of={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},sf={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},af={date:Rr({formats:rf,defaultWidth:"full"}),time:Rr({formats:of,defaultWidth:"full"}),dateTime:Rr({formats:sf,defaultWidth:"full"})},cf={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},lf=(e,t,n,r)=>cf[e];function Gt(e){return(t,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&e.formattingValues){const s=e.defaultFormattingWidth||e.defaultWidth,a=n!=null&&n.width?String(n.width):s;i=e.formattingValues[a]||e.formattingValues[s]}else{const s=e.defaultWidth,a=n!=null&&n.width?String(n.width):e.defaultWidth;i=e.values[a]||e.values[s]}const o=e.argumentCallback?e.argumentCallback(t):t;return i[o]}}const uf={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},df={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},hf={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},ff={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},mf={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},pf={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},gf=(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},yf={ordinalNumber:gf,era:Gt({values:uf,defaultWidth:"wide"}),quarter:Gt({values:df,defaultWidth:"wide",argumentCallback:e=>e-1}),month:Gt({values:hf,defaultWidth:"wide"}),day:Gt({values:ff,defaultWidth:"wide"}),dayPeriod:Gt({values:mf,defaultWidth:"wide",formattingValues:pf,defaultFormattingWidth:"wide"})};function Yt(e){return(t,n={})=>{const r=n.width,i=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(i);if(!o)return null;const s=o[0],a=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(a)?vf(a,d=>d.test(s)):bf(a,d=>d.test(s));let l;l=e.valueCallback?e.valueCallback(c):c,l=n.valueCallback?n.valueCallback(l):l;const u=t.slice(s.length);return{value:l,rest:u}}}function bf(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n}function vf(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n}function xf(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const i=r[0],o=t.match(e.parsePattern);if(!o)return null;let s=e.valueCallback?e.valueCallback(o[0]):o[0];s=n.valueCallback?n.valueCallback(s):s;const a=t.slice(i.length);return{value:s,rest:a}}}const wf=/^(\d+)(th|st|nd|rd)?/i,_f=/\d+/i,Sf={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},$f={any:[/^b/i,/^(a|c)/i]},kf={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Pf={any:[/1/i,/2/i,/3/i,/4/i]},Tf={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Cf={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},Af={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},Ef={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},Df={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},Mf={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Rf={ordinalNumber:xf({matchPattern:wf,parsePattern:_f,valueCallback:e=>parseInt(e,10)}),era:Yt({matchPatterns:Sf,defaultMatchWidth:"wide",parsePatterns:$f,defaultParseWidth:"any"}),quarter:Yt({matchPatterns:kf,defaultMatchWidth:"wide",parsePatterns:Pf,defaultParseWidth:"any",valueCallback:e=>e+1}),month:Yt({matchPatterns:Tf,defaultMatchWidth:"wide",parsePatterns:Cf,defaultParseWidth:"any"}),day:Yt({matchPatterns:Af,defaultMatchWidth:"wide",parsePatterns:Ef,defaultParseWidth:"any"}),dayPeriod:Yt({matchPatterns:Df,defaultMatchWidth:"any",parsePatterns:Mf,defaultParseWidth:"any"})},Lf={code:"en-US",formatDistance:nf,formatLong:af,formatRelative:lf,localize:yf,match:Rf,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Vf(e){const t=J(e);return Yh(t,ef(t))+1}function If(e){const t=J(e),n=+tr(t)-+Uh(t);return Math.round(n/Wc)+1}function Gc(e,t){var u,d,h,m;const n=J(e),r=n.getFullYear(),i=gr(),o=(t==null?void 0:t.firstWeekContainsDate)??((d=(u=t==null?void 0:t.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??i.firstWeekContainsDate??((m=(h=i.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??1,s=ft(e,0);s.setFullYear(r+1,0,o),s.setHours(0,0,0,0);const a=ln(s,t),c=ft(e,0);c.setFullYear(r,0,o),c.setHours(0,0,0,0);const l=ln(c,t);return n.getTime()>=a.getTime()?r+1:n.getTime()>=l.getTime()?r:r-1}function Bf(e,t){var a,c,l,u;const n=gr(),r=(t==null?void 0:t.firstWeekContainsDate)??((c=(a=t==null?void 0:t.locale)==null?void 0:a.options)==null?void 0:c.firstWeekContainsDate)??n.firstWeekContainsDate??((u=(l=n.locale)==null?void 0:l.options)==null?void 0:u.firstWeekContainsDate)??1,i=Gc(e,t),o=ft(e,0);return o.setFullYear(i,0,r),o.setHours(0,0,0,0),ln(o,t)}function Of(e,t){const n=J(e),r=+ln(n,t)-+Bf(n,t);return Math.round(r/Wc)+1}function N(e,t){const n=e<0?"-":"",r=Math.abs(e).toString().padStart(t,"0");return n+r}const He={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return N(t==="yy"?r%100:r,t.length)},M(e,t){const n=e.getMonth();return t==="M"?String(n+1):N(n+1,2)},d(e,t){return N(e.getDate(),t.length)},a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(e,t){return N(e.getHours()%12||12,t.length)},H(e,t){return N(e.getHours(),t.length)},m(e,t){return N(e.getMinutes(),t.length)},s(e,t){return N(e.getSeconds(),t.length)},S(e,t){const n=t.length,r=e.getMilliseconds(),i=Math.trunc(r*Math.pow(10,n-3));return N(i,t.length)}},gt={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},fs={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if(t==="yo"){const r=e.getFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return He.y(e,t)},Y:function(e,t,n,r){const i=Gc(e,r),o=i>0?i:1-i;if(t==="YY"){const s=o%100;return N(s,2)}return t==="Yo"?n.ordinalNumber(o,{unit:"year"}):N(o,t.length)},R:function(e,t){const n=zc(e);return N(n,t.length)},u:function(e,t){const n=e.getFullYear();return N(n,t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return N(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return N(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return He.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return N(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const i=Of(e,r);return t==="wo"?n.ordinalNumber(i,{unit:"week"}):N(i,t.length)},I:function(e,t,n){const r=If(e);return t==="Io"?n.ordinalNumber(r,{unit:"week"}):N(r,t.length)},d:function(e,t,n){return t==="do"?n.ordinalNumber(e.getDate(),{unit:"date"}):He.d(e,t)},D:function(e,t,n){const r=Vf(e);return t==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):N(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const i=e.getDay(),o=(i-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return N(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const i=e.getDay(),o=(i-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return N(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),i=r===0?7:r;switch(t){case"i":return String(i);case"ii":return N(i,t.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const i=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let i;switch(r===12?i=gt.noon:r===0?i=gt.midnight:i=r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let i;switch(r>=17?i=gt.evening:r>=12?i=gt.afternoon:r>=4?i=gt.morning:i=gt.night,t){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(e,t,n){if(t==="ho"){let r=e.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return He.h(e,t)},H:function(e,t,n){return t==="Ho"?n.ordinalNumber(e.getHours(),{unit:"hour"}):He.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return t==="Ko"?n.ordinalNumber(r,{unit:"hour"}):N(r,t.length)},k:function(e,t,n){let r=e.getHours();return r===0&&(r=24),t==="ko"?n.ordinalNumber(r,{unit:"hour"}):N(r,t.length)},m:function(e,t,n){return t==="mo"?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):He.m(e,t)},s:function(e,t,n){return t==="so"?n.ordinalNumber(e.getSeconds(),{unit:"second"}):He.s(e,t)},S:function(e,t){return He.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(r===0)return"Z";switch(t){case"X":return ps(r);case"XXXX":case"XX":return it(r);case"XXXXX":case"XXX":default:return it(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return ps(r);case"xxxx":case"xx":return it(r);case"xxxxx":case"xxx":default:return it(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+ms(r,":");case"OOOO":default:return"GMT"+it(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+ms(r,":");case"zzzz":default:return"GMT"+it(r,":")}},t:function(e,t,n){const r=Math.trunc(e.getTime()/1e3);return N(r,t.length)},T:function(e,t,n){const r=e.getTime();return N(r,t.length)}};function ms(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),i=Math.trunc(r/60),o=r%60;return o===0?n+String(i):n+String(i)+t+N(o,2)}function ps(e,t){return e%60===0?(e>0?"-":"+")+N(Math.abs(e)/60,2):it(e,t)}function it(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),i=N(Math.trunc(r/60),2),o=N(r%60,2);return n+i+t+o}const gs=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}},Yc=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}},Ff=(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return gs(e,t);let o;switch(r){case"P":o=t.dateTime({width:"short"});break;case"PP":o=t.dateTime({width:"medium"});break;case"PPP":o=t.dateTime({width:"long"});break;case"PPPP":default:o=t.dateTime({width:"full"});break}return o.replace("{{date}}",gs(r,t)).replace("{{time}}",Yc(i,t))},Nf={p:Yc,P:Ff},jf=/^D+$/,Wf=/^Y+$/,zf=["D","DD","YY","YYYY"];function Hf(e){return jf.test(e)}function Gf(e){return Wf.test(e)}function Yf(e,t,n){const r=Uf(e,t,n);if(console.warn(r),zf.includes(e))throw new RangeError(r)}function Uf(e,t,n){const r=e[0]==="Y"?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const qf=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,Kf=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Xf=/^'([^]*?)'?$/,Qf=/''/g,Jf=/[a-zA-Z]/;function ys(e,t,n){var u,d,h,m,b,v,x,y;const r=gr(),i=(n==null?void 0:n.locale)??r.locale??Lf,o=(n==null?void 0:n.firstWeekContainsDate)??((d=(u=n==null?void 0:n.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??r.firstWeekContainsDate??((m=(h=r.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??1,s=(n==null?void 0:n.weekStartsOn)??((v=(b=n==null?void 0:n.locale)==null?void 0:b.options)==null?void 0:v.weekStartsOn)??r.weekStartsOn??((y=(x=r.locale)==null?void 0:x.options)==null?void 0:y.weekStartsOn)??0,a=J(e);if(!Kh(a))throw new RangeError("Invalid time value");let c=t.match(Kf).map(w=>{const _=w[0];if(_==="p"||_==="P"){const P=Nf[_];return P(w,i.formatLong)}return w}).join("").match(qf).map(w=>{if(w==="''")return{isToken:!1,value:"'"};const _=w[0];if(_==="'")return{isToken:!1,value:Zf(w)};if(fs[_])return{isToken:!0,value:w};if(_.match(Jf))throw new RangeError("Format string contains an unescaped latin alphabet character `"+_+"`");return{isToken:!1,value:w}});i.localize.preprocessor&&(c=i.localize.preprocessor(a,c));const l={firstWeekContainsDate:o,weekStartsOn:s,locale:i};return c.map(w=>{if(!w.isToken)return w.value;const _=w.value;(!(n!=null&&n.useAdditionalWeekYearTokens)&&Gf(_)||!(n!=null&&n.useAdditionalDayOfYearTokens)&&Hf(_))&&Yf(_,t,String(e));const P=fs[_[0]];return P(a,_,i.localize,l)}).join("")}function Zf(e){const t=e.match(Xf);return t?t[1].replace(Qf,"'"):e}const em="https://www.linkedin.com/in/wilton-software-engineer",tm=[{kind:"professional",company:"Platform Science",formerly:"Trimble",startDate:"2024-05-01",endDate:"At the moment",languages:["Java","Kotlin","Python","Kafka","GraphQL","Terraform","TypeScript","Angular","React","React Native","Lua"],databases:["Redis","PostgreSQL","DynamoDB"],text:{EN:{title:"Senior Software Engineer",description:"Started at Trimble; the Mobility division I work in was acquired by Platform Science — same team and product, new company. Building Vfleets, a fleet management platform: facial recognition and route calculation features with Java, Kotlin and Python on the back end and Angular, React and React Native on the front end. Focus on worker safety, event-driven microservices and well-tested code.",achievements:["Real-time AI detection of PPE / equipment compliance using Redis, a custom Lua script and Kafka across 3 microservices","Streaming of AI-detected violations to dashboards via WebSocket (Django)","Self-service driver photo registration with facial recognition and time-limited URLs","Driving-event category propagation (fatigue, distraction, speeding) with Java/Kotlin, Kafka and Redis","Snapshot-to-video pipeline on AWS Lambda (Python), provisioned with Terraform (SQS, S3, Lambda) and GitHub Actions","GraphQL adoption to cut over-fetching"],projects:["Vfleets — facial recognition & route calculation","PPE detection","Driver photo registration","Event category propagation","Snapshot-to-video pipeline"],learnings:["Event-driven microservices with Kafka","Redis + Lua for performance","Infrastructure as Code with Terraform","CI/CD with GitHub Actions","Integrating AI into real-time products"]},BR:{title:"Engenheiro de Software Sênior",description:"Comecei na Trimble; a divisão de Mobility em que trabalho foi vendida para a Platform Science — mesmo time e produto, nova empresa. Construindo o Vfleets, uma plataforma de gestão de frotas: funcionalidades de reconhecimento facial e cálculo de rotas com Java, Kotlin e Python no back-end e Angular, React e React Native no front-end. Foco em segurança do trabalhador, microsserviços orientados a eventos e código bem testado.",achievements:["Detecção em tempo real, com IA, de EPIs / conformidade de equipamentos usando Redis, um script Lua próprio e Kafka em 3 microsserviços","Streaming das violações detectadas pela IA para dashboards via WebSocket (Django)","Cadastro de foto do motorista em autoatendimento, com reconhecimento facial e URLs com tempo limitado","Propagação de categorias de eventos de direção (fadiga, distração, excesso de velocidade) com Java/Kotlin, Kafka e Redis","Pipeline de snapshots para vídeo em AWS Lambda (Python), provisionado com Terraform (SQS, S3, Lambda) e GitHub Actions","Adoção de GraphQL para reduzir over-fetching"],projects:["Vfleets — reconhecimento facial e cálculo de rotas","Detecção de EPIs","Cadastro de foto do motorista","Propagação de categorias de eventos","Pipeline de snapshots para vídeo"],learnings:["Microsserviços orientados a eventos com Kafka","Redis + Lua para performance","Infraestrutura como código com Terraform","CI/CD com GitHub Actions","IA integrada a produtos em tempo real"]},ES:{title:"Ingeniero de Software Sénior",description:"Empecé en Trimble; la división de Mobility en la que trabajo fue adquirida por Platform Science — mismo equipo y producto, nueva empresa. Construyendo Vfleets, una plataforma de gestión de flotas: funcionalidades de reconocimiento facial y cálculo de rutas con Java, Kotlin y Python en el back-end y Angular, React y React Native en el front-end. Enfoque en la seguridad del trabajador, microservicios orientados a eventos y código bien probado.",achievements:["Detección en tiempo real, con IA, de EPP / cumplimiento de equipos usando Redis, un script Lua propio y Kafka en 3 microservicios","Streaming de las infracciones detectadas por la IA a dashboards vía WebSocket (Django)","Registro de foto del conductor en autoservicio, con reconocimiento facial y URLs de tiempo limitado","Propagación de categorías de eventos de conducción (fatiga, distracción, exceso de velocidad) con Java/Kotlin, Kafka y Redis","Pipeline de snapshots a video en AWS Lambda (Python), aprovisionado con Terraform (SQS, S3, Lambda) y GitHub Actions","Adopción de GraphQL para reducir el over-fetching"],projects:["Vfleets — reconocimiento facial y cálculo de rutas","Detección de EPP","Registro de foto del conductor","Propagación de categorías de eventos","Pipeline de snapshots a video"],learnings:["Microservicios orientados a eventos con Kafka","Redis + Lua para rendimiento","Infraestructura como código con Terraform","CI/CD con GitHub Actions","IA integrada a productos en tiempo real"]}}},{kind:"professional",company:"IBM",startDate:"2022-11-01",endDate:"2024-04-30",languages:["Java","Python","Terraform","CloudFormation","Step Functions","Lambda","ECS"],databases:["RDS Aurora","PostgreSQL","DynamoDB","OpenSearch","Athena"],text:{EN:{title:"Software Application Developer",description:"Cloud-native solutions on AWS for Itaú, one of the largest banks in Brazil: process automation, international exchange (SWIFT), account opening and customer segmentation. TDD with mutation testing, and mentoring colleagues on AWS and clean code.",achievements:["Serverless report automation (S3, Lambda, Step Functions, RDS) that replaced the manual work of 10+ people per branch","Reconciliation of lost SWIFT messages across OpenSearch, PostgreSQL and Aurora, with safe reprocessing via Lambda + SQS","Java BFFs on ECS behind API Gateway, ALB and CloudFront handling ~150k requests/day, with SLAs monitored in CloudWatch, Splunk and Grafana","Segment targeting: parallelized lookups made responses 2s faster and raised account-opening completion by 4%","Rules engine (Step Functions + DynamoDB) evolved into an Athena data mesh with ML","Mentored colleagues on AWS, Terraform and SOLID"],projects:["Report automation for bank branches","SWIFT message reconciliation","Account opening BFF","Customer segment targeting"],learnings:["TDD and mutation testing","Serverless architecture on AWS","Banking integrations (SWIFT)","Observability and SLAs","Mentoring"]},BR:{title:"Desenvolvedor de Aplicações",description:"Soluções cloud-native na AWS para o Itaú: automação de processos, câmbio internacional (SWIFT), abertura de contas e segmentação de clientes. TDD com testes de mutação e mentoria de colegas em AWS e código limpo.",achievements:["Automação serverless de relatórios (S3, Lambda, Step Functions, RDS) que substituiu o trabalho manual de mais de 10 pessoas por agência","Reconciliação de mensagens SWIFT perdidas entre OpenSearch, PostgreSQL e Aurora, com reprocessamento seguro via Lambda + SQS","BFFs em Java no ECS atrás de API Gateway, ALB e CloudFront com ~150 mil requisições/dia e SLAs monitorados em CloudWatch, Splunk e Grafana","Direcionamento por segmento: consultas paralelizadas deixaram a resposta 2s mais rápida e aumentaram em 4% a conclusão de abertura de contas","Motor de regras (Step Functions + DynamoDB) evoluído para um data mesh em Athena com ML","Mentoria de colegas em AWS, Terraform e SOLID"],projects:["Automação de relatórios das agências","Reconciliação de mensagens SWIFT","BFF de abertura de contas","Direcionamento por segmento de clientes"],learnings:["TDD e testes de mutação","Arquitetura serverless na AWS","Integrações bancárias (SWIFT)","Observabilidade e SLAs","Mentoria"]},ES:{title:"Desarrollador de Aplicaciones",description:"Soluciones cloud-native en AWS para Itaú, uno de los mayores bancos de Brasil: automatización de procesos, cambio internacional (SWIFT), apertura de cuentas y segmentación de clientes. TDD con pruebas de mutación y mentoría a colegas en AWS y código limpio.",achievements:["Automatización serverless de informes (S3, Lambda, Step Functions, RDS) que reemplazó el trabajo manual de más de 10 personas por sucursal","Conciliación de mensajes SWIFT perdidos entre OpenSearch, PostgreSQL y Aurora, con reprocesamiento seguro vía Lambda + SQS","BFFs en Java sobre ECS detrás de API Gateway, ALB y CloudFront con ~150 mil solicitudes/día y SLAs monitoreados en CloudWatch, Splunk y Grafana","Segmentación: consultas paralelizadas hicieron la respuesta 2s más rápida y aumentaron en un 4% la finalización de apertura de cuentas","Motor de reglas (Step Functions + DynamoDB) evolucionado a un data mesh en Athena con ML","Mentoría a colegas en AWS, Terraform y SOLID"],projects:["Automatización de informes de sucursales","Conciliación de mensajes SWIFT","BFF de apertura de cuentas","Segmentación de clientes"],learnings:["TDD y pruebas de mutación","Arquitectura serverless en AWS","Integraciones bancarias (SWIFT)","Observabilidad y SLAs","Mentoría"]}}},{kind:"professional",company:"EVOP",startDate:"2019-06-01",endDate:"2022-07-31",languages:["Java","Spring Boot","Angular","Kafka","RabbitMQ","SQS","JSF"],databases:["PostgreSQL","MySQL"],text:{EN:{title:"Software Engineer",description:"Full-stack developer on an ERP for construction companies, evolving a monolith toward cloud and microservices with Java (Spring) and Angular.",achievements:["Java report engine library to generate and read Excel and PDF files","Billing microservice integrated with the monolith via Kafka, RabbitMQ, SQS and ASAAS webhooks","HR dashboard in Java and Angular","Cost-apportionment feature with Spring Boot, MVC and Security"],projects:["Excel/PDF report engine","ASAAS billing microservice","HR dashboard","Cost apportionment"],learnings:["Spring ecosystem (Boot, MVC, Security)","Messaging with Kafka, RabbitMQ and SQS","Monolith-to-microservices evolution","Payment gateway integration"]},BR:{title:"Engenheiro de Software",description:"Desenvolvedor full-stack em um ERP para construtoras, evoluindo um monólito para cloud e microsserviços com Java (Spring) e Angular.",achievements:["Biblioteca Java de geração e leitura de relatórios em Excel e PDF","Microsserviço de cobrança integrado ao monólito via Kafka, RabbitMQ, SQS e webhooks do ASAAS","Dashboard de RH em Java e Angular","Funcionalidade de rateio de custos com Spring Boot, MVC e Security"],projects:["Motor de relatórios Excel/PDF","Microsserviço de cobrança ASAAS","Dashboard de RH","Rateio de custos"],learnings:["Ecossistema Spring (Boot, MVC, Security)","Mensageria com Kafka, RabbitMQ e SQS","Evolução de monólito para microsserviços","Integração com gateway de pagamento"]},ES:{title:"Ingeniero de Software",description:"Desarrollador full-stack en un ERP para constructoras, evolucionando un monolito hacia la nube y microservicios con Java (Spring) y Angular.",achievements:["Biblioteca Java para generar y leer informes en Excel y PDF","Microservicio de cobros integrado al monolito vía Kafka, RabbitMQ, SQS y webhooks de ASAAS","Dashboard de RR. HH. en Java y Angular","Funcionalidad de prorrateo de costos con Spring Boot, MVC y Security"],projects:["Motor de informes Excel/PDF","Microservicio de cobros ASAAS","Dashboard de RR. HH.","Prorrateo de costos"],learnings:["Ecosistema Spring (Boot, MVC, Security)","Mensajería con Kafka, RabbitMQ y SQS","Evolución de monolito a microservicios","Integración con pasarela de pagos"]}}},{kind:"professional",company:"EngeFour Jr.",startDate:"2016-09-01",endDate:"2017-08-31",languages:["Java","Kotlin","Android","C++","Drogon","PHP"],databases:["MySQL","MongoDB"],text:{EN:{title:"Software Developer",description:"Junior enterprise: native Android apps in Java and Kotlin, microservices in C++ with the Drogon framework and the company website in PHP.",achievements:["Native Android apps in Java and Kotlin","Microservices in C++ with Drogon","Company website in PHP"],projects:["Sales management app","Room reservation system","University restaurant menu app","EngeFour Jr. website"],learnings:["Mobile development from scratch","Gathering client requirements","Microservices in C++"]},BR:{title:"Desenvolvedor de Software",description:"Empresa júnior: apps Android nativos em Java e Kotlin, microsserviços em C++ com o framework Drogon e o site da empresa em PHP.",achievements:["Apps Android nativos em Java e Kotlin","Microsserviços em C++ com Drogon","Site da empresa em PHP"],projects:["App de gestão de vendas","Sistema de reserva de salas","App do cardápio do restaurante universitário","Site da EngeFour Jr."],learnings:["Desenvolvimento mobile do zero","Levantamento de requisitos com clientes","Microsserviços em C++"]},ES:{title:"Desarrollador de Software",description:"Empresa júnior: apps Android nativas en Java y Kotlin, microservicios en C++ con el framework Drogon y el sitio web de la empresa en PHP.",achievements:["Apps Android nativas en Java y Kotlin","Microservicios en C++ con Drogon","Sitio web de la empresa en PHP"],projects:["App de gestión de ventas","Sistema de reserva de salas","App del menú del comedor universitario","Sitio web de EngeFour Jr."],learnings:["Desarrollo móvil desde cero","Levantamiento de requisitos con clientes","Microservicios en C++"]}}},{kind:"academic",company:"Estácio",startDate:"2024-02-01",endDate:"2025-08-31",languages:["React Native","Python","PySpark","Hadoop","Arduino","MQTT"],databases:["AWS RDS Aurora","S3","DynamoDB"],text:{EN:{title:"Computer Science Professor",description:"Taught practical and theoretical classes on mobile development (React Native), cloud computing (AWS), IoT with MQTT, cybersecurity (OWASP) and big data (PySpark, Hadoop), guiding students through hands-on projects.",achievements:[],projects:["React Native: from zero to MVP","AWS cloud labs","Industry 4.0 IoT with Arduino and MQTT","Cybersecurity with OWASP","Big data with PySpark and Hadoop"],learnings:["Teaching technical subjects","Mentoring students on real projects"]},BR:{title:"Professor de Ciência da Computação",description:"Aulas práticas e teóricas de desenvolvimento mobile (React Native), computação em nuvem (AWS), IoT com MQTT, cibersegurança (OWASP) e big data (PySpark, Hadoop), guiando os alunos em projetos práticos.",achievements:[],projects:["React Native: do zero ao MVP","Laboratórios de cloud na AWS","IoT para Indústria 4.0 com Arduino e MQTT","Cibersegurança com OWASP","Big data com PySpark e Hadoop"],learnings:["Ensino de disciplinas técnicas","Mentoria de alunos em projetos reais"]},ES:{title:"Profesor de Ciencias de la Computación",description:"Clases prácticas y teóricas de desarrollo móvil (React Native), computación en la nube (AWS), IoT con MQTT, ciberseguridad (OWASP) y big data (PySpark, Hadoop), guiando a los alumnos en proyectos prácticos.",achievements:[],projects:["React Native: de cero a MVP","Laboratorios de cloud en AWS","IoT para Industria 4.0 con Arduino y MQTT","Ciberseguridad con OWASP","Big data con PySpark y Hadoop"],learnings:["Enseñanza de materias técnicas","Mentoría de alumnos en proyectos reales"]}}},{kind:"academic",company:"UFMS",startDate:"2020-03-01",endDate:"2022-09-30",languages:["Python","C++","Java"],databases:[],text:{EN:{title:"Master's in Computer Science",description:"Research on the Dynamic Vehicle Routing Problem: designed an algorithm to solve it, evaluated with a metric based on fuel cost (km/l) and the number of vehicles used.",achievements:["Thesis: an algorithm for the dynamic vehicle routing problem","Paper published at CBA 2020 (Brazilian Automation Congress)"],projects:["Dynamic vehicle routing algorithm"],learnings:["Optimization and operations research","Scientific research and writing"]},BR:{title:"Mestrado em Ciência da Computação",description:"Pesquisa sobre o Problema de Roteamento Dinâmico de Veículos: projetei um algoritmo para resolvê-lo, avaliado por uma métrica baseada no custo de combustível (km/l) e no número de veículos utilizados.",achievements:["Dissertação: algoritmo para o problema de roteamento dinâmico de veículos","Artigo publicado no CBA 2020 (Congresso Brasileiro de Automática)"],projects:["Algoritmo de roteamento dinâmico de veículos"],learnings:["Otimização e pesquisa operacional","Pesquisa e escrita científica"]},ES:{title:"Máster en Ciencias de la Computación",description:"Investigación sobre el Problema de Ruteo Dinámico de Vehículos: diseñé un algoritmo para resolverlo, evaluado con una métrica basada en el costo de combustible (km/l) y el número de vehículos utilizados.",achievements:["Tesis: algoritmo para el problema de ruteo dinámico de vehículos","Artículo publicado en el CBA 2020 (Congreso Brasileño de Automática)"],projects:["Algoritmo de ruteo dinámico de vehículos"],learnings:["Optimización e investigación operativa","Investigación y escritura científica"]}}},{kind:"academic",company:"UFMS",startDate:"2015-01-01",endDate:"2019-12-31",languages:["C","C++","Java","Python","JavaScript","PHP","MATLAB","Assembly"],databases:["MySQL","PostgreSQL"],text:{EN:{title:"Bachelor's in Computer Engineering",description:"Computer engineering: software development, hardware, algorithms, data structures and engineering math. Final project on the design of controllers for static power converters.",achievements:[],projects:["Final project: controllers for static power converters"],learnings:["Algorithms and data structures","Hardware–software integration","Engineering math"]},BR:{title:"Engenharia da Computação",description:"Engenharia da computação: desenvolvimento de software, hardware, algoritmos, estruturas de dados e matemática para engenharia. TCC sobre projeto de controladores para conversores estáticos de potência.",achievements:[],projects:["TCC: controladores para conversores estáticos de potência"],learnings:["Algoritmos e estruturas de dados","Integração hardware–software","Matemática para engenharia"]},ES:{title:"Ingeniería en Computación",description:"Ingeniería en computación: desarrollo de software, hardware, algoritmos, estructuras de datos y matemáticas para ingeniería. Proyecto final sobre el diseño de controladores para convertidores estáticos de potencia.",achievements:[],projects:["Proyecto final: controladores para convertidores estáticos de potencia"],learnings:["Algoritmos y estructuras de datos","Integración hardware–software","Matemáticas para ingeniería"]}}}];function oe(e){const[t,n=1,r=1]=e.split("-").map(Number);return new Date(t,n-1,r)}const Zt=e=>e.endDate==="At the moment",nr=e=>Zt(e)?new Date:oe(e.endDate),Uc=tm.map((e,t)=>({...e,id:`${e.kind}-${t}`})).sort((e,t)=>oe(e.startDate).getTime()-oe(t.startDate).getTime()),bs=new Map;function mi(e){let t=bs.get(e);return t||(t=Uc.map(({text:n,...r})=>({...r,...n[e],linkedInUrl:em})),bs.set(e,t)),t}function zn(e,t){if(!e.formerly)return e.company;const n={EN:"formerly",BR:"ex-",ES:"ex-"}[t];return`${e.company} (${n}${t==="EN"?" ":""}${e.formerly})`}const pi=e=>(e.company??"").split(" - ")[0];function Hn(e,t){const n=i=>i.toLocaleDateString(pr(t),{year:"numeric",month:"short"}),r={EN:"Present",BR:"Atual",ES:"Actualidad"}[t];return`${n(oe(e.startDate))} – ${Zt(e)?r:n(nr(e))}`}function Gn(e,t){const n=Math.max(1,Hc(nr(e),oe(e.startDate))+1),r=Math.floor(n/12),i=n%12,o={EN:{y:["year","years"],m:["month","months"],and:"and"},BR:{y:["ano","anos"],m:["mês","meses"],and:"e"},ES:{y:["año","años"],m:["mes","meses"],and:"y"}}[t],s=[];return r&&s.push(`${r} ${o.y[r>1?1:0]}`),i&&s.push(`${i} ${o.m[i>1?1:0]}`),s.join(` ${o.and} `)}function qc(e){const t=oe(e.startDate).getTime(),n=nr(e).getTime();return Uc.filter(r=>r.kind!==e.kind&&oe(r.startDate).getTime()<=n&&nr(r).getTime()>=t)}const nm=Ve`
    from { opacity: 0; transform: translate3d(0, 24px, 0); }
    to   { opacity: 1; transform: none; }
`,rm=Ve`
    0%, 100% { transform: translateY(0) rotate(-1deg); }
    50%      { transform: translateY(-14px) rotate(1deg); }
`,im=Ve`
    0%, 100% { transform: translateY(0) scale(1, 1); }
    25%      { transform: translateY(-3px) scale(1.01, 0.985); }
    75%      { transform: translateY(1px) scale(0.995, 1.01); }
`,om=Ve`
    0%, 60%, 100% { transform: rotate(0deg); }
    10%, 30%      { transform: rotate(14deg); }
    20%           { transform: rotate(-8deg); }
    40%           { transform: rotate(-4deg); }
    50%           { transform: rotate(10deg); }
`,sm=Ve`
    0%, 100% { transform: translate(0, 0) scale(1); }
    33%      { transform: translate(30px, -40px) scale(1.1); }
    66%      { transform: translate(-25px, 20px) scale(0.95); }
`,am=Ve`
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
`,Kc=Ve`
    from { opacity: 0; transform: translateY(10px) scale(0.92); }
    to   { opacity: 1; transform: none; }
`,cm=Ve`
    0%   { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.55); }
    70%  { box-shadow: 0 0 0 14px rgba(139, 92, 246, 0); }
    100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
`,mt=We`
    @media (prefers-reduced-motion: reduce) {
        animation: none !important;
    }
`,lm=e=>We`
    opacity: 0;
    animation: ${nm} 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${e}ms forwards;
    @media (prefers-reduced-motion: reduce) {
        opacity: 1;
        animation: none;
    }
`,um=g.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`,dm=g.div`
    position: relative;
    z-index: 1;
    width: 100%;
    min-height: calc(100vh - 80px - 3rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`,hm=g.div`
    position: relative;
    z-index: 1;
    width: 100%;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`,fm=g.div`
    /* full viewport width, clipped at the screen edges so the blur never causes horizontal scroll */
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 100vw;
    transform: translateX(-50%);
    overflow: hidden;
    pointer-events: none;
    z-index: 0;

    span {
        position: absolute;
        border-radius: 50%;
        filter: blur(60px);
        opacity: 0.35;
        animation: ${sm} 18s ease-in-out infinite;
        ${mt}
    }
    span:nth-child(1) { width: 320px; height: 320px; background: ${p.primary}; top: 5%; left: 10%; }
    span:nth-child(2) { width: 260px; height: 260px; background: ${p.secondary}; bottom: 5%; right: 15%; animation-delay: -6s; }
    span:nth-child(3) { width: 180px; height: 180px; background: ${p.accent}; top: 40%; left: 45%; opacity: 0.18; animation-delay: -12s; }
`,mm=g.div`
    position: relative;
    z-index: 1;
    font-family: ${D.fontFamily.primary};
`,pm=g.div`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.9rem;
    margin-bottom: 1.5rem;
    border-radius: 999px;
    font-size: 0.95rem;
    font-weight: 700;
    color: ${p.text.primary};
    background: ${p.gradients.card};
    border: 1px solid rgba(139, 92, 246, 0.35);
`,gm=g.span`
    display: inline-block;
    transform-origin: 70% 70%;
    animation: ${om} 2.4s ease-in-out 1s infinite;
    ${mt}
`,ym=g.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`,bm=g.h1`
    margin: 0;
    font-size: clamp(2.6rem, 6vw, 4rem);
    line-height: 1.05;
    font-weight: 700;
    background: ${p.gradients.accent};
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 8s ease infinite;
    ${mt}

    @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50%      { background-position: 100% 50%; }
    }
`,vm=g.div`
    margin-top: 1.25rem;
    min-height: 1.6em;
    font-size: 1.15rem;
    color: ${p.text.secondary};
`,Xc=g.span`
    display: inline-block;
    width: 2px;
    height: 1.1em;
    margin-left: 3px;
    vertical-align: text-bottom;
    background: ${p.secondary};
    animation: ${am} 1s step-end infinite;
`,xm=g.div`
    display: flex;
    gap: 0.9rem;
    margin-top: 1.5rem;
    justify-content: center;

    a {
        display: grid;
        place-items: center;
        width: 44px;
        height: 44px;
        border-radius: 12px;
        background: ${p.cardOverlay};
        border: 1px solid ${p.borderLight};
        transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;

        &:hover {
            transform: translateY(-4px) rotate(-4deg);
            border-color: ${p.primary};
            background: rgba(139, 92, 246, 0.15);
        }
        img { width: 24px; height: 24px; }
    }
`,wm=g.button`
    margin-top: 2rem;
    padding: 0.9rem 1.6rem;
    border-radius: 14px;
    font-size: 1rem;
    font-weight: 700;
    background: ${p.gradients.primary};
    color: ${p.text.primary};
    animation: ${cm} 2.4s ease-out 1s infinite;
    ${mt}

    span { display: inline-block; transition: transform 0.25s ease; }
    &:hover span { transform: translateX(4px); }
`,Qc="@media (min-width: 900px)",_m=g.div`
    position: relative;
    z-index: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.9rem;
    ${lm(300)}

    ${Qc} {
        flex-direction: row;
        justify-content: center;
        gap: 2.5rem;
    }
`,Sm=g.button`
    background: none;
    padding: 0;
    border-radius: 50%;
    flex-shrink: 0;
    width: min(100%, 400px, 52vh);
    animation: ${rm} 6s ease-in-out infinite;
    ${mt}

    &:hover { transform: none; box-shadow: none; }

    img {
        display: block;
        width: 100%;
        height: auto;
        transform-origin: 50% 85%;
        animation: ${e=>e.$talking?We`${im} 0.32s ease-in-out infinite`:"none"};
        ${mt}
    }

    @media (max-width: ${I.tablet}) {
        width: min(80%, 320px);
    }
`,$m=g.div`
    position: relative;
    width: min(100%, 420px);
    padding: 1rem 1.1rem;
    border-radius: 18px;
    text-align: left;
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(139, 92, 246, 0.45);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(6, 182, 212, 0.08) inset;
    backdrop-filter: blur(8px);
    animation: ${Kc} 0.35s cubic-bezier(0.22, 1, 0.36, 1);
    ${mt}

    /* tail: points up to the avatar (phones) or left to it (wide screens) */
    &::after {
        content: '';
        position: absolute;
        top: -9px;
        left: 50%;
        width: 16px;
        height: 16px;
        background: rgba(15, 23, 42, 0.95);
        border-left: 1px solid rgba(139, 92, 246, 0.45);
        border-top: 1px solid rgba(139, 92, 246, 0.45);
        transform: translateX(-50%) rotate(45deg);
    }

    ${Qc} {
        flex-shrink: 0;
        width: 420px;
        margin-bottom: 5rem; /* lift the tail to the avatar's face */

        &::after {
            top: 50%;
            left: -9px;
            border-top: none;
            border-bottom: 1px solid rgba(139, 92, 246, 0.45);
            transform: translateY(-50%) rotate(45deg);
        }
    }
`,km=g.p`
    margin: 0;
    min-height: 3.2em;
    font-size: 0.98rem;
    line-height: 1.55;
    color: ${p.text.primary};
    cursor: pointer;
`,Pm=g.div`
    margin-top: 0.4rem;
    font-size: 0.75rem;
    color: ${p.text.muted};
`,Tm=g.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.85rem;
`,Cm=g.button`
    opacity: 0;
    animation: ${Kc} 0.35s ease forwards;
    animation-delay: ${e=>(e.$index??0)*70}ms;
    padding: 0.45rem 0.8rem;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 600;
    color: ${p.text.primary};
    background: ${e=>e.$ghost?"transparent":"rgba(139, 92, 246, 0.18)"};
    border: 1px solid ${e=>e.$ghost?p.borderLight:"rgba(139, 92, 246, 0.5)"};

    &:hover {
        background: ${p.gradients.primary};
        border-color: transparent;
        transform: translateY(-2px);
        box-shadow: 0 8px 18px rgba(139, 92, 246, 0.3);
    }

    @media (prefers-reduced-motion: reduce) {
        opacity: 1;
        animation: none;
    }
`,An=e=>e.kind==="professional"?"💼":"🎓";function Am({onNavigate:e,openSignal:t}){const[n]=et(),r=ye(),[i,o]=F("greet"),[s,a]=F(0),[c,l]=F(null),[u,d]=F(null),{repos:h,error:m,loading:b}=zh(i==="projList"||i==="proj"),v=($,B=0)=>{o($),a(B)},x=()=>v("menu");X(()=>{t>0&&x()},[t]);const y=$=>{window.open($,"_blank","noopener,noreferrer"),v("bye")},w=jc[n],_=[...mi(n)].reverse(),P=$=>{var ue;const B=qc($).map(pi),ne=r({EN:`${An($)} ${$.title} at ${zn($,n)} — ${Hn($,n)} (${Gn($,n)}).`,BR:`${An($)} ${$.title} na ${zn($,n)} — ${Hn($,n)} (${Gn($,n)}).`,ES:`${An($)} ${$.title} en ${zn($,n)} — ${Hn($,n)} (${Gn($,n)}).`})+(B.length?" "+r({EN:"At the same time: ",BR:"Ao mesmo tempo: ",ES:"Al mismo tiempo: "})+B.join(", ")+".":""),ae=((ue=$.achievements)!=null&&ue.length?$.achievements:$.projects).slice(0,3);return[ne,$.description,`⭐ ${r({EN:"Highlights",BR:"Destaques",ES:"Destacados"})}: ${ae.join(" · ")}.`,`🧰 Stack: ${[...$.languages,...$.databases].join(", ")}.`]},k=$=>{var Wt;const B=new Date($.pushed_at).toLocaleDateString(pr(n),{year:"numeric",month:"short"}),ne=(Wt=$.description)==null?void 0:Wt.trim(),ae=ne?/[.!?…]$/.test(ne)?ne:`${ne}.`:r({EN:"No description yet — but the code speaks for itself!",BR:"Ainda sem descrição — mas o código fala por si!",ES:"Aún sin descripción — ¡pero el código habla por sí mismo!"}),ue=$.language?r({EN:` Mostly written in ${$.language}.`,BR:` Feito principalmente em ${$.language}.`,ES:` Hecho principalmente en ${$.language}.`}):"";return[`🚀 ${$.name}: ${ae}${ue} ⭐ ${$.stargazers_count} · ${r({EN:"updated",BR:"atualizado em",ES:"actualizado en"})} ${B}.`]},C=(()=>{switch(i){case"greet":return[r({EN:"Hi! I'm Wilton 👋 Click on me and I'll show you around — or scroll down to meet me.",BR:"Oi! Eu sou o Wilton 👋 Clique em mim que eu te mostro tudo — ou role a página para me conhecer.",ES:"¡Hola! Soy Wilton 👋 Haz clic en mí y te muestro todo — o desliza para conocerme."})];case"menu":return[r({EN:"Awesome! What would you like to see?",BR:"Show! O que você quer conhecer?",ES:"¡Genial! ¿Qué te gustaría ver?"})];case"about":return w.map($=>`${$.icon} ${$.text}`);case"expList":return[r({EN:"Which experience are you curious about? I can tell you right here.",BR:"Qual experiência te interessa? Te conto por aqui mesmo.",ES:"¿Qué experiencia te interesa? Te cuento aquí mismo."})];case"exp":return c?P(mi(n).find($=>$.id===c.id)??c):[""];case"projList":return m?[r({EN:"GitHub isn't answering right now 😅 You can still see everything on the projects page.",BR:"O GitHub não respondeu agora 😅 Mas você pode ver tudo na página de projetos.",ES:"GitHub no responde ahora 😅 Pero puedes ver todo en la página de proyectos."})]:b?[r({EN:"Fetching my GitHub projects…",BR:"Buscando meus projetos no GitHub…",ES:"Buscando mis proyectos en GitHub…"})]:[r({EN:"Here are some of my projects. Which one should I tell you about?",BR:"Esses são alguns dos meus projetos. Sobre qual quer saber?",ES:"Estos son algunos de mis proyectos. ¿Sobre cuál quieres saber?"})];case"proj":return u?k(u):[""];case"bye":return[r({EN:"Opened in a new tab. Anything else? 😉",BR:"Abri numa nova aba. Mais alguma coisa? 😉",ES:"Lo abrí en una nueva pestaña. ¿Algo más? 😉"})]}})(),T=C[Math.min(s,C.length-1)],M=Math.min(22,Math.max(8,3500/Math.max(1,T.length))),{visible:V,done:j,skip:E}=jh(T,M),W=s<C.length-1,z={next:r({EN:"Next ›",BR:"Próximo ›",ES:"Siguiente ›"}),menu:r({EN:"↩ Menu",BR:"↩ Menu",ES:"↩ Menú"})},Z=W?[{label:z.next,onClick:()=>a($=>$+1)}]:[],H={label:z.menu,onClick:x,ghost:!0},_e=(()=>{switch(i){case"greet":return[{label:r({EN:"Show me around ›",BR:"Me mostra ›",ES:"Muéstrame ›"}),onClick:x}];case"menu":return[{label:r({EN:"🧐 About me",BR:"🧐 Sobre mim",ES:"🧐 Sobre mí"}),onClick:()=>v("about")},{label:r({EN:"🚀 Projects",BR:"🚀 Projetos",ES:"🚀 Proyectos"}),onClick:()=>v("projList")},{label:r({EN:"💼 Experiences",BR:"💼 Experiências",ES:"💼 Experiencias"}),onClick:()=>v("expList")},{label:"🔗 LinkedIn",onClick:()=>y(cn.linkedin)},{label:"🐙 GitHub",onClick:()=>y(cn.github)},{label:r({EN:"📬 Contact",BR:"📬 Contato",ES:"📬 Contacto"}),onClick:()=>e("contact")}];case"about":return[...Z,{label:r({EN:"Read it all ↓",BR:"Ler tudo ↓",ES:"Leer todo ↓"}),ghost:!0,onClick:()=>{var $;return($=document.getElementById("about"))==null?void 0:$.scrollIntoView({behavior:"smooth"})}},H];case"expList":return[..._.map($=>({label:`${An($)} ${pi($)} · ${oe($.startDate).getFullYear()}`,onClick:()=>{l($),v("exp")}})),{label:r({EN:"🗺️ Full timeline",BR:"🗺️ Linha do tempo",ES:"🗺️ Línea de tiempo"}),ghost:!0,onClick:()=>e("experiences")},H];case"exp":return[...Z,{label:r({EN:"📍 See on timeline",BR:"📍 Ver na linha do tempo",ES:"📍 Ver en la línea de tiempo"}),ghost:!0,onClick:()=>e("experiences",c==null?void 0:c.id)},{label:r({EN:"↩ Other experience",BR:"↩ Outra experiência",ES:"↩ Otra experiencia"}),ghost:!0,onClick:()=>v("expList")},H];case"projList":return[...(h??[]).slice(0,6).map($=>({label:`📁 ${$.name}`,onClick:()=>{d($),v("proj")}})),...b?[]:[{label:r({EN:"📂 See all projects",BR:"📂 Ver todos",ES:"📂 Ver todos"}),ghost:!0,onClick:()=>e("projects")}],H];case"proj":return[...u?[{label:r({EN:"Open on GitHub ↗",BR:"Abrir no GitHub ↗",ES:"Abrir en GitHub ↗"}),onClick:()=>y(u.html_url)}]:[],...u!=null&&u.homepage?[{label:"🌐 Demo ↗",onClick:()=>y(u.homepage)}]:[],{label:r({EN:"↩ Other project",BR:"↩ Outro projeto",ES:"↩ Otro proyecto"}),ghost:!0,onClick:()=>v("projList")},H];case"bye":return[{label:z.menu,onClick:x}]}})();return f(_m,{children:[f(Sm,{$talking:!j,onClick:x,"aria-label":r({EN:"Open the guide menu",BR:"Abrir o menu do guia",ES:"Abrir el menú del guía"}),children:f("img",{src:Fh,alt:""})}),f($m,{role:"status","aria-live":"polite",children:[f(km,{onClick:E,title:j?void 0:r({EN:"Click to skip",BR:"Clique para pular",ES:"Haz clic para saltar"}),children:[V,!j&&f(Xc,{"aria-hidden":"true"})]}),C.length>1&&f(Pm,{children:[s+1," / ",C.length]}),j&&_e.length>0&&f(Tm,{children:_e.map(($,B)=>f(Cm,{$index:B,$ghost:$.ghost,onClick:$.onClick,children:$.label},$.label))})]},`${i}-${s}-${c==null?void 0:c.id}-${u==null?void 0:u.name}-${n}-${b}`)]})}const Em={up:"translate3d(0, 32px, 0)",left:"translate3d(-40px, 0, 0)",right:"translate3d(40px, 0, 0)",zoom:"scale(0.92)"},Dm=g.div`
    opacity: 0;
    transform: ${e=>Em[e.$direction]};
    transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
    transition-delay: ${e=>e.$delay}ms;
    will-change: opacity, transform;

    ${e=>e.$visible&&We`
        opacity: 1;
        transform: none;
    `}

    @media (prefers-reduced-motion: reduce) {
        opacity: 1;
        transform: none;
        transition: none;
    }
`;function Ae({children:e,direction:t="up",delay:n=0,className:r}){const i=he(null),[o,s]=F(!1);return X(()=>{const a=i.current;if(!a)return;if(typeof IntersectionObserver>"u"){s(!0);return}const c=new IntersectionObserver(([l])=>{l.isIntersecting&&(s(!0),c.disconnect())},{threshold:.15,rootMargin:"0px 0px -40px 0px"});return c.observe(a),()=>c.disconnect()},[]),f(Dm,{ref:i,className:r,$visible:o,$direction:t,$delay:n,children:e})}const Mm=e=>{var t;return(t=document.getElementById(e))==null?void 0:t.scrollIntoView({behavior:"smooth"})};function Rm(e){const[t,n]=F(0),[r,i]=F(""),[o,s]=F(!1);return X(()=>{n(0),i(""),s(!1)},[e]),X(()=>{const a=e[t%e.length];let c=o?35:70;!o&&r===a&&(c=1800),o&&r===""&&(c=300);const l=window.setTimeout(()=>{if(!o&&r===a)return s(!0);if(o&&r==="")return s(!1),n(u=>u+1);i(a.slice(0,r.length+(o?-1:1)))},c);return()=>window.clearTimeout(l)},[r,o,t,e]),r}function Lm({onNavigate:e=Mm}){const[t]=et(),n=ye(),[r,i]=F(0),o=Re(()=>n({EN:["Software Engineer · Back-end","Java · Python · TypeScript","AWS Certified Solutions Architect","Bringing AI into real products"],BR:["Engenheiro de Software · Back-end","Java · Python · TypeScript","AWS Certified Solutions Architect","Levando IA para produtos reais"],ES:["Ingeniero de Software · Back-end","Java · Python · TypeScript","AWS Certified Solutions Architect","Llevando IA a productos reales"]}),[t]),s=Rm(o),a=()=>{window.scrollTo({top:0,behavior:"smooth"}),i(c=>c+1)};return f(um,{children:[f(fm,{"aria-hidden":"true",children:[f("span",{}),f("span",{}),f("span",{})]}),f(dm,{children:f(Am,{onNavigate:e,openSignal:r})}),f(hm,{children:f(mm,{children:[f(Ae,{children:f(pm,{children:[f(gm,{children:"👋"}),n({EN:"Welcome!",BR:"Saudações!",ES:"¡Bienvenido!"})]})}),f(Ae,{delay:120,children:f(ym,{children:[f(bm,{children:["Wilton",f("br",{}),"Costa"]}),f("img",{src:Bh,alt:"",height:52,width:52})]})}),f(Ae,{delay:240,children:f(vm,{"aria-label":o[0],children:[s,f(Xc,{"aria-hidden":"true"})]})}),f(Ae,{delay:360,children:f(xm,{children:[f("a",{href:cn.linkedin,target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:f("img",{src:Fc,alt:""})}),f("a",{href:cn.github,target:"_blank",rel:"noreferrer","aria-label":"GitHub",children:f("img",{src:Nc,alt:""})})]})}),f(Ae,{delay:480,children:f(wm,{onClick:a,children:[n({EN:"Let's work together?",BR:"Vamos trabalhar juntos?",ES:"¿Trabajamos juntos?"})," ",f("span",{children:"→"})]})})]})})]})}const Vm=g.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem 1rem;
`,Im=g.div`
    display: inline-block;
    padding: 0.35rem 0.9rem;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.9rem;
    background: rgba(139, 92, 246, 0.15);
    border: 1px solid rgba(139, 92, 246, 0.35);
`,Bm=g.h2`
    margin: 0.8rem 0 2rem;
    font-size: clamp(2rem, 4vw, 2.8rem);
`,Om=g.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;

    @media (max-width: ${I.desktop}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${I.tablet}) {
        grid-template-columns: 1fr;
    }
`,Fm=g.div`
    height: 100%;
    padding: 1.4rem;
    border-radius: 16px;
    background: ${p.gradients.card};
    border: 1px solid ${p.borderLight};
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-6px);
        border-color: rgba(139, 92, 246, 0.5);
        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
    }

    span {
        display: inline-grid;
        place-items: center;
        width: 46px;
        height: 46px;
        margin-bottom: 0.9rem;
        border-radius: 12px;
        font-size: 1.5rem;
        background: rgba(15, 23, 42, 0.6);
        transition: transform 0.3s ease;
    }
    &:hover span { transform: rotate(-8deg) scale(1.1); }

    p {
        margin: 0;
        color: ${p.text.secondary};
        line-height: 1.6;
    }
`;function Nm(){const[e]=et(),t=ye();return f(Vm,{id:"about-content",children:[f(Ae,{children:[f(Im,{children:["🧐 ",t({EN:"About me",BR:"Sobre mim",ES:"Sobre mí"})]}),f(Bm,{children:"Wilton Costa"})]}),f(Om,{children:jc[e].map((n,r)=>f(Ae,{delay:r*90,children:f(Fm,{children:[f("span",{"aria-hidden":"true",children:n.icon}),f("p",{children:n.text})]})},n.icon+r))})]})}const jm=g.div`
  max-width: 600px;
  margin: ${S.xl} auto;
  padding: ${S.xl};
  background: ${p.gradients.card};
  border-radius: ${me.large};
  border: 1px solid ${p.borderLight};
  box-shadow: ${Le.card};
  backdrop-filter: blur(10px);
  
  @media (max-width: ${I.tablet}) {
    margin: ${S.lg} auto;
    padding: ${S.lg};
  }

  @media (max-width: ${I.mobile}) {
    margin: ${S.md} ${S.sm};
    padding: ${S.md};
  }
`,Wm=g.h2`
  color: ${p.text.primary};
  font-size: ${D.fontSize["2xl"]};
  margin-bottom: ${S.xl};
  text-align: center;
  background: ${p.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: ${D.fontWeight.semibold};

  @media (max-width: ${I.mobile}) {
    font-size: ${D.fontSize.xl};
    margin-bottom: ${S.lg};
  }
`,zm=g.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${S.lg};

  @media (max-width: ${I.tablet}) {
    gap: ${S.md};
  }

  @media (max-width: ${I.mobile}) {
    grid-template-columns: 1fr;
    gap: ${S.md};
  }
`,Lr=g.div`
  background: ${p.background.card};
  border-radius: ${me.medium};
  padding: ${S.lg} ${S.md};
  text-align: center;
  border: 1px solid ${p.borderLight};
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
    background: ${p.gradients.primary};
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${Le.hover};
    background: ${p.gradients.card};
  }

  @media (max-width: ${I.mobile}) {
    padding: ${S.md};
  }
`,Vr=g.div`
  font-size: ${D.fontSize["3xl"]};
  font-weight: ${D.fontWeight.bold};
  color: ${p.primary};
  margin-bottom: ${S.sm};
  font-family: ${D.fontFamily.mono};

  @media (max-width: ${I.mobile}) {
    font-size: ${D.fontSize["2xl"]};
  }
`,Ir=g.div`
  color: ${p.text.secondary};
  font-size: ${D.fontSize.sm};
  font-weight: ${D.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${I.mobile}) {
    font-size: ${D.fontSize.xs};
  }
`,Hm=g.div`
  max-width: 600px;
  margin: ${S.xl} auto;
  padding: ${S.xl};
  text-align: center;
  background: ${p.gradients.card};
  border-radius: ${me.large};
  border: 1px solid ${p.borderLight};
  color: ${p.primary};
  font-size: ${D.fontSize.lg};
  font-weight: ${D.fontWeight.medium};
  
  @media (max-width: ${I.tablet}) {
    margin: ${S.lg} auto;
    padding: ${S.lg};
  }

  @media (max-width: ${I.mobile}) {
    margin: ${S.md} ${S.sm};
    padding: ${S.md};
    font-size: ${D.fontSize.base};
  }
`;function Gm(){const[e,t]=F({repos:0,followers:0,following:0}),[n,r]=F(!0),i=ye();X(()=>{(async()=>{try{const c=await(await fetch("https://api.github.com/users/wiltoon")).json();t({repos:c.public_repos||0,followers:c.followers||0,following:c.following||0})}catch(a){console.error("Erro ao buscar dados do GitHub:",a)}finally{r(!1)}})()},[]);const o=i({EN:{title:"📊 GitHub Stats",loading:"🔄 Loading GitHub data...",repos:"Repositories",followers:"Followers",following:"Following"},BR:{title:"📊 Estatísticas GitHub",loading:"🔄 Carregando dados do GitHub...",repos:"Repositórios",followers:"Seguidores",following:"Seguindo"},ES:{title:"📊 Estadísticas de GitHub",loading:"🔄 Cargando datos de GitHub...",repos:"Repositorios",followers:"Seguidores",following:"Siguiendo"}});return n?f(Hm,{children:o.loading}):f(jm,{children:[f(Wm,{children:o.title}),f(zm,{children:[f(Lr,{children:[f(Vr,{children:e.repos}),f(Ir,{children:o.repos})]}),f(Lr,{children:[f(Vr,{children:e.followers}),f(Ir,{children:o.followers})]}),f(Lr,{children:[f(Vr,{children:e.following}),f(Ir,{children:o.following})]})]})]})}const Ym=g.div`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`,Um=g.div`
    display: inline-block;
    padding: 0.35rem 0.9rem;
    border-radius: 999px;
    font-weight: 700;
    font-size: 0.9rem;
    background: rgba(139, 92, 246, 0.15);
    border: 1px solid rgba(139, 92, 246, 0.35);
`,qm=g.h2`
    margin: 0.8rem 0 0.4rem;
    font-size: clamp(1.8rem, 4vw, 2.5rem);
`,Km=g.p`
    margin: 0 0 2.25rem;
    color: ${p.text.muted};
`,Xm=g.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    text-align: left;
    margin-bottom: 2.5rem;

    @media (max-width: ${I.desktop}) { grid-template-columns: repeat(2, 1fr); }
    @media (max-width: ${I.tablet})  { grid-template-columns: 1fr; }
`,Qm=g.div`
    height: 100%;
    padding: 1.25rem 1.3rem;
    border-radius: 16px;
    background: ${p.gradients.card};
    border: 1px solid ${p.borderLight};
    border-top: 3px solid ${e=>e.$accent};
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3);
    }

    h3 {
        margin: 0 0 0.9rem;
        font-size: 1.05rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`,Jm=g.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
`,vs=g.span`
    padding: 0.3rem 0.7rem;
    border-radius: 999px;
    font-size: 0.82rem;
    font-weight: ${e=>e.$strong?700:500};
    color: ${e=>e.$strong?p.text.primary:p.text.secondary};
    background: ${e=>e.$strong?`${e.$accent}2e`:"rgba(15, 23, 42, 0.55)"};
    border: 1px solid ${e=>e.$strong?`${e.$accent}88`:p.borderLight};
    transition: transform 0.2s ease, border-color 0.2s ease;

    &:hover {
        transform: translateY(-2px) scale(1.04);
        border-color: ${e=>e.$accent};
    }
`,Zm=g.p`
    margin: -1.5rem 0 2rem;
    font-size: 0.8rem;
    color: ${p.text.muted};
`,ep=[{icon:"⚙️",title:{EN:"Back-end",BR:"Back-end",ES:"Back-end"},accent:p.primary,strong:["Java","Kotlin","Python","Spring Boot"],other:["Django","GraphQL","WebSocket","C++","Rust"]},{icon:"☁️",title:{EN:"Cloud & DevOps",BR:"Cloud & DevOps",ES:"Cloud & DevOps"},accent:p.secondary,strong:["AWS","Terraform","GitHub Actions"],other:["Lambda","ECS","Step Functions","SQS","Docker","Azure","GCP"]},{icon:"🔀",title:{EN:"Data & Messaging",BR:"Dados & Mensageria",ES:"Datos & Mensajería"},accent:p.accent,strong:["Kafka","Redis","PostgreSQL"],other:["RabbitMQ","DynamoDB","Aurora","OpenSearch","Athena","PySpark"]},{icon:"🤖",title:{EN:"AI Engineering",BR:"Engenharia de IA",ES:"Ingeniería de IA"},accent:"#ec4899",strong:["LLMs","Agents","RAG"],other:["LangChain","Multi-agent","Ollama"]},{icon:"🏛️",title:{EN:"Architecture & Practices",BR:"Arquitetura & Práticas",ES:"Arquitectura & Prácticas"},accent:p.success,strong:["Microservices","Event-driven","System design","TDD"],other:["DDD","Mutation testing","Observability"]},{icon:"🖥️",title:{EN:"Front-end",BR:"Front-end",ES:"Front-end"},accent:"#38bdf8",strong:["TypeScript","React"],other:["React Native","Angular"]}];function tp(){const e=ye();return f(Ym,{id:"skills-content",children:[f(Ae,{children:[f(Um,{children:["🧑‍💻 ",e({EN:"Skills",BR:"Habilidades",ES:"Habilidades"})]}),f(qm,{children:e({EN:"Technologies and Stacks",BR:"Tecnologias e Stacks",ES:"Tecnologías y Stacks"})}),f(Km,{children:e({EN:"What I use to build resilient, scalable systems end to end.",BR:"O que uso para construir sistemas resilientes e escaláveis de ponta a ponta.",ES:"Lo que uso para construir sistemas resilientes y escalables de punta a punta."})}),f(Zm,{children:e({EN:"Highlighted = what I use most",BR:"Em destaque = o que mais uso",ES:"Destacado = lo que más uso"})})]}),f(Xm,{children:ep.map((t,n)=>f(Ae,{delay:n*80,children:f(Qm,{$accent:t.accent,children:[f("h3",{children:[f("span",{"aria-hidden":"true",children:t.icon}),e(t.title)]}),f(Jm,{children:[t.strong.map(r=>f(vs,{$accent:t.accent,$strong:!0,children:r},r)),t.other.map(r=>f(vs,{$accent:t.accent,children:r},r))]})]})},t.icon))}),f(Ae,{direction:"zoom",children:f(Gm,{})})]})}const Jc=Ze({});function np(e){const t=he(null);return t.current===null&&(t.current=e()),t.current}const Xi=typeof window<"u",rp=Xi?It:X,Qi=Ze(null);function Ji(e,t){e.indexOf(t)===-1&&e.push(t)}function Zi(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const Ne=(e,t,n)=>n>t?t:n<e?e:n;let eo=()=>{};const je={},Zc=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function el(e){return typeof e=="object"&&e!==null}const tl=e=>/^0[^.\s]+$/u.test(e);function to(e){let t;return()=>(t===void 0&&(t=e()),t)}const xe=e=>e,ip=(e,t)=>n=>t(e(n)),bn=(...e)=>e.reduce(ip),un=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r};class no{constructor(){this.subscriptions=[]}add(t){return Ji(this.subscriptions,t),()=>Zi(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ee=e=>e*1e3,De=e=>e/1e3;function nl(e,t){return t?e*(1e3/t):0}const rl=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,op=1e-7,sp=12;function ap(e,t,n,r,i){let o,s,a=0;do s=t+(n-t)/2,o=rl(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>op&&++a<sp);return s}function vn(e,t,n,r){if(e===t&&n===r)return xe;const i=o=>ap(o,0,1,e,n);return o=>o===0||o===1?o:rl(i(o),t,r)}const il=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,ol=e=>t=>1-e(1-t),sl=vn(.33,1.53,.69,.99),ro=ol(sl),al=il(ro),cl=e=>(e*=2)<1?.5*ro(e):.5*(2-Math.pow(2,-10*(e-1))),io=e=>1-Math.sin(Math.acos(e)),ll=ol(io),ul=il(io),cp=vn(.42,0,1,1),lp=vn(0,0,.58,1),dl=vn(.42,0,.58,1),up=e=>Array.isArray(e)&&typeof e[0]!="number",hl=e=>Array.isArray(e)&&typeof e[0]=="number",dp={linear:xe,easeIn:cp,easeInOut:dl,easeOut:lp,circIn:io,circInOut:ul,circOut:ll,backIn:ro,backInOut:al,backOut:sl,anticipate:cl},hp=e=>typeof e=="string",xs=e=>{if(hl(e)){eo(e.length===4);const[t,n,r,i]=e;return vn(t,n,r,i)}else if(hp(e))return dp[e];return e},En=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],ws={value:null,addProjectionMetrics:null};function fp(e,t){let n=new Set,r=new Set,i=!1,o=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1},c=0;function l(d){s.has(d)&&(u.schedule(d),e()),c++,d(a)}const u={schedule:(d,h=!1,m=!1)=>{const v=m&&i?n:r;return h&&s.add(d),v.has(d)||v.add(d),d},cancel:d=>{r.delete(d),s.delete(d)},process:d=>{if(a=d,i){o=!0;return}i=!0,[n,r]=[r,n],n.forEach(l),t&&ws.value&&ws.value.frameloop[t].push(c),c=0,n.clear(),i=!1,o&&(o=!1,u.process(d))}};return u}const mp=40;function fl(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=En.reduce((_,P)=>(_[P]=fp(o,t?P:void 0),_),{}),{setup:a,read:c,resolveKeyframes:l,preUpdate:u,update:d,preRender:h,render:m,postRender:b}=s,v=()=>{const _=je.useManualTiming?i.timestamp:performance.now();n=!1,je.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(_-i.timestamp,mp),1)),i.timestamp=_,i.isProcessing=!0,a.process(i),c.process(i),l.process(i),u.process(i),d.process(i),h.process(i),m.process(i),b.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(v))},x=()=>{n=!0,r=!0,i.isProcessing||e(v)};return{schedule:En.reduce((_,P)=>{const k=s[P];return _[P]=(C,T=!1,M=!1)=>(n||x(),k.schedule(C,T,M)),_},{}),cancel:_=>{for(let P=0;P<En.length;P++)s[En[P]].cancel(_)},state:i,steps:s}}const{schedule:U,cancel:Qe,state:ie,steps:Br}=fl(typeof requestAnimationFrame<"u"?requestAnimationFrame:xe,!0);let Yn;function pp(){Yn=void 0}const fe={now:()=>(Yn===void 0&&fe.set(ie.isProcessing||je.useManualTiming?ie.timestamp:performance.now()),Yn),set:e=>{Yn=e,queueMicrotask(pp)}},ml=e=>t=>typeof t=="string"&&t.startsWith(e),oo=ml("--"),gp=ml("var(--"),so=e=>gp(e)?yp.test(e.split("/*")[0].trim()):!1,yp=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Ot={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},dn={...Ot,transform:e=>Ne(0,1,e)},Dn={...Ot,default:1},en=e=>Math.round(e*1e5)/1e5,ao=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function bp(e){return e==null}const vp=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,co=(e,t)=>n=>!!(typeof n=="string"&&vp.test(n)&&n.startsWith(e)||t&&!bp(n)&&Object.prototype.hasOwnProperty.call(n,t)),pl=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,a]=r.match(ao);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:a!==void 0?parseFloat(a):1}},xp=e=>Ne(0,255,e),Or={...Ot,transform:e=>Math.round(xp(e))},ct={test:co("rgb","red"),parse:pl("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Or.transform(e)+", "+Or.transform(t)+", "+Or.transform(n)+", "+en(dn.transform(r))+")"};function wp(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const gi={test:co("#"),parse:wp,transform:ct.transform},xn=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),qe=xn("deg"),Me=xn("%"),R=xn("px"),_p=xn("vh"),Sp=xn("vw"),_s={...Me,parse:e=>Me.parse(e)/100,transform:e=>Me.transform(e*100)},bt={test:co("hsl","hue"),parse:pl("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Me.transform(en(t))+", "+Me.transform(en(n))+", "+en(dn.transform(r))+")"},ee={test:e=>ct.test(e)||gi.test(e)||bt.test(e),parse:e=>ct.test(e)?ct.parse(e):bt.test(e)?bt.parse(e):gi.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?ct.transform(e):bt.transform(e),getAnimatableNone:e=>{const t=ee.parse(e);return t.alpha=0,ee.transform(t)}},$p=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function kp(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(ao))==null?void 0:t.length)||0)+(((n=e.match($p))==null?void 0:n.length)||0)>0}const gl="number",yl="color",Pp="var",Tp="var(",Ss="${}",Cp=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function hn(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const a=t.replace(Cp,c=>(ee.test(c)?(r.color.push(o),i.push(yl),n.push(ee.parse(c))):c.startsWith(Tp)?(r.var.push(o),i.push(Pp),n.push(c)):(r.number.push(o),i.push(gl),n.push(parseFloat(c))),++o,Ss)).split(Ss);return{values:n,split:a,indexes:r,types:i}}function bl(e){return hn(e).values}function vl(e){const{split:t,types:n}=hn(e),r=t.length;return i=>{let o="";for(let s=0;s<r;s++)if(o+=t[s],i[s]!==void 0){const a=n[s];a===gl?o+=en(i[s]):a===yl?o+=ee.transform(i[s]):o+=i[s]}return o}}const Ap=e=>typeof e=="number"?0:ee.test(e)?ee.getAnimatableNone(e):e;function Ep(e){const t=bl(e);return vl(e)(t.map(Ap))}const Je={test:kp,parse:bl,createTransformer:vl,getAnimatableNone:Ep};function Fr(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Dp({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const a=n<.5?n*(1+t):n+t-n*t,c=2*n-a;i=Fr(c,a,e+1/3),o=Fr(c,a,e),s=Fr(c,a,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function rr(e,t){return n=>n>0?t:e}const q=(e,t,n)=>e+(t-e)*n,Nr=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Mp=[gi,ct,bt],Rp=e=>Mp.find(t=>t.test(e));function $s(e){const t=Rp(e);if(!t)return!1;let n=t.parse(e);return t===bt&&(n=Dp(n)),n}const ks=(e,t)=>{const n=$s(e),r=$s(t);if(!n||!r)return rr(e,t);const i={...n};return o=>(i.red=Nr(n.red,r.red,o),i.green=Nr(n.green,r.green,o),i.blue=Nr(n.blue,r.blue,o),i.alpha=q(n.alpha,r.alpha,o),ct.transform(i))},yi=new Set(["none","hidden"]);function Lp(e,t){return yi.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Vp(e,t){return n=>q(e,t,n)}function lo(e){return typeof e=="number"?Vp:typeof e=="string"?so(e)?rr:ee.test(e)?ks:Op:Array.isArray(e)?xl:typeof e=="object"?ee.test(e)?ks:Ip:rr}function xl(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>lo(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function Ip(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=lo(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function Bp(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const o=t.types[i],s=e.indexes[o][r[o]],a=e.values[s]??0;n[i]=a,r[o]++}return n}const Op=(e,t)=>{const n=Je.createTransformer(t),r=hn(e),i=hn(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?yi.has(e)&&!i.values.length||yi.has(t)&&!r.values.length?Lp(e,t):bn(xl(Bp(r,i),i.values),n):rr(e,t)};function wl(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?q(e,t,n):lo(e)(e,t)}const Fp=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>U.update(t,n),stop:()=>Qe(t),now:()=>ie.isProcessing?ie.timestamp:fe.now()}},_l=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=Math.round(e(o/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},ir=2e4;function uo(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<ir;)t+=n,r=e.next(t);return t>=ir?1/0:t}function Np(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(uo(r),ir);return{type:"keyframes",ease:o=>r.next(i*o).value/t,duration:De(i)}}const jp=5;function Sl(e,t,n){const r=Math.max(t-jp,0);return nl(n-e(r),t-r)}const K={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},jr=.001;function Wp({duration:e=K.duration,bounce:t=K.bounce,velocity:n=K.velocity,mass:r=K.mass}){let i,o,s=1-t;s=Ne(K.minDamping,K.maxDamping,s),e=Ne(K.minDuration,K.maxDuration,De(e)),s<1?(i=l=>{const u=l*s,d=u*e,h=u-n,m=bi(l,s),b=Math.exp(-d);return jr-h/m*b},o=l=>{const d=l*s*e,h=d*n+n,m=Math.pow(s,2)*Math.pow(l,2)*e,b=Math.exp(-d),v=bi(Math.pow(l,2),s);return(-i(l)+jr>0?-1:1)*((h-m)*b)/v}):(i=l=>{const u=Math.exp(-l*e),d=(l-n)*e+1;return-jr+u*d},o=l=>{const u=Math.exp(-l*e),d=(n-l)*(e*e);return u*d});const a=5/e,c=Hp(i,o,a);if(e=Ee(e),isNaN(c))return{stiffness:K.stiffness,damping:K.damping,duration:e};{const l=Math.pow(c,2)*r;return{stiffness:l,damping:s*2*Math.sqrt(r*l),duration:e}}}const zp=12;function Hp(e,t,n){let r=n;for(let i=1;i<zp;i++)r=r-e(r)/t(r);return r}function bi(e,t){return e*Math.sqrt(1-t*t)}const Gp=["duration","bounce"],Yp=["stiffness","damping","mass"];function Ps(e,t){return t.some(n=>e[n]!==void 0)}function Up(e){let t={velocity:K.velocity,stiffness:K.stiffness,damping:K.damping,mass:K.mass,isResolvedFromDuration:!1,...e};if(!Ps(e,Yp)&&Ps(e,Gp))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*Ne(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:K.mass,stiffness:i,damping:o}}else{const n=Wp(e);t={...t,...n,mass:K.mass},t.isResolvedFromDuration=!0}return t}function or(e=K.visualDuration,t=K.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],a={done:!1,value:o},{stiffness:c,damping:l,mass:u,duration:d,velocity:h,isResolvedFromDuration:m}=Up({...n,velocity:-De(n.velocity||0)}),b=h||0,v=l/(2*Math.sqrt(c*u)),x=s-o,y=De(Math.sqrt(c/u)),w=Math.abs(x)<5;r||(r=w?K.restSpeed.granular:K.restSpeed.default),i||(i=w?K.restDelta.granular:K.restDelta.default);let _;if(v<1){const k=bi(y,v);_=C=>{const T=Math.exp(-v*y*C);return s-T*((b+v*y*x)/k*Math.sin(k*C)+x*Math.cos(k*C))}}else if(v===1)_=k=>s-Math.exp(-y*k)*(x+(b+y*x)*k);else{const k=y*Math.sqrt(v*v-1);_=C=>{const T=Math.exp(-v*y*C),M=Math.min(k*C,300);return s-T*((b+v*y*x)*Math.sinh(M)+k*x*Math.cosh(M))/k}}const P={calculatedDuration:m&&d||null,next:k=>{const C=_(k);if(m)a.done=k>=d;else{let T=k===0?b:0;v<1&&(T=k===0?Ee(b):Sl(_,k,C));const M=Math.abs(T)<=r,V=Math.abs(s-C)<=i;a.done=M&&V}return a.value=a.done?s:C,a},toString:()=>{const k=Math.min(uo(P),ir),C=_l(T=>P.next(k*T).value,k,30);return k+"ms "+C},toTransition:()=>{}};return P}or.applyToOptions=e=>{const t=Np(e,100,or);return e.ease=t.ease,e.duration=Ee(t.duration),e.type="keyframes",e};function vi({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:a,max:c,restDelta:l=.5,restSpeed:u}){const d=e[0],h={done:!1,value:d},m=M=>a!==void 0&&M<a||c!==void 0&&M>c,b=M=>a===void 0?c:c===void 0||Math.abs(a-M)<Math.abs(c-M)?a:c;let v=n*t;const x=d+v,y=s===void 0?x:s(x);y!==x&&(v=y-d);const w=M=>-v*Math.exp(-M/r),_=M=>y+w(M),P=M=>{const V=w(M),j=_(M);h.done=Math.abs(V)<=l,h.value=h.done?y:j};let k,C;const T=M=>{m(h.value)&&(k=M,C=or({keyframes:[h.value,b(h.value)],velocity:Sl(_,M,h.value),damping:i,stiffness:o,restDelta:l,restSpeed:u}))};return T(0),{calculatedDuration:null,next:M=>{let V=!1;return!C&&k===void 0&&(V=!0,P(M),T(M)),k!==void 0&&M>=k?C.next(M-k):(!V&&P(M),h)}}}function qp(e,t,n){const r=[],i=n||je.mix||wl,o=e.length-1;for(let s=0;s<o;s++){let a=i(e[s],e[s+1]);if(t){const c=Array.isArray(t)?t[s]||xe:t;a=bn(c,a)}r.push(a)}return r}function Kp(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(eo(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=qp(t,r,i),c=a.length,l=u=>{if(s&&u<e[0])return t[0];let d=0;if(c>1)for(;d<e.length-2&&!(u<e[d+1]);d++);const h=un(e[d],e[d+1],u);return a[d](h)};return n?u=>l(Ne(e[0],e[o-1],u)):l}function Xp(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=un(0,t,r);e.push(q(n,1,i))}}function Qp(e){const t=[0];return Xp(t,e.length-1),t}function Jp(e,t){return e.map(n=>n*t)}function Zp(e,t){return e.map(()=>t||dl).splice(0,e.length-1)}function tn({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=up(r)?r.map(xs):xs(r),o={done:!1,value:t[0]},s=Jp(n&&n.length===t.length?n:Qp(t),e),a=Kp(s,t,{ease:Array.isArray(i)?i:Zp(t,i)});return{calculatedDuration:e,next:c=>(o.value=a(c),o.done=c>=e,o)}}const eg=e=>e!==null;function ho(e,{repeat:t,repeatType:n="loop"},r,i=1){const o=e.filter(eg),a=i<0||t&&n!=="loop"&&t%2===1?0:o.length-1;return!a||r===void 0?o[a]:r}const tg={decay:vi,inertia:vi,tween:tn,keyframes:tn,spring:or};function $l(e){typeof e.type=="string"&&(e.type=tg[e.type])}class fo{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const ng=e=>e/100;class mo extends fo{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==fe.now()&&this.tick(fe.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;$l(t);const{type:n=tn,repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=t;let{keyframes:a}=t;const c=n||tn;c!==tn&&typeof a[0]!="number"&&(this.mixKeyframes=bn(ng,wl(a[0],a[1])),a=[0,100]);const l=c({...t,keyframes:a});o==="mirror"&&(this.mirroredGenerator=c({...t,keyframes:[...a].reverse(),velocity:-s})),l.calculatedDuration===null&&(l.calculatedDuration=uo(l));const{calculatedDuration:u}=l;this.calculatedDuration=u,this.resolvedDuration=u+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=l}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:a,calculatedDuration:c}=this;if(this.startTime===null)return r.next(0);const{delay:l=0,keyframes:u,repeat:d,repeatType:h,repeatDelay:m,type:b,onUpdate:v,finalKeyframe:x}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const y=this.currentTime-l*(this.playbackSpeed>=0?1:-1),w=this.playbackSpeed>=0?y<0:y>i;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let _=this.currentTime,P=r;if(d){const M=Math.min(this.currentTime,i)/a;let V=Math.floor(M),j=M%1;!j&&M>=1&&(j=1),j===1&&V--,V=Math.min(V,d+1),!!(V%2)&&(h==="reverse"?(j=1-j,m&&(j-=m/a)):h==="mirror"&&(P=s)),_=Ne(0,1,j)*a}const k=w?{done:!1,value:u[0]}:P.next(_);o&&(k.value=o(k.value));let{done:C}=k;!w&&c!==null&&(C=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return T&&b!==vi&&(k.value=ho(u,this.options,x,this.speed)),v&&v(k.value),T&&this.finish(),k}then(t,n){return this.finished.then(t,n)}get duration(){return De(this.calculatedDuration)}get time(){return De(this.currentTime)}set time(t){var n;t=Ee(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(fe.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=De(this.currentTime))}play(){var i,o;if(this.isStopped)return;const{driver:t=Fp,startTime:n}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),(o=(i=this.options).onPlay)==null||o.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(fe.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function rg(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const lt=e=>e*180/Math.PI,xi=e=>{const t=lt(Math.atan2(e[1],e[0]));return wi(t)},ig={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:xi,rotateZ:xi,skewX:e=>lt(Math.atan(e[1])),skewY:e=>lt(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},wi=e=>(e=e%360,e<0&&(e+=360),e),Ts=xi,Cs=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),As=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),og={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Cs,scaleY:As,scale:e=>(Cs(e)+As(e))/2,rotateX:e=>wi(lt(Math.atan2(e[6],e[5]))),rotateY:e=>wi(lt(Math.atan2(-e[2],e[0]))),rotateZ:Ts,rotate:Ts,skewX:e=>lt(Math.atan(e[4])),skewY:e=>lt(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function _i(e){return e.includes("scale")?1:0}function Si(e,t){if(!e||e==="none")return _i(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=og,i=n;else{const a=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=ig,i=a}if(!i)return _i(t);const o=r[t],s=i[1].split(",").map(ag);return typeof o=="function"?o(s):s[o]}const sg=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return Si(n,t)};function ag(e){return parseFloat(e.trim())}const Ft=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Nt=new Set(Ft),Es=e=>e===Ot||e===R,cg=new Set(["x","y","z"]),lg=Ft.filter(e=>!cg.has(e));function ug(e){const t=[];return lg.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const dt={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>Si(t,"x"),y:(e,{transform:t})=>Si(t,"y")};dt.translateX=dt.x;dt.translateY=dt.y;const ht=new Set;let $i=!1,ki=!1,Pi=!1;function kl(){if(ki){const e=Array.from(ht).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=ug(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var a;(a=r.getValue(o))==null||a.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}ki=!1,$i=!1,ht.forEach(e=>e.complete(Pi)),ht.clear()}function Pl(){ht.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(ki=!0)})}function dg(){Pi=!0,Pl(),kl(),Pi=!1}class po{constructor(t,n,r,i,o,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(ht.add(this),$i||($i=!0,U.read(Pl),U.resolveKeyframes(kl))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const a=r.readValue(n,s);a!=null&&(t[0]=a)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}rg(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),ht.delete(this)}cancel(){this.state==="scheduled"&&(ht.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const hg=e=>e.startsWith("--");function fg(e,t,n){hg(t)?e.style.setProperty(t,n):e.style[t]=n}const mg=to(()=>window.ScrollTimeline!==void 0),pg={};function gg(e,t){const n=to(e);return()=>pg[t]??n()}const Tl=gg(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Xt=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ds={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Xt([0,.65,.55,1]),circOut:Xt([.55,0,1,.45]),backIn:Xt([.31,.01,.66,-.59]),backOut:Xt([.33,1.53,.69,.99])};function Cl(e,t){if(e)return typeof e=="function"?Tl()?_l(e,t):"ease-out":hl(e)?Xt(e):Array.isArray(e)?e.map(n=>Cl(n,t)||Ds.easeOut):Ds[e]}function yg(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:a="easeOut",times:c}={},l=void 0){const u={[t]:n};c&&(u.offset=c);const d=Cl(a,i);Array.isArray(d)&&(u.easing=d);const h={delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"};return l&&(h.pseudoElement=l),e.animate(u,h)}function Al(e){return typeof e=="function"&&"applyToOptions"in e}function bg({type:e,...t}){return Al(e)&&Tl()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class vg extends fo{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:o,allowFlatten:s=!1,finalKeyframe:a,onComplete:c}=t;this.isPseudoElement=!!o,this.allowFlatten=s,this.options=t,eo(typeof t.type!="string");const l=bg(t);this.animation=yg(n,r,i,l,o),l.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const u=ho(i,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(u):fg(n,r,u),this.animation.cancel()}c==null||c(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,n;this.isPseudoElement||(n=(t=this.animation).commitStyles)==null||n.call(t)}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return De(Number(t))}get time(){return De(Number(this.animation.currentTime)||0)}set time(t){this.finishedTime=null,this.animation.currentTime=Ee(t)}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(t){this.animation.startTime=t}attachTimeline({timeline:t,observe:n}){var r;return this.allowFlatten&&((r=this.animation.effect)==null||r.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&mg()?(this.animation.timeline=t,xe):n(this)}}const El={anticipate:cl,backInOut:al,circInOut:ul};function xg(e){return e in El}function wg(e){typeof e.ease=="string"&&xg(e.ease)&&(e.ease=El[e.ease])}const Ms=10;class _g extends vg{constructor(t){wg(t),$l(t),super(t),t.startTime&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:o,...s}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const a=new mo({...s,autoplay:!1}),c=Ee(this.finishedTime??this.time);n.setWithVelocity(a.sample(c-Ms).value,a.sample(c).value,Ms),a.stop()}}const Rs=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Je.test(e)||e==="0")&&!e.startsWith("url("));function Sg(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function $g(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=Rs(i,t),a=Rs(o,t);return!s||!a?!1:Sg(e)||(n==="spring"||Al(n))&&r}function Ti(e){e.duration=0,e.type}const kg=new Set(["opacity","clipPath","filter","transform"]),Pg=to(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Tg(e){var u;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:s}=e;if(!(((u=t==null?void 0:t.owner)==null?void 0:u.current)instanceof HTMLElement))return!1;const{onUpdate:c,transformTemplate:l}=t.owner.getProps();return Pg()&&n&&kg.has(n)&&(n!=="transform"||!l)&&!c&&!r&&i!=="mirror"&&o!==0&&s!=="inertia"}const Cg=40;class Ag extends fo{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",keyframes:a,name:c,motionValue:l,element:u,...d}){var b;super(),this.stop=()=>{var v,x;this._animation&&(this._animation.stop(),(v=this.stopTimeline)==null||v.call(this)),(x=this.keyframeResolver)==null||x.cancel()},this.createdAt=fe.now();const h={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,name:c,motionValue:l,element:u,...d},m=(u==null?void 0:u.KeyframeResolver)||po;this.keyframeResolver=new m(a,(v,x,y)=>this.onKeyframesResolved(v,x,h,!y),c,l,u),(b=this.keyframeResolver)==null||b.scheduleResolve()}onKeyframesResolved(t,n,r,i){this.keyframeResolver=void 0;const{name:o,type:s,velocity:a,delay:c,isHandoff:l,onUpdate:u}=r;this.resolvedAt=fe.now(),$g(t,o,s,a)||((je.instantAnimations||!c)&&(u==null||u(ho(t,r,n))),t[0]=t[t.length-1],Ti(r),r.repeat=0);const h={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>Cg?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},m=!l&&Tg(h)?new _g({...h,element:h.motionValue.owner.current}):new mo(h);m.finished.then(()=>this.notifyFinished()).catch(xe),this.pendingTimeline&&(this.stopTimeline=m.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=m}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),dg()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}const Eg=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Dg(e){const t=Eg.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Dl(e,t,n=1){const[r,i]=Dg(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return Zc(s)?parseFloat(s):s}return so(i)?Dl(i,t,n+1):i}function go(e,t){return(e==null?void 0:e[t])??(e==null?void 0:e.default)??e}const Ml=new Set(["width","height","top","left","right","bottom",...Ft]),Mg={test:e=>e==="auto",parse:e=>e},Rl=e=>t=>t.test(e),Ll=[Ot,R,Me,qe,Sp,_p,Mg],Ls=e=>Ll.find(Rl(e));function Rg(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||tl(e):!0}const Lg=new Set(["brightness","contrast","saturate","opacity"]);function Vg(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(ao)||[];if(!r)return e;const i=n.replace(r,"");let o=Lg.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const Ig=/\b([a-z-]*)\(.*?\)/gu,Ci={...Je,getAnimatableNone:e=>{const t=e.match(Ig);return t?t.map(Vg).join(" "):e}},Vs={...Ot,transform:Math.round},Bg={rotate:qe,rotateX:qe,rotateY:qe,rotateZ:qe,scale:Dn,scaleX:Dn,scaleY:Dn,scaleZ:Dn,skew:qe,skewX:qe,skewY:qe,distance:R,translateX:R,translateY:R,translateZ:R,x:R,y:R,z:R,perspective:R,transformPerspective:R,opacity:dn,originX:_s,originY:_s,originZ:R},yo={borderWidth:R,borderTopWidth:R,borderRightWidth:R,borderBottomWidth:R,borderLeftWidth:R,borderRadius:R,radius:R,borderTopLeftRadius:R,borderTopRightRadius:R,borderBottomRightRadius:R,borderBottomLeftRadius:R,width:R,maxWidth:R,height:R,maxHeight:R,top:R,right:R,bottom:R,left:R,padding:R,paddingTop:R,paddingRight:R,paddingBottom:R,paddingLeft:R,margin:R,marginTop:R,marginRight:R,marginBottom:R,marginLeft:R,backgroundPositionX:R,backgroundPositionY:R,...Bg,zIndex:Vs,fillOpacity:dn,strokeOpacity:dn,numOctaves:Vs},Og={...yo,color:ee,backgroundColor:ee,outlineColor:ee,fill:ee,stroke:ee,borderColor:ee,borderTopColor:ee,borderRightColor:ee,borderBottomColor:ee,borderLeftColor:ee,filter:Ci,WebkitFilter:Ci},Vl=e=>Og[e];function Il(e,t){let n=Vl(e);return n!==Ci&&(n=Je),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Fg=new Set(["auto","none","0"]);function Ng(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!Fg.has(o)&&hn(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=Il(n,i)}class jg extends po{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let c=0;c<t.length;c++){let l=t[c];if(typeof l=="string"&&(l=l.trim(),so(l))){const u=Dl(l,n.current);u!==void 0&&(t[c]=u),c===t.length-1&&(this.finalKeyframe=l)}}if(this.resolveNoneKeyframes(),!Ml.has(r)||t.length!==2)return;const[i,o]=t,s=Ls(i),a=Ls(o);if(s!==a)if(Es(s)&&Es(a))for(let c=0;c<t.length;c++){const l=t[c];typeof l=="string"&&(t[c]=parseFloat(l))}else dt[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||Rg(t[i]))&&r.push(i);r.length&&Ng(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=dt[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var a;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const o=r.length-1,s=r[o];r[o]=dt[n](t.measureViewportBox(),window.getComputedStyle(t.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([c,l])=>{t.getValue(c).set(l)}),this.resolveNoneKeyframes()}}function Wg(e,t,n){if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;t&&(r=t.current);const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}const Bl=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function zg(e){return el(e)&&"offsetHeight"in e}const Is=30,Hg=e=>!isNaN(parseFloat(e));class Gg{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var o;const i=fe.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=fe.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Hg(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new no);const r=this.events[t].add(n);return t==="change"?()=>{r(),U.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=fe.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Is)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Is);return nl(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Rt(e,t){return new Gg(e,t)}const{schedule:bo,cancel:e1}=fl(queueMicrotask,!1),Se={x:!1,y:!1};function Ol(){return Se.x||Se.y}function Yg(e){return e==="x"||e==="y"?Se[e]?null:(Se[e]=!0,()=>{Se[e]=!1}):Se.x||Se.y?null:(Se.x=Se.y=!0,()=>{Se.x=Se.y=!1})}function Fl(e,t){const n=Wg(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Bs(e){return!(e.pointerType==="touch"||Ol())}function Ug(e,t,n={}){const[r,i,o]=Fl(e,n),s=a=>{if(!Bs(a))return;const{target:c}=a,l=t(c,a);if(typeof l!="function"||!c)return;const u=d=>{Bs(d)&&(l(d),c.removeEventListener("pointerleave",u))};c.addEventListener("pointerleave",u,i)};return r.forEach(a=>{a.addEventListener("pointerenter",s,i)}),o}const Nl=(e,t)=>t?e===t?!0:Nl(e,t.parentElement):!1,vo=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,qg=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Kg(e){return qg.has(e.tagName)||e.tabIndex!==-1}const Un=new WeakSet;function Os(e){return t=>{t.key==="Enter"&&e(t)}}function Wr(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Xg=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Os(()=>{if(Un.has(n))return;Wr(n,"down");const i=Os(()=>{Wr(n,"up")}),o=()=>Wr(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Fs(e){return vo(e)&&!Ol()}function Qg(e,t,n={}){const[r,i,o]=Fl(e,n),s=a=>{const c=a.currentTarget;if(!Fs(a))return;Un.add(c);const l=t(c,a),u=(m,b)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",h),Un.has(c)&&Un.delete(c),Fs(m)&&typeof l=="function"&&l(m,{success:b})},d=m=>{u(m,c===window||c===document||n.useGlobalTarget||Nl(c,m.target))},h=m=>{u(m,!1)};window.addEventListener("pointerup",d,i),window.addEventListener("pointercancel",h,i)};return r.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",s,i),zg(a)&&(a.addEventListener("focus",l=>Xg(l,i)),!Kg(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),o}function jl(e){return el(e)&&"ownerSVGElement"in e}function Jg(e){return jl(e)&&e.tagName==="svg"}const le=e=>!!(e&&e.getVelocity),Zg=[...Ll,ee,Je],e0=e=>Zg.find(Rl(e)),Wl=Ze({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function t0(e=!0){const t=se(Qi);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=oc();X(()=>{if(e)return i(o)},[e]);const s=Ni(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const zl=Ze({strict:!1}),Ns={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Lt={};for(const e in Ns)Lt[e]={isEnabled:t=>Ns[e].some(n=>!!t[n])};function n0(e){for(const t in e)Lt[t]={...Lt[t],...e[t]}}const r0=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function sr(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||r0.has(e)}let Hl=e=>!sr(e);function i0(e){typeof e=="function"&&(Hl=t=>t.startsWith("on")?!sr(t):e(t))}try{i0(require("@emotion/is-prop-valid").default)}catch{}function o0(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Hl(i)||n===!0&&sr(i)||!t&&!sr(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const yr=Ze({});function br(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function fn(e){return typeof e=="string"||Array.isArray(e)}const xo=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],wo=["initial",...xo];function vr(e){return br(e.animate)||wo.some(t=>fn(e[t]))}function Gl(e){return!!(vr(e)||e.variants)}function s0(e,t){if(vr(e)){const{initial:n,animate:r}=e;return{initial:n===!1||fn(n)?n:void 0,animate:fn(r)?r:void 0}}return e.inherit!==!1?t:{}}function a0(e){const{initial:t,animate:n}=s0(e,se(yr));return Re(()=>({initial:t,animate:n}),[js(t),js(n)])}function js(e){return Array.isArray(e)?e.join(" "):e}const mn={};function c0(e){for(const t in e)mn[t]=e[t],oo(t)&&(mn[t].isCSSVariable=!0)}function Yl(e,{layout:t,layoutId:n}){return Nt.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!mn[e]||e==="opacity")}const l0={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},u0=Ft.length;function d0(e,t,n){let r="",i=!0;for(let o=0;o<u0;o++){const s=Ft[o],a=e[s];if(a===void 0)continue;let c=!0;if(typeof a=="number"?c=a===(s.startsWith("scale")?1:0):c=parseFloat(a)===0,!c||n){const l=Bl(a,yo[s]);if(!c){i=!1;const u=l0[s]||s;r+=`${u}(${l}) `}n&&(t[s]=l)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function _o(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,a=!1;for(const c in t){const l=t[c];if(Nt.has(c)){s=!0;continue}else if(oo(c)){i[c]=l;continue}else{const u=Bl(l,yo[c]);c.startsWith("origin")?(a=!0,o[c]=u):r[c]=u}}if(t.transform||(s||n?r.transform=d0(t,e.transform,n):r.transform&&(r.transform="none")),a){const{originX:c="50%",originY:l="50%",originZ:u=0}=o;r.transformOrigin=`${c} ${l} ${u}`}}const So=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Ul(e,t,n){for(const r in t)!le(t[r])&&!Yl(r,n)&&(e[r]=t[r])}function h0({transformTemplate:e},t){return Re(()=>{const n=So();return _o(n,t,e),Object.assign({},n.vars,n.style)},[t])}function f0(e,t){const n=e.style||{},r={};return Ul(r,n,e),Object.assign(r,h0(e,t)),r}function m0(e,t){const n={},r=f0(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const p0={offset:"stroke-dashoffset",array:"stroke-dasharray"},g0={offset:"strokeDashoffset",array:"strokeDasharray"};function y0(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?p0:g0;e[o.offset]=R.transform(-r);const s=R.transform(t),a=R.transform(n);e[o.array]=`${s} ${a}`}function ql(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:o=1,pathOffset:s=0,...a},c,l,u){if(_o(e,a,l),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:d,style:h}=e;d.transform&&(h.transform=d.transform,delete d.transform),(h.transform||d.transformOrigin)&&(h.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),h.transform&&(h.transformBox=(u==null?void 0:u.transformBox)??"fill-box",delete d.transformBox),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&y0(d,i,o,s,!1)}const Kl=()=>({...So(),attrs:{}}),Xl=e=>typeof e=="string"&&e.toLowerCase()==="svg";function b0(e,t,n,r){const i=Re(()=>{const o=Kl();return ql(o,t,Xl(r),e.transformTemplate,e.style),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};Ul(o,e.style,e),i.style={...o,...i.style}}return i}const v0=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function $o(e){return typeof e!="string"||e.includes("-")?!1:!!(v0.indexOf(e)>-1||/[A-Z]/u.test(e))}function x0(e,t,n,{latestValues:r},i,o=!1){const a=($o(e)?b0:m0)(t,r,i,e),c=o0(t,typeof e=="string",o),l=e!==ge?{...c,...a,ref:n}:{},{children:u}=t,d=Re(()=>le(u)?u.get():u,[u]);return Te(e,{...l,children:d})}function Ws(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function ko(e,t,n,r){if(typeof t=="function"){const[i,o]=Ws(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=Ws(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function qn(e){return le(e)?e.get():e}function w0({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:_0(n,r,i,e),renderState:t()}}function _0(e,t,n,r){const i={},o=r(e,{});for(const h in o)i[h]=qn(o[h]);let{initial:s,animate:a}=e;const c=vr(e),l=Gl(e);t&&l&&!c&&e.inherit!==!1&&(s===void 0&&(s=t.initial),a===void 0&&(a=t.animate));let u=n?n.initial===!1:!1;u=u||s===!1;const d=u?a:s;if(d&&typeof d!="boolean"&&!br(d)){const h=Array.isArray(d)?d:[d];for(let m=0;m<h.length;m++){const b=ko(e,h[m]);if(b){const{transitionEnd:v,transition:x,...y}=b;for(const w in y){let _=y[w];if(Array.isArray(_)){const P=u?_.length-1:0;_=_[P]}_!==null&&(i[w]=_)}for(const w in v)i[w]=v[w]}}}return i}const Ql=e=>(t,n)=>{const r=se(yr),i=se(Qi),o=()=>w0(e,t,r,i);return n?o():np(o)};function Po(e,t,n){var o;const{style:r}=e,i={};for(const s in r)(le(r[s])||t.style&&le(t.style[s])||Yl(s,e)||((o=n==null?void 0:n.getValue(s))==null?void 0:o.liveStyle)!==void 0)&&(i[s]=r[s]);return i}const S0=Ql({scrapeMotionValuesFromProps:Po,createRenderState:So});function Jl(e,t,n){const r=Po(e,t,n);for(const i in e)if(le(e[i])||le(t[i])){const o=Ft.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}const $0=Ql({scrapeMotionValuesFromProps:Jl,createRenderState:Kl}),k0=Symbol.for("motionComponentSymbol");function vt(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function P0(e,t,n){return Ni(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):vt(n)&&(n.current=r))},[t])}const To=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),T0="framerAppearId",Zl="data-"+To(T0),eu=Ze({});function C0(e,t,n,r,i){var v,x;const{visualElement:o}=se(yr),s=se(zl),a=se(Qi),c=se(Wl).reducedMotion,l=he(null);r=r||s.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:o,props:n,presenceContext:a,blockInitialAnimation:a?a.initial===!1:!1,reducedMotionConfig:c}));const u=l.current,d=se(eu);u&&!u.projection&&i&&(u.type==="html"||u.type==="svg")&&A0(l.current,n,i,d);const h=he(!1);mc(()=>{u&&h.current&&u.update(n,a)});const m=n[Zl],b=he(!!m&&!((v=window.MotionHandoffIsComplete)!=null&&v.call(window,m))&&((x=window.MotionHasOptimisedAnimation)==null?void 0:x.call(window,m)));return rp(()=>{u&&(h.current=!0,window.MotionIsMounted=!0,u.updateFeatures(),u.scheduleRenderMicrotask(),b.current&&u.animationState&&u.animationState.animateChanges())}),X(()=>{u&&(!b.current&&u.animationState&&u.animationState.animateChanges(),b.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)==null||y.call(window,m)}),b.current=!1),u.enteringChildren=void 0)}),u}function A0(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:a,layoutScroll:c,layoutRoot:l,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:tu(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||a&&vt(a),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,crossfade:u,layoutScroll:c,layoutRoot:l})}function tu(e){if(e)return e.options.allowProjection!==!1?e.projection:tu(e.parent)}function zr(e,{forwardMotionProps:t=!1}={},n,r){n&&n0(n);const i=$o(e)?$0:S0;function o(a,c){let l;const u={...se(Wl),...a,layoutId:E0(a)},{isStatic:d}=u,h=a0(a),m=i(a,d);if(!d&&Xi){D0();const b=M0(u);l=b.MeasureLayout,h.visualElement=C0(e,m,u,r,b.ProjectionNode)}return f(yr.Provider,{value:h,children:[l&&h.visualElement?f(l,{visualElement:h.visualElement,...u}):null,x0(e,a,P0(m,h.visualElement,c),m,d,t)]})}o.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const s=cc(o);return s[k0]=e,s}function E0({layoutId:e}){const t=se(Jc).id;return t&&e!==void 0?t+"-"+e:e}function D0(e,t){se(zl).strict}function M0(e){const{drag:t,layout:n}=Lt;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function R0(e,t){if(typeof Proxy>"u")return zr;const n=new Map,r=(o,s)=>zr(o,s,e,t),i=(o,s)=>r(o,s);return new Proxy(i,{get:(o,s)=>s==="create"?r:(n.has(s)||n.set(s,zr(s,void 0,e,t)),n.get(s))})}function nu({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function L0({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function V0(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Hr(e){return e===void 0||e===1}function Ai({scale:e,scaleX:t,scaleY:n}){return!Hr(e)||!Hr(t)||!Hr(n)}function ot(e){return Ai(e)||ru(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function ru(e){return zs(e.x)||zs(e.y)}function zs(e){return e&&e!=="0%"}function ar(e,t,n){const r=e-n,i=t*r;return n+i}function Hs(e,t,n,r,i){return i!==void 0&&(e=ar(e,i,r)),ar(e,n,r)+t}function Ei(e,t=0,n=1,r,i){e.min=Hs(e.min,t,n,r,i),e.max=Hs(e.max,t,n,r,i)}function iu(e,{x:t,y:n}){Ei(e.x,t.translate,t.scale,t.originPoint),Ei(e.y,n.translate,n.scale,n.originPoint)}const Gs=.999999999999,Ys=1.0000000000001;function I0(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let a=0;a<i;a++){o=n[a],s=o.projectionDelta;const{visualElement:c}=o.options;c&&c.props.style&&c.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&wt(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),s&&(t.x*=s.x.scale,t.y*=s.y.scale,iu(e,s)),r&&ot(o.latestValues)&&wt(e,o.latestValues))}t.x<Ys&&t.x>Gs&&(t.x=1),t.y<Ys&&t.y>Gs&&(t.y=1)}function xt(e,t){e.min=e.min+t,e.max=e.max+t}function Us(e,t,n,r,i=.5){const o=q(e.min,e.max,i);Ei(e,t,n,o,r)}function wt(e,t){Us(e.x,t.x,t.scaleX,t.scale,t.originX),Us(e.y,t.y,t.scaleY,t.scale,t.originY)}function ou(e,t){return nu(V0(e.getBoundingClientRect(),t))}function B0(e,t,n){const r=ou(e,n),{scroll:i}=t;return i&&(xt(r.x,i.offset.x),xt(r.y,i.offset.y)),r}const qs=()=>({translate:0,scale:1,origin:0,originPoint:0}),_t=()=>({x:qs(),y:qs()}),Ks=()=>({min:0,max:0}),Q=()=>({x:Ks(),y:Ks()}),Di={current:null},su={current:!1};function O0(){if(su.current=!0,!!Xi)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Di.current=e.matches;e.addEventListener("change",t),t()}else Di.current=!1}const F0=new WeakMap;function N0(e,t,n){for(const r in t){const i=t[r],o=n[r];if(le(i))e.addValue(r,i);else if(le(o))e.addValue(r,Rt(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,Rt(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Xs=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class j0{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:o,visualState:s},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=po,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const h=fe.now();this.renderScheduledAt<h&&(this.renderScheduledAt=h,U.render(this.render,!1,!0))};const{latestValues:c,renderState:l}=s;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!o,this.isControllingVariants=vr(n),this.isVariantNode=Gl(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...d}=this.scrapeMotionValuesFromProps(n,{},this);for(const h in d){const m=d[h];c[h]!==void 0&&le(m)&&m.set(c[h])}}mount(t){var n;this.current=t,F0.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,i)=>this.bindToMotionValue(i,r)),su.current||O0(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Di.current,(n=this.parent)==null||n.addChild(this),this.update(this.props,this.presenceContext)}unmount(){var t;this.projection&&this.projection.unmount(),Qe(this.notifyUpdate),Qe(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=Nt.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&U.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o&&o(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Lt){const n=Lt[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Q()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Xs.length;r++){const i=Xs[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=N0(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Rt(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(Zc(r)||tl(r))?r=parseFloat(r):!e0(r)&&Je.test(n)&&(r=Il(t,n)),this.setBaseTarget(t,le(r)?r.get():r)),le(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var o;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const s=ko(this.props,n,(o=this.presenceContext)==null?void 0:o.custom);s&&(r=s[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!le(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new no),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){bo.render(this.render)}}class au extends j0{constructor(){super(...arguments),this.KeyframeResolver=jg}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;le(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function cu(e,{style:t,vars:n},r,i){const o=e.style;let s;for(s in t)o[s]=t[s];i==null||i.applyProjectionStyles(o,r);for(s in n)o.setProperty(s,n[s])}function W0(e){return window.getComputedStyle(e)}class z0 extends au{constructor(){super(...arguments),this.type="html",this.renderInstance=cu}readValueFromInstance(t,n){var r;if(Nt.has(n))return(r=this.projection)!=null&&r.isProjecting?_i(n):sg(t,n);{const i=W0(t),o=(oo(n)?i.getPropertyValue(n):i[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return ou(t,n)}build(t,n,r){_o(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Po(t,n,r)}}const lu=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function H0(e,t,n,r){cu(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(lu.has(i)?i:To(i),t.attrs[i])}class G0 extends au{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Q}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(Nt.has(n)){const r=Vl(n);return r&&r.default||0}return n=lu.has(n)?n:To(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Jl(t,n,r)}build(t,n,r){ql(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){H0(t,n,r,i)}mount(t){this.isSVGTag=Xl(t.tagName),super.mount(t)}}const Y0=(e,t)=>$o(e)?new G0(t):new z0(t,{allowProjection:e!==ge});function St(e,t,n){const r=e.getProps();return ko(r,t,n!==void 0?n:r.custom,e)}const Mi=e=>Array.isArray(e);function U0(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Rt(n))}function q0(e){return Mi(e)?e[e.length-1]||0:e}function K0(e,t){const n=St(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const a=q0(o[s]);U0(e,s,a)}}function X0(e){return!!(le(e)&&e.add)}function Ri(e,t){const n=e.getValue("willChange");if(X0(n))return n.add(t);if(!n&&je.WillChange){const r=new je.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function uu(e){return e.props[Zl]}const Q0=e=>e!==null;function J0(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(Q0),o=t&&n!=="loop"&&t%2===1?0:i.length-1;return!o||r===void 0?i[o]:r}const Z0={type:"spring",stiffness:500,damping:25,restSpeed:10},ey=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),ty={type:"keyframes",duration:.8},ny={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ry=(e,{keyframes:t})=>t.length>2?ty:Nt.has(e)?e.startsWith("scale")?ey(t[1]):Z0:ny;function iy({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:o,repeatType:s,repeatDelay:a,from:c,elapsed:l,...u}){return!!Object.keys(u).length}const Co=(e,t,n,r={},i,o)=>s=>{const a=go(r,e)||{},c=a.delay||r.delay||0;let{elapsed:l=0}=r;l=l-Ee(c);const u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...a,delay:-l,onUpdate:h=>{t.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{s(),a.onComplete&&a.onComplete()},name:e,motionValue:t,element:o?void 0:i};iy(a)||Object.assign(u,ry(e,u)),u.duration&&(u.duration=Ee(u.duration)),u.repeatDelay&&(u.repeatDelay=Ee(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(Ti(u),u.delay===0&&(d=!0)),(je.instantAnimations||je.skipAnimations)&&(d=!0,Ti(u),u.delay=0),u.allowFlatten=!a.type&&!a.ease,d&&!o&&t.get()!==void 0){const h=J0(u.keyframes,a);if(h!==void 0){U.update(()=>{u.onUpdate(h),u.onComplete()});return}}return a.isSync?new mo(u):new Ag(u)};function oy({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function du(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o=e.getDefaultTransition(),transitionEnd:s,...a}=t;r&&(o=r);const c=[],l=i&&e.animationState&&e.animationState.getState()[i];for(const u in a){const d=e.getValue(u,e.latestValues[u]??null),h=a[u];if(h===void 0||l&&oy(l,u))continue;const m={delay:n,...go(o||{},u)},b=d.get();if(b!==void 0&&!d.isAnimating&&!Array.isArray(h)&&h===b&&!m.velocity)continue;let v=!1;if(window.MotionHandoffAnimation){const y=uu(e);if(y){const w=window.MotionHandoffAnimation(y,u,U);w!==null&&(m.startTime=w,v=!0)}}Ri(e,u),d.start(Co(u,d,h,e.shouldReduceMotion&&Ml.has(u)?{type:!1}:m,e,v));const x=d.animation;x&&c.push(x)}return s&&Promise.all(c).then(()=>{U.update(()=>{s&&K0(e,s)})}),c}function hu(e,t,n,r=0,i=1){const o=Array.from(e).sort((l,u)=>l.sortNodePosition(u)).indexOf(t),s=e.size,a=(s-1)*r;return typeof n=="function"?n(o,s):i===1?o*r:a-o*r}function Li(e,t,n={}){var c;const r=St(e,t,n.type==="exit"?(c=e.presenceContext)==null?void 0:c.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(du(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:h}=i;return sy(e,t,l,u,d,h,n)}:()=>Promise.resolve(),{when:a}=i;if(a){const[l,u]=a==="beforeChildren"?[o,s]:[s,o];return l().then(()=>u())}else return Promise.all([o(),s(n.delay)])}function sy(e,t,n=0,r=0,i=0,o=1,s){const a=[];for(const c of e.variantChildren)c.notify("AnimationStart",t),a.push(Li(c,t,{...s,delay:n+(typeof r=="function"?0:r)+hu(e.variantChildren,c,r,i,o)}).then(()=>c.notify("AnimationComplete",t)));return Promise.all(a)}function ay(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>Li(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=Li(e,t,n);else{const i=typeof t=="function"?St(e,t,n.custom):t;r=Promise.all(du(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}function fu(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const cy=wo.length;function mu(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?mu(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<cy;n++){const r=wo[n],i=e.props[r];(fn(i)||i===!1)&&(t[r]=i)}return t}const ly=[...xo].reverse(),uy=xo.length;function dy(e){return t=>Promise.all(t.map(({animation:n,options:r})=>ay(e,n,r)))}function hy(e){let t=dy(e),n=Qs(),r=!0;const i=c=>(l,u)=>{var h;const d=St(e,u,c==="exit"?(h=e.presenceContext)==null?void 0:h.custom:void 0);if(d){const{transition:m,transitionEnd:b,...v}=d;l={...l,...v,...b}}return l};function o(c){t=c(e)}function s(c){const{props:l}=e,u=mu(e.parent)||{},d=[],h=new Set;let m={},b=1/0;for(let x=0;x<uy;x++){const y=ly[x],w=n[y],_=l[y]!==void 0?l[y]:u[y],P=fn(_),k=y===c?w.isActive:null;k===!1&&(b=x);let C=_===u[y]&&_!==l[y]&&P;if(C&&r&&e.manuallyAnimateOnMount&&(C=!1),w.protectedKeys={...m},!w.isActive&&k===null||!_&&!w.prevProp||br(_)||typeof _=="boolean")continue;const T=fy(w.prevProp,_);let M=T||y===c&&w.isActive&&!C&&P||x>b&&P,V=!1;const j=Array.isArray(_)?_:[_];let E=j.reduce(i(y),{});k===!1&&(E={});const{prevResolvedValues:W={}}=w,z={...W,...E},Z=$=>{M=!0,h.has($)&&(V=!0,h.delete($)),w.needsAnimating[$]=!0;const B=e.getValue($);B&&(B.liveStyle=!1)};for(const $ in z){const B=E[$],ne=W[$];if(m.hasOwnProperty($))continue;let ae=!1;Mi(B)&&Mi(ne)?ae=!fu(B,ne):ae=B!==ne,ae?B!=null?Z($):h.add($):B!==void 0&&h.has($)?Z($):w.protectedKeys[$]=!0}w.prevProp=_,w.prevResolvedValues=E,w.isActive&&(m={...m,...E}),r&&e.blockInitialAnimation&&(M=!1);const H=C&&T;M&&(!H||V)&&d.push(...j.map($=>{const B={type:y};if(typeof $=="string"&&r&&!H&&e.manuallyAnimateOnMount&&e.parent){const{parent:ne}=e,ae=St(ne,$);if(ne.enteringChildren&&ae){const{delayChildren:ue}=ae.transition||{};B.delay=hu(ne.enteringChildren,e,ue)}}return{animation:$,options:B}}))}if(h.size){const x={};if(typeof l.initial!="boolean"){const y=St(e,Array.isArray(l.initial)?l.initial[0]:l.initial);y&&y.transition&&(x.transition=y.transition)}h.forEach(y=>{const w=e.getBaseTarget(y),_=e.getValue(y);_&&(_.liveStyle=!0),x[y]=w??null}),d.push({animation:x})}let v=!!d.length;return r&&(l.initial===!1||l.initial===l.animate)&&!e.manuallyAnimateOnMount&&(v=!1),r=!1,v?t(d):Promise.resolve()}function a(c,l){var d;if(n[c].isActive===l)return Promise.resolve();(d=e.variantChildren)==null||d.forEach(h=>{var m;return(m=h.animationState)==null?void 0:m.setActive(c,l)}),n[c].isActive=l;const u=s(c);for(const h in n)n[h].protectedKeys={};return u}return{animateChanges:s,setActive:a,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Qs(),r=!0}}}function fy(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!fu(t,e):!1}function rt(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Qs(){return{animate:rt(!0),whileInView:rt(),whileHover:rt(),whileTap:rt(),whileDrag:rt(),whileFocus:rt(),exit:rt()}}class tt{constructor(t){this.isMounted=!1,this.node=t}update(){}}class my extends tt{constructor(t){super(t),t.animationState||(t.animationState=hy(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();br(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let py=0;class gy extends tt{constructor(){super(...arguments),this.id=py++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const yy={animation:{Feature:my},exit:{Feature:gy}};function pn(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function wn(e){return{point:{x:e.pageX,y:e.pageY}}}const by=e=>t=>vo(t)&&e(t,wn(t));function nn(e,t,n,r){return pn(e,t,by(n),r)}const pu=1e-4,vy=1-pu,xy=1+pu,gu=.01,wy=0-gu,_y=0+gu;function de(e){return e.max-e.min}function Sy(e,t,n){return Math.abs(e-t)<=n}function Js(e,t,n,r=.5){e.origin=r,e.originPoint=q(t.min,t.max,e.origin),e.scale=de(n)/de(t),e.translate=q(n.min,n.max,e.origin)-e.originPoint,(e.scale>=vy&&e.scale<=xy||isNaN(e.scale))&&(e.scale=1),(e.translate>=wy&&e.translate<=_y||isNaN(e.translate))&&(e.translate=0)}function rn(e,t,n,r){Js(e.x,t.x,n.x,r?r.originX:void 0),Js(e.y,t.y,n.y,r?r.originY:void 0)}function Zs(e,t,n){e.min=n.min+t.min,e.max=e.min+de(t)}function $y(e,t,n){Zs(e.x,t.x,n.x),Zs(e.y,t.y,n.y)}function ea(e,t,n){e.min=t.min-n.min,e.max=e.min+de(t)}function on(e,t,n){ea(e.x,t.x,n.x),ea(e.y,t.y,n.y)}function ve(e){return[e("x"),e("y")]}const yu=({current:e})=>e?e.ownerDocument.defaultView:null,ta=(e,t)=>Math.abs(e-t);function ky(e,t){const n=ta(e.x,t.x),r=ta(e.y,t.y);return Math.sqrt(n**2+r**2)}class bu{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:o=!1,distanceThreshold:s=3}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=Yr(this.lastMoveEventInfo,this.history),m=this.startEvent!==null,b=ky(h.offset,{x:0,y:0})>=this.distanceThreshold;if(!m&&!b)return;const{point:v}=h,{timestamp:x}=ie;this.history.push({...v,timestamp:x});const{onStart:y,onMove:w}=this.handlers;m||(y&&y(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),w&&w(this.lastMoveEvent,h)},this.handlePointerMove=(h,m)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=Gr(m,this.transformPagePoint),U.update(this.updatePoint,!0)},this.handlePointerUp=(h,m)=>{this.end();const{onEnd:b,onSessionEnd:v,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Yr(h.type==="pointercancel"?this.lastMoveEventInfo:Gr(m,this.transformPagePoint),this.history);this.startEvent&&b&&b(h,y),v&&v(h,y)},!vo(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=s,this.contextWindow=i||window;const a=wn(t),c=Gr(a,this.transformPagePoint),{point:l}=c,{timestamp:u}=ie;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,Yr(c,this.history)),this.removeListeners=bn(nn(this.contextWindow,"pointermove",this.handlePointerMove),nn(this.contextWindow,"pointerup",this.handlePointerUp),nn(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Qe(this.updatePoint)}}function Gr(e,t){return t?{point:t(e.point)}:e}function na(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Yr({point:e},t){return{point:e,delta:na(e,vu(t)),offset:na(e,Py(t)),velocity:Ty(t,.1)}}function Py(e){return e[0]}function vu(e){return e[e.length-1]}function Ty(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=vu(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Ee(t)));)n--;if(!r)return{x:0,y:0};const o=De(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function Cy(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?q(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?q(n,e,r.max):Math.min(e,n)),e}function ra(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Ay(e,{top:t,left:n,bottom:r,right:i}){return{x:ra(e.x,n,i),y:ra(e.y,t,r)}}function ia(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Ey(e,t){return{x:ia(e.x,t.x),y:ia(e.y,t.y)}}function Dy(e,t){let n=.5;const r=de(e),i=de(t);return i>r?n=un(t.min,t.max-r,e.min):r>i&&(n=un(e.min,e.max-i,t.min)),Ne(0,1,n)}function My(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Vi=.35;function Ry(e=Vi){return e===!1?e=0:e===!0&&(e=Vi),{x:oa(e,"left","right"),y:oa(e,"top","bottom")}}function oa(e,t,n){return{min:sa(e,t),max:sa(e,n)}}function sa(e,t){return typeof e=="number"?e:e[t]||0}const Ly=new WeakMap;class Vy{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Q(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=d=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(wn(d).point)},s=(d,h)=>{const{drag:m,dragPropagation:b,onDragStart:v}=this.getProps();if(m&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Yg(m),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ve(y=>{let w=this.getAxisMotionValue(y).get()||0;if(Me.test(w)){const{projection:_}=this.visualElement;if(_&&_.layout){const P=_.layout.layoutBox[y];P&&(w=de(P)*(parseFloat(w)/100))}}this.originPoint[y]=w}),v&&U.postRender(()=>v(d,h)),Ri(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},a=(d,h)=>{this.latestPointerEvent=d,this.latestPanInfo=h;const{dragPropagation:m,dragDirectionLock:b,onDirectionLock:v,onDrag:x}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:y}=h;if(b&&this.currentDirection===null){this.currentDirection=Iy(y),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",h.point,y),this.updateAxis("y",h.point,y),this.visualElement.render(),x&&x(d,h)},c=(d,h)=>{this.latestPointerEvent=d,this.latestPanInfo=h,this.stop(d,h),this.latestPointerEvent=null,this.latestPanInfo=null},l=()=>ve(d=>{var h;return this.getAnimationState(d)==="paused"&&((h=this.getAxisMotionValue(d).animation)==null?void 0:h.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new bu(t,{onSessionStart:o,onStart:s,onMove:a,onSessionEnd:c,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,distanceThreshold:r,contextWindow:yu(this.visualElement)})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!i||!r)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:a}=this.getProps();a&&U.postRender(()=>a(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Mn(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=Cy(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var o;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,i=this.constraints;t&&vt(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=Ay(r.layoutBox,t):this.constraints=!1,this.elastic=Ry(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&ve(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=My(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!vt(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=B0(r,i.root,this.visualElement.getTransformPagePoint());let s=Ey(i.layout.layoutBox,o);if(n){const a=n(L0(s));this.hasMutatedConstraints=!!a,a&&(s=nu(a))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:a}=this.getProps(),c=this.constraints||{},l=ve(u=>{if(!Mn(u,n,this.currentDirection))return;let d=c&&c[u]||{};s&&(d={min:0,max:0});const h=i?200:1e6,m=i?40:1e7,b={type:"inertia",velocity:r?t[u]:0,bounceStiffness:h,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(u,b)});return Promise.all(l).then(a)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Ri(this.visualElement,t),r.start(Co(t,r,0,n,this.visualElement,!1))}stopAnimation(){ve(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){ve(t=>{var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)==null?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){ve(n=>{const{drag:r}=this.getProps();if(!Mn(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:a}=i.layout.layoutBox[n];o.set(t[n]-q(s,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!vt(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};ve(s=>{const a=this.getAxisMotionValue(s);if(a&&this.constraints!==!1){const c=a.get();i[s]=Dy({min:c,max:c},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ve(s=>{if(!Mn(s,t,null))return;const a=this.getAxisMotionValue(s),{min:c,max:l}=this.constraints[s];a.set(q(c,l,i[s]))})}addListeners(){if(!this.visualElement.current)return;Ly.set(this.visualElement,this);const t=this.visualElement.current,n=nn(t,"pointerdown",c=>{const{drag:l,dragListener:u=!0}=this.getProps();l&&u&&this.start(c)}),r=()=>{const{dragConstraints:c}=this.getProps();vt(c)&&c.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,o=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),U.read(r);const s=pn(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:c,hasLayoutChanged:l})=>{this.isDragging&&l&&(ve(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=c[u].translate,d.set(d.get()+c[u].translate))}),this.visualElement.render())});return()=>{s(),n(),o(),a&&a()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Vi,dragMomentum:a=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:a}}}function Mn(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Iy(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class By extends tt{constructor(t){super(t),this.removeGroupControls=xe,this.removeListeners=xe,this.controls=new Vy(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||xe}unmount(){this.removeGroupControls(),this.removeListeners()}}const aa=e=>(t,n)=>{e&&U.postRender(()=>e(t,n))};class Oy extends tt{constructor(){super(...arguments),this.removePointerDownListener=xe}onPointerDown(t){this.session=new bu(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:yu(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:aa(t),onStart:aa(n),onMove:r,onEnd:(o,s)=>{delete this.session,i&&U.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=nn(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Kn={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ca(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ut={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(R.test(e))e=parseFloat(e);else return e;const n=ca(e,t.target.x),r=ca(e,t.target.y);return`${n}% ${r}%`}},Fy={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Je.parse(e);if(i.length>5)return r;const o=Je.createTransformer(e),s=typeof i[0]!="number"?1:0,a=n.x.scale*t.x,c=n.y.scale*t.y;i[0+s]/=a,i[1+s]/=c;const l=q(a,c,.5);return typeof i[2+s]=="number"&&(i[2+s]/=l),typeof i[3+s]=="number"&&(i[3+s]/=l),o(i)}};let Ur=!1;class Ny extends $e{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;c0(jy),o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),Ur&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Kn.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,{projection:s}=r;return s&&(s.isPresent=o,Ur=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==o?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||U.postRender(()=>{const a=s.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),bo.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;Ur=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function xu(e){const[t,n]=t0(),r=se(Jc);return f(Ny,{...e,layoutGroup:r,switchLayoutGroup:se(eu),isPresent:t,safeToRemove:n})}const jy={borderRadius:{...Ut,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ut,borderTopRightRadius:Ut,borderBottomLeftRadius:Ut,borderBottomRightRadius:Ut,boxShadow:Fy};function Wy(e,t,n){const r=le(e)?e:Rt(e);return r.start(Co("",r,t,n)),r.animation}const zy=(e,t)=>e.depth-t.depth;class Hy{constructor(){this.children=[],this.isDirty=!1}add(t){Ji(this.children,t),this.isDirty=!0}remove(t){Zi(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(zy),this.isDirty=!1,this.children.forEach(t)}}function Gy(e,t){const n=fe.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(Qe(r),e(o-t))};return U.setup(r,!0),()=>Qe(r)}const wu=["TopLeft","TopRight","BottomLeft","BottomRight"],Yy=wu.length,la=e=>typeof e=="string"?parseFloat(e):e,ua=e=>typeof e=="number"||R.test(e);function Uy(e,t,n,r,i,o){i?(e.opacity=q(0,n.opacity??1,qy(r)),e.opacityExit=q(t.opacity??1,0,Ky(r))):o&&(e.opacity=q(t.opacity??1,n.opacity??1,r));for(let s=0;s<Yy;s++){const a=`border${wu[s]}Radius`;let c=da(t,a),l=da(n,a);if(c===void 0&&l===void 0)continue;c||(c=0),l||(l=0),c===0||l===0||ua(c)===ua(l)?(e[a]=Math.max(q(la(c),la(l),r),0),(Me.test(l)||Me.test(c))&&(e[a]+="%")):e[a]=l}(t.rotate||n.rotate)&&(e.rotate=q(t.rotate||0,n.rotate||0,r))}function da(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const qy=_u(0,.5,ll),Ky=_u(.5,.95,xe);function _u(e,t,n){return r=>r<e?0:r>t?1:n(un(e,t,r))}function ha(e,t){e.min=t.min,e.max=t.max}function be(e,t){ha(e.x,t.x),ha(e.y,t.y)}function fa(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function ma(e,t,n,r,i){return e-=t,e=ar(e,1/n,r),i!==void 0&&(e=ar(e,1/i,r)),e}function Xy(e,t=0,n=1,r=.5,i,o=e,s=e){if(Me.test(t)&&(t=parseFloat(t),t=q(s.min,s.max,t/100)-s.min),typeof t!="number")return;let a=q(o.min,o.max,r);e===o&&(a-=t),e.min=ma(e.min,t,n,a,i),e.max=ma(e.max,t,n,a,i)}function pa(e,t,[n,r,i],o,s){Xy(e,t[n],t[r],t[i],t.scale,o,s)}const Qy=["x","scaleX","originX"],Jy=["y","scaleY","originY"];function ga(e,t,n,r){pa(e.x,t,Qy,n?n.x:void 0,r?r.x:void 0),pa(e.y,t,Jy,n?n.y:void 0,r?r.y:void 0)}function ya(e){return e.translate===0&&e.scale===1}function Su(e){return ya(e.x)&&ya(e.y)}function ba(e,t){return e.min===t.min&&e.max===t.max}function Zy(e,t){return ba(e.x,t.x)&&ba(e.y,t.y)}function va(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function $u(e,t){return va(e.x,t.x)&&va(e.y,t.y)}function xa(e){return de(e.x)/de(e.y)}function wa(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class eb{constructor(){this.members=[]}add(t){Ji(this.members,t),t.scheduleRender()}remove(t){if(Zi(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1){r=o;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function tb(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:l,rotate:u,rotateX:d,rotateY:h,skewX:m,skewY:b}=n;l&&(r=`perspective(${l}px) ${r}`),u&&(r+=`rotate(${u}deg) `),d&&(r+=`rotateX(${d}deg) `),h&&(r+=`rotateY(${h}deg) `),m&&(r+=`skewX(${m}deg) `),b&&(r+=`skewY(${b}deg) `)}const a=e.x.scale*t.x,c=e.y.scale*t.y;return(a!==1||c!==1)&&(r+=`scale(${a}, ${c})`),r||"none"}const qr=["","X","Y","Z"],nb=1e3;let rb=0;function Kr(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function ku(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=uu(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",U,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&ku(r)}function Pu({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},a=t==null?void 0:t()){this.id=rb++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(sb),this.nodes.forEach(ub),this.nodes.forEach(db),this.nodes.forEach(ab)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new Hy)}addEventListener(s,a){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new no),this.eventHandlers.get(s).add(a)}notifyListeners(s,...a){const c=this.eventHandlers.get(s);c&&c.notify(...a)}hasListeners(s){return this.eventHandlers.has(s)}mount(s){if(this.instance)return;this.isSVG=jl(s)&&!Jg(s),this.instance=s;const{layoutId:a,layout:c,visualElement:l}=this.options;if(l&&!l.current&&l.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||a)&&(this.isLayoutDirty=!0),e){let u,d=0;const h=()=>this.root.updateBlockedByResize=!1;U.read(()=>{d=window.innerWidth}),e(s,()=>{const m=window.innerWidth;m!==d&&(d=m,this.root.updateBlockedByResize=!0,u&&u(),u=Gy(h,250),Kn.hasAnimatedSinceResize&&(Kn.hasAnimatedSinceResize=!1,this.nodes.forEach($a)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&l&&(a||c)&&this.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d,hasRelativeLayoutChanged:h,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||l.getDefaultTransition()||gb,{onLayoutAnimationStart:v,onLayoutAnimationComplete:x}=l.getProps(),y=!this.targetLayout||!$u(this.targetLayout,m),w=!d&&h;if(this.options.layoutRoot||this.resumeFrom||w||d&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const _={...go(b,"layout"),onPlay:v,onComplete:x};(l.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_),this.setAnimationOrigin(u,w)}else d||$a(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Qe(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(hb),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&ku(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:c}=this.options;if(a===void 0&&!c)return;const l=this.getTransformTemplate();this.prevTransformTemplateValue=l?l(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(_a);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Sa);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(lb),this.nodes.forEach(ib),this.nodes.forEach(ob)):this.nodes.forEach(Sa),this.clearAllSnapshots();const a=fe.now();ie.delta=Ne(0,1e3/60,a-ie.timestamp),ie.timestamp=a,ie.isProcessing=!0,Br.update.process(ie),Br.preRender.process(ie),Br.render.process(ie),ie.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,bo.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(cb),this.sharedNodes.forEach(fb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,U.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){U.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!de(this.snapshot.measuredBox.x)&&!de(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Q(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(a=!1),a&&this.instance){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Su(this.projectionDelta),c=this.getTransformTemplate(),l=c?c(this.latestValues,""):void 0,u=l!==this.prevTransformTemplateValue;s&&this.instance&&(a||ot(this.latestValues)||u)&&(i(this.instance,l),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const a=this.measurePageBox();let c=this.removeElementScroll(a);return s&&(c=this.removeTransform(c)),yb(c),{animationId:this.root.animationId,measuredBox:a,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var l;const{visualElement:s}=this.options;if(!s)return Q();const a=s.measureViewportBox();if(!(((l=this.scroll)==null?void 0:l.wasRoot)||this.path.some(bb))){const{scroll:u}=this.root;u&&(xt(a.x,u.offset.x),xt(a.y,u.offset.y))}return a}removeElementScroll(s){var c;const a=Q();if(be(a,s),(c=this.scroll)!=null&&c.wasRoot)return a;for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:d,options:h}=u;u!==this.root&&d&&h.layoutScroll&&(d.wasRoot&&be(a,s),xt(a.x,d.offset.x),xt(a.y,d.offset.y))}return a}applyTransform(s,a=!1){const c=Q();be(c,s);for(let l=0;l<this.path.length;l++){const u=this.path[l];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&wt(c,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),ot(u.latestValues)&&wt(c,u.latestValues)}return ot(this.latestValues)&&wt(c,this.latestValues),c}removeTransform(s){const a=Q();be(a,s);for(let c=0;c<this.path.length;c++){const l=this.path[c];if(!l.instance||!ot(l.latestValues))continue;Ai(l.latestValues)&&l.updateSnapshot();const u=Q(),d=l.measurePageBox();be(u,d),ga(a,l.latestValues,l.snapshot?l.snapshot.layoutBox:void 0,u)}return ot(this.latestValues)&&ga(a,this.latestValues),a}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ie.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var h;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==a;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||(h=this.parent)!=null&&h.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:u,layoutId:d}=this.options;if(!(!this.layout||!(u||d))){if(this.resolvedRelativeTargetAt=ie.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Q(),this.relativeTargetOrigin=Q(),on(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),be(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Q(),this.targetWithTransforms=Q()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),$y(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):be(this.target,this.layout.layoutBox),iu(this.target,this.targetDelta)):be(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Q(),this.relativeTargetOrigin=Q(),on(this.relativeTargetOrigin,this.target,m.target),be(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Ai(this.parent.latestValues)||ru(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var b;const s=this.getLead(),a=!!this.resumingFrom||this!==s;let c=!0;if((this.isProjectionDirty||(b=this.parent)!=null&&b.isProjectionDirty)&&(c=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===ie.timestamp&&(c=!1),c)return;const{layout:l,layoutId:u}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(l||u))return;be(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,h=this.treeScale.y;I0(this.layoutCorrected,this.treeScale,this.path,a),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=Q());const{target:m}=s;if(!m){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(fa(this.prevProjectionDelta.x,this.projectionDelta.x),fa(this.prevProjectionDelta.y,this.projectionDelta.y)),rn(this.projectionDelta,this.layoutCorrected,m,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==h||!wa(this.projectionDelta.x,this.prevProjectionDelta.x)||!wa(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),s){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=_t(),this.projectionDelta=_t(),this.projectionDeltaWithTransform=_t()}setAnimationOrigin(s,a=!1){const c=this.snapshot,l=c?c.latestValues:{},u={...this.latestValues},d=_t();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=Q(),m=c?c.source:void 0,b=this.layout?this.layout.source:void 0,v=m!==b,x=this.getStack(),y=!x||x.members.length<=1,w=!!(v&&!y&&this.options.crossfade===!0&&!this.path.some(pb));this.animationProgress=0;let _;this.mixTargetDelta=P=>{const k=P/1e3;ka(d.x,s.x,k),ka(d.y,s.y,k),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(on(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),mb(this.relativeTarget,this.relativeTargetOrigin,h,k),_&&Zy(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=Q()),be(_,this.relativeTarget)),v&&(this.animationValues=u,Uy(u,l,this.latestValues,k,w,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){var a,c,l;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(l=(c=this.resumingFrom)==null?void 0:c.currentAnimation)==null||l.stop(),this.pendingAnimation&&(Qe(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=U.update(()=>{Kn.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Rt(0)),this.currentAnimation=Wy(this.motionValue,[0,1e3],{...s,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),s.onUpdate&&s.onUpdate(u)},onStop:()=>{},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(nb),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:a,target:c,layout:l,latestValues:u}=s;if(!(!a||!c||!l)){if(this!==s&&this.layout&&l&&Tu(this.options.animationType,this.layout.layoutBox,l.layoutBox)){c=this.target||Q();const d=de(this.layout.layoutBox.x);c.x.min=s.target.x.min,c.x.max=c.x.min+d;const h=de(this.layout.layoutBox.y);c.y.min=s.target.y.min,c.y.max=c.y.min+h}be(a,c),wt(a,u),rn(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(s,a){this.sharedNodes.has(s)||this.sharedNodes.set(s,new eb),this.sharedNodes.get(s).add(a);const l=a.options.initialPromotionConfig;a.promote({transition:l?l.transition:void 0,preserveFollowOpacity:l&&l.shouldPreserveFollowOpacity?l.shouldPreserveFollowOpacity(a):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var a;const{layoutId:s}=this.options;return s?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:s}=this.options;return s?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:a,preserveFollowOpacity:c}={}){const l=this.getStack();l&&l.promote(this,c),s&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let a=!1;const{latestValues:c}=s;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(a=!0),!a)return;const l={};c.z&&Kr("z",s,l,this.animationValues);for(let u=0;u<qr.length;u++)Kr(`rotate${qr[u]}`,s,l,this.animationValues),Kr(`skew${qr[u]}`,s,l,this.animationValues);s.render();for(const u in l)s.setStaticValue(u,l[u]),this.animationValues&&(this.animationValues[u]=l[u]);s.scheduleRender()}applyProjectionStyles(s,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){s.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,s.visibility="",s.opacity="",s.pointerEvents=qn(a==null?void 0:a.pointerEvents)||"",s.transform=c?c(this.latestValues,""):"none";return}const l=this.getLead();if(!this.projectionDelta||!this.layout||!l.target){this.options.layoutId&&(s.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,s.pointerEvents=qn(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!ot(this.latestValues)&&(s.transform=c?c({},""):"none",this.hasProjected=!1);return}s.visibility="";const u=l.animationValues||l.latestValues;this.applyTransformsToTarget();let d=tb(this.projectionDeltaWithTransform,this.treeScale,u);c&&(d=c(u,d)),s.transform=d;const{x:h,y:m}=this.projectionDelta;s.transformOrigin=`${h.origin*100}% ${m.origin*100}% 0`,l.animationValues?s.opacity=l===this?u.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:u.opacityExit:s.opacity=l===this?u.opacity!==void 0?u.opacity:"":u.opacityExit!==void 0?u.opacityExit:0;for(const b in mn){if(u[b]===void 0)continue;const{correct:v,applyTo:x,isCSSVariable:y}=mn[b],w=d==="none"?u[b]:v(u[b],l);if(x){const _=x.length;for(let P=0;P<_;P++)s[x[P]]=w}else y?this.options.visualElement.renderState.vars[b]=w:s[b]=w}this.options.layoutId&&(s.pointerEvents=l===this?qn(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var a;return(a=s.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(_a),this.root.sharedNodes.clear()}}}function ib(e){e.updateLayout()}function ob(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=t.source!==e.layout.source;o==="size"?ve(d=>{const h=s?t.measuredBox[d]:t.layoutBox[d],m=de(h);h.min=r[d].min,h.max=h.min+m}):Tu(o,t.layoutBox,r)&&ve(d=>{const h=s?t.measuredBox[d]:t.layoutBox[d],m=de(r[d]);h.max=h.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+m)});const a=_t();rn(a,r,t.layoutBox);const c=_t();s?rn(c,e.applyTransform(i,!0),t.measuredBox):rn(c,r,t.layoutBox);const l=!Su(a);let u=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:h,layout:m}=d;if(h&&m){const b=Q();on(b,t.layoutBox,h.layoutBox);const v=Q();on(v,r,m.layoutBox),$u(b,v)||(u=!0),d.options.layoutRoot&&(e.relativeTarget=v,e.relativeTargetOrigin=b,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:c,layoutDelta:a,hasLayoutChanged:l,hasRelativeLayoutChanged:u})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function sb(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function ab(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function cb(e){e.clearSnapshot()}function _a(e){e.clearMeasurements()}function Sa(e){e.isLayoutDirty=!1}function lb(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function $a(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function ub(e){e.resolveTargetDelta()}function db(e){e.calcProjection()}function hb(e){e.resetSkewAndRotation()}function fb(e){e.removeLeadSnapshot()}function ka(e,t,n){e.translate=q(t.translate,0,n),e.scale=q(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Pa(e,t,n,r){e.min=q(t.min,n.min,r),e.max=q(t.max,n.max,r)}function mb(e,t,n,r){Pa(e.x,t.x,n.x,r),Pa(e.y,t.y,n.y,r)}function pb(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const gb={duration:.45,ease:[.4,0,.1,1]},Ta=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Ca=Ta("applewebkit/")&&!Ta("chrome/")?Math.round:xe;function Aa(e){e.min=Ca(e.min),e.max=Ca(e.max)}function yb(e){Aa(e.x),Aa(e.y)}function Tu(e,t,n){return e==="position"||e==="preserve-aspect"&&!Sy(xa(t),xa(n),.2)}function bb(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const vb=Pu({attachResizeListener:(e,t)=>pn(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Xr={current:void 0},Cu=Pu({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Xr.current){const e=new vb({});e.mount(window),e.setOptions({layoutScroll:!0}),Xr.current=e}return Xr.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),xb={pan:{Feature:Oy},drag:{Feature:By,ProjectionNode:Cu,MeasureLayout:xu}};function Ea(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&U.postRender(()=>o(t,wn(t)))}class wb extends tt{mount(){const{current:t}=this.node;t&&(this.unmount=Ug(t,(n,r)=>(Ea(this.node,r,"Start"),i=>Ea(this.node,i,"End"))))}unmount(){}}class _b extends tt{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=bn(pn(this.node.current,"focus",()=>this.onFocus()),pn(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Da(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&U.postRender(()=>o(t,wn(t)))}class Sb extends tt{mount(){const{current:t}=this.node;t&&(this.unmount=Qg(t,(n,r)=>(Da(this.node,r,"Start"),(i,{success:o})=>Da(this.node,i,o?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ii=new WeakMap,Qr=new WeakMap,$b=e=>{const t=Ii.get(e.target);t&&t(e)},kb=e=>{e.forEach($b)};function Pb({root:e,...t}){const n=e||document;Qr.has(n)||Qr.set(n,{});const r=Qr.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(kb,{root:e,...t})),r[i]}function Tb(e,t,n){const r=Pb(t);return Ii.set(e,n),r.observe(e),()=>{Ii.delete(e),r.unobserve(e)}}const Cb={some:0,all:1};class Ab extends tt{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:Cb[i]},a=c=>{const{isIntersecting:l}=c;if(this.isInView===l||(this.isInView=l,o&&!l&&this.hasEnteredView))return;l&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",l);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),h=l?u:d;h&&h(c)};return Tb(this.node.current,s,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Eb(t,n))&&this.startObserver()}unmount(){}}function Eb({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Db={inView:{Feature:Ab},tap:{Feature:Sb},focus:{Feature:_b},hover:{Feature:wb}},Mb={layout:{ProjectionNode:Cu,MeasureLayout:xu}},Rb={...yy,...Db,...xb,...Mb},Lb=R0(Rb,Y0);function Vb({children:e,delay:t=0,direction:n="up",className:r}){const i=()=>{switch(n){case"up":return{y:50,opacity:0};case"down":return{y:-50,opacity:0};case"left":return{x:-50,opacity:0};case"right":return{x:50,opacity:0};default:return{y:50,opacity:0}}};return f(Lb.div,{className:r,initial:i(),whileInView:{x:0,y:0,opacity:1},transition:{duration:.6,delay:t,ease:"easeOut"},viewport:{once:!0,amount:.3},children:e})}const Ib=()=>()=>{window.scrollTo({top:0,behavior:"smooth"})},Bb=g.button`
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
`,Ob=g.span`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;function xr(){const[e,t]=F(!1),n=Ib();return X(()=>{const r=()=>{const i=window.scrollY;t(i>400)};return window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)},[]),e?f(Vb,{children:f(Bb,{onClick:n,children:f(Ob,{children:"↑"})})}):null}const Fb=g.div`
  width: 100%;
  min-height: 100vh;

  section {
    min-height: 100vh;
    padding: ${S.xl} ${S.lg};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (max-width: ${I.tablet}) {
      padding: ${S.lg} ${S.md};
      min-height: auto;
      padding-top: ${S.xl};
      padding-bottom: ${S.xl};
    }

    @media (max-width: ${I.mobile}) {
      padding: ${S.md} ${S.sm};
    }
  }

  #home {
    background: ${p.background.gradient};
  }

  #about {
    background: ${p.background.secondary};
  }

  #skills {
    background: ${p.background.main};
  }
`;function Ma({onNavigate:e}){const t=he(null),n=he(null),r=he(null);return X(()=>{const i=o=>{const s=o.target;if(s.hash){o.preventDefault();const a=document.querySelector(s.hash);a&&a.scrollIntoView({behavior:"smooth",block:"start"})}};return document.addEventListener("click",i),()=>document.removeEventListener("click",i)},[]),f(Fb,{children:[f("section",{id:"home",ref:t,children:f(Lm,{onNavigate:e})}),f("section",{id:"about",ref:n,children:f(Nm,{})}),f("section",{id:"skills",ref:r,children:f(tp,{})}),f(xr,{})]})}const Ra=g.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;g.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${p.cardOverlay};
  color: ${p.text.secondary};
  padding: 0.25rem 0.5rem;
  border-radius: ${me.small};
  font-size: ${D.fontSize.xs};
  font-weight: ${D.fontWeight.medium};
  border: 1px solid ${p.borderLight};
`;const La=g.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`,Va=g.h2`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
`,Nb=g.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,jb=g.div`
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
`,Wb=g.h3`
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: capitalize;
`,zb=g.p`
  color: #b8b8b8;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  min-height: 60px;
`,Hb=g.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`,Gb=g.span`
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`,Yb=g.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`,Ia=g.a`
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
`;g.div`
  height: 80px;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1));
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;const Ub=g.div`
  text-align: center;
  margin: ${S.lg} 0;
  color: ${p.text.secondary};
  font-size: ${D.fontSize.sm};
`,qb=g.button`
  display: block;
  margin: ${S.xl} auto;
  background: ${p.gradients.primary};
  color: ${p.text.primary};
  border: none;
  padding: ${S.md} ${S.xl};
  border-radius: ${me.medium};
  font-size: ${D.fontSize.base};
  font-weight: ${D.fontWeight.medium};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${Le.medium};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${Le.hover};
    background: ${p.gradients.hover};
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;g.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${S.md};
  margin: ${S.xl} 0;
`;g.button`
  background: ${p.cardOverlay};
  border: 1px solid ${p.borderLight};
  color: ${p.text.primary};
  padding: ${S.sm} ${S.md};
  border-radius: ${me.small};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${p.gradients.card};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;function Kb(){const[e,t]=F([]),[n,r]=F([]),[i,o]=F(!0),[s,a]=F(1),[c]=et(),l=ye(),u=6;X(()=>{(async()=>{try{const _=(await(await fetch("https://api.github.com/users/wiltoon/repos?type=owner&sort=updated&per_page=100")).json()).filter(P=>!P.name.includes("wiltoon")&&!P.name.toLowerCase().includes(".github.io")&&P.name!=="wiltoon");t(_),r(_.slice(0,u))}catch(y){console.error("Erro ao buscar repositórios:",y)}finally{o(!1)}})()},[]);const d=()=>{const x=s+1,y=(x-1)*u,w=y+u,_=e.slice(y,w);r([...n,..._]),a(x)},h=n.length<e.length,m=x=>new Date(x).toLocaleDateString(pr(c)),b=x=>({TypeScript:"#3178c6",JavaScript:"#f1e05a",Python:"#3572a5",Java:"#b07219","C#":"#239120",CSS:"#1572b6",HTML:"#e34c26",PHP:"#4f5d95",Go:"#00add8",Rust:"#dea584",Vue:"#4fc08d",React:"#61dafb"})[x||""]||"#8b5cf6",v=l({EN:{title:"My GitHub Projects",loading:"🔄 Loading GitHub projects...",noDescription:"No description available",viewCode:"View Code",viewDemo:"View Demo",loadMore:"Load More Projects",showing:"Showing"},BR:{title:"Meus Projetos do GitHub",loading:"🔄 Carregando projetos do GitHub...",noDescription:"Sem descrição disponível",viewCode:"Ver Código",viewDemo:"Ver Demo",loadMore:"Carregar Mais Projetos",showing:"Mostrando"},ES:{title:"Mis Proyectos de GitHub",loading:"🔄 Cargando proyectos de GitHub...",noDescription:"Sin descripción disponible",viewCode:"Ver Código",viewDemo:"Ver Demo",loadMore:"Cargar Más Proyectos",showing:"Mostrando"}});return i?f(Ra,{id:"portfolio",children:[f(La,{children:f(Va,{children:v.title})}),f("div",{style:{textAlign:"center",color:"#8b5cf6",padding:"2rem"},children:v.loading})]}):f(Ra,{id:"portfolio",children:[f(La,{children:f(Va,{children:v.title})}),f(Ub,{children:[v.showing," ",n.length," ",l({EN:"of",BR:"de",ES:"de"})," ",e.length," ",l({EN:"projects",BR:"projetos",ES:"proyectos"})]}),f(Nb,{children:n.map(x=>f(jb,{children:[f(Wb,{children:x.name}),f(zb,{children:x.description||v.noDescription}),f("div",{style:{display:"flex",gap:"1rem",marginBottom:"1rem",fontSize:"0.8rem",color:"#8b5cf6"},children:[f("span",{children:["⭐ ",x.stargazers_count]}),f("span",{children:["📅 ",m(x.updated_at)]})]}),f(Hb,{children:x.language&&f(Gb,{style:{backgroundColor:b(x.language)+"20",color:b(x.language),border:`1px solid ${b(x.language)}50`},children:x.language})}),f(Yb,{children:[f(Ia,{href:x.html_url,target:"_blank",rel:"noopener noreferrer",children:["📂 ",v.viewCode]}),x.homepage&&f(Ia,{href:x.homepage,target:"_blank",rel:"noopener noreferrer",children:["🌐 ",v.viewDemo]})]})]},x.id))}),h&&f(qb,{onClick:d,children:[v.loadMore," (",e.length-n.length," ",l({EN:"remaining",BR:"restantes",ES:"restantes"}),")"]})]})}const Xb=g.div`
  width: 100%;
  min-height: 100vh;
  background: ${p.background.gradient};
  padding: ${S.xl} ${S.lg};

  @media (max-width: ${I.tablet}) {
    padding: ${S.lg} ${S.md};
  }

  @media (max-width: ${I.mobile}) {
    padding: ${S.md} ${S.sm};
  }
`,Qb=g.header`
  text-align: center;
  margin-bottom: ${S.xl};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: ${D.fontSize["5xl"]};
    background: ${p.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${S.md};

    @media (max-width: ${I.tablet}) {
      font-size: ${D.fontSize["4xl"]};
    }

    @media (max-width: ${I.mobile}) {
      font-size: ${D.fontSize["3xl"]};
    }
  }

  p {
    font-size: ${D.fontSize.lg};
    color: ${p.text.secondary};
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: ${I.mobile}) {
      font-size: ${D.fontSize.base};
    }
  }
`;function Jb(){const t=ye()({EN:{title:"My Projects",subtitle:"A selection of projects I developed, integrating directly with GitHub"},BR:{title:"Meus Projetos",subtitle:"Uma seleção dos projetos que desenvolvi, integrando diretamente com o GitHub"},ES:{title:"Mis Proyectos",subtitle:"Una selección de los proyectos que desarrollé, integrada directamente con GitHub"}});return f(Xb,{children:[f(Qb,{children:[f("h1",{children:t.title}),f("p",{children:t.subtitle})]}),f(Kb,{}),f(xr,{})]})}const Zb=g.div`
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
`,ev=g.div`
  background: ${p.background.card};
  border: 1px solid ${p.borderLight};
  border-radius: ${me.large};
  padding: ${S.xl};
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  margin: ${S.md};
  position: relative;
  box-shadow: ${Le.hover};

  @media (max-width: ${I.tablet}) {
    max-width: 95vw;
    padding: ${S.lg};
  }

  @media (max-width: ${I.mobile}) {
    padding: ${S.md};
  }
`,tv=g.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${S.lg};
  padding-bottom: ${S.md};
  border-bottom: 1px solid ${p.borderLight};
`,nv=g.h2`
  color: ${p.text.primary};
  font-size: ${D.fontSize["2xl"]};
  font-weight: ${D.fontWeight.semibold};
  margin: 0;
  line-height: 1.2;

  @media (max-width: ${I.mobile}) {
    font-size: ${D.fontSize.xl};
  }
`,rv=g.button`
  background: none;
  border: none;
  color: ${p.text.secondary};
  font-size: ${D.fontSize["2xl"]};
  cursor: pointer;
  padding: ${S.xs};
  border-radius: ${me.small};
  transition: all 0.3s ease;
  line-height: 1;

  &:hover {
    background: ${p.cardOverlay};
    color: ${p.text.primary};
  }
`,Ge=g.div`
  margin-bottom: ${S.lg};

  &:last-child {
    margin-bottom: 0;
  }
`,Ye=g.h3`
  color: ${p.primary};
  font-size: ${D.fontSize.lg};
  font-weight: ${D.fontWeight.semibold};
  margin-bottom: ${S.md};
  display: flex;
  align-items: center;
  gap: ${S.sm};
`,iv=g.div`
  color: ${p.text.secondary};
  line-height: 1.6;
  margin-bottom: ${S.md};
`,Ba=g.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${S.sm};
`,Oa=g.span`
  background: ${p.cardOverlay};
  color: ${p.text.primary};
  padding: ${S.xs} ${S.sm};
  border-radius: ${me.small};
  font-size: ${D.fontSize.sm};
  border: 1px solid ${p.borderLight};
  transition: all 0.3s ease;

  &:hover {
    background: ${p.gradients.card};
    transform: translateY(-1px);
  }
`,Rn=g.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`,Ln=g.li`
  color: ${p.text.secondary};
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
`,ov=g.div`
  background: ${p.gradients.card};
  color: ${p.text.primary};
  padding: ${S.sm} ${S.md};
  border-radius: ${me.medium};
  font-size: ${D.fontSize.sm};
  font-weight: ${D.fontWeight.medium};
  display: inline-block;
  margin-bottom: ${S.md};
`,sv=g.div`
  background: ${p.gradients.card};
  border-radius: ${me.medium};
  padding: ${S.md};
  margin-top: ${S.lg};
  border: 1px solid ${p.borderLight};
`,av=g.a`
  display: inline-flex;
  align-items: center;
  gap: ${S.sm};
  background: #0077b5;
  color: white;
  padding: ${S.sm} ${S.md};
  border-radius: ${me.small};
  text-decoration: none;
  font-weight: ${D.fontWeight.medium};
  transition: all 0.3s ease;

  &:hover {
    background: #005885;
    transform: translateY(-1px);
    box-shadow: ${Le.medium};
  }
`;function cv({isOpen:e,onClose:t,job:n}){const[r]=et(),i=ye();if(X(()=>{const h=m=>{m.key==="Escape"&&t()};return e&&(document.addEventListener("keydown",h),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",h),document.body.style.overflow="unset"}},[e,t]),!e)return null;const o=oe(n.startDate),s=n.endDate==="At the moment"?new Date:oe(n.endDate),a=Hc(s,o),c=()=>{const h=Math.floor(a/12),m=a%12;return r==="EN"?h>0&&m>0?`${h}y ${m}mo`:h>0?`${h} year${h>1?"s":""}`:`${m} month${m>1?"s":""}`:r==="ES"?h>0&&m>0?`${h}a ${m}m`:h>0?`${h} año${h>1?"s":""}`:`${m} mes${m>1?"es":""}`:h>0&&m>0?`${h}a ${m}m`:h>0?`${h} ano${h>1?"s":""}`:`${m} mes${m>1?"es":""}`},l=()=>{const h=ys(o,"MMM yyyy"),m=n.endDate==="At the moment"?i({EN:"Present",BR:"Atual",ES:"Actualidad"}):ys(s,"MMM yyyy");return`${h} - ${m}`},u=i({EN:{duration:"Duration",description:"Description",technologies:"Technologies",databases:"Databases",projects:"Key Projects",learnings:"Learning & Growth",achievements:"Achievements",responsibilities:"Key Responsibilities",recommendations:"Recommendations",viewOnLinkedIn:"View on LinkedIn",company:"Company"},BR:{duration:"Duração",description:"Descrição",technologies:"Tecnologias",databases:"Bancos de Dados",projects:"Projetos Principais",learnings:"Aprendizados",achievements:"Conquistas",responsibilities:"Principais Responsabilidades",recommendations:"Recomendações",viewOnLinkedIn:"Ver no LinkedIn",company:"Empresa"},ES:{duration:"Duración",description:"Descripción",technologies:"Tecnologías",databases:"Bases de Datos",projects:"Proyectos Principales",learnings:"Aprendizajes",achievements:"Logros",responsibilities:"Responsabilidades Principales",recommendations:"Recomendaciones",viewOnLinkedIn:"Ver en LinkedIn",company:"Empresa"}});return f(Zb,{onClick:h=>{h.target===h.currentTarget&&t()},children:f(ev,{children:[f(tv,{children:[f("div",{children:[f(nv,{children:n.title}),n.company&&f("div",{style:{color:"#8b5cf6",fontSize:"1rem",marginTop:"0.5rem"},children:n.company})]}),f(rv,{onClick:t,children:"×"})]}),f(ov,{children:[l()," • ",c()]}),f(Ge,{children:[f(Ye,{children:["📋 ",u.description]}),f(iv,{children:n.description})]}),n.achievements&&n.achievements.length>0&&f(Ge,{children:[f(Ye,{children:["🏆 ",u.achievements]}),f(Rn,{children:n.achievements.map((h,m)=>f(Ln,{children:h},m))})]}),n.languages.length>0&&f(Ge,{children:[f(Ye,{children:["💻 ",u.technologies]}),f(Ba,{children:n.languages.map((h,m)=>f(Oa,{children:h},m))})]}),n.databases.length>0&&f(Ge,{children:[f(Ye,{children:["🗄️ ",u.databases]}),f(Ba,{children:n.databases.map((h,m)=>f(Oa,{children:h},m))})]}),n.projects.length>0&&f(Ge,{children:[f(Ye,{children:["🚀 ",u.projects]}),f(Rn,{children:n.projects.map((h,m)=>f(Ln,{children:h},m))})]}),n.learnings.length>0&&f(Ge,{children:[f(Ye,{children:["📚 ",u.learnings]}),f(Rn,{children:n.learnings.map((h,m)=>f(Ln,{children:h},m))})]}),n.responsibilities&&n.responsibilities.length>0&&f(Ge,{children:[f(Ye,{children:["📝 ",u.responsibilities]}),f(Rn,{children:n.responsibilities.map((h,m)=>f(Ln,{children:h},m))})]}),n.recommendations&&n.recommendations.length>0&&f(Ge,{children:[f(Ye,{children:["💬 ",u.recommendations]}),n.recommendations.map((h,m)=>f("div",{style:{backgroundColor:"#1e293b",padding:"1rem",borderRadius:"0.5rem",marginBottom:"0.5rem",borderLeft:"3px solid #8b5cf6"},children:[f("p",{style:{fontStyle:"italic",marginBottom:"0.5rem",color:"#e2e8f0"},children:['"',h.text,'"']}),f("p",{style:{fontSize:"0.875rem",color:"#94a3b8",textAlign:"right"},children:["— ",h.author," (",h.relationship,")"]})]},m))]}),n.linkedInUrl&&f(sv,{children:f(av,{href:n.linkedInUrl,target:"_blank",rel:"noopener noreferrer",children:[f("span",{children:"💼"})," ",u.viewOnLinkedIn]})})]})})}const wr=p.primary,Ao=p.secondary,Pe=e=>e==="professional"?wr:Ao,Bi=150,Eo=.45,Au=Ve`
    0%   { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.6); }
    70%  { box-shadow: 0 0 0 18px rgba(139, 92, 246, 0); }
    100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
`,jt=`@media (max-width: ${I.tablet})`,_r="@media (prefers-reduced-motion: reduce)",Fa=g.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 1rem 6rem;
`,lv=g.div`
    display: grid;
    grid-template-columns: 1fr ${Bi}px 1fr;
    margin-bottom: 1.5rem;
    font-weight: 700;
    font-size: 0.95rem;

    span:first-child { text-align: right; color: ${wr}; }
    span:last-child  { grid-column: 3; color: ${Ao}; }

    ${jt} {
        grid-template-columns: 1fr;
        gap: 0.25rem;
        span:first-child, span:last-child { grid-column: 1; text-align: left; }
    }
`,Na=g.div`
    position: relative;
`,_n=We`
    left: 50%;
    transform: translateX(-50%);
    ${jt} { left: 20px; }
`,ja=g.div`
    position: absolute;
    top: 0;
    width: 4px;
    border-radius: 4px;
    background: rgba(203, 213, 225, 0.12);
    ${_n}
`,Wa=g.div`
    position: absolute;
    top: 0;
    width: 4px;
    border-radius: 4px;
    background: linear-gradient(180deg, ${Ao}, ${wr} 60%, ${p.accent});
    box-shadow: 0 0 16px rgba(139, 92, 246, 0.55);
    ${_n}
`,uv=g.div`
    position: absolute;
    width: 6px;
    border-radius: 6px;
    left: calc(50% ${e=>e.$kind==="professional"?"- 14px":"+ 8px"});
    background: ${e=>Pe(e.$kind)};
    opacity: ${e=>e.$on?.85:.22};
    box-shadow: ${e=>e.$on?`0 0 12px ${Pe(e.$kind)}`:"none"};
    transition: opacity 0.4s ease, box-shadow 0.4s ease;
`,dv=g.div`
    position: absolute;
    z-index: 2;
    width: 14px;
    height: 14px;
    margin-top: -7px;
    border-radius: 50%;
    background: ${e=>e.$active?Pe(e.$kind):p.background.main};
    border: 3px solid ${e=>e.$active?Pe(e.$kind):"rgba(203, 213, 225, 0.35)"};
    transition: background 0.4s ease, border-color 0.4s ease;
    ${_n}

    span {
        position: absolute;
        top: 50%;
        ${e=>e.$kind==="professional"?"right: 26px;":"left: 26px;"}
        transform: translateY(-50%);
        font-size: 0.72rem;
        font-weight: 700;
        white-space: nowrap;
        color: ${e=>e.$active?Pe(e.$kind):p.text.muted};
        transition: color 0.4s ease;
    }
`,za=g.div`
    position: absolute;
    z-index: 4;
    width: 22px;
    height: 22px;
    margin-top: -11px;
    border-radius: 50%;
    background: ${p.text.primary};
    border: 4px solid ${wr};
    animation: ${Au} 1.8s ease-out infinite;
    ${_n}

    span {
        position: absolute;
        left: 50%;
        top: -30px;
        transform: translateX(-50%);
        padding: 0.15rem 0.6rem;
        border-radius: 999px;
        font-size: 0.75rem;
        font-weight: 800;
        white-space: nowrap;
        color: ${p.text.primary};
        background: ${p.background.main};
        border: 1px solid rgba(139, 92, 246, 0.6);
    }

    ${jt} {
        span { left: 30px; top: 50%; transform: translateY(-50%); }
    }
    ${_r} { animation: none; }
`,hv=g.div`
    position: absolute;
    ${e=>e.$kind==="professional"?`left: 0; right: calc(50% + ${Bi/2}px);`:`left: calc(50% + ${Bi/2}px); right: 0;`}
`,fv=g.article`
    position: sticky;
    top: calc(${Eo*100}vh - 34px);
    z-index: ${e=>e.$state==="ongoing"?3:1};
    padding: 1.2rem 1.3rem;
    border-radius: 16px;
    background: ${p.background.secondary};
    background-image: ${p.gradients.card};
    border: 1px solid ${p.borderLight};
    border-${e=>e.$kind==="professional"?"right":"left"}: 3px solid ${e=>Pe(e.$kind)};
    box-shadow: ${e=>e.$state==="ongoing"?`0 12px 36px rgba(0,0,0,0.35), 0 0 0 1px ${Pe(e.$kind)}55`:"none"};
    opacity: ${e=>({future:0,ongoing:1,past:.2})[e.$state]};
    transform: ${e=>e.$state==="future"?`translate3d(${e.$kind==="professional"?"-48px":"48px"}, 0, 0)`:e.$state==="past"?"scale(0.97)":"none"};
    transition: opacity 0.5s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease;

    &:hover { opacity: 1; }

    ${_r} { transition: none; transform: none; }
`,mv=g.div`
    position: relative;
    display: grid;
    grid-template-columns: 40px 1fr;
    align-items: center;
    padding: 1.1rem 0;
`,pv=g.div`
    justify-self: center;
    z-index: 2;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${e=>e.$active?Pe(e.$kind):p.background.main};
    border: 3px solid ${e=>e.$active?Pe(e.$kind):"rgba(203, 213, 225, 0.35)"};
    transition: background 0.4s ease, border-color 0.4s ease;
`,gv=g.article`
    padding: 1.1rem 1.2rem;
    border-radius: 16px;
    background: ${p.gradients.card};
    border: 1px solid ${p.borderLight};
    border-left: 3px solid ${e=>Pe(e.$kind)};
    opacity: ${e=>e.$active?1:0};
    transform: ${e=>e.$active?"none":"translate3d(32px, 0, 0)"};
    transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    ${_r} { opacity: 1; transform: none; transition: none; }
`,yv=g.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: ${p.text.muted};
`,Jr=g.span`
    padding: 0.1rem 0.55rem;
    border-radius: 999px;
    font-size: 0.72rem;
    font-weight: 700;
    color: ${e=>e.$color??p.text.secondary};
    background: rgba(15, 23, 42, 0.55);
    border: 1px solid ${e=>e.$color?`${e.$color}66`:p.borderLight};
`,bv=g.h3`
    margin: 0.5rem 0 0.15rem;
    font-size: 1.1rem;
`,vv=g.div`
    font-weight: 700;
    font-size: 0.9rem;
    color: ${e=>Pe(e.$kind)};
`,xv=g.p`
    margin: 0.55rem 0 0;
    font-size: 0.88rem;
    color: ${p.text.secondary};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`,wv=g.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
    margin-top: 0.7rem;

    span {
        padding: 0.15rem 0.5rem;
        border-radius: 6px;
        font-size: 0.72rem;
        color: ${p.text.secondary};
        background: rgba(15, 23, 42, 0.6);
    }
`,_v=g.div`
    margin-top: 0.65rem;
    font-size: 0.75rem;
    color: ${p.text.muted};
`,Sv=g.button`
    margin-top: 0.8rem;
    padding: 0.4rem 0.9rem;
    font-size: 0.8rem;
    border-radius: 999px;
    background: transparent;
    border: 1px solid rgba(139, 92, 246, 0.5);
    &:hover { background: ${p.gradients.primary}; border-color: transparent; }
`,Ha=g.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    opacity: ${e=>e.$active?1:.25};
    transform: ${e=>e.$active?"none":"translateY(24px) scale(0.97)"};
    transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);

    ${jt} { align-items: flex-start; text-align: left; padding-left: 48px; padding-top: 1.5rem; }
    ${_r} { opacity: 1; transform: none; transition: none; }
`,$v=g.div`
    position: absolute;
    z-index: 3;
    display: grid;
    place-items: center;
    width: 64px;
    height: 64px;
    margin-top: -32px;
    border-radius: 50%;
    font-weight: 800;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    color: ${p.text.primary};
    background: ${p.gradients.accent};
    animation: ${e=>e.$active?We`${Au} 1.8s ease-out infinite`:"none"};
    ${_n}

    ${jt} { width: 44px; height: 44px; margin-top: -22px; font-size: 0.6rem; }
`,kv=g.div`
    max-width: 620px;
    padding: 1.6rem;
    border-radius: 18px;
    background: ${p.background.secondary};
    background-image: ${p.gradients.card};
    border: 1px solid rgba(139, 92, 246, 0.4);

    h3 { margin: 0 0 0.5rem; font-size: 1.5rem; }
    p  { margin: 0; }
`,Pv=g.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 1.25rem;

    a, button {
        padding: 0.6rem 1.2rem;
        border-radius: 12px;
        font-weight: 700;
        font-size: 0.9rem;
    }
    a {
        color: ${p.text.primary};
        border: 1px solid rgba(139, 92, 246, 0.5);
        &:hover { background: rgba(139, 92, 246, 0.2); color: ${p.text.primary}; text-shadow: none; }
    }

    ${jt} { justify-content: flex-start; }
`,Ga=32,Ya=40,Tv=(e,t)=>(t.getFullYear()-e.getFullYear())*12+(t.getMonth()-e.getMonth())+(t.getDate()-e.getDate())/30;function Cv(){const e="(max-width: 768px)",[t,n]=F(()=>window.matchMedia(e).matches);return X(()=>{const r=window.matchMedia(e),i=()=>n(r.matches);return r.addEventListener("change",i),()=>r.removeEventListener("change",i)},[]),t}function Av(e,t){const[n,r]=F(0);return X(()=>{let i=0;const o=()=>{i=0;const a=e.current;if(!a)return;const c=a.getBoundingClientRect().top,u=window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-4?t:window.innerHeight*Eo-c;r(Math.max(0,Math.min(t,u)))},s=()=>{i||(i=requestAnimationFrame(o))};return o(),window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s),()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s),i&&cancelAnimationFrame(i)}},[t]),n}function Ev({onSelect:e,onNavigate:t,focusId:n}){var j;const[r]=et(),i=ye(),o=Cv(),s=mi(r),a=Re(()=>{const E=oe(s[0].startDate);return new Date(E.getFullYear(),E.getMonth(),1)},[s]),c=Re(()=>new Date,[]),l=E=>Ya+Tv(a,E)*Ga,u=E=>Zt(E)?c:oe(E.endDate),d=l(c),h=he([]),[m,b]=F(340);It(()=>{const E=()=>{const W=Math.max(0,...h.current.map(z=>(z==null?void 0:z.offsetHeight)??0));W&&b(W)};return E(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)},[r,o]);const v=he(null),x=he([]),y=he(1),w=Av(v,o?y.current:d);X(()=>{if(!n)return;const E=s.findIndex(z=>z.id===n);if(E<0)return;const W=window.setTimeout(()=>{var H;if(o){(H=x.current[E])==null||H.scrollIntoView({behavior:"smooth",block:"center"});return}const Z=v.current.getBoundingClientRect().top+window.scrollY+l(oe(s[E].startDate))+60-window.innerHeight*Eo;window.scrollTo({top:Z,behavior:"smooth"})},400);return()=>window.clearTimeout(W)},[n]);const _=E=>{const W=E.toLocaleDateString(pr(r),{month:"short",year:"numeric"});return W.charAt(0).toUpperCase()+W.slice(1)},P=E=>E.kind==="professional"?i({EN:"Professional",BR:"Profissional",ES:"Profesional"}):i({EN:"Academic",BR:"Acadêmico",ES:"Académico"}),k=(E,W)=>{const z=qc(E);return f(ge,{children:[f(yv,{children:[f("span",{children:Hn(E,r)}),f(Jr,{children:Gn(E,r)}),Zt(E)&&f(Jr,{$color:p.success,children:["● ",i({EN:"Current",BR:"Atual",ES:"Actual"})]}),!Zt(E)&&W&&f(Jr,{$color:p.accent,children:i({EN:"In progress",BR:"Em andamento",ES:"En curso"})})]}),f(bv,{children:E.title}),f(vv,{$kind:E.kind,children:[zn(E,r)," · ",P(E)]}),f(xv,{children:E.description}),f(wv,{children:E.languages.slice(0,5).map(Z=>f("span",{children:Z},Z))}),z.length>0&&f(_v,{children:["⟷ ",i({EN:"In parallel with",BR:"Em paralelo com",ES:"En paralelo con"})," ",z.map(pi).join(", ")]}),f(Sv,{onClick:()=>e(E),children:[i({EN:"View details",BR:"Ver detalhes",ES:"Ver detalles"})," →"]})]})},C=f(kv,{children:[f("h3",{children:["🚀 ",i({EN:"Ready for new challenges!",BR:"Pronto para novos desafios!",ES:"¡Listo para nuevos desafíos!"})]}),f("p",{children:i({EN:"That's my journey so far. I'm open to opportunities where back-end, cloud and AI meet — let's talk?",BR:"Essa é minha jornada até aqui. Estou aberto a oportunidades onde back-end, cloud e IA se encontram — vamos conversar?",ES:"Esta es mi trayectoria hasta ahora. Estoy abierto a oportunidades donde se encuentran back-end, cloud e IA — ¿hablamos?"})}),f(Pv,{children:[t&&f("button",{onClick:()=>t("contact"),children:["📬 ",i({EN:"Contact me",BR:"Fale comigo",ES:"Contáctame"})]}),f("a",{href:cn.linkedin,target:"_blank",rel:"noreferrer",children:"💼 LinkedIn"})]})]}),T=f(lv,{children:[f("span",{children:["💼 ",i({EN:"Professional",BR:"Profissional",ES:"Profesional"})]}),f("span",{children:["🎓 ",i({EN:"Academic",BR:"Acadêmico",ES:"Académico"})]})]});if(o){const E=H=>H?H.offsetTop+H.offsetHeight/2:1/0,W=((j=v.current)==null?void 0:j.offsetHeight)??1;y.current=W;const z=s.reduce((H,_e,$)=>w>=E(x.current[$])-1?$:H,-1),Z=w>=W-2;return f(Fa,{children:[T,f(Na,{ref:v,children:[f(ja,{style:{height:"100%"}}),f(Wa,{style:{height:`${w}px`}}),!Z&&f(za,{style:{top:`${w}px`},children:f("span",{children:_(oe(s[Math.max(0,z)].startDate))})}),s.map((H,_e)=>{const $=_e<=z;return f(mv,{ref:B=>x.current[_e]=B,children:[f(pv,{$kind:H.kind,$active:$}),f(gv,{$kind:H.kind,$active:$,children:k(H,!1)})]},H.id)}),f(Ha,{$active:Z,children:C})]})]})}const M=w>=d-2,V=new Date(a.getFullYear(),a.getMonth()+Math.floor((w-Ya)/Ga),1);return f(Fa,{children:[T,f(Na,{ref:v,children:[f(ja,{style:{height:`${d}px`}}),f(Wa,{style:{height:`${w}px`}}),s.map(E=>{const W=l(oe(E.startDate)),z=l(u(E)),Z=w>=W-2&&w<=z;return f("div",{children:[f(uv,{$kind:E.kind,$on:Z,style:{top:`${W}px`,height:`${Math.max(6,z-W)}px`}}),f(dv,{$kind:E.kind,$active:w>=W-2,style:{top:`${W}px`},children:f("span",{children:_(oe(E.startDate))})})]},`${E.id}-marks`)}),s.map((E,W)=>{const z=l(oe(E.startDate)),Z=l(u(E)),H=w<z-2?"future":w<=Z+2?"ongoing":"past";return f(hv,{$kind:E.kind,style:{top:`${z-30}px`,height:`${Z-z+m+30}px`},children:f(fv,{ref:_e=>h.current[W]=_e,$kind:E.kind,$state:H,children:k(E,H==="ongoing")})},E.id)}),!M&&f(za,{style:{top:`${w}px`},children:f("span",{children:_(V)})}),f($v,{$active:M,style:{top:`${d}px`},children:i({EN:"NOW",BR:"AGORA",ES:"AHORA"})}),f("div",{style:{height:`${d+m+60}px`}}),f(Ha,{$active:M,children:C})]})]})}const Dv=g.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    padding: 2rem 1rem;

    @media (max-width: 768px) {
        padding: 1rem 0.5rem;
    }
`;g.div`
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
`;g.h1`
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
`;g.div`
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
`;g.div`
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
`;g.h2`
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
`;g.p`
    color: ${e=>e.theme["white-50"]};
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    text-align: center;

    @media (max-width: 480px) {
        font-size: 0.8rem;
        margin-bottom: 1rem;
    }
`;g.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
    height: auto;

    @media (max-width: 768px) {
        gap: 1rem;
    }
`;g.div`
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
`;g.a`
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
`;function Mv({onNavigate:e,focusId:t}){const[n,r]=F(null);return f(ge,{children:[f(Dv,{id:"career",children:f(Ev,{onSelect:r,onNavigate:e,focusId:t})}),n&&f(cv,{isOpen:!0,onClose:()=>r(null),job:n})]})}const Rv=g.div`
  width: 100%;
  min-height: 100vh;
  background: ${e=>e.theme.background};
  padding: 2rem 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Lv=g.header`
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
`;function Vv({onNavigate:e,focusId:t}){const r=ye()({EN:{title:"My Experiences",subtitle:"Discover my professional and academic journey"},BR:{title:"Minhas Experiências",subtitle:"Conheça minha jornada profissional e acadêmica"},ES:{title:"Mis Experiencias",subtitle:"Conoce mi trayectoria profesional y académica"}});return f(Rv,{children:[f(Lv,{children:[f("h1",{children:r.title}),f("p",{children:r.subtitle})]}),f(Mv,{onNavigate:e,focusId:t}),f(xr,{})]})}const Iv="data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M32.8594%205.60823L3.73437%2013.8114C3.48644%2013.8791%203.26544%2014.0217%203.10146%2014.2196C2.93748%2014.4175%202.8385%2014.6612%202.81801%2014.9174C2.79751%2015.1736%202.85649%2015.4299%202.98692%2015.6514C3.11734%2015.8729%203.31287%2016.0488%203.54687%2016.1551L16.9219%2022.4832C17.1839%2022.6046%2017.3943%2022.815%2017.5156%2023.077L23.8437%2036.452C23.9501%2036.686%2024.126%2036.8815%2024.3474%2037.0119C24.5689%2037.1424%2024.8252%2037.2013%2025.0814%2037.1808C25.3376%2037.1603%2025.5813%2037.0614%2025.7792%2036.8974C25.9771%2036.7334%2026.1197%2036.5124%2026.1875%2036.2645L34.3906%207.13948C34.4528%206.92694%2034.4566%206.7016%2034.4017%206.48707C34.3469%206.27253%2034.2353%206.07671%2034.0787%205.92013C33.9221%205.76355%2033.7263%205.65198%2033.5118%205.5971C33.2973%205.54222%2033.0719%205.54607%2032.8594%205.60823V5.60823Z'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M17.3281%2022.6709L24.3906%2015.6084'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Bv="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M27%2022.999V4.99902H9'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M23%208.99902H5V26.999H23V8.99902Z'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Ov="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%2026.999V4.99902'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7%2013.999L16%204.99902L25%2013.999'%20stroke='%231864AB'%20stroke-opacity='0.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",Fv=g.section`
    display: flex;
    margin-top: 30px;
    gap: 50px;
    padding: 30px;
    align-items: center;
    flex-direction: column;
    border: 3px solid ${e=>e.theme["secundary-blue-10"]};
`,Nv=g.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    background-color: ${e=>e.theme["secundary-blue-10"]};
`,jv=g.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    width: 100%;
    font-size: 64px;
    color: ${e=>e.theme.white};
`;g.button`
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
`;g.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    font-size: 16px;
    font-weight: 700;
    margin-left: 10px;
    color: ${e=>e.theme["secundary-blue-50"]};
    text-align: center;
`;const Wv=g.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    gap: 150px;
`,zv=g.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    gap: 15px;
`,Hv=g.input`
    margin-left: 5px;
    font-size: 20px;
    color: ${e=>e.theme["white-50"]};
    font-weight: 400;
    background-color: ${e=>e.theme["background-blue"]};
    border: none; // Remove the border
    user-select: none; // Prevent selection with mouse
`,Gv=g.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    gap: 15px;
`,Yv=g.div`
    color: ${e=>e.theme["secundary-blue-50"]};
    font-size: 20px;
    font-weight: 400;
    margin-left: 5px;
`;function Uv(){const e=ye(),t=he(null),n=()=>{t.current&&(t.current.select(),document.execCommand("copy"))};return f(Fv,{id:"contact",children:[f(Nv,{children:["📬 ",e({EN:"Contact",BR:"Contato",ES:"Contacto"})]}),f(jv,{children:e({EN:"Let's work together?",BR:"Vamos trabalhar juntos?",ES:"¿Trabajamos juntos?"})}),f(Wv,{children:f(zv,{children:[f("img",{src:Iv,alt:""}),f(Hv,{ref:t,type:"text",value:"wilton.code@gmail.com",readOnly:!0}),f("img",{src:Bv,onClick:n,style:{cursor:"pointer"}})]})}),f("a",{href:"#home",children:f(Gv,{children:[f(Yv,{children:e({EN:"Back to top",BR:"Voltar ao topo",ES:"Volver arriba"})}),f("img",{src:Ov})]})})]})}const qv=g.div`
  width: 100%;
  min-height: 100vh;
  background: ${p.background.secondary};
  padding: ${S.xl} ${S.lg};
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${I.tablet}) {
    padding: ${S.lg} ${S.md};
  }

  @media (max-width: ${I.mobile}) {
    padding: ${S.md} ${S.sm};
  }
`,Kv=g.header`
  text-align: center;
  margin-bottom: ${S.xl};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: ${D.fontSize["5xl"]};
    background: ${p.gradients.primary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: ${S.md};

    @media (max-width: ${I.tablet}) {
      font-size: ${D.fontSize["4xl"]};
    }

    @media (max-width: ${I.mobile}) {
      font-size: ${D.fontSize["3xl"]};
    }
  }

  p {
    font-size: ${D.fontSize.lg};
    color: ${p.text.secondary};
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;

    @media (max-width: ${I.mobile}) {
      font-size: ${D.fontSize.base};
    }
  }
`;function Xv(){const t=ye()({EN:{title:"Let's Talk?",subtitle:"I'm always open to new opportunities and interesting projects"},BR:{title:"Vamos Conversar?",subtitle:"Estou sempre aberto a novas oportunidades e projetos interessantes"},ES:{title:"¿Hablamos?",subtitle:"Siempre estoy abierto a nuevas oportunidades y proyectos interesantes"}});return f(qv,{children:[f(Kv,{children:[f("h1",{children:t.title}),f("p",{children:t.subtitle})]}),f(Uv,{}),f(xr,{})]})}const Qv=Ve`
  from { opacity: 0; transform: translate3d(0, 16px, 0); }
  to   { opacity: 1; transform: none; }
`,Jv=g.div`
  animation: ${Qv} 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;function Zv(){const[e,t]=F("home"),[n,r]=F(null),i=(s,a=null)=>{r(a),t(s)};X(()=>{window.scrollTo({top:0,behavior:"smooth"})},[e]);const o=()=>{switch(e){case"home":return f(Ma,{onNavigate:i});case"projects":return f(Jb,{});case"experiences":return f(Vv,{onNavigate:i,focusId:n});case"contact":return f(Xv,{});default:return f(Ma,{onNavigate:i})}};return f(Sh,{children:[f(xh,{}),f(Mh,{currentPage:e,setCurrentPage:s=>i(s)}),f("main",{style:{paddingTop:"80px"},children:f(Jv,{children:o()},e)}),f(Ih,{})]})}kt(f(Zv,{}),document.getElementById("app"));
