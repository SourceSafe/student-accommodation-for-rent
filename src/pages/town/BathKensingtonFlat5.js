
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


const  BathKensingtonFlat5 = () => 
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

    return (<><h1>Shared 5 Bedroom Flats for Students in Kensington, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-flats-for-students-in-kensington-bath.png')} alt='Shared 5 Bedroom Flats for Students in Kensington, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_flats_for_students_in_kensington,_bath">Prices for Shared 5 Bedroom Flats for Students in Kensington, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_kensington,_bath__all_bills_inclusive">Shared 5 Bedroom Flats for Students in Kensington, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_flats_for_students_in_kensington,_bath">Cheap Shared 5 Bedroom Flats for Students in Kensington, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_kensington,_bath__recently_added">Shared 5 Bedroom Flats for Students in Kensington, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_kensington,_bath__recently_reduced">Shared 5 Bedroom Flats for Students in Kensington, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_flats_for_students_in_kensington,_bath"> <h2>Prices for Shared 5 Bedroom Flats for Students in Kensington, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£697 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Flats for Students in Kensington, Bath' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_flats_for_students_in_kensington,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Flats for Students in Kensington, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 5 bedroom flat in Kensington, Bath, Somerset, and looking for a stress-free way to manage your expenses? Consider subscribing to an <b>all bills inclusive</b> service from <b>UniBills.com</b>. By opting for this convenient package, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, which covers all your utility bills, including water, gas, electricity, and internet. This means that you no longer have to worry about splitting bills with your flatmates or keeping track of payments. With all your bills taken care of, you can <b>concentrate on your studies</b> and enjoy a peaceful living environment. Say goodbye to budgeting woes and hello to a convenient and carefree living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student life today.</p><a id = "cheap_shared_5_bedroom_flats_for_students_in_kensington,_bath"> <h2>Cheap Shared 5 Bedroom Flats for Students in Kensington, Bath</h2></a><p><Portlet location="REGION^61722" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_kensington,_bath__recently_added"> <h2>Shared 5 Bedroom Flats for Students in Kensington, Bath - Recently Added</h2></a><p><Portlet location="REGION^61722" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_kensington,_bath__recently_reduced"> <h2>Shared 5 Bedroom Flats for Students in Kensington, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61722" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for a shared 5-bedroom flat for students in Kensington, Bath is an exciting venture that offers both convenience and camaraderie. By living in a spacious and well-equipped flat with fellow students, you can enjoy a sense of community while still having your own private space. Shared flats in this area often come with essential amenities such as fully furnished rooms, modern kitchens, and communal living areas, making it easy to settle in and focus on your studies. Additionally, the vibrant neighborhood of Kensington offers a wide range of dining, shopping, and entertainment options, ensuring that you'll never run out of things to do. In conclusion, opting for a shared 5-bedroom flat in Kensington, Bath is a fantastic choice for students looking for a comfortable and social living arrangement.</p></>)
};

export default BathKensingtonFlat5;