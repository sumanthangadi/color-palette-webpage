// Selectiong Elements :
const colors = document.querySelectorAll('.color');
const displayText = document.querySelector('.displayText');

// Array of colors
const colorArr = ['#B12763', '#FF69B4', '#274357', '#BFD1B3', '#ff6d2b', '#13294B', '#B91428', '#32435A', '#936B4F', '#377051', ' #d470a2', '#7c83bc', ' #4b5b6e', '#FEE715', '#4cb7a5', '#F78345', '#b0c24a', '#f1e8df', '#7291B4', '#8f4584', '#40826D', '#d7e4b1', '#C52A41', '#6b8e23', '#8b5a3f', '#660c21', '#4c6a93','#279d9f', '#58111a', '#E6E6FA','#112c56', '#f4eee0', '#543023', '#6c5971', '#6667AB', '#00563f', '#6082B6', '#f26b5b', '#60a0a3', '#8b79b1', '#007558', '#b2ec5d',  '#a14d3a',  '#243f6c', '#bcb8c8', '#F6D194', '#FF3EA5', '#E4007C', '#4A0404', '#354957',' #c84186', '#E34234', '#33FFCC', '#c99aa0', '#682860', '#adbbb2' ,'#f9f5ec'];

// Filling background color to all HTML element using loop and colorArr Arrray
for (let i = 0; i < colors.length; i++) {
    colors[i].style.backgroundColor = colorArr[i];
}

// Passing clicked element's rgb color into the Function
for (let i = 0; i < colorArr.length; i++) {
    colors[i].addEventListener('click', ()=> {
        convertRgb(window.getComputedStyle(colors[i]).backgroundColor);
        const colorName = colors[i];
        const boldColorName = colorName.innerText.bold();
        displayText.innerHTML = boldColorName + ' is copied to your clip board';

    });
}



// Function Converts rbg Color into Hex Color code
let rgbcolor1;
function convertRgb(rgb) {
    var separator = rgb.indexOf(",") > -1 ? "," : " ";
  
  
    rgb = rgb.substr(4).split(")")[0].split(separator);
  
    var r = (+rgb[0]).toString(16),
      g = (+rgb[1]).toString(16),
      b = (+rgb[2]).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    rgbcolor1 = "#" + r + g + b;
    console.log(rgbcolor1);
    copyToClipboard(rgbcolor1)
}


// Funtion to copy the color code to clip board
function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}