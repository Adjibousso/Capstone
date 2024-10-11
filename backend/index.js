const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! how are you?')
})
// username:diallobousso10
// password : nLZO30myIf0BY7Qx

mongodb+srv://diallobousso10:<nLZO30myIf0BY7Qx>@backend-caps.xm1ai.mongodb.net/?retryWrites=true&w=majority&appName=Backend-caps
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
