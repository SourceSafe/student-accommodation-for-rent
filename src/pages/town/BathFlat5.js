
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles-town.css';
import { MdOutlineQueryStats } from "react-icons/md";
import { BsFillHouseFill, BsFillHouseCheckFill  } from "react-icons/bs";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { useAtomState } from '@zedux/react';
import { filtersAtom} from '../../portal/appState/appState'
import { ViewPortal} from '../../components/ViewPortal/ViewPortal'
import { CTAPackage} from '../../components/CTAPackage/CTAPackage'
import {Portlet} from '../../portlet/portlet'
import {useNavigate} from 'react-router-dom'


const  BathFlat5 = () => 
{    
    const navigate = useNavigate();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [filters, setFilters] = useAtomState(filtersAtom);              
    const [isMobile,setIsMobile] = useState();    
    const [viewButtonTitle,setViewButtonTitle] = useState();    

    const routeToPortal = (params ) => {                  
        const queryParameters = new URLSearchParams(params)
        const town= queryParameters.get("townLocationId");
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

      useEffect(() => {
    const handleWindowSizeChange=() => {
        setIsMobile(window.innerWidth <= 768);            
    }
    handleWindowSizeChange();
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
    }, []);


      useEffect(() => {        
        isMobile ? setViewButtonTitle("View") : setViewButtonTitle("View Properties") 
    }, [isMobile]);

  
  
  const classNameHideForMobile = isMobile ? 'hideForMobile' : '';

    return (<><h1>Student Accommodation in Bath - 5 bedroom Flats</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 5 bedroom Flats</b> for the academic year 2024. 
5 bedroom flats in Bath are perfect for students who prefer to live with a larger group or for those looking to share expenses. These spacious flats provide plenty of room for studying and socializing with roommates.
Living in a 5 bedroom flat in Bath offers a great opportunity to meet new people, create lasting friendships, and enjoy a vibrant student life in this beautiful city.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/student-accommodation-in-bath-5-bedroom-flats.png')} alt='Student Accommodation in Bath - 5 bedroom Flats'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Student Accommodation in Bath - 5 bedroom Flats' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=&type=Flat&beds=5")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Student Accommodation in Bath - 5 bedroom Flats</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_student_accommodation_in_bath__5_bedroom_flats_pp/pm">Prices for Student Accommodation in Bath - 5 bedroom Flats pp/pm</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_flats__all_bills_inclusive">Student Accommodation in Bath - 5 bedroom Flats - All Bills Inclusive</a></li><li><a href = "#cheapest_student_accommodation_in_bath__5_bedroom_flats">Cheapest Student Accommodation in Bath - 5 bedroom Flats</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_flats__recently_added">Student Accommodation in Bath - 5 bedroom Flats - Recently Added</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_flats__recently_reduced">Student Accommodation in Bath - 5 bedroom Flats - Recently Reduced</a></li><li><a href = "#prices_for_student_accommodation_in_bath__5_bedroom_flats__by_student_location_pp/pm">Prices for Student Accommodation in Bath - 5 bedroom Flats - By Student Location pp/pm</a></li><li><a href = "#student_accommodation_portal__5_bedroom_flats_in_bath">Student Accommodation Portal - 5 Bedroom Flats in Bath</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_flats__private_rental_sector">Student Accommodation in Bath - 5 bedroom Flats - Private Rental Sector</a></li><li><a href = "#student_accommodation_in_bath__5_bedroom_flats__fully_furnished">Student Accommodation in Bath - 5 bedroom Flats - Fully Furnished</a></li><li><a href = "#popular_locations_for_5_bedroom_flats_in_bath">Popular Locations for 5 bedroom Flats in Bath</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_student_accommodation_in_bath__5_bedroom_flats_pp/pm"> <h2>Prices for Student Accommodation in Bath - 5 bedroom Flats pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£662 per month </td><td><button className = 'searchButton tableButton' title='Student Accommodation in Bath - 5 bedroom Flats' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "student_accommodation_in_bath__5_bedroom_flats__all_bills_inclusive"> <h2>Student Accommodation in Bath - 5 bedroom Flats - All Bills Inclusive</h2></a><p>Are you tired of juggling multiple bills for your 5-bedroom student flat in Bath? Why not simplify your life and free up more time to <b>concentrate on your studies</b> by subscribing to an <b>all bills inclusive</b> service? <b>UniBills.com</b> offers a hassle-free solution that covers all your utility bills, including electricity, water, gas, and internet. With this convenient option, you can say goodbye to the stress of managing various bills and enjoy the peace of mind that comes with knowing that everything is taken care of. <b>UniBills.com</b> allows you to budget effectively and avoid unexpected costs, making it easier to focus on your education and extracurricular activities. Get a quote from <b>UniBills.com</b> or any accommodation on this website and discover the benefits of the all-inclusive package for your student accommodation in Bath.</p><a id = "cheapest_student_accommodation_in_bath__5_bedroom_flats"> <h2>Cheapest Student Accommodation in Bath - 5 bedroom Flats</h2></a><p><Portlet location="All" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__5_bedroom_flats__recently_added"> <h2>Student Accommodation in Bath - 5 bedroom Flats - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_in_bath__5_bedroom_flats__recently_reduced"> <h2>Student Accommodation in Bath - 5 bedroom Flats - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "prices_for_student_accommodation_in_bath__5_bedroom_flats__by_student_location_pp/pm"> <h2>Prices for Student Accommodation in Bath - 5 bedroom Flats - By Student Location pp/pm</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th className = {classNameHideForMobile}>Count </th><th className = {classNameHideForMobile}>Min monthly </th><th>Max monthly </th><th className = {classNameHideForMobile}>Avg monthly </th><th className = {classNameHideForMobile}>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Bath Spa, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Bath Spa, Bath, Somersets' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-bath-spa-bath' title  = 'View Key Statistics for Bath Spa, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>4 </td><td className = {classNameHideForMobile}>£520 </td><td>£587 </td><td className = {classNameHideForMobile}>£557 </td><td className = {classNameHideForMobile}>£120 </td><td>£136 </td><td>£129 </td></tr><tr><td>Oldfield Park, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Oldfield Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-oldfield-park-bath' title  = 'View Key Statistics for Oldfield Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>4 </td><td className = {classNameHideForMobile}>£520 </td><td>£840 </td><td className = {classNameHideForMobile}>£715 </td><td className = {classNameHideForMobile}>£120 </td><td>£195 </td><td>£166 </td></tr><tr><td>Avon Park, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Avon Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-avon-park-bath' title  = 'View Key Statistics for Avon Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>3 </td><td className = {classNameHideForMobile}>£650 </td><td>£775 </td><td className = {classNameHideForMobile}>£697 </td><td className = {classNameHideForMobile}>£151 </td><td>£180 </td><td>£162 </td></tr><tr><td>Beacon Hill, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Beacon Hill, Bath, Somersets' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61718")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-beacon-hill-bath' title  = 'View Key Statistics for Beacon Hill, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>3 </td><td className = {classNameHideForMobile}>£650 </td><td>£775 </td><td className = {classNameHideForMobile}>£697 </td><td className = {classNameHideForMobile}>£151 </td><td>£180 </td><td>£162 </td></tr><tr><td>Beechen Cliff, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Beechen Cliff, Bath, Somersets' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71094")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-beechen-cliff-bath' title  = 'View Key Statistics for Beechen Cliff, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>3 </td><td className = {classNameHideForMobile}>£725 </td><td>£840 </td><td className = {classNameHideForMobile}>£780 </td><td className = {classNameHideForMobile}>£168 </td><td>£195 </td><td>£181 </td></tr><tr><td>Crescent Gardens, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Crescent Gardens, Bath, Somersets' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71096")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-crescent-gardens-bath' title  = 'View Key Statistics for Crescent Gardens, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>3 </td><td className = {classNameHideForMobile}>£725 </td><td>£840 </td><td className = {classNameHideForMobile}>£780 </td><td className = {classNameHideForMobile}>£168 </td><td>£195 </td><td>£181 </td></tr><tr><td>Dolemeads, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Dolemeads, Bath, Somersets' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71097")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-dolemeads-bath' title  = 'View Key Statistics for Dolemeads, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>3 </td><td className = {classNameHideForMobile}>£725 </td><td>£840 </td><td className = {classNameHideForMobile}>£780 </td><td className = {classNameHideForMobile}>£168 </td><td>£195 </td><td>£181 </td></tr><tr><td>East Twerton, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='East Twerton, Bath, Somersets' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71098")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-east-twerton-bath' title  = 'View Key Statistics for East Twerton, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>3 </td><td className = {classNameHideForMobile}>£535 </td><td>£587 </td><td className = {classNameHideForMobile}>£569 </td><td className = {classNameHideForMobile}>£124 </td><td>£136 </td><td>£132 </td></tr><tr><td>Hat, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Hat, Bath, Somersets' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61721")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-hat-bath' title  = 'View Key Statistics for Hat, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>3 </td><td className = {classNameHideForMobile}>£725 </td><td>£840 </td><td className = {classNameHideForMobile}>£780 </td><td className = {classNameHideForMobile}>£168 </td><td>£195 </td><td>£181 </td></tr><tr><td>Hatfield Buildings, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Hatfield Buildings, Bath, Somersets' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71100")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-hatfield-buildings-bath' title  = 'View Key Statistics for Hatfield Buildings, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>3 </td><td className = {classNameHideForMobile}>£725 </td><td>£840 </td><td className = {classNameHideForMobile}>£780 </td><td className = {classNameHideForMobile}>£168 </td><td>£195 </td><td>£181 </td></tr><tr><td>Kensington, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Kensington, Bath, Somersets' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-kensington-bath' title  = 'View Key Statistics for Kensington, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>3 </td><td className = {classNameHideForMobile}>£650 </td><td>£775 </td><td className = {classNameHideForMobile}>£697 </td><td className = {classNameHideForMobile}>£151 </td><td>£180 </td><td>£162 </td></tr><tr><td>Kingsmead, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Kingsmead, Bath, Somersets' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71101")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-kingsmead-bath' title  = 'View Key Statistics for Kingsmead, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>3 </td><td className = {classNameHideForMobile}>£725 </td><td>£840 </td><td className = {classNameHideForMobile}>£780 </td><td className = {classNameHideForMobile}>£168 </td><td>£195 </td><td>£181 </td></tr><tr><td>Lambridge, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Lambridge, Bath, Somersets' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71103")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-lambridge-bath' title  = 'View Key Statistics for Lambridge, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>3 </td><td className = {classNameHideForMobile}>£725 </td><td>£840 </td><td className = {classNameHideForMobile}>£780 </td><td className = {classNameHideForMobile}>£168 </td><td>£195 </td><td>£181 </td></tr><tr><td>Locksbrook, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Locksbrook, Bath, Somersets' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71104")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-locksbrook-bath' title  = 'View Key Statistics for Locksbrook, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>3 </td><td className = {classNameHideForMobile}>£650 </td><td>£775 </td><td className = {classNameHideForMobile}>£697 </td><td className = {classNameHideForMobile}>£151 </td><td>£180 </td><td>£162 </td></tr><tr><td>Lower Swainswick, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Lower Swainswick, Bath, Somersets' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71105")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>{viewButtonTitle}</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = '5-bedroom-student-flats-in-lower-swainswick-bath' title  = 'View Key Statistics for Lower Swainswick, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td className = {classNameHideForMobile}>3 </td><td className = {classNameHideForMobile}>£725 </td><td>£840 </td><td className = {classNameHideForMobile}>£780 </td><td className = {classNameHideForMobile}>£168 </td><td>£195 </td><td>£181 </td></tr></table></p><a id = "student_accommodation_portal__5_bedroom_flats_in_bath"> <h2>Student Accommodation Portal - 5 Bedroom Flats in Bath</h2></a><p>Are you looking for a spacious 5 bedroom flat in <b>Bath</b> for you and your friends? Our property portal has just what you need to find the perfect student accommodation in the beautiful city of <b>Bath</b>. Located near the prestigious University of <b>Bath</b> and <b>Bath</b> Spa University, our listings include a variety of <b>5 Bedroom Flats</b> in popular areas such as <b>Oldfield Park</b>. With easy access to public transportation and local amenities, living in a 5 bedroom flat in <b>Bath</b> is ideal for students who want both comfort and convenience. Don't miss out on the opportunity to secure a fantastic living space in <b>Bath</b> through our user-friendly portal. Start your search today and find your dream 5 bedroom flat in this charming city.</p><a id = "student_accommodation_in_bath__5_bedroom_flats__private_rental_sector"> <h2>Student Accommodation in Bath - 5 bedroom Flats - Private Rental Sector</h2></a><p>If you are searching for <b>5 bedroom student Flats</b> in Bath, the private rental sector has a variety of options to offer. Many of these flats come <b>fully furnished</b>, making it easy for students to move in and feel at home right away. Additionally, some landlords offer <b>bills included</b> in the rent, simplifying the monthly budgeting process for tenants. With spacious living areas and multiple bedrooms, these flats are perfect for students looking to share accommodation and split costs. So, whether you are studying in Bath for the long term or just looking for a comfortable place to call home during your studies, the private rental sector's 5 bedroom flats in Bath are sure to meet your needs.</p><a id = "student_accommodation_in_bath__5_bedroom_flats__fully_furnished"> <h2>Student Accommodation in Bath - 5 bedroom Flats - Fully Furnished</h2></a><p>Looking for <b>fully furnished Flats in Bath</b>? Look no further than this stunning 5-bedroom flat located in the heart of the city. With spacious rooms and contemporary décor, this flat offers the perfect blend of comfort and style. Each bedroom is tastefully furnished with a bed, wardrobe, desk, and chair, providing a cozy and convenient living space for students or professionals. The communal areas feature a modern kitchen with all the necessary appliances and a stylish living room for relaxation. In Bath, it is normal for student Flats to be fully furnished, eliminating the hassle of shopping for furniture and ensuring a smooth transition into your new home. Don't miss out on this fantastic opportunity to live in a beautifully designed and fully equipped flat in the vibrant city of Bath.</p><a id = "popular_locations_for_5_bedroom_flats_in_bath"> <h2>Popular Locations for 5 bedroom Flats in Bath</h2></a><h3>Bath Spa</h3><p><a href="./5-bedroom-student-flats-in-bath-spa-bath" title = "View 5 Bedroom Student Flats in Bath Spa, Bath">Bath Spa is a popular area for students in Bath</a>, situated approximately 1.5 miles from the city center. It is also located around 3 miles away from the <b>University of Bath</b> and is known for being home to <b>Bath Spa University</b>. </p><h3>Oldfield Park</h3><p><a href="./5-bedroom-student-flats-in-oldfield-park-bath" title = "View 5 Bedroom Student Flats in Oldfield Park, Bath">Oldfield Park is a vibrant neighborhood in Bath</a>, known for its student population and close proximity to both the city center and the <b>University of Bath</b> at around 1 mile away. Additionally, residents of Oldfield Park have easy access to <a href="./5-bedroom-student-flats-in-bath-spa-bath" title = "View 5 Bedroom Student Flats in Bath Spa, Bath">Bath Spa University</a>. </p><h3>Avon Park</h3><p><a href="./5-bedroom-student-flats-in-avon-park-bath" title = "View 5 Bedroom Student Flats in Avon Park, Bath">Avon Park is a charming area in Bath</a>, popular among students due to its location about 2 miles from the city center. It is conveniently situated around 4 miles away from the <b>University of Bath</b> and is also in close proximity to <a href="./5-bedroom-student-flats-in-bath-spa-bath" title = "View 5 Bedroom Student Flats in Bath Spa, Bath">Bath Spa University</a>. </p><h3>Beacon Hill</h3><p><a href="./5-bedroom-student-flats-in-beacon-hill-bath" title = "View 5 Bedroom Student Flats in Beacon Hill, Bath">Beacon Hill is a picturesque neighborhood in Bath</a>, attracting students for its peaceful atmosphere and location approximately 2.5 miles from the city center. It is also around 5 miles away from the <b>University of Bath</b> and is relatively close to <a href="./5-bedroom-student-flats-in-bath-spa-bath" title = "View 5 Bedroom Student Flats in Bath Spa, Bath">Bath Spa University</a>. </p><h3>Beechen Cliff</h3><p><a href="./5-bedroom-student-flats-in-beechen-cliff-bath" title = "View 5 Bedroom Student Flats in Beechen Cliff, Bath">Beechen Cliff is a sought-after area in Bath</a>, known for its stunning views and being conveniently located around 2 miles from the city center. It is also situated approximately 3 miles away from the <b>University of Bath</b> and is in close proximity to <a href="./5-bedroom-student-flats-in-bath-spa-bath" title = "View 5 Bedroom Student Flats in Bath Spa, Bath">Bath Spa University</a>. </p><h3>Crescent Gardens</h3><p><a href="./5-bedroom-student-flats-in-crescent-gardens-bath" title = "View 5 Bedroom Student Flats in Crescent Gardens, Bath">Crescent Gardens is a beautiful residential area in Bath</a>, popular among students for its peaceful surroundings and proximity to the city center, situated about 1 mile away. It is also located around 2 miles from the <b>University of Bath</b> and is close to <a href="./5-bedroom-student-flats-in-bath-spa-bath" title = "View 5 Bedroom Student Flats in Bath Spa, Bath">Bath Spa University</a>. </p><h3>Dolemeads</h3><p><a href="./5-bedroom-student-flats-in-dolemeads-bath" title = "View 5 Bedroom Student Flats in Dolemeads, Bath">Dolemeads is a charming riverside location in Bath</a>, attracting students for its scenic views and convenient distance to the city center at around 1 mile away. Additionally, it is situated around 3 miles from the <b>University of Bath</b> and is also close to <a href="./5-bedroom-student-flats-in-bath-spa-bath" title = "View 5 Bedroom Student Flats in Bath Spa, Bath">Bath Spa University</a>. </p><h3>East Twerton</h3><p><a href="./5-bedroom-student-flats-in-east-twerton-bath" title = "View 5 Bedroom Student Flats in East Twerton, Bath">East Twerton</a>, Bath is a residential area located just 2 miles from the city center, making it a convenient location for students. The area is also in close proximity to both the <b>University of Bath</b> and <a href="./5-bedroom-student-flats-in-bath-spa-bath" title = "View 5 Bedroom Student Flats in Bath Spa, Bath">Bath Spa University</a>, making it an ideal place for students to live. <a href="./5-bedroom-student-flats-in-east-twerton-bath" title = "View 5 Bedroom Student Flats in East Twerton, Bath">East Twerton</a> is approximately 3 miles away from the <b>University of Bath</b> campus.</p><h3>Hat</h3><p><a href="./5-bedroom-student-flats-in-hat-bath" title = "View 5 Bedroom Student Flats in Hat, Bath">Hat</a>, Bath is a suburb situated about 1.5 miles from the city center, making it a convenient location for students. With its close proximity to both the <b>University of Bath</b> and <a href="./5-bedroom-student-flats-in-bath-spa-bath" title = "View 5 Bedroom Student Flats in Bath Spa, Bath">Bath Spa University</a>, <a href="./5-bedroom-student-flats-in-hat-bath" title = "View 5 Bedroom Student Flats in Hat, Bath">Hat</a> is a popular choice for student accommodation. <a href="./5-bedroom-student-flats-in-hat-bath" title = "View 5 Bedroom Student Flats in Hat, Bath">Hat</a> is approximately 2 miles away from the <b>University of Bath</b> campus.</p><h3>Hatfield Buildings</h3><p><a href="./5-bedroom-student-flats-in-hat-bath" title = "View 5 Bedroom Student Flats in Hat, Bath"><a href="./5-bedroom-student-flats-in-hatfield-buildings-bath" title = "View 5 Bedroom Student Flats in Hatfield Buildings, Bath">Hatfield Buildings</a></a>, Bath is a student-friendly area located just 1 mile from the city center, making it a convenient location for students. The neighborhood is in close proximity to both the <b>University of Bath</b> and <a href="./5-bedroom-student-flats-in-bath-spa-bath" title = "View 5 Bedroom Student Flats in Bath Spa, Bath">Bath Spa University</a>, providing easy access to campus facilities and amenities. <a href="./5-bedroom-student-flats-in-hat-bath" title = "View 5 Bedroom Student Flats in Hat, Bath"><a href="./5-bedroom-student-flats-in-hatfield-buildings-bath" title = "View 5 Bedroom Student Flats in Hatfield Buildings, Bath">Hatfield Buildings</a></a> is approximately 2.5 miles away from the <b>University of Bath</b> campus.</p><h3>Kensington</h3><p><a href="./5-bedroom-student-flats-in-kensington-bath" title = "View 5 Bedroom Student Flats in Kensington, Bath">Kensington</a>, Bath is a vibrant neighborhood located approximately 1.8 miles from the city center, making it a popular choice for students. With its close proximity to both the <b>University of Bath</b> and <a href="./5-bedroom-student-flats-in-bath-spa-bath" title = "View 5 Bedroom Student Flats in Bath Spa, Bath">Bath Spa University</a>, <a href="./5-bedroom-student-flats-in-kensington-bath" title = "View 5 Bedroom Student Flats in Kensington, Bath">Kensington</a> offers a convenient location for student accommodation. <a href="./5-bedroom-student-flats-in-kensington-bath" title = "View 5 Bedroom Student Flats in Kensington, Bath">Kensington</a> is approximately 0.5 miles away from the <b>University of Bath</b> campus.</p><h3>Kingsmead</h3><p><a href="./5-bedroom-student-flats-in-kingsmead-bath" title = "View 5 Bedroom Student Flats in Kingsmead, Bath">Kingsmead</a>, Bath is a bustling area just 1.5 miles from the city center, making it an ideal location for students. The neighborhood is conveniently located near both the <b>University of Bath</b> and <a href="./5-bedroom-student-flats-in-bath-spa-bath" title = "View 5 Bedroom Student Flats in Bath Spa, Bath">Bath Spa University</a>, providing easy access to campus facilities and amenities. <a href="./5-bedroom-student-flats-in-kingsmead-bath" title = "View 5 Bedroom Student Flats in Kingsmead, Bath">Kingsmead</a> is approximately 2 miles away from the <b>University of Bath</b> campus.</p><h3>Lambridge</h3><p><a href="./5-bedroom-student-flats-in-lambridge-bath" title = "View 5 Bedroom Student Flats in Lambridge, Bath">Lambridge</a>, Bath is a charming residential area situated just 2 miles from the city center, making it a convenient location for students. With its close proximity to both the <b>University of Bath</b> and <a href="./5-bedroom-student-flats-in-bath-spa-bath" title = "View 5 Bedroom Student Flats in Bath Spa, Bath">Bath Spa University</a>, <a href="./5-bedroom-student-flats-in-lambridge-bath" title = "View 5 Bedroom Student Flats in Lambridge, Bath">Lambridge</a> is a popular choice for student accommodation. <a href="./5-bedroom-student-flats-in-lambridge-bath" title = "View 5 Bedroom Student Flats in Lambridge, Bath">Lambridge</a> is approximately 3 miles away from the <b>University of Bath</b> campus.</p><h3>Locksbrook</h3><p><a href="./5-bedroom-student-flats-in-locksbrook-bath" title = "View 5 Bedroom Student Flats in Locksbrook, Bath">Locksbrook</a>, Bath is a student-friendly neighborhood located approximately 1.2 miles from the city center, making it a convenient location for students. The area is in close proximity to both the <b>University of Bath</b> and <a href="./5-bedroom-student-flats-in-bath-spa-bath" title = "View 5 Bedroom Student Flats in Bath Spa, Bath">Bath Spa University</a>, providing easy access to campus facilities and amenities. <a href="./5-bedroom-student-flats-in-locksbrook-bath" title = "View 5 Bedroom Student Flats in Locksbrook, Bath">Locksbrook</a> is approximately 2.8 miles away from the <b>University of Bath</b> campus.</p><h3>Lower Swainswick</h3><p><a href="./5-bedroom-student-flats-in-lower-swainswick-bath" title = "View 5 Bedroom Student Flats in Lower Swainswick, Bath">Lower Swainswick is a charming village located just 3 miles from the city center of Bath</a>. It is an ideal location for students attending the <b>University of Bath</b> or <a href="./5-bedroom-student-flats-in-bath-spa-bath" title = "View 5 Bedroom Student Flats in Bath Spa, Bath">Bath Spa University</a>. The picturesque setting of Lower Swainswick offers a peaceful retreat for students looking to escape the bustling city life. Lower Swainswick is approximately 4 miles away from the <b>University of Bath</b>.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>After exploring the wide range of 5-bedroom flats available in Bath for students, it becomes clear that there are numerous options to suit different preferences and budgets. From modern apartments to traditional Georgian townhouses, students have a variety of choices when it comes to accommodation. With spacious living areas and convenient locations near the University of Bath and Bath Spa University, these flats offer a comfortable and practical living arrangement for groups of students. The competitive market in Bath means that there are often good deals to be found, with some properties offering all-inclusive rent and modern amenities. Overall, searching for student accommodation in Bath can be a rewarding experience, providing students with a comfortable and supportive environment to focus on their studies and social life[].</p></>)
};

export default BathFlat5;