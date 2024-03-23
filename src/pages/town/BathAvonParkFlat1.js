
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


const  BathAvonParkFlat1 = () => 
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Avon Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-1-bedroom-flats-for-students-in-avon-park-bath.png')} alt='Shared 1 Bedroom Flats for Students in Avon Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_avon_park,_bath">Prices for Shared 1 Bedroom Flats for Students in Avon Park, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_avon_park,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Avon Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_avon_park,_bath">Cheap Shared 1 Bedroom Flats for Students in Avon Park, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_avon_park,_bath__recently_added">Shared 1 Bedroom Flats for Students in Avon Park, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_avon_park,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Avon Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_avon_park,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Avon Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1232 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Avon Park, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_avon_park,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Avon Park, Bath - All Bills Inclusive</h2></a><p>Living in a 1-bedroom student flat in Avon Park, Bath, Somerset, comes with the convenience of enjoying an <b>all bills inclusive</b> service. By subscribing to <b>UniBills.com</b>, you can free yourself from the stress of managing multiple bills for utilities like water, gas, electricity, and internet. With <b>all bills inclusive</b>, you can <b>concentrate on your studies</b> and social activities without worrying about budgeting for unexpected expenses. <b>UniBills.com</b> offers a hassle-free all inclusive option that simplifies your living arrangements and eliminates the need for dealing with various utility providers. Say goodbye to the never-ending task of splitting bills with your flatmates and enjoy the convenience and peace of mind that comes with an <b>all bills inclusive</b> service. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the benefits of a simplified and stress-free student living experience.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_avon_park,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Avon Park, Bath</h2></a><p><Portlet location="REGION^71091" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_avon_park,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Avon Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71091" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_avon_park,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Avon Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71091" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for a shared 1-bedroom flat for students in Avon Park, Bath can be a rewarding experience. The vibrant student community, convenient location, and affordable rental options make this area a popular choice for those pursuing higher education. With amenities such as furnished living spaces, proximity to campus, and shared living arrangements, students can enjoy a comfortable and social living environment. In conclusion, Avon Park offers a unique opportunity for students to live independently while still being part of a supportive community. By choosing a shared 1-bedroom flat in this area, students can create lasting memories and friendships, making their college experience truly unforgettable. Whether studying for exams or exploring the city, Avon Park provides the perfect backdrop for a fulfilling student lifestyle.</p></>)
};

export default BathAvonParkFlat1;