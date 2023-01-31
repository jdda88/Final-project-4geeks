import React, { useEffect, useState } from "react";
import { get_category } from "../service/fakestore";

export const useCategory = (category) => {

  const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null);

    useEffect(() => {
        async function set() {
          setLoading(true)
          let item = await get_category(category);
          setData(item);
          setLoading(false)
        }
        set();
      }, []);

    return { data , loading }
}