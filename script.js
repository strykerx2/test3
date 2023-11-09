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
    if(ph == atl.png)
    {
        showImage(tor.png);
    }
    else if(ph == bos.png)
    {
        showImage(atl.png);
    }
    else if(ph == chh.png)
    {
        showImage(bos.png);
    }
    else if(ph = cle.png)
    {
        showImage(chh.png);
    }
    else if(ph == img5.jpg)
    {
        showImage(chi.png)
    }

}

function rightImage(){
    
}
    