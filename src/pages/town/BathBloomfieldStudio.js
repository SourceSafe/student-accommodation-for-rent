
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


const  BathBloomfieldStudio = () => 
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

    return (<><h1>Studio Apartments for Students in Bloomfield, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Bloomfield, Bath</b> for the academic year 2024. 

<b>Studio Apartments for Students in Bloomfield, Bath</b> offer convenient and affordable housing options for students studying in Bath. These apartments are located in a vibrant neighborhood with easy access to universities, transportation, and amenities, making them an ideal choice for student living.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-bloomfield-bath.png')} alt='Studio Apartments for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_bloomfield,_bath">Prices for Studio Apartments for Students in Bloomfield, Bath</a></li><li><a href = "#studio_apartments_for_students_in_bloomfield,_bath__all_bills_inclusive">Studio Apartments for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_bloomfield,_bath">Cheap Studio Apartments for Students in Bloomfield, Bath</a></li><li><a href = "#studio_apartments_for_students_in_bloomfield,_bath__recently_added">Studio Apartments for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_bloomfield,_bath__recently_reduced">Studio Apartments for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#prices_for_studio_apartments_for_students_in_bloomfield,_bath__houses">Prices for Studio Apartments for Students in Bloomfield, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_bloomfield,_bath"> <h2>Prices for Studio Apartments for Students in Bloomfield, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1100 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your student studio in Bloomfield, Bath, Somerset has numerous benefits. By signing up with <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option, which covers all your bills in one convenient package. This means you don't have to worry about managing multiple bills for utilities, internet, and other services. With everything taken care of, you can <b>concentrate on your studies</b> and enjoy a stress-free living experience. <b>UniBills.com</b> simplifies the process of managing your expenses, ensuring that you can focus on what truly matters during your time as a student. Get a quote from <b>UniBills.com</b> or any accommodation on this website to see how you can benefit from an <b>all bills inclusive</b> service.</p><a id = "cheap_studio_apartments_for_students_in_bloomfield,_bath"> <h2>Cheap Studio Apartments for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bloomfield,_bath__recently_added"> <h2>Studio Apartments for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Studio Apartments for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_studio_apartments_for_students_in_bloomfield,_bath__houses"> <h2>Prices for Studio Apartments for Students in Bloomfield, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton' title='View our Studio Apartments' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><div/> </td><td>£1100 </td><td>£1100 </td><td>£1100 </td><td>£255 </td><td>£255 </td><td>£255 </td></tr></table></p><h2>The Conclusion</h2><p>In summary, searching for studio apartments in Bloomfield, Bath, can be a daunting task for students. They must consider factors such as location, affordability, and amenities before making a decision. However, with proper research and guidance, students can find the perfect studio apartment that fits their needs and budget. Bloomfield offers a vibrant community with various amenities and convenient access to transportation, making it an attractive option for students. In conclusion, by carefully weighing their options and considering their priorities, students can secure a comfortable and convenient living space in Bloomfield, Bath, that will enhance their overall college experience.</p></>)
};

export default BathBloomfieldStudio;