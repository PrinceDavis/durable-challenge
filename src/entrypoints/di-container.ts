import { createContainer, asValue, asClass } from "awilix";
import {  Logger, config } from '../adapters';

export const diContainer = createContainer();

diContainer.register({
  logger: asValue(Logger),
  config: asValue(config),
});
