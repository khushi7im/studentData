import React, { useState } from "react";
import "./main.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Updatestudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Firstname, setfirstname] = useState("");
  const [Lastname, setlastname] = useState("");
  const [email, setemail] = useState("");

  function HandleSubmit(event) {
    event.preventDefault();
    axios
      .put("http://localhost:8082/update/" + id, { Firstname, Lastname, email })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="wrapper">
      <form action="" method="post" onSubmit={HandleSubmit}>
        {" "}
        <h2>Update Student</h2>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Updatestudent;
