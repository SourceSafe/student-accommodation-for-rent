import { Outlet } from "react-router-dom";
import "./styles.css"
const Layout = () => {
  return (
    <div>
    <a href="./">
    <img src="logo.jpg" alt="Welcone to Student Accommodation For Rent"/>       
    </a>
    

        
      <Outlet />
    </div>
  )
};

export default Layout;