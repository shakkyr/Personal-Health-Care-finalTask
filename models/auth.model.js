const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const DB_URL = 'mongodb://localhost:27017/health-care'

const clientSchema = mongoose.Schema({
    username : String,
    email : String,
    password : String
})

const Client = mongoose.model('client', clientSchema);


exports.createNewClient = (username, email, password) => {

    //check if email exists
    //yes ==> error
    // no ==> create new account

    return new Promise((resolve, reject) => {
        mongoose.connect(DB_URL).then(() => {
         return   Client.findOne({email : email})
        }).then((client) => {
            if (client){
                mongoose.disconnect()
                reject('email is used')
            } 
            else {
                return bcrypt.hash(password, 10)
            }
        }).then(hashedPassword => {
            let client = new Client ({
                username : username,
                email : email ,
                password : hashedPassword
            })
            return client.save()
        }).then(()=> {
            mongoose.disconnect()
            resolve('client created')
        }).catch(err => {
            mongoose.disconnect()
            reject(err)})
    })
}

exports.login = (email, password) => {
    //check for email
    // no ==> error
    //yes == check password
    //false ==> error
    // true ==> set session


    return new Promise((resolve, reject)=> {
        mongoose
        .connect(DB_URL).then(() => Client.findOne({email : email}))
        .then(client => {
            if (!client) {
                mongoose.disconnect()
                reject('there is no user matches this email')
            } else {
                bcrypt.compare(password, client.password)
                .then(same => {
                    if(!same) {
                        mongoose.disconnect();
                        reject('password is incorrect')
                    } else {
                        mongoose.disconnect();
                        resolve(client._id);
                    }
                })
            }
        }).catch(err => {
            mongoose.disconnect();
            reject(err)
        })
        
    })
}
