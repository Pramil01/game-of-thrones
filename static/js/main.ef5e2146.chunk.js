(this["webpackJsonpgame-of-thrones"]=this["webpackJsonpgame-of-thrones"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(8),i=n.n(c),s=(n(14),n(7)),o=n.n(s),l=n(9),u=n(2),h=n(3),d=n(5),j=n(4),p=(n(16),n(0)),m=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{className:"ui segment",children:Object(p.jsx)("form",{className:"ui form",onSubmit:function(e){return e.preventDefault()},children:Object(p.jsxs)("div",{className:"field",children:[Object(p.jsx)("label",{children:"Character Search"}),Object(p.jsx)("input",{type:"text",placeholder:"Search your character here",value:this.term,onChange:function(t){e.setState({term:t.target.value}),e.props.onChange(t.target.value)}})]})})})}}]),n}(a.Component),f=function(e){return Object(p.jsx)("div",{className:"ui active dimmer",children:Object(p.jsx)("div",{className:"ui big text loader",children:e.text})})},b=(n(18),function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.item.map((function(e){return Object(p.jsx)("div",{className:"flip-card",children:Object(p.jsxs)("div",{className:"flip-card-inner",children:[Object(p.jsx)("div",{className:"flip-card-front",children:Object(p.jsx)("img",{alt:e.firstName,src:e.imageUrl})}),Object(p.jsxs)("div",{className:"flip-card-back",children:[Object(p.jsx)("h1",{children:e.title}),Object(p.jsx)("p",{children:e.fullName}),Object(p.jsx)("p",{children:e.family})]})]})},e.id)}));return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"Images",children:this.props.isLoaded?e:Object(p.jsx)(f,{text:"Loading..."})})})}}]),n}(a.Component)),O={width:"100%",height:"10% !important",padding:" 0px 30px"},v=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoaded:!1,item:[],fullItems:[]},e.onSearchChange=function(t){0!==t.length?e.setState({item:e.state.fullItems.filter((function(e){return e.fullName.toUpperCase().includes(t.toUpperCase())}))}):e.setState({item:e.state.fullItems})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://thronesapi.com/api/v2/Characters");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({isLoaded:!0,item:n,fullItems:n}),console.log(n);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.item;return Object(p.jsxs)("div",{style:{padding:"20px 0px",backgroundColor:"#000000",minHeight:"100vh"},children:[Object(p.jsx)("img",{alt:"GotLogo",src:"/Got.jpg",style:O}),Object(p.jsx)(m,{onChange:this.onSearchChange}),Object(p.jsx)("br",{}),Object(p.jsx)(b,{isLoaded:t,item:n})]})}}]),n}(r.a.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root")),x()}},[[19,1,2]]]);
//# sourceMappingURL=main.ef5e2146.chunk.js.map