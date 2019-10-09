class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = "x";
        this.numberOfMoves = 0;
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] !== null)
            return;

        this.field[rowIndex][columnIndex] = this.currentPlayerSymbol;
        this.currentPlayerSymbol = this.currentPlayerSymbol == "x" ? "o" : "x";
        this.numberOfMoves++;
    }

    isFinished() {
        return this.checkTheField() !== "playing";
    }

    getWinner() {
        let res = this.checkTheField();
        if (res === "x" || res === "o")
            return res;

        return null;
    }

    noMoreTurns() {
        return this.numberOfMoves === 9;
    }

    isDraw() {
        let res = this.checkTheField();
        return  res == "draw";
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }

    checkTheField() {
        if (this.numberOfTurns < 5)
            return "playing";

        const f = this.field;
        let winLines = 
        [   f[0][0] + f[0][1] + f[0][2],
            f[1][0] + f[1][1] + f[1][2],
            f[2][0] + f[2][1] + f[2][2],
            f[0][0] + f[1][0] + f[2][0],
            f[0][1] + f[1][1] + f[2][1],
            f[0][2] + f[1][2] + f[2][2],
            f[0][0] + f[1][1] + f[2][2],
            f[0][2] + f[1][1] + f[2][0]   ]
        .filter(line => line === "xxx" || line === "ooo");
        
        if (winLines.length > 0)
            return winLines[0][0];

        return this.numberOfMoves === 9 ? "draw" : "playing";
    }
}

module.exports = TicTacToe;
