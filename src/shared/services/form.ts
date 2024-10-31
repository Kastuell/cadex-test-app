import { FormSchemaValuesT } from "../constants";

export const postData = async (data: FormSchemaValuesT) => {
  return await fetch("api/form", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
