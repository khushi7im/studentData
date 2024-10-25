import React, { useState } from "react";
import "./main.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Createstudent = () => {
  const navigate = useNavigate();
  const [Firstname, setfirstname] = useState("");
  const [Lastname, setlastname] = useState("");
  const [email, setemail] = useState("");

  function HandleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8082/create", { Firstname, Lastname, email })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log("error::::::", err));
  }

  return (
    <div className="wrapper">
      <form action="" method="post" onSubmit={HandleSubmit}>
        {" "}
        <h2>Add Student</h2>
        <div className="inputs">
          <label htmlFor="firstname">First Name :</label>
          <input
            onChange={(e) => setfirstname(e.target.value)}
            type="text"
            name="firstname"
            placeholder="Enter First name"
            required
          />

          <label htmlFor="lastname">Last Name</label>

          <input
            onChange={(e) => setlastname(e.target.value)}
            type="text"
            name="lastname"
            placeholder="Enter Last name"
          />

          <label htmlFor="email">Email </label>
          <input
            onChange={(e) => setemail(e.target.value)}
            type="email"
            name="name"
            placeholder="Enter Email"
            required
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Createstudent;
