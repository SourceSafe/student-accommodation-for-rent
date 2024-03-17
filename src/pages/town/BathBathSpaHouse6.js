
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


const  BathBathSpaHouse6 = () => 
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

    return (<><h1>Shared 6 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 6 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 6 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 6 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 6 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 6 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 6 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 6 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£651 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you tired of the constant hassle of paying multiple bills for your student house in Bath Spa? <b>UniBills.com</b> offers the perfect solution with their <b>all bills inclusive</b> service for your 6 bedroom student house in Bath Spa, Bath, Somerset. By subscribing to this convenient option, you can enjoy the peace of mind that comes with knowing that all your bills are taken care of in one easy payment. With <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and social life without the added stress of managing utility bills. Say goodbye to the headache of splitting bills with your housemates - simply get a quote from <b>UniBills.com</b> or any accommodation on this website and enjoy the hassle-free all-inclusive option provided. Say hello to convenience and simplicity with UniBills.</p><a id = "cheap_shared_6_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 6 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 6 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 6 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, finding a shared 6-bedroom house for students in Bath Spa, Bath can be an exciting and convenient housing option for those looking to live with friends or meet new housemates. With plenty of properties available that cater to a larger group, students can enjoy the benefits of communal living while still having their own space. From spacious rooms to shared common areas, these houses provide the perfect balance between privacy and social interaction. Additionally, the proximity to campus and local amenities makes for a practical and student-friendly living arrangement. Overall, choosing a shared 6-bedroom house offers a cost-effective and enjoyable housing solution for students in Bath Spa, Bath. Whether you're looking to create lasting memories with your roommates or simply seeking a comfortable place to call home during your academic journey, this type of accommodation is definitely worth considering[].</p></>)
};

export default BathBathSpaHouse6;