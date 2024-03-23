
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


const  BathBeaconHillFlat5 = () => 
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

    return (<><h1>Shared 5 Bedroom Flats for Students in Beacon Hill, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-flats-for-students-in-beacon-hill-bath.png')} alt='Shared 5 Bedroom Flats for Students in Beacon Hill, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_flats_for_students_in_beacon_hill,_bath">Prices for Shared 5 Bedroom Flats for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_beacon_hill,_bath__all_bills_inclusive">Shared 5 Bedroom Flats for Students in Beacon Hill, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_flats_for_students_in_beacon_hill,_bath">Cheap Shared 5 Bedroom Flats for Students in Beacon Hill, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_beacon_hill,_bath__recently_added">Shared 5 Bedroom Flats for Students in Beacon Hill, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_beacon_hill,_bath__recently_reduced">Shared 5 Bedroom Flats for Students in Beacon Hill, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_flats_for_students_in_beacon_hill,_bath"> <h2>Prices for Shared 5 Bedroom Flats for Students in Beacon Hill, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£697 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Flats for Students in Beacon Hill, Bath' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^61718")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_flats_for_students_in_beacon_hill,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Flats for Students in Beacon Hill, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 5-bedroom student flat in Beacon Hill, Bath, Somerset, through <b>UniBills.com</b> is a smart move that offers numerous benefits. With <b>all bills inclusive</b>, you can enjoy the convenience of having your utility bills bundled into one easy payment, allowing you to <b>concentrate on your studies</b> without the added stress of managing multiple bills. <b>UniBills.com</b> takes the hassle out of budgeting for utilities, ensuring that you have one less thing to worry about. By opting for this inclusive option, you can rest assured that essentials like gas, electricity, water, and internet are all taken care of. Say goodbye to the tedious task of splitting bills with housemates and enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and experience the ease and peace of mind that comes with <b>all bills inclusive</b> living.</p><a id = "cheap_shared_5_bedroom_flats_for_students_in_beacon_hill,_bath"> <h2>Cheap Shared 5 Bedroom Flats for Students in Beacon Hill, Bath</h2></a><p><Portlet location="REGION^61718" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_beacon_hill,_bath__recently_added"> <h2>Shared 5 Bedroom Flats for Students in Beacon Hill, Bath - Recently Added</h2></a><p><Portlet location="REGION^61718" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_beacon_hill,_bath__recently_reduced"> <h2>Shared 5 Bedroom Flats for Students in Beacon Hill, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^61718" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, searching for shared 5-bedroom flats for students in Beacon Hill, Bath can be an exciting yet challenging task. The vibrant student community in the area offers a diverse range of amenities and recreational activities, making it an ideal place for communal living. However, the high demand for accommodation in this popular neighborhood may require students to act fast in securing a suitable flat. With its convenient location and proximity to universities, students can enjoy a comfortable and social living environment while focusing on their studies. In conclusion, finding a shared 5-bedroom flat in Beacon Hill, Bath requires proactive planning, communication with potential housemates, and a willingness to compromise on certain preferences. By exploring various listings, attending viewings, and making informed decisions, students can find the perfect living space to enhance their university experience.</p></>)
};

export default BathBeaconHillFlat5;