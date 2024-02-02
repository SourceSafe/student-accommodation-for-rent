import { Outlet } from "react-router-dom";
import "./styles.css"
import { VitalStats } from "../portal/VitalStats/VitalStats";
import { isDesktopAtom } from "../portal/appState/appState";
import { useAtomState } from "@zedux/react";
const Layout = () => {

  const [isDesktop] = useAtomState(isDesktopAtom);
  return (
    <div style={{display: "flex", flexDirection:'column'}}>

      <div style={{display: "flex", flexDirection:'row', justifyContent: "space-between"}}>

      <div>
        <a href="./">
          <img src="logo.jpg" alt="Welcone to Student Accommodation For Rent"/>           
        </a>
      </div>
      <div style={{marginTop:"20px"}}>

        { isDesktop && 
        <VitalStats></VitalStats>        
      }
      </div>     

      </div>



      <Outlet />
    </div>
  )
};
export default Layout;