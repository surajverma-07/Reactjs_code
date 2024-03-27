import React from 'react'
 
function Card({image,Heading="website" , weblink="#",text="ye h hamari website "}){

    return(
        <div className="w-[380px]  rounded-lg border bg-blue-200    ">
        <img
          src={image}
          alt="Laptop"
          className="h-[250px] w-full  object-fit rounded-lg"
        />
        <div className="py-3 text-center ">
          <h1 className="text-3xl font-semibold">{Heading}</h1>
          <p className="mt-3 text-lg text-gray-600 px-4">
                 {text}
          </p>
          <button
            type="button"
            className="mt-4 rounded-md bg-black px-2.5 py-1  text-xl font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            
          >
            <a href={weblink} target='_blank'>Go To Website</a>
            
          </button>
        </div>
      </div>
    )
}
export default Card