import { NextFunction, Request, Response } from 'express';

// Interface for the wrapped function
interface AsyncRequestHandler {
  (req: Request, res: Response, next: NextFunction): Promise<void> | void;
}

// Type alias for the middleware function
type AsyncHandlerT = (fn: AsyncRequestHandler) => AsyncRequestHandler;

/**
 * This function is a middleware function for Express applications.
 * It wraps an asynchronous request handler function and adds error handling.
 * The wrapped function can either be synchronous or asynchronous.
 *
 * @param {AsyncRequestHandler} fn - The AsyncRequestHandler function to be wrapped
 * @returns {AsyncRequestHandler} - A new AsyncRequestHandler function
 *
 * @example
 * ```javascript
 * import asyncHandler from './asyncHandler';
 *
 * const myHandler = async (req, res, next) => {
 *   // Do something with the request
 *   res.json({ message: 'Success' });
 * };
 *
 * app.get('/api/data', asyncHandler(myHandler));
 * ```
 */
const asyncHandler: AsyncHandlerT =
  (fn) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      res.status(500).send(error); // Send the error for debugging
    }
  };

export default asyncHandler;
