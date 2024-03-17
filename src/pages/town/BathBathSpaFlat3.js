
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

    return (<><h1>Shared 3 Bedroom Flats for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-3-bedroom-flats-for-students-in-bath-spa-bath.png')} alt='Shared 3 Bedroom Flats for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_flats_for_students_in_bath_spa,_bath">Prices for Shared 3 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 3 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_flats_for_students_in_bath_spa,_bath">Cheap Shared 3 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_bath_spa,_bath__recently_added">Shared 3 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced">Shared 3 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 3 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£642 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Flats for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you a student living in Bath Spa and looking for convenience and peace of mind when it comes to managing your household bills? Consider subscribing to an <b>all bills inclusive</b> service for your 3-bedroom student flat through <b>UniBills.com</b>. With this all-encompassing service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, where all your utility bills are covered in one simple monthly payment. By entrusting <b>UniBills.com</b> to handle your bills, you can free up more time to <b>concentrate on your studies</b> and social activities without having to worry about managing multiple bills and budgeting for unexpected costs. Say goodbye to the stress of tracking expenses and late payments, and instead, embrace the simplicity and convenience of an <b>all bills inclusive</b> service. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and streamline your student living experience.</p><a id = "cheap_shared_3_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 3 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="3" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 3 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="3" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 3 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, looking for shared 3-bedroom flats for students in Bath Spa, Bath can be an exciting yet challenging process. With a variety of options available in different neighborhoods, it's important to consider factors such as proximity to campus, budget, and amenities. Utilizing online platforms, working with reputable real estate agents, or connecting with fellow students can all be helpful in finding the perfect living situation. Ultimately, shared accommodation offers a great opportunity for students to build friendships, share expenses, and create a supportive living environment. By carefully considering your needs and preferences, you can find a shared 3-bedroom flat that meets your requirements and enhances your college experience.</p></>)
};

export default BathBathSpaFlat3;