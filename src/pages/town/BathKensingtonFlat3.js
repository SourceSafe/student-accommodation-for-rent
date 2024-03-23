
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


const  BathKensingtonFlat3 = () => 
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

    return (<><h1>Shared 3 Bedroom Flats for Students in Kensington, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-flats-for-students-in-kensington-bath.png')} alt='Shared 3 Bedroom Flats for Students in Kensington, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_flats_for_students_in_kensington,_bath">Prices for Shared 3 Bedroom Flats for Students in Kensington, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_kensington,_bath__all_bills_inclusive">Shared 3 Bedroom Flats for Students in Kensington, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_flats_for_students_in_kensington,_bath">Cheap Shared 3 Bedroom Flats for Students in Kensington, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_kensington,_bath__recently_added">Shared 3 Bedroom Flats for Students in Kensington, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_kensington,_bath__recently_reduced">Shared 3 Bedroom Flats for Students in Kensington, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_flats_for_students_in_kensington,_bath"> <h2>Prices for Shared 3 Bedroom Flats for Students in Kensington, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£733 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Flats for Students in Kensington, Bath' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_flats_for_students_in_kensington,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Flats for Students in Kensington, Bath - All Bills Inclusive</h2></a><p>Living in a 3-bedroom student flat in the vibrant area of Kensington, Bath, Somerset can be both exciting and challenging. With the demands of university life, managing and paying for bills can often become a burden. This is where <b>UniBills.com</b> comes in, offering an <b>all bills inclusive</b> service that allows you to <b>concentrate on your studies</b> without worrying about utility costs. By opting for the hassle-free all inclusive option provided by <b>UniBills.com</b>, you can enjoy the convenience of having all your bills, including water, gas, electricity, and even Wi-Fi, bundled into one monthly payment. This not only simplifies your living arrangements but also helps you budget more effectively. Say goodbye to the stress of budgeting and monitoring multiple bills each month - instead, focus on excelling in your academic pursuits while enjoying a comfortable living space. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Kensington a breeze.</p><a id = "cheap_shared_3_bedroom_flats_for_students_in_kensington,_bath"> <h2>Cheap Shared 3 Bedroom Flats for Students in Kensington, Bath</h2></a><p><Portlet location="REGION^61722" beds="3" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_kensington,_bath__recently_added"> <h2>Shared 3 Bedroom Flats for Students in Kensington, Bath - Recently Added</h2></a><p><Portlet location="REGION^61722" beds="3" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_kensington,_bath__recently_reduced"> <h2>Shared 3 Bedroom Flats for Students in Kensington, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61722" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for shared 3-bedroom flats for students in Kensington, Bath provides an opportunity for cost-effective accommodation with the convenience of living with like-minded individuals. These flats offer a sense of community and shared responsibility among the tenants, creating a supportive living environment for students. By splitting the rent and utility costs, students can save money while enjoying the benefits of a larger living space. Additionally, living in Kensington, Bath offers easy access to local amenities, public transportation, and the vibrant city life. In conclusion, shared 3-bedroom flats in Kensington, Bath are a great option for students looking for affordable and sociable accommodation in a prime location.</p></>)
};

export default BathKensingtonFlat3;