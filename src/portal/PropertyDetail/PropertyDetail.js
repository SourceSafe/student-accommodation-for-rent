import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { CTAPackage } from "../../components/CTAPackage/CTAPackage";
import  './PropertyDetail.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

export const PropertyDetail = (props) =>
{
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const { propertyId } = useParams();
    const [details, setDetails] = useState();
    const [isMobile,setIsMobile] = useState();    

    useEffect(() => {
        const handleWindowSizeChange=() => {
            setIsMobile(window.innerWidth <= 768);            
        }
        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    
    useEffect(() => {
        const fetchData = async () => {
          try {    
            const url = "https://kdwytshik8.execute-api.eu-west-2.amazonaws.com/Production/GetDetail?propertyId=" + propertyId;                        
            const response = await fetch(url)
            const result = await response.json();                      
            result.results.keyFeatures.unshift("Instant Quote Available from Fused.com")
            result.results.keyFeatures.unshift("All Bills Inclusive Option Available.")
            
            result.results.lettingDetails.push({label:'Utilities Option', value:'Utilities Option available with Fused.com. Let them take out the hassle of dealing with all the providers. You simply pay your monthly split.'})
            setDetails(result.results)                                    
          } catch (error) {
            console.error('Error fetching property details:', error);
          } finally {
            
  
          }
        };
        if(propertyId)
        {
            fetchData();
        }
      }, [propertyId]);


      const thumbNailStyle = isMobile ? "thumbNailMobile" : "thumbNail"
    
                    
    
    const pictureFlexLayout = isMobile ? 'column' : 'row'
    
    return <div className = "propertyDetail">

        
        
        
        <h2>Property Details</h2>
        <div style={{display:'flex', flexDirection: pictureFlexLayout}}>
                
            <div className="pictureSection">
                                                                    
                {!isMobile ? <div style = {{display:'flex', width:'95%'}}>
                    <img style = {{width:'100%', height:'auto', margin: "10px",borderRadius:'10px'}} src = {details?.images[selectedImageIndex]}></img>
                </div> 
                
                : <div style = {{display:'flex', width:'100%'}}>
                    <img style = {{width:'100%', height:'auto', margin: "10px",borderRadius:'10px'}} src = {details?.images[selectedImageIndex]}></img>
                </div>}
                        
                <div className ={thumbNailStyle}>
                    <div style = {{width:'35%', height:'auto', margin: "10px"}}  onClick= {() => {setSelectedImageIndex(0)}}>
                        <img  style = {{width:'100%', borderRadius:'10px'}} src = {details?.images[0]}></img>
                    </div>

                    <div style = {{width:'35%', height:'auto', margin: "10px"}}  onClick= {() => {setSelectedImageIndex(1)}}>
                        <img  style = {{width:'100%',borderRadius:'10%'}} src = {details?.images[1]}></img>
                    </div>

                    <div style = {{width:'35%', height:'auto', margin: "10px"}}  onClick= {() => {setSelectedImageIndex(2)}}>
                        <img  style = {{width:'100%',borderRadius:'10%'}} src = {details?.images[2]}></img>
                    </div>
                </div>
            </div>


            <div className = "blurb">                                                                

            
                <div style = {{margin : '10px', width: '95%'}}>
                    <div style = {{marginTop: '5px' ,fontSize:'22px', fontWeight:'bold'}}>7 Bedroom House</div>
                    <div style = {{color : 'grey', marginTop: '5px' ,fontSize:'18px', fontWeight:'bold'}}>Redland, Bristol, BS6 6RT</div>
                

                    <div style = {{marginTop: '10px', display: 'flex', border: '0px solid black', justifyContent: 'space-between'}}>
                        <div style = {{}}>
                            <div style = {{fontSize:'25px', fontWeight:'bold'}}>£3,000 pcm</div>
                            <div>£692 pw</div>
                            <div>Added on 22/03/2024</div>        
                        </div>
                        <div style = {{}}>                    
                            <img style ={{}} src ="https://media.rightmove.co.uk/17k/16974/branch_logo_16974_0004.jpeg"></img>
                        </div>
                    </div>
                </div>                        

                <h2 style = {{}}>Agent Contact Details</h2>
                <div style = {{ gap:'50px',  marginTop:'15px', display:'flex'}}>        
                
                    <div style = {{display:'flex', gap:'10px', alignItems:'center'}}>                 
                        <FaPhone style ={{color:"green"}} size={30}/>
                        <div>
                            <div style ={{fontWeight:'bold'}}>0117 463 2042</div>
                            <div style ={{fontSize:'smaller', color:"grey"}}>Local call rate</div>
                        </div>
                    </div> 

                    <div style ={{fontWeight:'bold', display:'flex', alignItems: 'center'}}>
                        <MdOutlineMailOutline style ={{color:"green", marginRight:"5px"}} size={30}/>
                        <div>Make an Enquiry</div>
                    </div>        
                    
                </div>                            

                <h2>Enjoy All Inclusive Utility Bills for this property</h2>
                <p>This property is EXCLUSIVE of bills. To make life easier we've partnered with Fused.com to offer an All Inclusive Utility Package on this Property. Let Fused.com  deal with your Gas, Electric, Water, Broadband and TV providers. All you need to do is pay an even split each month. </p>

                {/* {isMobile &&  */}
                <CTAPackage isMobile={isMobile}/>
                {/* } */}
            </div>

        </div>

            
            <h2>Letting Details</h2>
            <ul>       
            {details?.lettingDetails.map(detail =>             
                <li key = {detail.label}>
                    <div style ={{display:'flex'}}>
                    <div style ={{minWidth:'150px'}}>{detail.label}</div>
                    <div>{detail.value}</div>            
                    </div>
                </li>            
            )} 
            </ul>


      


            
            <h2>Property Details</h2>
            
            { details?.descriptionHTML !== null && details?.descriptionHTML !== undefined && 
                    parse(details?.descriptionHTML)
            }
            


            <h2>Key Features</h2>
            <ul>
            {details?.keyFeatures.map(feature => <div key = {feature}><FaCheck style ={{marginRight:'20px'}} color = "green"/>{feature}</div>)}             
            </ul>

           

            

    </div>
}