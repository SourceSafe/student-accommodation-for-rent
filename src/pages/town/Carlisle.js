import { Link } from 'react-router-dom';import './styles-town.css';import { MdOutlineQueryStats } from "react-icons/md";import { BsFillHouseFill } from "react-icons/bs";import { FaMagnifyingGlassChart } from "react-icons/fa6";const  Carlisle = () => {return (<><h1>Student Accommodation in Carlisle</h1><p>We specialize in helping students find <b>Student Accommodation in Carlisle</b> for the academic year 2024. Our website, <a href="../" title = "View our Home Page Student Accommodation for Rent">Student Accommodation for Rent</a>, helps millions of students find their private accommodation. We provide a depth of information on the best student areas to live near the <b>University of Cumbria</b>, and what you can expect to be paying for <b>Student Accommodation in Carlisle</b>. Our table of contents covers everything you need to know about finding your perfect student accommodation.</p><ul><li><a href = "#average_student_rents_in_carlisle">Average Student Rents in Carlisle</a></li><li><a href = "#average_student_rents_in_carlisle__houses">Average Student Rents in Carlisle - Houses</a></li><li><a href = "#average_student_rents_in_carlisle__flats">Average Student Rents in Carlisle - Flats</a></li><li><a href = "#average_student_rents_in_carlisle__studio_apartments">Average Student Rents in Carlisle - Studio Apartments</a></li><li><a href = "#average_student_rents_in_carlisle__by_student_location">Average Student Rents in Carlisle - By Student Location</a></li></ul><a id = "average_student_rents_in_carlisle"> <h2>Average Student Rents in Carlisle</h2></a><p><table><tr><th>Average Rent </th><th>House </th><th>Flat </th><th>Studio </th><th>Properties </th></tr><tr><td> </td><td><a className= "portalLink" href = "shared-houses-for-students-in-carlisle"></a> </td><td><a className= "portalLink" href = "shared-flats-for-students-in-carlisle"></a> </td><td><a className= "portalLink" href = "studio-apartments-for-students-in-carlisle"></a> </td><td><button className = 'searchButton'><a className = 'searchButtonLink' href = "../?&beds=&type=&townLocationId=REGION^283&locationId=" title = 'View our Student Accommodation in Carlisle'><div className = 'tableButtonAlignment'><text>View Properties</text><BsFillHouseFill className = 'searchButtonIcon' size ={17}></BsFillHouseFill></div ></a></button> </td></tr></table></p><a id = "average_student_rents_in_carlisle__houses"> <h2>Average Student Rents in Carlisle - Houses</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr></table></p><a id = "average_student_rents_in_carlisle__flats"> <h2>Average Student Rents in Carlisle - Flats</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr></table></p><a id = "average_student_rents_in_carlisle__studio_apartments"> <h2>Average Student Rents in Carlisle - Studio Apartments</h2></a><p><table><tr><th>Accommodation </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr></table></p><a id = "average_student_rents_in_carlisle__by_student_location"> <h2>Average Student Rents in Carlisle - By Student Location</h2></a><p><table><tr><th>location </th><th>Properties </th><th>More Info </th><th>Min monthly </th><th>Max monthly </th><th>Avg monthly </th><th>Min weekly </th><th>Max weekly </th><th>Avg weekly </th></tr></table></p></>)};export default Carlisle;