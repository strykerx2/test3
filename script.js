let ph;

// function to show image when we click on a image
function showImage(imageSrc) {
    let popupImage = document.getElementById("popupImage");
    popupImage.src = imageSrc;
    ph = imageSrc;

    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "block";
    document.body.style.overflow = "hidden";
}
// function to hide the image when we click on cross button
function closeImage() {
    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "none";
    document.body.style.overflow = "auto";
}

function leftImage(){
    closeImage();
    if(ph == img1.jpg)
    {
        showImage(img12.png);
    }
    else if(ph == img2.jpg)
    {
        showImage(img1.jpg);
    }
    else if(ph == img3.png)
    {
        showImage(img2.jpg);
    }
    else if(ph = img4.png)
    {
        showImage(img4.png);
    }
    else if(ph == img5.jpg)
    {
        showImage(img4.png)
    }

}

function rightImage(){
    
}
    