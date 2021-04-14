import {CellState} from "./game-of-life";

export default function calculateAliveNeighbours(x: number, y: number, board: CellState[][]): number {
    return [
        board[x-1]?.[y-1],
        board[x-1]?.[y],
        board[x-1]?.[y+1],

        board[x]?.[y-1],
        board[x]?.[y+1],

        board[x+1]?.[y-1],
        board[x+1]?.[y],
        board[x+1]?.[y+1]
    ].filter(cellState => cellState === CellState.Alive)
        .length
}
