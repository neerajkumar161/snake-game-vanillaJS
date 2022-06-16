import { getInputDirection } from './input.js'

export const SNAKE_SPEED = 10
const snakeBody = [{ x: 11, y: 11 }]
let newSegments = 0

export const update = () => {
  addSegments()
  const { x, y } = getInputDirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    // Moving snake one box to its parent box location
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  snakeBody[0].x += x
  snakeBody[0].y += y
}

export const draw = (gameBoard) => {
  gameBoard.innerHTML = ''
  snakeBody.forEach((segment) => {
    const snakeEl = document.createElement('div')
    snakeEl.style.gridRowStart = segment.y
    snakeEl.style.gridColumnStart = segment.x
    snakeEl.classList.add('snake')
    gameBoard.appendChild(snakeEl)
  })
}

export const expandSnake = (amount) => {
  newSegments += amount
}

export const onSnake = (foodPosition, ignoreHead = false) =>
  snakeBody.some((segment, idx) => {
    if (ignoreHead && idx === 0) return false
    return segment.x === foodPosition.x && segment.y === foodPosition.y
  })

const addSegments = () => {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }

  newSegments = 0
}

export const getSnakeHead = () => snakeBody[0]

export const snakeIntersection = () => onSnake(snakeBody[0], true)
