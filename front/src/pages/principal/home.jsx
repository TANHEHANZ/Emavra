import React, { useEffect, useState } from "react";
import "../../styles/style-home.css";

const Home = () => {
  const dataCarrusel = [
    {
      url: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/426274422_742307761368935_1126866670417351482_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ogvq_xw1nUYAb7RTdX9&_nc_ht=scontent.fcbb2-2.fna&cb_e2o_trans=q&oh=00_AfArnWeQyxjXteoW4oy98-I9QXs0kJdB-zzNmDP_BFxpNA&oe=662330CB",
    },
    {
      url: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/435971549_742307751368936_4622345956034795144_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CqDsSA1kl1EAb4wrlrq&_nc_ht=scontent.fcbb2-2.fna&cb_e2o_trans=q&oh=00_AfAFo_aQCDKp_dQPfTDNg9QKKJQTfEH5zfy43WvSrL8wAg&oe=66230FDB",
    },
    {
      url: "https://scontent.fcbb2-1.fna.fbcdn.net/v/t39.30808-6/435065717_741825914750453_1929606767316372569_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gJl-Wsxtk_IAb7RlQDw&_nc_ht=scontent.fcbb2-1.fna&cb_e2o_trans=q&oh=00_AfDZ2O4IhlHr8U8yqafkL57ofJSbiaP9rFLtgPZVs8mJKw&oe=6623096E",
    },
    {
      url: "https://scontent.fcbb2-2.fna.fbcdn.net/v/t39.30808-6/426274422_742307761368935_1126866670417351482_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ogvq_xw1nUYAb7RTdX9&_nc_ht=scontent.fcbb2-2.fna&cb_e2o_trans=q&oh=00_AfArnWeQyxjXteoW4oy98-I9QXs0kJdB-zzNmDP_BFxpNA&oe=662330CB",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dataCarrusel.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="home">
      <div className="title">
        <h1>
          Emavra somos <strong>Ciudad Jardin</strong>
        </h1>
        <p>
           Empresa Municipal de Áreas Verdes y Recreación Alternativa "EMAVRA".
        </p>
        <section>
          <button>Contactanos</button>
          <button>Proyectos</button>
        </section>
      </div>
      <div className="slider">
        {dataCarrusel.map((item, i) => (
          <React.Fragment key={i}>
            <img
              key={i}
              src={item.url}
              alt={`imgCarrusel${i + 1}`}
              // style={{ width: currentIndex === i ? "20%" : "auto" }}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Home;
