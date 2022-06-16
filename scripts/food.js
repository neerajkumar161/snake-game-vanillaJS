import { randomGridPos } from './grid.js'
import { expandSnake, onSnake } from '../snake.js'

export const getRandomFoodPos = () => {
  let newFoodPos
  while (newFoodPos == null || onSnake(newFoodPos)) {
    newFoodPos = randomGridPos()
  }

  return newFoodPos
}

let food = getRandomFoodPos()
const EXPANSION_RATE = 1

export const update = () => {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPos()
  }
}

export const draw = (gameBoard) => {
  const foodEl = document.createElement('div')
  foodEl.style.gridRowStart = food.y
  foodEl.style.gridColumnStart = food.x
  foodEl.classList.add('food')
  gameBoard.appendChild(foodEl)
}


