import  './ViewPortal.css'
import {useState, useEffect}  from 'react'
import { atom, useAtomState } from '@zedux/react';
import { BsFillHouseFill } from "react-icons/bs";
import { filtersAtom  } from '../../portal/appState/appState';
import {useNavigate} from 'react-router-dom'

export const ViewPortal = (props) =>
{
    const navigate = useNavigate();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [filters, setFilters] = useAtomState(filtersAtom);              
    const {description, queryParams} = props;   
    

    useEffect(()=> 
    {
        if(buttonClicked && filters) {
            navigate("/")
        }        
    }    
    ,[buttonClicked, filters]
    )
    const routeToPortal = () => {                  
        const queryParameters = new URLSearchParams(queryParams)
        const town= queryParameters.get("townLocationId");
        const location = queryParameters.get("areaLocationId");
        const beds= queryParameters.get("beds");
        const homeType = queryParameters.get("type");                         
        const newFilter = { town, location, beds, homeType};
        setFilters(newFilter)          
        setButtonClicked( (state) => Number(state) + 1 )
        console.log(newFilter);
      }
      

    return(    
        <button  className='viewPortalButton' onClick={() => routeToPortal()}>            
            <div className="viewPortalLayout">
                <div className="viewPortalTextLayout">
                    <div className="viewPortalText">{description}</div>                                        
                </div>
                <div>
                    <BsFillHouseFill  size = {40} className='viewPortalHouse'/>            
                </div>            
            </div>                                                
        </button>
        )        
}