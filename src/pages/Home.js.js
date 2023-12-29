import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Student Accommodation For Rent</h1>
      <ul>
        {/* townSectionStart */}          
 <li><Link to="/HighWycombe">High Wycombe</Link></li>
        {/* townSectionEnd */}        
      </ul>

    </div>  
  )
};

export default Home;
