
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


const  BathOldfieldParkFlat6 = () => 
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

    return (<><h1>Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 6 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£775 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=6&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple bills while trying to <b>concentrate on your studies</b> in your 6-bedroom student flat in Oldfield Park, Bath, Somerset? Look no further than <b>UniBills.com</b> for an <b>all bills inclusive</b> service that takes the stress out of managing your utilities. By subscribing to this convenient option, you can enjoy the hassle-free benefits of having all your bills - including electricity, water, gas, and internet - rolled into one convenient monthly payment. With <b>UniBills.com</b>, you can rest assured that your bills are taken care of, leaving you free to focus on your academic pursuits. Say goodbye to the headache of coordinating various providers and enjoy the simplicity and ease of the all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the convenience and peace of mind that comes with having all your bills sorted in one go.</p><a id = "cheap_shared_6_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="6" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="6" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="6" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 6-bedroom flat for students in Oldfield Park, Bath can be a rewarding experience. With its convenient location near the university and all amenities, students can enjoy a vibrant community and easy access to everything they need. The variety of options available ensures that there is something to suit every student's budget and preferences. Living with housemates can foster a sense of community and make it easier to settle into student life. Additionally, sharing a larger property with friends can make living expenses more affordable compared to renting a single room. Overall, choosing a shared 6-bedroom flat in Oldfield Park can offer students the perfect balance of independence and social interaction, creating a memorable and meaningful college experience.</p></>)
};

export default BathOldfieldParkFlat6;