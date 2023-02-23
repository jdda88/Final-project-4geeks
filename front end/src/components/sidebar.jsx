import React from "react";
import { useCategories } from "../hooks/useCategories";
import { GoblalButton } from "./generalbutton";
import { useNavigate } from "react-router";
import { Login } from "./login";
import { useStateValue } from "../context/stateProvider";
import { actionTypes } from "../context/Reducer";
import "../style/sidebar.css";
import "../style/styles.css";
export const Sidebar = ({ isOpen }) => {
  const data = useCategories();
  const [{ isLogged }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("read this");
    dispatch({
      type: actionTypes.LOG_OUT,
      isLogged: false,
    });
    sessionStorage.removeItem("token");
    //console.log(sessionStorage.getItem("token"));
    return window.reload(true);
  };

  return (
    <div className="sidebarWrapper">
      <div className={`sidebar ${isOpen}`}>
        <div className="menu">
          {isLogged ? (
            <div className="Head">
              <h3>Welcome Name</h3>
            </div>
          ) : (
            <div className="Head">
              <h3>Menu</h3>
            </div>
          )}

          <div className="body">
            {isLogged ? (
              <ul className="menuoptions">
                <li
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <i className="fa-solid fa-house"></i> Home
                </li>
                <li onClick={() => navigate('/me')}>
                  <i className="fa-solid fa-user"></i> Profile
                </li>
                <li>
                <i className="fa-solid fa-bag-shopping"></i> Catgories
                </li>
                <li onClick={() => navigate('/checkout')}>
                  <i className="fa-solid fa-tag"></i> Checkout
                </li>
                <li>
                  <i className="fa-solid fa-circle-info"></i> About
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i> Contact
                </li>
              </ul>
            ) : (
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
            )}
          </div>
          {isLogged ? (
            <div className="signinbuttons">
              <button
                className="banner-btn"
                style={{ padding: "10px" }}
                onClick={handleLogout}
              >
                Log Out
              </button>
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
