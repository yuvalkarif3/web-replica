(this["webpackJsonpweb-replica"]=this["webpackJsonpweb-replica"]||[]).push([[6],{55:function(n,e,t){"use strict";t.d(e,"a",(function(){return s})),t.d(e,"h",(function(){return l})),t.d(e,"i",(function(){return p})),t.d(e,"g",(function(){return b})),t.d(e,"l",(function(){return h})),t.d(e,"k",(function(){return g})),t.d(e,"d",(function(){return v})),t.d(e,"e",(function(){return k})),t.d(e,"c",(function(){return I})),t.d(e,"f",(function(){return S})),t.d(e,"b",(function(){return L})),t.d(e,"j",(function(){return N}));var r=t(29),c=t(51),a=t.n(c),o=t(16),i=t(52),u=t(21);function s(n){return d.apply(this,arguments)}function d(){return(d=Object(i.a)(a.a.mark((function n(e){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.firestore().collection("users").where("username","==",e).get();case 2:return t=n.sent,n.abrupt("return",t.docs.map((function(n){return n.data().length>0})));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(a.a.mark((function n(e){var t,r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.firestore().collection("users").where("userId","==",e).get();case 2:return t=n.sent,r=t.docs.map((function(n){return Object(o.a)(Object(o.a)({},n.data()),{},{docId:n.id})})),n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return j.apply(this,arguments)}function j(){return(j=Object(i.a)(a.a.mark((function n(e){var t,r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.firestore().collection("users").where("username","==",e).get();case 2:return t=n.sent,r=t.docs.map((function(n){return Object(o.a)(Object(o.a)({},n.data()),{},{docId:n.id})})),n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n,e){return m.apply(this,arguments)}function m(){return(m=Object(i.a)(a.a.mark((function n(e,t){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.firestore().collection("users").where("userId","!=",e).limit(10).get();case 2:return r=n.sent,n.abrupt("return",r.docs.map((function(n){return Object(o.a)(Object(o.a)({},n.data()),{},{docId:n.id})})).filter((function(n){return n.userId&&!t.includes(n.userId)})));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,e,t){return O.apply(this,arguments)}function O(){return(O=Object(i.a)(a.a.mark((function n(e,t,r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u.b.firestore().collection("users").doc(e).update({following:r?u.a.arrayRemove(t):u.a.arrayUnion(t)}));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n,e,t){return x.apply(this,arguments)}function x(){return(x=Object(i.a)(a.a.mark((function n(e,t,r){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u.b.firestore().collection("users").doc(e).update({followers:r?u.a.arrayRemove(t):u.a.arrayUnion(t)}));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n,e){return w.apply(this,arguments)}function w(){return(w=Object(i.a)(a.a.mark((function n(e,t){var r,c,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.firestore().collection("photos").where("userId","in",t).get();case 2:return r=n.sent,c=r.docs.map((function(n){return Object(o.a)(Object(o.a)({},n.data()),{},{docId:n.id})})),n.next=6,Promise.all(c.map(function(){var n=Object(i.a)(a.a.mark((function n(t){var r,c,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=!1,t.likes.includes(e)&&(r=!0),n.next=4,l(t.userId);case 4:return c=n.sent,i=c[0].username,n.abrupt("return",Object(o.a)(Object(o.a)({username:i},t),{},{userLikedPhoto:r}));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()));case 6:return s=n.sent,n.abrupt("return",s);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function k(n){return y.apply(this,arguments)}function y(){return(y=Object(i.a)(a.a.mark((function n(e){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.firestore().collection("photos").where("userId","==",e).get();case 2:return t=n.sent,n.abrupt("return",t.docs.map((function(n){return n.data()})));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function I(n){return C.apply(this,arguments)}function C(){return(C=Object(i.a)(a.a.mark((function n(e){var t;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.firestore().collection("photos").where("photoId","==",e).get();case 2:return t=n.sent,n.abrupt("return",t.docs.map((function(n){return Object(o.a)(Object(o.a)({},n.data()),{},{docId:n.id})})));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function S(n){return z.apply(this,arguments)}function z(){return(z=Object(i.a)(a.a.mark((function n(e){var t,c,o;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p(e);case 2:return t=n.sent,c=Object(r.a)(t,1),o=c[0],n.abrupt("return",o.profilePic);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function L(n,e){var t=!1;return n.likes.includes(e)&&(t=!0),Object(o.a)(Object(o.a)({},n),{},{userLikedPhoto:t})}function N(n){return P.apply(this,arguments)}function P(){return(P=Object(i.a)(a.a.mark((function n(e){var t,c,i,s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.b.firestore().collection("users").where("userId","==",e).get();case 2:return t=n.sent,c=t.docs.map((function(n){return Object(o.a)(Object(o.a)({},n.data()),{},{docId:n.id})})),i=Object(r.a)(c,1),s=i[0],n.abrupt("return",s);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},57:function(n,e,t){"use strict";e.a=t.p+"static/media/Karifgram.33790cf2.png"},58:function(n,e,t){"use strict";t.d(e,"j",(function(){return v})),t.d(e,"m",(function(){return w})),t.d(e,"o",(function(){return k})),t.d(e,"i",(function(){return y})),t.d(e,"p",(function(){return I})),t.d(e,"a",(function(){return C})),t.d(e,"k",(function(){return S})),t.d(e,"c",(function(){return z})),t.d(e,"l",(function(){return L})),t.d(e,"h",(function(){return N})),t.d(e,"g",(function(){return P})),t.d(e,"e",(function(){return D})),t.d(e,"f",(function(){return E})),t.d(e,"n",(function(){return F})),t.d(e,"b",(function(){return U})),t.d(e,"d",(function(){return K}));var r,c,a,o,i,u,s,d,l,f,p,j,b,m,h,O,g=t(53),x=t(54),v=x.a.div(r||(r=Object(g.a)(["\n  width: 600px;\n\n  a {\n    text-decoration: none;\n    color: black;\n    display: flex;\n    flex-direction: row;\n    font-size: 0.65rem;\n    padding-block: 0.75rem;\n    padding-left: 0.5rem;\n  }\n"]))),w=x.a.img(c||(c=Object(g.a)(["\n  width: 25px;\n  border-radius: 100%;\n"]))),k=x.a.img(a||(a=Object(g.a)(["\n  width: 600px;\n"]))),y=x.a.div(o||(o=Object(g.a)(["\n  margin-block: auto;\n  margin-left: 0.5rem;\n  font-weight: 500;\n  font-size: 0.725rem;\n"]))),I=x.a.div(i||(i=Object(g.a)(["\n  border: 1px solid var(--lightColor);\n  margin-bottom: 3rem;\n"]))),C=x.a.div(u||(u=Object(g.a)(["\n  padding: 0.6rem;\n"]))),S=x.a.svg(s||(s=Object(g.a)(["\n  width: 2rem;\n  user-select: none;\n  cursor: pointer;\n  fill: ",";\n  stroke: ",";\n  margin-right: 0.5rem;\n"])),(function(n){return n.toggleLiked?"red":"none"}),(function(n){return n.toggleLiked?"red":"var(--darkColor);"})),z=x.a.svg(d||(d=Object(g.a)(["\n  width: 2rem;\n  user-select: none;\n  cursor: pointer;\n  stroke: var(--darkColor);\n"]))),L=x.a.div(l||(l=Object(g.a)(["\n  font-size: 0.8rem;\n  padding-left: 0.2rem;\n  font-weight: 500;\n  color: var(--darkColor);\n"]))),N=x.a.div(f||(f=Object(g.a)(["\n  font-size: 0.8rem;\n  padding-left: 0.8rem;\n  font-weight: 400;\n  color: var(--darkColor);\n  span:first-child {\n    font-weight: 500;\n    margin-right: 0.5rem;\n  }\n"]))),P=x.a.div(p||(p=Object(g.a)(["\n  color: var(--mediumColor);\n  font-size: 0.8rem;\n  padding-left: 0.8rem;\n  margin-top: 0.35rem;\n  cursor: pointer;\n"]))),D=x.a.div(j||(j=Object(g.a)(["\n  display: flex;\n  margin-top: 0.35rem;\n  a {\n    font-weight: 500;\n\n    text-decoration: none;\n    color: var(--darkColor);\n    font-size: 0.8rem;\n    padding-left: 0.8rem;\n\n    cursor: pointer;\n  }\n"]))),E=x.a.div(b||(b=Object(g.a)(["\n  font-size: 0.8rem;\n  padding-left: 0.35rem;\n  font-weight: 400;\n  color: var(--darkColor);\n"]))),F=x.a.div(m||(m=Object(g.a)(["\n  font-size: 0.65rem;\n  padding-left: 0.8rem;\n  font-weight: 400;\n  color: var(--mediumColor);\n  margin-block: 0.5rem;\n"]))),U=x.a.div(h||(h=Object(g.a)(["\n  border-top: 1px solid var(--lightColor);\n  background-color: white;\n\n  form {\n    display: flex;\n    justify-content: space-between;\n    padding-left: 0;\n\n    input {\n      border: none;\n      padding: 1.1rem 1rem;\n      width: 100%;\n      color: var(--darkColor);\n      outline: none;\n    }\n  }\n"]))),K=x.a.button(O||(O=Object(g.a)(["\n  border: none;\n  background: white;\n  font-weight: 600;\n  color: var(--blueColor);\n  padding-inline: 1rem;\n  cursor: pointer;\n  opacity: ","; ;\n"])),(function(n){return n.comment?"1":"0.25"}))},59:function(n,e,t){"use strict";var r,c,a,o,i,u,s=t(51),d=t.n(s),l=t(52),f=t(29),p=t(1),j=t(53),b=t(54),m=b.a.div(r||(r=Object(j.a)(["\n  width: 100%;\n  background-color: white;\n  margin: 0;\n  display: grid;\n  height: 3rem;\n  grid-auto-columns: 1fr;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr;\n  gap: 0px 0px;\n  border-bottom: 1.5px solid var(--lightColor);\n\n  align-items: center;\n  a {\n    display: flex;\n  }\n"]))),h=b.a.img(c||(c=Object(j.a)(["\n  height: 2rem;\n  margin-left: 1rem;\n  margin-top: 0.5rem;\n"]))),O=b.a.div(a||(a=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.75rem;\n  input {\n    text-align: center;\n    color: var(--mediumColor);\n    background-color: var(--bgColor);\n    border: 1.5px solid var(--lightColor);\n    border-radius: 5px;\n  }\n"]))),g=b.a.img(o||(o=Object(j.a)(["\n  height: 2.25rem;\n  border-radius: 100%;\n  margin-right: 0.5rem;\n  :hover {\n    opacity: 80%;\n  }\n"]))),x=b.a.div(i||(i=Object(j.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]))),v=b.a.button(u||(u=Object(j.a)(["\n  background-color: var(--blueColor);\n  color: var(--bgColor);\n  border: none;\n  border-radius: 4px;\n  font: inherit;\n  font-weight: 500;\n  padding: 0.5rem 1rem;\n  margin-right: 1rem;\n  cursor: pointer;\n  text-decoration: none;\n"]))),w=t(57),k=t(30),y=t(18),I=t(31),C=t(13),S=t(55),z=t(60),L=t(56),N=t.n(L),P=t(4);e.a=function(){var n=Object(p.useContext)(y.a).firebase,e=Object(p.useContext)(I.a).user,t=Object(p.useState)(),r=Object(f.a)(t,2),c=r[0],a=r[1],o=Object(p.useState)(""),i=Object(f.a)(o,2),u=i[0],s=i[1];return Object(z.useEffect)((function(){function n(){return(n=Object(l.a)(d.a.mark((function n(){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(S.h)(e.uid);case 2:t=n.sent,a(t[0].profilePic);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(null===e||void 0===e?void 0:e.uid)&&function(){n.apply(this,arguments)}()}),[e]),Object(P.jsxs)(m,{children:[Object(P.jsx)(k.b,{to:C.a,children:Object(P.jsx)(h,{src:w.a,alt:""})}),Object(P.jsx)(O,{children:Object(P.jsx)("input",{placeholder:"Search",value:u,onChange:function(n){var e=n.target;return s(e.value)}})}),Object(P.jsx)(x,{children:e?Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(k.b,{to:C.a,style:{textDecoration:"none"},children:Object(P.jsx)(v,{onClick:function(){n.auth().signOut()},onKeyDown:function(e){"Enter"===e.key&&n.auth().signOut()},children:"Sign Out"})}),Object(P.jsx)(k.b,{to:"/p/".concat(e.displayName),children:c?Object(P.jsx)(g,{src:c}):Object(P.jsx)(N.a,{height:36,width:36,circle:!0})})]}):Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(k.b,{to:C.b,children:Object(P.jsx)(v,{children:"Login"})}),Object(P.jsx)(k.b,{to:C.e,children:Object(P.jsx)(v,{onClick:function(){n.auth().signOut()},onKeyDown:function(e){"Enter"===e.key&&n.auth().signOut()},children:"Sign Up"})})]})})]})}},61:function(n,e,t){"use strict";t.d(e,"a",(function(){return f}));var r=t(51),c=t.n(r),a=t(52),o=t(29),i=t(1),u=t(18),s=t(31),d=t(58),l=t(4);function f(n){var e=n.docId,t=n.totalLikes,r=n.handleFocus,f=n.likedPhoto,p=Object(i.useContext)(s.a).user.uid,j=void 0===p?"":p,b=Object(i.useState)(f),m=Object(o.a)(b,2),h=m[0],O=m[1],g=Object(i.useState)(t),x=Object(o.a)(g,2),v=x[0],w=x[1],k=Object(i.useContext)(u.a),y=k.firebase,I=k.FieldValue,C=function(){var n=Object(a.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return O((function(n){return!n})),n.next=3,y.firestore().collection("photos").doc(e).update({likes:h?I.arrayRemove(j):I.arrayUnion(j)});case 3:w((function(n){return h?n-1:n+1}));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(l.jsxs)(d.a,{children:[Object(l.jsx)(d.k,{onClick:C,onKeyDown:function(n){"Enter"===n.key&&C()},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",tabIndex:0,className:"heart",toggleLiked:h,children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),Object(l.jsx)(d.c,{onClick:r,onKeyDown:function(n){"Enter"===n.key&&r()},className:"comment",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",tabIndex:0,children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),Object(l.jsx)(d.l,{children:"".concat(v,v>1?" likes":" like")})]})}},62:function(n,e,t){"use strict";t.d(e,"a",(function(){return d}));var r=t(68),c=t(29),a=t(1),o=t(18),i=t(31),u=t(58),s=t(4);function d(n){var e=n.docId,t=n.comments,d=n.setComments,l=n.commentInput,f=Object(a.useState)(""),p=Object(c.a)(f,2),j=p[0],b=p[1],m=Object(a.useContext)(o.a),h=m.firebase,O=m.FieldValue,g=Object(a.useContext)(i.a).user.displayName,x=function(n){return n.preventDefault(),d([{displayName:g,comment:j}].concat(Object(r.a)(t))),b(""),h.firestore().collection("photos").doc(e).update({comments:O.arrayUnion({displayName:g,comment:j})})};return Object(s.jsx)(u.b,{children:Object(s.jsxs)("form",{method:"POST",onSubmit:function(n){return j.length>=1?x(n):n.preventDefault()},children:[Object(s.jsx)("input",{"aria-label":"Add a comment...",autoComplete:"off",type:"text",name:"add-comment",placeholder:"Add a comment",value:j,onChange:function(n){var e=n.target;return b(e.value)},ref:l}),Object(s.jsx)(u.d,{comment:j,type:"button",disabled:j.length<1,onClick:x,children:"Post"})]})})}},77:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t(59),a=t(51),o=t.n(a),i=t(52),u=t(29),s=t(31),d=t(55);var l,f,p,j,b,m,h=t(30),O=t(56),g=t.n(O),x=t(53),v=t(54),w=v.a.div(l||(l=Object(x.a)(["\n  a {\n    text-decoration: none;\n    color: inherit;\n    font: inherit;\n    font-size: 0.75rem;\n    width: 40px;\n  }\n"]))),k=(v.a.div(f||(f=Object(x.a)(["\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;\n  gap: 0px 0px;\n"]))),v.a.div(p||(p=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  div {\n    margin-left: 0.35rem;\n  }\n"])))),y=v.a.img(j||(j=Object(x.a)(["\n  width: 40px;\n  border-radius: 100%;\n  margin-block: auto;\n"]))),I=v.a.div(b||(b=Object(x.a)(["\n  margin-top: auto;\n  margin-bottom: 0;\n  font-weight: 500;\n  font-size: 0.6rem;\n"]))),C=v.a.div(m||(m=Object(x.a)(["\n  margin-top: 0;\n  margin-bottom: auto;\n  font-size: 0.6rem;\n"]))),S=t(4),z=function(n){var e=n.username,t=n.fullName,r=n.profilePic;return Object(S.jsx)(w,{children:e&&t?Object(S.jsx)(h.b,{to:"/p/".concat(e),children:Object(S.jsxs)(k,{children:[Object(S.jsx)(y,{src:r}),Object(S.jsxs)("div",{children:[Object(S.jsx)(I,{children:e}),Object(S.jsx)(C,{children:t})]})]})}):Object(S.jsx)(g.a,{count:1,height:61})})};z.whyDidYouRender=!0;var L,N,P,D,E,F,U,K,M,R,A,V=Object(r.memo)(z),B=v.a.div(L||(L=Object(x.a)(["\n  margin-top: 0.3rem;\n  a {\n    width: 30px;\n    margin-block: auto;\n  }\n  width: 150px;\n"]))),J=(v.a.div(N||(N=Object(x.a)(["\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;\n  gap: 0px 0px;\n"]))),v.a.div(P||(P=Object(x.a)(['\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  gap: 0px 0px;\n  grid-template-areas:\n    "img ."\n    "img .";\n\n  .img {\n    grid-area: img;\n  }\n  a {\n    text-decoration: none;\n    color: var(--darkColor);\n    div {\n      display: flex;\n    }\n  }\n'])))),W=v.a.img(D||(D=Object(x.a)(["\n  width: 30px;\n  border-radius: 100%;\n  margin: auto;\n"]))),G=v.a.div(E||(E=Object(x.a)(["\n  margin-block: auto;\n\n  font-weight: 500;\n  font-size: 0.5rem;\n  margin-left: 0.5rem;\n"]))),T=(v.a.div(F||(F=Object(x.a)(["\n  margin-block: auto;\n\n  font-size: 0.5rem;\n  width: 100%;\n"]))),v.a.button(U||(U=Object(x.a)(["\n  background: none;\n  border: none;\n  padding: 0;\n  font-size: 0.5rem;\n  font-weight: 500;\n  cursor: pointer;\n  color: var(--blueColor);\n  text-align: end;\n"])))),Y=function(n){var e=n.profileDocId,t=n.username,c=n.profileId,a=n.loggedInUserDocId,s=n.userId,l=n.profilePic,f=Object(r.useState)(!1),p=Object(u.a)(f,2),j=p[0],b=p[1];function m(){return(m=Object(i.a)(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return b(!0),n.next=3,Object(d.l)(a,c,!1);case 3:return n.next=5,Object(d.k)(e,s,!1);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return j?null:Object(S.jsx)(B,{children:t?Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(J,{children:[Object(S.jsx)(h.b,{to:"/p/".concat(t),children:l&&t?Object(S.jsxs)("div",{children:[Object(S.jsx)(W,{className:"img",src:l}),Object(S.jsx)(G,{children:t})]}):Object(S.jsx)(g.a,{height:30,width:30,circle:!0})}),Object(S.jsx)(T,{onClick:function(){return m.apply(this,arguments)},children:"Follow"})]})}):Object(S.jsx)(g.a,{count:1,height:61})})},q=Object(r.memo)(Y),H=v.a.div(K||(K=Object(x.a)(["\n  font-size: 0.55rem;\n  color: var(--mediumColor);\n  margin-bottom: 0.9rem;\n"]))),Q=v.a.div(M||(M=Object(x.a)(["\n  margin-top: 1rem;\n"]))),X=function(n){var e=n.userId,t=n.following,c=n.loggedInUserDocId,a=Object(r.useState)(null),s=Object(u.a)(a,2),l=s[0],f=s[1];return Object(r.useEffect)((function(){function n(){return(n=Object(i.a)(o.a.mark((function n(){var r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.g)(e,t);case 2:r=n.sent,f(r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}e&&function(){n.apply(this,arguments)}()}),[e,t]),l?l.length>0?Object(S.jsxs)(Q,{children:[Object(S.jsx)(H,{children:"Suggestions for you"}),l.map((function(n){return Object(S.jsx)(q,{username:n.username,fullName:n.fullName,profileDocId:n.docId,profileId:n.userId,userId:e,loggedInUserDocId:c,profilePic:n.profilePic},n.docId)}))]}):null:Object(S.jsx)(g.a,{count:10,height:150})},Z=v.a.div(R||(R=Object(x.a)(["\n  padding-inline: 2rem;\n"]))),$=function(){var n=function(){var n=Object(r.useState)({}),e=Object(u.a)(n,2),t=e[0],c=e[1],a=Object(r.useContext)(s.a).user;return Object(r.useEffect)((function(){function n(){return(n=Object(i.a)(o.a.mark((function n(){var e,t,r;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.h)(a.uid);case 2:e=n.sent,t=Object(u.a)(e,1),r=t[0],c(r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}(null===a||void 0===a?void 0:a.uid)&&function(){n.apply(this,arguments)}()}),[a]),{user:t}}().user,e=n.fullName,t=n.username,c=n.userId,a=n.following,l=n.docId,f=n.profilePic;return Object(S.jsxs)(Z,{children:[Object(S.jsx)(V,{username:t,fullName:e,profilePic:f}),Object(S.jsx)(X,{userId:c,following:a,loggedInUserDocId:l})]})},_=v.a.div(A||(A=Object(x.a)(["\n  .skeleton {\n    margin-bottom: 2rem;\n    display: flex;\n    flex-direction: column;\n  }\n"])));var nn=t(58);function en(n){var e=n.username,t=Object(r.useState)(),c=Object(u.a)(t,2),a=c[0],s=c[1];return Object(r.useEffect)((function(){function n(){return(n=Object(i.a)(o.a.mark((function n(){var t;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.f)(e);case 2:t=n.sent,s(t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),Object(S.jsx)(nn.j,{children:Object(S.jsxs)(h.b,{to:"/p/".concat(e),children:[a?Object(S.jsx)(nn.m,{src:a}):Object(S.jsx)(g.a,{width:25,height:25,circle:!0}),Object(S.jsx)(nn.i,{children:e})]})})}function tn(n){var e=n.src,t=n.caption;return Object(S.jsx)(nn.o,{src:e,alt:t})}var rn=t(61);function cn(n){var e=n.caption,t=n.username;return Object(S.jsxs)(nn.h,{children:[Object(S.jsx)("span",{children:t}),Object(S.jsx)("span",{children:e})]})}var an=t(76),on=t(62);function un(n){var e=n.docId,t=n.comments,c=n.posted,a=n.commentInput,o=Object(r.useState)(t),i=Object(u.a)(o,2),s=i[0],d=i[1];return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{children:[s.length>=3&&Object(S.jsxs)(nn.g,{children:["View all ",s.length," comments"]}),s.slice(0,3).map((function(n){return Object(S.jsxs)(nn.e,{children:[Object(S.jsx)(h.b,{to:"/p/".concat(n.displayName),children:Object(S.jsx)("span",{children:n.displayName})}),Object(S.jsx)(nn.f,{children:n.comment})]},"".concat(n.comment,"-").concat(n.displayName))})),Object(S.jsxs)(nn.n,{children:[Object(an.a)(c,new Date).toUpperCase()," AGO"]})]}),Object(S.jsx)(on.a,{docId:e,comments:s,setComments:d,commentInput:a})]})}var sn,dn=function(n){var e=n.content,t=Object(r.useRef)(null);return Object(S.jsxs)(nn.p,{children:[Object(S.jsx)(en,{username:e.username}),Object(S.jsx)(h.b,{to:"/post/".concat(e.photoId),children:Object(S.jsx)(tn,{src:e.imageSrc,caption:e.caption})}),Object(S.jsx)(rn.a,{docId:e.docId,totalLikes:e.likes.length,likedPhoto:e.userLikedPhoto,handleFocus:function(){return t.current.focus()}}),Object(S.jsx)(cn,{caption:e.caption,username:e.username}),Object(S.jsx)(un,{docId:e.docId,comments:e.comments,posted:e.dateCreated,commentInput:t})]})},ln=function(){var n=function(){var n=Object(r.useState)(null),e=Object(u.a)(n,2),t=e[0],c=e[1],a=Object(r.useContext)(s.a).user.uid,l=void 0===a?"":a;return Object(r.useEffect)((function(){function n(){return(n=Object(i.a)(o.a.mark((function n(){var e,t,r,a;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(d.h)(l);case 2:if(e=n.sent,t=Object(u.a)(e,1),r=t[0].following,a=[],!(r.length>0)){n.next=10;break}return n.next=9,Object(d.d)(l,r);case 9:a=n.sent;case 10:a.sort((function(n,e){return e.dateCreated-n.dateCreated})),c(a);case 12:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[l]),{photos:t}}().photos;return Object(S.jsx)(_,{children:n?(null===n||void 0===n?void 0:n.length)>0?n.map((function(n){return Object(S.jsx)(dn,{content:n},n.docId)})):Object(S.jsx)("p",{children:"Follow people to see photos"}):Object(S.jsx)(g.a,{count:4,width:640,height:600,className:"skeleton"})})},fn=v.a.div(sn||(sn=Object(x.a)(["\n  display: flex;\n  justify-content: center;\n  max-width: 1280px;\n  margin: 0 auto;\n  margin-top: 1.5rem;\n"])));e.default=function(){return Object(r.useEffect)((function(){document.title="Karifgram"})),Object(S.jsxs)("div",{children:[Object(S.jsx)(c.a,{}),Object(S.jsxs)(fn,{children:[Object(S.jsx)(ln,{}),Object(S.jsx)($,{})]})]})}}}]);
//# sourceMappingURL=6.73d11b33.chunk.js.map