import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { GoblalButton } from "./generalbutton";
import "../style/styles.css";
import "../style/login.css"

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Button className="banner-btn" style={{padding: '10px'}} onClick={toggle}>
        Log In
      </Button>

      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle} style={{borderBottom: '1px solid #f09d51'}}>Log In</ModalHeader>
        <ModalBody style={{borderBottom: '1px solid #f09d51'}}>
        <form className='form' onSubmit={handleSubmit}>
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
      </form>
        </ModalBody>
        <ModalFooter >
        <GoblalButton name={"Log in"} onClick={handleSubmit} pad={'10px'}/>
        <GoblalButton name={"Create an account"} path="/register" pad={'10px'}/>
        </ModalFooter>
      </Modal>
    </div>
  );
};
