import {mocked} from 'ts-jest/utils';
import GameOfLife, {CellState} from "./game-of-life";
import calculateAliveNeighbours from './calculate-alive-neighbours';
import calculateNextState from './calculate-next-state';

jest.mock('./calculate-alive-neighbours');
jest.mock('./calculate-next-state');

describe('game-of-life.ts', function () {

    const mockedCalculateAliveNeighbours = mocked(calculateAliveNeighbours);
    const mockedCalculateNextState = mocked(calculateNextState);

    describe('initialize the board', function () {
        it('initializes an board without cells', () => {
            const gameOfLife = new GameOfLife(0, 0);

            expect(gameOfLife.currentBoard()).toEqual([]);
        });

        it('initializes a board with multiple rows', function () {
            const gameOfLife = new GameOfLife(1, 1);
            expect(gameOfLife.currentBoard()).toEqual([[CellState.Dead]])
        });
    });

    describe('seed the board', function () {
        it('sets the state of a cell to a given value', function () {
            const gameOfLife = new GameOfLife(1, 1);

            gameOfLife.setCellState(0, 0, CellState.Alive)

            expect(gameOfLife.currentBoard()).toEqual([[CellState.Alive]])
        });
        it.todo('throws an error if the coordinates are out of bounds');
    });

    describe('iterate the board', function () {
        it('iterates a single cell', function () {
            const aliveNeighbours = 1;
            const gameOfLife = new GameOfLife(1, 1);

            mockedCalculateAliveNeighbours.mockReturnValue(aliveNeighbours)
            mockedCalculateNextState.mockReturnValue(CellState.Alive)

            gameOfLife.iterate();

            expect(mockedCalculateAliveNeighbours).toHaveBeenCalledWith(0, 0, [[CellState.Dead]]) // how to fix this!?
            expect(mockedCalculateNextState).toHaveBeenCalledWith(CellState.Dead, aliveNeighbours);
            expect(gameOfLife.currentBoard()).toEqual([[CellState.Alive]]);
        });

        it('iterates multiple cells', function () {
            const aliveNeighbours = 1;
            const gameOfLife = new GameOfLife(2, 1);
            mockedCalculateAliveNeighbours.mockReturnValue(aliveNeighbours)
            mockedCalculateNextState.mockReturnValue(CellState.Alive)

            gameOfLife.iterate();

            expect(mockedCalculateNextState).toHaveBeenNthCalledWith(1, CellState.Dead, aliveNeighbours)
            expect(mockedCalculateNextState).toHaveBeenNthCalledWith(2, CellState.Dead, aliveNeighbours)
            expect(gameOfLife.currentBoard()).toEqual([[CellState.Alive, CellState.Alive]])
        });
    });
});

