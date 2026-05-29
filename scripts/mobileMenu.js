/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

const mobileLinks=document.querySelectorAll('.mobile-nav a');
const mobileToggle=document.getElementById('mobile-menu-toggle');

mobileLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        mobileToggle.checked=false;
    });
});