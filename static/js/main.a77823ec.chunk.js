(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{10:function(e,t,n){},19:function(e,t,n){e.exports=n(28)},24:function(e,t,n){},25:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),i=(n(24),n(7)),s=(n(25),n(8)),l=n.n(s),u=n(12),m=function(e){var t=Object(a.useState)({data:null,isLoading:!0}),n=Object(i.a)(t,2),r=n[0],o=n[1];return Object(a.useEffect)((function(){var t=!0,n=new AbortController;o((function(e){return{data:e.data,isLoading:!0}})),console.log("mounted::",t),function(){var e=Object(u.a)(l.a.mark((function e(a){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a,{signal:n.signal});case 2:return r=e.sent,e.next=5,r.json();case 5:if(c=e.sent,!t){e.next=8;break}return e.abrupt("return",o({data:c,isLoading:!1}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()(e);return function(){t=!1,n.abort()}}),[e]),console.log(r),r},d=n(5),p=n(13),f=(n(10),function(e){var t=e.name,n=e.source,a=m(n),o=a.data,c=a.isLoading;return c?console.log("testing"):console.log("sprites::",o.sprites.front_default),r.a.createElement("div",null,c?r.a.createElement(p.a,{animation:"border",variant:"success"}):r.a.createElement(d.a,{className:"flexbox"},r.a.createElement(d.a.Img,{variant:"top",src:o.sprites.front_default,style:{width:"96px",height:"96px"}}),r.a.createElement(d.a.Body,null,r.a.createElement(d.a.Title,null,t.charAt(0).toUpperCase()+t.slice(1)))))}),v=function(e){var t=e.pokemons;return r.a.createElement("div",{className:"grid-wrapper"},t.map((function(e,t){return r.a.createElement(f,{key:t,id:t,name:e.name,source:e.url})})))},h=n(15),E=n(16),g=n(18),k=n(17),b=function(e){Object(g.a)(n,e);var t=Object(k.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(E.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return!0===this.state.hasError?r.a.createElement("h1",null,"Oops. This is not good."):this.props.children}}]),n}(a.Component),x=n(6);var w=function(){var e,t=Object(a.useState)("https://pokeapi.co/api/v2/pokemon/"),n=Object(i.a)(t,2),o=n[0],c=n[1],s=m(o),l=s.data,u=s.isLoading;return!1===u&&null===l.previous?e=r.a.createElement("div",null,r.a.createElement(x.a,{variant:"success",onClick:function(){return c(l.next)}},"Next")):!1===u&&null!==l.previous&&null!==l.next?e=r.a.createElement("div",null,r.a.createElement(x.a,{variant:"success",onClick:function(){return c(l.previous)}},"Previous"),r.a.createElement(x.a,{variant:"success",onClick:function(){return c(l.next)}},"Next")):!1===u&&null===l.next&&(e=r.a.createElement("div",null,r.a.createElement(x.a,{variant:"success",onClick:function(){return c(l.previous)}},"Previous"))),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Pokedex"),r.a.createElement("h3",null,"created by Jeryl"),r.a.createElement("h3",null,u?"Loading....":l.count),e,r.a.createElement(b,null,u?"Loading....":r.a.createElement(v,{pokemons:l.results})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(27);c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.a77823ec.chunk.js.map