'use strict';
// please do not delete the 'use strict' line above

/* Decimal (RGB) code 
= all the colors from the combination of the Red, Green and Blue colors.
R,G,B - 8 bits each, integer values from 0 to 255.

ex:
Black (0,0,0) 
White (255,255,255)
Red (255,0,0)
Orange (255,165,0)

Possible combinations: 256*256*256=16777216

/* 1) Math.random + rgb code
Source: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
*/ 

// function random(number) {
//   return Math.floor(Math.random() * (number+1));
// }

// function changeColor() {
//   const randomColor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//   document.body.style.backgroundColor = randomColor;
// }

// document.getElementById('color-button').addEventListener('click', changeColor)


/* Hexadecimal code

10 decimal digits (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) + the first six letters of the English alphabet (A, B, C, D, E, F)
(The letters are used to represent the values 10, 11, 12, 13, 14 and 15 each in one single symbol)
=> base-16

ex: Black 	#000000
White: 	#FFFFFF
Red: #FF0000
Orange: 	#FFA500
*/ 


/* 2) Math.random + hex color
Source: https://css-tricks.com/snippets/javascript/random-hex-color/ 
*/


let randomColor = Math.floor(Math.random()*16777216).toString(16);

function changeColor2(){
  const randomColor = Math.floor(Math.random()*16777216).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

document.getElementById('color-button').addEventListener('click', changeColor2)


/*  3) Lodash _.random + rgb color
Source: http://www.tutorialsavvy.com/2015/02/random-number-generator-using-lodash-utility.html/
*/

/*
function changeColor3() {
  let red = _.random(0, 255);
  let green = _.random(0, 255);
  let blue = _.random(0, 255);
  document.body.style.backgroundColor = "rgb(" + red +","+ green + ","+ blue + ")";
}

document.getElementById('color-button').addEventListener('click', changeColor3)

*/
