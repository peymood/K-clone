import axios from "axios";

export async function menuService() {
  const res = await axios.get(
    "https://dummyjson.com/recipes"
  );

  return res.data.recipes;
}