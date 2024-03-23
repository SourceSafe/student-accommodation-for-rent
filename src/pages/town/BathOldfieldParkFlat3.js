
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


const  BathOldfieldParkFlat3 = () => 
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

    return (<><h1>Shared 3 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 3 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 3 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 3 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 3 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 3 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 3 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 3 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£715 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>If you're a student residing in a 3 bedroom flat in Oldfield Park, Bath, Somerset, subscribing to an <b>all bills inclusive</b> service like <b>UniBills.com</b> can greatly simplify your living experience. With <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option, which means you don't have to worry about separate utility bills each month. This allows you to <b>concentrate on your studies</b> and enjoying student life without the stress of managing various bills. By opting for an <b>all bills inclusive</b> service, you can better budget your expenses and avoid any unexpected costs. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make student living more convenient and enjoyable.</p><a id = "cheap_shared_3_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 3 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="3" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 3 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="3" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 3 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, finding a shared 3-bedroom flat in Oldfield Park, Bath, for students can be a rewarding experience. With its close proximity to local amenities, public transport links, and the University of Bath, it offers a convenient and vibrant living environment for students. The diverse range of properties available in this area cater to different budgets and preferences, ensuring that students can find a comfortable and affordable place to call home. Sharing a flat with other students not only provides companionship but also allows for cost-sharing, making it a practical and economical choice. Overall, Oldfield Park is a popular choice for students seeking accommodation, offering a mix of convenience, affordability, and a lively community atmosphere.</p></>)
};

export default BathOldfieldParkFlat3;