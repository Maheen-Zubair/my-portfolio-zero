import Image from "next/image"
import cart from "../public/cart.png"
import UX from "../public/UX.png"
import FD from "../public/FD.png"

export default function Services(){
    return (
  <div id="Services" className="bg-customMainServicesBox pb-10">
    <div className="flex flex-col justify-center items-center">
      <h1 className="services mt-7 text-5xl sm:text-6xl font-sens font-bold">Services</h1>
{/* Services Wrapper: responsive grid layout */}
<div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 md:gap-y-10 lg:flex lg:flex-row lg:gap-32 mt-8 mb-4">
        
        {/* UI/UX DESIGN */}
        <div className="bg-customBoxGray flex flex-col items-center h-[220px] md:h-[250px] w-[200px] md:w-[220px] text-white shadow-md shadow-black rounded-md mt-11 
                        transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
          <div className="h-[80px] w-[80px] bg-orange-400 mt-6 rounded-2xl transform rotate-45 shadow-md mb-5 shadow-black flex justify-center items-center">
            <Image src={UX} alt="UI/UX" className="-rotate-45 mt-2 ml-2" />
          </div>
          <h1 className="mb-2">UI/UX Design</h1>
          <p className="text-para text-xs pr-2 pl-3">Designing clean, user-centered interfaces in Figma that translate smoothly into responsive web experiences.

</p>
        </div>

        {/* E-COMMERCE */}
        <div className="bg-customBoxGray flex flex-col items-center h-[220px] md:h-[250px] w-[200px] md:w-[220px] text-white shadow-md shadow-black rounded-md mt-11 
                        transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
          <div className="h-[80px] w-[80px] bg-orange-400 mt-6 rounded-2xl transform rotate-45 shadow-md mb-5 shadow-black flex justify-center items-center">
            <Image src={cart} alt="E-Commerce" className="invert -rotate-45 h-24 w-24" />
          </div>
          <h1 className="mb-2">E-Commerce</h1>
          <p className="text-para text-xs pr-2 pl-3">Developing fast, scalable e-commerce frontends with Next.js & Tailwind CSS — built for mobile and optimized for conversions.</p>
        </div>

        {/* FRONT-END DEV */}
        <div className="bg-customBoxGray flex flex-col items-center h-[220px] md:h-[250px] w-[200px] md:w-[220px] text-white shadow-md shadow-black rounded-md mt-11 
                        transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
          <div className="h-[80px] w-[80px] bg-orange-400 mt-6 rounded-2xl transform rotate-45 shadow-md mb-5 shadow-black flex justify-center items-center">
            <Image src={FD} alt="Front-End Development" className="-rotate-45 h-14 w-14" />
          </div>
          <h1 className="mb-2">Front-End Development</h1>
          <p className="text-para text-xs pr-2 pl-3">Crafting accessible, high-performance web apps using HTML, CSS, JavaScript, TypeScript, and modern frameworks like Next.js.

</p>
        </div>

      </div>
    </div>
  </div>
);

}