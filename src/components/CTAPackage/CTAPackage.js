import  './CTAPackage.css'
import { BsFillHouseCheckFill } from "react-icons/bs";

export const CTAPackage = (props) =>
{
const {tag1, tag2,  isMobile} = props;
const firstLine = tag1 ? tag1 : "All Bills Included"
const secondLine = tag2 ? tag2 :"Get an Instant Quote Now"


const style = isMobile? "ctaButton ctaButtonMobile" : "ctaButton";

return(      
    <a style = {{ textDecoration: 'none', color: 'white' }} href="https://join.splitthebills.co.uk/" target="_blank"> 
        <button className={style}>            
        <div className="ctaLayout">
            <div className="ctaTextLayout">
                <div className="ctaText">{firstLine}</div>                    
                <div className="ctaText2">{secondLine}</div>                    
            </div>
            <div>
                <BsFillHouseCheckFill  size = {40} className='ctaHouse'/>                            
            </div>            
        </div>                                                
    </button>
        
    </a>




    )   

}