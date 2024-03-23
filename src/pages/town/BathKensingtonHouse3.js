
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


const  BathKensingtonHouse3 = () => 
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

    return (<><h1>Shared 3 Bedroom Houses for Students in Kensington, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-houses-for-students-in-kensington-bath.png')} alt='Shared 3 Bedroom Houses for Students in Kensington, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_houses_for_students_in_kensington,_bath">Prices for Shared 3 Bedroom Houses for Students in Kensington, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_kensington,_bath__all_bills_inclusive">Shared 3 Bedroom Houses for Students in Kensington, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_houses_for_students_in_kensington,_bath">Cheap Shared 3 Bedroom Houses for Students in Kensington, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_kensington,_bath__recently_added">Shared 3 Bedroom Houses for Students in Kensington, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_kensington,_bath__recently_reduced">Shared 3 Bedroom Houses for Students in Kensington, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_houses_for_students_in_kensington,_bath"> <h2>Prices for Shared 3 Bedroom Houses for Students in Kensington, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£717 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Houses for Students in Kensington, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^61722")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_houses_for_students_in_kensington,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Houses for Students in Kensington, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for a convenient and stress-free way to manage your living expenses in Kensington, Bath, Somerset? Look no further than <b>UniBills.com</b> for an <b>all bills inclusive</b> service for your 3 bedroom student house. By choosing this option, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, allowing you to <b>concentrate on your studies</b> without the burden of managing multiple bills. With all utilities such as electricity, water, and internet included in one transparent monthly payment, you can budget more effectively and avoid any unexpected costs. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the ease and convenience of an <b>all bills inclusive</b> service. Ease your workload and enjoy your student life with <b>UniBills.com</b>.</p><a id = "cheap_shared_3_bedroom_houses_for_students_in_kensington,_bath"> <h2>Cheap Shared 3 Bedroom Houses for Students in Kensington, Bath</h2></a><p><Portlet location="REGION^61722" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_kensington,_bath__recently_added"> <h2>Shared 3 Bedroom Houses for Students in Kensington, Bath - Recently Added</h2></a><p><Portlet location="REGION^61722" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_kensington,_bath__recently_reduced"> <h2>Shared 3 Bedroom Houses for Students in Kensington, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61722" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, the search for shared 3-bedroom houses for students in Kensington, Bath offers a variety of options for those seeking communal living arrangements in a vibrant and historic city. With plenty of properties to choose from, students can find homes that offer proximity to the University of Bath and other amenities, making it convenient for studying and socializing. Additionally, the shared living experience can provide opportunities for students to build lasting friendships and create a supportive community during their time at university. Overall, navigating the housing market in Kensington, Bath for student accommodations can lead to a fulfilling and enriching experience for those looking to enhance their academic and social lives.</p></>)
};

export default BathKensingtonHouse3;