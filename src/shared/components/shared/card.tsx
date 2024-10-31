import { Card, Typography } from "@mui/material";
import { css } from "../../../../styled-system/css";

interface Icard {
  title: string;
  description: string;
}

export const BasicCard = ({ title, description }: Icard) => {
  return (
    <Card variant="outlined" className={css({
        padding: "1.5rem",
      })}> 
      <Typography color="textPrimary" variant="h6">
        {title}
      </Typography>
      <Typography color="textSecondary" variant="body1">
        {description}
      </Typography>
    </Card>
  );
};
