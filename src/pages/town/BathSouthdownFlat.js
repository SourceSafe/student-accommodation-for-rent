import { Link } from 'react-router-dom';import './styles-town.css';import { MdOutlineQueryStats } from "react-icons/md";import { BsFillHouseFill } from "react-icons/bs";import { FaMagnifyingGlassChart } from "react-icons/fa6";const  BathSouthdownFlat = () => {return (<><h1>Shared Flats for Students in Southdown, Bath</h1><ul><li><a href = "#average_rents_for_shared_flats_for_students_in_southdown,_bath">Average Rents for Shared Flats for Students in Southdown, Bath</a></li><li><a href = "#average_rents_for_shared_flats_for_students_in_southdown,_bath__houses">Average Rents for Shared Flats for Students in Southdown, Bath - Houses</a></li></ul><a id = "average_rents_for_shared_flats_for_students_in_southdown,_bath"> <h2>Average Rents for Shared Flats for Students in Southdown, Bath</h2></a><p><table><tr><th>Flat </th><th>Properties </th></tr><tr><td>£1400 per month </td><td><button className = 'searchButton'><a className = 'searchButtonLink' href = "../?&beds=&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^22627" title = 'View our Shared Flats for Students in Southdown, Bath'><div className = 'tableButtonAlignment'><text>View Properties</text><BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></a></button> </td></tr></table></p><a id = "average_rents_for_shared_flats_for_students_in_southdown,_bath__houses"> <h2>Average Rents for Shared Flats for Students in Southdown, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>1 Bed Flat </td><td><button className = 'searchButton'><a className = 'searchButtonLink' href = "../?&beds=1&type=Flat&townLocationId=REGION^116&areaLocationId=REGION^22627" title = 'View our 1 Bed Flats'><div className = 'tableButtonAlignment'><text>View Properties</text><BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></a></button> </td><td><button className = 'viewInfoButton'><a className = 'viewInfoButtonLink' href = 'shared-1-bedroom-flats-for-students-in-southdown-bath' title  = 'View Key Statistics for 1 Bed Flats'><div className><MdOutlineQueryStats className = 'viewInfoButtonIcon' size ={20}></MdOutlineQueryStats></div ></a></button> </td><td>£1400 </td><td>£1400 </td><td>£1400 </td><td>£325 </td><td>£325 </td><td>£325 </td></tr></table></p></>)};export default BathSouthdownFlat;