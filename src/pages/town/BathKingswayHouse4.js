
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


const  BathKingswayHouse4 = () => 
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

    return (<><h1>Shared 4 Bedroom Houses for Students in Kingsway, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-houses-for-students-in-kingsway-bath.png')} alt='Shared 4 Bedroom Houses for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_houses_for_students_in_kingsway,_bath">Prices for Shared 4 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive">Shared 4 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_houses_for_students_in_kingsway,_bath">Cheap Shared 4 Bedroom Houses for Students in Kingsway, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_kingsway,_bath__recently_added">Shared 4 Bedroom Houses for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced">Shared 4 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Prices for Shared 4 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£618 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Houses for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_houses_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Houses for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>Are you tired of dealing with multiple utility providers and splitting bills with roommates in your 4-bedroom student house in Kingsway, Bath, Somerset? Look no further! Signing up for an <b>all bills inclusive</b> service through <b>UniBills.com</b> is the solution you've been searching for. By opting for this convenient option, you can <b>concentrate on your studies</b> and not worry about managing various bills each month. With <b>UniBills.com</b>, all your utilities such as water, gas, electricity, and even internet are bundled into one easy payment, allowing you to enjoy the hassle-free, all-inclusive living experience. Say goodbye to complicated bill calculations and hello to simplified living arrangements. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the benefits of stress-free living.</p><a id = "cheap_shared_4_bedroom_houses_for_students_in_kingsway,_bath"> <h2>Cheap Shared 4 Bedroom Houses for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_kingsway,_bath__recently_added"> <h2>Shared 4 Bedroom Houses for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_kingsway,_bath__recently_reduced"> <h2>Shared 4 Bedroom Houses for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summation, finding a shared 4-bedroom house for students in the sought-after Kingsway area of Bath can be a fruitful endeavor. With its close proximity to the University, amenities, and public transportation, this location offers a convenient and vibrant place to live. From spacious living areas to the ease of splitting rent and bills among housemates, shared accommodation provides a comfortable and cost-effective solution for students. Furthermore, forming friendships and creating a supportive environment can enhance the overall student experience. In conclusion, exploring the options available for shared housing in Kingsway can lead to a fulfilling and enjoyable living arrangement for students looking to reside in this vibrant community.</p></>)
};

export default BathKingswayHouse4;