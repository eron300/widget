import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log("HTTP server running!");
});

//SQLite
//Prisma é um orm, facilita trabalhar com operações com o banco de dados... converte js em sql uma forma de abstrair a nossa comunicação dom o bd
