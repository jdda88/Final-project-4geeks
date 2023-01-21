import React from "react";
import { useParams } from "react-router";
import { Nav } from "../components/navbar";
import { get_category } from "../service/fakestore";
import { useState, useEffect } from "react";
import { Card } from "../components/card";




export const Electronics = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(0)
    useEffect(() => {
        async function set() {
            let item = await get_category(productId)
            setProduct(item)

        }
        set()
    }, [])
    console.log(product)

    return (
        <div>
        <Nav/>
        {product.map((info, index) => {
        console.log(info);
        return <Card key={index} />;
      })}
    </div>);
};

