(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{16:function(e,a,t){},26:function(e,a,t){e.exports=t(50)},31:function(e,a,t){},32:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(12),i=t.n(o),s=(t(31),t(6)),c=(t(32),t(13)),l=t.n(c),u=t(20),m=function(e){var a=Object(n.useState)({data:null,isLoading:!0}),t=Object(s.a)(a,2),r=t[0],o=t[1];return Object(n.useEffect)((function(){var a=!0,t=new AbortController;o((function(e){return{data:e.data,isLoading:!0}})),Object(u.a)(l.a.mark((function n(){var r,i;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch(e,{signal:t.signal});case 3:return r=n.sent,n.next=6,r.json();case 6:if(i=n.sent,!a){n.next=9;break}return n.abrupt("return",o({data:i,isLoading:!1}));case 9:n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log("Error has occurred::",n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))();return function(){a=!1,t.abort()}}),[e]),r},p=t(7),d=t(22),b=(t(16),t(9)),f=function(e){var a,t=e.source,o=m(t.toLowerCase()),i=o.data,c=o.isLoading,l=Object(n.useState)(!1),u=Object(s.a)(l,2),f=u[0],v=u[1];return a=!1===c?r.a.createElement(b.CSSTransitionGroup,{transitionName:"cardbox",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1},r.a.createElement(p.a,{className:"flexbox"},r.a.createElement(p.a.Img,{variant:"top",src:i.sprites.front_default,style:{width:"96px",height:"96px",transition:"all 300ms ease-in-out 300ms"}}),r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Title,null,i.name.charAt(0).toUpperCase()+i.name.slice(1))))):r.a.createElement(b.CSSTransitionGroup,{transitionName:"cardbox",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1},r.a.createElement(p.a,{className:"flexbox"},r.a.createElement("div",{style:{width:"96px",height:"96px",transition:"all 300ms ease-in-out 300ms"},className:"container-box"},r.a.createElement(d.a,{animation:"border",variant:"danger"})),r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Title,null,"Loading...")))),r.a.createElement("div",{onMouseOut:function(){return v(!1)},onMouseOver:function(){return v(!0)},style:{transition:"all 300ms ease-in-out",transform:"".concat(f?"scale(1.2,1.2)":"scale(1,1)")}},a)},v=function(e){var a=e.pokemons;return r.a.createElement("div",{className:"grid-wrapper",style:{marginLeft:"10%",marginRight:"10%"}},a.map((function(e,a){return r.a.createElement(b.CSSTransitionGroup,{key:a,transitionName:"example",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1},r.a.createElement(f,{className:"pokemon-item",key:a,id:a,name:e.name,source:e.url}))})))},E=t(10),g=t(23),h=t(24),x=t(14),k=t(25);var N=function(){var e=Object(n.useState)("https://pokeapi.co/api/v2/pokemon/"),a=Object(s.a)(e,2),t=a[0],o=a[1],i=m(t),c=i.data,l=i.isLoading,u=Object(n.useState)(""),p=Object(s.a)(u,2),d=p[0],b=p[1],N=Object(n.useState)(!1),w=Object(s.a)(N,2),y=w[0],O=w[1];console.log("Looks like rendering happens 3 times");var j,L=!1,S=!1;return!1===l&&(""!==d?y&&(console.log("fetch pokemon"),j=r.a.createElement("div",{className:"container-box"},r.a.createElement(f,{className:"pokemon-item",source:"https://pokeapi.co/api/v2/pokemon/"+d}))):j=r.a.createElement(v,{pokemons:c.results}),c.previous||(L=!0),c.next||(S=!0)),r.a.createElement("div",null,r.a.createElement(g.a,{fluid:!0,className:"bg-info text-white"},r.a.createElement(h.a,null,r.a.createElement("h1",{className:"display-2"},"Pok\xe9dex"),r.a.createElement("p",{className:"lead"},"I created this web page to practice React Hooks."))),r.a.createElement("div",{style:{marginLeft:"25%",marginRight:"25%"}},r.a.createElement(x.a,{className:"mb-3"},r.a.createElement(k.a,{size:"lg",id:"basic-url","aria-describedby":"basic-addon3",type:"search",placeholder:"pikachu",value:d,onChange:function(e){O(!1),b(e.target.value)}}),r.a.createElement(x.a.Append,null,r.a.createElement(E.a,{variant:"outline-primary",type:"submit",onClick:function(){return O(!0)}},"Search a Pok\xe9mon")))),r.a.createElement("div",{className:"container-box"},r.a.createElement(E.a,{disabled:!(!L&&""===d),variant:"success",size:"lg",onClick:function(){return o(c.previous)},className:"flexbox"},"Previous"),r.a.createElement(E.a,{disabled:!(!S&&""===d),variant:"success",size:"lg",onClick:function(){return o(c.next)},className:"flexbox"},"Next")),r.a.createElement("br",null),j)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(49);i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.98c325cf.chunk.js.map