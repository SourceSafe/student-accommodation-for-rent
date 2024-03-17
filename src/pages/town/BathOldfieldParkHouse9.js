
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

    return (<><h1>Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-9-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 9 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_9_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_9_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_9_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£685 per month </td><td><button className = 'searchButton' title='View our Shared 9 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Imagine living in a spacious 9 bedroom student house in the vibrant neighborhood of Oldfield Park in Bath, Somerset. With so many things to juggle at university, worrying about managing multiple bills shouldn't be one of them. By subscribing to an <b>all bills inclusive</b> service from <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>. This means that your electricity, water, gas, internet, and even TV license are all covered in one easy monthly payment. With all bills taken care of, you can <b>concentrate on your studies</b> and fully immerse yourself in the student experience. Say goodbye to the stress of utility bills and hello to convenient living. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and make student life a breeze.</p><a id = "cheap_shared_9_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 9 bedroom houses for students in Oldfield Park, Bath can offer a convenient and affordable housing solution for large groups. These spacious properties often come fully furnished and equipped with essential amenities, making them ideal for student living. The vibrant community atmosphere in Oldfield Park adds to the appeal, with plenty of nearby shops, pubs, and parks to explore. Additionally, the close proximity to both the University of Bath and Bath Spa University makes these houses a practical choice for students looking to balance academics with off-campus living. Overall, renting a shared 9 bedroom house in Oldfield Park provides a comfortable and social living arrangement that fosters a sense of community among students.</p></>)
};

export default BathOldfieldParkHouse9;