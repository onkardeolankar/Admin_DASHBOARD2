import React, { useState, useContext } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { TeachersContext } from "../App";

function AddTeachers() {
  let context = useContext(TeachersContext);
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [subject, setSubject] = useState("");
  let [gender, setGender] = useState("");
  let [address, setAddress] = useState("");
  let [phonenumber, setPhonenumber] = useState("");

  //add students function
  let handleSubmit = () => {
    let newData = { name, age, subject, gender,address, phonenumber};
    context.setTeachers((prev) => [...prev, newData]);
    navigate("/all-teachers");
  };
  let Home=()=>{
    navigate("/");
  };
  return (
    <>
    <div id="navbar"><FaHome onClick={Home} id="home"/>SCHOOL PORTAL</div>

      

      <h1 id="heading">------Add Teachers------</h1>
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
            placeholder="Enter subject"
            onChange={(e) => setSubject(e.target.value)}
          /><br/>

         
          <input
            type="text"
            placeholder="Enter gender"
            onChange={(e) => setGender(e.target.value)}
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

        <Link to="/all-teachers" >
        <button  id='btn2'>Cancel</button>
        </Link>

      </form>
      </div>
    </>
  );
}

export default AddTeachers;
