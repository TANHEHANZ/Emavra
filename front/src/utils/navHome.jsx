import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Nav = ({ links, className, desactivando }) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const savedActiveIndex = localStorage.getItem("activeIndex");
    if (savedActiveIndex) {
      setActiveIndex(parseInt(savedActiveIndex));
    }
  }, []);

  const navigateTo = (path, index) => {
    localStorage.setItem("activeIndex", index.toString());
    navigate(path);
  };

  const handleItemClick = (index, path) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index); 
      navigateTo(path, index);
    }
  };

  return (
    <ul className={className}>
      {links &&
        links.map((navegacion, i) => (
          <li key={i} className={activeIndex === i ? "active" : ""}>
            <div
              onClick={() => {
                handleItemClick(i, navegacion.path);
              }}
            >
              {navegacion.name}
            </div>
            {navegacion.children && (
              <div>
                {activeIndex === i && (
                  <Nav
                    links={navegacion.children}
                    className="child-nav"
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
