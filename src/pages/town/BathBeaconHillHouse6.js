
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


const  BathBeaconHillHouse6 = () => 
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

    return (<><h1>Shared 6 Bedroom Houses for Students in Beacon Hill, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-houses-for-students-in-beacon-hill-bath.png')} alt='Shared 6 Bedroom Houses for Students in Beacon Hill, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_houses_for_students_in_beacon_hill,_bath">Prices for Shared 6 Bedroom Houses for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_beacon_hill,_bath__all_bills_inclusive">Shared 6 Bedroom Houses for Students in Beacon Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_houses_for_students_in_beacon_hill,_bath">Cheap Shared 6 Bedroom Houses for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_beacon_hill,_bath__recently_added">Shared 6 Bedroom Houses for Students in Beacon Hill, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_beacon_hill,_bath__recently_reduced">Shared 6 Bedroom Houses for Students in Beacon Hill, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_houses_for_students_in_beacon_hill,_bath"> <h2>Prices for Shared 6 Bedroom Houses for Students in Beacon Hill, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£801 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Houses for Students in Beacon Hill, Bath' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^61718")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_houses_for_students_in_beacon_hill,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Houses for Students in Beacon Hill, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 6 bedroom student House in Beacon Hill, Bath, Somerset can bring you numerous benefits. <b>UniBills.com</b>, a leading provider of all-inclusive accommodation options, ensures that you no longer have to worry about managing separate bills for utilities such as electricity, water, and internet. With all bills included in one convenient package, you can <b>concentrate on your studies</b> and social activities without the stress of dealing with multiple payment deadlines. Enjoy the hassle-free all inclusive option provided by <b>UniBills.com</b>, which not only saves you time and effort but also helps you budget more effectively. To simplify your student life even further, why not get a quote from <b>UniBills.com</b> or any accommodation on this web site today and experience the ease and convenience of <b>all bills inclusive</b> living in Beacon Hill, Bath, Somerset.</p><a id = "cheap_shared_6_bedroom_houses_for_students_in_beacon_hill,_bath"> <h2>Cheap Shared 6 Bedroom Houses for Students in Beacon Hill, Bath</h2></a><p><Portlet location="REGION^61718" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_beacon_hill,_bath__recently_added"> <h2>Shared 6 Bedroom Houses for Students in Beacon Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^61718" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_beacon_hill,_bath__recently_reduced"> <h2>Shared 6 Bedroom Houses for Students in Beacon Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61718" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, when it comes to finding shared 6-bedroom houses for students in Beacon Hill, Bath, it is crucial to consider various factors such as proximity to the university, amenities, and transportation options. Beacon Hill offers a vibrant student community with beautiful surroundings and easy access to local shops and restaurants. By searching for a property that suits the needs of all the housemates, including the layout, facilities, and rent affordability, students can ensure a comfortable and enjoyable living experience. Additionally, establishing clear communication and responsibilities within the household can help foster positive relationships and a peaceful living environment. Overall, with thorough research and consideration, students can find the perfect shared house in Beacon Hill to create lasting memories and academic success during their time at university.</p></>)
};

export default BathBeaconHillHouse6;