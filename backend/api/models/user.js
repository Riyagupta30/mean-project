const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://meanproject:mean123@clustermean.lcqa3.mongodb.net/meanDatabase?retryWrites=true&w=majority', {useNewUrlParser: true});

var conn = mongoose.Collection;

var userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
});

var userModel = mongoose.model('Users', userSchema);
module.exports=userModel;