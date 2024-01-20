
import React from 'react'
import "./listing.css"  
export const  Listing = ({listing}) =>
{  
  return (



    <div className="listing">
      <div className="listing-lhs">
      
            <img className="image1" src={listing.image1}/>                                 
            <div className="price-container">                        
              <div className ="listing-pcm" >
              £{listing.price1} per month
              </div>
              <div className ="listing-pw" >
              £{listing.price2} per week
              </div>          
            </div>            
      
      </div>
      <div className="listing-rhs">


          <div className= "listing-address"> {listing.add1}</div>                  

        
        <div className= "listing-subheader"> {listing.add2}</div>

        <div className= "listing-text"> 
        {listing.description}

        </div>
        

      </div>           
    </div>
    
    

    )
  }

