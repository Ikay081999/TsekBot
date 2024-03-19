import React from 'react'
import Sidenav from './components/Sidenav'
import moment from 'moment';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Tsekbot2 = () => {

    //hook to store the user concerns 
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/user_concerns')
            .then(res => setData(res.data))
            .catch(err => console.log(err));

    }, [])


    //for
    const [operations, setOperations] = useState(Array(data.length).fill(false));
    const toggleOperations = (index) => {
        const newOperations = [...operations];
        newOperations[index] = !newOperations[index];
        setOperations(newOperations);
    };



    return (
        <>
            <Sidenav />
            <section className="home p-10">
                {/* 
                <div class="border-b border-gray-200">
                    <nav class="flex">
                        <button class="px-4 py-2 bg-gray-100 text-gray-600 focus:outline-none active:bg-gray-200" id="nav-home-tab" data-target="#nav-home" aria-controls="nav-home" aria-selected="true">Home</button>
                        <button class="px-4 py-2 bg-gray-100 text-gray-600 focus:outline-none active:bg-gray-200" id="nav-profile-tab" data-target="#nav-profile" aria-controls="nav-profile" aria-selected="false">Profile</button>
                        <button class="px-4 py-2 bg-gray-100 text-gray-600 focus:outline-none active:bg-gray-200" id="nav-contact-tab" data-target="#nav-contact" aria-controls="nav-contact" aria-selected="false">Contact</button>
                    </nav>
                </div>

                <div class="mt-4">
                    <div class="hidden" id="nav-home">Home Content</div>
                    <div class="hidden" id="nav-profile">Profile Content</div>
                    <div class="hidden" id="nav-contact">Contact Content</div>
                </div> */}

                <div class="flex flex-col md:flex-row">
                    <div class="w-1/3 h-screen p-4 bg-[#DAF0F9] overflow-auto">
                        <div>
                            {data.map((dt, index) => {
                                const startDate = moment(dt.created_at).format('ddd - MMM D, YYYY');
                                const formattedTime = moment(dt.created_at).format('h:mm A');

                                // Check if the current date is different from the previous date
                                if (index === 0 || moment(data[index - 1].created_at).format('ddd - MMM D, YYYY') !== startDate) {
                                    return (
                                        <div key={index} className='rounded -2xl'>
                                            <div className="mt-6 mb-2 w-auto"  >

                                                <h6><span className='py-1 px-2 text-xs text-[#2E2E2E] bg-[#D9D9D9] rounded-xl'>{startDate}</span></h6>
                                            </div>
                                            <div className='flex py-1 px-2 hover:bg-[#4499B7] hover:text-white'>
                                                <div><p className='line-clamp-1 hover:text-white'>{dt.category_name}: {dt.concern_desc}</p></div>
                                                {dt.status === 3 && (
                                                    <div>
                                                        <details className="dropdown dropdown-end">
                                                            <summary className="fa-solid fa-gear"></summary>
                                                            <ul className=" shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                                                <li><a><i class="fa-solid fa-box-archive"></i> Archive</a></li>
                                                                <li><a><i class="fa-solid fa-trash"></i> Delete</a></li>
                                                            </ul>
                                                        </details>
                                                    </div>)}
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div key={index}>
                                            <div className='flex py-1 px-2 hover:bg-[#4499B7] hover:text-white'>
                                                <div><p className='line-clamp-1 hover:text-white'>{dt.category_name}: {dt.concern_desc}</p></div>
                                                {dt.status === 3 && (
                                                    <div>
                                                        <details className="dropdown dropdown-end">
                                                            <summary className="fa-solid fa-gear"></summary>
                                                            <ul className=" shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                                                <li><a><i class="fa-solid fa-box-archive"></i> Archive</a></li>
                                                                <li><a><i class="fa-solid fa-trash"></i> Delete</a></li>
                                                            </ul>
                                                        </details>
                                                    </div>)}
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                    <div class="w-2/3 h-screen p-4 bg-red-200">

                        rgburgb
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tsekbot2
