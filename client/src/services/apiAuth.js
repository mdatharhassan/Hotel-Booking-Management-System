import api from "../libs/api";

export async function signup({ fullName, email, password }) {
  const response = await api.post("/auth/register", {
    fullName,
    email,
    password,
  });
  return response.data;
}

export async function login({ email, password }) {
  const response = await api.post("/auth/login", {
    email,
    password,
  });
  return response.data;
}

export async function getCurrentUser() {
  // const isAuthenticated =
  //   typeof window !== "undefined" && window.localStorage
  //     ? window.localStorage.getItem("accessToken")
  //     : false;
  const response = await api.get("/auth/current-user");

  return response.data;
}

export async function logout() {
  const response = await api.post("/auth/logout");
  return response.data;
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  const formData = new FormData();

  if (fullName) formData.append("fullName", fullName);
  if (password) formData.append("password", password);
  if (avatar instanceof File) formData.append("avatar", avatar);

  const response = await api.put("/auth/current-user", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}
