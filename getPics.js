const data = require('./data/tracks.json')
const fs = require('fs')
const download = require('./download.js')
const { map } = require('ramda')

const fixMissingArtworkWithUserPic =
    (obj) => obj.artwork_url === null ? obj.userPic : obj.artwork_url 

const urls = map( fixMissingArtworkWithUserPic , data )

urls.forEach((url,index,arr) => {
  download(
    url,
    `data/imgs/file${index}.jpeg`,
    (state) => console.log('progress: ', state),
    (res)=> console.log('response: ', res.statusCode),
    (e)=> console.log('error: ', e),
    ()=> console.log('done!')
  )
})
