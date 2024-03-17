
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


const  BathBloomfieldHouse4 = () => 
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

    return (<><h1>Shared 4 Bedroom Houses for Students in Bloomfield, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-houses-for-students-in-bloomfield-bath.png')} alt='Shared 4 Bedroom Houses for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_houses_for_students_in_bloomfield,_bath">Prices for Shared 4 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive">Shared 4 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_houses_for_students_in_bloomfield,_bath">Cheap Shared 4 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_bloomfield,_bath__recently_added">Shared 4 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced">Shared 4 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Prices for Shared 4 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£618 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Houses for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Looking for a convenient way to manage your expenses while studying in Bath, Somerset? Consider subscribing to an <b>all bills inclusive</b> service for your 4 bedroom student house in Bloomfield through <b>UniBills.com</b>. With this service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, which covers all your utility bills, including water, gas, electricity, and internet. By opting for this service, you can <b>concentrate on your studies</b> without worrying about splitting bills or making multiple payments each month. <b>UniBills.com</b> aims to simplify your student life by offering a stress-free solution to managing your living costs. Say goodbye to bill-related headaches and enjoy the convenience of having all your bills taken care of in one go. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student experience in Bloomfield, Bath, a smooth and enjoyable one.</p><a id = "cheap_shared_4_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Cheap Shared 4 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_bloomfield,_bath__recently_added"> <h2>Shared 4 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Shared 4 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 4-bedroom house for students in Bloomfield, Bath can be a rewarding experience. It offers the perfect opportunity for students to live together, split costs, and create lasting friendships. The availability of 4-bedroom houses in the area ensures ample space for privacy and studying, while also fostering a sense of community among housemates. With various amenities and convenient location options in Bloomfield, Bath, students can find the ideal living situation that suits their needs and preferences. Overall, choosing a shared 4-bedroom house for student living in Bloomfield, Bath provides a comfortable, affordable, and social environment for a well-rounded college experience.</p></>)
};

export default BathBloomfieldHouse4;