let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', (e) => {
  const keyStroke = {
    ArrowUp: () => {
      if (lastInputDirection.y !== 0) return
      inputDirection = { x: 0, y: -1 }
    },
    ArrowDown: () => {
      if (lastInputDirection.y !== 0) return

      inputDirection = { x: 0, y: 1 }
    },
    ArrowLeft: () => {
      if (lastInputDirection.x !== 0) return
      inputDirection = { x: -1, y: 0 }
    },
    ArrowRight: () => {
      if (lastInputDirection.x !== 0) return
      inputDirection = { x: 1, y: 0 }
    }
  }

  const keyPress = keyStroke[e.key]
  keyPress()
})
export const getInputDirection = () => {
  lastInputDirection = inputDirection
  return inputDirection
}
