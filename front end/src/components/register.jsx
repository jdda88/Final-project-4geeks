import React, { useState } from "react";
import { GoblalButton } from "./generalbutton";
import { handleSubmit } from "../utils/handdlesubmit";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const register = async()=>{
    const res = await fetch ("http://localhost:5000/register",{method : "POST"})
  }
  
  console.log(first_name, last_name,email,pass,address,city,zip,state,country)
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">First Name</label>
        <input
          value={first_name}
          onChange={(e) => setFirst_name(e.target.value)}
          type="text"
          placeholder="John"
          id="first_name"
          name="first_name"
        />
        <label htmlFor="last_name">Last Name</label>
        <input
          value={last_name}
          onChange={(e) => setLast_name(e.target.value)}
          type="text"
          placeholder="Doe"
          id="last_name"
          name="last_name"
        />
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@example,com"
          id="email"
          name="email"
        />
        <label htmlFor="pasword">pasword</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="******"
          id="pasword"
          name="pasword"
        />
        <label htmlFor="address">Address</label>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="123 example AVE"
          id="address"
          name="address"
        />
        <label htmlFor="city">City</label>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="City"
          id="city"
          name="city"
        />
        <label htmlFor="zip">Zip Code</label>
        <input
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          type="text"
          placeholder="00000"
          id="zip"
          name="zip"
        />
        <label htmlFor="state">State</label>
        <input
          value={state}
          onChange={(e) => setState(e.target.value)}
          type="text"
          placeholder="State"
          id="state"
          name="state"
        />
        <label htmlFor="country"></label>
        <input
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          type="text"
          placeholder="Country"
          id="country"
          name="country"
        />
        

        <GoblalButton type="submit" name={"Register"} />
      </form>
    </>
  );
};
