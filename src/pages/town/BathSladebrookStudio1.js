
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


const  BathSladebrookStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Sladebrook, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/studio-apartments-for-students-in-sladebrook-bath.png')} alt='Studio Apartments for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_sladebrook,_bath">Prices for Studio Apartments for Students in Sladebrook, Bath</a></li><li><a href = "#studio_apartments_for_students_in_sladebrook,_bath__all_bills_inclusive">Studio Apartments for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_sladebrook,_bath">Cheap Studio Apartments for Students in Sladebrook, Bath</a></li><li><a href = "#studio_apartments_for_students_in_sladebrook,_bath__recently_added">Studio Apartments for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_sladebrook,_bath__recently_reduced">Studio Apartments for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_sladebrook,_bath"> <h2>Prices for Studio Apartments for Students in Sladebrook, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1100 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p><b>UniBills.com</b> offers a convenient solution for students living in a 1-bedroom studio in Sladebrook, Bath, Somerset. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With everything from electricity, water, heating, and even Wi-Fi included in one monthly payment, you can focus solely on your studies without the added stress of managing multiple bills. This service not only saves you time and effort but also provides financial predictability, making budgeting easier. Whether you're a busy student or simply want to simplify your life, subscribing to an <b>all bills inclusive</b> service is a smart choice. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the convenience for yourself.</p><a id = "cheap_studio_apartments_for_students_in_sladebrook,_bath"> <h2>Cheap Studio Apartments for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_sladebrook,_bath__recently_added"> <h2>Studio Apartments for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Studio Apartments for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for studio apartments for students in Sladebrook, Bath can be a daunting task, but with the right approach, it can also be an exciting opportunity. By considering factors such as location, price, and amenities, students can find a studio that fits their needs and budget. The competitive rental market in Sladebrook may require students to act quickly and be prepared with all necessary documentation. Ultimately, finding the perfect studio apartment can provide students with a sense of independence and a comfortable living space while pursuing their studies in Bath. Overall, with thorough research and the right mindset, students can successfully navigate the search for studio apartments in Sladebrook and enjoy a fulfilling student life experience in this vibrant city.</p></>)
};

export default BathSladebrookStudio1;