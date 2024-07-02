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
        sprite: {
          image: document.getElementById('hero1'),
          x: 0,
          y: 11,
          width: 64,
          height: 64,
        },
        position: { x: 1 * TILE_SIZE, y: 2 * TILE_SIZE },
        scale: 0.8,
      })
      this.input = new Input(this)

      this.eventUpdate = false
      this.eventTimer = 0
      this.eventInterval = 60

      this.debug = true
    }

    toggleDebug() {
      this.debug = !this.debug
    }

    render(ctx, deltaTime) {
      this.hero.update(deltaTime)
      this.world.drawBackground(ctx)
      if (this.debug) this.world.drawGrid(ctx)
      this.hero.draw(ctx)
      this.world.drawForeground(ctx)
      if (this.debug) this.world.drawCollisionMap(ctx)

      if (this.eventTimer < this.eventInterval) {
        this.eventTimer += deltaTime
        this.eventUpdate = false
      } else {
        this.eventTimer = this.eventInterval % this.eventTimer
        this.eventUpdate = true
      }
    }
  }

  const game = new Game()

  let lastTime = 0
  function animate(timeStamp) {
    requestAnimationFrame(animate)
    const deltaTime = timeStamp - lastTime
    lastTime = timeStamp

    game.render(ctx, deltaTime)
  }
  requestAnimationFrame(animate)
})
