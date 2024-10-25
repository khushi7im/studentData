const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "mysql-3db8a027-vishu-1019.a.aivencloud.com", // Aiven MySQL Host
  port: 26486, // Port number
  user: "avnadmin", // Username
  password: process.env.DB_PASSWORD, // Password
  database: "studentData", // Database name
  // ssl: {
  //   // SSL mode required
  //   rejectUnauthorized: true,
  // },
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
