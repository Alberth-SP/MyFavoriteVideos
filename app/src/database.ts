import mongoose, { ConnectOptions } from 'mongoose';
import config from './config'


(async () => {
    try{

        const options: ConnectOptions = {        
            useNewUrlParser: true,
            useUnifiedTopology: true        
        }
        const uri = config.MONGO_URI;
        const db = await mongoose.connect(uri, options);
        console.log(`database cloud is connected to: ${db.connection.name}`);
    } catch(error){
        console.log(error);
    }
    
})()