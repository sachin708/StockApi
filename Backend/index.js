const express = require("express");
const dotenv  = require("dotenv");
const { connection } = require("./config/db");
dotenv.config();
const cors = require("cors");
const { StokeRouter } = require("./routes/stokerouter");
const app = express();

// Middleware 
app.use(express.json());
app.use(cors());

// Routes 
app.use("/stoke",StokeRouter);




// App 
const PORT = 4545;
app.listen(PORT,async()=>{
    try {
        await connection
        console.log(`Server is Running PORT at ${PORT}`)
    } catch (error) {
        console.log(`Server has Internal Error`)
    }
})


// app.listen(8080,()=>{
//     console.log("server is running PORT 8080")
// })