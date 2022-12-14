import { useState, Fragment, useRef} from "react";
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'
import Button from "../../components/Button";
import Copy from "../../assets/images/copy.png"
import Loader from "../../components/Loader"
import Gmail from "../../assets/images/email.png"
import FB from "../../assets/images/fb.png"
import copy from "copy-to-clipboard";
import {IoCaretBackOutline, IoCaretForwardOutline, IoPlayForwardSharp} from 'react-icons/io5'
import { Link } from "react-router-dom";

const CongratsModal = (props) => {
    const cancelButtonRef = useRef(null)
    const copyText='olivaquiz.referral-50641'
     
     const copyToClipboard = () => {
        copy(copyText);
        alert(`You have copied "${copyText}"`);
     }
    return(
        <>
            <Transition.Root show={props.open} as={Fragment}>
                <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={props.setOpen}>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                        <Dialog.Panel className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 w-3/4">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="mt-5 mx-12 border rounded-xl">
                                    <div className="p-10  bg-[#5296DB] rounded-t-xl">
                                        <div className="text-center">
                                            <h3 className="text-2xl text-center text-white font-bold">Congratulation !<br></br>John<br></br>You have scored</h3>
                                            <h1 className="text-white text-7xl  font-bold my-6">94</h1>
                                            <div className="bg-gray-100 border-2 border-dashed border-gray-700 p-3 text-center my-4 inline-block">
                                                You have won the Gift Voucher.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 bg-[##D5D9E6] rounded-b-xl">
                                        <div className="text-center">
                                            <div className='flex justify-center text-sm mt-4 '>
                                                <div className=' text-xs font-bold'>
                                                    Share with friends or invite them and get 10% off
                                                </div>
                                            </div>
                                            <div className='flex justify-center text-sm mt-4 '>
                                                <img className="w-8 h-6" style={{ margin: "10px" }} src={Gmail} alt="email" />
                                                <img className="w-7 h-6" style={{ margin: "10px" }} src={FB} alt="email" />
                                            </div>
                                            <div className='flex justify-center text-sm mt-4 '>
                                                <p className='text-sm text-[#282828]'>Or copy your personal link</p>
                                            </div>
                                            <div className='flex justify-center text-sm mt-4 '>
                                                <div className='flex  justify-between border-solid border-2' style={{ height: "2rem", width: "20rem" }}>
                                                    <p className='p-1'>{copyText}</p> 
                                                
                                                    <span  style={{ height: "1.9rem", width: "2rem" ,float:"right",backgroundColor:"#001246" }}>
                                                    <img className="p-2"src={Copy} onClick={copyToClipboard}></img>
                                                    </span> 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center text-gray-600 text-sm my-6 italic">You have answered 6 questions wrong</div>
                                
                            </div>
                               <div className=" pb-10 px-6 mx-12">
                                <button className="bg-[#E0E0E0] text-grey-darkest py-2 px-4 rounded inline-flex items-center" onClick={() => {}}>
                                    <IoCaretBackOutline className="w-4 h-3 mr-2"/>
                                    <span className="text-[#7C7C7C]">Go Back</span>
                                </button>

                                <Link  to="/" className="bg-[#3D5890] text-grey-darkest py-2 px-4 rounded inline-flex items-center float-right" onClick={() => {}}>
                                    <span className="text-white">Return Home</span>
                                </Link>
                               
                            </div>
                        </Dialog.Panel>
                        </Transition.Child>
                    </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}

export default CongratsModal;