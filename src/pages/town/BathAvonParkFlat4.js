
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


const  BathAvonParkFlat4 = () => 
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

    return (<><h1>Shared 4 Bedroom Flats for Students in Avon Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-flats-for-students-in-avon-park-bath.png')} alt='Shared 4 Bedroom Flats for Students in Avon Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_flats_for_students_in_avon_park,_bath">Prices for Shared 4 Bedroom Flats for Students in Avon Park, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_avon_park,_bath__all_bills_inclusive">Shared 4 Bedroom Flats for Students in Avon Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_flats_for_students_in_avon_park,_bath">Cheap Shared 4 Bedroom Flats for Students in Avon Park, Bath</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_avon_park,_bath__recently_added">Shared 4 Bedroom Flats for Students in Avon Park, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_flats_for_students_in_avon_park,_bath__recently_reduced">Shared 4 Bedroom Flats for Students in Avon Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_flats_for_students_in_avon_park,_bath"> <h2>Prices for Shared 4 Bedroom Flats for Students in Avon Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£701 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Flats for Students in Avon Park, Bath' onClick={() => routeToPortal("?&beds=4&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_flats_for_students_in_avon_park,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Flats for Students in Avon Park, Bath - All Bills Inclusive</h2></a><p>Living in a 4 bedroom student flat in Avon Park, Bath, Somerset can already be a great experience, but it can be made even better by subscribing to an <b>all bills inclusive</b> service. <b>UniBills.com</b> offers a convenient solution that allows you to have all your bills, including utilities, internet, and even contents insurance, covered under one package. With this service, you can avoid the stress of managing multiple bills and instead <b>concentrate on your studies</b> and social life. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b> and have peace of mind knowing that everything is taken care of. Say goodbye to unexpected costs and budgeting headaches. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student living experience more convenient and enjoyable.</p><a id = "cheap_shared_4_bedroom_flats_for_students_in_avon_park,_bath"> <h2>Cheap Shared 4 Bedroom Flats for Students in Avon Park, Bath</h2></a><p><Portlet location="REGION^71091" beds="4" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_avon_park,_bath__recently_added"> <h2>Shared 4 Bedroom Flats for Students in Avon Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71091" beds="4" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_flats_for_students_in_avon_park,_bath__recently_reduced"> <h2>Shared 4 Bedroom Flats for Students in Avon Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71091" town="REGION^116" beds="4" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 4-bedroom flat for students in Avon Park, Bath can be an exciting but challenging experience. With a growing demand for student accommodation, it's crucial to start the search early and explore a variety of options to find the perfect fit. Consider factors such as location, amenities, and rental costs to ensure a comfortable living environment that suits your needs. Collaborating with potential roommates and utilizing online platforms and local resources can help streamline the search process and secure a desirable living space. Remember to communicate openly and establish clear agreements with your housemates to foster a harmonious living arrangement. Whether you're a first-year student or returning for another year, finding a shared flat in Avon Park offers a unique opportunity to create lasting memories and friendships while enjoying the vibrant student life in Bath.</p></>)
};

export default BathAvonParkFlat4;