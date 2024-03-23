
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


const  BathFlat3 = () => 
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

    return (<><h1>Student Accommodation in Bath - 3 bedroom Flats</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 3 bedroom Flats</b> for the academic year 2024.

3 bedroom Flats in Bath are ideal for students looking to share accommodation with a couple of friends. These spacious flats offer students the opportunity to live together while still having their own private space. With multiple bedrooms, these flats are perfect for creating a comfortable living environment for students studying in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/student-accommodation-in-bath-3-bedroom-flats.png')} alt='Student Accommodation in Bath - 3 bedroom Flats'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__3_bedroom_flats">Prices for Student Accommodation in Bath - 3 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__3_bedroom_flats__all_bills_inclusive">Student Accommodation in Bath - 3 bedroom Flats - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__3_bedroom_flats">Cheapest Student Accommodation in Bath - 3 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__3_bedroom_flats__recently_added">Student Accommodation in Bath - 3 bedroom Flats - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__3_bedroom_flats__recently_reduced">Student Accommodation in Bath - 3 bedroom Flats - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__3_bedroom_flats__by_student_location">Prices for Student Accommodation in Bath - 3 bedroom Flats - By Student Location</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__3_bedroom_flats"> <h2>Prices for Student Accommodation in Bath - 3 bedroom Flats</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£673 per month </td><td><button className = 'searchButton' title='View our Student Accommodation in Bath - 3 bedroom Flats' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__3_bedroom_flats__all_bills_inclusive"> <h2>Student Accommodation in Bath - 3 bedroom Flats - All Bills Inclusive</h2></a><p>Are you tired of dealing with multiple utility bills and the stress that comes with it? <b>UniBills.com</b> offers the perfect solution for students living in a 3-bedroom flat in Bath. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With one simple monthly payment, you can have all your bills, including electricity, water, internet, and more, taken care of. This means you can <b>concentrate on your studies</b> and not worry about budgeting for unexpected expenses. <b>UniBills.com</b> makes living in your student flat easier and more convenient. Say goodbye to the headache of managing multiple bills and say hello to a more simplified way of living. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the benefits for yourself.</p><a id = "cheapest_student_accommodation_in_bath__3_bedroom_flats"> <h2>Cheapest Student Accommodation in Bath - 3 bedroom Flats</h2></a><p><Portlet location="All" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__3_bedroom_flats__recently_added"> <h2>Student Accommodation in Bath - 3 bedroom Flats - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__3_bedroom_flats__recently_reduced"> <h2>Student Accommodation in Bath - 3 bedroom Flats - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__3_bedroom_flats__by_student_location"> <h2>Prices for Student Accommodation in Bath - 3 bedroom Flats - By Student Location</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Oldfield Park, Bath, Somerset </td><td><button className = 'searchButton' title='View our Oldfield Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-3-bedroom-flats-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for Oldfield Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>9 </td><td>585 </td><td>990 </td><td>715 </td><td>136 </td><td>230 </td><td>166 </td></tr><tr><td>Widcombe, Bath, Somerset </td><td><button className = 'searchButton' title='View our Widcombe, Bath, Somersets' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^26891")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-3-bedroom-flats-for-students-in-widcombe-bath' title  = 'View Key Statistics for Widcombe, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>8 </td><td>533 </td><td>783 </td><td>658 </td><td>123 </td><td>182 </td><td>153 </td></tr><tr><td>Avon Park, Bath, Somerset </td><td><button className = 'searchButton' title='View our Avon Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-3-bedroom-flats-for-students-in-avon-park-bath' title  = 'View Key Statistics for Avon Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>7 </td><td>600 </td><td>990 </td><td>733 </td><td>139 </td><td>230 </td><td>170 </td></tr><tr><td>Beacon Hill, Bath, Somerset </td><td><button className = 'searchButton' title='View our Beacon Hill, Bath, Somersets' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61718")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-3-bedroom-flats-for-students-in-beacon-hill-bath' title  = 'View Key Statistics for Beacon Hill, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>7 </td><td>600 </td><td>990 </td><td>733 </td><td>139 </td><td>230 </td><td>170 </td></tr><tr><td>Kensington, Bath, Somerset </td><td><button className = 'searchButton' title='View our Kensington, Bath, Somersets' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-3-bedroom-flats-for-students-in-kensington-bath' title  = 'View Key Statistics for Kensington, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>7 </td><td>600 </td><td>990 </td><td>733 </td><td>139 </td><td>230 </td><td>170 </td></tr></table></p><h2>The Conclusion</h2><p>In conclusion, searching for student accommodation in Bath can be a rewarding experience, especially when looking for 3-bedroom flats. These properties offer ample space and shared living areas, perfect for students looking to live with friends or colleagues. When considering factors such as location, amenities, and budget, it is important to thoroughly research and view multiple options before making a decision. Bath boasts a range of beautiful and historic neighborhoods, making it a desirable location for student living. By carefully evaluating different properties and considering individual needs and preferences, students can find the perfect 3-bedroom flat to call home during their time in Bath. With its vibrant culture, picturesque surroundings, and exceptional universities, Bath offers a unique and enriching experience for students seeking accommodation in this charming city.</p></>)
};

export default BathFlat3;