(this.webpackJsonpappgallerylite=this.webpackJsonpappgallerylite||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/banner.1321cdd6.jpg"},11:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var r,n=a(0),s=a.n(n),i=a(9),l=a.n(i),c=a(1),o=a(2),d=a(4),p=a(3),u=a(5),m=a(6),h=a(7),b={height:"200px",maxWidth:"100%"},v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={isHovered:!1,activeClass:"col-xl-4 col-lg-6"},a.activateHover=a.activateHover.bind(Object(m.a)(a)),a.deactivateHover=a.deactivateHover.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"activateHover",value:function(){this.setState({isHovered:!0,activeClass:"animated pulse col-xl-4 col-lg-6"})}},{key:"deactivateHover",value:function(){this.setState({isHovered:!1,activeClass:"col-xl-4 col-lg-6"})}},{key:"render",value:function(){var e=this.props.data.isActivelySupported?s.a.createElement("i",{title:"Actively Supported",className:"float-right fas fa-check-double fa-lg text-success p-1"}):"",t=this.props.data.isFeatured?s.a.createElement("i",{title:"Featured",className:"float-right fas fa-star fa-lg text-warning p-1"}):"",a=this.props.data.isCollaboration?s.a.createElement("i",{title:"Collaboration",className:"float-right fas fa-users fa-lg text-secondary p-1"}):"",r=""!==this.props.data.deployedLink?s.a.createElement("span",null,s.a.createElement("span",null," | "),s.a.createElement("a",{target:"_blank",href:this.props.data.deployedLink},s.a.createElement("small",null,"Experience"))):"",n=""!==this.props.data.deployedLink?this.props.data.deployedLink:this.props.data.githubLink;return s.a.createElement("div",{className:this.state.activeClass,onMouseEnter:this.activateHover,onMouseLeave:this.deactivateHover},s.a.createElement("div",{className:"card shadow mb-3"},s.a.createElement("div",{className:"card-header text-left"},s.a.createElement("h5",{className:"float-left"},this.props.data.title),e,t,a),s.a.createElement("a",{target:"_blank",href:n,className:"d-flex justify-content-center bg-light"},s.a.createElement("img",{src:this.props.data.imagePath,style:b})),s.a.createElement("div",{className:"card-footer text-right"},s.a.createElement("a",{target:"_blank",href:this.props.data.githubLink},s.a.createElement("small",null,"View Source")),r)))}}]),t}(n.Component),f=function(e){function t(e){return Object(c.a)(this,t),Object(d.a)(this,Object(p.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data.map((function(e){return s.a.createElement(v,{key:e._id,data:e})})),t=1!==this.props.resultCount?"Displaying ".concat(this.props.resultCount," applications."):"Displaying ".concat(this.props.resultCount," application.");return s.a.createElement("div",{className:"row animated fadeInUpBig"},s.a.createElement("div",{className:"col"},s.a.createElement("div",{className:"mb-4 p-3"},s.a.createElement("small",{className:"text-dark mb-2"},t),s.a.createElement("hr",null),s.a.createElement("div",{className:"row"},e))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={databaseRecords:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.handleSearch()}},{key:"handleSearch",value:function(){var e=this;fetch("https://mfarmer5102-grandcentralapi.herokuapp.com/AppGalleryLite/api/applications").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({databaseRecords:t})}))}},{key:"render",value:function(){var e=this.state.databaseRecords,t=this.props.activeKeywords,a=e.filter((function(e){for(var a=!0,r=0;r<t.length;r++)e.keywords.includes(t[r])||(a=!1);return a}));return s.a.createElement("div",null,s.a.createElement(f,{sectionName:"Queried Apps",data:a,resultCount:a.length}))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).toggleKeyword=function(){a.state.isClicked?(a.setState({isClicked:!1,activeClass:"badge badge-pill badge-light border border-dark m-1"}),a.props.passKeywordNameToParent(a.props.keywordName)):(a.setState({isClicked:!0,activeClass:"badge badge-pill badge-info m-1"}),a.props.passKeywordNameToParent(a.props.keywordName))},a.state={isClicked:!1,activeClass:"badge badge-pill badge-light border border-dark m-1"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("span",{className:this.state.activeClass,onClick:this.toggleKeyword},this.props.keywordName||"Tech")}}]),t}(n.Component),k=a(10),E=a.n(k),w=(r={position:"-webkit-sticky"},Object(h.a)(r,"position","sticky"),Object(h.a)(r,"top","0"),r),j={padding:"0px"},O={width:"100%"},N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={totalClicks:0,subComponentVisibilityToggler:{Applications:!0},keywordsArray:[],activeKeywords:[]},a.grabKeywordsFromDatabase=a.grabKeywordsFromDatabase.bind(Object(m.a)(a)),a.pullInKeywordName=a.pullInKeywordName.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){this.grabKeywordsFromDatabase()}},{key:"grabKeywordsFromDatabase",value:function(){var e=this;fetch("https://mfarmer5102-grandcentralapi.herokuapp.com/AppGalleryLite/api/keywords").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({keywordsArray:t})}))}},{key:"pullInKeywordName",value:function(e){var t=this.state.activeKeywords;console.log(t);var a=t.includes(e);if(console.log(a),a){var r=t.filter((function(t){return t!==e}));console.log(r),this.setState({activeKeywords:r})}else{var n=t.concat(e);console.log(n),this.setState({activeKeywords:n})}}},{key:"render",value:function(){var e=this,t=this.state.keywordsArray.map((function(t,a){return s.a.createElement(g,{key:a,keywordName:t.name,type:t.type,passKeywordNameToParent:e.pullInKeywordName})})),a=t.filter((function(e){return"language"===e.props.type})),r=t.filter((function(e){return"framework"===e.props.type})),n=t.filter((function(e){return"database"===e.props.type})),i=t.filter((function(e){return"other"===e.props.type}));return s.a.createElement("main",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("section",{className:"col-md-9 col-sm-12 p-3"},s.a.createElement(y,{activeKeywords:this.state.activeKeywords,visibility:this.state.subComponentVisibilityToggler.Applications})),s.a.createElement("section",{className:"col-md-3 bg-light text-dark shadow",style:j},s.a.createElement("nav",{style:w},s.a.createElement("div",null,s.a.createElement("img",{src:E.a,style:O})),s.a.createElement("div",{className:"p-4"},s.a.createElement("div",{className:"mb-4"},"Languages",s.a.createElement("hr",null),a),s.a.createElement("div",{className:"mb-4"},"Frameworks",s.a.createElement("hr",null),r),s.a.createElement("div",{className:"mb-4"},"Databases",s.a.createElement("hr",null),n),s.a.createElement("div",{className:"mb-4"},"Other Technologies",s.a.createElement("hr",null),i))))))}}]),t}(n.Component),C={ApplicationWide:{backgroundImage:"url(".concat("https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80",")"),backgroundSize:"cover",backgroundRepeat:"repeat",backgroundAttachment:"fixed",minHeight:"100%"}},x=function(e){function t(e){return Object(c.a)(this,t),Object(d.a)(this,Object(p.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:C.ApplicationWide},s.a.createElement(N,null))}}]),t}(n.Component);l.a.render(s.a.createElement(x,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.d5d7d0b2.chunk.js.map