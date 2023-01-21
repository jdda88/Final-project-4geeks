import React from "react";
import { useParams } from "react-router";
import { Nav } from "../components/navbar";



export const Electronics = () => {
    const { productId } = useParams();

    return (
        <section><Nav/>
        
    <div> It is electronics here:{productId}</div></section>);
};

