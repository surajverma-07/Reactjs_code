import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
export default function About() {
    return (
        <section id="about" name="about" className='my-14 flex flex-col gap-y-24'>

        <div className="about-left border py-5 w-[60vw] mx-auto  text-center ">
          <div className=" text-2xl font-medium py-10 border rounded-lg w-[55vw] hover:scale-105 hover:bg-blue-800 border-blue-700 flex flex-col gap-3 justify-center mx-auto">
            <div>Student at Bhilai Institute of Technology Durg <i class="fa fa-university" aria-hidden="true"></i></div>
            <div>Public Relations Associate at Hult-Prize <i class="fa fa-solid fa-graduation-cap"></i></div>
            <div>Technical member at Public Speaking Club BITD <i class="fa fa-laptop" aria-hidden="true"></i></div>
          </div>
              </div>
    
    
        <div className="about-right flex text-center justify-evenly w-[60vw] mx-auto border rounded-lg py-10 border-blue-700 ">
          <div className="frontend hover:scale-110 hover:bg-blue-900 border w-[25vw] border-blue-950 rounded-lg p-4">
            <h3 className="text-2xl font-medium">Frontend Web Devlopment <i class="fa-solid fa fa-palette" ></i></h3>
            <div className="mt-2 text-lg">React JS </div>
            <div className="text-lg">Java Script </div>  
            <div className="text-lg">CSS</div>
            <div className="text-lg">HTML</div>
          </div>
    
          <div className="border border-blue-950 rounded-lg p-4 hover:scale-110 w-[25vw] hover:bg-blue-900">
            <h3 className="text-2xl font-medium">Programming Languages <i class="fa fa-code" ></i></h3>
            <div className="mt-2 text-lg">C++ </div>
            <div className="mt-2 text-lg">C Programming </div>
            <div className="mt-2 text-lg">Python</div>
          </div>
        </div>
      </section>
    );
}
