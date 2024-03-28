import React from 'react'
 
function Card({image,Heading="website" , weblink="#",text="ye h hamari website "}){

    return(
        <div className="w-[350px]  rounded-lg border shadow-md  hover:bg-[#FC6736] hover:scale-105  group  ">
        <img
          src={image}
          alt="Laptop"
          className="h-[250px] w-full  object-fit rounded-lg"
        />
        <div className="py-3 text-center ">
          <h1 className="text-3xl text-[#0C2D57] font-semibold">{Heading}</h1>
          <p className="mt-3 text-md text-gray-800 px-4 group-hover:text-[#EFECEC]">
                 {text}
          </p>
          <button
            type="button"
            className="mt-4 rounded-md bg-[#ec5b53] px-6 py-1  text-xl font-semibold group-hover:bg-[#0C2D57] text-[#EFECEC]  shadow-sm focus-visible:outline  focus-visible:outline-2 focus-visible:outline-offset-2 "
            
          >
            <a href={weblink} target='_blank'>Go To Website</a>
            
          </button>
        </div>
      </div>
    )
}
export default Card