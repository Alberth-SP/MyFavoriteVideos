import doteenv from 'dotenv'
doteenv.config();
export default {
    MONGO_URI: process.env.URI || "localhost"
}