
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


const  BathOldfieldParkHouse10 = () => 
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

    return (<><h1>Shared 10 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-10-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 10 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_10_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 10 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 10 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_10_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 10 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 10 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 10 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_10_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 10 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£540 per month </td><td><button className = 'searchButton' title='View our Shared 10 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_10_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 10 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in a 10-bedroom student house in Oldfield Park, Bath, Somerset can be a fantastic experience, but managing multiple bills for utilities such as gas, electricity, water, and internet can be a real headache. Instead of spending your precious time dealing with bills and utility providers, why not opt for an <b>all bills inclusive</b> service? <b>UniBills.com</b> offers a convenient solution where all your bills are bundled into one easy monthly payment. With this service, you can <b>concentrate on your studies</b> and enjoying student life, without the stress of managing multiple bills. <b>UniBills.com</b> takes care of everything for you, ensuring that you have a hassle-free all-inclusive option. To make your student life even easier, get a quote from <b>UniBills.com</b> or any accommodation on this web site. Say goodbye to bill-related stress and hello to a more convenient way of living.</p><a id = "cheap_shared_10_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 10 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 10 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 10 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 10-bedroom house for students in the vibrant neighborhood of Oldfield Park in Bath can be an exciting but daunting task. With its close proximity to universities, amenities, and transport links, Oldfield Park is a popular choice for student accommodation. When embarking on this search, it is crucial to consider factors such as budget, location, and housemates' preferences. While the demand for large student houses in Oldfield Park may be high, diligent research and communication with letting agencies and landlords can help find the perfect property. By being proactive, flexible, and thorough in the search process, students can secure a spacious and comfortable living space that meets their needs and enhances their university experience.</p></>)
};

export default BathOldfieldParkHouse10;