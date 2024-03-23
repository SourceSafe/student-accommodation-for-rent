
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


const  BathOldfieldParkHouse4 = () => 
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

    return (<><h1>Shared 4 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 4 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 4 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 4 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 4 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 4 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 4 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 4 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£608 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you tired of dealing with the stress of managing multiple bills for your student house in Oldfield Park, Bath, Somerset? Look no further than <b>UniBills.com</b> for the ultimate convenience of an <b>all bills inclusive</b> service. By subscribing to this service, you can enjoy the hassle free all inclusive option provided by <b>UniBills.com</b>, allowing you to <b>concentrate on your studies</b> and social activities without the worry of budgeting for utilities. With <b>UniBills.com</b>, you can say goodbye to the endless cycle of splitting bills and chasing housemates for payments. Save time and energy by opting for the convenience and simplicity of an <b>all bills inclusive</b> service. Get a quote from <b>UniBills.com</b> or any accommodation on this web site and experience the benefits of stress-free living. Ease your mind and simplify your life with UniBills.</p><a id = "cheap_shared_4_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 4 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 4 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 4 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 4-bedroom houses for students in Oldfield Park, Bath can be an exciting and rewarding experience. This vibrant area offers affordable housing options with plenty of amenities nearby, making it an ideal choice for student living. By exploring various listings and working with reputable agencies, students can find the perfect accommodation that fits their needs and preferences. The convenience of living in a shared house with peers fosters a sense of community and support, creating a welcoming environment for studying and socializing. With access to public transportation, local shops, and recreational facilities, students can enjoy a balanced lifestyle while pursuing their academic goals. Overall, Oldfield Park provides the perfect setting for students to thrive and make lasting memories during their time in Bath[].</p></>)
};

export default BathOldfieldParkHouse4;