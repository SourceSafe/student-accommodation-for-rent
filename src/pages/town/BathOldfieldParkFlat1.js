
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


const  BathOldfieldParkFlat1 = () => 
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-1-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 1 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 1 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 1 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 1 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1245 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>When you're a student living in a 1 bedroom flat in Oldfield Park, Bath, Somerset, the last thing you want to worry about is handling multiple bills for utilities like water, gas, electricity, and internet. That's where an <b>all bills inclusive</b> service, like the one offered by <b>UniBills.com</b>, can come in handy. With this convenient option, you can simplify your living situation and <b>concentrate on your studies</b> without the added stress of managing individual bills. <b>UniBills.com</b> offers a hassle-free all inclusive package that covers all your essential utilities, allowing you to budget effectively and enjoy a worry-free student life. Say goodbye to the headache of dealing with multiple bills and say hello to the ease of the all inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student living experience in Bath a whole lot easier.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, the search for shared 1-bedroom flats in Oldfield Park, Bath, can be a rewarding experience for students. Students will find an array of options available, ranging from cosy flats with modern amenities to spacious accommodations at reasonable prices. The convenience of living in Oldfield Park, with its proximity to the University of Bath and local amenities, makes it an ideal location for student living. By sharing a flat with a fellow student, tenants can enjoy a sense of community and camaraderie while splitting the cost of rent and utilities. With careful research and communication with potential flatmates, students can find the perfect shared living arrangement that meets their needs and budget. So, if you're a student looking for a 1-bedroom flat in Oldfield Park, Bath, don't hesitate to explore the options available and find the ideal space to call home during your academic journey.</p></>)
};

export default BathOldfieldParkFlat1;