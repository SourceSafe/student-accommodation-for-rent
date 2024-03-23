
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


const  BathOldfieldParkFlat10 = () => 
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

    return (<><h1>Shared 10 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-10-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 10 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_10_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 10 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 10 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_10_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 10 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 10 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 10 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_10_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 10 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton' title='View our Shared 10 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_10_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 10 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>For students living in a 10 bedroom flat in Oldfield Park, Bath, Somerset, subscribing to an <b>all bills inclusive</b> service like the one offered by <b>UniBills.com</b> can make a world of difference. With all bills, including utilities, internet, and even TV license, rolled into one convenient package, you can save time and energy that would have been spent dealing with multiple providers and payments. By choosing to enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social life without the stress of managing individual bills. This also helps in budgeting effectively and avoids any unexpected expenses. Get a quote from <b>UniBills.com</b> or any accommodation on this website to simplify your student living experience and make the most out of your time in Bath.</p><a id = "cheap_shared_10_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 10 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="10" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 10 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="10" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 10 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="10" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Searching for a shared 10-bedroom flat for students in Oldfield Park, Bath can be an exciting and rewarding experience. This vibrant and student-friendly area offers an array of affordable housing options that cater to the needs of large groups. In such a communal living space, students can forge lasting friendships, build a sense of community, and create wonderful memories together. The convenience of having multiple roommates can also lead to a more cost-effective living situation, making it an attractive choice for those looking to save on rent. Whether studying, socializing, or simply unwinding, a 10-bedroom flat provides ample space and comfort for students to thrive. In conclusion, choosing a shared 10-bedroom flat in Oldfield Park offers the perfect blend of affordability, camaraderie, and convenience for students looking for a home away from home.</p></>)
};

export default BathOldfieldParkFlat10;