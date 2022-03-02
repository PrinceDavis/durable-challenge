import { Response, NextFunction } from 'express'
import { diContainer } from '../../di-container'

/**
 * Register Dependency Injection handler to the request object so I can be used
 * in our countroller layer
 * @param req
 * @param res
 * @param next
 */
export function registerDiContainer(req: any, res: Response, next: NextFunction) {
  req.diContainer = diContainer;

  next();
}