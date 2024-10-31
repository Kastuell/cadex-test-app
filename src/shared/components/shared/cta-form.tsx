"use client";

import { formSchema, FormSchemaValuesT } from "@/shared/constants";
import { postData } from "@/shared/services/form";
import styled from "@emotion/styled";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Container,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { css } from "../../../../styled-system/css";
import { CtaSubmited } from "./cta-submited";
import { FormErrorMessage } from "./form-error-message";

const CustomInput = styled(TextField)({
  // by this way it's easy to styling mui TextField component
  "& label.Mui-focused": {
    color: "#463F3A",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#463F3A",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#8A817C",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#8A817C",
    },
  },
});

export const CtaForm = () => {
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitted },
  } = useForm<FormSchemaValuesT>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  const onSubmit = (data: FormSchemaValuesT) => {
    postData(data);
    console.log(data);
  };

  return (
    <Container>
      {!isSubmitted ? (
        <>
          <Typography
            color="textPrimary"
            variant="h1"
            fontWeight={700}
            align="center"
            sx={{ mt: 5, fontSize: { xs: 30, md: 60 } }}
          >
            Only CTA on the page
          </Typography>
          <div
            className={css({
              bgColor: "white",
              mt: "2rem",
              padding: "2rem",
              mx: "auto",
              borderRadius: "2rem",
              md: {
                w: "40%",
              },
            })}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
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
                <CustomInput
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Name"
                  fullWidth
                  required
                  {...register("name")}
                  size="small"
                />
                <FormErrorMessage isError={errors.name !== undefined} />

                <CustomInput
                  type="email"
                  variant="outlined"
                  color="secondary"
                  label="Email"
                  fullWidth
                  required
                  {...register("email")}
                  size="small"
                />
                <FormErrorMessage isError={errors.email !== undefined} />

                <TextareaAutosize
                  id="textarea1" // id for globals.css
                  maxRows={4}
                  aria-label="maximum height"
                  placeholder="Message *"
                  className={css({
                    borderRadius: "0.3rem",
                    padding: "0.3rem 0.8rem",
                    color: "primary",
                    fontWeight: "450",
                    _placeholder: {
                      color: "primary",
                    },
                    outline: {
                      base: "1px solid #8A817C",
                      _focusVisible: {
                        base: "2px solid #8A817C",
                      },
                    },
                  })}
                  {...register("message")}
                />
                <FormErrorMessage isError={errors.message !== undefined} />
              </Stack>
              <Button sx={{ mt: 2 }} variant="contained" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </>
      ) : (
        <CtaSubmited />
      )}
    </Container>
  );
};
