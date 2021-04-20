const express = require('express')
const router = express.Router()
const PersonCtrl = require('../controllers/person.controller')

router.get('/user', PersonCtrl.getList)/*function(req, res){
    console.log('Hello World Delete')
    res.send('Hello World Delete')
})*/

router.post('/user', PersonCtrl.savePerson)

//router.put('/user', PersonCtrl.updatePerson)

//router.delete('/user', PersonCtrl.deletePerson)

module.exports = router