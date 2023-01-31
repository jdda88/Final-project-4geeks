import React, { useState } from "react";
import { GoblalButton } from "./generalbutton";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input value={name} name="name" id="name" placeholder="full name" />
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
          onChange={(e) => setPass.apply(e.target.value)}
          type="password"
          placeholder="******"
          id="pasword"
          name="pasword"
        />
        <GoblalButton name = {"Register"}/>
      </form>
    </>
  );
};
