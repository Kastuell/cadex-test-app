import { Container, Typography } from "@mui/material";
import { css } from "../../../../styled-system/css";
import { ContactUsButton } from "./contact-us-button";

export const Less = () => {
  return (
    <div
      className={css({
        bgColor: "grayish",
      })}
    >
      <Container
        maxWidth="lg"
        className={css({
          padding: "5rem 0 5rem 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "3rem",
        })}
      >
        <Typography
          color="primary"
          variant="h3"
          fontWeight={700}
          sx={{
            fontSize: { xs: 30, md: 50 },
          }}
        >
          Less important title
        </Typography>
        <ContactUsButton />
      </Container>
    </div>
  );
};
