document.getElementById('dice').addEventListener('click', function () {
    const number = Math.ceil(Math.random() * 6);

    const image = document.getElementById('dice');

    if (number == 1) {
        image.src = 'images/one.png'
    }
    else if (number == 2) {
        image.src = 'images/two.png'
    }
    else if (number == 3) {
        image.src = 'images/three.png'
    }
    else if (number == 4) {
        image.src = 'images/four.png'
    }
    else if (number == 5) {
        image.src = 'images/five.png'
    }
    else {
        image.src = 'images/six.png'
    }
})