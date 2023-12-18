import { Link } from "react-router-dom";

const Cheltenham = () => {


  return (
  <div>  
  <h1>Student Accommodation in Cheltenham</h1>
    <ul>
          <li>
          <Link to="/">For an ovewrview of all Univeristy Towns</Link>
          </li>
          <li>
            Prev: <Link to="/bath">Bath</Link>
          </li>
          <li>
            Next: 
          </li>
        </ul>
  </div>
  )



  
};

export default Cheltenham;