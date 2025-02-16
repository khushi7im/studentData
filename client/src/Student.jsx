import React, { useEffect, useState } from "react";
import "./main.css";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "./assets/images.png";

const Student = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    async function datafetching() {
      await axios
        .get("http://localhost:8082")
        .then((res) => setStudent(res.data))
        .catch((err) => console.log(err));
    }
    datafetching();
  }, []);

  const HandleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8082/user/" + id);
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" width="100px" />
      </header>
      <div className="content">
        {" "}
        <div className="addButton">
          <div className="search">
            <i class="fa-brands fa-searchengin"></i>
            <p>Search</p>
          </div>
          <Link to="/create">
            <button>+ Add </button>
          </Link>
        </div>
        <table>
          <thead>
            <td>Sr. No.</td>
            <td>Firstname</td>
            <td>Lastname</td>
            <td>Father's name</td>
            <td>Mother's name</td>
            <td>contact no</td>
            <td>Email</td>
            <td>Address</td>
            <td>Actions</td>
          </thead>

          {Array.isArray(student) &&
            student.map((data, index) => (
              <tr>
                <td key="{data.id}">{index + 1}</td>
                <td>{data.Firstname}</td>
                <td>{data.Lastname}</td>
                <td>{data.father}</td>
                <td>{data.mother}</td>
                <td>{data.phone}</td>
                <td>{data.email}</td>
                <td>{data.address}</td>
                <td>
                  <Link to={`update/${data.id}`}>
                    <button>
                      <i class="fa-solid fa-pen"></i>
                    </button>
                  </Link>
                  <button
                    onClick={(e) => {
                      HandleDelete(data.id);
                      window.location.reload(); // Reload after function execution
                    }}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Student;
