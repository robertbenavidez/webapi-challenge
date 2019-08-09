const express = require('express');
const server = express();
server.use(express.json());

const people = require('./data/people')
const chores = require('./data/chores')





server.get('/people', (req, res) => {
    res.status(200).json(people);
 });

 server.get('/people/chores', (req, res) => {
    res.status(200).json(chores);
 });




const port = 5000;

server.listen(port, () => console.log(`I am running on ${port}`));