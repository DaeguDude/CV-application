(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(9),h=n.n(s),l=n(7),r=n(2),c=n(3),j=n(6),d=n(5),b=n(4),o=n(10),u=n.n(o),O=n(0),p=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.labelName,a=e.handleChange,i=e.value;return Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:n}),Object(O.jsx)("input",{name:t,value:i,onChange:a,type:"text"})]})}}]),n}(i.a.Component),m=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.labelName,a=e.handleChange,i=e.value;return Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:n}),Object(O.jsx)("input",{name:t,value:i,onChange:a,type:"email"})]})}}]),n}(i.a.Component),v=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.labelName,a=e.handleChange,i=e.value;return Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:n}),Object(O.jsx)("input",{name:t,value:i,onChange:a,type:"tel"})]})}}]),n}(i.a.Component),x=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.labelName,a=e.handleChange,i=e.value;return Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:n}),Object(O.jsx)("input",{name:t,value:i,onChange:a,type:"text",pattern:"[0-9]*"})]})}}]),n}(i.a.Component),C=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.labelName,a=e.handleChange,i=e.value;return Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:n}),Object(O.jsxs)("select",{name:t,value:i,onChange:a,children:[Object(O.jsx)("option",{children:"Don't Show This"}),Object(O.jsx)("option",{children:"Show Year Only"}),Object(O.jsx)("option",{children:"January"}),Object(O.jsx)("option",{children:"February"}),Object(O.jsx)("option",{children:"March"}),Object(O.jsx)("option",{children:"April"}),Object(O.jsx)("option",{children:"May"}),Object(O.jsx)("option",{children:"June"}),Object(O.jsx)("option",{children:"July"}),Object(O.jsx)("option",{children:"September"}),Object(O.jsx)("option",{children:"October"}),Object(O.jsx)("option",{children:"November"}),Object(O.jsx)("option",{children:"December"})]})]})}}]),n}(i.a.Component),y=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.labelName,a=e.handleChange,i=e.value,s=Array(62).fill(null).map((function(e,t){return 1960+t}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{children:n}),Object(O.jsx)("select",{name:t,value:i,onChange:a,children:s.map((function(e){return Object(O.jsx)("option",{children:e},u()())}))})]})}}]),n}(i.a.Component),g=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(O.jsx)("button",{onClick:this.props.handleEdit,children:"Edit"})}}]),n}(i.a.Component),f=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props,t=e.btnName,n=e.handleSubmit;return Object(O.jsx)("input",{type:"submit",value:t,onClick:n})}}]),n}(i.a.Component),N=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={isDisplay:!1},a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a.handleEdit=a.handleEdit.bind(Object(j.a)(a)),a}return Object(c.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({isDisplay:!0})}},{key:"handleEdit",value:function(e){this.setState({isDisplay:!1})}},{key:"render",value:function(){return this.state.isDisplay?Object(O.jsx)(S,{info:this.state,handleEdit:this.handleEdit}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Personal"}),Object(O.jsx)(E,{info:this.state,handleChange:this.handleChange,handleSubmit:this.handleSubmit})]})}}]),n}(i.a.Component),S=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.info,t=e.address,n=e.city,a=e.email,i=e.firstName,s=e.lastName,h=e.phoneNumber,l=e.zip;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Personal"}),Object(O.jsxs)("p",{children:["First Name: ",i]}),Object(O.jsxs)("p",{children:["Last Name: ",s]}),Object(O.jsxs)("p",{children:["Email Address: ",a]}),Object(O.jsxs)("p",{children:["Phone Number: ",h]}),Object(O.jsxs)("p",{children:["Address: ",t]}),Object(O.jsxs)("p",{children:["Zip Code: ",l]}),Object(O.jsxs)("p",{children:["City: ",n]}),Object(O.jsx)(k,{handleEdit:this.props.handleEdit})]})}}]),n}(i.a.Component),E=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.info,t=e.address,n=e.city,a=e.email,i=e.firstName,s=e.lastName,h=e.phoneNumber,l=e.zip;return Object(O.jsxs)("form",{children:[Object(O.jsx)(p,{name:"firstName",labelName:"First name",value:i,handleChange:this.props.handleChange}),Object(O.jsx)(p,{name:"lastName",labelName:"Last name",value:s,handleChange:this.props.handleChange}),Object(O.jsx)(m,{name:"email",labelName:"Email address",value:a,handleChange:this.props.handleChange}),Object(O.jsx)(v,{name:"phoneNumber",labelName:"Phone number",value:h,handleChange:this.props.handleChange}),Object(O.jsx)(p,{name:"address",labelName:"Address",value:t,handleChange:this.props.handleChange}),Object(O.jsx)(x,{name:"zip",labelName:"Zip code",value:l,handleChange:this.props.handleChange}),Object(O.jsx)(p,{name:"city",labelName:"City/Town",value:n,handleChange:this.props.handleChange}),Object(O.jsx)(f,{btnName:"Display",handleSubmit:this.props.handleSubmit})]})}}]),n}(i.a.Component),k=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(O.jsx)("button",{onClick:this.props.handleEdit,children:"Edit"})}}]),n}(i.a.Component),D=N,M=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={startMonth:"Don't Show This",startYear:1960,endMonth:"Dont' Show This",endYear:1960,isDisplay:!1},a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.handleEdit=a.handleEdit.bind(Object(j.a)(a)),a}return Object(c.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({isDisplay:!0})}},{key:"handleChange",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"handleEdit",value:function(e){this.setState({isDisplay:!1})}},{key:"render",value:function(){return this.state.isDisplay?Object(O.jsx)(Y,{info:this.state,handleEdit:this.handleEdit}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Work"}),Object(O.jsxs)("form",{children:[Object(O.jsx)(p,{name:"jobTitle",labelName:"Job Title",value:this.state.jobTitle,handleChange:this.handleChange}),Object(O.jsx)(p,{name:"city",labelName:"City/Town",value:this.state.city,handleChange:this.handleChange}),Object(O.jsx)(p,{name:"employer",labelName:"Employer",value:this.state.employer,handleChange:this.handleChange}),Object(O.jsx)(C,{name:"startMonth",labelName:"Start Month",value:this.state.startMonth,handleChange:this.handleChange}),Object(O.jsx)(y,{name:"startYear",labelName:"Start Year",value:this.state.startYear,handleChange:this.handleChange}),Object(O.jsx)(C,{name:"endMonth",labelName:"End Month",value:this.state.endMonth,handleChange:this.handleChange}),Object(O.jsx)(y,{name:"endYear",labelName:"End Year",value:this.state.endYear,handleChange:this.handleChange}),Object(O.jsx)(p,{name:"description",labelName:"Description",value:this.state.description,handleChange:this.handleChange}),Object(O.jsx)(f,{btnName:"save",handleSubmit:this.handleSubmit})]})]})}}]),n}(i.a.Component),Y=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.info,t=e.jobTitle,n=e.city,a=e.employer,i=e.startMonth,s=e.startYear,h=e.endMonth,l=e.endYear,r=e.description;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Work"}),Object(O.jsxs)("p",{children:["Job Title: ",t]}),Object(O.jsxs)("p",{children:["City: ",n]}),Object(O.jsxs)("p",{children:["Employer: ",a]}),Object(O.jsxs)("p",{children:["Start Month: ",i]}),Object(O.jsxs)("p",{children:["Start Year: ",s]}),Object(O.jsxs)("p",{children:["End Month: ",h]}),Object(O.jsxs)("p",{children:["End Year: ",l]}),Object(O.jsxs)("p",{children:["Description: ",r]}),Object(O.jsx)(g,{handleEdit:this.props.handleEdit})]})}}]),n}(i.a.Component),T=M,w=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={startMonth:"Don't Show This",startYear:1960,endMonth:"Dont' Show This",endYear:1960,isDisplay:!1},a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.handleEdit=a.handleEdit.bind(Object(j.a)(a)),a}return Object(c.a)(n,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({isDisplay:!0})}},{key:"handleChange",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"handleEdit",value:function(e){this.setState({isDisplay:!1})}},{key:"render",value:function(){return this.state.isDisplay?Object(O.jsx)(J,{info:this.state,handleEdit:this.handleEdit}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Education"}),Object(O.jsxs)("form",{children:[Object(O.jsx)(p,{name:"degree",labelName:"Degree",value:this.state.degree,handleChange:this.handleChange}),Object(O.jsx)(p,{name:"city",labelName:"City/Town",value:this.state.city,handleChange:this.handleChange}),Object(O.jsx)(p,{name:"school",labelName:"School",value:this.state.school,handleChange:this.handleChange}),Object(O.jsx)(C,{name:"startMonth",labelName:"Start Month",value:this.state.startMonth,handleChange:this.handleChange}),Object(O.jsx)(y,{name:"startYear",labelName:"Start Year",value:this.state.startYear,handleChange:this.handleChange}),Object(O.jsx)(C,{name:"endMonth",labelName:"End Month",value:this.state.endMonth,handleChange:this.handleChange}),Object(O.jsx)(y,{name:"endYear",labelName:"End Year",value:this.state.endYear,handleChange:this.handleChange}),Object(O.jsx)(p,{name:"description",labelName:"Description",value:this.state.description,handleChange:this.handleChange}),Object(O.jsx)(f,{btnName:"save",handleSubmit:this.handleSubmit})]})]})}}]),n}(i.a.Component),J=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.info,t=e.degree,n=e.city,a=e.school,i=e.startMonth,s=e.startYear,h=e.endMonth,l=e.endYear,r=e.description;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Educational"}),Object(O.jsxs)("p",{children:["Degree: ",t]}),Object(O.jsxs)("p",{children:["City: ",n]}),Object(O.jsxs)("p",{children:["School: ",a]}),Object(O.jsxs)("p",{children:["Start Month: ",i]}),Object(O.jsxs)("p",{children:["Start Year: ",s]}),Object(O.jsxs)("p",{children:["End Month: ",h]}),Object(O.jsxs)("p",{children:["End Year: ",l]}),Object(O.jsxs)("p",{children:["Description: ",r]}),Object(O.jsx)(g,{handleEdit:this.props.handleEdit})]})}}]),n}(i.a.Component),A=w;var P=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(D,{}),Object(O.jsx)(T,{}),Object(O.jsx)(A,{})]})};h.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.195fceec.chunk.js.map