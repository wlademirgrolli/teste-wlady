const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(_dirname + '/dist/teste-wlady'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/teste-wlady/index.html');
});

app.listen(PORT, () => {
    console.log('servidoriniciado na porta' + PORT);
})