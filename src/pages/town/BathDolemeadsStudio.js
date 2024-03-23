
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


const  BathDolemeadsStudio = () => 
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

    return (<><h1>Studio Apartments for Students in Dolemeads, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Dolemeads, Bath</b> for the academic year 2024.

<b>Studio Apartments for Students in Dolemeads, Bath</b> provide a convenient and comfortable living option for students studying in Bath. These apartments are designed with students' needs in mind, offering a private and conducive environment for studying and relaxation. With easy access to campus facilities and nearby amenities, <b>Studio Apartments for Students in Dolemeads, Bath</b> are an ideal choice for student accommodation in the city.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-dolemeads-bath.png')} alt='Studio Apartments for Students in Dolemeads, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_dolemeads,_bath">Prices for Studio Apartments for Students in Dolemeads, Bath</a></li><li><a href = "#studio_apartments_for_students_in_dolemeads,_bath__all_bills_inclusive">Studio Apartments for Students in Dolemeads, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_dolemeads,_bath">Cheap Studio Apartments for Students in Dolemeads, Bath</a></li><li><a href = "#studio_apartments_for_students_in_dolemeads,_bath__recently_added">Studio Apartments for Students in Dolemeads, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_dolemeads,_bath__recently_reduced">Studio Apartments for Students in Dolemeads, Bath - Recently Reduced</a></li><li><a href = "#prices_for_studio_apartments_for_students_in_dolemeads,_bath__houses">Prices for Studio Apartments for Students in Dolemeads, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_dolemeads,_bath"> <h2>Prices for Studio Apartments for Students in Dolemeads, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1287 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Dolemeads, Bath' onClick={() => routeToPortal("?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71097")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_dolemeads,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Dolemeads, Bath - All Bills Inclusive</h2></a><p>When you're a student living in a studio in Dolemeads, Bath, Somerset, the last thing you need is the stress of managing multiple bills every month. That's where the <b>all bills inclusive</b> service from <b>UniBills.com</b> comes in. By opting for this convenient option, you can enjoy the hassle-free experience of having all your bills, including utilities, internet, and even TV license, bundled into one easy payment. With this service, you can <b>concentrate on your studies</b> and social life without having to worry about keeping track of numerous bills. <b>UniBills.com</b> ensures that you have everything you need to live comfortably in your student studio without the added hassle of managing separate accounts. Say goodbye to bill-related headaches and enjoy the convenience of the all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and simplify your student living experience.</p><a id = "cheap_studio_apartments_for_students_in_dolemeads,_bath"> <h2>Cheap Studio Apartments for Students in Dolemeads, Bath</h2></a><p><Portlet location="REGION^71097" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_dolemeads,_bath__recently_added"> <h2>Studio Apartments for Students in Dolemeads, Bath - Recently Added</h2></a><p><Portlet location="REGION^71097" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_dolemeads,_bath__recently_reduced"> <h2>Studio Apartments for Students in Dolemeads, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71097" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_studio_apartments_for_students_in_dolemeads,_bath__houses"> <h2>Prices for Studio Apartments for Students in Dolemeads, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton' title='View our Studio Apartments' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71097")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><div/> </td><td>£795 </td><td>£1690 </td><td>£1287 </td><td>£184 </td><td>£393 </td><td>£299 </td></tr></table></p><h2>The Conclusion</h2><p>In conclusion, searching for studio apartments in the desirable area of Dolemeads, Bath can be a fulfilling experience for students. With a variety of options available, from modern and stylish interiors to convenient amenities, students are sure to find a comfortable and affordable living space that suits their needs. The location offers easy access to local shops, restaurants, and public transportation, making it a convenient choice for students studying in the area. Additionally, the vibrant community atmosphere in Dolemeads provides a welcoming and safe environment for students to thrive in. Overall, students can look forward to a convenient, comfortable, and enjoyable living experience in Dolemeads, Bath.</p></>)
};

export default BathDolemeadsStudio;