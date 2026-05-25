/* ========================================= */
/* TIMELINE INTERACTION */
/* ========================================= */

const years = document.querySelectorAll('.timeline-year');
const items = document.querySelectorAll('.timeline-item');

years.forEach(year => {

    year.addEventListener('click', () => {

        const selectedYear = year.dataset.year;

        /* REMOVE ACTIVE STATES */

        years.forEach(btn => {
            btn.classList.remove('active');
        });

        items.forEach(item => {
            item.classList.remove('active');
        });

        /* ACTIVATE BUTTON */

        year.classList.add('active');

        /* ACTIVATE CONTENT */

        document
            .getElementById(`year-${selectedYear}`)
            .classList.add('active');

    });

});