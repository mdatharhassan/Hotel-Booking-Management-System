import api from "../libs/api";
export async function getSettings() {
  const response = await api.get("/settings");
  return response.data;
  // const { data, error } = await supabase.from("settings").select("*").single();
  // if (error) {
  //   console.error(error);
  //   throw new Error("Settings could not be loaded");
  // }
  // return data;
}

// We expect a newSetting object that looks like {setting: newValue}
export async function updateSetting(newSetting) {
  console.log(newSetting);

  const response = await api.put("/settings", newSetting);
  return response.data;
  // const { data, error } = await supabase
  //   .from("settings")
  //   .update(newSetting)
  //   // There is only ONE row of settings, and it has the ID=1, and so this is the updated one
  //   .eq("id", 1)
  //   .single();

  // if (error) {
  //   console.error(error);
  //   throw new Error("Settings could not be updated");
  // }
  // return data;
}
