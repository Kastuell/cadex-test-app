import { Container, Typography } from "@mui/material";
import { css } from "../../../../styled-system/css";
import { Video } from "./video";
import theme from "@/theme";

export const Intro = () => {
  return (
    <div
      className={css({
        bgColor: "grayish",
      })}
    >
      <Container
        maxWidth="lg"
        className={css({
          display: "flex",
          justifyContent: "space-between",
          padding: "5rem 0 5rem 0",
          gap: "3rem",
          flexDirection: "column",
          md: {
            flexDirection: "row",
          },
        })}
      >
        <div
          className={css({
            maxWidth: "450px",
          })}
        >
          <Typography
            color="textPrimary"
            variant="h1"
            fontWeight={700}
            sx={{
              fontSize:  {xs: 40, md: 60},
            }}
          >
            Most important title on the page
          </Typography>
          <Typography color="textSecondary" variant="subtitle1" sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum ultricies, sem urna convallis metus, vel
            suscipit nibh lacus tincidunt ante
          </Typography>
        </div>
        <Video />
      </Container>
    </div>
  );
};
