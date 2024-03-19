import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Authentication from './components/Authentication';
import TsekbotButton from './components/TsekbotButton';
import { getInitials } from './functions/Initial';
import Sidenav from './components/Sidenav'


const Home = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        emp_id: 0,
        f_name: '',
        m_name: '',
        s_name: '',
        status: 0,
    })





    axios.defaults.withCredentials = true;



    Authentication(setUser);








    return (
        <>
            <Sidenav />
            <section class="home">
                <div class="cont">
                    <div id="app">
                        <main class="p-10">

{/* 
                            <form>


                                <div class="border-b border-gray-900/10 pb-12">
                                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">

                                        <div class="col-span-full">
                                            <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                                            <div class="mt-2">
                                                <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                    <option>United States</option>
                                                    <option>Canada</option>
                                                    <option>Mexico</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-span-full">
                                            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">About</label>
                                            <div class="mt-2">
                                                <textarea id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                <div class="mt-6 flex items-center justify-end gap-x-6">
                                    <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                                </div>
                            </form> */}










                        </main>
                    </div>
                </div>
            </section>
            <TsekbotButton />

        </>
    );
}


function ReadableTime(dateTime) {
    const dateString = dateTime.dateTime; // Assuming apiDate is already in the format "2024-03-06T02:31:54.000Z"
    const date = new Date(dateString);

    // Options for formatting the date
    const options = { year: "numeric", month: "long", day: "numeric", hour: 'numeric', minute: 'numeric', timeZone: 'Asia/Manila' };


    const readableDate = date.toLocaleDateString("en-US", options);


    return readableDate;
}

export default Home;
