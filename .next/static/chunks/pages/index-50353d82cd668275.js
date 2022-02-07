(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,r,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(5075)}])},4757:function(e,r,a){"use strict";a.r(r);var s=a(5893),l=a(7536),i=a(5496),n=a(4231),d=a(7814),t=a(8947),o=a(1417);function c(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function m(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),s.forEach((function(r){c(e,r,a[r])}))}return e}t.vI.add(o.vnX);r.default=function(e){e.inscription;var r,a,t,o,c,u,x,p=e.setInscription,b=n.Ry().shape({gender:n.Z_().required("Gender is required").nullable(),dob:n.Z_().required("Date of Birth is required").matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,"Date of Birth must be a valid date in the format YYYY-MM-DD"),email:n.Z_().required("Email is required").email("Email is invalid"),confirmEmail:n.Z_().oneOf([n.iH("email"),null],"Email must match").required("Confirm Email is required"),password:n.Z_().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:n.Z_().oneOf([n.iH("password"),null],"Passwords must match").required("Confirm Password is required"),acceptTerms:n.Xg().oneOf([!0],"Accept Ts & Cs is required")}),f={resolver:(0,i.X)(b)},h=(0,l.cI)(f),g=h.register,v=h.handleSubmit,j=h.reset,N=h.formState.errors;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"mt-6 mb-3 pb-3 border-b border-b-slate-600 flex flex-col space-y-2",children:[(0,s.jsxs)("button",{className:"uppercase px-4 py-3 border border-google rounded-md",children:[(0,s.jsx)(d.G,{icon:["fab","google"],className:"mr-2 text-google"})," Sign Up with Google"]}),(0,s.jsxs)("button",{className:"uppercase px-4 py-3 border border-facebook rounded-md",children:[(0,s.jsx)(d.G,{icon:["fab","facebook"],className:"mr-2 text-facebook"}),"Sign Up with Facebook"]})]}),(0,s.jsxs)("form",{onSubmit:v((function(e){return alert("SUCCESS!! :-)\n\n"+JSON.stringify(e,null,4)),p(!1),!1})),children:[(0,s.jsxs)("div",{className:"w-full my-6 border-b border-b-slate-600 pb-6 space-y-2",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("label",{children:"Email"}),(0,s.jsx)("input",m({name:"email",type:"text"},g("email"),{className:"px-4 py-2 rounded-md form-control ".concat(N.email?"is-invalid border-danger border":"")})),(0,s.jsx)("div",{className:"mt-1 text-0.7 text-danger uppercase invalid-feedback",children:null===(r=N.email)||void 0===r?void 0:r.message})]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("label",{children:"Confirm Email"}),(0,s.jsx)("input",m({name:"email",type:"text"},g("confirmEmail"),{className:"px-4 py-2 rounded-md form-control ".concat(N.confirmEmail?"is-invalid border-danger border":"")})),(0,s.jsx)("div",{className:"mt-1 text-0.7 text-danger uppercase invalid-feedback",children:null===(a=N.confirmEmail)||void 0===a?void 0:a.message})]})]}),(0,s.jsxs)("div",{className:"w-full my-6 border-b border-b-slate-600 pb-6 space-y-2",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("label",{children:"Password"}),(0,s.jsx)("input",m({name:"password",type:"password"},g("password"),{className:"px-4 py-2 rounded-md form-control ".concat(N.password?"is-invalid border-danger border":"")})),(0,s.jsx)("div",{className:"mt-1 text-0.7 text-danger uppercase invalid-feedback",children:null===(t=N.password)||void 0===t?void 0:t.message})]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("label",{children:"Confirm Password"}),(0,s.jsx)("input",m({name:"confirmPassword",type:"password"},g("confirmPassword"),{className:"px-4 py-2 rounded-md form-control ".concat(N.confirmPassword?"is-invalid border-danger border":"")})),(0,s.jsx)("div",{className:"mt-1 text-0.7 text-danger uppercase invalid-feedback",children:null===(o=N.confirmPassword)||void 0===o?void 0:o.message})]})]}),(0,s.jsx)("div",{className:"w-full my-6 border-b border-b-slate-600 pb-6 space-y-2",children:(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("label",{children:"Date of Birth"}),(0,s.jsx)("input",m({name:"dob",type:"date"},g("dob"),{className:"px-4 py-2 rounded-md form-control ".concat(N.dob?"is-invalid border-danger border":"")})),(0,s.jsx)("div",{className:"mt-1 text-0.7 text-danger uppercase invalid-feedback",children:null===(c=N.dob)||void 0===c?void 0:c.message})]})}),(0,s.jsx)("div",{className:"w-full my-6 border-b border-b-slate-600 pb-6 space-y-2",children:(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("label",{children:"Gender"}),(0,s.jsxs)("div",{className:"flex space-x-4 px-4 py-2 rounded-md form-control ".concat(N.gender?"is-invalid border-danger border":""),children:[(0,s.jsx)("div",{className:"radio",children:(0,s.jsxs)("label",{children:[(0,s.jsx)("input",m({},g("gender",{required:!0}),{type:"radio",name:"gender",value:"Male",className:"mr-2 form-check-input",id:"male"})),"Male"]})}),(0,s.jsx)("div",{className:"radio",children:(0,s.jsxs)("label",{children:[(0,s.jsx)("input",m({},g("gender",{required:!0}),{type:"radio",name:"gender",value:"Female",className:"mr-2 form-check-input",id:"female"})),"Female"]})}),(0,s.jsx)("div",{className:"radio",children:(0,s.jsxs)("label",{children:[(0,s.jsx)("input",m({},g("gender",{required:!0}),{type:"radio",name:"gender",value:"Non-binary",className:"mr-2 form-check-input",id:"non-binary"})),"Non-binary"]})})]}),(0,s.jsx)("div",{className:"mt-1 text-0.7 text-danger uppercase invalid-feedback",children:null===(u=N.gender)||void 0===u?void 0:u.message})]})}),(0,s.jsxs)("div",{className:"mb-6 form-group form-check",children:[(0,s.jsx)("input",m({name:"acceptTerms",type:"checkbox"},g("acceptTerms"),{id:"acceptTerms",className:"p-1 mr-2 form-check-input ".concat(N.acceptTerms?"is-invalid border-danger border":"")})),(0,s.jsx)("label",{htmlFor:"acceptTerms",className:"form-check-label",children:"Accept Terms & Conditions"}),(0,s.jsx)("div",{className:"mt-1 text-0.7 text-danger uppercase invalid-feedback",children:null===(x=N.acceptTerms)||void 0===x?void 0:x.message})]}),(0,s.jsxs)("div",{className:"flex space-x-4 form-group",children:[(0,s.jsx)("button",{type:"submit",className:"px-6 py-4 text-white uppercase bg-blue-400 rounded-lg",children:"Register"}),(0,s.jsx)("button",{type:"button",onClick:function(){return j()},className:"px-6 py-4 text-white uppercase bg-gray-700 rounded-lg",children:"Reset"})]})]})]})}},5075:function(e,r,a){"use strict";a.r(r);var s=a(5893),l=a(7294),i=a(4757),n=a(1436),d=a(7814);r.default=function(){var e=(0,l.useState)(!0),r=e[0],a=e[1];return(0,s.jsxs)("div",{className:"container mx-auto lg:h-screen flex justify-center lg:items-center",children:[(0,s.jsxs)("div",{className:"relative w-full px-6 py-8 ".concat(r?"block":"hidden"),children:[(0,s.jsxs)("div",{className:"mx-auto w-full lg:w-2/6 bg-quaternary border border-blue-400 rounded-xl p-6 lg:p-16 shadow-lg",children:[(0,s.jsx)("h2",{className:"",children:"Sign Up"}),(0,s.jsx)("h4",{className:"",children:"It's quick and easy"}),(0,s.jsx)(i.default,{setInscription:a})]}),(0,s.jsxs)("div",{className:"absolute -z-1 transform -top-1/2 w-full h-full -left-1/2 translate-x-1/2 translate-y-1/2 flex justify-center items-center",children:[(0,s.jsx)("div",{className:"absolute h-4/6 transform translate-x-10 mx-auto w-full lg:w-2/6 bg-quaternary rotate-1 bg-opacity-40 rounded-xl p-6 lg:p-16 shadow-lg"}),(0,s.jsx)("div",{className:"absolute h-4/6 transform -translate-x-10 mx-auto w-full lg:w-2/6 bg-blue-400 -rotate-1 bg-opacity-10 rounded-xl p-6 lg:p-16 shadow-lg"})]})]}),(0,s.jsxs)("div",{className:"relative w-full px-6 py-8 ".concat(r?"hidden":"block"),children:[(0,s.jsxs)("div",{className:"mx-auto w-full lg:w-2/6 bg-quaternary border border-blue-400 rounded-xl p-6 lg:p-16 shadow-lg",children:[(0,s.jsxs)("h2",{className:"mb-6",children:["Thank you ",(0,s.jsx)(d.G,{icon:n.SvR,className:"ml-2 text-blue-400 text-base"})]}),(0,s.jsx)("p",{className:"",children:"You're awesome, and now part of the community! "}),(0,s.jsx)("p",{className:"",children:"You will receive soon your confirmation email "})]}),(0,s.jsxs)("div",{className:"absolute -z-1 transform -top-1/2 w-full h-full -left-1/2 translate-x-1/2 translate-y-1/2 flex justify-center items-center",children:[(0,s.jsx)("div",{className:"absolute h-4/6 transform translate-x-10 mx-auto w-full lg:w-2/6 bg-quaternary rotate-1 bg-opacity-40 rounded-xl p-6 lg:p-16 shadow-lg"}),(0,s.jsx)("div",{className:"absolute h-4/6 transform -translate-x-10 mx-auto w-full lg:w-2/6 bg-blue-400 -rotate-1 bg-opacity-10 rounded-xl p-6 lg:p-16 shadow-lg"})]})]})]})}}},function(e){e.O(0,[112,523,486,774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);