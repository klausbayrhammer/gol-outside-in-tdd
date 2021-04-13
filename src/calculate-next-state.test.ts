import calculateNextState from "./calculate-next-state";
import {CellState} from "./game-of-life";

describe('calculate-next-state.ts', function () {
    it('alive cell with one alive neigbour dies', function () {
        expect(calculateNextState(CellState.Alive, 1)).toEqual(CellState.Dead)
    })
    it('alive cell with two alive neighbours stays alive', function () {
        expect(calculateNextState(CellState.Alive, 2)).toEqual(CellState.Alive)
    })
    it('dead cell with two alive neighbours stays dead', function () {
        expect(calculateNextState(CellState.Dead, 2)).toEqual(CellState.Dead)
    })
    it('dead cell with three alive neighbours becomes alive', function () {
        expect(calculateNextState(CellState.Dead, 3)).toEqual(CellState.Alive)
    })
});
