const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/predict", async (req, res) => {
    const { symptoms } = req.body;
    const response = await fetch("https://your-ai-model.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ symptoms })
    });
    const data = await response.json();
    res.json(data);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
