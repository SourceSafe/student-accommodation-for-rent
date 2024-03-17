
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


const  BathOldfieldParkFlat9 = () => 
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

    return (<><h1>Shared 9 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-9-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 9 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_9_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 9 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 9 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_9_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 9 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 9 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 9 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_9_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 9 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£700 per month </td><td><button className = 'searchButton' title='View our Shared 9 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=9&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_9_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 9 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 9 bedroom student flat in Oldfield Park, Bath, Somerset can be a game-changer. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided, allowing you to <b>concentrate on your studies</b> without the stress of managing utility bills. Imagine the relief of not having to worry about splitting bills with housemates or dealing with unexpected expenses. <b>UniBills.com</b> takes care of everything, ensuring you have a seamless living experience. By opting for an <b>all bills inclusive</b> service, you can budget more effectively and avoid any financial surprises. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Bath much more convenient and stress-free.</p><a id = "cheap_shared_9_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 9 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="9" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 9 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="9" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 9 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="9" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the bustling student neighborhood of Oldfield Park in Bath, shared 9-bedroom flats offer an ideal living arrangement for those seeking affordable housing with their peers. These spacious accommodations provide a sense of community and camaraderie, making it easier for students to make lasting friendships and create a supportive environment for their academic endeavors. With multiple bedrooms available, students can split the cost of rent and utilities, making living expenses more manageable. Furthermore, opting for a shared 9-bedroom flat in Oldfield Park allows for a rich cultural exchange, as students from diverse backgrounds come together under one roof. In conclusion, choosing a 9-bedroom flat in this vibrant area not only offers a practical solution to student accommodation needs but also enriches the overall university experience.</p></>)
};

export default BathOldfieldParkFlat9;