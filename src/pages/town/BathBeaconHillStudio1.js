
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


const  BathBeaconHillStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Beacon Hill, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-beacon-hill-bath.png')} alt='Studio Apartments for Students in Beacon Hill, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_beacon_hill,_bath">Prices for Studio Apartments for Students in Beacon Hill, Bath</a></li><li><a href = "#studio_apartments_for_students_in_beacon_hill,_bath__all_bills_inclusive">Studio Apartments for Students in Beacon Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_beacon_hill,_bath">Cheap Studio Apartments for Students in Beacon Hill, Bath</a></li><li><a href = "#studio_apartments_for_students_in_beacon_hill,_bath__recently_added">Studio Apartments for Students in Beacon Hill, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_beacon_hill,_bath__recently_reduced">Studio Apartments for Students in Beacon Hill, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_beacon_hill,_bath"> <h2>Prices for Studio Apartments for Students in Beacon Hill, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1309 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Beacon Hill, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^61718")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_beacon_hill,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Beacon Hill, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for a hassle-free living experience in Beacon Hill, Bath, Somerset? Look no further than <b>UniBills.com</b> for an <b>all bills inclusive</b> service for your 1 bedroom student Studio. By subscribing to this convenient option, you can enjoy the peace of mind of having all your bills, including utilities and Wi-Fi, covered in one easy monthly payment. This means you can <b>concentrate on your studies</b> and social life without the worry of managing multiple bills. <b>UniBills.com</b> takes care of all the tedious details, allowing you to fully immerse yourself in your student experience. Say goodbye to bill-related stress and hello to a seamless living arrangement. Get a quote from UniBills.</p><a id = "cheap_studio_apartments_for_students_in_beacon_hill,_bath"> <h2>Cheap Studio Apartments for Students in Beacon Hill, Bath</h2></a><p><Portlet location="REGION^61718" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_beacon_hill,_bath__recently_added"> <h2>Studio Apartments for Students in Beacon Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^61718" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_beacon_hill,_bath__recently_reduced"> <h2>Studio Apartments for Students in Beacon Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61718" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, looking for studio apartments for students in Beacon Hill, Bath can be a rewarding yet challenging experience. The historic ambiance and convenient location of Beacon Hill offer a unique living experience for students. However, the competitive rental market and high demand for accommodations in this area can make finding the ideal studio apartment a daunting task. It is crucial for students to prioritize their needs, such as proximity to the university, budget constraints, and living preferences, in order to find a studio that meets their requirements. In conclusion, with careful research, planning, and a proactive approach to the rental search process, students can secure a cozy and convenient studio apartment in Beacon Hill that enhances their overall academic and living experience.</p></>)
};

export default BathBeaconHillStudio1;