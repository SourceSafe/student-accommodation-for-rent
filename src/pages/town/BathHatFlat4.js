
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


const  BathHatFlat4 = () => 
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

    return (<><h1>Shared 4 Bedroom Flats for Students in Hat, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-flats-for-students-in-hat-bath.png')} alt='Shared 4 Bedroom Flats for Students in Hat, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_flats_for_students_in_hat,_bath">Prices for Shared 4 Bedroom Flats for Students in Hat, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_hat,_bath__all_bills_inclusive">Shared 4 Bedroom Flats for Students in Hat, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_flats_for_students_in_hat,_bath">Cheap Shared 4 Bedroom Flats for Students in Hat, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_hat,_bath__recently_added">Shared 4 Bedroom Flats for Students in Hat, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_hat,_bath__recently_reduced">Shared 4 Bedroom Flats for Students in Hat, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_flats_for_students_in_hat,_bath"> <h2>Prices for Shared 4 Bedroom Flats for Students in Hat, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£785 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Flats for Students in Hat, Bath' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61721")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_flats_for_students_in_hat,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Flats for Students in Hat, Bath - All Bills Inclusive</h2></a><p>Are you looking for a stress-free living arrangement while studying in Hat, Bath, Somerset? Consider subscribing to an <b>all bills inclusive</b> service for your 4-bedroom student flat. <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b> without worrying about utility bills or unexpected expenses. With <b>all bills inclusive</b>, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, making budgeting easier and ensuring that you can focus on what matters most. Say goodbye to the hassle of splitting bills with flatmates or dealing with overdue payments. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the benefits of <b>all bills inclusive</b> living.</p><a id = "cheap_shared_4_bedroom_flats_for_students_in_hat,_bath"> <h2>Cheap Shared 4 Bedroom Flats for Students in Hat, Bath</h2></a><p><Portlet location="REGION^61721" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_hat,_bath__recently_added"> <h2>Shared 4 Bedroom Flats for Students in Hat, Bath - Recently Added</h2></a><p><Portlet location="REGION^61721" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_hat,_bath__recently_reduced"> <h2>Shared 4 Bedroom Flats for Students in Hat, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61721" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 4-bedroom flat for students in Hat, Bath can be an exciting yet daunting task. With the high demand for student accommodation in this area, it is important to start the search early and consider factors such as location, rent prices, and amenities. By using online platforms and reaching out to local rental agencies, students can find a comfortable and affordable living space with like-minded roommates. It is crucial to communicate openly with potential flatmates and establish clear expectations to ensure a harmonious living environment. Overall, with careful planning and perseverance, students can find the perfect shared flat in Hat, Bath that meets their needs and enhances their university experience.</p></>)
};

export default BathHatFlat4;