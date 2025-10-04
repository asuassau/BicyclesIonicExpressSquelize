const express = require("express");
const cors = require("cors");

const app = express();
var corsOptions={
    origin:"http://localhost:8100"
};
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync({force:true}).then (()=>{
console.log("Drop and re-sync db. ");
});


app.get("/", (req, res) => {
    return res.json({ message: "Hola mundo" });
});

require("./routes/bicycle.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})