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
import {RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5} from "react-icons/ri"
import {HiOutlineLightBulb} from 'react-icons/hi'
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
                 <img src={HomeImg} />
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



            
        </Skeleton>
    )
}


export default Home;