// script file for image gallery assignment 7
//



// initialize elements relevant for enlarged image
//

let imgArray = [    "img/atl.png", "img/bos.png", "img/chh.png", 
                    "img/chi.png", "img/cle.png", "img/gsw.png", 
                    "img/hou.png", "img/lal.png", "img/mia.png", 
                    "img/okc.png", "img/phx.png", "img/tor.png" ];

let bigDiv = document.createElement("div");
bigDiv.style.display = "none";
bigDiv.setAttribute("class", "big-div");
bigDiv.setAttribute("id", "big-div");
document.getElementById("enlarged-wrapper").appendChild(bigDiv);

{/* <div class="btn-group" id="nav-buttons">
    <button type="button" class="btn btn-primary">Apple</button>
    <button type="button" class="btn btn-primary" id="close">Samsung</button>
    <button type="button" class="btn btn-primary">Sony</button>
</div> */}

let bigImg = document.createElement("img");
bigImg.setAttribute("class", "big-img");

let navBtns = document.createElement("div");
navBtns.setAttribute("class", "btn-group");
navBtns.id = "nav-buttons";
bigDiv.appendChild(navBtns);

let leftBtn = document.createElement("button");
leftBtn.setAttribute("class", "btn btn-primary");
leftBtn.id = "left-btn";
leftBtn.innerHTML = "<-";
navBtns.appendChild(leftBtn);

let closeBtn = document.createElement("button");
closeBtn.setAttribute("class", "btn btn-primary");
closeBtn.id = "close-button";
closeBtn.innerHTML = "Close";
closeBtn.addEventListener("click", closeBigImage);
navBtns.appendChild(closeBtn);

let rightBtn = document.createElement("button");
rightBtn.setAttribute("class", "btn btn-primary");
rightBtn.id = "right-btn";
rightBtn.innerHTML = "->"
navBtns.appendChild(rightBtn);


// let closeBtn = document.createElement("button");
// closeBtn.style.display = "none";
// closeBtn.innerHTML = "X";
// closeBtn.setAttribute("class", "close-button");
// closeBtn.addEventListener("click", closeBigImage);

// bigDiv.appendChild(closeBtn);
bigDiv.appendChild(bigImg);



// function imgInit(img array)
// takes in array of image urls, wraps each in a div
//
function imgInit(arr) {

    for (i = 0; i < arr.length; i++) {

        let imgDiv = document.createElement("div");
        imgDiv.setAttribute("class", "small-img-div");
        imgDiv.setAttribute("id", "img-div-" + i);
        imgDiv.style.display = "inline-block";
        document.getElementById("small-images").appendChild(imgDiv);
        
        let imgTag = document.createElement("img");
        imgTag.setAttribute("class", "small-img");
        imgTag.setAttribute("id", "small-img-" + i);
        imgTag.setAttribute("src", arr[i]);
        document.getElementById("img-div-" + i).appendChild(imgTag);

        imgDiv.addEventListener("click", function() { enlargeImage(imgTag.getAttribute("id")) });
        imgDiv.addEventListener("mouseover", function() { hoverOver(imgTag.getAttribute("id")) });
        imgDiv.addEventListener("mouseout", function() { hoverOut(imgTag.getAttribute("id")) });
    }
}


// function hoverOver() 
// changes color of border on hover
//
function hoverOver(id) {
    let el = document.getElementById(id);
    el.style.border = "3px solid red";
}

// function hoverOut() undoes result of hoverOver()
//
function hoverOut(id) {
    let el = document.getElementById(id);
    el.style.border = "none";
}


// function enlargeImage(class or id of image)
// changes link of bigImg <img> that is inside the hidden bigDiv to the url 
// of the clicked image
//
function enlargeImage(id) {
    document.getElementById("overlay").style.display = "block";

    let chosenLink = document.getElementById(id).getAttribute("src");

    leftBtn.addEventListener("click", function() { leftArrow(id) });
    rightBtn.addEventListener("click", function() { rightArrow(id) });

    closeBtn.style.display = "inline-block";
    bigImg.setAttribute("src", chosenLink);
    bigDiv.style.display = "block";
}


// function closeBigImage()
// set big-div display: none;
//
function closeBigImage() {
    bigDiv.style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

// arrows are implemented so first and last point to each other
//

// function leftArrow(current img)
// call closeBigImage() on current image
// figure out previous image, call enlargeImage(previous image)
//
function leftArrow(id) {
    closeBigImage(id);

    let currLink = document.getElementById(id).getAttribute("src");

    let index = imgArray.indexOf(currLink);

    let prevIndex = 0;
    if (index == 0) {
        prevIndex = 11;
    } else {
        prevIndex = index - 1;
    }

    let prevId = document.getElementById("small-img-" + prevIndex).getAttribute("id");

    console.log(prevId);
    
    enlargeImage(prevId);
}

// function rightArrow(current img)
// call closeBigImage() on current image
// figure out next image, call enlargeImage(next image)
//
function rightArrow(id) {
    closeBigImage(id);

    let currLink = document.getElementById(id).getAttribute("src");

    let index = imgArray.indexOf(currLink);

    let nextIndex = 0;
    if (index == 11) {
        nextIndex = 0;
    } else {
        nextIndex = index + 1;
    }

    let nextId = document.getElementById("small-img-" + nextIndex).getAttribute("id");

    console.log(nextId);
    
    enlargeImage(nextId);
}




imgInit(imgArray);