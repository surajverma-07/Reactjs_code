import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
 const [search,setSearch] = useState('');
//  const [products,error,loading]= customReactQuery('/api/products?search='+search);
 const [products , setProducts]  = useState([]);
 const [error,setError] = useState(false);
 const [loading,setLoading] = useState(false);
 
 useEffect(()=>{
  const controller = new AbortController()
  ;(async()=>{
  try {
    setLoading(true)
     setError(false);
     const response = await axios.get('/api/products?search='+ search,{signal:controller.signal});
     console.log(response.data);
    
     setProducts(response.data);
     setLoading(false)
    //  console.log("setloading false ")
  } catch (error) {
    if(axios.isCancel(error)){
      console.log('Request canceled',error.message)
      return
    }
    setError(true);
    setLoading(false);
  }
  })()
  //cleanup method -> to unmount things
  return () =>{
     controller.abort();
  }
 },[search])

//  if(error){
//   return <h1>Something went Wrong </h1>
//  }

 if(loading){
  return(
    <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYzQ0dTNtZnpvN3ZvNWNoaWhpeTU4Y251anhrc2wzNjdhOXJrb3I4bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/uIJBFZoOaifHf52MER/giphy.gif" alt="Loading...." />
    // <h2>Loading.....</h2>

  )
 }
  return (
    <div>
         <h1>  API Handling </h1>  
         {error && <h1>Something went wrong </h1>}  
   
         <input type="text"
         value={search}
          onChange={(e)=> setSearch(e.target.value)}
          placeholder='search'
         />
         <h2>Number of Products are : {products.length} </h2>  
         {products && products.map((product)=>(
            <div key={product.id}>
              <h2>{product.name}</h2>
              <h3>Price = {product.price}</h3>
              <img src={product.image} alt="image" width={400} height={400} />
            </div>
         ))}
    </div>
  )
}

export default App

// const customReactQuery = (urlpath)=>{
 
//  return [products,error,loading]
// }