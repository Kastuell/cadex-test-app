import { Footer, Header } from "@/shared/components";
import { PROJECT_NAME } from "@/shared/constants";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { css } from "../../styled-system/css";
import theme from "../theme";
import "./globals.css";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: {
    default: `${PROJECT_NAME}`,
    template: `%s | ${PROJECT_NAME}`,
  },
  description: `${PROJECT_NAME} test app`,
  authors: [
    {
      name: "kastuell",
      url: "https://github.com/Kastuell",
    },
  ],
  creator: "katuell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ThemeProvider theme={theme}>
            <div
              className={css({
                bgColor: "whitish",
                display: "flex",
                flexDirection: "column",
                minH: "screen",
                justifyContent: "space-between",
              })}
            >
              <Header />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
