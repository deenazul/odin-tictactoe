const Player = (sign) => {
    this.sign = sign
    const getSign = () => {
        return sign;
    };
    return getSign;
}

const playerX = Player('X');
const playerO = Player('O');
let currentPlayer = playerX;

const gameboard = () => {
    // cell hold value rep either X, O, null
    // 2d array 3 col 3 row 
    const board = Array(3).fill().map(() => Array(3).fill(null))

    //function to renderboard w dom
    const renderBoard = () => {
        const boardElement = document.getElementById('board')
        boardElement.innerHTML = "";
        
        //looping to create cell for grid
        //append x o empty on cell text content
        //addeventlistener click handlecellclick(i,j)
        //board append cell
        board.forEach((row,i) => {
            row.forEach((cell, j) => {
                const cellElement = document.createElement('div');
                cellElement.classList.add('cell');
                cellElement.dataset.row = i;
                cellElement.dataset.col = j;
                cellElement.textContent = 'X' ? 'O' : '';
                cellElement.addEventListener('click', () => handleCellClick(i,j))
                boardElement.appendChild(cellElement)
            })
        })
    }


    //handle cell click: update and check winner
    
    const handleCellClick = (row, col) => {
        if (board[row][col] !== null) {
            return;
        }
        board[row][col] = currentPlayer.getSign();
        renderBoard();                                                                                                                                 
        if (checkWinner()) {
            alert(`${currentPlayer.getSign()} wins`)
            resetGame();
        } else if (checkDraw()){
            alert("Its a draw");
            resetGame();
        }
        else {
           currentPlayer = currentPlayer === playerX ? playerO : playerX;
        }
    }
    //if board[row][cell]!==null then return
    //mark playerx/o = board[row][col]

    //check winner//else currentplayer switch
    const checkWinner = (board) => {
        const winCombos = [
            [0,1,2],
            [0,3,6],
            [3,4,5],
            [6,7,8],
            [1,4,7],
            [2,4,6],
            [2,5,8],
            [0,4,8]
        ]
        for (let i=0; i< winCombos.length; i++) {
            const [a, b, c] = winCombos[i];
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return true;
            }
        }
        return false;
    }

    const checkDraw = () => {
        return board.every(row => row.every(cell => cell !== null));
    }
}