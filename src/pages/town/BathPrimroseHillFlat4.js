
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


const  BathPrimroseHillFlat4 = () => 
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

    return (<><h1>4 Bedroom Student Flats in Primrose Hill, Bath</h1><p>We have listings for <b>4 Bedroom Student Flats in Primrose Hill, Bath</b> for the academic year 2024.
<b>4 Bedroom Student Flats in Primrose Hill, Bath</b> offer spacious living accommodations perfect for students studying in Bath. These flats are located in a picturesque neighborhood with easy access to local amenities and transportation options. Residents can enjoy a comfortable and convenient living experience while focusing on their academic endeavors.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/4-bedroom-student-flats-in-primrose-hill-bath.png')} alt='4 Bedroom Student Flats in Primrose Hill, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='4 Bedroom Student Flats in Primrose Hill, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71110&type=Flat&beds=4")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>4 Bedroom Student Flats in Primrose Hill, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_4_bedroom_student_flats_in_primrose_hill,_bath_pp/pm">Prices for 4 Bedroom Student Flats in Primrose Hill, Bath pp/pm</a></li><li><a href = "#4_bedroom_student_flats_in_primrose_hill,_bath__all_bills_inclusive">4 Bedroom Student Flats in Primrose Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_4_bedroom_student_flats_in_primrose_hill,_bath">Cheap 4 Bedroom Student Flats in Primrose Hill, Bath</a></li><li><a href = "#4_bedroom_student_flats_in_primrose_hill,_bath__recently_added">4 Bedroom Student Flats in Primrose Hill, Bath - Recently Added</a></li><li><a href = "#4_bedroom_student_flats_in_primrose_hill,_bath__recently_reduced">4 Bedroom Student Flats in Primrose Hill, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__4_bedroom_flats_in_primrose_hill,_bath,_somerset,_bath">Student Accommodation Portal - 4 Bedroom Flats in Primrose Hill, Bath, Somerset, Bath</a></li><li><a href = "#4_bedroom_student_flats_in_primrose_hill,_bath__private_rental_sector">4 Bedroom Student Flats in Primrose Hill, Bath - Private Rental Sector</a></li><li><a href = "#4_bedroom_student_flats_in_primrose_hill,_bath__fully_furnished">4 Bedroom Student Flats in Primrose Hill, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_primrose_hill_to_the_city_center">How close is Primrose Hill to the City Center</a></li><li><a href = "#how_close_is_primrose_hill_to_the_university_of_bath">How close is Primrose Hill to the University of Bath</a></li><li><a href = "#how_close_is_primrose_hill_to_the_bath_spa_university">How close is Primrose Hill to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_4_bedroom_student_flats_in_primrose_hill,_bath_pp/pm"> <h2>Prices for 4 Bedroom Student Flats in Primrose Hill, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£701 per month </td><td><button className = 'searchButton tableButton' title='4 Bedroom Student Flats in Primrose Hill, Bath' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71110")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "4_bedroom_student_flats_in_primrose_hill,_bath__all_bills_inclusive"> <h2>4 Bedroom Student Flats in Primrose Hill, Bath - All Bills Inclusive</h2></a><p>Are you looking for a stress-free living solution during your time at university? Consider subscribing to an <b>all bills inclusive</b> service for your 4-bedroom student flat in Primrose Hill, Bath, Somerset. <b>UniBills.com</b> offers a convenient all-inclusive package that covers your rent, utilities, and other expenses, allowing you to <b>concentrate on your studies</b> without worrying about multiple bills. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided, making budgeting easier and your student life more manageable. Say goodbye to the headache of keeping track of individual bills and hello to a simplified living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life smoother and more enjoyable. Subscribe to an <b>all bills inclusive</b> service today and focus on what truly matters – your education.</p><a id = "cheap_4_bedroom_student_flats_in_primrose_hill,_bath"> <h2>Cheap 4 Bedroom Student Flats in Primrose Hill, Bath</h2></a><p><Portlet location="REGION^71110" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_flats_in_primrose_hill,_bath__recently_added"> <h2>4 Bedroom Student Flats in Primrose Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^71110" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "4_bedroom_student_flats_in_primrose_hill,_bath__recently_reduced"> <h2>4 Bedroom Student Flats in Primrose Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71110" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__4_bedroom_flats_in_primrose_hill,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 4 Bedroom Flats in Primrose Hill, Bath, Somerset, Bath</h2></a><p>Are you looking for a spacious and comfortable 4 Bedroom flat in the picturesque area of Primrose Hill, <b>Bath</b>, Somerset? Our property portal specializes in providing a wide range of <b>student Flats</b> in this sought-after location, catering to the needs of students attending the prestigious University of <b>Bath</b> and <b>Bath</b> Spa University. With our user-friendly search options, you can easily find the perfect 4 Bedroom flat that suits your requirements and budget. Whether you prefer a modern apartment or a cosy traditional flat, we have listings that cater to all preferences. Take the stress out of house hunting and let us help you find your ideal student accommodation in Primrose Hill, <b>Bath</b>, Somerset.</p><a id = "4_bedroom_student_flats_in_primrose_hill,_bath__private_rental_sector"> <h2>4 Bedroom Student Flats in Primrose Hill, Bath - Private Rental Sector</h2></a><p>In the charming area of Primrose Hill in Bath, Somerset, you can find the perfect <b>4 Bedroom Flats in Primrose Hill, Bath, Somerset, Bath</b> for your next home. These properties offer spacious living areas ideal for families or flatshares looking for ample space. What sets these flats apart is that they come <b>fully furnished</b>, making moving in a breeze as all the essential furniture items are ready for use. Additionally, the convenience of having <b>bills included</b> in the rent means one less thing to worry about each month, allowing you to focus on enjoying your new home. With a prime location in the beautiful city of Bath, these 4 Bedroom Flats in Primrose Hill are a fantastic choice for those seeking a comfortable and hassle-free living experience.</p><a id = "4_bedroom_student_flats_in_primrose_hill,_bath__fully_furnished"> <h2>4 Bedroom Student Flats in Primrose Hill, Bath - Fully Furnished</h2></a><p>Looking for a luxurious and convenient living space in Bath, Somerset? Look no further than the fully furnished 4 Bedroom Flats in Primrose Hill. These stunning apartments are ideal for students or professionals seeking a comfortable and stylish home in the heart of Bath. Situated in the prestigious Primrose Hill area, these flats offer modern amenities and beautiful views of the surrounding area. With four spacious bedrooms, a fully equipped kitchen, and a cozy living room, these flats provide ample space for residents to relax and unwind. Additionally, it is normal for student Flats to be fully furnished, which means you can move in hassle-free and start enjoying all that Bath has to offer. Don't miss out on the opportunity to live in one of Bath's most sought-after neighborhoods in these exquisite fully furnished flats.</p><a id = "how_close_is_primrose_hill_to_the_city_center"> <h2>How close is Primrose Hill to the City Center</h2></a><p><b>Primrose Hill</b> is approximately 10 <b>miles</b> away from <b>Bath city center</b>. Situated in the picturesque countryside, <b>Primrose Hill</b> offers a peaceful retreat from the hustle and bustle of city life, while still being within a reasonable distance from all the attractions Bath has to offer. It's just a short drive or bus ride away, making it easy to enjoy the vibrant city center with its historic architecture, charming shops, and renowned restaurants. Whether you're looking to explore the Roman baths, stroll along the Georgian streets, or unwind in the Thermae Spa, <b>Primrose Hill</b> provides a convenient base for experiencing the best of Bath. With its tranquil setting and proximity to the city, <b>Primrose Hill</b> offers the perfect blend of urban excitement and rural relaxation.</p><a id = "how_close_is_primrose_hill_to_the_university_of_bath"> <h2>How close is Primrose Hill to the University of Bath</h2></a><p>Primrose Hill is conveniently situated close to the <b>University of Bath</b>, being just a few <b>miles</b> away from the campus. For students and staff looking to travel to the university, there are multiple transportation options available. <b>by foot</b>, the journey from Primrose Hill to the <b>University of Bath</b> would take approximately 45 minutes, offering a scenic route through the city. Alternatively, taking the <b>bus route</b> is a quick and efficient option, with buses connecting the two locations regularly. The journey <b>by bus</b> typically takes around 20 minutes, providing a convenient and affordable transportation choice. For those with access to a car, driving from Primrose Hill to the <b>University of Bath</b> is quick and straightforward, taking only about 10 minutes depending on traffic. The close proximity of Primrose Hill to the <b>University of Bath</b> makes it a desirable location for students and university personnel alike, offering convenience and ease of access to campus facilities.</p><a id = "how_close_is_primrose_hill_to_the_bath_spa_university"> <h2>How close is Primrose Hill to the Bath Spa University</h2></a><p>Primrose Hill is conveniently located near <b>Bath Spa University</b>, being only a few <b>miles</b> away. To get from Primrose Hill to <b>Bath Spa University</b> <b>by foot</b>, it would take around 45 minutes to an hour. However, students can also take the <b>bus route</b>, which is a quick and easy way to reach the university in about 20 minutes. For those who prefer to drive, it takes approximately 10-15 minutes <b>by car</b> depending on traffic. Whether you choose to travel <b>by foot</b>, bus, or car, <b>Bath Spa University</b> is easily accessible from Primrose Hill, making it a great location for students looking for a nearby campus.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>Looking for 4-bedroom student flats in Primrose Hill, Bath can be a challenging yet exciting task. The neighborhood is known for its vibrant community and excellent amenities, making it a popular choice for students. When searching for the perfect flat, it's important to consider factors such as location, cost, and facilities. Primrose Hill offers a mix of modern and traditional flats, catering to different preferences and budgets. Amenities like supermarkets, cafes, and public transport are easily accessible, making it convenient for students to get around. In conclusion, finding a 4-bedroom student flat in Primrose Hill, Bath offers a blend of comfort, convenience, and community, making it an ideal choice for students looking for a place to call home during their academic years.</p></>)
};

export default BathPrimroseHillFlat4;