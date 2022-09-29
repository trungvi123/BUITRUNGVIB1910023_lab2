import app from './app.js'
import config from './app/config/index.js'
import mongoose from "mongoose";


const PORT = config.app.port;

mongoose.connect(config.db.URI).then(() => {
    console.log('Connected to DB');
        app.listen(PORT, ()=>{
            console.log(`Server is running on port ${PORT}.`);
        })
  })
  .catch((err) => {
    console.log("Cannot connect to the database",err); 
  });
  