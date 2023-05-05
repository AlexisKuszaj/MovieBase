const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors());
    
require("./config/mongoose.config"); 

app.use(express.json(), express.urlencoded({ extended: true }));
    
const GameRoutes = require("./routes/gb.route"); 
GameRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));