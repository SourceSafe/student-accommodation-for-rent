
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


const  BathDolemeadsFlat1 = () => 
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Dolemeads, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-1-bedroom-flats-for-students-in-dolemeads-bath.png')} alt='Shared 1 Bedroom Flats for Students in Dolemeads, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_dolemeads,_bath">Prices for Shared 1 Bedroom Flats for Students in Dolemeads, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_dolemeads,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Dolemeads, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_dolemeads,_bath">Cheap Shared 1 Bedroom Flats for Students in Dolemeads, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_dolemeads,_bath__recently_added">Shared 1 Bedroom Flats for Students in Dolemeads, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_dolemeads,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Dolemeads, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_dolemeads,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Dolemeads, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1250 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Dolemeads, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71097")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_dolemeads,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Dolemeads, Bath - All Bills Inclusive</h2></a><p>Living in a 1 bedroom student flat in Dolemeads, Bath, Somerset can be a great experience, especially when you choose an <b>all bills inclusive</b> service. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by them. Subscribing to an <b>all bills inclusive</b> service means that you can <b>concentrate on your studies</b> without worrying about paying multiple bills each month. <b>UniBills.com</b> takes care of everything for you, from utilities to Wi-Fi, so you can have peace of mind knowing that everything is sorted. By opting for an <b>all bills inclusive</b> service, you can budget more effectively and avoid any unexpected costs. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Bath more enjoyable and stress-free.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_dolemeads,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Dolemeads, Bath</h2></a><p><Portlet location="REGION^71097" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_dolemeads,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Dolemeads, Bath - Recently Added</h2></a><p><Portlet location="REGION^71097" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_dolemeads,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Dolemeads, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71097" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the bustling city of Bath, students often find themselves searching for suitable accommodation that balances convenient location, affordability, and comfort. Shared 1 bedroom flats in the sought-after area of Dolemeads offer the ideal solution. These properties provide the perfect blend of independence and companionship, allowing students to have their own space while sharing common areas with roommates. The vibrant student community in Dolemeads creates a lively atmosphere, fostering friendships and collaboration. With amenities such as laundry facilities, Wi-Fi, and easy access to public transport, these flats cater to the needs of modern students. Ultimately, choosing a shared 1 bedroom flat in Dolemeads, Bath, not only ensures a comfortable and convenient living arrangement but also offers a rich student experience that enhances personal and academic growth.</p></>)
};

export default BathDolemeadsFlat1;