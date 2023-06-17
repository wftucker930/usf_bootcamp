const memeLink = document.querySelector('#memeLink');
const topText = document.querySelector('#topText');
const bottomText = document.querySelector('#bottomText');

memeLink.addEventListener('change', function() {
        console.log(memeLink.value);
        const memeImage = document.querySelector('#image');
        memeImage.src = memeLink.value;
})

topText.addEventListener('change', function() {
        const topDisplay = document.querySelector('#top');
        topDisplay.innerText = topText.value;
})
    
bottomText.addEventListener('change', function() {
        const bottomDisplay = document.querySelector('#bottom');
        bottomDisplay.innerText = bottomText.value;
})
