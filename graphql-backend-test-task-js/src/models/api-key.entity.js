import { EntitySchema } from "typeorm";
import { ApiKey } from "./api-key.model.js";

const ApiKeySchema = new EntitySchema({
  name: "ApiKey",
  target: ApiKey,
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
    value: {
      type: "text",
    },
  },
});

export default ApiKeySchema;
