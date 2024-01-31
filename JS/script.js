const blade = document.querySelector('.blade');
const circle = document.querySelector('.circle');
const body = document.body;

document.querySelector('.switch-btn').addEventListener('click', function() {
    blade.classList.toggle('blade-height');

    // If turning off the lightsaber, reset the background
    if (!blade.classList.contains('blade-height')) {
        resetBackground();
    } else {
        // Change the background image when the lightsaber is turned on
        changeBackground();
    }
});

blade.addEventListener('click', function() {
    // Change the background image immediately when the blade is clicked
    if (blade.classList.contains('blade-height')) {
        changeBackground();
    }

    // Set the circle to be visible
    circle.style.display = 'block';

    // Trigger the animation
    circle.style.animation = 'anim 0.7s linear';

    // Reset the animation and hide the circle after it completes
    circle.addEventListener('animationend', function() {
        circle.style.animation = '';
        circle.style.display = 'none';
    }, { once: true });
});

let backgroundImageUrls = [
    'url("https://lumiere-a.akamaihd.net/v1/images/star-wars-backgrounds-08_c6531d30.jpeg")',
    'url("https://lumiere-a.akamaihd.net/v1/images/image_1921b77b.jpeg")',
    'url("https://lumiere-a.akamaihd.net/v1/images/star-wars-backgrounds-38_d0dbbfb4.jpeg")',
    'url("https://lumiere-a.akamaihd.net/v1/images/star-wars-backgrounds-06_c61e21f4.jpeg")',
    'url("https://lumiere-a.akamaihd.net/v1/images/image_2f7ca5d1.jpeg")',
    'url("https://lumiere-a.akamaihd.net/v1/images/image_8036a7c0.jpeg")'
    // Add more image URLs as needed
];

let usedBackgroundImageUrls = [];

function changeBackground() {
    if (backgroundImageUrls.length === 0) {
        backgroundImageUrls = usedBackgroundImageUrls;
        usedBackgroundImageUrls = [];
    }

    let randomIndex;
    let randomImageUrl;

    do {
        randomIndex = Math.floor(Math.random() * backgroundImageUrls.length);
        randomImageUrl = backgroundImageUrls[randomIndex];
    } while (randomImageUrl === body.style.backgroundImage && backgroundImageUrls.length > 1);

    body.style.backgroundImage = randomImageUrl;

    usedBackgroundImageUrls.push(randomImageUrl);
    backgroundImageUrls.splice(randomIndex, 1);
}

function resetBackground() {
    body.style.backgroundImage = 'none';
}
