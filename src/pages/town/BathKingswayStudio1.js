
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


const  BathKingswayStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Kingsway, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-kingsway-bath.png')} alt='Studio Apartments for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_kingsway,_bath">Prices for Studio Apartments for Students in Kingsway, Bath</a></li><li><a href = "#studio_apartments_for_students_in_kingsway,_bath__all_bills_inclusive">Studio Apartments for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_kingsway,_bath">Cheap Studio Apartments for Students in Kingsway, Bath</a></li><li><a href = "#studio_apartments_for_students_in_kingsway,_bath__recently_added">Studio Apartments for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_kingsway,_bath__recently_reduced">Studio Apartments for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_kingsway,_bath"> <h2>Prices for Studio Apartments for Students in Kingsway, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1100 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p><b>UniBills.com</b> offers an <b>all bills inclusive</b> service for your 1 bedroom student studio in Kingsway, Bath, Somerset. By choosing this convenient option, you can enjoy the hassle-free experience of having all your bills, including utilities and Wi-Fi, included in one fixed monthly payment. This means you can <b>concentrate on your studies</b> and not worry about managing multiple bills or unexpected costs. With <b>UniBills.com</b>, you can have peace of mind knowing that your accommodation costs are taken care of, allowing you to fully focus on your academic pursuits. Say goodbye to the stress of budgeting for various bills and hello to the simplicity of an all-inclusive package. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and simplify your student living experience.</p><a id = "cheap_studio_apartments_for_students_in_kingsway,_bath"> <h2>Cheap Studio Apartments for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_kingsway,_bath__recently_added"> <h2>Studio Apartments for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_kingsway,_bath__recently_reduced"> <h2>Studio Apartments for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>The search for studio apartments for students in Kingsway, Bath, is both exciting and challenging. With a variety of options available, students can find the perfect space to call their own. From compact and cozy studios to more spacious units, there is something to suit every student's needs and preferences. Location is key, as Kingsway offers a convenient and vibrant setting close to campus, amenities, and transportation. Additionally, studio apartments in this area often come fully furnished, making the move-in process a breeze. Overall, students can look forward to a comfortable and convenient living experience in Kingsway, Bath, with plenty of opportunities to focus on their studies while enjoying all the city has to offer. Whether it's taking a stroll along the river, studying in a charming café, or exploring local markets, students are sure to make lasting memories in this dynamic neighborhood.</p></>)
};

export default BathKingswayStudio1;