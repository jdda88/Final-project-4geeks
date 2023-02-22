import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { GoblalButton } from "./generalbutton";
import "../style/styles.css";
import "../style/login.css";
import { useNavigate } from "react-router";
import { useStateValue } from "../context/stateProvider";
import { actionTypes } from "../context/Reducer";
import { login_user } from "../service/backend";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [modal, setModal] = useState(false);

  const [ {isLogged} , dispatch] = useStateValue();

  const toggle = () => setModal(!modal);

  // useEffect(() => {
      
  // }, []);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login_user(user);
    dispatch({
      type: actionTypes.ADD_TOKEN,
      isLogged: true,
    });
  };

    const user = {
      email,
      password: pass,
    };


 
  return (
    <div>
      <Button
        className="banner-btn"
        style={{ padding: "10px" }}
        onClick={toggle}
      >
        Log In
      </Button>
      <div>
          <Modal className="virgin" isOpen={modal} toggle={toggle}>
            <form className="form" onSubmit={handleSubmit}>
              <ModalHeader
                toggle={toggle}
                style={{ borderBottom: "1px solid #f09d51" }}
              >
                Log In
              </ModalHeader>
              <ModalBody style={{ borderBottom: "1px solid #f09d51" }}>
                <label htmlFor="email">Email: </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="youremail@example,com"
                  id="email"
                  name="email"
                />
                <label htmlFor="pasword">Pasword: </label>
                <input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  placeholder="******"
                  id="pasword"
                  name="pasword"
                />
              </ModalBody>
              <ModalFooter>
                <GoblalButton name={"Log in"} pad={"10px"} type="submit" />
              </ModalFooter>
            </form>
            <GoblalButton
              name={"Create an account"}
              path="/register"
              pad={"10px"}
            />
          </Modal>
        
      </div>
    </div>
  );
};
