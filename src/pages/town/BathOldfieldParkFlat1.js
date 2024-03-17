
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-1-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 1 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 1 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 1 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 1 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1245 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 1 bedroom flat in Oldfield Park, Bath, Somerset? If so, subscribing to an <b>all bills inclusive</b> service could be the solution to simplify your living arrangements. <b>UniBills.com</b> offers an <b>all bills inclusive</b> service that covers everything from gas and electricity to water and Wi-Fi. By opting for this service, you can <b>concentrate on your studies</b> without having to worry about managing multiple utility bills. Enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b> and eliminate the stress of dealing with various providers and payments. With just one fixed monthly payment, you can budget more effectively and avoid any unexpected costs. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life more convenient and stress-free. Say goodbye to bill-related headaches and hello to a more organized and streamlined living experience.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 1-bedroom flats for students in Oldfield Park, Bath, offers a budget-friendly and convenient housing option for those studying in the area. With the availability of these accommodations, students can benefit from splitting costs and sharing living spaces with like-minded individuals. The close proximity to universities and amenities makes living in Oldfield Park highly convenient for students, offering a balance between academic responsibilities and social activities. Additionally, the vibrant community and lively atmosphere in Oldfield Park create the perfect environment for students to thrive during their academic pursuits. Overall, opting for a shared 1-bedroom flat in Oldfield Park is a smart choice for students looking for affordable, well-located, and sociable accommodation options in Bath.</p></>)
};

export default BathOldfieldParkFlat1;