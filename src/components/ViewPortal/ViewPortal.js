import  './ViewPortal.css'
import { BsFillHouseFill } from "react-icons/bs";

export const ViewPortal = (props) =>
{
    const {description, portalLink} = props;   
    return(    
        <button  className='viewPortalButton'>            
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