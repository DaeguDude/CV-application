(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(12),s=n.n(c),i=n(7),o=n(2),l=n(3),d=n(5),h=n(4),j=n(8),u=n.n(j),b=n(0),p=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.title;return Object(b.jsx)("header",{className:"form__header",children:Object(b.jsx)("h2",{className:"form__title",children:e})})}}]),n}(r.a.Component),O=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.children;return e.length>=2?Object(b.jsx)("div",{className:"form__row row",children:e}):Object(b.jsx)("div",{className:"form__row",children:e})}}]),n}(r.a.Component),m=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.firstItem,t=this.props.secondItem;return Object(b.jsxs)(O,{children:[e,t]})}}]),n}(r.a.Component),f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.labelName,n=e.name,a=e.type,r=e.handleChange,c=e.value;return Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form__label",children:t}),Object(b.jsx)("input",{className:"form__input",value:c,name:n,type:a,onChange:r})]})}}]),n}(r.a.Component),v=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.labelName,a=e.handleChange,r=e.value;return Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form__label",children:n}),Object(b.jsx)("textarea",{className:"form__input",value:r,name:t,onChange:a})]})}}]),n}(r.a.Component),x=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.month,n=e.name,a=e.handleChange;return Object(b.jsxs)("select",{value:t,name:n,onChange:a,className:"form__input col",children:[Object(b.jsx)("option",{children:"Don't Show This"}),Object(b.jsx)("option",{children:"Show Year Only"}),Object(b.jsx)("option",{children:"January"}),Object(b.jsx)("option",{children:"February"}),Object(b.jsx)("option",{children:"March"}),Object(b.jsx)("option",{children:"April"}),Object(b.jsx)("option",{children:"May"}),Object(b.jsx)("option",{children:"June"}),Object(b.jsx)("option",{children:"July"}),Object(b.jsx)("option",{children:"September"}),Object(b.jsx)("option",{children:"October"}),Object(b.jsx)("option",{children:"November"}),Object(b.jsx)("option",{children:"December"})]})}}]),n}(r.a.Component),C=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.year,n=e.name,a=e.handleChange,r=Array(62).fill(null).map((function(e,t){return 1960+t}));return Object(b.jsx)("select",{value:t,name:n,onChange:a,className:"form__input col",children:r.map((function(e){return Object(b.jsx)("option",{children:e},u()())}))})}}]),n}(r.a.Component),g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(i.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.props.onHandleChange(e,"personal")}},{key:"render",value:function(){return Object(b.jsx)("form",{className:"form",children:Object(b.jsxs)("div",{className:"form__content",children:[Object(b.jsx)(p,{title:"Personal Details"}),Object(b.jsx)(y,{info:this.props.personal,handleChange:this.handleChange})]})})}}]),n}(r.a.Component),y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.handleChange,t=this.props.info;return Object(b.jsxs)("div",{children:[Object(b.jsx)(O,{children:Object(b.jsx)(f,{labelName:"First name",name:"firstName",type:"text",handleChange:e,value:t.firstName})}),Object(b.jsx)(O,{children:Object(b.jsx)(f,{labelName:"Last name",name:"lastName",type:"text",handleChange:e,value:t.lastName})}),Object(b.jsx)(m,{firstItem:Object(b.jsx)(f,{labelName:"Email",name:"email",type:"email",handleChange:e,value:t.email}),secondItem:Object(b.jsx)(f,{labelName:"Phone number",name:"phoneNumber",type:"tel",handleChange:e,value:t.phoneNumber})}),Object(b.jsx)(O,{children:Object(b.jsx)(f,{labelName:"Address",name:"address",type:"text",handleChange:e,value:t.address})}),Object(b.jsx)(m,{firstItem:Object(b.jsx)(f,{labelName:"Zip code",name:"zip",type:"text",handleChange:e,value:t.zip}),secondItem:Object(b.jsx)(f,{labelName:"City/Town",name:"city",type:"text",handleChange:e,value:t.city})})]})}}]),n}(r.a.Component),_=g,N=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.handleFormCardDelete;return Object(b.jsxs)("svg",{onClick:e,className:"form__card-icon form__card-delete",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[Object(b.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(b.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})]})}}]),n}(r.a.Component),k=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.handleFormCardEdit;return Object(b.jsxs)("svg",{onClick:e,className:"form__card-icon form__card-edit",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[Object(b.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(b.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})]})}}]),n}(r.a.Component),w=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.workInfo,t=e.jobTitle,n=e.startMonth,a=e.startYear,r=e.endMonth,c=e.endYear,s=this.props.handleFormCardDelete,i=this.props.handleFormCardEdit;return Object(b.jsxs)("div",{className:"form__card",children:[Object(b.jsxs)("div",{className:"form__card-info",children:[Object(b.jsx)("p",{className:"form__card-job-title",children:t}),Object(b.jsxs)("p",{className:"form__card-date",children:[n," ",a," - ",r," ",c]})]}),Object(b.jsxs)("div",{className:"form__card-icons",children:[Object(b.jsx)(N,{handleFormCardDelete:s}),Object(b.jsx)(k,{handleFormCardEdit:i})]})]})}}]),n}(r.a.Component),H=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.educationInfo,t=e.degree,n=e.startMonth,a=e.startYear,r=e.endMonth,c=e.endYear,s=this.props.handleFormCardDelete,i=this.props.handleFormCardEdit;return Object(b.jsxs)("div",{className:"form__card",children:[Object(b.jsxs)("div",{className:"form__card-info",children:[Object(b.jsx)("p",{className:"form__card-job-title",children:t}),Object(b.jsxs)("p",{className:"form__card-date",children:[n," ",a," - ",r," ",c]})]}),Object(b.jsxs)("div",{className:"form__card-icons",children:[Object(b.jsx)(N,{handleFormCardDelete:s}),Object(b.jsx)(k,{handleFormCardEdit:i})]})]})}}]),n}(r.a.Component),I=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("svg",{className:"small-btn__icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[Object(b.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(b.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})]})}}]),n}(r.a.Component),E=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("svg",{className:"small-btn__icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[Object(b.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(b.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"})]})}}]),n}(r.a.Component),D=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("svg",{className:"add-another-btn__icon",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[Object(b.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(b.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})]})}}]),n}(r.a.Component),S=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",className:"next-icon",children:[Object(b.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(b.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"})]})}}]),n}(r.a.Component),F=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.handleSave,t=this.props.handleDelete;return Object(b.jsxs)("div",{className:"form__small-btns",children:[Object(b.jsx)(A,{handleDelete:t}),Object(b.jsx)(M,{handleSave:e})]})}}]),n}(r.a.Component),A=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.handleDelete;return Object(b.jsxs)("button",{onClick:e,className:"form__small-btn",children:[Object(b.jsx)(I,{}),Object(b.jsx)("span",{children:"Delete"})]})}}]),n}(r.a.Component),M=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.handleSave;return Object(b.jsxs)("button",{onClick:e,className:"form__small-btn",children:[Object(b.jsx)(E,{}),Object(b.jsx)("span",{children:"Save"})]})}}]),n}(r.a.Component),P=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.handleAddAnotherExperience;return Object(b.jsxs)("button",{onClick:n,className:"form__add-another-btn",children:[Object(b.jsx)(D,{}),Object(b.jsx)("span",{children:t})]})}}]),n}(r.a.Component),z=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(i.a)(a)),a.handleSave=a.handleSave.bind(Object(i.a)(a)),a.handleAddAnotherExperience=a.handleAddAnotherExperience.bind(Object(i.a)(a)),a.handleDelete=a.handleDelete.bind(Object(i.a)(a)),a.handleFormCardDelete=a.handleFormCardDelete.bind(Object(i.a)(a)),a.handleFormCardEdit=a.handleFormCardEdit.bind(Object(i.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.props.onHandleChange(e,"work")}},{key:"handleSave",value:function(e){this.props.onHandleSave(e,"work")}},{key:"handleAddAnotherExperience",value:function(e){this.props.onHandleAddAnotherExperience(e,"work")}},{key:"handleDelete",value:function(e,t){this.props.onHandleDelete(e,t,"work")}},{key:"handleFormCardDelete",value:function(e){this.props.onHandleFormCardDelete(e,"work")}},{key:"handleFormCardEdit",value:function(e){this.props.onHandleFormCardEdit(e,"work")}},{key:"render",value:function(){var e,t=this,n=this.props.work,a=n.history,r=n.editCardNumber;return a.length>0&&(e=a.map((function(e,a){return r===a?Object(b.jsx)(Y,{currentInfo:n.currentInfo,handleChange:t.handleChange,handleSave:t.handleSave,handleDelete:function(n){return t.handleDelete(n,e.id)}},e.id):Object(b.jsx)(w,{workInfo:e,handleFormCardDelete:function(n){return t.handleFormCardDelete(e.id)},handleFormCardEdit:function(){return t.handleFormCardEdit(e.id)}},e.id)}))),Object(b.jsx)("form",{className:"form",children:Object(b.jsxs)("div",{className:"form__content",children:[Object(b.jsx)(p,{title:"Work Experiences"}),e,n.formInfoIsPresent&&Object(b.jsx)(Y,{currentInfo:n.currentInfo,handleChange:this.handleChange,handleSave:this.handleSave,handleDelete:this.handleDelete}),Object(b.jsx)(P,{handleAddAnotherExperience:this.handleAddAnotherExperience,text:"Add Another Work Experience"})]})})}}]),n}(r.a.Component),Y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.handleChange,t=this.props.handleSave,n=this.props.currentInfo,a=this.props.handleDelete;return Object(b.jsxs)("div",{className:"form__info-field",children:[Object(b.jsx)(m,{firstItem:Object(b.jsx)(f,{labelName:"Job Title",name:"jobTitle",type:"text",handleChange:e,value:n.jobTitle}),secondItem:Object(b.jsx)(f,{labelName:"City/Town",name:"city",type:"text",handleChange:e,value:n.city})}),Object(b.jsx)(O,{children:Object(b.jsx)(f,{labelName:"Employer",name:"employer",type:"text",handleChange:e,value:n.employer})}),Object(b.jsx)(m,{firstItem:Object(b.jsx)(T,{labelName:"Start Date",handleChange:e,startMonth:n.startMonth,startYear:n.startYear}),secondItem:Object(b.jsx)(V,{labelName:"End Date",handleChange:e,endMonth:n.endMonth,endYear:n.endYear})}),Object(b.jsx)(O,{children:Object(b.jsx)(v,{name:"description",labelName:"Description",handleChange:e,value:n.description})}),Object(b.jsx)(F,{handleSave:t,handleDelete:a})]})}}]),n}(r.a.Component),T=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.labelName,n=e.handleChange,a=e.startMonth,r=e.startYear;return Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form__label",children:t}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)(x,{month:a,name:"startMonth",handleChange:n}),Object(b.jsx)(C,{year:r,name:"startYear",handleChange:n})]})]})}}]),n}(r.a.Component),V=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.labelName,n=e.handleChange,a=e.endMonth,r=e.endYear;return Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form__label",children:t}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)(x,{month:a,name:"endMonth",handleChange:n}),Object(b.jsx)(C,{year:r,name:"endYear",handleChange:n})]})]})}}]),n}(r.a.Component),B=z,L=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(i.a)(a)),a.handleSave=a.handleSave.bind(Object(i.a)(a)),a.handleAddAnotherExperience=a.handleAddAnotherExperience.bind(Object(i.a)(a)),a.handleDelete=a.handleDelete.bind(Object(i.a)(a)),a.handleFormCardDelete=a.handleFormCardDelete.bind(Object(i.a)(a)),a.handleFormCardEdit=a.handleFormCardEdit.bind(Object(i.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){this.props.onHandleChange(e,"education")}},{key:"handleSave",value:function(e){this.props.onHandleSave(e,"education")}},{key:"handleAddAnotherExperience",value:function(e){this.props.onHandleAddAnotherExperience(e,"education")}},{key:"handleDelete",value:function(e,t){this.props.onHandleDelete(e,t,"education")}},{key:"handleFormCardDelete",value:function(e){this.props.onHandleFormCardDelete(e,"education")}},{key:"handleFormCardEdit",value:function(e){this.props.onHandleFormCardEdit(e,"education")}},{key:"render",value:function(){var e,t=this,n=this.props.education,a=n.history,r=n.editCardNumber;return a.length>0&&(e=a.map((function(e,a){return r===a?Object(b.jsx)(J,{currentInfo:n.currentInfo,handleChange:t.handleChange,handleSave:t.handleSave,handleDelete:function(n){return t.handleDelete(n,e.id)}}):Object(b.jsx)(H,{educationInfo:e,handleFormCardDelete:function(){return t.handleFormCardDelete(e.id)},handleFormCardEdit:function(){return t.handleFormCardEdit(e.id)}},u()())}))),Object(b.jsx)("form",{className:"form",children:Object(b.jsxs)("div",{className:"form__content",children:[Object(b.jsx)(p,{title:"Education"}),e,n.formInfoIsPresent&&Object(b.jsx)(J,{currentInfo:n.currentInfo,handleChange:this.handleChange,handleSave:this.handleSave,handleDelete:this.handleDelete}),Object(b.jsx)(P,{handleAddAnotherExperience:this.handleAddAnotherExperience,text:"Add Another Education"})]})})}}]),n}(r.a.Component),J=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.handleChange,t=this.props.handleSave,n=this.props.currentInfo,a=this.props.handleDelete;return Object(b.jsxs)("div",{className:"form__info-field",children:[Object(b.jsx)(m,{firstItem:Object(b.jsx)(f,{labelName:"Degree",name:"degree",type:"text",handleChange:e,value:n.degree}),secondItem:Object(b.jsx)(f,{labelName:"City/Town",name:"city",type:"text",handleChange:e,value:n.city})}),Object(b.jsx)(O,{children:Object(b.jsx)(f,{labelName:"School",name:"school",type:"text",handleChange:e,value:n.school})}),Object(b.jsx)(m,{firstItem:Object(b.jsx)(W,{labelName:"Start Date",handleChange:e,startMonth:n.startMonth,startYear:n.startYear}),secondItem:Object(b.jsx)(q,{labelName:"End Date",handleChange:e,endMonth:n.endMonth,endYear:n.endYear})}),Object(b.jsx)(O,{children:Object(b.jsx)(v,{name:"description",labelName:"Description",handleChange:e,value:n.description})}),Object(b.jsx)(F,{handleSave:t,handleDelete:a})]})}}]),n}(r.a.Component),W=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.labelName,n=e.handleChange,a=e.startMonth,r=e.startYear;return Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form__label",children:t}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)(x,{month:a,name:"startMonth",handleChange:n}),Object(b.jsx)(C,{year:r,name:"startYear",handleChange:n})]})]})}}]),n}(r.a.Component),q=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.labelName,n=e.handleChange,a=e.endMonth,r=e.endYear;return Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{className:"form__label",children:t}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)(x,{month:a,name:"endMonth",handleChange:n}),Object(b.jsx)(C,{year:r,name:"endYear",handleChange:n})]})]})}}]),n}(r.a.Component),Z=L,G=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e,t=this.props.currentPage,n=this.props.onHandleChangePage,a=[];return"personal"===t?(a.push(!0,!1,!1),e="quarter"):"experiences"===t?(a.push(!0,!0,!1),e="half"):"template"===t&&(a.push(!0,!0,!0),e="full"),Object(b.jsxs)("div",{className:"progress-bar",children:[Object(b.jsx)("div",{className:"progress-bar__bar",children:Object(b.jsx)(K,{width:e})}),Object(b.jsxs)("div",{className:"progress-bar__buttons",children:[Object(b.jsx)(U,{label:"Personal",isCompleted:a[0],handleChangePage:n}),Object(b.jsx)(X,{label:"Experiences",isCompleted:a[1],handleChangePage:n}),Object(b.jsx)($,{label:"Experiences",isCompleted:a[2],handleChangePage:n})]})]})}}]),n}(r.a.Component),K=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e,t=this.props.width;return"quarter"===t?e="progress-bar__filler progress-bar__filler--quarter":"half"===t?e="progress-bar__filler progress-bar__filler--half":"full"===t&&(e="progress-bar__filler progress-bar__filler--full"),Object(b.jsx)("div",{className:e})}}]),n}(r.a.Component),Q=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.label;return Object(b.jsx)("div",{className:"progress-bar__label",children:e})}}]),n}(r.a.Component),R=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isCompleted,n=e.handleChangePage,a=t?"progress-bar__button progress-bar__button--completed":"progress-bar__button",r=this.props.name;return Object(b.jsx)("button",{className:a,onClick:function(e){return n(e,r)},children:this.props.children})}}]),n}(r.a.Component),U=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.isCompleted,t=this.props.handleChangePage;return Object(b.jsxs)(R,{name:"personal",isCompleted:e,handleChangePage:t,children:[Object(b.jsx)(ee,{isCompleted:e}),Object(b.jsx)(Q,{label:"Personal"})]})}}]),n}(r.a.Component),X=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.isCompleted,t=this.props.handleChangePage;return Object(b.jsxs)(R,{name:"experiences",isCompleted:e,handleChangePage:t,children:[Object(b.jsx)(te,{isCompleted:e}),Object(b.jsx)(Q,{label:"Experiences"})]})}}]),n}(r.a.Component),$=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.isCompleted,t=this.props.handleChangePage;return Object(b.jsxs)(R,{name:"template",isCompleted:e,handleChangePage:t,children:[Object(b.jsx)(ne,{isCompleted:e}),Object(b.jsx)(Q,{label:"Template"})]})}}]),n}(r.a.Component),ee=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.isCompleted?"progress-bar__icon progress-bar__icon--completed":"progress-bar__icon";return Object(b.jsxs)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[Object(b.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(b.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"})]})}}]),n}(r.a.Component),te=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.isCompleted?"progress-bar__icon progress-bar__icon--completed":"progress-bar__icon";return Object(b.jsx)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24",viewBox:"0 0 24 24",width:"24",children:Object(b.jsxs)("g",{children:[Object(b.jsx)("rect",{fill:"none",height:"24",width:"24"}),Object(b.jsx)("path",{d:"M20.41,8.41l-4.83-4.83C15.21,3.21,14.7,3,14.17,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V9.83 C21,9.3,20.79,8.79,20.41,8.41z M7,7h7v2H7V7z M17,17H7v-2h10V17z M17,13H7v-2h10V13z"})]})})}}]),n}(r.a.Component),ne=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.isCompleted?"progress-bar__icon progress-bar__icon--completed":"progress-bar__icon";return Object(b.jsxs)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[Object(b.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(b.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})]})}}]),n}(r.a.Component),ae=G,re=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"heading-bg"})}}]),n}(r.a.Component),ce=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.handleNext;return Object(b.jsx)("div",{className:"next-step",children:Object(b.jsxs)("button",{onClick:e,className:"next-step__btn",children:["Next Step",Object(b.jsx)(S,{})]})})}}]),n}(r.a.Component),se=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.personal,n=e.work,a=e.education;return Object(b.jsxs)("div",{className:"template",children:[Object(b.jsx)(ie,{firstName:t.firstName,lastName:t.lastName}),Object(b.jsx)(oe,{name:"Personal",history:t}),Object(b.jsx)(le,{name:"Work Experiences",history:n.history}),Object(b.jsx)(le,{name:"Education",history:a.history})]})}}]),n}(r.a.Component),ie=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("h1",{className:"template__name",children:[this.props.firstName," ",this.props.lastName]})}}]),n}(r.a.Component),oe=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.history;return Object(b.jsxs)("div",{className:"template__section template__section--personal",children:[Object(b.jsx)(de,{name:"Personal"}),Object(b.jsxs)("div",{className:"template__section--personal--main",children:[Object(b.jsxs)("div",{className:"template__section--personal--row",children:[Object(b.jsx)("span",{class:"personal__label",children:"Name"}),Object(b.jsxs)("p",{class:"personal__info",children:[e.firstName," ",e.lastName]})]}),Object(b.jsxs)("div",{className:"template__section--personal--row",children:[Object(b.jsx)("span",{class:"personal__label",children:"Address"}),Object(b.jsxs)("p",{class:"personal__info",children:[e.address,", ",e.zipCode," ",e.city]})]}),Object(b.jsxs)("div",{className:"template__section--personal--row",children:[Object(b.jsx)("span",{class:"personal__label",children:"Phone Number"}),Object(b.jsx)("p",{class:"personal__info",children:e.phoneNumber})]}),Object(b.jsxs)("div",{className:"template__section--personal--row",children:[Object(b.jsx)("span",{class:"personal__label",children:"Email"}),Object(b.jsx)("p",{class:"personal__info",children:e.email})]})]})]})}}]),n}(r.a.Component),le=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"template__section",children:[Object(b.jsx)(de,{name:this.props.name}),Object(b.jsx)(he,{name:this.props.name,history:this.props.history})]})}}]),n}(r.a.Component),de=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"template__section--header",children:Object(b.jsx)("h3",{className:"template__section--title",children:this.props.name})})}}]),n}(r.a.Component),he=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.history;return Object(b.jsx)("div",{className:"template__section--main",children:t.map((function(t){return"Work"===function(e){if("Work Experiences"===e)return"Work";if("Education"===e)return e}(e.props.name)?Object(b.jsx)(je,{title:t.jobTitle,subTitle:t.employer,history:t}):Object(b.jsx)(je,{title:t.degree,subTitle:t.school,history:t})}))})}}]),n}(r.a.Component),je=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.history,t=e.city,n=e.startMonth,a=e.startYear,r=e.endMonth,c=e.endYear,s=e.description,i=this.props.title,o=this.props.subTitle;return Object(b.jsxs)("div",{className:"template__section--row",children:[Object(b.jsxs)("div",{className:"template__info-header",children:[Object(b.jsx)("div",{className:"template__info-title",children:i}),Object(b.jsxs)("div",{className:"template__info-date",children:[n," ",a," - ",r," ",c]})]}),Object(b.jsxs)("div",{className:"template__info-subtitle",children:[o,", ",t]}),Object(b.jsx)("p",{className:"template__info-text",children:s})]})}}]),n}(r.a.Component);var ue=se,be=n(10),pe=n(9),Oe=n(6);var me=function(){function e(){return{id:u()(),degree:"",city:"",school:"",startMonth:"Don't Show This",startYear:1960,endMonth:"Don't Show This",endYear:1960,description:""}}return{getInitialProperties:function(){return{history:[],currentInfo:e(),isEditing:!1,editCardNumber:null,formInfoIsPresent:!1}},getNewInfo:e,addAnotherExperience:function(t){return{education:Object(Oe.a)(Object(Oe.a)({},t.education),{},{formInfoIsPresent:!0,isEditing:!1,editCardNumber:null,currentInfo:e()})}},onHandleChange:function(e,t,n){return{education:Object(Oe.a)(Object(Oe.a)({},e.education),{},{currentInfo:Object(Oe.a)(Object(Oe.a)({},e.education.currentInfo),{},Object(pe.a)({},t,n))})}},onHandleSave:function(t){var n=t.education;if(n.isEditing){var a=Object(be.a)(n.history);return a.splice(n.editCardNumber,1,n.currentInfo),{education:Object(Oe.a)(Object(Oe.a)({},n),{},{history:a,currentInfo:e(),isEditing:!1,editCardNumber:null})}}return{education:Object(Oe.a)(Object(Oe.a)({},t.education),{},{history:[].concat(Object(be.a)(t.education.history),[t.education.currentInfo]),currentInfo:e(),formInfoIsPresent:!1})}},onHandleDelete:function(t,n){var a=t.education;return a.isEditing?{education:Object(Oe.a)(Object(Oe.a)({},a),{},{history:a.history.filter((function(e){return e.id!==n})),isEditing:!1,editCardNumber:null,currentInfo:e()})}:{education:Object(Oe.a)(Object(Oe.a)({},a),{},{currentInfo:e(),formInfoIsPresent:!1})}},onHandleFormEdit:function(e,t){var n=e.education.history,a=n.find((function(e){return e.id===t})),r=n.findIndex((function(e){return e.id===t}));return{education:Object(Oe.a)(Object(Oe.a)({},e.education),{},{editCardNumber:r,currentInfo:a,isEditing:!0,formInfoIsPresent:!1})}},onHandleFormCardDelete:function(e,t){var n=Object(be.a)(e.education.history).filter((function(e){return e.id!==t}));return{education:Object(Oe.a)(Object(Oe.a)({},e.education),{},{history:n})}}}}();var fe=function(){function e(){return{id:u()(),jobTitle:"",city:"",employer:"",description:"",startMonth:"Don't Show This",startYear:1960,endMonth:"Don't Show This",endYear:1960}}return{addAnotherExperience:function(t){return{work:Object(Oe.a)(Object(Oe.a)({},t.work),{},{formInfoIsPresent:!0,isEditing:!1,editCardNumber:null,currentInfo:e()})}},getNewInfo:e,onHandleChange:function(e,t,n){return{work:Object(Oe.a)(Object(Oe.a)({},e.work),{},{currentInfo:Object(Oe.a)(Object(Oe.a)({},e.work.currentInfo),{},Object(pe.a)({},t,n))})}},onHandleDelete:function(t,n){return t.work.isEditing&&console.log("Item to delete: ",n),{work:Object(Oe.a)(Object(Oe.a)({},t.work),{},{history:t.work.history.filter((function(e){return e.id!==n})),isEditing:!1,editCardNumber:null,formInfoIsPresent:!1,currentInfo:e()})}},onHandleFormCardDelete:function(e,t){var n=Object.assign({},e.work),a=n.history.filter((function(e){return e.id!==t}));return n.history=a,{work:n}},onHandleSave:function(t){var n=t.work;if(n.isEditing){var a=Object.assign({},t.work),r=a.history.slice();return r.splice(t.work.editCardNumber,1,t.work.currentInfo),a.history=r,a.currentInfo=e(),a.isEditing=!1,a.editCardNumber=null,{work:a}}return{work:Object(Oe.a)(Object(Oe.a)({},t.work),{},{history:[].concat(Object(be.a)(n.history),[t.work.currentInfo]),currentInfo:e(),isEditing:!1,editCardNumber:null,formInfoIsPresent:!1})}},onHandleFormCardEdit:function(e,t){var n=e.work.history.slice(),a=n.find((function(e){return e.id===t})),r=n.findIndex((function(e){return e.id===t}));return{work:Object(Oe.a)(Object(Oe.a)({},e.work),{},{isEditing:!0,editCardNumber:r,currentInfo:a,formInfoIsPresent:!1})}},getInitialProperties:function(){return{history:[],currentInfo:e(),isEditing:!1,editCardNumber:null,formInfoIsPresent:!1}}}}();var ve={getInitialProperties:function(){return{firstName:"",lastName:"",email:"",phoneNumber:"",address:"",zip:"",city:""}},onHandleChange:function(e,t,n){return{personal:Object(Oe.a)(Object(Oe.a)({},e.personal),{},Object(pe.a)({},t,n))}}};var xe=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("header",{className:"header",children:Object(b.jsxs)("a",{class:"page-logo",children:[Object(b.jsx)("span",{children:"CV"}),"maker"]})})}}]),n}(r.a.Component),Ce=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={currentPage:"personal",personal:ve.getInitialProperties(),work:fe.getInitialProperties(),education:me.getInitialProperties()},a.handleNext=a.handleNext.bind(Object(i.a)(a)),a.onHandleAddAnotherExperience=a.onHandleAddAnotherExperience.bind(Object(i.a)(a)),a.onHandleChange=a.onHandleChange.bind(Object(i.a)(a)),a.onHandleDelete=a.onHandleDelete.bind(Object(i.a)(a)),a.onHandleSave=a.onHandleSave.bind(Object(i.a)(a)),a.onHandleFormCardEdit=a.onHandleFormCardEdit.bind(Object(i.a)(a)),a.onHandleFormCardDelete=a.onHandleFormCardDelete.bind(Object(i.a)(a)),a.onHandleChangePage=a.onHandleChangePage.bind(Object(i.a)(a)),a}return Object(l.a)(n,[{key:"onHandleChangePage",value:function(e,t){this.setState({currentPage:t})}},{key:"handleNext",value:function(e){this.setState((function(e){switch(e.currentPage){case"personal":e.currentPage="experiences";break;case"experiences":e.currentPage="template"}return{currentPage:e.currentPage}}))}},{key:"onHandleAddAnotherExperience",value:function(e,t){switch(e.preventDefault(),t){case"education":this.setState(me.addAnotherExperience);break;case"work":this.setState(fe.addAnotherExperience)}}},{key:"onHandleChange",value:function(e,t){var n=e.target,a=n.value,r=n.name;switch(t){case"education":this.setState((function(e){return me.onHandleChange(e,r,a)}));break;case"work":this.setState((function(e){return fe.onHandleChange(e,r,a)}));break;case"personal":this.setState((function(e){return ve.onHandleChange(e,r,a)}))}}},{key:"onHandleDelete",value:function(e,t,n){switch(e.preventDefault(),n){case"education":this.setState((function(e){return me.onHandleDelete(e,t)}));break;case"work":this.setState((function(e){return fe.onHandleDelete(e,t)}))}}},{key:"onHandleFormCardDelete",value:function(e,t){switch(t){case"education":this.setState((function(t){return me.onHandleFormCardDelete(t,e)}));break;case"work":this.setState((function(t){return fe.onHandleFormCardDelete(t,e)}))}}},{key:"onHandleSave",value:function(e,t){switch(e.preventDefault(),t){case"education":this.setState(me.onHandleSave);break;case"work":this.setState(fe.onHandleSave)}}},{key:"onHandleFormCardEdit",value:function(e,t){switch(t){case"education":this.setState((function(t){return me.onHandleFormEdit(t,e)}));break;case"work":this.setState((function(t){return fe.onHandleFormCardEdit(t,e)}))}}},{key:"render",value:function(){var e,t=this.state.currentPage;return e="personal"===t?Object(b.jsx)(_,{personal:this.state.personal,onHandleChange:this.onHandleChange}):"experiences"===t?Object(b.jsxs)("div",{children:[Object(b.jsx)(B,{work:this.state.work,onHandleAddAnotherExperience:this.onHandleAddAnotherExperience,onHandleChange:this.onHandleChange,onHandleDelete:this.onHandleDelete,onHandleSave:this.onHandleSave,onHandleFormCardEdit:this.onHandleFormCardEdit,onHandleFormCardDelete:this.onHandleFormCardDelete}),Object(b.jsx)(Z,{education:this.state.education,onHandleAddAnotherExperience:this.onHandleAddAnotherExperience,onHandleChange:this.onHandleChange,onHandleSave:this.onHandleSave,onHandleDelete:this.onHandleDelete,onHandleFormCardEdit:this.onHandleFormCardEdit,onHandleFormCardDelete:this.onHandleFormCardDelete})]}):Object(b.jsx)(ue,{personal:this.state.personal,work:this.state.work,education:this.state.education}),Object(b.jsx)("div",{children:Object(b.jsxs)("main",{class:"container",children:[Object(b.jsx)("h1",{class:"page-title",children:"Personal Details"}),Object(b.jsx)(ae,{currentPage:t,onHandleChangePage:this.onHandleChangePage}),e,Object(b.jsx)(ce,{handleNext:this.handleNext})]})})}}]),n}(r.a.Component),ge=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(xe,{}),Object(b.jsx)(Ce,{}),Object(b.jsx)(re,{})]})};n(19);s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(ge,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.c5e69ce9.chunk.js.map