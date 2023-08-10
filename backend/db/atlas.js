import config from '../src/utils/config.js';
import { MongoClient } from 'mongodb';

export async function connection() {
    try {
        const url = `mongodb+srv://${config.user}:${config.pass}@cluster0.y7pgxmx.mongodb.net/${config.db}`;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        const client = await MongoClient.connect(url, options);
        return client.db();
    } catch (error) {
        return { status: 500, message: error };
    }
}