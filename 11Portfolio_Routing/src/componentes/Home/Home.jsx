import React from 'react'
import { Link } from 'react-router-dom';
import mainimg from '../../assets/surajhomepage.png'

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl my-16">

            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-4 text-center sm:ml-auto">
                        <h2 className="lg:text-6xl font-semibold text-5xl">
                            Suraj Kumar Verma 
                        </h2>
                        <span className="hidden sm:block text-3xl">Frontend Web Devloper</span>
                        <p class="font-light">Translating ideas into dynamic and user-friendly websites</p>
                        <Link
                            className="inline-flex text-white items-center  justify-center text-xl py-2 font-medium bg-orange-700 rounded-lg hover:opacity-75 px-10 text-center"
                            to="https://www.linkedin.com/in/suraj-kumar-verma-699b5a245/"
                            target='_blank'
                        >
                            
                          Hire Me
                        </Link>
                    </div>
                </div>

                <div className="absolute  inset-0 w-full sm:my-20 sm:pt-1  h-full ">
                    <img className="w-96 bg-slate-100 rounded-lg" src={mainimg} alt="image1" />
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
