import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./app";
import dbConfig from "./db/ormconfig";

createConnection(dbConfig).then(() => {
  const PORT = process.env.PORT ?? 3000;
  console.log("Database connected");
  app.listen(process.env.PORT || 3000);
}).catch((err) => console.log(err));
