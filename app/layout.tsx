import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import { Layout } from "./layout/root";
import { Box } from "@mui/material";
import {
  RightSideList,
  SocialLeftSideList,
} from "./layout/social-left-right-list";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Waseem ReactJS Developer",
  description: "Developed by Waseem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <Navbar />
          <Box sx={{ position: "relative" }}>{children}</Box>
          <Box sx={{ position: "fixed", bottom: "0%", left: "3%" }}>
            <SocialLeftSideList />
          </Box>
          <Box sx={{ position: "fixed", bottom: "13%", right: "3.2%" }}>
            <RightSideList />
          </Box>
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
