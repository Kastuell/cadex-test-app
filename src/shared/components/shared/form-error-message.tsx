import { css } from "../../../../styled-system/css";

interface IFormErrorMessage {
  isError: boolean;
}
export const FormErrorMessage = ({ isError }: IFormErrorMessage) =>
  isError && (
    <span
      className={css({
        color: "red",
      })}
    >
      This field is required
    </span>
  );
