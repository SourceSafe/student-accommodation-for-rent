
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

    return (<><h1>Studio Apartments for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/studio-apartments-for-students-in-bath-spa-bath.png')} alt='Studio Apartments for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_bath_spa,_bath">Prices for Studio Apartments for Students in Bath Spa, Bath</a></li><li><a href = "#studio_apartments_for_students_in_bath_spa,_bath__all_bills_inclusive">Studio Apartments for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_bath_spa,_bath">Cheap Studio Apartments for Students in Bath Spa, Bath</a></li><li><a href = "#studio_apartments_for_students_in_bath_spa,_bath__recently_added">Studio Apartments for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_bath_spa,_bath__recently_reduced">Studio Apartments for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_bath_spa,_bath"> <h2>Prices for Studio Apartments for Students in Bath Spa, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1248 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>When you're living in a 1-bedroom student studio in Bath Spa, Bath, Somerset, the last thing you want to worry about is managing multiple utility bills on top of your studies. That's where an <b>all bills inclusive</b> service, like the one offered by <b>UniBills.com</b>, can make a world of difference. By opting for an <b>all bills inclusive</b> package, you can enjoy the hassle-free convenience of having all your utility bills bundled into one easy payment each month. This means you can <b>concentrate on your studies</b> without the added stress of budgeting for gas, electricity, water, and internet separately. <b>UniBills.com</b> takes care of it all for you, allowing you to fully immerse yourself in student life and make the most of your time in Bath. So why wait? Get a quote from <b>UniBills.com</b> or any accommodation on this website and embrace the simplicity and ease of an <b>all bills inclusive</b> living arrangement.</p><a id = "cheap_studio_apartments_for_students_in_bath_spa,_bath"> <h2>Cheap Studio Apartments for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bath_spa,_bath__recently_added"> <h2>Studio Apartments for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Studio Apartments for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, finding a studio apartment for students in Bath Spa, Bath requires thorough research and consideration. With the demand for affordable housing in popular student cities like Bath on the rise, it's essential to start your search early and explore various options. Studio apartments offer a convenient and independent living experience for students, allowing for privacy and focused studying. However, the limited space may require efficient organization and minimalistic living. Considering factors such as location, budget, and amenities will help in making the right choice for your student accommodation. By utilizing online platforms and contacting local letting agencies, you can expand your search and find a suitable studio apartment that meets your needs. Don't hesitate to visit potential properties in person to get a feel for the space and surrounding area. Overall, with a strategic approach and persistence, securing a studio apartment in Bath Spa, Bath can be a rewarding experience for any student.</p></>)
};

export default BathBathSpaStudio1;