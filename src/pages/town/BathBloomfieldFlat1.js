
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Bloomfield, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-1-bedroom-flats-for-students-in-bloomfield-bath.png')} alt='Shared 1 Bedroom Flats for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_bloomfield,_bath">Prices for Shared 1 Bedroom Flats for Students in Bloomfield, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_bloomfield,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_bloomfield,_bath">Cheap Shared 1 Bedroom Flats for Students in Bloomfield, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_bloomfield,_bath__recently_added">Shared 1 Bedroom Flats for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_bloomfield,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_bloomfield,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Bloomfield, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1200 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Are you a student living in Bloomfield, Bath, Somerset and looking for a convenient way to manage your expenses? Consider subscribing to an <b>all bills inclusive</b> service for your 1 bedroom flat through <b>UniBills.com</b>. By opting for the <b>all bills inclusive</b> package, you can enjoy the hassle-free convenience of having all your utility bills, including electricity, water, and internet, rolled into one easy payment. This allows you to <b>concentrate on your studies</b> and social life without the worry of managing multiple bills each month. <b>UniBills.com</b> takes care of all the tedious bill payment tasks for you, giving you peace of mind and more time to focus on what truly matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student living experience in Bloomfield, Bath, Somerset, stress-free and enjoyable.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_bloomfield,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_bloomfield,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 1-bedroom flats for students in Bloomfield, Bath can be a rewarding experience. This living arrangement allows students to split costs and create a communal living space while studying in a vibrant city like Bath. With a range of affordable options available, students can find the perfect flat that suits their budget and preferences. The convenience of living in Bloomfield offers easy access to local amenities, public transportation, and campus facilities, ensuring a comfortable and enriching student life. Overall, shared 1-bedroom flats provide a great opportunity for students to socialize, collaborate, and make the most out of their university experience in Bath[].</p></>)
};

export default BathBloomfieldFlat1;