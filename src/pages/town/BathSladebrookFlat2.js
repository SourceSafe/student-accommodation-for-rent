
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


const  BathSladebrookFlat2 = () => 
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Sladebrook, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-2-bedroom-flats-for-students-in-sladebrook-bath.png')} alt='Shared 2 Bedroom Flats for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_sladebrook,_bath">Prices for Shared 2 Bedroom Flats for Students in Sladebrook, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_sladebrook,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_sladebrook,_bath">Cheap Shared 2 Bedroom Flats for Students in Sladebrook, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_sladebrook,_bath__recently_added">Shared 2 Bedroom Flats for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_sladebrook,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_sladebrook,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Sladebrook, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£680 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Living in a 2-bedroom student flat in Sladebrook, Bath, Somerset can be both exciting and challenging. To make your student life easier, consider subscribing to an <b>all bills inclusive</b> service such as the one offered by <b>UniBills.com</b>. With <b>all bills inclusive</b>, you can enjoy the convenience of having your electricity, gas, water, internet, and other utility bills all included in one monthly payment. This means you can <b>concentrate on your studies</b> without the worry of managing multiple bills. <b>UniBills.com</b> takes the stress out of budgeting and ensures that you have a hassle-free living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make the smart choice to enjoy the benefits of an all-inclusive living arrangement.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_sladebrook,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_sladebrook,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the bustling university town of Sladebrook in Bath, finding a shared 2-bedroom flat for students can be a smart and economical choice. With numerous options available, including fully furnished accommodations and convenient locations near campus and essential amenities, students can enjoy a comfortable living experience while focusing on their academic endeavors. By splitting the rent and utilities with a flatmate, students can save significantly on living expenses compared to living alone. Additionally, sharing a flat fosters a sense of community and companionship, making the student experience more enjoyable and rewarding. Overall, opting for a shared 2-bedroom flat in Sladebrook presents students with a harmonious balance of affordability, convenience, and social connectivity, making it a favorable choice for those looking for a suitable living arrangement during their academic journey.</p></>)
};

export default BathSladebrookFlat2;