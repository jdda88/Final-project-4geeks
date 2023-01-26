import React, { useEffect, useState } from "react";
import { get_category } from "../service/fakestore";

export const useCategory = (category) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        async function set() {
          let item = await get_category(category);
          setData(item);
        }
        set();
      }, []);

    return data
}