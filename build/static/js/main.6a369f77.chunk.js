(this.webpackJsonpownchat=this.webpackJsonpownchat||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),a=n(15),s=n.n(a),i=(n(24),n(13)),o=n.n(i),u=n(16),j=n(10),b=(n(26),n(9)),d=(n(33),n(28),n(31),n(18)),h=n(19),l=n(4);b.a.initializeApp({apiKey:"AIzaSyDz1QZ7HN1tCmBcC-IYNibMGx1EMwqo7nc",authDomain:"bnochat.firebaseapp.com",projectId:"bnochat",storageBucket:"bnochat.appspot.com",messagingSenderId:"510207850870",appId:"1:510207850870:web:5c6bf659061a0662bca257",measurementId:"G-HE56TNCNWE"});var p=b.a.auth(),O=b.a.firestore();function m(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:"sign-in",onClick:function(){var e=new b.a.auth.GoogleAuthProvider;p.signInWithPopup(e)},children:"Sign in with Google"}),Object(l.jsx)("p",{children:"Do not use abused words!"})]})}function g(){return p.currentUser&&Object(l.jsx)("button",{className:"sign-out",onClick:function(){return p.signOut()},children:"Sign Out"})}function x(){var e=Object(c.useRef)(),t=O.collection("messages"),n=t.orderBy("createdAt").limit(25),r=Object(h.a)(n,{idField:"id"}),a=Object(j.a)(r,1)[0],s=Object(c.useState)(""),i=Object(j.a)(s,2),d=i[0],m=i[1],g=function(){var n=Object(u.a)(o.a.mark((function n(c){var r,a,s;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),r=p.currentUser,a=r.uid,s=r.photoURL,n.next=4,t.add({text:d,createdAt:b.a.firestore.FieldValue.serverTimestamp(),uid:a,photoURL:s});case 4:m(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("main",{children:[a&&a.map((function(e){return Object(l.jsx)(f,{message:e},e.id)})),Object(l.jsx)("span",{ref:e})]}),Object(l.jsxs)("form",{onSubmit:g,children:[Object(l.jsx)("input",{value:d,onChange:function(e){return m(e.target.value)},placeholder:"say something nice"}),Object(l.jsx)("button",{type:"submit",disabled:!d,children:"TouchMe:"})]})]})}function f(e){var t=e.message,n=t.text,c=t.uid,r=t.photoURL,a=c===p.currentUser.uid?"sent":"received";return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"message ".concat(a),children:[Object(l.jsx)("img",{src:r||"https://api.adorable.io/avatars/23/abott@adorable.png",alt:"BNOChat"}),Object(l.jsx)("p",{children:n})]})})}var v=function(){var e=Object(d.a)(p),t=Object(j.a)(e,1)[0];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:"YOU&ME"}),Object(l.jsx)(g,{})]}),Object(l.jsx)("section",{children:t?Object(l.jsx)(x,{}):Object(l.jsx)(m,{})})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),w()}},[[32,1,2]]]);
//# sourceMappingURL=main.6a369f77.chunk.js.map