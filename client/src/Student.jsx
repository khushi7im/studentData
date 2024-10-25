import React, { useEffect, useState } from "react";
import "./main.css";
import axios from "axios";
import { Link } from "react-router-dom";

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
  });

  const HandleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8082/user/" + id);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <div className="content">
        <div className="addButton">
          <Link to="/create">
            <button>+ Add </button>
          </Link>
        </div>
        <table>
          <thead>
            <td>Fullname</td>
            <td>Email</td>
            <td>Actions</td>
          </thead>

          {Array.isArray(student) &&
            student.map((data) => (
              <tr>
                <td>
                  {data.Firstname} {data.Lastname}
                </td>
                <td>{data.email}</td>
                <td>
                  <Link to={`update/${data.ID}`}>
                    <button>Update</button>
                  </Link>

                  <button onClick={(e) => HandleDelete(data.ID)}>Delete</button>
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Student;
