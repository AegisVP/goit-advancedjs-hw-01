import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{t as l}from"./assets/vendor-1e54b975.js";const o="formData",n=document.querySelector("form.feedback-form"),s=document.querySelector('form input[name="email"]'),r=document.querySelector('form textarea[name="message"]'),e={};n.addEventListener("input",l(c,500));n.addEventListener("submit",i);u();function c(t){e.email=s.value,e.message=r.value,localStorage.setItem(o,JSON.stringify(e))}function i(t){t.preventDefault();const{email:a,message:m}=t.currentTarget;e[a.name]=a.value,e[m.name]=m.value,localStorage.removeItem(o),t.currentTarget.reset(),console.log("Form submitted: email: "+e.email+", message: "+e.message)}function u(){const t=localStorage.getItem(o);if(t){const a=JSON.parse(t);console.log("Found saved data, filling in fields"),s.value=e.email=a.email,r.value=e.message=a.message}else console.log("Starting new form")}
//# sourceMappingURL=commonHelpers3.js.map