import React, {useState, useEffect, useRef} from 'react';
import  "./portal.css"
import Select from 'react-dropdown-select';
import { Listing } from './Listing/Listing';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import {withComma} from "../helper/format-helper"
import {Filter} from './Filter/Filter';


const Portal =  (props) =>
{          
    const refIndex = useRef(0);
    const urlFormat = "https://kdwytshik8.execute-api.eu-west-2.amazonaws.com/Production/SearchResults";      
    const loadingListings = require('./data/LoadingListings.json');    
    const {setMainStats, isDesktop} = props;          
    const [totalCount, setTotalCount] = useState(0);      
    const [page, setPage] = useState(1);    
    const [searchResults, setSearchResults] = useState(loadingListings.results);    
    const [searchLoading, setSearchLoading] = useState(true);    
    const [loading, setLoading] = useState(true);                  
    const [url, setURL] = useState();
    const [searchTitle, setSearchTitle] = useState("");                
    const [filter, setFilter] = useState();
    const [index, setIndex] = useState(0);
    
        
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
      const fetchData = async () => {
        try {          
          setSearchLoading(true);
          const response = await fetch(url)
          const result = await response.json();          
          setSearchResults(result.results);
          setTotalCount(result.totalCount);
          setSearchTitle(result.searchTitle);
          setMainStats(result.mainStats);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {

          setSearchLoading(false);
          
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
    const prev = "<<";
    const next  = ">>"
    const prevClassName =  isPrev ? "navButton" : "navButton navButtonDisabled";
    const nextClassName = isNext ? "navButton" : "navButton navButtonDisabled";
    
    
    return(
        <div style={{width:"100%"}}>

        
          <Filter isDesktop = {isDesktop} setFilter = {setFilter}></Filter> 
        

        
        {isDesktop && <div className = "titledSearch">
          <div className = "seachTitle">{searchTitle}</div>
          <div>  
                <span className = "resultCount" >{withComma(totalCount)} </span>                
                <span className = "resultCountUnits">results </span>
          </div>                    
        </div>}

                         
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
      
        
        
        

    )
}

export {Portal}