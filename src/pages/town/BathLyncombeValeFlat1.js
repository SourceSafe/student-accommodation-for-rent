
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


const  BathLyncombeValeFlat1 = () => 
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

    return (<><h1>1 Bedroom Student Flats in Lyncombe Vale, Bath</h1><p>We have listings for <b>1 Bedroom Student Flats in Lyncombe Vale, Bath</b> for the academic year 2024.

<b>1 Bedroom Student Flats in Lyncombe Vale, Bath</b> offer a cozy and affordable housing option for students studying in Bath. These flats are conveniently located near local amenities, public transportation, and university campuses, making them an ideal choice for student living. With a bedroom, kitchen, and living space, these flats provide a comfortable and independent living environment for students during their academic year.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/1-bedroom-student-flats-in-lyncombe-vale-bath.png')} alt='1 Bedroom Student Flats in Lyncombe Vale, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='1 Bedroom Student Flats in Lyncombe Vale, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71106&type=Flat&beds=1")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>1 Bedroom Student Flats in Lyncombe Vale, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_1_bedroom_student_flats_in_lyncombe_vale,_bath_pp/pm">Prices for 1 Bedroom Student Flats in Lyncombe Vale, Bath pp/pm</a></li><li><a href = "#1_bedroom_student_flats_in_lyncombe_vale,_bath__all_bills_inclusive">1 Bedroom Student Flats in Lyncombe Vale, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_1_bedroom_student_flats_in_lyncombe_vale,_bath">Cheap 1 Bedroom Student Flats in Lyncombe Vale, Bath</a></li><li><a href = "#1_bedroom_student_flats_in_lyncombe_vale,_bath__recently_added">1 Bedroom Student Flats in Lyncombe Vale, Bath - Recently Added</a></li><li><a href = "#1_bedroom_student_flats_in_lyncombe_vale,_bath__recently_reduced">1 Bedroom Student Flats in Lyncombe Vale, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__1_bedroom_flats_in_lyncombe_vale,_bath,_somerset,_bath">Student Accommodation Portal - 1 Bedroom Flats in Lyncombe Vale, Bath, Somerset, Bath</a></li><li><a href = "#1_bedroom_student_flats_in_lyncombe_vale,_bath__private_rental_sector">1 Bedroom Student Flats in Lyncombe Vale, Bath - Private Rental Sector</a></li><li><a href = "#1_bedroom_student_flats_in_lyncombe_vale,_bath__fully_furnished">1 Bedroom Student Flats in Lyncombe Vale, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_lyncombe_vale_to_the_city_center">How close is Lyncombe Vale to the City Center</a></li><li><a href = "#how_close_is_lyncombe_vale_to_the_university_of_bath">How close is Lyncombe Vale to the University of Bath</a></li><li><a href = "#how_close_is_lyncombe_vale_to_the_bath_spa_university">How close is Lyncombe Vale to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_1_bedroom_student_flats_in_lyncombe_vale,_bath_pp/pm"> <h2>Prices for 1 Bedroom Student Flats in Lyncombe Vale, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1250 per month </td><td><button className = 'searchButton tableButton' title='1 Bedroom Student Flats in Lyncombe Vale, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71106")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "1_bedroom_student_flats_in_lyncombe_vale,_bath__all_bills_inclusive"> <h2>1 Bedroom Student Flats in Lyncombe Vale, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 1 bedroom flat in Lyncombe Vale, Bath, Somerset? If so, subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b> could be the perfect solution for you. By opting for this service, you can enjoy the convenience of having all your bills, including electricity, water, gas, and internet, rolled into one easily manageable monthly payment. This means you can <b>concentrate on your studies</b> without the stress of budgeting for multiple bills each month. <b>UniBills.com</b> takes care of all the administrative work for you, allowing you to enjoy the hassle-free all-inclusive option provided by them. Say goodbye to the hassle of dealing with different utility providers and hello to a seamless living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Lyncombe Vale a breeze.</p><a id = "cheap_1_bedroom_student_flats_in_lyncombe_vale,_bath"> <h2>Cheap 1 Bedroom Student Flats in Lyncombe Vale, Bath</h2></a><p><Portlet location="REGION^71106" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "1_bedroom_student_flats_in_lyncombe_vale,_bath__recently_added"> <h2>1 Bedroom Student Flats in Lyncombe Vale, Bath - Recently Added</h2></a><p><Portlet location="REGION^71106" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "1_bedroom_student_flats_in_lyncombe_vale,_bath__recently_reduced"> <h2>1 Bedroom Student Flats in Lyncombe Vale, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71106" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__1_bedroom_flats_in_lyncombe_vale,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 1 Bedroom Flats in Lyncombe Vale, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect 1 bedroom flat in Lyncombe Vale, <b>Bath</b>, Somerset? Look no further than our property portal! We specialize in helping students find the ideal accommodation near the University of <b>Bath</b> and <b>Bath</b> Spa University. Our platform offers a range of <b>student Flats</b> tailored to suit your needs, whether you prefer a modern studio or a cozy 1 bedroom apartment. Located in the vibrant city of <b>Bath</b>, our properties in Lyncombe Vale provide a convenient and comfortable living situation for students. With easy access to local amenities, transportation links, and green spaces, you can enjoy both studying and relaxing in this picturesque area.</p><a id = "1_bedroom_student_flats_in_lyncombe_vale,_bath__private_rental_sector"> <h2>1 Bedroom Student Flats in Lyncombe Vale, Bath - Private Rental Sector</h2></a><p>Looking for a cozy 1 bedroom flat in the desirable area of Lyncombe Vale, Bath, Somerset, Bath? Look no further! Our private rental sector offers a selection of modern 1 bedroom flats in this sought-after location. Each flat comes <b>fully furnished</b>, making your move-in process a breeze. With <b>bills included</b> in the rent, you can enjoy a hassle-free living experience without the worry of managing multiple payments. Whether you're a professional looking for a convenient place to call home or a student seeking a comfortable living space, our 1 bedroom flats in Lyncombe Vale are sure to meet your needs. Don't miss out on the opportunity to live in this picturesque neighborhood with all the conveniences at your doorstep.</p><a id = "1_bedroom_student_flats_in_lyncombe_vale,_bath__fully_furnished"> <h2>1 Bedroom Student Flats in Lyncombe Vale, Bath - Fully Furnished</h2></a><p>Looking for a cozy and convenient living space in Bath, Somerset? Look no further than the fully furnished 1 Bedroom Flats in Lyncombe Vale, Bath. These modern and stylish flats are perfect for students or professionals looking for a hassle-free move-in experience. Situated in the picturesque Lyncombe Vale area, these flats offer a peaceful retreat from the hustle and bustle of the city while still being just a short distance from local amenities and transportation. In Bath, it is normal for student flats to be fully furnished, and these flats are no exception. From the sleek furniture to the fully equipped kitchen, everything you need is provided for a comfortable stay. Don't miss out on the opportunity to call one of these beautiful flats your new home in Bath.</p><a id = "how_close_is_lyncombe_vale_to_the_city_center"> <h2>How close is Lyncombe Vale to the City Center</h2></a><p><b>Lyncombe Vale</b> is nestled in the serene outskirts of <b>Bath city center</b>, just a stone's throw away at less than 2 <b>miles</b> distance. Despite its close proximity, <b>Lyncombe Vale</b> offers a peaceful retreat from the hustle and bustle of the city, allowing visitors to relax and unwind in a tranquil natural setting. Whether you're looking to explore the historic landmarks and vibrant culture of Bath or simply seeking a quiet escape into nature, <b>Lyncombe Vale</b> provides the perfect blend of convenience and seclusion. With its lush greenery, picturesque walking trails, and beautiful scenery, <b>Lyncombe Vale</b> offers a rejuvenating experience just moments away from the heart of <b>Bath city center</b>.</p><a id = "how_close_is_lyncombe_vale_to_the_university_of_bath"> <h2>How close is Lyncombe Vale to the University of Bath</h2></a><p>Lyncombe Vale's proximity to the prestigious <b>University of Bath</b> makes it an ideal location for students seeking convenience and accessibility. Situated just a few <b>miles</b> away, the university can be easily reached <b>by foot</b> or <b>by bus</b>, with a direct <b>bus route</b> running through the area. For those who prefer to drive, the university is just a short car ride away. This close proximity allows students living in Lyncombe Vale to easily access the university's facilities, including the library, sports center, and various campus buildings. Additionally, the vibrant student life and community events at the <b>University of Bath</b> are within easy reach for residents of Lyncombe Vale, making it a popular choice for both undergraduate and postgraduate students.</p><a id = "how_close_is_lyncombe_vale_to_the_bath_spa_university"> <h2>How close is Lyncombe Vale to the Bath Spa University</h2></a><p>Lyncombe Vale is conveniently located close to <b>Bath Spa University</b>, being only a few <b>miles</b> away. The university can be easily reached from Lyncombe Vale <b>by foot</b>, bus, or car. If you prefer to walk, it would take approximately 45 minutes to reach the university campus. Alternatively, there is a frequent <b>bus route</b> that connects Lyncombe Vale to <b>Bath Spa University</b>, making the journey quick and convenient. For those who prefer to drive, the university is just a short car ride away. This close proximity allows students living in Lyncombe Vale to easily access all the university facilities and activities, while still enjoying the peaceful and picturesque surroundings of Lyncombe Vale. Whether you choose to travel <b>by foot</b>, bus, or car, getting to <b>Bath Spa University</b> from Lyncombe Vale is a hassle-free experience.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In summary, the search for 1-bedroom student flats in Lyncombe Vale, Bath can be both challenging and rewarding. With its picturesque surroundings and close proximity to local amenities and university campuses, Lyncombe Vale offers a fantastic living environment for students. When looking for a 1-bedroom flat in this area, it is important to consider factors such as location, budget, and amenities. By thoroughly researching available properties and working with reputable estate agents, students can find the perfect accommodation that suits their needs. Whether it's a modern studio or a cozy apartment, Lyncombe Vale has a variety of options to choose from. In conclusion, finding a 1-bedroom student flat in Lyncombe Vale, Bath requires diligence and careful consideration, but the end result is a comfortable and convenient living space that enhances the overall student experience.</p></>)
};

export default BathLyncombeValeFlat1;