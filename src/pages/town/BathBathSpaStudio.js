
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


const  BathBathSpaStudio = () => 
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

    return (<><h1>Studio Apartments for Students in Bath Spa, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Bath Spa, Bath</b> for the academic year 2024. 

<b>Studio Apartments for Students in Bath Spa, Bath</b> provide convenient and comfortable living spaces for students attending Bath Spa University. These apartments are typically equipped with modern amenities and are located within close proximity to campus, making them an ideal choice for <a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a>. With a variety of options available, students can find the perfect studio apartment to suit their needs during their academic year in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-bath-spa-bath.png')} alt='Studio Apartments for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_bath_spa,_bath">Prices for Studio Apartments for Students in Bath Spa, Bath</a></li><li><a href = "#studio_apartments_for_students_in_bath_spa,_bath__all_bills_inclusive">Studio Apartments for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_bath_spa,_bath">Cheap Studio Apartments for Students in Bath Spa, Bath</a></li><li><a href = "#studio_apartments_for_students_in_bath_spa,_bath__recently_added">Studio Apartments for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_bath_spa,_bath__recently_reduced">Studio Apartments for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#prices_for_studio_apartments_for_students_in_bath_spa,_bath__houses">Prices for Studio Apartments for Students in Bath Spa, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_bath_spa,_bath"> <h2>Prices for Studio Apartments for Students in Bath Spa, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1248 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Choosing an <b>all bills inclusive</b> service for your student studio in Bath Spa, Bath, Somerset is a smart move for any busy student. <b>UniBills.com</b> offers an all-encompassing package that covers your rent, utilities, and even internet fees, allowing you to <b>concentrate on your studies</b> without worrying about budgeting for various bills throughout the month. With <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option provided by their reliable service, making your student living experience seamless and stress-free. Say goodbye to the hassle of managing multiple bills and hello to a simplified and convenient way of living. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the benefits of an <b>all bills inclusive</b> service first hand.</p><a id = "cheap_studio_apartments_for_students_in_bath_spa,_bath"> <h2>Cheap Studio Apartments for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bath_spa,_bath__recently_added"> <h2>Studio Apartments for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Studio Apartments for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_studio_apartments_for_students_in_bath_spa,_bath__houses"> <h2>Prices for Studio Apartments for Students in Bath Spa, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton' title='View our Studio Apartments' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><div/> </td><td>£995 </td><td>£1625 </td><td>£1248 </td><td>£231 </td><td>£377 </td><td>£290 </td></tr></table></p><h2>The Conclusion</h2><p>In conclusion, searching for studio apartments for students in Bath Spa, Bath can be both an exciting and daunting task. The vibrant city offers a variety of options for student accommodation, ranging from cozy studios to modern apartments. When looking for the perfect studio, it is important to consider factors such as location, budget, and amenities. Bath Spa University also provides resources and support for students looking for housing, making the process smoother. Ultimately, finding a studio apartment that fits your needs and preferences can enhance your student experience in Bath, providing a comfortable and convenient living space during your time at university. So, take your time to explore the available options and make an informed decision that will ensure a pleasant and enjoyable living experience while studying in this historic city.</p></>)
};

export default BathBathSpaStudio;