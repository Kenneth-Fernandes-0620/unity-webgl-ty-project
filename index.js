const express = require('express')
const app = express();

app.use('/static', express.static('public'));

const PORT = process.env.PORT;
module.exports = app.listen(PORT, () => console.log(`Server listening on ${PORT}`));