const express = require('express')//모듈 가져오기
const app = express()//펑션을 이용한 새로운 express앱 만들기
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jaeminchoi:abcd1234@cluster0.tvlgx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{
    userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))
//app의 루트디렉토리에 오면 hello world를 출력되게 하는 코드
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
//app을 port5000번에서 실행시키는 코드