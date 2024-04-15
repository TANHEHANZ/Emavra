import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Nav = ({ links, className, desacivando }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("");
  const navigateTo = (path) => {
    setActive(path);
    navigate(path);
  };

//   useEffect(() => {}, [path]);

  const handleParentClick = (path) => {
    setActive(active === path ? null : path);
  };

  const isActiveLink = (path) => {
    return active === path || location.pathname === path;
  };

  return (
    <ul className={className}>
      {links &&
        links.map((navegacion, i) => (
          <li key={i} className={isActiveLink(navegacion.path) ? "active" : ""}>
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
                {active === navegacion.path && !desacivando && (
                  <Nav
                    links={navegacion.children}
                    className="child-nav"
                    desacivando={true}
                  />
                )}
              </div>
            )}
          </li>
        ))}
    </ul>
  );
};

export default Nav;
