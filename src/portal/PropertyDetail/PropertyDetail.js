import {  useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { CTAPackage } from "../../components/CTAPackage/CTAPackage";
import  './PropertyDetail.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import {isBillsIncludedInText} from '../../helper/text-helper'
import {CaptureUserDetails} from "../../components/CaptureUserDetails/CaptureUserDetails"
import {partnerAtom} from '../appState/appState'
import { useAtomState } from '@zedux/react';



export const PropertyDetail = (props) =>
{    
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const { propertyId, billsOfferedByAgent, add2 } = useParams();
    const [details, setDetails] = useState();
    const [isMobile,setIsMobile] = useState();        
    const [utilitiesAlreadyOffered, setUtilitiesAlreadyOffered] = useState();
    const [partner] = useAtomState(partnerAtom)
    const enrichLettingDetails = [{label:'Utilities Option', value:`Utilities Option available with ${partner.name}. Let them take out the hassle of dealing with all the providers. You simply pay your monthly split.`}]
    const enrichKeyFeatures = ["Utilities Package Available", `Instant Quote Available from ${partner.name}`]

    const MAIN_WIDTH_DESKTOP = '100%';
    const MAIN_HEIGHT_DESKTOP = '550px';
    const THUMB_WIDTH_DESKTOP = '150px';
    const THUMB_HEIGHT_DESKTOP = '100px';



    const MAIN_WIDTH_MOBILE = '100%';
    const MAIN_HEIGHT_MOBILE = '350px';    
    const THUMB_WIDTH_MOBILE = '100px';
    const THUMB_HEIGHT_MOBILE = '70px';
    
    

    const [mainImageSize, setMainImageSize] = useState();    
    const [thumbImageSize, setThumbImageSize] = useState();    
    
    


const formatPhone = (phone) =>
{
    if(phone === undefined)
    {
        return;
    }
    const c1 = phone?.slice(0,5);
    const c2 = phone?.slice(5,8);
    const c3 = phone?.slice(8,12);

    return `${c1} ${c2} ${c3}`

}
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
        const billsAlreadyOffered =  billsOfferedByAgent==="true" | isBillsIncludedInText(JSON.stringify(details))
        setUtilitiesAlreadyOffered(billsAlreadyOffered)    
    }, [details,billsOfferedByAgent]);



    useEffect(() => {        
        const  mainSize = isMobile == true ? {width: MAIN_WIDTH_MOBILE, height: MAIN_HEIGHT_MOBILE} : {width: MAIN_WIDTH_DESKTOP, height: MAIN_HEIGHT_DESKTOP};
        const  thumbSize = isMobile == true ? {width: THUMB_WIDTH_MOBILE, height: THUMB_HEIGHT_MOBILE} : {width: THUMB_WIDTH_DESKTOP, height: THUMB_HEIGHT_DESKTOP};
        setMainImageSize(mainSize)
        setThumbImageSize(thumbSize)        
    }, [isMobile]);


    const billsOffered = (details) =>
    {
        return billsOfferedByAgent==="true" | isBillsIncludedInText(JSON.stringify(details))

    }

    const buildEnquiryRoute = () => {       
        const tennancyDate = details?.lettingDetails[0].value.replaceAll("/","-")
        

        const ret  = `/enquire/${propertyId}/${details?.title}/${tennancyDate}/${add2}/${utilitiesAlreadyOffered}`;

        
        return ret;

      }

    //const enqRoute = buildEnquiryRoute();

    
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


    // const thumbNailStyle = isMobile ? "thumbNailMobile" : "thumbNail"
    
    
    
    const pictureFlexLayout = isMobile ? 'column' : 'row'
    const phoneRef = `tel:${details?.lettingPhone}`
    
    
    return <div className = "propertyDetail">

        
        
        
        <h2>Property Details</h2>

        <div style={{border:'0px solid black', display:'flex', flexDirection: pictureFlexLayout}}>                
            <div className="pictureSection">                                                                                                    
                <img className = 'mainImage' style = {{width:mainImageSize?.width, height:mainImageSize?.height}} src = {details?.images[selectedImageIndex]}></img>                                
                <div className = "thumbImages">                                    
                    <img  className = "thumbImage" style = {{width:thumbImageSize?.width, height: thumbImageSize?.height}} src = {details?.images[0]} onClick= {() => {setSelectedImageIndex(0)}}></img>                                
                    <img  className = "thumbImage" style = {{width:thumbImageSize?.width, height: thumbImageSize?.height}} src = {details?.images[1]} onClick= {() => {setSelectedImageIndex(1)}}></img>                                        
                    <img  className = "thumbImage" style = {{width:thumbImageSize?.width, height: thumbImageSize?.height}} src = {details?.images[2]} onClick= {() => {setSelectedImageIndex(2)}}></img>                                        
                </div>
            </div>


            <div className = "blurb" style = {{flex:6 , margin:'0px 5px 0px 15px'}}>                                                                

                    
                <div style = {{margin : '10px', width: '95%'}}>
                    <div style = {{marginTop: '5px' ,fontSize:'22px', fontWeight:'bold'}}>{add2}</div>
                    <div style = {{color : 'grey', marginTop: '5px' ,fontSize:'18px', fontWeight:'bold'}}>{details?.title}</div>                
                    <div style = {{marginTop: '10px', display: 'flex', border: '0px solid black', justifyContent: 'space-between'}}>
                        <div style = {{}}>
                            <div style = {{fontSize:'25px', fontWeight:'bold'}}>{details?.mainPrice}</div>
                            <div>{details?.secondaryPrice}</div>                            
                            {/* <div>Added on 22/03/2024</div>         */}
                        </div>                        
                    </div>
                </div>                        

                <h2 style = {{marginTop : "20px"}}>Agent Contact Details</h2>
                

                <div>

                <div style ={{margin: '10px', display:'flex', justifyContent:'space-between'}}>
                    <div>{details?.lettingAgent?.replace("&amp;","&")}</div>                                    
                    {/* <img style ={{width:"100px",marginTop:'-15px'}} src ={details?.lettingLogo}></img>                                     */}
                </div>



                <div style = {{  margin: '15px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>        
                                
                    <div style = {{display:'flex', gap:'10px', alignItems:'center'}}>                 
                        <FaPhone style ={{color:"green"}} size={30}/>
                        <div>

                            <a href={phoneRef}>
                                <div style ={{fontWeight:'bold'}}>{formatPhone(details?.lettingPhone)}</div>
                            </a>
                            <div style ={{fontSize:'smaller', color:"grey"}}>Local call rate</div>
                        </div>
                    </div> 

                    <Link title = "Make an Enquiry" className ="makeEnquiry" to = {buildEnquiryRoute()}>
                        <div style ={{fontWeight:'bold', display:'flex', alignItems: 'center'}}>
                            <MdOutlineMailOutline style ={{color:"green", marginRight:"5px"}} size={35}/>
                            <div>Make an Enquiry</div>
                        </div>        
                    </Link>
                    
                </div>    

                </div>

                
                                
                {details && !billsOffered(details) && 
                <div>
                    <h2>Enjoy All Inclusive Utility Bills for this property</h2>
                    <p>This property is EXCLUSIVE of bills. To make life easier we've partnered with {partner.name} to offer an All Inclusive Utility Package on this Property. Let {partner.name}  deal with your Gas, Electric, Water, Broadband and TV providers. All you need to do is pay an even split each month. </p>
                    {/* <CTAPackage tag1 = "£23.77 pppw" tag2= {"Request a Call Back"} isMobile={isMobile}/> */}
                    <CTAPackage  isMobile={isMobile}/>

                    {/* <CaptureUserDetails/> */}
                </div>
                }

            </div>

        </div>

            
            <h2>Letting Details</h2>
            <ul>    

            { !billsOffered(details) && enrichLettingDetails.map(detail =>             
                <li key = {detail.label}>
                    <div style ={{display:'flex'}}>
                    <div style ={{minWidth:'150px'}}>{detail.label}</div>
                    <div>{detail.value}</div>            
                    </div>
                </li>            
            )} 
                
                               
            {details?.lettingDetails.map(detail =>             
                <li key = {detail.label}>
                    <div style ={{display:'flex'}}>
                    <div style ={{minWidth:'150px'}}>{detail.label.replaceAll("&amp;","&")}</div>
                    <div>{detail.value.replaceAll("&amp;","&")}</div>            
                    </div>
                </li>            
            )} 
            </ul>


      


            
            <h2>Property Details</h2>

            <p>
            
            { details?.descriptionHTML !== null && details?.descriptionHTML !== undefined && 
                    parse(details?.descriptionHTML.replaceAll("&amp;","&"))
            }
            </p>
            
            

            <h2>Key Features</h2>        
            <ul>
                {!billsOffered(details) && 
                    enrichKeyFeatures.map(feature => <div key = {feature}><FaCheck style ={{marginRight:'20px'}} color = "green"/>{feature}</div>)             
                }
                {details?.keyFeatures.map(feature => <div key = {feature}><FaCheck style ={{marginRight:'20px'}} color = "green"/>{feature.replaceAll("&amp;","&")}</div>)}             
            </ul>

           

            

    </div>
}