const galleryImages=document.querySelectorAll('.gallery-image');

const lightbox=document.getElementById('lightbox');
const lightboxImage=document.getElementById('lightbox-image');

const closeButton=document.getElementById('close-lightbox');
const prevButton=document.getElementById('prev-image');
const nextButton=document.getElementById('next-image');

let currentIndex=0;

galleryImages.forEach((image,index)=>{

    image.addEventListener('click',()=>{

        currentIndex=index;

        lightboxImage.src=image.src;

        lightbox.classList.add('active');

    });

});

function showImage(index){

    if(index<0){
        index=galleryImages.length-1;
    }

    if(index>=galleryImages.length){
        index=0;
    }

    currentIndex=index;

    lightboxImage.src=galleryImages[currentIndex].src;

}

nextButton.addEventListener('click',()=>{

    showImage(currentIndex+1);

});

prevButton.addEventListener('click',()=>{

    showImage(currentIndex-1);

});

closeButton.addEventListener('click',()=>{

    lightbox.classList.remove('active');

});

lightbox.addEventListener('click',(event)=>{

    if(event.target===lightbox){

        lightbox.classList.remove('active');

    }

});