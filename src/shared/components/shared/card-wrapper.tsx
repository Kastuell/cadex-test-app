import { Container, Grid2, Typography } from "@mui/material";
import { css } from "../../../../styled-system/css";
import { BasicCard } from "./card";
import { ContactUsButton } from "./contact-us-button";

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
        <Typography
          color="textPrimary"
          variant="h2"
          fontWeight={700}
          sx={{
            fontSize: { xs: 40, md: 60 },
          }}
        >
          Also very important title
        </Typography>
        <Grid2 container columns={{ lg: 3, xs: 1, sm: 2 }} spacing={2}>
          {cardStore.map(({ title, description }, index) => (
            <Grid2 key={index} size={1}>
              <BasicCard description={description} title={title} />
            </Grid2>
          ))}
        </Grid2>
        <ContactUsButton />
      </Container>
    </div>
  );
};
