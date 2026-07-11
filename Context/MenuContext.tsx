"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { menuService } from "@/Services/MenuService";

const Menu = createContext<any>(null);

export const useMenu = () => useContext(Menu);

export const MenuProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await menuService();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <Menu.Provider
      value={{
        product,
      }}
    >
      {children}
    </Menu.Provider>
  );
};