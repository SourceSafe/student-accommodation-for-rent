import { Link } from 'react-router-dom';import './styles-town.css';import { MdOutlineQueryStats } from "react-icons/md";import { BsFillHouseFill } from "react-icons/bs";import { FaMagnifyingGlassChart } from "react-icons/fa6";const  BathRushHillStudio = () => {return (<><h1>Studio Apartments for Students in Rush Hill, Bath</h1><ul><li><a href = "#average_rents_for_studio_apartments_for_students_in_rush_hill,_bath">Average Rents for Studio Apartments for Students in Rush Hill, Bath</a></li><li><a href = "#average_rents_for_studio_apartments_for_students_in_rush_hill,_bath__houses">Average Rents for Studio Apartments for Students in Rush Hill, Bath - Houses</a></li></ul><a id = "average_rents_for_studio_apartments_for_students_in_rush_hill,_bath"> <h2>Average Rents for Studio Apartments for Students in Rush Hill, Bath</h2></a><p><table><tr><th>Studio </th><th>Properties </th></tr><tr><td>£1287 per month </td><td><button className = 'searchButton'><a className = 'searchButtonLink' href = "../?&beds=&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71114" title = 'View our Studio Apartments for Students in Rush Hill, Bath'><div className = 'tableButtonAlignment'><text>View Properties</text><BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></a></button> </td></tr></table></p><a id = "average_rents_for_studio_apartments_for_students_in_rush_hill,_bath__houses"> <h2>Average Rents for Studio Apartments for Students in Rush Hill, Bath - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>Studio Apartment </td><td><button className = 'searchButton'><a className = 'searchButtonLink' href = "../?&beds=1&type=Studio&townLocationId=REGION^116&areaLocationId=REGION^71114" title = 'View our Studio Apartments'><div className = 'tableButtonAlignment'><text>View Properties</text><BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></a></button> </td><td><div/> </td><td>£795 </td><td>£1690 </td><td>£1287 </td><td>£184 </td><td>£393 </td><td>£299 </td></tr></table></p></>)};export default BathRushHillStudio;