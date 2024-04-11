const apiUrl = process.env.APIURL;

export const peticion = async ({ method, auth, url, body }) => {
  try {
    const fetched = await fetch(`${apiUrl}/${url}`, {
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
    return error.message;
  }
};
