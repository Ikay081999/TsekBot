import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
const Request_Agent = () => {



    //hook to store the type of concerns fetched from the server 
    const [concerns, setConcern] = useState([]);

    //hook to fetch type of concerns from server
    useEffect(() => {
        axios.get('http://localhost:8000/concerns')
            .then(res => setConcern(res.data))
            .catch(err => console.log(err));

    }, [])

    //hook to store the input values
    const [values, setValues] = useState({
        category: 0,
        description: ''
    })

    useEffect(() => {
        // Set the initial category value if concerns has data
        if (concerns.length > 0) {
            setValues({ ...values, category: concerns[0].category_id });
        }
    }, [concerns]); // Run this effect when concerns state changes


    //hook for toast 
    const [toastVisible, setToastVisible] = useState(false);


    //function to handle submit of request agent
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/requestAgent', values)
            .then(res => {
                if (res.data) {
                    document.getElementById('request_agent').close()
                    document.getElementById('request_agent_form').reset();
                    setToastVisible(true)
                    setTimeout(() => {
                        setToastVisible(false);
                    }, 3000);
                } else {
                    alert(res.data.Error);
                }
            })
            .catch(err => console.error(err));
    }

    //function to check if the user has an ongoing request 
    //if so a modal will pop up showing error message
    const handleRequestAgent = (event) => {
        axios.get('http://localhost:8000/checkOngoingRequest')
            .then(res => {
                if (res.data) {
                    if (res.data.result > 0) {
                        document.getElementById('my_modal_3').showModal();
                    } else {
                        document.getElementById('request_agent').showModal();
                    }
                } else {
                    alert(res.data.Error);
                }
            })
            .catch(err => console.error(err));
    }



    return (
        <>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn btn-primary" onClick={() => document.getElementById('request_agent').showModal()}>Request Agent</button> */}
            <button className="btn btn-primary" onClick={handleRequestAgent}>Request Agent</button>

            <dialog id="request_agent" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Request Agent</h3>
                    <hr className="my-2  border-[#C6CDCD]" />

                    <form onSubmit={handleSubmit} id="request_agent_form">
                        <div class="border-b border-gray-900/10 pb-12">
                            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">

                                <div class="col-span-full">
                                    <label for="concern" class="block text-sm font-medium leading-6 text-gray-900">Type of Concern :</label>
                                    <div class="mt-2">

                                        <select id="concern" name="concern" autocomplete="concern-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            onChange={(e) => setValues({ ...values, category: e.target.value })}
                                            value={values.category}
                                        >
                                            {concerns.map((concern, index) => (
                                                <option key={index} value={concern.category_id}>{concern.category_name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div class="col-span-full">
                                    <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Description :</label>
                                    <div class="mt-2">
                                        <textarea id="description" name="description" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required onChange={(e) =>
                                            setValues({ ...values, description: e.target.value })
                                        }></textarea>

                                    </div>

                                </div>

                            </div>
                        </div>

                        <div class="mt-4 flex items-center justify-end gap-x-6">
                            <button type="submit" class="rounded-md bg-[#0098B7] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0098B7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4499B7]">Submit</button>
                        </div>
                    </form>
                </div>
            </dialog>


            {toastVisible && (
                <div className="toast toast-top toast-end">
                    <div className="alert alert-info">
                        <span>Request Agent Succesfully</span>
                    </div>
                </div>
            )}


            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Warning Message there is still ongoing Concern</p>
                </div>
            </dialog>




        </>
    )
}

export default Request_Agent
