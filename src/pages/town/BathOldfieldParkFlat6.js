
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

    return (<><h1>Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 6 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£775 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=6&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Tired of dealing with multiple bills for your student flat in Oldfield Park, Bath, Somerset? <b>UniBills.com</b> offers the perfect solution with their <b>all bills inclusive</b> service. By subscribing to this convenient option, you can say goodbye to the stress of managing utility payments each month. Instead, you can <b>concentrate on your studies</b> and enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With just one payment, you can cover all your bills, including electricity, water, internet, and more. This not only saves you time but also ensures that you can budget effectively without any surprises. Say goodbye to the headache of tracking and paying multiple bills and say hello to simplicity with an <b>all bills inclusive</b> service. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make student life a little bit easier.</p><a id = "cheap_shared_6_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="6" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="6" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="6" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for a shared 6 bedroom flat for students in Oldfield Park, Bath can be a challenge, but it is a rewarding experience. Not only will you find a comfortable and spacious living arrangement, but you will also have the opportunity to build strong friendships with your flatmates. Oldfield Park is a thriving student community with easy access to the University of Bath and Bath Spa University. It offers a vibrant social scene with plenty of shops, cafes, and restaurants nearby. With a range of affordable housing options available, you can easily find a flat that suits your budget and preferences. In conclusion, choosing to live in a shared 6 bedroom flat in Oldfield Park provides a mix of convenience, affordability, and community that is ideal for student life.</p></>)
};

export default BathOldfieldParkFlat6;