
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


const  BathBloomfieldHouse8 = () => 
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

    return (<><h1>Shared 8 Bedroom Houses for Students in Bloomfield, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-8-bedroom-houses-for-students-in-bloomfield-bath.png')} alt='Shared 8 Bedroom Houses for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_8_bedroom_houses_for_students_in_bloomfield,_bath">Prices for Shared 8 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive">Shared 8 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_8_bedroom_houses_for_students_in_bloomfield,_bath">Cheap Shared 8 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_bloomfield,_bath__recently_added">Shared 8 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced">Shared 8 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_8_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Prices for Shared 8 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£798 per month </td><td><button className = 'searchButton' title='View our Shared 8 Bedroom Houses for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_8_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Shared 8 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 8 bedroom student house in Bloomfield, Bath, Somerset can be a game-changer. By choosing <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided by them. No more worrying about splitting bills or chasing housemates for payments. With all bills included in one convenient package, you can <b>concentrate on your studies</b> and have peace of mind knowing that everything is taken care of. <b>UniBills.com</b> offers a seamless experience, making student living stress-free and simple. Get a quote from <b>UniBills.com</b> or any accommodation on this website and streamline your student living experience today.</p><a id = "cheap_shared_8_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Cheap Shared 8 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_bloomfield,_bath__recently_added"> <h2>Shared 8 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Shared 8 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>Searching for a shared 8-bedroom house for students in Bloomfield, Bath can be a daunting task, but the effort is worth it for those looking to live with their peers in a convenient and lively area. The diverse selection of properties available offers various amenities, location options, and price points to suit different preferences and budgets. These shared houses often come equipped with communal areas for socializing and studying, enhancing the overall collegiate experience. Additionally, living with multiple roommates fosters a sense of community and support among students that can be invaluable during the university years. In conclusion, finding a shared 8-bedroom house in this vibrant and student-friendly neighborhood can provide a comfortable and enriching living environment for students seeking both a sense of independence and belonging.</p></>)
};

export default BathBloomfieldHouse8;