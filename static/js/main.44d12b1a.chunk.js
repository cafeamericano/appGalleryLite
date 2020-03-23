(this.webpackJsonpappgallerylite=this.webpackJsonpappgallerylite||[]).push([[0],{10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var s=a(0),l=a.n(s),n=a(8),r=a.n(n),c=a(1),i=a(5),o=a(3),p=a(2),d=a(4),u={LoadingScreenMajor:{position:"fixed",top:"0px",left:"0px",height:"100%",width:"100%",background:"rgba(0, 0, 0, 0.671)",zIndex:"9999",display:"flex",justifyContent:"center",alignItems:"center"},LoadingScreenMinor:{opacity:"1"},Spinner:{width:"3rem",height:"3rem",margin:"auto"}},h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.isVisible?l.a.createElement("div",{style:u.LoadingScreenMajor},l.a.createElement("section",{style:u.LoadingScreenMinor},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"spinner-border text-primary",style:u.Spinner,role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading..."))),l.a.createElement("br",null),l.a.createElement("div",{className:"row text-center"},l.a.createElement("div",{className:"text-light"},"Loading application gallery. This may take a few seconds.")))):null}}]),t}(s.Component),m={Header:{height:"30px",width:"100%",position:"fixed",top:"0px",left:"0px",display:"flex",justifyContent:"center",alignItems:"center",backgroundImage:"linear-gradient(#e0e0e0, #cfcfcf)",fontWeight:"100"}},f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:m.Header})}}]),t}(s.Component),b={Footer:{height:"30px",width:"100%",position:"fixed",bottom:"0px",left:"0px",display:"flex",justifyContent:"left",alignItems:"center",backgroundImage:"linear-gradient(#e0e0e0, #cfcfcf)",padding:"10px"}},g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:b.Footer})}}]),t}(s.Component),y=a(6),v={AppThumbnail:{height:"200px",maxWidth:"100%"}},j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={isHovered:!1,activeClass:"col-xl-4 col-lg-6"},a.activateHover=a.activateHover.bind(Object(y.a)(a)),a.deactivateHover=a.deactivateHover.bind(Object(y.a)(a)),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"activateHover",value:function(){this.setState({isHovered:!0,activeClass:"animated pulse col-xl-4 col-lg-6"})}},{key:"deactivateHover",value:function(){this.setState({isHovered:!1,activeClass:"col-xl-4 col-lg-6"})}},{key:"render",value:function(){var e="discontinued"!==(this.props.data.deployedLink&&this.props.data.supportStatus)?this.props.data.deployedLink:null,t=this.props.data.isFeatured?l.a.createElement("i",{title:"Featured",className:"float-right fas fa-star fa-lg text-warning p-1"}):"",a=this.props.data.isCollaboration?l.a.createElement("i",{title:"Collaboration",className:"float-right fas fa-users fa-lg text-secondary p-1"}):"";return l.a.createElement("div",{className:this.state.activeClass,onMouseEnter:this.activateHover,onMouseLeave:this.deactivateHover},l.a.createElement("div",{className:"card shadow mb-3"},l.a.createElement("div",{className:"card-header text-left"},l.a.createElement("h5",{className:"float-left"},this.props&&this.props.data?this.props.data.title:null),t,a),l.a.createElement("a",{target:"_blank",href:e,className:"d-flex justify-content-center bg-light"},l.a.createElement("img",{src:this.props&&this.props.data?this.props.data.imagePath:null,style:v.AppThumbnail})),l.a.createElement("div",{className:"card-footer text-right"},l.a.createElement("a",{target:"_blank",href:this.props&&this.props.data?e:null},l.a.createElement("small",null,"Experience")),l.a.createElement("span",{className:"pl-2 pr-2"},e?"|":""),l.a.createElement("a",{target:"_blank",href:this.props&&this.props.data?this.props.data.githubLink:null},l.a.createElement("small",null,"View Source")))))}}]),t}(s.Component),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).determineCardRelevanceKeywords=function(e,t){for(var a=!0,s=0;s<t.length;s++)e.includes(t[s])||(a=!1);return a},a.determineCardRelevanceFlags=function(e,t){var a=!0,s=[];switch(e.isFeatured){case!0:s.push("Featured")}switch(e.isCollaboration){case!0:s.push("Collaboration");break;case!1:s.push("Independently Created")}switch(e.supportStatus){case"active":s.push("Active");break;case"inactive":s.push("Inactive");break;case"discontinued":s.push("Discontinued")}switch(e.applicationType){case"client-side":s.push("Client-Side");break;case"server-side":s.push("Server-Side");break;case"unified":s.push("Unified")}for(var l=0;l<t.length;l++)s.includes(t[l])||(a=!1);return a},a.state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){for(var e=[],t=0,a=0;a<this.props.allApplications.length;a++){var s=this.props.allApplications[a];this.determineCardRelevanceKeywords(s.keywords,this.props.selectedKeywords)&&this.determineCardRelevanceFlags(s,this.props.selectedFlags)&&(t+=1,e.push(l.a.createElement(j,{data:this.props.allApplications[a],key:"app"+a})))}return l.a.createElement("div",{className:"container mb-5"},l.a.createElement("small",null,"Showing ",t," of ",this.props.allApplications.length," applications"),l.a.createElement("hr",null),l.a.createElement("div",{className:"row"},e))}}]),t}(s.Component),O={Content:{overflow:"scroll",maxHeight:"100vh"}},S=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-md-9 col-sm-12 p-4",style:O.Content},l.a.createElement(w,{allApplications:this.props.allApplications,selectedKeywords:this.props.selectedKeywords,selectedFlags:this.props.selectedFlags}))}}]),t}(s.Component),E=a(9),k=a.n(E),F={Banner:{width:"100%"}},K=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("img",{src:k.a,style:F.Banner}))}}]),t}(s.Component),C={Button:{width:"100%"}},x=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=!this.props.selectedKeywords.length&&!this.props.selectedFlags.length,t=e?"":"(".concat(this.props.selectedKeywords.length+this.props.selectedFlags.length,")");return l.a.createElement("div",{className:"mb-4"},l.a.createElement("button",{className:"btn btn-info",style:C.Button,onClick:this.props.clearAllFilters,disabled:e},l.a.createElement("span",{className:"p-1"},"Clear Filters"),l.a.createElement("span",{className:"p-1"},t)))}}]),t}(s.Component),A={Keyword:{cursor:"pointer",display:"block"}},N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).toggleKeywordSelection=function(){a.state.isSelected?a.setState({isSelected:!1},(function(){this.props.updateSelectedKeywords(this.props.data.name)})):a.setState({isSelected:!0},(function(){this.props.updateSelectedKeywords(this.props.data.name)}))},a.render=function(){var e=a.state.isSelected?"far fa-check-square":"far fa-square";return l.a.createElement("div",{style:A.Keyword,onClick:a.toggleKeywordSelection},l.a.createElement("span",{className:"badge text-left"},l.a.createElement("i",{className:e}),l.a.createElement("span",{className:"pl-2"},a.props.data.name)))},a.state={isSelected:a.props.selectedKeywords.includes(a.props.data.name)},a}return Object(d.a)(t,e),t}(s.Component),L=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=[];return this.props.allKeywords.filter((function(a,s){a.type===e.props.type&&t.push(l.a.createElement(N,{key:"keyword"+s,data:a,updateSelectedKeywords:e.props.updateSelectedKeywords,selectedKeywords:e.props.selectedKeywords}))})),l.a.createElement("div",{className:"mb-4"},this.props.label,l.a.createElement("hr",null),t)}}]),t}(s.Component),H={Flag:{cursor:"pointer",display:"block"}},I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).toggleFlagSelection=function(){a.state.isSelected?a.setState({isSelected:!1},(function(){this.props.updateSelectedFlags(this.props.name)})):a.setState({isSelected:!0},(function(){this.props.updateSelectedFlags(this.props.name)}))},a.render=function(){var e=a.props.selectedFlags.includes(a.props.name)?"far fa-check-square":"far fa-square";return l.a.createElement("div",{style:H.Flag,onClick:a.toggleFlagSelection},l.a.createElement("span",{className:"badge text-left"},l.a.createElement("i",{className:e}),l.a.createElement("span",{className:"pl-2"},a.props.name)))},a.state={isSelected:a.props.selectedFlags.includes(a.props.name)},a}return Object(d.a)(t,e),t}(s.Component),M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items.map((function(t,a){return l.a.createElement(I,{key:"flag"+a,name:t,updateSelectedFlags:e.props.updateSelectedFlags,selectedFlags:e.props.selectedFlags})}));return l.a.createElement("div",{className:"mb-4"},this.props.label,l.a.createElement("hr",null),t)}}]),t}(s.Component),D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={flagsSection:[{label:"General Filters",items:["Featured","Collaboration","Independently Created"]},{label:"Support Status",items:["Active","Inactive","Discontinued"]},{label:"Architecture",items:["Client-Side","Server-Side","Unified"]}],keywordsSection:[{label:"Languages",type:"language"},{label:"Libraries",type:"library"},{label:"Deployments",type:"deployment"},{label:"Back-End Frameworks",type:"back-end-framework"},{label:"Front-End Frameworks",type:"front-end-framework"},{label:"Databases",type:"database"},{label:"ORMs",type:"orm"},{label:"Other",type:"other"}]},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.flagsSection.map((function(t,a){return l.a.createElement(M,{label:t.label,items:t.items,key:"FlagsFilterBlock"+a,updateSelectedFlags:e.props.updateSelectedFlags,selectedFlags:e.props.selectedFlags})})),a=this.state.keywordsSection.map((function(t,a){return l.a.createElement(L,{label:t.label,type:t.type,key:"KeywordsFilterBlock"+a,allKeywords:e.props.allKeywords,updateSelectedKeywords:e.props.updateSelectedKeywords,selectedKeywords:e.props.selectedKeywords})}));return l.a.createElement("div",{className:"p-4 mb-5"},l.a.createElement(x,{clearAllFilters:this.props.clearAllFilters,selectedKeywords:this.props.selectedKeywords,selectedFlags:this.props.selectedFlags}),t,a)}}]),t}(s.Component),B={Navbar:{padding:"0px",overflow:"scroll",maxHeight:"100vh"}},R=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).state={},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"col-md-3 bg-light text-dark shadow",style:B.Navbar},l.a.createElement(K,null),l.a.createElement(D,{allKeywords:this.props.allKeywords,updateSelectedKeywords:this.props.updateSelectedKeywords,updateSelectedFlags:this.props.updateSelectedFlags,clearAllFilters:this.props.clearAllFilters,selectedKeywords:this.props.selectedKeywords,selectedFlags:this.props.selectedFlags}))}}]),t}(s.Component),V={Main:{margin:"30px 0px"}},q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).componentDidMount=function(){a.fetchApplicationsData(),a.fetchKeywordsData()},a.fetchApplicationsData=function(){fetch("https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/applications").then((function(e){return e.json()})).then((function(e){a.props.removeLoadingScreen(),a.props.updateAllApplicationsCount(e.length),a.setState({allApplications:e})}))},a.fetchKeywordsData=function(){fetch("https://central-api-flask-cm6ud432ka-uc.a.run.app/AppGalleryLite/api/keywords").then((function(e){return e.json()})).then((function(e){a.props.removeLoadingScreen(),a.setState({allKeywords:e})}))},a.updateSelectedKeywords=function(e){var t=a.state.selectedKeywords;if(t.includes(e)){var s=t.filter((function(t){return t!==e}));a.setState({selectedKeywords:s})}else{var l=t.concat(e);a.setState({selectedKeywords:l})}},a.updateSelectedFlags=function(e){var t=a.state.selectedFlags;if("array"===typeof e){var s=t.concat(e);a.setState({selectedFlags:s})}else{if(t.includes(e)){var l=t.filter((function(t){return t!==e}));a.setState({selectedFlags:l})}else{var n=t.concat(e);a.setState({selectedFlags:n})}}},a.clearAllFilters=function(){a.setState({selectedKeywords:[],selectedFlags:[]})},a.render=function(){return l.a.createElement("div",{className:"row",style:V.Main},l.a.createElement(R,{allKeywords:a.state.allKeywords,updateSelectedKeywords:a.updateSelectedKeywords,updateSelectedFlags:a.updateSelectedFlags,clearAllFilters:a.clearAllFilters,selectedKeywords:a.state.selectedKeywords,selectedFlags:a.state.selectedFlags}),l.a.createElement(S,{allApplications:a.state.allApplications,selectedKeywords:a.state.selectedKeywords,selectedFlags:a.state.selectedFlags}))},a.state={allApplications:[],allKeywords:[],selectedKeywords:[],selectedFlags:["Active","Featured"]},a}return Object(d.a)(t,e),t}(s.Component),T={Structure:{backgroundImage:'url("https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80")',backgroundSize:"cover",backgroundRepeat:"repeat",backgroundAttachment:"fixed",minHeight:"100%",padding:"0px",overflow:"hidden"}},G=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(p.a)(t).call(this,e))).removeLoadingScreen=function(){a.setState({isVisibleLoadingScreen:!1})},a.updateAllApplicationsCount=function(e){a.setState({allApplicationsCount:e||0})},a.render=function(){return l.a.createElement("div",{className:"container-fluid",style:T.Structure},l.a.createElement(h,{isVisible:a.state.isVisibleLoadingScreen}),l.a.createElement(f,null),l.a.createElement(q,{removeLoadingScreen:a.removeLoadingScreen,updateAllApplicationsCount:a.updateAllApplicationsCount}),l.a.createElement(g,{allApplicationsCount:a.state.allApplicationsCount}))},a.state={isVisibleLoadingScreen:!0,allApplicationsCount:0},a}return Object(d.a)(t,e),t}(s.Component),J=function(e){function t(e){return Object(c.a)(this,t),Object(o.a)(this,Object(p.a)(t).call(this,e))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(G,null)}}]),t}(s.Component);r.a.render(l.a.createElement(J,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a.p+"static/media/banner.1321cdd6.jpg"}},[[10,1,2]]]);
//# sourceMappingURL=main.44d12b1a.chunk.js.map