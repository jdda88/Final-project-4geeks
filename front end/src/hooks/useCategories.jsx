import React, { useEffect, useState } from "react";
import { get_categories } from "../service/fakestore";

export const useCategories = () => {
  
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null);

        useEffect(() => {
        async function set() {
          setLoading(true)
          let categories = await get_categories();
          //console.log(categories);
          setData(categories);
          setLoading(false)
          
        }
        set();
      }, []);


    return { data , loading }
}