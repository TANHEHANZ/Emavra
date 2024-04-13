import React from "react";

function MultimediaList({ multimediaUrls }) {
  return (
    <div>
      <h2>Multimedia List</h2>
      <ul>
        {multimediaUrls.map((url, index) => (
          <li key={index}>
            {url.endsWith(".png") || url.endsWith(".jpg") || url.endsWith(".jpeg") || url.endsWith(".gif") ? (
              <img src={url} alt={`Multimedia ${index}`} style={{ maxWidth: "200px", maxHeight: "200px" }} />
            ) : (
              <a href={url} download={`Multimedia ${index}`}>Descargar Multimedia {index}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MultimediaList;
