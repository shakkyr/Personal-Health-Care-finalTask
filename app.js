const express = require('express');
const path = require('path');


const homeRouter = require("./routes/home.route");

const app = express();

app.use(express.static(path.join(__dirname, 'assets' )))
app.use(express.static(path.join(__dirname, 'images' )))


app.set('view engine', 'ejs' );
app.set('views', 'views' );

app.get('/', (req,res)=> {
    res.render('index')
} )


app.use("/", homeRouter);

app.listen(3000, ()=>{
    console.log('we are on port 3000')
})