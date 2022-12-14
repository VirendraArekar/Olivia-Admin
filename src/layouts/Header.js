import React, { useEffect, useState } from "react"
import { MdPadding } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import User from "../assets/images/user.png";
import Button from '../components/Button'

export default function Header(props) {
    const { show, setShow, sideBar, setSideBar, profile, setProfile, responsive } = props;
    const [user, setUser] = useState()
    let navigate = useNavigate({});

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('user'))
        setUser(data)
    }, [])

    const logout = async () => {
        let clear = await localStorage.clear();
        navigate('/signin');
    }
    return (

        <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between bg-white shadow relative z-0">
            <div className="hidden lg:flex w-full pr-6">
                <div className="w-1/2 h-full hidden lg:flex items-center pl-3 pr-24">
                    <img src={Logo} alt="logo" height={"80px"} width={'80px'} className='p-2 ml-5'></img>
                </div>
                <div className="w-1/2 hidden lg:flex">
                    <div className="w-full flex items-center pl-10 justify-end">

                        <Link  className="m-4" to="#">How it works</Link>
                        <Link  className="m-4" to="#">Pricing</Link>
                        <Link  className="m-4" to="#">About us</Link>
                        <Button title="Login" inverse={true} className="mx-3" element="link" to="/login"/>
                        <Button title="Register" element="link" to="/signup"/>
                        {/* <div className="flex items-center relative cursor-pointer w-48" onClick={() => setProfile(!profile)}>
                            <p className=" flex items-center text-gray-800 text-sm mx-3">
                                <img  className="p-2" src={User} alt="userImg"/><span>John</span>
                            </p>

                            <div className="rounded-full">
                                {profile ? (
                                    <ul className="p-2 w-full border-r bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                                        <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                                            <div className="flex items-center" onClick={() => navigate('/profile')}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <circle cx={12} cy={7} r={4} />
                                                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                </svg>
                                                <Link className="text-sm ml-2" to="#">My Profile</Link>
                                            </div>
                                        </li>
                                        <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center">
                                            <div className="flex items-center" onClick={() => navigate('/profile')}>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-apps"  viewBox="0 0 24 24"  width={18} height={18}stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <rect x="4" y="4" width="6" height="6" rx="1" />
                                                    <rect x="4" y="14" width="6" height="6" rx="1" />
                                                    <rect x="14" y="14" width="6" height="6" rx="1" />
                                                    <line x1="14" y1="7" x2="20" y2="7" />
                                                    <line x1="17" y1="4" x2="17" y2="10" />
                                                </svg>
                                                <Link className="text-sm ml-2" to="#">Change Password</Link>
                                            </div>
                                        </li>
                                        <li className="flex w-full justify-between text-gray-600 hover:text-indigo-700 cursor-pointer items-center mt-2" onClick={() => { logout() }}>
                                            <div className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clipRule="evenodd" />
                                                </svg>

                                                <Link className="text-sm ml-2" to="#">Sign out</Link>
                                            </div>
                                        </li>
                                    </ul>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="text-gray-600 mr-3 visible lg:hidden relative" onClick={() => setShow(true)}>
                {!show &&
                    <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1={4} y1={8} x2={20} y2={8} />
                        <line x1={4} y1={16} x2={20} y2={16} />
                    </svg>
                }
            </div>
        </nav>
    )
}