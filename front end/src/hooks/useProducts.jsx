import React, { useEffect, useState } from "react";
import { get_products } from "../service/fakestore";

export const useProducts = () => {

  const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null);

    useEffect(() => {
        async function set() {
          setLoading(true)
          let item = await get_products();
          setData(item);
          setLoading(false)
        }
        set();
    
      }, []);
    
    return { data , loading }
}