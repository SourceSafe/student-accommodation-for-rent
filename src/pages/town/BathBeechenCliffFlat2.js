
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


const  BathBeechenCliffFlat2 = () => 
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Beechen Cliff, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-flats-for-students-in-beechen-cliff-bath.png')} alt='Shared 2 Bedroom Flats for Students in Beechen Cliff, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_beechen_cliff,_bath">Prices for Shared 2 Bedroom Flats for Students in Beechen Cliff, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_beechen_cliff,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Beechen Cliff, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_beechen_cliff,_bath">Cheap Shared 2 Bedroom Flats for Students in Beechen Cliff, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_added">Shared 2 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_beechen_cliff,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Beechen Cliff, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1157 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Beechen Cliff, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71094")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_beechen_cliff,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Beechen Cliff, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 2-bedroom flat in Beechen Cliff, Bath, Somerset? If so, you may want to consider subscribing to an <b>all bills inclusive</b> service for your accommodation. By signing up with <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option, which covers your electricity, water, heating, and Wi-Fi bills all in one package. This means no more worrying about fluctuating bills or splitting costs with your flatmate. With <b>all bills inclusive</b>, you can <b>concentrate on your studies</b> and social life without the added stress of managing multiple bills. <b>UniBills.com</b> offers competitive rates and excellent customer service, making it a convenient and budget-friendly option for students. Get a quote from <b>UniBills.com</b> or any accommodation on this web site and simplify your student living experience.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_beechen_cliff,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Beechen Cliff, Bath</h2></a><p><Portlet location="REGION^71094" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Added</h2></a><p><Portlet location="REGION^71094" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71094" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for shared 2 bedroom flats for students in Beechen Cliff, Bath can be a rewarding experience. With affordable rent prices and the chance to live with a roommate, students can enjoy the independence of living off-campus while still being close to their university. These flats often offer amenities such as furnished rooms, communal living spaces, and convenient locations near public transportation and local shops. Additionally, sharing a flat with a roommate can lead to meaningful friendships and shared experiences throughout the academic year. In conclusion, searching for shared 2 bedroom flats in Beechen Cliff is a practical and affordable option for students looking for comfortable and convenient living arrangements during their time at university[].</p></>)
};

export default BathBeechenCliffFlat2;