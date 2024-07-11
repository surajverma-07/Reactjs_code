import React from 'react'
 
function Card({image,Heading="website" , weblink="#",text="ye h hamari website "}){

    return(
        <div className="md:w-[350px] w-full h-[33rem] m-5 relative rounded-lg border shadow-md  hover:bg-[#FC6736] hover:scale-105  group dark:bg-[#171717]  ">
        <img
          src={image}
          alt="Laptop"
          className="h-[250px] w-full  object-fit rounded-lg"
        />
        <div className="py-3 text-center w-full ">
          <h1 className="text-2xl text-[#0C2D57] font-semibold dark:text-[#DA0037]">{Heading}</h1>
          <p className="mt-3 text-[12px] text-gray-800 px-4 dark:text-[#EDEDED] group-hover:text-[#EFECEC] ">
                 {text}
          </p>
          <button
            type="button"
            className="mt-4 rounded-md bg-[#ec5b53] dark:bg-[#DA0037] px-6 py-1  text-xl font-semibold group-hover:bg-[#0C2D57] dark:group-hover:bg-[#444444] dark:group-hover:text-[#DA0037] text-[#EFECEC]  shadow-sm focus-visible:outline  focus-visible:outline-2 focus-visible:outline-offset-2 absolute bottom-3 left-20"
            
          >
            <a href={weblink} target='_blank'>Go To Website</a>
            
          </button>
        </div>
      </div>
    )
}
export default Card