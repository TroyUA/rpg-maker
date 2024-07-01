import { World } from './script/world'
import { GAME_HEIGHT, GAME_WIDHT } from './script/constants'
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
      this.hero = new Hero({ game: this, position: { x: 2, y: 2 } })
      this.input = new Input()
    }
    render(ctx) {
      this.hero.update()
      this.world.drawGrid(ctx)
      this.hero.draw(ctx)
    }
  }

  const game = new Game()

  function animate() {
    requestAnimationFrame(animate)
    // ctx.clearRect(0, 0, GAME_WIDHT, GAME_HEIGHT)
    game.render(ctx)
  }
  requestAnimationFrame(animate)
})
