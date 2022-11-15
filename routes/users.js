let mongoose = require('mongoose');

//mongoose.connect('mongodb://localhost/gamingforum', { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.connect('mongodb+srv://admin:passwordforadmin@cluster0.2eywkft.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })
.then(function(){
  console.log('Database Connected')
})
.catch(function(err){
  console.log(err)
})

let UserSchema = mongoose.Schema({
  gamename: String,
  gamedevice: String,
  review: String
})

module.exports = mongoose.model('user', UserSchema)
