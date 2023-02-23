import React, { useEffect } from "react";
import { useStateValue } from "../context/stateProvider";
import { get_user } from "../service/api";
export const Profile = () => {
  const [{ isLogged }] = useStateValue();

  useEffect(() => {
    const get = async() => {
        const data = await get_user()
        console.log(data)
    }
    get()
  },[])

  return (
    <>
      {isLogged ? (
        <div>
          <div>
            <h2></h2>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      ) : (
        <div> Error you not are logged</div>
      )}
    </>
  );
};
