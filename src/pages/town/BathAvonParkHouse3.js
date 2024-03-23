
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


const  BathAvonParkHouse3 = () => 
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

    return (<><h1>Shared 3 Bedroom Houses for Students in Avon Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-houses-for-students-in-avon-park-bath.png')} alt='Shared 3 Bedroom Houses for Students in Avon Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_houses_for_students_in_avon_park,_bath">Prices for Shared 3 Bedroom Houses for Students in Avon Park, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_avon_park,_bath__all_bills_inclusive">Shared 3 Bedroom Houses for Students in Avon Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_houses_for_students_in_avon_park,_bath">Cheap Shared 3 Bedroom Houses for Students in Avon Park, Bath</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_avon_park,_bath__recently_added">Shared 3 Bedroom Houses for Students in Avon Park, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_houses_for_students_in_avon_park,_bath__recently_reduced">Shared 3 Bedroom Houses for Students in Avon Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_houses_for_students_in_avon_park,_bath"> <h2>Prices for Shared 3 Bedroom Houses for Students in Avon Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£717 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Houses for Students in Avon Park, Bath' onClick={() => routeToPortal("?&beds=3&type=House&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_houses_for_students_in_avon_park,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Houses for Students in Avon Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 3-bedroom house in Avon Park, Bath, Somerset? Managing monthly bills can be quite overwhelming alongside your coursework. That's where an <b>all bills inclusive</b> service comes in handy! <b>UniBills.com</b> offers an all-inclusive package that covers your gas, electricity, water, internet, and even TV license expenses. By subscribing to this service, you can <b>concentrate on your studies</b> without worrying about splitting bills among your housemates. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, allowing you to budget effectively and avoid any unexpected costs. To make your student life easier, get a quote from <b>UniBills.com</b> or any accommodation on this website today and experience the convenience of having everything taken care of for you.</p><a id = "cheap_shared_3_bedroom_houses_for_students_in_avon_park,_bath"> <h2>Cheap Shared 3 Bedroom Houses for Students in Avon Park, Bath</h2></a><p><Portlet location="REGION^71091" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_avon_park,_bath__recently_added"> <h2>Shared 3 Bedroom Houses for Students in Avon Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71091" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_houses_for_students_in_avon_park,_bath__recently_reduced"> <h2>Shared 3 Bedroom Houses for Students in Avon Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71091" town="REGION^116" beds="3" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 3 bedroom houses for students in Avon Park, Bath can be an exciting venture for those looking for a comfortable and convenient living arrangement. These properties offer the perfect opportunity for students to live together, split costs, and create a supportive community while studying in a beautiful city like Bath. With spacious living areas, modern amenities, and close proximity to universities and local amenities, these shared houses provide a fantastic option for student accommodation. In conclusion, the availability of shared 3 bedroom houses in Avon Park, Bath presents a great opportunity for students to find a comfortable, affordable, and enjoyable living space that enhances their academic experience.</p></>)
};

export default BathAvonParkHouse3;