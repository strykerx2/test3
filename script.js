let ph = 0;

// function to show image when we click on a image
function showImage(imageSrc) {
    let popupImage = document.getElementById("popupImage");
    popupImage.src = imageSrc;
    if(imageSrc == "img1.jpg")
    {
        ph = 1;
    }
    else if(imageSrc == "img2.jpg")
    {
        ph = 2;    }
    else if(imageSrc == "img3.png")
    {
        ph = 3;    }
    else if(imageSrc == "img4.png")
    {
        ph = 4;    }
    else if(imageSrc == "img5.jpg")
    {
        ph = 5;    }
    else if(imageSrc == "img6.jpg")
    {
        ph = 6;    }
    else if(imageSrc == "img7.png")
    {
        ph = 7;    }
    else if(imageSrc == "img8.png")
    {
        ph = 8;    }
    else if(imageSrc == "img9.jpg")
    {
        ph = 9;    }
    else if(imageSrc == "img10.jpg")
    {
        ph = 10;    }
    else if(imageSrc == "img11.jpg")
    {
        ph = 11;    }
    else if(imageSrc == "img12.png")
    {
        ph = 12;    }
    console.log(ph);
    console.log(imageSrc);

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
    showImage(img12.png);
    showImage("img1.png");
   
    closeImage();
    if(ph == 1)
    {
        showImage("img12.png");
    }
    else if(ph == 2)
    {
        showImage("img1.jpg");
    }
    else if(ph == 3)
    {
        showImage("img2.jpg");
    }
    else if(ph == 4)
    {
        showImage("img3.png");
    }
    else if(ph == 5)
    {
        showImage("img4.png")
    }
    else if(ph == 6)
    {
        showImage("img5.jpg")
    }
    else if(ph == 7)
    {
        showImage("img6.jpg")
    }
    else if(ph == 8)
    {
        showImage("img7.png")
    }
    else if(ph == 9)
    {
        showImage("img8.png")
    }
    else if(ph == 10)
    {
        showImage("img9.jpg")
    }
    else if(ph == 11)
    {
        showImage("img10.jpg")
    }
    else if(ph == 12)
    {
        showImage("img11.jpg")
    }
    
    

}

function rightImage(){
    closeImage();
    if(ph == 11)
    {
        showImage("img12.png");
    }
    else if(ph == 12)
    {
        showImage("img1.jpg");
    }
    else if(ph == 1)
    {
        showImage("img2.jpg");
    }
    else if(ph == 2)
    {
        showImage("img3.png");
    }
    else if(ph == 3)
    {
        showImage("img4.png")
    }
    else if(ph == 4)
    {
        showImage("img5.jpg")
    }
    else if(ph == 5)
    {
        showImage("img6.jpg")
    }
    else if(ph == 6)
    {
        showImage("img7.png")
    }
    else if(ph == 7)
    {
        showImage("img8.png")
    }
    else if(ph == 8)
    {
        showImage("img9.jpg")
    }
    else if(ph == 9)
    {
        showImage("img10.jpg")
    }
    else if(ph == 10)
    {
        showImage("img11.jpg")
    }
}
    