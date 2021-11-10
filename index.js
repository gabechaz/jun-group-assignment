
let imagesClicked = {
    tacoClicked: false,
    burritoClicked: false,
    stackerClicked: false,
    nachosClicked: false
}

const hiddenImageWrappers = document.querySelectorAll('.hidden-image-wrapper')
const hiddenImages = document.querySelectorAll('.hidden-image')

hiddenImages.forEach(image => {
    image.addEventListener('click', addImageClick)
})

hiddenImageWrappers.forEach(image => {
    image.addEventListener('mouseover', becomeVisible)
    image.addEventListener('mouseleave', becomeInvisible)
})

function becomeVisible(e) {
    e.target.firstChild.style = 'visibility: visible'
}

function becomeInvisible(e) {
    e.target.firstChild.style = 'visibility: invisible'
}

function addImageClick(e) {
if (e.target.id = 'taco-image') {
    imagesClicked.tacoClicked = true
    console.log(imagesClicked.tacoClicked)
}
}




// Ran into some trouble here with making the dollar menu items appear when you moused 
//over them and disappear when you moused off. An element with a visibility: none styling can't
//be the subject of a mouseover event. First I tried wrapping the hidden img elements in span tags
// and applying the mouseover event to the parent span and then programatically styling the child elements. 
// This proved ineffective. Consequently, I have had to add event listeners to each hidden image tag individually;
// a prospect I had been trying to avoid. Ideally I could have just looped over the img tags and added a generic becomeVisible or 
// becomeInvisible event listener function. Alas hidden images can't be moused over. I've left the attempts commented out below so 
// you can at least see that I did attempt to acheieve DRY code. 

// const hiddenImages = document.querySelectorAll('.hidden-image')

// function becomeInvisible(e) {
//     e.target.style = 'visibility: hidden'
// }

// function becomeVisible(e) {
//     e.target.style = 'visibility: visible'
// }

// hiddenImages.forEach(image => {
//     image.addEventListener('mouseleave', becomeInvisible)
// })

// hiddenImages.forEach(image => {
//     image.addEventListener('mouseenter', becomeVisible)
// })