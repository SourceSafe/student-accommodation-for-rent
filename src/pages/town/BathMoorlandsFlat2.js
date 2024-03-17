
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


const  BathMoorlandsFlat2 = () => 
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-2-bedroom-flats-for-students-in-moorlands-bath.png')} alt='Shared 2 Bedroom Flats for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_moorlands,_bath">Prices for Shared 2 Bedroom Flats for Students in Moorlands, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_moorlands,_bath">Cheap Shared 2 Bedroom Flats for Students in Moorlands, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_moorlands,_bath__recently_added">Shared 2 Bedroom Flats for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_moorlands,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_moorlands,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Moorlands, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£680 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 2-bedroom flat in Moorlands, Bath, Somerset? Managing bills and utilities can be time-consuming and stressful, taking away valuable time that you could be using to <b>concentrate on your studies</b>. That's where <b>UniBills.com</b> comes in with their <b>all bills inclusive</b> service. By choosing to subscribe to this convenient option, you can enjoy the hassle-free all-inclusive package provided by <b>UniBills.com</b>. Say goodbye to the worries of keeping track of various bills and payments, and instead focus on what truly matters - your education. <b>UniBills.com</b> takes care of everything, from electricity and water to internet and TV licensing, giving you peace of mind and more time to excel academically. Don't wait any longer - get a quote from UniBills.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_moorlands,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 2-bedroom flats for students in Moorlands, Bath can be an exciting and rewarding experience. With a variety of options available, students can find the perfect living situation to suit their needs and preferences. From modern amenities to convenient locations, these flats offer a comfortable and inviting space for students to thrive in their academic and social pursuits. Additionally, sharing a flat with a roommate can lead to valuable friendships and a sense of community. In conclusion, Moorlands in Bath is a fantastic location for students to find shared 2-bedroom flats that offer both comfort and convenience, making it an ideal place to call home during the academic year.</p></>)
};

export default BathMoorlandsFlat2;