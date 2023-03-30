let index = 0;

/*Use the function*/
showImage(index);

/*Declare the function*/
function showImage(i) {
    index += i;

    let images = document.getElementsByClassName("image");

    let dots = document.getElementsByClassName("dot");

    /*Hides all image when clicked on icon (next or prev) */
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }


}

/*
    https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/

    https://www.google.com/search?q=learn+to+make+an+image+carousel&oq=learn+to+make+an+image+carousel&aqs=chrome..69i57j0i22i30l9.6303j0j4&sourceid=chrome&ie=UTF-8#fpstate=ive&vld=cid:e61a1e68,vid:9HcxHDS2w1s
*/