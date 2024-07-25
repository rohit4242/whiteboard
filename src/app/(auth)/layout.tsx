import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Sign-in and Sign-up with clerk authentication",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      {children}
    </div>
  );
}
