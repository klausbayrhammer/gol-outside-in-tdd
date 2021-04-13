import GameOfLife, {CellState} from './game-of-life'

it('should be able to initialize and iterate game of life', function () {
    const gameOfLife = new GameOfLife(3, 3);
    gameOfLife.setCellState(1, 0, CellState.Alive);
    gameOfLife.setCellState(1, 1, CellState.Alive);
    gameOfLife.setCellState(1, 2, CellState.Alive);

    gameOfLife.iterate();

    expect(gameOfLife.currentBoard()).toEqual([
        [CellState.Dead, CellState.Dead, CellState.Dead],
        [CellState.Alive, CellState.Alive, CellState.Alive],
        [CellState.Dead, CellState.Dead, CellState.Dead]
    ]);
});
