import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Nav = ({ links, className }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState();
  const [openChildIndex, setOpenChildIndex] = useState(null);

  const navigateTo = (path) => {
    navigate(path);
  };

  const handleItemClick = (index, path, hasChildren) => {
    navigateTo(path);
    setActiveIndex(index);
    if (hasChildren) {
      setOpenChildIndex(openChildIndex === index ? null : index);
    } else {
      setOpenChildIndex(null);
    }
  };

  return (
    <ul className={className}>
      {links &&
        links.map((navegacion, i) => (
          <li key={i} className={activeIndex === i ? "active" : ""}>
            <div
              onClick={() => {
                handleItemClick(i, navegacion.path, !!navegacion.children);
              }}
            >
              {navegacion.name}
            </div>
            {navegacion.children && openChildIndex === i && (
              <div>
                <Nav links={navegacion.children} className="child-nav" />
              </div>
            )}
          </li>
        ))}
    </ul>
  );
};

export default Nav;