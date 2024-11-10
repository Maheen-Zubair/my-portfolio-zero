import Image from "next/image";
import Header from "../app/components/header"
import Portfolio from "./portfolio/page";
import Services from "./services/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import image2 from "./public/bg-laptop-pic.jpeg"
import Footer from "../app/components/footer"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header/>
   {/*main container*/}
    <div className="relative h-screen">   
        <div className="absolute inset-0">
        <Image 
          src={image2} 
          alt="background-image" 
          layout="fill" 
          objectFit="cover" 
        /> 
      </div>



 {/*home page*/}  
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <div className=" text-5xl sm:text-6xl font-sens text-center ">
         <div className="flex flex-col gap-3 font-thin"> Welcome!<br /><strong >I am</strong> 
           </div> <span className="text-orange-400 "><strong>front-end Developer</strong></span>
        </div>

          <div className="flex space-x-4 mt-8">
          <button className="bg-transparent hover:bg-white text-white hover:text-orange-400 border border[2px] rounded-3xl py-3 px-5  transition duration-300 ">
          <Link href={"#Projects"}>View Work</Link>
          </button>
            <button className="bg-transparent hover:bg-white text-white hover:text-orange-400 border border[2px] rounded-3xl py-3 px-5  transition duration-300 "><Link href={"#Contact"} >
            Contact Me!</Link>
          </button>
        </div>
      </div>

    {/*portfolio page*/}  
    <Portfolio/>
    <Services/>
    <Projects/>

    <Contact/>
    <Footer/>
    </div>
    </div>
  );
}


