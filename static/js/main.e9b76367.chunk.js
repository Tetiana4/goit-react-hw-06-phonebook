(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{28:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var c,r,a,o=n(0),i=n.n(o),b=n(12),s=n.n(b),u=(n(28),n(18)),d=n(6),j=n(7),l=n(38),O=Object(j.b)("add/Contact",(function(e){return{payload:{id:Object(l.a)(),name:e.name,number:e.number}}})),p=Object(j.b)("delete/Contact"),x=Object(j.b)("changeFilter/Contact"),h=n(4),f=n(5),m=f.a.label(c||(c=Object(h.a)(["\n  margin: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),g=f.a.button(r||(r=Object(h.a)(["\n  margin-top: 10px;\n  width: 100px;\n  height: 25px;\n  color: #7b3f3f;\n"]))),v=f.a.input(a||(a=Object(h.a)(["\n  margin: 0;\n"]))),y=n(1);var C,k,w,A=function(){var e=Object(o.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(o.useState)(""),a=Object(u.a)(r,2),i=a[0],b=a[1],s=Object(l.a)(),j=Object(l.a)(),p=Object(d.b)(),x=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":c(r);break;case"number":b(r);break;default:return}};return Object(y.jsx)("div",{children:Object(y.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p(O({name:n,number:i})),c(""),b("")},children:[Object(y.jsxs)(m,{htmlFor:s,children:["Name",Object(y.jsx)(v,{placeholder:"name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:x,id:s})]}),Object(y.jsxs)(m,{htmlFor:j,children:["Number",Object(y.jsx)(v,{placeholder:"number",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:i,onChange:x,id:j})]}),Object(y.jsx)(g,{type:"submit",children:"Add contact"})]})})},z=n(9),F=n.n(z),S=function(e){return e.contacts.filter},T=function(e){var t=function(e){return e.contacts.contacts}(e),n=S(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},J=function(){var e=Object(d.c)(S),t=Object(d.b)();return Object(y.jsx)("label",{children:Object(y.jsx)("input",{type:"text",value:e,onChange:function(e){return t(x(e.currentTarget.value))}})})},L=J;J.propeTypes={value:F.a.string,onChange:F.a.func};var Z,q,B=f.a.ul(C||(C=Object(h.a)(["\n  padding: 0 20px;\n  list-style: none;\n"]))),D=f.a.li(k||(k=Object(h.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n"]))),M=f.a.button(w||(w=Object(h.a)(["\n  margin-bottom: 5px;\n  padding: 5px 10px;\n  color: #f71c0c;\n  border: 1px solid #723a3a;\n  border-radius: 5px;\n"]))),N=function(){var e=Object(d.c)(T),t=Object(d.b)();return Object(y.jsx)(B,{children:e.map((function(e){var n=e.id,c=e.name,r=e.number;return Object(y.jsxs)(D,{children:[c,": ",r,Object(y.jsx)(M,{onClick:function(){return function(e){return t(p(e))}(n)},children:"delete"})]},n)}))})},E=N;N.propeTypes={contacts:F.a.array,onDelete:F.a.func};var I=f.a.div(Z||(Z=Object(h.a)(["\n  margin: 0 auto;\n  padding: 20px 20px;\n  width: 400px;\n\n  text-align: center;\n  justify-content: center;\n  border-radius: 10px;\n  border: 3px solid #ce6a6a;\n  background-color: #ec9f9f;\n"]))),P=f.a.h1(q||(q=Object(h.a)(["\n  margin: 0 0 20px;\n"])));function $(){return Object(y.jsxs)(I,{children:[Object(y.jsx)(P,{children:"Phonebook"}),Object(y.jsx)(A,{}),Object(y.jsx)("h2",{children:"Contacts"}),Object(y.jsx)("p",{children:"Find contacts by name"}),Object(y.jsx)(L,{}),Object(y.jsx)(E,{})]})}var G,H=n(14),K=n(19),Q=n.n(K),R=n(15),U=n(2),V=Object(j.c)([],(G={},Object(R.a)(G,O,(function(e,t){var n=t.payload;return[].concat(Object(H.a)(e),[n])})),Object(R.a)(G,p,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),G)),W=Object(j.c)("",Object(R.a)({},x,(function(e,t){return t.payload}))),X=Object(U.b)({contacts:V,filter:W}),Y=n(8),_=n(20),ee={key:"contacts",storage:n.n(_).a,blackList:["filter"]},te=[].concat(Object(H.a)(Object(j.d)({serializableCheck:{ignoredActions:[Y.a,Y.f,Y.b,Y.c,Y.d,Y.e]}})),[Q.a]),ne=Object(j.a)({reducer:{contacts:Object(Y.g)(ee,X)},middleware:te}),ce={store:ne,persistor:Object(Y.h)(ne)},re=n(21);s.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(d.a,{store:ce.store,children:Object(y.jsx)(re.a,{loading:null,persistor:ce.persistor,children:Object(y.jsx)($,{})})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.e9b76367.chunk.js.map