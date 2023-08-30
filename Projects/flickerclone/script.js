function updateInputWidth() {
    var input = document.getElementById('searchbox');
    var text=document.getElementById('searchtext');
    var screenWidth = window.innerWidth;
    
    // Calculate the desired width (e.g., as a percentage of the screen width)
    var desiredWidth = screenWidth * 0.6; // Adjust as needed
    text.style.width= desiredWidth  +"px";
    // Apply the desired width to the input
    input.style.width = desiredWidth + 'px';
}

// Attach the function to the window's resize event
window.addEventListener('resize', updateInputWidth);

