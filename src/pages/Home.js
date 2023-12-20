import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Student Accommodation For Rent</h1>
      <ul>
        <li> <Link to="/aberdeen">Aberdeen</Link></li>
        <li><Link to="/aberystwyth">Aberystwyth</Link></li>
        <li><Link to="/bangor">Bangor</Link></li>
      </ul>

    </div>  
  )
};

export default Home;