
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

    return (<><h1>Shared 4 Bedroom Houses for Students in Bloomfield, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-4-bedroom-houses-for-students-in-bloomfield-bath.png')} alt='Shared 4 Bedroom Houses for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_4_bedroom_houses_for_students_in_bloomfield,_bath">Prices for Shared 4 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive">Shared 4 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_4_bedroom_houses_for_students_in_bloomfield,_bath">Cheap Shared 4 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_bloomfield,_bath__recently_added">Shared 4 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#shared_4_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced">Shared 4 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_4_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Prices for Shared 4 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£618 per month </td><td><button className = 'searchButton' title='View our Shared 4 Bedroom Houses for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=4&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_4_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Shared 4 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 4-bedroom house in Bloomfield, Bath, Somerset? Tired of juggling multiple utility bills and dealing with the hassle of splitting costs with your housemates? <b>UniBills.com</b> offers the perfect solution with their <b>all bills inclusive</b> service. By subscribing to this convenient option, you can enjoy the peace of mind that comes with knowing that all your bills, from electricity and water to internet and TV, are taken care of in one monthly payment. This means you can <b>concentrate on your studies</b> and social life without the stress of managing household expenses. Say goodbye to arguments over who owes what and embrace the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Get a quote from <b>UniBills.com</b> or any accommodation on this website and make your student life in Bloomfield a whole lot easier.</p><a id = "cheap_shared_4_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Cheap Shared 4 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_bloomfield,_bath__recently_added"> <h2>Shared 4 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_4_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Shared 4 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="4" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In summary, the search for shared 4-bedroom houses for students in Bloomfield, Bath can be an exciting yet daunting task. With a variety of options available, it is important to consider factors such as location, amenities, and budget when making a decision. By taking the time to research and visit potential properties, students can find a comfortable and conducive living space to enhance their college experience. Ultimately, finding the perfect shared house for students in Bloomfield can lead to lasting friendships and memories. So, whether you're looking for a cozy house near campus or a spacious property with modern facilities, there is a place for everyone in Bloomfield, Bath.</p></>)
};

export default BathBloomfieldHouse4;