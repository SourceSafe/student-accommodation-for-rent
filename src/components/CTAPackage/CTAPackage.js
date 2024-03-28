import  './CTAPackage.css'
import { BsFillHouseCheckFill } from "react-icons/bs";

export const CTAPackage = (props) =>
{
const {description} = props;
const tag1 = "All Bills Included"
const tag2 = "Get an Instant Quote Now"




return(  
    
    <a style = {{ textDecoration: 'none', color: 'white' }} href="https://join.splitthebills.co.uk/" target="_blank"> 
        <button className='ctaButton'>            
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