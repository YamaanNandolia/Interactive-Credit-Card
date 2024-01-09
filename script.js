/**
* flip: When the user clicks the appropriate buttons on the card it flips to show/hide the info
*/
flip = () => {
    document.getElementById('card').classList.toggle('flipped')
    document.querySelector('#front .reflection').classList.toggle('move')
    document.querySelector('#back .reflection').classList.toggle('move')
} //end of flip()

document.getElementById('show-btn').addEventListener('click', flip) //click listener on the appropriate button
document.getElementById('hide-btn').addEventListener('click', flip) //click listener on the appropriate button