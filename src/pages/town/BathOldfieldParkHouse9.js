
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

    return (<><h1>Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-9-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 9 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_9_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_9_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_9_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£685 per month </td><td><button className = 'searchButton' title='View our Shared 9 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 9-bedroom student house in Oldfield Park, Bath, Somerset can bring numerous benefits. With <b>UniBills.com</b>, you can enjoy the convenience of having all your bills, including utilities, internet, and even TV license, rolled into one easy monthly payment. This means you can <b>concentrate on your studies</b> and social life without the stress of managing multiple bills. <b>UniBills.com</b> takes care of everything, allowing you to relax and enjoy the hassle-free all-inclusive option. By opting for an <b>all bills inclusive</b> service, you can also avoid any unexpected costs that may arise throughout the year. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the ease and peace of mind that comes with a fully inclusive living arrangement.</p><a id = "cheap_shared_9_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 9 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 9 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>After carefully searching for a shared 9-bedroom house for students in Oldfield Park, Bath, it is safe to say that the options in this area are plentiful and diverse. With its convenient location close to local amenities and transport links, living in Oldfield Park offers students the best of both worlds. The houses available for rent are spacious and well-maintained, providing a comfortable and conducive environment for studying and socializing. Students will enjoy the vibrant community atmosphere and the opportunity to forge lasting friendships with their housemates. Overall, finding a shared 9-bedroom house in Oldfield Park, Bath, is a fantastic choice for students looking for a well-connected and lively place to call home during their time at university[].</p></>)
};

export default BathOldfieldParkHouse9;