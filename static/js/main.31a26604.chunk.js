(this["webpackJsonptwitchtv-stream"]=this["webpackJsonptwitchtv-stream"]||[]).push([[0],{27:function(e,t,r){},29:function(e,t,r){},30:function(e,t,r){"use strict";r.r(t);var s=r(14),n=r.n(s),a=r(12),c=r.n(a),o=r(16),i=r(15),l=r(4),u=r(5),h=r(7),f=r(6),d=r(2),p=r(3),j=r(9),m=(r(27),r(0)),g=function(){return Object(m.jsxs)("footer",{id:"footer",children:[Object(m.jsx)("p",{children:"Created and designed by rrichy"}),Object(m.jsx)("a",{href:"https://github.com/rrichy",target:"_blank",rel:"noreferrer",children:Object(m.jsx)(p.a,{icon:j.c,className:"fa-lg"})}),Object(m.jsx)("a",{href:"https://www.freecodecamp.org/rrichy",target:"_blank",rel:"noreferrer",children:Object(m.jsx)(p.a,{icon:j.b,className:"fa-lg"})}),Object(m.jsx)("a",{href:"https://codepen.io/rrichy",target:"_blank",rel:"noreferrer",children:Object(m.jsx)(p.a,{icon:j.a,className:"fa-lg"})})]})},b=r(13),O=r.p+"static/media/user.defb579e.svg",v=function(e){Object(h.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(l.a)(this,r);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).handleHover=function(t){var r=e.props.user,s=r.display_name,n=r.created_at,a=r.bio,c=document.querySelector("#tooltip");c.style.opacity=1,c.style.top=t.target.offsetTop+"px",c.innerHTML="\n\t\t\t<h3>".concat(s,"</h3>\n\t\t\t<p>Since ").concat(n,"</p>\n\t\t\t<p>").concat(a,"</p>")},e.handleHoverOut=function(){var e=document.querySelector("#tooltip");e.style.opacity=0,e.innerHTML=""},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=this.props.user.id,t=document.querySelector("#name-"+e),r=document.querySelector("#description-"+e);t.scrollWidth!==t.offsetWidth&&(t.className=t.className+" overflow-description"),r.scrollWidth!==r.offsetWidth&&(r.className=r.className+" overflow-description")}},{key:"render",value:function(){var e=this.props.user,t=e.display_name,r=e.logo,s=e.link,n=e.game,a=e.viewers,c=e.status,o=e.active,i=e.id;return Object(m.jsx)("div",{className:"user",onMouseEnter:this.handleHover,onMouseLeave:this.handleHoverOut,children:Object(m.jsxs)("a",{href:s,target:"_blank",rel:"noreferrer",children:[Object(m.jsx)("img",{src:r,alt:"",className:"user-icon"+(o?" active":""),onError:function(e){return e.target.src=O}}),Object(m.jsxs)("div",{className:"user-description",children:[Object(m.jsx)("h4",{id:"name-"+i,children:t}),Object(m.jsx)("p",{id:"description-"+i,className:"game-description",children:o?n+": "+c:"Offline"}),a&&Object(m.jsx)("p",{children:"Viewers: "+a})]})]})})}}]),r}(d.Component),x=function(e){Object(h.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(l.a)(this,r);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).toggleOnlineUsers=function(){var t=document.querySelector("#on-arrow"),r=document.querySelector("#on-list");"0px"!==r.style.maxHeight?(t.style.transform="rotate(-90deg)",r.style.maxHeight="0px"):(t.style.transform="",r.style.maxHeight=e.props.onHeight+"px")},e.toggleOfflineUsers=function(){var t=document.querySelector("#off-arrow"),r=document.querySelector("#off-list");"0px"!==r.style.maxHeight?(t.style.transform="rotate(-90deg)",r.style.maxHeight="0px"):(t.style.transform="",r.style.maxHeight=e.props.offHeight+"px")},e}return Object(u.a)(r,[{key:"render",value:function(){var e=this.props.users.filter((function(e){return e.active})),t=this.props.users.filter((function(e){return!e.active}));return Object(m.jsxs)("div",{className:"user-list",children:[Object(m.jsxs)("div",{className:"online",children:[Object(m.jsxs)("h4",{className:"status",onClick:this.toggleOnlineUsers,children:[Object(m.jsx)(p.a,{id:"on-arrow",icon:b.a}),"ONLINE"]}),Object(m.jsx)("div",{id:"on-list",className:"list",children:e.map((function(e){return Object(m.jsx)(v,{user:e},e.id)}))})]}),Object(m.jsxs)("div",{className:"offline",children:[Object(m.jsxs)("h4",{className:"status",onClick:this.toggleOfflineUsers,children:[Object(m.jsx)(p.a,{id:"off-arrow",icon:b.a}),"OFFLINE"]}),Object(m.jsx)("div",{id:"off-list",className:"list",children:t.map((function(e){return Object(m.jsx)(v,{user:e},e.id)}))})]}),Object(m.jsx)("div",{id:"tooltip"})]})}}]),r}(d.Component),y=function(e){Object(h.a)(r,e);var t=Object(f.a)(r);function r(){var e;Object(l.a)(this,r);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={users:[],test:"",onHeight:0,offHeight:0},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=Object(i.a)(c.a.mark((function e(){var t,r,s,n,a,i,l,u,h,f,d,p,j,m,g,b,O,v,x,y,w,H,N;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},r=[],["ESL_SC2","OgamingSC2","cretetion","freecodecamp","storbeck","habathcx","RobotCaleb","noobs2ninjas"].forEach((function(e){r.push(fetch("https://twitch-proxy.freecodecamp.rocks/twitch-api/users/"+e)),r.push(fetch("https://twitch-proxy.freecodecamp.rocks/twitch-api/streams/"+e))})),e.next=6,Promise.all(r);case 6:return s=e.sent,e.next=9,Promise.all(s.map((function(e){return e.json()})));case 9:for(n=e.sent;n.length;)a=n.splice(0,2),i=Object(o.a)(a,2),l=i[0],u=l.display_name,h=l.bio,f=l.name,d=l._id,p=l.logo,j=l.created_at,m=i[1].stream,t[f]={display_name:u,bio:null===h?"":h,logo:p,id:d,created_at:new Date(j).toLocaleDateString(),link:"https://www.twitch.tv/"+f},m?(g=m.game,b=m.viewers,O=m.channel,v=O.language,x=O.status,t[f].language=v,t[f].game=g,t[f].viewers=b,t[f].status=x,t[f].active=!0):t[f].active=!1;t=Object.values(t),this.setState({users:t}),y=document.querySelector("#on-list"),w=document.querySelector("#off-list"),H=y.offsetHeight,N=w.offsetHeight,console.log("onHeight:",H),console.log("offHeight:",N),y.style.maxHeight=H+"px",w.style.maxHeight=N+"px",this.setState({onHeight:H,offHeight:N}),console.log(this.state.users);case 23:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(m.jsxs)("div",{id:"wrapper",children:[Object(m.jsx)(x,{users:this.state.users,onHeight:this.state.onHeight,offHeight:this.state.offHeight}),Object(m.jsx)(g,{})]})}}]),r}(d.Component);r(29);n.a.render(Object(m.jsx)(y,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.31a26604.chunk.js.map