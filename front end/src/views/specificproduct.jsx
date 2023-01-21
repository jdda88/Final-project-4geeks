import React from "react"
import { Nav } from "../components/navbar"
import { Card } from "../components/card"
import { useEffect, useState } from "react"
import { useParams } from 'react-router'
import { get_product } from "../service/fakestore"

export const Specificproduct = () => {

    const { id } = useParams()
    const [product, setProduct] = useState()

    // use effect is need to render the info
    useEffect(() => {
        async function set() {
            let item = await get_product(id)
            setProduct(item)
            console.log(item)
        }
        set()
    }, [])
    
    return (
        <div>
            <Nav />
            <Card name={product?.title}
              price={product?.price}
              image={product?.image}
              description={product?.description}/>
        </div>
        )

}