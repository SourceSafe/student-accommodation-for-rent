
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


const  BathAvonParkFlat1 = () => 
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

    return (<><h1>1 Bedroom Student Flats in Avon Park, Bath</h1><p>We have listings for <b>1 Bedroom Student Flats in Avon Park, Bath</b> for the academic year 2024.
Located in the vibrant city of Bath, 1 Bedroom Student Flats in Avon Park offer convenient living spaces for students studying in the area. With easy access to local amenities and transportation, these flats provide a comfortable and practical accommodation option for students in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/1-bedroom-student-flats-in-avon-park-bath.png')} alt='1 Bedroom Student Flats in Avon Park, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='1 Bedroom Student Flats in Avon Park, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71091&type=Flat&beds=1")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>1 Bedroom Student Flats in Avon Park, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_1_bedroom_student_flats_in_avon_park,_bath_pp/pm">Prices for 1 Bedroom Student Flats in Avon Park, Bath pp/pm</a></li><li><a href = "#1_bedroom_student_flats_in_avon_park,_bath__all_bills_inclusive">1 Bedroom Student Flats in Avon Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_1_bedroom_student_flats_in_avon_park,_bath">Cheap 1 Bedroom Student Flats in Avon Park, Bath</a></li><li><a href = "#1_bedroom_student_flats_in_avon_park,_bath__recently_added">1 Bedroom Student Flats in Avon Park, Bath - Recently Added</a></li><li><a href = "#1_bedroom_student_flats_in_avon_park,_bath__recently_reduced">1 Bedroom Student Flats in Avon Park, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__1_bedroom_flats_in_avon_park,_bath,_somerset,_bath">Student Accommodation Portal - 1 Bedroom Flats in Avon Park, Bath, Somerset, Bath</a></li><li><a href = "#1_bedroom_student_flats_in_avon_park,_bath__private_rental_sector">1 Bedroom Student Flats in Avon Park, Bath - Private Rental Sector</a></li><li><a href = "#1_bedroom_student_flats_in_avon_park,_bath__fully_furnished">1 Bedroom Student Flats in Avon Park, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_avon_park_to_the_city_center">How close is Avon Park to the City Center</a></li><li><a href = "#how_close_is_avon_park_to_the_university_of_bath">How close is Avon Park to the University of Bath</a></li><li><a href = "#how_close_is_avon_park_to_the_bath_spa_university">How close is Avon Park to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_1_bedroom_student_flats_in_avon_park,_bath_pp/pm"> <h2>Prices for 1 Bedroom Student Flats in Avon Park, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1232 per month </td><td><button className = 'searchButton tableButton' title='1 Bedroom Student Flats in Avon Park, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "1_bedroom_student_flats_in_avon_park,_bath__all_bills_inclusive"> <h2>1 Bedroom Student Flats in Avon Park, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 1 bedroom student flat in Avon Park, Bath, Somerset is a smart choice for busy students looking to simplify their living expenses. <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b> without the added stress of managing multiple bills. With all utilities such as gas, electricity, water, and internet included in one fixed monthly fee, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. This means no more worrying about fluctuating energy costs or unexpected bills arriving in the post. By opting for an <b>all bills inclusive</b> service, you can budget more effectively and have peace of mind knowing that everything is taken care of. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life more manageable and enjoyable.</p><a id = "cheap_1_bedroom_student_flats_in_avon_park,_bath"> <h2>Cheap 1 Bedroom Student Flats in Avon Park, Bath</h2></a><p><Portlet location="REGION^71091" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "1_bedroom_student_flats_in_avon_park,_bath__recently_added"> <h2>1 Bedroom Student Flats in Avon Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71091" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "1_bedroom_student_flats_in_avon_park,_bath__recently_reduced"> <h2>1 Bedroom Student Flats in Avon Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71091" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__1_bedroom_flats_in_avon_park,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 1 Bedroom Flats in Avon Park, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect 1 Bedroom Flat in Avon Park, <b>Bath</b>, Somerset? Look no further! Our property portal specializes in helping students find the ideal accommodation in <b>Bath</b>, home to two major universities - the University of <b>Bath</b> and <b>Bath</b> Spa University. Avon Park is a popular area for students due to its convenient location and vibrant atmosphere. With our user-friendly search filters, you can easily find 1 Bedroom <b>student Flats</b> that meet your preferences and budget. Whether you prefer a modern apartment or a cozy studio, our portal has a wide range of options to choose from.</p><a id = "1_bedroom_student_flats_in_avon_park,_bath__private_rental_sector"> <h2>1 Bedroom Student Flats in Avon Park, Bath - Private Rental Sector</h2></a><p>Looking for a cozy retreat in the heart of Bath, Somerset? Explore the vibrant neighborhood of Avon Park and discover an array of 1 bedroom flats that cater to your needs. These charming properties in Bath offer the convenience of <b>bills included</b> in the rent, taking the hassle out of managing utilities. Each flat is <b>fully furnished</b>, ensuring that all you need to do is pack your bags and move in. With well-appointed living spaces and modern amenities, these flats provide a comfortable and stylish living environment. Embrace the city's rich history and vibrant culture while enjoying the comforts of home in Avon Park, Bath, Somerset.</p><a id = "1_bedroom_student_flats_in_avon_park,_bath__fully_furnished"> <h2>1 Bedroom Student Flats in Avon Park, Bath - Fully Furnished</h2></a><p>Welcome to Avon Park, Bath, Somerset, where you can find fully furnished 1 bedroom Flats that offer the perfect blend of comfort and convenience. Nestled in the heart of the historic city of Bath, these Flats provide a cozy and stylish living space for students or young professionals. Situated in a vibrant and bustling neighborhood, residents can enjoy easy access to shops, restaurants, and local amenities. With sleek modern furnishings and all the essential appliances, these Flats are move-in ready and designed to make your life easier. In Avon Park, Bath, it is normal for student Flats to be fully furnished, saving you the hassle of shopping for furniture and allowing you to focus on settling into your new home. Experience the charm of Bath while enjoying the comfort of a fully equipped Flat at Avon Park.</p><a id = "how_close_is_avon_park_to_the_city_center"> <h2>How close is Avon Park to the City Center</h2></a><p><b>Avon Park</b> is located just a few <b>miles</b> away from <b>Bath city center</b>, making it an ideal location for those looking to explore this historic city. Situated on the outskirts of Bath, <b>Avon Park</b> offers a peaceful retreat while still being close enough to easily access all the attractions and amenities that the city has to offer. Whether you want to visit the iconic Roman Baths, stroll along the picturesque Pulteney Bridge, or indulge in some retail therapy at SouthGate shopping center, you'll find that everything is within easy reach from <b>Avon Park</b>. So, if you're looking for a convenient and comfortable base to explore <b>Bath city center</b>, look no further than <b>Avon Park</b>.</p><a id = "how_close_is_avon_park_to_the_university_of_bath"> <h2>How close is Avon Park to the University of Bath</h2></a><p>Avon Park, nestled in a serene and picturesque location, is conveniently close to the prestigious <b>University of Bath</b>. Situated just a few <b>miles</b> away, this luxury accommodation is the perfect choice for students seeking a peaceful and comfortable living environment within easy reach of campus. The <b>University of Bath</b> is easily accessible from Avon Park <b>by foot</b>, with a pleasant walk ensuring you arrive in no time. Alternatively, hop on the convenient <b>bus route</b> that connects Avon Park directly to the university, making the daily commute a breeze. For those who prefer to drive, the journey to the <b>University of Bath</b> from Avon Park is quick and straightforward <b>by car</b>. Enjoy the best of both worlds – a tranquil living space at Avon Park with the bustling campus life of the <b>University of Bath</b> just a stone's throw away.</p><a id = "how_close_is_avon_park_to_the_bath_spa_university"> <h2>How close is Avon Park to the Bath Spa University</h2></a><p>Avon Park is just 2 <b>miles</b> away from <b>Bath Spa University</b>, making it a convenient location for students looking to reside close to campus. The university is easily accessible from Avon Park <b>by foot</b>, with a refreshing 30-minute walk through scenic surroundings and a safe pedestrian route. For those who prefer a quicker commute, there is a direct <b>bus route</b> that connects Avon Park to the university, taking only around 10 minutes. Additionally, students with their own transportation can reach <b>Bath Spa University</b> in under 5 minutes <b>by car</b>, making it an ideal housing option for those looking for a balance of convenience and proximity to campus facilities. Living in Avon Park offers the perfect blend of peaceful surroundings and easy access to academic resources, creating a truly enriching student experience.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>After conducting a thorough search for 1 bedroom student flats in Avon Park, Bath, it is clear that there is a variety of options available for students looking for accommodation. The range of properties offers students a choice of modern and well-equipped apartments in a convenient location close to the city center and university campuses. The competitive rental prices make it an attractive option for students, allowing them to live independently while studying. Overall, Avon Park provides a vibrant and accessible community for students to thrive in during their time at university. With its convenient location, affordable rent, and comfortable living spaces, it is no wonder why so many students choose to make Avon Park their home away from home. It is a great place for students to live, study, and socialize, making it the perfect choice for those looking for a 1 bedroom student flat in Bath[].</p></>)
};

export default BathAvonParkFlat1;