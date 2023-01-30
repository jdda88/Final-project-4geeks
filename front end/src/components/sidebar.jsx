import React from "react";
import { useCategories } from "../hooks/useCategories";
import { GoblalButton } from "./generalbutton";
import { useNavigate } from "react-router";
import "../style/sidebar.css";

export const Sidebar = ({ isOpen }) => {

  const data = useCategories();
  const navigate = useNavigate()

  return (
    <div className="sidebarWrapper">
    <div className={`sidebar ${isOpen}`} >
      <div className="menu">
        <div className="Head">
          <h3>Menu</h3>
        </div>
        <div className="body">
          <ul>
            <li onClick={() => {navigate("/")}}><i className="fa-solid fa-house"></i> Home</li>
            <li><i className="fa-solid fa-tag"></i> Catgories</li>
            <li><i className="fa-solid fa-circle-info"></i> About</li>
            <li> <i className="fa-solid fa-phone"></i> Contact</li>
          </ul>
        </div>
        <div className="Footer">
          <GoblalButton name={'Sig In'} pad={'10px'}/>
          <GoblalButton name={'Log In'} pad={'10px'}/>
        </div>
      </div>
    </div>
    </div>
  );
};
