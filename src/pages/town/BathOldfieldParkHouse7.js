
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


const  BathOldfieldParkHouse7 = () => 
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

    return (<><h1>Shared 7 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-7-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 7 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_7_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 7 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 7 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_7_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 7 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 7 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 7 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_7_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 7 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£669 per month </td><td><button className = 'searchButton' title='View our Shared 7 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_7_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 7 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 7-bedroom house in Oldfield Park, Bath, Somerset? If so, subscribing to an <b>all bills inclusive</b> service from <b>UniBills.com</b> could be the ideal choice for you. By opting for this service, you can enjoy the convenience of having all your bills, including utilities, Wi-Fi, and even TV licence, rolled into one easy payment. This means no more worrying about splitting bills with your housemates or dealing with multiple companies – you can simply <b>concentrate on your studies</b> and enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With this service, you can also benefit from budgeting more effectively, as you will know exactly how much you need to set aside each month. So why not make your student life easier and stress-free by getting a quote from UniBills.</p><a id = "cheap_shared_7_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 7 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 7 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 7 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>When searching for shared 7-bedroom houses for students in Oldfield Park, Bath, it's important to consider factors like location, amenities, and budget. Oldfield Park is a sought-after area for students due to its proximity to both the city center and the university campuses. With a range of shops, restaurants, and transport links nearby, it offers convenience and a vibrant atmosphere. Shared houses with 7 bedrooms provide a great opportunity to live with friends or make new ones, fostering a sense of community and support throughout your studies. By pooling resources, students can often find more affordable housing options in these larger properties. In conclusion, Oldfield Park offers an excellent location for students seeking shared living arrangements in a bustling yet relaxed neighborhood, providing a perfect balance between academic pursuits and socializing.</p></>)
};

export default BathOldfieldParkHouse7;