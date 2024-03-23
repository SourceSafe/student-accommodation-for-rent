
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


const  BathOldfieldParkFlat5 = () => 
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

    return (<><h1>Shared 5 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 5 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 5 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 5 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 5 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 5 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 5 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 5 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£715 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in a 5 bedroom student flat in Oldfield Park, Bath, Somerset comes with its challenges, especially when it comes to managing bills. Opting for an <b>all bills inclusive</b> service through <b>UniBills.com</b> can significantly ease this burden. By choosing this option, you won't have to worry about splitting costs, making payments, or dealing with any unexpected bills popping up. This means you can <b>concentrate on your studies</b> and enjoy university life without the added stress of managing finances. <b>UniBills.com</b> provides a hassle-free all-inclusive option, giving you peace of mind and allowing you to budget effectively. Say goodbye to the hassle of coordinating with flatmates or chasing bills – simply enjoy the convenience and simplicity of having everything taken care of. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student living experience even more comfortable and enjoyable.</p><a id = "cheap_shared_5_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 5 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 5 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 5 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In your search for shared 5-bedroom flats for students in Oldfield Park, Bath, you'll find a diverse range of properties to suit your needs. From cozy and affordable accommodations to more spacious and luxurious options, there is something for every budget and preference. The convenience of living with fellow students in a vibrant and student-friendly neighborhood like Oldfield Park offers a unique and enriching experience. Additionally, the proximity to local amenities, transportation links, and the University of Bath campus make it a desirable location for student living. In conclusion, finding a shared 5-bedroom flat in Oldfield Park provides the perfect balance of communal living, convenience, and affordability, ensuring a fulfilling and memorable student experience.</p></>)
};

export default BathOldfieldParkFlat5;