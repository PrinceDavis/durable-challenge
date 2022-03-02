import { SearchGithubRepoWithMongodb } from '../../usecases';
import { validateQueryInputs } from './middlewares'
import HttpStatus from 'http-status'
import { Router } from 'express';

export const router = Router();

/**
 * Handle get request to retrieve a user expense data
 */
 router.get('/search', validateQueryInputs, async function search(req:any, res) {
  const query = {
    searchString: <string>req.query.searchString,
    pageSize: Number(<string>req.query.pageSize),
    sortOrder: <string>req.query.sortOrder,
    page: Number(<string>req.query.page),
    sortBy: <string>req.query.sortBy,
  };
  const handler = <SearchGithubRepoWithMongodb> req.diContainer.resolve('searchGithubRepoWithMongodb')

try {
  const data = await handler.execute(query)
  res.json(data)
} catch (error: any) {
  res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
    error: "Internal Server Error",
    message: error.message,
  })
}


});