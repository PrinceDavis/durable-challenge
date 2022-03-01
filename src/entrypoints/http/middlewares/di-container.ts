import { Response, NextFunction } from 'express'
import { diContainer } from '../../di-container'

export function registerDiContainer(req: any, res: Response, next: NextFunction) {
  req.diContainer = diContainer;

  next();
}