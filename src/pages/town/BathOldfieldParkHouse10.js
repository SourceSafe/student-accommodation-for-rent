
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

    return (<><h1>Shared 10 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-10-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 10 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_10_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 10 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 10 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_10_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 10 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 10 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 10 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_10_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 10 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£540 per month </td><td><button className = 'searchButton' title='View our Shared 10 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_10_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 10 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service from <b>UniBills.com</b> for your 10 bedroom student house in Oldfield Park, Bath, Somerset can really make life easier for you and your housemates. With all bills included in one convenient package, you won't have to worry about budgeting for different utilities each month. Instead, you can <b>concentrate on your studies</b> and enjoying student life to the fullest. <b>UniBills.com</b> takes care of all the hassle, from setting up accounts to dealing with any issues that may arise, leaving you with more time to relax and socialize. Say goodbye to endless phone calls to utility providers and hello to the hassle-free all inclusive option provided by <b>UniBills.com</b>. If you're ready to simplify your student living experience, get a quote from <b>UniBills.com</b> or any accommodation on this website today.</p><a id = "cheap_shared_10_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 10 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 10 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 10 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 10-bedroom houses for students in Oldfield Park, Bath can be a great option for those looking to live in a communal setting that is both affordable and convenient. With a variety of amenities nearby, such as pubs, cafes, and supermarkets, students can enjoy a vibrant and bustling community atmosphere. These properties typically offer spacious living areas, multiple bathrooms, and well-equipped kitchens, providing a comfortable and enjoyable living experience for all tenants. Additionally, the close proximity to the University of Bath and public transportation makes commuting to campus a breeze. Overall, choosing to reside in a shared 10-bedroom house in Oldfield Park offers the perfect balance of social living and academic convenience for students in Bath[].</p></>)
};

export default BathOldfieldParkHouse10;