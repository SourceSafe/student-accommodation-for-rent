import { Outlet } from "react-router-dom";
import "./styles.css"
import { VitalStats } from "../portal/VitalStats/VitalStats";
import { isDesktopAtom, isPortalAtom } from "../portal/appState/appState";
import { useAtomState } from "@zedux/react";
const Layout = () => {

  const [isDesktop] = useAtomState(isDesktopAtom);
  const [isPortal] = useAtomState(isPortalAtom);
  return (
    <div style={{display: "flex", flexDirection:'column', margin:"0px 0px"}}>

      <div style={{display: "flex", flexDirection:'row', justifyContent: "space-between"}}>

      <div style={{ margin:"0px 0px 0px 5px"}}>
        <a href="./">
          <img src="logo.jpg" alt="Welcone to Student Accommodation For Rent"/>           
        </a>
      </div>
      <div style={{marginTop:"20px"}}>
        { isDesktop && isPortal && 
        <VitalStats ></VitalStats>        
      }
      </div>     

      </div>



      <Outlet />
    </div>
  )
};
export default Layout;