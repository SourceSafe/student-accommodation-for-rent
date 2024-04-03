import React, {useState, useEffect, useRef} from 'react';
import  "./portal.css"
import Select from 'react-dropdown-select';
import { Listing } from './Listing/Listing';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {withComma} from "../helper/format-helper"
import {Filter} from './Filter/Filter';
import { VitalStats } from './VitalStats/VitalStats';
import { useAtomState } from '@zedux/react';
import { isDesktopAtom, mainStatsAtom, filtersAtom, portalUrlAtom, isStatsLoadingAtom, locationDisplayAtom, isMiniFilterModeAtom, isPortalAtom, searchResultsAtom} from './appState/appState'
import { FaInfoCircle } from "react-icons/fa";
import { MdElectricalServices } from 'react-icons/md';
import  {useNavigate}  from "react-router-dom";
import {  Link } from "react-router-dom";

const Portal =  (props) =>
{        
    const [searchResults, setSearchResults] = useAtomState(searchResultsAtom);  
    const [lastPortalUrl, setLastPortalUrl ] = useAtomState(portalUrlAtom);
    const {reRefresh} = props;      
    const refIndex = useRef(0);
    const urlFormat = "https://kdwytshik8.execute-api.eu-west-2.amazonaws.com/Production/SearchResults";      
    
    const [totalCount, setTotalCount] = useState(0);      
    const [page, setPage] = useState(1);    

    //const [searchResults, setSearchResults] = useState(loadingListings.results);        

    const [isLoading, setIsLoading] = useState(false);                  
    const [url, setURL] = useState();
    const [searchTitle, setSearchTitle] = useState("");                
    const [filters, setFilters] = useAtomState(filtersAtom);
    const [index, setIndex] = useState(0);
    const [isDesktop] = useAtomState(isDesktopAtom);
    const [mainStats, setMainStats] = useAtomState(mainStatsAtom);  
    const [locationDisplay, setLocationDisplay] = useAtomState(locationDisplayAtom);
    const [isMiniFilterMode] = useAtomState(isMiniFilterModeAtom);
    const [isPortal, setIsPortal] = useAtomState(isPortalAtom);
    const prev = "<<";
    const next  = ">>"
    const [isStatsLoading, setIsStatsLoading] = useAtomState(isStatsLoadingAtom)
    
    
    useEffect(() => {      
      if(filters)
        {
          setPage(1)          
          reRequest();
        }          
    }, [filters])



    const reRequest=() =>
    {
      if(filters)
      {    
        if(filters.location)              
        {          
          const locationIdentifier = filters.location === "All" ? filters.town.replace("^", "%5E") : filters.location.replace("^", "%5E");                  
          const url = urlFormat +  "?locationIdentifier=" + locationIdentifier + "&index=" + refIndex.current  + "&minBedrooms=" + filters.beds +  "&maxBedrooms=" + filters.beds + "&propertyTypes=" + filters.propertyTypes + "&minPrice="+ filters.selectedMinPrice+ "&maxPrice=" + filters.selectedMaxPrice + "&sortType=" + filters.sortType;           
          //setPortalUrl(url);
          setURL(url);                      
          
          
          
           
        }
      }

    }
    useEffect(() => {
      setIsPortal(true);
      window.addEventListener('beforeunload', setFalse)      
      return () => {
        setFalse();
        window.removeEventListener('beforeunload', setFalse)
      }
      

    }, [])
    
    const setFalse = (e) => {
      setIsPortal(false);      
    }
    
    
    
                  
    useEffect(() => {
      const fetchData = async () => {
        try {  
          
          if(lastPortalUrl !== url)
          {
            setIsStatsLoading(true)                
            setIsLoading(true);          
            const response = await fetch(url)
            const result = await response.json();          
            setSearchResults(result.results.filter(item=>item.image1 !== ''));
            setTotalCount(result.totalCount);
            setSearchTitle(result.searchTitle);
            setMainStats(result.mainStats);
            setLastPortalUrl(url);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setIsStatsLoading(false)                
          setIsLoading(false);                  

        }
      };
      if(url)
      {
          fetchData();
      }
    }, [url]);

    useEffect(() => {            
      refIndex.current = (page == 0 ? 0 : (page-1) * 24);      
      window.scrollTo(0, 0);  
      reRequest();
    }, [page]);

    

    const isPrev = page > 1;
    const isNext = totalCount / 24 > page;    
    const pageCount =  parseInt(totalCount/ 24) + 1;             
    const prevClassName =  isPrev ? "navButton" : "navButton navButtonDisabled";
    const nextClassName = isNext ? "navButton" : "navButton navButtonDisabled";

    const simplify = (txt) =>
    {
      return txt.replace("detached, bungalow, semi detached, terraced", "Houses")
    }

    

    const buildPropertyRoute = (propertyId) =>
    {
      return `./properties/${propertyId}`

    }

 
    return(

      <div>          
        <div>                
          {!isDesktop && <VitalStats style = {{width:'100%'}}></VitalStats>}                        
          <Filter reRefresh = {reRefresh}/>
          
         <div className = "titledSearch">
          <div style  ={{display:'flex', gap:'10px'}}>              
              <div className = "seachTitle">{simplify(searchTitle)}</div>
              {/* <FaInfoCircle size={20}/> */}
          </div>
                   
          <div>                
                <span className = "resultCount" >{withComma(totalCount)} </span>                
                <span className = "resultCountUnits">results </span>
          </div>                    
        </div>
                         
          <div>
            <div style={{display:'flex'}}>                       
            </div> 
              
                <div className="listings"> 
                  {searchResults?.map( listing => (                  
                  <div key = {listing.propertyId}>
                          <Link title = "View Property Details" className ="viewInfoLink" to = {buildPropertyRoute(listing.propertyId)}>
                          <Listing  key = {listing.propertyId} isDesktop={isDesktop} listing={listing} isPortlet = {false} isLoading={isLoading} ></Listing>   
                          </Link>
                  </div>
                    )
                  )
                    
                  }

                                  
                  
                  
                </div>                                    
              
              </div>
              <div className = "navButtons">
                <button className = {prevClassName} disabled = {!isPrev} onClick={() => setPage(page-1)}> {prev}  Previous </button>
                <label>{`Page ${page} / ${pageCount}`}</label>
                <button className = {nextClassName} disabled = {!isNext} onClick={() => setPage(page+1)}>Next {next} </button>
              </div>                                
          </div>


      


        
        
        </div>

          
                            
    )
}

export {Portal}