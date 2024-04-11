import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
 const [songs, setSongs] = useState([]);
//npm i axios  1. doesn't need to convert in json using axios 
 useEffect(()=>{
  axios.get('/api/songs')
  .then((response)=>{
    // console.log(response.data)
    setSongs(response.data)
  })
  .catch((error)=> console.log(error))
 },[])
  return (
    <div>
      <h1>Jay Shree Ram</h1>
      <p>Songs {songs.length} </p>
      {
        songs.map((song,index)=>(
          <div key={song.id}> 
            <h2>{song.title}</h2>
            <h3>{song.content}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default App
