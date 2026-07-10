import axios from "axios";

export async function authService(phoneNumber: string) {
  const response = await axios.post(
    "http://localhost:3000/phoneNumber",
    {
      phoneNumber,
    },
    {
      withCredentials: true,
    }
  );

  return response.data;
}