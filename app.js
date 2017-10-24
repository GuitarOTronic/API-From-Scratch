const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const morgan = require('morgan')
const port = process.env.PORT || 3000


app.disable('x-powered-by')
app.use(bodyParser.json())

const guitarRoutes = require('./src/routes/guitars')

app.use('/guitars', guitarRoutes)


app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({
    error: err
  })
})

app.use((req, res, next) => {

  res.status(404).json({
    error: {
      message: 'Not found'
    }
  })
})





const listener = () => console.log(`Listening on port ${port}`);
app.listen(port, listener)
