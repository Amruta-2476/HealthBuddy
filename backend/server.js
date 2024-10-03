const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 80;


// db connection



// Middleware
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use(express.json());


// headers
app.use((req, res, next) => { 
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});


// api



// static resources
app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
app.use(express.static(path.join(__dirname, '/../client/build')));

app.get('*', (req, res) => {
    try {
        res.sendFile(path.join(`${__dirname}/../client/build/index.html`));
    } catch (e) {
        res.send('Oops! error occured');
    }
});


// cors
app.use(cors());


// server listen
app.listen(PORT, () => {
    console.log(`HealthBuddy is running on port no- ${PORT}`);
});