const express = require('express');

const log = console.log;
const app = express();
const path = require('path');

const PORT = 8080;

//Data parsing
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.post('/email', (req, res) => {
    //TODO:
    //send email here
    console.log('Data: ', req.body);
    res.json({message: 'Message received!!!'}) 
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/app', 'app.component.html'));
});


app.listen(PORT, () => log('Server is starting on PORT, ', 8080));