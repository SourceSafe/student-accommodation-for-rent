import  './CTAPackage.css'
import { BsFillHouseCheckFill } from "react-icons/bs";

import  {Link} from 'react-router-dom';
export const CTAPackage = (props) =>
{
const {description} = props;
const tag1 = "All Bills Included"
const tag2 = "Get an Instant Quote Now"


const route = () =>
{
return(      
    <div>
    <Link to={{ pathname: "https://herewecode.io/" }} target="_blank">Click to open HereWeCode (new tab)</Link>
  </div>)


}

return(  
    
    
    <a href="https://join.splitthebills.co.uk/" target="_blank"> 
        <button onClick={route} className='ctaButton'>            
        <div className="ctaLayout">
            <div className="ctaTextLayout">
                <div className="ctaText">{tag1}</div>                    
                <div className="ctaText2">{tag2}</div>                    
            </div>
            <div>
                <BsFillHouseCheckFill  size = {40} className='ctaHouse'/>            
            </div>            
        </div>                                                
    </button>
        
    </a>




    )   

}