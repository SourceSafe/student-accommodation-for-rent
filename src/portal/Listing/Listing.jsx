import React from 'react'
import { useState, useEffect } from 'react';
import PlaceholderLoading from 'react-placeholder-loading'
import LoadingOverlay from 'react-loading-overlay-ts';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


import "./listing.css"  


export const  Listing = ({listing, loading, isDesktop}) =>
{    
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  const info = listing.addedReduced;
  const imageWidth = windowSize[0] < 600 ?  windowSize[0]-35 : 350;
  const imageHeight = windowSize[0] < 600 ?  'auto' : 277;
  // const isDesktop = windowSize[0] > 600;

  const startColor = 'gainsboro';  
  const endColor = 'black';  


  const picLoading = () =>
  {
    return 

  } 
  
  return (

    <LoadingOverlay    styles={{
      overlay: (base) => ({
        ...base,
        background: 'rgba(255, 255, 255, 0.4)', margin:"0px"
        })}} 
        active={loading}
        >
    <div className="listing"> 
      <div className="listing-lhs">          
             <img className="image1" style={{width :imageWidth, height:imageHeight}} src={listing.image1}/>                                                 
            <div className = "belowImageInfoContainer">                                    
          


                <div>

                <div className= "listing-pic-subheading"> {listing.add2}</div>
                  <div className ="listing-pcm" >
                    £{listing.price1} per month
                  </div>
                  <div className ="listing-pw" >
                    £{listing.price2} per week
                  </div>                            
                  <div className ="addedRecuded" >
                  { listing.addedReduced}
                  </div>                      
                </div>
                            
            </div>        
      </div>


      {isDesktop && <div className="listing-rhs">
        <div className= "listing-address"> {listing.add1}</div>                          
        <div className= "listing-subheader"> {listing.add2}</div>
        <div className= "listing-text"> 
        {decodeURIComponent(listing.description)}
        </div>
         
      </div> }


    </div>
    
    </LoadingOverlay>

    )
  }

