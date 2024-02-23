const express = require("express");
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());
app.post("/setiga", (req, res) => {
  const number = req.body.number;
  const inputStr = number.toString();
  const response = [];
  for (let i = 0; i < inputStr.length; i++) {
    const zero = "0".repeat(i);
    response.push(inputStr[i] + zero + '0');
  }
  res.send(response.join("\n"));
});

app.post("/ganjil", (req,res) => {
    const number = req.body.number
    const inputStr = number.toString();
    const response = []

    for(let i = 0; i < inputStr.length; i++){
        const angka = parseInt(inputStr[i]);
        if (angka % 2 !== 0) {
            response.push(angka)
        }
    }
    res.send(response)
})
app.post("/genap", (req,res) => {
    const number = req.body.number
    const inputStr = number.toString();
    const response = []

    for(let i = 0; i < inputStr.length; i++){
        const angka = parseInt(inputStr[i]);
        if (angka % 2 == 0) {
            response.push(angka)
        }
    }
    res.send(response)
})

const PORT = 5000;
app.listen(PORT, () => {
  console.log("server runing at", PORT);
});
