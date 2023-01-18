import React from "react";
import { Nav } from "../components/navbar";
import { Jumbotron } from "../components/jumbotron"
import { Card } from "../components/card";
import { get_categories } from "../service/fakestore";
import { useEffect } from "react";

export const Home = () => {

    useEffect(() =>{
        async function set() {
            let categories = await get_categories()
            console.log(categories)
        }
        set()
    })
    return (
        <>
            <Nav />
            <Jumbotron />
            <Card />
        </>
    )
}