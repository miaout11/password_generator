const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// 由於 body-parser 已經是 Express 內建的一部分了，因此我們其實可以直接呼叫 express，就能取得 body-parser 提供的方法，不用額外載入
// const bodyParser = require('body-parser')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// use body-parser 使用 body-parser 這行程式碼需要放在設定路由之前
// 改寫成 express，也可以直接取得 urlencoded 方法
app.use(express.urlencoded({ extended: true })) 

// setting routes
app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {
    console.log('req.body', req.body)
    res.render('index')
})

// starts the express server and listening for connections.
app.listen(port, () => {
    console.log(`Express app listening on port ${port}.`)
})
