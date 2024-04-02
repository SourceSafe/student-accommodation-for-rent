import  './CTAPackage.css'
import { BsFillHouseCheckFill } from "react-icons/bs";

export const CTAPackage = (props) =>
{
const {tag1, tag2,  isMobile} = props;
const firstLine = tag1 ? tag1 : "All inclusive Utilities"
const secondLine = tag2 ? tag2 :"Get an Instant Quote Now"


const style = isMobile? "ctaButton ctaButtonMobile" : "ctaButton";

return(      
    <a style = {{ textDecoration: 'none', color: 'white' }} href="https://app.fusedbills.co.uk/signup/about" target="_blank"> 
        <button className={style}>            
        <div className="ctaLayout">
            <div className="ctaTextLayout">
                <div className="ctaText">{firstLine}</div>                    
                <div className="ctaText2">{secondLine}</div>                    
            </div>

            <img src = 'https://app.fusedbills.co.uk/img/fused_logo.png'></img>

            
            <div>

            </div>
             <div>
                <BsFillHouseCheckFill   size = {40} className='ctaHouse'/>                            
            </div>             
        </div>                                                
    </button>
        
    </a>




    )   

}