(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o);a(15),a(17),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(4),l=a(5),s=a(7),h=a(6),u=a(8),m=a(1),d=function(e){var t=e.name,a=e.email;e.id;return r.a.createElement("div",{className:"tc dib bg-light-green br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,a)))},b=function(e){var t=e.robots,a=t.map(function(e,a){return r.a.createElement(d,{key:t[a].id,id:t[a].id,name:t[a].name,email:t[a].email})});return r.a.createElement("div",null,a)},g=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},v=function(e){var t=e.onSearchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(h.a)(t).call(this))).state={robots:[],searchField:""},e.onSearchChange=e.onSearchChange.bind(Object(m.a)(Object(m.a)(e))),e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onSearchChange",value:function(e){this.setState({searchField:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchField,n=t.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(v,{onSearchChange:this.onSearchChange,searchField:this.searchField}),r.a.createElement(g,null,r.a.createElement(b,{robots:n}))):r.a.createElement("h1",{className:"f1 tc"},"Loading...")}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){e.setState({robots:t})})}}]),t}(n.Component);c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.61942f74.chunk.js.map