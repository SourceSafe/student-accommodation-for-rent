
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


const  BathRaglandsFlat1 = () => 
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

    return (<><h1>1 Bedroom Student Flats in Raglands, Bath</h1><p>We have listings for <b>1 Bedroom Student Flats in Raglands, Bath</b> for the academic year 2024.

Located in the vibrant city of Bath, 1 Bedroom Student Flats in Raglands offer comfortable and convenient living spaces for students. These flats are perfect for those looking for a cozy and peaceful environment to focus on their studies, while still being close to all the amenities and attractions that Bath has to offer.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/1-bedroom-student-flats-in-raglands-bath.png')} alt='1 Bedroom Student Flats in Raglands, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='1 Bedroom Student Flats in Raglands, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71111&type=Flat&beds=1")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>1 Bedroom Student Flats in Raglands, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_1_bedroom_student_flats_in_raglands,_bath_pp/pm">Prices for 1 Bedroom Student Flats in Raglands, Bath pp/pm</a></li><li><a href = "#1_bedroom_student_flats_in_raglands,_bath__all_bills_inclusive">1 Bedroom Student Flats in Raglands, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_1_bedroom_student_flats_in_raglands,_bath">Cheap 1 Bedroom Student Flats in Raglands, Bath</a></li><li><a href = "#1_bedroom_student_flats_in_raglands,_bath__recently_added">1 Bedroom Student Flats in Raglands, Bath - Recently Added</a></li><li><a href = "#1_bedroom_student_flats_in_raglands,_bath__recently_reduced">1 Bedroom Student Flats in Raglands, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__1_bedroom_flats_in_raglands,_bath,_somerset,_bath">Student Accommodation Portal - 1 Bedroom Flats in Raglands, Bath, Somerset, Bath</a></li><li><a href = "#1_bedroom_student_flats_in_raglands,_bath__private_rental_sector">1 Bedroom Student Flats in Raglands, Bath - Private Rental Sector</a></li><li><a href = "#1_bedroom_student_flats_in_raglands,_bath__fully_furnished">1 Bedroom Student Flats in Raglands, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_raglands_to_the_city_center">How close is Raglands to the City Center</a></li><li><a href = "#how_close_is_raglands_to_the_university_of_bath">How close is Raglands to the University of Bath</a></li><li><a href = "#how_close_is_raglands_to_the_bath_spa_university">How close is Raglands to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_1_bedroom_student_flats_in_raglands,_bath_pp/pm"> <h2>Prices for 1 Bedroom Student Flats in Raglands, Bath pp/pm</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1232 per month </td><td><button className = 'searchButton tableButton' title='1 Bedroom Student Flats in Raglands, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71111")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "1_bedroom_student_flats_in_raglands,_bath__all_bills_inclusive"> <h2>1 Bedroom Student Flats in Raglands, Bath - All Bills Inclusive</h2></a><p>If you're a student living in Bath, Somerset, specifically in a 1-bedroom flat in Raglands, you know how important it is to manage your finances effectively. With the demands of university life, the last thing you want to worry about is budgeting for bills such as utilities and internet. That's where <b>UniBills.com</b> comes in with their <b>all bills inclusive</b> service. By subscribing to this convenient option, you can <b>concentrate on your studies</b> without the stress of managing multiple bills. <b>UniBills.com</b> takes care of everything, allowing you to enjoy the hassle-free, all-inclusive package they provide. Say goodbye to the tedious task of splitting costs with flatmates or dealing with unexpected expenses. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and simplify your student living experience in Bath.</p><a id = "cheap_1_bedroom_student_flats_in_raglands,_bath"> <h2>Cheap 1 Bedroom Student Flats in Raglands, Bath</h2></a><p><Portlet location="REGION^71111" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "1_bedroom_student_flats_in_raglands,_bath__recently_added"> <h2>1 Bedroom Student Flats in Raglands, Bath - Recently Added</h2></a><p><Portlet location="REGION^71111" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "1_bedroom_student_flats_in_raglands,_bath__recently_reduced"> <h2>1 Bedroom Student Flats in Raglands, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71111" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__1_bedroom_flats_in_raglands,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 1 Bedroom Flats in Raglands, Bath, Somerset, Bath</h2></a><p>Are you a student looking for the perfect <b>1 Bedroom Flats</b> in Raglands, <b>Bath</b>, Somerset? Look no further! Our property portal is here to help you find the ideal student flat in the vibrant city of <b>Bath</b>. Whether you're attending the University of <b>Bath</b> or <b>Bath</b> Spa University, our extensive listings make it easy to find a comfortable and convenient living space. Raglands, located in the heart of <b>Bath</b>, is a popular area among students, offering a great mix of amenities and a lively atmosphere. With our user-friendly search filters, you can easily narrow down your options and find the perfect 1 Bedroom Flat that meets your requirements.</p><a id = "1_bedroom_student_flats_in_raglands,_bath__private_rental_sector"> <h2>1 Bedroom Student Flats in Raglands, Bath - Private Rental Sector</h2></a><p>Looking for a cozy and convenient place to rent in Raglands, Bath, Somerset? Look no further than the <b>1 Bedroom Flats in Raglands, Bath, Somerset, Bath</b>. These flats are the perfect option for individuals seeking a private rental sector with all the comforts of home. Each flat comes <b>fully furnished</b>, making your move-in process a breeze. Plus, with <b>bills included</b> in the rent, you can rest easy knowing that your monthly expenses are taken care of. Whether you're a student, young professional, or simply looking for a comfortable place to call home, the <b>1 Bedroom Flats in Raglands, Bath, Somerset, Bath</b> are a great choice. Don't miss out on this fantastic opportunity to rent in a prime location with all the amenities you need.</p><a id = "1_bedroom_student_flats_in_raglands,_bath__fully_furnished"> <h2>1 Bedroom Student Flats in Raglands, Bath - Fully Furnished</h2></a><p>Explore the charm of Bath, Somerset by residing in one of the fully furnished 1 Bedroom Flats in Raglands, Bath. These flats offer the perfect blend of comfort and style, ideal for students and professionals alike. Situated in a prime location, residents can enjoy easy access to the city center along with beautiful views of the surrounding area. It is normal for student Flats to be fully furnished, meaning you can move in hassle-free and start enjoying your new home right away. With modern amenities and tasteful décor, these flats provide a cozy retreat after a busy day exploring all that Bath has to offer. Experience the convenience and luxury of fully furnished living in the heart of Bath at Raglands.</p><a id = "how_close_is_raglands_to_the_city_center"> <h2>How close is Raglands to the City Center</h2></a><p><b>Raglands</b> is conveniently located just a few <b>miles</b> away from <b>Bath city center</b>, making it a perfect destination for those looking to explore the historic city while staying in a peaceful countryside setting. The short distance allows guests at <b>Raglands</b> to easily access all the attractions and amenities that Bath has to offer, such as the iconic Roman Baths, beautiful Georgian architecture, and boutique shops and restaurants. Whether you're looking to immerse yourself in the cultural richness of Bath or simply relax in a tranquil environment, <b>Raglands</b> provides the best of both worlds. With only a short drive separating <b>Raglands</b> from the bustling city center, guests can enjoy the best of both worlds during their stay.</p><a id = "how_close_is_raglands_to_the_university_of_bath"> <h2>How close is Raglands to the University of Bath</h2></a><p>Raglands is conveniently located close to the <b>University of Bath</b>, making it an ideal housing option for students looking to be near campus. Situated just a few <b>miles</b> away, the university is easily accessible both <b>by foot</b> and <b>by bus</b> from Raglands. The campus is just a short bus ride away, with the <b>bus route</b> conveniently passing by the student accommodation. For those who prefer to drive, the journey to the <b>University of Bath</b> is also quick and straightforward. This proximity allows students to easily access campus facilities, attend lectures, and participate in university activities without the hassle of a long commute. Being so close to campus, Raglands offers students the best of both worlds – a peaceful and comfortable living environment while still being within easy reach of the university.</p><a id = "how_close_is_raglands_to_the_bath_spa_university"> <h2>How close is Raglands to the Bath Spa University</h2></a><p>Raglands is conveniently located just a few <b>miles</b> away from <b>Bath Spa University</b>, making it an ideal accommodation choice for students. Students can easily reach the university <b>by foot</b>, as it is approximately a 20-minute walk. Additionally, there is a convenient <b>bus route</b> that connects Raglands to <b>Bath Spa University</b>, offering a quick and cost-effective transportation option for those who prefer not to walk. For those with access to a car, the university is just a short drive away, making commuting to and from campus a breeze. Whether you prefer to travel <b>by foot</b>, bus, or car, Raglands' close proximity to <b>Bath Spa University</b> ensures that you can easily navigate between the two locations.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>In summary, if you are a student searching for a 1-bedroom flat in the vibrant area of Raglands, Bath, you are in luck. With a variety of options available, ranging from modern apartments to cozy studios, there is something to suit every taste and budget. The convenient location close to universities and amenities makes Raglands a prime choice for students. By choosing a 1-bedroom flat in this sought-after area, you can enjoy a comfortable living space while maintaining a study-life balance. In conclusion, Raglands offers a range of appealing 1-bedroom flats for students, providing a perfect blend of convenience and comfort in a lively and bustling neighborhood. Don't miss out on the opportunity to secure your ideal accommodation in this popular student-friendly area.</p></>)
};

export default BathRaglandsFlat1;