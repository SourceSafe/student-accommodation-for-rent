
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


const  BathBloomfieldHouse5 = () => 
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

    return (<><h1>Shared 5 Bedroom Houses for Students in Bloomfield, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-houses-for-students-in-bloomfield-bath.png')} alt='Shared 5 Bedroom Houses for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_houses_for_students_in_bloomfield,_bath">Prices for Shared 5 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive">Shared 5 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_houses_for_students_in_bloomfield,_bath">Cheap Shared 5 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_bloomfield,_bath__recently_added">Shared 5 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced">Shared 5 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Prices for Shared 5 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£636 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Houses for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Tired of dealing with the stress and confusion of managing multiple bills for your 5 bedroom student house in Bloomfield, Bath, Somerset? Look no further than <b>UniBills.com</b> for the ultimate convenience. By subscribing to an <b>all bills inclusive</b> service, you can enjoy the hassle-free option provided by <b>UniBills.com</b>. Say goodbye to the hassle of splitting bills, making multiple payments, and keeping track of due dates. With <b>UniBills.com</b>, all your utilities, internet, and even TV license are bundled into one simple monthly payment, allowing you to <b>concentrate on your studies</b> and enjoy your time in Bath without any financial worries. Get a quote from UniBills.</p><a id = "cheap_shared_5_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Cheap Shared 5 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_bloomfield,_bath__recently_added"> <h2>Shared 5 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Shared 5 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Looking for a shared 5-bedroom house in Bloomfield, Bath can be an exciting and convenient option for students seeking a communal living experience. With the abundance of properties available, students can find spacious and well-equipped houses that cater to their specific needs. Shared living arrangements not only offer a more affordable housing solution, but also provide the opportunity to form lasting friendships and create a sense of camaraderie among housemates. Additionally, living in a shared house can help students develop important life skills such as communication, compromise, and conflict resolution. Overall, opting for a shared 5-bedroom house in Bloomfield, Bath can enhance the student experience and create a supportive and enriching environment for academic and personal growth.</p></>)
};

export default BathBloomfieldHouse5;