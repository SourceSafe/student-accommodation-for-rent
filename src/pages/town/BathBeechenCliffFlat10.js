
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


const  BathBeechenCliffFlat10 = () => 
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

    return (<><h1>Shared 10 Bedroom Flats for Students in Beechen Cliff, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-10-bedroom-flats-for-students-in-beechen-cliff-bath.png')} alt='Shared 10 Bedroom Flats for Students in Beechen Cliff, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_10_bedroom_flats_for_students_in_beechen_cliff,_bath">Prices for Shared 10 Bedroom Flats for Students in Beechen Cliff, Bath</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_beechen_cliff,_bath__all_bills_inclusive">Shared 10 Bedroom Flats for Students in Beechen Cliff, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_10_bedroom_flats_for_students_in_beechen_cliff,_bath">Cheap Shared 10 Bedroom Flats for Students in Beechen Cliff, Bath</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_added">Shared 10 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Added</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_reduced">Shared 10 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_10_bedroom_flats_for_students_in_beechen_cliff,_bath"> <h2>Prices for Shared 10 Bedroom Flats for Students in Beechen Cliff, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton' title='View our Shared 10 Bedroom Flats for Students in Beechen Cliff, Bath' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71094")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_10_bedroom_flats_for_students_in_beechen_cliff,_bath__all_bills_inclusive"> <h2>Shared 10 Bedroom Flats for Students in Beechen Cliff, Bath - All Bills Inclusive</h2></a><p>Living in a 10 bedroom student flat in Beechen Cliff, Bath, Somerset can be a fantastic experience, but managing bills for such a large group can be daunting. That's where <b>UniBills.com</b> comes in. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b> and make your life much easier. With all bills taken care of, you can <b>concentrate on your studies</b> without the stress of managing multiple bills each month. <b>UniBills.com</b> ensures that utilities such as water, electricity, gas, and even internet are all covered, giving you peace of mind and simplifying your living expenses. To make things even better, getting a quote from <b>UniBills.com</b> or any accommodation on this website is quick and easy, making the transition to an all-inclusive service seamless. Say goodbye to bill management headaches and hello to a convenient and stress-free living experience with <b>UniBills.com</b>.</p><a id = "cheap_shared_10_bedroom_flats_for_students_in_beechen_cliff,_bath"> <h2>Cheap Shared 10 Bedroom Flats for Students in Beechen Cliff, Bath</h2></a><p><Portlet location="REGION^71094" beds="10" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_added"> <h2>Shared 10 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Added</h2></a><p><Portlet location="REGION^71094" beds="10" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_flats_for_students_in_beechen_cliff,_bath__recently_reduced"> <h2>Shared 10 Bedroom Flats for Students in Beechen Cliff, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71094" town="REGION^116" beds="10" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, finding a shared 10-bedroom flat for students in Beechen Cliff, Bath, can be both exciting and challenging. This large accommodation option offers a great opportunity for students to live together and create a tight-knit community. It can also be a cost-effective solution, as the rent and utilities can be divided among ten roommates. However, it's important to carefully consider the dynamics among housemates and establish clear communication and boundaries from the start to ensure a harmonious living environment. Additionally, location, amenities, and proximity to the university are crucial factors to take into account when choosing the right 10-bedroom flat. Overall, with proper planning and research, living in a shared 10-bedroom flat in Beechen Cliff can be a rewarding experience for students looking for affordable and communal living arrangements.</p></>)
};

export default BathBeechenCliffFlat10;