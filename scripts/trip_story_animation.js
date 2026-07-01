/*=========================================
Reveal Sections
=========================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.18
});

document.querySelectorAll(".reveal-animation").forEach(item=>{

    observer.observe(item);

});