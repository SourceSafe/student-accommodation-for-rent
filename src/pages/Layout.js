import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <h1>Student Accommodation For Rent - (Logo)</h1>                 
      <Outlet />
    </div>
  )
};

export default Layout;