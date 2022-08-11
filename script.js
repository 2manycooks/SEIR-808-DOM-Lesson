// what is the DOM?
// Document Object Model

// utilize methods inside the document object


// grab things by ID

let myDiv = document.getElementById('hello')

console.log(myDiv)

// grab things by class

let theSquares = document.getElementsByClassName('square')

console.log(theSquares[0])
console.log(theSquares[1])

// grab things by tag

let theDivs = document.getElementsByTagName('div')

console.log(theDivs[0])
console.log(theDivs[1])

// querySelector

// querySeletor grabs the first matching element

let myDiv2 = document.querySelector('#gb')

console.log(myDiv2)

// querySelectorAll grabs all matching elements, returns a NodeList

let mySquaresQuery = document.querySelectorAll('.square')

console.log(mySquaresQuery)

// querySelector via tag

let myDivsQuery = document.querySelectorAll('div')

console.log(myDivsQuery[0])
console.log(myDivsQuery[1])

// changing styles
// every HTML element has a 'style' attribute, whose possible values are ALL CSS rules.

myDiv.style.backgroundColor = 'chartreuse'
myDiv2.style.height='300px'

// changing content

// changing innerText

myDiv.innerText = "I love SEI!"

// changing innerHTML

myDiv2.innerHTML = "<h2> I love GA</h2>"

// changing multiple elements at once!

// this won't work:

// theSquares.style.border = "2px dashed black"

// we need to iterate!

for (let i=0; i < theSquares.length; i++) {
    theSquares[i].style.border = "2px dashed black"
}

// reminder: getElements and querySelectorAll returns HTMLCollections & NodeLists, not arrays!

// Array.from() will turn these things into arrays.

// getting and setting a property directly

let photo = document.querySelector('img')

// get using property
console.log(photo.src)

// set using property
photo.src = "https://picsum.photos/200/200"

// we can use a method called getAttribute

photo.getAttribute("src")

// first we get, then we set

photo.setAttribute("src", "https://placebear.com/200/200")

// grabbing by CSS selectors

console.log(document.querySelector('div').className)

console.log(document.querySelector('div').classList)

// adding to classlist

let helloDiv = document.querySelector('div')

console.log(helloDiv.classList[0])

helloDiv.classList.add('yellow')
console.log(helloDiv.classList)

// check to see if a value exists
console.log(helloDiv.classList.contains('taco'))

// removing a class
helloDiv.classList.remove('yellow')
console.log(helloDiv.classList)
console.log(helloDiv.className)

// DOM Events

// Event Listener
// can also be called event handler

// 3 different ways to achieve events

// inline (ugly)

// assign via a property (bad)

let btn = document.querySelector('#btn')

let number = 0

// via the addEventListener method (good)

helloDiv.addEventListener("click", function(e) {
    console.log(e)
})
// event.preventDefault()

let input = document.querySelector('#input')

btn.addEventListener("click", function(e) {
    console.log(input.value)
})

input.addEventListener("keyup", function(e) {
    console.log(e.target.value)
})
