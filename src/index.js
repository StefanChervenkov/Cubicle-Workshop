const express = require('express');
const handlebars = require('express-handlebars');


const app = express();
const PORT = 5050;

//Handlebars Configuration
app.engine('hbs', handlebars.engine({extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', 'src/views') 

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Server is running on htps://localhost:${PORT}`);
})