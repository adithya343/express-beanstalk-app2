const express = require('express');


const app = express();


const port =  8080;

const notesRoute = require('./notesRoute');

app.get('/',(req,res)=>{
    res.send('express-beanstalk-app is running updated version');
});

app.use('/notes',notesRoute);
app.listen(port,()=>{
    console.log('Listening on port '+port);
});