
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


const  BathBathSpaHouse9 = () => 
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

    return (<><h1>Shared 9 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-9-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 9 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_9_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 9 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 9 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_9_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 9 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 9 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 9 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_9_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 9 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£655 per month </td><td><button className = 'searchButton' title='View our Shared 9 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_9_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 9 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 9-bedroom house in Bath Spa, Bath, Somerset, looking for convenience and simplicity when it comes to managing your bills? Look no further than <b>UniBills.com</b>! With an <b>all bills inclusive</b> service, you can say goodbye to the stress of coordinating multiple payments each month. By choosing <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social life without the worry of utility bills piling up. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, which covers everything from electricity and gas to water and internet. Say goodbye to unexpected costs and hello to a smooth and seamless living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life easier today.</p><a id = "cheap_shared_9_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 9 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 9 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 9 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 9-bedroom houses for students in Bath Spa, Bath can be both exciting and challenging. With a variety of options available, it is important for students to consider factors such as location, budget, and amenities before making a decision. Living in a spacious 9-bedroom house can offer a sense of community and support among housemates, as well as the opportunity for socializing and studying together. Additionally, sharing a house with multiple students can help reduce living expenses and create a more affordable housing option. Overall, finding the perfect 9-bedroom house in Bath Spa can enhance the university experience and provide students with a comfortable and convenient living arrangement.</p></>)
};

export default BathBathSpaHouse9;