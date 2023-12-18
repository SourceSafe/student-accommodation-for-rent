import { Link } from "react-router-dom";

const Bath = () => {


  return (
  <div>  
  <h1>Student Accommodation in Bath</h1>

    <ul>
          <li>
            <Link to="/">For an ovewrview of all Univeristy Towns</Link>
          </li>
          <li>
            Prev: <Link to="/aberdeen">Aberdeen</Link>
          </li>
          <li>
            Next: <Link to="/cheltenham">Cheltenham</Link>
          </li>
        </ul>


  </div>
  )



  
};

export default Bath;