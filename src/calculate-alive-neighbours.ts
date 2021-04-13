import {CellState} from "./game-of-life";

export default function calculateAliveNeighbours(cellX: number, cellY: number, board: CellState[][]): number {
    const lowerXBound = Math.max(cellX - 1, 0);
    const upperXBound = Math.min(cellX + 1, board[0].length - 1);
    const lowerYBound = Math.max(cellY - 1, 0);
    const upperYBound = Math.min(cellY + 1, board.length - 1);

    const relevantNeighbours = board.flatMap((row, x) =>
        row.filter((cell, y) => {
            if (x === cellX && y === cellY) {
                return false
            }
            return lowerXBound <= x && x <= upperXBound &&
                lowerYBound <= y && y <= upperYBound;
        })
    )
    return relevantNeighbours
        .filter(cellState => cellState === CellState.Alive)
        .length
}
