
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

    return (<><h1>Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 3 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£631 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in a 3-bedroom student house in Oldfield Park, Bath, Somerset, can be both exciting and challenging. One way to make your experience more enjoyable is by opting for an <b>all bills inclusive</b> service. With <b>UniBills.com</b>, you can enjoy the convenience of having all your utility bills taken care of in one simple monthly payment. This means you can <b>concentrate on your studies</b> and social life without the worry of budgeting for different bills each month. By choosing to enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, you can save time and energy that can be better spent on your academic pursuits and personal growth. So why stress over managing multiple bills when you can simplify your living arrangements and make the most out of your student experience? Get a quote from <b>UniBills.com</b> or any accommodation on this website and see how an <b>all bills inclusive</b> service can enhance your student life in Bath.</p><a id = "cheap_shared_3_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for a shared 3-bedroom house for students in Oldfield Park, Bath, offers a great opportunity for co-living with peers in a vibrant and student-friendly community. With its close proximity to local amenities, excellent transport links to the university and city center, and a variety of affordable housing options, Oldfield Park is an ideal location for student accommodation. Living in a shared house promotes a sense of community, fosters stronger friendships, and allows for a more cost-effective living arrangement. Additionally, the diverse range of activities, shops, cafes, and parks in the area ensures a well-rounded student experience. In conclusion, choosing to look for a shared 3-bedroom house in Oldfield Park is a practical and enjoyable option for students seeking a comfortable and sociable living environment during their time at university.</p></>)
};

export default BathOldfieldParkHouse3;