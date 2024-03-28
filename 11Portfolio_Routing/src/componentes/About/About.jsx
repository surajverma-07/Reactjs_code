import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
export default function About() {
    return (
        <section id="about" name="about" className='py-10 flex flex-col gap-y-16 bg-[#EFECEC]'>

        <div className="about-left border py-3 w-[60vw] mx-auto rounded-lg  text-center shadow-lg  ">
          <div className=" text-2xl font-medium py-10 border rounded-lg w-[55vw] hover:scale-105 shadow-md flex flex-col gap-3 justify-center mx-auto bg-[#0C2D57] text-[#EFECEC] group hover:text-[#FC6736]">
            <div>Student at Bhilai Institute of Technology Durg <i class="fa fa-university text-[#FC6736] group-hover:text-[#EFECEC]" aria-hidden="true"></i></div>
            <div>Public Relations Associate at Hult-Prize <i class="fa fa-solid fa-graduation-cap text-[#FC6736] group-hover:text-[#EFECEC]"></i></div>
            <div>Technical member at Public Speaking Club BITD <i class="fa fa-laptop text-[#FC6736] group-hover:text-[#EFECEC]" aria-hidden="true"></i></div>
          </div>
              </div>
    
    
        <div className="about-right flex text-center justify-evenly w-[60vw] shadow-lg mx-auto border rounded-lg py-4 ">
          <div className="frontend hover:scale-110  border w-[25vw] shadow-md rounded-lg p-4 bg-[#0C2D57] text-[#EFECEC] hover:text-[#FC6736]">
            <h3 className="text-2xl font-medium">Frontend Web Devlopment </h3>
            <div className="mt-2 text-lg">React JS </div>
            <div className="text-lg">Java Script </div>  
            <div className="text-lg">CSS</div>
            <div className="text-lg">HTML</div>
          </div>
    
          <div className="border shadow-md rounded-lg p-4 hover:scale-110 w-[25vw] bg-[#0C2D57] text-[#EFECEC] hover:text-[#FC6736]">
            <h3 className="text-2xl font-medium">Programming Languages <i class="fa fa-code" ></i></h3>
            <div className="mt-2 text-lg">C++ </div>
            <div className="mt-2 text-lg">C Programming </div>
            <div className="mt-2 text-lg">Python</div>
          </div>
        </div>
      </section>
    );
}
