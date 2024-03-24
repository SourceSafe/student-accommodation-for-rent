import  './ViewPortal.css'
import { BsFillHouseFill } from "react-icons/bs";

export const ViewPortal = (props) =>
{
    const {description} = props;

    const title = "View Available Properties";
    const title2 = "5 Bedroom Houses in Oldfield Park";
    
    return(    
        <button className='viewPortalButton'>            
            <div className="viewPortalLayout">
                <div className="viewPortalTextLayout">
                    <div className="viewPortalText">{title}</div>                    
                    <div className="viewPortalText2">{title2}</div>                    
                </div>
                <div>
                    <BsFillHouseFill  size = {40} className='viewPortalHouse'/>            
                </div>            
            </div>                                                
        </button>
        )        
}