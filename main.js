import { World } from './script/world'
import { GAME_HEIGHT, GAME_WIDHT, TILE_SIZE } from './script/constants'
import { Hero } from './script/hero'
import { Input } from './script/input'

window.addEventListener('load', () => {
  const canvas = document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = GAME_WIDHT
  canvas.height = GAME_HEIGHT

  class Game {
    constructor() {
      this.world = new World()
      this.hero = new Hero({
        game: this,
        position: { x: 1 * TILE_SIZE, y: 2 * TILE_SIZE },
      })
      this.input = new Input()
    }
    render(ctx) {
      this.hero.update()
      this.world.drawBackground(ctx)
      this.world.drawGrid(ctx)
      this.hero.draw(ctx)
      this.world.drawForeground(ctx)
    }
  }

  const game = new Game()

  function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, GAME_WIDHT, GAME_HEIGHT)
    game.render(ctx)
  }
  requestAnimationFrame(animate)
})
