import React, { useState } from "react";
import "../../../styles/styleDashboard/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import planta from "../../../assets/plantas.png";
import logo from "../../../assets/logo.jpeg";
import apiService from "../../../services/endpint";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../components/context/userConstext";

const Login = () => {
  const [ver, setVer] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { setToken } = useAuthStore();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const emailActiveClass = formData.email ? "active" : "";
  const passwordActiveClass = formData.password ? "active" : "";

  const logued = async (e) => {
    e.preventDefault();
    try {
      const response = await apiService.fetchData(
        "POST",
        "api/users/login",
        formData,
        undefined
      );

      if (response.status === 401) {
        toast.error("Revise sus credenciales de acceso");
      } else if (response.status === 200) {
        setToken(response.data);
        navigate("/dashboard");
      } else {
        toast.error("An unexpected error occurred");
      }
    } catch (error) {
      toast.error("An error occurred: " + error.message);
    }
  };
  return (
    <section className="sectionLogin">
      <div className="login">
        <form onSubmit={logued}>
          <h1>Login</h1>
          <img src={logo} alt="Logo Emabra" />
          <label htmlFor="email">
            <input
              type="text"
              placeholder=""
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
            <p className={emailActiveClass}>Email</p>
          </label>
          <label htmlFor="password">
            <input
              type={ver ? "text" : "password"}
              placeholder=""
              value={formData.password}
              name="password"
              onChange={handleChange}
              style={{ width: "90%" }}
            />
            <p className={passwordActiveClass}>Contraseña</p>
            <FontAwesomeIcon
              icon={ver ? ["fas", "eye-slash"] : ["fas", "eye"]}
              className="icono-ojo"
              onClick={() => setVer(!ver)}
            />
          </label>
          <button type="submit">Ingresar</button>
        </form>
      </div>
      <article className="containtimg">
        <img src={planta} alt="Logo Emabra" className="planta" />
      </article>
    </section>
  );
};

export default Login;
