import { draw as drawFood, update as updateFood } from './food.js'
import { outsiderGrid } from './grid.js'
import { draw, getSnakeHead, snakeIntersection, SNAKE_SPEED, update } from './snake.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
  if (gameOver) {
    if (confirm('You Lost! Press Ok to restart!')) window.location = '/'
    return
  }
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime

  update()
  updateFood()
  checkDeath()
  draw(gameBoard)
  drawFood(gameBoard)
}

window.requestAnimationFrame(main)

const checkDeath = () => {
  gameOver = outsiderGrid(getSnakeHead()) || snakeIntersection()
}
