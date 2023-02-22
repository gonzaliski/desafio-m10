import { getEmail, retrieveToken, saveEmail, saveToken } from "lib";

const API_URL = "https://desafio-m9-lovat.vercel.app/api";
export async function fetchAPI(param: RequestInfo, option: RequestInit) {
  const token = retrieveToken();
  const init: any = option || {};
  if (token) {
    init.headers ||= {};
    init.headers.Authorization = "Bearer " + token;
    init.headers["Content-type"] = "application/json";
  }

  const res = await fetch(API_URL + param, init);
  if (res.status >= 200 && res.status < 300) {
    const data = await res.json();
    return data;
  } else {
    throw {
      message: "An error has ocurred",
      status: res.status,
    };
  }
}

export async function validateEmail(email: string) {
  console.log({ email });
  saveEmail(email);
  return await fetchAPI("/auth", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email }),
  }).catch((e) => {
    console.error(e);
  });
}

export async function getToken(code: string) {
  const email = getEmail();
  console.log(email, "from getToken");

  const data = await fetchAPI("/auth/token", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ email, code }),
  });
  saveToken(data.token);
  return true;
}

export async function updateUser(data: userData) {
  return await fetchAPI("/me", {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function updateAddress(address: string) {
  return await fetchAPI("/me/address", {
    method: "PATCH",
    mode: "cors",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ newAddress: address }),
  });
}

export async function generateOrder(productId: string, address?: string) {
  return await fetchAPI(`/order?productId=${productId}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      envio: address,
    }),
  });
}

export async function getAllProductIDs() {
  return await fetchAPI(`/products/ids`, {
    mode: "cors",
    headers: {
      "Content-type": "application/json",
    },
  });
}

export async function getProductByID(productId: string) {
  return await fetchAPI("/products?productId=" + productId, {
    mode: "cors",
    headers: {
      "Content-type": "application/json",
    },
  });
}
