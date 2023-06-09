let container = document.querySelector('.container');

// CHOICE SLIDER
let sliderValue = document.querySelector('#sliderValue');
let slider = document.querySelector('#slider');
let input = null;

// CREATE A GRID USING FLEXBOX
let containerWidth = container.style.maxWidth = '480px';
let containerHeight = container.style.maxHeight = '480px';

// Display the value to the slider
slider.addEventListener('input', function() {
    sliderValue.innerText = `${this.value} X ${this.value}`;
    grid(slider.value);
});

function grid(a) {
    let totSquares = parseInt(a * a);

    for(let i = 0; i < totSquares; i++) {
        let divs = document.createElement('div');
        divs.classList.add('squares');
        container.appendChild(divs);
        let squareWidth = parseInt(containerWidth) / totSquares;
        let squareHeight = parseInt(containerHeight) / totSquares;
    };

    let squares = document.querySelectorAll('.squares');


    squares.forEach(function(square) {
        square.style.outline = '0.1px solid black';

        square.style.width = squareWidth + 'px';
        square.style.height = squareHeight + 'px';
        // square.addEventListener('mouseover', function() {
        //     // console.log('entered');
        //     this.classList.add('black');
        // });
        // square.addEventListener('mouseout', function() {
        //     console.log('left');
        //     // this.classList.toggle('black');
        // });
    });

};

// let sliderInput = function() {
//     // percentage formula to make the min value 0 and the max 100
//     // let value = (this.value - this.min) / (this.max-this.min) * 100;
//     // 16 = 0
//     // 64 = 100
//     sliderValue.innerText = this.value;
//     return this.value;
// }

let log = function(a) {
    // console.log(parseInt(a));
    let num = parseInt(a);
    let totalDivs = a * a;
    // for(let i = 256; i < totalDivs; i++) {
    //     let divs = document.createElement('div');
    //     divs.classList.add('squares');
    //     container.appendChild(divs);
    // };
};


// need sliderInput * sliderInput


// CREATE 16 X 16 DIVS OR 256 DIVS
// for(let i = 0; i < 256; i++) {
//     let divs = document.createElement('div');
//     divs.classList.add('squares');
//     container.appendChild(divs);
// };


// let squares = document.querySelectorAll('.squares');

// squares.forEach(function(square) {
//     square.style.outline = '1px solid black';
//     square.style.width = '30px';
//     square.style.height = '30px';
//     // square.addEventListener('mouseover', function() {
//     //     // console.log('entered');
//     //     this.classList.add('black');
//     // });
//     // square.addEventListener('mouseout', function() {
//     //     console.log('left');
//     //     // this.classList.toggle('black');
//     // });
// });

