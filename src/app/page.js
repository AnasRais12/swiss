import React from "react";
import { MdFlight } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHelpCircle } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoAirplane, IoMenu } from "react-icons/io5";
import { IoAdd } from "react-icons/io5";
import { IoMenuSharp } from "react-icons/io5";
import { FaRegCreditCard } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="w-full flex px-2 sm:px-4 py-2 lg:px-12 bg-white items-center justify-between">
        <div className="w-[24%] md:w-[15%]  flex items-end ">
          <div className="w-[100%] ">
            <img className="py-2" src="images/swiss-logo.svg" />
          </div>
        </div>
        <div className="w-[80%] gap-3 hidden  lg:flex flex-col   ">
          <ul className="flex gap-7 items-center justify-end font-bold">
            <li>
              <a>Login And Registration</a>
            </li>
            <li>
              <a>Help?</a>
            </li>
          </ul>

          <div className=" heading flex gap-4 text-[25px] justify-end font-bold ">
            <h1>Books & Prepare</h1>
            <h1>My Booking</h1>
            <h1>Discover SWISS</h1>
          </div>
        </div>
        <div className="flex  w-[35%] lg:hidden   md:text-[40px] gap-2 sm:gap-4 items-center justify-end ">
          <GiHamburgerMenu className="  text-[20px] sm:text-[30px]  " />
          <IoMdHelpCircle className="  text-[20px] sm:text-[30px]" />
          <FaRegUserCircle className="  text-[20px] sm:text-[30px]" />
        </div>
      </div>
      <div className="pt-[100px] bg-hero-1 pb-[30px]   w-full flex justify-center items-center">
        <div className="w-[90%] bg-white px-2  flex flex-col">
          <div className="flex  gap-5 w-full py-[40px]">
            <div className="w-[33%] justify-center sm:justify-center lg:justify-start  md:justify-start    flex px-2 items-center gap-4">
              <MdFlight className="text-[25px] text-red-700" />
              <h1 className="font-bold text-[15px] md:block hidden">Flights</h1>
            </div>
            <div className="w-[33%] bg-[#685c5cee] opacity-1 px-2 items-center gap-4 flex sm:justify-center  justify-center md:justify-start  ">
              <FaCar className="text-[25px] text-white" />
              <h1 className="font-bold text-[15px] hidden md:block">
                Rental Car
              </h1>
            </div>
            <div className="w-[33%] bg-[#685c5cee] py-1 flex justify-center px-2 gap-4 sm:justify-center md:justify-start  items-center">
              <FaBed className="text-[25px] text-white" />
              <h1 className="font-bold text-[15px] hidden md:block">Hotel</h1>
            </div>
          </div>
          <div className="w-[100%]  flex flex-col gap-10  ">
            <div className="w-full flex justify-center  text-[18px] sm:flex  md:hidden ">
              <h1 className="">Round Trip</h1>
            </div>

            <div className="md:flex gap-5 items-center hidden  text-[17px]">
              <h1 className="">Round Trip</h1>
              <h1>Economy, 1 Traveller</h1>
              <div className="flex gap-2 items-center">
                <input type="checkbox" />
                <h1>Non Stop Only</h1>
              </div>
            </div>
            <div className="w-full flex-col flex  sm:flex-col md:flex-row pb-[20px]   gap-7 md:gap-2  ">
              <div className="md:w-[50%] sm-[w-100%] flex  flex-col sm:flex-col md:flex-row ">
                <div className="flex-col flex  w-[90%] px-4 sm:px-2 sm:w-[50%]  border-2  ">
                  <h1>From</h1>
                  <h1>Fankurant</h1>
                </div>
                <div className="flex items-center w-[90%] px-4 sm:px-2  sm:w-[50%] py-2   border-2 ">
                  <h1>To</h1>
                </div>
              </div>
              <div className="md:w-[25%]  w-[90%] py-2 sm:w-[50%] flex items-center px-4 sm:px-2  border-2 ">
                <h1>Departure-Return</h1>
              </div>
              <div className=" screen-size md:hidden gap-2 items-center px-2 flex text-[12px] sm:text-[14px]">
                <h1>Economy, 1 Traveller</h1>
                <div className="flex gap-2 items-center">
                  <input type="checkbox" />
                  <h1>Non Stop Only</h1>
                </div>
              </div>
              <div className="md:w-[25%] w-full sm:w-full  flex items-center px-2 border-4 border-red-700 rounded-[5px] font-bold text-white bg-red-700">
                <button className="w-full md:text-[14px] sm:text-[14px] text-[12px] ">
                  {" "}
                  Search Flight
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  pt-[30px] flex flex-wrap lg:px-0 px-5 sm:px-20 justify-start md:pl-20 lg:pl-0 lg:justify-center  gap-4">
        <div className="w-full lg:w-[29%] md:w-[45%] flex items-center justify-between border-b-2 sm:w-full  border-black py-2 ">
          <div className="w-[90%] flex gap-2 items-center">
            <div className="flex flex-col  items-center">
              <IoAirplane className="md:text-[25px] text-[17px]" />
            </div>
            <h1 className="sm:text-[20px] text-[15px] md:text-[20px] font-bold">
              Flight Status
            </h1>
          </div>
          <div className="w-[10%] flex justify-end ">
            <IoAdd className="font-bold text-[35px]" />
          </div>
        </div>
        <div className="w-full sm:w-full lg:w-[29%] md:w-[45%] flex items-center justify-between border-b-2 border-black py-2">
          <div className="w-[90%] flex gap-2 items-center ">
            <div className="flex flex-col  items-center">
              <IoAirplane className="text-[17px] md:text-[25px]" />
            </div>
            <h1 className="font-bold   sm:text-[17px] md:text-[20px] ">
              My Bookings/Check In{" "}
            </h1>
          </div>
          <div className="w-[10%] flex justify-end ">
            <IoAdd className="font-bold text-[35px]" />
          </div>
        </div>
        <div className="w-full sm:w-full lg:w-[29%] md:w-[45%] flex items-center justify-between border-b-2 border-black py-2 ">
          <div className="w-[90%] flex gap-2 items-center ">
            <FaRegCreditCard className="  text-[17px] md:text-[25px] font-bold" />
            <h1 className="font-bold sm:text-[15px] md:text-[20px] ">
              Miles And More{" "}
            </h1>
          </div>
          <div className="w-[10%] flex justify-end ">
            <IoAdd className="font-bold text-[35px]" />
          </div>
        </div>
      </div>

      <div className="w-full pt-[30px] gap-3 md:flex-row sm:flex-col flex-col  flex justify-center mb-[50px] ">
        <div className=" md:w-[44%] sm:w-full w-full border-2 border-black shadow-lg  pb-[15px] relative flex-col flex ">
          <div className=" w-full  h-[300px] mb-[30px]">
            <img className="w-full h-[300px]" src="images/1st-head.jpg" />
          </div>
          <div className="px-8 flex flex-col gap-14 mb-[20px]">
            <div className="flex flex-col  font-bold">
              <h1 className="text-[22px]">2024 summer timetable</h1>
              <h1 className="text-[30px]">Explore our new destinations</h1>
            </div>
            <div className="flex justify-center sm:justify-center md:justify-start">
              <button className=" absolute  sm:text-[15px] px-10 sm:px-10 bottom-2 md:px-6 py-3 rounded-[5px] text-white font-semibold bg-gray-600 hover:bg-gray-900">To The 2024 table</button>
            </div>
          </div>

        </div>
        <div className="md:w-[44%] w-full sm:w-full border-2 border-black shadow-lg  pb-[15px]  relative  flex-col flex">
        <div className=" w-full  h-[300px] mb-[30px]">
            <img className="w-full h-[300px]" src="images/2nd-head.jpg" />
          </div>
          <div className="px-8 flex flex-col gap-16 mb-[20px] ">
            <div className="flex flex-col  font-bold ">
              <h1 className="text-[22px]  sm:text-blue-600 md:text-red-500">SWISS Travel Breifing</h1>
              <h1 className="text-[30px]">Benefits from the travel </h1>
            </div>
            <div className="flex justify-center sm:justify-center md:justify-start  ">
              <button  className=" absolute bottom-2 px-10 sm:px-10 md:px-6 py-3 rounded-[5px] text-white font-semibold bg-gray-600 hover:bg-gray-900">To The travel guide</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex  flex-wrap gap-3 justify-center">
        <div className=" w-full sm:w-full lg:w-[21.5%] md:w-[40%] pb-[10px] flex-col border-2 border-black shadow-lg shadow-black">
          <div className="w-full h-[150px]">
            <img className="w-full h-[150px]" src="images/m1.jpg"/>
          </div>
          <div className="flex-col justify-center flex gap-6 px-6 ">
            <h1 className="text-[22px] text-center mt-[15px] font-bold" >Medical Compan </h1>
            <p className=" pb-[20px] border-b-2 border-black text-center">Professional support on the way the airport and throughout your whole trrip</p>
            <h1 className="text-center font-bold text-[#444444bd] text-[20px]"> Travel </h1>
          </div>

        </div>
        <div className=" w-full sm:w-full lg:w-[21.5%] md:w-[40%] pb-[10px] flex-col border-2 border-black shadow-lg shadow-black">
        <div className="w-full h-[150px]">
            <img className="w-full h-[150px]" src="images/m2.jpg"/>
          </div>
          <div className="flex-col justify-center flex gap-6 px-6 ">
            <h1 className="text-[22px] text-center mt-[15px] font-bold" >3 Miles and More</h1>
            <p className=" pb-[20px] border-b-2 border-black text-center">Professional support on the way the airport and throughout your whole trrip</p>
            <h1 className="text-center font-bold text-[#444444bd] text-[20px]">Book Travel</h1>
          </div>
        </div>
        <div className=" w-full sm:w-full lg:w-[21.5%] md:w-[40%] pb-[10px] flex-col border-2 border-black shadow-lg shadow-black">
        <div className="w-full h-[150px]">
            <img className="w-full h-[150px]" src="images/3m.avif"/>
          </div>
          <div className="flex-col justify-center flex gap-6 px-6 ">
            <h1 className="text-[22px] text-center mt-[15px] font-bold" >Catering on Board</h1>
            <p className=" pb-[20px] border-b-2 border-black text-center">Professional support on the way the airport and throughout your whole trrip</p>
            <h1 className="text-center font-bold text-[#444444bd] text-[20px]">To Seat</h1>
          </div>
        </div>
        <div className=" w-full sm:w-full lg:w-[21.5%] md:w-[40%] pb-[10px]  flex-col border-2 border-black shadow-lg shadow-black">
        <div className="w-full h-[150px]">
            <img className="w-full h-[150px]" src="images/m4.jpg"/>
          </div>
          <div className="flex-col justify-center flex gap-6 px-6 ">
            <h1 className="text-[22px] text-center mt-[15px] font-bold" >Better Together</h1>
            <p className=" pb-[20px] border-b-2 border-black text-center">Professional support on the way the airport and throughout your whole trrip</p>
            <h1 className="text-center font-bold text-[#444444bd] text-[20px]">Book & Earn</h1>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap sm:justify-start justify-start  md:justify-center py-8 gap-2 pb-[30px] border-b-2 border-black mt-[40px] ">
        <div className="lg:w-[29.5%] md:w-[40%] sm:w-full w-full border-2 border-black ">
          <div className="flex flex-col gap-5 pb-[25px] pt-[10px] px-4  ">
            <h1 className="text-[22px] font-bold sm:text-center text-center md:text-start">Rental Cars</h1>
            <p className="text-[17px] sm:text-center text-center md:text-start">Travel Safety and flexible with a rental car from our partner</p>
          </div>
        </div>
        <div className="lg:w-[29.5%] md:w-[40%] sm:w-full w-full border-2 border-black ">
        <div className="flex flex-col gap-5 pb-[25px] pt-[10px] px-4">
            <h1 className="text-[22px] font-bold sm:text-center text-center md:text-start">Your Hotel</h1>
            <p className="text-[17px] sm:text-center text-center md:text-start">Travel Safety and flexible with a rental car from our partner</p>
          </div>
        </div>
        <div className="lg:w-[29.5%] md:w-[80%] sm:w-full w-full  border-2 border-black ">
        <div className="flex flex-col gap-5 pb-[25px] pt-[10px] px-4">
            <h1 className="text-[22px] font-bold sm:text-center text-center md:text-start">Swiss Choice</h1>
            <p className="text-[17px] sm:text-center text-center md:text-start">Travel Safety and flexible with a rental car from our partner</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
