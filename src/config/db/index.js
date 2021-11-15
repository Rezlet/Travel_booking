const mongoose = require('mongoose')
async function connect() {
        try {
            await mongoose.connect('mongodb://localhost/LOVE-TRAVEL', {
                useNewUrlParser: true
            });
            console.log('Connect database successfully !!')
        }catch {
            console.log('Connect database failure!!!')
        }
}

module.exports = { connect }