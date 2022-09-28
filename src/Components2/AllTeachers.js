import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TeachersContext } from "../App";
import { FaPen, FaTrashAlt,FaHome } from 'react-icons/fa';

function AllTeachers() {
  let context = useContext(TeachersContext);
  let navigate = useNavigate();

  let handleDelete = (i) => {
    let newArray = [...context.teachers];
    newArray.splice(i, 1);
    context.setTeachers(newArray);
  };
  let Home=()=>{
    navigate("/");
  };

  return (
    <>
    <div id="navbar"><FaHome onClick={Home} id="home"/>SCHOOL PORTAL</div>
      <h1 id='heading'>------All Teachers------</h1>
      <table>
      <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Age</th>
      <th>Subject</th>
      <th>Gender</th>
      <th>Address</th>
      <th>Phone Number</th>
      <th>Action</th>
       </tr>
      {context.teachers.map((e, i) => (    
      <tr key={i}>
      <td>{i+1}</td>
      <td>{e.name}</td>
      <td>{e.age}</td>
      <td>{e.subject}</td>
      <td>{e.gender}</td>
      <td>{e.address}</td>
      <td>{e.phonenumber}</td>
      <td>
      <Link to={`/edit-teachers/${i + 1}`}><button ><FaPen/></button></Link>
      <button variant="danger" onClick={() => handleDelete(i)}><FaTrashAlt/></button>
      </td>
      </tr>
          ))
          }
      </table>
    </>
  );
}

export default AllTeachers;