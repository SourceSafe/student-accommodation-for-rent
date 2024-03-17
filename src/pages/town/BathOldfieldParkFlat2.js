
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


const  BathOldfieldParkFlat2 = () => 
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('C:/Development/React/student-accommodation-for-rent/src/pages/images/shared-2-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 2 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 2 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 2 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 2 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£859 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Tired of dealing with multiple utility bills each month while juggling your studies? Say goodbye to the hassle with an <b>all bills inclusive</b> service for your 2 bedroom student flat in Oldfield Park, Bath, Somerset. <b>UniBills.com</b> offers a convenient solution that allows you to <b>concentrate on your studies</b> without the added stress of managing bills. With all your utilities included in one monthly payment, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. This means no more worrying about paying different bills on time or calculating shared expenses with roommates. Get a quote from <b>UniBills.com</b> or any accommodation on this website today and simplify your student living experience. Focus on what truly matters and leave the rest to <b>UniBills.com</b>.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 2-bedroom flats for students in Oldfield Park, Bath can be a rewarding experience for those looking for affordable and convenient housing options. With a variety of properties available in this popular student area, students can find the perfect setup to balance their academic and social lives. Living in a shared flat can provide a sense of community and companionship, as well as the opportunity to split costs with roommates. Additionally, the location of Oldfield Park offers easy access to local amenities, transportation, and the University of Bath campus. Students can enjoy the vibrant atmosphere of the neighborhood while studying and socializing with like-minded peers. Overall, finding a shared 2-bedroom flat in Oldfield Park can enhance the student living experience and create lasting memories during the university years.</p></>)
};

export default BathOldfieldParkFlat2;