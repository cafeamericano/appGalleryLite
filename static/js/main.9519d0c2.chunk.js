(this.webpackJsonpappgallerylite=this.webpackJsonpappgallerylite||[]).push([[0],{10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(8),l=a.n(s),i=a(1),c=a(2),o=a(4),p=a(3),d=a(5),u=a(6),m={height:"200px",maxWidth:"100%"},h=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={isHovered:!1,activeClass:"col-xl-4 col-lg-6"},a.activateHover=a.activateHover.bind(Object(u.a)(a)),a.deactivateHover=a.deactivateHover.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"activateHover",value:function(){this.setState({isHovered:!0,activeClass:"animated pulse col-xl-4 col-lg-6"})}},{key:"deactivateHover",value:function(){this.setState({isHovered:!1,activeClass:"col-xl-4 col-lg-6"})}},{key:"render",value:function(){var e=this.props.data.isActivelySupported?n.a.createElement("i",{title:"Actively Supported",className:"float-right fas fa-check-double fa-lg text-success p-1"}):"",t=this.props.data.isFeatured?n.a.createElement("i",{title:"Featured",className:"float-right fas fa-star fa-lg text-warning p-1"}):"",a=this.props.data.isCollaboration?n.a.createElement("i",{title:"Collaboration",className:"float-right fas fa-users fa-lg text-secondary p-1"}):"",r=""!==this.props.data.deployedLink?n.a.createElement("span",null,n.a.createElement("span",null," | "),n.a.createElement("a",{target:"_blank",href:this.props.data.deployedLink},n.a.createElement("small",null,"Experience"))):"",s=""!==this.props.data.deployedLink?this.props.data.deployedLink:this.props.data.githubLink;return n.a.createElement("div",{className:this.state.activeClass,onMouseEnter:this.activateHover,onMouseLeave:this.deactivateHover},n.a.createElement("div",{className:"card shadow mb-3"},n.a.createElement("div",{className:"card-header text-left"},n.a.createElement("h5",{className:"float-left"},this.props.data.title),e,t,a),n.a.createElement("a",{target:"_blank",href:s,className:"d-flex justify-content-center bg-light"},n.a.createElement("img",{src:this.props.data.imagePath,style:m})),n.a.createElement("div",{className:"card-footer text-right"},n.a.createElement("a",{target:"_blank",href:this.props.data.githubLink},n.a.createElement("small",null,"View Source")),r)))}}]),t}(r.Component),v=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.data.map((function(e,t){return n.a.createElement(h,{key:"app"+t,data:e})})),t=1!==this.props.resultCount?"Displaying ".concat(this.props.resultCount," applications."):"Displaying ".concat(this.props.resultCount," application.");return n.a.createElement("div",{className:"row animated fadeInUpBig"},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"mb-4 p-3"},n.a.createElement("small",{className:"text-dark mb-2"},t),n.a.createElement("hr",null),n.a.createElement("div",{className:"row"},e))))}}]),t}(r.Component),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={databaseRecords:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.handleSearch()}},{key:"handleSearch",value:function(){var e=this;fetch("https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/applications").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({databaseRecords:t})}))}},{key:"render",value:function(){var e=this.state.databaseRecords,t=this.props.activeKeywords,a=this.props.activeProperties;console.log("activeProperties",a);var r=e.filter((function(e){for(var a=!0,r=0;r<t.length;r++)e.keywords.push(e.isCollaboration?"Collaboration":null),e.keywords.push(e.isFeatured?"Featured":null),e.keywords.push(e.applicationType),e.keywords.push(e.supportStatus),e.keywords.includes(t[r])||(a=!1);return a}));return n.a.createElement("div",null,n.a.createElement(v,{sectionName:"Queried Apps",data:r,resultCount:r.length}))}}]),t}(r.Component),y={cursor:"pointer",display:"block"},b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).toggleKeyword=function(){a.state.isClicked?(a.setState({isClicked:!1}),a.props.passKeywordNameToParent(a.props.keywordName)):(a.setState({isClicked:!0}),a.props.passKeywordNameToParent(a.props.keywordName))},a.state={isClicked:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.isClicked?"far fa-check-square":"far fa-square";return n.a.createElement("div",{style:y,onClick:this.toggleKeyword},n.a.createElement("span",null,n.a.createElement("i",{class:e})),n.a.createElement("span",{className:"badge text-left"},this.props.keywordName||"Tech"))}}]),t}(r.Component),E=a(9),g=a.n(E),k={},w={padding:"0px",overflow:"scroll",maxHeight:"100vh"},N={overflow:"scroll",maxHeight:"100vh"},j={width:"100%"},O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={responseReceivedFromApi:!1,totalClicks:0,subComponentVisibilityToggler:{Applications:!0},keywordsArray:[],activeKeywords:[],activeProperties:{isFeatured:!0,isCollaboration:!1,supportStatus:"",applicationType:""}},a.grabKeywordsFromDatabase=a.grabKeywordsFromDatabase.bind(Object(u.a)(a)),a.pullInKeywordName=a.pullInKeywordName.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){this.grabKeywordsFromDatabase()}},{key:"grabKeywordsFromDatabase",value:function(){var e=this;fetch("https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/keywords").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({keywordsArray:t,responseReceivedFromApi:!0})}))}},{key:"pullInKeywordName",value:function(e){var t=this.state.activeKeywords;console.log(t);var a=t.includes(e);if(console.log(a),a){var r=t.filter((function(t){return t!==e}));console.log(r),this.setState({activeKeywords:r})}else{var n=t.concat(e);console.log(n),this.setState({activeKeywords:n})}}},{key:"render",value:function(){var e=this,t=this.state.keywordsArray.map((function(t,a){return n.a.createElement(b,{key:"keyword"+a,keywordName:t.name,type:t.type,passKeywordNameToParent:e.pullInKeywordName})})),a=t.filter((function(e){return"language"===e.props.type})),r=t.filter((function(e){return"deployment"===e.props.type})),s=t.filter((function(e){return"library"===e.props.type})),l=t.filter((function(e){return"front-end-framework"===e.props.type})),i=t.filter((function(e){return"back-end-framework"===e.props.type})),c=t.filter((function(e){return"database"===e.props.type})),o=t.filter((function(e){return"orm"===e.props.type})),p=t.filter((function(e){return"other"===e.props.type}));return this.state.responseReceivedFromApi?n.a.createElement("main",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("section",{className:"col-md-3 bg-light text-dark shadow",style:w},n.a.createElement("nav",{style:k},n.a.createElement("div",null,n.a.createElement("img",{src:g.a,style:j})),n.a.createElement("div",{className:"p-4"},n.a.createElement("div",{className:"mb-4"},n.a.createElement("span",null,"Languages"),n.a.createElement("hr",null),a),n.a.createElement("div",{className:"mb-4"},"Deployments",n.a.createElement("hr",null),r),n.a.createElement("div",{className:"mb-4"},"Libraries",n.a.createElement("hr",null),s),n.a.createElement("div",{className:"mb-4"},"Front-End Frameworks",n.a.createElement("hr",null),l),n.a.createElement("div",{className:"mb-4"},"Back-End Frameworks",n.a.createElement("hr",null),i),n.a.createElement("div",{className:"mb-4"},"Databases",n.a.createElement("hr",null),c),n.a.createElement("div",{className:"mb-4"},"ORMs",n.a.createElement("hr",null),o),n.a.createElement("div",{className:"mb-4"},"Other Technologies",n.a.createElement("hr",null),p)))),n.a.createElement("section",{className:"col-md-9 col-sm-12 p-3",style:N},n.a.createElement(f,{activeKeywords:this.state.activeKeywords,activeProperties:this.state.activeProperties,visibility:this.state.subComponentVisibilityToggler.Applications})))):n.a.createElement("div",{className:"position-fixed"},n.a.createElement("div",{id:"pseudoCover"},n.a.createElement("section",{className:"opacity-1"},n.a.createElement("div",{class:"row"},n.a.createElement("div",{id:"pseudoCoverSpinnger",class:"spinner-border text-primary",role:"status"},n.a.createElement("span",{class:"sr-only"},"Loading..."))),n.a.createElement("br",null),n.a.createElement("div",{class:"row text-center"},n.a.createElement("div",{class:"text-light"},"Loading application gallery. This may take a few seconds.")))))}}]),t}(r.Component),C={ApplicationWide:{backgroundImage:"url(".concat("https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80",")"),backgroundSize:"cover",backgroundRepeat:"repeat",backgroundAttachment:"fixed",minHeight:"100%"}},x=function(e){function t(e){return Object(i.a)(this,t),Object(o.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:C.ApplicationWide},n.a.createElement(O,null))}}]),t}(r.Component);l.a.render(n.a.createElement(x,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a.p+"static/media/banner.1321cdd6.jpg"}},[[10,1,2]]]);
//# sourceMappingURL=main.9519d0c2.chunk.js.map