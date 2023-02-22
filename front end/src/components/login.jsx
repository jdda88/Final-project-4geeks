import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { GoblalButton } from "./generalbutton";
import "../style/styles.css";
import "../style/login.css";
import { useNavigate } from "react-router";
import { useStateValue } from "../context/stateProvider";
import { actionTypes } from "../context/Reducer";
import { login_user } from "../service/backend";

const tokenFromFetch = sessionStorage.getItem("token");

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [modal, setModal] = useState(false);
  const [token, dispatch] = useStateValue();
  const toggle = () => setModal(!modal);

  useEffect(() => {
    const addToken = () => {
      dispatch({
        type: actionTypes.ADD_TOKEN,
        token: tokenFromFetch,
      });
    };
    addToken();
  }, [tokenFromFetch]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login_user(user);
  };

    const user = {
      email,
      password: pass,
    };


  console.log(token, "from context");
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
        {tokenFromFetch && tokenFromFetch != "" && tokenFromFetch != undefined ? (
          //navigate('/me')
          console.log("working" + tokenFromFetch)
        ) : (
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
        )}
      </div>
    </div>
  );
};
