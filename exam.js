const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

/*-------------------------Implementasi body-parser-------------------------*/
// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json());

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({ extended: true }));

/*-------------------------Implementasi cors-------------------------*/
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors());

//batas




app.post("/rumus", (req, res) => {
    const fgaya = Number(req.body.fgaya);
    const masa = Number(req.body.masa);
    const akecepatan = Number(req.body.akecepatan);
    let result;

    if (!isNaN(fgaya) && !isNaN(masa) && !isNaN(akecepatan)) {
        if (req.body.formula === "fma") {
            // f = m * a
            result = masa * akecepatan;
        } else if (req.body.formula === "nfa") {
            // n = f / a
            result = fgaya / akecepatan;
        } else if (req.body.formula === "afm") {
            // a = f / m
            result = fgaya / masa;
        } else {
            res.status(400).json({ error: "Invalid formula selection" });
            return;
        }

        res.json({ result });
    } else {
        res.status(400).json({ error: "Invalid input data" });
    }
});



//bats

const portt = 8030;
app.listen(portt, () => {
  console.log("Server run on port " + portt);
});
