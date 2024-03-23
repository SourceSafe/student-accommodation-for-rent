
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


const  BathHatFlat3 = () => 
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

    return (<><h1>Shared 3 Bedroom Flats for Students in Hat, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-flats-for-students-in-hat-bath.png')} alt='Shared 3 Bedroom Flats for Students in Hat, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_flats_for_students_in_hat,_bath">Prices for Shared 3 Bedroom Flats for Students in Hat, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_hat,_bath__all_bills_inclusive">Shared 3 Bedroom Flats for Students in Hat, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_flats_for_students_in_hat,_bath">Cheap Shared 3 Bedroom Flats for Students in Hat, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_hat,_bath__recently_added">Shared 3 Bedroom Flats for Students in Hat, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_hat,_bath__recently_reduced">Shared 3 Bedroom Flats for Students in Hat, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_flats_for_students_in_hat,_bath"> <h2>Prices for Shared 3 Bedroom Flats for Students in Hat, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£757 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Flats for Students in Hat, Bath' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61721")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_flats_for_students_in_hat,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Flats for Students in Hat, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 3 bedroom student flat in Hat, Bath, Somerset can significantly simplify your living arrangements. Imagine not having to worry about juggling multiple bills or tracking down your flatmates for their share of the utilities. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option and have peace of mind knowing that everything is taken care of. By opting for this service, you can <b>concentrate on your studies</b> without the added stress of managing household expenses. <b>UniBills.com</b> makes it easy for you to budget effectively and avoid unexpected costs, allowing you to focus on what truly matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the convenience and comfort of <b>all bills inclusive</b> living.</p><a id = "cheap_shared_3_bedroom_flats_for_students_in_hat,_bath"> <h2>Cheap Shared 3 Bedroom Flats for Students in Hat, Bath</h2></a><p><Portlet location="REGION^61721" beds="3" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_hat,_bath__recently_added"> <h2>Shared 3 Bedroom Flats for Students in Hat, Bath - Recently Added</h2></a><p><Portlet location="REGION^61721" beds="3" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_hat,_bath__recently_reduced"> <h2>Shared 3 Bedroom Flats for Students in Hat, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61721" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In the quest for shared 3-bedroom flats for students in the bustling Hat, Bath area, there are several key factors to consider. From the proximity to campus or local amenities to budget constraints and personal preferences, finding the perfect living situation can be a daunting task. However, with careful research and clear communication among potential roommates, the search can be a rewarding experience. As students navigate through various listings and attend viewings,  it's essential to assess the condition of the flats, the lease terms, and the compatibility of potential roommates. By taking the time to thoroughly evaluate options and make informed decisions, students can secure a comfortable and conducive living environment for their academic pursuits. In conclusion, the process of searching for shared 3-bedroom flats in Hat, Bath can be both exciting and challenging, but with diligence and open communication, students can find the ideal place to call home during their studies.</p></>)
};

export default BathHatFlat3;