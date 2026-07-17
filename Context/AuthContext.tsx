"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/Services/AuthService";

const Auth = createContext<any>(null);

export const useAuth = () => useContext(Auth);

export const AuthProvider = ({ children }) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  //in rah maamooli k bakend nadari baraye tashkhis login budan ya nabudan karbar yek state mizarim
  // monteha ch ba api ch beddone oon hamishe mizarim in state ro
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

      //login shod
      setIsAuthenticated(true);

      router.push("/");
    } catch (err) {
      setError("خطا در ورود");
    }
  };

  // in rah tashkhis aya karabar login hast ya na ba backend va API
  //   useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const res = await axios.get(
  //         "http://localhost:3000/auth/me",
  //         {
  //           withCredentials: true,
  //         }
  //       );

  //       setIsAuthenticated(res.data.authenticated);
  //     } catch {
  //       setIsAuthenticated(false);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   checkAuth();
  // }, []);

  return (
    <Auth.Provider
      value={{
        phone,
        setPhone,
        error,
        handlePhone,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
