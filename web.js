const gridContainer = document.querySelector('.grid-container');
const clearBtn = document.getElementById('clearBtn');
const resizeBtn = document.getElementById('resizeBtn');
const gridSizeInput = document.getElementById('grid-size'); 

const baseColor ='#E6D9A2';

function darkenColor(color, percent){
    let r = parseInt(color.slice(1,3),16);
    let g = parseInt(color.slice(3,5),16);
    let b = parseInt(color.slice(5,7),16);

    r = Math.floor(r * (1 - percent));
    g = Math.floor(g * (1 - percent));
    b = Math.floor(b * (1 - percent));

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

}

function  createGrid(size){
    const totalSquares = size*size;

    const squareSize = 500 / size;
    
    gridContainer.innerHTML = '';

    gridContainer.style.gridTemplateColumns = 'repeat(${size},  1fr)';

    for (let i = 0; i< totalSquares; i++){
        const square = document.createElement('div');
        square.classList.add('grid-square');

        square.style.width =`${squareSize}px`;
        square.style.height =`${squareSize}px`;
    
        square.dataset.hoverCount = 0;

        square.addEventListener('mouseover', () => {
            // square.style.backgroundColor = '#E6D9A2';
            const currentCount = parseInt(square.dataset.hoverCount, 10);

            if (currentCount < 10){
                const newColor = darkenColor(baseColor, (currentCount + 1) * 0.1);
                square.style.backgroundColor = newColor;
                square.dataset.hoverCount = currentCount + 1;
            }
        });


        gridContainer.appendChild(square);

   }
}

function clearGrid(){
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
        square.style.backgroundColor = '';
    });
}

function resizeGrid(){
    const newSize = parseInt(gridSizeInput.value);
    createGrid(newSize);
}



clearBtn.addEventListener('click', clearGrid);
resizeBtn.addEventListener('click', resizeGrid);

createGrid(16);