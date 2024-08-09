const apiUrl = import.meta.env.VITE_BACKEND_URL;

const apiService = {
  isLoading: false, 

  async fetchData(method, url, body, auth) {
    this.isLoading = true; 
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

      const responseData = await fetched.json();
      return {
        status: fetched.status,
        data: responseData,
      };
    } catch (error) {
      throw new Error(error.message);
    } finally {
      this.isLoading = false; 
    }
  },
};

export default apiService;
