import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { TeachersContext } from "../App";
import { Link } from "react-router-dom";
import { FaHome } from 'react-icons/fa';

function EditTeacher() {
  let context = useContext(TeachersContext);
  let params = useParams();
  useEffect(() => {
    if (params.id <= context.teachers.length) {
      getData();
    } else {
      navigate("/all-teachers");
      alert("Selected student is not available");
    }
  }, []);

  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [subject, setSubject] = useState("");
  let [gender, setGender] = useState("");
  let [address, setAddress] = useState("");
  let [phonenumber, setPhonenumber] = useState("");

  let userid = params.id - 1;
  let getData = () => {
    setName(context.teachers[userid].name);
    setAge(context.teachers[userid].age);
    setSubject(context.teachers[userid].subject);
    setGender(context.teachers[userid].gender);
    setAddress(context.teachers[userid].address);
    setPhonenumber(context.teachers[userid].phonenumber);
  };

  let handleSubmit = () => {
    let newData = { name, age, subject, gender,address, phonenumber};
    let previousArray = [...context.teachers];
    previousArray.splice(userid, 1, newData);
    context.setTeachers(previousArray);
    navigate("/all-teachers");
  };
  let Home=()=>{
    navigate("/");
  };
  return (
  <>
  <div id="navbar"><FaHome onClick={Home} id="home"/>SCHOOL PORTAL</div>
      <h1 id="heading">------Add Teahers------</h1>
      <div id="add">
      <form>
          
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          /><br/>

        
          <input
            type="number"
            value={age}
            placeholder="Enter age"
            onChange={(e) => setAge(e.target.value)}
          /><br/>

     
          <input
            type="text"
            value={subject}
            placeholder="Enter subject"
            onChange={(e) => setSubject(e.target.value)}
          /><br/>

         
          <input
            type="text"
            value={gender}
            placeholder="Enter gender"
            onChange={(e) => setGender(e.target.value)}
          /><br/>
     
       
          <input
            type="text"
            value={address}
            placeholder="Enter address"
            onChange={(e) => setAddress(e.target.value)}
          /><br/>
       
         
          <input
            type="number"
            value={phonenumber}
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

export default EditTeacher;