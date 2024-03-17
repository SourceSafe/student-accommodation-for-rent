
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


const  BathOldfieldParkFlat2 = () => 
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 2 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 2 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 2 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 2 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£859 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 2-bedroom flat in Oldfield Park, Bath, Somerset? <b>UniBills.com</b> offers an <b>all bills inclusive</b> service that can greatly benefit you. By subscribing to this service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With all your bills such as rent, electricity, water, heating, and internet included in one convenient monthly payment, you can <b>concentrate on your studies</b> without worrying about managing multiple bills. This service not only simplifies your living arrangements but also helps you budget more effectively. <b>UniBills.com</b> takes the stress out of managing bills, allowing you to fully enjoy your student experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and enjoy the peace of mind that comes with an <b>all bills inclusive</b> service.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, the search for shared 2-bedroom flats for students in Oldfield Park, Bath can be both exciting and challenging. With its thriving student community and close proximity to local amenities, Oldfield Park is an ideal location for student accommodation. When looking for a shared flat, it is important to consider factors such as budget, location, and housemate compatibility. By using online platforms and student accommodation services, students can streamline their search and find the perfect living situation. Ultimately, finding a shared flat in Oldfield Park offers students the opportunity to live independently while still enjoying the social aspect of living with others. With careful planning and consideration, students can find a comfortable and convenient living arrangement in this vibrant neighborhood.</p></>)
};

export default BathOldfieldParkFlat2;