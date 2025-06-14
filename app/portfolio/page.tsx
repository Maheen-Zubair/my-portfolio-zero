"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import image from "../public/profile-pic.png";

function useInView(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      {
        threshold: 0.3, // trigger when 30% is visible
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}

export default function Portfolio() {
  const cssRef = useRef(null);
  const tsRef = useRef(null);
  const nextRef = useRef(null);

  const cssInView = useInView(cssRef);
  const tsInView = useInView(tsRef);
  const nextInView = useInView(nextRef);

  return (
    <div id="Portfolio" className=" bg-customGray text-white">
      <div className="flex flex-col items-center md:flex-row ">
        <div className="h-[320px]  w-[325px] md:w-[400px] shadow-black  bg-customgray3 md:h-[570px] md:ml-4 md:mt-5 ">
          <div className="pt-7 ">
            <h1 className=" pl-6 text-2xl font-thin mb-4 ">Who Am I?</h1>
            <div className="flex flex-col justify-center items-center gap-5 ">
              <h2 className=" border border[2px] border-black text-4xl font-sans bg-orange-400 pb-2 pr-2 pl-2 pt-2">
                Maheen Zubair
              </h2>
              <p className="pr-5 pl-6 text-gray-300 font-sans text-base mb-5">
                A front-end developer skilled in HTML, CSS, Tailwind CSS, JavaScript, TypeScript, Next.js , Python , Figma-to-code UI and responsive layouts. Currently exploring AI Agents to expand my capabilities.
              </p>
            </div>
          </div>
        </div>

        <div className="h-[230px] flex justify-center items-center w-screen bg-customgray2 md:w-[350px] md:h-[640px] shadow-black shadow-lg drop-shadow-xl md:drop-shadow-none md:shadow-x-2xl ">
          <Image
            src={image}
            alt="image"
            className="h-72 w-72 mb-14 lg:h-80 lg:w-80"
          />
        </div>
        <div className="h-fit w-[325px] bg-customgray3 md:w-[400px]  md:h-[570px] md:mr-4 md:mt-5 ">
          <h1 className=" services text-white mt-7 text-5xl font-sens font-bold ml-6 ">
            Skills
          </h1>

          <div className="ml-5 font-sans">
            <h1 className="mt-6">Css/Tailwind Css</h1>
            <div className="w-[280px] bg-gray-300 rounded-full h-3 overflow-hidden">
              <div
                ref={cssRef}
                className="bg-orange-400 h-3 rounded-full"
                style={
                  {
                    animation: cssInView
                      ? "fillBar 1s ease forwards"
                      : undefined,
                    "--bar-width": "95%",
                  } as React.CSSProperties
                }
              ></div>
            </div>

            <h1 className="mt-4">Typescript/Javascript</h1>
            <div className="w-[280px] bg-gray-300 rounded-full h-3 overflow-hidden">
              <div
                ref={tsRef}
                className="bg-orange-400 h-3 rounded-full"
                style={
                  {
                    animation: tsInView
                      ? "fillBar 1s ease forwards"
                      : undefined,
                    "--bar-width": "95%",
                  } as React.CSSProperties
                }
              ></div>
            </div>

            <h1 className="mt-4">Next.js</h1>
            <div className="w-[280px] bg-gray-300 rounded-full h-3 overflow-hidden">
              <div
                ref={nextRef}
                className="bg-orange-400 h-3 rounded-full"
                style={
                  {
                    animation: nextInView
                      ? "fillBar 1s ease forwards"
                      : undefined,
                    "--bar-width": "99%",
                  } as React.CSSProperties
                }
              ></div>
            </div>

             <h1 className="mt-4">Figma</h1>
            <div className="w-[280px] bg-gray-300 rounded-full h-3 overflow-hidden">
              <div
                ref={nextRef}
                className="bg-orange-400 h-3 rounded-full"
                style={
                  {
                    animation: nextInView
                      ? "fillBar 1s ease forwards"
                      : undefined,
                    "--bar-width": "99%",
                  } as React.CSSProperties
                }
              ></div>
            </div>

            <h1 className="mt-4 ">Python</h1>
            <div className="w-[280px] bg-gray-300  mb-8 rounded-full h-3 overflow-hidden">
              <div
                ref={nextRef}
                className="bg-orange-400 h-3 rounded-full"
                style={
                  {
                    animation: nextInView
                      ? "fillBar 1s ease forwards"
                      : undefined,
                    "--bar-width": "99%",
                  } as React.CSSProperties
                }
              ></div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
