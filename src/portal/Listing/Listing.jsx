import React from 'react'
import { useState, useEffect } from 'react';
import LoadingOverlay from 'react-loading-overlay-ts';
import 'rc-slider/assets/index.css';
import {withComma} from "../../helper/format-helper"
import { useAtomState } from '@zedux/react';
import { isDesktopAtom, mainStatsAtom, filtersAtom, isLoadingAtom, locationDisplayAtom } from '../appState/appState'


import "./listing.css"  


export const  Listing = ({listing}) =>
{    


  const [isLoading] = useAtomState(isLoadingAtom);
  const [isDesktop] = useAtomState(isDesktopAtom);
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
  // const imageHeight = windowSize[0] < 600 ?  'auto' : 277;
  const imageHeight = windowSize[0] < 600 ?  300 : 250;
  // const isDesktop = windowSize[0] > 600;
  

  const startColor = 'gainsboro';  
  const endColor = 'black';  



  
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
          


                <div>

                { !isDesktop && 
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
                            
            </div>        
      </div>


      {isDesktop && <div className="listing-rhs">
        <div className= "listing-address"> {listing.add1}</div>                          
        <div className= "listing-subheader"> {listing.add2}</div>
        <div className= "listing-text"> 
        {listing.description}
        </div>
         
      </div> }


    </div>
    
    </LoadingOverlay>

    )
  }

