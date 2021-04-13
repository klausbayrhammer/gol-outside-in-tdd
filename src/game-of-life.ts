import calculateAliveNeighbours from "./calculate-alive-neighbours";
import calculateNextState from "./calculate-next-state";

export enum CellState {
    Alive = "X",
    Dead = "O",
}

export default class GameOfLife {
    private board: CellState[][];

    constructor(private length: number, private height: number) {
        this.board = [...Array(height)].map(() =>
            [...Array(length)].map(() => CellState.Dead)
        );
    }

    iterate() {
        this.board = this.board.map((row, y) =>
            row.map((column, x) => {
                const aliveNeighbours = calculateAliveNeighbours(x, y, this.board);
                return calculateNextState(column, aliveNeighbours)
            })
        )
    }

    setCellState(x: number, y: number, cellState: CellState) {
        this.board[x][y] = cellState;
    }

    currentBoard() {
        return this.board;
    }
}
