import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from "./index";
import authService from "../Appwrite/auth";
import { useForm } from "react-hook-form"
import { login } from "../store/authSlice";
function Signup() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {register , handleSubmit} = useForm()
    const [error,SetError] = useState("")

   const signup = async (data) =>{
    SetError("")
     try {
        const userData = await authService.createAccount(data)
        if(userData){
          
        }
     } catch (error) {
        SetError(error.message);
     }
   }

  return (
    <div>
      
    </div>
  )
}

export default Signup
