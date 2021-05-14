import nedb from 'nedb'
import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const data = new nedb({
  filename: 'data.db',
  autoload: true,
  timestampData: true
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', function(req, res) {
  console.log(req.headers)
  res.send("2333")
}).get('/:name', function(req, res) {
  //data.findOne({_id: req.params.name}, function(err, doc) {
  //  doc ? res.redirect(301, doc.url) : res.send('none')
  //})
}).post("/create", function(req, res) {
  data.insert({
    url: req.body.url, // 原url
    // 模板类型
  })
}).listen(8080)


// log, 记录访问时间和设备信息