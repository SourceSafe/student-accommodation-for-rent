
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


const  BathSladebrookFlat1 = () => 
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

    return (<><h1>Shared 1 Bedroom Flats for Students in Sladebrook, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-1-bedroom-flats-for-students-in-sladebrook-bath.png')} alt='Shared 1 Bedroom Flats for Students in Sladebrook, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_1_bedroom_flats_for_students_in_sladebrook,_bath">Prices for Shared 1 Bedroom Flats for Students in Sladebrook, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_sladebrook,_bath__all_bills_inclusive">Shared 1 Bedroom Flats for Students in Sladebrook, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_1_bedroom_flats_for_students_in_sladebrook,_bath">Cheap Shared 1 Bedroom Flats for Students in Sladebrook, Bath</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_sladebrook,_bath__recently_added">Shared 1 Bedroom Flats for Students in Sladebrook, Bath - Recently Added</a></li><li><a href = "#shared_1_bedroom_flats_for_students_in_sladebrook,_bath__recently_reduced">Shared 1 Bedroom Flats for Students in Sladebrook, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_1_bedroom_flats_for_students_in_sladebrook,_bath"> <h2>Prices for Shared 1 Bedroom Flats for Students in Sladebrook, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1200 per month </td><td><button className = 'searchButton' title='View our Shared 1 Bedroom Flats for Students in Sladebrook, Bath' onClick={() => routeToPortal("?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71115")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_1_bedroom_flats_for_students_in_sladebrook,_bath__all_bills_inclusive"> <h2>Shared 1 Bedroom Flats for Students in Sladebrook, Bath - All Bills Inclusive</h2></a><p>Living in a 1 bedroom student flat in Sladebrook, Bath, Somerset can be stressful, especially when it comes to managing various bills and utilities on top of your studies. However, by subscribing to an <b>all bills inclusive</b> service through <b>UniBills.com</b>, you can enjoy the convenience and peace of mind that comes with having everything taken care of for you. With all bills included in one simple monthly payment, you can <b>concentrate on your studies</b> without the added worry of budgeting for different expenses. <b>UniBills.com</b> offers a hassle-free all inclusive option that covers your rent, electricity, water, internet, and any other necessary bills, making your student life easier and more manageable. Say goodbye to the hassle of organizing and paying multiple bills, and opt for the simplicity and convenience of an <b>all bills inclusive</b> service. Get a quote from <b>UniBills.com</b> or any accommodation on this website today, and experience the benefits of stress-free living in your student flat.</p><a id = "cheap_shared_1_bedroom_flats_for_students_in_sladebrook,_bath"> <h2>Cheap Shared 1 Bedroom Flats for Students in Sladebrook, Bath</h2></a><p><Portlet location="REGION^71115" beds="1" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_sladebrook,_bath__recently_added"> <h2>Shared 1 Bedroom Flats for Students in Sladebrook, Bath - Recently Added</h2></a><p><Portlet location="REGION^71115" beds="1" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_1_bedroom_flats_for_students_in_sladebrook,_bath__recently_reduced"> <h2>Shared 1 Bedroom Flats for Students in Sladebrook, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71115" town="REGION^116" beds="1" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, the search for shared 1-bedroom flats for students in Sladebrook, Bath can be a rewarding experience. With its convenient location, affordable pricing options, and shared amenities, students can enjoy a comfortable and communal living arrangement. The variety of options available in this area cater to different needs and preferences, making it easier for students to find the perfect accommodation that suits their lifestyle. Whether it's studying together in a cozy living room, cooking meals in a shared kitchen, or simply enjoying the vibrant student community, living in a shared flat can enhance the overall student experience. In conclusion, students looking for shared 1-bedroom flats in Sladebrook, Bath can expect a supportive and social environment that fosters learning, growth, and friendships.</p></>)
};

export default BathSladebrookFlat1;