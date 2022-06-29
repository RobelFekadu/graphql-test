import { ApiKey } from "../models/api-key.model.js";
import AppDataSource from "../database/data-source.js";
import jwt from "jsonwebtoken";

const apiKeyRepository = AppDataSource.getRepository(ApiKey);

export const addNewApiKey = async (name) => {
  const apiKey = new ApiKey();

  apiKey.name = name;
  apiKey.value = jwt.sign({ name }, "someSecret");

  return await apiKeyRepository.save(apiKey);
};

export const exists = async (apiKey) => {
  const apiKeyExists = await apiKeyRepository.findOne({
    where: { value: apiKey },
  });
  if (apiKeyExists) return true;
  return false;
};
