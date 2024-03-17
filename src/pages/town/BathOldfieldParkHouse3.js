
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


const  BathOldfieldParkHouse3 = () => 
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

    return (<><h1>Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 3 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£631 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in a 3 bedroom student house in Oldfield Park, Bath, Somerset can be both exciting and challenging. With the demands of coursework and social activities, the last thing you want to worry about is managing bills. This is where <b>UniBills.com</b> comes in with their <b>all bills inclusive</b> service. By opting for this convenient package, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With all bills, including utilities and WiFi, taken care of, you can <b>concentrate on your studies</b> and social life without the stress of budgeting and keeping track of various bills. This service not only saves you time but also allows you to better manage your finances. With <b>UniBills.com</b>, you can easily get a quote for your 3 bedroom student house in Oldfield Park, Bath, Somerset. Don't wait any longer - make your student life easier and more enjoyable by choosing an <b>all bills inclusive</b> service. Get a quote from <b>UniBills.com</b> or any accommodation on this web site.</p><a id = "cheap_shared_3_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, looking for a shared 3-bedroom house for students in Oldfield Park, Bath can be a rewarding experience. With its vibrant student community and close proximity to both the city center and the University of Bath, Oldfield Park offers an ideal location for student living. By sharing a house with two other students, you can split the rent and utilities costs, making it a more affordable option compared to living alone. Additionally, sharing a house can provide a sense of camaraderie and support as you navigate your academic journey together. So whether you're studying for exams, exploring the local pubs and cafes, or just chilling out in the cozy living room, a shared 3-bedroom house in Oldfield Park could be the perfect choice for your student life.</p></>)
};

export default BathOldfieldParkHouse3;