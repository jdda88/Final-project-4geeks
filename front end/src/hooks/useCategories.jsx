import React, { useEffect, useState } from "react";
import { get_categories } from "../service/fakestore";

export const useCategories = () => {
  
    const [data, setData] = useState(null);

        useEffect(() => {
        async function set() {
          let categories = await get_categories();
          //console.log(categories);
          setData(categories);
        }
        set();
      }, []);

    return data
}