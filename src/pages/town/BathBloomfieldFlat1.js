
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


const  BathBloomfieldFlat1 = () => 
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Bloomfield, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-1-bedroom-flats-for-students-in-bloomfield-bath.png')} alt='Shared 1 Bedroom Flats for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_bloomfield,_bath">Prices for Shared 1 Bedroom Flats for Students in Bloomfield, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_bloomfield,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_bloomfield,_bath">Cheap Shared 1 Bedroom Flats for Students in Bloomfield, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_bloomfield,_bath__recently_added">Shared 1 Bedroom Flats for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_bloomfield,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_bloomfield,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Bloomfield, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1200 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 1 bedroom flat in Bloomfield, Bath, Somerset? Keeping track of various bills can be a headache when you're trying to <b>concentrate on your studies</b>. That's where <b>UniBills.com</b> comes in to save the day! By subscribing to an <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Say goodbye to the stress of managing multiple bills and hello to simplicity and convenience. With <b>UniBills.com</b>, you can easily budget your expenses and avoid any unexpected costs. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life a whole lot easier. Subscribe now and focus on what truly matters – your education.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_bloomfield,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_bloomfield,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 1-bedroom flats for students in Bloomfield, Bath is a worthwhile investment for those seeking a comfortable and convenient living arrangement. These accommodations provide a sense of community and companionship while offering students the privacy they need to focus on their studies. With affordable rent prices and shared amenities, such as kitchens and living spaces, these flats are ideal for students on a budget. In conclusion, choosing a shared 1-bedroom flat in Bloomfield, Bath offers a perfect balance of independence and camaraderie, making it a top choice for students looking for a suitable and welcoming place to call home during their academic journey.</p></>)
};

export default BathBloomfieldFlat1;