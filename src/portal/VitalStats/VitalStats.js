import React from 'react'
import  './vitalStats.css';
import { withComma } from '../../helper/format-helper';
import '../portal.css'
import LoadingOverlay from 'react-loading-overlay-ts';
import {useAtomState} from '@zedux/react';

import {isLoadingAtom, mainStatsAtom, locationDisplayAtom, isDesktopAtom} from '../appState/appState'

export const VitalStats = () =>
{
    const [isDesktop] = useAtomState(isDesktopAtom);
    const [isLoading] = useAtomState(isLoadingAtom);
    const [mainStats] = useAtomState(mainStatsAtom);
    const [locationDisplay] = useAtomState(locationDisplayAtom);


    const all = mainStats.All?.length > 0 ? `${withComma(mainStats.All?.split(' ')[0])}` : "";
    const house = mainStats.All?.length > 0 ? `${withComma(mainStats.House?.split(' ')[0])}` : "";
    const flat = mainStats.All?.length > 0 ? `${withComma(mainStats.Flat?.split(' ')[0])}` : "";
    const studio = mainStats.All?.length > 0 ? `${withComma(mainStats.Studio?.split(' ')[0])}` : "";
    const statRowStyle = isDesktop ? "statRow" : "statRowMini";
    
    return (                                                
        <div className = "mainStats">

                    <div className = "mainStatsTitle">Average Student Rents  in {locationDisplay} (ppcm)</div>

                    {/* <LoadingOverlay    styles={{
                        
                    overlay: (base) => ({                                            
                    ...base,
                    width:'100',
                    background: 'rgba(255, 255, 255, 0.7)', margin:"0px"
                    })}} 
                    active={isLoading}
                    > */}
                    <div className={statRowStyle}>
                        
                    <div className="stat">                  
                        <div className="statTitle"> All</div>
                        <div className = "statValue">{all}</div>                        
                    </div>
                    
                    <div className="stat">                  
                        <div className="statTitle"> House</div>
                        <div className = "statValue">{house}</div>                        
                    </div>                    
                    <div className="stat">                  
                        <div className="statTitle"> Flat</div>
                        <div className = "statValue">{flat}</div>                        
                    </div>                        
                    <div className="stat">                  
                        <div className="statTitle"> Studio</div>
                        <div className = "statValue">{studio}</div>                        
                    </div>
            
                    </div>
                    {/* </LoadingOverlay> */}

        </div>                                           
    )
};  