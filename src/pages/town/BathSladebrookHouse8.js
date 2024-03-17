
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


const  BathSladebrookHouse8 = () => 
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

    return (<><h1>Shared 8 Bedroom Houses for Students in Sladebrook, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-8-bedroom-houses-for-students-in-sladebrook-bath.png')} alt='Shared 8 Bedroom Houses for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_8_bedroom_houses_for_students_in_sladebrook,_bath">Prices for Shared 8 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive">Shared 8 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_8_bedroom_houses_for_students_in_sladebrook,_bath">Cheap Shared 8 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_sladebrook,_bath__recently_added">Shared 8 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced">Shared 8 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_8_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Prices for Shared 8 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£798 per month </td><td><button className = 'searchButton' title='View our Shared 8 Bedroom Houses for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_8_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Shared 8 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Are you tired of the constant stress of managing bills while trying to focus on your studies in your 8 bedroom student house in Sladebrook, Bath, Somerset? Look no further than <b>UniBills.com</b> for the perfect solution! Subscribing to an <b>all bills inclusive</b> service means you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With all your bills taken care of in one convenient package, you can <b>concentrate on your studies</b> without the added headache of sorting out utilities and payments. Enjoy the convenience and peace of mind that comes with knowing your bills are covered, allowing you to fully immerse yourself in your academic pursuits. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the benefits of a truly stress-free student living experience.</p><a id = "cheap_shared_8_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Cheap Shared 8 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_sladebrook,_bath__recently_added"> <h2>Shared 8 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Shared 8 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the search for shared 8 bedroom houses for students in Sladebrook, Bath, it's essential to consider various factors. Location-wise, Sladebrook offers a vibrant student community with easy access to local amenities and the University of Bath. Shared housing provides a great opportunity for students to socialize, share costs, and create a supportive living environment. When considering a property, aspects like the number of bathrooms, communal spaces, and proximity to public transport must be evaluated to ensure a comfortable living arrangement. Additionally, a clear agreement on rent distribution and house rules is crucial for a harmonious cohabitation experience. In conclusion, by carefully exploring options and communicating effectively with housemates, students can find the perfect shared accommodation to enhance their university experience in Sladebrook.</p></>)
};

export default BathSladebrookHouse8;