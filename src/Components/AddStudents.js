import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { StudentsContext } from "../App";
import { FaHome } from "react-icons/fa";

function AddStudents() {
  let context = useContext(StudentsContext);
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [division, setDivision] = useState("");
  let [dateofbirth, setDateofbirth] = useState("");
  let [address, setAddress] = useState("");
  let [phonenumber, setPhonenumber] = useState("");

  //add students function
  let handleSubmit = () => {
    let newData = { name, age, division,dateofbirth,address, phonenumber};
    context.setStudents((prev) => [...prev, newData]);
    navigate("/all-students");
  };
  let Home=()=>{
    navigate("/");
  };
  return (
    <><div id="navbar"><FaHome onClick={Home} id="home"/>SCHOOL PORTAL</div>
      <h1 id="heading">------Add Students------</h1>
      <div id="add">
      <form>
          
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          /><br/>

        
          <input
            type="number"
            placeholder="Enter age"
            onChange={(e) => setAge(e.target.value)}
          /><br/>

     
          <input
            type="text"
            placeholder="Enter division"
            onChange={(e) => setDivision(e.target.value)}
          /><br/>

         
          <input
            type="date"
            placeholder="Enter date of birth"
            onChange={(e) => setDateofbirth(e.target.value)}
          /><br/>
     
       
          <input
            type="text"
            placeholder="Enter address"
            onChange={(e) => setAddress(e.target.value)}
          /><br/>
       
         
          <input
            type="number"
            placeholder="Enter phone number"
            onChange={(e) => setPhonenumber(e.target.value)}
          /><br/>
  
        <button id="btn1" onClick={handleSubmit}>
          Submit
        </button><br/>

        <Link to="/all-students" >
        <button  id='btn2'>Cancel</button>
        </Link>

      </form>
      </div>
    </>
  );
}

export default AddStudents;