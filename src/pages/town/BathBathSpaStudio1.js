
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


const  BathBathSpaStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-bath-spa-bath.png')} alt='Studio Apartments for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_bath_spa,_bath">Prices for Studio Apartments for Students in Bath Spa, Bath</a></li><li><a href = "#studio_apartments_for_students_in_bath_spa,_bath__all_bills_inclusive">Studio Apartments for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_bath_spa,_bath">Cheap Studio Apartments for Students in Bath Spa, Bath</a></li><li><a href = "#studio_apartments_for_students_in_bath_spa,_bath__recently_added">Studio Apartments for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_bath_spa,_bath__recently_reduced">Studio Apartments for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_bath_spa,_bath"> <h2>Prices for Studio Apartments for Students in Bath Spa, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1248 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Living in a 1 bedroom student studio in Bath Spa, Bath, Somerset can be a great experience, but managing bills and expenses while juggling studies can be stressful. This is where an <b>all bills inclusive</b> service comes in handy. By subscribing to <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by the accommodation. With all your bills, including utilities and Wi-Fi, bundled into one convenient package, you can <b>concentrate on your studies</b> and not have to worry about monthly expenses. <b>UniBills.com</b> takes the guesswork out of budgeting, allowing you to live comfortably without any unexpected surprises. Say goodbye to the headache of splitting bills or dealing with multiple providers. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the convenience of an <b>all bills inclusive</b> service today.</p><a id = "cheap_studio_apartments_for_students_in_bath_spa,_bath"> <h2>Cheap Studio Apartments for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bath_spa,_bath__recently_added"> <h2>Studio Apartments for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Studio Apartments for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>When searching for studio apartments for students in Bath Spa, Bath, it is essential to consider key factors such as location, amenities, and budget. Studio apartments offer a convenient and comfortable living space for students who prioritize independence and privacy. The variety of available options in Bath Spa allows students to choose a studio that fits their needs and preferences. With close proximity to the university and popular student areas, studio apartments provide a perfect balance of accessibility and tranquility. It is crucial for students to carefully evaluate their options, considering factors such as distance from campus, available facilities, and communication with landlords. In conclusion, finding a studio apartment in Bath Spa is an exciting opportunity for students to experience independent living in a vibrant and historic city. Students can enjoy a cozy and self-sufficient lifestyle while immersing themselves in the rich cultural and educational environment of Bath Spa.</p></>)
};

export default BathBathSpaStudio1;