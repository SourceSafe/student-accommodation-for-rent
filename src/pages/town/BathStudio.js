
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


const  BathStudio = () => 
{    
    const navigate = useNavigate();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [filters, setFilters] = useAtomState(filtersAtom);              
    const [isMobile,setIsMobile] = useState();    

    const routeToPortal = (params ) => {                  
        const queryParameters = new URLSearchParams(params)
        const town= queryParameters.get("t  ownLocationId");
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
  


    return (<><h1>Studio Apartments for Students in Bath</h1><p>We have listings for <b>Studio Apartments for Students in Bath</b> for the academic year 2024. 
<b>Studio Apartments for Students in Bath</b> offer convenient and affordable housing options for students studying in the city. These apartments are equipped with essential amenities and are located close to universities and public transportation for easy access.</p><div style = {{display:'flex', flexDirection:'row'}}>{!isMobile && <img style={{ width: ' 85%', marginTop: '30px' }} src={require('../images/studio-apartments-for-students-in-bath.png')} alt='Studio Apartments for Students in Bath'/>}<div style = {{ width:'100%', marginLeft: '10px', marginTop: '0px', display: 'flex', justifyContent:'center'}}><ul><h2 style = {{marginBottom:'5px'}}>View Available Properties in our Portal</h2><button className = 'searchButton mainViewButton' title='Studio Apartments for Students in Bath' onClick={() => routeToPortal("?townLocationIdId=REGION^116&areaLocationId=&type=Studio&beds=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>Studio Apartments for Students in Bath</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon mainViewButton' size ={25}></BsFillHouseFill></div></div ></button><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_bath_pp/pm">Prices for Studio Apartments for Students in Bath pp/pm</a></li><li><a href = "#studio_apartments_for_students_in_bath__all_bills_inclusive">Studio Apartments for Students in Bath - All Bills Inclusive</a></li><li><a href = "#prices_for_studio_apartments_for_students_in_bath__by_number_of_bedrooms_pp/pm">Prices for Studio Apartments for Students in Bath - By Number of Bedrooms pp/pm</a></li><li><a href = "#prices_for_studio_apartments_for_students_in_bath__by_student_location_pp/pm">Prices for Studio Apartments for Students in Bath - By Student Location pp/pm</a></li><li><a href = "#studio_apartments_for_students_in_bath__private_rental_houses">Studio Apartments for Students in Bath - Private Rental Houses</a></li><li><a href = "#furnished_studios_in_bath">Furnished Studios in Bath</a></li><li><a href = "#bath_student_studio_portal">Bath Student Studio Portal</a></li><li><a href = "#bath_student_studios_self_catering">Bath Student Studios Self Catering</a></li><li><a href = "#find_student_studios_close_to__bath_city_center">Find Student Studios close to  Bath City Center</a></li><li><a href = "#find_student_studios_near_the_universities">Find Student Studios near the Universities</a></li><li><a href = "#cheapest_studio_apartments_for_students_in_bath">Cheapest Studio Apartments for Students in Bath</a></li><li><a href = "#studio_apartments_for_students_in_bath__recently_added">Studio Apartments for Students in Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_bath__recently_reduced">Studio Apartments for Students in Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_bath_pp/pm"> <h2>Prices for Studio Apartments for Students in Bath pp/pm</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1224 per month </td><td><button className = 'searchButton tableButton' title='Studio Apartments for Students in Bath' onClick={() => routeToPortal("?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Bath - All Bills Inclusive</h2></a><p>When living in a student studio in Bath, the last thing you want to worry about is managing multiple bills. That's where <b>UniBills.com</b> comes in. By subscribing to their <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. This means all your utilities, internet, and even contents insurance are taken care of in one monthly payment, allowing you to <b>concentrate on your studies</b> without the stress of managing different bills. Not only does this make budgeting easier, but it also gives you peace of mind knowing that everything is sorted. Say goodbye to bill-related headaches and hello to a more convenient living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website to simplify your student life in Bath today.</p><a id = "prices_for_studio_apartments_for_students_in_bath__by_number_of_bedrooms_pp/pm"> <h2>Prices for Studio Apartments for Students in Bath - By Number of Bedrooms pp/pm</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton tableButton' title='Studio Apartments' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'student-accommodation-in-bath-1-bedroom-studios' title  = 'View Key Statistics for Studio Apartments'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£795 </td><td>£1690 </td><td>£1224 </td><td>£184 </td><td>£393 </td><td>£284 </td></tr></table></p><a id = "prices_for_studio_apartments_for_students_in_bath__by_student_location_pp/pm"> <h2>Prices for Studio Apartments for Students in Bath - By Student Location pp/pm</h2></a><p><table><tr><th>Student Location </th><th>Properties </th><th>More Info </th><th>Count </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Oldfield Park, Bath, Somerset </td><td><button className = 'searchButton tableButton' title='Oldfield Park, Bath, Somersets' onClick={() => routeToPortal("?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'><div className = 'searchButtonTitle'>View Properties</div><div className = 'searchButtonIcon'><BsFillHouseFill className = 'searchButtonIcon tableButton' size ={17}></BsFillHouseFill></div></div ></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'studio-apartments-for-students-in-oldfield-park-bath' title  = 'View Key Statistics for Oldfield Park, Bath, Somersets'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>23 </td><td>795 </td><td>1690 </td><td>1250 </td><td>184 </td><td>393 </td><td>290 </td></tr></table></p><a id = "studio_apartments_for_students_in_bath__private_rental_houses"> <h2>Studio Apartments for Students in Bath - Private Rental Houses</h2></a><p>Are you looking for a private student house in Bath? Look no further! Our selection includes a variety of 2 to 10 bedroom houses, perfect for students looking to live off-campus. We also offer <b>studio apartment</b>s for those seeking a more intimate living space. All our properties come <b>fully furnished</b>, making moving in a breeze. Additionally, bills are included in the rent, offering you a hassle-free living experience. So, whether you're looking for a cozy studio or a spacious house for you and your friends, we have the perfect private rental option for you in Bath.</p><a id = "furnished_studios_in_bath"> <h2>Furnished Studios in Bath</h2></a><p>Here in Bath, all student studios are <b>fully furnished</b>, making your transition to student living easier and more convenient. It is normal for student houses to be <b>fully furnished</b>, ensuring that you have everything you need from the moment you move in. From beds and desks to sofas and kitchen appliances, our student studios come equipped with all the essentials to make your stay comfortable and hassle-free. So, whether you're studying for exams, relaxing with friends, or cooking up a storm in the kitchen, you can do so in style and comfort. Say goodbye to the hassle of buying and moving furniture – at our student studios in Bath, everything you need is already in place.</p><a id = "bath_student_studio_portal"> <h2>Bath Student Studio Portal</h2></a><p>Are you a student looking for a comfortable and convenient studio in Bath? Look no further! Our property portal specializes in helping students find their ideal living space in the charming neighborhood of <b><b>Oldfield Park</b></b>, located close to both the <b><b>University of Bath</b></b> and <b><b>Bath Spa University</b></b>. With a range of options available, from cozy studios to modern apartments, you're sure to find the perfect place to call home during your studies. <b><b>Oldfield Park</b></b> is a vibrant area filled with amenities, including shops, cafes, and green spaces, making it an ideal location for students looking for a balance between study and leisure.</p><a id = "bath_student_studios_self_catering"> <h2>Bath Student Studios Self Catering</h2></a><p>Living in self-catering student studios in Bath offers students a comfortable and independent living experience []. These modern and well-equipped studios provide the perfect space for students to study and relax []. With a fully-equipped kitchenette, students have the freedom to cook their own meals and avoid the hassle of dining hall schedules []. The convenient location of these studios allows students to easily navigate the city and explore all that Bath has to offer, from its historic architecture to its vibrant cultural scene []. Additionally, living in a self-catering studio promotes a sense of responsibility and self-sufficiency, as students learn valuable life skills such as budgeting, meal planning, and time management []. Overall, choosing to live in a self-catering student studio in Bath provides a balance of independence and community, creating a fulfilling living experience for students [].</p><a id = "find_student_studios_close_to__bath_city_center"> <h2>Find Student Studios close to  Bath City Center</h2></a><p>Are you searching for student accommodation in <b>Bath</b>, ideally located near the city center? Look no further than our portal Student Accommodation For Rent, where you can discover a range of stylish studios perfectly suited for students. <b>Bath</b>, known for its picturesque scenery and historic charm, offers a vibrant student lifestyle with a variety of cafes, restaurants, and cultural attractions right at your doorstep. Our listings include accommodations in sought-after areas such as <b>Oldfield Park</b>, just a few <b>miles</b> away from <b>Bath</b> city center. Whether you prefer modern amenities or classic architecture, you're sure to find the ideal studio that suits your preferences and budget. Don't miss the opportunity to secure your ideal student studio in <b>Bath</b> through our user-friendly portal.</p><a id = "find_student_studios_near_the_universities"> <h2>Find Student Studios near the Universities</h2></a><p>Are you a student looking for convenient housing near the Universities in Bath? Look no further than the vibrant neighborhood of <b>Oldfield Park</b>, located just a few <b>miles</b> away from both the <b>University of Bath</b> and <b>Bath Spa University</b>. Student studios in <b>Oldfield Park</b> offer easy access to campus either <b>by foot</b>, bus, or car, making it a perfect choice for those looking to balance academic commitment with a bustling social scene. With cozy cafes, quirky shops, and beautiful green spaces just a stone's throw away, living in <b>Oldfield Park</b> provides the perfect mix of convenience and charm. Don't miss out on the opportunity to immerse yourself in student life in this lively and welcoming community.</p><a id = "cheapest_studio_apartments_for_students_in_bath"> <h2>Cheapest Studio Apartments for Students in Bath</h2></a><p><Portlet location="All" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bath__recently_added"> <h2>Studio Apartments for Students in Bath - Recently Added</h2></a><p><Portlet location="All" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_bath__recently_reduced"> <h2>Studio Apartments for Students in Bath - Recently Reduced</h2></a><p><Portlet location="All" town="REGION^116" beds="" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "the_conclusion"> <h2>The Conclusion</h2></a><p>After a thorough search for studio apartments for students in Bath, it is evident that there are plenty of options available for those looking for a cozy and convenient living space. [] Bath boasts a variety of studio apartments that cater to different budgets and preferences, ranging from modern and stylish studios to more traditional and homely ones. Students looking for a place to call their own can find studios located in the heart of the city or in more peaceful residential areas, offering a diverse range of choices. [] With amenities such as laundry facilities, bike storage, and proximity to the University of Bath and Bath Spa University, students can easily find a studio that suits their needs. Overall, the search for studio apartments in Bath provides students with ample opportunities to find their ideal living space that balances comfort, convenience, and affordability. [] Whether it be a compact studio with modern furnishings or a more spacious studio with a touch of character, students in Bath can find the perfect place to focus on their studies and enjoy the vibrant city life.</p></>)
};

export default BathStudio;