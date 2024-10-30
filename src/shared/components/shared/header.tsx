import { Container, Divider } from "@mui/material";
import Link from "next/link";
import { css } from "../../../../styled-system/css";
import { ContactUsButton } from "../ui";

export const Header = () => {
  return (
    <header>
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
        <Link href="/">Some Company</Link>
        <ContactUsButton />
      </Container>
      <Divider />
    </header>
  );
};
