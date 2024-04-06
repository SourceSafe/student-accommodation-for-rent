import {useState, useEffect} from 'react';
import { Link, useParams, useNavigationType } from "react-router-dom";
import {Portal} from "../portal/Portal"
import "../pages/town/styles-town.css"
import { VitalStats } from "../portal/VitalStats/VitalStats";
import { isDesktopAtom,filtersAtom  } from '../portal/appState/appState';
import { atom, useAtomState } from '@zedux/react';
import { MdOutlineQueryStats } from "react-icons/md";
import { BsFillHouseFill} from "react-icons/bs";  
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom'

import {Portlet} from '../portlet/portlet'
import { CTAPackage } from '../components/CTAPackage/CTAPackage';



const Home = () => {
const [isDesktop, setIsDesktop] = useAtomState(isDesktopAtom);
const navigate = useNavigate();
const [buttonClicked, setButtonClicked] = useState(0);
const [filters, setFilters] = useAtomState(filtersAtom);  
const [reRefresh, setReRefresh] = useState(0);            

const nav = useNavigationType();

console.log("Navigation: ",nav);


const [windowSize, setWindowSize] = useState([
  window.innerWidth,
  window.innerHeight,
]);

const routeToPortal = (params ) => {                  
  const queryParameters = new URLSearchParams(params)
  const town= queryParameters.get("townLocationId");
  const location = queryParameters.get("areaLocationId");
  const beds= queryParameters.get("beds");
  const homeType = queryParameters.get("type");        



  const newFilter = { town, location, beds, homeType};
  setFilters(newFilter)          
  setButtonClicked( (state) => Number(state) + 1 )
}

useEffect(()=> 
{
    if(buttonClicked) {
        //navigate(0)
        setReRefresh( (state) => Number(state) + 1 )
    }        
}    
,[buttonClicked]
)




let params = useParams();



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
  console.log(windowSize[0] > 600)
  
  return (
    <div>           
      <div style = {{display:'flex', justifyContent:'space-between'}}>
        <div>
          {isDesktop &&  <h1>Student Accommodation For Rent</h1>    }
        </div>        
      </div>
      
                
      <Portal reRefresh = {reRefresh}/>

            
      {/* tableStatsUniStart */}            
      {/* tableStatsUniEnd */}        
                


      {/* tableStatsTownStart */}      

      {/* tableStatsTownEnd */}      
    </div>  
  )
};

export default Home;
