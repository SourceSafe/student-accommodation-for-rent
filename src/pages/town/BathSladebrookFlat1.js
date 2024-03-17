
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


const  BathSladebrookFlat1 = () => 
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Sladebrook, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-1-bedroom-flats-for-students-in-sladebrook-bath.png')} alt='Shared 1 Bedroom Flats for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_sladebrook,_bath">Prices for Shared 1 Bedroom Flats for Students in Sladebrook, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_sladebrook,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_sladebrook,_bath">Cheap Shared 1 Bedroom Flats for Students in Sladebrook, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_sladebrook,_bath__recently_added">Shared 1 Bedroom Flats for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_sladebrook,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_sladebrook,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Sladebrook, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1200 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 1 bedroom flat in Sladebrook, Bath, Somerset? Tired of dealing with multiple bills and juggling expenses? It's time to simplify your life by subscribing to an <b>all bills inclusive</b> service. <b>UniBills.com</b> offers you the convenience of having all your bills - including utilities, Wi-Fi, and even TV license - rolled into one easy monthly payment. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social life without the stress of managing different bills. Imagine never having to worry about remembering payment dates or splitting costs with your flatmate. Instead, enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the benefits of stress-free living.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_sladebrook,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_sladebrook,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, looking for shared 1-bedroom flats for students in Sladebrook, Bath can be a rewarding experience. Not only does it offer a sense of community and companionship, but it also provides an affordable housing option for those studying in the area. By opting for a shared living arrangement, students can split the costs of rent and utilities, making it a budget-friendly choice. Additionally, sharing a space with fellow students can enhance the overall college experience by fostering friendships and creating a supportive environment. In conclusion, exploring shared 1-bedroom flats in Sladebrook, Bath is a practical and social accommodation solution for students looking to balance their academic commitments with a comfortable living situation.</p></>)
};

export default BathSladebrookFlat1;