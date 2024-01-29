import React from 'react'
import  './vitalStats.css';
import { withComma } from '../../helper/format-helper';

export const VitalStats = (props) =>
{
    const all =  props?.mainStats?.All;
    const house =  props?.mainStats?.House;
    const flat =  props?.mainStats?.Flat;
    const studio =  props?.mainStats?.Studio;
    const location =  props.location;
    

        return (

            <div>
            { all !== undefined  ?
                            
            <div className = "mainStats">
                    <div  className = "title">{`Average Rent in  ${location}: `}</div>                    
                    <a className = "stat">{`House ${withComma(house?.split(' ')[0])}`}</a>
                    <a className = "stat">{`Flat ${withComma(flat?.split(' ')[0])}`}</a>
                    {studio && <a className = "stat">{`Studio Apartment ${withComma(studio?.split(' ')[0])}`}</a>}
                    <a className = "stat">{`All ${withComma(all)}`}</a>                    
            </div>

            : <div>                
                    <div className = "mainStats">

                        <div>
                            Loading Statistics for {location} ...
                        </div>
                    
                    </div>                
                </div>

            }
            </div>


            
            )

};  