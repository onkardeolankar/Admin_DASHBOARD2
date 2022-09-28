import { FaList, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Dashboard() {
  return (<>
    <div id="navbar">SCHOOL PORTAL</div>
      <div id="uppermain">
      <div id="main">
        <div id="flexitem">
            <Link to="/add-teachers" >
              <button  id='btn'><FaPlus id='plus'/>Add Teachers</button>
            </Link>
          </div>

          <div id="flexitem">
            <Link to="/all-teachers" >
              <button  id='btn'><FaList id='plus'/>All Teachers</button>
            </Link>
        
          </div>
          </div>
          <div id="main">
        <div id="flexitem">
            <Link to="/add-students" >
              <button  id='btn'><FaPlus id='plus'/>Add Students</button>
            </Link>
          </div>

          <div id="flexitem">
            <Link to="/all-students" >
              <button  id='btn'><FaList id='plus'/>All Students</button>
            </Link>
        
          </div>
          </div>
          </div>
      </>
   );
  
}

export default Dashboard;