
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


const  BathAvonParkHouse9 = () => 
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

    return (<><h1>Shared 9 Bedroom Houses for Students in Avon Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-9-bedroom-houses-for-students-in-avon-park-bath.png')} alt='Shared 9 Bedroom Houses for Students in Avon Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_9_bedroom_houses_for_students_in_avon_park,_bath">Prices for Shared 9 Bedroom Houses for Students in Avon Park, Bath</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_avon_park,_bath__all_bills_inclusive">Shared 9 Bedroom Houses for Students in Avon Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_9_bedroom_houses_for_students_in_avon_park,_bath">Cheap Shared 9 Bedroom Houses for Students in Avon Park, Bath</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_avon_park,_bath__recently_added">Shared 9 Bedroom Houses for Students in Avon Park, Bath - Recently Added</a></li><li><a href = "#shared_9_bedroom_houses_for_students_in_avon_park,_bath__recently_reduced">Shared 9 Bedroom Houses for Students in Avon Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_9_bedroom_houses_for_students_in_avon_park,_bath"> <h2>Prices for Shared 9 Bedroom Houses for Students in Avon Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£670 per month </td><td><button className = 'searchButton' title='View our Shared 9 Bedroom Houses for Students in Avon Park, Bath' onClick={() => routeToPortal("?&beds=9&type=House&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_9_bedroom_houses_for_students_in_avon_park,_bath__all_bills_inclusive"> <h2>Shared 9 Bedroom Houses for Students in Avon Park, Bath - All Bills Inclusive</h2></a><p>Subscribe to an <b>all bills inclusive</b> service for your 9 bedroom student house in Avon Park, Bath, Somerset with <b>UniBills.com</b> and enjoy the convenience of having all your bills taken care of in one simple payment. With the demands of university life, the last thing you want to worry about is managing multiple bills for utilities and services. By opting for the all inclusive option provided by <b>UniBills.com</b>, you can <b>concentrate on your studies</b> and leave the hassle of bill management behind. Say goodbye to the stress of splitting bills with housemates and dealing with unexpected costs. <b>UniBills.com</b> offers a seamless solution for students living in group accommodation, ensuring all essentials are covered without any hidden surprises. Get a quote from <b>UniBills.com</b> or any accommodation on this website and simplify your student living experience.</p><a id = "cheap_shared_9_bedroom_houses_for_students_in_avon_park,_bath"> <h2>Cheap Shared 9 Bedroom Houses for Students in Avon Park, Bath</h2></a><p><Portlet location="REGION^71091" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_houses_for_students_in_avon_park,_bath__recently_added"> <h2>Shared 9 Bedroom Houses for Students in Avon Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71091" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_9_bedroom_houses_for_students_in_avon_park,_bath__recently_reduced"> <h2>Shared 9 Bedroom Houses for Students in Avon Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71091" town="REGION^116" beds="9" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, finding a shared 9-bedroom house for students in Avon Park, Bath can be both exciting and challenging. With various listings available, it is essential to prioritize factors such as location, budget, and amenities when searching for the ideal accommodation. Living in a shared house can foster a sense of community and provide a vibrant environment for socializing and studying. By considering important aspects like lease agreements, house rules, and communication with housemates, students can ensure a harmonious living experience. Additionally, being proactive in resolving any potential conflicts and maintaining a respectful living environment can contribute to a positive shared housing experience. Overall, choosing a shared 9-bedroom house in Avon Park, Bath can offer students a convenient and enriching living arrangement during their academic journey.</p></>)
};

export default BathAvonParkHouse9;