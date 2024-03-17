
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


const  BathKingswayStudio1 = () => 
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

    return (<><h1>Studio Apartments for Students in Kingsway, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/studio-apartments-for-students-in-kingsway-bath.png')} alt='Studio Apartments for Students in Kingsway, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_studio_apartments_for_students_in_kingsway,_bath">Prices for Studio Apartments for Students in Kingsway, Bath</a></li><li><a href = "#studio_apartments_for_students_in_kingsway,_bath__all_bills_inclusive">Studio Apartments for Students in Kingsway, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_studio_apartments_for_students_in_kingsway,_bath">Cheap Studio Apartments for Students in Kingsway, Bath</a></li><li><a href = "#studio_apartments_for_students_in_kingsway,_bath__recently_added">Studio Apartments for Students in Kingsway, Bath - Recently Added</a></li><li><a href = "#studio_apartments_for_students_in_kingsway,_bath__recently_reduced">Studio Apartments for Students in Kingsway, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_studio_apartments_for_students_in_kingsway,_bath"> <h2>Prices for Studio Apartments for Students in Kingsway, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1100 per month </td><td><button className = 'searchButton' title='View our Studio Apartments for Students in Kingsway, Bath' onClick={() => routeToPortal("?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71102")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "studio_apartments_for_students_in_kingsway,_bath__all_bills_inclusive"> <h2>Studio Apartments for Students in Kingsway, Bath - All Bills Inclusive</h2></a><p>When you're a student living in a 1 bedroom studio in Kingsway, Bath, Somerset, the last thing you want to worry about are bills piling up and taking away your focus from your studies. That's where an "<b>all bills inclusive</b>" service like <b>UniBills.com</b> can come in handy. By opting for this service, you can enjoy the hassle-free, all-inclusive option provided by <b>UniBills.com</b>, which covers all your utilities in one convenient package. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social activities without the stress of managing multiple bills. Say goodbye to the headache of budgeting for gas, electricity, water, and internet separately, and instead, streamline your living expenses with an all-inclusive solution. Get a quote from <b>UniBills.com</b> or any accommodation on this website to simplify your student life and make the most of your time in Bath.</p><a id = "cheap_studio_apartments_for_students_in_kingsway,_bath"> <h2>Cheap Studio Apartments for Students in Kingsway, Bath</h2></a><p><Portlet location="REGION^71102" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_kingsway,_bath__recently_added"> <h2>Studio Apartments for Students in Kingsway, Bath - Recently Added</h2></a><p><Portlet location="REGION^71102" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "studio_apartments_for_students_in_kingsway,_bath__recently_reduced"> <h2>Studio Apartments for Students in Kingsway, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71102" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for studio apartments for students in Kingsway, Bath can be an exciting and rewarding experience. With its convenient location close to local amenities and the University of Bath campus, students can enjoy a comfortable and convenient living situation. Studio apartments offer the perfect balance of privacy and independence, making them an ideal choice for students looking for their own space. Additionally, the variety of studio apartments available in Kingsway cater to different preferences and budgets, ensuring that students can find a place that suits their needs. Overall, living in a studio apartment in Kingsway provides students with a peaceful and convenient environment to focus on their studies while still being close to everything Bath has to offer.</p></>)
};

export default BathKingswayStudio1;