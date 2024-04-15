import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = ({ links, className }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState(null);

  const navigateTo = (path) => {
    setActive(path); 
    navigate(path);
  };

  const handleParentClick = (path) => {
    if (active === path) {
      setActive(null);
    } else {
      setActive(path);
    }
  };

  const isActiveLink = (path) => {
    return active === path || location.pathname === path;
  };

  return (
    <ul className={className}>
      {links &&
        links.map((navegacion, i) => (
          <li key={i} 
          
          className={isActiveLink(navegacion.path) ? "active" : ""}
          >
            <div
              onClick={() => {
                handleParentClick(navegacion.path);
                navigateTo(navegacion.path);
              }}
            >
              {navegacion.name}
            </div>
            {navegacion.children && (
              <div>
                {active === navegacion.path && (
                  <Nav links={navegacion.children} className="child-nav" />
                )}
              </div>
            )}
          </li>
        ))}
    </ul>
  );
};

export default Nav;
