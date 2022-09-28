import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StudentsContext } from "../App";
import { FaPen, FaTrashAlt,FaHome } from 'react-icons/fa';

function AllStudents() {
  let context = useContext(StudentsContext);
  let navigate = useNavigate();

  let handleDelete = (i) => {
    let newArray = [...context.students];
    newArray.splice(i, 1);
    context.setStudents(newArray);
  };
  let Home=()=>{
    navigate("/");
  };

  return (
    <>
    <div id="navbar"><FaHome onClick={Home} id="home"/>SCHOOL PORTAL</div>
      <h1 id='heading'>------All Students------</h1>
      <table>
      <tr>
      <th>Roll Num</th>
      <th>Name</th>
      <th>Age</th>
      <th>Division</th>
      <th>Date of Birth</th>
      <th>Address</th>
      <th>Phone Number</th>
      <th>Action</th>
      </tr>
      {context.students.map((e, i) => (  
      <tr key={i}>
      <td>{i+1}</td>
      <td>{e.name}</td>
      <td>{e.age}</td>
      <td>{e.division}</td>
      <td>{e.dateofbirth}</td>
      <td>{e.address}</td>
      <td>{e.phonenumber}</td>
                <td>
                  <Link to={`/edit-student/${i + 1}`}><button ><FaPen/></button></Link>
                  <button variant="danger" onClick={() => handleDelete(i)}><FaTrashAlt/></button>
                </td>
              </tr>
          ))
          }
      </table>
    </>
  );
}

export default AllStudents;