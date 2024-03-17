
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


const  BathSladebrookHouse5 = () => 
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

    return (<><h1>Shared 5 Bedroom Houses for Students in Sladebrook, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-5-bedroom-houses-for-students-in-sladebrook-bath.png')} alt='Shared 5 Bedroom Houses for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_houses_for_students_in_sladebrook,_bath">Prices for Shared 5 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive">Shared 5 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_houses_for_students_in_sladebrook,_bath">Cheap Shared 5 Bedroom Houses for Students in Sladebrook, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_sladebrook,_bath__recently_added">Shared 5 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced">Shared 5 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Prices for Shared 5 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£636 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Houses for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_houses_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Houses for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 5 bedroom house in Sladebrook, Bath, Somerset and feeling overwhelmed by managing multiple bills? <b>UniBills.com</b> offers an <b>all bills inclusive</b> service that takes the stress out of budgeting for utilities such as gas, electricity, water, and even broadband. By subscribing to this convenient service, you can <b>concentrate on your studies</b> without the worry of keeping track of numerous bills. <b>UniBills.com</b> ensures a hassle-free living experience by providing a single, all-inclusive monthly payment, allowing you to enjoy the convenience of not having to juggle multiple accounts. Say goodbye to the hassle of budgeting and enjoy the all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website, and simplify your student living experience today.</p><a id = "cheap_shared_5_bedroom_houses_for_students_in_sladebrook,_bath"> <h2>Cheap Shared 5 Bedroom Houses for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_sladebrook,_bath__recently_added"> <h2>Shared 5 Bedroom Houses for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Shared 5 Bedroom Houses for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the search for shared 5-bedroom houses for students in Sladebrook, Bath, numerous options exist that cater to varying preferences and budgets. From spacious and modern properties to cozy and traditional homes, students have a plethora of choices to consider. Location plays a crucial role, with proximity to universities, local amenities, and transport links often being at the top of the priority list. Additionally, factors such as rental prices, lease agreements, and the overall condition of the property are essential to evaluate before making a decision. It's also beneficial for students to consider the compatibility of housemates and the potential for creating a conducive study environment. Overall, finding the right shared 5-bedroom house in Sladebrook requires thorough research, communication with potential housemates, and careful consideration of all aspects before signing any agreements.</p></>)
};

export default BathSladebrookHouse5;