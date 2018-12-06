const https = require('https')
const url = 'https://www.bbc.com/swahili' // Put any URL here

https.get(url, (res) => {
    let store = ''
    let c = 0

    res.on('data', (chunk) => {
        store += chunk
        c++
    })
    res.on('end', (keyword) => {
        console.log('The download is over after '+c+' pieces')
        keyword = 'Afrika' // ...And the keyword to search goes here
        let regex = new RegExp(keyword, 'g')
        let appearance = store.match(regex)
        let n = appearance.length

        console.log(keyword+' had '+n+' appearances on '+url)
    })
}).on('error', (error) => {
    console.error('Got error: '+error.message)
})