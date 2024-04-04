import { useEffect, useState } from "react";
import { Outlet, useActionData  } from "react-router-dom";
import "./styles.css"
import { VitalStats } from "../portal/VitalStats/VitalStats";
import { isPortalAtom } from "../portal/appState/appState";
import { useAtomState } from "@zedux/react";
import {CTAPackage} from  '../components/CTAPackage/CTAPackage'
import {ViewPortal} from '../components/ViewPortal/ViewPortal'
 
const Layout = () => {  
  const [isPortal] = useAtomState(isPortalAtom);
  const [isMobile, setIsMobile] = useState(false);    
  const [width, setWidth] = useState();    
  
        
  useEffect(() => {        

    const handleWindowSizeChange=() => {    
      setIsMobile( window.innerWidth <= 800);
      setWidth( window.innerWidth);
    }


    window.addEventListener('resize', handleWindowSizeChange);

    handleWindowSizeChange();

    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);
  
    
  return (
    <div style={{display: "flex", flexDirection:'column', margin:"0px 0px"}}>
      
      {/* <div>
      IsMobile : {isMobile == true ? "True" : "False"}
      <div>
      {width}
      </div>
      </div> */}

      <div style={{display: "flex", flexDirection:'row', justifyContent: "space-between"}}>

      <div style={{ margin:"0px 0px 0px 5px"}}>
        <a href="../">
          <img src="/images/logo.jpg" alt="Welcone to Student Accommodation For Rent"/>           
        </a>
      </div>
      <div>
        
        <div style = {{display:'flex'}}>         

        { !isMobile && isPortal && 
          <VitalStats></VitalStats>        
        }

        
        { !isMobile && 
        <div style ={{ marginTop: '9px'}}>
        {/* <CTAPackage  description={"On any Student Accommodation"} ></CTAPackage> */}
        </div>
        }                            
        
        </div>
      
      </div>     

      </div>



      <Outlet />
    </div>
  )
};
export default Layout;