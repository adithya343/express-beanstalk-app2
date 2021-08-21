const express = require('express');


const app = express();


const port =  8080;

app.get('/',(req,res)=>{
    res.send('express-beanstalk-app is running updated version');
});
app.listen(port,()=>{
    console.log('Listening on port '+port);
});