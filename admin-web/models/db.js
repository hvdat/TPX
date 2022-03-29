const {MongoClient} = require("mongodb")
const url = "mongodb+srv://zane603:Dat01272640742@thuc-pham-xanh.7gytf.mongodb.net/test";
const client = new MongoClient(url);

exports.connect = () => {
    return client.connect();
};

exports.db = () => {
    return client.db('thuc-pham-xanh');
};
