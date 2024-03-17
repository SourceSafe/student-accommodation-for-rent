
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


const  BathBathSpaFlat2 = () => 
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-flats-for-students-in-bath-spa-bath.png')} alt='Shared 2 Bedroom Flats for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_bath_spa,_bath">Prices for Shared 2 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_bath_spa,_bath">Cheap Shared 2 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_bath_spa,_bath__recently_added">Shared 2 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£818 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 2 bedroom flat in Bath Spa, Bath, Somerset? Are you tired of constantly worrying about paying separate bills for your utilities each month? Look no further than <b>UniBills.com</b> for your all-inclusive solution. Subscribing to an <b>all bills inclusive</b> service allows you to <b>concentrate on your studies</b> without the stress of managing multiple bills. By choosing to enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, you can streamline your living expenses and budget more effectively. With one simple payment each month, you can rest easy knowing that all your bills are taken care of. Say goodbye to the hassle of sorting through multiple bills and hello to the convenience of <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website to simplify your student living experience today.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>After a thorough search for shared 2-bedroom flats for students in Bath Spa, Bath, it is clear that the options are plenty and varied. From modern apartments to cozy townhouses, there is a suitable choice for every student's budget and preferences. The convenience of sharing a flat with a roommate not only reduces living costs but also fosters a sense of companionship and support. Additionally, living in a shared flat can enhance social skills and provide a platform for mutual learning and growth. By utilizing various platforms such as real estate websites, student accommodation agencies, and social media groups, students can easily find their ideal living arrangement in Bath Spa. When looking for shared flats, considering factors like location, amenities, and compatibility with the roommate are essential in ensuring a pleasant living experience. In conclusion, the search for shared 2-bedroom flats in Bath Spa offers a plethora of options for students to explore, providing them with a comfortable and enriching environment to thrive in during their academic journey.</p></>)
};

export default BathBathSpaFlat2;