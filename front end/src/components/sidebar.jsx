import React from "react";
import { useCategories } from "../hooks/useCategories";
import { GoblalButton } from "./generalbutton";
import { useNavigate } from "react-router";
import { Login } from "./login";
import { useStateValue } from "../context/stateProvider";
import { actionTypes } from "../context/Reducer";
import "../style/sidebar.css";

export const Sidebar = ({ isOpen }) => {

  const data = useCategories();
  const [ {isLogged} , dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleLogout = () => {
console.log('culo')
    dispatch({
      type: actionTypes.LOG_OUT,
      isLogged: false
    });
    sessionStorage.removeItem("token");
    console.log(sessionStorage.getItem("token"));
    return window.reload(true)

  }; 


  return (
    <div className="sidebarWrapper">
      <div className={`sidebar ${isOpen}`}>
        <div className="menu">
          <div className="Head">
            <h3>Menu</h3>
          </div>
          <div className="body">
            <ul className="menuoptions">
              <li
                onClick={() => {
                  navigate("/");
                }}
              >
                <i className="fa-solid fa-house"></i> Home
              </li>
              <li>
                <i className="fa-solid fa-tag"></i> Catgories
              </li>
              <li>
                <i className="fa-solid fa-circle-info"></i> About
              </li>
              <li>
                {" "}
                <i className="fa-solid fa-phone"></i> Contact
              </li>
            </ul>
          </div>
          {isLogged ? (
            <div className="signinbuttons">
              <div onClick={handleLogout}>hola</div>
            </div>
          ) : (
            <div className="signinbuttons">
             
              <GoblalButton name={"Sign Up"} path={"/register"} pad={"10px"} />
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
