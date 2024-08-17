const express = require('express')
const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/company');
const Employee=require('./models/employe.js')
const app = express()
app.set('view engine','ejs');
const port = 3000

app.get('/', (req, res) => {
    res.render('index.ejs',{foo:'FOO'});
});
app.get('/genrate', async(req, res) => {
    // for(let i=0;i<10;i++){
        let e=new Employee({
            name: "Hadi",
            salary: 700000,
            city: "Kolkata",
            isManager: false
        })
    // }
    await e.save();
    res.json({
        
    })
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))