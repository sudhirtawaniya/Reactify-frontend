import { useEffect } from "react"
import { Navigate, Router, useNavigate } from "react-router-dom"
import { Route } from "react-router-dom"

export default function ProtectedRoute({ auth, msg, Component, ...rest }) {
    const nav = useNavigate()
    useEffect(() => {
        
        
        if (!auth)
            nav("/", { state: { msg: msg,redirect:true } })
    }, [])
    return (
       <Component/> 
    )
}