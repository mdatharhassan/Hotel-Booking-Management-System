import api from "../libs/api";

export async function getCabins() {
  const response = await api.get("/cabins");
  return response.data;
}

export async function createEditCabin(newCabin, id) {
  // const formData = new FormData();

  // Object.entries(newCabin).forEach(([key, value]) => {
  //   if (value !== undefined && value !== null) {
  //     formData.append(key, value);
  //   }
  // });

  // console.log("FormData entries:");
  // for (let pair of formData.entries()) {
  //   console.log(pair[0], pair[1]);
  // }

  // console.log(formData);
  if (!id) {
    const response = await api.post("/cabins", newCabin, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  }

  const response = await api.put(`/cabins/${id}`, newCabin, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
}

export async function deleteCabin(id) {
  const response = await api.delete(`/cabins/${id}`);
  return response.data;
}
