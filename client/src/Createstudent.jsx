import React, { useState } from "react";
import "./main.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Createstudent = () => {
  const navigate = useNavigate();
  const [Firstname, setfirstname] = useState("");
  const [Lastname, setlastname] = useState("");
  const [father, setfathername] = useState("");
  const [mother, setmothername] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [email, setemail] = useState("");

  function HandleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8082/create", {
        Firstname,
        Lastname,
        email,
        phone,
        father,
        mother,
        address,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log("error::::::", err));
  }

  return (
    <div className="wrapper2">
      <form action="" method="post" onSubmit={HandleSubmit}>
        <h2>Add Student</h2>

        <div className="inputs">
          <label htmlFor="firstname">First Name :</label>
          <input
            onChange={(e) => setfirstname(e.target.value)}
            type="text"
            name="firstname"
            placeholder="Enter First Name"
            required
          />

          <label htmlFor="lastname">Last Name :</label>
          <input
            onChange={(e) => setlastname(e.target.value)}
            type="text"
            name="lastname"
            placeholder="Enter Last Name"
          />

          <label htmlFor="fathername">Father's Name :</label>
          <input
            onChange={(e) => setfathername(e.target.value)}
            type="text"
            name="father"
            placeholder="Enter Father's Name"
            required
          />

          <label htmlFor="mothername">Mother's Name :</label>
          <input
            onChange={(e) => setmothername(e.target.value)}
            type="text"
            name="mother"
            placeholder="Enter Mother's Name"
            required
          />

          <label htmlFor="contact">Contact No :</label>
          <input
            onChange={(e) => setphone(e.target.value)}
            type="text"
            name="phone"
            placeholder="Enter Contact Number"
            required
          />

          <label htmlFor="address">Address :</label>
          <input
            onChange={(e) => setaddress(e.target.value)}
            type="text"
            name="address"
            placeholder="Enter Address"
            required
          />

          <label htmlFor="email">Email :</label>
          <input
            onChange={(e) => setemail(e.target.value)}
            type="email"
            name="email"
            placeholder="Enter Email"
            required
          />
        </div>

        <button type="submit" className="button1">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Createstudent;
