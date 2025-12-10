const { MongoClient } = require('mongodb');

const uri = process.env.DB_URI;
const dbName = process.env.DB_NAME;

let connect = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const client = new MongoClient(uri);
            await client.connect();

            console.info("[Db] Connected successfully to server");

            const database = client.db(dbName);
            exports.db = database;

            resolve(database);
        } catch (error) {
            console.info("[Db] Unable to connect to server: " + error);
            reject(error);
        }
    });
};

exports.connect = connect;
exports.db = null;
