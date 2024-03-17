import React, {useState, useEffect, useRef} from 'react';
import  "../portal/portal.css"
import { Listing } from '../portal/Listing/Listing';


export const Portlet =  (props) =>
{          
  let loadingListings;
  const cheapLoadingListings = require("./data/LoadingListingsPortletCheap.json");        
  const latestLoadingListings = require("./data/LoadingListingsPortletLatest.json");        
  const reducedLoadingListings = require("./data/LoadingListingsPortletReduced.json");        

  if(props.loadingFile.includes("Cheap"))
  {
    loadingListings = cheapLoadingListings;
  }
  if(props.loadingFile.includes("Latest"))
  {
    loadingListings = latestLoadingListings;    
  }
  if(props.loadingFile.includes("Reduced"))
  {
    loadingListings = reducedLoadingListings;  
  }

  const [isLoading, setIsLoading] = useState(true);
  const urlFormat = "https://kdwytshik8.execute-api.eu-west-2.amazonaws.com/Production/SearchResults";                
  const {location, town, beds, homeType, sortType,  keyText, title } = props;              
  const [searchResults, setSearchResults] = useState(loadingListings.results);            
  const [url, setURL] = useState();
  const [searchTitle, setSearchTitle] = useState("");                        
       
    const reRequest=() =>
    {      
        if(location)              
        {          
          const locationIdentifier = location === "All" ? town.replace("^", "%5E") : location.replace("^", "%5E");                  
          const url = urlFormat +  "?locationIdentifier=" + locationIdentifier +  "&minBedrooms=" + beds +  "&maxBedrooms=" + beds + "&propertyTypes=" + homeType +  "&sortType=" + sortType; 
          setURL(url);
        }      
    }

    const getResults = (listings) =>
    {        
        const removeImageless =  listings.filter(item => item.image1 !== '');
        const state = removeImageless.filter(item => (item.addedReduced.includes(keyText) || keyText===''))
        const ret = state.splice(0,4);
        return ret;
    }
                        
    useEffect(() => {
      const fetchData = async () => {
        try {                              
          setIsLoading(true);
          const response = await fetch(url)
          const result = await response.json();          
          const results = getResults(result.results)          
          setSearchResults(results);          
          setSearchTitle(result.searchTitle + " - " + title);          
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {          
        }
      };
      if(url)
      {
          fetchData();
      }
    }, [url]);

    useEffect(() => {                        
      reRequest();
    }, []);
        
    return(
      <div>          
        <div>                                                   
          <div>
            <div style={{display:'flex'}}>                       
            </div> 
                <div className="listings"> 
                  {searchResults?.map(listing => <Listing  key = {listing.propertyId} isPortlet={true}  listing={listing} isLoading={isLoading}  ></Listing>)}  
                </div>                                    
              </div>              
          </div>                    
          <div className = "titledSearch">
          <div style  ={{display:'flex', gap:'10px'}}>              
              <div className = "seachTitle">{searchTitle}</div>            
          </div>                             
        </div>                         
        </div>                                    
    )
}

