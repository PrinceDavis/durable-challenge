import { Request, Response, NextFunction} from 'express'

/**
 * Secure our application from server side scriptiing attack
 * @param req
 * @param res
 * @param next
 * @returns
 */
export function security(req: Request, res: Response, next: NextFunction) {
  res.removeHeader('X-Powered-By');

  if (decodeURIComponent(req.url).includes('<script>')) {
    return res.status(406).end('Illegal component in URI');
  }

  next();
}