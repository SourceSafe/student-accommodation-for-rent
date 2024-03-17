
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


const  BathBloomfieldHouse6 = () => 
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

    return (<><h1>Shared 6 Bedroom Houses for Students in Bloomfield, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-6-bedroom-houses-for-students-in-bloomfield-bath.png')} alt='Shared 6 Bedroom Houses for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_6_bedroom_houses_for_students_in_bloomfield,_bath">Prices for Shared 6 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive">Shared 6 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_6_bedroom_houses_for_students_in_bloomfield,_bath">Cheap Shared 6 Bedroom Houses for Students in Bloomfield, Bath</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_bloomfield,_bath__recently_added">Shared 6 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#shared_6_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced">Shared 6 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_6_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Prices for Shared 6 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£772 per month </td><td><button className = 'searchButton' title='View our Shared 6 Bedroom Houses for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=6&type=House&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_6_bedroom_houses_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Shared 6 Bedroom Houses for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Subscribing to an <b>all bills inclusive</b> service for your 6 bedroom student house in Bloomfield, Bath, Somerset has numerous benefits. By choosing <b>UniBills.com</b>, you can enjoy the hassle-free all-inclusive option they provide. With all bills already included in your rent, you won't have to worry about managing different utility payments each month. This allows you to <b>concentrate on your studies</b> and student life without the stress of budgeting for bills. <b>UniBills.com</b> offers a convenient solution for students looking for a seamless accommodation experience. Get a quote from <b>UniBills.com</b> or any accommodation on this website to streamline your student living experience in Bloomfield, Bath, Somerset. With an <b>all bills inclusive</b> service, you can enjoy the ease and comfort of having everything taken care of for you, leaving you with more time to focus on what truly matters.</p><a id = "cheap_shared_6_bedroom_houses_for_students_in_bloomfield,_bath"> <h2>Cheap Shared 6 Bedroom Houses for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_bloomfield,_bath__recently_added"> <h2>Shared 6 Bedroom Houses for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_6_bedroom_houses_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Shared 6 Bedroom Houses for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="6" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 6-bedroom house for students in Bloomfield, Bath can be a daunting task but also a rewarding one. The process of finding the perfect accommodation requires thorough research, good communication between housemates, and careful consideration of factors such as location, budget, and amenities. By tapping into online platforms and local real estate agencies, students can increase their chances of finding a suitable property that meets their needs. Ensuring a harmonious living environment by setting clear expectations and responsibilities among housemates is essential for a successful shared living experience. Overall, with the right approach and a positive attitude, students can secure a comfortable and convenient home that fosters both academic success and memorable experiences during their time in Bath.</p></>)
};

export default BathBloomfieldHouse6;