let container = document.querySelector('.container');

let canvas = document.querySelector('.canvas');
let canvasWidth = canvas.style.width = '480px';
let canvasHeight = canvas.style.height = '480px';

let sliderValue = document.querySelector('#sliderValue');

let slider = document.querySelector('#slider');
let value = null;

function retrieveSliderValue(x) {

    // first need to clear old drawings
    // document.querySelectorAll('div .square').remove();
    canvas.innerText = '';


    // Create amount of divs
    for(let i = 0; i < x * x; i++) {
        let divs = document.createElement('div');
        divs.classList.add('squares');
        divs.style.width = parseInt(canvasWidth) / x + 'px';
        divs.style.height = parseInt(canvasHeight) / x + 'px';
        divs.style.outline = '0.1px solid black';
        canvas.appendChild(divs);
    }

    let squares = document.querySelectorAll('.squares');
    squares.forEach(function(square) {
        square.addEventListener('dragover', function() {
            // console.log('entered');
            this.classList.add('black');
        });
        // square.addEventListener('mouseout', function() {
        //     console.log('left');
        //     // this.classList.toggle('black');
        // });
    });

    return;

}

function displaySlider() {
    sliderValue.innerText = `${slider.value} X ${slider.value}`;
    value = slider.value;
    retrieveSliderValue(value);
}

// Display slider values on the slider
slider.addEventListener('change', displaySlider);

