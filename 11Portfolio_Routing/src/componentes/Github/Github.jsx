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
    <div className='text-center m-5 bg-gray-600 text-white text-3xl'>
        <div> Name : {data.name} </div>
      <div> Github Followers : {data.followers} </div>
      
        <img className='align-center' src={data.avatar_url} alt="Git Picture" width={300} />
    </div>

        </>
  )
}

export default Github
export const githubInfoLoader = async () =>{
    const response = await fetch('https://api.github.com/users/surajverma-07')
    return response.json()
}