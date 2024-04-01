import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { CTAPackage } from "../../components/CTAPackage/CTAPackage";
import  './PropertyDetail.css'

export const PropertyDetail = (props) =>
{
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const { propertyId } = useParams();
    const [details, setDetails] = useState();
    const [isMobile, setIsMobile] = useState();    

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
    
                    
    return <div className = "propertyDetail">

        
            <h2>Enjoy All Inclusive Utility Bills in this property</h2>
            <p>This property is EXCLUSIVE of bills. To make life easier we've partnered with UniBills.com to offer an All Inclusive Utility Package on this Property. Let UniBills.com  deal with your Gas, Electric, Water, Broadband and TV providers. All you need to do is pay an even split each month. </p>

            {isMobile && 
            <CTAPackage isMobile={isMobile}/>
            }
            

            <h2>Property Images</h2>
            {!isMobile ? <div style = {{display:'flex', width:'50%'}}>
                <img style = {{width:'100%', height:'auto', margin: "10px",borderRadius:'10px'}} src = {details?.images[selectedImageIndex]}></img>
            </div> 
            
            : <div style = {{display:'flex', width:'100%'}}>
                <img style = {{width:'100%', height:'auto', margin: "10px",borderRadius:'10px'}} src = {details?.images[selectedImageIndex]}></img>
            </div>}

            

            
            <div className ={thumbNailStyle}>
                <div style = {{width:'25%', height:'auto', margin: "10px"}}  onClick= {() => {setSelectedImageIndex(0)}}>
                    <img  style = {{width:'100%', borderRadius:'10px'}} src = {details?.images[0]}></img>
                </div>

                <div style = {{width:'25%', height:'auto', margin: "10px"}}  onClick= {() => {setSelectedImageIndex(1)}}>
                    <img  style = {{width:'100%',borderRadius:'10%'}} src = {details?.images[1]}></img>
                </div>

                <div style = {{width:'25%', height:'auto', margin: "10px"}}  onClick= {() => {setSelectedImageIndex(2)}}>
                    <img  style = {{width:'100%',borderRadius:'10%'}} src = {details?.images[2]}></img>
                </div>
            </div>
            

  


            {/* {details?.images.map(image => <img style = {{width:'425px', height:'auto', margin: "10px"}} src = {image}></img>)}  */}



             

            <h2>Letting Details</h2>
            {details?.lettingDetails.map(detail => 
            <ul>       
                <li>
                    <div style ={{display:'flex'}}>
                    <div style ={{minWidth:'150px'}}>{detail.label}</div>
                    <div>{detail.value}</div>            
                    </div>
                </li>
            </ul>
            )} 


            
            <h2>Property Details</h2>
            { details?.descriptionHTML !== null && details?.descriptionHTML !== undefined && 
                    parse(details?.descriptionHTML)
            }


            <h2>Key Features</h2>
            <ul>
            {details?.keyFeatures.map(feature => <li>{feature}</li>)} 
            </ul>

           

            

    </div>
}