import React, { useEffect, useState } from "react";
import { get_products } from "../service/fakestore";

export const useProducts = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        async function set() {
          let item = await get_products();
          setData(item);
        }
        set();
    
      }, []);
    
    return data
}