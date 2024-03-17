
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


const  BathOldfieldParkFlat10 = () => 
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

    return (<><h1>Shared 10 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-10-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 10 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_10_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 10 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 10 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_10_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 10 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 10 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_10_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 10 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_10_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 10 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£740 per month </td><td><button className = 'searchButton' title='View our Shared 10 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=10&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_10_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 10 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in a 10-bedroom student flat in Oldfield Park, Bath, Somerset can be stressful, especially when it comes to managing utility bills and expenses among the flatmates. To alleviate this burden, subscribing to an <b>all bills inclusive</b> service like the one offered by <b>UniBills.com</b> is highly advantageous. With <b>UniBills.com</b>, you no longer have to worry about dividing and chasing payments for electricity, water, internet, or heating. By opting for their all-inclusive package, you can focus and <b>concentrate on your studies</b> without the added stress of managing household bills. <b>UniBills.com</b> ensures a hassle-free experience, allowing you to enjoy the convenience and simplicity of their inclusive option. For an easy and straightforward solution to your accommodation expenses, whether it's for your 10-bedroom flat or any other property, be sure to get a quote from <b>UniBills.com</b> or any accommodation on this website. Simplify your student living experience by choosing the <b>all bills inclusive</b> option today.</p><a id = "cheap_shared_10_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 10 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="10" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 10 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="10" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_10_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 10 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="10" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>After looking for shared 10 bedroom flats for students in Oldfield Park, Bath, it's clear that there are several options available in this popular student neighborhood. With its close proximity to both the University of Bath and the city center, Oldfield Park offers convenience and a vibrant community atmosphere. These flats typically come fully furnished and offer shared common areas such as kitchens and living rooms, providing ample space for socializing and studying. Students can enjoy the benefits of communal living while also having their own private rooms for privacy when needed. Overall, finding a shared 10 bedroom flat in Oldfield Park is a great option for students looking for affordable and sociable accommodation during their time at university.</p></>)
};

export default BathOldfieldParkFlat10;