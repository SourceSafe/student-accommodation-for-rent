
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


const  BathBathSpaFlat4 = () => 
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

    return (<><h1>Shared 4 Bedroom Flats for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-4-bedroom-flats-for-students-in-bath-spa-bath.png')} alt='Shared 4 Bedroom Flats for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_flats_for_students_in_bath_spa,_bath">Prices for Shared 4 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 4 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_flats_for_students_in_bath_spa,_bath">Cheap Shared 4 Bedroom Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_bath_spa,_bath__recently_added">Shared 4 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced">Shared 4 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 4 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£694 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Flats for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_flats_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Flats for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 4 bedroom student flat in Bath Spa, Bath, Somerset has many benefits. By choosing a service like <b>UniBills.com</b>, you can enjoy the convenience of having all your utility bills, such as electricity, water, heating, internet, and even TV license, rolled into one easy payment. This means no more worrying about splitting bills with your housemates or dealing with late payments. With <b>all bills inclusive</b>, you can <b>concentrate on your studies</b> and social life without the added stress of managing multiple bills. <b>UniBills.com</b> offers a hassle-free all-inclusive option so you can focus on what truly matters during your time at university. To see how much you could save and simplify your living situation, get a quote from <b>UniBills.com</b> or any accommodation on this website.</p><a id = "cheap_shared_4_bedroom_flats_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 4 Bedroom Flats for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 4 Bedroom Flats for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 4 Bedroom Flats for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, finding shared 4-bedroom flats for students in Bath Spa, Bath can be a challenging yet rewarding experience. It offers students the opportunity to live with peers, split costs, and create a supportive living environment. When looking for such accommodations, it is crucial to carefully consider factors such as location, budget, amenities, and roommates compatibility. Various online platforms, real estate agencies, and university resources can help in the search process. Ultimately, prioritizing communication, understanding lease agreements, and addressing potential conflicts promptly are essential for a successful living arrangement. It is important to approach the search with an open mind, be flexible, and stay proactive in finding the perfect shared living space for the academic year.</p></>)
};

export default BathBathSpaFlat4;