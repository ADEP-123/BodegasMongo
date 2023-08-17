import config from '../src/utils/config.js';
import { MongoClient } from 'mongodb';

let dbConnection = null;

export async function connection() {
    if (dbConnection) {
        return dbConnection;
    }

    try {
        const url = `mongodb+srv://${config.user}:${config.pass}@cluster0.y7pgxmx.mongodb.net/${config.db}`;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        const client = await MongoClient.connect(url, options);
        dbConnection = client.db();
        return dbConnection;
    } catch (error) {
        return { status: 500, message: error };
    }
}