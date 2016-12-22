const Canvas = require('canvas')
const fs = require('fs-extra')

const canvas = new Canvas(1500,1500)
const context = canvas.getContext('2d')
const Image = Canvas.Image

const files = fs.readdirSync('./data/imgs')

const createCoords = () => {
  const coords = []
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      const x = i * 100
      const y = j * 100
      coords.push({
        x: x,
        y: y
      })
    }
  }
  return coords
}

const drawPicAtCoord = (coord, index) => {
  if (index < files.length - 1) {
    const img = new Image
    img.src = fs.readFileSync(`./data/imgs/file${index}.jpeg`)
    context.drawImage(img, coord.x, coord.y, 100, 100)
  }
}

createCoords().map(drawPicAtCoord)

fs.writeFileSync('output.png', canvas.toBuffer())

