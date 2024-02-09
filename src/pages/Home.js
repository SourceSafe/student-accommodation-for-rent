import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import {Portal} from "../portal/Portal"
import "../pages/town/styles-town.css"
import { VitalStats } from "../portal/VitalStats/VitalStats";
import { isDesktopAtom } from '../portal/appState/appState';
import { useAtomState } from '@zedux/react';

const Home = () => {
const [isDesktop, setIsDesktop] = useAtomState(isDesktopAtom);




const [windowSize, setWindowSize] = useState([
  window.innerWidth,
  window.innerHeight,
]);


useEffect(() => {
  const handleWindowResize = () => {
    setWindowSize([window.innerWidth, window.innerHeight]);
  };

  window.addEventListener('resize', handleWindowResize);

  return () => {
    window.removeEventListener('resize', handleWindowResize);
  };
}, []);




  setIsDesktop(windowSize[0] > 600);



  
  return (
    <div>
      <div style = {{display:'flex', justifyContent:'space-between'}}>
        <div>
          {isDesktop &&  <h1>Student Accommodation For Rent</h1>    }
        </div>
        <div>
          {/* {isDesktop && <VitalStats> </VitalStats>} */}
        </div>            
      </div>
      

      
      <Portal   initTown={1} initBeds={3} initArea={3} initType={1} ></Portal>

      
      <ul style = {{display:"flex", flexWrap:"wrap"}}>
        {/* townSectionStart */}            

<li><Link to="/student-accommodation-in-bath">Student Accommodation in Bath</Link></li>
        {/* townSectionEnd */}        
      </ul>

    </div>  
  )
};

export default Home;
