import  './CTAPackage.css'
import { BsFillHouseCheckFill } from "react-icons/bs";
import {UtilityStrip} from '../UtilityStrip/UtilityStrip'
import {partnerAtom} from '../../portal/appState/appState'
import { useAtomState } from '@zedux/react';



export const CTAPackage = (props) =>
{
    const [partnerDetails] = useAtomState(partnerAtom)




const {tag1, tag2,  isMobile} = props;
//const firstLine = tag1 ? tag1 : "Fully Inclusive Utilities"
const firstLine = tag1 ? tag1 : "GET YOUR QUOTE NOW !" 
//const secondLine = tag2 ? tag2 :"Fully Inclusive Utilitiy Bills"
const secondLine = tag2 ? tag2 :"All Bills Included Package"


const utilities = [{src:"https://cdn-p0.unihomes.co.uk/images/icons/22-icon-gas.png?id=7469a38637911d020330035443541388ef57c441", title:"Gas"},
{src:"https://cdn-p0.unihomes.co.uk/images/icons/22-icon-electricity.png?id=7469a38637911d020330035443541388ef57c441", title:"Electricity"},
{src:"https://cdn-p0.unihomes.co.uk/images/icons/22-icon-internet.png?id=7469a38637911d020330035443541388ef57c441", title:"Fibre Internet"},
{src:"https://cdn-p0.unihomes.co.uk/images/icons/22-icon-water.png?id=7469a38637911d020330035443541388ef57c441", title:"Water"},
{src:"https://cdn-p0.unihomes.co.uk/images/icons/22-icon-tv-licence.png?id=7469a38637911d020330035443541388ef57c441", title:"TV Licence"}]


const style = isMobile? "ctaButton ctaButtonMobile" : "ctaButton";




return(      
    <a style = {{ alignItems: 'center', flexDirection: "column", display : "flex", textDecoration: 'none', color: 'white' }} href={partnerDetails.quotelink} target="_blank"> 


        <UtilityStrip/>


        <button className={style}>            
        <div className="ctaLayout">
            <div className="ctaTextLayout">
                <div className="ctaText">{firstLine}</div>                    
                <div className="ctaText2">{secondLine}</div>                    
            </div>

            <img style={{width:'90px'}} src = {partnerDetails.image}></img>

            
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