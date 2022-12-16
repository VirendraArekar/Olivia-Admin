import React, { useEffect, useState } from 'react'
import Skeleton from '../../layouts/Skeleton'
import { getAPI, postAPI } from '../../network'
import copy from "copy-to-clipboard";
import { Link, useNavigate } from 'react-router-dom'
import { checkVisibility, componentVisibility, fullName, validation } from '../../utils'
import Copy from "../../assets/images/copy.png"
import Loader from "../../components/Loader"
import Gmail from "../../assets/images/email.png"
import FB from "../../assets/images/fb.png"
import EllipseImg from "../../assets/images/Ellipse.png"
import {HiOutlinePencilAlt} from 'react-icons/hi'
import Right from "../../assets/images/right.png"
import {GoCalendar} from 'react-icons/go'
import {AiOutlineClockCircle} from 'react-icons/ai'

function Profile() {
    const copyText='olivaquiz.referral-50641'
    const [tab , setTab] = useState(1)
    const [open, setOpen] = useState(false)
     
    const copyToClipboard = () => {
        copy(copyText);
        alert(`You have copied "${copyText}"`);
    }
    // const navigateTo = useNavigate();
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [email, setEmail] = useState('')
    // const [mobile, setMobile] = useState('')
    // const [company, setCompany] = useState('')
    // const [user, setUser] = useState({})
    // const [userPhoto, setUserPhoto] = useState('')
    const [load, setLoad] = useState(false)

    // useEffect(() => { 
    //    let newUser = JSON.parse(localStorage.getItem('user'))
    //    setUser(newUser)
    //    setFirstName(newUser.firstName)
    //    setLastName(newUser.lastName)
    //    setMobile(newUser.mobile)
    //    setEmail(newUser.email)
    //    setCompany(newUser.company)

    // },[])
    // useDocumentTitle('IVY | Add Lead')


    // const onSubmit = async(e) => {
    //     e.preventDefault();
    //     const values = {
    //         firstName,
    //         lastName,
    //         email,
    //         mobile,
    //         userPhoto,
    //         company
    //     }

    //     console.log('Values',values)

    //     if(validation(null, 'First Name', firstName)){
    //         return;
    //     }
    //     if(validation(null, 'Last Name', lastName)){
    //         return;
    //     }
    //     else if(validation('phone', 'Mobile', mobile.toString())){
    //         return;
    //     }
    //     else if(validation('email', 'Email', email)){
    //         return;
    //     }

    //     else if(validation(null, 'Company', company)){
    //         return;
    //     }
    //     else if(validation('empty', 'Profile Picture', userPhoto)){
    //         return;
    //     }


    //     var formData = new FormData();
    //     formData.append('firstName',firstName)
    //     formData.append('lastName',lastName)
    //     formData.append('mobile',mobile)
    //     formData.append('email',email)
    //     formData.append('userPhoto', userPhoto)
    //     formData.append('company',company)

    //     setLoad(true)
    //     let datas = await postAPI('/profile', formData);
    //     if(datas){

    //     }
    //     setLoad(false)
    // }



    return (
        <Skeleton>
            <Loader loader={load} />
            
            <div className='bg-[#152C4F] h-56 w-full ' >
            </div>
            <div className='flex justify-center  relative bottom-32'>
                <div className=' bg-[#FCFCFC] h-[auto] w-3/4 rounded-xl sm:shadow-md shadow-inner'>
                    <div class="grid grid-cols-7 gap-4 p-4">
                        <div class="col-span-2 border-r-2 border-gray-500">
                            <div className='relative w-36 h-36 mt-6 rounded-full  bg-gray-400 mx-auto'>
                                <img src={EllipseImg} alt="profile" className='w-36 h-36'/>
                                <HiOutlinePencilAlt className="absolute right-0 text-2xl text-white bottom-6 p-1 bg-[#3D5890] border rounded-full" />
                            </div> <br></br>
                            <h3 className='text-center text-lg font-bold'>John Martin</h3>
                            <div className='mr-6  ml-2 mt-4'>
                                 <div className={`${tab === 1 ? 'bg-[#C1D0F0] text-[#3D5890] p-2' : 'p-2'} text-base font-bold cursor-pointer px-7 my-4`}  onClick={() => setTab(1)} >Profile Details</div>

                                 <div className={`${tab === 2 ? 'bg-[#C1D0F0] text-[#3D5890] p-2' : 'p-2'} text-base font-bold cursor-pointer px-7 my-4`}  onClick={() => setTab(2)}>My Rewards</div>

                                 <div className={`${tab === 3 ? 'bg-[#C1D0F0] text-[#3D5890] p-2' : 'p-2'} text-base font-bold cursor-pointer px-7 my-4`}  onClick={() => setTab(3)}>Quiz Payment details</div>

                                 <div className={`${tab === 4 ? 'bg-[#C1D0F0] text-[#3D5890] p-2' : 'p-2'} text-base font-bold cursor-pointer px-7 my-4`}  onClick={() => setTab(4)}>Transaction</div>

                                 <div className={`${tab === 5 ? 'bg-[#C1D0F0] text-[#3D5890] p-2' : 'p-2'} text-base font-bold cursor-pointer px-7 my-4`}  onClick={() => setTab(5)}>My Quizzes</div>

                                 <div className={`${tab === 6 ? 'bg-[#C1D0F0] text-[#3D5890] p-2' : 'p-2'} text-base font-bold cursor-pointer px-7 my-4`}  onClick={() => setTab(6)}>Change Password</div>
                            </div>
                        </div>
                        <div class="col-span-5 p-10">
                            {
                                tab === 1 &&
                                <>
                                   <h3 className='text-center text-2xl font-bold mb-12'>Profile Details</h3>
                                        <div className='mr-48 ml-16'>
                                            <div class="mb-8">
                                                <label for="username" class="form-label inline-block mb-2 text-[#50565F] text-sm">
                                                    Username Or Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="
                                                    form-control
                                                    block
                                                    w-full
                                                    px-3
                                                    py-1.5
                                                    font-normal
                                                    text-lg
                                                    text-gray-700
                                                    bg-white bg-clip-padding
                                                    border border-solid border-gray-300
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:text-gray-900 focus:bg-white focus:border-[#BBBBBB] focus:outline-none
                                                    "
                                                    id="username"
                                                    placeholder="Username Or Name"
                                                />
                                            </div>


                                            <div class="mb-8">
                                                <label for="username" class="form-label inline-block mb-2 text-[#50565F] text-sm">
                                                    Email *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="
                                                    form-control
                                                    block
                                                    w-full
                                                    px-3
                                                    py-1.5
                                                    text-lg
                                                    font-normal
                                                    text-gray-700
                                                    bg-white bg-clip-padding
                                                    border border-solid border-gray-300
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:text-gray-900 focus:bg-white focus:border-[#BBBBBB] focus:outline-none
                                                    "
                                                    id="username"
                                                    placeholder="Enter email address"
                                                />
                                            </div>


                                            <div class="mb-8">
                                                <label for="username" class="form-label inline-block mb-2 text-[#50565F] text-sm">
                                                    My Address *
                                                </label>
                                                <textarea
                                                    type="text"
                                                    className="
                                                    form-control
                                                    block
                                                    w-full
                                                    px-3
                                                    py-1.5
                                                    text-lg
                                                    font-normal
                                                    text-gray-700
                                                    bg-white bg-clip-padding
                                                    border border-solid border-gray-300
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:text-gray-900 focus:bg-white focus:border-[#BBBBBB] focus:outline-none
                                                    "
                                                    id="username"
                                                    rows={4}
                                                    placeholder="Enter email address"
                                                >
                                                </textarea>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 gap-12 ml-16">
                                            <button class="bg-[#3D5890] hover:bg-[#3D5890] text-white font-bold py-2 px-4 rounded">
                                                Save Changes
                                            </button>
                                            <button class="border border-[#3D5890] text-[#3D5890] font-bold py-2 px-4 rounded">
                                                Cancel
                                            </button>
                                        </div>
                                </>
                            }
                            {
                                tab === 3 &&
                                <>
                                   <h3 className='text-center text-2xl font-bold mb-12'>Quiz Payment details</h3>
                                        <div className='ml-24'>
                                        <div className=' text-green-500 font-bold mx-6 mt-20 text-[14px]'>You have paid your One Time Free</div>
                                        <div className='flex mt-6 '>
                                            <div className="w-72 h-80 border  rounded-xl">
                                                    <div className='px-2 py-0'>
                                                        <div className='text-lg font-medium mt-5 font-bold  text-center' >One Time Fee</div>
                                                        <div className='text-lg font-bold mt-5  text-center'>₹100</div>
                                                        <div className="text-[#828282] text-[12px] font-light text-center">Per Month / Year</div>
                                                        <div>
                                                            <div className='flex ml-6 mt-12' ><img className="w-6 m-1 p-1" src={Right} alt="right" />Exciting Rewards</div>
                                                        </div>
                                                        <div>
                                                            <div className='flex ml-6 mt-2' ><img className="w-6 m-1 p-1" src={Right} alt="right" />100 Questions in 1 Quiz</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </>
                            }

                            {
                                tab === 5 &&
                                <>
                                   <h3 className='text-center text-2xl font-bold mb-12'>My Quizzes</h3>
                                    <div className='mx-1'>
                                        <div className=' text-green-500 font-bold mt-20 text-[14px]'>You have score 94/100</div>
                                        {/* <div className='border w-100 rounded-lg'>
                                          
                                        </div> */}

                                        <div class="w-100 flex align-middle my-2">
                                            <div style={{width : '6%'}} className="inline-block justify-center py-4">
                                               
                                                    <div className="bg-[#152C4F] w-8 h-8 inline-block p-1 py-2 border rounded-full my-1">
                                                        <span className="text-white mx-2">1</span>
                                                    </div>
                                                   
                                                
                                            </div>
                                            <div style={{width : '94%'}} className="inline-block border rounded-lg p-4">
                                               <div className='grid grid-cols-12'>
                                                  <div className='col-span-3 font-bold text-[18px] p-2 border-r-2 border-gray-800'>
                                                    Quiz 1
                                                  </div>
                                                  <div className='col-span-4 p-2 mx-4 border-r-2 border-gray-800 text-[14px]'>
                                                    Questions 1-100
                                                  </div>
                                                  <div className='col-span-5'>
                                                    <div style={{width : '60%'}} className="inline-block text-center relative">
                                                      <div className='text-gray-600 text-[12px]'>Monday</div>
                                                      <div className='text-gray-600 text-[12px] my-1'>7 Nov 2022</div>
                                                      <GoCalendar className='absolute left-0 top-2 mx-2 text-gray-500' />
                                                    </div>
                                                    <div style={{width : '40%'}} className="inline-block text-center relative py-0">
                                                      <div className='text-gray-600 text-[12px] '>20.45</div>
                                                      <AiOutlineClockCircle className='absolute left-0 top-0 mx-2 text-gray-500' />
                                                    </div>
                                                  </div>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-2 gap-12 ml-10 my-16">
                                            <button class="bg-[#3D5890] hover:bg-[#3D5890] text-white font-bold py-2 px-4 rounded">
                                                Save Changes
                                            </button>
                                            {/* <button class="border border-[#3D5890] text-[#3D5890] font-bold py-2 px-4 rounded">
                                                Cancel
                                            </button> */}
                                        </div>
                                </>
                            }

                            {
                                tab === 6 &&
                                <>
                                   <h3 className='text-center text-2xl font-bold mb-12'>Change Password</h3>
                                        <div className='mr-48 ml-16'>
                                            <div class="mb-8">
                                                <label for="username" class="form-label inline-block mb-2 text-[#50565F] text-sm">
                                                    Old Password *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="
                                                    form-control
                                                    block
                                                    w-full
                                                    px-3
                                                    py-1.5
                                                    font-normal
                                                    text-lg
                                                    text-gray-700
                                                    bg-white bg-clip-padding
                                                    border border-solid border-gray-300
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:text-gray-900 focus:bg-white focus:border-[#BBBBBB] focus:outline-none
                                                    "
                                                    id="old_password"
                                                    placeholder="Enter Old Password"
                                                />
                                            </div>


                                            <div class="mb-8">
                                                <label for="username" class="form-label inline-block mb-2 text-[#50565F] text-sm">
                                                    New Password *
                                                </label>
                                                <input
                                                    type="text"
                                                    className="
                                                    form-control
                                                    block
                                                    w-full
                                                    px-3
                                                    py-1.5
                                                    text-lg
                                                    font-normal
                                                    text-gray-700
                                                    bg-white bg-clip-padding
                                                    border border-solid border-gray-300
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:text-gray-900 focus:bg-white focus:border-[#BBBBBB] focus:outline-none
                                                    "
                                                    id="new_password"
                                                    placeholder="Enter New Password"
                                                />
                                            </div>


                                            <div class="mb-8">
                                                <label for="username" class="form-label inline-block mb-2 text-[#50565F] text-sm">
                                                    Confirm Password *
                                                </label>
                                                <textarea
                                                    type="text"
                                                    className="
                                                    form-control
                                                    block
                                                    w-full
                                                    px-3
                                                    py-1.5
                                                    text-lg
                                                    font-normal
                                                    text-gray-700
                                                    bg-white bg-clip-padding
                                                    border border-solid border-gray-300
                                                    rounded
                                                    transition
                                                    ease-in-out
                                                    m-0
                                                    focus:text-gray-900 focus:bg-white focus:border-[#BBBBBB] focus:outline-none
                                                    "
                                                    id="confirm_password"
                                                    rows={4}
                                                    placeholder="Enter Confirm Password"
                                                >
                                                </textarea>
                                            </div>
                                        </div>
                                        <div class="grid grid-cols-2 gap-12 ml-16">
                                            <button class="bg-[#3D5890] hover:bg-[#3D5890] text-white font-bold py-2 px-4 rounded">
                                                Save Changes
                                            </button>
                                            <button class="border border-[#3D5890] text-[#3D5890] font-bold py-2 px-4 rounded">
                                                Cancel
                                            </button>
                                        </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Skeleton>
    )
}

export default Profile
