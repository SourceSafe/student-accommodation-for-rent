
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


const  BathKensingtonStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Kensington, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-kensington-bath.png')} alt='Studio Apartments for Students in Kensington, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_kensington,_bath">Prices for Studio Apartments for Students in Kensington, Bath</a></li><li><a href = "#studio_apartments_for_students_in_kensington,_bath__all_bills_inclusive">Studio Apartments for Students in Kensington, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_kensington,_bath">Cheap Studio Apartments for Students in Kensington, Bath</a></li><li><a href = "#studio_apartments_for_students_in_kensington,_bath__recently_added">Studio Apartments for Students in Kensington, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_kensington,_bath__recently_reduced">Studio Apartments for Students in Kensington, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_kensington,_bath"> <h2>Prices for Studio Apartments for Students in Kensington, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1309 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Kensington, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_kensington,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Kensington, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for a hassle-free living experience in Kensington, Bath, Somerset? Subscribing to an <b>all bills inclusive</b> service for your 1-bedroom student Studio is the way to go. <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b> without the stress of managing utility bills. With all bills included in one easy payment, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, giving you peace of mind and more time to focus on your academic pursuits. Say goodbye to the complexities of individual utility bills and welcome the simplicity of a single monthly payment. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience a stress-free student living environment.</p><a id = "cheap_studio_apartments_for_students_in_kensington,_bath"> <h2>Cheap Studio Apartments for Students in Kensington, Bath</h2></a><p><Portlet location="REGION^61722" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_kensington,_bath__recently_added"> <h2>Studio Apartments for Students in Kensington, Bath - Recently Added</h2></a><p><Portlet location="REGION^61722" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_kensington,_bath__recently_reduced"> <h2>Studio Apartments for Students in Kensington, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61722" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, looking for studio apartments for students in Kensington, Bath can be both exciting and challenging. With its vibrant atmosphere and close proximity to universities, Kensington offers an ideal location for student living. However, the high demand for studio apartments in this area means that students may need to act quickly and be prepared to put in the effort to secure their desired accommodation. It is important to thoroughly research available options, consider factors such as budget and location, and be flexible in order to find the perfect studio apartment. Overall, by being proactive and organized in the search process, students can find a comfortable and convenient studio apartment in Kensington that meets their needs and enhances their overall living experience.</p></>)
};

export default BathKensingtonStudio1;