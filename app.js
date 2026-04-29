const express = require("express");
const apiRouter = require("./routes/api.router");

const app = express();
app.use(express.json());

app.use("/api", apiRouter);

app.listen(8080, () => {
    console.log("✅ Server: http://localhost:8080");
})