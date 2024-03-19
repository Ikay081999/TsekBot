import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Authentication from './Authentication';
import { getInitials } from '../functions/Initial';

const Sidenav = () => {
    const [isOpen, setIsOpen] = useState(true); // Set initial state to true
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsOpen(!isOpen); // Toggle the state
    };

    const handleLogout = () => {
        axios.get('http://localhost:8000/logout')
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log(err));
    }



    const [user, setUser] = useState({
        emp_id: 0,
        f_name: '',
        m_name: '',
        s_name: '',
        status: 0,
    })

    Authentication(setUser);





    const initials = getInitials(user.f_name);

    return (
        <nav className={`sidebar ${isOpen ? '' : 'close'}`}>
            <header>
                <div className="image-text">

                    <div className="user-logo">
                        <div> <h1 className='text-7xl my-10'>{initials}</h1></div>
                    </div>
                </div>

                <i className='bx bx-chevron-right toggle' onClick={toggleSidebar}></i>
            </header>

            <div className='pt-2'> <p className='text-center'>{user.f_name}  {user.s_name}</p></div>

            <hr className='mt-10' />

            <div className="menu-bar">
                <div className="menu">
                    <ul className="menu-links">
                        <li className="nav-link">
                            <Link to="/home">
                                <i className='fa-solid fa-house icon'></i>
                                <span className="text nav-text">Dashboard</span>
                            </Link>
                        </li>

                        {/* Other menu items */}

                        <li className="nav-link">
                            <Link to="/tsekbot2">

                                <i className='fa-solid fa-users icon'></i>
                                <span className="text nav-text">Tsekbot 2</span>
                            </Link>
                        </li>

                        <li className="nav-link">
                            <Link to="/home">

                                <i className='fa-solid fa-sitemap icon'></i>
                                <span className="text nav-text">Org. Structure</span>
                            </Link>
                        </li>

                        <li className="nav-link">
                            <Link to="/home">
                                <i className='fa-solid fa-gears icon'></i>
                                <span className="text nav-text">Preferences</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/home">
                                <i className='fa-solid fa-table-list icon'></i>
                                <span className="text nav-text">Logs</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="bottom-content">
                    <ul>
                        <li onClick={handleLogout}>
                            <i className='bx bx-log-out icon'></i>
                            <span className="text nav-text">Logout</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Sidenav;
