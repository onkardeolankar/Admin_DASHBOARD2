import Dashboard from "./Components/Dashboard";
import AllStudents from "./Components/AllStudents";
import AddStudents from "./Components/AddStudents";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditStudent from "./Components/EditStudent";
import React, { useState } from "react";
import AllTeachers from "./Components2/AllTeachers";
import AddTeachers from "./Components2/AddTeachers";
import EditTeacher from "./Components2/EditTeacher";


export const StudentsContext = React.createContext();
export const TeachersContext = React.createContext();
function App() {
  let [teachers,setTeachers]=useState([
    {
      "id": 1,
      "name":"Shraddha Khapra",
      "age":"30",
      "subject":"DSA",
      "gender":"F",
      "address":"Noida, Chandigadh, Haryana",
      "phonenumber":"9226205180",
    },
    {
      "id": 2,
      "name":"Aman Dhattarwal",
      "age":"25",
      "subject":"Chemistry",
      "gender":"M",
      "address":"Indira Nagar, Greater Noida, Delhi",
      "phonenumber":"9226205180",
    },
    {
      "id": 3,
      "name":"Anuj Kumar",
      "age":"33",
      "subject":"Competative Coding",
      "gender":"M",
      "address":"Narli Bagh, Hyderabad, Telangana",
      "phonenumber":"9226205180",
    },
    {
      "id": 4,
      "name":"Nishant Chahar",
      "age":"45",
      "subject":"German",
      "gender":"M",
      "address":"Cidco, Bangalore, Karnataka",
      "phonenumber":"9226205180",
    }
  ]);
  
  let [students, setStudents] = useState([
    {
      "id": 1,
      "name":"Hrishikesh Katkade",
      "age":"24",
      "division":"A",
      "dateofbirth":"23-09-1998",
      "address":"Manmad, Nashik, Maharashtra",
      "phonenumber":"8830406866",
    },
    {
      "id": 2,
      "name":"Shweta Jagtap",
      "age":"23",
      "division":"C",
      "dateofbirth":"25-01-1999",
      "address":"Viman Nagar, Pune, Maharashtra",
      "phonenumber":"9075425591",
    },
    {
      "id": 3,
      "name":"Saurabh Gaikwad",
      "age":"25",
      "division":"B",
      "dateofbirth":"03-05-1997",
      "address":"Janori, Nashik, Maharashtra",
      "phonenumber":"8446695368",
    },
    {
      "id": 4,
      "name":"Vaishnavi Lawande",
      "age":"21",
      "division":"A",
      "dateofbirth":"14-02-2001",
      "address":"Nath Villa, Ahmednagar, Maharashtra",
      "phonenumber":"7972566341",
    },
  ]);
  return (
    <>
      <Router>
        <StudentsContext.Provider value={{ students, setStudents }}>
        <TeachersContext.Provider value={{ teachers, setTeachers }}>
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/all-students" element={<AllStudents />} />
                  <Route path="/add-students" element={<AddStudents />} />
                  <Route path="/edit-student/:id" element={<EditStudent />} />
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/all-teachers" element={<AllTeachers />} />
                  <Route path="/add-teachers" element={<AddTeachers />} />
                  <Route path="/edit-teachers/:id" element={<EditTeacher />} />
                </Routes>
          </TeachersContext.Provider>
        </StudentsContext.Provider>
      </Router>
    </>
  );
}

export default App;