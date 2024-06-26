import React from 'react'
import { useState, useEffect } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';
import 'rc-slider/assets/index.css';
import {withComma} from "../../helper/format-helper"
import "./listing.css"  
import {SummaryBillsBanner} from '../../components/SummaryBillsBanner/SummaryBillsBanner'
import {isBillsIncludedInText} from '../../helper/text-helper'

export const  Listing = (props) =>
{    
  const {listing, isPortlet, isLoading} = props;       
  const listingDescription = listing.description.replaceAll("&amp;", "&");
  const [isMobile,setIsMobile] = useState();    
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

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


  
  const info = listing.addedReduced;
  let imageWidth =  isMobile  ?  windowSize[0]-50 :330;
  const imageHeight = isMobile ?  280 : 250;
  


  if(isPortlet)
  {
    imageWidth = 330;


  }
  

  const  billsOfferedByAgent =isBillsIncludedInText(listing.description);


  
  return (

    <LoadingOverlay    styles={{
      overlay: (base) => ({
        ...base,
        background: 'rgba(255, 255, 255, 0.4)', margin:"0px"
        })}} 
        active={isLoading}
        >
    <div className="listing"> 
      <div className="listing-lhs">          
             <img className="image1" style={{width :imageWidth, height:imageHeight}} src={listing.image1}/>                                                 
            <div className = "belowImageInfoContainer">                                            
                <div style ={{display:'flex', border:'0px solid black', width:'100%'}}>

                  <div style = {{flex:1}}>                  
                    { isMobile && 
                    <div>
                      <div className= "listing-pic-subheading"> {listing.add2}</div>
                      <div className= "listing-pic-subheading2"> {listing.add1}</div>                          
                    </div>
                    }
                      <div className ="listing-pcm" >
                        £{withComma(listing.price1)} per month
                      </div>
                      <div className ="listing-pw" >
                        £{withComma(listing.price2)} per week
                      </div>                            
                      <div className ="addedRecuded" >
                      { listing.addedReduced}
                      </div>
                  </div>

                  <div style = {{flex:1, display:'flex', justifyContent: 'flex-end', alignItems:'flex-end', border:'0px solid black', width:'100%'}}>                                    
                      <SummaryBillsBanner billsOfferedByAgent = {billsOfferedByAgent}></SummaryBillsBanner>                  
                  </div>

                </div>

                            
            </div>        
      </div>

      
      {!isMobile && !isPortlet && <div className="listing-rhs">

        <div className = "textAndBanner">
          <div className = "mainText">                        
            <div className= "listing-address"> {listing.add1}</div>                          
            <div className= "listing-subheader"> {listing.add2}</div>
            <div className= "listing-text"> 
              {listingDescription}
            </div>
          </div>                
          <div className = "banner">
          
            {/* <SummaryBillsBanner billsOfferedByAgent = {billsOfferedByAgent}></SummaryBillsBanner> */}
          </div>
        </div>         
      
    </div> }


  </div>
    
    </LoadingOverlay>

    )
  }

