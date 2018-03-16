class Game {

  constructor(x_size, y_size) {
    this.grid = new Array(y_size); // y size

    for(let y = 0; y < this.grid.length; y++) {
      this.grid[y] = new Array(x_size); // x size
      let row = this.grid[y];
      for(let x = 0; x < row.length; x++) {
        this.grid[y][x] = 0;
      }
    }
  }

  cell(x, y) {
    return this.grid[x][y];
  }

  toggleCell(x, y) {
    if(this.cell(x, y) == 0) {
      this.grid[y][x] = 1;
    } else {
      this.grid[y][x] = 0;
    }
  }

}

module.exports = Game;