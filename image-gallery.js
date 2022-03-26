// script file for image gallery assignment 7
//



// set global elements
//

let imgArray = [ "img/atl.png", "img/bos.png", "img/chh.png", "img/chi.png", "img/cle.png", "img/gsw.png", "img/hou.png", "img/lal.png", "img/mia.png", "img/okc.png", "img/phx.png", "img/tor.png" ]

let bigDiv = document.createElement("div");
bigDiv.style.display = "none";
bigDiv.setAttribute("class", "big-div");
bigDiv.setAttribute("id", "big-div");
document.body.appendChild(bigDiv);

let bigImg = document.createElement("img");
bigImg

let closeBtn = document.createElement("button");
closeBtn.style.display = "none";
closeBtn.innerHTML = "X";
closeBtn.setAttribute("class", "close-button");
closeBtn.addEventListener("click", closeBigImage);

bigDiv.appendChild(closeBtn);
bigDiv.appendChild(bigImg);



// function imgInit(img array)
// takes in array of image urls, wraps each in a div
//
function imgInit(arr) {

    for (i = 0; i < arr.length; i++) {

        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "small-img-div");
        imgDiv.setAttribute("id", "img-div-" + i);
        document.body.appendChild(imgDiv);
        
        let imgTag = document.createElement("img");
        imgTag.setAttribute("class", "small-img");
        imgTag.setAttribute("id", "small-img-" + i);
        imgTag.setAttribute("src", arr[i]);
        document.getElementById("img-div-" + i).appendChild(imgTag);

        imgDiv.addEventListener("click", function() { enlargeImage(imgTag.getAttribute("id")) });
        
    }
}


// function enlargeImage(class or id of image)
// changes link of bigImg <img> that is inside the hidden bigDiv
//
function enlargeImage(id) {
    console.log("enlargeImage() called on " + id);

    let chosenLink = document.getElementById(id).getAttribute("src");

    closeBtn.style.display = "inline-block";
    bigImg.setAttribute("src", chosenLink);

    bigDiv.style.display = "block";
}


// function closeBigImage()
// set big-div display: none;
//
function closeBigImage() {
    bigDiv.style.display = "none";
}

// left right arrows
// function nextImageBig(current img)
// call closeBigImage() on current image
// figure out next image, call makeImageBig(next image)
//




imgInit(imgArray);