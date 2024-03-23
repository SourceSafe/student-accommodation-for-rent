
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


const  BathBeaconHillFlat2 = () => 
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Beacon Hill, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-flats-for-students-in-beacon-hill-bath.png')} alt='Shared 2 Bedroom Flats for Students in Beacon Hill, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_beacon_hill,_bath">Prices for Shared 2 Bedroom Flats for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_beacon_hill,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Beacon Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_beacon_hill,_bath">Cheap Shared 2 Bedroom Flats for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_beacon_hill,_bath__recently_added">Shared 2 Bedroom Flats for Students in Beacon Hill, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_beacon_hill,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Beacon Hill, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_beacon_hill,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Beacon Hill, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£707 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Beacon Hill, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61718")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_beacon_hill,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Beacon Hill, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 2-bedroom flat in Beacon Hill, Bath, Somerset? Why stress about managing multiple bills when you can enjoy the convenience of an <b>all bills inclusive</b> service? <b>UniBills.com</b> offers a hassle-free solution that covers all your utility costs in one monthly payment. By subscribing to this service, you can <b>concentrate on your studies</b> without having to worry about juggling different bills. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, making your student life much simpler. Say goodbye to the stress of budgeting and organizing payments, and hello to the ease and convenience of having everything taken care of for you. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student experience in Beacon Hill even more enjoyable.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_beacon_hill,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Beacon Hill, Bath</h2></a><p><Portlet location="REGION^61718" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_beacon_hill,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Beacon Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^61718" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_beacon_hill,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Beacon Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61718" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, looking for shared 2 bedroom flats for students in Beacon Hill, Bath can be a rewarding experience. With a variety of options available, students can find a comfortable and affordable living arrangement in this picturesque area. From cozy apartments to spacious flats, there are choices to suit every preference. Additionally, living with a roommate can also provide a sense of camaraderie and companionship during the college years. In conclusion, Beacon Hill offers a vibrant and student-friendly community with convenient access to amenities and transportation options. Students searching for shared accommodation in this area can look forward to a fulfilling and enjoyable living experience.</p></>)
};

export default BathBeaconHillFlat2;