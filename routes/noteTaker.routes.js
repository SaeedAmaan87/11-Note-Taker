const express = require('express');
const router = express.Router();
const uuid = require('uuid');

const dbJsonArray = []

router.get('/notes', (req, res) => {
  res.send(dbJsonArray)

})

router.post('/notes', (req, res) => {
    const { note } = req.body;
    const notes = {
        id: uuid.v4(),
        note: note
    }
    dbJsonArray.push(notes);
    res.sendStatus(201)

});

router.delete('/notes/:id', (req, res) => {
    const { id }=  req.params;

    for(let i = 0; i < dbJsonArray.length; i++) {
      if(dbJsonArray[i].id === id) {
        dbJsonArray.splice(i, 1)
        res.sendStatus(202)

      }
    }
    
})



module.exports = router
