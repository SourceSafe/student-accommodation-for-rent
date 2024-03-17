
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


const  BathOldfieldParkHouse9 = () => 
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

    return (<><h1>Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-9-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 9 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_9_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_9_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_9_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£685 per month </td><td><button className = 'searchButton' title='View our Shared 9 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Imagine living in a spacious 9-bedroom student house in the vibrant neighborhood of Oldfield Park, Bath, Somerset. With so much to focus on during your time at university, the last thing you want to worry about is sorting out utility bills and managing household expenses. This is where subscribing to an <b>all bills inclusive</b> service, such as <b>UniBills.com</b>, can make your life so much easier. By opting for this convenient solution, you can <b>concentrate on your studies</b> and social life without the added stress of dealing with multiple bills each month. Enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>, where all your bills are bundled into one easy payment, allowing you to budget effectively and avoid any unexpected costs. Say goodbye to the headache of splitting bills with housemates and trying to track who owes what. Get a quote from <b>UniBills.com</b> or any accommodation on this web site and experience the convenience and peace of mind that comes with an <b>all bills inclusive</b> service.</p><a id = "cheap_shared_9_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, finding a shared 9 bedroom house for students in Oldfield Park, Bath can be an exciting and rewarding experience. With its convenient location close to both the city center and the University of Bath, this vibrant area offers a perfect balance between studying and socializing. The abundance of amenities, such as shops, restaurants, and green spaces, make Oldfield Park an ideal place for student living. Additionally, sharing a house with other students can be a great way to make new friends and create a supportive community. Whether you are looking for a cozy study space or a lively social atmosphere, Oldfield Park has something for everyone. Don't miss out on the opportunity to be a part of this dynamic student community and experience all that this area has to offer.</p></>)
};

export default BathOldfieldParkHouse9;