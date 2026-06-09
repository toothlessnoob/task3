const express = require("express");

const app = express();

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

app.get("/borhanuddin4me_gmail_com", (req, res) => {
  const x = req.query.x;
  const y = req.query.y;

  if (
    !/^\d+$/.test(x) ||
    !/^\d+$/.test(y) ||
    Number(x) < 1 ||
    Number(y) < 1
  ) {
    return res.send("NaN");
  }

  const a = Number(x);
  const b = Number(y);

  const lcm = (a * b) / gcd(a, b);

  res.send(String(lcm));
});

app.listen(3000, () => {
  console.log("Server started");
});