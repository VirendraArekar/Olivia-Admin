import React from "react";
import Button from "../components/Button";
import Google from "../assets/images/g_search.png"
import {useNavigate} from "react-router-dom"

export default function Signup(props) {
  const navigate = useNavigate();
  return (
    <>
      <div class="flex">

        <div className="w-1/2 flex  justify-center">

          <div className="flex justify-center flex-col w-96">

            <div className="p-3 flex justify-center ">
              <img
                src={require("../assets/images/logo.png")}
                alt=""
                style={{
                  width: "10rem",
                }}
              />
            </div>
            <div className="text-[rgba(0, 0, 0, 0.6)] p-6 text-center text-[14px] flex justify-center">
            Register to create an account with Oliva Ministries
            </div>
            <div>
              <form>
              <div className="form-group mb-6 mt-4">
                  <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700 text-[14px]">Referral Code</label>
                  <input type="email" className="form-control block text-[14px] w-full px-3  text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                    aria-describedby="emailHelp" placeholder="Enter Referral Code" /> 
                </div>
                <div className="form-group mb-6 mt-4">
                  <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700 text-[14px]">Name </label><span style={{ color: "red" }}> &nbsp; *</span>
                  <input type="email" className="form-control block text-[14px] w-full px-3  text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter Name" />
                </div>
                <div className="form-group mb-6 mt-4">
                  <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700 text-[14px]">Email </label><span style={{ color: "red" }}> &nbsp; *</span>
                  <input type="email" className="form-control block text-[14px] w-full px-3  text-base  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                    aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group mb-6 mt=2">
                  <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700 text-[14px]">Password</label><span style={{ color: "red" }}> &nbsp; *</span>
                  <input type="password" className="form-control block w-full px-3 py-1.5 text-base text-[14px] text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                    placeholder="Enter Your Password" />
                </div>
                <div className="form-group mb-6 mt=2">
                  <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700 text-[14px]">Confirm Password</label><span style={{ color: "red" }}> &nbsp; *</span>
                  <input type="password" className="form-control block w-full px-3 py-1.5 text-base text-[14px] text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                    placeholder="Confirm Password" />
                </div>
                <div className="form-group mb-6 mt=2">
                  <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700 text-[14px]">Address</label>
                  <input type="text" className="form-control block w-full px-3 py-1.5 text-base text-[14px] text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition  ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                    placeholder="Enter Your Address" />
                </div>
                <div class="form-group form-check text-center mb-6 ">
                <input type="checkbox"
                  class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                  id="exampleCheck25" checked/>
                <label class="form-check-label inline text-[14px] text-gray-800" for="exampleCheck25">I agree to the Oliva Ministries Terms & Conditions and Privacy Policy</label>
              </div>
                 <button type="submit" className="w-full px-6 py-2.5 bg-[#3D5890]  text-white font-medium text-xs text-[14px]  leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg  transition  duration-150 ease-in-out mt-2">Register</button>
                <button type="submit" className="w-full px-6 py-2.5  
              text-[#065FD4] font-medium text-xs border-2 text-[14px] leading-tight rounded shadow-md hover:bg-[#3D5890] hover:text-white  hover:shadow-lg focus:bg-[#3D5890] focus:shadow-lg focus:outline-none focus:ring-0   active:shadow-lg  transition  duration-150 ease-in-out mt-5"
              onClick={()=>navigate("/")}
              >Log In</button>

             

              </form>
            </div>
            <div className="text-[rgba(0, 0, 0, 0.6)] p-7 text-center text-[14px] flex justify-center">
             Or Login with
            </div>
            <div>
            <button type="submit" className="w-full px-6 py-2.5  
              text-[#065FD4] font-medium text-xs border-2 leading-tight rounded shadow-md hover:bg-[#3D5890] hover:text-white  hover:shadow-lg focus:bg-[#3D5890] focus:shadow-lg focus:outline-none focus:ring-0   active:shadow-lg  transition  duration-150 ease-in-out mt-5 "><span><img src={Google} style={{display:"inline",padding:"2px"}}/></span>&nbsp;Sign Up in with Google</button>
            </div>
          </div>

        </div>

        <div className="w-1/2 h-auto flex justify-center items-center bg-[#D5D8DB]" >
          <img
            src={require("../assets/images/imgSignUp.png")}
            alt=""
            style={{ height: "400px", width: "400px" }}
          />
        </div>
      </div>


      {/* </div> */}
    </>
  );
}
