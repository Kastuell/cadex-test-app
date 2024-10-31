import { Container, Typography } from "@mui/material";
import { css } from "../../../../styled-system/css";

export const Footer = () => {
  return (
    <footer
      className={css({
        bgColor: "secondary",
        position: "sticky",
        bottom: "0",
      })}
    >
      <Container
        maxWidth="lg"
        className={css({
          padding: "5rem 0 5rem 0",
        })}
      >
        <Typography color="textPrimary" variant="h6" align="center">
          CADEX 2024
        </Typography>
      </Container>
    </footer>
  );
};
