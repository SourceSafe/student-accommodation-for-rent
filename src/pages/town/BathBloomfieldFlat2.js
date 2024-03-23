
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


const  BathBloomfieldFlat2 = () => 
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

    return (<><h1>Shared 2 Bedroom Flats for Students in Bloomfield, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-2-bedroom-flats-for-students-in-bloomfield-bath.png')} alt='Shared 2 Bedroom Flats for Students in Bloomfield, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_2_bedroom_flats_for_students_in_bloomfield,_bath">Prices for Shared 2 Bedroom Flats for Students in Bloomfield, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_bloomfield,_bath__all_bills_inclusive">Shared 2 Bedroom Flats for Students in Bloomfield, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_2_bedroom_flats_for_students_in_bloomfield,_bath">Cheap Shared 2 Bedroom Flats for Students in Bloomfield, Bath</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_bloomfield,_bath__recently_added">Shared 2 Bedroom Flats for Students in Bloomfield, Bath - Recently Added</a></li><li><a href = "#shared_2_bedroom_flats_for_students_in_bloomfield,_bath__recently_reduced">Shared 2 Bedroom Flats for Students in Bloomfield, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_2_bedroom_flats_for_students_in_bloomfield,_bath"> <h2>Prices for Shared 2 Bedroom Flats for Students in Bloomfield, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£680 per month </td><td><button className = 'searchButton' title='View our Shared 2 Bedroom Flats for Students in Bloomfield, Bath' onClick={() => routeToPortal("?&beds=2&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71095")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_2_bedroom_flats_for_students_in_bloomfield,_bath__all_bills_inclusive"> <h2>Shared 2 Bedroom Flats for Students in Bloomfield, Bath - All Bills Inclusive</h2></a><p>Are you a student in Bloomfield, Bath, Somerset looking for accommodation that takes care of all your bills in one convenient package? Look no further than <b>UniBills.com</b>! With our <b>all bills inclusive</b> service for your 2 bedroom student flat, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. Say goodbye to the stress of managing multiple bills each month and hello to a simplified living experience. By subscribing to our service, you can <b>concentrate on your studies</b> and extracurricular activities without worrying about utility bills or unexpected expenses. Get a quote from UniBills.</p><a id = "cheap_shared_2_bedroom_flats_for_students_in_bloomfield,_bath"> <h2>Cheap Shared 2 Bedroom Flats for Students in Bloomfield, Bath</h2></a><p><Portlet location="REGION^71095" beds="2" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_bloomfield,_bath__recently_added"> <h2>Shared 2 Bedroom Flats for Students in Bloomfield, Bath - Recently Added</h2></a><p><Portlet location="REGION^71095" beds="2" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_2_bedroom_flats_for_students_in_bloomfield,_bath__recently_reduced"> <h2>Shared 2 Bedroom Flats for Students in Bloomfield, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71095" town="REGION^116" beds="2" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 2 bedroom flats for students in Bloomfield, Bath can be a rewarding experience. By teaming up with a roommate, students can save on living expenses while enjoying a comfortable and social living arrangement. With a range of options available in Bloomfield, students can find the perfect flat to suit their needs, whether it's a modern apartment close to campus or a cozy flat with a garden view. Additionally, living with a roommate can provide opportunities for friendship, support, and shared experiences. Overall, finding a shared 2 bedroom flat in Bloomfield offers students a convenient and affordable housing solution in a vibrant and student-friendly neighborhood[].</p></>)
};

export default BathBloomfieldFlat2;