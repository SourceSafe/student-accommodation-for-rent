
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


const  BathOldfieldParkHouse8 = () => 
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

    return (<><h1>Shared 8 Bedroom Houses for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-8-bedroom-houses-for-students-in-oldfield-park-bath.png')} alt='Shared 8 Bedroom Houses for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_8_bedroom_houses_for_students_in_oldfield_park,_bath">Prices for Shared 8 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 8 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_8_bedroom_houses_for_students_in_oldfield_park,_bath">Cheap Shared 8 Bedroom Houses for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added">Shared 8 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_8_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced">Shared 8 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_8_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 8 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£689 per month </td><td><button className = 'searchButton' title='View our Shared 8 Bedroom Houses for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=8&type=House&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_8_bedroom_houses_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 8 Bedroom Houses for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 8 bedroom student house in Oldfield Park, Bath, Somerset can greatly simplify your life as a student. With <b>UniBills.com</b>, you can enjoy the hassle-free all inclusive option provided by their service. This means you won't have to worry about managing multiple bills for utilities such as gas, electricity, water, and internet. Instead, you can <b>concentrate on your studies</b> and social activities knowing that everything is taken care of. <b>UniBills.com</b> offers a convenient and stress-free solution that allows you to budget effectively without any unexpected surprises. Say goodbye to the headaches of coordinating payments and disputes with housemates – simply get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life easier.</p><a id = "cheap_shared_8_bedroom_houses_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 8 Bedroom Houses for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 8 Bedroom Houses for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_8_bedroom_houses_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 8 Bedroom Houses for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="8" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 8 bedroom houses for students in Oldfield Park, Bath offers a range of benefits for those looking for communal living in a vibrant and student-friendly neighborhood. The availability of larger properties allows for a cost-effective and sociable living arrangement, with ample space for studying and socializing. Additionally, the convenience of being close to both the University of Bath and Bath Spa University creates an ideal location for student living. The charm of Oldfield Park, with its local amenities and easy access to public transport, further enhances the appeal of finding a shared 8 bedroom house in this area. Ultimately, sharing a house with seven other students in Oldfield Park provides a unique and enjoyable living experience that fosters a sense of community and friendship during your time at university.</p></>)
};

export default BathOldfieldParkHouse8;