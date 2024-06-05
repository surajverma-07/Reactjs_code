import React from 'react'
import { Link } from 'react-router-dom';
import mainimg from '../../assets/surajhomepage1.png'


export default function Home() {
    return (
        <div className="mx-auto w-full h-full  bg-[#EFECEC] dark:bg-[#444444]">

            <aside className="overflow-hidden flex-wrap md:w-full md:justify-center md:items-center flex text-[#0C2D57] dark:text-[#EDEDED] rounded-lg">
                <div className="sm:mt-20 sm:mb-2 m-auto">
                    <img className="h-80 w-80 sm:-m-0 sm:p-0  m-auto" src={mainimg} alt="image1" />
                </div> 

                <div className="  flex items-center justify-center flex-col gap-3 h-72 ">
                    
                        <h2 className="text-3xl">
                            Suraj Kumar Verma
                        </h2>
                    <span className="text-xl p-2">Frontend Web Devloper</span>
                    <p class=" text-xl p-2 text-center">Translating ideas into dynamic and user-friendly websites</p>
                        <Link
                            className="inline-flex text-white items-center  justify-center text-xl py-2 font-medium dark:bg-[#DA0037]  bg-orange-700 rounded-lg hover:opacity-75 px-10 text-center"
                            to="https://www.linkedin.com/in/suraj-kumar-verma-699b5a245/"
                            target='_blank'
                        >
                            Hire Me
                        </Link>
                
                </div>
             
            </aside>
            {/* upper portion ends */}

            {/* <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1> */}
        </div>
    );
}
