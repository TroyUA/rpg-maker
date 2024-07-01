import { GameObject } from './gemeObject'
import { DOWN, LEFT, RIGHT, UP } from './input'

export class Hero extends GameObject {
  constructor({ game, sprite, position, scale }) {
    super({ game, sprite, position, scale })
  }

  update() {
    if (this.game.input.lastKey === UP) {
      this.position.y--
    } else if (this.game.input.lastKey === DOWN) {
      this.position.y++
    } else if (this.game.input.lastKey === LEFT) {
      this.position.x--
    } else if (this.game.input.lastKey === RIGHT) {
      this.position.x++
    }

    console.log(this.position)
  }
}