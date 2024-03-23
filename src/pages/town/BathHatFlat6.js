
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


const  BathHatFlat6 = () => 
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

    return (<><h1>Shared 6 Bedroom Flats for Students in Hat, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-flats-for-students-in-hat-bath.png')} alt='Shared 6 Bedroom Flats for Students in Hat, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_flats_for_students_in_hat,_bath">Prices for Shared 6 Bedroom Flats for Students in Hat, Bath</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_hat,_bath__all_bills_inclusive">Shared 6 Bedroom Flats for Students in Hat, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_flats_for_students_in_hat,_bath">Cheap Shared 6 Bedroom Flats for Students in Hat, Bath</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_hat,_bath__recently_added">Shared 6 Bedroom Flats for Students in Hat, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_hat,_bath__recently_reduced">Shared 6 Bedroom Flats for Students in Hat, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_flats_for_students_in_hat,_bath"> <h2>Prices for Shared 6 Bedroom Flats for Students in Hat, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£775 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Flats for Students in Hat, Bath' onClick={() => routeToPortal("?&beds=6&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61721")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_flats_for_students_in_hat,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Flats for Students in Hat, Bath - All Bills Inclusive</h2></a><p>Living in a 6 bedroom student flat in Hat, Bath, Somerset can be a fantastic experience, but managing multiple bills can be overwhelming. This is where subscribing to an <b>all bills inclusive</b> service can be a game-changer. <b>UniBills.com</b> offers a convenient solution that allows you to enjoy the hassle-free all inclusive option provided by them, eliminating the stress of dealing with various bills each month. By choosing this service, you can <b>concentrate on your studies</b> and social life while <b>UniBills.com</b> takes care of all your utility bills, including electricity, water, and internet. Imagine the peace of mind knowing that everything is taken care of with just one monthly payment. If you're interested in simplifying your life, get a quote from <b>UniBills.com</b> or any accommodation on this website and start enjoying the benefits of an <b>all bills inclusive</b> service today.</p><a id = "cheap_shared_6_bedroom_flats_for_students_in_hat,_bath"> <h2>Cheap Shared 6 Bedroom Flats for Students in Hat, Bath</h2></a><p><Portlet location="REGION^61721" beds="6" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_flats_for_students_in_hat,_bath__recently_added"> <h2>Shared 6 Bedroom Flats for Students in Hat, Bath - Recently Added</h2></a><p><Portlet location="REGION^61721" beds="6" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_flats_for_students_in_hat,_bath__recently_reduced"> <h2>Shared 6 Bedroom Flats for Students in Hat, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61721" town="REGION^116" beds="6" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, looking for a shared 6-bedroom flat for students in Hat, Bath can be an exciting yet daunting experience. It offers a great opportunity for students to bond and share experiences, as well as split the costs of living expenses. However, it's important to consider factors such as location, rental prices, and the dynamics between roommates. Being organized and proactive in your search will greatly increase your chances of finding the perfect accommodation. In conclusion, with careful planning and communication, living in a shared 6-bedroom flat can be a rewarding and enriching experience during your time as a student in Hat, Bath.</p></>)
};

export default BathHatFlat6;