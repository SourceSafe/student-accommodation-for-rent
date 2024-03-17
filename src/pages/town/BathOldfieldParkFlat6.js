
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


const  BathOldfieldParkFlat6 = () => 
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

    return (<><h1>Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-6-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 6 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£775 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=6&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in a 6 bedroom student flat in Oldfield Park, Bath, Somerset can be a fantastic experience, especially if you choose to subscribe to an <b>all bills inclusive</b> service. <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b> without worrying about managing multiple bills. With <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option provided, giving you peace of mind and a simplified living experience. By opting for this service, you can avoid the stress of dealing with various utility companies and budgeting for each bill separately. Get a quote from UniBills.</p><a id = "cheap_shared_6_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 6 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="6" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="6" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 6 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="6" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>If you are searching for shared 6 bedroom flats for students in Oldfield Park, Bath, look no further! With its convenient location close to the University of Bath and Bath Spa University, Oldfield Park is a popular choice for student accommodation. These flats offer spacious living areas, modern kitchens, and comfortable bedrooms, providing a cozy and inviting space for students to call home. Additionally, living with five other housemates can lead to forming strong friendships and a supportive living environment. With plenty of local amenities, such as supermarkets, cafes, and pubs, students will have everything they need within walking distance. In conclusion, renting a shared 6 bedroom flat in Oldfield Park is not only practical and affordable but also offers a sense of community and camaraderie among fellow students.</p></>)
};

export default BathOldfieldParkFlat6;