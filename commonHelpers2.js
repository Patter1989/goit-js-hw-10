import{i as a}from"./assets/alert-icon-3149a82b.js";import{i as t}from"./assets/vendor-77e16229.js";const n="/goit-js-hw-10/assets/succes-img-286069d5.svg",i=document.querySelector(".form");console.log(i);i.addEventListener("submit",u);function u(o){o.preventDefault();const s=o.target.delay.value,l=o.target.state.value,r=new Promise((e,c)=>{setTimeout(()=>{l==="fulfilled"?e(s):c(s)},s)});r.then(e=>{t.success({message:`Fulfilled promise in ${e}ms`,messageSize:"16",messageColor:"#fff",backgroundColor:"#59a10d",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#326101",iconColor:"#fff",iconUrl:n})}).catch(e=>{t.error({message:`Rejected promise in ${e}ms`,messageSize:"16",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",close:!0,closeOnEscape:!0,closeOnClick:!0,progressBar:!0,progressBarColor:"#ffbebe",iconUrl:a,iconColor:"#fff"})}),console.log(r)}
//# sourceMappingURL=commonHelpers2.js.map
