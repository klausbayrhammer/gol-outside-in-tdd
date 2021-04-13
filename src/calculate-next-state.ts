import {CellState} from "./game-of-life";

export default function calculateNextState(cellState: CellState, numberOfAliveNeighbours: number): CellState {
    if(numberOfAliveNeighbours === 2) {
        return cellState;
    }
    if(numberOfAliveNeighbours === 3) {
        return CellState.Alive
    }
    return CellState.Dead;

}
