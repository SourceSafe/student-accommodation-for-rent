
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


const  BathHatStudio = () => 
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

    return (<><h1>Studio Apartments for Students in Hat, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Hat, Bath</b> for the academic year 2024. 
<b>Studio Apartments for Students in Hat, Bath</b> are perfect for those looking for a cozy living space close to the university campus.
These apartments offer convenient access to local amenities and a comfortable environment for students to focus on their studies.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-hat-bath.png')} alt='Studio Apartments for Students in Hat, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_hat,_bath">Prices for Studio Apartments for Students in Hat, Bath</a></li><li><a href = "#studio_apartments_for_students_in_hat,_bath__all_bills_inclusive">Studio Apartments for Students in Hat, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_hat,_bath">Cheap Studio Apartments for Students in Hat, Bath</a></li><li><a href = "#studio_apartments_for_students_in_hat,_bath__recently_added">Studio Apartments for Students in Hat, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_hat,_bath__recently_reduced">Studio Apartments for Students in Hat, Bath - Recently Reduced</a></li><li><a href = "#prices_for_studio_apartments_for_students_in_hat,_bath__houses">Prices for Studio Apartments for Students in Hat, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_hat,_bath"> <h2>Prices for Studio Apartments for Students in Hat, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1287 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Hat, Bath' onClick={() => routeToPortal("?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^61721")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_hat,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Hat, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a studio in Hat, Bath, Somerset? Keeping track of multiple bills can be a hassle, especially when you're already juggling assignments and exams. That's where <b>UniBills.com</b> comes in. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the convenience of having all your utility bills consolidated into one easy payment. This means you can <b>concentrate on your studies</b> without the added stress of managing various bills. <b>UniBills.com</b> takes care of everything from electricity to internet, allowing you to focus on what truly matters. Say goodbye to the headache of dealing with separate bills and enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student living experience today.</p><a id = "cheap_studio_apartments_for_students_in_hat,_bath"> <h2>Cheap Studio Apartments for Students in Hat, Bath</h2></a><p><Portlet location="REGION^61721" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_hat,_bath__recently_added"> <h2>Studio Apartments for Students in Hat, Bath - Recently Added</h2></a><p><Portlet location="REGION^61721" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_hat,_bath__recently_reduced"> <h2>Studio Apartments for Students in Hat, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61721" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_studio_apartments_for_students_in_hat,_bath__houses"> <h2>Prices for Studio Apartments for Students in Hat, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton' title='View our Studio Apartments' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^61721")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><div/> </td><td>£795 </td><td>£1690 </td><td>£1287 </td><td>£184 </td><td>£393 </td><td>£299 </td></tr></table></p><h2>The Conclusion</h2><p>In summary, searching for studio apartments for students in Hat, Bath can be a challenging yet rewarding experience. The compact layout of studio apartments provides an ideal living space for students, offering a balance between privacy and convenience. By narrowing down the search to Hat, Bath, students can benefit from the close proximity to campus and various amenities within the city. It is important to consider factors such as rent, location, and amenities when looking for the perfect studio apartment. With proper planning and research, students can find a studio apartment that meets their needs and enhances their overall college experience. In conclusion, finding a studio apartment in Hat, Bath requires careful consideration and attention to detail, but the end result can offer students a comfortable and convenient living situation during their time at university.</p></>)
};

export default BathHatStudio;