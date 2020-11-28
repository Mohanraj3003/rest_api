const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database Connected..!');
}).catch((e) => {
    console.log(e);
})

module.exports = mongoose

