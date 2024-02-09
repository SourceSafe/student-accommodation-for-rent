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


import {isLoadingAtom, mainStatsAtom, locationDisplayAtom, isDesktopAtom, filtersAtom} from '../appState/appState'

export const VitalStats = () =>
{
    const [isDesktop] = useAtomState(isDesktopAtom);
    const [isLoading] = useAtomState(isLoadingAtom);
    const [mainStats] = useAtomState(mainStatsAtom);
    const [filter] = useAtomState(filtersAtom);
    const [locationDisplay] = useAtomState(locationDisplayAtom);


    const all = mainStats.All?.length > 0 ? `${withComma(mainStats.All?.split(' ')[0])}` : "---";
    const house = mainStats.House?.length > 0 ? `${withComma(mainStats.House?.split(' ')[0])}` : "---";
    const flat = mainStats.Flat?.length > 0 ? `${withComma(mainStats.Flat?.split(' ')[0])}` : "---";
    const studio = mainStats.Studio?.length > 0 ? `${withComma(mainStats.Studio?.split(' ')[0])}` : "--";
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
        return `shared-${type}-for-students-in-${stripLocation()}`
    }

    const getLocationStudioRoute = (type) =>
    {        
        return `studio-apartments-for-students-in-${stripLocation()}`
    }


    
    
    return (     


        <div style = {{display:"flex",gap :'40px'}}>

           

        
            
            <div className = "mainStats">            
                    <div className = "mainStatsTitle">Average Student Rents in {locationDisplay} pp/pm</div>

                    {/* <LoadingOverlay    styles={{
                        
                    overlay: (base) => ({                                            
                    ...base,
                    width:'100',
                    background: 'rgba(255, 255, 255, 0.7)', margin:"0px"
                    })}} 
                    active={isLoading}
                    > */}

                    <div className={statRowStyle}>




                        {/* <button className = 'viewInfoButton'>
                        <a className = 'viewButtonLink' href='www.google.com' title='View our Key Statistics on 5 Bed Houses'>
                        <div className = 'tableButtonAlignment'>
                                <text>5 Bedroom House</text>                            
                                <MdOutlineQueryStats className = 'viewInfoButtonIcon' size={20}></MdOutlineQueryStats>
                            </div>
                            </a>
                        </button>
                        

                                                                      
                        <button className = 'searchButton'>
                            <a className = 'viewButtonLink' href='www.google.com' title='View our 5 Bedroom Properties'>
                                <div className = 'tableButtonAlignment'>
                                    <text>View Properties</text>                            
                                    <BsFillHouseFill className = 'searchButtonIcon' size={17}></BsFillHouseFill>
                                </div>
                            </a>
                        </button>

                       */}



                        
                                        


                                        
                    
                        
                    <div className="stat">                  
                    <a  title = {`View Accommodation Information on ${locationDisplay}`} className ="viewInfoLink" href = {getLocationRoute()} >                        
                        <div className="statTitle"> All</div>
                        <MdOutlineQueryStats className="viewInfoIcon" size = {25}></MdOutlineQueryStats>                                                                                                
                        <div className = "statValue">{all}</div>                                                
                        </a>
                    </div>
                    
                    <div className="stat">   
                        <a title = {`View Information on Student Houses in ${locationDisplay}`} className ="viewInfoLink" href = {getLocationTypeRoute("houses")}>
                        <div className="statTitle"> House</div>
                        <MdOutlineQueryStats size = {25}></MdOutlineQueryStats>                                                                                                
                        <div className = "statValue">{house}</div>                        
                        </a>               
                    </div>                    
                    <div className="stat">                  
                        <a title = {`View Information on Student Flats in ${locationDisplay}`} className ="viewInfoLink" href = {getLocationTypeRoute("flats")}>
                            <div className="statTitle"> Flat</div>
                            <MdOutlineQueryStats size = {25}></MdOutlineQueryStats>                                                                                                
                            <div className = "statValue">{flat}</div>                        
                        </a>
                    </div>                        
                    <div className="stat">      
                    <a  title = {`View Information on Student Studio Apartments in ${locationDisplay}`} className ="viewInfoLink" href = {getLocationStudioRoute()}>
                        <div className="statTitle"> Studio</div>
                        <MdOutlineQueryStats size = {25}></MdOutlineQueryStats>                                                                                                                        
                        <div className = "statValue">{studio}</div>                        
                        </a>            
                    </div>
                                
                    </div>
                    {/* </LoadingOverlay> */}

        </div>    


        </div>                                      
    )
};  