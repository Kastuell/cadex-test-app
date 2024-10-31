import { Button } from "@mui/material";
import Link from "next/link";

export const ContactUsButton = () => {
  return (
    <Button variant="contained" size="small">
      <Link href={"/contact"}>Contact us</Link>
    </Button>
  );
};
