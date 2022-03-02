import { createContainer, asValue, asClass } from "awilix"
import { SearchGithubRepoWithMongodb } from '../usecases'
import {  Logger, config } from '../adapters'

export const diContainer = createContainer();

diContainer.register({
  searchGithubRepoWithMongodb: asClass(SearchGithubRepoWithMongodb).singleton(),
  logger: asValue(Logger),
  config: asValue(config),
});
