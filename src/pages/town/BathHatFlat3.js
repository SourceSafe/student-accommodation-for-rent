
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


const  BathHatFlat3 = () => 
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

    return (<><h1>3 Bedroom Student Flats in Hat, Bath</h1><p>We have listings for <b>3 Bedroom Student Flats in Hat, Bath</b> for the academic year 2024. 
Located in Bath, these 3 Bedroom Student Flats in Hat offer spacious living areas and modern amenities perfect for students. 
The flats are conveniently located near universities and public transportation, making it an ideal choice for student accommodation in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/3-bedroom-student-flats-in-hat-bath.png')} alt='3 Bedroom Student Flats in Hat, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='3 Bedroom Student Flats in Hat, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61721&type=Flat&beds=3")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>3 Bedroom Student Flats in Hat, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_3_bedroom_student_flats_in_hat,_bath_pp/pm">Prices for 3 Bedroom Student Flats in Hat, Bath pp/pm</a></li><li><a href = "#3_bedroom_student_flats_in_hat,_bath__all_bills_inclusive">3 Bedroom Student Flats in Hat, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_3_bedroom_student_flats_in_hat,_bath">Cheap 3 Bedroom Student Flats in Hat, Bath</a></li><li><a href = "#3_bedroom_student_flats_in_hat,_bath__recently_added">3 Bedroom Student Flats in Hat, Bath - Recently Added</a></li><li><a href = "#3_bedroom_student_flats_in_hat,_bath__recently_reduced">3 Bedroom Student Flats in Hat, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__3_bedroom_flats_in_hat,_bath,_somerset,_bath">Student Accommodation Portal - 3 Bedroom Flats in Hat, Bath, Somerset, Bath</a></li><li><a href = "#3_bedroom_student_flats_in_hat,_bath__private_rental_sector">3 Bedroom Student Flats in Hat, Bath - Private Rental Sector</a></li><li><a href = "#3_bedroom_student_flats_in_hat,_bath__fully_furnished">3 Bedroom Student Flats in Hat, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_hat_to_the_city_center">How close is Hat to the City Center</a></li><li><a href = "#how_close_is_hat_to_the_university_of_bath">How close is Hat to the University of Bath</a></li><li><a href = "#how_close_is_hat_to_the_bath_spa_university">How close is Hat to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_3_bedroom_student_flats_in_hat,_bath_pp/pm"> <h2>Prices for 3 Bedroom Student Flats in Hat, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£757 per month </td><td><button className = 'searchButton tableButton' title='3 Bedroom Student Flats in Hat, Bath' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61721")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "3_bedroom_student_flats_in_hat,_bath__all_bills_inclusive"> <h2>3 Bedroom Student Flats in Hat, Bath - All Bills Inclusive</h2></a><p>Are you tired of managing multiple bills for your student accommodation in Hat, Bath, Somerset? Say goodbye to the stress of splitting and paying bills with roommates by subscribing to an <b>all bills inclusive</b> service from <b>UniBills.com</b>. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option that covers your rent, electricity, water, internet, and other utilities in one convenient package. By opting for this service, you will have more time to <b>concentrate on your studies</b> and social life, without the worry of keeping track of various bills. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student living experience today.</p><a id = "cheap_3_bedroom_student_flats_in_hat,_bath"> <h2>Cheap 3 Bedroom Student Flats in Hat, Bath</h2></a><p><Portlet location="REGION^61721" beds="3" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_flats_in_hat,_bath__recently_added"> <h2>3 Bedroom Student Flats in Hat, Bath - Recently Added</h2></a><p><Portlet location="REGION^61721" beds="3" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_flats_in_hat,_bath__recently_reduced"> <h2>3 Bedroom Student Flats in Hat, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61721" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__3_bedroom_flats_in_hat,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 3 Bedroom Flats in Hat, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a 3-bedroom flat in the vibrant city of <b>Bath</b>? Look no further than our property portal, where you can easily find a range of <b>student Flats</b> in Hat, <b>Bath</b>, Somerset. With its close proximity to both the University of <b>Bath</b> and <b>Bath</b> Spa University, Hat is the ideal location for student living. Our portal offers a user-friendly search platform that allows you to filter through various options to find the perfect 3-bedroom flat that suits your needs and budget. Whether you prefer a modern apartment or a charming Victorian townhouse, you can browse through a wide selection of listings to find your ideal student accommodation. Don't miss out on securing your dream 3-bedroom flat in Hat, <b>Bath</b>, Somerset today through our property portal.</p><a id = "3_bedroom_student_flats_in_hat,_bath__private_rental_sector"> <h2>3 Bedroom Student Flats in Hat, Bath - Private Rental Sector</h2></a><p>Looking for a modern and convenient place to live in Hat, Bath, Somerset, Bath? Consider exploring the private rental sector for 3 bedroom flats in this charming area. These flats typically come <b>fully furnished</b>, so you can move in and feel right at home without the hassle of purchasing furniture. Additionally, many landlords offer the convenience of having <b>bills included</b> in the monthly rent, making budgeting a breeze. Whether you're a family looking for a spacious home or a group of friends wanting to share a stylish living space, renting a 3 bedroom flat in Hat, Bath provides the perfect solution. Don't miss out on the opportunity to enjoy comfortable living in this picturesque location.</p><a id = "3_bedroom_student_flats_in_hat,_bath__fully_furnished"> <h2>3 Bedroom Student Flats in Hat, Bath - Fully Furnished</h2></a><p>Are you looking for a comfortable and convenient living arrangement in the charming town of Bath, Somerset? Look no further than our fully furnished 3 Bedroom Flats in Hat, Bath. Perfect for students and families alike, these flats have everything you need for a hassle-free move-in experience. From cozy beds to stylish sofas, and fully equipped kitchens to modern bathrooms, these flats are designed to make you feel right at home. Located in the heart of Bath, you'll have easy access to shops, restaurants, and public transportation. Plus, with the convenience of pre-furnished living spaces, you can focus on settling in and exploring your new surroundings. In Bath, it is normal for student flats to be fully furnished, so why not take advantage of this convenient option and make your move stress-free? Don't miss out on this opportunity to live in comfort and style in one of the most picturesque towns in England.</p><a id = "how_close_is_hat_to_the_city_center"> <h2>How close is Hat to the City Center</h2></a><p><b>Hat</b> is located a mere 13 <b>miles</b> away from <b>Bath city center</b>, making it a convenient and easily accessible location for those looking to explore the historic charm and cultural vibrancy of this iconic city. Whether you're planning a day trip or a longer stay, the short distance between <b>Hat</b> and Bath means you can easily immerse yourself in all t<b>Hat</b> the city has to offer. From the stunning architecture of the Royal Crescent to the relaxing waters of the Thermae Bath Spa, there is no shortage of attractions to enjoy in Bath. So, if you're staying in <b>Hat</b> and looking to visit <b>Bath city center</b>, rest assured t<b>Hat</b> you're just a short drive away from all the excitement and beauty t<b>Hat</b> this enchanting city has to offer.</p><a id = "how_close_is_hat_to_the_university_of_bath"> <h2>How close is Hat to the University of Bath</h2></a><p>Hat is conveniently located near the <b>University of Bath</b>, making it an ideal choice for students and faculty. The university is located just a few <b>miles</b> away, making it easily accessible both <b>by foot</b> and <b>by bus</b>. The university is just a short bus ride away from Hat, with a direct <b>bus route</b> available for those who prefer not to walk. Alternatively, students and faculty members can reach the <b>University of Bath</b> in just a few minutes <b>by car</b>, making commuting to and from campus quick and convenient. Whether you prefer to walk, take the bus, or drive, Hat's close proximity to the <b>University of Bath</b> ensures that you can easily reach campus without any hassle.</p><a id = "how_close_is_hat_to_the_bath_spa_university"> <h2>How close is Hat to the Bath Spa University</h2></a><p>If you're considering attending <b>Bath Spa University</b>, you may be wondering how close Hat is to the campus. Hat is located just a few <b>miles</b> away from <b>Bath Spa University</b>, making it convenient for students to travel to and from the campus. <b>by foot</b>, the distance between Hat and the university may take around 30-40 minutes to walk. Alternatively, there's also a direct <b>bus route</b> that connects Hat to <b>Bath Spa University</b>, which takes around 15-20 minutes depending on traffic. For those who prefer to drive, the journey takes approximately 10-15 minutes <b>by car</b>, making it easy to commute to the campus. Whether you choose to walk, take the bus, or drive, traveling from Hat to <b>Bath Spa University</b> is quick and convenient.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for 3-bedroom student flats in Hat, Bath can be an exciting yet daunting task. With the increasing demand for student accommodation, it's important to start your search early to secure the perfect place. When hunting for a flat, consider factors such as location, budget, and amenities. Hat, Bath offers a variety of options, from cozy flats in the city center to spacious apartments on the outskirts. Many properties come fully furnished, making the move-in process a breeze. Additionally, living with two roommates can help split costs and create a sense of community. Overall, by carefully researching different options and staying organized during the search process, you can find the ideal 3-bedroom student flat in Hat, Bath that meets your needs and preferences.</p></>)
};

export default BathHatFlat3;