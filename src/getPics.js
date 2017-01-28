const data = require('../data/tracks.json')
const download = require('./download.js')

const error = (e) => console.log('error', e)
const done = () => console.log('done!')

const getPicUrl =
    (obj) =>
      obj.artwork_url === null ? obj.userPic : obj.artwork_url

const doDownload =
  (url, index) =>
    download(url, `../data/imgs/file${index}.jpeg`, error, done)

data.map(getPicUrl)
    .map(doDownload)

