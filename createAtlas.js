const Canvas = require('canvas')
const fs = require('fs-extra')

const canvas = new Canvas(1500,1500)
const context = canvas.getContext('2d')
const Image = Canvas.Image

const files = fs.readdirSync('./data/imgs')

const range = (n) => Array(n).fill({})

const createCoords = (elem, index, array) => {
  const x = index * 100 % 1500
  const y = parseInt(index /15, 10) * 100 % 1500
  return {
    x: x,
    y: y
  }
}

const drawPicAtCoord = (coord, index) => {
  if (index < files.length - 1) {
    const img = new Image
    img.src = fs.readFileSync(`./data/imgs/file${index}.jpeg`)
    context.drawImage(img, coord.x, coord.y, 100, 100)
  }
}

range(files.length)
  .map(createCoords)
  .map(drawPicAtCoord)

fs.writeFileSync('output.png', canvas.toBuffer())

