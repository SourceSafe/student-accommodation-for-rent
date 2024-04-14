
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


const  BathSouthTwertonHouse3 = () => 
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

    return (<><h1>3 Bedroom Student Houses in South Twerton, Bath</h1><p>We have listings for <b>3 Bedroom Student Houses in South Twerton, Bath</b> for the academic year 2024. <b>3 Bedroom Student Houses in South Twerton, Bath</b> are perfect for students looking for a comfortable and convenient living space in Bath. These houses typically offer spacious bedrooms, shared living areas, and are located in a vibrant neighborhood with easy access to local amenities and public transportation.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/3-bedroom-student-houses-in-south-twerton-bath.png')} alt='3 Bedroom Student Houses in South Twerton, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='3 Bedroom Student Houses in South Twerton, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71117&type=House&beds=3")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>3 Bedroom Student Houses in South Twerton, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_3_bedroom_student_houses_in_south_twerton,_bath_pp/pm">Prices for 3 Bedroom Student Houses in South Twerton, Bath pp/pm</a></li><li><a href = "#3_bedroom_student_houses_in_south_twerton,_bath__all_bills_inclusive">3 Bedroom Student Houses in South Twerton, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_3_bedroom_student_houses_in_south_twerton,_bath">Cheap 3 Bedroom Student Houses in South Twerton, Bath</a></li><li><a href = "#3_bedroom_student_houses_in_south_twerton,_bath__recently_added">3 Bedroom Student Houses in South Twerton, Bath - Recently Added</a></li><li><a href = "#3_bedroom_student_houses_in_south_twerton,_bath__recently_reduced">3 Bedroom Student Houses in South Twerton, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__3_bedroom_houses_in_south_twerton,_bath,_somerset,_bath">Student Accommodation Portal - 3 Bedroom Houses in South Twerton, Bath, Somerset, Bath</a></li><li><a href = "#3_bedroom_student_houses_in_south_twerton,_bath__private_rental_sector">3 Bedroom Student Houses in South Twerton, Bath - Private Rental Sector</a></li><li><a href = "#3_bedroom_student_houses_in_south_twerton,_bath__fully_furnished">3 Bedroom Student Houses in South Twerton, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_south_twerton_to_the_city_center">How close is South Twerton to the City Center</a></li><li><a href = "#how_close_is_south_twerton_to_the_university_of_bath">How close is South Twerton to the University of Bath</a></li><li><a href = "#how_close_is_south_twerton_to_the_bath_spa_university">How close is South Twerton to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_3_bedroom_student_houses_in_south_twerton,_bath_pp/pm"> <h2>Prices for 3 Bedroom Student Houses in South Twerton, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£610 per month </td><td><button className = 'searchButton tableButton' title='3 Bedroom Student Houses in South Twerton, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71117")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "3_bedroom_student_houses_in_south_twerton,_bath__all_bills_inclusive"> <h2>3 Bedroom Student Houses in South Twerton, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 3 bedroom house in South Twerton, Bath, Somerset? With all the responsibilities of university life, the last thing you need to worry about is managing multiple bills for your accommodation. That's where <b>UniBills.com</b> comes in. By subscribing to their <b>all bills inclusive</b> service, you can <b>concentrate on your studies</b> and enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>. Say goodbye to separating utility payments and hello to a stress-free living arrangement. With <b>UniBills.com</b>, you'll have the convenience of just one monthly payment covering all your bills, leaving you more time to focus on what truly matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the ease of all-inclusive living. Say goodbye to bill-related headaches and hello to a smooth and efficient living experience.</p><a id = "cheap_3_bedroom_student_houses_in_south_twerton,_bath"> <h2>Cheap 3 Bedroom Student Houses in South Twerton, Bath</h2></a><p><Portlet location="REGION^71117" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_houses_in_south_twerton,_bath__recently_added"> <h2>3 Bedroom Student Houses in South Twerton, Bath - Recently Added</h2></a><p><Portlet location="REGION^71117" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "3_bedroom_student_houses_in_south_twerton,_bath__recently_reduced"> <h2>3 Bedroom Student Houses in South Twerton, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71117" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__3_bedroom_houses_in_south_twerton,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 3 Bedroom Houses in South Twerton, Bath, Somerset, Bath</h2></a><p>Looking for 3 Bedroom <b>student Houses</b> in South Twerton, <b>Bath</b>, Somerset? Look no further than our property portal, where we make it easy to find the perfect student accommodation near the University of <b>Bath</b> and <b>Bath</b> Spa University. Our listings include a wide range of <b>3 Bedroom Houses</b> in the South Twerton area, perfect for students looking for a comfortable and convenient place to call home. With our user-friendly search features, you can easily filter by location, price, and amenities to find the ideal student house that fits your needs. Don't waste time scrolling through countless listings - let us help you find the perfect 3 Bedroom House in South Twerton, <b>Bath</b>, Somerset today.</p><a id = "3_bedroom_student_houses_in_south_twerton,_bath__private_rental_sector"> <h2>3 Bedroom Student Houses in South Twerton, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and comfortable living option in South Twerton, Bath, Somerset? Look no further than our range of 3-bedroom houses in this charming area. Ideal for families or sharers, these homes offer ample space and privacy. What sets these properties apart is the convenience of having <b>bills included</b> in the rent, making budgeting a breeze. Additionally, each house comes <b>fully furnished</b>, so you can move in hassle-free and start enjoying your new home right away. Whether you're looking for a cozy space to relax or a place to entertain guests, these 3-bedroom houses in South Twerton, Bath, Somerset, Bath, offer the perfect blend of comfort and convenience.</p><a id = "3_bedroom_student_houses_in_south_twerton,_bath__fully_furnished"> <h2>3 Bedroom Student Houses in South Twerton, Bath - Fully Furnished</h2></a><p>If you're looking for a comfortable and convenient living arrangement in South Twerton, Bath, Somerset, Bath, fully furnished 3 Bedroom Houses are the perfect option for you. These properties come complete with all the necessary furniture and appliances, making it easy to move in and start living right away. In South Twerton, Bath, Somerset, Bath, it is normal for student houses to be fully furnished, ensuring that students have everything they need for a comfortable and enjoyable living experience. From cozy living rooms to spacious bedrooms, these houses offer a range of amenities to make your stay in Bath comfortable and stress-free. Don't worry about buying or moving furniture - these fully furnished houses have everything you need to feel at home from day one.</p><a id = "how_close_is_south_twerton_to_the_city_center"> <h2>How close is South Twerton to the City Center</h2></a><p><b>South Twerton</b> is a charming suburb located just a few <b>miles</b> from <b>Bath city center</b>. This close proximity makes it incredibly convenient for residents to enjoy all that the vibrant city has to offer. Whether it's exploring the Roman Baths, visiting the historic Bath Abbey, or indulging in a relaxing spa day, residents of <b>South Twerton</b> have easy access to all of these attractions. Additionally, the close distance to the city center means that residents can take advantage of the diverse shopping and dining options that Bath has to offer. From quaint boutiques to high-end restaurants, there is something for everyone just a short drive away. With its picturesque streets and welcoming community, <b>South Twerton</b> strikes the perfect balance between peaceful suburban living and the bustling energy of <b>Bath city center</b>.</p><a id = "how_close_is_south_twerton_to_the_university_of_bath"> <h2>How close is South Twerton to the University of Bath</h2></a><p>South Twerton is located just 1.5 <b>miles</b> away from the prestigious <b>University of Bath</b>, making it a convenient place for students and faculty members alike. For those who prefer to travel <b>by foot</b>, a pleasant 30-minute walk through the picturesque streets of Bath can get you to the university campus. Alternatively, there are frequent bus services that connect South Twerton to the <b>University of Bath</b>, with the journey taking around 10-15 minutes, depending on traffic. If you prefer the convenience of driving, the university is just a short 5-10 minute car ride away. Whether you choose to travel <b>by foot</b>, bus, or car, South Twerton's close proximity to the <b>University of Bath</b> makes it an ideal location for students and academics looking for a convenient and accessible place to live.</p><a id = "how_close_is_south_twerton_to_the_bath_spa_university"> <h2>How close is South Twerton to the Bath Spa University</h2></a><p>Located just 1.5 <b>miles</b> away from <b>Bath Spa University</b>, South Twerton is a convenient and popular residential area for students and faculty. The university is easily accessible from South Twerton by various modes of transportation. For those who prefer to walk, the journey takes around 30 minutes, providing a scenic route through the vibrant city of Bath. Alternatively, the university is also conveniently connected to South Twerton by a direct <b>bus route</b>, making commuting quick and hassle-free. For students with a car, the drive from South Twerton to <b>Bath Spa University</b> takes less than 10 minutes, offering flexibility and convenience. Overall, South Twerton's close proximity to <b>Bath Spa University</b> makes it a fantastic choice for those looking to live near campus while still enjoying the amenities of a bustling neighborhood.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the quest for 3-bedroom student houses in South Twerton, Bath, one may find an array of enticing options tailor-made for student living. The vibrant neighborhood offers a mix of convenience and community, making it an ideal choice for students looking for a comfortable and accessible living arrangement. From cozy terraced houses to modern apartments, the variety of accommodations available ensures that there is something to suit every preference and budget. With close proximity to local amenities, transport links, and the University of Bath, students can enjoy a seamless balance between study and leisure. In conclusion, South Twerton presents an attractive option for students seeking a well-rounded living experience in Bath, with its diverse housing options and convenient location ensuring a comfortable and enriching university lifestyle.</p></>)
};

export default BathSouthTwertonHouse3;