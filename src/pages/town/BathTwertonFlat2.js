
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


const  BathTwertonFlat2 = () => 
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

    return (<><h1>2 Bedroom Student Flats in Twerton, Bath</h1><p>We have listings for <b>2 Bedroom Student Flats in Twerton, Bath</b> for the academic year 2024.

<b>2 Bedroom Student Flats in Twerton, Bath</b> are popular among students looking to live in a vibrant and convenient location in Bath. These flats offer spacious living areas, modern amenities, and are often located close to local universities and amenities. Students can enjoy a comfortable and convenient living experience while studying in Bath.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/2-bedroom-student-flats-in-twerton-bath.png')} alt='2 Bedroom Student Flats in Twerton, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='2 Bedroom Student Flats in Twerton, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71119&type=Flat&beds=2")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>2 Bedroom Student Flats in Twerton, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_2_bedroom_student_flats_in_twerton,_bath_pp/pm">Prices for 2 Bedroom Student Flats in Twerton, Bath pp/pm</a></li><li><a href = "#2_bedroom_student_flats_in_twerton,_bath__all_bills_inclusive">2 Bedroom Student Flats in Twerton, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_2_bedroom_student_flats_in_twerton,_bath">Cheap 2 Bedroom Student Flats in Twerton, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_twerton,_bath__recently_added">2 Bedroom Student Flats in Twerton, Bath - Recently Added</a></li><li><a href = "#2_bedroom_student_flats_in_twerton,_bath__recently_reduced">2 Bedroom Student Flats in Twerton, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__2_bedroom_flats_in_twerton,_bath,_somerset,_bath">Student Accommodation Portal - 2 Bedroom Flats in Twerton, Bath, Somerset, Bath</a></li><li><a href = "#2_bedroom_student_flats_in_twerton,_bath__private_rental_sector">2 Bedroom Student Flats in Twerton, Bath - Private Rental Sector</a></li><li><a href = "#2_bedroom_student_flats_in_twerton,_bath__fully_furnished">2 Bedroom Student Flats in Twerton, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_twerton_to_the_city_center">How close is Twerton to the City Center</a></li><li><a href = "#how_close_is_twerton_to_the_university_of_bath">How close is Twerton to the University of Bath</a></li><li><a href = "#how_close_is_twerton_to_the_bath_spa_university">How close is Twerton to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_2_bedroom_student_flats_in_twerton,_bath_pp/pm"> <h2>Prices for 2 Bedroom Student Flats in Twerton, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£725 per month </td><td><button className = 'searchButton tableButton' title='2 Bedroom Student Flats in Twerton, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71119")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "2_bedroom_student_flats_in_twerton,_bath__all_bills_inclusive"> <h2>2 Bedroom Student Flats in Twerton, Bath - All Bills Inclusive</h2></a><p>Living in a 2 bedroom student flat in Twerton, Bath, Somerset can be both exciting and challenging. With the demands of university life, staying on top of bills and expenses can be overwhelming. This is where an <b>all bills inclusive</b> service, such as the one provided by <b>UniBills.com</b>, can make a huge difference. By opting for an <b>all bills inclusive</b> package, you can enjoy the hassle-free option that <b>UniBills.com</b> offers. With everything from utilities to internet and even cleaning services included in one convenient monthly payment, you can <b>concentrate on your studies</b> and not worry about managing multiple bills. This not only saves you time and stress but also allows you to budget more effectively. So, if you're looking for a convenient and stress-free living arrangement, consider opting for an <b>all bills inclusive</b> service from <b>UniBills.com</b> or any accommodation on this website. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and make your student life more manageable and enjoyable.</p><a id = "cheap_2_bedroom_student_flats_in_twerton,_bath"> <h2>Cheap 2 Bedroom Student Flats in Twerton, Bath</h2></a><p><Portlet location="REGION^71119" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_twerton,_bath__recently_added"> <h2>2 Bedroom Student Flats in Twerton, Bath - Recently Added</h2></a><p><Portlet location="REGION^71119" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "2_bedroom_student_flats_in_twerton,_bath__recently_reduced"> <h2>2 Bedroom Student Flats in Twerton, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71119" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__2_bedroom_flats_in_twerton,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 2 Bedroom Flats in Twerton, Bath, Somerset, Bath</h2></a><p>Are you a student looking for a 2 Bedroom Flat in Twerton, <b>Bath</b>, Somerset? Our property portal is here to help you find the perfect student accommodation near the University of <b>Bath</b> and <b>Bath</b> Spa University. Twerton is a charming area in <b>Bath</b> with easy access to city amenities and beautiful green spaces. Whether you prefer a modern apartment or a cozy flat, our portal offers a variety of options to suit your needs and budget. Finding a suitable 2 Bedroom Flat in Twerton can be overwhelming, but with our user-friendly search filters, you can easily narrow down your choices and find the ideal accommodation for your university experience. Don't miss out on the opportunity to live in a comfortable and convenient student flat in the vibrant city of <b>Bath</b>.</p><a id = "2_bedroom_student_flats_in_twerton,_bath__private_rental_sector"> <h2>2 Bedroom Student Flats in Twerton, Bath - Private Rental Sector</h2></a><p>Are you considering renting a 2 bedroom flat in Twerton, Bath, Somerset, Bath? The private rental sector in this area offers a variety of options to suit your needs. With many properties advertising <b>bills included</b>, you can enjoy the convenience of knowing exactly what your monthly expenses will be. Additionally, these flats often come <b>fully furnished</b>, saving you the time and hassle of purchasing and moving furniture. Twerton is a charming neighborhood with local shops, parks, and easy access to the city center. Whether you are a professional looking for a convenient location or a small family searching for a cozy home, renting a 2 bedroom flat in Twerton provides a comfortable and welcoming living space.</p><a id = "2_bedroom_student_flats_in_twerton,_bath__fully_furnished"> <h2>2 Bedroom Student Flats in Twerton, Bath - Fully Furnished</h2></a><p>Are you in search of a cozy and convenient living space in Twerton, Bath, Somerset, Bath? Look no further than the fully furnished 2 Bedroom Flats in Twerton. Whether you are a student looking for accommodation near your university or a young professional wanting a comfortable place to call home, these flats offer the perfect solution. In this vibrant and historic city, it is normal for student flats to be fully furnished, saving you the hassle and expense of buying furniture. With modern amenities and stylish décor, these flats provide a welcoming environment where you can relax and unwind after a busy day. Imagine coming home to a spacious living room, well-equipped kitchen, and comfortable bedrooms, all ready for you to move in and make your own. Don't miss out on the opportunity to experience the convenience and comfort of fully furnished living in Twerton.</p><a id = "how_close_is_twerton_to_the_city_center"> <h2>How close is Twerton to the City Center</h2></a><p><b>Twerton</b> is a charming suburb located just 2 <b>miles</b> southwest of <b>Bath city center</b>. This close proximity makes it a convenient and desirable place to live for those who want to enjoy the vibrant atmosphere and amenities of the city while still appreciating the peace and quiet of a residential area. The short distance allows residents of <b>Twerton</b> to easily access the historical landmarks, shopping districts, and cultural attractions that Bath has to offer. Whether enjoying a leisurely stroll along the River Avon, exploring the Roman Baths, or indulging in a shopping spree at SouthGate, <b>Twerton</b> residents can take advantage of all that <b>Bath city center</b> has to offer. Additionally, with excellent public transportation options, including buses and trains, commuting back and forth between <b>Twerton</b> and <b>Bath city center</b> is quick and convenient. <b>Twerton</b> truly provides the best of both worlds: the tranquility of suburbia coupled with easy access to the bustling heart of Bath.</p><a id = "how_close_is_twerton_to_the_university_of_bath"> <h2>How close is Twerton to the University of Bath</h2></a><p>Twerton is conveniently located close to the <b>University of Bath</b>, situated just a few <b>miles</b> away from the university campus. <b>by foot</b>, the distance is around 1.5 <b>miles</b>, allowing for a leisurely stroll through the picturesque streets of Bath. For those looking for a quicker option, the <b>bus route</b> from Twerton to the <b>University of Bath</b> is easily accessible, offering a convenient and affordable mode of transportation. <b>by bus</b>, the journey takes around 15-20 minutes, making it a convenient option for students and faculty alike. Additionally, for those who prefer to drive, the <b>University of Bath</b> can be reached in under 10 minutes <b>by car</b>, providing a flexible commuting option for those with their own vehicle. Overall, Twerton's close proximity to the <b>University of Bath</b> offers residents the perfect balance of convenience and accessibility to the university campus.</p><a id = "how_close_is_twerton_to_the_bath_spa_university"> <h2>How close is Twerton to the Bath Spa University</h2></a><p>Twerton is conveniently close to <b>Bath Spa University</b>, which is approximately 2.5 <b>miles</b> away. For those looking to travel to the university <b>by foot</b>, it is an achievable 50-minute walk through the charming streets of Bath. Alternatively, students can easily hop on a <b>bus route</b> that connects Twerton to the university, offering a quick and convenient way to commute. If driving is more your style, the journey from Twerton to <b>Bath Spa University</b> <b>by car</b> takes around 10 minutes, depending on traffic. Whether you prefer walking, taking the bus, or driving, getting to <b>Bath Spa University</b> from Twerton is simple and straightforward.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the search for 2 bedroom student flats in Twerton, Bath, it is important to consider factors such as location, amenities, and budget. Twerton offers a range of rental options, from modern apartments to traditional Victorian homes, catering to different preferences and needs. The area is well-connected by public transport, with easy access to the University of Bath and Bath Spa University campuses. Students can enjoy the vibrant local community, with shops, restaurants, and green spaces nearby. Ultimately, finding the right 2 bedroom student flat in Twerton requires thorough research and planning to secure a suitable and comfortable living space. By considering all factors, students can make an informed decision that meets their requirements and ensures a positive living experience during their time in Bath[].</p></>)
};

export default BathTwertonFlat2;