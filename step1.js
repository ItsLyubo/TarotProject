
const slides = document.getElementsByClassName('main-section');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('card').addEventListener('click', function() {
    moveToNext();
});

document.getElementById('mood').addEventListener('click', function() {
    moveToNext();
});

document.getElementById('btnthree').addEventListener('click', function() {
    moveToNext();
});
document.getElementById('btnfour').addEventListener('click', function() {
    moveToNext();
});
document.getElementById('btnfive').addEventListener('click', function() {
    moveToNext();
});



function updatePosition() {
    for (let slide of slides) {
        slide.classList.remove('visible');
        slide.classList.add('hidden');
    }

    slides[slidePosition].classList.add('visible');

}

function moveToNext() {

    if (slidePosition > slides.length - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updatePosition();
}




function createStars() {
    const star = document.createElement('div')
    star.classList.add('star')

    star.style.left = Math.random() * 100 + "vw";
    // star.style.animationDuration = Math.random() * 2 + 3 + "s";


    star.innerHTML = '☆';

    document.body.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, 50000)
}

setInterval(createStars, 400)