
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


const  BathCrescentGardensStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Crescent Gardens, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-crescent-gardens-bath.png')} alt='Studio Apartments for Students in Crescent Gardens, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_crescent_gardens,_bath">Prices for Studio Apartments for Students in Crescent Gardens, Bath</a></li><li><a href = "#studio_apartments_for_students_in_crescent_gardens,_bath__all_bills_inclusive">Studio Apartments for Students in Crescent Gardens, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_crescent_gardens,_bath">Cheap Studio Apartments for Students in Crescent Gardens, Bath</a></li><li><a href = "#studio_apartments_for_students_in_crescent_gardens,_bath__recently_added">Studio Apartments for Students in Crescent Gardens, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_crescent_gardens,_bath__recently_reduced">Studio Apartments for Students in Crescent Gardens, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_crescent_gardens,_bath"> <h2>Prices for Studio Apartments for Students in Crescent Gardens, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1287 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Crescent Gardens, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_crescent_gardens,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Crescent Gardens, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for a hassle-free living arrangement that allows you to <b>concentrate on your studies</b> without worrying about managing various bills? Look no further than <b>UniBills.com</b>! By subscribing to an <b>all bills inclusive</b> service for your 1-bedroom student studio in Crescent Gardens, Bath, Somerset, you can enjoy the convenience of having all your utility bills, including electricity, water, and internet, bundled into one easy monthly payment. Say goodbye to the stress of budgeting and coordinating multiple bills, and hello to a streamlined living experience. With <b>UniBills.com</b>, you can free up your time and energy to focus on what truly matters – your education. Take the first step towards a more seamless living situation and get a quote from <b>UniBills.com</b> or any accommodation on this website today.</p><a id = "cheap_studio_apartments_for_students_in_crescent_gardens,_bath"> <h2>Cheap Studio Apartments for Students in Crescent Gardens, Bath</h2></a><p><Portlet location="REGION^71096" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_crescent_gardens,_bath__recently_added"> <h2>Studio Apartments for Students in Crescent Gardens, Bath - Recently Added</h2></a><p><Portlet location="REGION^71096" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_crescent_gardens,_bath__recently_reduced"> <h2>Studio Apartments for Students in Crescent Gardens, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71096" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for studio apartments for students in Crescent Gardens, Bath can be a rewarding experience. The centrally located properties provide convenience and easy access to all amenities, making them ideal for student living. With their fully furnished interiors, modern facilities, and proximity to local universities, these studios offer a comfortable and practical living space for students. The vibrant neighborhood and tranquil surroundings make Crescent Gardens a desirable location for student accommodation. Overall, students can enjoy the best of both worlds - a peaceful living environment with easy access to the bustling city center. Whether you're focusing on your studies or exploring the vibrant city of Bath, Crescent Gardens offers the perfect balance for student living. Look no further for your ideal studio apartment; Crescent Gardens has everything you need to make your student experience unforgettable.</p></>)
};

export default BathCrescentGardensStudio1;