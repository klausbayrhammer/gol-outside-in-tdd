import calculateAliveNeighbours from "./calculate-alive-neighbours";
import {CellState} from "./game-of-life";

describe('calculate-alive-neighbours.ts', function () {
    it('caculates neibours within a grid correctly', function () {
        const boardWithOnlyDeadCells = [
            [CellState.Dead, CellState.Dead, CellState.Dead],
            [CellState.Dead, CellState.Dead, CellState.Dead],
            [CellState.Dead, CellState.Dead, CellState.Dead]
        ]
        expect(calculateAliveNeighbours(1, 1, boardWithOnlyDeadCells)).toEqual(0)
    });
    it('caculates neibours within a single living neighnour', function () {
        const boardWithOnlyDeadCells = [
            [CellState.Dead, CellState.Dead, CellState.Alive],
            [CellState.Dead, CellState.Dead, CellState.Dead],
            [CellState.Dead, CellState.Dead, CellState.Dead]
        ]
        expect(calculateAliveNeighbours(1, 1, boardWithOnlyDeadCells)).toEqual(1)
    });

    it('test an element on the edge of the grid', function () {
        const boardWithOnlyDeadCells = [
            [CellState.Dead, CellState.Alive],
            [CellState.Alive, CellState.Alive]
        ];
        expect(calculateAliveNeighbours(0, 0, boardWithOnlyDeadCells)).toEqual(3)
    });
});
