
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


const  BathBathSpaHouse2 = () => 
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

    return (<><h1>Shared 2 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 2 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 2 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 2 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 2 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 2 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 2 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 2 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£1170 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=2&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Save yourself the stress of managing multiple utility bills and expenses by opting for an <b>all bills inclusive</b> service for your 2 bedroom student house in Bath Spa, Bath, Somerset. <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b> without worrying about organizing payments for electricity, water, internet, and other essentials. With an <b>all bills inclusive</b> package, you can enjoy the hassle-free convenience of having all your bills taken care of in one simple payment each month. <b>UniBills.com</b> ensures that you have access to all the necessary utilities without the hassle of dealing with multiple providers. Instead of juggling various bills and due dates, you can streamline your living experience and focus on your academic pursuits. Get a quote from <b>UniBills.com</b> or any accommodation on this website to simplify your student life and enjoy the benefits of an all-inclusive living arrangement.</p><a id = "cheap_shared_2_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 2 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 2 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 2 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="2" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 2-bedroom houses for students in Bath Spa, Bath can be an exciting yet challenging endeavor. With its picturesque surroundings and vibrant student community, Bath offers a unique living experience for those attending the university. When looking for accommodation, it is important to consider factors such as location, amenities, and budget constraints. Collaborating with roommates can help alleviate financial burdens and foster a supportive environment for studying and socializing. Additionally, researching different housing options and utilizing online platforms can assist in finding the perfect 2-bedroom house that meets the needs of each student. Ultimately, navigating the housing market in Bath requires patience, thorough planning, and open communication among all parties involved. By following these tips and remaining proactive in the search process, students can secure a comfortable and enjoyable living space in this charming city.</p></>)
};

export default BathBathSpaHouse2;