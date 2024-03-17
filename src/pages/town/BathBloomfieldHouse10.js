
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


const  BathBloomfieldHouse10 = () => 
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

    return (<><h1>Shared 10 Bedroom Houses for Students in Bloomfield, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-10-bedroom-houses-for-students-in-bloomfield-bath.png')} alt='Shared 10 Bedroom Houses for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_10_bedroom_houses_for_students_in_bloomfield,_bath">Prices for Shared 10 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive">Shared 10 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_10_bedroom_houses_for_students_in_bloomfield,_bath">Cheap Shared 10 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_bloomfield,_bath__recently_added">Shared 10 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#shared_10_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced">Shared 10 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_10_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Prices for Shared 10 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£540 per month </td><td><button className = 'searchButton' title='View our Shared 10 Bedroom Houses for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=10&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_10_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Shared 10 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Living in a 10 bedroom student house in Bloomfield, Bath, Somerset can be both exciting and overwhelming, especially when it comes to managing bills and expenses. To ease this burden and allow you to <b>concentrate on your studies</b>, subscribing to an <b>all bills inclusive</b> service offered by <b>UniBills.com</b> is the perfect solution. By opting for this hassle-free option, you can enjoy the convenience of having all your bills, including utilities, internet, and even cleaning services, bundled into one easy-to-manage monthly payment. This not only saves you time and effort but also eliminates the stress of dividing and chasing up individual payments among housemates. With <b>UniBills.com</b>, you can rest assured that all your living expenses are taken care of, leaving you free to focus on your academic priorities. Explore the benefits of the all-inclusive option provided by <b>UniBills.com</b> and get a quote from them or any accommodation on this website today.</p><a id = "cheap_shared_10_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Cheap Shared 10 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_bloomfield,_bath__recently_added"> <h2>Shared 10 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Shared 10 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="10" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>When searching for shared 10-bedroom houses for students in Bloomfield, Bath, several factors must be considered. These properties are ideal for large groups of students looking to live together, split costs, and create a sense of community. With spacious bedrooms, shared common areas, and ample amenities, these houses provide a comfortable and convenient living arrangement for students. Additionally, the close proximity to campus and local amenities makes these properties a desirable choice for student living. In conclusion, finding a shared 10-bedroom house in Bloomfield, Bath offers a unique and appealing housing option for students, fostering a sense of camaraderie and providing a comfortable living space for academic success and social engagement.</p></>)
};

export default BathBloomfieldHouse10;