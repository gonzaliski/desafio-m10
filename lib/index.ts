export function saveToken(token: string) {
  localStorage.setItem("token", JSON.stringify(token));
}

export function retrieveToken() {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (!token) return;
    return JSON.parse(token);
  }
}

export function logout() {
  return localStorage.removeItem("token");
}

export function saveEmail(email: string) {
  localStorage.setItem("email", JSON.stringify({ email }));
}

export function getEmail() {
  return JSON.parse(localStorage.getItem("email") || "");
}

export function saveUserDataOnLS(data: UserStorageData) {
  localStorage.setItem("user", JSON.stringify(data));
}

export function getUserDataFromLS() {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("user") || "");
  }
}

export function isUserLogged() {
  const token = retrieveToken();
  return !(token == null);
}
export function getUsername() {
  return getUserDataFromLS()?.username;
}
export function getUserAddress() {
  return getUserDataFromLS()?.address;
}
