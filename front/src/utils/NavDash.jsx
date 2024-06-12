import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../components/context/userConstext";

const NavDash = ({ links }) => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  const { token, logout } = useAuthStore();
  if (!token) {
    return navigate("/login"), logout();
  }
  return (
    <ul>
      {links &&
        links.map((navegacion, i) => (
          <li key={i}>
            <div onClick={() => navigateTo(navegacion.path)}>
              {navegacion.name}
            </div>
            {navegacion.children && (
              <div>
                <NavDash links={navegacion.children} />
              </div>
            )}
          </li>
        ))}
    </ul>
  );
};

export default NavDash;
