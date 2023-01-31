const express = require('express');

const app = express();
app.use(express.json());

let id = 1;
const tasks = []

app.post('/tasks', function (req, res) {
    const {description} = req.body;
    const task = {id: id++, description, done: false};
    tasks.push(task);
    res.json(tasks);
})

app.listen(3000);