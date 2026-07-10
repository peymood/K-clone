"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { otpService } from "@/Services/OtpService";

const Otp = createContext<any>(null);

export const useOtp = () => useContext(Otp);

export const AuthProvider = ({ children }) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleOtp = async () => {
    setError("");

    if (!otp) {
      return;
    }

    try {
      await otpService(otp);

      router.push("/");
    } catch (err) {
      setError("خطا در ورود");
    }
  };

  return (
    <Otp.Provider
      value={{
        otp,
        setOtp,
        error,
        handleOtp,
      }}
    >
      {children}
    </Otp.Provider>
  );
};
