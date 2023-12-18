import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Student Accommodation To Rent in the UK</h1>
      <ul>
        <li> <Link to="/aberdeen">Aberdeen</Link></li>
        <li><Link to="/cheltenham">Cheltenham</Link></li>
      </ul>

    </div>  
  )
};

export default Home;