(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{42:function(e,t,a){e.exports=a.p+"static/media/logoHeader.c36ae3c8.png"},45:function(e,t,a){e.exports=a.p+"static/media/burger-queen.c36ae3c8.png"},47:function(e,t,a){e.exports=a(68)},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},62:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(41),l=a.n(r),o=(a(52),a(53),a(23)),u=a(12),m=(a(54),a(42)),i=a.n(m),s=function(){return c.a.createElement("header",null,c.a.createElement("img",{className:"logoheader",src:i.a,alt:"logo"}),c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(o.b,{to:"/home"},"HOME")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/tables"},"MESAS")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/kitchen"},"COCINA")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/orders"},"PEDIDOS POR ENTREGAR")))))},d=(a(62),a(45)),E=a.n(d),p=function(){return c.a.createElement("div",{className:"home__containt"},c.a.createElement("figure",null,c.a.createElement("img",{src:E.a,alt:"logoHome"})),c.a.createElement("div",{className:"button__options"},c.a.createElement(o.b,{to:"/order"},c.a.createElement("button",{type:"button",className:"btn-orden"},"MESERO")),c.a.createElement(o.b,{to:"/kitchen"},c.a.createElement("button",{type:"button",className:"btn-chef"},"CHEF"))))},b=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s,null),c.a.createElement("div",{className:"kitchen"},"COCINA"))},f=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s,null),c.a.createElement("div",{className:"kitchen"}," COCINA"))},g=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s,null),c.a.createElement("div",{className:"PageNotFound"},"ERROR 404 ERROR 404 ERROR 404 ERROR 404 ERROR 404 ERROR 404 ERROR 404 ERROR 404 ERROR 404 ERROR 404 ERROR 404 ERROR 404 ERROR 404 ERROR 404"))},h=a(22),O=a(0),R=a.n(O),v=a(4),N=a(13),y=a(39);a(69);y.a.initializeApp({apiKey:"AIzaSyDLbLyvmeWmcgESLcH223waNmMo9fPaPbE",authDomain:"burger-queen-65484.firebaseapp.com",projectId:"burger-queen-65484",storageBucket:"burger-queen-65484.appspot.com",messagingSenderId:"841097883738",appId:"1:841097883738:web:a4235c3345a1d8c1b82863",measurementId:"G-SB68MB9J1J"});var j=y.a.firestore(),C=a(26);a(65);function k(e){var t=Object(n.useState)([]),a=Object(N.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){j.collection("Products").orderBy("name","asc").get().then((function(e){var t=[];e.forEach((function(e){var a={id:e.id,type:e.data().type,img:e.data().img,name:e.data().name,price:e.data().price};t.push(a)})),l([].concat(t))}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("main",{className:"product-grid"},r.filter((function(t){return t.type===e.type})).map((function(t){return c.a.createElement("div",{className:"container-product",key:t.id},c.a.createElement("div",{className:"content-product"},c.a.createElement("div",{className:"visual-product"},c.a.createElement("figure",{className:"product-figure"},c.a.createElement("img",{className:"product-img",src:t.img,alt:t.name}),c.a.createElement("span",{className:"product-price"},c.a.createElement("strong",null,"S/.",t.price,".00")))),c.a.createElement("div",{className:"product-details"},c.a.createElement("h3",null,t.name)),c.a.createElement("button",{type:"button",onClick:function(){return e.addProduct(t.id)}},"AGREGAR")))}))))}a(66);function S(e){console.log(e,4);var t=Object(n.useState)(""),a=Object(N.a)(t,2),r=a[0],l=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("table",{className:"table table-borderless"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{scope:"col",style:{"font-size":"2.0rem"}},"DETALLE DE LA ORDEN")),c.a.createElement("tr",null,c.a.createElement("th",{scope:"col",style:{"font-size":"1.6rem"}},"MESA"),c.a.createElement("th",{scope:"col",style:{"font-size":"1.6rem"}},c.a.createElement("label",null,"Cliente:",c.a.createElement("input",{type:"text",onChange:function(e){var t=e.target.value;l(t)}})))),c.a.createElement("tr",null,c.a.createElement("th",{scope:"col",style:{"font-size":"1.6rem"}},"CANTIDAD"),c.a.createElement("th",{scope:"col",style:{"font-size":"1.6rem"}},"PRODUCTO"),c.a.createElement("th",{scope:"col",style:{"font-size":"1.6rem"}},"PRECIO"))),c.a.createElement("tbody",null,e.productsSelected.map((function(t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("tr",{key:t.id},c.a.createElement("td",{className:"table__cantidad"},c.a.createElement("div",null," ",c.a.createElement("button",{onClick:function(){return e.addProduct(t.id)}},"+")),c.a.createElement("div",{className:"div-count"},t.count),c.a.createElement("div",null," ",c.a.createElement("button",{onClick:function(){return e.reduceProducts(t.id)}},"-"))),c.a.createElement("td",{className:"table__products"},c.a.createElement("p",null,t.name)),c.a.createElement("td",{className:"table__price"},c.a.createElement("p",null,"$",t.price),c.a.createElement("button",{onClick:function(){return function(t){var a=e.productsSelected.filter((function(e){return e.id!==t}));e.setProductsSelected(a)}(t.id)}},"borrar"))),c.a.createElement("hr",null))}))),c.a.createElement("div",{className:"row max-4"},c.a.createElement("div",{className:"col"},c.a.createElement("h3",{className:"item-card-total"},"Total: $",e.productsSelected.reduce((function(e,t){return e+Number(t.price)*Number(t.count)}),0))),c.a.createElement("div",{className:"row max-4"},c.a.createElement("div",{className:"col d-flex justify content-end"},c.a.createElement("button",{type:"button",className:"confirmer-order",onClick:function(){var t={name:r,order:e.productsSelected,total:e.productsSelected.reduce((function(e,t){return e+Number(t.price)*Number(t.count)}),0)};0!==t.total&&j.collection("order").add(t)}},"confirmar"),c.a.createElement("button",{type:"button",className:"reject-order"},"cancelar"))))))}var x=a(46),P=["history","location","match","staticContext","to","onClick"],A=Object(u.g)((function(e){var t=e.history,a=(e.location,e.match,e.staticContext,e.to),n=e.onClick,r=Object(x.a)(e,P);return c.a.createElement("button",Object.assign({},r,{onClick:function(e){n&&n(e),t.push(a)}}))}));a(67);function F(){var e=Object(n.useState)([]),t=Object(N.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){j.collection("Table").orderBy("name","asc").get().then((function(e){var t=[];e.forEach((function(e){var a={id:e.id,name:e.data().name,status:e.data().status};t.push(a)})),r([].concat(t))}))}),[]);var l=function(){var e=Object(v.a)(R.a.mark((function e(t){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),a=Object(C.a)(j,"Table",t),e.next=4,Object(C.c)(a,{status:!1});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(s,null),c.a.createElement("section",null,c.a.createElement("div",{className:"tables-container"},a.map((function(e){return c.a.createElement(c.a.Fragment,null,console.log(e.id,41),c.a.createElement(A,{to:"/order/".concat(e.id),type:"button",key:e.id,className:"table-button",onClick:function(){return l(e.id)}},e.name))})))))}function I(){var e=Object(n.useState)([]),t=Object(N.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)("desayuno"),o=Object(N.a)(l,2),u=o[0],m=o[1],i=function(){var e=Object(v.a)(R.a.mark((function e(t){var n,c,l,o,u;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("addProducts"),n=Object(C.a)(j,"Products",t),e.next=4,Object(C.b)(n);case 4:c=e.sent,l=c.data(),o={id:t,name:l.name,price:l.price,count:1},a.some((function(e){return e.id===o.id}))?(u=a.map((function(e){return e.id===o.id?(e.count=e.count+1,e):e})),r(Object(h.a)(u)),console.log()):r([].concat(Object(h.a)(a),[o]));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(v.a)(R.a.mark((function e(t){var n,c,l,o,u;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(C.a)(j,"Products",t),e.next=3,Object(C.b)(n);case 3:c=e.sent,l=c.data(),o={id:t,name:l.name,price:l.price,count:1},a.some((function(e){return e.id===o.id}))?(u=a.map((function(e){return e.id===o.id&&e.count>0?(e.count=e.count-1,e):e})),r(Object(h.a)(u))):r([].concat(Object(h.a)(a),[o]));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(s,null),c.a.createElement("main",{className:"products-section"},c.a.createElement("section",{className:"menu-section"},c.a.createElement("div",{className:"menu-buttons-container"},c.a.createElement("button",{type:"button",className:"btn-breakfast",id:"desayuno",onClick:function(){return m("desayuno")}},"DESAYUNO"),c.a.createElement("button",{type:"button",className:"btn-lunch",id:"almuerzo",onClick:function(){return m("almuerzo")}},"ALMUERZO"))),c.a.createElement("section",{className:"menu-section-products"},c.a.createElement(k,{addProduct:i,type:u})),c.a.createElement("section",{className:"purchase-orders-section"},c.a.createElement(S,{productsSelected:a,setProductsSelected:r,addProduct:i,reduceProducts:d}))))}var w=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"app"},c.a.createElement(o.a,null,c.a.createElement(u.d,null,c.a.createElement(u.b,{exact:!0,path:"/order/",component:F},c.a.createElement(F,null)),c.a.createElement(u.b,{exact:!0,path:"/order/:id",component:F},c.a.createElement(I,null)),c.a.createElement(u.b,{exact:!0,path:"/home",component:p}),c.a.createElement(u.b,{exact:!0,path:"/order/",component:I},c.a.createElement(F,null),c.a.createElement(I,null)),c.a.createElement(u.b,{exact:!0,path:"/order/:id"},c.a.createElement(s,null),c.a.createElement(I,null)),c.a.createElement(u.b,{exact:!0,path:"/kitchen",component:b}),c.a.createElement(u.b,{exact:!0,path:"/orders",component:f}),c.a.createElement(u.a,{to:"/home"}),c.a.createElement(u.b,{component:g})))))},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)}))};l.a.render(c.a.createElement(n.Suspense,{fallback:c.a.createElement("p",null,"Cargando...")},c.a.createElement(w,null)),document.getElementById("root")),D()}},[[47,1,2]]]);
//# sourceMappingURL=main.764c159e.chunk.js.map