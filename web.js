const gridContainer = document.querySelector('.grid-container');
const clearBtn = document.getElementById('clearBtn');

function  createGrid(size){
    const totalSquares = size*size;
    
    gridContainer.innerHTML = '';

    for (let i = 0; i< totalSquares; i++){
        const square = document.createElement('div');
        square.classList.add('grid-square');
        gridContainer.appendChild(square);
    

        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = '#E6D9A2';
        });

   }
}

function clearGrid(){
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
        square.style.backgroundColor = '';
    });
}

clearBtn.addEventListener('click', clearGrid);

createGrid(16);