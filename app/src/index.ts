
import  app from './app'
//import { router } from './routes/videos.routers'
//app.use('/', router)
import './database';

app.listen(4000, () =>{
    console.log("run serve in port 4000")
});


