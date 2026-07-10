"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/Services/AuthService";

const Auth = createContext<any>(null);

export const useAuth = () => useContext(Auth);

export const AuthProvider = ({ children }) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handlePhone = async () => {
    setError("");

    const iranPhoneRegex = /^09\d{9}$/;

    if (!iranPhoneRegex.test(phone)) {
      setError("شماره موبایل معتبر نیست");
      return;
    }

    try {
      await authService(phone);

      router.push("/");
    } catch (err) {
      setError("خطا در ورود");
    }
  };

  return (
    <Auth.Provider
      value={{
        phone,
        setPhone,
        error,
        handlePhone,
      }}
    >
      {children}
    </Auth.Provider>
  );
};