import {
  Button,
  Container,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { css } from "../../../../styled-system/css";

export const CtaForm = () => {
  return (
    <div>
      <Container sx={{ maxWidth: { xs: "sm", lg: "md" } }}>
        <Typography
          color="textPrimary"
          variant="h1"
          fontWeight={700}
          align="center"
          sx={{ mt: 5, fontSize: { xs: 40, md: 60 } }}
        >
          Only CTA on the page
        </Typography>
        <div
          className={css({
            bgColor: "white",
            sm: {
              mt: "1rem",
            },
            md: {
              mt: "2rem",
            },
            padding: "4rem",
            mx: "auto",
            borderRadius: "2rem",
          })}
        >
          <form
            className={css({
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            })}
          >
            <Stack
              className={css({
                width: "full",
              })}
              spacing={2}
            >
              <TextField
                type="text"
                variant="outlined"
                color="secondary"
                label="Name"
                fullWidth
                required
              />
              <TextField
                type="email"
                variant="outlined"
                color="secondary"
                label="Email"
                fullWidth
                required
              />
              <TextareaAutosize
                maxRows={4}
                aria-label="maximum height"
                placeholder="Message *"
                className={css({
                  border: "1px solid #BCB8B1",
                  borderRadius: "0.3rem",
                  padding: "0.8rem",
                  _focus: {
                    outline: "1.5px solid #BCB8B1",
                  },
                })}
              />
            </Stack>
            <Button
              sx={{ mt: 2 }}
              variant="contained"
              color="secondary"
              type="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};
