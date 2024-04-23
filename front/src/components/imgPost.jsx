import React, { useEffect, useState } from "react";
import apiService from "../services/endpint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useContextImg from "./context/context-imgPost";

const ImgPost = () => {
  const [dataImg, setDataImg] = useState([]);
  const { img, setImg } = useContextImg();

  const getImg = async () => {
    const res = await apiService.fetchData("GET", "api/claudynary");
    setDataImg(res);
  };

  useEffect(() => {
    getImg();
  }, []);

  const handleCheckboxChange = (event, imageUrl) => {
    if (event.target.checked) {
      setImg([...img, imageUrl]); 
    } else {
      setImg(img.filter((url) => url !== imageUrl)); 
    }
  };

  const handleImageClick = (imageUrl) => {
    if (!img.includes(imageUrl)) {
      setImg([...img, imageUrl]); 
    } else {
      setImg(img.filter((url) => url !== imageUrl)); 
    }
  };

  return (
    <>
      <div className="nuevoFile">
        <button onClick={() => getImg()} className="more">
          <FontAwesomeIcon icon="fa-solid fa-sync" />
        </button>
      </div>
      {dataImg.map((item, i) => (
        <div className="img-waper" key={i}>
          <img
            src={item.url}
            alt="imgAlmacenados"
            onClick={() => handleImageClick(item.url)}
          />
          <section className="actions">
            <input
              type="checkbox"
              onChange={(event) => handleCheckboxChange(event, item.url)}
              checked={img.includes(item.url)}
            />
            <button>
              <FontAwesomeIcon icon="fa-solid fa-trash" />
            </button>
          </section>
        </div>
      ))}
    </>
  );
};

export default ImgPost;
