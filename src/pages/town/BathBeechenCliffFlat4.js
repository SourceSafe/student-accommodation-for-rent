
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


const  BathBeechenCliffFlat4 = () => 
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

    return (<><h1>Shared 4 Bedroom Flats for Students in Beechen Cliff, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-flats-for-students-in-beechen-cliff-bath.png')} alt='Shared 4 Bedroom Flats for Students in Beechen Cliff, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_flats_for_students_in_beechen_cliff,_bath">Prices for Shared 4 Bedroom Flats for Students in Beechen Cliff, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_beechen_cliff,_bath__all_bills_inclusive">Shared 4 Bedroom Flats for Students in Beechen Cliff, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_flats_for_students_in_beechen_cliff,_bath">Cheap Shared 4 Bedroom Flats for Students in Beechen Cliff, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_added">Shared 4 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_reduced">Shared 4 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_flats_for_students_in_beechen_cliff,_bath"> <h2>Prices for Shared 4 Bedroom Flats for Students in Beechen Cliff, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£785 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Flats for Students in Beechen Cliff, Bath' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71094")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_flats_for_students_in_beechen_cliff,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Flats for Students in Beechen Cliff, Bath - All Bills Inclusive</h2></a><p>Living in a student flat can be stressful, especially when it comes to managing bills and utilities. However, there is a solution that can make your life much easier - subscribing to an <b>all bills inclusive</b> service. <b>UniBills.com</b> offers a convenient option where all your bills, including electricity, water, gas, and internet, are bundled into one simple payment. This means you can <b>concentrate on your studies</b> and social life without the hassle of juggling multiple bills. By opting for the all inclusive option provided by <b>UniBills.com</b>, you can enjoy a stress-free living experience in your 4 bedroom student flat in Beechen Cliff, Bath, Somerset. Say goodbye to the headache of splitting bills with your flatmates and instead, get a quote from <b>UniBills.com</b> or any accommodation on this web site. Make your student life easier and more enjoyable with an <b>all bills inclusive</b> service from <b>UniBills.com</b>.</p><a id = "cheap_shared_4_bedroom_flats_for_students_in_beechen_cliff,_bath"> <h2>Cheap Shared 4 Bedroom Flats for Students in Beechen Cliff, Bath</h2></a><p><Portlet location="REGION^71094" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_added"> <h2>Shared 4 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Added</h2></a><p><Portlet location="REGION^71094" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_reduced"> <h2>Shared 4 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71094" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for a shared 4-bedroom flat for students in Beechen Cliff, Bath can be an exciting and rewarding experience. With a wide range of options available, students can find a comfortable and convenient living arrangement that suits their needs. From spacious bedrooms to communal areas for studying and socializing, these flats offer a perfect balance of privacy and camaraderie. Additionally, the vibrant neighborhood of Beechen Cliff provides easy access to amenities, transportation, and social opportunities. In conclusion, students looking for shared accommodation in Beechen Cliff can expect to find a welcoming community, a convenient location, and a comfortable living environment that enhances their university experience.</p></>)
};

export default BathBeechenCliffFlat4;