
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


const  BathOldfieldParkFlat3 = () => 
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

    return (<><h1>Shared 3 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-3-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 3 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_3_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 3 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 3 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_3_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 3 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 3 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_3_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 3 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_3_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 3 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£715 per month </td><td><button className = 'searchButton' title='View our Shared 3 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=3&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_3_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 3 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 3-bedroom flat in Oldfield Park, Bath, Somerset? With the academic pressures of University, the last thing you want to worry about is managing bills and utility payments. That's why subscribing to an <b>all bills inclusive</b> service, like the one offered by <b>UniBills.com</b>, is a smart choice. By opting for this convenient package, you can free up your time and <b>concentrate on your studies</b> without the added stress of handling individual bill payments. Enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>, which covers your gas, water, electricity, and even Wi-Fi costs. Say goodbye to the tedious task of managing multiple bills and hello to a simpler, more streamlined living experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website now and simplify your student life.</p><a id = "cheap_shared_3_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 3 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="3" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 3 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="3" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_3_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 3 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="3" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, finding a shared 3-bedroom flat for students in Oldfield Park, Bath can be a rewarding and convenient option for those looking for affordable accommodation close to the city center and university campuses. With a wide variety of properties available in this vibrant area, students can enjoy a sociable and comfortable living environment while studying in Bath. Residents can take advantage of the numerous amenities, bars, restaurants, and green spaces in the neighborhood, making it a popular choice among students. Overall, renting a shared 3-bedroom flat in Oldfield Park provides a great balance between affordability, convenience, and a vibrant student community atmosphere.</p></>)
};

export default BathOldfieldParkFlat3;