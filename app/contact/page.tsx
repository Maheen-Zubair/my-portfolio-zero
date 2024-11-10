import Link from "next/link";

export default function Contact() {
    return (
        <div>
            <div id="Contact" className="mainContainer bg-customgray3 sm:h-screen flex flex-col sm:flex-row justify-center items-center">
                {/* Left Section */}
                <div className=" flex flex-col items-center sm:items-start text-center sm:text-left mt-10 sm:gap-5 sm:mt sm:mr-15 sm:mb-32 sm:ml-10 ">
                    <h1 className="sub-title text-4xl sm:text-5xl md:text-6xl font-bold text-white">Contact Me</h1>
                    <ul className="mt-4 space-y-2">
                        <li className="text-lg sm:text-xl font-normal text-customGray5 flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 inline text-orange-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                        </svg>
                            sanazubair071@gmail.com</li>
                        <li className="text-lg sm:text-xl font-normal text-customGray5 flex gap-2" >  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" className="fill-orange-400 inline"><path d="M 14 3.9902344 C 8.4886661 3.9902344 4 8.4789008 4 13.990234 L 4 35.990234 C 4 41.501568 8.4886661 45.990234 14 45.990234 L 36 45.990234 C 41.511334 45.990234 46 41.501568 46 35.990234 L 46 13.990234 C 46 8.4789008 41.511334 3.9902344 36 3.9902344 L 14 3.9902344 z M 18.005859 12.033203 C 18.633859 12.060203 19.210594 12.414031 19.558594 12.957031 C 19.954594 13.575031 20.569141 14.534156 21.369141 15.785156 C 22.099141 16.926156 22.150047 18.399844 21.498047 19.589844 L 20.033203 21.673828 C 19.637203 22.237828 19.558219 22.959703 19.824219 23.595703 C 20.238219 24.585703 21.040797 26.107203 22.466797 27.533203 C 23.892797 28.959203 25.414297 29.761781 26.404297 30.175781 C 27.040297 30.441781 27.762172 30.362797 28.326172 29.966797 L 30.410156 28.501953 C 31.600156 27.849953 33.073844 27.901859 34.214844 28.630859 C 35.465844 29.430859 36.424969 30.045406 37.042969 30.441406 C 37.585969 30.789406 37.939797 31.366141 37.966797 31.994141 C 38.120797 35.558141 35.359641 37.001953 34.556641 37.001953 C 34.000641 37.001953 27.316344 37.761656 19.777344 30.222656 C 12.238344 22.683656 12.998047 15.999359 12.998047 15.443359 C 12.998047 14.640359 14.441859 11.879203 18.005859 12.033203 z "> </path> </svg>
                            03312078981</li>
                    </ul>
                    <div className="social-icons flex mt-4 space-x-4">
                        <div className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" target="_blank" width="30" height="30" viewBox="0 0 30 30" className="fill-current">
                                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                            </svg>
                        </div>
                        <Link href="https://www.linkedin.com/in/maheen-zubair-27692a2ba/" target="_blank" className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30" className="fill-current">
                                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
                            </svg>
                        </Link>

                        <Link href="https://github.com/Maheen-Zubair" target="_blank"className="text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24" className="fill-current">
                                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Right Section */}
                <div className=" w-full sm:w-1/2 flex flex-col justify-center items-center mt-10 sm:mt-0">
                    <form className="w-11/12 sm:w-3/4">
                        <input
                            type="text"
                            name="Name"
                            placeholder="Your Name"
                            required
                            className="block w-full mb-4 sm:py-1 p-3 text-customGray5 rounded bg-customGray4"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="block w-full mb-4 sm:py-1 p-3 md:py-3 rounded text-customGray5 bg-customGray4"
                        />
                        <textarea
                            name="Message"
                            placeholder="Your Message"
                            rows={6}
                            className="block w-full mb-4 sm:py-1 p-3 md:py-3 text-customGray5 rounded bg-customGray4"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-orange-400 hover:bg-orange-600 text-white border-2 rounded-xl mb-5 sm:py-1 md:py-3 py-3 px-7 transition duration-300">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
