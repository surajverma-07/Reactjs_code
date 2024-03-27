import React, { useEffect, useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
//    const [data , setData] = useState([])
//      useEffect (()=>{
//        fetch('https://api.github.com/users/surajverma-07')
//        .then((res) => res.json())
//        .then(data => {
//         console.log(data)
//         setData(data)
//        })
//      },[])   
    return (
    <>
    <div className='text-center m-5 flex flex-col items-center gap-y-2 my-10 text-black text-3xl'>
        <div>  {data.name} </div>
      <div> Github Followers : {data.followers} </div>
      
        <img className='' src={data.avatar_url} alt="Git Picture" width={300} />
    </div>

        </>
  )
}

export default Github
export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/surajverma-07')
    return response.json()
}