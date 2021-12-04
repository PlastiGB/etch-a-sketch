let _grid = 16;
let _color;

const container = document.querySelector('#container');
const button = document.querySelector('.reset');
const checkbox = document.querySelector('#rainbow');

button.addEventListener('click', () => {
    let newGrid = prompt("How many squares per side?");
    _grid = newGrid;

    CreateGrid(_grid);
})


CreateGrid(_grid);


function CreateGrid(Grid)
{
    container.style.gridTemplateColumns = `repeat(${_grid}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${_grid}, 1fr)`;

    while(container.firstChild)
    {
        container.removeChild(container.lastChild);
    }

    for(let i = 0; i < Grid * Grid; i++)
    {
        const square = document.createElement('div');
        square.classList.add('square');

        square.addEventListener('mouseover', () => {
            if(checkbox.checked)
            {
                console.log("true");
                square.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            }
            else
            {
                console.log("false");
                square.style.backgroundColor = 'black';
            }
        })


        container.appendChild(square);
    }
}


