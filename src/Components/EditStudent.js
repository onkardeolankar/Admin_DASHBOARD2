import { useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { StudentsContext } from "../App";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function EditStudent() {
  let context = useContext(StudentsContext);
  let params = useParams();
  useEffect(() => {
    if (params.id <= context.students.length) {
      getData();
    } else {
      navigate("/all-students");
      alert("Selected student is not available");
    }
  }, []);

  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [division, setDivision] = useState("");
  let [dateofbirth, setDateofbirth] = useState("");
  let [address, setAddress] = useState("");
  let [phonenumber, setPhonenumber] = useState("");

  let userid = params.id - 1;
  let getData = () => {
    setName(context.students[userid].name);
    setAge(context.students[userid].age);
    setDivision(context.students[userid].division);
    setDateofbirth(context.students[userid].dateofbirth);
    setAddress(context.students[userid].address);
    setPhonenumber(context.students[userid].phonenumber);
  };

  //add students function
  let handleSubmit = () => {
    let newData = { name, age, division,dateofbirth,address, phonenumber};
    let previousArray = [...context.students];
    previousArray.splice(userid, 1, newData);
    context.setStudents(previousArray);
    navigate("/all-students");
  };
  let Home=()=>{
    navigate("/");
  };
  return (
  <>
  <div id="navbar"><FaHome onClick={Home} id="home"/>SCHOOL PORTAL</div>
      <h1 id="heading">------Add Students------</h1>
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
            value={division}
            placeholder="Enter division"
            onChange={(e) => setDivision(e.target.value)}
          /><br/>

         
          <input
            type="text"
            value={dateofbirth}
            placeholder="Enter date of birth dd-mm-yyyy"
            onChange={(e) => setDateofbirth(e.target.value)}
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

        <Link to="/all-students" >
        <button  id='btn2'>Cancel</button>
        </Link>
      </form>
      </div>
    </>
  );
}

export default EditStudent;