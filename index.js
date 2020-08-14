const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(path.join(__dirname,'/public/templates/home.html'));
})

app.get('/inspect', (req, res) => {
  //res.send('Hello World!')
  res.sendFile(path.join(__dirname,'/public/inspector-master/demo.html'));
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})