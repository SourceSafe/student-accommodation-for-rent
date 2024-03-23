
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


const  BathDolemeadsFlat4 = () => 
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

    return (<><h1>Shared 4 Bedroom Flats for Students in Dolemeads, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-flats-for-students-in-dolemeads-bath.png')} alt='Shared 4 Bedroom Flats for Students in Dolemeads, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_flats_for_students_in_dolemeads,_bath">Prices for Shared 4 Bedroom Flats for Students in Dolemeads, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_dolemeads,_bath__all_bills_inclusive">Shared 4 Bedroom Flats for Students in Dolemeads, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_flats_for_students_in_dolemeads,_bath">Cheap Shared 4 Bedroom Flats for Students in Dolemeads, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_dolemeads,_bath__recently_added">Shared 4 Bedroom Flats for Students in Dolemeads, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_dolemeads,_bath__recently_reduced">Shared 4 Bedroom Flats for Students in Dolemeads, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_flats_for_students_in_dolemeads,_bath"> <h2>Prices for Shared 4 Bedroom Flats for Students in Dolemeads, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£785 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Flats for Students in Dolemeads, Bath' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71097")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_flats_for_students_in_dolemeads,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Flats for Students in Dolemeads, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 4 bedroom flat in Dolemeads, Bath, Somerset? Tired of dealing with the hassle of managing multiple utility bills every month? Why not consider subscribing to an <b>all bills inclusive</b> service with <b>UniBills.com</b>? By choosing this convenient option, you can enjoy the peace of mind that comes with knowing that all your bills, including electricity, water, gas, and internet, are taken care of in one simple payment. This means you can <b>concentrate on your studies</b> and social life without the stress of budgeting for various bills. <b>UniBills.com</b> offers a seamless and hassle-free experience, allowing you to focus on what really matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life easier and more enjoyable.</p><a id = "cheap_shared_4_bedroom_flats_for_students_in_dolemeads,_bath"> <h2>Cheap Shared 4 Bedroom Flats for Students in Dolemeads, Bath</h2></a><p><Portlet location="REGION^71097" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_dolemeads,_bath__recently_added"> <h2>Shared 4 Bedroom Flats for Students in Dolemeads, Bath - Recently Added</h2></a><p><Portlet location="REGION^71097" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_dolemeads,_bath__recently_reduced"> <h2>Shared 4 Bedroom Flats for Students in Dolemeads, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71097" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, looking for shared 4-bedroom flats for students in Dolemeads, Bath can be a highly beneficial and convenient option. With its prime location near the University of Bath and Bath Spa University, students can enjoy a short commute to class. The spacious layout of a 4-bedroom flat allows for socializing with roommates while also having a private space for studying. Additionally, sharing a rental can help students save money on living expenses such as rent and utilities. With a variety of amenities and modern features available in many shared flats in Dolemeads, Bath, students can enjoy a comfortable and convenient living arrangement. Overall, opting for a shared 4-bedroom flat in this area can enhance the student experience and provide a sense of community while pursuing higher education.</p></>)
};

export default BathDolemeadsFlat4;