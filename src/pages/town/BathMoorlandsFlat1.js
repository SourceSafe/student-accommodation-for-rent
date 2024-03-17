
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Moorlands, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-1-bedroom-flats-for-students-in-moorlands-bath.png')} alt='Shared 1 Bedroom Flats for Students in Moorlands, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_moorlands,_bath">Prices for Shared 1 Bedroom Flats for Students in Moorlands, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_moorlands,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Moorlands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_moorlands,_bath">Cheap Shared 1 Bedroom Flats for Students in Moorlands, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_moorlands,_bath__recently_added">Shared 1 Bedroom Flats for Students in Moorlands, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_moorlands,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Moorlands, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_moorlands,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Moorlands, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1200 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Moorlands, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71107")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_moorlands,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Moorlands, Bath - All Bills Inclusive</h2></a><p>Living in a 1-bedroom student flat in Moorlands, Bath, Somerset can be a fantastic experience, especially when you subscribe to an <b>all bills inclusive</b> service. <b>UniBills.com</b> offers the perfect solution to help you <b>concentrate on your studies</b> without the stress of managing multiple bills. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided, covering utilities such as water, electricity, gas, internet, and even council tax. This means no more worrying about unexpected costs or dividing bills with flatmates. By opting for an <b>all bills inclusive</b> service, you can simplify your student life and focus on what matters most. Get a quote from <b>UniBills.com</b> or any accommodation on this website, and make your student living experience in Moorlands, Bath, Somerset, a smooth and convenient one.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_moorlands,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Moorlands, Bath</h2></a><p><Portlet location="REGION^71107" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_moorlands,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Moorlands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71107" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_moorlands,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Moorlands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71107" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 1-bedroom flats for students in Moorlands, Bath offers a range of benefits including affordability, convenience, and the opportunity to live with like-minded individuals. By pooling resources with roommates, students can reduce the financial burden of living independently while still enjoying a private space. The proximity to local amenities and public transportation also adds to the appeal of these flats, making it easy for students to access everything they need for a comfortable and convenient lifestyle. Overall, choosing a shared 1-bedroom flat in Moorlands can provide students with a great living situation that balances privacy and social interaction, making it an ideal choice for those seeking a supportive and dynamic community during their time in Bath.</p></>)
};

export default BathMoorlandsFlat1;