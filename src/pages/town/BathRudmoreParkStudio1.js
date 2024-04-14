
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


const  BathRudmoreParkStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Rudmore Park, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Rudmore Park, Bath</b> for the academic year 2024. <b>Studio Apartments for Students in Rudmore Park, Bath</b>

<b>Studio Apartments for Students in Rudmore Park, Bath</b> offer a convenient and comfortable living space for students studying in Bath. These apartments are specifically designed to cater to the needs of students, with close proximity to universities, public transportation, and local amenities. Living in Rudmore Park provides students with a supportive community atmosphere, making it an ideal choice for academic success and social integration.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/studio-apartments-for-students-in-rudmore-park-bath.png')} alt='Studio Apartments for Students in Rudmore Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Studio Apartments for Students in Rudmore Park, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71113&type=Studio&beds=1")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Studio Apartments for Students in Rudmore Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_rudmore_park,_bath_pp/pm">Prices for Studio Apartments for Students in Rudmore Park, Bath pp/pm</a></li><li><a href = "#studio_apartments_for_students_in_rudmore_park,_bath__all_bills_inclusive">Studio Apartments for Students in Rudmore Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_rudmore_park,_bath">Cheap Studio Apartments for Students in Rudmore Park, Bath</a></li><li><a href = "#studio_apartments_for_students_in_rudmore_park,_bath__recently_added">Studio Apartments for Students in Rudmore Park, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_rudmore_park,_bath__recently_reduced">Studio Apartments for Students in Rudmore Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__1_bedroom_studios_in_rudmore_park,_bath,_somerset,_bath">Student Accommodation Portal - 1 Bedroom Studios in Rudmore Park, Bath, Somerset, Bath</a></li><li><a href = "#studio_apartments_for_students_in_rudmore_park,_bath__private_rental_sector">Studio Apartments for Students in Rudmore Park, Bath - Private Rental Sector</a></li><li><a href = "#studio_apartments_for_students_in_rudmore_park,_bath__fully_furnished">Studio Apartments for Students in Rudmore Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_rudmore_park_to_the_city_center">How close is Rudmore Park to the City Center</a></li><li><a href = "#how_close_is_rudmore_park_to_the_university_of_bath">How close is Rudmore Park to the University of Bath</a></li><li><a href = "#how_close_is_rudmore_park_to_the_bath_spa_university">How close is Rudmore Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_rudmore_park,_bath_pp/pm"> <h2>Prices for Studio Apartments for Students in Rudmore Park, Bath pp/pm</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1309 per month </td><td><button className = 'searchButton tableButton' title='Studio Apartments for Students in Rudmore Park, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71113")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_rudmore_park,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Rudmore Park, Bath - All Bills Inclusive</h2></a><p>Living in a 1 bedroom student Studio in Rudmore Park, Bath, Somerset can be a delightful experience, especially when you opt for an <b>all bills inclusive</b> service. By signing up for <b>UniBills.com</b>'s <b>all bills inclusive</b> package, you can enjoy the convenience of not having to worry about multiple bills each month. This allows you to <b>concentrate on your studies</b> without the stress of managing utility payments. <b>UniBills.com</b> offers a hassle-free all-inclusive option that covers your rent, electricity, water, heating, and internet, making budgeting a breeze. With this service, you can rest assured that there are no hidden costs or surprises. Say goodbye to bill juggling and hello to a simplified living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Rudmore Park even more enjoyable.</p><a id = "cheap_studio_apartments_for_students_in_rudmore_park,_bath"> <h2>Cheap Studio Apartments for Students in Rudmore Park, Bath</h2></a><p><Portlet location="REGION^71113" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_rudmore_park,_bath__recently_added"> <h2>Studio Apartments for Students in Rudmore Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71113" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_rudmore_park,_bath__recently_reduced"> <h2>Studio Apartments for Students in Rudmore Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71113" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__1_bedroom_studios_in_rudmore_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 1 Bedroom Studios in Rudmore Park, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a cozy 1 Bedroom Studio in Rudmore Park, <b>Bath</b>, Somerset? Our property portal is the perfect place to start your search. Located near prestigious universities like the University of <b>Bath</b> and <b>Bath</b> Spa University, Rudmore Park is a vibrant and convenient area for students. Our platform offers a variety of <b>student Studios</b> that are not only affordable but also comfortable and modern. Whether you're looking for a quiet study space or a lively social hub, Rudmore Park has something for everyone. With our easy-to-use search filters, finding the perfect 1 Bedroom Studio in <b>Bath</b> has never been easier. Start your journey to student living in <b>Bath</b> today with our property portal.</p><a id = "studio_apartments_for_students_in_rudmore_park,_bath__private_rental_sector"> <h2>Studio Apartments for Students in Rudmore Park, Bath - Private Rental Sector</h2></a><p>Are you on the lookout for a cozy and convenient place to call home in Bath, Somerset? Look no further than the 1 Bedroom Studios in Rudmore Park. These charming studios offer the ideal blend of comfort and convenience, perfect for solo living. With <b>bills included</b> in the rent, you can enjoy peace of mind knowing that you won't have to worry about additional expenses. Each studio is <b>fully furnished</b>, so you can move in and start feeling at home right away. Nestled in the heart of Bath, Rudmore Park provides easy access to all the amenities and attractions this historic city has to offer. Don't miss out on the opportunity to live in one of these lovely studios and experience the best of Bath living.</p><a id = "studio_apartments_for_students_in_rudmore_park,_bath__fully_furnished"> <h2>Studio Apartments for Students in Rudmore Park, Bath - Fully Furnished</h2></a><p>Looking for <b>fully furnished 1 Bedroom Studios in Rudmore Park, Bath, Somerset, Bath</b>? Look no further! Our Studios are equipped with everything you need to feel right at home. From modern furniture to essential appliances, we ensure that you have a comfortable and convenient living space. In Rudmore Park, Bath, it is normal for student Studios to be fully furnished, providing a hassle-free moving experience. With a cozy bedroom, a functional kitchen, and a stylish living area, these Studios are perfect for students, young professionals, or anyone looking for a convenient living situation in Bath.</p><a id = "how_close_is_rudmore_park_to_the_city_center"> <h2>How close is Rudmore Park to the City Center</h2></a><p>
<b>Rudmore Park</b> is conveniently located just a few <b>miles</b> away from the bustling heart of <b>Bath city center</b>. This tranquil park offers a peaceful retreat from the lively atmosphere of the city, making it a perfect spot for a relaxing day out. With its beautiful green spaces and serene surroundings, <b>Rudmore Park</b> provides a welcome escape from the hustle and bustle of urban life. Its close proximity to <b>Bath city center</b> makes it easily accessible for locals and visitors alike, whether you're looking for a leisurely stroll or a peaceful picnic in nature. So, if you're seeking a peaceful sanctuary just a stone's throw away from the vibrant city center, <b>Rudmore Park</b> is the perfect destination for a day of tranquility amidst the beauty of nature.</p><a id = "how_close_is_rudmore_park_to_the_university_of_bath"> <h2>How close is Rudmore Park to the University of Bath</h2></a><p>Rudmore Park is ideally located near the <b>University of Bath</b>, just a few <b>miles</b> away. For those looking to travel to the university <b>by foot</b>, it is approximately a 40-minute walk. Alternatively, there is a convenient <b>bus route</b> that connects Rudmore Park to the <b>University of Bath</b>, making commuting even easier. <b>by bus</b>, the journey takes around 20-25 minutes, offering a comfortable and stress-free way to travel. If driving is your preferred mode of transportation, Rudmore Park is also conveniently situated for a quick 10-15 minute car ride to the <b>University of Bath</b>. No matter how you choose to travel, Rudmore Park offers a prime location for easy access to the <b>University of Bath</b>.</p><a id = "how_close_is_rudmore_park_to_the_bath_spa_university"> <h2>How close is Rudmore Park to the Bath Spa University</h2></a><p>Rudmore Park is conveniently located close to <b>Bath Spa University</b>, just a few <b>miles</b> away. The university is easily accessible from Rudmore Park <b>by foot</b>, as it is only a short distance away. Additionally, there is a <b>bus route</b> that connects Rudmore Park to <b>Bath Spa University</b>, making it a quick and convenient journey <b>by bus</b>. For those who prefer to drive, the university is also easily accessible <b>by car</b>, with a straightforward route that takes just a few minutes. Whether you choose to travel <b>by foot</b>, bus, or car, getting to <b>Bath Spa University</b> from Rudmore Park is hassle-free and convenient. With its close proximity and easy transportation options, Rudmore Park is the perfect location for students and visitors to access the university with ease.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, looking for studio apartments for students in Rudmore Park, Bath can be an exciting and rewarding endeavor. With its convenient location near the university campus and various amenities nearby, Rudmore Park offers a desirable living situation for students. Studio apartments provide a cozy and comfortable living space that is perfect for focused studying and relaxation after a busy day of classes. Additionally, the affordability and inclusivity of studio apartments make them a popular choice for students looking for their own place to call home. Overall, Rudmore Park offers a vibrant and accommodating environment for students to thrive academically and personally. Whether you are a first-year student or a seasoned upperclassman, finding a studio apartment in Rudmore Park can enhance your university experience and provide a sense of independence and security. Start your search today and discover the perfect studio apartment to suit your needs and lifestyle.</p></>)
};

export default BathRudmoreParkStudio1;