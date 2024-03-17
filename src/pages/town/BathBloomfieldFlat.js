
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


const  BathBloomfieldFlat = () => 
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

    return (<><h1>Shared Flats for Students in Bloomfield, Bath</h1><p>We have listings for <b>Shared Flats for Students in Bloomfield, Bath</b> for the academic year 2024.

<b>Shared Flats for Students in Bloomfield, Bath</b> offer a convenient and affordable housing option for students attending schools in the area. These shared accommodations typically include individual bedrooms, shared common areas, and sometimes shared bathrooms, providing a sense of community while offering privacy when needed. Living in a shared flat can also be a great way for students to meet new people and make friends while studying in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-flats-for-students-in-bloomfield-bath.png')} alt='Shared Flats for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_flats_for_students_in_bloomfield,_bath">Prices for Shared Flats for Students in Bloomfield, Bath</a></li><li><a href = "#shared_flats_for_students_in_bloomfield,_bath__all_bills_inclusive">Shared Flats for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_flats_for_students_in_bloomfield,_bath">Cheap Shared Flats for Students in Bloomfield, Bath</a></li><li><a href = "#shared_flats_for_students_in_bloomfield,_bath__recently_added">Shared Flats for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#shared_flats_for_students_in_bloomfield,_bath__recently_reduced">Shared Flats for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#prices_for_shared_flats_for_students_in_bloomfield,_bath__houses">Prices for Shared Flats for Students in Bloomfield, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_flats_for_students_in_bloomfield,_bath"> <h2>Prices for Shared Flats for Students in Bloomfield, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£888 per month </td><td><button className = 'searchButton' title='View our Shared Flats for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_flats_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Shared Flats for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Tired of juggling multiple bills for your student flat in Bloomfield, Bath, Somerset? <b>UniBills.com</b> offers an <b>all bills inclusive</b> service that takes the stress out of managing your utility payments. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social life without worrying about splitting bills or chasing flatmates for money. Enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b> and have peace of mind knowing that all your bills are taken care of in one easy monthly payment. Say goodbye to unexpected charges and hello to a simplified living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and make your student life in Bloomfield, Bath, Somerset, a little bit easier.</p><a id = "cheap_shared_flats_for_students_in_bloomfield,_bath"> <h2>Cheap Shared Flats for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_flats_for_students_in_bloomfield,_bath__recently_added"> <h2>Shared Flats for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_flats_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Shared Flats for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_shared_flats_for_students_in_bloomfield,_bath__houses"> <h2>Prices for Shared Flats for Students in Bloomfield, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>1 Bed Flat </td><td><button className = 'searchButton' title='View our 1 Bed Flats' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-1-bedroom-flats-for-students-in-bloomfield-bath' title  = 'View Key Statistics for 1 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£1000 </td><td>£1400 </td><td>£1200 </td><td>£232 </td><td>£325 </td><td>£279 </td></tr><tr><td>2 Bed Flat </td><td><button className = 'searchButton' title='View our 2 Bed Flats' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-bloomfield-bath' title  = 'View Key Statistics for 2 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£610 </td><td>£750 </td><td>£680 </td><td>£141 </td><td>£174 </td><td>£158 </td></tr></table></p><h2>The Conclusion</h2><p>In summary, searching for shared flats for students in Bloomfield, Bath can be a rewarding and convenient experience. With a variety of options available, students can find affordable and well-maintained accommodations in close proximity to local universities and amenities. By utilizing online platforms and local resources, students can easily connect with potential roommates and landlords to find the perfect living situation. Additionally, living in a shared flat can provide a sense of community and support for students adjusting to university life. In conclusion, the process of finding shared flats in Bloomfield, Bath offers students an opportunity to establish a comfortable and affordable living arrangement while fostering connections with peers in a vibrant and student-friendly neighborhood.</p></>)
};

export default BathBloomfieldFlat;