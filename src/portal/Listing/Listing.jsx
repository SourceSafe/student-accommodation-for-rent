
import React from 'react'
import "./listing.css"  
export const  Listing = ({listing}) =>
{  



  const info = listing.addedReduced;
  
  
  return (



    <div className="listing">
      <div className="listing-lhs">
        
            <img className="image1" src={listing.image1}/>                                 

            <div className = "belowImageInfoContainer">                        
            

              <div>                            
                <div className ="listing-pcm" >
                  £{listing.price1} per month
                </div>
                <div className ="listing-pw" >
                  £{listing.price2} per week
                </div>                  
              </div>

              

                { info &&<div className = "addedRecuded">
                  <div>{ listing.addedReduced}</div>                  
                </div> }                  

                      


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

