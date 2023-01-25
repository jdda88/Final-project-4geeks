import React from "react";
import "../style/styles.css";
import { useNavigate } from "react-router";


export const GoblalButton = ({name, path}) =>{

    const navigate = useNavigate()
    
    return(
        <button className="banner-btn" onClick={()=>{navigate(path)}}>{name}</button>
    )

}