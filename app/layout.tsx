import { Inter } from "next/font/google";
import { StyledComponentsRegistry } from "@/lib/registry";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
