const express = require("express");

const cors = require("cors");

const app = express();

app.use(
    cors({
        origin: {},
    })
);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send();
});

app.listen(PORT, () => console.log("Server is listening on 5000"));