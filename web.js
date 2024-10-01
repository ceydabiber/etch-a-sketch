const gridContainer = document.querySelector('.grid-container');
const clearBtn = document.getElementById('clearBtn');
const resizeBtn = document.getElementById('resizeBtn');
const gridSizeInput = document.getElementById('grid-size'); 

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
    

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#E6D9A2';
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