const express = require("express");
const app = express();

function gcd(a, b) {
  while (b !== 0n) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

app.get("/borhanuddin4me_gmail_com", (req, res) => {
  const x = req.query.x;
  const y = req.query.y;

  if (!x || !y || !/^\d+$/.test(x) || !/^\d+$/.test(y)) {
    return res.send("NaN");
  }

  const a = BigInt(x);
  const b = BigInt(y);

  const g = gcd(a, b);
  const lcm = (a * b) / g;

  res.send(lcm.toString());
});

app.listen(3000, () => {
  console.log("Server started");
});
