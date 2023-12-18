import { Link } from "react-router-dom";
const Aberdeeen = () => {
  return (
    <>  
    <h1>Student Accommodation in Aberdeeen</h1>
  
      <ul>
            <li>
            <Link to="/">For an ovewrview of all Univeristy Towns</Link>
            </li>
            <li>
              Prev: 
            </li>            
            <li>
              Next: <Link to="/bath">Bath</Link>
            </li>            
          </ul>
  
    </>
    )
  
};

export default Aberdeeen;