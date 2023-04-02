let slideIndex = 1;

showSlides(slideIndex);

//Next och previous controls 
function changeSlide(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("images"); //take the images and puts in an array

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block"; /*Vet ej varför?*/
}

    