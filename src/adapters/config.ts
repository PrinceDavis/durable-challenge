import dotenv from 'dotenv';
import joi from 'joi';

type  ServerI  = {
  processType: string
  port: number
  nodeEnv: string
}

type  ConfigI = {
  server: ServerI
}

dotenv.config();

const schema = joi
  .object({
    NODE_ENV: joi
      .string()
      .allow("production", "development", "test")
      .required(),
    PROCESS_TYPE: joi.string().allow("web", "worker").required(),
    PORT: joi.number().required(),
  })
  .unknown()
  .required();

const { error, value } = schema.validate(process.env);

if (error) throw new Error(`Config validation failed ${error.message}`);

export const config: ConfigI = {
  server: {
    processType: value.PROCESS_TYPE,
    nodeEnv: value.NODE_ENV,
    port: value.PORT,
  }
};
