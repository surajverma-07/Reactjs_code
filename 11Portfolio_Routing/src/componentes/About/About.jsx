import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default function About() {
  return (
    <section id="about" name="about" className='py-10 flex flex-col gap-y-16 bg-[#EFECEC] dark:bg-[#444444] mx-4 md:mx-0'>
      <div className="about-left py-3 w-full md:w-[60vw] mx-auto rounded-lg text-center shadow-lg">
        <div className="text-2xl font-medium py-10 rounded-lg w-full md:w-[55vw] hover:scale-105 shadow-md flex flex-col gap-3 justify-center mx-auto bg-[#0C2D57] text-[#EFECEC] dark:text-[#DA0037] group hover:text-[#FC6736] dark:hover:text-[#EDEDED]">
          <div>Student at Bhilai Institute of Technology Durg <i className="fa fa-university text-[#FC6736] group-hover:text-[#EFECEC] dark:text-[#EDEDED] dark:group-hover:text-[#DA0037]" aria-hidden="true"></i></div>
          <div>Public Relations Associate at Hult-Prize <i className="fa fa-solid fa-graduation-cap text-[#FC6736] group-hover:text-[#EFECEC] dark:text-[#EDEDED] dark:group-hover:text-[#DA0037]"></i></div>
          <div>Technical member at Public Speaking Club BITD <i className="fa fa-laptop text-[#FC6736] group-hover:text-[#EFECEC] dark:text-[#EDEDED] dark:group-hover:text-[#DA0037]" aria-hidden="true"></i></div>
        </div>
      </div>

      <div className="about-right flex flex-col md:flex-row text-center justify-evenly w-full md:w-[60vw] shadow-lg mx-auto rounded-lg py-4">
        <div className="frontend hover:scale-110 group w-full md:w-[25vw] shadow-md rounded-lg p-4 bg-[#0C2D57] text-[#EFECEC] hover:text-[#FC6736] dark:hover:text-[#DA0037] mt-4 md:mt-0">
          <h3 className="text-2xl font-medium dark:text-[#DA0037] dark:group-hover:text-[#EDEDED]">Frontend Web Development</h3>
          <div className="mt-2 text-lg">React JS</div>
          <div className="text-lg">JavaScript</div>
          <div className="text-lg">CSS</div>
          <div className="text-lg">HTML</div>
        </div>

        <div className="shadow-md rounded-lg p-4 hover:scale-110 w-full md:w-[25vw] bg-[#0C2D57] text-[#EFECEC] hover:text-[#FC6736] dark:hover:text-[#DA0037] group mt-4 md:mt-0">
          <h3 className="text-2xl font-medium dark:text-[#DA0037] dark:group-hover:text-[#EDEDED] ">Programming Languages <i className="fa fa-code"></i></h3>
          <div className="mt-2 text-lg">C++</div>
          <div className="mt-2 text-lg">C Programming</div>
          <div className="mt-2 text-lg">Python</div>
        </div>
      </div>
    </section>
  );
}
