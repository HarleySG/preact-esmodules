var e,n,t,o,r,_,u={},l=[],i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function c(e,n){for(var t in n)e[t]=n[t];return e}function s(e){var n=e.parentNode;n&&n.removeChild(e)}function f(e,n,t){var o,r=arguments,_={};for(o in n)"key"!==o&&"ref"!==o&&(_[o]=n[o]);if(arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(r[o]);if(null!=t&&(_.children=t),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===_[o]&&(_[o]=e.defaultProps[o]);return a(e,_,n&&n.key,n&&n.ref)}function a(n,t,o,r){var _={type:n,props:t,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return e.vnode&&e.vnode(_),_}function p(e){return e.children}function h(e,n){this.props=e,this.context=n}function d(e,n){if(null==n)return e.__?d(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?d(e):null}function v(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return v(e)}}function m(r){(!r.__d&&(r.__d=!0)&&1===n.push(r)||o!==e.debounceRendering)&&((o=e.debounceRendering)||t)(y)}function y(){var e,t,o,r,_,u,l;for(n.sort(function(e,n){return n.__v.__b-e.__v.__b});e=n.pop();)e.__d&&(o=void 0,r=void 0,u=(_=(t=e).__v).__e,(l=t.__P)&&(o=[],r=w(l,_,c({},_),t.__n,void 0!==l.ownerSVGElement,null,o,null==u?d(_):u),S(o,_),r!=u&&v(_)))}function g(e,n,t,o,r,_,i,c,f){var a,p,h,v,m,y,g,b=t&&t.__k||l,x=b.length;if(c==u&&(c=null!=_?_[0]:x?d(t,0):null),a=0,n.__k=k(n.__k,function(t){if(null!=t){if(t.__=n,t.__b=n.__b+1,null===(h=b[a])||h&&t.key==h.key&&t.type===h.type)b[a]=void 0;else for(p=0;p<x;p++){if((h=b[p])&&t.key==h.key&&t.type===h.type){b[p]=void 0;break}h=null}if(v=w(e,t,h=h||u,o,r,_,i,c,f),(p=t.ref)&&h.ref!=p&&(g||(g=[]),h.ref&&g.push(h.ref,null,t),g.push(p,t.__c||v,t)),null!=v){var l;if(null==y&&(y=v),void 0!==t.__d)l=t.__d,t.__d=void 0;else if(_==h||v!=c||null==v.parentNode){e:if(null==c||c.parentNode!==e)e.appendChild(v),l=null;else{for(m=c,p=0;(m=m.nextSibling)&&p<x;p+=2)if(m==v)break e;e.insertBefore(v,c),l=c}"option"==n.type&&(e.value="")}c=void 0!==l?l:v.nextSibling,"function"==typeof n.type&&(n.__d=c)}}return a++,t}),n.__e=y,null!=_&&"function"!=typeof n.type)for(a=_.length;a--;)null!=_[a]&&s(_[a]);for(a=x;a--;)null!=b[a]&&H(b[a],b[a]);if(g)for(a=0;a<g.length;a++)P(g[a],g[++a],g[++a])}function k(e,n,t){if(null==t&&(t=[]),null==e||"boolean"==typeof e)n&&t.push(n(null));else if(Array.isArray(e))for(var o=0;o<e.length;o++)k(e[o],n,t);else t.push(n?n("string"==typeof e||"number"==typeof e?a(null,e,null,null):null!=e.__e||null!=e.__c?a(e.type,e.props,e.key,null):e):e);return t}function b(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]="number"==typeof t&&!1===i.test(n)?t+"px":null==t?"":t}function x(e,n,t,o,r){var _,u,l,i,c;if(r?"className"===n&&(n="class"):"class"===n&&(n="className"),"key"===n||"children"===n);else if("style"===n)if(_=e.style,"string"==typeof t)_.cssText=t;else{if("string"==typeof o&&(_.cssText="",o=null),o)for(u in o)t&&u in t||b(_,u,"");if(t)for(l in t)o&&t[l]===o[l]||b(_,l,t[l])}else"o"===n[0]&&"n"===n[1]?(i=n!==(n=n.replace(/Capture$/,"")),c=n.toLowerCase(),n=(c in e?c:n).slice(2),t?(o||e.addEventListener(n,C,i),(e.l||(e.l={}))[n]=t):e.removeEventListener(n,C,i)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&!r&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/^xlink:?/,""))?null==t||!1===t?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):null==t||!1===t?e.removeAttribute(n):e.setAttribute(n,t))}function C(n){this.l[n.type](e.event?e.event(n):n)}function w(n,t,o,r,_,u,l,i,s){var f,a,d,v,m,y,k,b,x,C,w=t.type;if(void 0!==t.constructor)return null;(f=e.__b)&&f(t);try{e:if("function"==typeof w){if(b=t.props,x=(f=w.contextType)&&r[f.__c],C=f?x?x.props.value:f.__:r,o.__c?k=(a=t.__c=o.__c).__=a.__E:("prototype"in w&&w.prototype.render?t.__c=a=new w(b,C):(t.__c=a=new h(b,C),a.constructor=w,a.render=D),x&&x.sub(a),a.props=b,a.state||(a.state={}),a.context=C,a.__n=r,d=a.__d=!0,a.__h=[]),null==a.__s&&(a.__s=a.state),null!=w.getDerivedStateFromProps&&(a.__s==a.state&&(a.__s=c({},a.__s)),c(a.__s,w.getDerivedStateFromProps(b,a.__s))),v=a.props,m=a.state,d)null==w.getDerivedStateFromProps&&null!=a.componentWillMount&&a.componentWillMount(),null!=a.componentDidMount&&a.__h.push(a.componentDidMount);else{if(null==w.getDerivedStateFromProps&&b!==v&&null!=a.componentWillReceiveProps&&a.componentWillReceiveProps(b,C),!a.__e&&null!=a.shouldComponentUpdate&&!1===a.shouldComponentUpdate(b,a.__s,C)){for(a.props=b,a.state=a.__s,a.__d=!1,a.__v=t,t.__e=o.__e,t.__k=o.__k,a.__h.length&&l.push(a),f=0;f<t.__k.length;f++)t.__k[f]&&(t.__k[f].__=t);break e}null!=a.componentWillUpdate&&a.componentWillUpdate(b,a.__s,C),null!=a.componentDidUpdate&&a.__h.push(function(){a.componentDidUpdate(v,m,y)})}a.context=C,a.props=b,a.state=a.__s,(f=e.__r)&&f(t),a.__d=!1,a.__v=t,a.__P=n,f=a.render(a.props,a.state,a.context),t.__k=null!=f&&f.type==p&&null==f.key?f.props.children:f,null!=a.getChildContext&&(r=c(c({},r),a.getChildContext())),d||null==a.getSnapshotBeforeUpdate||(y=a.getSnapshotBeforeUpdate(v,m)),g(n,t,o,r,_,u,l,i,s),a.base=t.__e,a.__h.length&&l.push(a),k&&(a.__E=a.__=null),a.__e=!1}else t.__e=E(o.__e,t,o,r,_,u,l,s);(f=e.diffed)&&f(t)}catch(n){e.__e(n,t,o)}return t.__e}function S(n,t){e.__c&&e.__c(t,n),n.some(function(t){try{n=t.__h,t.__h=[],n.some(function(e){e.call(t)})}catch(n){e.__e(n,t.__v)}})}function E(e,n,t,o,r,_,i,c){var s,f,a,p,h,d=t.props,v=n.props;if(r="svg"===n.type||r,null==e&&null!=_)for(s=0;s<_.length;s++)if(null!=(f=_[s])&&(null===n.type?3===f.nodeType:f.localName===n.type)){e=f,_[s]=null;break}if(null==e){if(null===n.type)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,v.is&&{is:v.is}),_=null}if(null===n.type)null!=_&&(_[_.indexOf(e)]=null),d!==v&&e.data!=v&&(e.data=v);else if(n!==t){if(null!=_&&(_[_.indexOf(e)]=null,_=l.slice.call(e.childNodes)),a=(d=t.props||u).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(d===u)for(d={},h=0;h<e.attributes.length;h++)d[e.attributes[h].name]=e.attributes[h].value;(p||a)&&(p&&a&&p.__html==a.__html||(e.innerHTML=p&&p.__html||""))}(function(e,n,t,o,r){var _;for(_ in t)_ in n||x(e,_,null,t[_],o);for(_ in n)r&&"function"!=typeof n[_]||"value"===_||"checked"===_||t[_]===n[_]||x(e,_,n[_],t[_],o)})(e,v,d,r,c),n.__k=n.props.children,p||g(e,n,t,o,"foreignObject"!==n.type&&r,_,i,u,c),c||("value"in v&&void 0!==v.value&&v.value!==e.value&&(e.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==e.checked&&(e.checked=v.checked))}return e}function P(n,t,o){try{"function"==typeof n?n(t):n.current=t}catch(n){e.__e(n,o)}}function H(n,t,o){var r,_,u;if(e.unmount&&e.unmount(n),(r=n.ref)&&(r.current&&r.current!==n.__e||P(r,null,t)),o||"function"==typeof n.type||(o=null!=(_=n.__e)),n.__e=n.__d=void 0,null!=(r=n.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){e.__e(n,t)}r.base=r.__P=null}if(r=n.__k)for(u=0;u<r.length;u++)r[u]&&H(r[u],t,o);null!=_&&s(_)}function D(e,n,t){return this.constructor(e,t)}function T(e){var n={},t={__c:"__cC"+_++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var o,r=this;return this.getChildContext||(o=[],this.getChildContext=function(){return n[t.__c]=r,n},this.shouldComponentUpdate=function(n){e.value!==n.value&&o.some(function(e){e.context=n.value,m(e)})},this.sub=function(e){o.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){o.splice(o.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Consumer.contextType=t,t}e={__e:function(e,n){for(var t,o;n=n.__;)if((t=n.__c)&&!t.__)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError&&(o=!0,t.setState(t.constructor.getDerivedStateFromError(e))),null!=t.componentDidCatch&&(o=!0,t.componentDidCatch(e)),o)return m(t.__E=t)}catch(n){e=n}throw e}},h.prototype.setState=function(e,n){var t;t=this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof e&&(e=e(t,this.props)),e&&c(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),m(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},h.prototype.render=p,n=[],t="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=u,_=0;var U,N,M,A=[],F=e.__r,L=e.diffed,W=e.__c,O=e.unmount;function R(n){e.__h&&e.__h(N);var t=N.__H||(N.__H={t:[],u:[]});return n>=t.t.length&&t.t.push({}),t.t[n]}function V(e){return I(ee,e)}function I(e,n,t){var o=R(U++);return o.__c||(o.__c=N,o.i=[t?t(n):ee(void 0,n),function(n){var t=e(o.i[0],n);o.i[0]!==t&&(o.i[0]=t,o.__c.setState({}))}]),o.i}function q(e,n){var t=R(U++);Z(t.o,n)&&(t.i=e,t.o=n,N.__H.u.push(t))}function B(e,n){var t=R(U++);Z(t.o,n)&&(t.i=e,t.o=n,N.__h.push(t))}function $(e){return z(function(){return{current:e}},[])}function j(e,n,t){B(function(){"function"==typeof e?e(n()):e&&(e.current=n())},null==t?t:t.concat(e))}function z(e,n){var t=R(U++);return Z(t.o,n)?(t.o=n,t.v=e,t.i=e()):t.i}function G(e,n){return z(function(){return e},n)}function J(e){var n=N.context[e.__c];if(!n)return e.__;var t=R(U++);return null==t.i&&(t.i=!0,n.sub(N)),n.props.value}function K(n,t){e.useDebugValue&&e.useDebugValue(t?t(n):n)}function Q(){A.some(function(n){if(n.__P)try{n.__H.u.forEach(X),n.__H.u.forEach(Y),n.__H.u=[]}catch(t){return e.__e(t,n.m),!0}}),A=[]}function X(e){e.p&&e.p()}function Y(e){var n=e.i();"function"==typeof n&&(e.p=n)}function Z(e,n){return!e||n.some(function(n,t){return n!==e[t]})}function ee(e,n){return"function"==typeof n?n(e):n}e.__r=function(e){F&&F(e),U=0,(N=e.__c).__H&&(N.__H.u.forEach(X),N.__H.u.forEach(Y),N.__H.u=[])},e.diffed=function(n){L&&L(n);var t=n.__c;if(t){var o=t.__H;o&&o.u.length&&(1!==A.push(t)&&M===e.requestAnimationFrame||((M=e.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(o),cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(t,100);"undefined"!=typeof window&&(n=requestAnimationFrame(t))})(Q))}},e.__c=function(n,t){t.some(function(n){try{n.__h.forEach(X),n.__h=n.__h.filter(function(e){return!e.i||Y(e)})}catch(o){t.some(function(e){e.__h&&(e.__h=[])}),t=[],e.__e(o,n.m)}}),W&&W(n,t)},e.unmount=function(n){O&&O(n);var t=n.__c;if(t){var o=t.__H;if(o)try{o.t.forEach(function(e){return e.p&&e.p()})}catch(n){e.__e(n,t.m)}}};var ne=function(e,n,t,o){var r;n[0]=0;for(var _=1;_<n.length;_++){var u=n[_++],l=n[_]?(n[0]|=u?1:2,t[n[_++]]):n[++_];3===u?o[0]=l:4===u?o[1]=Object.assign(o[1]||{},l):5===u?(o[1]=o[1]||{})[n[++_]]=l:6===u?o[1][n[++_]]+=l+"":u?(r=e.apply(l,ne(e,l,t,["",null])),o.push(r),l[0]?n[0]|=2:(n[_-2]=0,n[_]=r)):o.push(l)}return o},te=new Map;function oe(n,t){var o,_,i,c,s,a;o=n,_=t,i=t.firstElementChild,e.__&&e.__(o,_),s=(c=i===r)?null:i&&i.__k||_.__k,o=f(p,null,[o]),a=[],w(_,(c?_:i||_).__k=o,s||u,u,void 0!==_.ownerSVGElement,i&&!c?[i]:s?null:l.slice.call(_.childNodes),a,i||u,c),S(a,o)}var re=function(e){var n=te.get(this);return n||(n=new Map,te.set(this,n)),(n=ne(this,n.get(e)||(n.set(e,n=function(e){for(var n,t,o=1,r="",_="",u=[0],l=function(e){1===o&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?u.push(0,e,r):3===o&&(e||r)?(u.push(3,e,r),o=2):2===o&&"..."===r&&e?u.push(4,e,0):2===o&&r&&!e?u.push(5,0,!0,r):o>=5&&((r||!e&&5===o)&&(u.push(o,0,r,t),o=6),e&&(u.push(o,e,0,t),o=6)),r=""},i=0;i<e.length;i++){i&&(1===o&&l(),l(i));for(var c=0;c<e[i].length;c++)n=e[i][c],1===o?"<"===n?(l(),u=[u],o=3):r+=n:4===o?"--"===r&&">"===n?(o=1,r=""):r=n+r[0]:_?n===_?_="":r+=n:'"'===n||"'"===n?_=n:">"===n?(l(),o=1):o&&("="===n?(o=5,t=r,r=""):"/"===n&&(o<5||">"===e[i][c+1])?(l(),3===o&&(u=u[0]),o=u,(u=u[0]).push(2,0,o),o=0):" "===n||"\t"===n||"\n"===n||"\r"===n?(l(),o=2):r+=n),3===o&&"!--"===r&&(o=4,u=u[0])}return l(),u}(e)),n),arguments,[])).length>1?n:n[0]}.bind(f);export{f as h,re as html,oe as render,h as Component,T as createContext,V as useState,I as useReducer,q as useEffect,B as useLayoutEffect,$ as useRef,j as useImperativeHandle,z as useMemo,G as useCallback,J as useContext,K as useDebugValue};