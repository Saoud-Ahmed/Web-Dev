function updateInputWidth() {
    var input = document.getElementById('searchbox');
    var text=document.getElementById('searchtext');
    var screenWidth = window.innerWidth;
    

    var desiredWidth = screenWidth * 0.6; 
    text.style.width= desiredWidth  +"px";

    input.style.width = desiredWidth + 'px';
}


window.addEventListener('resize', updateInputWidth);


const arraypics=[
    {
        "image":"images/bg1.jpg",
        "text":"Breathtaking Pictures",
        "author":"by random artists"
    },
    {
        "image":"images/bg2.jpg",
        "text":"Breathtaking Pictures",
        "author":"by random artists"
    },
    {
        "image":"images/bg3.jpg",
        "text":"Breathtaking Pictures",
        "author":"by random artists"
    },
    {
        "image":"images/bg4.jpg",
        "text":"Breathtaking Pictures",
        "author":"by random artists"
    },
    {
        "image":"images/bg5.jpg",
        "text":"Breathtaking Pictures",
        "author":"by random artists"
    },
    {
        "image":"images/bg6.jpg",
        "text":"Breathtaking Pictures",
        "author":"by random artists"
    },
    {
        "image":"images/bg7.jpg",
        "text":"Breathtaking Pictures",
        "author":"by random artists"
    },
    {
        "image":"images/bg8.jpg",
        "text":"Breathtaking Pictures",
        "author":"by random artists"
    },
    {
        "image":"images/bg9.jpg",
        "text":"Breathtaking Pictures",
        "author":"by random artists"
    }
]


const altText=document.querySelector(".alttext");
const altText2=document.querySelector(".alttext2");
const contentContainer = document.getElementById('contentcontainer');
let currentIndex = 0; // Keep track of the current image index



function updateContent(currentIndex) {

    const imgElement = document.createElement('img');
    

    imgElement.src = arraypics[currentIndex].image;
    imgElement.alt = arraypics[currentIndex].text;
    altText.textContent=arraypics[currentIndex].text;
    altText2.textContent=arraypics[currentIndex].author;
  
    imgElement.classList.add('slide-from-top');


    contentContainer.innerHTML = ''; // Clear existing content
    contentContainer.appendChild(imgElement);


    imgElement.offsetWidth;


    imgElement.classList.remove('slide-from-top');

    // Increment the index
    currentIndex = (currentIndex + 1);
}


updateContent(currentIndex);


const interval = setInterval(function(){if(currentIndex==8){
    currentIndex=0;
    updateContent(currentIndex++);
}
else{
    updateContent(++currentIndex);
}}, 5000); // 5 seconds in milliseconds

let logo=document.querySelector(".navbar-brand");


logo.addEventListener("click", function() {
    let extra = Math.floor(Math.random() * 9);
    if(extra==currentIndex){
        extra = Math.floor(Math.random() * 9);
        currentIndex = extra;
        updateContent(currentIndex);
    }
    else{
        currentIndex = extra;
        updateContent(currentIndex);
    }
});

