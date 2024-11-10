import Image from "next/image"
import image from "../public/profile-pic.png"
export default function Portfolio() {
    return (

        <div id="Portfolio" className=" bg-customGray text-white">
            <div className="flex flex-col items-center md:flex-row ">
                <div className="h-[320px]  w-[325px] md:w-[400px] shadow-black  bg-customgray3 md:h-[570px] md:ml-4 md:mt-5 ">
                    <div className="pt-7 ">
                        <h1 className=" pl-6 text-2xl font-thin mb-4 ">Who Am I?</h1>
                        <div className="flex flex-col justify-center items-center gap-5 ">
                            <h2 className=" border border[2px] border-black text-4xl font-sans bg-orange-400 pb-2 pr-2 pl-2 pt-2">Maheen Zubair</h2>
                            <p className="pr-5 pl-6 text-gray-300 font-sans text-base mb-5">A front-end developer with expertise in HTML, CSS, JavaScript, TypeScript, and Next.js. I am passionate about creating intuitive and responsive web designs, ensuring high-quality user experiences.</p>
                        </div>
                    </div>
                </div>

                <div className="h-[230px] flex justify-center items-center w-screen bg-customgray2 md:w-[350px] md:h-[640px] shadow-black shadow-lg drop-shadow-xl md:drop-shadow-none md:shadow-x-2xl ">
                    <Image src={image} alt="image" className="h-72 w-72 mb-14 lg:h-80 lg:w-80"/>
                </div>
                <div className="h-[320px] w-[325px] bg-customgray3 md:w-[400px]  md:h-[570px] md:mr-4 md:mt-5 ">
                    <h1 className=" services text-white mt-7 text-5xl font-sens font-bold ml-6 ">Skills</h1>

                    <div className="ml-5 font-sens ">
                        <h1 className="mt-6">Css/Tailwind Css</h1>
                        <div className=" w-[280px] bg-gray-300 rounded-full h-3 ">
                            <div className="bg-orange-400 h-3 rounded-full w-[85%] "></div>
                            <h1 className="mt-4">Typescript</h1>
                            <div className=" w-[280px] bg-gray-300 rounded-full h-3">
                                <div className="bg-orange-400 h-3 rounded-full w-[60%] "></div>
                                <h1 className="mt-4">Next.js</h1>
                                <div className=" w-[280px] bg-gray-300 rounded-full h-3">
                                    <div className="bg-orange-400 h-3 rounded-full w-[20%] "></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}