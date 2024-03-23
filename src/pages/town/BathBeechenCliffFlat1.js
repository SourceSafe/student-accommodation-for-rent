
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


const  BathBeechenCliffFlat1 = () => 
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Beechen Cliff, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-1-bedroom-flats-for-students-in-beechen-cliff-bath.png')} alt='Shared 1 Bedroom Flats for Students in Beechen Cliff, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_beechen_cliff,_bath">Prices for Shared 1 Bedroom Flats for Students in Beechen Cliff, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_beechen_cliff,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Beechen Cliff, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_beechen_cliff,_bath">Cheap Shared 1 Bedroom Flats for Students in Beechen Cliff, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_added">Shared 1 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_beechen_cliff,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Beechen Cliff, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1250 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Beechen Cliff, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71094")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_beechen_cliff,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Beechen Cliff, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 1 bedroom flat in Beechen Cliff, Bath, Somerset? Trying to balance your budget can be tough, especially when it comes to managing multiple bills. That's where <b>UniBills.com</b> comes in. By subscribing to an <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With everything from electricity and water to internet and TV license included in one monthly payment, you can save time and money. Say goodbye to the stress of handling individual bills and <b>concentrate on your studies</b> instead. <b>UniBills.com</b> allows you to simplify your living arrangements, making it easier to budget. Get a quote from <b>UniBills.com</b> or any accommodation on this website and enjoy the convenience of an all-inclusive service tailored for student living.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_beechen_cliff,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Beechen Cliff, Bath</h2></a><p><Portlet location="REGION^71094" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Added</h2></a><p><Portlet location="REGION^71094" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71094" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, looking for shared 1 bedroom flats for students in Beechen Cliff, Bath can be an exciting and rewarding experience for those seeking affordable yet comfortable living arrangements. The variety of options available allows students to find the perfect living situation that suits their preferences and budget. From cosy and fully furnished flats to convenient locations near the university campus, there is something for everyone. Additionally, sharing a flat with other students can help foster a sense of community and friendship, making the college experience even more enjoyable. In conclusion, Beechen Cliff offers a diverse selection of shared 1 bedroom flats that cater to the needs of students, providing a convenient and comfortable living situation while studying at university.</p></>)
};

export default BathBeechenCliffFlat1;