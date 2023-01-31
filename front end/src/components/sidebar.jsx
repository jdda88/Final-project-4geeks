import React from "react";
import { useCategories } from "../hooks/useCategories";
import { GoblalButton } from "./generalbutton";
import "../style/sidebar.css";

export const Sidebar = ({ isOpen }) => {

  const data = useCategories();

  return (
    <div className={`sidebar ${isOpen}`}>
      <div className="menu">
        <div className="Head">
          <h3>Menu</h3>
        </div>
        <div className="body">
          <ul>
            <li><i class="fa-solid fa-house"></i> Home</li>
            <li><i class="fa-solid fa-tag"></i> Catgories</li>
            <li><i class="fa-solid fa-circle-info"></i> About</li>
            <li> <i class="fa-solid fa-phone"></i> Contact</li>
          </ul>
        </div>
        <div className="Footer">
          <GoblalButton name={'Sign Up'} pad={'10px'}/>
          <GoblalButton name={'Log In'} pad={'10px'}/>
        </div>
      </div>
    </div>
  );
};
