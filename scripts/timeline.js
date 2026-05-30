/* ========================================= */
/* TIMELINE INTERACTION */
/* ========================================= */

const years=document.querySelectorAll('.timeline-year');
const items=document.querySelectorAll('.timeline-item');
const nextButton=document.getElementById('next-year-btn');

let currentIndex=-1;

years.forEach((year,index)=>{

    year.addEventListener('click',()=>{

        const selectedYear=year.dataset.year;

        /* REMOVE ACTIVE STATES */

        years.forEach(btn=>{
            btn.classList.remove('active');
        });

        items.forEach(item=>{
            item.classList.remove('active');
        });

        /* ACTIVATE BUTTON */

        year.classList.add('active');

        /* ACTIVATE CONTENT */

        document
            .getElementById(`year-${selectedYear}`)
            .classList.add('active');

        /* STORE CURRENT YEAR */

        currentIndex=index;

        /* UPDATE BUTTON TEXT */

        let nextIndex=index+1;

        if(nextIndex>=years.length){
            nextIndex=0;
        }

        nextButton.textContent=
            "Continue to "+
            years[nextIndex].textContent+
            " →";

    });

});

/* ========================================= */
/* NEXT YEAR BUTTON */
/* ========================================= */

nextButton.addEventListener('click',()=>{

    if(currentIndex===-1){
        return;
    }

    let nextIndex=currentIndex+1;

    if(nextIndex>=years.length){
        nextIndex=0;
    }

    years[nextIndex].click();

    /* SCROLL BACK TO TIMELINE */

    document
        .getElementById('timeline')
        .scrollIntoView({
            behavior:'smooth',
            block:'start'
        });

});

/* ========================================= */
/* DEFAULT YEAR */
/* ========================================= */
/* 0 -> 1984, 1 -> 1003, etc.. */
years[1].click();