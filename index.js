const express = require('express')
const compression = require('compression')

var app = express();

app.use(compression({
    level: 8,
}))
app.use(express.static('public'))


const PORT = process.env.PORT || 5000;
module.exports = app.listen(PORT, () => console.log(`Server listening on ${PORT}`));