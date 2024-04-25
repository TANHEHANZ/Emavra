import React, { useEffect, useState } from "react";
import apiService from "../services/endpint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useContextImg from "./context/context-imgPost";
import HandleSaveImg from "./handleSaveImg";

const ImgPost = () => {
  const [dataImg, setDataImg] = useState([]);
  const { img, setImg } = useContextImg();
  const [agregar, setAgregar] = useState(false);

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

  const handleEliminar = async (idPublic) => {
    const elimainado = await apiService.fetchData(
      "DELETE",
      "api/claudynary/delete/" + idPublic,
      undefined,
      undefined
    );
    if(elimainado){
    getImg();
    }
  };

  return (
    <>
      <div className="nuevoFile">
        {agregar ? (
          <HandleSaveImg
            getImg={getImg}
            setAgregar={setAgregar}
            agregar={agregar}
          />
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
            alt="imgAlmacenados"
            onClick={() => handleImageClick(item.url)}
          />
          <section className="actions">
            <input
              type="checkbox"
              onChange={(event) => handleCheckboxChange(event, item.url)}
              checked={img.includes(item.url)}
            />
            <button onClick={() => handleEliminar(item.public_id)}>
              <FontAwesomeIcon icon="fa-solid fa-trash" />
            </button>
          </section>
        </div>
      ))}
    </>
  );
};

export default ImgPost;
