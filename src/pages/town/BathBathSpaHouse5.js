
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


const  BathBathSpaHouse5 = () => 
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

    return (<><h1>Shared 5 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 5 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 5 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 5 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 5 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 5 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 5 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 5 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£625 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>When living in a 5 bedroom student house in Bath Spa, Bath, Somerset, subscribing to an <b>all bills inclusive</b> service can provide you with a stress-free living arrangement. <b>UniBills.com</b> offers the perfect solution for students who want to concentrate on their studies without the added worry of managing multiple bills. By opting for the <b>all bills inclusive</b> package, you can enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>, which covers utilities such as electricity, water, gas, and internet. This means you can avoid the headache of sorting out individual bills and focus on what really matters – your education. With <b>UniBills.com</b>, you can easily budget your living expenses and avoid unexpected costs. To make your student life easier, get a quote from <b>UniBills.com</b> or any accommodation on this website and enjoy the convenience of having all your bills taken care of in one simple package.</p><a id = "cheap_shared_5_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 5 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 5 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 5 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, the search for shared 5 bedroom houses for students in Bath Spa, Bath can be both exciting and challenging. It is important to consider factors such as location, price, amenities, and the compatibility of potential roommates. With a variety of options available, students can find the perfect accommodation that fits their needs and preferences. By utilizing online platforms, real estate agencies, and student accommodation services, students can streamline their search process and efficiently find the ideal shared house. Additionally, networking with fellow students and attending housing fairs can also provide valuable leads. Ultimately, taking the time to research and explore different options will ensure a comfortable and convenient living arrangement for students pursuing their studies in Bath Spa.</p></>)
};

export default BathBathSpaHouse5;