import React from "react";
import "../style/styles.css";
import { useNavigate } from "react-router";

export const GoblalButton = ({name, path, pad = '1rem 3.4rem'}) =>{

    const navigate = useNavigate()

    const style = {
        padding: pad
    }
    
    return(
        <button className="banner-btn" onClick={()=>{navigate(path)}} style={style}>{name}</button>
    )

}