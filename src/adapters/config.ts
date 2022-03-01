import dotenv from 'dotenv';
import joi from 'joi';

type  ServerI  = {
  processType: string
  port: number
}

type  ConfigI = {
  server: ServerI
}

dotenv.config();

const schema = joi
  .object({
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
    port: value.PORT,
  }
};
