const data = require('./data/tracks.json')
const fs = require('fs')
const download = require('./download.js')

const getPicUrl =
    (obj) => obj.artwork_url === null ? obj.userPic : obj.artwork_url 


const doDownload = (url, index) => {
  download(
    url,
    `data/imgs/file${index}.jpeg`,
    (state) => console.log('progress: ', state),
    (res) => console.log('response: ', res.statusCode),
    (e) => console.log('error: ', e),
    () => console.log('done!')
  )
}

data.map(getPicUrl)
    .map(doDownload)


