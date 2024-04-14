
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


const  BathHatStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Hat, Bath</h1><p>We have listings for <b>Studio Apartments for Students in Hat, Bath</b> for the academic year 2024. 
<b>Studio Apartments for Students in Hat, Bath</b> are a popular option for students looking for affordable and convenient housing in Bath. These apartments are typically equipped with the necessary amenities for student living and are located in close proximity to universities and other important amenities in the area.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/studio-apartments-for-students-in-hat-bath.png')} alt='Studio Apartments for Students in Hat, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Studio Apartments for Students in Hat, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^61721&type=Studio&beds=1")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Studio Apartments for Students in Hat, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_hat,_bath_pp/pm">Prices for Studio Apartments for Students in Hat, Bath pp/pm</a></li><li><a href = "#studio_apartments_for_students_in_hat,_bath__all_bills_inclusive">Studio Apartments for Students in Hat, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_hat,_bath">Cheap Studio Apartments for Students in Hat, Bath</a></li><li><a href = "#studio_apartments_for_students_in_hat,_bath__recently_added">Studio Apartments for Students in Hat, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_hat,_bath__recently_reduced">Studio Apartments for Students in Hat, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__1_bedroom_studios_in_hat,_bath,_somerset,_bath">Student Accommodation Portal - 1 Bedroom Studios in Hat, Bath, Somerset, Bath</a></li><li><a href = "#studio_apartments_for_students_in_hat,_bath__private_rental_sector">Studio Apartments for Students in Hat, Bath - Private Rental Sector</a></li><li><a href = "#studio_apartments_for_students_in_hat,_bath__fully_furnished">Studio Apartments for Students in Hat, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_hat_to_the_city_center">How close is Hat to the City Center</a></li><li><a href = "#how_close_is_hat_to_the_university_of_bath">How close is Hat to the University of Bath</a></li><li><a href = "#how_close_is_hat_to_the_bath_spa_university">How close is Hat to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_hat,_bath_pp/pm"> <h2>Prices for Studio Apartments for Students in Hat, Bath pp/pm</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1287 per month </td><td><button className = 'searchButton tableButton' title='Studio Apartments for Students in Hat, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^61721")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_hat,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Hat, Bath - All Bills Inclusive</h2></a><p>As a student living in a 1 bedroom studio in Hat, Bath, Somerset, subscribing to an <b>all bills inclusive</b> service like <b>UniBills.com</b> can greatly simplify your life. Instead of worrying about separate bills for electricity, water, internet, and more, you can enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>. With all your bills rolled into one convenient monthly payment, you can <b>concentrate on your studies</b> and not stress about budgeting for various expenses. <b>UniBills.com</b> takes the guesswork out of managing bills, allowing you to enjoy your student life without the added financial burden. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student living experience a whole lot easier. Subscribe to an <b>all bills inclusive</b> service today and enjoy the convenience and peace of mind it brings.</p><a id = "cheap_studio_apartments_for_students_in_hat,_bath"> <h2>Cheap Studio Apartments for Students in Hat, Bath</h2></a><p><Portlet location="REGION^61721" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_hat,_bath__recently_added"> <h2>Studio Apartments for Students in Hat, Bath - Recently Added</h2></a><p><Portlet location="REGION^61721" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_hat,_bath__recently_reduced"> <h2>Studio Apartments for Students in Hat, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61721" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__1_bedroom_studios_in_hat,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 1 Bedroom Studios in Hat, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect <b>1 Bedroom Studios</b> in Hat, <b>Bath</b>, Somerset? Look no further than our property portal! Whether you're attending the University of <b>Bath</b> or <b>Bath</b> Spa University, we have a wide range of <b>student Studios</b> available in this vibrant and historic city. Our user-friendly website makes it easy to search for your ideal accommodation, with detailed listings and high-quality photos to help you make an informed decision. With our help, you can find the perfect <b>1 Bedroom Studios</b> that suit your budget and lifestyle, ensuring a smooth and stress-free transition to student life in <b>Bath</b>.</p><a id = "studio_apartments_for_students_in_hat,_bath__private_rental_sector"> <h2>Studio Apartments for Students in Hat, Bath - Private Rental Sector</h2></a><p>Looking for <b>1 Bedroom Studios in Hat, Bath, Somerset, Bath</b>? Look no further! Our private rental sector offers modern and comfortable living spaces perfect for individuals or couples. Each studio comes <b>fully furnished</b>, so you can move in hassle-free. With <b>bills included</b> in the rent, you can enjoy peace of mind knowing that there won't be any unexpected expenses. Located in the picturesque town of Bath, our studios provide convenient access to local amenities and transport links. Don't miss out on the opportunity to experience stylish and convenient living in the heart of Somerset.</p><a id = "studio_apartments_for_students_in_hat,_bath__fully_furnished"> <h2>Studio Apartments for Students in Hat, Bath - Fully Furnished</h2></a><p>Are you a student looking for accommodation in the beautiful city of Bath, Somerset? Look no further than the fully furnished 1 Bedroom Studios in Hat, Bath. These cozy and modern Studios offer everything you need for a comfortable stay, including a fully equipped kitchen, a spacious bedroom, and a stylish living area. Located in the heart of Bath, these Studios are perfect for students attending the nearby universities or exploring the city's rich history and vibrant culture. With all the essential furniture and appliances provided, it is normal for student Studios to be fully furnished, saving you time and hassle. Don't miss out on the opportunity to live in one of these fantastic Studios and make the most of your time in Bath.</p><a id = "how_close_is_hat_to_the_city_center"> <h2>How close is Hat to the City Center</h2></a><p><b>Hat</b> is conveniently located just a few <b>miles</b> away from <b>Bath city center</b>, making it an ideal destination for those looking to explore the historic city. With a short distance of just a few <b>miles</b> between <b>Hat</b> and <b>Bath city center</b>, travelers can easily access the many attractions, shops, and restaurants t<b>Hat</b> Bath has to offer. Whether you're interested in visiting the iconic Roman Baths, exploring the stunning Bath Abbey, or enjoying a relaxing stroll along the River Avon, <b>Hat</b>'s proximity to the city center makes it a perfect base for your adventures. Additionally, with public transportation options readily available, getting from <b>Hat</b> to <b>Bath city center</b> is both quick and convenient. So, whether you're planning a day trip or an extended stay, staying in <b>Hat</b> provides easy access to all t<b>Hat</b> Bath has to offer.</p><a id = "how_close_is_hat_to_the_university_of_bath"> <h2>How close is Hat to the University of Bath</h2></a><p>The town of Hat is conveniently located close to the prestigious <b>University of Bath</b>, making it a popular choice for students looking for off-campus housing. Situated just a few <b>miles</b> away, the university is easily accessible from Hat <b>by foot</b>, bus, or car. For those who prefer to walk, it takes around 30-45 minutes to reach the university campus from Hat. Alternatively, there is a reliable <b>bus route</b> that connects Hat to the university, offering a convenient and affordable transportation option for students. <b>by car</b>, the journey from Hat to the <b>University of Bath</b> takes approximately 15-20 minutes, depending on traffic. This close proximity allows students living in Hat to easily access the university facilities, while still enjoying the peace and quiet of suburban living.</p><a id = "how_close_is_hat_to_the_bath_spa_university"> <h2>How close is Hat to the Bath Spa University</h2></a><p><b>Bath Spa University</b> is conveniently located near the town of Hat in England, making it easily accessible for students. The distance between Hat and <b>Bath Spa University</b> is approximately 3 <b>miles</b>, which can be easily covered <b>by foot</b>, bus, or car. If you prefer to walk, it would take around an hour to reach the university campus from Hat. For those who prefer public transportation, there is a direct <b>bus route</b> that connects Hat to <b>Bath Spa University</b>, making the journey quick and convenient. <b>by bus</b>, the commute typically takes around 15-20 minutes, depending on traffic. Alternatively, if you have your car, the drive from Hat to the university is relatively short and takes approximately 10-15 minutes. Overall, the close proximity of Hat to <b>Bath Spa University</b> provides students with various transportation options, making it a convenient location for those looking to study or work at the university.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In summary, looking for studio apartments for students in Hat, Bath requires careful consideration of various factors such as location, amenities, and budget. With the demand for student housing on the rise, it is important to start the search early and explore different options to find the best fit. From convenient access to campus to essential facilities like laundry and parking, students should prioritize their needs when choosing a studio apartment. Additionally, considering the rental rates and lease terms can help students make a well-informed decision while staying within their budget. In conclusion, finding a studio apartment in Hat, Bath requires thorough research and planning, but with the right approach, students can secure a comfortable and convenient living space during their academic years.</p></>)
};

export default BathHatStudio1;