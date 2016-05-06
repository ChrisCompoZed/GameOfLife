'use strict'

class Game {
  constructor(cells) {
    if(cells === undefined) throw 'invalid cells'
    this._liveCells = cells
  }

  get liveCells(){
    return this._liveCells
  }

  nextGeneration (arrayIn){
    this._liveCells = this._liveCells.map( function (element,index,cells) {
      if(index !== 0 && index !== cells.length-1) {
          return 'A'
      }
      else return 'D'
    } )
  }
}

module.exports = Game
