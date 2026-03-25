"use client"
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    conf_password: ""
  })
 
  const [error, setError] = useState("")

  const handleSubmit = async () => {
    if (!formData.email || !formData.password || !formData.conf_password){
      setError(`All fields are mandatory to fill`)
      return
    } 
    if (formData.password !== formData.conf_password) {
      setError(`Password didn't match correctly.`)
      return
    }

    try {
      const res = await axios.post("/api/signup", formData)
      if (res.status === 201) {
        setError("User Registered Successfully")
      } 
    } catch (error) {
      if (axios.isAxiosError(error)){
        setError(error.response?.data?.message || "Something went wrong")
      }
    }
    setError("")
  } 
  return (
    <div className="flex items-center justify-center h-screen py-2 px-4 m-4 ">
      <div className="justify-center items-center w-1/4 border bg-muted px-4 py-2 rounded-xl"> 
        <FieldGroup className="justify-center w-full flex items-center">
          <Field>
            <span className="text-2xl font-bold m-4 text-center items-center justify-center">SignUp</span>
            <FieldLabel htmlFor="fieldgroup-name">Email</FieldLabel>
            <Input id="fieldgroup-email" type="email" placeholder="Jhon Wick" onChange={(e) => setFormData({...formData, email: e.target.value})} value={formData.email}/>
          </Field>
          <Field>
            <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
            <Input id="fieldgroup-password" type="password" placeholder="Password length must be of 8 digits" onChange={(e) => setFormData({...formData, password: e.target.value})} value={formData.password}/>
            <FieldLabel htmlFor="fieldgroup-conf-password">Confirm Password</FieldLabel>
            <Input id="fieldgroup-conf-pass" type="password" placeholder="Confirm Password" onChange={(e) => setFormData({...formData, conf_password: e.target.value})} value={formData.conf_password}/>
            
              {error && <span className="text-red-600">{error}!</span>}
          </Field>
          
          <Field>
            <Button type="submit" className="bg-emerald-900 hover:bg-emerald-700 text-white cursor-pointer w-full" onClick={handleSubmit}>Submit</Button>
          </Field>
        </FieldGroup>
      </div>
    </div>
  )
}