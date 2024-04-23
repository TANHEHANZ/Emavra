const apiUrl = import.meta.env.VITE_BACKEND_URL;

const apiService = {
  async fetchData(method, url, body, auth) {
    try {
      const fetched = await fetch(`${apiUrl}${url}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: auth ? auth : undefined,
        },
        body: body ? JSON.stringify(body) : undefined,
      });
      
      if (!fetched.ok) {
        throw new Error("La solicitud falló con estado " + fetched.status);
      }
      return await fetched.json();
    } catch (error) {
      throw new Error(error.message);
    }
  }
};

export default apiService;



//  eficiensa en costos 