import React, { useState } from "react";
import { GoblalButton } from "./generalbutton";
import "../style/register.css";


export const Register = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register_user();
  };

  const register_user = async () => {

    const secretKey = 'R0DR1G04G33K5'

    const new_user = {

        username,
        first_name: firstName,
        last_name: lastName,
        email,
        password: pass,
        address,
        city,
        zip,
        state,
        country
    }

    const requestOptions = {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${secretKey}` 
      },
      body: JSON.stringify(new_user)
    };

    const res = await fetch(`http://localhost:5000/register`, requestOptions);
    const data = await res.json();
    console.log(data);
    return data;
  }
  //console.log(firstName, lastName,email,pass,address,city,zip,state,country)

  return (
    <>
      <form className="formcontainer" onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
        <input className="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="John28"
          id="Username"
          name="Username"
        />
        <label htmlFor="firts-name">First Name:</label>
        <input className="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="John"
          id="first-name"
          name="first-name"
        />
        <label htmlFor="last-name">Last Name:</label>
        <input className="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Doe"
          id="last-name"
          name="last-name"
        />
        <label htmlFor="email">Email:</label>
        <input className="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@example,com"
          id="email"
          name="email"
        />
        <label htmlFor="pasword">Pasword:</label>
        <input className="pasword"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="******"
          id="pasword"
          name="pasword"
        />
        <label htmlFor="address">Address:</label>
        <input className="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="123 example AVE"
          id="address"
          name="address"
        />
        <label htmlFor="city">City:</label>
        <input className="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="City"
          id="city"
          name="city"
        />
        <label htmlFor="zip">Zip Code:</label>
        <input className="zipcode"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          type="text"
          placeholder="00000"
          id="zip"
          name="zip"
        />
        <label htmlFor="state">State:</label>
        <input className="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
          type="text"
          placeholder="State"
          id="state"
          name="state"
        />
        <label htmlFor="country">Country:</label>
        <input className="counrtry"
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