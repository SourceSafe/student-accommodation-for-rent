
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


const  BathOldfieldParkHouse6 = () => 
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

    return (<><h1>Shared 6 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 6 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 6 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 6 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 6 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 6 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 6 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 6 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£701 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple utility bills for your student house in Oldfield Park, Bath, Somerset? Say goodbye to those monthly headaches and hello to a stress-free living experience with an <b>all bills inclusive</b> service from <b>UniBills.com</b>. With six bedrooms to manage, the last thing you need is the added responsibility of sorting out bills and making payments. By subscribing to an <b>all bills inclusive</b> service, you can <b>concentrate on your studies</b> and social life, rather than worrying about budgeting for utilities. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, where everything from electricity and water to internet and TV licenses are taken care of in one convenient package. Get a quote from <b>UniBills.com</b> or any accommodation on this web site today and make your student life easier and more enjoyable.</p><a id = "cheap_shared_6_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 6 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 6 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 6 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for shared 6 bedroom houses for students in Oldfield Park, Bath can be a daunting task, but with the right resources and guidance, it can become an exciting and rewarding experience. These spacious residences offer a unique communal living environment, perfect for fostering friendships and creating lasting memories. By choosing to live in a shared 6 bedroom house, students have the opportunity to split costs, making it a more affordable housing option. Additionally, these properties are typically located in convenient locations, close to local amenities and public transportation. In conclusion, living in a shared 6 bedroom house in Oldfield Park provides students with a comfortable and supportive environment to thrive academically and socially while experiencing all that Bath has to offer.</p></>)
};

export default BathOldfieldParkHouse6;