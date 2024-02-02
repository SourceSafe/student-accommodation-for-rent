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


    const all = mainStats.All?.len
    const statRowStyle = isDesktop ? "statRow" : "statRowMini";
    
    return (                                                
        <div className = "mainStats">

                    <div className = "mainStatsTitle">Average Student Rents  in {locationDisplay} (ppcm)</div>

                    <LoadingOverlay    styles={{
                        
                    overlay: (base) => ({
                    ...base,
                    background: 'rgba(255, 255, 255, 0.7)', margin:"0px"
                    })}} 
                    active={isLoading}
                    >
                    <div className={statRowStyle}>

                        
                    <div className="stat">                  
                        <div className="statTitle"> All</div>
                        <div className = "statValue">{`${withComma(mainStats.All?.split(' ')[0])}`}</div>                        
                    </div>
                    
                    <div className="stat">                  
                        <div className="statTitle"> House</div>
                        <div className = "statValue">{`${withComma(mainStats.House?.split(' ')[0])}`}</div>                        
                    </div>                    
                    <div className="stat">                  
                        <div className="statTitle"> Flat</div>
                        <div className = "statValue">{`${withComma(mainStats.Flat?.split(' ')[0])}`}</div>                        
                    </div>                        
                    <div className="stat">                  
                        <div className="statTitle"> Studio</div>
                        <div className = "statValue">{`${withComma(mainStats.Studio?.split(' ')[0])}`}</div>                        
                    </div>
            
                    </div>
                    </LoadingOverlay>

        </div>                                           
    )
};  