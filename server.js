const express = require('express');
const server = express();
server.use(express.json());

const people = require('./data/people')
const chores = require('./data/chores')


//GET chores by person's ID

server.get('/people/:id/chores', (req, res) =>{
    res.status(200).json(chores);
    console.log(req.params.id)
})





// get people
server.get('/people', (req, res) => {
    res.status(200).json(people);
 });

 //get chores
 server.get('/chores', (req, res) => {
    res.status(200).json(chores);
 });




const port = 5000;

server.listen(port, () => console.log(`I am running on ${port}`));