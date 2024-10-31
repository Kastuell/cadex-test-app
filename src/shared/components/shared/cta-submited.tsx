import { Typography } from "@mui/material";

export const CtaSubmited = () => {
  return (
    <Typography
      color="textPrimary"
      variant="h1"
      fontWeight={700}
      align="center"
      sx={{ fontSize: { xs: 30, md: 60 } }}
    >
      Message generated on the server
    </Typography>
  );
};
