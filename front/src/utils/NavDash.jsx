import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavDash = ({ links }) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const navigateTo = (path) => {
    navigate(path);
  };

  const handleItemClick = (index, path) => {
    if (index === activeIndex) {
      setActiveIndex(null); 
    } else {
      setActiveIndex(index); 
      navigateTo(path);
    }
  };

  return (
    <ul>
      {links &&
        links.map((navegacion, i) => (
          <li key={i}>
            <div onClick={() => handleItemClick(i, navegacion.path)}>
              {navegacion.name}
            </div>
            {navegacion.children && activeIndex === i && (
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
