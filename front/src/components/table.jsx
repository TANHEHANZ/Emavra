import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Tablebody = ({ data }) => {
  const handlePreview = (url) => {
    window.open(url, "_blank");
  };
  console.log(data);
  return (
    <>
      {data &&
        data.map((item, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{item.Nombre}</td>
            <td>{item.Descripcion}</td>
            <td>{item.tipo}</td>
            <td>{item.fecha}</td>
            <td>
              <button onClick={() => handlePreview(item.multimedia)}>
                {/* <FontAwesomeIcon icon="fa-solid fa-file-pdf" /> */}
                <FontAwesomeIcon icon="fa-solid fa-cloud-arrow-down" />
                {/* {item.multimedia} descargara */}
              </button>
            </td>
          </tr>
        ))}
    </>
  );
};

export default Tablebody;
