let container = document.querySelector('.container');

// CREATE 16 X 16 DIVS OR 256 DIVS
for(let i = 0; i < 256; i++) {
    let divs = document.createElement('div');
    divs.classList.add('squares');
    container.appendChild(divs);
};

