
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles-town.css';
import { MdOutlineQueryStats } from "react-icons/md";
import { BsFillHouseFill } from "react-icons/bs";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { useAtomState } from '@zedux/react';
import { filtersAtom} from '../../portal/appState/appState'
import {Portlet} from '../../portlet/portlet'
import {useNavigate} from 'react-router-dom'


const  BathMoorlandsHouse4 = () => 
{    
    const navigate = useNavigate();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [filters, setFilters] = useAtomState(filtersAtom);              

    const routeToPortal = (params ) => {                  
        const queryParameters = new URLSearchParams(params)
        const town= queryParameters.get("t  ownLocationId");
        const location = queryParameters.get("areaLocationId");
        const beds= queryParameters.get("beds");
        const homeType = queryParameters.get("type");        
        const newFilter = { town, location, beds, homeType};
        setFilters(newFilter)        
        setButtonClicked(true);
    }

    useEffect(()=> 
    {
        if(buttonClicked && filters) {
            navigate("/")
        }        
    }    
    ,[buttonClicked, filters]
    )

    return (<><h1>Shared 4 Bedroom Houses for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-houses-for-students-in-moorlands-bath.png')} alt='Shared 4 Bedroom Houses for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_houses_for_students_in_moorlands,_bath">Prices for Shared 4 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 4 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_houses_for_students_in_moorlands,_bath">Cheap Shared 4 Bedroom Houses for Students in Moorlands, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_moorlands,_bath__recently_added">Shared 4 Bedroom Houses for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced">Shared 4 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Prices for Shared 4 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£618 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Houses for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_houses_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Houses for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 4 bedroom student house in Moorlands, Bath, Somerset is a smart choice for busy students looking to streamline their expenses and minimize stress. With <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option provided by their comprehensive package. By bundling your rent, utilities, internet, and other bills into one convenient payment, you can avoid the headache of managing multiple accounts and deadlines. This allows you to <b>concentrate on your studies</b> and social life without worrying about unexpected costs or fluctuating bills. <b>UniBills.com</b> takes care of all the tedious details, giving you peace of mind and a more enjoyable living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and see how easy and convenient managing your bills can be.</p><a id = "cheap_shared_4_bedroom_houses_for_students_in_moorlands,_bath"> <h2>Cheap Shared 4 Bedroom Houses for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 4 Bedroom Houses for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 4 Bedroom Houses for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for a shared 4-bedroom house for students in Moorlands, Bath can be a challenging yet rewarding experience. With its convenient location near universities and amenities, Moorlands offers the ideal setting for student living. When looking for accommodation, students should consider factors such as budget, location, and amenities. By sharing a house with classmates, students can benefit from a sense of community and companionship while splitting the cost of rent and utilities. Ultimately, finding the perfect shared 4-bedroom house requires thorough research, communication with potential housemates, and careful consideration of individual preferences. In conclusion, students seeking accommodation in Moorlands should approach the house-hunting process with diligence and open communication to secure a comfortable and convenient living arrangement for their academic journey.</p></>)
};

export default BathMoorlandsHouse4;