
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


const  BathPrimroseHillFlat1 = () => 
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

    return (<><h1>1 Bedroom Student Flats in Primrose Hill, Bath</h1><p>We have listings for <b>1 Bedroom Student Flats in Primrose Hill, Bath</b> for the academic year 2024. 

<b>1 Bedroom Student Flats in Primrose Hill, Bath</b> offer modern and comfortable accommodations for students studying in Bath. Situated in a vibrant neighborhood, these flats provide easy access to local amenities, universities, and transportation options. With their convenient location and stylish design, these flats are the perfect choice for students looking for a great place to live during the academic year.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/1-bedroom-student-flats-in-primrose-hill-bath.png')} alt='1 Bedroom Student Flats in Primrose Hill, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='1 Bedroom Student Flats in Primrose Hill, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71110&type=Flat&beds=1")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>1 Bedroom Student Flats in Primrose Hill, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_1_bedroom_student_flats_in_primrose_hill,_bath_pp/pm">Prices for 1 Bedroom Student Flats in Primrose Hill, Bath pp/pm</a></li><li><a href = "#1_bedroom_student_flats_in_primrose_hill,_bath__all_bills_inclusive">1 Bedroom Student Flats in Primrose Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_1_bedroom_student_flats_in_primrose_hill,_bath">Cheap 1 Bedroom Student Flats in Primrose Hill, Bath</a></li><li><a href = "#1_bedroom_student_flats_in_primrose_hill,_bath__recently_added">1 Bedroom Student Flats in Primrose Hill, Bath - Recently Added</a></li><li><a href = "#1_bedroom_student_flats_in_primrose_hill,_bath__recently_reduced">1 Bedroom Student Flats in Primrose Hill, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__1_bedroom_flats_in_primrose_hill,_bath,_somerset,_bath">Student Accommodation Portal - 1 Bedroom Flats in Primrose Hill, Bath, Somerset, Bath</a></li><li><a href = "#1_bedroom_student_flats_in_primrose_hill,_bath__private_rental_sector">1 Bedroom Student Flats in Primrose Hill, Bath - Private Rental Sector</a></li><li><a href = "#1_bedroom_student_flats_in_primrose_hill,_bath__fully_furnished">1 Bedroom Student Flats in Primrose Hill, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_primrose_hill_to_the_city_center">How close is Primrose Hill to the City Center</a></li><li><a href = "#how_close_is_primrose_hill_to_the_university_of_bath">How close is Primrose Hill to the University of Bath</a></li><li><a href = "#how_close_is_primrose_hill_to_the_bath_spa_university">How close is Primrose Hill to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_1_bedroom_student_flats_in_primrose_hill,_bath_pp/pm"> <h2>Prices for 1 Bedroom Student Flats in Primrose Hill, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1232 per month </td><td><button className = 'searchButton tableButton' title='1 Bedroom Student Flats in Primrose Hill, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71110")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "1_bedroom_student_flats_in_primrose_hill,_bath__all_bills_inclusive"> <h2>1 Bedroom Student Flats in Primrose Hill, Bath - All Bills Inclusive</h2></a><p>Subscription to an <b>all bills inclusive</b> service for your 1 bedroom student flat in Primrose Hill, Bath, Somerset is a smart choice for students looking to simplify their living arrangements. By opting for an <b>all bills inclusive</b> package with <b>UniBills.com</b>, you can enjoy the convenience of not having to worry about separate utility bills each month. Instead, you can <b>concentrate on your studies</b> and relax in your cozy flat without the added stress of managing multiple bills. <b>UniBills.com</b> offers a hassle-free all inclusive option, covering everything from water, electricity, gas, internet, and even council tax. With this service, you can budget effectively and avoid unexpected costs. Say goodbye to the tedious task of coordinating with different providers and let <b>UniBills.com</b> take care of everything for you. Get a quote from <b>UniBills.com</b> or any accommodation on this website, and experience the benefits of a worry-free and seamless living experience in Primrose Hill.</p><a id = "cheap_1_bedroom_student_flats_in_primrose_hill,_bath"> <h2>Cheap 1 Bedroom Student Flats in Primrose Hill, Bath</h2></a><p><Portlet location="REGION^71110" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "1_bedroom_student_flats_in_primrose_hill,_bath__recently_added"> <h2>1 Bedroom Student Flats in Primrose Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^71110" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "1_bedroom_student_flats_in_primrose_hill,_bath__recently_reduced"> <h2>1 Bedroom Student Flats in Primrose Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71110" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__1_bedroom_flats_in_primrose_hill,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 1 Bedroom Flats in Primrose Hill, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect 1 bedroom flat in the picturesque area of Primrose Hill, <b>Bath</b>, Somerset? Look no further than our property portal, where we specialize in connecting students with their ideal <b>student Flats</b>. With our easy-to-use search filters, you can narrow down your options to find the perfect 1 bedroom flat that meets all your requirements. Whether you are attending the University of <b>Bath</b> or <b>Bath</b> Spa University, we have a wide range of options available in the sought-after Primrose Hill area. Say goodbye to the stress of apartment hunting and let our property portal help you find your dream student flat in <b>Bath</b>.</p><a id = "1_bedroom_student_flats_in_primrose_hill,_bath__private_rental_sector"> <h2>1 Bedroom Student Flats in Primrose Hill, Bath - Private Rental Sector</h2></a><p>Looking for a cozy one-bedroom flat in the charming Primrose Hill area of Bath, Somerset? Look no further! Our selection of <b>1 Bedroom Flats in Primrose Hill, Bath, Somerset, Bath</b> are the perfect option for those seeking a comfortable and convenient living space. With <b>bills included</b> in the rent, you can say goodbye to the hassle of managing multiple payments each month. Each flat is <b>fully furnished</b>, so all you need to do is move in with your personal belongings and start enjoying your new home. Whether you are a student, professional, or couple looking to settle in this desirable location, our <b>1 Bedroom Flats in Primrose Hill, Bath, Somerset, Bath</b> offer everything you need for a hassle-free living experience.</p><a id = "1_bedroom_student_flats_in_primrose_hill,_bath__fully_furnished"> <h2>1 Bedroom Student Flats in Primrose Hill, Bath - Fully Furnished</h2></a><p>Discover the epitome of convenient living with fully furnished 1 Bedroom Flats in Primrose Hill, Bath, Somerset. Situated in the charming city of Bath, these flats offer a perfect blend of style and comfort. Whether you are a student looking for a ready-to-move-in space or a professional seeking a hassle-free accommodation, these flats have everything you need. In Primrose Hill, <b>it is normal for student Flats to be fully furnished furnished</b>, saving you the time and effort of acquiring furniture. The thoughtfully designed interiors feature modern amenities and stylish decor, creating a welcoming ambiance. With easy access to the city center and local amenities, living in Primrose Hill offers a thriving neighborhood with vibrant community spirit. Embrace the convenience and comfort of fully furnished living in the heart of Bath.</p><a id = "how_close_is_primrose_hill_to_the_city_center"> <h2>How close is Primrose Hill to the City Center</h2></a><p><b>Primrose Hill</b> is located approximately 6 <b>miles</b> from <b>Bath city center</b>, making it a convenient and easily accessible destination for visitors looking to explore both the beautiful countryside and the vibrant city life. Situated to the northwest of Bath, <b>Primrose Hill</b> offers stunning views of the surrounding landscape from its elevated position. Whether you prefer a leisurely stroll through the picturesque streets of Bath or a hike up the hill to admire the panoramic vistas, there is something for everyone to enjoy in this part of the UK. With its close proximity to the city center, <b>Primrose Hill</b> is a popular spot for both locals and tourists alike seeking a tranquil retreat amidst the hustle and bustle of urban life.</p><a id = "how_close_is_primrose_hill_to_the_university_of_bath"> <h2>How close is Primrose Hill to the University of Bath</h2></a><p>Primrose Hill is conveniently located near the <b>University of Bath</b>, approximately 2.5 <b>miles</b> away. For students looking to commute to campus, there is a direct <b>bus route</b> that takes around 15-20 minutes depending on traffic. Alternatively, one can reach the university <b>by foot</b> in about 45 minutes, making it a great option for those who enjoy walking or cycling. Driving to the <b>University of Bath</b> from Primrose Hill usually takes around 10-15 minutes, providing a quick and easy option for those with access to a car. Whether you prefer to travel <b>by foot</b>, bus, or car, Primrose Hill's proximity to the <b>University of Bath</b> makes it an ideal location for students looking for a convenient and accessible living arrangement.</p><a id = "how_close_is_primrose_hill_to_the_bath_spa_university"> <h2>How close is Primrose Hill to the Bath Spa University</h2></a><p>Located in the vibrant city of Bath, <b>Bath Spa University</b> is approximately 7 <b>miles</b> away from Primrose Hill. If you prefer to travel <b>by foot</b>, it would take around 2 hours and 30 minutes to reach the university. However, the most convenient way to commute between Primrose Hill and <b>Bath Spa University</b> is <b>by bus</b>. The <b>bus route</b> from Primrose Hill to the university takes about 30 minutes, providing a quick and easy transportation option for students and staff. For those who prefer to drive, the journey <b>by car</b> takes approximately 20 minutes, making it a convenient choice for commuters. Whether you choose to travel <b>by foot</b>, bus, or car, getting to <b>Bath Spa University</b> from Primrose Hill is accessible and efficient, allowing students and staff to easily navigate between the two locations.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In the search for 1 bedroom student flats in Primrose Hill, Bath, it is clear that the options are abundant and diverse. Primrose Hill boasts a vibrant atmosphere with plenty of amenities in close proximity, perfect for students looking for convenience. The availability of one-bedroom flats caters to those seeking privacy and independence while studying. As students navigate through this bustling area, they will find modern and cozy accommodations that fit their needs and budget. The proximity to universities and libraries make Primrose Hill an ideal location for students looking to balance academic and social life. Overall, choosing a 1-bedroom student flat in Primrose Hill, Bath, ensures a comfortable and supportive environment for students to thrive in their studies.</p></>)
};

export default BathPrimroseHillFlat1;