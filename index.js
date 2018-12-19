const https = require('https')
let url = process.argv[3] // Put any URL here

https.get(url, (res) => {
    let store = ''
    let c = 0

    res.on('data', (chunk) => {
        store += chunk
        c++
    })
    res.on('end', (keyword) => {
        console.log('The download is over after '+c+' pieces')
        keyword = process.argv[2] // ...And the keyword to search goes here
        let regex = new RegExp(keyword, 'g')
        let appearance = store.match(regex)
        let n = appearance.length

        console.log(keyword+' had '+n+' appearances on '+url)
    })
}).on('error', (error) => {
    console.error('Got error: '+error.message)
})