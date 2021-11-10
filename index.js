


const hiddenImageWrappers = document.querySelectorAll('.hidden-image-wrapper')
const hiddenImages = document.querySelectorAll('.hidden-image')



hiddenImageWrappers.forEach(image => {
    image.addEventListener('mouseover', becomeVisible)
    image.addEventListener('mouseleave', becomeInvisible)
})

function becomeVisible(e) {
    e.target.firstChild.style = 'visibility: visible'
    console.log(e.target.firstChild)
    }




function becomeInvisible(e) {
    e.target.firstChild.style = 'visibility: invisible'
}


//This is the function referenced in the readme that mysteriously obfuscated all the styling on the targeted element after this function was
//invoked. 
function addImageClick(e) {
if (e.target.id = 'taco-image') {
    imagesClicked.tacoClicked = true
    console.log(imagesClicked.tacoClicked)
}
}




