const Player = (sign) => {
    this.sign = sign

    const getSign = () => {
        return sign;
    };

    return getSign;
}

const playerX = Player('X');
const playerO = Player('O');

const gameboard = () => {
    // cell hold value rep either X, O, null
    // 2d array
    const board = Array(9).fill().map(() => Array(9).fill(null))
}