
import React from 'react'
import { useState, useEffect } from 'react';
import "./listing.css"  


export const  Listing = ({listing}) =>
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

  const imageWidth = windowSize[0] < 600 ?  windowSize[0]-50 : 350;
  const imageHeight = windowSize[0] < 600 ?  277 : 'auto';

  const isDesktop = windowSize[0] > 600;

  
  
  
  return (



    <div className="listing">
 
      <div className="listing-lhs">
        
            <img className="image1" style={{width :imageWidth, height:imageHeight}} src={listing.image1}/>                                 

            <div className = "belowImageInfoContainer">                        
            

              <div>                            
                <div className ="listing-pcm" >
                  £{listing.price1} per month
                </div>
                <div className ="listing-pw" >
                  £{listing.price2} per week

                </div>                  
                <div>
          <span>Width: {windowSize[0]}</span>
          <span>Height: {windowSize[1]}</span>
        </div>      
              </div>

          
              
                { info &&<div className = "addedRecuded">
                  <div>{ listing.addedReduced}</div>                  
                </div> }                  
                    
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
    
    

    )
  }

