
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


const  BathFlat2 = () => 
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

    return (<><h1>Student Accommodation in Bath - 2 bedroom Flats</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 2 bedroom Flats</b> for the academic year 2024.

2 bedroom flats in Bath are ideal for students looking to share accommodation while studying. These flats typically come equipped with two separate bedrooms, a shared living space, a kitchen, and a bathroom. Living in a 2 bedroom flat allows students to enjoy both privacy and the opportunity to socialize with their flatmates.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/student-accommodation-in-bath-2-bedroom-flats.png')} alt='Student Accommodation in Bath - 2 bedroom Flats'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__2_bedroom_flats">Prices for Student Accommodation in Bath - 2 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__2_bedroom_flats__all_bills_inclusive">Student Accommodation in Bath - 2 bedroom Flats - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__2_bedroom_flats">Cheapest Student Accommodation in Bath - 2 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__2_bedroom_flats__recently_added">Student Accommodation in Bath - 2 bedroom Flats - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__2_bedroom_flats__recently_reduced">Student Accommodation in Bath - 2 bedroom Flats - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__2_bedroom_flats__by_student_location">Prices for Student Accommodation in Bath - 2 bedroom Flats - By Student Location</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__2_bedroom_flats"> <h2>Prices for Student Accommodation in Bath - 2 bedroom Flats</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£747 per month </td><td><button className = 'searchButton' title='View our Student Accommodation in Bath - 2 bedroom Flats' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__2_bedroom_flats__all_bills_inclusive"> <h2>Student Accommodation in Bath - 2 bedroom Flats - All Bills Inclusive</h2></a><p>Are you tired of dealing with multiple bills for your student flat in Bath? With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option for your 2 bedroom student flat. By subscribing to the <b>all bills inclusive</b> service, you can <b>concentrate on your studies</b> without the stress of managing utility payments. <b>UniBills.com</b> takes care of everything, from electricity and water to internet and TV license, making your student life much easier. Say goodbye to the confusion of splitting bills with your flatmates and hello to a seamless living experience. Get a quote from UniBills.</p><a id = "cheapest_student_accommodation_in_bath__2_bedroom_flats"> <h2>Cheapest Student Accommodation in Bath - 2 bedroom Flats</h2></a><p><Portlet location="All" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__2_bedroom_flats__recently_added"> <h2>Student Accommodation in Bath - 2 bedroom Flats - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__2_bedroom_flats__recently_reduced"> <h2>Student Accommodation in Bath - 2 bedroom Flats - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__2_bedroom_flats__by_student_location"> <h2>Prices for Student Accommodation in Bath - 2 bedroom Flats - By Student Location</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Oldfield Park, Bath, Somerset </td><td><button className = 'searchButton' title='View our Oldfield Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for Oldfield Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>17 </td><td>610 </td><td>1430 </td><td>859 </td><td>141 </td><td>332 </td><td>199 </td></tr><tr><td>Bath Spa, Bath, Somerset </td><td><button className = 'searchButton' title='View our Bath Spa, Bath, Somersets' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-bath-spa-bath' title  = 'View Key Statistics for Bath Spa, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>12 </td><td>620 </td><td>1105 </td><td>818 </td><td>144 </td><td>256 </td><td>190 </td></tr><tr><td>Bathwick, Bath, Somerset </td><td><button className = 'searchButton' title='View our Bathwick, Bath, Somersets' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^3051")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-bathwick-bath' title  = 'View Key Statistics for Bathwick, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>8 </td><td>657 </td><td>775 </td><td>702 </td><td>152 </td><td>180 </td><td>163 </td></tr><tr><td>Avon Park, Bath, Somerset </td><td><button className = 'searchButton' title='View our Avon Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-avon-park-bath' title  = 'View Key Statistics for Avon Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>5 </td><td>590 </td><td>775 </td><td>707 </td><td>137 </td><td>180 </td><td>164 </td></tr><tr><td>Beacon Hill, Bath, Somerset </td><td><button className = 'searchButton' title='View our Beacon Hill, Bath, Somersets' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61718")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-2-bedroom-flats-for-students-in-beacon-hill-bath' title  = 'View Key Statistics for Beacon Hill, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>5 </td><td>590 </td><td>775 </td><td>707 </td><td>137 </td><td>180 </td><td>164 </td></tr></table></p><h2>The Conclusion</h2><p>In conclusion, finding student accommodation in Bath can be a daunting task, but searching for a 2-bedroom flat can offer more space and flexibility for students looking to share with a friend or roommate. By utilizing online platforms, student housing websites, and local estate agents, students can efficiently navigate the rental market in Bath to secure the perfect 2-bedroom flat. With a range of options available, from modern apartments to traditional Georgian townhouses, students can find a comfortable and convenient living space to suit their needs. Factors such as location, amenities, and budget should be carefully considered when searching for student accommodation in Bath. Overall, with careful planning and research, students can find a 2-bedroom flat that meets their requirements and provides a welcoming home during their time in this vibrant city[].</p></>)
};

export default BathFlat2;