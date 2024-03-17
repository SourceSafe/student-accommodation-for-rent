
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

    return (<><h1>Shared 5 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-5-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 5 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 5 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 5 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 5 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 5 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 5 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 5 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£715 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple utility bills for your 5 bedroom student flat in Oldfield Park, Bath, Somerset? Say goodbye to the stress and confusion of managing separate bills by opting for an <b>all bills inclusive</b> service. <b>UniBills.com</b> offers a convenient solution where all your bills - including electricity, water, gas, and internet - are rolled into one easy monthly payment. By subscribing to this service, you can <b>concentrate on your studies</b> and social life without the added worry of keeping track of various bills. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b> and experience peace of mind knowing that your bills are taken care of. Say goodbye to unexpected costs and budgeting headaches with this convenient service. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student living experience.</p><a id = "cheap_shared_5_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 5 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 5 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 5 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for a shared 5-bedroom flat for students in Oldfield Park, Bath can be a daunting task, but it doesn't have to be. With its vibrant community and close proximity to the University of Bath and Bath Spa University, Oldfield Park is a popular choice for students looking for accommodation. When searching for a shared 5-bedroom flat, it's important to consider factors such as location, amenities, and affordability. Oldfield Park offers a range of properties that cater to different budgets and preferences, so you're sure to find something that suits your needs. With a wide selection of cafes, shops, and parks nearby, living in Oldfield Park provides a perfect balance between study and leisure. In conclusion, finding a shared 5-bedroom flat in Oldfield Park offers students a convenient and comfortable living arrangement in a vibrant and student-friendly neighborhood.</p></>)
};

export default BathOldfieldParkFlat5;