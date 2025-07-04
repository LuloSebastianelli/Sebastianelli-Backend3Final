import { Command, Option } from "commander";
let mode = "dev";
const program = new Command();
import { __dirname } from "../utils/utils.js";

program
  .addOption(new Option("--test <archivo>", "Archivo de test"))
  .addOption(
    new Option("--mode <mode>", "Mode").choices(["dev", "prod"]).default("dev")
  );

// Cargar archivo .env correspondiente
process.loadEnvFile(mode === "prod" ? "./.env.prod" : "./.env.dev");

console.log("Options:", program.opts());
export default {
  PORT: process.env.PORT || 8080,
  MONGO_URL: process.env.MONGO_URL || "",
  SIGN_COOKIE: process.env.SIGN_COOKIE || "",
  JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY || "",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || 86400,
  FRONTEND_DEV_URL: process.env.FRONTEND_DEV_URL || "",
  mode: mode,
};
