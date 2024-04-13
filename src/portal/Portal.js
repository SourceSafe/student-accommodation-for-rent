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
import { isDesktopAtom, mainStatsAtom, filtersAtom, portalUrlAtom, isStatsLoadingAtom, locationDisplayAtom, isMiniFilterModeAtom, isPortalAtom, searchResultsAtom, pageIndexAtom} from './appState/appState'
import { MdElectricalServices } from 'react-icons/md';

import {  Link } from "react-router-dom";

const Portal =  (props) =>
{        
    const [isMobile, setIsMobile] = useState();  
    const [searchResults, setSearchResults] = useAtomState(searchResultsAtom);      
    const [page, setPage] = useAtomState(pageIndexAtom);      
    const [lastPortalUrl, setLastPortalUrl ] = useAtomState(portalUrlAtom);
    const {reRefresh} = props;      
    const refIndex = useRef(0);
    const urlFormat = "https://kdwytshik8.execute-api.eu-west-2.amazonaws.com/Production/SearchResults";      
    
    const [totalCount, setTotalCount] = useState(0);      
    
    const [isLoading, setIsLoading] = useState(false);                  
    const [url, setURL] = useState();    
    const [filters, setFilters] = useAtomState(filtersAtom);
    const [index, setIndex] = useState(0);    
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
          const townlocationIdentifier =  filters.town.replace("^", "%5E");
          const url = urlFormat +  "?townLocationIdentifier=" + townlocationIdentifier + "&locationIdentifier=" + locationIdentifier + "&index=" + refIndex.current  + "&minBedrooms=" + filters.beds +  "&maxBedrooms=" + filters.beds + "&propertyTypes=" + filters.propertyTypes + "&minPrice="+ filters.selectedMinPrice+ "&maxPrice=" + filters.selectedMaxPrice + "&sortType=" + filters.sortType;           
          //setLastPortalUrl(url);
          setURL(url);                      
          
          
          
           
        }
      }

    }
    useEffect(() => {
      const handleWindowSizeChange=() => {
        setIsMobile(window.innerWidth <= 768);            
    }
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
      setIsPortal(true);
      window.addEventListener('beforeunload', setFalse)      
      return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
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
            setIsStatsLoading(true)                
            setIsLoading(true);          
            const response = await fetch(url)
            const queryResult = await response.json();                                  
            setSearchResults(queryResult);                                              
          
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setIsStatsLoading(false)                
          setIsLoading(false);                  

        }
      };
      if(url && lastPortalUrl !== url)
      {
          fetchData();
          setLastPortalUrl(url);
      }
    }, [url,setLastPortalUrl]);

    useEffect(() => {            
      refIndex.current = (page == 0 ? 0 : (page-1) * 24);      
      window.scrollTo(0, 0);  
      reRequest();
    }, [page]);

    

    const isPrev = page > 1;
    const isNext = searchResults.totalCount / 24 > page;    
    const pageCount =  parseInt(searchResults.totalCount/ 24) + 1;             
    const prevClassName =  isPrev ? "navButton" : "navButton navButtonDisabled";
    const nextClassName = isNext ? "navButton" : "navButton navButtonDisabled";

    const simplify = (txt) =>
    {
      return txt?.replace("detached, bungalow, semi detached, terraced", "Houses")
    }

    

    const buildPropertyRoute = (listing) =>
    {
      const {propertyId, description, add2}  = listing
      const billsOfferedByAgent = description.toUpperCase().includes("BILLS");
      return `./properties/${propertyId}/${billsOfferedByAgent}/${add2}`

    }

 
    return(

      <div className = "portal">    

        <div>                
          {isMobile && <VitalStats style = {{width:'100%'}}></VitalStats>}                        
          <Filter reRefresh = {reRefresh}/>                
         <div className = "titledSearch">
          <div>              
              <div className = "seachTitle">{simplify(searchResults.searchTitle)}</div>              
          </div>                   
          <div>                
                <span className = "resultCount" >{withComma(searchResults.totalCount)} </span>                
                <span className = "resultCountUnits">results </span>
          </div>                    
        </div>
                         
          <div>
            <div style={{display:'flex'}}>                       
            </div> 
              
                <div className="listings"> 
                  {searchResults?.results?.filter(item=>item.image1 !== '').map( (listing, index) => (                  
                  <div key = {listing.propertyId + index}>
                          <Link title = "View Property Details" className ="viewInfoLink" to = {buildPropertyRoute(listing)}>
                          <Listing  key = {listing.propertyId + index} isDesktop={!isMobile} listing={listing} isPortlet = {false} isLoading={isLoading} ></Listing>   
                          </Link>
                  </div>
                    )
                  )
                    
                  }

                                  
                  
                  
                </div>                                    
              
              </div>
              <div className = "navButtons">
                <button className = {prevClassName} disabled = {!isPrev} onClick={() => setPage(page =>page -1)}> {prev}  Previous </button>
                <label>{`Page ${page} / ${pageCount}`}</label>
                <button className = {nextClassName} disabled = {!isNext} onClick={() => setPage(page => page+1)}>Next {next} </button>
              </div>                                
          </div>


      


        
        
        </div>

          
                            
    )
}

export {Portal}