
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


const  BathCrescentGardensFlat9 = () => 
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

    return (<><h1>Shared 9 Bedroom Flats for Students in Crescent Gardens, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-9-bedroom-flats-for-students-in-crescent-gardens-bath.png')} alt='Shared 9 Bedroom Flats for Students in Crescent Gardens, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_9_bedroom_flats_for_students_in_crescent_gardens,_bath">Prices for Shared 9 Bedroom Flats for Students in Crescent Gardens, Bath</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_crescent_gardens,_bath__all_bills_inclusive">Shared 9 Bedroom Flats for Students in Crescent Gardens, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_9_bedroom_flats_for_students_in_crescent_gardens,_bath">Cheap Shared 9 Bedroom Flats for Students in Crescent Gardens, Bath</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_added">Shared 9 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Added</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_reduced">Shared 9 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_9_bedroom_flats_for_students_in_crescent_gardens,_bath"> <h2>Prices for Shared 9 Bedroom Flats for Students in Crescent Gardens, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£700 per month </td><td><button className = 'searchButton' title='View our Shared 9 Bedroom Flats for Students in Crescent Gardens, Bath' onClick={() => routeToPortal("?&beds=9&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_9_bedroom_flats_for_students_in_crescent_gardens,_bath__all_bills_inclusive"> <h2>Shared 9 Bedroom Flats for Students in Crescent Gardens, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 9 bedroom student flat in Crescent Gardens, Bath, Somerset can greatly simplify your student life. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided, taking the stress out of managing multiple bills and allowing you to <b>concentrate on your studies</b>. No more worrying about utility bills, internet charges, or council tax - everything is covered in one easy monthly payment. This not only saves you time and effort but also helps you budget effectively without any surprise costs. <b>UniBills.com</b> ensures that all your essential services are taken care of, giving you peace of mind throughout the academic year. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the convenience of an <b>all bills inclusive</b> service for your student accommodation.</p><a id = "cheap_shared_9_bedroom_flats_for_students_in_crescent_gardens,_bath"> <h2>Cheap Shared 9 Bedroom Flats for Students in Crescent Gardens, Bath</h2></a><p><Portlet location="REGION^71096" beds="9" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_added"> <h2>Shared 9 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Added</h2></a><p><Portlet location="REGION^71096" beds="9" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_reduced"> <h2>Shared 9 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71096" town="REGION^116" beds="9" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for shared 9 bedroom flats for students in Crescent Gardens, Bath provides a unique and exciting opportunity for communal living in a vibrant and student-friendly neighborhood. With ample space to accommodate a large group of friends or classmates, these flats offer a cost-effective and sociable living arrangement perfect for students on a budget. The convenience of shared facilities such as kitchens, living rooms, and bathrooms fosters a tight-knit community among residents, making it easier to establish friendships and create lasting memories. Additionally, the central location of Crescent Gardens ensures easy access to nearby amenities, shops, and public transportation, offering a perfect balance between work and play. In conclusion, opting for a shared 9 bedroom flat in Crescent Gardens, Bath not only provides a comfortable and convenient living situation but also promotes a sense of belonging and camaraderie among students, making it a top choice for those seeking a dynamic and enriching university experience.</p></>)
};

export default BathCrescentGardensFlat9;