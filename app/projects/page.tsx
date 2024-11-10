
import Image from "next/image";
import image from "../public/company-portfolio.jpeg"
import image2 from "../public/resume.jpeg"
import image3 from "../public/smoothie.jpeg"
import image4 from "../public/creative.jpeg"
import Link from "next/link";
export default function Project() {
  return (
    <div>
      <div id="Projects" className=" flex flex-col items-center pt-15 bg-customBoxGray ">
        <h2 className="mb-8 text-white services mt-7 text-5xl sm:text-6xl  font-sens font-bold">My Work</h2>
        <div className="sub-container flex gap-6 overflow-x-auto w-full px-4 pb-14">

          <div className="container-no-1  min-w-[200px] sm:min-w-[250px] md:min-w-[300px] h-60 bg-black rounded-xl p-4 cursor-pointer ">
            <h3 className="text-md sm:text-xl font-semibold text-customGray5">Company Portfolio</h3>
            <Image
              src={image}
              alt="image"
              sizes="fit"
              className=" w-{60%} h-28 bg-customGray mt-2 rounded-md drop-shadow-2xl shadow-black" />

            <Link href={"https://company-portfolio-nex5-rgxalyhnn-maheen-zubairs-projects.vercel.app"} target="_blank" className="block mt-2 text-white  hover:underline"> Visit Project </Link>
          </div>

          <div className="container-no-2  min-w-[200px] sm:min-w-[250px] md:min-w-[300px] h-60 bg-black rounded-xl p-4 cursor-pointer shadow drop-shadow-2xl shadow-black">
            <h3 className="text-md sm:text-xl font-semibold text-customGray5">Resume Generator</h3>
            <Image
              src={image2}
              alt="image"
              sizes="fit"
              className=" w-{60%} h-28 bg-customGray mt-2 rounded-md " />

            <Link href={"https://resume-generator-m-5-9ydkrbefy-maheen-zubairs-projects.vercel.app"} target="_blank" className="block mt-2 text-white  hover:underline"> Visit Project </Link>
          </div>

          <div className="container-no-3  min-w-[200px] sm:min-w-[250px] md:min-w-[300px] h-60 bg-black rounded-xl p-4 cursor-pointer  shadow drop-shadow-2xl shadow-black">
            <h3 className="text-md sm:text-xl font-semibold text-customGray5">Smoothie Website</h3>
            <Image
              src={image3}
              alt="image"
              sizes="fit"
              className=" w-{60%} h-28 bg-customGray mt-2 rounded-md drop-shadow-2xl shadow-black" />

            <Link href={"https://ass5-smoothies-1klq-en7xwf7gk-maheen-zubairs-projects.vercel.app"} target="_blank" className="block mt-2 text-white  hover:underline"> Visit Project </Link>
          </div>

          <div className="container-no-4  min-w-[200px] sm:min-w-[250px] md:min-w-[300px] h-60 bg-black rounded-xl p-4 cursor-pointer  shadow drop-shadow-2xl shadow-black">
            <h3 className="text-md sm:text-xl font-semibold text-customGray5">Creative Resume</h3>
            <Image
              src={image4}
              alt="image"
              sizes="fit"
              className=" w-{60%} h-28 bg-customGray mt-2 rounded-md drop-shadow-2xl shadow-black" />

            <Link href={"https://milestone-1-lvpwialk4-maheen-zubairs-projects.vercel.app"} target="_blank" className="block mt-2 text-white  hover:hover:underline"> Visit Project </Link>
          </div>
        </div>
      </div>
    </div>
  )
}