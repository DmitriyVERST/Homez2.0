document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".scroll-top");if(!e)return;let o=()=>{window.scrollY>400?e.classList.add("scroll-top--visible"):e.classList.remove("scroll-top--visible")};window.addEventListener("scroll",o,{passive:!0}),o(),e.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})})});
//# sourceMappingURL=public.99739222.js.map
