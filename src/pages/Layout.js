import { Outlet, Link } from "react-router-dom";
import car_icon from './images/car.png'
import menu_icon from './images/icons8-menu-100 1.png'
import user_icon from './images/icons8-user-96 1.png'
import Registration from "./Registration";



const Layout = () => {
    
    return (
        <>
        <nav className="navContainer">   
                    <Link to="/"  className="iconAnimation"><img src={car_icon} alt="car_icon"/></Link> 
                
                    <div className="dropdown">
                        <img src={menu_icon} className="iconAnimation"/>
                        <div className="dropdown-content">
                            <Link to="/motorcycles" className="dropdownLink">Мотоциклы</Link>
                            <Link to="/cars" className="dropdownLink">Легковые</Link>
                            <Link to="/trucks" className="dropdownLink">Грузовые</Link>
                            <Link to="/popular" className="dropdownLink">Популярное</Link>
    
                        </div>
                    </div>
                    <Link to="/motorcycles" className="navLink">Мотоциклы</Link>
                
                    <Link to="/cars" className="navLink">Легковые</Link>
                
                    <Link to="/trucks" className="navLink">Грузовые</Link>
                
                    <Link to="/popular" className="navLink">Популярное</Link>
                
                    
                
                    <Link to="/registration" className="iconAnimation"><img src={user_icon} /></Link> 
              
        </nav>
        <Outlet></Outlet>
        </>
    )
}

export default Layout