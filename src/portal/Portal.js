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
import { isDesktopAtom, mainStatsAtom, filtersAtom, isLoadingAtom, locationDisplayAtom, isMiniFilterModeAtom, isPortalAtom, townAtom, locationAtom, homeTypeAtom, bedsAtom, sortAtom, minPriceAtom, MaxPriceAtom} from './appState/appState'
import { FaInfoCircle } from "react-icons/fa";
import { MdElectricalServices } from 'react-icons/md';
import  {useNavigate}  from "react-router-dom";





const Portal =  (props) =>
{     
  const [bedFilter] = useAtomState(bedsAtom);  
  const [homeTypeFilter] = useAtomState(homeTypeAtom);  
  const [townFilter] = useAtomState(townAtom);  
  const [locationFilter] = useAtomState(locationAtom);  
  const [sortFilter] = useAtomState(sortAtom);  
  const [minPriceFilter] = useAtomState(minPriceAtom);  
  const [maxPriceFilter] = useAtomState(MaxPriceAtom);  
      
  const queryParameters = new URLSearchParams(window.location.search)
  let town= queryParameters.get("townLocationId");
  let location = queryParameters.get("areaLocationId");
  let beds= queryParameters.get("beds");
  let homeType = queryParameters.get("type");
  let sort = queryParameters.get("sort");
  let minPrice = queryParameters.get("minPrice");
  let maxPrice = queryParameters.get("maxPrice");
    
        
  beds =  bedFilter;   
  homeType = homeTypeFilter;      
  town = townFilter;
  location = locationFilter;
  sort = sortFilter;
  minPrice = minPriceFilter;
  maxPrice = maxPriceFilter;

  
    const refIndex = useRef(0);
    const urlFormat = "https://kdwytshik8.execute-api.eu-west-2.amazonaws.com/Production/SearchResults";      
    const loadingListings = require('./data/LoadingListings.json');        
    const [totalCount, setTotalCount] = useState(0);      
    const [page, setPage] = useState(1);    
    const [searchResults, setSearchResults] = useState(loadingListings.results);    
    const [searchLoading, setSearchLoading] = useState(true);    
    const [loading, setLoading] = useState(true);                  
    const [url, setURL] = useState();
    const [searchTitle, setSearchTitle] = useState("");                
    const [filter, setFilter] = useAtomState(filtersAtom);
    const [index, setIndex] = useState(0);
    const [isDesktop] = useAtomState(isDesktopAtom);
    const [mainStats, setMainStats] = useAtomState(mainStatsAtom);
    const [isLoading, setIsLoading] = useAtomState(isLoadingAtom);
    const [locationDisplay, setLocationDisplay] = useAtomState(locationDisplayAtom);
    const [isMiniFilterMode] = useAtomState(isMiniFilterModeAtom);
    const [isPortal, setIsPortal] = useAtomState(isPortalAtom);
    const prev = "<<";
    const next  = ">>"





              
    useEffect(() => {
      setLoading( searchLoading)
    }, [searchLoading])

    
    useEffect(() => {      
      if(filter)
        {
          setPage(1)          
          reRequest();
        }          
    }, [filter])



    const reRequest=() =>
    {
      if(filter)
      {
      const url = urlFormat +  "?locationIdentifier=" + filter.locationIdentifier + "&index=" + refIndex.current  + "&minBedrooms=" + filter.beds +  "&maxBedrooms=" + filter.beds + "&propertyTypes=" + filter.propertyTypes + "&minPrice="+ filter.selectedMinPrice+ "&maxPrice=" + filter.selectedMaxPrice + "&sortType=" + filter.sortType; 
      setURL(url);
      }

    }
    useEffect(() => {
      setIsPortal(true);
      window.addEventListener('beforeunload', setFalse)      
      return () => {
        window.removeEventListener('beforeunload', setFalse)
      }
      

    }, [])
    
    const setFalse = (e) => {
      setIsPortal(false);      
    }
    
    
    
                  
    useEffect(() => {
      const fetchData = async () => {
        try {                    
          setIsLoading(true);          
          const response = await fetch(url)
          const result = await response.json();          
          setSearchResults(result.results);
          setTotalCount(result.totalCount);
          setSearchTitle(result.searchTitle);
          setMainStats(result.mainStats);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
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

    

 
    return(

      <div>          
        <div>                
          {!isDesktop && <VitalStats style = {{width:'100%'}}></VitalStats>}                        
          <Filter initTownLocationId ={town} initAreaLocationId={location}   initHomeType = {homeType} initBeds={beds} initSort = {sort} initMin = {minPrice} initMax = {maxPrice}  />
          
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
                  {searchResults?.map(listing => <Listing isDesktop={isDesktop} listing={listing} loading={loading} ></Listing>)}  
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