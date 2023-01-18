import React from "react";
import { Nav } from "../components/navbar";
import {Jumbotron} from "../components/jumbotron"
import { Card } from "../components/card";

export const Home = () =>{
    return <div><Nav/><Jumbotron/><Card/>
    </div>
}