
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


const  BathBathSpaFlat = () => 
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

    return (<><h1>Shared Flats for Students in Bath Spa, Bath</h1><p>We have listings for <b>Shared Flats for Students in Bath Spa, Bath</b> for the academic year 2024.

<b>Shared Flats for Students in Bath Spa, Bath</b> provide a cost-effective housing option for students attending Bath Spa University. These accommodations typically consist of multiple private bedrooms with shared common areas such as kitchens, living rooms, and bathrooms, fostering a sense of community among residents. Living in a shared flat allows students to split the rent and utility costs, making it an affordable choice for those looking to live near campus in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-flats-for-students-in-bath-spa-bath.png')} alt='Shared Flats for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_flats_for_students_in_bath_spa,_bath">Prices for Shared Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_flats_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared Flats for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_flats_for_students_in_bath_spa,_bath">Cheap Shared Flats for Students in Bath Spa, Bath</a></li><li><a href = "#shared_flats_for_students_in_bath_spa,_bath__recently_added">Shared Flats for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_flats_for_students_in_bath_spa,_bath__recently_reduced">Shared Flats for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#prices_for_shared_flats_for_students_in_bath_spa,_bath__houses">Prices for Shared Flats for Students in Bath Spa, Bath - Houses</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_flats_for_students_in_bath_spa,_bath"> <h2>Prices for Shared Flats for Students in Bath Spa, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£839 per month </td><td><button className = 'searchButton' title='View our Shared Flats for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_flats_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared Flats for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you a Bath Spa University student looking for a convenient and stress-free accommodation option in Bath? Look no further than <b>UniBills.com</b> for <b>all bills inclusive</b> services. By subscribing to an <b>all bills inclusive</b> package, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, taking the worries of managing multiple bills off your plate. This means you can <b>concentrate on your studies</b> and social life without the hassle of dealing with utility providers. <b>UniBills.com</b> offers a seamless solution that covers all your bills in one easy payment, making budgeting a breeze. Say goodbye to the headache of splitting bills with housemates and hello to a simplified living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the benefits of <b>all bills inclusive</b> living in Bath Spa.</p><a id = "cheap_shared_flats_for_students_in_bath_spa,_bath"> <h2>Cheap Shared Flats for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_flats_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared Flats for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_flats_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared Flats for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_shared_flats_for_students_in_bath_spa,_bath__houses"> <h2>Prices for Shared Flats for Students in Bath Spa, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>1 Bed Flat </td><td><button className = 'searchButton' title='View our 1 Bed Flats' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-1-bedroom-flats-for-students-in-bath-spa-bath' title  = 'View Key Statistics for 1 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£980 </td><td>£1500 </td><td>£1212 </td><td>£227 </td><td>£348 </td><td>£281 </td></tr><tr><td>2 Bed Flat </td><td><button className = 'searchButton' title='View our 2 Bed Flats' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-bath-spa-bath' title  = 'View Key Statistics for 2 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£620 </td><td>£1105 </td><td>£818 </td><td>£144 </td><td>£256 </td><td>£190 </td></tr><tr><td>3 Bed Flat </td><td><button className = 'searchButton' title='View our 3 Bed Flats' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-3-bedroom-flats-for-students-in-bath-spa-bath' title  = 'View Key Statistics for 3 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£585 </td><td>£700 </td><td>£642 </td><td>£136 </td><td>£162 </td><td>£149 </td></tr><tr><td>4 Bed Flat </td><td><button className = 'searchButton' title='View our 4 Bed Flats' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-4-bedroom-flats-for-students-in-bath-spa-bath' title  = 'View Key Statistics for 4 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£575 </td><td>£932 </td><td>£694 </td><td>£133 </td><td>£216 </td><td>£161 </td></tr><tr><td>5 Bed Flat </td><td><button className = 'searchButton' title='View our 5 Bed Flats' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-5-bedroom-flats-for-students-in-bath-spa-bath' title  = 'View Key Statistics for 5 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£520 </td><td>£587 </td><td>£557 </td><td>£120 </td><td>£136 </td><td>£129 </td></tr></table></p><h2>The Conclusion</h2><p>In summary, looking for shared flats for students in Bath Spa, Bath can be a rewarding experience with the right approach. With a variety of options available, students can find the perfect living situation that suits their needs and preferences. From spacious rooms to convenient locations, there is something for everyone in this vibrant city. By utilizing online platforms and reaching out to local agencies, students can easily navigate the rental market and secure a comfortable living space. In conclusion, finding a shared flat in Bath Spa, Bath can enhance the overall university experience by fostering a sense of community and independence among students. It is a great way to make the most of student life while studying in this picturesque city.</p></>)
};

export default BathBathSpaFlat;