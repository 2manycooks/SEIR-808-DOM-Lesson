// you can grab HTML elements using document.getElementBy all sorts of things. here are some examples.

// grab by ID
const myDiv = document.getElementById('hello')

// console.log(myDiv)

// grab by Class (method uses ClassName)
const theSquares = document.getElementsByClassName('square')

// console.log(theSquares[0])
// console.log(theSquares[1])

// grab by HTML tag (div, p, h1, etc
const theDivs = document.getElementsByTagName('div')

// console.log(theDivs[0])
// console.log(theDivs[1])

// you can also grab by CSS selectors (.class, #id, etc)

const myDiv2 = document.querySelector('#gb')

// console.log(myDiv2)

// you can grab multiple things with querySelectorAll

const mySquares2 = document.querySelectorAll(".square")

// console.log(mySquares2)

// you can then change DOM elements to affect the webpage!

myDiv.style.backgroundColor= 'chartreuse'
myDiv.style.height= '300px'

myDiv.innerText = 'I love SEI'
myDiv2.innerHTML = "<h2>I love GAbe</h2>"

// but what if we want to change multiple things at once?

//this won't work! (don't forger to comment this one out or it'll break!)
// theSquares.style.border = "2px dashed black"

// loops are the 🔑
for(let i = 0; i < theSquares.length; i++) {
    theSquares[i].style.border = 'dashed 2px black'
}



// getElements return HTMLCollections. querySelectorAll returns a NodeList.
// the difference is that HTMLCollections are dynamic, and NodeLists are static.

// changing element attributes

const photo = document.querySelector("img")

// get using property
// console.log(photo.src)

// set using property
photo.src = "https://picsum.photos/200/200"

// get and set with the getAttribute and setAttribute methods
photo.getAttribute('src')
photo.setAttribute('src', "https://placebear.com/200/200")

// you can access classes of an html object using className or classList for multiple classes
const helloDiv = document.querySelector('div');

console.log(helloDiv.classList)

console.log(helloDiv.classList[0]);

// you can even change the classes of an element!
helloDiv.classList.add('yellow')

helloDiv.classList.remove('yellow')

// DOM EVENTS

const myFunction = function(e) {
    console.log(e.target)
}

const mySecondFunction = function(e) {
    console.log('we clickin')
}

helloDiv.addEventListener("click", myFunction)
helloDiv.addEventListener("click", mySecondFunction)

helloDiv.removeEventListener('click', myFunction)


document.addEventListener('DOMContentLoaded', function(e) {
    'content loaded'
})