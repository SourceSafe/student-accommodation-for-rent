
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


const  BathBathSpaFlat3 = () => 
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

    return (<><h1>Shared 3 Bedroom Flats for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-flats-for-students-in-bath-spa-bath.png')} alt='Shared 3 Bedroom Flats for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_flats_for_students_in_bath_spa,_bath">Prices for Shared 3 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 3 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_flats_for_students_in_bath_spa,_bath">Cheap Shared 3 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_bath_spa,_bath__recently_added">Shared 3 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced">Shared 3 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 3 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£642 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Flats for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 3-bedroom flat in Bath Spa, Somerset? If so, subscribing to an <b>all bills inclusive</b> service from <b>UniBills.com</b> could be the best decision you make for your living arrangements. With <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option provided, giving you peace of mind and allowing you to <b>concentrate on your studies</b> without worrying about utility bills. By opting for this service, you can avoid any unexpected expenses and easily manage your budget. <b>UniBills.com</b> ensures that all your bills are taken care of, including electricity, water, gas, and internet, making your student life much more convenient. Say goodbye to the stress of splitting bills with your flatmates or dealing with different providers – with <b>UniBills.com</b>, everything is simplified for you. Get a quote from <b>UniBills.com</b> or any accommodation on this website and start enjoying the benefits of <b>all bills inclusive</b> living today.</p><a id = "cheap_shared_3_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 3 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="3" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 3 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="3" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 3 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 3-bedroom flats for students in Bath Spa, Bath can be both exciting and challenging. With many options on the market, it's essential to consider factors such as location, rent costs, and amenities before making a decision. Collaborating with roommates can make the process more manageable and can also lead to forming lasting friendships. Additionally, researching different properties and viewing them in person can help in finding the perfect fit for everyone involved. In conclusion, while the hunt for shared accommodations may require some effort, the end result of living with friends in a convenient location near campus can make it all worthwhile.</p></>)
};

export default BathBathSpaFlat3;