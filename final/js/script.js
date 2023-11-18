function toggleTheme() {
    var body = document.querySelector('body');
    body.classList.toggle('dark-mode');
}

function toggleFlies() {
    var flies = document.querySelectorAll('.firefly');
    flies.forEach(function (fly) {
        fly.classList.toggle('hidden');
    });
}

function changeImage() {
    var firstImage = document.querySelector('#toggleButton img.first');
    var secondImage = document.querySelector('#toggleButton img.second');
    var firstTree = document.querySelector('#content img.first');
    var secondTree = document.querySelector('#content img.second');

    if (firstImage.style.opacity !== '0') {
        firstImage.style.opacity = '0';
        secondImage.style.opacity = '1';
        firstTree.style.opacity = '0';
        secondTree.style.opacity = '1';
    } else {
        firstImage.style.opacity = '1';
        secondImage.style.opacity = '0';
        firstTree.style.opacity = '1';
        secondTree.style.opacity = '0';
    }

    toggleTheme();
    toggleFlies();
}

document.getElementById("toggleButton").onclick = changeImage;