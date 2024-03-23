
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

    return (<><h1>Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 3 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£631 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 3-bedroom house in Oldfield Park, Bath, Somerset? If so, subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b> could be a game-changer for you. By opting for this service, you can have all your utility bills, including water, gas, electricity, and even internet, conveniently grouped into one monthly payment. This means no more stressing over multiple bills and due dates, allowing you to <b>concentrate on your studies</b> instead. Say goodbye to the hassle of managing different accounts and enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>. With just one payment to worry about, you can save time and energy that would have been spent on bill management. Get a quote from <b>UniBills.com</b> or any accommodation on this website to simplify your student living experience in Oldfield Park.</p><a id = "cheap_shared_3_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 3 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 3 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 3 bedroom houses for students in Oldfield Park, Bath can provide a convenient and cost-effective living arrangement for students in this vibrant and bustling area. By living with housemates, students can share the responsibility of rent and bills, making it more affordable. Additionally, having housemates can create a sense of community and friendship, making the college experience more enjoyable. The location of Oldfield Park offers easy access to amenities, such as supermarkets, pubs, and transportation links, making it an ideal choice for student living. Overall, finding a shared house in Oldfield Park can offer students a comfortable and sociable living environment while studying in Bath.</p></>)
};

export default BathOldfieldParkHouse3;