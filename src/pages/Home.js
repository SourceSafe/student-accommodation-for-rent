import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Student Accommodation For Rent</h1>
      <ul>
        {/* townSectionStart */}            
<li><Link to="/student-accommodation-in-birmingham">Student Accommodation in Birmingham</Link></li>
<li><Link to="/student-accommodation-in-aberdeen">Student Accommodation in Aberdeen</Link></li>
<li><Link to="/student-accommodation-in-aberystwyth">Student Accommodation in Aberystwyth</Link></li>
<li><Link to="/student-accommodation-in-bangor">Student Accommodation in Bangor</Link></li>
<li><Link to="/student-accommodation-in-bath">Student Accommodation in Bath</Link></li>
<li><Link to="/student-accommodation-in-belfast">Student Accommodation in Belfast</Link></li>
<li><Link to="/student-accommodation-in-bolton">Student Accommodation in Bolton</Link></li>
<li><Link to="/student-accommodation-in-bradford">Student Accommodation in Bradford</Link></li>
<li><Link to="/student-accommodation-in-brighton">Student Accommodation in Brighton</Link></li>
<li><Link to="/student-accommodation-in-bristol">Student Accommodation in Bristol</Link></li>
<li><Link to="/student-accommodation-in-buckingham">Student Accommodation in Buckingham</Link></li>
<li><Link to="/student-accommodation-in-cambridge">Student Accommodation in Cambridge</Link></li>
        {/* townSectionEnd */}        
      </ul>

    </div>  
  )
};

export default Home;
