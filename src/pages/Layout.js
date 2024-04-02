import { Outlet, useActionData  } from "react-router-dom";
import "./styles.css"
import { VitalStats } from "../portal/VitalStats/VitalStats";
import { isDesktopAtom, isPortalAtom } from "../portal/appState/appState";
import { useAtomState } from "@zedux/react";
import {CTAPackage} from  '../components/CTAPackage/CTAPackage'
import {ViewPortal} from '../components/ViewPortal/ViewPortal'
 
const Layout = () => {

  const [isDesktop] = useAtomState(isDesktopAtom);
  const [isPortal] = useAtomState(isPortalAtom);

    

  

  //console.log("BAckPage:", window,performance?.navigation.type);
    
  return (
    <div style={{display: "flex", flexDirection:'column', margin:"0px 0px"}}>

      <div style={{display: "flex", flexDirection:'row', justifyContent: "space-between"}}>

      <div style={{ margin:"0px 0px 0px 5px"}}>
        <a href="../">
          <img src="logo.jpg" alt="Welcone to Student Accommodation For Rent"/>           
        </a>
      </div>
      <div>
        
        <div style = {{display:'flex'}}>         

        { isDesktop && isPortal && 
          <VitalStats></VitalStats>        
        }

        
        { isDesktop && 
        <CTAPackage description={"On any Student Accommodation"} ></CTAPackage>
        }
                
        
        

        
        </div>
      
      </div>     

      </div>



      <Outlet />
    </div>
  )
};
export default Layout;