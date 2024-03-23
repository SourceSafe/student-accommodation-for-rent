
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


const  BathHatFlat10 = () => 
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

    return (<><h1>Shared 10 Bedroom Flats for Students in Hat, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-10-bedroom-flats-for-students-in-hat-bath.png')} alt='Shared 10 Bedroom Flats for Students in Hat, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_10_bedroom_flats_for_students_in_hat,_bath">Prices for Shared 10 Bedroom Flats for Students in Hat, Bath</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_hat,_bath__all_bills_inclusive">Shared 10 Bedroom Flats for Students in Hat, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_10_bedroom_flats_for_students_in_hat,_bath">Cheap Shared 10 Bedroom Flats for Students in Hat, Bath</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_hat,_bath__recently_added">Shared 10 Bedroom Flats for Students in Hat, Bath - Recently Added</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_hat,_bath__recently_reduced">Shared 10 Bedroom Flats for Students in Hat, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_10_bedroom_flats_for_students_in_hat,_bath"> <h2>Prices for Shared 10 Bedroom Flats for Students in Hat, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton' title='View our Shared 10 Bedroom Flats for Students in Hat, Bath' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61721")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_10_bedroom_flats_for_students_in_hat,_bath__all_bills_inclusive"> <h2>Shared 10 Bedroom Flats for Students in Hat, Bath - All Bills Inclusive</h2></a><p>Living in a 10 bedroom student flat can be overwhelming, especially when it comes to managing bills and utilities amongst housemates. Instead of stressing over splitting costs and chasing up payments, why not consider an <b>all bills inclusive</b> service? <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b> without the added burden of managing multiple bills. With <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option, ensuring that all your bills are taken care of in one simple payment. Say goodbye to the stress of tracking expenses and hello to a more streamlined living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student life today.</p><a id = "cheap_shared_10_bedroom_flats_for_students_in_hat,_bath"> <h2>Cheap Shared 10 Bedroom Flats for Students in Hat, Bath</h2></a><p><Portlet location="REGION^61721" beds="10" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_flats_for_students_in_hat,_bath__recently_added"> <h2>Shared 10 Bedroom Flats for Students in Hat, Bath - Recently Added</h2></a><p><Portlet location="REGION^61721" beds="10" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_flats_for_students_in_hat,_bath__recently_reduced"> <h2>Shared 10 Bedroom Flats for Students in Hat, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61721" town="REGION^116" beds="10" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, the search for shared 10-bedroom flats for students in Hat, Bath can be both exciting and challenging. With a variety of options available, it is important for students to consider factors such as proximity to campus, amenities included, and rental prices when making their decision. Shared living spaces can offer a sense of community and camaraderie among students, fostering a supportive environment for academic success and personal growth. By carefully weighing their options and communicating effectively with potential roommates, students can find the perfect 10-bedroom flat that meets their needs and preferences. In conclusion, embarking on this housing search can be a pivotal experience for students, leading to not only a place to live but also to lasting friendships and unforgettable memories.</p></>)
};

export default BathHatFlat10;