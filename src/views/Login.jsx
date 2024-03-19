import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;


    useEffect(() => {
        axios.get('http://localhost:8000/authentication')
            .then(res => {
                if (res.data.valid) {
                    navigate('/home');
                } else {
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/', values)
            .then(res => {
                if (res.data.Login) {
                    navigate('/home');

                } else {
                    alert(res.data.Error);
                }
            })
            .catch(err => console.error(err));
    }

    return (

        <div class="flex justify-end items-center h-screen bg-gradient-to-l from-cyan-500 to #037148">
            <div class="pr-32">

                <h1 class="text-5xl  text-center font-extrabold sm:text-5xl font-extrabold">TsekSuite.</h1>

                <div class='card w-full bg-base-100 shadow-xl md:max-w-full p-10 mr-10 mt-2'>
                    <p class="text-center pb-5">Login</p>
                    <form onSubmit={handleSubmit} class="space-y-4">
                        <div>
                            <label for="email" class="sr-only">Email address</label>

                            <div class="relative">
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email" onChange={e => setValues({ ...values, email: e.target.value })}
                                />

                                <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="size-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label for="password" class="sr-only">Password</label>

                            <div class="relative">
                                <input
                                    type="password"
                                    name="password"
                                    required
                                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Enter password" onChange={e => setValues({ ...values, password: e.target.value })}
                                />

                                <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="size-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div class="place-self-end">


                            <button
                                type="submit"
                                class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div >
        // <div class="mx-auto  px-4 py-16 sm:px-6 lg:px-8 h-screen w-screen bg-gradient-to-l from-cyan-500 to [#037148]">

        //     <div className=''>


        //         <div class="mx-auto max-w-2xl text-center font-bold">
        //             <h1 class="text-3xl font-extrabold sm:text-3xl">TsekSuite.</h1>
        //         </div>

        //         <div className='card w-1/3 bg-base-100 shadow-xl md:max-w-3/4 p-10 mt-10 mx-0'>
        //             <p class="text-center pb-5">Login</p>
        //             <form onSubmit={handleSubmit} class="space-y-4">
        //                 <div>
        //                     <label for="email" class="sr-only">Email address</label>

        //                     <div class="relative">
        //                         <input
        //                             type="email"
        //                             name="email"
        //                             required
        //                             class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
        //                             placeholder="Enter email" onChange={e => setValues({ ...values, email: e.target.value })}
        //                         />

        //                         <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 class="size-4 text-gray-400"
        //                                 fill="none"
        //                                 viewBox="0 0 24 24"
        //                                 stroke="currentColor"
        //                             >
        //                                 <path
        //                                     stroke-linecap="round"
        //                                     stroke-linejoin="round"
        //                                     stroke-width="2"
        //                                     d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
        //                                 />
        //                             </svg>
        //                         </span>
        //                     </div>
        //                 </div>

        //                 <div>
        //                     <label for="password" class="sr-only">Password</label>

        //                     <div class="relative">
        //                         <input
        //                             type="password"
        //                             name="password"
        //                             required
        //                             class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
        //                             placeholder="Enter password" onChange={e => setValues({ ...values, password: e.target.value })}
        //                         />

        //                         <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 class="size-4 text-gray-400"
        //                                 fill="none"
        //                                 viewBox="0 0 24 24"
        //                                 stroke="currentColor"
        //                             >
        //                                 <path
        //                                     stroke-linecap="round"
        //                                     stroke-linejoin="round"
        //                                     stroke-width="2"
        //                                     d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        //                                 />
        //                                 <path
        //                                     stroke-linecap="round"
        //                                     stroke-linejoin="round"
        //                                     stroke-width="2"
        //                                     d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        //                                 />
        //                             </svg>
        //                         </span>
        //                     </div>
        //                 </div>

        //                 <div class="place-self-end">


        //                     <button
        //                         type="submit"
        //                         class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        //                     >
        //                         Sign in
        //                     </button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>
    );
}

export default Login
