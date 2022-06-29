import jwt from "jsonwebtoken";
import { exists } from "../services/api-key.service.js";

export const checkAuthorization = (authorization) => {
  try {
    if (typeof authorization !== "undefined") {
      const token = authorization.split(" ")[1];

      jwt.verify(token, "someSecret");
      const apiKeyExists = exists(token);

      if (!apiKeyExists) return false;

      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
