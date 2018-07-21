var express = require('express');
var app = express();

app.use(express.static('public'))


let port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`app is up on:${port}`);
})