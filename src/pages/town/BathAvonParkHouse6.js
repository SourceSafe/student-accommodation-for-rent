
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


const  BathAvonParkHouse6 = () => 
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

    return (<><h1>Shared 6 Bedroom Houses for Students in Avon Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-houses-for-students-in-avon-park-bath.png')} alt='Shared 6 Bedroom Houses for Students in Avon Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_houses_for_students_in_avon_park,_bath">Prices for Shared 6 Bedroom Houses for Students in Avon Park, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_avon_park,_bath__all_bills_inclusive">Shared 6 Bedroom Houses for Students in Avon Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_houses_for_students_in_avon_park,_bath">Cheap Shared 6 Bedroom Houses for Students in Avon Park, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_avon_park,_bath__recently_added">Shared 6 Bedroom Houses for Students in Avon Park, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_avon_park,_bath__recently_reduced">Shared 6 Bedroom Houses for Students in Avon Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_houses_for_students_in_avon_park,_bath"> <h2>Prices for Shared 6 Bedroom Houses for Students in Avon Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£801 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Houses for Students in Avon Park, Bath' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_houses_for_students_in_avon_park,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Houses for Students in Avon Park, Bath - All Bills Inclusive</h2></a><p>Are you a student looking for a stress-free living experience in Avon Park, Bath, Somerset? Look no further than <b>UniBills.com</b> for your 6 bedroom student house needs. With an <b>all bills inclusive</b> service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. By subscribing to this service, you can <b>concentrate on your studies</b> and social activities without the worry of managing multiple bills. Say goodbye to the complexities of budgeting for utilities, internet, and other household expenses. <b>UniBills.com</b> takes care of it all, allowing you to focus on what truly matters. Get a quote from <b>UniBills.com</b> or any accommodation on this website today, and experience the convenience and peace of mind that comes with an <b>all bills inclusive</b> service.</p><a id = "cheap_shared_6_bedroom_houses_for_students_in_avon_park,_bath"> <h2>Cheap Shared 6 Bedroom Houses for Students in Avon Park, Bath</h2></a><p><Portlet location="REGION^71091" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_avon_park,_bath__recently_added"> <h2>Shared 6 Bedroom Houses for Students in Avon Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71091" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_avon_park,_bath__recently_reduced"> <h2>Shared 6 Bedroom Houses for Students in Avon Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71091" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for a shared 6-bedroom house for students in Avon Park, Bath can be an exciting and rewarding experience. With its convenient location and vibrant student community, Avon Park offers a fantastic opportunity for students to live together in a spacious and comfortable home. Shared houses provide a sense of community and camaraderie, making it easier to make new friends and create lasting memories. By pooling resources, students can also enjoy more affordable rent and shared responsibilities. When looking for a shared 6-bedroom house, it's important to consider factors such as location, amenities, and rental agreements. Make sure to tour the property, meet your potential housemates, and discuss expectations to ensure a harmonious living environment. In conclusion, living in a shared 6-bedroom house in Avon Park can be a wonderful experience that enhances your university years and creates lasting friendships.</p></>)
};

export default BathAvonParkHouse6;