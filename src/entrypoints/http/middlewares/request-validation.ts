import { Request, Response, NextFunction} from 'express'
import Joi from 'joi';

/**
 * Validate get request query parametrs
 * @param req
 * @param res
 * @param next
 * @returns
 */
export function validateQueryInputs(req: Request, res: Response, next: NextFunction) {
  const schema = Joi.object({
    sortOrder: Joi.string().valid('desc', 'asc'),
    searchString: Joi.string(),
    pageSize: Joi.number(),
    sortBy: Joi.string(),
    page: Joi.number(),
  }).required();

  const { error } = schema.validate(req.query);

  if (error) {
    return res.status(403).json({
      error: error.message,
    });
  }

  next();
}


