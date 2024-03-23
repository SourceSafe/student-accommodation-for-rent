
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


const  BathAvonParkHouse5 = () => 
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

    return (<><h1>Shared 5 Bedroom Houses for Students in Avon Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-houses-for-students-in-avon-park-bath.png')} alt='Shared 5 Bedroom Houses for Students in Avon Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_houses_for_students_in_avon_park,_bath">Prices for Shared 5 Bedroom Houses for Students in Avon Park, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_avon_park,_bath__all_bills_inclusive">Shared 5 Bedroom Houses for Students in Avon Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_houses_for_students_in_avon_park,_bath">Cheap Shared 5 Bedroom Houses for Students in Avon Park, Bath</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_avon_park,_bath__recently_added">Shared 5 Bedroom Houses for Students in Avon Park, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_houses_for_students_in_avon_park,_bath__recently_reduced">Shared 5 Bedroom Houses for Students in Avon Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_houses_for_students_in_avon_park,_bath"> <h2>Prices for Shared 5 Bedroom Houses for Students in Avon Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£725 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Houses for Students in Avon Park, Bath' onClick={() => routeToPortal("?&beds=5&type=House&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_houses_for_students_in_avon_park,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Houses for Students in Avon Park, Bath - All Bills Inclusive</h2></a><p>Are you tired of constantly worrying about paying separate bills for your 5-bedroom student house in Avon Park, Bath, Somerset? <b>UniBills.com</b> offers the perfect solution with their <b>all bills inclusive</b> service. By subscribing to this convenient option, you can say goodbye to the stress of managing multiple bills and focus on what truly matters - your studies. <b>UniBills.com</b> takes care of everything from utilities to internet, allowing you to enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. With one simple monthly payment, you can budget more effectively and avoid any unexpected costs. Don't wait any longer – get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the benefits of an all-inclusive lifestyle today.</p><a id = "cheap_shared_5_bedroom_houses_for_students_in_avon_park,_bath"> <h2>Cheap Shared 5 Bedroom Houses for Students in Avon Park, Bath</h2></a><p><Portlet location="REGION^71091" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_avon_park,_bath__recently_added"> <h2>Shared 5 Bedroom Houses for Students in Avon Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71091" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_houses_for_students_in_avon_park,_bath__recently_reduced"> <h2>Shared 5 Bedroom Houses for Students in Avon Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71091" town="REGION^116" beds="5" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for a shared 5-bedroom house for students in Avon Park, Bath can be a rewarding experience. The vibrant community in Avon Park offers a mix of modern amenities and historic charm, making it an ideal location for student living. With various housing options available, students can easily find a comfortable and convenient home to share with their peers. By living in a shared house, students not only benefit from lower living costs but also have the opportunity to form lasting friendships and create a supportive living environment. Finally, the diverse range of activities and attractions in Bath make it a fantastic city for students to explore and enjoy. In conclusion, finding a shared 5-bedroom house in Avon Park, Bath is a fantastic choice for students looking for a well-rounded and enriching living experience.</p></>)
};

export default BathAvonParkHouse5;