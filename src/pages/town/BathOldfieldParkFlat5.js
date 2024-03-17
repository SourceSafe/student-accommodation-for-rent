
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


const  BathOldfieldParkFlat5 = () => 
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

    return (<><h1>Shared 5 Bedroom Flats for Students in Oldfield Park, Bath</h1><div style = {{display:'flex', flexDirection:'row'}}><img style={{ width: ' 45%', marginTop: '10px' }} src={require('../images/shared-5-bedroom-flats-for-students-in-oldfield-park-bath.png')} alt='Shared 5 Bedroom Flats for Students in Oldfield Park, Bath'/><div style = {{ marginLeft: '100px', marginTop: '35px'}}><ul><h2 style = {{marginBottom:'5px'}} >Everything you need to know ..</h2><li><a href = "#prices_for_shared_5_bedroom_flats_for_students_in_oldfield_park,_bath">Prices for Shared 5 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive">Shared 5 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</a></li><li><a href = "#cheap_shared_5_bedroom_flats_for_students_in_oldfield_park,_bath">Cheap Shared 5 Bedroom Flats for Students in Oldfield Park, Bath</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added">Shared 5 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</a></li><li><a href = "#shared_5_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced">Shared 5 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</a></li><li><a href = "#the_conclusion">The Conclusion</a></li></ul></div></div><a id = "prices_for_shared_5_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Prices for Shared 5 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£715 per month </td><td><button className = 'searchButton' title='View our Shared 5 Bedroom Flats for Students in Oldfield Park, Bath' onClick={() => routeToPortal("?&beds=5&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^71108")}><div className = 'tableButtonAlignment'>View Properties<BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></button> </td></tr></table></p><a id = "shared_5_bedroom_flats_for_students_in_oldfield_park,_bath__all_bills_inclusive"> <h2>Shared 5 Bedroom Flats for Students in Oldfield Park, Bath - All Bills Inclusive</h2></a><p>Living in a 5 bedroom student flat in Oldfield Park, Bath, Somerset can be both exciting and stressful, especially when it comes to managing bills. To alleviate this burden, subscribing to an <b>all bills inclusive</b> service, such as the one offered by <b>UniBills.com</b>, can be a game changer. By opting for this service, you can enjoy the hassle-free all-inclusive option provided by <b>UniBills.com</b>. This means no more worrying about splitting bills with flatmates or dealing with different utility providers. With all your bills, including gas, electricity, water, and internet, conveniently bundled into one package, you can <b>concentrate on your studies</b> and enjoy a stress-free living experience. To find out more about the benefits of subscribing to an <b>all bills inclusive</b> service and to get a quote from <b>UniBills.com</b> or any accommodation on this website, visit <b>UniBills.com</b> today.</p><a id = "cheap_shared_5_bedroom_flats_for_students_in_oldfield_park,_bath"> <h2>Cheap Shared 5 Bedroom Flats for Students in Oldfield Park, Bath</h2></a><p><Portlet location="REGION^71108" beds="5" homeType="flat" sortType="1" keyText="" title="Cheepest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_oldfield_park,_bath__recently_added"> <h2>Shared 5 Bedroom Flats for Students in Oldfield Park, Bath - Recently Added</h2></a><p><Portlet location="REGION^71108" beds="5" homeType="flat" sortType="1" keyText="Added" title="Latest" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><a id = "shared_5_bedroom_flats_for_students_in_oldfield_park,_bath__recently_reduced"> <h2>Shared 5 Bedroom Flats for Students in Oldfield Park, Bath - Recently Reduced</h2></a><p><Portlet location="REGION^71108" town="REGION^116" beds="5" homeType="flat" sortType="1" keyText="Reduced" title="Reduced" loadingFile="LoadingListingsPortletCheap.json" > </Portlet></p><h2>The Conclusion</h2><p>In conclusion, searching for shared 5 bedroom flats for students in Oldfield Park, Bath can be both exciting and challenging. With its convenient location close to the University of Bath and local amenities, Oldfield Park is a sought-after area for student accommodation. By teaming up with housemates to split the rent and expenses, students can enjoy spacious living arrangements while fostering a sense of community. When looking for a property, it's important to consider factors such as budget, location, and housemates' preferences. Through thorough research and communication with potential landlords or letting agents, students can find the perfect 5 bedroom flat to call home during their time in Bath. So whether you are a group of friends or individuals looking to join a shared household, Oldfield Park offers a range of options to suit your needs and create lasting memories.</p></>)
};

export default BathOldfieldParkFlat5;