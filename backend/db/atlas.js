import dotenv from 'dotenv';
import {MongoClient} from 'mongodb';
dotenv.config("../");
async function con() {
    try {
        const uri =`mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@atlascluster.3c0ouhb.mongodb.net/${process.env.ATLAS_DB}`
        const options ={
            useNewUrlParser:true,
            useUnifiedTopology:true,
        };
        const cliente =await MongoClient.connect(uri, options);
        return cliente.db();
    } catch (error) {
        return {status:500, message:error}
    }
}
export {con}