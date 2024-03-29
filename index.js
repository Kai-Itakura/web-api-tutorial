const express = require('express')
const app = express()
app.use(express.json())

app.listen(3000, console.log('サーバーが開始されました'))

app.get('/', (req, res) => {
  res.send('プログラミングチュートリアルへようこそ')
})

// お客様情報をサーバーに置いておく
const customers = [
  { title: '田中', id: 1 },
  { title: '斎藤', id: 2 },
  { title: '橋本', id: 3 },
  { title: '鎌田', id: 4 },
  { title: '六面', id: 5 },
]

// データを取得（GETメソッド）
app.get('/api/customers', (req, res) => {
  res.send(customers)
})

app.get('/api/customers/:id', (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id))
  // console.log(req)
  console.log(req)
  // console.log(req.params.id)
  res.send(customer)
})

// データを送信
app.post('/api/customers', (req, res) => {
  const customer = {
    title: req.body.title,
    id: customers.length + 1,
  }
  customers.push(customer)
  res.send(customers)
})

// データを更新
app.put('/api/customers/:id', (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id))
  customer.title = req.body.title
  res.send(customers)
})

// データを削除
app.delete('/api/customers/:id', (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id))
  const index = customers.indexOf(customer)
  customers.splice(index, 1)
  res.send(customers)
})
