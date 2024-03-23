
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './styles-town.css';
import { MdOutlineQueryStats } from "react-icons/md";
import { BsFillHouseFill } from "react-icons/bs";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { useAtomState } from '@zedux/react';
import { filtersAtom} from '../../portal/appState/appState'
import {Portlet} from '../../portlet/portlet'
import {useNavigate} from 'react-router-dom'


const  BathAvonParkStudio1 = () => 
{    
    const navigate = useNavigate();
    const [buttonClicked, setButtonClicked] = useState(false);
    const [filters, setFilters] = useAtomState(filtersAtom);              

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

    return (<><h1>Studio Apartments for Students in Avon Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-avon-park-bath.png')} alt='Studio Apartments for Students in Avon Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_avon_park,_bath">Prices for Studio Apartments for Students in Avon Park, Bath</a></li><li><a href = "#studio_apartments_for_students_in_avon_park,_bath__all_bills_inclusive">Studio Apartments for Students in Avon Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_avon_park,_bath">Cheap Studio Apartments for Students in Avon Park, Bath</a></li><li><a href = "#studio_apartments_for_students_in_avon_park,_bath__recently_added">Studio Apartments for Students in Avon Park, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_avon_park,_bath__recently_reduced">Studio Apartments for Students in Avon Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_avon_park,_bath"> <h2>Prices for Studio Apartments for Students in Avon Park, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1309 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Avon Park, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_avon_park,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Avon Park, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for convenient and stress-free living accommodations in Avon Park, Bath, Somerset? Look no further than subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b> for your 1-bedroom student studio. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option that covers your rent, utilities, internet, and other amenities in one fixed monthly payment. By opting for this service, you can <b>concentrate on your studies</b> and personal growth without worrying about managing multiple bills or unexpected expenses popping up. <b>UniBills.com</b> offers transparent pricing and budget-friendly options, allowing you to plan ahead and focus on what truly matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website today to experience the convenience and peace of mind that an <b>all bills inclusive</b> service can provide.</p><a id = "cheap_studio_apartments_for_students_in_avon_park,_bath"> <h2>Cheap Studio Apartments for Students in Avon Park, Bath</h2></a><p><Portlet location="REGION^71091" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_avon_park,_bath__recently_added"> <h2>Studio Apartments for Students in Avon Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71091" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_avon_park,_bath__recently_reduced"> <h2>Studio Apartments for Students in Avon Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71091" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for studio apartments for students in Avon Park, Bath can be an exciting yet challenging task. With its prime location near the University of Bath, students are drawn to the convenience and vibrant atmosphere the area offers. When searching for the perfect studio apartment, it is essential to consider factors such as budget, proximity to campus, amenities, and safety. Additionally, students should explore different options, visit properties in person, and carefully read rental agreements before making a decision. Overall, Avon Park boasts a variety of studio apartments suitable for student living, with modern facilities, cozy interiors, and a welcoming community. By conducting thorough research and being proactive in the search process, students can find the ideal studio apartment that meets their needs and enhances their university experience in Avon Park, Bath.</p></>)
};

export default BathAvonParkStudio1;