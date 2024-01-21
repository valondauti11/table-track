// import "../../app/";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AdminNavbar from "../components/adminPanel/adminNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Table-Track",
  // description: "Generated by create next app",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <AdminNavbar />
          {children}
        </div>
      </body>
    </html>
  );
}