import { Link } from 'react-router-dom';import './styles-town.css';import { MdOutlineQueryStats } from "react-icons/md";import { BsFillHouseFill } from "react-icons/bs";const  BathHouse4 = () => {return (<><h1>Student Accommodation in Bath - 4 bedroom Houses</h1><p>We have listings for <b><a href="student-accommodation-in-bath" title = "View all Student Accommodation in Bath">Student Accommodation in Bath</a> - 4 bedroom Houses</b> for the academic year 2024.
4 bedroom Houses in Bath offer spacious and comfortable living spaces for students. With ample room for studying, relaxing and socializing, these houses are ideal for a group of friends looking to live together during their academic year.</p><ul><li><a href = "#student_accommodation_in_bath__4_bedroom_houses__prices">Student Accommodation in Bath - 4 bedroom Houses - Prices</a></li></ul><a id = "student_accommodation_in_bath__4_bedroom_houses__prices"> <h2>Student Accommodation in Bath - 4 bedroom Houses - Prices</h2></a><p><table><tr><th>Average Rent </th><th>House </th><th>Flat </th><th>Studio </th><th>Properties </th></tr><tr><td>£604 per month </td><td>£604 per month </td><td> </td><td> </td><td><button className = 'searchButton'><a className = 'searchButtonLink' href = "../?townLocationId=REGION^116&areaLocationId=&beds=4&type=house" title = 'View our Student Accommodation in Bath - 4 bedroom Houses'><div className = 'tableButtonAlignment'><text>View Properties</text><BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></a></button> </td></tr></table><br></br><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr><tr><td>4 Bed House </td><td><button className = 'searchButton'><a className = 'searchButtonLink' href = "../?townLocationId=REGION^116&areaLocationId=&beds=4&type=house" title = 'View our 4 Bed Houses'><div className = 'tableButtonAlignment'><text>View Properties</text><BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></a></button> </td><td><div/> </td><td>£450 </td><td>£998 </td><td>£604 </td><td>£104 </td><td>£232 </td><td>£140 </td></tr></table></p></>)};export default BathHouse4;