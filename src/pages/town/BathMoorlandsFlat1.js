
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


const  BathMoorlandsFlat1 = () => 
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-1-bedroom-flats-for-students-in-moorlands-bath.png')} alt='Shared 1 Bedroom Flats for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_moorlands,_bath">Prices for Shared 1 Bedroom Flats for Students in Moorlands, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_moorlands,_bath">Cheap Shared 1 Bedroom Flats for Students in Moorlands, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_moorlands,_bath__recently_added">Shared 1 Bedroom Flats for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_moorlands,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_moorlands,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Moorlands, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1200 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Are you a student at the University of Bath looking for a convenient and stress-free accommodation option? Consider subscribing to an <b>all bills inclusive</b> service for your 1 bedroom student flat in Moorlands, Bath, Somerset. <b>UniBills.com</b> offers a hassle-free solution that allows you to <b>concentrate on your studies</b> without the worry of managing multiple utility bills. With all your bills, including electricity, water, heating, and internet, rolled into one convenient package, you can enjoy the peace of mind that comes with knowing your expenses are taken care of. Say goodbye to the time-consuming task of juggling different payments and hello to the ease of managing your budget with a single, fixed monthly cost. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the benefits of the all-inclusive lifestyle today.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_moorlands,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 1-bedroom flats for students in Moorlands, Bath can be both exciting and challenging. The vibrant neighborhood offers an ideal location for student living, with easy access to amenities, transportation, and the University of Bath campus. Students can benefit from the camaraderie of shared living while still enjoying a sense of privacy in their own bedroom. By pooling resources with roommates, students can save on rent and utilities, making it a more affordable option for student accommodation. However, finding the perfect flatmate match and navigating the rental market can be daunting tasks. It is important for students to thoroughly research their options, establish clear communication with potential roommates, and consider factors such as budget, location, and living preferences before making a decision. Overall, with careful planning and consideration, students can find a shared 1-bedroom flat in Moorlands that meets their needs and enhances their college experience.</p></>)
};

export default BathMoorlandsFlat1;