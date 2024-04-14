
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


const  BathLocksbrookHouse9 = () => 
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

    return (<><h1>9 Bedroom Student Houses in Locksbrook, Bath</h1><p>We have listings for <b>9 Bedroom Student Houses in Locksbrook, Bath</b> for the academic year 2024. 

<b>9 Bedroom Student Houses in Locksbrook, Bath</b> are perfect for large groups of students looking for spacious and comfortable accommodation in Bath. These houses typically offer ample living space, multiple bathrooms, and are located in a convenient location for easy access to the University of Bath and local amenities.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/9-bedroom-student-houses-in-locksbrook-bath.png')} alt='9 Bedroom Student Houses in Locksbrook, Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='9 Bedroom Student Houses in Locksbrook, Bath' onClick={() => routeToPortal("?townLocationId=REGION^116&areaLocationId=REGION^71104&type=House&beds=9")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>9 Bedroom Student Houses in Locksbrook, Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_9_bedroom_student_houses_in_locksbrook,_bath_pp/pm">Prices for 9 Bedroom Student Houses in Locksbrook, Bath pp/pm</a></li><li><a href = "#9_bedroom_student_houses_in_locksbrook,_bath__all_bills_inclusive">9 Bedroom Student Houses in Locksbrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_9_bedroom_student_houses_in_locksbrook,_bath">Cheap 9 Bedroom Student Houses in Locksbrook, Bath</a></li><li><a href = "#9_bedroom_student_houses_in_locksbrook,_bath__recently_added">9 Bedroom Student Houses in Locksbrook, Bath - Recently Added</a></li><li><a href = "#9_bedroom_student_houses_in_locksbrook,_bath__recently_reduced">9 Bedroom Student Houses in Locksbrook, Bath - Recently Reduced</a></li><li><a href = "#student_accommodation_portal__9_bedroom_houses_in_locksbrook,_bath,_somerset,_bath">Student Accommodation Portal - 9 Bedroom Houses in Locksbrook, Bath, Somerset, Bath</a></li><li><a href = "#9_bedroom_student_houses_in_locksbrook,_bath__private_rental_sector">9 Bedroom Student Houses in Locksbrook, Bath - Private Rental Sector</a></li><li><a href = "#9_bedroom_student_houses_in_locksbrook,_bath__fully_furnished">9 Bedroom Student Houses in Locksbrook, Bath - Fully Furnished</a></li><li><a href = "#how_close_is_locksbrook_to_the_city_center">How close is Locksbrook to the City Center</a></li><li><a href = "#how_close_is_locksbrook_to_the_university_of_bath">How close is Locksbrook to the University of Bath</a></li><li><a href = "#how_close_is_locksbrook_to_the_bath_spa_university">How close is Locksbrook to the Bath Spa University</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_9_bedroom_student_houses_in_locksbrook,_bath_pp/pm"> <h2>Prices for 9 Bedroom Student Houses in Locksbrook, Bath pp/pm</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£670 per month </td><td><button className = 'searchButton tableButton' title='9 Bedroom Student Houses in Locksbrook, Bath' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^71104")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "9_bedroom_student_houses_in_locksbrook,_bath__all_bills_inclusive"> <h2>9 Bedroom Student Houses in Locksbrook, Bath - All Bills Inclusive</h2></a><p>If you’re a student living in a 9-bedroom house in Locksbrook, Bath, Somerset, opting for an <b>all bills inclusive</b> service with <b>UniBills.com</b> is a smart choice. By subscribing to this convenient service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, allowing you to <b>concentrate on your studies</b> without worrying about managing multiple bills. With <b>UniBills.com</b> taking care of utilities such as gas, electricity, water, and internet, you can simplify your life and budget effectively. This stress-free arrangement also ensures that there are no surprise expenses, making it easier for you to plan your finances. So, why not make your student life easier and more comfortable? Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the benefits of an <b>all bills inclusive</b> service.</p><a id = "cheap_9_bedroom_student_houses_in_locksbrook,_bath"> <h2>Cheap 9 Bedroom Student Houses in Locksbrook, Bath</h2></a><p><Portlet location="REGION^71104" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_houses_in_locksbrook,_bath__recently_added"> <h2>9 Bedroom Student Houses in Locksbrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71104" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "9_bedroom_student_houses_in_locksbrook,_bath__recently_reduced"> <h2>9 Bedroom Student Houses in Locksbrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71104" town="REGION^116" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "student_accommodation_portal__9_bedroom_houses_in_locksbrook,_bath,_somerset,_bath"> <h2>Student Accommodation Portal - 9 Bedroom Houses in Locksbrook, Bath, Somerset, Bath</h2></a><p>Looking for spacious <b>9 Bedroom Houses</b> in Locksbrook, <b>Bath</b>, Somerset, ideal for students attending the University of <b>Bath</b> or <b>Bath</b> Spa University? Our property portal is here to help you find the perfect student accommodation. Located in the vibrant city of <b>Bath</b>, these properties offer ample space for shared living, study rooms, and communal areas, making it perfect for large groups of friends or student societies. With easy access to campus and local amenities, these houses in Locksbrook provide a comfortable and convenient living environment for students. Don't miss out on the opportunity to secure one of these sought-after properties through our user-friendly portal.</p><a id = "9_bedroom_student_houses_in_locksbrook,_bath__private_rental_sector"> <h2>9 Bedroom Student Houses in Locksbrook, Bath - Private Rental Sector</h2></a><p>Looking for a spacious and convenient living arrangement in Bath? Look no further than the <b>9 Bedroom Houses in Locksbrook, Bath, Somerset, Bath</b>. These properties offer the perfect blend of comfort and practicality, with all the amenities you need for a stress-free living experience. Each house is <b>fully furnished</b>, so all you need to do is move in and make it your own. What's more, bills are included in the rent, so you can rest easy knowing that your utilities are taken care of. Whether you're a student looking for a place to share with friends or a professional seeking a large property for a group, these 9 Bedroom Houses in Locksbrook tick all the boxes. Don't miss out on the opportunity to call one of these stunning houses your home.</p><a id = "9_bedroom_student_houses_in_locksbrook,_bath__fully_furnished"> <h2>9 Bedroom Student Houses in Locksbrook, Bath - Fully Furnished</h2></a><p>Looking for a spacious and comfortable living arrangement in Locksbrook, Bath, Somerset? Look no further than <b>fully furnished 9 Bedroom Houses in Locksbrook, Bath, Somerset, Bath</b>. These houses are ideal for students seeking a convenient and hassle-free living experience. With all nine bedrooms fully furnished, including beds, desks, and storage units, tenants can move in and feel right at home without the stress of furnishing the space themselves. In Locksbrook, Bath, Somerset, Bath, it is normal for student houses to be fully furnished, providing a practical solution for busy students who prioritize convenience and comfort. Additionally, these houses often feature modern amenities such as spacious common areas, fully equipped kitchens, and laundry facilities, making communal living a breeze. Don't miss out on the opportunity to live in a fully furnished 9 Bedroom House in Locksbrook, Bath, Somerset, Bath – it's the ultimate in student living.</p><a id = "how_close_is_locksbrook_to_the_city_center"> <h2>How close is Locksbrook to the City Center</h2></a><p><b>Locksbrook</b> is conveniently located just a stone's throw away from <b>Bath city center</b>, making it the perfect place to stay for those looking to experience all that this historic city has to offer. Situated just a few <b>miles</b> from the bustling center of Bath, <b>Locksbrook</b> provides easy access to popular attractions such as the Roman Baths, Thermae Bath Spa, and the iconic Pulteney Bridge. Whether you're interested in exploring the city's rich history, shopping at the vibrant markets, or indulging in delicious cuisine at one of the many restaurants and cafes, <b>Locksbrook</b>'s close proximity to <b>Bath city center</b> ensures that you can make the most of your stay without having to travel far. With its convenient location and easy access to public transportation, <b>Locksbrook</b> is the ideal base for your visit to Bath.</p><a id = "how_close_is_locksbrook_to_the_university_of_bath"> <h2>How close is Locksbrook to the University of Bath</h2></a><p>Locksbrook is conveniently located just a stone's throw away from the <b>University of Bath</b>, making it an ideal accommodation choice for students. Situated merely 0.5 <b>miles</b> from the university campus, Locksbrook is easily accessible <b>by foot</b>, offering a quick and pleasant stroll for those who prefer to walk. For those in a hurry or looking to save time, the property is also well-connected <b>by bus</b>, with a direct <b>bus route</b> passing by the university. <b>by bus</b>, the journey takes just a few minutes, providing a convenient transportation option for students. Additionally, for those who prefer to drive, Locksbrook is only a short distance from the <b>University of Bath</b>, making it an ideal location for students who wish to commute <b>by car</b>. With its close proximity to the university and easy access <b>by foot</b>, bus, or car, Locksbrook offers a convenient and well-connected living environment for students.</p><a id = "how_close_is_locksbrook_to_the_bath_spa_university"> <h2>How close is Locksbrook to the Bath Spa University</h2></a><p>Locksbrook is conveniently located just 1.5 <b>miles</b> away from <b>Bath Spa University</b>, making it easily accessible for students. The university can be reached in just a short 20-minute walk, or even quicker by hopping on the bus. The <b>bus route</b> between Locksbrook and <b>Bath Spa University</b> is straightforward and frequent, providing a reliable mode of transportation for students. For those who prefer to drive, the university is just a 5-minute car journey away. Whether you choose to travel <b>by foot</b>, bus, or car, getting to <b>Bath Spa University</b> from Locksbrook is a breeze. Its close proximity to the university makes Locksbrook an ideal location for students looking for convenience and accessibility.</p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>When searching for a 9-bedroom student house in Locksbrook, Bath, there are a few key factors to consider. Location is crucial, as you'll want to be close to campus, amenities, and transportation. Locksbrook offers a great balance of a peaceful residential area while still being conveniently located near the University of Bath. It's important to ensure the property has enough space for all housemates to live comfortably, study, and socialize. Additionally, amenities like a spacious kitchen, communal areas, and outdoor space are vital for a thriving student household. Rent affordability and inclusive bills are also essential for budgeting purposes. Overall, finding the perfect 9-bedroom student house in Locksbrook, Bath will provide a comfortable and convenient living situation for you and your housemates.</p></>)
};

export default BathLocksbrookHouse9;