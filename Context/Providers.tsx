"use client";

import { AuthProvider } from "./AuthContext";
import { OtpProvider } from "./OtpContext";
import { MenuProvider } from "./MenuContext";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <OtpProvider>
        <MenuProvider>
          {children}
        </MenuProvider>
      </OtpProvider>
    </AuthProvider>
  );
}