
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

    return (<><h1>Shared 6 Bedroom Houses for Students in Bath Spa, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-houses-for-students-in-bath-spa-bath.png')} alt='Shared 6 Bedroom Houses for Students in Bath Spa, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_houses_for_students_in_bath_spa,_bath">Prices for Shared 6 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive">Shared 6 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_houses_for_students_in_bath_spa,_bath">Cheap Shared 6 Bedroom Houses for Students in Bath Spa, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_bath_spa,_bath__recently_added">Shared 6 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced">Shared 6 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Prices for Shared 6 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£651 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Houses for Students in Bath Spa, Bath' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71093")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_houses_for_students_in_bath_spa,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Houses for Students in Bath Spa, Bath - All Bills Inclusive</h2></a><p>Are you a student at Bath Spa University looking for accommodation that offers convenience and peace of mind? Look no further than subscribing to an <b>all bills inclusive</b> service for your 6 bedroom student house in Bath. <b>UniBills.com</b> provides a seamless experience where all your utility bills are taken care of, allowing you to <b>concentrate on your studies</b> without the added stress of managing multiple bills. With <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option, ensuring that you have a comfortable living environment without any additional costs or surprises. Say goodbye to the headache of organizing and paying different bills each month; instead, simplify your student life and budget with an <b>all bills inclusive</b> service. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the benefits of worry-free living.</p><a id = "cheap_shared_6_bedroom_houses_for_students_in_bath_spa,_bath"> <h2>Cheap Shared 6 Bedroom Houses for Students in Bath Spa, Bath</h2></a><p><Portlet location="REGION^71093" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_bath_spa,_bath__recently_added"> <h2>Shared 6 Bedroom Houses for Students in Bath Spa, Bath - Recently Added</h2></a><p><Portlet location="REGION^71093" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_bath_spa,_bath__recently_reduced"> <h2>Shared 6 Bedroom Houses for Students in Bath Spa, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71093" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for shared 6 bedroom houses for students in Bath Spa, Bath can be an exciting yet daunting task. With a range of options available, students can find the perfect accommodation that suits their needs and preferences. Shared houses offer a sense of community and shared responsibilities, creating a supportive living environment for students. By living with others, students can split rent and utilities, making it a more affordable housing option. Additionally, sharing a house with fellow students can lead to lasting friendships and social opportunities. When searching for a shared 6 bedroom house, it is important to consider factors such as location, amenities, and lease terms. By carefully reviewing these aspects, students can find the ideal living situation to enhance their university experience. In conclusion, exploring shared 6 bedroom houses in Bath Spa, Bath provides students with a unique opportunity to live in a vibrant community while also benefiting from the affordability and camaraderie that shared living offers.</p></>)
};

export default BathBathSpaHouse6;