import { Container, Divider } from "@mui/material";
import Link from "next/link";
import { css } from "../../../../styled-system/css";
import { ContactUsButton } from "./contact-us-button";

export const Header = () => {
  return (
    <header
      className={css({
        bgColor: "secondary",
        position: "sticky",
        top: "0"
      })}
    >
      <Container
        maxWidth="lg"
        className={css({
          fontSize: "2xl",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          padding: "1.5rem",
          alignItems: "center",
        })}
      >
        <Link href="/">CADEX</Link>
        <ContactUsButton />
      </Container>
      <Divider />
    </header>
  );
};
