
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


const  BathHatFlat9 = () => 
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

    return (<><h1>Shared 9 Bedroom Flats for Students in Hat, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-9-bedroom-flats-for-students-in-hat-bath.png')} alt='Shared 9 Bedroom Flats for Students in Hat, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_9_bedroom_flats_for_students_in_hat,_bath">Prices for Shared 9 Bedroom Flats for Students in Hat, Bath</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_hat,_bath__all_bills_inclusive">Shared 9 Bedroom Flats for Students in Hat, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_9_bedroom_flats_for_students_in_hat,_bath">Cheap Shared 9 Bedroom Flats for Students in Hat, Bath</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_hat,_bath__recently_added">Shared 9 Bedroom Flats for Students in Hat, Bath - Recently Added</a></li><li><a href = "#shared_9_bedroom_flats_for_students_in_hat,_bath__recently_reduced">Shared 9 Bedroom Flats for Students in Hat, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_9_bedroom_flats_for_students_in_hat,_bath"> <h2>Prices for Shared 9 Bedroom Flats for Students in Hat, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£700 per month </td><td><button className = 'searchButton' title='View our Shared 9 Bedroom Flats for Students in Hat, Bath' onClick={() => routeToPortal("?&beds=9&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61721")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_9_bedroom_flats_for_students_in_hat,_bath__all_bills_inclusive"> <h2>Shared 9 Bedroom Flats for Students in Hat, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 9 bedroom student flat in Hat, Bath, Somerset can be a game changer for your time at university. By choosing <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by their services, allowing you to <b>concentrate on your studies</b> without any worries about managing multiple utility bills. With <b>UniBills.com</b>, you can rest assured that your electricity, water, heating, and internet bills are all taken care of in one simple package. This convenient option not only saves you time but also gives you peace of mind knowing that all your bills are covered. Say goodbye to the stress of managing bills individually and hello to a simplified student life. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and make the smart choice to streamline your living arrangements.</p><a id = "cheap_shared_9_bedroom_flats_for_students_in_hat,_bath"> <h2>Cheap Shared 9 Bedroom Flats for Students in Hat, Bath</h2></a><p><Portlet location="REGION^61721" beds="9" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_flats_for_students_in_hat,_bath__recently_added"> <h2>Shared 9 Bedroom Flats for Students in Hat, Bath - Recently Added</h2></a><p><Portlet location="REGION^61721" beds="9" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_flats_for_students_in_hat,_bath__recently_reduced"> <h2>Shared 9 Bedroom Flats for Students in Hat, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61721" town="REGION^116" beds="9" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for shared 9-bedroom flats for students in Hat, Bath can be a daunting task, but with the right approach, it can also be an exciting and rewarding experience. When searching for such accommodations, it is important to consider factors like proximity to campus, amenities offered, and overall room size and layout. Additionally, factors like budget and lease terms should also be taken into account. By carefully weighing these considerations and conducting thorough research, students can ensure they find a suitable living arrangement that meets their needs and preferences. In conclusion, finding shared 9-bedroom flats for students in Hat, Bath requires patience and diligence, but with the right approach, students can secure a comfortable and convenient living space that enhances their academic experience.</p></>)
};

export default BathHatFlat9;