(this["webpackJsonpweb-replica"]=this["webpackJsonpweb-replica"]||[]).push([[9],{55:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"h",(function(){return l})),t.d(n,"i",(function(){return f})),t.d(n,"g",(function(){return j})),t.d(n,"l",(function(){return O})),t.d(n,"k",(function(){return m})),t.d(n,"d",(function(){return w})),t.d(n,"e",(function(){return y})),t.d(n,"c",(function(){return I})),t.d(n,"f",(function(){return S})),t.d(n,"b",(function(){return E})),t.d(n,"j",(function(){return F}));var r=t(29),c=t(51),a=t.n(c),i=t(16),o=t(52),s=t(21);function u(e){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(a.a.mark((function e(n){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.firestore().collection("users").where("username","==",n).get();case 2:return t=e.sent,e.abrupt("return",t.docs.map((function(e){return e.data().length>0})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return(p=Object(o.a)(a.a.mark((function e(n){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.firestore().collection("users").where("userId","==",n).get();case 2:return t=e.sent,r=t.docs.map((function(e){return Object(i.a)(Object(i.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return b.apply(this,arguments)}function b(){return(b=Object(o.a)(a.a.mark((function e(n){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.firestore().collection("users").where("username","==",n).get();case 2:return t=e.sent,r=t.docs.map((function(e){return Object(i.a)(Object(i.a)({},e.data()),{},{docId:e.id})})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,n){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(a.a.mark((function e(n,t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.firestore().collection("users").where("userId","!=",n).limit(10).get();case 2:return r=e.sent,e.abrupt("return",r.docs.map((function(e){return Object(i.a)(Object(i.a)({},e.data()),{},{docId:e.id})})).filter((function(e){return e.userId&&!t.includes(e.userId)})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,n,t){return x.apply(this,arguments)}function x(){return(x=Object(o.a)(a.a.mark((function e(n,t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.b.firestore().collection("users").doc(n).update({following:r?s.a.arrayRemove(t):s.a.arrayUnion(t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,n,t){return g.apply(this,arguments)}function g(){return(g=Object(o.a)(a.a.mark((function e(n,t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",s.b.firestore().collection("users").doc(n).update({followers:r?s.a.arrayRemove(t):s.a.arrayUnion(t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,n){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(a.a.mark((function e(n,t){var r,c,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.firestore().collection("photos").where("userId","in",t).get();case 2:return r=e.sent,c=r.docs.map((function(e){return Object(i.a)(Object(i.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(c.map(function(){var e=Object(o.a)(a.a.mark((function e(t){var r,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!1,t.likes.includes(n)&&(r=!0),e.next=4,l(t.userId);case 4:return c=e.sent,o=c[0].username,e.abrupt("return",Object(i.a)(Object(i.a)({username:o},t),{},{userLikedPhoto:r}));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 6:return u=e.sent,e.abrupt("return",u);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return k.apply(this,arguments)}function k(){return(k=Object(o.a)(a.a.mark((function e(n){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.firestore().collection("photos").where("userId","==",n).get();case 2:return t=e.sent,e.abrupt("return",t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return C.apply(this,arguments)}function C(){return(C=Object(o.a)(a.a.mark((function e(n){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.firestore().collection("photos").where("photoId","==",n).get();case 2:return t=e.sent,e.abrupt("return",t.docs.map((function(e){return Object(i.a)(Object(i.a)({},e.data()),{},{docId:e.id})})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return P.apply(this,arguments)}function P(){return(P=Object(o.a)(a.a.mark((function e(n){var t,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(n);case 2:return t=e.sent,c=Object(r.a)(t,1),i=c[0],e.abrupt("return",i.profilePic);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,n){var t=!1;return e.likes.includes(n)&&(t=!0),Object(i.a)(Object(i.a)({},e),{},{userLikedPhoto:t})}function F(e){return U.apply(this,arguments)}function U(){return(U=Object(o.a)(a.a.mark((function e(n){var t,c,o,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.firestore().collection("users").where("userId","==",n).get();case 2:return t=e.sent,c=t.docs.map((function(e){return Object(i.a)(Object(i.a)({},e.data()),{},{docId:e.id})})),o=Object(r.a)(c,1),u=o[0],e.abrupt("return",u);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},57:function(e,n,t){"use strict";n.a=t.p+"static/media/Karifgram.33790cf2.png"},59:function(e,n,t){"use strict";var r,c,a,i,o,s=t(51),u=t.n(s),d=t(52),l=t(29),p=t(1),f=t(53),b=t(54),j=b.a.div(r||(r=Object(f.a)(["\n  background-color: white;\n  display: flex;\n  justify-content: space-between;\n  min-height: 3rem;\n  align-items: center;\n  a {\n    display: flex;\n  }\n"]))),h=b.a.img(c||(c=Object(f.a)(["\n  height: 2rem;\n  margin-left: 1rem;\n  margin-top: 0.5rem;\n"]))),O=b.a.img(a||(a=Object(f.a)(["\n  height: 2.25rem;\n  border-radius: 100%;\n  margin-right: 0.5rem;\n  :hover {\n    opacity: 80%;\n  }\n"]))),x=b.a.div(i||(i=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]))),m=b.a.button(o||(o=Object(f.a)(["\n  background-color: var(--blueColor);\n  color: var(--bgColor);\n  border: none;\n  border-radius: 4px;\n  font: inherit;\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  margin-right: 1rem;\n  cursor: pointer;\n  text-decoration: none;\n"]))),g=t(57),w=t(30),v=t(18),y=t(31),k=t(13),I=t(55),C=t(56),S=t.n(C),P=t(4);n.a=function(){var e=Object(p.useContext)(v.a).firebase,n=Object(p.useContext)(y.a).user,t=Object(p.useState)(),r=Object(l.a)(t,2),c=r[0],a=r[1];return Object(p.useEffect)((function(){function e(){return(e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.h)(n.uid);case 2:t=e.sent,a(t[0].profilePic);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(null===n||void 0===n?void 0:n.uid)&&function(){e.apply(this,arguments)}()}),[n]),Object(P.jsxs)(j,{children:[Object(P.jsx)(w.b,{to:k.a,children:Object(P.jsx)(h,{src:g.a,alt:""})}),Object(P.jsx)(x,{children:n?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(w.b,{to:k.a,style:{textDecoration:"none"},children:Object(P.jsx)(m,{onClick:function(){e.auth().signOut()},onKeyDown:function(n){"Enter"===n.key&&e.auth().signOut()},children:"Sign Out"})}),Object(P.jsx)(w.b,{to:"/p/".concat(n.displayName),children:c?Object(P.jsx)(O,{src:c}):Object(P.jsx)(S.a,{height:36,width:36,circle:!0})})]}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(w.b,{to:k.b,children:Object(P.jsx)(m,{children:"Login"})}),Object(P.jsx)(w.b,{to:k.f,children:Object(P.jsx)(m,{onClick:function(){e.auth().signOut()},onKeyDown:function(n){"Enter"===n.key&&e.auth().signOut()},children:"Sign Up"})})]})})]})}},77:function(e,n,t){"use strict";t.r(n);var r,c,a,i,o,s,u,d,l,p,f,b=t(1),j=t(5),h=t(51),O=t.n(h),x=t(52),m=t(29),g=t(56),w=t.n(g),v=t(31),y=t(55),k=t(53),I=t(54),C=I.a.div(r||(r=Object(k.a)(["\n  display: flex;\n  width: 100%;\n  border-bottom: 1.5px solid var(--lightColor);\n  padding-block: 2rem;\n  margin: 0 auto;\n\n  & > div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    img {\n      max-width: 148px;\n      width: 100%;\n      border-radius: 100%;\n      aspect-ratio: 1/1;\n    }\n  }\n"]))),S=I.a.div(c||(c=Object(k.a)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  padding-left: 2rem;\n"]))),P=I.a.div(a||(a=Object(k.a)(["\n  display: flex;\n  font-weight: 300;\n  & > * {\n    padding: 0.5rem 0;\n  }\n  div {\n    display: flex;\n    flex-direction: column;\n    margin-right: 1rem;\n\n    span {\n      font-weight: 400;\n      text-align: center;\n    }\n  }\n"]))),E=I.a.div(i||(i=Object(k.a)(["\n  font-size: 1.5rem;\n  font-weight: 300;\n"]))),F=I.a.div(o||(o=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  font-weight: 300;\n  h1 {\n    font-weight: 400;\n    margin-bottom: 0.65rem;\n    font-size: 1rem;\n    margin-top: 0;\n  }\n  p {\n    margin: 0;\n  }\n"]))),U=I.a.button(s||(s=Object(k.a)(["\n  border: none;\n  background: var(--blueColor);\n  border-radius: 3px;\n  padding: 0.2rem 1rem;\n  color: white;\n  font-weight: 600;\n  cursor: pointer;\n"]))),z=t(4),D=function(e){var n=e.user,t=e.photos,r=Object(b.useState)(""),c=Object(m.a)(r,2),a=c[0],i=c[1],o=Object(b.useContext)(v.a).user,s=Object(b.useState)(null),u=Object(m.a)(s,2),d=u[0],l=u[1],p=Object(b.useState)(null),f=Object(m.a)(p,2),j=f[0],h=f[1],g=Object(b.useState)(!0),k=Object(m.a)(g,2),I=k[0],D=k[1];function K(){return(K=Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i((function(e){return!e})),e.next=3,Object(y.l)(d.docId,n.userId,a);case 3:return e.next=5,Object(y.k)(n.docId,o.uid,a);case 5:L();case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){return J.apply(this,arguments)}function J(){return(J=Object(x.a)(O.a.mark((function e(){var t,r,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.h)(n.userId);case 2:t=e.sent,r=Object(m.a)(t,1),c=r[0],h(c.followers.length);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.useEffect)((function(){function e(){return(e=Object(x.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.userId===o.uid?D(!0):D(!1),e.next=3,Object(y.j)(o.uid);case 3:t=e.sent,l(t),n.followers?(h(n.followers.length),i(!!n.followers.includes(o.uid))):h(0);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n&&o&&function(){e.apply(this,arguments)}()}),[o,n]),Object(z.jsxs)(C,{id:"Header",children:[Object(z.jsx)("div",{children:(null===n||void 0===n?void 0:n.profilePic)?Object(z.jsx)("img",{src:n.profilePic,alt:"profile pic"}):Object(z.jsx)(w.a,{width:148,height:148,circle:!0,style:{margin:"2rem 3rem"}})}),Object(z.jsxs)(S,{children:[Object(z.jsxs)(E,{children:[n?"".concat(n.username):Object(z.jsx)(w.a,{})," ",I?null:Object(z.jsx)(U,{onClick:function(){return K.apply(this,arguments)},children:a?"Unfollow":"Follow"})]}),Object(z.jsxs)(P,{children:[Object(z.jsxs)("div",{children:[Object(z.jsx)("span",{children:t?"".concat(t.length):Object(z.jsx)(w.a,{width:10})})," ","posts"]}),Object(z.jsxs)("div",{children:[Object(z.jsx)("span",{children:j?"".concat(j):Object(z.jsx)(w.a,{width:10})})," ","followers"]}),Object(z.jsxs)("div",{children:[Object(z.jsx)("span",{children:n?"".concat(n.following.length):Object(z.jsx)(w.a,{width:10})})," ","following"]})]}),Object(z.jsx)(F,{children:(null===n||void 0===n?void 0:n.description)?n.description.map((function(e,n){return 0===n?Object(z.jsx)("h1",{children:e},n):Object(z.jsx)("p",{children:e},n)})):Object(z.jsx)(w.a,{width:250,height:50})})]})]})},K=I.a.div(u||(u=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),L=I.a.div(d||(d=Object(k.a)(["\n  font-weight: 500;\n  font-size: 0.8rem;\n  color: var(--darkColor);\n  border-top: 2px solid var(--darkColor);\n  padding: 0 1rem;\n  padding-top: 0.5rem;\n"]))),J=I.a.div(l||(l=Object(k.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: 0 auto;\n  padding: 0;\n"]))),N=I.a.div(p||(p=Object(k.a)(['\n  display: flex;\n  padding-bottom: 0.5rem;\n  justify-content: center;\n  padding: 1rem 0rem;\n  margin-inline: 1em;\n  flex: 0 0 33.333333%;\n  position: relative;\n  /* ::before {\n    content: "x";\n    position: absolute;\n    bottom: 50%;\n  } */\n\n  img {\n    cursor: pointer;\n    width: 256px;\n\n    :hover {\n      opacity: 70%;\n    }\n  }\n']))),R=t(30),H=function(e){var n=e.photos;return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)(K,{children:[Object(z.jsx)(L,{id:"Menu",children:Object(z.jsx)("div",{children:"POSTS"})}),Object(z.jsx)(J,{id:"Posts",children:n?n.map((function(e){return Object(z.jsx)(N,{children:Object(z.jsx)(R.b,{to:"/post/".concat(e.photoId),children:Object(z.jsx)("img",{src:e.imageSrc,alt:e.photoId})})},"".concat(e.photoId))})):Object(z.jsx)(w.a,{count:3,width:202,height:202,style:{margin:"1rem"}})})]})})},M=I.a.div(f||(f=Object(k.a)(["\n  background-color: var(--bgColor);\n  max-width: 1080px;\n  width: 90%;\n  margin: auto;\n"])));var T=t(59);n.default=function(){var e=function(e){var n=Object(b.useState)(),t=Object(m.a)(n,2),r=t[0],c=t[1],a=Object(b.useState)(),i=Object(m.a)(a,2),o=i[0],s=i[1];return Object(b.useEffect)((function(){function n(){return(n=Object(x.a)(O.a.mark((function n(){var r;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(y.i)(e);case 2:(r=n.sent).length>>0?(s(r[0]),t(r[0])):s(null);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function t(e){return r.apply(this,arguments)}function r(){return(r=Object(x.a)(O.a.mark((function e(n){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.e)(n.userId);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),console.log(o),{photos:r,user:o}}(Object(j.h)().username),n=e.photos,t=e.user;return Object(b.useEffect)((function(){t&&(document.title="".concat(t.fullName," (@").concat(t.username,")"))})),Object(z.jsx)(z.Fragment,{children:null!==t?Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(T.a,{}),Object(z.jsxs)(M,{id:"Profile",children:[Object(z.jsx)(D,{user:t,photos:n}),Object(z.jsx)(H,{photos:n})]})]}):Object(z.jsx)(j.a,{to:"/"})})}}}]);
//# sourceMappingURL=9.06e862b6.chunk.js.map