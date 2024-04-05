import React ,{useState,useEffect }from 'react'
import { Container,PostForm } from '../components'
import appwriteService from '../Appwrite/config'
import {useParams,useNavigate} from 'react-router-dom'

function EditPost() {
    const [post ,Setpost] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate() 

    useEffect(()=>{
        if(slug){
            appwriteService.getPost(slug).then((post) =>{
                if(post){
                    Setpost(post)
                }
            })
        }
        else{
            navigate('/')
        }
    },[slug,navigate])

  return post? (
    
    <div className='py-8'>
       <Container>
           <PostForm post={post} />
       </Container>
    </div>
  ) : null
}

export default EditPost