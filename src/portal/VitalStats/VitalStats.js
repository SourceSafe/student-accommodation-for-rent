import React from 'react'
import  './vitalStats.css';
import { withComma } from '../../helper/format-helper';
import '../portal.css'
import LoadingOverlay from 'react-loading-overlay-ts';
import {useAtomState} from '@zedux/react';

import { MdOutlineQueryStats } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { BsFillHouseFill } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { ImStatsBars } from "react-icons/im";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { IoBarChartSharp } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import {  Link } from "react-router-dom";


import {isStatsLoadingAtom, searchResultsAtom, locationDisplayAtom, isDesktopAtom} from '../appState/appState'

export const VitalStats = () =>
{
    const [isDesktop] = useAtomState(isDesktopAtom);    
    const [searchResults] = useAtomState(searchResultsAtom);    
    const [locationDisplay] = useAtomState(locationDisplayAtom);

    const all = searchResults?.mainStats.All?.length > 0 ? `${withComma(searchResults?.mainStats.All?.split(' ')[0])}` : "---";
    const house = searchResults?.mainStats.House?.length > 0 ? `${withComma(searchResults?.mainStats.House?.split(' ')[0])}` : "---";
    const flat = searchResults?.mainStats.Flat?.length > 0 ? `${withComma(searchResults?.mainStats.Flat?.split(' ')[0])}` : "---";
    const studio = searchResults?.mainStats.Studio?.length > 0 ? `${withComma(searchResults?.mainStats.Studio?.split(' ')[0])}` : "--";
    const statRowStyle = isDesktop ? "statRow" : "statRowMini";

    const stripLocation = () =>
    {
        return locationDisplay?.replaceAll(" ", "-").replaceAll(",", "").replaceAll(".", "").replaceAll("'", "").replaceAll("&", "n").replaceAll("(", "-").replaceAll(")", "-").toLowerCase();
    }
    
    const getLocationRoute = () =>
    {
               
        return `student-accommodation-in-${stripLocation()}`
    }

    const getLocationTypeRoute = (type) =>
    {        
        return `student-${type}-in-${stripLocation()}`
    }

    const getLocationStudioRoute = (type) =>
    {        
        return `studio-apartments-for-students-in-${stripLocation()}`
    }
    
    
    return (     


        <div style = {{display:"flex",gap :'40px'}}>                               
            <div className = "mainStats">            

                    <div style = {{display:'flex', alignItems:'center'}}>
                    <div className = "mainStatsTitle">Average Rents (pp pcm) for  </div>

                    <div style = {{fontWeight:'500'}}>{locationDisplay}</div>
                    </div>

                    <div className={statRowStyle}>
                                                                            
                        
                    <div className="stat">                                                          
                    <Link  title = {`View Accommodation Information on ${locationDisplay}`} className ="viewInfoLink" to = {getLocationRoute()} >                                                
                        <div className="statTitle"> All</div>
                        <FaMagnifyingGlassChart className="viewInfoIcon" size = {25}></FaMagnifyingGlassChart>                                                                                                
                        <div className = "statValue">{all}</div>                                                
                        </Link>
                    </div>
                    
                    <div className="stat">   
                        <Link title = {`View Information on Student Houses in ${locationDisplay}`} className ="viewInfoLink" to = {getLocationTypeRoute("houses")}>
                        <div className="statTitle"> House</div>
                        <FaMagnifyingGlassChart className="viewInfoIcon" size = {25}></FaMagnifyingGlassChart>                                                                                                
                        <div className = "statValue">{house}</div>                        
                        </Link>               
                    </div>                    
                    <div className="stat">                  
                        <Link title = {`View Information on Student Flats in ${locationDisplay}`} className ="viewInfoLink" to = {getLocationTypeRoute("flats")}>
                            <div className="statTitle"> Flat</div>
                            <FaMagnifyingGlassChart className="viewInfoIcon"  size = {25}></FaMagnifyingGlassChart>                                                                                                
                            <div className = "statValue">{flat}</div>                        
                        </Link>
                    </div>                        
                    <div className="stat">      
                    <Link  title = {`View Information on Student Studio Apartments in ${locationDisplay}`} className ="viewInfoLink" to = {getLocationStudioRoute()}>
                        <div className="statTitle"> Studio</div>
                        <FaMagnifyingGlassChart className="viewInfoIcon"size = {25}></FaMagnifyingGlassChart>                                                                                                                        
                        <div className = "statValue">{studio}</div>                        
                        </Link>            
                    </div>
                                
                    </div>
                    {/* </LoadingOverlay> */}

        </div>    


        </div>                                      
    )
};  