const PersonCtrl = {}
const Person = require('../models/Person')

PersonCtrl.getList = async (req, res) => {
    const Persons = await Person.find()
    console.log("getList User")
    res.send(Persons)
}

PersonCtrl.savePerson = async (req, res) => {
    const name = req.body.name
    const lastName = req.body.lastName
    const PersonObj = new Person ({name, lastName})
    await PersonObj.save()
    res.send({"response" : "ok"})
}

/*PersonCtrl.updatePerson = async (req, res) => {
    var Person2 = await Person.find({ name: { $gt: "certi" } })
    Person2.name = "Node#"
    Person2.lastName = "Hola"
    await Person2.update()
    res.json({"response":"ok"})
}

PersonCtrl.deletePerson = async (req, res) => {
    await Person.remove({"name":"Node"})
    res.json({"reponse" : "ok"})
}*/

module.exports = PersonCtrl