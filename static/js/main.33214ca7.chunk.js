(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={input:"ContactForm_input__1jw1x"}},19:function(t,e,n){t.exports={input:"Filter_input__Y1GlU"}},29:function(t,e,n){t.exports={container:"Section_container__yIbma"}},36:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(12),o=n.n(a),u=(n(36),n(20)),i=n(13),s=function(t){return t.contacts.items},b=function(t){return t.contacts.filter},j=Object(i.a)([s,b],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),l=n(17),d=n.n(l),O=n(6),f=n(9),h=n.n(f),m=n(2),p=Object(m.b)("contacts/Filter"),x=Object(m.b)("contacts/addContactRequest"),v=Object(m.b)("contacts/addContactsSuccess"),C=Object(m.b)("contacts/addContactsError"),y=Object(m.b)("contacts/deleteContactRequest"),g=Object(m.b)("contacts/deleteContactsSuccess"),w=Object(m.b)("contacts/deleteContactsError"),k=Object(m.b)("contacts/fetchContactsSuccess"),_=Object(m.b)("contacts/fetchContactsError"),S=Object(m.b)("contacts/fetchContactRequest");h.a.defaults.baseURL=" http://localhost:4000";var A=n(1);var N=function(){var t=Object(c.useState)(""),e=Object(u.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)(""),o=Object(u.a)(a,2),i=o[0],b=o[1],j=Object(O.b)(),l=Object(O.c)(s),f=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":r(c);break;case"number":b(c);break;default:return}},m=function(t,e){return j(function(t,e){return function(n){var c={name:t,number:e};n(x()),h.a.post("/contacts",c).then((function(t){var e=t.data;return n(v(e))})).catch((function(t){return n(C(t))}))}}(t,e))},p=function(){b(""),r("")};return Object(A.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),l.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})))return alert("".concat(n," is already in contacts.")),void p();m(n,i),p()},children:[Object(A.jsxs)("label",{children:["Name",Object(A.jsx)("input",{className:d.a.input,type:"text",name:"name",value:n,onChange:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(A.jsxs)("label",{children:["Number",Object(A.jsx)("input",{className:d.a.input,type:"tel",name:"number",value:i,onChange:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(A.jsx)("button",{type:"submit",children:"Add contact"})]})},q=function(t){var e=t.id,n=t.number,c=t.name,r=t.onDeleteContact;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("p",{children:[c,": ",n]}),Object(A.jsx)("button",{type:"button",onClick:function(){return r(e)},children:"Delete"})]})},z=function(){var t=Object(O.c)(j),e=Object(O.b)();Object(c.useEffect)((function(){return e((function(t){t(S()),h.a.get("/contacts").then((function(e){var n=e.data;return t(k(n))})).catch((function(e){return t(_(e))}))}))}),[e]);var n=function(t){return e(function(t){return function(e){e(y()),h.a.delete("/contacts/".concat(t)).then((function(){return e(g(t))})).catch((function(t){return e(w(t))}))}}(t))};return Object(A.jsx)("ul",{children:t.map((function(t){var e=t.id,c=t.number,r=t.name;return Object(A.jsx)("li",{name:r,children:Object(A.jsx)(q,{id:e,name:r,number:c,onDeleteContact:n})},e)}))})},E=n(19),F=n.n(E),L=function(){var t=Object(O.c)(b),e=Object(O.b)();return Object(A.jsxs)("label",{className:F.a.label,children:["Find contacts by name",Object(A.jsx)("input",{className:F.a.input,type:"text",value:t,onChange:function(t){return e(p(t.currentTarget.value))}})]})},D=n(29),R=n.n(D);function J(t){var e=t.children;return Object(A.jsx)("div",{className:R.a.container,children:e})}function M(){return Object(A.jsxs)("div",{children:[Object(A.jsxs)(J,{children:[Object(A.jsx)("h1",{children:"Phonebook"}),Object(A.jsx)(N,{})]}),Object(A.jsxs)(J,{children:[Object(A.jsx)("h2",{children:"My Contacts "}),Object(A.jsx)(L,{})]}),Object(A.jsx)(J,{children:Object(A.jsx)(z,{})})]})}var T,Z,B=n(3),I=n(7),U=n(4),G=n(31),P=Object(m.c)([],(T={},Object(U.a)(T,k,(function(t,e){return e.payload})),Object(U.a)(T,v,(function(t,e){return[].concat(Object(G.a)(t),[e.payload])})),Object(U.a)(T,g,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),T)),Y=Object(m.c)("",Object(U.a)({},p,(function(t,e){return e.payload}))),$=Object(m.c)(!1,(Z={},Object(U.a)(Z,x,(function(){return!0})),Object(U.a)(Z,v,(function(){return!1})),Object(U.a)(Z,C,(function(){return!1})),Object(U.a)(Z,g,(function(){return!1})),Object(U.a)(Z,y,(function(){return!0})),Object(U.a)(Z,w,(function(){return!1})),Object(U.a)(Z,S,(function(){return!0})),Object(U.a)(Z,_,(function(){return!1})),Object(U.a)(Z,k,(function(){return!1})),Z)),H=Object(B.b)({items:P,filter:Y,loading:$}),K=n(30),Q=n.n(K),V=Object(B.b)({contacts:H}),W=Object(m.a)({reducer:V,middleware:function(t){return t({serializableCheck:{ignoredActions:[I.a,I.f,I.b,I.c,I.d,I.e]}}).concat(Q.a)},devTools:!1});o.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(O.a,{store:W,children:Object(A.jsx)(M,{})})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.33214ca7.chunk.js.map