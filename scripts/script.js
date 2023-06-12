let container = document.querySelector('.container');

let canvas = document.querySelector('.canvas');
let canvasWidth = canvas.style.width = '480px';
let canvasHeight = canvas.style.height = '480px';

let sliderValue = document.querySelector('#sliderValue');

let slider = document.querySelector('#slider');
let value = null;
let color = null;

let clearBtn = document.querySelector('.clear');

// color picker
let colorPicker = document.querySelector('#colorPicker');
colorPicker.addEventListener('input', function(e) {
    color = e.target.value;
});

function makeGrid(x) {

    // first need to clear old drawings
    // document.querySelectorAll('div .square').remove();
    canvas.innerText = '';

    // Create amount of divs
    for(let i = 0; i < (x * x); i++) {
        let divs = document.createElement('div');
        divs.style.width = parseInt(canvasWidth) / x + 'px';
        divs.style.height = parseInt(canvasHeight) / x + 'px';
        divs.style.backgroundColor = 'rgb(244, 244, 244)';
        divs.style.outline = '0.1px solid rgb(196, 196, 196)';
        divs.addEventListener('dragover', squareColor);
        divs.classList.add('square');
        canvas.appendChild(divs);
    }

    function squareColor(event) {
        // console.log('entered');
        if(color !== null) {
            this.style.backgroundColor = `${color}`;
        } else {
            this.style.backgroundColor = `rgb(0, 0, 0)`;
        };
    };

    return;

};

function clear() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(function(square) {
        square.style.backgroundColor = 'rgb(244, 244, 244)';
    });
};

function displaySlider() {
    sliderValue.innerText = `${slider.value} X ${slider.value}`;
    value = slider.value;
    makeGrid(value);
};

// Display slider values on the slider
slider.addEventListener('change', displaySlider);
clearBtn.addEventListener('click', clear);