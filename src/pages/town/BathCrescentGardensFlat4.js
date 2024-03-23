
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


const  BathCrescentGardensFlat4 = () => 
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

    return (<><h1>Shared 4 Bedroom Flats for Students in Crescent Gardens, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-flats-for-students-in-crescent-gardens-bath.png')} alt='Shared 4 Bedroom Flats for Students in Crescent Gardens, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_flats_for_students_in_crescent_gardens,_bath">Prices for Shared 4 Bedroom Flats for Students in Crescent Gardens, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_crescent_gardens,_bath__all_bills_inclusive">Shared 4 Bedroom Flats for Students in Crescent Gardens, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_flats_for_students_in_crescent_gardens,_bath">Cheap Shared 4 Bedroom Flats for Students in Crescent Gardens, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_added">Shared 4 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_reduced">Shared 4 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_flats_for_students_in_crescent_gardens,_bath"> <h2>Prices for Shared 4 Bedroom Flats for Students in Crescent Gardens, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£785 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Flats for Students in Crescent Gardens, Bath' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_flats_for_students_in_crescent_gardens,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Flats for Students in Crescent Gardens, Bath - All Bills Inclusive</h2></a><p>As a busy student living in a 4 bedroom flat in Crescent Gardens, Bath, Somerset, managing bills can often become overwhelming. To alleviate this stress and allow you to <b>concentrate on your studies</b>, subscribing to an <b>all bills inclusive</b> service is the way to go. <b>UniBills.com</b> offers a convenient and hassle-free option where all your utilities such as electricity, water, gas, and internet are bundled into one easy payment. This means no more worrying about budgeting for various bills each month or dealing with multiple providers. With <b>UniBills.com</b>, you can enjoy the peace of mind that comes with knowing everything is taken care of. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and make your student life a whole lot simpler.</p><a id = "cheap_shared_4_bedroom_flats_for_students_in_crescent_gardens,_bath"> <h2>Cheap Shared 4 Bedroom Flats for Students in Crescent Gardens, Bath</h2></a><p><Portlet location="REGION^71096" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_added"> <h2>Shared 4 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Added</h2></a><p><Portlet location="REGION^71096" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_crescent_gardens,_bath__recently_reduced"> <h2>Shared 4 Bedroom Flats for Students in Crescent Gardens, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71096" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 4-bedroom flat for students in Crescent Gardens, Bath can be a rewarding experience. With its close proximity to the University of Bath and Bath Spa University, the location offers convenience for students looking to live in a vibrant and academic environment. The availability of spacious and well-furnished flats in Crescent Gardens ensures comfortable living arrangements for students looking to share accommodation. Additionally, the peaceful surroundings of Crescent Gardens provide a conducive atmosphere for studying and unwinding after a long day of classes. Overall, finding a shared 4-bedroom flat in this area offers not only a place to live but also a sense of community and support for students embarking on their academic journey in Bath.</p></>)
};

export default BathCrescentGardensFlat4;