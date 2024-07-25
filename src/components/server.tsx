"use server";

import { FC } from "react";

interface serverProps {
  children: React.ReactNode;
}

const Server: FC<serverProps> = ({ children }) => {
  return <>{children}</>;
};

export default Server;
