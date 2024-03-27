import React from 'react'
import { Link,NavLink } from 'react-router-dom';
import logo from '../../assets/logo2.png'

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={logo}
                                className="mr-3 h-40"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex gap-10 ">
                        <div>
                            <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <NavLink to="/" className={({isActive})=>
                                        `hover:underline
                                        ${isActive?"text-orange-700":"text-gray-500"}`
                                    }>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={({isActive})=>
                                                  `hover:underline
                                                  ${isActive?"text-orange-700":"text-gray-500"}`}>
                                        About
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='  w-96'>
                            <h2 className="mb-6 text-md  text-center  font-semibold text-gray-900  uppercase">Follow us</h2>
                            <div className='flex justify-evenly'>
                               <div>
                              <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/surajverma-07"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                 </li>
                                 <li>
                                 <a
                                        href="https://www.instagram.com/surajverma_00_7/"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                               </div>
                               <div>
                              <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://www.linkedin.com/in/suraj-kumar-verma-699b5a245/"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Linkdin
                                    </a>
                                 </li>
                                 <li>
                                 <a
                                        href="https://leetcode.com/surajverma_00_7/"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Leetcode
                                    </a>
                                </li>
                            </ul>
                               </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center m-0 p-0 bg-black w-full sm:justify-between">
                    <span className="text-sm text-white m-0 p-0 text-center w-full h-full">
                        © 2024
                        <Link to="https://cuwebdevsuraj.netlify.app/" target='_blank' className="hover:underline">
                            SurajKumarVerma
                        </Link>
                        . All Rights Reserved.
                    </span>
                    
                </div>
            </div>
        </footer>
    );
}

