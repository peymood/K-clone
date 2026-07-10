import axios from "axios";

export async function otpService(otpNumber: string) {
  const response = await axios.post(
    "http://localhost:3000/otpNumber",
    {
      otpNumber,
    },
    {
      withCredentials: true,
    }
  );

  return response.data;
}