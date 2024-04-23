import React, { useEffect, useState } from "react";
import apiService from "../../services/endpint";

const Noticias = () => {
  const [noti, setNoti] = useState([]);
  const fechedNoticias = async () => {
    const noticias = await apiService.fetchData("GET", "api/noticias");
    setNoti(noticias);
  };
  useEffect(() => {
    fechedNoticias();
  }, []);

  return (
    <div>
      {noti && noti.map((item, i) => (
        <div key={i}>
          {item.postRelacion.multimedia && item.postRelacion.multimedia.map((img, j) => (
            <img key={j} src={img} alt="" />
          ))}
          <p>{item.postRelacion.titulo}</p>
        </div>
      ))}
    </div>
  );
};

export default Noticias;
