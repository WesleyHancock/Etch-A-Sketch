let container = document.querySelector('.container');

// CREATE 16 X 16 DIVS OR 256 DIVS
for(let i = 0; i < 256; i++) {
    let divs = document.createElement('div');
    divs.classList.add('squares');
    container.appendChild(divs);
};

// CREATE A GRID USING FLEXBOX
container.style.display = 'flex';
container.style.flexDirection = 'row';
container.style.flexWrap = 'wrap';
container.style.maxWidth = '480px';
container.style.maxHeight = '480px';


let squares = document.querySelectorAll('.squares');

squares.forEach(function(square) {
    square.style.outline = '1px solid black';
    square.style.width = '30px';
    square.style.height = '30px';
    square.addEventListener('mouseover', function() {
        // console.log('entered');
        this.classList.add('black');
    });
    // square.addEventListener('mouseout', function() {
    //     console.log('left');
    //     // this.classList.toggle('black');
    // });
});
