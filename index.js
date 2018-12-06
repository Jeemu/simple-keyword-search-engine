const http = require('http')
const url = 'http://nodeprogram.com'

http.get(url, (res) => {
    let store = ''
    let c = 0

    res.on('data', (chunk) => {
        store += chunk
        c++
    })
    res.on('end', (keyword) => {
        console.log('The download is over after '+c+' pieces')
        keyword = 'Node.js'
        let regex = new RegExp(keyword, 'g')
        let appearance = store.match(regex)
        let n = appearance.length

        console.log(keyword+' had '+n+' appearances on '+url)
    })
}).on('error', (error) => {
    console.error('Got error: '+error.message)
})