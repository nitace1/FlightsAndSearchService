const express = require("express");
const { PORT } = require('./config/serverConfig')

const setupAndStartServe = async () => {
    const app = express();
    app.listen(PORT, () =>{
      console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServe();