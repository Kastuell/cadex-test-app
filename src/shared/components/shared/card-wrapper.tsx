import { Container, Grid2 } from "@mui/material";
import { css } from "../../../../styled-system/css";
import { ContactUsButton } from "../ui";
import { BasicCard } from "./card";

type CardStoreT = {
  title: string;
  description: string;
};

const cardStore: CardStoreT[] = [
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
  },
  {
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum",
  },
];

export const CardWrapper = () => {
  return (
    <div
      className={css({
        padding: "5rem 0 5rem 0",
      })}
    >
      <Container
        maxWidth="lg"
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
        })}
      >
        <h2
          className={css({
            fontSize: "5xl",
            fontWeight: "bold",
            lineHeight: "snug",
            textAlign: "center",
          })}
        >
          Also very important title
        </h2>
        <Grid2 container columns={{ lg: 3 }} spacing={2}>
          {cardStore.map(({ title, description }, index) => (
            <Grid2 size={1}>
              <BasicCard key={index} description={description} title={title} />
            </Grid2>
          ))}
        </Grid2>
        <ContactUsButton />
      </Container>
    </div>
  );
};
