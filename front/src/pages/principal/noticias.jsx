import React, { useEffect, useState } from "react";
import apiService from "../../services/endpint";
import "../../styles/style-noticias.css";
const Noticias = () => {
  const [noti, setNoti] = useState([]);
  const fechedNoticias = async () => {
    const noticias = await apiService.fetchData("GET", "api/noticias");
    setNoti(noticias);
  };
  useEffect(() => {
    fechedNoticias();
  }, []);
  console.log(noti);

  return (
    <div className="content-noticias">
      {noti &&
        noti.map((item, i) => (
          <div key={i}>
            {item.postRelacion.multimedia &&
              item.postRelacion.multimedia.map(
                (img, j) => j === 0 && <img key={j} src={img} alt="" />
              )}
            <p>{item.postRelacion.titulo}</p>
            <p>{item.postRelacion.Descripcion}</p>
          </div>
        ))}
    </div>
  );
};

export default Noticias;
