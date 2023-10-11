const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const uniqid = require('uniqid');
const databaseFilePath = path.resolve(__dirname, '..', 'config', 'database.json');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    let { name, description, imageUrl, difficultyLevel } = req.body;
    const newCube = {
        id: uniqid(),
        name,
        imageUrl,
        difficultyLevel,
    }

    fs.readFile(databaseFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return;
        }

        const jsonData = JSON.parse(data);
        jsonData.push(newCube);
        const updatedData = JSON.stringify(jsonData);
        console.log(updatedData);
        fs.writeFile(databaseFilePath, updatedData, 'utf-8', (err)=> {
            if (err) {
                throw err;
            }
        });
    })
    



    res.redirect('/create')
});

router.get('/details/*', (req, res) => {
    const id = req.url
        .split('/')
        .pop();

    fs.readFile(path.resolve(__dirname, '..', 'config', 'database.json'), 'utf-8', (err, data) => {
        const cubesArr = JSON.parse(data);
        const filteredCube = cubesArr.filter(cube => cube.id === id)[0];
        res.render('details', filteredCube);
    });



})

module.exports = router;