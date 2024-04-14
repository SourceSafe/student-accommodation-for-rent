
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


const  BathDolemeadsStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Dolemeads, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Dolemeads, Bath</b> for the academic year 2024.

<b>Studio Apartments for Students in Dolemeads, Bath</b> offer convenient and modern living spaces for students studying in Bath. These apartments are specifically designed to meet the needs of students, providing a comfortable and conducive environment for studying and living. Located in Dolemeads, Bath, students can enjoy easy access to the city center and various amenities while residing in these studio apartments.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/studio-apartments-for-students-in-dolemeads-bath.png')} alt='Studio Apartments for Students in Dolemeads, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Studio Apartments for Students in Dolemeads, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71097&type=Studio&beds=1")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Studio Apartments for Students in Dolemeads, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_dolemeads,_bath_pp/pm">Prices for Studio Apartments for Students in Dolemeads, Bath pp/pm</a></li><li><a href = "#studio_apartments_for_students_in_dolemeads,_bath__all_bills_inclusive">Studio Apartments for Students in Dolemeads, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_dolemeads,_bath">Cheap Studio Apartments for Students in Dolemeads, Bath</a></li><li><a href = "#studio_apartments_for_students_in_dolemeads,_bath__recently_added">Studio Apartments for Students in Dolemeads, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_dolemeads,_bath__recently_reduced">Studio Apartments for Students in Dolemeads, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__1_bedroom_studios_in_dolemeads,_bath,_somerset,_bath">Student Accommodation Portal - 1 Bedroom Studios in Dolemeads, Bath, Somerset, Bath</a></li><li><a href = "#studio_apartments_for_students_in_dolemeads,_bath__private_rental_sector">Studio Apartments for Students in Dolemeads, Bath - Private Rental Sector</a></li><li><a href = "#studio_apartments_for_students_in_dolemeads,_bath__fully_furnished">Studio Apartments for Students in Dolemeads, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_dolemeads_to_the_city_center">How close is Dolemeads to the City Center</a></li><li><a href = "#how_close_is_dolemeads_to_the_university_of_bath">How close is Dolemeads to the University of Bath</a></li><li><a href = "#how_close_is_dolemeads_to_the_bath_spa_university">How close is Dolemeads to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_dolemeads,_bath_pp/pm"> <h2>Prices for Studio Apartments for Students in Dolemeads, Bath pp/pm</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1287 per month </td><td><button className = 'searchButton tableButton' title='Studio Apartments for Students in Dolemeads, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71097")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_dolemeads,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Dolemeads, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for a stress-free living arrangement in Dolemeads, Bath, Somerset? Look no further than subscribing to an <b>all bills inclusive</b> service with <b>UniBills.com</b>. By opting for this convenient option, you can enjoy the peace of mind that comes with knowing all your utility bills are taken care of in one easy payment. This means you can <b>concentrate on your studies</b> without having to worry about managing multiple bills each month. <b>UniBills.com</b> offers a hassle-free all inclusive option that covers electricity, water, heating, and even Wi-Fi, allowing you to focus on what truly matters. Say goodbye to the hassle of sorting out bills and hello to a simplified living experience provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and make your student life in Bath a breeze.</p><a id = "cheap_studio_apartments_for_students_in_dolemeads,_bath"> <h2>Cheap Studio Apartments for Students in Dolemeads, Bath</h2></a><p><Portlet location="REGION^71097" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_dolemeads,_bath__recently_added"> <h2>Studio Apartments for Students in Dolemeads, Bath - Recently Added</h2></a><p><Portlet location="REGION^71097" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_dolemeads,_bath__recently_reduced"> <h2>Studio Apartments for Students in Dolemeads, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71097" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__1_bedroom_studios_in_dolemeads,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 1 Bedroom Studios in Dolemeads, Bath, Somerset, Bath</h2></a><p>Are you a student searching for the perfect <b>1 Bedroom Studios</b> in Dolemeads, <b>Bath</b>, Somerset? Look no further than our property portal! Our platform is designed to help you find convenient and affordable <b>student Studios</b> in the vibrant city of <b>Bath</b>. With renowned universities like the University of <b>Bath</b> and <b>Bath</b> Spa University nearby, living in Dolemeads offers a fantastic student experience. You can easily browse through a variety of listings, compare amenities, and find the ideal <b>1 Bedroom Studios</b> that suit your needs and budget. Don't miss out on the opportunity to secure a comfortable living space in this picturesque city.</p><a id = "studio_apartments_for_students_in_dolemeads,_bath__private_rental_sector"> <h2>Studio Apartments for Students in Dolemeads, Bath - Private Rental Sector</h2></a><p>Looking for a cozy and convenient living space in the heart of Bath? Look no further than the <b>1 Bedroom Studios in Dolemeads, Bath, Somerset, Bath</b>. These charming studios offer the perfect blend of comfort and style, with all the amenities you need for a hassle-free living experience. Each studio comes <b>fully furnished</b>, so you can move in and feel right at home from day one. What's more, the rent includes all bills, so you can say goodbye to the stress of keeping track of multiple payments. Located in a sought-after area of Bath, with easy access to shops, restaurants, and public transportation, these studios are perfect for students, professionals, or anyone looking for a prime living location.</p><a id = "studio_apartments_for_students_in_dolemeads,_bath__fully_furnished"> <h2>Studio Apartments for Students in Dolemeads, Bath - Fully Furnished</h2></a><p>Looking for <b>fully furnished 1 Bedroom Studios in Dolemeads, Bath, Somerset, Bath</b>? Look no further! These modern and stylish Studios offer everything you need for a comfortable living experience. From a cozy bedroom to a functional kitchen and a spacious living area, these Studios have it all. Located in the heart of Bath, Somerset, you will have easy access to all the amenities and attractions the city has to offer. Whether you're a student or a young professional, these Studios provide the perfect blend of convenience and comfort. In Dolemeads, Bath, it is normal for student Studios to be fully furnished, making your transition to city living a breeze. Don't miss out on the opportunity to live in these well-equipped and conveniently located Studios.</p><a id = "how_close_is_dolemeads_to_the_city_center"> <h2>How close is Dolemeads to the City Center</h2></a><p><b>Dolemeads</b> is ideally located just a stone's throw away from <b>Bath city center</b>, making it the perfect base for exploring all that this historic city has to offer. Situated just a few <b>miles</b> from the heart of Bath, <b>Dolemeads</b> offers easy access to popular attractions such as the Roman Baths, Bath Abbey, and the iconic Pulteney Bridge. Whether you're looking to immerse yourself in the city's rich history, indulge in some retail therapy at the bustling shopping district, or simply enjoy a leisurely stroll along the picturesque River Avon, <b>Dolemeads</b> provides a convenient and comfortable location for your stay. With its close proximity to the city center, guests can enjoy the best of both worlds - the tranquility of riverside living coupled with the vibrant energy of Bath's bustling streets. Whether you're visiting for a weekend getaway or an extended stay, <b>Dolemeads</b> offers a convenient and memorable experience in the heart of Bath.</p><a id = "how_close_is_dolemeads_to_the_university_of_bath"> <h2>How close is Dolemeads to the University of Bath</h2></a><p>Dolemeads offers the perfect location for students attending the <b>University of Bath</b>. Situated just a few <b>miles</b> away from the campus, it is easily accessible <b>by foot</b>, bus, or car. For those who prefer to walk, the journey takes around 25-30 minutes, providing a pleasant and scenic route. Alternatively, the convenient <b>bus route</b> allows students to reach the university within a short 10-15 minute ride. If driving is more your style, Dolemeads is just a quick 5-10 minute car ride away from the <b>University of Bath</b>, making commuting a breeze. With its close proximity to campus and various transportation options, Dolemeads ensures that students can easily access all that the <b>University of Bath</b> has to offer.</p><a id = "how_close_is_dolemeads_to_the_bath_spa_university"> <h2>How close is Dolemeads to the Bath Spa University</h2></a><p>Dolemeads is conveniently located near <b>Bath Spa University</b>, just a few <b>miles</b> away. The university can be easily accessed <b>by foot</b>, bus, or car from Dolemeads. If you prefer to walk, it would take around 30-40 minutes to reach the university campus. Alternatively, there is a direct <b>bus route</b> that connects Dolemeads to <b>Bath Spa University</b>, making the journey quick and convenient. <b>by bus</b>, the commute would take approximately 10-15 minutes, providing a hassle-free transportation option for students and staff. For those who prefer to drive, the university is only a short 5-10 minute drive away. This close proximity makes Dolemeads an ideal location for those studying or working at <b>Bath Spa University</b>, offering easy access to campus amenities and facilities.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In concluding the search for studio apartments for students in Dolemeads, Bath, it is evident that this sought-after location offers an array of desirable options for student accommodation. With its proximity to universities, amenities, and transport links, Dolemeads provides convenience and accessibility for students living in the area. The studio apartments available cater to the specific needs and preferences of students, offering modern amenities, furnished spaces, and a comfortable living environment. Students looking for a suitable place to call home while pursuing their studies can find the ideal studio apartment in Dolemeads, Bath. Overall, the combination of location, affordability, and quality makes Dolemeads a top choice for students searching for studio apartments in Bath.</p></>)
};

export default BathDolemeadsStudio1;