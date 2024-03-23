
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


const  BathAvonParkHouse7 = () => 
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

    return (<><h1>Shared 7 Bedroom Houses for Students in Avon Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-7-bedroom-houses-for-students-in-avon-park-bath.png')} alt='Shared 7 Bedroom Houses for Students in Avon Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_7_bedroom_houses_for_students_in_avon_park,_bath">Prices for Shared 7 Bedroom Houses for Students in Avon Park, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_avon_park,_bath__all_bills_inclusive">Shared 7 Bedroom Houses for Students in Avon Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_7_bedroom_houses_for_students_in_avon_park,_bath">Cheap Shared 7 Bedroom Houses for Students in Avon Park, Bath</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_avon_park,_bath__recently_added">Shared 7 Bedroom Houses for Students in Avon Park, Bath - Recently Added</a></li><li><a href = "#shared_7_bedroom_houses_for_students_in_avon_park,_bath__recently_reduced">Shared 7 Bedroom Houses for Students in Avon Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_7_bedroom_houses_for_students_in_avon_park,_bath"> <h2>Prices for Shared 7 Bedroom Houses for Students in Avon Park, Bath</h2></a><p><table><tr><th>House </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton' title='View our Shared 7 Bedroom Houses for Students in Avon Park, Bath' onClick={() => routeToPortal("?&beds=7&type=House&townLocationId=REGION^116&areaLocationId=REGION^71091")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_7_bedroom_houses_for_students_in_avon_park,_bath__all_bills_inclusive"> <h2>Shared 7 Bedroom Houses for Students in Avon Park, Bath - All Bills Inclusive</h2></a><p>Are you a student living in a 7 bedroom house in Avon Park, Bath, Somerset? Managing bills can be a real headache when you should be focusing on your studies. That's where <b>UniBills.com</b> comes in - with their <b>all bills inclusive</b> service, you can enjoy the hassle-free, stress-free option of having all your bills taken care of in one convenient package. No more chasing flatmates for money or dealing with multiple providers - <b>UniBills.com</b> will handle everything for you. Save time, energy, and most importantly, your sanity by opting for the <b>all bills inclusive</b> option provided by <b>UniBills.com</b>. Say goodbye to bill management woes and hello to peace of mind. Get a quote from <b>UniBills.com</b> or any accommodation on this website and let them take the weight off your shoulders so you can concentrate on what really matters - your studies.</p><a id = "cheap_shared_7_bedroom_houses_for_students_in_avon_park,_bath"> <h2>Cheap Shared 7 Bedroom Houses for Students in Avon Park, Bath</h2></a><p><Portlet location="REGION^71091" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_avon_park,_bath__recently_added"> <h2>Shared 7 Bedroom Houses for Students in Avon Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71091" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_7_bedroom_houses_for_students_in_avon_park,_bath__recently_reduced"> <h2>Shared 7 Bedroom Houses for Students in Avon Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71091" town="REGION^116" beds="7" homeType="detached,bungalow,semi-detached,terraced" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for a shared 7-bedroom house for students in Avon Park, Bath can be a rewarding experience. These spacious properties offer ample living space for students to coexist comfortably while pursuing their academic endeavors. With convenient access to local amenities and transport links, students can strike a balance between study and leisure in this vibrant city. The collaborative living environment fosters a sense of community among housemates, promoting social interactions and friendships that can last a lifetime. Overall, opting for a shared 7-bedroom house in Avon Park, Bath is a practical and cost-effective housing solution for students looking to immerse themselves in the academic and social aspects of student life in this picturesque city.</p></>)
};

export default BathAvonParkHouse7;