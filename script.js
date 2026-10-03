/* Mobile nav toggle */
const navToggle=document.querySelector('.nav-toggle');
const navList=document.getElementById('nav-list');
navToggle.addEventListener('click',()=>{
  const expanded=navToggle.getAttribute('aria-expanded')==='true';
  navToggle.setAttribute('aria-expanded',!expanded);
  navList.style.display=expanded?'none':'flex';
});

/* Form submit */
const form=document.getElementById('contact-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();alert('感谢咨询，您的需求已收到，稍后与您联系！');});}
