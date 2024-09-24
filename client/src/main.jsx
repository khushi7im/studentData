import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Student from "./Student.jsx";
import Createstudent from "./Createstudent.jsx";
import UpdateStudent from "./UpdateStudent.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Student />}></Route>
      <Route path="/create" element={<Createstudent />}></Route>
      <Route path="/update/:id" element={<UpdateStudent />}></Route>
    </Routes>
  </BrowserRouter>
);
