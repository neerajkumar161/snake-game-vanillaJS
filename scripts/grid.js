const GRID_SIZE = 21

export const randomGridPos = () => ({
  x: Math.floor(Math.random() * GRID_SIZE) + 1,
  y: Math.floor(Math.random() * GRID_SIZE) + 1
})

export const outsiderGrid = (position) =>
  position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE
