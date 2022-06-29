import jwt from "jsonwebtoken";
import ApiKeySerice from "../services/api-key.service";

export const checkAuthorization = async (authorization?: string) => {
  const apiKeyService = new ApiKeySerice();
  try {
    if (typeof authorization !== "undefined") {
      const token = authorization.split(" ")[1];

      jwt.verify(token, "someSecret");
      const apiKeyExists = await apiKeyService.exists(token);

      if (!apiKeyExists) return false;

      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
