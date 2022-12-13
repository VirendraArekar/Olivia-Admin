import Skeleton from "../../layouts/Skeleton";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import HomeImg from "../../assets/images/gp_.png"
import LoginImg from "../../assets/images/login.png"
import RegisterImg from "../../assets/images/register.png"
import MemberImg from "../../assets/images/member.png"
import LangImg from "../../assets/images/lang.png"
import QueImg from "../../assets/images/que.png"
import WeImg from "../../assets/images/we.png"
import OrnamentImg from '../../assets/images/Ornament.png'
import EllipseImg from '../../assets/images/Ellipse.png'
import {RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5} from "react-icons/ri"
import {HiOutlineLightBulb} from 'react-icons/hi'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import Right from "../../assets/images/right.png"
import { useState } from "react";

const Home = (props) => {
    const [load, setLoad] = useState(false)
    return(
        <Skeleton>
            <Loader loader={load} />
            <div className="grid grid-cols-2 p-32 h-screen">
               <div className="align-middle">
                  <h1 className="text-5xl">
                    Gain  the  knowledge  by<br></br>
                    Solving  these  Amazing<br></br>
                    Quizes
                  </h1>
                  <p className="flex w-100 border-l-2 border-l-gray-800 my-12">
                    <div className="p-1 text-gray-500">We help you to prepare for more Bible quizes</div>
                  </p>
                  <Button title="Start The Quiz" />
               </div>
               <div className="align-middle">
                 <img src={HomeImg}/>
               </div>
            </div>

            
            <div className="align-middle my-5">
                <h3 className="text-center text-2xl text-[#1e2c48]">Here's how Olivia Ministries Quiz works</h3>
                <div className="grid grid-cols-2 px-32 py-12">
                    <div className="align-middle">
                        <img src={RegisterImg} />
                    </div>
                    <div className="align-middle py-12 mx-10">
                        <span className="rounded-full bg-[#1e2c48] inline-block p-4 mx-36 mb-8">
                            <RiNumber1 className="text-2xl text-white"/>
                        </span>
                        <div className="text-xl">Register on our Website</div>
                        <p className="flex w-100 border-l-2 border-l-gray-800  my-3">
                            <div className="p-1 text-gray-500">Registration our Website with your details</div>
                        </p>
                    </div>
                </div>
            </div>

            <div className="align-middle my-5">
                <div className="grid grid-cols-2 px-32 py-12">
                    
                    <div className="align-middle py-12 mx-10">
                        <span className="rounded-full bg-[#1e2c48] inline-block p-4 mx-32 mb-8">
                            <RiNumber2 className="text-2xl text-white"/>
                        </span>
                        <div className="text-xl">Log in with your credentials</div>
                        <p className="flex w-100 border-l-2 border-l-gray-800  my-3">
                            <div className="p-1 text-gray-500">After the Registration Login with<br></br> your Email & Password</div>
                        </p>
                    </div>
                    <div className="align-middle">
                        <img src={LoginImg} />
                    </div>
                </div>
            </div>



            <div className="align-middle my-5">
                <div className="grid grid-cols-2 px-32 py-12">
                    <div className="align-middle">
                        <img src={MemberImg} />
                    </div>
                    <div className="align-middle py-12 mx-10">
                        <span className="rounded-full bg-[#1e2c48] inline-block p-4 mx-36 mb-8">
                            <RiNumber3 className="text-2xl text-white"/>
                        </span>
                        <div className="text-xl">Take our Membership</div>
                        <p className="flex w-100 border-l-2 border-l-gray-800  my-3">
                            <div className="p-1 text-gray-500">Take our mandatory basic or standard plan <br></br>
                               to play our Quiz Game and Make Payment
                            </div>
                        </p>
                    </div>
                </div>
            </div>

           
            <div className="align-middle my-5">
                <div className="grid grid-cols-2 px-32 py-12">
                    
                    <div className="align-middle py-12 mx-10">
                        <span className="rounded-full bg-[#1e2c48] inline-block p-4 mx-32 mb-8">
                            <RiNumber4 className="text-2xl text-white"/>
                        </span>
                        <div className="text-xl">Choose your Language</div>
                        <p className="flex w-100 border-l-2 border-l-gray-800  my-3">
                            <div className="p-1 text-gray-500">After taking Membership process to<br></br>the Language selection to play Quiz in <br></br> your selected Language <br></br><br></br>
                            We have English, Telagu, Tamil and Kannada language
                            </div>
                        </p>
                    </div>
                    <div className="align-middle">
                        <img src={LangImg} />
                    </div>
                </div>
            </div>



            <div className="align-middle my-5">
                <div className="grid grid-cols-2 px-32 py-12">
                    <div className="align-middle">
                        <img src={QueImg} />
                    </div>
                    <div className="align-middle py-12 mx-10">
                        <span className="rounded-full bg-[#1e2c48] inline-block p-4 mx-36 mb-8">
                            <RiNumber5 className="text-2xl text-white"/>
                        </span>
                        <div className="text-xl">Start Playing the Quiz</div>
                        <p className="flex w-100 border-l-2 border-l-gray-800  my-3">
                            <div className="p-1 text-gray-500">Play the Quiz game with 3 options you will<br></br>
                               have 90 sec for each Question
                            </div>
                        </p>
                    </div>
                </div>
            </div>


            <div className="text-center mb-24">
               <Button title="Start the Quiz" />
            </div>



            <div className="align-middle bg-[#dce3f0] py-8 px-10">
               <h3 className="text-3xl text-center py-4 text-[#1e2c48]">Who we are</h3>
                <div className="grid grid-cols-2 pt-4">
                    <div className="align-middle">
                        <img src={WeImg} />
                    </div>
                    <div className="align-middle py-12 mx-8">
                        <h3 className="text-4xl py-4 text-[#1e2c48]">Who help to increase your Knowledge</h3>
                        <p className="flex w-100 my-2">
                            <div className=" text-gray-500">
                            Donec sed erat ut magna suscipit mattis. Aliquam erat<br></br> volutpat. Morbi in orci risus. Donec pretium fringilla<br></br> blandit. Etiam ut accumsan leo. Aliquam id mi quam.<br></br> Vivamus dictum ut erat nec congue. Etiam facilisis<br></br> lacus ut arcu vulputate, non pellentesque sem convallis.<br></br> Proin tempus sapien nisl, nec varius risus tristique a.<br></br> Etiam ligula lacus, ultricies at cursus id, fringilla ne
                            </div>
                        </p>
                        <div className="grid grid-cols-12 align-middle mt-6">
                            <div className="text-start col-span-1 py-3">
                                <span className="rounded-full bg-[#1e2c48] inline-block p-2 mb-8">
                                    <HiOutlineLightBulb className="text-xl text-white"/>
                                </span>
                                
                            </div>
                            <div className="col-span-11">
                                <div className="text-lg">Loren Ipsum</div>
                                <p className="text-gray-500 ">Donec sed erat ut magna suscipit mattis. Aliquam<br></br> erat volutpat. </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 align-middle">
                            <div className="text-start col-span-1 py-3">
                                <span className="rounded-full bg-[#1e2c48] inline-block p-2 mb-8">
                                    <HiOutlineLightBulb className="text-xl text-white"/>
                                </span>
                                
                            </div>
                            <div className="col-span-11">
                                <div className="text-lg">Loren Ipsum</div>
                                <p className="text-gray-500 ">Donec sed erat ut magna suscipit mattis. Aliquam<br></br> erat volutpat. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="">
                 <h4 className="text-3xl text-center py-16 text-[#1e2c48] font-bold">Here is what our Clients are saying About us</h4>
                 <div className="w-100">
                    <div className="relative w-2/5 grid mx-auto">
                        <div className="h-80 align-middle">
                            <BsChevronLeft className="font-bold text-5xl absolute -left-16 cursor-pointer my-28"/>
                            <BsChevronRight className="font-bold text-5xl absolute -right-16 cursor-pointer my-28"/>
                            <img src={OrnamentImg} alt="ornament" className="w-28 absolute top-0 right-0"/>
                            <img src={OrnamentImg} alt="ornament" className="w-28 absolute left-0 bottom-32"/>
                        </div>
                        <div className="absolute top-10 left-10 right-10 shadow-2xl h-60 bg-white p-4">
                          <h3 className="text-xl text-center font-bold py-4">It was very good experience</h3>
                          <p className="mx-8">
                          Oliva Ministries have a very good Quiz system, Great and simple Website to understand and My knowledge has increased a lot from this. I will definitely recommend you to play their Quiz and you will get rewards & high knowledge.
                          </p>
                        </div>
                        <div className="flex mx-24 align-middle">
                           <img src={EllipseImg} className="w-14 h-14 rounded-full inline-block mx-2 my-4"/>
                           <img src={EllipseImg} className="w-14 h-14 rounded-full inline-block  mx-2 my-4"/>
                           <img src={EllipseImg} className="w-20 h-20 rounded-full inline-block  mx-2"/>
                           <img src={EllipseImg} className="w-14 h-14 rounded-full inline-block  mx-2 my-4"/>
                           <img src={EllipseImg} className="w-14 h-14 rounded-full inline-block  mx-2 my-4"/>
                        </div>
                        <h3 className="text-center font-bolder text-md">John Martin</h3>
                    </div>
                 </div>
            </div>
            <hr className="hr my-16 mx-32 font-bolder text-gray-800 border border-gray-300" />
            <div className="justify-center">
                <h3 className="text-3xl font-bold text-[#1e2c48] text-center">Pricing</h3>
                <h2 className="text-4xl font-bold text-center py-12">
                    Pay ₹100 to start playing Quiz
                </h2>
                <p className="text-center font-xs text-gray-500">
                Please select and pay the One Time Fee of Rs.100 in order to play the Quiz
                </p>

                <div className='flex justify-center mt-6 mb-24'>
                    <div className="w-72 h-80 border relative rounded-xl px-12">
                        {/* <div> */}
                            <div className='text-xl  mt-5 font-bold text-center' >One Time Fee</div>
                            <div className='text-xl font-bold text-center mt-4'>₹100</div>
                            <div className="text-[#828282] text-[12px] font-light text-center">Per Month / Year</div>
                            <div>
                                <div className='flex ml-2 mt-8 text-[15px] text-gray-500' ><img className="w-6 m-1 p-1" src={Right} alt="right" />100 Questions in 1 Quiz</div>
                            </div>
                            <div>
                                <div className='flex ml-2 mt-2 text-[15px] text-gray-500' ><img className="w-6 m-1 p-1" src={Right} alt="right" />Exciting Rewards</div>
                            </div>
                            <div className="absolute bottom-4 text-center px-6">
                              <Button title="Purchase" inverse={true}/>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </Skeleton>
    )
}


export default Home;