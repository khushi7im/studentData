const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "vashisth2006",
  database: "student",
});

app.get("/", (req, res) => {
  const info = "SELECT * FROM user";
  db.query(info, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/create", (req, res) => {
  const info = "INSERT INTO user (`Firstname`,`Lastname`,`email`) VALUES(?)";
  const VALUES = [req.body.Firstname, req.body.Lastname, req.body.email];
  db.query(info, [VALUES], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.put("/update/:id", (req, res) => {
  const info =
    "UPDATE user set `Firstname`=?, `Lastname`=? ,`email`=? WHERE `ID`=?";
  const VALUES = [req.body.Firstname, req.body.Lastname, req.body.email];

  const id = req.params.id;

  db.query(info, [...VALUES, id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.delete("/user/:id", (req, res) => {
  const info = "DELETE FROM user WHERE ID=?";

  const id = req.params.id;

  db.query(info, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8082, () => {
  console.log("listen on port 8082");
});
