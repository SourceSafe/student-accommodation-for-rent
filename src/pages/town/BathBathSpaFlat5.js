
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


const  BathBathSpaFlat5 = () => 
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

    return (<><h1>Shared 5 Bedroom Flats for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-5-bedroom-flats-for-students-in-bath-spa-bath.png')} alt='Shared 5 Bedroom Flats for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_flats_for_students_in_bath_spa,_bath">Prices for Shared 5 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 5 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_flats_for_students_in_bath_spa,_bath">Cheap Shared 5 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_bath_spa,_bath__recently_added">Shared 5 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced">Shared 5 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 5 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£557 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Flats for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you tired of dealing with the hassle of managing multiple bills for your student flat in Bath Spa? Look no further than <b>UniBills.com</b> for the perfect solution. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the convenience of having all your bills – including utilities, internet, and even council tax – rolled into one easy monthly payment. This means no more stressing about remembering due dates or splitting costs with your flatmates. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and enjoying your time in Bath without the added burden of bill management. Say goodbye to endless paperwork and hello to a stress-free living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and discover the benefits of the hassle-free all-inclusive option provided.</p><a id = "cheap_shared_5_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 5 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 5 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 5 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the bustling student city of Bath Spa, finding a shared 5-bedroom flat suitable for students can be an exciting but challenging endeavor. With a range of properties available, it's important to consider factors such as location, amenities, and budget to ensure a comfortable and convenient living space. Collaborating with fellow students to split rent and utilities can make renting a larger property more affordable. Additionally, living in a shared flat can foster a sense of community and provide opportunities for socializing and forming lasting friendships. By conducting thorough research and visiting properties in person, students can find the perfect 5-bedroom flat in Bath Spa that meets their needs and creates a welcoming home away from home.</p></>)
};

export default BathBathSpaFlat5;