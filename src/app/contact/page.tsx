import { CtaForm } from "@/shared/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page",
};

export default function Page() {
  return <CtaForm />;
}
