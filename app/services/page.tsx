import Image from "next/image"
import cart from "../public/cart.png"
import UX from "../public/UX.png"
import FD from "../public/FD.png"

export default function Services(){
    return(
        <div id="Services" className="  bg-customMainServicesBox pb-10">
            <div className="flex flex-col justify-center items-center">
            <h1 className=" services mt-7 text-5xl sm:text-6xl font-sens font-bold  ">Services</h1>
            <div className=" flex flex-col justify-center items-center md:flex-row md:gap-32  md:mt-8 mb-4 ">
            <div className="  bg-customBoxGray flex flex-col  items-center h-[220px] md:h-[250px] w-[200px] md:w-[220] text-white  shadow-md shadow-black rounded-md mt-11"><div className=" h-[80px] w-[80px] bg-orange-400 mt-6 rounded-2xl transform rotate-45 shadow-md mb-5 shadow-black flex justify-center items-center" ><Image src={UX} alt="UI/UX" className=" -rotate-45 mt-2 ml-2" /></div> <h1 className="mb-2  ">UI/UX Design</h1> <p className="text-para text-xs pr-2 pl-3 ">Crafting intuitive and visually appealing interfaces that enhance user experiences</p></div>
            <div className=" bg-customBoxGray flex flex-col items-center h-[220px]  md:h-[250px] w-[200px] md:w-[220] text-white shadow-md shadow-black rounded-md mt-11"><div className=" h-[80px] w-[80px] bg-orange-400  mt-6 rounded-2xl transform rotate-45 shadow-md mb-5 shadow-black flex justify-center items-center"><Image src={cart} alt="E-Commerce" className=" invert -rotate-45 h-24 w-24 " /></div> <h1 className="mb-2 ">E-Commerce</h1> <p className="text-para text-xs pr-2 pl-3">Building responsive, dynamic, and user-friendly web applications with clean code</p></div>
            <div className=" bg-customBoxGray flex flex-col items-center h-[220px] md:h-[250px] w-[200px] md:w-[220] text-white  shadow-md shadow-black rounded-md mt-11"><div className=" h-[80px] w-[80px] bg-orange-400  mt-6 rounded-2xl transform rotate-45 shadow-md mb-5 shadow-black flex justify-center items-center"><Image src={FD}   alt="Front-End Development" className=" -rotate-45 h-14 w-14" /></div> <h1 className="mb-2 ">Front-End Development</h1> <p className="text-para text-xs pr-2 pl-3">Designing and developing seamless e-commerce solutions to drive online sales</p></div>

            </div>
            </div>
        </div>
    )
}