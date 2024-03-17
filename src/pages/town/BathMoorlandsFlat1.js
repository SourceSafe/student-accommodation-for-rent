
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-1-bedroom-flats-for-students-in-moorlands-bath.png')} alt='Shared 1 Bedroom Flats for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_moorlands,_bath">Prices for Shared 1 Bedroom Flats for Students in Moorlands, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_moorlands,_bath">Cheap Shared 1 Bedroom Flats for Students in Moorlands, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_moorlands,_bath__recently_added">Shared 1 Bedroom Flats for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_moorlands,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_moorlands,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Moorlands, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1200 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 1 bedroom student flat in Moorlands, Bath, Somerset, through <b>UniBills.com</b>, is a smart choice that allows you to <b>concentrate on your studies</b> without the added stress of managing multiple bills. By opting for this convenient option, you can enjoy the hassle-free all-inclusive service provided by <b>UniBills.com</b>, which covers your electricity, water, gas, internet, and other utilities in one simple package. This means no more juggling different payment dates or dealing with unexpected charges, giving you peace of mind and more time to focus on your education. To discover the benefits of the all-inclusive service for your student accommodation, get a quote from <b>UniBills.com</b> or any other accommodation listed on this website. Say goodbye to bill-related headaches and hello to a smooth and easy living experience.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_moorlands,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 1-bedroom flats for students in Moorlands, Bath can be a challenging yet rewarding experience. The availability of such accommodations in this sought-after area provides students with a convenient and affordable living option. Opting for shared living arrangements not only allows students to split costs but also fosters a sense of community and companionship. By exploring various listings and considering factors such as location, amenities, and budget, students can find the perfect shared flat that suits their needs. With careful planning and communication with potential roommates, students can ensure a smooth and fulfilling living experience in Moorlands. Overall, shared 1-bedroom flats offer an excellent opportunity for students to enjoy the benefits of communal living while studying in the vibrant city of Bath.</p></>)
};

export default BathMoorlandsFlat1;