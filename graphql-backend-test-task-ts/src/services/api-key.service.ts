import AppDataSource from "../database/data-source";
import jwt from "jsonwebtoken";
import ApiKey from "../entities/api-key.entity";
import { Service } from "typedi";

@Service()
export default class ApiKeyService {
  private apiKeyRepository = AppDataSource.getRepository(ApiKey);

  async addNewApiKey(name: string) {
    const apiKey = new ApiKey();

    apiKey.name = name;
    apiKey.value = jwt.sign({ name }, "someSecret");

    return await this.apiKeyRepository.save(apiKey);
  }

  async exists(apiKey: string) {
    const apiKeyExists = await this.apiKeyRepository.findOne({
      where: { value: apiKey },
    });
    if (apiKeyExists) return true;
    return false;
  }
}
