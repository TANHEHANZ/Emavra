import React, { useEffect, useState } from "react";
import apiService from "../services/endpint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HandleSaveImg from "./handleSaveImg";

const ImgPost = () => {
  const [agregar, setAgregar] = useState(false);
  const [dataImg, setDataImg] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const getImg = async () => {
    const res = await apiService.fetchData("GET", "api/claudynary/list");
    setDataImg(res);
    console.log(res);
  };
  useEffect(() => {
    getImg();
  }, []);

  const handleCheckboxChange = (event, imageUrl) => {
    if (event.target.checked) {
      setSelectedImages([...selectedImages, imageUrl]);
    } else {
      setSelectedImages(selectedImages.filter((url) => url !== imageUrl));
    }
  };

  const handleImageClick = (imageUrl) => {
    const alreadySelected = selectedImages.includes(imageUrl);
    if (alreadySelected) {
      setSelectedImages(selectedImages.filter((url) => url !== imageUrl));
    } else {
      setSelectedImages([...selectedImages, imageUrl]);
    }
  };

  console.log(selectedImages);

  return (
    <>
      <div className="nuevoFile">
        {agregar ? (
          <>
            <HandleSaveImg getImg={getImg} setAgregar={setAgregar}  agregar={agregar}/>
          </>
        ) : (
          <button onClick={() => setAgregar(!agregar)} className="more">
            <FontAwesomeIcon icon="fa-solid fa-plus" />
          </button>
        )}
      </div>
      {dataImg.map((item, i) => (
        <div className="img-waper" key={i}>
          <img
            src={item.url}
            alt="imgALmacenados"
            onClick={() => handleImageClick(item.url)}
          />
          <section className="actions">
            <input
              type="checkbox"
              onChange={(event) => handleCheckboxChange(event, item.url)}
              checked={selectedImages.includes(item.url)}
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
