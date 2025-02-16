const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "mysql-1b5c0614-khushidhiman951.d.aivencloud.com", // Aiven MySQL Host
  port: 13224, // Port number
  user: "avnadmin", // Username
  password: process.env.DB_PASSWORD, // Password
  database: "defaultdb", // Database name
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
  const info =
    "INSERT INTO user (`Firstname`,`Lastname`,`email`,`phone`,`father`,`mother`,`address`) VALUES(?)";
  const VALUES = [
    req.body.Firstname,
    req.body.Lastname,
    req.body.email,
    req.body.phone,
    req.body.father,
    req.body.mother,
    req.body.address,
  ];
  db.query(info, [VALUES], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.put("/update/:id", (req, res) => {
  const info =
    "UPDATE user set `Firstname`=?, `Lastname`=? ,`email`=? `phone`=?, `father`=?, `mother`=?, `address`=? WHERE `id`=?";
  const VALUES = [
    req.body.Firstname,
    req.body.Lastname,
    req.body.email,
    req.body.phone,
    req.body.father,
    req.body.mother,
    req.body.address,
  ];

  const id = req.params.id;
  console.log("id", id);

  db.query(info, [...VALUES, id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.delete("/user/:id", (req, res) => {
  const info = "DELETE FROM user WHERE id=?";

  const id = req.params.id;

  db.query(info, [id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8082, () => {
  console.log("listen on port 8082");
});
