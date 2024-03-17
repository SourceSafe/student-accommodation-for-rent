
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


const  BathKingswayFlat2 = () => 
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Kingsway, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-flats-for-students-in-kingsway-bath.png')} alt='Shared 2 Bedroom Flats for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_kingsway,_bath">Prices for Shared 2 Bedroom Flats for Students in Kingsway, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_kingsway,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_kingsway,_bath">Cheap Shared 2 Bedroom Flats for Students in Kingsway, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_kingsway,_bath__recently_added">Shared 2 Bedroom Flats for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_kingsway,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_kingsway,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Kingsway, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£680 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>Living in a 2-bedroom student flat in Kingsway, Bath, Somerset can be a great experience, but dealing with utility bills and other expenses can be a hassle. That's where <b>UniBills.com</b> comes in with their <b>all bills inclusive</b> service. By subscribing to this service, you can enjoy the convenience of having all your bills, including electricity, water, gas, internet, and even TV license, rolled into one easy payment. This means you can <b>concentrate on your studies</b> and social life without worrying about budgeting for unexpected utility costs each month. <b>UniBills.com</b> takes care of everything, allowing you to relax and focus on what truly matters. Say goodbye to the stress of managing multiple bills and enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and simplify your student living experience.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_kingsway,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_kingsway,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_kingsway,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 2-bedroom flats for students in Kingsway, Bath can be a rewarding experience. It offers students the chance to live with a roommate, splitting the cost of rent and utilities, while also fostering a sense of community and companionship. Students can enjoy the convenience of being close to campus and local amenities, making their daily routines more manageable. Furthermore, sharing a flat can provide a supportive environment for academic and personal growth, as students navigate their university experience together. In conclusion, opting for a shared 2-bedroom flat in Kingsway, Bath not only offers financial benefits but also the opportunity to create lasting friendships and memories during the exciting college years. It is a practical and social option that can enhance the overall student living experience.</p></>)
};

export default BathKingswayFlat2;