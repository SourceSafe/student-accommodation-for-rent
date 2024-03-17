
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


const  BathOldfieldParkHouse5 = () => 
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

    return (<><h1>Shared 5 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-5-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 5 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 5 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 5 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 5 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 5 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 5 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 5 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£626 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 5 bedroom house in Oldfield Park, Bath, Somerset, looking for a convenient way to manage your expenses? Consider subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b>. By opting for this service, you can enjoy the hassle-free, all-inclusive option provided by <b>UniBills.com</b>, which covers all your utility bills such as electricity, gas, water, and internet. This means you no longer have to worry about budgeting and paying multiple bills separately, allowing you to <b>concentrate on your studies</b> without the stress of managing household expenses. <b>UniBills.com</b> offers competitive rates and convenient payment options, making it the ideal choice for students seeking a convenient and cost-effective solution. Get a quote from <b>UniBills.com</b> or any accommodation on this website and enjoy the ease and peace of mind that comes with an <b>all bills inclusive</b> service.</p><a id = "cheap_shared_5_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 5 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 5 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 5 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the quest for shared 5 bedroom houses for students in Oldfield Park, Bath, it is evident that these properties offer a convenient and affordable living solution for those studying in the area. With amenities like spacious communal areas, multiple bathrooms, and proximity to university campuses, students can easily find comfort and convenience in these accommodations. From trendy cafes to local shops and parks, Oldfield Park provides a vibrant and lively atmosphere for students to enjoy. Overall, the availability of shared 5 bedroom houses in this neighborhood caters to the needs of students seeking a supportive and sociable living environment while pursuing their academic endeavors in Bath.</p></>)
};

export default BathOldfieldParkHouse5;