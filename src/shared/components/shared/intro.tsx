import { Container } from "@mui/material";
import { css } from "../../../../styled-system/css";
import { Video } from "./video";

export const Intro = () => {
  return (
    <div
      className={css({
        bgColor: "gray.100",
      })}
    >
      <Container
        maxWidth="lg"
        className={css({
          display: "flex",
          justifyContent: "space-between",
          padding: "5rem 0 5rem 0",
          gap: "3rem"
        })}
      >
        <div
          className={css({
            maxWidth: "450px",
          })}
        >
          <h2
            className={css({
              fontSize: "5xl",
              fontWeight: "bold",
              lineHeight: "snug",
            })}
          >
            Most important title on the page
          </h2>
          <p
            className={css({
              fontSize: "lg",
              fontWeight: "light",
              marginTop: "10px",
            })}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            mattis, leo et condimentum ultricies, sem urna convallis metus, vel
            suscipit nibh lacus tincidunt ante
          </p>
        </div>
        <Video />
      </Container>
    </div>
  );
};
