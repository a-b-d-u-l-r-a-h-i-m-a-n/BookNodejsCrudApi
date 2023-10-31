const mongoose=require('mongoose');
const url="mongodb://127.0.0.1:27017/test";
const connection = mongoose.createConnection(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
