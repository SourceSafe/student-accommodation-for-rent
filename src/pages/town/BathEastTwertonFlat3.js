
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


const  BathEastTwertonFlat3 = () => 
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

    return (<><h1>3 Bedroom Student Flats in East Twerton, Bath</h1><p>We have listings for <b>3 Bedroom Student Flats in East Twerton, Bath</b> for the academic year 2024.
<b>3 Bedroom Student Flats in East Twerton, Bath</b> are ideal for students looking for spacious and comfortable accommodation in a convenient location within Bath. These flats offer a modern living environment with amenities suitable for student lifestyles.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/3-bedroom-student-flats-in-east-twerton-bath.png')} alt='3 Bedroom Student Flats in East Twerton, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='3 Bedroom Student Flats in East Twerton, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71098&type=Flat&beds=3")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>3 Bedroom Student Flats in East Twerton, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_3_bedroom_student_flats_in_east_twerton,_bath_pp/pm">Prices for 3 Bedroom Student Flats in East Twerton, Bath pp/pm</a></li><li><a href = "#3_bedroom_student_flats_in_east_twerton,_bath__all_bills_inclusive">3 Bedroom Student Flats in East Twerton, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_3_bedroom_student_flats_in_east_twerton,_bath">Cheap 3 Bedroom Student Flats in East Twerton, Bath</a></li><li><a href = "#3_bedroom_student_flats_in_east_twerton,_bath__recently_added">3 Bedroom Student Flats in East Twerton, Bath - Recently Added</a></li><li><a href = "#3_bedroom_student_flats_in_east_twerton,_bath__recently_reduced">3 Bedroom Student Flats in East Twerton, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__3_bedroom_flats_in_east_twerton,_bath,_somerset,_bath">Student Accommodation Portal - 3 Bedroom Flats in East Twerton, Bath, Somerset, Bath</a></li><li><a href = "#3_bedroom_student_flats_in_east_twerton,_bath__private_rental_sector">3 Bedroom Student Flats in East Twerton, Bath - Private Rental Sector</a></li><li><a href = "#3_bedroom_student_flats_in_east_twerton,_bath__fully_furnished">3 Bedroom Student Flats in East Twerton, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_east_twerton_to_the_city_center">How close is East Twerton to the City Center</a></li><li><a href = "#how_close_is_east_twerton_to_the_university_of_bath">How close is East Twerton to the University of Bath</a></li><li><a href = "#how_close_is_east_twerton_to_the_bath_spa_university">How close is East Twerton to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_3_bedroom_student_flats_in_east_twerton,_bath_pp/pm"> <h2>Prices for 3 Bedroom Student Flats in East Twerton, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£677 per month </td><td><button className = 'searchButton tableButton' title='3 Bedroom Student Flats in East Twerton, Bath' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71098")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "3_bedroom_student_flats_in_east_twerton,_bath__all_bills_inclusive"> <h2>3 Bedroom Student Flats in East Twerton, Bath - All Bills Inclusive</h2></a><p>Are you a student residing in a 3 bedroom flat in East Twerton, Bath, Somerset? Simplify your living arrangements by subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b>. With this service, you can enjoy the convenience of having all your utility bills covered in one flat rate. This means no more worrying about splitting bills between housemates or unexpected expenses popping up. By opting for this option, you can <b>concentrate on your studies</b> without the added stress of managing multiple bills. <b>UniBills.com</b> offers a hassle-free all-inclusive option that saves you time and ensures you can focus on what truly matters. Say goodbye to the hassle of sorting out bills and embrace the simplicity and ease that comes with an <b>all bills inclusive</b> service. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student living experience in East Twerton a breeze.</p><a id = "cheap_3_bedroom_student_flats_in_east_twerton,_bath"> <h2>Cheap 3 Bedroom Student Flats in East Twerton, Bath</h2></a><p><Portlet location="REGION^71098" beds="3" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_flats_in_east_twerton,_bath__recently_added"> <h2>3 Bedroom Student Flats in East Twerton, Bath - Recently Added</h2></a><p><Portlet location="REGION^71098" beds="3" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_flats_in_east_twerton,_bath__recently_reduced"> <h2>3 Bedroom Student Flats in East Twerton, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71098" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__3_bedroom_flats_in_east_twerton,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 3 Bedroom Flats in East Twerton, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect <b>3 Bedroom Flats</b> in East Twerton, <b>Bath</b>, Somerset? Look no further! Our property portal is here to help you find the ideal <b>student Flats</b> in this vibrant area, located conveniently close to both the University of <b>Bath</b> and <b>Bath</b> Spa University. East Twerton offers a mix of urban amenities and green spaces, making it a popular choice among students. With our user-friendly search filters, you can easily narrow down your options and find a comfortable and affordable 3 Bedroom Flat that suits your needs.</p><a id = "3_bedroom_student_flats_in_east_twerton,_bath__private_rental_sector"> <h2>3 Bedroom Student Flats in East Twerton, Bath - Private Rental Sector</h2></a><p>Looking for a hassle-free living experience in Bath, Somerset? Consider renting one of the stunning 3 Bedroom Flats in East Twerton, Bath. These properties offer the perfect combination of location and comfort, making them ideal for families or professionals looking for a spacious place to call home. What sets these flats apart is the convenience of having <b>bills included</b> in the rent, making budgeting a breeze. Additionally, each flat comes <b>fully furnished</b>, saving you the time and effort of finding and moving furniture. With easy access to local amenities and transportation, these 3 bedroom flats provide a cozy retreat in the heart of Bath.</p><a id = "3_bedroom_student_flats_in_east_twerton,_bath__fully_furnished"> <h2>3 Bedroom Student Flats in East Twerton, Bath - Fully Furnished</h2></a><p>Discover the ultimate convenience and comfort with <b>fully furnished 3 Bedroom Flats in East Twerton, Bath, Somerset, Bath</b>. Located in the heart of this vibrant city, these flats offer a modern and stylish living space perfect for students or professionals. With all the essential furniture and appliances included, moving in is hassle-free, allowing you to focus on settling into your new home. In East Twerton, it is normal for student Flats to be fully furnished to cater to the needs of those looking for a ready-to-live-in space. From cozy bedrooms to spacious living areas, these flats provide a welcoming environment to relax and unwind. Take advantage of the ideal location, close to local amenities, transport links, and popular attractions, making it the perfect place to call home in Bath. Live effortlessly in these fully furnished flats and experience a seamless transition into the vibrant lifestyle of East Twerton.</p><a id = "how_close_is_east_twerton_to_the_city_center"> <h2>How close is East Twerton to the City Center</h2></a><p><b>East Twerton</b> is a quaint neighborhood located just over a mile away from <b>Bath city center</b>. This close proximity makes it easy for residents of <b>East Twerton</b> to enjoy all that the bustling city has to offer. Whether strolling down the charming streets of Bath, exploring the historic Roman baths, or indulging in the vibrant shopping and dining scene, residents of <b>East Twerton</b> have easy access to it all within just a few <b>miles</b>. The convenient distance allows for a quick commute to work or leisure activities in <b>Bath city center</b>, while still providing a peaceful residential retreat away from the hustle and bustle. Additionally, public transportation options make it even more accessible for residents to travel back and forth between <b>East Twerton</b> and <b>Bath city center</b>. This close proximity offers the best of both worlds—a tranquil residential area with the amenities and attractions of a vibrant city just <b>miles</b> away.</p><a id = "how_close_is_east_twerton_to_the_university_of_bath"> <h2>How close is East Twerton to the University of Bath</h2></a><p>East Twerton is conveniently located in close proximity to the prestigious <b>University of Bath</b>. The distance between East Twerton and the <b>University of Bath</b> is just a few <b>miles</b>, making it an ideal location for students looking to easily commute to campus. For those who prefer walking, the university is easily accessible from East Twerton <b>by foot</b>, allowing students to enjoy a leisurely stroll to classes. Alternatively, there is a direct <b>bus route</b> that connects East Twerton to the university, providing a convenient and affordable transportation option for students. Additionally, for those with access to a car, the drive from East Twerton to the <b>University of Bath</b> is quick and straightforward, making it easy to get to campus for classes, meetings, or recreational activities. Overall, East Twerton's close proximity to the <b>University of Bath</b> offers students a convenient and well-connected location to live while pursuing their academic and personal goals.</p><a id = "how_close_is_east_twerton_to_the_bath_spa_university"> <h2>How close is East Twerton to the Bath Spa University</h2></a><p>East Twerton is located just 2.5 <b>miles</b> away from <b>Bath Spa University</b>, making it easily accessible for students looking to commute to campus. <b>by foot</b>, the journey would take approximately 50 minutes, which could be a great way to stay active and enjoy the scenic route. Alternatively, there is a convenient <b>bus route</b> that connects East Twerton to the university campus, with a quick 15-minute ride making it a practical option for students who prefer public transportation. For those who prefer to drive, the distance can be covered in just 10 minutes <b>by car</b>, providing a quick and easy commute option. Overall, East Twerton's close proximity to <b>Bath Spa University</b> offers students the flexibility to choose their preferred mode of transportation based on their individual preferences and needs.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In conclusion, the search for 3-bedroom student flats in East Twerton, Bath can be an exciting and rewarding experience. With a variety of options available, students can find spacious and comfortable accommodations that are within close proximity to local amenities and campus facilities. By exploring the vibrant community of East Twerton, students can enjoy a convenient and lively environment while focusing on their studies. Whether it's shared living spaces or modern amenities, there are plenty of choices to suit different preferences and budgets. Overall, East Twerton offers a great location for students looking for a 3-bedroom flat, providing a balance between academic commitments and a vibrant student lifestyle.</p></>)
};

export default BathEastTwertonFlat3;