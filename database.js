const mongoose = require('mongoose')
const URI = ('mongodb+srv://admin:pass123@cluster0.gqeai.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

mongoose.connect(URI,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
    useFindAndModify : false
}).then(db => console.log('Base de datos conectada'))
.catch(err => console.log(err))

module.exports = mongoose