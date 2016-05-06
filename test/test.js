'use strict'

var expect = require('chai').expect
var Game = require('../app')

describe('GOL', function() {
  describe('nextGeneration', function() {
    it('has no live cells', function() {
      var errorFunction = function() {
        var game = new Game()
      }
      expect(errorFunction).to.throw('invalid cells')
    })
    it('has no live cells when starting with one', function() {
      var game = new Game(['A'])
      expect(game.liveCells).to.eql(['A'])
      game.nextGeneration()
      expect(game.liveCells).to.eql(['D'])
    })

    it('has no live cells when starting with two dead cells', function() {
      var game = new Game(['D','D'])
      expect(game.liveCells).to.eql(['D','D'])
      game.nextGeneration()
      expect(game.liveCells).to.eql(['D','D'])
    })

    it('has one live cell when starting with three live cells', function() {
      var game = new Game(['A','A', 'A'])
      expect(game.liveCells).to.eql(['A','A','A'])
      game.nextGeneration()
      expect(game.liveCells).to.eql(['D','A','D'])
    })
  })
})
