
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

    return (<><h1>Shared 5 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 5 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 5 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 5 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 5 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 5 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 5 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 5 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£625 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>When you are a student living in a 5 bedroom house in Bath Spa, Bath, Somerset, the last thing you want to worry about is managing multiple bills for utilities, internet, and other expenses. By subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by this trusted provider. With all your bills consolidated into one convenient payment, you can <b>concentrate on your studies</b> and extracurricular activities without the stress of managing different bills. <b>UniBills.com</b> takes care of everything for you, ensuring a seamless experience throughout your stay. Say goodbye to the time-consuming task of sorting out bills and hello to the convenience of a single payment each month. Get a quote from <b>UniBills.com</b> or any accommodation on this website to make your student life in Bath Spa a breeze.</p><a id = "cheap_shared_5_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 5 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 5 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 5 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for a shared 5-bedroom house for students in Bath Spa, Bath can be an exciting and rewarding experience. These spacious accommodations offer a perfect solution for students looking to live with their friends while studying at university. With the convenience of shared living spaces, the opportunity to split costs, and the chance to create a comfortable environment conducive to study and socializing, shared 5-bedroom houses cater to the needs of students seeking a balance between independence and camaraderie. In conclusion, finding a shared 5-bedroom house in Bath can provide students with a sense of community, affordability, and comfort, making it a popular choice for those embarking on their university journey. So, gather your housemates, explore the options available, and embrace the benefits of shared student living in Bath Spa.</p></>)
};

export default BathBathSpaHouse5;