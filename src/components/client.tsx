'use client'
import { FC } from "react";

interface clientProps {
  children: React.ReactNode;
}

const Client: FC<clientProps> = ({ children }) => {
  return <>{children}</>;
};

export default Client;
