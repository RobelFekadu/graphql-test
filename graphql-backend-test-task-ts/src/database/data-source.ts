import { DataSource } from "typeorm";
import ApiKey from "../entities/api-key.entity";

const AppDataSource = new DataSource({
  type: "better-sqlite3",
  database: "../../data/graphql-backend-test-task-db.sqlite",
  entities: [ApiKey],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source Initialized");
  })
  .catch((err) => {
    console.error(err);
  });

export default AppDataSource;
