require('./test_helper');

const Game = require('../lib/game');

describe('Game', () => {
  describe('Grid', () => {
    let game = new Game(4,5);

    it('should create a 4x5 grid', () => {
      expect(game.grid.length).to.equal(5); // y
      expect(game.grid[0].length).to.equal(4); // x
    });

    it('should start out as a blank grid', () => {
      for(let row of game.grid) {
        for(let cell of row) {
          expect(cell).to.equal(0);
        }
      }
    });

    it('should be able to toggle cell states', () => {
      let x = 1;
      let y = 1;

      expect(game.cell(x, y)).to.equal(0);

      game.toggleCell(x, y);

      expect(game.cell(x, y)).to.equal(1);

      game.toggleCell(x, y);

      expect(game.cell(x, y)).to.equal(0);
    });
  });

  describe('Cell', () => {
    let game = new Game(4,5);
    game.grid = [
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];

    it('should be able to die', () => {

    });
  });

});