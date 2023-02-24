import React, { useEffect, useState } from "react";
import { get_product} from "../service/fakestore";

export const useProduct = (id) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null);

    // use effect is need to render the info
    useEffect(() => {
        async function set() {
            setLoading(true)
            let item = await get_product(id)
            setData(item)
            setLoading(false)
            //console.log(item)
        }
        set()
    }, [])

    return { data , loading }
}