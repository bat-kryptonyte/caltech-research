(this["webpackJsonpcaltech-research"]=this["webpackJsonpcaltech-research"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(3),s=a.n(i),c=(a(13),a(4)),o=a(5),l=a(1),m=a(7),u=a(6),p=(a(14),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={first:"",second:"",third:""},n.genUniqueInt=n.genUniqueInt.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"genUniqueInt",value:function(e,t){for(var a=parseInt(Math.random()*e);t.includes(a);)a=parseInt(Math.random()*e);return a}},{key:"componentDidMount",value:function(){for(var e=[],t=0;t<3;t++)e.push(this.genUniqueInt(30,e));this.setState({first:("00"+e[0]).slice(-3),second:("00"+e[1]).slice(-3),third:("00"+e[2]).slice(-3)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"info"},r.a.createElement("p",null,"Some pictures are of normal strawberries. Some are of wedge strawberries."),r.a.createElement("p",null,"Which strawberries are the same?")),r.a.createElement("div",{className:"images"},r.a.createElement("img",{src:"./imgs/"+this.state.first+".jpg",className:"identify",alt:"strawberry 1"}),r.a.createElement("img",{src:"./imgs/"+this.state.second+".jpg",className:"identify",alt:"strawberry 2"}),r.a.createElement("img",{src:"./imgs/"+this.state.third+".jpg",className:"identify",alt:"strawberry 3"})),r.a.createElement("div",{className:"options"},r.a.createElement("form",{action:"https://airtable-api-626.herokuapp.com/api",method:"POST"},r.a.createElement("input",{type:"text",id:"name",name:"name",placeholder:"Name",required:!0}),r.a.createElement("input",{type:"hidden",id:"pic1",name:"pic1",value:parseInt(this.state.first)}),r.a.createElement("input",{type:"hidden",id:"pic2",name:"pic2",value:parseInt(this.state.second)}),r.a.createElement("input",{type:"hidden",id:"pic3",name:"pic3",value:parseInt(this.state.third)}),r.a.createElement("select",{name:"match",id:"match"},r.a.createElement("option",{disabled:!0,value:"0"},"None"),r.a.createElement("option",{value:"1"},"1,2"),r.a.createElement("option",{value:"2"},"1,3"),r.a.createElement("option",{value:"3"},"2,3"),r.a.createElement("option",{value:"4"},"1,2,3")),r.a.createElement("button",{class:"submit",type:"submit"},"Submit"))))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.7c59651a.chunk.js.map