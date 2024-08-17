const express = require('express')
const app = express()
const port = 3001;

app.set('view engine','ejs');
app.get('/', (req, res) => {
    let siteName="Hadi's Site";
    let searchText="Search Now..";
    let arr=[12,34,45];
    res.render("index.ejs",{siteName:siteName,searchText:searchText,arr:arr});
})
app.get('/blog/:slug', (req, res) => {
    let blogTitle="My Blog"
    let content="This is my Blog";s
    res.render("./views/index.html",{blogTitle:blogTitle,content:content});
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})