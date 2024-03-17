
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


const  BathKingswayFlat = () => 
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

    return (<><h1>Shared Flats for Students in Kingsway, Bath</h1><p>We have listings for <b>Shared Flats for Students in Kingsway, Bath</b> for the academic year 2024. <b>Shared Flats for Students in Kingsway, Bath</b>.

<b>Shared Flats for Students in Kingsway, Bath</b> offer a convenient and affordable living option for those studying in Bath. These flats typically include common areas like kitchens and living rooms, fostering a sense of community among residents. Students can enjoy the benefits of shared living while still having their own private space within the flat.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-flats-for-students-in-kingsway-bath.png')} alt='Shared Flats for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_flats_for_students_in_kingsway,_bath">Prices for Shared Flats for Students in Kingsway, Bath</a></li><li><a href = "#shared_flats_for_students_in_kingsway,_bath__all_bills_inclusive">Shared Flats for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_flats_for_students_in_kingsway,_bath">Cheap Shared Flats for Students in Kingsway, Bath</a></li><li><a href = "#shared_flats_for_students_in_kingsway,_bath__recently_added">Shared Flats for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#shared_flats_for_students_in_kingsway,_bath__recently_reduced">Shared Flats for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#prices_for_shared_flats_for_students_in_kingsway,_bath__houses">Prices for Shared Flats for Students in Kingsway, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_flats_for_students_in_kingsway,_bath"> <h2>Prices for Shared Flats for Students in Kingsway, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£888 per month </td><td><button className = 'searchButton' title='View our Shared Flats for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_flats_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Shared Flats for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for hassle-free accommodation in Kingsway, Bath, Somerset? Look no further than <b>UniBills.com</b> for the perfect solution – an <b>all bills inclusive</b> service for your student flat. By subscribing to this convenient option, you can enjoy the peace of mind that comes with having all your bills, including utilities and Wi-Fi, taken care of in one simple payment. This means you can <b>concentrate on your studies</b> without the stress of managing multiple bills each month. <b>UniBills.com</b> offers a seamless and efficient service, allowing you to focus on what truly matters. Say goodbye to the headache of juggling various bills and opt for the convenient and stress-free all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the benefits of an <b>all bills inclusive</b> service for yourself.</p><a id = "cheap_shared_flats_for_students_in_kingsway,_bath"> <h2>Cheap Shared Flats for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_flats_for_students_in_kingsway,_bath__recently_added"> <h2>Shared Flats for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_flats_for_students_in_kingsway,_bath__recently_reduced"> <h2>Shared Flats for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_shared_flats_for_students_in_kingsway,_bath__houses"> <h2>Prices for Shared Flats for Students in Kingsway, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>1 Bed Flat </td><td><button className = 'searchButton' title='View our 1 Bed Flats' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-1-bedroom-flats-for-students-in-kingsway-bath' title  = 'View Key Statistics for 1 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£1000 </td><td>£1400 </td><td>£1200 </td><td>£232 </td><td>£325 </td><td>£279 </td></tr><tr><td>2 Bed Flat </td><td><button className = 'searchButton' title='View our 2 Bed Flats' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-kingsway-bath' title  = 'View Key Statistics for 2 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£610 </td><td>£750 </td><td>£680 </td><td>£141 </td><td>£174 </td><td>£158 </td></tr></table></p><h2>The Conclusion</h2><p>In conclusion, finding a shared flat for students in Kingsway, Bath can be a rewarding experience. It offers a mix of convenience, affordability, and a sense of community that is perfect for students. By utilizing online platforms and local resources, students can easily connect with potential roommates and find the ideal living arrangement. The vibrant atmosphere of Kingsway provides numerous opportunities for socializing and exploring, while also allowing students to focus on their studies in a supportive environment. With a range of options available, from cozy studios to spacious apartments, students can find a living space that suits their preferences and budget. Overall, living in a shared flat in Kingsway offers a unique and enriching experience for students looking to immerse themselves in the bustling student life of Bath.</p></>)
};

export default BathKingswayFlat;